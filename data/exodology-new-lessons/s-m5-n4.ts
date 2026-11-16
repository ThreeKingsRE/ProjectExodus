import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m5-n4',
  title: 'Infrastructure Continuity',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Every large exit runs on infrastructure: power lines, water mains, pipelines, roads, rail, telecommunications networks, payment systems and the facilities that maintain them. Some of this infrastructure belongs to the system being left; some will carry the alternatives; much of it serves both at once. Unlike a habit or a contract, infrastructure cannot be changed overnight. It is built over decades, paid for over decades and relied upon by people who may never have chosen the transition.

The Scaling Exodology lesson observed that infrastructure matters more as scale increases. This lesson focuses on what that means in practice: how to keep critical infrastructure working while a mass exit is underway, how to retire old infrastructure without abandoning those who still depend on it, and how to avoid the collapse that follows when the old system is allowed to decay before the new one can carry the load.

The theme running through the lesson is a simple rule already familiar from transition path design: never burn bridges before alternatives are proven. At the strategic scale, the bridges are physical, expensive and shared by millions of people, and keeping them standing is a matter of public responsibility as well as good planning.`,

    sections: [
      {
        title: 'Why Infrastructure Is the Slowest Part of Exit',
        content: `Infrastructure is where path dependence becomes concrete, often literally. Pipes, grids and roads are designed around the system they were built for, and they shape what is easy or hard for decades afterward. The historian Thomas P. Hughes, studying the growth of electrical systems, described how large technological systems acquire **momentum**: as investments, organizations, skills and regulations accumulate around them, they become increasingly hard to redirect.

Three features make infrastructure the slowest part of most mass exits:

1. **Long lifetimes.** Assets built today may still be operating, or still being paid for, many decades from now. Decisions made early in a transition either keep exit possible later or lock it out.
2. **Shared use.** Infrastructure usually serves everyone in a place, including those who stay in the old system, those who are leaving and those who have not yet decided.
3. **Physical interdependence.** Infrastructure systems depend on one another, so a change in one can ripple through others.

For the strategic exodologist this means infrastructure planning has to begin early, run longer than other parts of the transition, and be judged not only by how well it serves the new system but by how well it protects those still relying on the old one.`
      },
      {
        title: 'Mapping Critical Infrastructure and Its Interdependencies',
        content: `Dependency mapping, the foundational skill of Applied Exodology, scales up to infrastructure. The first step is to identify which assets are **critical**: those whose failure would quickly threaten health, safety or the ability to meet basic needs. Water treatment and pumping, electricity supply, heating in cold climates, emergency communications, hospitals and the transport links that keep food and medicine moving usually head the list.

The second step is to map how these systems depend on each other. Water pumping depends on electricity; electricity control systems depend on telecommunications; payment systems depend on both; repair crews depend on fuel and transport. These links are often invisible until something fails. When one critical system falters during a transition, the failure can cascade into others, which is one of the routes by which a managed exit turns into collapse.

