# Riverknoll Renewal implementation and revision workflow

Riverknoll Renewal is an independent Heartwright project for Project Exodus, separate from EldersDEN.

## Public overview and participation

- `/community/projects/riverknoll-renewal`: public proposal, design, research, interactive capital/lifecycle screen, sources, and downloadable review materials. It remains readable when the project database is unavailable.
- `/community/projects/riverknoll-renewal/community`: the existing project membership, research, discussions, and document workspace for this slug.
- `/api/initiatives/riverknoll-renewal`: safe participation summary (GET) and explicit site-admin activation (POST). POST checks the current database role, rejects cross-origin requests, and atomically creates the project, owner membership, and three starter discussions. Repeated activation reuses the existing record.

The overview is source-controlled. Workspace activation needs a configured production database and an authenticated ADMIN or SUPER_ADMIN. An administrator's click on “Activate community workspace” performs that creation; merely deploying or viewing the page does not create a record. Membership and discussions use normal site profiles; a generic proposal byline does not make contributor identities anonymous.

## Always update plan and page together

1. Edit `data/riverknoll-renewal.json`, the shared source for public narrative, requirements, assumptions, sources, and update notes. Increment its revision and record significant changes.
2. If a change affects calculations, update `lib/riverknoll-model.ts` and its meaningful model checks.
3. Run `npm run riverknoll:sync`. It generates both `docs/riverknoll/current-plan.md` and the matching public download; the page and template read the same JSON directly.
4. Run `npm run riverknoll:check` before a commit. CI checks synchronization and capacity/model boundary cases. Never commit a stale generated plan.
5. Update drawings, the detailed workbook, and decks when their underlying assumptions change. Until reissued, keep earlier documents labeled as a previous baseline; do not relabel them as current.

## This revision's refinements

- Continuous runoff path: gutter → screened inlet → sediment treatment → basin → overflow; study salt separation and winter operation.
- Connected design review: accessible units, bedroom privacy, shared space, retained trees/buildings, utilities, and construction access are evaluated with financial and scheduling effects.
- Target beds and retained beds are distinct. Unknown retained capacity is visibly flagged; the all-new estimate is provisional.
- Capital estimate carries the v11 cost build-up, including enabling work, soft costs, contingency, escalation, and financing.
- Debt capacity now applies an illustrative 1.20 debt-service coverage ratio. The old workbook omitted this factor. Income still includes the whole neighborhood, so retained revenue availability, operating records, and existing obligations need review.
- No maintenance savings or System 3E premium is invented. The wall-only energy screen is carried from v11 and explicitly separated from whole-building performance.

## Next coordinated review

Reconcile current inventory and retained capacity, obtain a measured base plan, draw accessible private-bedroom and shared-bedroom comparisons, validate the System 3E approval/supply/crew path, price two- and four-building summer packages, and request Riverknoll utility and maintenance records. Record each decision's consequences in architecture, costs, schedule, and public copy.
