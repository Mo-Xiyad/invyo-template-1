import { parseRsvpBody, slackTextFromRsvp } from "./lib/rsvpShared";

export const config = { runtime: "edge" };

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }
  if (request.method !== "POST") {
    return json({ error: "method" }, 405);
  }

  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    return json({ error: "not_configured" }, 503);
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ error: "json" }, 400);
  }

  const parsed = parseRsvpBody(raw);
  if (!parsed.ok) {
    return json({ error: parsed.error }, 400);
  }

  const text = slackTextFromRsvp(parsed.data);
  let slackRes: Response;
  try {
    slackRes = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch {
    return json({ error: "slack" }, 502);
  }

  if (!slackRes.ok) {
    return json({ error: "slack" }, 502);
  }

  return json({ ok: true }, 200);
}
