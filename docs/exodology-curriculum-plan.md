# Exodology curriculum: review and upgrade plan

Prepared Nov 25, 2026 on branch `claude/exodology-curriculum-upgrade`. Nothing here is live until the owner says to publish.

## What exists

- **Three paths, one per pillar.** Foundations (Literacy, 11 modules, 49 lessons), Applied (Application, 9 modules, 52 openable lessons plus 5 tools in development), Strategic (Stewardship, 10 modules, 46 openable lessons plus 7 tools in development). Top credential: Master Exodologist.
- **Lesson text.** About 130 lessons. The 54 lessons written to fill the Applied and Strategic outlines (`data/exodology-new-lessons`) and the 49 expanded lessons (`data/exodology-expanded-lessons`) run about 1,500 to 2,500 words each and carry references with links. Foundations modules 1 to 4 have no expanded versions (500 to 670 words), and most game, interactive and reflection lessons are 100 to 300 words.
- **Assessments.** All 30 modules have a multiple-choice knowledge check (6 to 10 questions, pass at 70%).
- **Platform.** Progress, notes, streaks, spaced review, certificates with a shareable page, glossary, bibliography, case studies, charter, ethics, style guide, timeline, community directory and discussions.

## What's strong

- A clear three-pillar structure (Literacy, Application, Stewardship) that maps cleanly onto beginner, intermediate and advanced levels.
- A distinctive core idea: exit as a designed, ethical act, sitting between reform and collapse. Real intellectual anchors exist for it (Hirschman's *Exit, Voice, and Loyalty*, 1970; sustainability transitions research such as Geels 2002 and Loorbach 2010; Ostrom on commons).
- The newer lessons are deep, consistent in voice, and cite real works.
- Assessment questions are written from each module's own text.

## What's weak or missing (priority order)

1. **Credibility.** (Names removed from the live site Nov 25, 2026, at the owner's request, since the people had not agreed to be named.) Several pages presented material as fact: named "practitioners" and authors (for example Dr. Elena Vasquez, Prof. Marcus Okonkwo, Dr. Sarah Lindqvist) with projects, working papers with download counts and peer-review status, an "Exodology Founding Committee", and dated milestones (charter adopted 2024, peer review 2025, practitioner networks 2026). Unless these are real, an academic reader who checks one will stop trusting the rest. Files: `data/exodology-practitioners.ts`, `data/exodology-papers.ts`, `data/exodology-founding.ts` (timeline), lesson f-m1-l1 ("It emerged as scholars and practitioners recognized…").
2. **Two definitions.** The curriculum, glossary and landing page say Exodology is "the study and practice of designing ethical exits from systems that no longer serve people or the planet". The Charter (Article 1) defines it as "the systematic study of how complex systems … undergo fundamental transformation from one stable state to another", which is the definition of transition studies, an existing field.
3. **Inconsistent facts across pages** (fixed on this branch): the landing page said Foundations was 8 modules over 4 weeks, Applied 12 over 6, Strategic 16 over 8, while the path pages say 11/6, 9/8 and 10/10; certification text said 80% to pass while assessments pass at 70%; the top credential was called both "Certified Exodologist" and "Master Exodologist"; every Exodology page had a generic eco-products meta description.
4. **Certification logic** (fixed on this branch): a certificate was issued once a learner had any 44, 36 or 40 completed records on a path, which did not match the 49, 52 and 46 openable lessons and did not require passing the module assessments. It now requires every openable lesson plus a passed assessment for every module, derived from the same outline the pages show.
5. **Requirements that nothing enforces.** Certificates list design projects, a portfolio, a capstone, and for Master a defended capstone approved by a peer review committee. There is no way to submit or review work, so these are either built or removed from the text.
6. **Outcomes and workload.** Lesson objectives exist, but no course-level learning outcomes, prerequisites or honest workload statement. Lessons plus module assessments add up to about 16, 19 and 18 hours for the three paths.
7. **Thin lessons.** Foundations modules 1 to 4 and the short activity lessons need the same depth and real readings as the rest.
8. **Twelve tools "in development"** (water calculator, microgrid tool, hybrid simulator, autonomy calculator, advisory role play; scale, policy, equity, risk, mass transition, institutional design and stewardship tools).

## Proposed curriculum

Keep the three paths and add one research course for the Master credential. Give each a course code, outcomes and hours.

| Code | Course | Pillar / level | Target hours | Credential |
|---|---|---|---|---|
| EXO 101 | Foundations of Exodology | Literacy, beginner | 30 | Exodological Literacy |
| EXO 201 | Applied Exodology | Application, intermediate (needs 101) | 30 | Exodological Application |
| EXO 301 | Strategic Exodology | Stewardship, advanced (needs 201) | 35 | Exodological Stewardship |
| EXO 401 | Exodology Research and Capstone | Master (needs all three) | 40 | Master Exodologist |

Hours = listed lesson time + required readings + two graded written assignments per course. Today the path pages show study time added up from the lessons and module assessments that exist (about 16, 19 and 18 hours), not the targets. Projxodus is not an accredited continuing-education provider, so the site states hours, not CEUs (IACET defines one CEU as ten contact hours), and says plainly that the courses are non-credit. Under the federal definition (34 CFR 600.2) a semester credit hour is one hour of instruction plus at least two hours of outside work per week for about fifteen weeks, so a three-credit course is roughly 135 hours. A college could grant credit only by adopting the course itself.

Each course gets 4 to 6 measurable outcomes (for example, EXO 101: "Distinguish exit, reform and collapse responses for a given system and justify the choice"), with every assessment item tagged to an outcome.

EXO 401 (new): research methods for exit studies (case study method, comparative analysis, interviews and ethics review), writing an Exodology case study, and a capstone reviewed by named reviewers the owner chooses. Its capstone replaces the unenforced "peer review committee" line.

## Upgrade order

1. Consistency and certification fixes (done on this branch).
2. One definition everywhere (done on this branch); named people and working papers removed from the live site; honest founding story and timeline still to do.
3. Course codes, outcomes, prerequisites and hours on the path pages; EXO 401 outline on the certifications page (done on this branch).
4. Expand Foundations modules 1 to 4 and the short activity lessons, with verified readings.
5. Written assignments with rubrics and a submission flow; then EXO 401.
6. Build the interactive tools, simplest first (water calculator, autonomy calculator).

## Sources checked

- 34 CFR 600.2, credit hour definition: https://www.law.cornell.edu/cfr/text/34/600.2 (read Nov 25, 2026)
- IACET, About the CEU: https://iacet.org/standards/ansi-iacet-2018-1-standard-for-continuing-education-and-training/continuing-education-unit-ceu/about-the-ceu/ (read Nov 25, 2026)
