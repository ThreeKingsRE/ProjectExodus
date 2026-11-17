import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m2-l3',
  title: 'Energy System Alternatives',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Energy independence provides resilience against both grid failures and fossil fuel transitions.

Those are two different risks. **Grid failures** are sudden: storms, heat waves, equipment faults or cyberattacks can cut power for hours or weeks, and because water pumping, heating controls, refrigeration and communications all depend on electricity, an outage quickly becomes a crisis in other systems too. **Fossil fuel transitions** are slow: as societies move away from coal, oil and gas, prices, supply and regulation change over years and decades, and households and communities locked into fossil fuels face rising costs and stranded equipment. A well-designed energy alternative can reduce exposure to both.

The previous lesson introduced the microgrid and its ability to island from the wider grid. This lesson surveys the full range of energy alternatives that a household or community can combine: ways to generate power, ways to store it, ways to need less of it, and the possible relationships with the existing grid. The lessons that follow examine generation options, storage and distribution, and the economics and governance of shared energy in more detail. Here the aim is the overall picture and the trade-offs that connect its parts.`,

    sections: [
      {
        title: 'Generation Alternatives',
        content: `Solar PV, small wind, micro-hydro, biomass. Each has different resource requirements and applicability. Solar is most broadly applicable; hydro needs water flow; biomass needs sustainable fuel supply.

The useful comparison is not which technology is best in general, but which local resource is available and when it delivers energy:

- **Solar photovoltaics (PV)** convert sunlight directly into electricity, with no moving parts and modest maintenance. Panels work almost everywhere people live, which is why solar is the most broadly applicable option. Output varies daily and seasonally, and is low in winter at high latitudes, so solar almost always needs storage or another source alongside it.
- **Small wind** turbines can produce well where winds are strong and steady, but output rises steeply with wind speed, so a site with poor wind produces far less than expected. Turbines have moving parts that need maintenance, and nearby buildings and trees reduce performance.
- **Micro-hydro** uses flowing water, usually by diverting part of a stream through a pipe to a small turbine. Where a suitable stream exists, it can generate steadily day and night, which makes it very valuable. Few sites have the necessary flow and drop, and diverting water raises ecological and legal questions.
- **Biomass** burns or digests plant and animal material for heat or power. It can be stored and used on demand, unlike sun and wind. Its sustainability depends entirely on the fuel supply: wood harvested faster than it regrows, or burned in ways that pollute indoor and outdoor air, creates new harms.

For exit planning, combining sources whose output peaks at different times (for example solar in summer and wind or hydro in winter) often matters more than maximizing any single source. A diverse mix is an application of designing for resilience over optimization.`
      },
      {
        title: 'Storage Solutions',
        content: `Batteries for short-term storage. Thermal mass, ice storage, hydrogen for longer durations. Pumped hydro for community scale. Storage is often more challenging than generation.

Storage is the bridge between when energy is produced and when it is needed. Without it, solar does nothing for the evening and a calm week leaves a wind system idle.

- **Batteries** (today most commonly lithium-ion) respond instantly and suit storage for hours to a day or two. Their cost has fallen sharply in recent years, but sizing a battery bank to cover long periods of low production quickly becomes expensive.
- **Thermal mass** stores heat or cold in materials such as masonry, water or earth, so that a building stays comfortable without continuous energy input. **Ice storage** makes ice when energy is plentiful and uses it for cooling later. Both store energy as heat or cold rather than electricity, which is often the cheapest way to cover heating and cooling needs.
- **Hydrogen** can be produced from surplus electricity and stored for long periods, then converted back to power. Much energy is lost along the way, and the equipment remains costly and demanding to operate safely.
- **Pumped hydro** pumps water uphill when energy is abundant and releases it through turbines when it is needed. It is a mature technology that stores very large amounts of energy, but it needs suitable terrain, reservoirs and significant investment.

Why is storage often more challenging than generation? Generation is sized to average needs; storage must be sized to the worst stretch the system has to survive, such as a week of winter cloud. Physicist David MacKay showed, with simple arithmetic, how quickly storage requirements grow when a system must ride through long gaps in supply. For exit planning, the honest question is not "how much can we generate?" but "how long can we keep critical loads running when generation stops?"`
      },
      {
        title: 'Demand Reduction',
        content: `The cheapest watt is the one you don't use. Efficiency improvements, passive design, behavior change. Often more cost-effective than generation.

The energy analyst Amory Lovins coined the word "negawatt" for this idea: a unit of electricity saved is as useful as a unit generated, and is often much cheaper to obtain. Demand reduction comes in three forms:

- **Efficiency improvements** deliver the same service with less energy: insulation and air sealing, efficient lighting and appliances, heat pumps in place of resistance heating.
- **Passive design** lets buildings use sun, shade, thermal mass and natural ventilation to stay comfortable with little active heating or cooling. The Passivhaus standard, developed in Germany from around 1990, showed that very low heating demand is achievable in a cold climate.
- **Behavior change** shifts how and when energy is used, such as running appliances when solar output is high or heating only occupied rooms.

