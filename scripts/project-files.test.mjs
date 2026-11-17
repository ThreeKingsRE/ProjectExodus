import test from 'node:test'
import assert from 'node:assert/strict'
const filesModule = await import('../lib/projects/files.ts')
const { canEditFile, canViewFile, canManageFiles, describeFileLink, fileForViewer, normalizeFileUrl, parseFileInput } = filesModule.default || filesModule

const base = {
  id: 'f1', projectId: 'p1', section: 'FINANCIALS', title: 'Budget', description: null,
  viewUrl: 'https://docs.google.com/spreadsheets/d/abc123/view',
  editUrl: 'https://docs.google.com/spreadsheets/d/abc123/edit',
  viewAccess: 'MEMBERS', editAccess: 'OWNERS', editorIds: [], isPinned: false, order: 0,
  createdById: 'owner', createdAt: new Date(0), updatedAt: new Date(0),
}
const owner = { userId: 'owner', role: 'OWNER', isCreator: true }
const admin = { userId: 'admin', role: 'ADMIN', isCreator: false }
const contributor = { userId: 'c1', role: 'CONTRIBUTOR', isCreator: false }
const follower = { userId: 'v1', role: 'VIEWER', isCreator: false }
const outsider = { userId: 'x', role: null, isCreator: false }

test('owners and admins manage; others do not', () => {
  assert.equal(canManageFiles(owner), true)
  assert.equal(canManageFiles(admin), true)
  assert.equal(canManageFiles(contributor), false)
  assert.equal(canManageFiles(follower), false)
})

test('non-members never see files; TEAM files hide from followers', () => {
  assert.equal(canViewFile(base, outsider), false)
  assert.equal(canViewFile(base, follower), true)
  assert.equal(canViewFile({ ...base, viewAccess: 'TEAM' }, follower), false)
  assert.equal(canViewFile({ ...base, viewAccess: 'TEAM' }, contributor), true)
  assert.equal(fileForViewer(base, outsider), null)
})

test('edit link goes only to people allowed to edit', () => {
  assert.equal(canEditFile(base, contributor), false)
  assert.equal(canEditFile({ ...base, editAccess: 'TEAM' }, contributor), true)
  assert.equal(canEditFile({ ...base, editAccess: 'TEAM' }, follower), false)
  assert.equal(canEditFile({ ...base, editAccess: 'SELECTED', editorIds: ['c1'] }, contributor), true)
  assert.equal(canEditFile({ ...base, editAccess: 'SELECTED', editorIds: ['v1'] }, follower), true)
  assert.equal(canEditFile({ ...base, editAccess: 'SELECTED', editorIds: ['v1'], viewAccess: 'TEAM' }, follower), false)
  assert.equal(canEditFile({ ...base, editUrl: null }, owner), false)

  const forContributor = fileForViewer(base, contributor)
  assert.equal(forContributor.openUrl, base.viewUrl)
  assert.equal(forContributor.canEdit, false)
  assert.equal(forContributor.manage, undefined)
  assert.equal(JSON.stringify(forContributor).includes('/edit'), false, 'edit link must not leak')

  const forOwner = fileForViewer(base, owner)
  assert.equal(forOwner.openUrl, base.editUrl)
  assert.equal(forOwner.manage.editUrl, base.editUrl)
})

test('only https links are accepted', () => {
  assert.equal(normalizeFileUrl('javascript:alert(1)'), null)
  assert.equal(normalizeFileUrl('http://example.com/a.pdf'), null)
  assert.equal(normalizeFileUrl('https://user:pw@example.com/'), null)
  assert.equal(normalizeFileUrl('//evil.com/x'), null)
  assert.equal(normalizeFileUrl('/projects/riverknoll-renewal/riverknoll-feasibility-v11.xlsx'), 'https://www.projxodus.com/projects/riverknoll-renewal/riverknoll-feasibility-v11.xlsx')
})

test('previews are built for known providers only', () => {
  assert.equal(describeFileLink(base.viewUrl).previewUrl, 'https://docs.google.com/spreadsheets/d/abc123/preview')
  assert.equal(describeFileLink(base.viewUrl).kind, 'sheet')
  assert.equal(describeFileLink('https://docs.google.com/presentation/d/xyz/edit#slide=1').kind, 'slides')
  assert.equal(describeFileLink('https://drive.google.com/file/d/F1/view?usp=sharing').previewUrl, 'https://drive.google.com/file/d/F1/preview')
  const hosted = describeFileLink('https://www.projxodus.com/projects/riverknoll-renewal/riverknoll-pitch-v18.pptx')
  assert.equal(hosted.kind, 'slides')
  assert.match(hosted.previewUrl, /^https:\/\/view\.officeapps\.live\.com\/op\/embed\.aspx\?src=/)
  assert.equal(describeFileLink('https://contoso.sharepoint.com/:x:/g/personal/a/Eabc').previewUrl, null)
  assert.equal(describeFileLink('https://contoso.sharepoint.com/:x:/g/personal/a/Eabc').kind, 'sheet')
  assert.equal(describeFileLink('https://example.com/whatever').previewUrl, null)
  assert.match(describeFileLink('https://www.figma.com/file/k/Name').previewUrl, /^https:\/\/www\.figma\.com\/embed\?/)
})

test('input validation', () => {
  assert.equal(parseFileInput({ section: 'NOPE', title: 'x', viewUrl: 'https://a.com' }, false).ok, false)
  assert.equal(parseFileInput({ section: 'PITCH', title: '', viewUrl: 'https://a.com' }, false).ok, false)
  assert.equal(parseFileInput({ section: 'PITCH', title: 'Deck', viewUrl: 'ftp://a.com' }, false).ok, false)
  const ok = parseFileInput({ section: 'PITCH', title: ' Deck ', viewUrl: 'https://a.com/d', editUrl: '' }, false)
  assert.equal(ok.ok, true)
  assert.equal(ok.data.title, 'Deck')
  assert.equal(ok.data.editUrl, null)
  assert.equal(ok.data.editAccess, 'OWNERS')
  const partial = parseFileInput({ isPinned: true }, true)
  assert.deepEqual(partial, { ok: true, data: { isPinned: true } })
})
