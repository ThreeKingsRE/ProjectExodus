import { formatMeetingTime } from '@/lib/discussions/meetings'

export interface MeetingLike { startsAt: string; timezone: string | null; timeKnown: boolean }

/** "Tue, Dec 9 · 7:00 PM EST", or just the date when the time isn't published. */
export function whenText(m: MeetingLike): string {
  const full = formatMeetingTime(m.startsAt, m.timezone)
  if (m.timeKnown) return full
  return `${full.split(' · ')[0]} · time not posted`
}

/** The calendar day (YYYY-MM-DD) a meeting falls on, in the meeting's own timezone. */
export function dayKey(m: MeetingLike): string {
  try { return new Date(m.startsAt).toLocaleDateString('en-CA', { timeZone: m.timezone || undefined }) } catch { return m.startsAt.slice(0, 10) }
}
