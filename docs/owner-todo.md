# Owner to-do list (reminders)

Things only the owner can do (they need the owner's accounts). Claude sessions
remind the owner of every open item at the end of each reply until the owner
confirms it is done. When the owner confirms an item, move it to Done with the
date; never mark one done without the owner's confirmation.

## Open

1. **Reset the Neon database password** (urgent). The old `neondb_owner` password is in the public repo's history. Neon → project → Roles → `neondb_owner` → Reset password; put the new connection string in Vercel → Settings → Environment Variables → `DATABASE_URL` (and any other variable using it), then Redeploy. Consider making the repo private (GitHub → Settings → Danger Zone → Change visibility).
2. **Close PR #5** on GitHub ("Build Riverknoll Renewal initiative", the old custom-page version). Close, don't merge.
3. **Feature the Riverknoll survey**: Riverknoll → Surveys → on the linked "Riverknoll housing survey" click FEATURE ON PAGE. Turns on the "Take the survey" button (not showing on the live page yet).
8. **Connect the Riverknoll form's results** (optional): in Google Forms → Responses → Link to Sheets; in the sheet File → Share → Publish to web → CSV; paste the link in Surveys → RESULTS on the linked survey (or Upload CSV if responses are sensitive).
4. **Check the "2-minute survey" wording** in Riverknoll's first update against the form's real length; edit the post if it's longer.
5. **Disconnect John's Vercel copy** of the project (it fails its builds).
6. **Set up PartyKit** if live co-editing in documents is wanted (documents otherwise work one person at a time with autosave).
7. **Check the Riverknoll QR code** on a phone (signed in).

## Done

- 2026-11-19: Riverknoll survey linked in the Surveys tab (owner confirmed).

- 2026-11-19: Riverknoll page edits (v12 workbook link, RIT 2026–27 rent paragraph, survey invite) — verified live.
