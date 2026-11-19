import { auth } from '@/auth'
import { CommunityTabLanding } from '@/components/community/CommunityTabLanding'
import { PublicInitiativesGrid } from '@/components/community/PublicInitiativesGrid'
import ProjectsContent from './ProjectsContent'

export default async function Page() {
  const session = await auth()
  if (!session?.user?.id) return <CommunityTabLanding tab="initiatives"><PublicInitiativesGrid /></CommunityTabLanding>
  return <ProjectsContent />
}
