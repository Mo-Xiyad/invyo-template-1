export type RsvpStatus = "accept" | "maybe" | "decline";

export type RsvpPayload = {
  name: string;
  status: RsvpStatus;
  plusOne: boolean;
};

export function parseRsvpBody(raw: unknown): { ok: true; data: RsvpPayload } | { ok: false; error: string } {
  if (typeof raw !== "object" || raw === null) return { ok: false, error: "invalid" };
  const o = raw as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim().slice(0, 200) : "";
  if (!name) return { ok: false, error: "name" };
  const status = o.status;
  if (status !== "accept" && status !== "maybe" && status !== "decline") {
    return { ok: false, error: "status" };
  }
  const plusOne = Boolean(o.plusOne);
  return { ok: true, data: { name, status, plusOne } };
}

const STATUS_LABEL: Record<RsvpStatus, string> = {
  accept: "Joyfully Accept",
  maybe: "Maybe",
  decline: "Regretfully Decline",
};

function escapeSlack(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function slackTextFromRsvp(data: RsvpPayload): string {
  return [
    "*New wedding RSVP*",
    `*Name:* ${escapeSlack(data.name)}`,
    `*Response:* ${STATUS_LABEL[data.status]}`,
    `*Bringing a +1:* ${data.plusOne ? "Yes" : "No"}`,
  ].join("\n");
}
