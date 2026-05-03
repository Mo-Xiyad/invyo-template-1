import type { IncomingMessage } from "node:http";
import type { Plugin } from "vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { parseRsvpBody, slackTextFromRsvp } from "./api/lib/rsvpShared";

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function rsvpApiDevPlugin(mode: string): Plugin {
  return {
    name: "rsvp-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathOnly = req.url?.split("?")[0] ?? "";
        if (pathOnly !== "/api/rsvp") {
          return next();
        }

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
          res.setHeader("Access-Control-Allow-Headers", "content-type");
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "method" }));
          return;
        }

        const env = loadEnv(mode, process.cwd(), "");
        const webhook = env.SLACK_WEBHOOK_URL;
        if (!webhook) {
          res.statusCode = 503;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "not_configured" }));
          return;
        }

        let bodyText: string;
        try {
          bodyText = await readRequestBody(req);
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "json" }));
          return;
        }

        let jsonBody: unknown;
        try {
          jsonBody = JSON.parse(bodyText || "{}");
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "json" }));
          return;
        }

        const parsed = parseRsvpBody(jsonBody);
        if (!parsed.ok) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: parsed.error }));
          return;
        }

        const text = slackTextFromRsvp(parsed.data);
        try {
          const slackRes = await fetch(webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
          });
          if (!slackRes.ok) {
            res.statusCode = 502;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "slack" }));
            return;
          }
        } catch {
          res.statusCode = 502;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "slack" }));
          return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: true }));
      });
    },
  };
}

function ogImageUrlPlugin(mode: string) {
  return {
    name: "og-image-url",
    transformIndexHtml(html: string) {
      const env = loadEnv(mode, process.cwd(), "");
      const base = (env.VITE_SITE_URL ?? "").replace(/\/$/, "");
      const url = base ? `${base}/logo.png` : "/logo.png";
      return html.replaceAll("%OG_IMAGE_URL%", url);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), ogImageUrlPlugin(mode), rsvpApiDevPlugin(mode)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
