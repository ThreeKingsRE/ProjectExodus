# Meeting jobs

Vercel runs two independent authenticated daily jobs from vercel.json:

- Calendar refresh: 08:00 UTC (3 a.m. EST / 4 a.m. EDT).
- Opted-in meeting reminders: 12:00 UTC (7 a.m. EST / 8 a.m. EDT).

Set CRON_SECRET in the Production environment and deploy. Both endpoints reject requests without the matching Bearer secret. The refresh response reports successful and failed source imports; the reminder response reports the existing reminder service counts. Reminder records prevent repeated delivery for the same member, meeting, and reminder window.

After deployment, verify both jobs under the Project Exodus Vercel Cron Jobs settings using Run and inspect their function logs. A 200 response verifies execution; zero reminders is expected when no opted-in member has an eligible meeting.
