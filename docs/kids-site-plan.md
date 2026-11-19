# Plan: a separate kids' site for Elementary and Middle School

**Status:** planned. Nothing has been removed or moved yet; Elementary and Middle School editions stay on projxodus.com until the kids' site exists.

## What moves

The Elementary (ages 6–10) and Middle School (ages 11–13) editions of every Digital Scroll textbook, and anything built for those ages:

- The two reading levels in the book-opening "Reading Level" step (`components/learning/DigitalScroll/ScrollOpenAnimation.tsx`)
- Elementary and Middle School lesson text in the topic content (the `ELEMENTARY` and `MIDDLE_SCHOOL` keys in each module's `description`, `content` and `duration`)
- The "A kids' site is coming soon" notice on topic pages (`app/learn/topics/[slug]/TopicPageClient.tsx`)
- Kid-specific scroll pages and copy in `components/learning/DigitalScroll/DigitalScroll.tsx` (the playful elementary page texts)

High School, Undergraduate, Graduate and PhD stay on projxodus.com.

## Why separate

Young learners need a safer space: no public profiles, messaging, networking or open community features, with parent and teacher controls instead. A separate site keeps those rules simple and keeps the main site's community open.

## Steps when the domain is ready

1. Set up the kids' site (its own Vercel project or a separate app in this repo) and point the domain at it.
2. Copy the Elementary and Middle School content and the Digital Scroll reader to it, without accounts, messaging or community features.
3. On projxodus.com, replace the two levels in the Reading Level step with a link to the kids' site, and redirect old links that ask for those levels (`?level=elementary`, `?level=middle_school`).
4. Remove the kids' levels from the main site's content and progress data only after the kids' site is live and checked.

## Open question

The domain was written as "projxodus.kids.com". That would be part of kids.com, which belongs to someone else. Likely options are **kids.projxodus.com** (a subdomain of the site you already own, so no new domain to buy), **projxodus.kids** (if the .kids domain ending is available), or a new domain such as **projxoduskids.com**. Confirm which before setting anything up.
