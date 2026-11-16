import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m4-n2',
  title: 'Renewable Generation Options',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The Energy System Alternatives lesson surveyed the main generation technologies in brief: solar is most broadly applicable, hydro needs water flow, biomass needs a sustainable fuel supply. This lesson goes further. It asks how a practitioner designing a community microgrid should actually compare those options, and what each one implies for exit capability, maintenance, cost and fairness.

Generation choices are not only technical. Each technology creates its own pattern of dependencies: on weather, on water rights, on fuel supply chains, on manufacturers, on specialist skills. Each also places burdens on particular people and places, from the neighbors who look at a turbine to the downstream users of a river. Choosing a generation mix is therefore an exercise in dependency mapping and in distributive justice as much as in engineering.

The lesson begins with the concepts needed for honest comparison, then examines solar, wind, micro-hydro, and combustion-based and other sources, and closes with the principles for assembling them into a resilient portfolio. The next lesson takes up storage and distribution, which determine how much of this generation can actually be used when it is needed.`,

    sections: [
      {
        title: 'Comparing Sources Honestly: Energy, Power and Timing',
        content: `Physicist **David MacKay** argued that public debate about energy is full of claims that sound large but are never put into numbers. His advice applies at community scale: before choosing a technology, estimate how much energy it can really deliver at your site and compare that with what you actually use. Four concepts make the comparison possible.

**Power versus energy**: Power is the rate of supply at a moment (kilowatts); energy is the total over time (kilowatt-hours). A source with a large rated power may deliver little energy if it rarely runs at full output.

**Capacity factor**: The ratio between the energy a source actually produces over a year and what it would produce running at full rated power all the time. Capacity factors vary greatly by technology and site, which is why nameplate ratings alone mislead.

**Timing and variability**: When does the source produce? Solar follows the sun; wind follows weather systems; hydro follows rainfall and snowmelt; fuel-based generators run on demand. The same annual energy has very different value depending on whether it arrives when loads need it.

**Power density**: Energy scientist **Vaclav Smil** has shown that renewable sources typically deliver far less power per unit of land area than fossil fuels. For a community, this means generation competes for roofs, fields and riverbanks, and land use becomes a central design and justice question.

Together these concepts replace the question "which technology is best?" with a better one: which combination meets our critical loads, at the times they occur, with the land, skills and money we have?`
      },
      {
        title: 'Solar Photovoltaics',
        content: `Solar photovoltaic (PV) panels are the most common generation source in community microgrids, for good reasons.

**Strengths**: PV is **modular**: a system can start small and grow panel by panel, which suits a staged soft exodus. It has no moving parts in the panels themselves, needs relatively little routine maintenance, and is quiet. Its output is variable but **predictable** in pattern: it is known when the sun rises, and seasonal variation can be estimated well from local data. Costs have fallen substantially over recent decades, making solar the most accessible option for many communities.

**Weaknesses**: Output is zero at night and lower in winter and cloudy weather, often when heating and lighting loads are highest. In island mode, a solar-heavy microgrid therefore depends heavily on storage. Shading from trees or buildings can sharply reduce output. Rooftop capacity is limited, and ground-mounted arrays use land.

**Dependency profile**: Solar replaces a fuel dependency with an equipment dependency. Panels, inverters and batteries are manufactured in a small number of places and travel through long supply chains. A community does not need to manufacture them, but it should map this dependency: keep spare inverters or parts for critical systems, choose equipment that local technicians can service, and avoid designs that only one vendor can maintain.

**Justice considerations**: Rooftop solar has historically been easier for homeowners with capital and suitable roofs to adopt. Shared arrays on community buildings or land can extend access to renters and lower-income households, an example of designing on-ramps rather than lifeboats.`
      },
      {
        title: 'Wind: Small Turbines and Community Wind',
        content: `Wind generation spans a wide range, from small turbines serving a farm or household to multi-megawatt machines owned by communities.

**Strengths**: Where the wind resource is good, wind can produce at night and often more strongly in winter, complementing solar's daily and seasonal pattern in many climates. Larger turbines can generate a great deal of energy from a small land footprint, since land around the base can remain in other uses.

