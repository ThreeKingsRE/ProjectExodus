import { redirect } from 'next/navigation'
import { SHOP_PAGES_LIVE } from '@/lib/features'

// The product directory is switched off until products exist (lib/features.ts).
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  if (!SHOP_PAGES_LIVE) redirect('/')
  return children
}
