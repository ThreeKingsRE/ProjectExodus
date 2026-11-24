// The directory of US governments, built from the Census Bureau's public reference
// files (no key needed): states, counties, incorporated places, and county
// subdivisions (New York "towns", Pennsylvania "townships"...). Only entries the
// Census marks as active governments (FUNCSTAT A) are kept. Pure, so it is testable.

export type Kind = 'FEDERAL' | 'STATE' | 'COUNTY' | 'PLACE' | 'TOWNSHIP'

export interface JurisdictionRow {
  key: string; kind: Kind; name: string; govType: string | null; fullName: string; slug: string
  state: string | null; stateName: string | null; countyName: string | null; countyKey: string | null
}

export const CENSUS_BASE = 'https://www2.census.gov/geo/docs/reference/codes2020/'
export const CENSUS_FILES = { states: 'national_state2020.txt', counties: 'national_county2020.txt', places: 'national_place_by_county2020.txt', cousubs: 'national_cousub2020.txt' }

const rows = (text: string) => text.split(/\r?\n/).slice(1).filter(Boolean).map((l) => l.split('|'))

export const slugify = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const GOV_RE = /^(.*?)\s+(city and borough|consolidated government|metropolitan government|metro government|unified government|urban county|city|town|village|borough|township|plantation|municipality)(\s+\(.*\))?$/i
export function splitGovName(full: string): { name: string; govType: string | null } {
  const m = full.match(GOV_RE)
  return m ? { name: m[1].trim(), govType: m[2].toLowerCase() } : { name: full, govType: null }
}

export const federalRow = (): JurisdictionRow => ({ key: 'us', kind: 'FEDERAL', name: 'United States', govType: null, fullName: 'United States (federal government)', slug: 'united-states', state: null, stateName: null, countyName: null, countyKey: null })

/** Build every directory row from the four Census files. Slugs are unique. */
export function buildDirectory(files: { states: string; counties: string; places: string; cousubs: string }): JurisdictionRow[] {
  const out: JurisdictionRow[] = [federalRow()]
  const used = new Set<string>(['united-states'])
  const unique = (base: string) => { let s = base, i = 2; while (used.has(s)) s = `${base}-${i++}`; used.add(s); return s }
  const stateName = new Map<string, string>()

  for (const [abbr, fp, , name] of rows(files.states)) {
    stateName.set(fp, name)
    out.push({ key: `st:${fp}`, kind: 'STATE', name, govType: null, fullName: name, slug: unique(slugify(name)), state: abbr, stateName: name, countyName: null, countyKey: null })
  }
  for (const [abbr, sfp, cfp, , name, , func] of rows(files.counties)) {
    if (func !== 'A') continue
    out.push({ key: `co:${sfp}${cfp}`, kind: 'COUNTY', name: name.replace(/\s+County$/, ''), govType: 'county', fullName: name, slug: unique(`${abbr.toLowerCase()}-${slugify(name)}`), state: abbr, stateName: stateName.get(sfp) ?? abbr, countyName: name, countyKey: `${sfp}${cfp}` })
  }
  const seenPlace = new Set<string>()
  for (const [abbr, sfp, cfp, county, pfp, , full, type, , func] of rows(files.places)) {
    if (func !== 'A' || type !== 'INCORPORATED PLACE') continue
    const key = `pl:${sfp}${pfp}`
    if (seenPlace.has(key)) continue // a city in two counties is listed twice
    seenPlace.add(key)
    const { name, govType } = splitGovName(full)
    out.push({ key, kind: 'PLACE', name, govType, fullName: full, slug: unique(`${abbr.toLowerCase()}-${slugify(county.replace(/\s+County$/, ''))}-${slugify(full)}`), state: abbr, stateName: stateName.get(sfp) ?? abbr, countyName: county, countyKey: `${sfp}${cfp}` })
  }
  for (const [abbr, sfp, cfp, county, cfpSub, , full, , func] of rows(files.cousubs)) {
    if (func !== 'A') continue
    const { name, govType } = splitGovName(full)
    out.push({ key: `cs:${sfp}${cfp}${cfpSub}`, kind: 'TOWNSHIP', name, govType, fullName: full, slug: unique(`${abbr.toLowerCase()}-${slugify(county.replace(/\s+County$/, ''))}-${slugify(full)}`), state: abbr, stateName: stateName.get(sfp) ?? abbr, countyName: county, countyKey: `${sfp}${cfp}` })
  }
  return out
}

