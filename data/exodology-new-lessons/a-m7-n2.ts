import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m7-n2',
  title: 'Resilience Assessment Methods',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The previous lesson described autonomy: how far a household or community can meet its needs without being forced to remain in a particular system. Autonomy is measured under ordinary conditions. Resilience asks a harder question: what happens when something goes wrong? A parallel food system that works in a good summer may fail in a drought. A cooperative that runs smoothly with ten active members may stall when three of them move away.

Exodology cares about resilience for a specific reason. The difference between a managed exit and collapse is often decided during disruption. A transition that cannot absorb a shock can be pushed back into dependence, or into chaotic flight, at exactly the moment the exit window is narrowing. Assessing resilience before a crisis is how practitioners protect the transitions they are building.

This lesson introduces practical methods for assessing how well a household or community withstands disruption: clarifying what resilience means, using disruption scenarios to test dependency maps, examining recovery as well as resistance, and including the social and distributional side of resilience. It builds on the redundancy and reserves discussed in Conflict and Resilience, but focuses on how to assess them rather than how to build them.`,

    sections: [
      {
        title: 'What Resilience Means Here',
        content: `The word resilience is used loosely, so begin with care. Ecologist C.S. Holling distinguished resilience from stability: a stable system returns quickly to a single equilibrium after a small disturbance, while a resilient system can absorb large disturbances and keep its essential functions, even if it changes along the way. Later resilience researchers, including Brian Walker and David Salt, emphasize **thresholds**: points beyond which a system shifts into a different state that may be hard or impossible to reverse.

For exit work, three plain questions follow from this research:

1. **Absorb**: Can the household or community keep meeting essential needs during a disruption, perhaps at a reduced level?
2. **Recover**: How quickly and how fully does it return to function afterward?
3. **Adapt**: Does it learn from the disruption and become better prepared, or does it simply return to the same vulnerabilities?

Resilience is not the same as autonomy. A household can be quite autonomous in normal times and still fragile, for example if all its food comes from a single garden with no stored reserve. Equally, a household that relies heavily on dominant systems may be fairly resilient if it has diverse backups and strong relationships. Assessment should look at both.`
      },
      {
        title: 'Method 1: Disruption Scenarios',
        content: `The most useful single method is the **disruption scenario**, a structured "what if" exercise of the kind long used in emergency management and business continuity planning. You take your dependency map and walk through a specific disruption step by step.

A good scenario is concrete. Rather than "the grid fails", write: "Electricity is off across the area for five days in winter. Shops are open but card payments do not work for the first two days." Then ask, for each essential system:

- What stops working immediately? What stops after one day, three days, a week?
- Which critical nodes fail, and what fails because they failed?
- What backups exist, and do any of them depend on the same failed input?
- Who in the household or community is affected first and most?

Run several scenarios that stress different systems: a supply disruption, a utility outage, a loss of income, a health emergency, the departure of key people. Choose scenarios that are plausible for your place rather than dramatic. A flood-prone neighborhood should test flooding before it tests anything exotic.

Record each point where the scenario reveals a hidden dependency. The **weakest-link** insight from autonomy scoring is often confirmed here: a water system that depends on an electric pump, or a cooperative whose bank account only one person can access.`
      },
      {
        title: 'Method 2: Thresholds and Recovery Time',
        content: `Scenarios show what breaks. The next step is to ask how close each system is to breaking, and how long recovery takes.

**Identify thresholds.** For each essential system, ask what level of disruption would push it past the point of managed response. For a household food system, the threshold might be the point when stored food runs out. For a community energy cooperative, it might be the point when reserve funds cannot cover a major repair. Thresholds are rarely exact, so record a range and the evidence for it.

**Estimate recovery time.** Dependency mapping introduced recovery time as one feature of a critical node. Here, estimate it explicitly: if this component fails, how long until it works again, and what do people do in the meantime? Compare recovery time with **duration** from the previous lesson. If your energy system takes three weeks to repair but your reserves last one week, there is a two-week gap where the household falls back into dependence or hardship.

**Look for slow erosion.** Not all disruptions are sudden. Systems can drift toward a threshold gradually: a seed library that loses one knowledgeable volunteer each year, or reserves slowly spent on routine costs. Systems thinkers such as Donella Meadows describe how stocks that drain slowly are easy to ignore until they run out. Ask what is slowly declining, not only what could fail overnight.`
      },
      {
        title: 'Method 3: Assessing Social Resilience',
        content: `Many documented disasters suggest that relationships matter as much as equipment. Communities with dense networks of neighbors who know and check on each other often cope better than those with better hardware but weaker ties. Assessing resilience therefore means assessing social connections, not only physical systems.

