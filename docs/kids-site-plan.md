# Kids' site plan: kids.projxodus.com

Status: planned, nothing moved yet (owner decision, 2026-11-19).

Learners at **Elementary** and **Middle School** reading levels will eventually get
their own site at **kids.projxodus.com**. Until then everything stays where it is.

## Why a subdomain

- The owner already holds projxodus.com, so a subdomain costs nothing extra.
- "projxodus.kids.com" isn't possible: kids.com belongs to someone else.
- Sign-in, accounts and progress can be shared across both sites (same database,
  auth cookie scoped to `.projxodus.com`).

## What will move (later)

- Digital Scroll books at the Elementary and Middle School levels, their quizzes and games.
- A simpler, kid-safe shell: no community forums, direct messages, marketplace or
  public profiles; adult-reviewed content only.
- The reading-level picker on the main site will send younger levels to the kids' site.

## What stays on projxodus.com

- High School, Undergraduate, Graduate and PhD levels, and all community features.

## Before launch (checklist)

- [ ] Add the `kids.projxodus.com` domain in Vercel and DNS.
- [ ] Decide on parental consent / age gating (COPPA for under-13s in the US).
- [ ] Scope the auth cookie to `.projxodus.com` so one sign-in works on both.
- [ ] Route `kids.projxodus.com` to a kids layout (Next.js proxy host check).
- [ ] Redirect younger reading levels from the main site.