const CAP = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase())

/** "Town of Brighton", "Monroe County", "New York" */
export function placeLabel(j: { kind: string; name: string; govType: string | null; fullName: string }): string {
  if (j.kind === 'FEDERAL' || j.kind === 'STATE') return j.name
  if (j.kind === 'COUNTY') return j.fullName
  if (j.govType && ['town', 'township', 'village', 'city', 'borough', 'plantation', 'municipality'].includes(j.govType)) return `${CAP(j.govType)} of ${j.name}`
  return j.fullName
}

/** "Monroe County, New York" */
export function placeSubtitle(j: { kind: string; countyName: string | null; stateName: string | null }): string {
  if (j.kind === 'FEDERAL') return 'Federal government'
  if (j.kind === 'STATE') return 'State government'
  return [j.kind === 'COUNTY' ? null : j.countyName, j.stateName].filter(Boolean).join(', ')
}

export const STATE_TZ: Record<string, string> = {
  AL: 'America/Chicago', AK: 'America/Anchorage', AZ: 'America/Phoenix', AR: 'America/Chicago', CA: 'America/Los_Angeles', CO: 'America/Denver',
  CT: 'America/New_York', DE: 'America/New_York', DC: 'America/New_York', FL: 'America/New_York', GA: 'America/New_York', HI: 'Pacific/Honolulu',
  ID: 'America/Denver', IL: 'America/Chicago', IN: 'America/New_York', IA: 'America/Chicago', KS: 'America/Chicago', KY: 'America/New_York',
  LA: 'America/Chicago', ME: 'America/New_York', MD: 'America/New_York', MA: 'America/New_York', MI: 'America/New_York', MN: 'America/Chicago',
  MS: 'America/Chicago', MO: 'America/Chicago', MT: 'America/Denver', NE: 'America/Chicago', NV: 'America/Los_Angeles', NH: 'America/New_York',
  NJ: 'America/New_York', NM: 'America/Denver', NY: 'America/New_York', NC: 'America/New_York', ND: 'America/Chicago', OH: 'America/New_York',
  OK: 'America/Chicago', OR: 'America/Los_Angeles', PA: 'America/New_York', RI: 'America/New_York', SC: 'America/New_York', SD: 'America/Chicago',
  TN: 'America/Chicago', TX: 'America/Chicago', UT: 'America/Denver', VT: 'America/New_York', VA: 'America/New_York', WA: 'America/Los_Angeles',
  WV: 'America/New_York', WI: 'America/Chicago', WY: 'America/Denver', PR: 'America/Puerto_Rico', GU: 'Pacific/Guam', VI: 'America/St_Thomas',
  AS: 'Pacific/Pago_Pago', MP: 'Pacific/Guam',
}
export const tzFor = (state: string | null | undefined) => (state && STATE_TZ[state]) || 'America/New_York'

/** Split "brighton ny" / "monroe county new york" into a name search and an optional state. */
export function parseSearch(q: string, states: { abbr: string; name: string }[]): { text: string; state: string | null } {
  let text = q.trim().replace(/[,]+/g, ' ').replace(/\s+/g, ' ')
  const lower = text.toLowerCase()
  for (const s of [...states].sort((a, b) => b.name.length - a.name.length)) {
    const n = s.name.toLowerCase()
    if (lower === n || lower.endsWith(` ${n}`)) return { text: text.slice(0, text.length - n.length).trim(), state: s.abbr }
  }
  const m = text.match(/^(.*?)\s*\b([A-Za-z]{2})$/)
  if (m && states.some((s) => s.abbr === m[2].toUpperCase()) && (m[1] || text.length === 2)) return { text: m[1].trim(), state: m[2].toUpperCase() }
  return { text, state: null }
}
