import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m3-n1',
  title: 'Who Bears Transition Costs?',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The previous lesson introduced justice frameworks for exit, including exit equity and transition burden. This lesson makes those ideas practical. Every transition has costs, and every transition has benefits. The Principle of Distributive Justice asks Exodologists to analyze who gains and who loses, and the Core Principles summarize the same concern in three words: who gains, who loses?

Answering that question well is harder than it looks. Costs are often hidden, delayed or spread across people who never appear in a project plan. Benefits are often concentrated among those who designed the transition. And the same exit can look fair from a national average and deeply unfair from a single town.

This lesson sets out the kinds of costs and benefits transitions create, how to trace where they land, what history shows about getting this wrong, and how to make distribution an explicit design choice rather than an accident.`,

    sections: [
      {
        title: 'The Many Forms of Transition Cost',
        content: `Transition costs are much broader than the money spent on new infrastructure. A useful inventory includes:

- **Direct financial costs**: higher prices, new equipment, fees, taxes or surcharges used to fund the transition.
- **Livelihood costs**: lost jobs, lost income, and skills that no longer have a market.
- **Asset costs**: homes, businesses and equipment that lose value when the old system declines, sometimes called stranded assets.
- **Place-based costs**: declining local tax bases, closing services and population loss in regions built around the old regime.
- **Health and environmental costs**: pollution from new activities such as mining for new materials, or from old facilities left behind.
- **Time and effort costs**: the hours needed to learn new systems, fill in applications or travel further for services.
- **Cultural and identity costs**: the loss of occupations, traditions and community identity tied to the old system.

The last three are the easiest to overlook because they rarely appear in budgets. Yet for many households they are the costs that matter most. A complete cost analysis names every category, even when it cannot measure all of them precisely, in line with the Principle of Intellectual Honesty.`
      },
      {
        title: 'Tracing Where Costs and Benefits Land',
        content: `Listing costs is only the first step. The distributive question is where they land. A simple method is to build a table with groups of people as rows and categories of cost and benefit as columns, then fill each cell with evidence about the size, timing and certainty of the effect.

When choosing rows, look beyond the obvious stakeholders:

- Workers in the old system, and also workers in its supply chains and the local businesses that depend on their wages.
- Consumers grouped by income, since the same price rise is a much larger share of a low income.
- Renters as well as owners, since owners can often invest in alternatives while renters cannot.
- Rural and urban residents, who differ in access to alternatives.
- Future residents and future generations.
- People outside the region or country, such as communities where new materials are mined.

Then look at timing. Costs often arrive early and visibly; benefits often arrive later and are spread thinly. A transition can be positive on average and still impose concentrated, immediate losses on particular groups. This is the pattern that most often produces resistance, and it is a pattern that design can address.`
      },
      {
        title: 'Lessons from Documented Cases',
        content: `History offers clear warnings about unexamined distribution.

**Environmental justice research.** In the United States, research by sociologist Robert Bullard and others documented that polluting facilities were disproportionately sited in Black and low-income communities. The benefits of industrial systems were widely shared, while their costs were concentrated on people with little political power. Transitions that site new infrastructure, or leave old contamination behind, can repeat this pattern.

**Coal regions.** In Britain after the 1980s, and in parts of Appalachia in the United States, the decline of coal mining left many communities with lasting unemployment and loss of services. The wider economy adjusted, but the costs fell heavily on particular places.

**Fuel prices.** In France in 2018, planned increases in fuel taxes contributed to the large "gilets jaunes" protests, with many participants from areas where people depend on cars and have few alternatives. The tax increase was suspended. Whatever one's view of the policy, the episode showed how a measure aimed at a transition can be experienced as unfair by people with low exit capability.

