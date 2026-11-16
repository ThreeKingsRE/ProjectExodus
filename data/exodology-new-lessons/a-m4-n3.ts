import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m4-n3',
  title: 'Storage and Distribution',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Generation gets most of the attention in energy projects, but generation alone rarely creates exit capability. Solar panels produce nothing at night, wind turbines stop in calm weather, and micro-hydro output falls in dry seasons. What turns intermittent local generation into a dependable alternative is the ability to **store** energy until it is needed, to **decide** which uses come first when supply is short, and to **deliver** power safely to the places that need it. The existing Energy System Alternatives lesson put it simply: storage is often the limiting factor.

This lesson treats storage, load management and local distribution as one design problem. The Microgrid Fundamentals lesson explained how a microgrid islands and why a grid-forming source is needed; here the focus moves to what keeps an islanded system running for hours or days, and how energy moves from where it is generated and stored to the loads it serves.

Throughout, the Exodology lens stays the same. Every design choice either raises or lowers exit capability, and every new component brings dependencies of its own. A battery bank that no one locally can maintain, or a distribution line that serves some households and bypasses others, can quietly reproduce the problems the project set out to leave behind.`,

    sections: [
      {
        title: 'Why Storage Is the Hinge of Energy Exit',
        content: `Systems thinking offers a useful way to see storage. In Donella Meadows' terms, a battery is a **stock**: an accumulation that can be filled and drained at different rates. Stocks act as **buffers**. They let a system keep functioning when inflows and outflows do not match, which is exactly the situation of a community running on sun and wind. Without a buffer, every cloud and every evening becomes a supply crisis.

Two quantities describe any storage system, and confusing them is one of the most common design errors:

**Energy capacity** (kilowatt-hours, kWh): how much energy the store holds. This determines how **long** it can carry a load.

**Power rating** (kilowatts, kW): how fast energy can be drawn out or put in. This determines how **much** load it can carry at once.

A store with large capacity but low power can run a refrigerator for days but cannot start a well pump. A store with high power but small capacity can start the pump but will be empty in an hour. Designers state both, along with the **usable** fraction of capacity, since most batteries should not be fully emptied, and the **round-trip efficiency**, since some energy is lost in every charge and discharge.

For exit planning, the most meaningful figure is often **days of autonomy**: how long critical loads can be carried from storage alone if local generation drops. This connects directly to the dependency map. A clinic whose medicine refrigerator must never fail needs more days of autonomy than a workshop whose tools can wait for sunshine.`
      },
      {
        title: 'Storage Technologies and Their Trade-offs',
        content: `No storage technology is best in every situation. Each trades cost, lifespan, safety, maintenance and supply chain exposure differently.

**Lead-acid batteries**: a mature, widely understood technology with low upfront cost and established recycling in many countries. They are heavy, have shorter cycle life, and degrade quickly if regularly discharged deeply. Some types need periodic maintenance. They remain common in small off-grid systems where budgets are tight.

**Lithium-ion batteries**: now dominant in new installations because of their energy density, efficiency and falling cost. The family includes several chemistries. Lithium iron phosphate (often abbreviated LFP) is widely used for stationary storage because it offers long cycle life and lower risk of thermal runaway than nickel-based chemistries, and it avoids cobalt and nickel. All lithium-ion systems require a battery management system and careful attention to temperature and fire safety.

**Flow batteries**: store energy in liquid electrolytes held in tanks, so energy capacity can be increased by adding electrolyte rather than whole new cells. They suit longer durations but are bulkier, more complex and less common at small community scale.

**Thermal storage**: often overlooked, and frequently the cheapest option. Heating water when solar output is high, pre-cooling a building or freezer, or using the thermal mass of walls and floors stores energy as heat or cold rather than electricity. Where a large share of demand is heating or cooling, thermal storage can reduce the battery capacity needed.

**New dependencies**: Storage reduces dependence on the grid but creates dependence on global supply chains for cells, inverters and replacement parts. The mining of some battery materials has documented social and environmental harms in producing regions. The **justice orientation** principle asks practitioners to include those distant communities in their analysis, to prefer chemistries and suppliers with fewer such concerns where possible, and to plan for recycling at end of life.`
      },
      {
        title: 'Load Management: Deciding What Comes First',
        content: `Storage buys time; **load management** decides how that time is spent. An islanded microgrid almost never has enough capacity to carry every load indefinitely, so the question is not whether to prioritize but how, and who decides.

