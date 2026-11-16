import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m5-n2',
  title: 'Designing Hybrid Arrangements',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Once partial exit is accepted as the norm, a design question follows: how should existing and alternative systems be combined? A hybrid arrangement is any deliberate combination in which some functions are carried by the existing system, some by a parallel system, and some by both. Grid-connected solar with batteries, a cooperative that trades in conventional markets, and a household that keeps a mains connection alongside rainwater harvesting are all hybrids.

Hybrids can be the most resilient arrangement available, because each system can cover for the other. But they can also be the most fragile: two systems mean two sets of costs, more complexity, and new points of failure where the systems join. A badly designed hybrid can deliver the weaknesses of both systems and the strengths of neither.

This lesson builds on the integration points introduced in Designing Parallel Systems. It shows how to assign roles within a hybrid, design the joins between systems, check that the two systems really are independent, and consider who bears the costs of hybrid arrangements.`,

    sections: [
      {
        title: 'How Hybrids Become Fragile',
        content: `Hybrid arrangements usually fail in a few recognisable ways.

**Hidden common dependencies**: The alternative quietly relies on the same critical node as the existing system. A well-known energy example: most standard grid-tied solar inverters are designed to switch off when the grid goes down, a safety requirement that protects line workers. A household that believed its panels gave it independence discovers that, without batteries and equipment designed to operate separately from the grid, it has no power during an outage.

**Unclear roles**: No one has decided which system is primary for which function, so in a disruption people do not know what to rely on.

**Complexity overload**: Running two systems demands more knowledge, maintenance and attention. If that capacity is not there, both systems degrade.

**Neglected alternatives**: Because the existing system still works most of the time, the parallel system is used rarely, maintained poorly, and found broken exactly when it is needed.

**Cost stacking**: Paying full fixed costs for two systems can erode the transition capital that the exit depends on.

Good hybrid design is mostly the work of anticipating these patterns.`
      },
      {
        title: 'Assigning Roles Within a Hybrid',
        content: `For each function in a hybrid, decide explicitly how the two systems relate. Common role patterns include:

**Primary and backup**: One system carries the function day to day; the other is ready to take over if the first fails. Example: mains water as primary, stored and filtered rainwater as backup.

**Shared load**: Both systems carry part of the function continuously. Example: a household that grows a share of its vegetables and buys the rest. Shared load keeps the alternative in regular use, which keeps skills and equipment in working order.

**Staged handover**: The alternative's share grows on a planned schedule until it becomes primary. This links directly to the fallback points and milestones of transition path design.

**Specialisation**: Each system carries the functions it does best. Example: a cooperative that is governed democratically by its members but sources some inputs and sells some outputs through conventional markets.

Write the role for each function into your boundary map from the previous lesson. A hybrid in which every function has a named primary, a named fallback and a known trigger for switching is far more robust than one where these are assumed.`
      },
      {
        title: 'Designing the Joins',
        content: `The places where the two systems meet are where many hybrids break. Designing Parallel Systems called for graceful interoperability; in a hybrid, this becomes concrete work on the joins.

**Physical joins**: Switches, valves, connections and storage that allow a function to move from one system to the other. Ask: can the switch be made quickly, by the people who will be present, without specialist help?

**Information joins**: Records, accounts and data that must move between systems. A food cooperative that cannot export its members' order history, or a household whose energy data is locked in a supplier's platform, has a weak join.

**Financial joins**: How money flows between systems during transition. The income bridge from Financial Planning for Exit is a financial join: income from existing systems sustaining the build-out of alternatives.

**Legal and contractual joins**: Contracts, minimum terms, exit fees and regulations that govern how far and how fast you can move between systems. These often carry the most exit friction.

**Social joins**: People who understand both systems and can translate between them. Hybrids often depend on a small number of such people, which is itself a vulnerability to plan for.`
      },
      {
        title: 'Testing for Independence',
        content: `A hybrid only adds resilience if the two systems do not fail together. Testing for independence is an application of dependency mapping.

Map the alternative system with the same rigour you used for the existing one: trace each of its inputs upstream. Then lay the two maps side by side and look for **overlaps**—inputs, suppliers, skills, infrastructure or institutions that both systems rely on. Each overlap is a potential common failure point.

