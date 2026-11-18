import { prisma } from '@/lib/db'
import { sendEmail, siteUrl } from '@/lib/email/send'
import { normalizeEmail, type InvitableRole } from './access'

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

export class InviteError extends Error {
  constructor(message: string, public status = 400) { super(message) }
}

const ROLE_WORD: Record<InvitableRole, string> = { CONTRIBUTOR: 'a collaborator', MODERATOR: 'a moderator', ADMIN: 'an admin' }

/**
 * Invite someone (by account or email) to collaborate. Re-inviting updates the
 * pending invite instead of creating another. Emails the person when possible.
 */
export async function createInvite(opts: {
  projectId: string
  invitedById: string
  userId?: string | null
  email?: string | null
  role: InvitableRole
  message?: string | null
}) {
  const project = await prisma.project.findUnique({
    where: { id: opts.projectId },
    select: { id: true, name: true, slug: true, creatorId: true, creator: { select: { name: true } } },
  })
  if (!project) throw new InviteError('Initiative not found.', 404)

  let user: { id: string; email: string | null; name: string | null } | null = null
  let email: string | null = null
  if (opts.userId) {
    user = await prisma.user.findUnique({ where: { id: opts.userId }, select: { id: true, email: true, name: true } })
    if (!user) throw new InviteError('That person wasn’t found.')
  } else {
    email = normalizeEmail(opts.email)
    if (!email) throw new InviteError('Enter a valid email address or choose a person.')
    user = await prisma.user.findFirst({ where: { email: { equals: email, mode: 'insensitive' } }, select: { id: true, email: true, name: true } })
  }

  if (user) {
    if (user.id === project.creatorId) throw new InviteError('That’s the initiative’s owner.')
    const member = await prisma.projectMember.findUnique({ where: { projectId_userId: { projectId: project.id, userId: user.id } }, select: { role: true } })
    if (member && member.role !== 'VIEWER') throw new InviteError(`${user.name || 'That person'} is already on the team.`)
  }

  const message = typeof opts.message === 'string' ? opts.message.trim().slice(0, 1000) || null : null
  const existing = await prisma.projectInvite.findFirst({
    where: { projectId: project.id, status: 'PENDING', ...(user ? { invitedUserId: user.id } : { email }) },
    select: { id: true },
  })
  const data = { role: opts.role, message, invitedById: opts.invitedById }
  const invite = existing
    ? await prisma.projectInvite.update({ where: { id: existing.id }, data })
    : await prisma.projectInvite.create({
        data: { ...data, projectId: project.id, invitedUserId: user?.id ?? null, email: user ? null : email },
      })

  const to = user?.email ?? email
  let emailed = false
  if (to) {
    const inviter = (await prisma.user.findUnique({ where: { id: opts.invitedById }, select: { name: true } }))?.name || 'Someone'
    const link = `${siteUrl()}/community/projects/${project.slug}`
    const roleWord = ROLE_WORD[opts.role]
    const result = await sendEmail({
      to,
      subject: `${inviter} invited you to join ${project.name} on Project Exodus`,
      text: `${inviter} invited you to join "${project.name}" as ${roleWord}.${message ? `\n\n"${message}"` : ''}\n\nOpen the initiative to accept: ${link}${user ? '' : '\n\nSign up with this email address and the invitation will be waiting for you.'}`,
      html: `<p>${escapeHtml(inviter)} invited you to join <strong>${escapeHtml(project.name)}</strong> as ${roleWord}.</p>${message ? `<blockquote>${escapeHtml(message)}</blockquote>` : ''}<p><a href="${link}">Open the initiative to accept</a></p>${user ? '' : '<p>Sign up with this email address and the invitation will be waiting for you.</p>'}`,
    })
    emailed = result.sent
  }
  return { invite, emailed, invitedName: user?.name ?? email }
}

/** Pending invite for this user, matched by account or by their email. */
export async function findMyInvite(projectId: string, userId: string) {
  const me = await prisma.user.findUnique({ where: { id: userId }, select: { email: true } })
  const email = normalizeEmail(me?.email)
  return prisma.projectInvite.findFirst({
    where: {
      projectId,
      status: 'PENDING',
      OR: [{ invitedUserId: userId }, ...(email ? [{ email }] : [])],
    },
    select: { id: true, role: true, message: true, createdAt: true, invitedBy: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
  })
}
