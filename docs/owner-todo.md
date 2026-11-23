# Owner to-do list (reminders)

Things only the owner can do (they need the owner's accounts). Claude sessions
remind the owner of every open item at the end of each reply until the owner
confirms it is done. When the owner confirms an item, move it to Done with the
date; never mark one done without the owner's confirmation.

## Open

1. **Reset the Neon database password** (urgent). The old `neondb_owner` password is in the public repo's history. Neon → project → Roles → `neondb_owner` → Reset password; put the new connection string in Vercel → Settings → Environment Variables → `DATABASE_URL` (and any other variable using it), then Redeploy. Consider making the repo private (GitHub → Settings → Danger Zone → Change visibility).
2. **Close PR #5** on GitHub ("Build Riverknoll Renewal initiative", the old custom-page version). Close, don't merge.
5. **Disconnect John's Vercel copy** of the project (it fails its builds).
6. **Set up PartyKit** if live co-editing in documents is wanted (documents otherwise work one person at a time with autosave).
7. **Check that sign-up emails are set up in Vercel** so My Career vouches can be confirmed: `RESEND_API_KEY`, `EMAIL_FROM` (a sender on your verified domain) and `NEXT_PUBLIC_SITE_URL=https://www.projxodus.com`. Without them a signer sees "we couldn't send the confirmation email" and no seal appears. See `docs/SETUP_GUIDE.md` Part 4.

## Done

- 2026-11-19: "2-minute survey" wording in Riverknoll's first update checked; accurate since the open-ended questions are optional (owner confirmed).

- 2026-11-19: Riverknoll QR code checked on a phone and working (owner confirmed).

- 2026-11-19: Riverknoll survey featured on the page and its results sheet connected (owner confirmed).

- 2026-11-19: Riverknoll survey linked in the Surveys tab (owner confirmed).

- 2026-11-19: Riverknoll page edits (v12 workbook link, RIT 2026–27 rent paragraph, survey invite) — verified live.
