import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m5-n1',
  title: 'The Reality of Partial Exit',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The image most people carry of exit is a clean break: one day you are inside a system, the next day you are outside it. In practice, almost no one exits that way. A household that installs solar panels usually stays connected to the grid. Members of a community-supported agriculture scheme still buy some food from shops. A worker cooperative still pays taxes, uses banks and sells into markets. Most real exits are partial.

Foundations introduced the **hybrid zone** of the response spectrum—the space where people reform some systems while building alternatives alongside them—and the idea of a **soft exodus**: a gradual, partial exit that maintains some connections while building alternatives. This module treats that zone not as a compromise to be apologized for, but as the place where most applied Exodology actually happens.

This lesson explains why partial exit is the norm, distinguishes deliberate partial exit from simply drifting between systems, and gives you a way to decide what to leave, what to keep, and on what terms. The next two lessons then turn to designing hybrid arrangements and managing the dual dependencies they create.`,

    sections: [
      {
        title: 'Why Most Exits Are Partial',
        content: `Several forces push almost every exit toward partiality.

**Structural dependence**: Many systems provide functions that cannot yet be met any other way at a reasonable cost—emergency healthcare, long-distance transport, legal recognition, some kinds of energy. Where structural dependence is deep, full exit would mean catastrophic loss, which is exactly what exit capability is meant to avoid.

**Interdependence**: Systems are tied to one another. Leaving the food system entirely would also mean leaving parts of the water, energy and money systems. A dependency map almost always shows that a single exit touches many other dependencies.

**Minimum viable systems**: Applied Exodology recommends starting with the smallest alternative that actually functions. By design, a minimum viable system covers some needs, not all of them, so the original system continues to carry the rest.

**Uneven exit friction**: Some dependencies are easy to replace and others are very hard. Rational exit strategies address low-friction, high-leverage dependencies first, which leaves a mixed picture for a long time.

**Relationships and duty**: People stay connected to systems because of family, work and community ties, and because residual duty may be better served by remaining partly inside.`
      },
      {
        title: 'Partial Exit Is Not Failed Exit',
        content: `It is easy to treat partial exit as a half-measure: either you have left or you have not. Exodology rejects that framing for three reasons.

First, the goal of Exodology is **exit capability**—the structural capacity to leave when needed without catastrophic loss—not maximal disconnection. A household that can meet its water needs for two weeks without the mains has gained real exit capability even though it still uses the mains every day.

Second, the style guide warns against **teleological framing**: the assumption that transitions have one inevitable endpoint. A partial exit may be a stage on the way to a fuller exit, or it may be a stable, deliberate end state in its own right. Both are legitimate outcomes, and which one fits depends on the system and the people involved.

Third, partial exit often reduces harm. Gradual transition preserves function during change, which is one of the main reasons managed exit is preferred to collapse. A partial exit that keeps critical functions running is closer to the Exodological ideal than a rapid, complete departure that leaves people exposed to post-exit precarity.`
      },
      {
        title: 'Drift Versus Deliberate Partial Exit',
        content: `Not all partiality is the same. The key distinction in this module is between **drift** and **deliberate partial exit**.

**Drift** happens when people end up between systems without a plan. They start an alternative, it covers some needs, enthusiasm fades, and they find themselves paying for two systems, maintaining neither well, and unclear about which one they would rely on in a crisis. Drift is common, and it can quietly increase vulnerability rather than reduce it.

**Deliberate partial exit** means the boundary between old and new systems is chosen and understood. You know which functions the alternative carries, which remain with the existing system, why, and under what conditions that balance would change.

Signs that you are drifting rather than deciding:
- You cannot say which system you would rely on if the other failed tomorrow
- Costs of both systems are rising and no one is reviewing them
- The alternative is used out of habit or guilt rather than because it meets a defined need
- No one has asked when, or whether, the next stage of exit should happen

Drift is not a moral failure; it is a planning gap. The remedy is to make the boundary explicit.`
      },
      {
        title: 'Deciding What to Leave and What to Keep',
        content: `Making partial exit deliberate starts from the tools you already have. Return to your dependency map and, for each major function, ask:

1. **How critical is it?** Functions whose failure would cause serious harm need the most careful handling, and are usually the last to move fully to an alternative.

2. **How much exit friction does it carry?** Low-friction dependencies are candidates for early exit; high-friction ones may stay within the existing system for a long time.

3. **Is it an exit leverage point?** Some changes reduce several dependencies at once and deserve priority even if they are harder.

4. **What does staying cost, and who bears it?** Remaining connected may mean continued payments, continued complicity in harms you want to leave, or exposure to a failing system.

