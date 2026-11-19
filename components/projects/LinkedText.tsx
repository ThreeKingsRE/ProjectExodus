import { splitLinks } from '@/lib/projects/linked-text'

/** Plain text with https links made tappable (opens in a new tab). */
export function LinkedText({ text, linkClassName = 'underline underline-offset-4 break-words' }: { text: string; linkClassName?: string }) {
  return <>{splitLinks(text).map((part, i) => 'href' in part
    ? <a key={i} href={part.href} target="_blank" rel="noreferrer" className={linkClassName}>{part.label}</a>
    : <span key={i}>{part.text}</span>)}</>
}