Charles Perrow's analysis of high-risk technologies is useful here. He argued that systems which are both tightly coupled, with little slack between parts, and interactively complex, with parts that interact in unexpected ways, should be expected to fail in surprising ways. Transitions often increase coupling temporarily, because old and new systems must be connected and switched under time pressure. A good infrastructure map therefore records not only what depends on what, but where slack exists, where it is missing and where the transition will temporarily remove it.`
      },
      {
        title: 'The Decline Trap: Maintaining a Shrinking System',
        content: `A distinctive risk of mass exit is what happens to the old infrastructure as people leave it. Most networked infrastructure has high fixed costs: the pipes, wires and maintenance crews cost roughly the same whether many or few people use them. As users depart, those fixed costs are spread over fewer remaining users. In energy policy discussions this dynamic is sometimes called a **utility death spiral**: rising charges push more users to leave, which raises charges again for those who remain.

The people left paying are often those with the least exit capability: renters who cannot install alternatives, low-income households, rural communities and institutions bound by long contracts. This is the lifeboat problem expressed in infrastructure, and it is where residual duty becomes a question of public finance.

A second form of the trap is **neglect**. Operators of a system scheduled for retirement have weak incentives to maintain it, yet it may need to run safely for years. Deferred maintenance in the final phase of a system's life can create exactly the failures that a managed exit was meant to avoid.

Responses include ring-fenced maintenance funding for the full remaining life of critical assets, rules that share fixed costs fairly between those who leave and those who stay, planned and staged contraction of networks rather than unplanned drift, and clear public commitments about service standards until the last user has a viable alternative.`
      },
      {
        title: 'Overlap, Cutover and Handover',
        content: `The safest pattern for critical infrastructure is usually **parallel operation**: the new system is built and proven while the old one keeps running, and the old system is retired only when the new one can reliably carry the load. This mirrors the fallback points of transition path design. It costs more, because two systems are maintained at once, but it buys reversibility, which the Principle of Precaution asks practitioners to prefer when outcomes are uncertain.

Some changes require a **cutover**, a point at which service switches from the old system to the new. The digital television transition in the United States is a well-documented example. When full-power analog broadcasting ended in 2009, the federal government offered coupons toward converter boxes so that households with older televisions would not lose service, and the final switch date was postponed by several months amid concerns that many households were not ready. The case shows both the value of support for those least able to adapt and the importance of being willing to delay a cutover when readiness is in doubt.

Gradual retirement is the other common pattern. Great Britain reduced its reliance on coal-fired electricity over roughly a decade, closing its last coal-fired power station in 2024, while other sources and grid management were developed to keep supply secure. Phase-outs of this kind depend on long notice, monitoring of system adequacy, and willingness to adjust timing.

Whichever pattern is used, handover needs explicit **readiness criteria** agreed in advance, a named body with authority to pause, and a protected path for anyone who cannot yet switch.`
      },
      {
        title: 'People, Skills and Institutional Memory',
        content: `Infrastructure is not only hardware. It is kept running by operators, engineers, maintenance crews and administrators whose knowledge is often undocumented. Mass exits put this human infrastructure at risk in two directions.

First, the old system can lose its workforce too early. As a sector declines, skilled workers retire or move to growing industries, and the knowledge needed to operate the remaining assets safely disappears before those assets are retired. Decommissioning itself can require scarce expertise over long periods; the dismantling of large industrial and energy facilities can take many years.

Second, the new system may not yet have enough trained people. Bottlenecks in skilled labor, discussed in the lesson on coordination at scale, can delay the alternatives and force the old infrastructure to run longer than planned.

Both risks point toward the same response: treat workforce transition as part of infrastructure continuity, not as a separate social program. Retraining existing workers for the new system, retaining enough expertise to run and safely close the old one, documenting operating knowledge, and planning careers that span the transition serve continuity and justice at the same time. Workers who see a future in the transition are also less likely to resist it, which links this question to the backlash dynamics studied earlier in the Strategic path.`
      },
      {
        title: 'Governing Continuity Through the Transition',
        content: `Infrastructure continuity fails most often not for technical reasons but because nobody is clearly responsible for it. During a transition, responsibilities shift between old operators, new providers, regulators and local governments, and gaps open between them. A continuity plan should therefore state plainly:

- **Who is responsible** for each critical service at each phase, including during handover.
- **What service standards** must be maintained, for whom, and how they are monitored.
- **What triggers a pause or reversal**, such as reserve margins falling below an agreed level or a vulnerable group losing access.
- **Who pays** for maintenance, parallel operation and support for those who cannot yet switch.
- **How affected communities are informed and consulted**, in line with the Principles of Informed Engagement and Procedural Justice.

Systems thinkers such as Donella Meadows emphasize that buffers, stocks held in reserve that absorb shocks, make systems more stable but are often trimmed away in the name of efficiency. Transitions are precisely the moments when buffers matter most: spare capacity, stored supplies, backup systems and financial reserves give a transition room to absorb surprises. Earlier lessons noted that resilience comes from diversity and redundancy. For infrastructure, that principle has a practical meaning: keep enough slack in the system that a delay or failure in the new infrastructure does not leave people without essential services.`
      }
    ],

    keyTakeaways: [
      'Infrastructure carries strong momentum and long lifetimes, so continuity planning must begin early and outlast other parts of a transition',
      'Mapping critical infrastructure and its interdependencies reveals where failures could cascade and where slack is missing',
      'As users exit, fixed costs and neglect can push the old system into decline that falls hardest on those least able to leave',
      'Parallel operation, agreed readiness criteria and a willingness to delay cutover protect reversibility and those who cannot yet switch',
      'Continuity depends on clear responsibility, adequate buffers and a workforce plan that keeps the skills to run both old and new systems'
    ],

    references: [
      {
        author: 'Hughes, Thomas P.',
        title: 'Networks of Power: Electrification in Western Society, 1880-1930',
        year: 1983,
        publisher: 'Johns Hopkins University Press',
        relevance: 'Historical study of how large electrical systems developed and acquired momentum, central to understanding why infrastructure is slow to change.',
        url: 'https://openlibrary.org/works/OL2738212W'
      },
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Explains how tight coupling and interactive complexity produce cascading failures, a key risk when infrastructure is changed under pressure.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Introduces stocks, buffers and resilience, concepts that inform how to keep slack in infrastructure during a transition.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain why infrastructure is typically the slowest and most path-dependent element of a mass exit',
    'Map critical infrastructure and its interdependencies to identify cascading failure risks',
    'Analyze how user departure can trigger decline in the remaining system and who bears its costs',
    'Compare parallel operation, cutover and gradual retirement as approaches to infrastructure handover',
    'Design the core elements of an infrastructure continuity plan, including responsibility, triggers, buffers and workforce provisions'
  ],
  keyTerms: [
    { term: 'Critical Infrastructure', definition: 'Assets and networks whose failure would quickly threaten health, safety or the ability to meet basic needs.' },
    { term: 'Technological Momentum', definition: 'The tendency, described by historian Thomas P. Hughes, of large technological systems to become harder to redirect as investments, organizations and rules accumulate around them.' },
    { term: 'Utility Death Spiral', definition: 'A term from energy policy discussions for a cycle in which departing users raise costs for those remaining, prompting further departures.' },
    { term: 'Parallel Operation', definition: 'Running old and new infrastructure side by side until the new system is proven able to carry the load.' },
    { term: 'Readiness Criteria', definition: 'Conditions agreed in advance that must be met before service is switched from an old system to a new one.' },
    { term: 'Buffer', definition: 'A reserve of capacity, supplies or funds that absorbs shocks and gives a system room to adjust.' }
  ]
}

export default lesson
