# Wedding invitation site

Private project for Omar & Layla Mansour.

## RSVP notifications (Slack)

RSVPs are posted to Slack via an [Incoming Webhook](https://api.slack.com/messaging/webhooks). When you add the webhook to your workspace, choose the channel where messages should appear (for example the channel that opens from your Slack archive link).

Set `SLACK_WEBHOOK_URL` to that webhook URL: in **Vercel** → Project → Settings → Environment Variables (Production), or in `.env.local` for local `npm run dev`. The webhook URL must stay secret and is only read on the server, never exposed in the browser.

Local development forwards `POST /api/rsvp` through the Vite dev server. Production uses the Edge function in `api/rsvp.ts` on Vercel.
