import { auth } from '@/auth'
import { CommunityTabLanding } from '@/components/community/CommunityTabLanding'
import FishbowlContent from './FishbowlContent'

export default async function Page() {
  const session = await auth()
  if (!session?.user?.id) return <CommunityTabLanding tab="fishTank" />
  return <FishbowlContent />
}
