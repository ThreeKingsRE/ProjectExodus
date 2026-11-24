// Calendars that are connected for everyone out of the box, keyed by the Census
// identifiers in the directory. Anyone can add more on a place's page.

export interface KnownSource { key: string; kind: 'LEGISTAR' | 'LEGISTAR_HTML' | 'ICS'; ref: string; label: string }

export const KNOWN_SOURCES: KnownSource[] = [
  { key: 'pl:3663000', kind: 'LEGISTAR', ref: 'cityofrochester', label: 'City of Rochester official meetings' },
  { key: 'pl:4260000', kind: 'LEGISTAR_HTML', ref: 'phila', label: 'Philadelphia City Council (Legistar calendar)' },
]

/** Places whose websites turn away automatic readers: their meetings have to come from members. */
export const MEMBER_FED: Record<string, string> = {
  'cs:3605534099': 'Henrietta’s website blocks automatic readers',
  'cs:4209112968': 'Cheltenham Township’s website blocks automatic readers',
}