Useful questions include:

- **Who checks on whom?** If communication systems failed, how would people find out who needs help? Is anyone isolated?
- **Who holds critical knowledge?** If a single person knows how to run the water filter or manage the cooperative's accounts, that person is a critical node.
- **How are decisions made under pressure?** Does the group have an agreed way to decide quickly, or will a crisis expose unresolved conflict? Conflict and Resilience covered building these capacities; assessment checks whether they actually exist.
- **What external relationships exist?** Ties to neighboring communities, local services and other cooperatives can provide help when local capacity is overwhelmed.

A simple method is a **relationship walk-through**: list the households in a block or group and, for each, name who would notice if they needed help within a day. Gaps in that list are resilience gaps. This exercise must be handled with respect and consent, since it touches on people's privacy and circumstances.`
      },
      {
        title: 'Equity and Honest Reporting',
        content: `Resilience is unevenly distributed, and an assessment that reports only averages can hide the people most at risk. The Principle of Distributive Justice asks practitioners to analyze who gains and who loses; in resilience work, this means asking who is affected first and recovers last.

Groups that often face greater exposure include people who depend on powered medical equipment, older people living alone, people without a car, renters who cannot modify their homes, and households with little savings. A community energy scheme that keeps the community center running during an outage may do little for a person on oxygen at home unless that need is specifically planned for.

Honest reporting also matters. Practitioners can be tempted to present resilience findings optimistically to encourage participation. The Principle of Intellectual Honesty asks you to distinguish what has been tested from what is assumed. A useful convention is to label each finding:

- **Tested**: verified in practice, such as an actual outage or a drill
- **Walked through**: examined in a scenario exercise but not tested
- **Assumed**: believed true but not yet examined

This keeps a community aware of where its confidence is earned and where it is hope. It also points directly to the next tests worth running.`
      }
    ],

    keyTakeaways: [
      'Resilience is the capacity to absorb, recover from and adapt to disruption, and is distinct from autonomy measured in normal times',
      'Disruption scenarios walk a dependency map through concrete, plausible shocks to reveal hidden dependencies and weakest links',
      'Comparing thresholds, recovery time and duration exposes the gaps where a transition could fall back into dependence',
      'Social relationships and distributed knowledge are central to resilience and must be assessed with care and consent',
      'Report who is most exposed, and label findings as tested, walked through or assumed'
    ],

    references: [
      {
        author: 'Walker, Brian & Salt, David',
        title: 'Resilience Thinking: Sustaining Ecosystems and People in a Changing World',
        year: 2006,
        publisher: 'Island Press',
        relevance: 'An accessible introduction to resilience, thresholds and adaptability in social-ecological systems.',
        url: 'https://openlibrary.org/works/OL18760646W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains buffers, delays and slowly draining stocks, which help practitioners see how systems approach thresholds.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Putnam, Robert D.',
        title: 'Bowling Alone: The Collapse and Revival of American Community',
        year: 2000,
        publisher: 'Simon & Schuster',
        relevance: 'A widely cited account of social capital, useful for understanding why relationships are part of community resilience.',
        url: 'https://openlibrary.org/works/OL4291077W'
      }
    ]
  },
  learningObjectives: [
    'Distinguish resilience from stability and from autonomy',
    'Design concrete disruption scenarios and apply them to a dependency map',
    'Estimate thresholds and recovery times and compare them with duration',
    'Assess social resilience, including relationships and distributed knowledge',
    'Report resilience findings honestly, identifying those most exposed'
  ],
  keyTerms: [
    { term: 'Resilience', definition: 'The capacity of a household or community to absorb disruption, recover essential functions and adapt, rather than collapse or fall back into dependence.' },
    { term: 'Disruption Scenario', definition: 'A concrete, plausible "what if" exercise that walks a dependency map through a specific shock to reveal what fails and in what order.' },
    { term: 'Threshold', definition: 'A point beyond which a system shifts into a different state that may be hard or impossible to reverse.' },
    { term: 'Recovery Time', definition: 'How long it takes for a failed component or system to function again after disruption.' },
    { term: 'Social Resilience', definition: 'The contribution of relationships, shared knowledge and decision-making capacity to how well a community withstands disruption.' }
  ]
}

export default lesson