A practical approach sorts loads into tiers, using the critical/non-critical distinction from dependency mapping:

1. **Critical loads**: must run continuously. Examples include medical equipment, refrigeration of medicines, water pumping, communications and essential lighting.
2. **Important loads**: needed daily but can be scheduled. Cooking, refrigeration of food, phone charging, heating controls.
3. **Deferrable loads**: can wait for surplus. Laundry, water heating, electric vehicle charging, workshop tools.
4. **Sheddable loads**: switched off first when storage runs low.

Three techniques make this work in practice:

**Demand reduction first**: as the existing alternatives lesson notes, the cheapest watt is the one you do not use. Every kilowatt-hour removed from critical demand reduces the storage needed to protect it.

**Load shifting**: running deferrable loads when generation is high, such as midday in a solar system, so that storage is reserved for the evening and night.

**Automatic shedding**: the controller disconnects lower-tier circuits as battery charge falls, so critical loads are protected without anyone having to make a hurried decision in the dark.

The tiers are a technical tool, but setting them is a social decision. Whose loads count as critical? Does a household with a person who depends on powered medical equipment get priority over a business? These questions should be settled openly, in advance, with the people affected. A shedding plan agreed in calm times is accepted during an outage; one imposed during a crisis is resented and often overridden.`
      },
      {
        title: 'Sizing Storage Honestly: A Worked Example',
        content: `The physicist David MacKay argued that energy debates improve when people do the arithmetic rather than rely on impressions. Storage sizing benefits from the same discipline. The following example is **hypothetical** and simplified, intended to show the reasoning rather than to serve as a design.

Suppose a small community center serves as a neighborhood resilience hub. Its critical loads (a medicine refrigerator, communications equipment, lighting and a water pump) are estimated from the dependency map at about 12 kWh per day. The community decides it wants **two days of autonomy** for these loads, enough to ride through a cloudy spell during a grid outage.

- Energy required from storage: 12 kWh per day multiplied by 2 days gives 24 kWh.
- If the chosen battery should be used to about 80 percent of its rated capacity, the rated capacity needed is 24 divided by 0.8, or 30 kWh.
- Allowing for round-trip and inverter losses adds a further margin, perhaps 10 to 15 percent.
- The power rating must cover the largest combination of critical loads running at once, including the surge when the pump starts.

Two further questions usually change the answer:

**Seasonal gaps**: Batteries are good at bridging hours and days, not weeks or seasons. In places where winter solar output is low, no affordable battery bank closes the gap. Diverse generation, a backup generator, or an accepted reduction in service during winter are the realistic options, and the plan should say which.

**Degradation and replacement**: Batteries lose capacity over time and eventually need replacing. A design that only just meets the target on day one will fall short within a few years. Sizing with headroom, and budgeting for replacement, are part of the design. The next lesson takes up the financing side of that obligation.`
      },
      {
        title: 'Local Distribution Design',
        content: `Distribution is how energy reaches the loads. In a single-building system this is ordinary building wiring. Once a microgrid spans several buildings, distribution becomes its own design problem with technical, legal and ethical dimensions.

**Topology**: A **radial** network runs lines outward from a central point like branches. It is simple and cheap but a single fault can cut off everything downstream. A **looped** or meshed network provides more than one path to each load, improving reliability at higher cost. The choice mirrors the general resilience trade-off between efficiency and redundancy.

**Centralized or distributed storage**: Storage can sit in one shared location or be spread across buildings. Central storage is easier to maintain and monitor; distributed storage keeps some buildings running if a line fails. Many designs combine both.

**AC and DC**: Most loads and grid connections use alternating current, so most microgrids distribute AC. Very small systems, especially where loads are mainly lighting, electronics and DC appliances, sometimes distribute direct current to avoid conversion losses. The choice affects which equipment can be bought locally and repaired easily.

**Protection**: Distribution must be designed so that faults are detected and isolated safely. Inverter-based sources supply much less fault current than large spinning generators, which can make conventional protection devices behave differently in island mode. This is specialist work requiring qualified engineers and electricians, and it must meet local electrical codes.

**Metering**: Measuring how much each building generates and consumes is the basis for fair cost sharing and for detecting problems early. It also raises questions of data privacy that governance must address.

