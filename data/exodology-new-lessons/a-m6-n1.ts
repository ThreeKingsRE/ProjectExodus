import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m6-n1',
  title: 'Common Exit System Failures',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Most of Applied Exodology so far has been about building: mapping dependencies, designing parallel systems, planning transitions and organizing communities. This module turns to a less comfortable subject. Alternatives fail. Community gardens are abandoned, energy cooperatives run out of money, mutual aid networks fade when their organizers burn out, and intentional communities split over disputes no one knew how to resolve. Failure is not a sign that exit was a mistake; it is a normal feature of building anything new inside a world organized around the systems being left.

Foundations taught that the difference between a managed exit and collapse is decided by whether people see trouble coming and act while there is still time. The same logic applies to the alternatives themselves. A parallel system that fails slowly and visibly can be repaired, scaled back or wound down with care. One that fails suddenly forces its members into a hard exodus back toward the systems they left, often at the worst possible moment, and may leave them more exposed than before they began.

This lesson describes the most common ways exit systems fail and the warning signs that tend to precede each. It builds on Managing Transition Risk, which treated risk before and during a transition; here the focus is on alternatives that are already running. The next lessons turn to designing for resilience and to planning a dignified path back when an exit does not work.`,

    sections: [
      {
        title: 'Why Alternatives Fail',
        content: `It helps to begin with a realistic picture. New systems are usually smaller, less funded and less tested than the systems they are meant to replace. The dominant regime has had decades to accumulate infrastructure, institutions, skills and habits; this accumulated advantage is exactly what the style guide calls **lock-in**. A parallel system has none of that, and it often runs on volunteer time and enthusiasm.

Two consequences follow. First, failure rates for new alternatives are high, as they are for new ventures of every kind. Second, the reasons alternatives fail are often not technical. A solar array rarely fails because solar does not work; it fails because no one was assigned to maintain the inverter, the reserve fund was spent, or the person who understood the system moved away.

The Ethics Guidelines ask for **humility**, acknowledging the limits of prediction and control in complex systems. Sociologist Charles Perrow, studying accidents in high-risk industries, argued that in systems that are complex and tightly connected, some failures are effectively normal: they arise from unexpected interactions between parts rather than from a single error. Exit systems are not nuclear plants, but the insight carries over. The practitioner's task is not to guarantee success but to understand how failure tends to arise, so that it can be noticed early and handled well.

The failure modes below are grouped for clarity. In practice they interact, and one usually triggers another.`
      },
      {
        title: 'Capacity Failures: People, Money and Maintenance',
        content: `The most common failures are failures of capacity: the system simply runs out of what it needs to keep going.

**Key-person dependence**: Dependency mapping taught you to find critical nodes where no alternative path exists. In many alternatives the most important critical node is a person: the founder who holds the vision, the one member who can repair the water pump, the treasurer who alone can access the bank account. When that person leaves, falls ill or burns out, the system can stop almost overnight.

**Burnout**: Alternatives often depend on a small core doing far more than their share. Enthusiasm carries this for a while, then fades. Building Transition Teams warned that teams which last are intentionally maintained; burnout is what happens when they are not.

**Financial exhaustion**: Start-up grants end, reserves are spent on routine costs, and the system was never designed to cover its own maintenance and replacement. Many community projects are funded to build but not to keep running.

**Maintenance neglect**: Equipment, records and skills all decay without upkeep. Because the dominant system often still works, the alternative is used less and maintained less, until it is discovered broken when it is needed.

What these failures share is that they are slow. They build quietly over months or years and then appear suddenly. That makes them very preventable, but only if someone is watching.`
      },
      {
        title: 'Governance and Relationship Failures',
        content: `Exit systems are social systems. Many fail not because the equipment breaks but because the people running them stop being able to decide and act together.

**Unresolved conflict**: Conflict and Resilience noted that conflict is normal and unaddressed conflict is dangerous. Disagreements over money, workload, values or direction that are avoided rather than resolved tend to resurface in harder forms, and groups split or quietly dissolve.

**Hidden power**: Groups that reject formal hierarchy can still develop informal hierarchies. Jo Freeman's widely read essay from the women's movement of the early 1970s, "The Tyranny of Structurelessness", argued that groups without explicit structures do not avoid power; they hide it, so that it becomes harder to hold to account. Many exit communities have rediscovered this the hard way.

**Unclear decision rules**: When no one knows how decisions are made, or who can make them in an emergency, the group is slow in a crisis and vulnerable to whoever acts first.

