import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m1-n1',
  title: 'Case Study: National Energy Transitions',
  duration: '25 min',
  type: 'instruction',
  content: {
    introduction: `Earlier lessons traced energy transitions across centuries (wood to coal, coal to oil) and examined how scale changes the work of exit. This case study narrows the focus to a handful of well-documented national transitions from the last fifty years. Each one is an attempt, more or less deliberate, by a whole country to reduce its dependence on one energy regime and build another.

National energy transitions are useful for Exodology because they show every core question at once. When was exit appropriate, and what catalyst made it thinkable? How was the exit managed, and who paid for it? What alternative was built before the old system was retired? And what was owed to the workers and regions that depended on the regime being left?

The cases below are deliberately brief. They are teaching cases, not complete histories, and each is contested by scholars and by the people who lived through it. Read them as material for comparison, following the Exodological habit of learning from documented transitions across contexts rather than from a single success story.`,

    sections: [
      {
        title: 'Reading a National Transition as an Exit',
        content: `A national energy transition is an exit at the largest scale most practitioners will ever study. The dependency being reduced is usually a fuel (imported oil, domestic coal) together with the infrastructure, institutions and jobs built around it. That bundle is what the style guide calls a **regime**, and its resistance to change is **lock-in**.

When reading a case, ask the same questions you would ask of a household or community exit, scaled up:

1. **The dependency map**: What did the country depend on, and where were the critical nodes (import routes, a single fuel for power, a few large employers)?
2. **The catalyst**: What landscape pressure opened the exit window? Price shocks, accidents, climate commitments and resource depletion all appear in the cases below.
3. **The parallel system**: What alternative was built, by whom, and was it operating before the old system was wound down?
4. **Managed exit or collapse**: Was the decline of the old regime planned and phased, or did it happen faster than communities could adapt?
5. **Residual duty**: What was done for those who could not easily leave the old system, especially workers and regions?

These questions keep the analysis Exodological rather than purely technical. A transition that cuts emissions but devastates a region without support has succeeded on one criterion and failed on another.`
      },
      {
        title: 'Denmark: A Catalyst and a Distributed Alternative',
        content: `In 1973 Denmark relied heavily on imported oil for its energy, including for power and heat. The oil crisis of that year exposed this dependency as a critical node: when supply was disrupted and prices rose sharply, the whole country felt it. In the language of the response spectrum, the shock shifted the question from optimizing the existing system to reducing dependence on it.

The Danish response combined several strands over the following decades: energy efficiency and taxation, expansion of district heating, development of North Sea oil and gas, and support for wind power. In 1985 the Danish parliament decided not to build nuclear power, which closed off one path and kept attention on others.

What makes the case instructive is the **ownership pattern** of early wind power. Many early turbines were owned by local cooperatives, farmers and households rather than by large utilities. This gave communities a direct stake in the parallel system and is widely credited with building local acceptance. Denmark now has one of the highest shares of wind power in its electricity of any country.

Exodological reading: a landscape catalyst opened the exit window, but the exit itself took decades and relied on many actors. The parallel system grew alongside the old one rather than replacing it overnight.`
      },
      {
        title: 'Germany: Building the Alternative, Then Scheduling the Exits',
        content: `Germany's Energiewende ("energy transition") is one of the most studied national cases. Its renewable energy law of 2000 guaranteed fixed payments (feed-in tariffs) for electricity from renewable sources. A large share of early solar and wind capacity was owned by individuals, farmers and energy cooperatives, which made the parallel system unusually distributed.

Germany then set dates for leaving two regimes. A nuclear phase-out was agreed in the early 2000s, delayed in 2010, re-accelerated after the Fukushima accident in 2011, and completed when the last reactors closed in April 2023. For coal, a government-appointed commission including industry, unions, environmental groups and affected regions recommended a phase-out, and a 2020 law set an end date of 2038 at the latest, with substantial public funding for structural change in coal regions.

The case shows both strengths and tensions:

- **Strength**: scheduled, legislated exits gave workers and regions years of notice, a hallmark of managed exit rather than collapse.
- **Tension**: the order of exits was debated. Critics argue that closing nuclear before coal prolonged fossil use; supporters point to public consent and safety concerns.
- **Tension**: costs of the feed-in support were largely recovered through a surcharge on electricity bills, raising questions about who bore the transition burden.

Exodological reading: the parallel system was built first and the exit dates came later, but sequencing choices carried real trade-offs that remain contested.`
      },
      {
        title: 'United Kingdom: Two Coal Exits Compared',
        content: `The United Kingdom offers a rare chance to compare two exits from the same fuel within one country.

**The first exit: coal mining.** After the 1984 to 1985 miners' strike, the number of deep coal mines fell rapidly over the following years. The closures were driven by economic and political decisions, and many mining communities experienced long-lasting unemployment, ill health and population decline. Whatever one's view of the economics, for many communities this was experienced as collapse rather than managed exit: the old system was withdrawn far faster than any alternative was built locally, and residual duty to those who stayed was widely judged inadequate.

**The second exit: coal power.** In the 2010s, coal's share of British electricity fell from a major source to almost nothing. A carbon price for power generation, the growth of gas and offshore wind, and an announced end date all contributed. The last coal power station, Ratcliffe-on-Soar, closed in September 2024. This exit was announced years in advance and affected a much smaller workforce.

The contrast is a powerful teaching tool. The same fuel was exited twice, with very different human consequences. Notice, though, that the comparison is not entirely fair: the second exit involved fewer workers and occurred in a different economic landscape. Good Exodological analysis names such differences instead of drawing an easy moral.`
      },
      {
        title: 'Patterns for Exit at Scale',
        content: `Read together, these cases suggest several patterns. They are observations from the cases, not laws, and each has exceptions.

**Catalysts open windows, but do not do the work.** The 1973 oil crisis and the 2011 Fukushima accident changed what was politically possible. The exits themselves still took decades of policy, investment and organizing.

**Parallel systems first.** Where the alternative was operating before the old regime was retired (Danish wind, German renewables), the exit was more manageable. Where the old system was removed with little local alternative (UK mining areas), the result looked more like collapse.

**Ownership shapes legitimacy.** Distributed ownership of the new system, through cooperatives and local investors, gave people a stake in the transition and helped build acceptance. This links to the Applied lessons on cooperative structures and commons governance.

**Notice is a form of justice.** Announced end dates gave workers, firms and regions time to plan. Abrupt closures shifted the transition burden onto those with the least exit capability.

**Costs are always distributed somehow.** Surcharges, taxes, public funds and lost livelihoods are all ways of paying for a transition. The question is never whether someone pays but who, and whether that distribution was chosen openly. The equity module examines this in depth.`
      },
      {
        title: 'Limits of the Case Method',
        content: `National cases are seductive because they seem to offer ready-made models. The style guide warns against several errors that apply directly here.

**Hero narratives.** It is tempting to credit a single leader, law or movement. Each case above involved many actors, favorable conditions and luck.

**Teleological framing.** None of these transitions has a guaranteed endpoint. Germany's case shows reversals, and every country still depends on fossil fuels for parts of its energy use.

**Ignoring context.** Denmark is small, windy and close to neighbors it can trade electricity with. France, by contrast, pursued a rapid, centrally planned nuclear build-out after 1973 that reduced oil dependence in power by a very different route. What worked in one geography, political culture and resource base may not transfer.

**Selective criteria.** A transition can look successful on emissions or energy security and poor on equity, or the reverse. Evaluate cases against multiple criteria: effectiveness, equity and sustainability, as the case study standards require.

The aim is not to find the right national model to copy. It is to build judgment about the conditions under which exit at scale can be managed well, and about who must be protected along the way.`
      }
    ],

    keyTakeaways: [
      'National energy transitions are exits at the largest scale, and can be read with the same questions as smaller exits: dependency, catalyst, parallel system, managed exit or collapse, and residual duty',
      'Catalysts such as the 1973 oil crisis open exit windows, but the exits themselves take decades of deliberate work',
      'Where alternatives were built before the old regime was retired, transitions were more manageable; abrupt withdrawal without local alternatives resembled collapse',
      "Distributed ownership and advance notice strengthened legitimacy and fairness, while the distribution of costs remained contested in every case",
      'Cases teach judgment, not templates: context, multiple criteria and the risk of hero narratives must always be considered'
    ],

    references: [
      {
        author: 'Smil, Vaclav',
        title: 'Energy Transitions: History, Requirements, Prospects',
        year: 2010,
        publisher: 'Praeger',
        relevance: 'Historical and quantitative account of why national and global energy transitions take decades.',
        url: 'https://openlibrary.org/works/OL15692535W'
      },
      {
        author: 'Mitchell, Timothy',
        title: 'Carbon Democracy: Political Power in the Age of Oil',
        year: 2011,
        publisher: 'Verso',
        relevance: 'Shows how energy regimes shape political power, explaining why exits from coal and oil are contested.',
        url: 'https://openlibrary.org/works/OL16801915W'
      },
      {
        author: 'Yergin, Daniel',
        title: 'The Prize: The Epic Quest for Oil, Money, and Power',
        year: 1991,
        publisher: 'Simon & Schuster',
        relevance: 'Detailed history of the oil regime, including the 1973 crisis that catalyzed several national transitions.',
        url: 'https://openlibrary.org/works/OL2748135W'
      }
    ]
  },
  learningObjectives: [
    'Analyze a national energy transition using the questions of dependency, catalyst, parallel system, managed exit and residual duty',
    'Compare the Danish, German and British cases in terms of how the old regime was exited and who bore the costs',
    'Distinguish features of managed exit from features of collapse in national-scale cases',
    'Evaluate the limits of transferring lessons from one national context to another'
  ],
  keyTerms: [
    { term: 'Regime', definition: 'The dominant, stable configuration of a sociotechnical system, such as a national energy system built around one fuel.' },
    { term: 'Catalyst', definition: 'An event or condition that triggers or accelerates transition dynamics, such as an oil price shock or a major accident.' },
    { term: 'Lock-in', definition: 'The condition in which a system resists change because of accumulated advantages, infrastructure and interdependencies.' },
    { term: 'Managed Exit', definition: 'A planned, phased departure from a system that gives affected people time and support to adapt, in contrast to collapse.' },
    { term: 'Residual Duty', definition: 'Ongoing obligations to those who remain in, or depended on, a system that is being left.' }
  ]
}

export default lesson