**Weaknesses**: Wind output is highly sensitive to siting. Wind near the ground and around buildings and trees is slow and turbulent, and small turbines installed in such locations frequently produce much less than their owners expect. Careful measurement of the local resource, ideally over a full year, is essential before investment. Turbines have moving parts that need regular maintenance, sometimes requiring specialist access at height. Noise, visual impact and effects on birds and bats are real concerns that must be assessed and discussed with neighbors.

**Community ownership**: Denmark offers widely documented examples of local and cooperative ownership of wind power. The Middelgrunden offshore wind farm near Copenhagen was developed partly by a cooperative of local investors, and the island of Samsø became known internationally for meeting its electricity needs largely from wind turbines with substantial local ownership. These cases suggest that who owns a turbine affects how a community experiences it: people who share in the benefits are often more willing to share the burdens.

For an exit planner, wind is usually best treated as a complement to solar where the resource is proven, rather than as a default choice.`
      },
      {
        title: 'Micro-Hydro: Reliable but Site-Specific',
        content: `Where a suitable stream or river exists, micro-hydro can be the most valuable source in a microgrid.

**Strengths**: A small run-of-river system diverts part of a stream's flow through a pipe to a turbine and returns it downstream. Unlike solar and wind, it can generate continuously, day and night, as long as water flows. That steady output reduces the need for storage dramatically. Well-built systems can operate for decades with simple maintenance, and the technology is mature enough that it can be built and maintained with regional skills.

**Weaknesses**: Micro-hydro depends on two things few sites have: sufficient flow and sufficient drop (head). Output varies with season and can fall sharply in drought, a risk that climate change may increase in some regions. Intakes clog with debris and require regular attention.

**Shared-resource questions**: Water is a commons. Diverting it, even temporarily, affects fish, ecosystems and downstream users, and in most places requires permits and respect for existing water rights. The governance questions raised in the Commons Governance lesson apply directly: who decides how much water can be diverted, how use is monitored, and how conflicts are resolved.

**Documented practice**: Community-managed micro-hydro has a long record in mountainous regions. Nepal, for example, has many village micro-hydro schemes that supply local mini-grids in areas the national grid did not reach. These schemes show that small hydro can serve as the backbone of a community grid when local people own, operate and repair it, and that sustained maintenance and fair tariff collection are as important as the original construction.`
      },
      {
        title: 'Combustion, Biogas and Other Dispatchable Sources',
        content: `Most microgrids need at least one source that can be turned on when required, known as a **dispatchable** source. Options differ greatly in their exit implications.

**Diesel, propane and gasoline generators**: These remain the most common backup in microgrids because they are familiar, relatively cheap to buy and fully dispatchable. Exodology asks practitioners to be honest about what they mean: a microgrid that depends on a diesel generator for long outages still depends on fuel delivery, which may itself fail in the same disaster that caused the outage. Generators can serve as a bridge during a staged transition, but the dependency should appear clearly on the map.

**Solid biomass**: Wood and agricultural residues can fuel boilers or, less commonly at small scale, electricity generation, sometimes as combined heat and power. Whether this is sustainable depends entirely on the fuel supply: harvesting rates, transport distances and competing uses. Combustion also affects local air quality, a burden that falls on nearby residents.

**Biogas**: Anaerobic digesters turn manure, food waste or sewage into methane that can run engines or cookers, while producing a fertilizer by-product. Where suitable feedstock exists, biogas can close loops between food, waste and energy systems. Digesters need steady feeding, temperature management and careful operation.

**Geothermal and others**: Geothermal electricity requires specific geology and is rarely a community-scale option outside favorable regions. Ground-source heat pumps, by contrast, are not generation at all: they are efficient users of electricity for heating and cooling. Placing them correctly in the analysis avoids double-counting.

The guiding question for every dispatchable source is the same: what does it depend on, and will that dependency hold during the failures the microgrid exists to survive?`
      },
      {
        title: 'Assembling a Resilient Generation Portfolio',
        content: `No single source suits every community, and most resilient microgrids combine several. Principles from earlier lessons guide the combination.

1. **Start with demand.** As the Energy System Alternatives lesson stressed, the cheapest energy is the energy not used. Efficiency and load reduction shrink the generation and storage required, lowering both cost and land use.

