# Project Exodus: To-Do

Running list of agreed next steps. Check items off in the PR that does them.

## Bookmarked (next up)
- [ ] **Architecture expansion pack** toward 450+ elements (`docs/architecture-drawings/PLAN.md` §3). Adding an element is now one drawing function plus its data entry.
- [ ] **Deployment setup (Vercel + PartyKit + keys)**: follow `docs/SETUP_GUIDE.md` step by step
  - [ ] `ANTHROPIC_API_KEY` in Vercel (turns on Sage 2.0; without it Sage uses keyword fallback answers)
  - [ ] `PARTYKIT_SECRET`: same value in Vercel and PartyKit (live document collaboration stops without it)
  - [ ] `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (free Upstash database; rate limits are per-instance until set)
  - [ ] `RESEND_API_KEY` + `EMAIL_FROM` (verified domain) and `NEXT_PUBLIC_SITE_URL`
  - [ ] Confirm `DATABASE_URL`, `AUTH_SECRET` and the OAuth keys are set for production
  - [ ] Merge `claude/project-exodus-onboarding-tf3eo3` into the production branch
- [x] **3D redraws**: groin vault (worm's-eye), space frame, gazebo, yurt (cutaway), muqarnas (section seen from below)
- [ ] **Muqarnas 3D polish**: legible but still reads a little like a dome from outside; try deeper niche shading or a true perspective

## Security and reliability
- [x] **Email** (Resend): verification on sign-up, real resend, forgot/reset password. Needs the Resend keys to send
- [ ] **Newsletter emails**: confirmation and sending (templates exist in `lib/email/newsletter.ts`)
- [x] **Rate limiter in Redis** (Upstash REST, memory fallback). Needs the two Upstash keys above to take effect
- [x] **Deploys can no longer drop data**: removed `--accept-data-loss`, so a destructive schema change now fails the build instead of wiping data
- [ ] **Prisma migrations instead of `db push`**: baseline the production schema, then deploy with `prisma migrate deploy` (needs the production database)
- [ ] **Prisma 7 upgrade**: clears the last 3 high-severity audit findings (build-time tooling only)

## Product
- [ ] **Sustainability metrics for real products**: most seeded products have none, so Exodus scores and score filters stay empty until filled in
- [ ] **Marketplace page**: still "Under Construction"
- [ ] **Admin overhaul**: mostly built; needs a pass to see what works, then update its task file
- [ ] **Digital textbook** (`DIGITAL_TEXTBOOK_PLAN.md`): only partial components exist

## Engineering
- [x] **SEO basics**: titles and descriptions for every section, noindex on private areas, `robots.ts`, a default share image (the old one was a 404), per-article metadata with cover image
- [ ] **SEO next**: per-product and per-architecture-element share images; fix `og:url` to point at each page instead of the home page
- [ ] **Smoke tests** (Playwright): sign-up, publishing, documents, product directory; run in CI
- [ ] **Lint debt** (~1,950 warnings, mostly `any` and unescaped quotes); then turn the rules back to errors in `eslint.ci.config.mjs`
- [ ] **Server rendering**: about 79 pages are client-only and could render on the server
- [ ] **Refresh stale docs**: `CLAUDE.md`, `PROJECT_EXODUS_PROGRESS.md`

## Done (Nov 2026)
- [x] Hook crash bugs, water-calculator input loss, find-and-replace and canvas undo fixes
- [x] Dependency security bumps (28 vulnerabilities down to 3), Next 16 `proxy.ts`
- [x] CI workflow (typecheck, lint, drawings check, build)
- [x] PartyKit collaboration locked behind signed tokens
- [x] Product directory with filters, sorting and compare
- [x] Sage 2.0 on Claude with streaming and site search tools
- [x] Architecture data load cut by ~770 KB gz per page
- [x] All 239 architecture elements redrawn as technical sheets with source credits; legacy SVG registry removed
