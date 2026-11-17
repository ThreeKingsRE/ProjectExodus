import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m7-l2',
  title: 'Energy System Failure Patterns',
  duration: '18 min',
  type: 'instruction',
  content: {
    introduction: `Energy systems fail in predictable patterns that Exodology can help us anticipate and address.

The previous lesson showed how much depends on the grid and how failures can cascade. This lesson looks more closely at where failures begin. Engineers usually describe a power system in three physical layers: **generation** (the plants that produce electricity), **transmission** (the high-voltage lines that carry it over long distances) and **distribution** (the local lines, poles, transformers and cables that bring it to customers). Each layer fails in characteristic ways.

Beneath all three sits a fourth layer that is not physical at all: the markets, regulations and investment decisions that determine whether the physical system is built and maintained well. Exodology pays particular attention to this layer, because it explains why the same physical weaknesses are left in place year after year, and because it often tells us whether a system can be reformed from within or whether reducing dependence on it is the wiser course.`,

    sections: [
      {
        title: 'Generation Failures',
        content: `Fuel supply disruption, equipment failure, weather impacts, and demand exceeding capacity. Concentration makes single failures catastrophic.

Each of these causes has a clear mechanism:

- **Fuel supply disruption**: a plant that runs on gas, coal or oil stops when its fuel stops. In Texas in February 2021, frozen gas wells and equipment reduced the gas available to power plants at the same moment demand for heating soared.
- **Equipment failure**: turbines, boilers, pumps and control systems break down, and older plants break down more often. Nuclear and large thermal plants may also shut down automatically for safety reasons.
- **Weather impacts**: extreme cold can freeze instruments and water lines; extreme heat reduces the efficiency of thermal plants and can limit the cooling water they need; drought reduces hydroelectric output; wind and solar output vary with weather.
- **Demand exceeding capacity**: when heat waves or cold snaps push demand above what available plants can supply, operators must cut some customers off in rotation to keep the whole system from collapsing, as happened in California in August 2020.

The final sentence of the original is the key structural point. When a large share of supply comes from a few large plants, losing one of them removes a large block of power at once. After the 2011 earthquake and tsunami disabled the Fukushima Daiichi nuclear plant and other generating stations in Japan, the Tokyo region faced planned rolling outages because so much capacity had been lost together. Concentration is efficient in normal times and fragile in abnormal ones.`
      },
      {
        title: 'Transmission Failures',
        content: `Line damage from weather, equipment age, overload from demand spikes, and physical or cyber attacks on substations.

Transmission lines are the long-distance highways of the grid, and a fault on one of them can affect millions of people:

- **Line damage from weather**: ice storms, high winds, hurricanes and wildfires can bring down towers and lines across large areas.
- **Equipment age**: many transmission components were installed decades ago. Older lines and substation equipment are more likely to fail, and the 2018 Camp Fire in California was traced to a failure on a transmission line that was roughly a century old.
- **Overload from demand spikes**: heavily loaded lines heat up and sag. When a sagging line touches a tree, it short-circuits and trips offline. This was the starting point of the 2003 Northeast blackout, and a similar tree contact on a Swiss line carrying power toward Italy began the September 2003 blackout that left almost all of Italy without power.
- **Physical or cyber attacks on substations**: substations, where voltage is changed and lines are switched, concentrate critical equipment in a small, exposed space.

Transmission failures are especially dangerous because of the cascade dynamics covered in the previous lesson. In July 2012, a series of grid failures in northern and eastern India left several hundred million people without power, one of the largest blackouts on record. Transmission links neighboring regions so they can share power; the same links allow trouble to spread.`
      },
      {
        title: 'Distribution Failures',
        content: `Local equipment failure, tree contact, vehicle collisions with poles, and underground cable deterioration.

Distribution failures are the most familiar kind. They usually affect a street, a neighborhood or part of a town rather than a whole region, but they are frequent, and utilities and regulators commonly report that most of the outage time customers experience starts on the distribution system rather than in generation or transmission.

- **Local equipment failure**: pole-top transformers, switches and fuses wear out or are damaged by lightning and animals.
- **Tree contact**: branches falling onto or growing into overhead lines are a leading cause of local outages, which is why utilities spend heavily on trimming vegetation.
- **Vehicle collisions with poles**: a single car crash can bring down a pole and cut power to many homes.
- **Underground cable deterioration**: burying lines protects them from wind and trees, but buried cables age, can be damaged by water and digging, and are slower and more expensive to locate and repair.

These failures matter for Exodology in two ways. First, they show that even a perfectly reliable regional grid still delivers power through a local network with its own weaknesses. Second, local failures are not evenly spread: neighborhoods with older equipment, fewer repair crews or lower priority in restoration plans tend to wait longer. Knowing where local reliability is weakest helps decide where backup capacity and community resilience centers will do the most good.`
      },
      {
        title: 'Systemic Failures',
        content: `Market failures where price signals fail to ensure reliability. Regulatory failures where oversight is inadequate. Investment failures where maintenance is deferred.

These three failures rarely cut power on their own. Instead, they create the conditions in which physical failures become more likely and more severe.

**Market failures.** Reliability benefits everyone on the grid, but individual companies may not be paid enough to provide it, for example by keeping spare capacity or protecting plants against rare extremes. During the California electricity crisis of 2000 and 2001, a poorly designed market allowed some traders, including Enron, to manipulate supply and prices, contributing to soaring costs and rolling blackouts.

**Regulatory failures.** After a 2011 cold-weather event in Texas and the Southwest, federal regulators recommended that generators prepare their equipment for winter, but these measures were largely voluntary. Many of the same weaknesses reappeared, on a much larger scale, in February 2021.

**Investment failures.** When budgets are tight, maintenance is one of the easiest costs to postpone, because its benefits are invisible until something breaks. Investigations after the 2018 Camp Fire focused on the utility's maintenance of aging equipment, and the utility later pleaded guilty to involuntary manslaughter charges. In Puerto Rico, years of financial distress at the public utility left the grid poorly maintained before Hurricane Maria struck.

For Exodology, this layer is where the question "reform or exit?" becomes concrete. If systemic failures can be corrected through better market design, regulation and investment, reform may be the right path. If the same failures recur despite repeated warnings, households and communities have good reason to build parallel capacity while continuing to press for reform.`
      },
      {
        title: 'Implications for Exit',
        content: `Recognizing failure patterns turns a vague sense of risk into specific, answerable questions. Where does my power come from, and how concentrated is it? Which transmission links does my region depend on? How old is the local distribution network, and how quickly are outages repaired here? Have regulators acted on past warnings, or have the same failures repeated?

The answers point toward different responses. A community facing mainly distribution failures may gain most from local backup and better vegetation management. A region exposed to generation and transmission failures may benefit from more local generation and storage, the subject of the next lesson. Where systemic failures persist, building **parallel systems** while staying connected (a **soft exodus**) protects people without abandoning the shared grid.

Throughout, the Principle of Distributive Justice applies. Failure patterns fall hardest on people who cannot afford backup, live in neglected areas or depend on powered medical equipment. Anticipating failures is only useful if the plans that follow include them.`
      }
    ],
    keyTakeaways: [
      'Failures occur at generation, transmission, and distribution',
      'Systemic issues enable physical failures',
      'Understanding patterns aids anticipation',
      'Repeated failures despite past warnings are a signal that reform alone may not be enough'
    ],
    references: [
      {
        author: 'Nye, David E.',
        title: 'When the Lights Went Out: A History of Blackouts in America',
        year: 2010,
        publisher: 'MIT Press',
        relevance: 'Historical study of major American blackouts, their technical causes and their social consequences.',
        url: 'https://openlibrary.org/works/OL2687864W'
      },
      {
        author: 'Bakke, Gretchen',
        title: 'The Grid: The Fraying Wires Between Americans and Our Energy Future',
        year: 2016,
        publisher: 'Bloomsbury USA',
        relevance: 'Accessible account of how the American grid was built, why it is aging and strained, and how markets and regulation shape its reliability.',
        url: 'https://openlibrary.org/works/OL20030969W'
      },
      {
        author: 'Perrow, Charles',
        title: 'The Next Catastrophe: Reducing Our Vulnerabilities to Natural, Industrial, and Terrorist Disasters',
        year: 2007,
        publisher: 'Princeton University Press',
        relevance: 'Argues that concentration of energy and other infrastructure magnifies disasters and that reducing concentration reduces vulnerability.',
        url: 'https://openlibrary.org/works/OL4468922W'
      }
    ]
  },
  learningObjectives: [
    'Identify failure patterns at each grid level',
    'Understand systemic factors enabling failures',
    'Apply failure patterns to assess a community\'s energy exposure and possible responses'
  ],
  keyTerms: [
    { term: 'Generation', definition: 'The production of electricity in power plants or other sources such as solar panels and wind turbines.' },
    { term: 'Transmission', definition: 'The high-voltage network that carries electricity over long distances from generators to regions where it is used.' },
    { term: 'Distribution', definition: 'The local network of lines, poles, transformers and cables that delivers electricity to homes and businesses.' },
    { term: 'Rolling Blackout', definition: 'A planned, rotating cut in power to groups of customers, used when demand exceeds supply to avoid a wider collapse.' },
    { term: 'Deferred Maintenance', definition: 'Postponing repairs or replacement of equipment to save money in the short term, which raises the risk of later failure.' }
  ]
}

export default lesson
