import { auth } from '@/auth'
import { CommunityTabLanding } from '@/components/community/CommunityTabLanding'
import DiscussionsContent from './DiscussionsContent'

export default async function Page() {
  const session = await auth()
  if (!session?.user?.id) return <CommunityTabLanding tab="discussions" />
  return <DiscussionsContent />
}
