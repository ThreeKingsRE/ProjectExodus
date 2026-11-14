import { auth } from '@/auth'
import { CommunityTabLanding } from '@/components/community/CommunityTabLanding'
import ProjectsContent from './ProjectsContent'

export default async function Page() {
  const session = await auth()
  if (!session?.user?.id) return <CommunityTabLanding tab="initiatives" />
  return <ProjectsContent />
}
