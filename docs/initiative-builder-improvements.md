# Initiative builder improvement log

Working review: November 14, 2026. Recorded while preparing Riverknoll Renewal through the normal initiative tools as the signed-in creator. The initiative itself is account-owned database content, not a custom website route.

| Observation | Improvement prepared | Validation |
| --- | --- | --- |
| Locked Community entries could not be opened by guests. | Desktop and mobile links open public introductions; deeper tools and data require authentication. | Guest route and API checks; desktop/mobile review. |
| Public initiatives could not explicitly offer a safe web overview to visitors without accounts. | Opt-in **Allow public web view** in creation and editing. A reusable overview renders only selected saved fields. | Public projection excludes member lists, contact details, private config, messages, and research. |
| Private and draft wizard values were treated as public by the server. | Map these choices to unlisted storage; they cannot enable public web view. | Visibility boundary tests. |
| A shareable initiative needed more room than the 500-character summary. | A public story field supports paragraphs and HTTPS source links; creator can edit it later. | Plain React text rendering; no raw HTML. |
| Long creation sessions could lose their text on reload. | Account-scoped text draft saved on the current device; cleared after successful creation. Images and optional diagrams are not saved. | Explicit save status shown in the Launch step. |
| Link slugs were always generated with a timestamp. | Optional readable public slug with server validation and a clear duplicate-link error. | Lowercase letter/number/hyphen validation. |
| The join route wrote an obsolete `MEMBER` role. | Explicit Follow and Collaborate choices use current membership roles, prevent duplicates, preserve ownership, and respect prerequisites/approval. | Repeat-follow, promotion, ownership, and invitation tests. |
| The Research buttons had no posting action; fetched results had a different shape than the UI expected. | Inline research composer connected to the existing research endpoint; notes expand in place. | Response normalization and existing server contributor authorization. |
| A primary link’s label disappeared against its background in one theme. | Give the label an explicit contrasting foreground. | Visual review. |
| Sharing needed an initiative-specific title and image. | Public-view metadata and a reusable social image use saved initiative data; nonpublic records reveal none. | Public-only data selection. |

## Stage 3: comments on shared items (November 18, 2026)

Followers and the team can comment on files and timeline items (milestones, tasks, events): in the Shared tab, on Workspace file cards, and inside each calendar item. Whoever can see an item can comment on it: items shared with followers are open to followers and the team, team-only items to collaborators. Authors delete their own comments; moderators, admins and owners can remove any. Documents keep their existing comment system.

Security fix found along the way: document comments checked only `allowComments` (on by default) before posting, so any signed-in person who knew a document's ID could comment on a team-only document, and reading allowed unpublished public drafts. Reading and posting now follow the document view rule (creator, document collaborator, initiative team, or a shared published document).

## Launch checks still required

- Deploy the reusable platform changes to the project serving **www.projxodus.com**.
- Finish Riverknoll in the normal builder under the creator’s account; enable public web view, verify ownership, and inspect the saved result.
- Post source notes and discussion invitations through the initiative’s own controls.
- Verify its public link in a signed-out browser, including locked member tools and the social preview.
- Investigate missing password-reset delivery on the custom-domain deployment. The existing sender needs both `RESEND_API_KEY` and a verified `EMAIL_FROM`; do not claim delivery from a success screen alone.

## Further design/process opportunities

Done November 18, 2026: template cards are keyboard buttons (Enter/Space) with labels; image upload inputs are keyboard-reachable and Remove Cover shows on focus and touch; the Members tab loads the full member list (the API returns `{ members, roleCounts, total }`).


- Add server-backed drafts, image upload progress, and a final public/private preview before launch.
- Replace placeholder contact methods with a working, owner-configured contact path.
- Clarify prerequisites and pending collaboration requests in the participant controls.
- Test notification delivery end-to-end before promising email updates; following currently records account membership and interest.