5. **What does leaving cost, and who bears it?** Consider your own transition burden and effects on others, including those who cannot follow.

The answers rarely point to all-or-nothing. They produce a **map of the boundary**: what moves now, what moves later, what stays deliberately, and what you will keep watching. Writing this down, and revisiting it, is what turns a soft exodus from drift into strategy.`
      },
      {
        title: 'Partial Exit at Community and Societal Scale',
        content: `Partial exit is not only an individual pattern. Communities and whole societies also move between systems gradually, often for decades.

**Diverse economies**: Economic geographers J. K. Gibson-Graham argued that real economies already contain many non-capitalist practices—household work, gifting, volunteering, cooperatives—operating alongside capitalist markets. From an Exodological perspective, this means partial exit is already woven into everyday economic life; the question is whether it is deliberate and whether it builds exit capability.

**Transition initiatives**: The Transition Town movement, which began in Totnes in England in 2006 and is described in Rob Hopkins' handbook, built local food, energy and skills projects alongside existing systems rather than in place of them overnight.

**National energy transitions**: Countries moving toward renewable energy have typically run fossil-fuel and renewable generation side by side for long periods while the balance shifts.

At larger scales, partiality carries an ethical weight: those with resources can exit more quickly and more fully than others. The lifeboat problem applies here. A deliberate partial exit at community scale asks who can participate, and keeps connections that let others follow.`
      },
      {
        title: 'Voice, Loyalty and the Partial Exiter',
        content: `Albert Hirschman's classic analysis distinguished **exit** (leaving) from **voice** (speaking up to change things from within), and showed how **loyalty** affects the choice between them. One of his insights was that exit and voice interact: the credible possibility of exit can strengthen voice, while easy exit by the most demanding members can weaken pressure for improvement.

Partial exiters occupy an unusual position in this picture. Because they keep a foot in the existing system, they retain standing to use voice—as customers, members, voters or employees—while their alternatives demonstrate that other arrangements are possible. This can make partial exit a powerful complement to reform, consistent with the hybrid zone described in the response spectrum.

It also carries a temptation. Partial exiters can use their alternatives as a private safety net while ceasing to care about the system others still depend on. Residual duty applies here as much as after full exit: sharing knowledge, creating on-ramps, and continuing to advocate for those who remain fully dependent.`
      }
    ],

    keyTakeaways: [
      'Most real exits are partial because of structural dependence, interdependence, uneven exit friction and relationships',
      'The goal is exit capability, not maximal disconnection; partial exit can be a stage or a legitimate end state',
      'Deliberate partial exit means the boundary between systems is chosen, written down and reviewed; drift is a planning gap',
      'Dependency mapping, criticality and exit friction guide what to leave now, later or not at all',
      'Partial exiters retain voice and residual duty toward those who remain fully dependent'
    ],

    references: [
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Shows how exit and voice interact, which explains why partial exiters can keep influence within the systems they are partly leaving.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Gibson-Graham, J. K.',
        title: 'The End of Capitalism (As We Knew It): A Feminist Critique of Political Economy',
        year: 1996,
        publisher: 'Blackwell Publishers',
        relevance: 'Argues that economies already contain many non-capitalist practices alongside capitalist ones, a basis for seeing partial exit as widespread and ordinary.',
        url: 'https://openlibrary.org/works/OL2987624W'
      },
      {
        author: 'Hopkins, Rob',
        title: 'The Transition Handbook: From Oil Dependency to Local Resilience',
        year: 2008,
        publisher: 'Green Books (UK); Chelsea Green Publishing (US)',
        relevance: 'Documents community initiatives that build local alternatives alongside existing systems, a practical model of gradual, partial exit.',
        url: 'https://openlibrary.org/works/OL12011785W'
      }
    ]
  },
  learningObjectives: [
    'Explain the structural reasons why most exits are partial',
    'Distinguish drift between systems from deliberate partial exit',
    'Apply criticality, exit friction and leverage to decide which dependencies to leave, keep or defer',
    'Evaluate the ethical position of partial exiters using voice and residual duty'
  ],
  keyTerms: [
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' },
    { term: 'Partial Exit', definition: 'An exit in which some functions move to alternatives while others deliberately remain with the existing system.' },
    { term: 'Drift', definition: 'Ending up between systems without a plan, so that neither system is relied on clearly and vulnerability may increase.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed without catastrophic loss.' },
    { term: 'Voice', definition: 'In Hirschman\'s terms, the attempt to change a system from within rather than leaving it.' }
  ]
}

export default lesson
