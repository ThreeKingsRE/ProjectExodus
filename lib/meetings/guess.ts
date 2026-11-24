// Finding a place's official calendar from its NAME, with no link. Many cities,
// counties and towns publish through Legistar at https://{name}.legistar.com, so we
// try the usual spellings and then check the result really belongs to this place
// (a "denver" calendar must not be attached to Denver, Iowa). Pure; fetching is in server.ts.

export interface GuessPlace { kind: string; name: string; govType: string | null; state: string | null; stateName: string | null }

const squash = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, 'and').replace(/^(saint|st\.?) /, 'saint ').replace(/[^a-z0-9 ]/g, '').trim()

/** Likely Legistar names for a place, most likely first. Names that already carry the state are
 *  marked `qualified`: they can only mean this state's place, so they are safe to trust. */
export function legistarGuesses(p: GuessPlace): { client: string; qualified: boolean }[] {
  const base = squash(p.name.replace(/\s+(city|town|township|village|borough|county)$/i, ''))
  if (base.length < 3) return []
  const j = base.replace(/ /g, ''), d = base.replace(/ /g, '-'), st = (p.state ?? '').toLowerCase()
  const out: { client: string; qualified: boolean }[] = []
  const add = (client: string, qualified = false) => { if (/^[a-z0-9][a-z0-9-]{1,39}$/.test(client) && !out.some((o) => o.client === client)) out.push({ client, qualified }) }
  if (p.kind === 'COUNTY') {
    add(`${j}county`); add(`${d}-county`); add(`countyof${j}`); add(`${j}county${st}`, true); add(`${j}${st}`, true); add(`${j}-${st}`, true)
  } else {
    if (st) { add(`${j}${st}`, true); add(`${j}-${st}`, true); add(`cityof${j}${st}`, true); add(`${d}-${st}`, true) }
    add(j); add(d); add(`cityof${j}`); add(`${j}city`)
    if (p.kind === 'TOWNSHIP' || /township|town|village|borough/.test(p.govType ?? '')) { add(`townof${j}`); add(`villageof${j}`); add(`${j}township`); add(`${j}twp`); add(`${j}borough`) }
  }
  return out.slice(0, 12)
}

/** Does what a Legistar site publishes (locations, board names) show it belongs to this place? */
export function looksLikeThisPlace(p: GuessPlace, texts: (string | null | undefined)[]): boolean {
  const hay = texts.filter(Boolean).join(' \n ').toLowerCase()
  if (!hay) return false
  const name = squash(p.name.replace(/\s+(city|town|township|village|borough|county)$/i, ''))
  const re = (s: string) => new RegExp(`(^|[^a-z])${s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`)
  if (!re(name).test(squash(hay).replace(/\s+/g, ' ')) && !re(name).test(hay)) return false
  if (p.kind === 'COUNTY' && !hay.includes('county')) return false
  const st = (p.state ?? '').toLowerCase()
  const inState = (st && new RegExp(`[,\\s]${st}\\b[\\s,.\\d]`).test(hay.replace(/\r?\n/g, ' ') + ' ')) || (p.stateName ? hay.includes(p.stateName.toLowerCase()) : false)
  return inState
}