**Negotiated alternatives.** In 2018 Spain's government, unions and mining companies reached an agreement on closing most coal mines that included early retirement, retraining and investment in mining regions. Its long-term outcomes are still being assessed, but it illustrates distribution being negotiated in advance rather than left to chance.`
      },
      {
        title: 'Hidden and Delayed Costs',
        content: `Some of the most serious transition costs are invisible at the moment of decision. The literary scholar Rob Nixon used the phrase "slow violence" for environmental harm that unfolds gradually and out of sight, such as contamination or soil degradation, and observed that it falls disproportionately on poor communities whose suffering attracts little attention.

Transitions can create slow costs of their own:

- Abandoned mines, wells and industrial sites that leak pollution long after the jobs have gone.
- Pension and health obligations to former workers that become unfunded when companies close.
- Gradual loss of services in places whose population and tax base are shrinking.
- Supply chains for new technologies that shift extraction to distant regions.

Because these costs appear years later, they are easy to leave out of plans and easy to forget once the headline transition is declared a success. The Principle of Systemic Responsibility asks practitioners to consider effects over extended time horizons and to monitor outcomes as they become visible. Practically, that means assigning responsibility for legacy costs at the start, through bonds, funds or binding commitments, rather than hoping someone will pay later.`
      },
      {
        title: 'Making Distribution a Design Choice',
        content: `Once costs and benefits have been traced, the question becomes what to do about their distribution. Common approaches, drawn from just transition practice and public policy, include:

**Compensation and support.** Income support, early retirement, retraining and relocation assistance for workers; targeted payments or rebates for low-income households facing higher prices.

**Shared benefits.** Community ownership of new infrastructure, local hiring commitments, and revenue sharing so that places hosting new systems also gain from them.

**Phasing and notice.** Spreading costs over time and announcing changes early, so that people can prepare.

**Legacy funding.** Requiring that the costs of cleaning up and supporting communities be funded before or during the transition, not afterwards.

**Voice.** Involving the groups who bear costs in decisions about the transition. This is required by the Principle of Procedural Justice, and it also produces better information about costs that outsiders would miss.

None of these is free, and each raises its own questions about who pays for the support. The point is not to eliminate all costs, which is impossible, but to ensure that their distribution is chosen openly and that, when trade-offs are unavoidable, priority goes to those with less power.`
      }
    ],

    keyTakeaways: [
      'Transition costs include financial, livelihood, asset, place-based, health, time and cultural costs, many of which never appear in budgets',
      'Tracing who bears each cost, and when, reveals concentrated losses that averages hide',
      'Documented cases from environmental justice research, coal regions and fuel price disputes show the harm of unexamined distribution',
      'Hidden and delayed costs require responsibility to be assigned at the start of a transition',
      'Distribution should be an explicit, participatory design choice that gives priority to those with less power'
    ],

    references: [
      {
        author: 'Bullard, Robert D.',
        title: 'Dumping in Dixie: Race, Class, and Environmental Quality',
        year: 1990,
        publisher: 'Westview Press',
        relevance: 'Foundational environmental justice study of how the costs of industrial systems are concentrated on marginalized communities.',
        url: 'https://openlibrary.org/works/OL3953150W'
      },
      {
        author: 'Nixon, Rob',
        title: 'Slow Violence and the Environmentalism of the Poor',
        year: 2011,
        publisher: 'Harvard University Press',
        relevance: 'Introduces the idea of gradual, hidden environmental harm that falls on the poor, relevant to delayed transition costs.',
        url: 'https://openlibrary.org/works/OL16189146W'
      }
    ]
  },
  learningObjectives: [
    'Classify the financial, livelihood, asset, place-based, health, time and cultural costs of a transition',
    'Construct a table showing how costs and benefits are distributed across groups and over time',
    'Analyze documented cases in which transition costs fell on people with little power',
    'Propose measures that make the distribution of transition costs fair and explicit'
  ],
  keyTerms: [
    { term: 'Transition Burden', definition: 'The costs and difficulties experienced by those undergoing transition.' },
    { term: 'Distributive Justice', definition: 'Concern with how the benefits and burdens of a transition are distributed across groups and communities.' },
    { term: 'Stranded Assets', definition: 'Homes, equipment or investments that lose much of their value because the system they depended on declines.' },
    { term: 'Legacy Costs', definition: 'Obligations left by an old system, such as pollution cleanup or pensions, that continue after the system is exited.' },
    { term: 'Slow Violence', definition: 'Gradual, often invisible harm that unfolds over time and space (a term from Rob Nixon\'s environmental humanities work).' }
  ]
}

export default lesson
