# Discussions: community and town-hall plan

Owner direction (Nov 2026): Discussions is a messages-style feed that also hosts
local civic conversation: town halls, school boards, planning meetings. People post
the real meeting link (Zoom, Meet, Teams) or the agenda/calendar page and talk about it.
Think a local, calmer Facebook feed. Expect many discussions, so it must scale.

## Decisions so far
- **Follow**: following a discussion notifies you of new replies (and meeting changes);
  followed discussions collect in a **Following** tab. A separate private **star** saves a post.
- **Meeting links**: allow only known meeting platforms (Zoom, Google Meet, Microsoft Teams,
  Webex, YouTube/Facebook live) and government (.gov) pages for agendas/calendars. Refuse other
  links (scam protection in a political space).
- **Local**: town/region on posts (never a street address) with a "My town" filter; topic
  categories (town hall, school board, zoning, elections, environment...); a **Meetings** tab
  sorted by date (upcoming first, past archived).
- **Moderation, to start**: a short posting-rules agreement shown once before a member's
  first post (be specific, no personal attacks, cite sources). Report/hide and thread locking
  are NOT in the first cut (flag: worth adding before this grows).

## Phase 1: follow, save, meetings
- Follow button + notification on new replies; star to save; tabs: Everything / Following /
  Meetings / Saved.
- Meeting card on a discussion: title, date + time + timezone, Join button, agenda link,
  calendar link, "Add to my calendar" (.ics, reusing lib/calendar), upcoming/past badge.
- Link allowlist checked on the server (not just the form).
- Posting rules acceptance (stored on the user, shown once).

## Phase 2: local + categories
- Town/region field on posts; member sets "my town"; filter chips; topic categories.
- Meeting reminders to followers (day before / hour before) via a scheduled job.
- Past meetings move to an archive; recurring meetings (monthly board meeting) as a series.

## Phase 3: scale
- Cursor pagination and server-side search (today the feed loads 20 at a time but search
  filters only what is loaded).
- Server-side read state (the blue dot is per-phone today) for followed threads.
- Mute a thread; trending/most-active; lock a thread; report/hide queue.

## Data sketch
- SocialPost: meetingAt, meetingEndsAt, meetingTimezone, meetingJoinUrl, agendaUrl,
  calendarUrl, place (city/region), category.
- DiscussionFollow(postId, userId), DiscussionSave(postId, userId), unique per pair.
- User.discussionRulesAcceptedAt.
- Notification: new type DISCUSSION_REPLY (and MEETING_UPDATE).

## Open questions
- Show the Join link to signed-out visitors or only members? (Default: members only, so
  public posts don't expose meeting links to bots; the rest of the post stays public.)
- Who may post meetings: any member, or verified organizers / the town itself?
- Real-time replies (Pusher) once threads get busy.
