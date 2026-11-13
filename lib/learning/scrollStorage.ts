/**
 * Per-account local storage for the Digital Scroll.
 *
 * Notes, intentions, reading positions and local progress stay on the
 * reader's own device, but are kept separately for each signed-in account,
 * so on a shared or family computer one person never sees another's notes.
 *
 * Keys look like `exodus:u:<userId>:<key>` (or `exodus:guest:<key>` when
 * signed out). Data saved before scoping existed under the bare key is moved
 * once into the first scope that reads it, and the shared copy is removed.
 */

/** A storage scope: `u:<userId>`, `guest`, or null while the session is loading */
export type StorageScope = string | null

export function storageScopeFor(userId: string | null | undefined): string {
  return userId ? `u:${userId}` : 'guest'
}

export function scopedKey(scope: string, key: string): string {
  return `exodus:${scope}:${key}`
}

/** Read a scoped value, migrating an unscoped (legacy) value on first read. */
export function readScoped(scope: string, key: string): string | null {
  try {
    const scoped = scopedKey(scope, key)
    const value = localStorage.getItem(scoped)
    if (value !== null) return value

    const legacy = localStorage.getItem(key)
    if (legacy !== null) {
      localStorage.setItem(scoped, legacy)
      localStorage.removeItem(key)
      return legacy
    }
    return null
  } catch {
    return null // storage unavailable (private mode, blocked)
  }
}

export function writeScoped(scope: string, key: string, value: string): void {
  try {
    localStorage.setItem(scopedKey(scope, key), value)
  } catch (e) {
    console.error('Failed to save to storage:', e)
  }
}
