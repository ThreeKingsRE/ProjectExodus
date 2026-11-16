import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m4-n3',
  title: 'Mitigating Unintended Consequences',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Some of the most serious harms in transitions are ones nobody intended. A programme to help households leave an expensive energy system raises prices for those who cannot join it. A policy to reduce one harm shifts it to another place. A well-designed alternative succeeds so quickly that the old system collapses before its remaining users have anywhere to go. None of these outcomes was the goal, yet each was caused by deliberate action.

The sociologist Robert K. Merton drew attention to this problem in a 1936 essay on the unanticipated consequences of purposive social action. Since then, systems thinkers, engineers and policy scholars have studied why interventions in complex systems so often produce surprises. For Exodology, the question is ethical as well as practical: the Principle of Systemic Responsibility asks practitioners to attend to indirect and cascading effects and to accept accountability for foreseeable negative consequences.

This lesson describes common patterns of unintended consequences in transitions, practical techniques for anticipating them, and ways of designing transitions so that the surprises that still occur can be caught and corrected.`,

    sections: [
      {
        title: 'Why Transitions Produce Surprises',
        content: `The core principles of Exodology already explain much of the problem. **Systems Thinking** reminds us that systems behave differently from their parts, so changing one element alters relationships we may not see. **Non-Linearity** means that effects can be disproportionate: a small change can push a system past a threshold, while a large one may be absorbed. **Path Dependence** means that interventions interact with a history we may only partly understand.

Several further causes are common in practice:

1. **Narrow framing.** A transition is designed to solve one problem, and its designers measure success against that problem alone.
2. **Missing knowledge.** Planners rarely have the experiential knowledge of the people who operate or depend on a system day to day.
3. **Behavioural responses.** People adapt to new rules in ways designers did not foresee, sometimes defeating the purpose of the rules.
4. **Time lags.** Some effects appear only years later, long after a programme has been declared a success.
5. **Interaction effects.** Two reasonable policies, each sound on its own, combine to produce an outcome nobody wanted.

Donella Meadows, whose work on leverage points appears in the timeline of this discipline, warned that people intervening in systems often push in the wrong direction or at the wrong point. Humility is not a weakness in this context; it is an accurate description of what we can know.`
      },
      {
        title: 'Common Patterns of Unintended Consequences',
        content: `Although every transition is different, certain patterns appear often enough to be worth checking for deliberately. Each is drawn from an established field rather than from Exodology itself:

**Rebound effects.** Economists have long observed that efficiency gains can lower the cost of using a resource and so increase its use, offsetting part of the savings. The idea goes back to William Stanley Jevons's nineteenth-century work on coal.

**Displacement or leakage.** A harm reduced in one place reappears elsewhere, for example when a polluting activity simply moves to a jurisdiction with weaker rules.

**Perverse incentives and gaming.** When a measure becomes a target, people may optimise the measure rather than the outcome it was meant to indicate, a pattern often summarised as Goodhart's law.

**Unravelling of the remaining system.** In exit terms, the departure of some participants leaves the system more expensive or less viable for those who stay, which can trigger further departures. This is where a managed exit risks becoming collapse, and where residual duty becomes urgent.

**Distributional surprises.** Benefits flow mainly to those already able to exit, widening inequality. This is the lifeboat problem appearing as an unintended outcome rather than a design choice.

**Loss of local knowledge.** Simplified, top-down designs override practices that worked for reasons nobody wrote down. James C. Scott documented this pattern in large state schemes, including the scientific forestry of eighteenth and nineteenth-century Germany, where simplified plantations produced well at first and then declined.`
      },
      {
        title: 'Anticipation Techniques',
        content: `Not every consequence can be foreseen, but many that are called unforeseeable were in fact foreseeable to someone. Practical techniques for widening foresight include:

**Extended dependency mapping.** The dependency mapping taught in earlier paths can be extended outward: for each dependency that a transition changes, ask who else relies on it, and what they rely on in turn. Second- and third-order effects often live in these chains.

**Stakeholder walk-throughs.** Ask people who operate or depend on the system to walk through how a proposed change would affect their routines. The Ethics Guidelines' call to respect experiential and indigenous knowledge has practical value here.

**Pre-mortems.** A technique described by the psychologist Gary Klein: before a decision is final, the team imagines that the transition has failed badly and writes down the reasons why. This makes it socially acceptable to raise doubts.

**Red teams.** A separate group is asked to find ways the plan could go wrong, including ways people might game it.

**Distributional analysis.** For each major element, ask who gains and who loses, broken down by income, location, ability and other relevant factors, in line with the Justice Orientation principle.

