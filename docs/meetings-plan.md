# Meetings: the central hub for government meetings

Owner direction (Nov 2026): one place to find every town hall / board / council meeting in
every state and county: schedules that stay current, how to join, and (after the fact) the
agenda, minutes, recording and member notes. Government sites are hard to navigate; this is
the hub. Its own top-level menu item.

## Decisions
- **Start**: nationwide directory from day one, plus one region (Rochester / Monroe County, NY) filled in.
- **Personal calendar**: a blank canvas each member fills by following places (saved to their
  account). Visitors see a default: federal holidays (plus Election Day) and federal meetings.
- **Past meetings**: links (agenda, minutes, recording, official page) plus member notes. We
  link to official files, never host or copy them.
- **Links**: same safety rule as Discussions (meeting platforms, .gov, known town-meeting sites).

## Built (Phase 1)
- Directory: ~39,000 governments from the Census reference files (no key): 57 states/territories,
  3,116 counties, 19,558 incorporated places, 16,236 towns/townships. Lazy-seeded on first visit.
- Search by name, "brighton ny", "monroe county new york"; browse state > county > place.
- Personal calendar (month grid + day list + coming up), federal holidays toggle.
- Place pages: Upcoming / Past, follow, add a meeting, fill in a missing minutes/recording link,
  member notes, "Official calendars" status.
- Connectors: Legistar (verified before saving, e.g. `cityofrochester`) and iCal links, refreshed
  on view when stale (2 h) and daily by cron.
- Join links and calendar files for members only.

## Next
- More connectors (Granicus, BoardDocs, CivicPlus, state legislatures via OpenStates, Federal
  Register meeting notices for the federal default).
- Notifications / reminders for followed places; subscribe to a personal .ics feed.
- Report wrong info; verified-organizer badges; "claim this town".
- Better coverage tools: show which towns have no source and ask members to connect them.

## Limits to know
- No national feed exists. A town appears automatically only once its calendar is connected.
- Calendar (.ics) links are limited to known government / town-meeting hosts (SSRF safety).
- Time zones default to the state's main zone; a few states are split (TN, KY, ...).

## Environment
- `CRON_SECRET` (any long random string) in Vercel enables the daily refresh job
  (`/api/meetings/refresh`, 09:00 UTC). Without it, calendars still refresh when someone views them.
