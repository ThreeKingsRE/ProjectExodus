/**
 * Translation groundwork for connecting learners internationally.
 *
 * Today: posts and notes record the author's language, and readers get a
 * "Translate" link that opens the text in Google Translate (only when they
 * click it). Planned: built-in translation inside the Digital Scroll, so
 * shared notes and chapter discussions read in each learner's own language
 * without leaving the page.
 */

/** The reader's language (e.g. "en", "es"), from the browser. */
export function readerLanguage(): string {
  if (typeof navigator === 'undefined') return 'en'
  return (navigator.language || 'en').split('-')[0].toLowerCase()
}

/** The author's full browser language tag, saved with what they write. */
export function authorLanguageTag(): string | null {
  if (typeof navigator === 'undefined') return null
  return navigator.language || null
}

/** True when text written in `language` probably needs translating for this reader. */
export function needsTranslation(language: string | null | undefined): boolean {
  if (!language) return true // unknown: offer it
  return language.split('-')[0].toLowerCase() !== readerLanguage()
}

/** A Google Translate link for the text, into the reader's language. */
export function translateUrl(text: string, target = readerLanguage()): string {
  const q = new URLSearchParams({ sl: 'auto', tl: target, text: text.slice(0, 4000), op: 'translate' })
  return `https://translate.google.com/?${q}`
}
