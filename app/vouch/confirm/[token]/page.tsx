import type { Metadata } from 'next'
import ConfirmVouch from './ConfirmVouch'

export const metadata: Metadata = { title: 'Confirm your vouch', robots: { index: false, follow: false } }

export default async function ConfirmPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ 'not-me'?: string }> }) {
  const { token } = await params
  const notMe = (await searchParams)['not-me'] === '1'
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-md px-3 py-10"><ConfirmVouch token={token} notMe={notMe} /></div>
    </div>
  )
}
