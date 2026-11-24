# Owner to-do list (reminders)

Things only the owner can do (they need the owner's accounts). Claude sessions
remind the owner of every open item at the end of each reply until the owner
confirms it is done. When the owner confirms an item, move it to Done with the
date; never mark one done without the owner's confirmation.

## Open

1. **Reset the Neon database password** (urgent). The old `neondb_owner` password is in the public repo's history. Neon → project → Roles → `neondb_owner` → Reset password; put the new connection string in Vercel → Settings → Environment Variables → `DATABASE_URL` (and any other variable using it, including the `LEGACY_PRISMA_*` ones marked "Needs Attention"), then Redeploy. Consider making the repo private (GitHub → Settings → Danger Zone → Change visibility).
2. **Close PR #5** on GitHub ("Build Riverknoll Renewal initiative", the old custom-page version). Close, don't merge.
5. **Disconnect John's Vercel copy** of the project (it fails its builds).
6. **Turn on live co-editing in Vercel.** The Cloudflare server is deployed and tested at `exodus-collab.projxodus.workers.dev`. In Vercel → Settings → Environment Variables (Production) add `NEXT_PUBLIC_PARTYKIT_HOST` = `exodus-collab.projxodus.workers.dev` and `PARTYKIT_SECRET` (the value Claude gave you in chat), then Redeploy. Afterwards, revoke the Cloudflare API token you made for Claude (Cloudflare → My Profile → API Tokens → ... → Delete).
8. **Add a `CRON_SECRET` environment variable in Vercel** (Settings → Environment Variables; any long random string, then Redeploy). It turns on the daily 7–8 AM Eastern job that sends the meeting reminders members asked for and refreshes the meeting calendars. Without it, calendars still update when someone views a town, but reminders won't send.

## Done

- 2026-11-24: Email sending works. Resend shows the password-reset email Sent and Delivered from accounts@projxodus.com, and the Vercel settings (RESEND_API_KEY, EMAIL_FROM, NEXTAUTH_URL) are correct (owner confirmed).

- 2026-11-24: The temporary "partykit" GitHub token was deleted (owner confirmed).

- 2026-11-19: "2-minute survey" wording in Riverknoll's first update checked; accurate since the open-ended questions are optional (owner confirmed).

- 2026-11-19: Riverknoll QR code checked on a phone and working (owner confirmed).

- 2026-11-19: Riverknoll survey featured on the page and its results sheet connected (owner confirmed).

- 2026-11-19: Riverknoll survey linked in the Surveys tab (owner confirmed).

- 2026-11-19: Riverknoll page edits (v12 workbook link, RIT 2026–27 rent paragraph, survey invite) — verified live.