2. **Design for critical loads first.** The dependency map identifies what must keep running in island mode. Generation should be sized to meet those loads across the hardest season, not the average day.

3. **Seek complementarity.** Sources with different timing, such as solar with wind or hydro, reduce the periods when nothing is producing. **Diversity** and **redundancy** apply to energy as they do to food and water.

4. **Prefer what can be maintained.** A modest system that local people can repair is more resilient than a sophisticated one that depends on a distant specialist. Maintainability belongs in every comparison.

5. **Account for land and neighbors.** Use rooftops, parking lots and already disturbed land where possible. Ask who bears visual, noise, ecological and air-quality burdens, and whether they share in the benefits. **Procedural justice** requires that affected people have a voice before sites are chosen.

6. **Stage the build.** Begin with the most accessible, lowest-risk source and expand as experience and finance grow. Each stage should leave the community better able to carry its critical loads, with fallback points if progress stalls.

A simple comparison table, listing each option against energy delivered, timing, cost, land, maintenance, dependencies and justice impacts, makes these trade-offs visible to everyone involved. The Microgrid Design Tool at the end of this module supports this kind of comparison.`
      }
    ],

    keyTakeaways: [
      'Compare generation options by energy delivered, timing, capacity factor and land use, not by rated power alone',
      'Solar is modular and accessible but depends on storage and equipment supply chains; wind complements it where the resource is proven',
      'Micro-hydro offers steady output on the right sites but raises commons and water-rights questions',
      'Dispatchable fuel-based sources keep a fuel dependency that may fail in the same crisis the microgrid is meant to survive',
      'Resilient portfolios start with demand reduction and critical loads, combine complementary sources, and share burdens and benefits fairly'
    ],

    references: [
      {
        author: 'MacKay, David J. C.',
        title: 'Sustainable Energy - Without the Hot Air',
        year: 2008,
        publisher: 'UIT Cambridge',
        relevance: 'Widely used, numbers-based comparison of renewable sources that models how to estimate what each can actually deliver.',
        url: 'https://openlibrary.org/works/OL16797804W'
      },
      {
        author: 'Smil, Vaclav',
        title: 'Power Density: A Key to Understanding Energy Sources and Uses',
        year: 2015,
        publisher: 'MIT Press',
        relevance: 'Explains why renewable generation requires much more land per unit of power, making land use central to local energy design.',
        url: 'https://openlibrary.org/works/OL20739200W'
      },
      {
        author: 'Scheer, Hermann',
        title: 'Energy Autonomy: The Economic, Social and Technological Case for Renewable Energy',
        year: 2007,
        publisher: 'Earthscan',
        relevance: 'Argues for decentralized renewable generation as a route to local and national energy autonomy, relevant to energy exit.',
        url: 'https://openlibrary.org/works/OL2479450W'
      }
    ]
  },
  learningObjectives: [
    'Distinguish power from energy and apply capacity factor and timing when comparing generation sources',
    'Compare solar, wind, micro-hydro and dispatchable sources by output pattern, maintenance needs and dependencies',
    'Identify the commons, land-use and neighbor impacts that each generation option creates',
    'Evaluate whether a backup source will remain available during the failures a microgrid is designed to survive',
    'Design a staged generation portfolio that prioritizes critical loads, complementarity and maintainability'
  ],
  keyTerms: [
    { term: 'Capacity Factor', definition: 'The ratio of the energy a source actually produces over a period to what it would produce running at full rated power for the whole period.' },
    { term: 'Dispatchable Source', definition: 'A generation source that can be turned on, off or adjusted when needed, such as a generator or hydro with storage.' },
    { term: 'Variable Generation', definition: 'Generation whose output depends on weather or daylight, such as solar and wind, and cannot be fully controlled by the operator.' },
    { term: 'Power Density', definition: 'The rate of energy supply per unit of land area, used to compare how much space different energy sources require.' },
    { term: 'Run-of-River Hydro', definition: 'Hydropower that diverts part of a stream through a turbine and returns it downstream, without a large storage reservoir.' }
  ]
}

export default lesson