**Historical illustration**: Nineteenth-century intentional communities offer well-documented examples. Robert Owen's community at New Harmony, Indiana, founded in 1825, dissolved within a few years amid disputes over governance, property and labor. Brook Farm in Massachusetts (1841 to 1847) struggled financially for years before a fire destroyed a major new building it had invested in. Historians give many reasons for each outcome, and no single cause should be assumed; but both show how governance, money and relationships fail together.`
      },
      {
        title: 'Design Failures: Hidden Dependencies, Complexity and Scale',
        content: `Some failures are built in from the start.

**Hidden dependence on the exited system**: Designing Hybrid Arrangements described how an alternative can quietly rely on the same critical node as the existing system, such as grid-tied solar that shuts down when the grid does. More broadly, an alternative may depend on supply chains, payment systems, insurance, legal permissions or spare parts controlled by the very regime it is meant to replace. When that regime falters or pushes back, the alternative falls with it.

**Complexity beyond capacity**: Designing Parallel Systems advised designing for maintainability by the community that will use it. Systems that need specialist knowledge, rare parts or constant attention can work well in their first year and fail in their fifth.

**Scale mismatch**: Some alternatives grow too fast, taking on members, debt or functions before governance and skills can keep up. Others never grow beyond the minimum viable system, so they cannot spread fixed costs and stay fragile indefinitely. Both are failures of scale, in opposite directions.

**Optimization over resilience**: A system tuned for maximum efficiency in normal conditions, with no spare capacity, no reserves and no backups, can be excellent until the first disruption. The next lesson addresses this trade-off directly.

Design failures are best caught by revisiting dependency maps for the alternative itself, not only for the systems being left.`
      },
      {
        title: 'Drift, Capture and Exclusion',
        content: `A quieter kind of failure leaves the alternative running but no longer serving its purpose.

**Mission drift**: Under financial pressure, alternatives may gradually adopt the practices of the system they set out to leave. In cooperative studies this is known as the degeneration debate: Beatrice and Sidney Webb argued, around the turn of the twentieth century, that worker cooperatives tend over time to become conventional businesses, for example by hiring non-member workers. Later researchers have contested how inevitable this is, and examples such as long-lived cooperatives show it is not universal. The useful point for Exodology is that drift is a real risk that needs watching.

**Capture and co-optation**: The response spectrum lesson warned that reform can be captured or co-opted. Alternatives can be too. A dominant firm may buy a successful alternative, a funder may impose conditions that change its direction, or regulation may be written so that only incumbents can comply. The alternative survives in name while the exit capability it was meant to create disappears.

**Exclusion**: The lifeboat problem from Foundations applies here. An alternative that only serves those who can afford its membership fees, time commitments or skills may succeed on its own terms while failing the justice orientation that Exodology requires. This is a failure even when the books balance.

These failures are hard to see from inside because nothing breaks. They are revealed by returning periodically to the question the system was built to answer: whose needs is it meeting, and does it still increase their capacity to leave dependent relationships?`
      },
      {
        title: 'Reading the Warning Signs',
        content: `Foundations taught you to read signals of reform exhaustion, exit windows and collapse in dominant systems. The same habit can be turned on your own alternatives. Warning signs that commonly precede failure include:

**Capacity signals**:
- The same few people do most of the work, and no one is being trained to replace them
- Reserves are being spent on routine costs rather than kept for repairs and emergencies
- Maintenance tasks are repeatedly postponed
- Meetings are less attended and fewer people volunteer for roles

**Governance signals**:
- Disagreements are avoided rather than discussed, or the same conflict keeps returning
- Decisions are made informally by a few people and explained afterward
- New members find it hard to understand how things work or who to ask

**Design signals**:
- Members quietly fall back on the dominant system for functions the alternative was meant to carry
- Breakdowns take longer to fix each time
- No one has mapped what the alternative itself depends on

**Purpose signals**:
- The membership is becoming narrower and less diverse
- Outside funders or partners increasingly shape priorities
- People can no longer say clearly what the alternative is for

Hirschman's analysis of decline is useful here: when members leave quietly or stop raising concerns, an organization loses the feedback that would let it recover. Treat falling participation and falling voice as information, not just as a loss.`
      }
    ],

    keyTakeaways: [
      'Alternatives fail often, and usually for social, financial and organizational reasons rather than technical ones',
      'Capacity failures such as key-person dependence, burnout, financial exhaustion and maintenance neglect build slowly and appear suddenly',
      'Governance failures, hidden dependencies, scale mismatch and over-optimization are common design and relationship weaknesses',
      'Drift, capture and exclusion can leave an alternative running while it stops serving its purpose',
      'Watching for warning signs in your own alternatives is what allows failure to be managed rather than endured'
    ],

    references: [
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Shows how failures in complex, tightly connected systems arise from unexpected interactions, supporting a realistic view of how alternatives fail.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Explains how departures and voice act as signals of decline that organizations, including alternatives, can use to recover.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Tainter, Joseph A.',
        title: 'The Collapse of Complex Societies',
        year: 1988,
        publisher: 'Cambridge University Press',
        relevance: 'Analyses how rising maintenance costs and declining returns on complexity contribute to collapse, a dynamic small alternatives can also face.',
        url: 'https://openlibrary.org/works/OL4741769W'
      }
    ]
  },
  learningObjectives: [
    'Identify the main categories of failure that affect exit systems: capacity, governance, design and drift',
    'Explain why alternatives often fail for social and financial rather than technical reasons',
    'Recognize warning signs that precede failure in a running alternative',
    'Analyze an alternative for mission drift, capture and exclusion as well as breakdown'
  ],
  keyTerms: [
    { term: 'Key-Person Dependence', definition: 'A critical node formed by a single person whose knowledge, access or effort the alternative cannot function without.' },
    { term: 'Mission Drift', definition: 'The gradual shift of an alternative toward the practices of the system it set out to leave, often under financial pressure.' },
    { term: 'Capture', definition: 'The process by which an alternative comes to be controlled or redirected by incumbents, funders or regulators so that it no longer builds exit capability.' },
    { term: 'Maintenance Neglect', definition: 'The decay of equipment, records and skills in an alternative that is used rarely because the dominant system still works most of the time.' },
    { term: 'Warning Sign', definition: 'An observable change, such as falling participation or depleting reserves, that tends to precede failure and allows early response.' }
  ]
}

export default lesson
