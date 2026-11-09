# Project Exodus: To-Do

Running list of agreed next steps. Check items off in the PR that does them.

## Your manual steps (things only you can do)
Most keys may already exist in your **old** Vercel project or in each service's dashboard. Paste them into the new project under Settings → Environment Variables (all environments), then redeploy once at the end.

**Fix what's broken now**
- [ ] Image uploads: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (Config), `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` (cloudinary.com → Dashboard)
- [ ] Live messages and notifications: `NEXT_PUBLIC_PUSHER_KEY`, `NEXT_PUBLIC_PUSHER_CLUSTER` (Config), `PUSHER_APP_ID`, `PUSHER_SECRET` (pusher.com → your Channels app → App Keys)
- [ ] Sage's AI: `GROQ_API_KEY` (free, console.groq.com) and/or `ANTHROPIC_API_KEY` (console.anthropic.com; best answers). Without either, Sage gives canned replies
- [ ] Decide about old accounts: they're in your old database (probably TKRDB). Bring them back (with Claude), or keep the fresh start
- [ ] Make your own account admin (with Claude; needs the database)

**Protect the site**
- [ ] `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (upstash.com, free): real rate limits
- [ ] Turn on 2FA for your Vercel account (Vercel keeps prompting for it)
- [ ] `CRON_SECRET`: random string from generate-secret.vercel.app/32

**Email (sign-up verification, password reset)**
- [ ] Resend account + verify your domain's DNS records + `RESEND_API_KEY`, `EMAIL_FROM`, `NEXT_PUBLIC_SITE_URL=https://projxodus.com` (see `docs/SETUP_GUIDE.md` Part 4)

**Optional / later**
- [ ] Live document collaboration: PartyKit (do together with Claude)
- [ ] Social sign-in: Google / GitHub / Facebook / Apple client IDs and secrets
- [ ] `GOOGLE_AI_API_KEY` (Gemini, older backup for some AI features)
- [ ] Old Vercel project: once nothing points at it any more, delete it so there's one source of truth

## Bookmarked (next up)
- [x] **Merged onto the July code** (Nov 9). The production branch was fast-forwarded (Nov 8) to `claude/find-recent-branch-f4nVq` (July 5, 2026), the real current site. This branch was built on the older Feb 12 code, so its 28 commits must be merged on top of July (322 files differ; expect overlaps in architecture, community, auth) before anything here goes live.
- [ ] **Check `claude/update-exodus-site-D5jxe`** (Feb 17): 42 commits (Sage arc animation, newspaper-style community page) not in the July line. Decide whether they were superseded or should be brought over.
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
- [x] **Speed pass 1** (Nov 9): home page HTML 2.9 MB → 154 KB (skyline is now a cached image), Pusher server SDK out of every page (~0.5 MB), architecture data on demand, phones get the flat map instead of the 3D globe (3.1 MB → 1.3 MB of code)
- [ ] **Speed pass 2**: pages that fetch their own API over HTTP (articles, products, profiles, forum, vendors) should query the database directly (one less round trip, and no `NEXT_PUBLIC_API_URL` needed); Google Fonts via `next/font`; trim the 570 KB stylesheet
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