Typical overlaps include:
- Both systems depending on the same electricity supply, payment network or internet connection
- Both depending on a single person's knowledge
- Both depending on the same regional supply chain for spare parts or inputs
- Both subject to the same regulatory decision

Not every overlap can or should be removed. Some are cheap to address (a manual backup, a second trained person); others would cost more than the risk justifies. The point is to know where they are, so that the hybrid's real exit capability is understood rather than assumed. Systems thinker Donella Meadows emphasised that resilience comes from a rich structure of feedback and alternative pathways, and that it is often invisible until it is tested.`
      },
      {
        title: 'Balancing Safety and Experiment',
        content: `A useful lens on hybrid design comes from Nassim Nicholas Taleb, who described a **barbell strategy**: combining a large, very safe position with a smaller, more experimental one, while avoiding a fragile middle that is neither safe nor genuinely exploratory.

Applied to exit, this suggests keeping a reliable base for critical needs—often the existing system or a well-proven alternative—while running smaller experiments with new alternatives where failure would be survivable. The minimum viable system is an experiment of exactly this kind. As experiments prove themselves, they can be moved toward the reliable base.

This lens also clarifies what to avoid: committing critical needs to an untested alternative because it feels more consistent with your values, or spreading effort so thinly across many half-built alternatives that none becomes dependable.

The lens has limits. It assumes you have a reliable base to start from, and many people facing structural dependence do not. For them, the question is less how to balance safety and experiment than how a community can create a shared reliable base, which is one reason collective exit matters so much.`
      },
      {
        title: 'Who Carries the Cost of Hybrids?',
        content: `Hybrid arrangements raise questions of distributive justice that the Exodologist should make explicit.

When some people partly exit a shared system, the costs of maintaining that system may fall more heavily on those who remain fully dependent. Energy offers a widely discussed example: in several countries there has been sustained public debate about whether households with rooftop solar contribute fairly to the cost of maintaining the electricity grid they still rely on for backup. Similar questions arise when better-resourced members leave a public service for a private or community alternative while still drawing on it in emergencies.

These debates do not have simple answers, and the Exodologist's role is to analyse who gains and who loses rather than to assume either side is right. Questions to ask of any hybrid:
- Does it draw on the existing system as a free safety net while reducing contributions to it?
- Does it raise costs or reduce service quality for those who cannot exit?
- Could it be designed so others can join, creating on-ramps rather than a lifeboat?

A hybrid that answers these questions well is not only more just; it is also more politically durable.`
      }
    ],

    keyTakeaways: [
      'Hybrids can be highly resilient or highly fragile depending on design',
      'Every function in a hybrid needs a named primary, a named fallback and a known trigger for switching',
      'The joins between systems—physical, informational, financial, legal and social—are where hybrids often fail',
      'Test independence by comparing dependency maps of both systems and finding shared failure points',
      'Hybrids carry distributional effects; ask who bears the cost of maintaining the shared system'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains resilience as arising from multiple feedback loops and alternative pathways, grounding the analysis of how combined systems succeed or fail.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Taleb, Nassim Nicholas',
        title: 'Antifragile: Things That Gain from Disorder',
        year: 2012,
        publisher: 'Random House',
        relevance: 'Source of the barbell strategy and of arguments about fragility and redundancy that inform the balance between a reliable base and experimental alternatives.',
        url: 'https://openlibrary.org/works/OL16726829W'
      }
    ]
  },
  learningObjectives: [
    'Identify common patterns by which hybrid arrangements become fragile',
    'Assign primary, backup, shared, staged or specialised roles to each function in a hybrid',
    'Design physical, informational, financial, legal and social joins between systems',
    'Test a hybrid for hidden common dependencies using paired dependency maps',
    'Analyse the distributional effects of a hybrid arrangement on those who remain fully dependent'
  ],
  keyTerms: [
    { term: 'Hybrid Arrangement', definition: 'A deliberate combination in which some functions are carried by the existing system, some by a parallel system, and some by both.' },
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Join', definition: 'A point where an existing and an alternative system connect, through which a function, information, money or people move between them.' },
    { term: 'Common Dependency', definition: 'An input, person or institution that both systems in a hybrid rely on, so that both could fail together.' },
    { term: 'Barbell Strategy', definition: 'Taleb\'s term for combining a large, very safe position with a small experimental one while avoiding a fragile middle.' }
  ]
}

export default lesson