Demand reduction matters doubly for exit. Every unit of reduced demand shrinks the generation and, above all, the storage that an alternative system must provide, which can turn an unaffordable design into an affordable one. It also raises exit capability immediately, because a home that needs little energy can ride through an outage longer on whatever backup it has.

There is an equity tension here. Efficiency upgrades often require upfront money and control over the building, so owners can make them more easily than renters or low-income households. Programs that fund efficiency for those households, and landlord-tenant arrangements that share the benefits, help keep demand reduction from becoming another privilege of those who already have the most options.`
      },
      {
        title: 'Grid Relationship',
        content: `Complete off-grid, grid-tied with backup, community microgrid. Each has tradeoffs in cost, complexity, and resilience. Most situations benefit from hybrid approaches.

The three options sit at different points between dependence and independence:

- **Complete off-grid** systems have no grid connection. They offer the most independence but must be sized for the worst conditions, usually with large storage and a backup generator, and every failure is the household's own to fix. This is the energy equivalent of a hard exodus and is most common where a grid connection is unavailable or very expensive.
- **Grid-tied with backup** systems stay connected, exchanging power with the grid in normal times and switching to local generation and storage during an outage. One technical detail matters greatly: standard grid-tied solar inverters are designed to shut down when the grid fails, to protect line workers. A grid-tied system without batteries and the right equipment provides no power in a blackout.
- **Community microgrids** share generation and storage among many buildings and can island from the wider grid. They spread costs and allow diversity of sources and loads, but require shared governance, as later lessons in this module explain.

**Hybrid approaches** keep the grid as one resource among several. The grid supplies what local systems cannot provide cheaply (such as winter shortfalls), while local systems supply resilience during outages. This is a soft exodus applied to energy: dependence is reduced and made optional rather than ended. It also preserves a relationship with the shared grid, which matters for those who remain on it, since the fixed costs of the grid are shared among its users.`
      },
      {
        title: 'Implications for Exit',
        content: `Pulling the four sections together suggests an order of work for energy exit:

1. **Reduce demand first**, because it lowers every later cost and raises resilience immediately.
2. **Identify critical loads**, such as refrigeration for medicines, water pumping, heating controls and communications, and design first for keeping those running during an outage.
3. **Match generation to local resources**, preferring a diverse mix where possible.
4. **Size storage honestly** for the outages and seasonal gaps the system must survive.
5. **Choose a grid relationship** that keeps options open, which in most cases means a hybrid.

Energy decisions also have consequences beyond the household. When many wealthier customers reduce their grid purchases, the remaining customers may face higher charges to cover the grid's fixed costs, a concern debated in many electricity markets. Exodology's **residual duty** asks practitioners to notice such effects and to favor approaches, such as community-owned systems open to renters and low-income households, that share the benefits of energy alternatives rather than concentrating them.`
      }
    ],

    keyTakeaways: [
      'Multiple generation technologies for different contexts',
      'Storage is often the limiting factor',
      'Demand reduction is most cost-effective',
      'Hybrid grid relationships usually optimal',
      'Design first for keeping critical loads running during an outage, and share the benefits of energy alternatives with those who stay on the grid'
    ],

    references: [
      {
        author: 'MacKay, David J. C.',
        title: 'Sustainable Energy - Without the Hot Air',
        year: 2008,
        publisher: 'UIT Cambridge',
        relevance: 'A numbers-based comparison of generation, storage and demand reduction that shows how to estimate what each option can actually deliver.',
        url: 'https://openlibrary.org/works/OL16797804W'
      },
      {
        author: 'Lovins, Amory B.',
        title: 'Soft Energy Paths: Toward a Durable Peace',
        year: 1977,
        publisher: 'Ballinger / Friends of the Earth',
        relevance: 'Influential argument for efficiency and diverse, distributed renewable sources as an alternative to centralized energy supply.',
        url: 'https://openlibrary.org/works/OL5898369W'
      },
      {
        author: 'Smil, Vaclav',
        title: 'Energy and Civilization: A History',
        year: 2017,
        publisher: 'MIT Press',
        relevance: 'A history of human energy use and past energy transitions, giving context for why energy systems change slowly.',
        url: 'https://openlibrary.org/works/OL20186754W'
      }
    ]
  },
  learningObjectives: [
    'Evaluate energy generation options',
    'Understand storage requirements',
    'Design hybrid energy systems',
    'Prioritize demand reduction and critical loads in an energy exit plan'
  ],
  keyTerms: [
    { term: 'Demand Reduction', definition: 'Lowering energy needs through efficiency, passive design and changes in use, so that less generation and storage are required.' },
    { term: 'Critical Loads', definition: 'The uses of energy that must keep running during an outage, such as water pumping, refrigeration of medicines and communications.' },
    { term: 'Grid-Tied System', definition: 'A local energy system connected to the wider grid, exchanging power with it in normal times.' },
    { term: 'Microgrid', definition: 'A group of loads and local energy resources within defined boundaries that can operate connected to the grid or on its own in island mode.' },
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' }
  ]
}

export default lesson
