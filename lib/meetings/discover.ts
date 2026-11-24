// Most town websites have a calendar feed but bury the link behind a "Subscribe",
// "iCal" or "Export" button. Given a calendar PAGE, find those links. Pure.

/** Candidate calendar-feed addresses found in a page, best guesses first. */
export function findCalendarLinks(html: string, pageUrl: string, max = 5): string[] {
  const found: { url: string; score: number }[] = []
  const add = (href: string, score: number) => {
    try {
      const u = new URL(href.replace(/&amp;/g, '&').trim().replace(/^webcals?:\/\//i, 'https://'), pageUrl)
      if (u.protocol === 'https:' && !found.some((f) => f.url === u.toString())) found.push({ url: u.toString(), score })
    } catch { /* not a link */ }
  }
  // <link rel="alternate" type="text/calendar" href="...">
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    if (/text\/calendar/i.test(m[0])) { const h = m[0].match(/href=["']([^"']+)["']/i); if (h) add(h[1], 0) }
  }
  for (const m of html.matchAll(/href=["']([^"']+)["']/gi)) {
    const h = m[1]
    if (/^webcals?:/i.test(h)) add(h, 1)
    else if (/\.ics(\?|#|$)/i.test(h)) add(h, 2)
    else if (/icalendar|[?&](ical|ics)=|\/ical(\/|\?|$)|format=ics|calendar\/export|export.*\.ics|ical\.php|ical_feed/i.test(h)) add(h, 3)
  }
  return found.sort((a, b) => a.score - b.score).slice(0, max).map((f) => f.url)
}

export const looksLikeCalendar = (text: string) => text.includes('BEGIN:VCALENDAR')
export const looksLikeHtml = (text: string) => /<html|<!doctype html|<body/i.test(text.slice(0, 2000))