**Crossing boundaries**: Once a line crosses a street or property boundary, many jurisdictions treat it as utility distribution, subject to licensing and regulation. Checking these rules early prevents expensive redesigns later.`
      },
      {
        title: 'The Exodology Lens: Avoiding New Lock-in',
        content: `Storage and distribution are where an energy alternative becomes physical infrastructure, and infrastructure is where **path dependence** takes hold. Choices made now will shape what the community can do for decades. Four questions help keep the alternative exit-capable:

**Is there a new critical node?** A single proprietary controller, a battery from a supplier that may not exist in ten years, or one volunteer who understands the system are all critical nodes in the strict sense. Prefer open standards, documented designs, more than one trained person, and components that can be sourced from more than one supplier.

**Does the design degrade gracefully?** When a battery module fails or a line is damaged, the system should lose some capacity rather than collapse entirely. Tiered loads, distributed storage and looped lines all support this.

**Is it safe?** The **Principle of Precaution** applies directly. Lithium-ion fires are rare but serious, and poorly installed wiring endangers everyone nearby. Siting, ventilation, fire separation, signage and emergency procedures belong in the first design, not as later additions.

**Who is on the line?** Distribution decides who is included. A line that reaches the well-off end of a street but stops short of rental housing or a care home turns a community project into a private one. Using the **distributive justice** principle, ask who the network serves, who it leaves out, and what it would take to reach them.

These questions return the discussion to the purpose of Exodology. The goal is not the largest battery or the most sophisticated network. It is a dependable, maintainable, fairly shared capacity to meet essential needs when the larger system fails, built in a way the community can understand, govern and, if necessary, change.`
      }
    ],

    keyTakeaways: [
      'Storage turns intermittent generation into exit capability by buffering supply; energy capacity, power rating and days of autonomy must all be specified',
      'Every storage technology trades cost, lifespan, safety and supply chain exposure, and each creates new dependencies to be mapped',
      'Load management sorts uses into tiers; deciding which loads are critical is a social decision that should be made openly and in advance',
      'Honest sizing accounts for usable capacity, losses, seasonal gaps and battery degradation',
      'Distribution design shapes reliability, safety and inclusion, and should avoid creating new critical nodes or new lock-in'
    ],

    references: [
      {
        author: 'MacKay, David J. C.',
        title: 'Sustainable Energy – Without the Hot Air',
        year: 2008,
        publisher: 'UIT Cambridge',
        relevance: 'Models the plain, quantitative reasoning about energy supply, demand and storage that honest microgrid sizing requires.',
        url: 'https://openlibrary.org/works/OL16797804W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains stocks, flows and buffers, the systems concepts behind treating storage as the stabilizing element of an energy system.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Bakke, Gretchen',
        title: 'The Grid: The Fraying Wires Between Americans and Our Energy Future',
        year: 2016,
        publisher: 'Bloomsbury USA',
        relevance: 'Accessible account of how the centralized grid was built, why storage and distribution are its pressure points, and how distributed energy is changing it.',
        url: 'https://openlibrary.org/works/OL20030969W'
      }
    ]
  },
  learningObjectives: [
    'Distinguish energy capacity, power rating, usable capacity and days of autonomy when specifying storage',
    'Compare lead-acid, lithium-ion, flow and thermal storage in terms of cost, lifespan, safety and new dependencies',
    'Design a tiered load management plan that protects critical loads during island operation',
    'Calculate an approximate storage requirement for a set of critical loads, including allowances for losses and degradation',
    'Evaluate a local distribution design for reliability, safety, regulatory fit and fair inclusion'
  ],
  keyTerms: [
    { term: 'Energy Capacity', definition: 'The total amount of energy a storage system can hold, measured in kilowatt-hours; it determines how long a load can be carried.' },
    { term: 'Power Rating', definition: 'The rate at which a storage system can deliver or absorb energy, measured in kilowatts; it determines how much load can be carried at once.' },
    { term: 'Days of Autonomy', definition: 'The length of time storage alone can carry a defined set of loads without new generation.' },
    { term: 'Load Shedding', definition: 'Deliberately disconnecting lower-priority loads when supply or stored energy is insufficient, in order to protect critical loads.' },
    { term: 'Radial Network', definition: 'A distribution layout in which lines branch outward from a single source, simple and inexpensive but vulnerable to single faults.' }
  ]
}

export default lesson