**Analogous cases.** The Historical Grounding and Comparative Approach principles in the Charter ask practitioners to learn from documented transitions. Similar transitions elsewhere often reveal consequences that local planning has missed.`
      },
      {
        title: 'Designing for Correction',
        content: `Anticipation reduces surprises; it does not eliminate them. A transition should therefore be designed so that unintended consequences are noticed early and can be corrected. This reflects the Principle of Precaution and the core principle of Adaptive Management.

Useful design features include:

1. **Pilots and staged rollouts.** Testing in limited areas or for limited periods generates evidence before a whole population is committed.
2. **Reversibility.** Where outcomes are uncertain, prefer interventions that can be undone, and avoid destroying the old system's capacity until the new one has proved itself.
3. **Monitoring tied to triggers.** Decide in advance which indicators would show harm, such as rising arrears, falling service quality for remaining users or migration from a region, and what action each would trigger.
4. **Feedback channels for those affected.** People who experience harm should have a clear, accessible way to report it and a reasonable expectation of a response. Without such channels, harm tends to surface only as backlash.
5. **Contingency resources.** Budget and capacity reserved for problems nobody predicted, so that correction does not wait for a new funding cycle.

These features cost time and money and can slow a transition. That cost should be weighed honestly against the cost of discovering a serious harm too late to reverse it.`
      },
      {
        title: 'Responsibility When Harm Occurs Anyway',
        content: `Even careful practice will sometimes cause harm. The Ethics Guidelines distinguish foreseeable from unforeseeable consequences, and the Principle of Systemic Responsibility asks practitioners to accept accountability for the foreseeable ones. In practice, responsibility for unintended harm involves several commitments:

- **Acknowledge it.** Denying or minimising a harm because it was not intended erodes trust and delays correction. The Principle of Intellectual Honesty applies to one's own mistakes.
- **Repair what can be repaired.** Restorative justice, introduced earlier in the Strategic path, includes addressing harms caused by the transition itself, not only those caused by the system being exited.
- **Adjust the design.** Change the elements that produced the harm, even if that slows progress toward the goal.
- **Document and share.** The Charter commits the discipline to documenting transition cases systematically. Recording unintended consequences, including embarrassing ones, is how practitioners elsewhere avoid repeating them.

There is a tension here. Fear of unintended consequences can become a reason never to act, which protects the status quo and the harms it already causes. The aim is not to avoid all risk but to act with open eyes, to keep the ability to correct course, and to make sure that those harmed by surprises are not left to carry them alone.`
      }
    ],

    keyTakeaways: [
      'Unintended consequences arise from systems complexity, missing knowledge, behavioural responses, time lags and interactions',
      'Rebound, displacement, gaming, unravelling of the remaining system and distributional surprises are recurring patterns',
      'Extended dependency mapping, stakeholder walk-throughs, pre-mortems and red teams widen foresight',
      'Transitions should be designed for correction, with pilots, reversibility, triggers and feedback channels',
      'When harm occurs, practitioners acknowledge it, repair what they can, adjust the design and document the lesson'
    ],

    references: [
      {
        author: 'Tenner, Edward',
        title: 'Why Things Bite Back: Technology and the Revenge of Unintended Consequences',
        year: 1996,
        publisher: 'Alfred A. Knopf',
        relevance: 'Surveys how technologies and interventions produce effects that undermine their purposes.',
        url: 'https://openlibrary.org/works/OL2958210W'
      },
      {
        author: 'Scott, James C.',
        title: 'Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed',
        year: 1998,
        publisher: 'Yale University Press',
        relevance: 'Shows how simplified, top-down schemes fail when they override local practical knowledge.',
        url: 'https://en.wikipedia.org/wiki/Seeing_Like_a_State'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains feedback, delays and leverage points that make interventions in systems produce surprising results.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain why interventions in complex systems produce unintended consequences',
    'Identify common patterns such as rebound, displacement, gaming and unravelling of the remaining system',
    'Apply anticipation techniques including extended dependency mapping and pre-mortems to a transition plan',
    'Design monitoring triggers and feedback channels that allow early correction',
    'Describe the responsibilities of practitioners when unintended harm occurs'
  ],
  keyTerms: [
    { term: 'Unintended Consequence', definition: 'An outcome of deliberate action that its designers did not aim for, whether harmful or beneficial.' },
    { term: 'Rebound Effect', definition: 'The increase in use of a resource that follows an efficiency gain, offsetting part of the expected savings.' },
    { term: 'Displacement', definition: 'The movement of a harm from one place, group or sector to another rather than its reduction.' },
    { term: 'Pre-Mortem', definition: 'An exercise, described by Gary Klein, in which a team imagines a plan has failed and identifies the likely reasons.' },
    { term: 'Monitoring Trigger', definition: 'A pre-agreed indicator and threshold that, when crossed, prompts a specific corrective action.' }
  ]
}

export default lesson
