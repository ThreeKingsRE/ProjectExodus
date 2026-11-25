import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getCertificationRequirementIds, type CertPathId } from '@/lib/exodology/requirements'

// Type definitions for progress/certification records
type ProgressRecord = {
  pathId: string
  lessonId: string
  status: string
}

type CertRecord = {
  certificationId: string
}

// Certification requirements. Each path requires every openable lesson and a
// passed assessment for every module (lib/exodology/requirements.ts).
const CERTIFICATION_REQUIREMENTS = {
  foundations: { id: 'exodology-literacy', name: 'Exodological Literacy', pathId: 'foundations' as CertPathId },
  applied: { id: 'exodology-application', name: 'Exodological Application', pathId: 'applied' as CertPathId },
  strategic: { id: 'exodology-stewardship', name: 'Exodological Stewardship', pathId: 'strategic' as CertPathId },
  master: {
    id: 'exodology-master',
    name: 'Master Exodologist',
    requiredCerts: ['exodology-literacy', 'exodology-application', 'exodology-stewardship'],
    pathId: null
  }
}

/** How many of a path's required items the learner has completed, and how many there are. */
function pathCompletion(progress: ProgressRecord[], pathId: CertPathId) {
  const required = getCertificationRequirementIds(pathId)
  const done = new Set(
    progress.filter((p) => p.pathId === pathId && p.status === 'COMPLETED').map((p) => p.lessonId)
  )
  const completed = required.filter((id) => done.has(id)).length
  return { completed, required: required.length, met: completed === required.length }
}

// GET - Fetch user's certifications
export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const certifications = await prisma.exodologyCertification.findMany({
      where: { userId: session.user.id },
      orderBy: { issuedAt: 'desc' }
    })

    // Get progress to show what's close to completion
    const progress = await prisma.exodologyProgress.findMany({
      where: { userId: session.user.id }
    })

    // Calculate progress toward each certification
    const completion = {
      foundations: pathCompletion(progress, 'foundations'),
      applied: pathCompletion(progress, 'applied'),
      strategic: pathCompletion(progress, 'strategic')
    }
    const certProgress = {
      foundations: {
        completed: completion.foundations.completed,
        required: completion.foundations.required,
        earned: certifications.some((c: CertRecord) => c.certificationId === 'exodology-literacy')
      },
      applied: {
        completed: completion.applied.completed,
        required: completion.applied.required,
        earned: certifications.some((c: CertRecord) => c.certificationId === 'exodology-application')
      },
      strategic: {
        completed: completion.strategic.completed,
        required: completion.strategic.required,
        earned: certifications.some((c: CertRecord) => c.certificationId === 'exodology-stewardship')
      },
      master: {
        earned: certifications.some((c: CertRecord) => c.certificationId === 'exodology-master'),
        requirements: CERTIFICATION_REQUIREMENTS.master.requiredCerts
      }
    }

    return NextResponse.json({
      certifications,
      progress: certProgress
    })

  } catch (error) {
    console.error('Error fetching certifications:', error)
    return NextResponse.json({ error: 'Failed to fetch certifications' }, { status: 500 })
  }
}

// POST - Claim a certification (if requirements are met)
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { certificationId } = body

    if (!certificationId) {
      return NextResponse.json({ error: 'certificationId is required' }, { status: 400 })
    }

    // Check if already earned
    const existing = await prisma.exodologyCertification.findUnique({
      where: {
        userId_certificationId: {
          userId: session.user.id,
          certificationId
        }
      }
    })

    if (existing) {
      return NextResponse.json({ error: 'Certification already earned', certification: existing }, { status: 400 })
    }

    // Verify requirements based on certification type
    const progress = await prisma.exodologyProgress.findMany({
      where: {
        userId: session.user.id,
        status: 'COMPLETED'
      }
    })

    const existingCerts = await prisma.exodologyCertification.findMany({
      where: { userId: session.user.id }
    })

    let isEligible = false
    let pathId: string | null = null

    switch (certificationId) {
      case 'exodology-literacy':
        isEligible = pathCompletion(progress, 'foundations').met
        pathId = 'foundations'
        break
      case 'exodology-application':
        isEligible = pathCompletion(progress, 'applied').met
        pathId = 'applied'
        break
      case 'exodology-stewardship':
        isEligible = pathCompletion(progress, 'strategic').met
        pathId = 'strategic'
        break
      case 'exodology-master':
        isEligible = CERTIFICATION_REQUIREMENTS.master.requiredCerts.every(
          (reqCert: string) => existingCerts.some((c: CertRecord) => c.certificationId === reqCert)
        )
        pathId = null
        break
      default:
        return NextResponse.json({ error: 'Invalid certification ID' }, { status: 400 })
    }

    if (!isEligible) {
      return NextResponse.json({ error: 'Requirements not met' }, { status: 403 })
    }

    // Issue certification
    const certification = await prisma.exodologyCertification.create({
      data: {
        userId: session.user.id,
        certificationId,
        pathId
      }
    })

    return NextResponse.json({
      success: true,
      certification,
      message: `Congratulations! You've earned the ${
        certificationId === 'exodology-literacy' ? 'Exodological Literacy' :
        certificationId === 'exodology-application' ? 'Exodological Application' :
        certificationId === 'exodology-stewardship' ? 'Exodological Stewardship' :
        'Master Exodologist'
      } certification!`
    })

  } catch (error) {
    console.error('Error claiming certification:', error)
    return NextResponse.json({ error: 'Failed to claim certification' }, { status: 500 })
  }
}
