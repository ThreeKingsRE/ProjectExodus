import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: batteries people and neighbourhoods actually
// own and use. Chapter 5 covers what energy storage is; chapter 31 the technologies.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-storage~2',
  title: 'Batteries at Home and in the Community',
  description: {
    ELEMENTARY: 'How families and neighbours save sunshine power in batteries to use at night.',
    MIDDLE_SCHOOL: 'How home batteries and shared community batteries store solar power and keep the lights on.',
    HIGH_SCHOOL: 'How home and community batteries are sized, used and paid for, and what they mean for a neighbourhood.',
    UNDERGRADUATE: 'Behind-the-meter and community storage: sizing, operating modes, economics and safety.',
    GRADUATE: 'Distributed storage at household and community scale: value stacking, aggregation, tariffs and governance.',
    PHD: 'Research questions in distributed and community-scale storage: valuation, aggregation, equity and lifecycle impacts.',
  },
  lessons: [
    {
      id: 're-stor-1',
      title: 'Batteries at Home and in the Community',
      content: {
        ELEMENTARY: `
<h2>Saving Sunshine for Bedtime</h2>
<p>Some houses have solar panels on the roof. The panels make electricity when the sun shines. But what happens at night, when it is dark? Families can save some of the daytime electricity in a big battery, a bit like filling a water bottle in the morning to drink later.</p>

<h3>The Battery in the Garage</h3>
<p>A home battery is a box that hangs on a wall, often in a garage. During the day it fills up with extra electricity from the panels. In the evening, when everyone turns on lights and cooks dinner, the battery gives the power back. If a storm knocks out the power lines, the battery can keep the fridge cold and a few lights on.</p>

<h3>Sharing a Battery With Neighbours</h3>
<p>Not every family has a roof for solar panels or room for a battery. So some towns put one very big battery near a school or a park. Many homes share it, like sharing a library instead of everyone buying the same books.</p>
<ul>
<li><strong>Home battery:</strong> a battery in a house that saves electricity to use later</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Power cut:</strong> a time when electricity stops coming to homes</li>
<li><strong>Community battery:</strong> one big battery shared by many homes in a neighbourhood</li>
<li><strong>Charge:</strong> to fill a battery up with electricity</li>
</ul>

<h3>Why It Helps</h3>
<p>Batteries let families use more of their own clean sunshine power and less power from smoky power plants. Sharing a battery means more people can join in, even if they live in an apartment.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Your Home's Energy Savings Account</h2>
<p>Solar panels make the most electricity around midday, but most families use the most electricity in the evening. A home battery fixes that mismatch. It stores the extra solar power from the afternoon and releases it after sunset, the way a savings account holds money until you need it.</p>

<h3>How a Home Battery Works</h3>
<p>The battery is connected to the home's solar panels and to the electricity grid. A small computer called a controller decides when to charge and when to discharge. On a sunny day it charges from the panels. In the evening it powers the home. During a power cut, a battery set up for backup can keep important things running, such as the fridge, the internet router and medical equipment.</p>
<ul>
<li><strong>Kilowatt-hour (kWh):</strong> the unit used to measure how much energy a battery can hold</li>
<li><strong>Controller:</strong> the computer that decides when the battery charges and discharges</li>
<li><strong>Backup power:</strong> electricity a battery supplies when the grid goes down</li>
<li><strong>Community battery:</strong> a large battery shared by many homes on the same street or neighbourhood</li>
<li><strong>Peak hours:</strong> the busy evening hours when everyone uses lots of electricity</li>
</ul>

<h3>Community Batteries</h3>
<p>A community battery is one large battery placed in a neighbourhood. Homes with solar panels send their extra power to it during the day, and everyone nearby can use it at night. This helps renters and apartment dwellers, who usually cannot install their own battery, share in clean energy.</p>

<h3>Things to Think About</h3>
<p>Batteries cost a lot, they slowly wear out over about ten to fifteen years, and they must be installed safely by trained electricians. Families and towns weigh these costs against the benefits: lower bills, less pollution and power during emergencies. When old batteries finally wear out, their metals can be recycled into new ones, so planning for recycling is part of doing it right.</p>
`,
        HIGH_SCHOOL: `
<h2>Storage Moves Into the Neighbourhood</h2>
<p>For most of the last century, electricity storage meant giant hydro reservoirs owned by utilities. Today, storage is showing up in garages and on street corners. Home batteries paired with rooftop solar, and shared community batteries, are changing who stores energy and who benefits from it.</p>

<h3>Sizing a Home Battery</h3>
<p>A battery has two key numbers. Its energy capacity, measured in kilowatt-hours (kWh), tells you how much energy it holds. Its power rating, in kilowatts (kW), tells you how fast it can deliver that energy. A typical home battery stores around 10 to 15 kWh and delivers about 5 kW. That is enough to run lights, a fridge and electronics through an evening, but not an electric oven, heater and air conditioner all at once. Families size a battery by looking at their evening use and at which appliances they want to keep running in a power cut.</p>
<ul>
<li><strong>Energy capacity:</strong> how much energy a battery can store, measured in kilowatt-hours</li>
<li><strong>Power rating:</strong> how quickly a battery can deliver energy, measured in kilowatts</li>
<li><strong>Self-consumption:</strong> using your own solar electricity instead of sending it to the grid</li>
<li><strong>Time-of-use tariff:</strong> an electricity price that changes with the time of day</li>
<li><strong>Virtual power plant:</strong> many small batteries controlled together so they act like one power station</li>
</ul>

<h3>Ways a Battery Earns Its Keep</h3>
<p>A home battery can raise self-consumption of solar power, avoid expensive evening electricity under a time-of-use tariff, and provide backup during outages. When hundreds of home batteries are linked into a virtual power plant, the utility can draw on them during heat waves, and owners are paid for helping.</p>

<h3>Community Batteries and Fairness</h3>
<p>A community battery serves a whole street or suburb. It soaks up midday solar from many rooftops, eases strain on local power lines and supplies homes in the evening. Because members share one battery, the cost per household is lower, and renters can take part. Communities still debate who owns the battery, how savings are shared and where it is placed, so these projects are as much about planning and trust as about technology.</p>

<h3>Safety and the End of a Battery's Life</h3>
<p>Home and community batteries must meet fire-safety codes, sit in ventilated spots away from bedrooms and be installed by licensed electricians. Over ten to fifteen years they lose capacity, and the valuable lithium, nickel and cobalt inside can be recovered by recycling. Good projects plan for safe installation and for recycling from the start.</p>
`,
        UNDERGRADUATE: `
<h2>Behind the Meter and Down the Street</h2>
<p>Distributed storage sits close to where electricity is used. Behind-the-meter batteries are installed on the customer side of the electricity meter, usually alongside rooftop solar. Community or "front-of-meter neighbourhood" batteries connect to the local distribution network and serve many customers. Both shift energy in time, but they create value in different ways and raise different questions about ownership and regulation.</p>

<h3>Specifying and Operating a Residential System</h3>
<p>A residential lithium-ion system is described by usable energy capacity (kWh), continuous and peak power (kW), round-trip efficiency (commonly around 85 to 90 percent) and warranted cycle life. Lithium iron phosphate chemistry has become popular for homes because of its thermal stability and long cycle life. The inverter can be AC-coupled, so it can be added to an existing solar system, or DC-coupled, sharing one inverter with the panels for slightly higher efficiency. Operating modes include self-consumption, tariff arbitrage under time-of-use pricing, and backup reserve, where a set share of capacity is held for outages.</p>
<ul>
<li><strong>Behind-the-meter storage:</strong> a battery on the customer side of the meter, serving that building first</li>
<li><strong>Round-trip efficiency:</strong> the share of stored energy that comes back out after charging and discharging</li>
<li><strong>Depth of discharge:</strong> how much of a battery's capacity is used in a cycle, which affects its lifespan</li>
<li><strong>Tariff arbitrage:</strong> charging when electricity is cheap and discharging when it is expensive</li>
<li><strong>Aggregator:</strong> a company that coordinates many small batteries to sell services to the grid</li>
</ul>

<h3>The Economics of Small-Scale Storage</h3>
<p>The payback of a home battery depends on the gap between export and import prices, the tariff structure, backup value and any incentives. Where solar exports earn little and evening power is expensive, self-consumption alone can justify a battery; elsewhere, payback depends on joining an aggregator's virtual power plant, which pays for frequency response or peak reduction. Degradation must be counted: every cycle consumes part of the warranted throughput.</p>

<h3>Community Batteries in Practice</h3>
<p>Neighbourhood batteries of a few hundred kilowatt-hours can absorb midday solar that would otherwise push local voltages too high, defer network upgrades and offer storage "subscriptions" to households without space or capital. Their success depends on clear rules for ownership (utility, council or cooperative), how benefits are allocated, and siting that the community accepts, including fire safety and noise.</p>

<h3>Choosing Between Home and Shared Storage</h3>
<p>Analyses that compare many home batteries with one shared battery of the same total size usually find the shared option cheaper per kilowatt-hour, because of economies of scale and because households' evening peaks do not all happen at once. Home batteries, however, offer guaranteed backup at the household level and keep control with the owner. Many neighbourhoods will end up with a mix of both.</p>
`,
        GRADUATE: `
<h2>Distributed Storage as Grid Infrastructure</h2>
<p>Batteries installed in homes and neighbourhoods are no longer just customer gadgets; collectively they are a growing share of grid flexibility. Their value depends on location, control and the market and regulatory arrangements that let them be paid for the services they provide. This chapter examines residential and community-scale storage as infrastructure rather than as appliances.</p>

<h3>Value Stacking and Control</h3>
<p>A single battery can deliver several services: customer bill savings, backup, distribution-network relief, wholesale energy arbitrage and ancillary services such as frequency response. Value stacking combines them, but the services compete for the same capacity and state of charge. Control strategies range from simple rule-based self-consumption to model-predictive control that forecasts solar output, household load and prices. Aggregators dispatch fleets as virtual power plants, which requires telemetry, communication standards and contracts that define who can override whom, especially when the owner's backup reserve conflicts with a grid call.</p>
<ul>
<li><strong>Value stacking:</strong> earning revenue from several services with the same storage asset</li>
<li><strong>Model-predictive control:</strong> scheduling a battery by optimising over forecasts of load, generation and price</li>
<li><strong>Hosting capacity:</strong> how much distributed generation a network section can accept without violating limits</li>
<li><strong>Network tariff:</strong> the charge for using the distribution network, which can reward or penalise peak demand</li>
<li><strong>Distribution system operator:</strong> the entity that actively manages the local network, including flexible resources</li>
</ul>

<h3>Community-Scale Batteries and Network Value</h3>
<p>Community batteries sit at the low-voltage level, where they can raise hosting capacity for rooftop solar and defer transformer or feeder upgrades. Their economics hinge on network tariffs: if a battery is charged full network fees to store a neighbour's solar a few hundred metres away, its business case collapses. Trials of local-use tariffs and storage-as-a-service models test whether the network value can be shared with members.</p>

<h3>Governance, Equity and Risk</h3>
<p>Ownership models (utility, municipality, cooperative or private aggregator) determine who captures value and who bears risk. Subsidies for home batteries tend to flow to wealthier owner-occupiers; community storage can widen access to renters and low-income households if subscription design is deliberate. Safety codes, end-of-life recycling obligations and data privacy for fleet control are part of the design, not afterthoughts.</p>

<h3>Evidence From Virtual Power Plant Programmes</h3>
<p>Utility and aggregator programmes that enrol thousands of home batteries show that fleets can reliably reduce evening peaks and respond to frequency events within seconds, provided enrolment, telemetry and settlement work smoothly. They also reveal practical constraints: customers opt out during heat waves when they most want backup, communication outages remove devices from the fleet, and payments that are too small fail to retain participants. Programme design therefore balances reliability guarantees for the grid against compensation and control for owners, and regulators increasingly require transparent performance reporting so that fleets can be counted on in resource planning.</p>
`,
        PHD: `
<h2>Open Problems in Distributed and Community Storage</h2>
<p>The rapid spread of behind-the-meter and neighbourhood batteries raises questions that engineering alone cannot settle: how to value a distributed resource whose services depend on location and timing, how to coordinate millions of privately owned devices without eroding owner autonomy, and how to distribute the benefits of shared infrastructure fairly. This chapter surveys those research frontiers.</p>

<h3>Valuation and Coordination</h3>
<p>Locational value is central. The same kilowatt-hour discharged at an overloaded feeder at 6 p.m. is worth far more than one discharged at noon on an underused one, yet most tariffs and markets price it uniformly. Research on distribution-level marginal pricing and flexibility markets explores whether price signals can coordinate storage without central dispatch, and how to avoid rebound peaks when many devices respond to the same signal. Hierarchical and distributed optimisation methods, including approaches that respect owner preferences and privacy, aim to schedule fleets under forecast uncertainty while keeping network constraints feasible.</p>
<ul>
<li><strong>Locational marginal value:</strong> the value of energy or flexibility at a particular node and time, reflecting local constraints</li>
<li><strong>Flexibility market:</strong> a market where network operators procure demand or storage response to manage local constraints</li>
<li><strong>Rebound peak:</strong> a new demand peak created when many devices respond to the same price signal at once</li>
<li><strong>Cycle aging:</strong> capacity loss caused by repeated charging and discharging, which depends on depth, rate and temperature</li>
<li><strong>Energy justice:</strong> the fair distribution of energy benefits, burdens and decision-making power</li>
</ul>

<h3>Degradation, Lifecycle and Materials</h3>
<p>Operating strategies that maximise short-term revenue can accelerate cycle and calendar aging, so degradation-aware optimisation embeds battery health models into dispatch. Lifecycle assessment of residential lithium-ion storage depends heavily on grid carbon intensity, utilisation and end-of-life pathways; second-life use of electric vehicle batteries in community storage is promising but limited by state-of-health uncertainty and certification.</p>

<h3>Equity and Institutional Design</h3>
<p>Empirical studies show adoption of home batteries concentrated among higher-income owner-occupiers, raising concerns that cost recovery for network upgrades shifts onto non-adopters. Community storage models, from cooperative ownership to municipal storage-as-a-service, are proposed remedies, but evidence on whether they reach intended households is thin. Open questions include how to design subscriptions and tariffs that share network value with members, how participatory siting affects acceptance, and how regulatory frameworks should classify storage that is simultaneously a customer asset and a network resource.</p>

<h3>Methods and Data Gaps</h3>
<p>Progress on these questions is constrained by data. High-resolution household load and battery telemetry are often proprietary to aggregators, network models at the low-voltage level are incomplete, and outcomes such as resilience during outages are rarely measured systematically. Promising methods include co-simulation of distribution networks with fleets of controlled devices, field experiments with randomised tariff offers, and privacy-preserving techniques such as federated learning for forecasting. Combining these with qualitative research on household decision-making would help explain why adoption and participation diverge from what techno-economic models predict.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-stor2-q1',
      question: {
        ELEMENTARY: 'What does a home battery do with extra sunshine power from the day?',
        MIDDLE_SCHOOL: 'What is the main job of a home battery paired with solar panels?',
        HIGH_SCHOOL: 'Why do homes with rooftop solar often add a battery?',
        UNDERGRADUATE: 'What mismatch does behind-the-meter storage primarily address for a solar household?',
        GRADUATE: 'Which service is the baseline value case for most residential batteries before value stacking?',
        PHD: 'In residential solar-plus-storage, which use case typically anchors the business case where export prices are low?',
      },
      options: {
        ELEMENTARY: ['Throws it away', 'Saves it to use at night', 'Sends it to the moon', 'Turns it into water'],
        MIDDLE_SCHOOL: ['To make the panels spin', 'To store daytime solar power for the evening', 'To cool the house', 'To measure rainfall'],
        HIGH_SCHOOL: ['To make panels produce more at noon', 'To shift midday solar to evening use', 'To replace the electricity meter', 'To lower the power rating'],
        UNDERGRADUATE: ['Voltage versus frequency', 'Midday solar output versus evening household demand', 'AC versus DC wiring', 'Summer versus winter tariffs only'],
        GRADUATE: ['Frequency response only', 'Customer bill savings through self-consumption and tariff arbitrage', 'Transmission congestion relief', 'Black-start capability'],
        PHD: ['Wholesale capacity markets', 'Self-consumption and avoided retail import costs', 'Inertia provision', 'Seasonal storage'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The battery fills up during the day and gives the power back at night.',
        MIDDLE_SCHOOL: 'Panels make the most power at midday, but families use more in the evening, so the battery stores it until then.',
        HIGH_SCHOOL: 'A battery raises self-consumption by moving midday solar into the evening when demand and prices are higher.',
        UNDERGRADUATE: 'Solar peaks around noon while household demand peaks in the evening; storage shifts energy across that gap.',
        GRADUATE: 'Bill savings from self-consumption and time-of-use arbitrage are the core value; other services stack on top.',
        PHD: 'Where exports earn little and imports are expensive, the spread between them makes self-consumption the anchor value.',
      },
    },
    {
      id: 're-stor2-q2',
      question: {
        ELEMENTARY: 'What is a community battery?',
        MIDDLE_SCHOOL: 'Who can a community battery help that usually cannot have a home battery?',
        HIGH_SCHOOL: 'What is one advantage of a community battery over many separate home batteries?',
        UNDERGRADUATE: 'Which network benefit can a neighbourhood battery provide in areas with lots of rooftop solar?',
        GRADUATE: 'What tariff issue most often undermines the business case for community batteries?',
        PHD: 'Which research question is central to whether community storage delivers its claimed equity benefits?',
      },
      options: {
        ELEMENTARY: ['A battery in a toy', 'One big battery shared by many homes', 'A battery for one phone', 'A battery that only works in winter'],
        MIDDLE_SCHOOL: ['Only power plant owners', 'People who live in apartments or rent', 'Only farmers', 'Nobody'],
        HIGH_SCHOOL: ['It never wears out', 'Shared cost per household and access for renters', 'It needs no planning', 'It makes solar panels unnecessary'],
        UNDERGRADUATE: ['Raising transmission voltage', 'Absorbing midday solar to keep local voltages in limits', 'Replacing all transformers', 'Eliminating evening demand'],
        GRADUATE: ['Too few solar panels', 'Being charged full network fees to store neighbours\' local solar', 'Lack of lithium', 'Excess frequency response revenue'],
        PHD: ['Whether lithium supply is sufficient', 'Whether subscriptions actually reach renters and low-income households', 'Whether batteries can store heat', 'Whether inverters are AC or DC'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A community battery is one big battery that many families share.',
        MIDDLE_SCHOOL: 'Renters and apartment dwellers often cannot install a battery, but they can share a community one.',
        HIGH_SCHOOL: 'Sharing one battery lowers the cost for each household and lets renters take part.',
        UNDERGRADUATE: 'Storing midday solar locally prevents voltage rise and can defer network upgrades.',
        GRADUATE: 'If local storage pays full network charges, its value is eaten up; local-use tariffs are being trialled.',
        PHD: 'Evidence on whether community models reach intended households is thin, so who actually benefits is a key question.',
      },
    },
    {
      id: 're-stor2-q3',
      question: {
        ELEMENTARY: 'What can a home battery do during a power cut?',
        MIDDLE_SCHOOL: 'What is "backup power"?',
        HIGH_SCHOOL: 'Why can a typical 10–15 kWh home battery not run every appliance in a power cut?',
        UNDERGRADUATE: 'What does reserving backup capacity in a residential battery trade off?',
        GRADUATE: 'Why can an owner\'s backup reserve conflict with aggregator dispatch?',
        PHD: 'What coordination challenge arises when fleets of owner-controlled batteries are dispatched for grid services?',
      },
      options: {
        ELEMENTARY: ['Keep the fridge cold and some lights on', 'Make it sunny', 'Fix the power lines', 'Nothing at all'],
        MIDDLE_SCHOOL: ['Electricity a battery supplies when the grid goes down', 'Extra solar panels', 'A second electricity meter', 'Power from a neighbour\'s car'],
        HIGH_SCHOOL: ['Its power rating limits how much it can supply at once', 'Batteries do not work at night', 'The meter blocks it', 'It only powers lights'],
        UNDERGRADUATE: ['Capacity available for daily savings versus outage protection', 'Efficiency for colour', 'AC coupling for DC coupling', 'Cycle life for chemistry'],
        GRADUATE: ['Both draw on the same state of charge at the same time', 'Aggregators cannot read meters', 'Backup uses a different battery', 'Grid calls only happen at noon'],
        PHD: ['Balancing grid value against owner autonomy, preferences and privacy', 'Choosing battery colours', 'Ensuring panels face south', 'Replacing all inverters'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A battery can keep important things like the fridge and a few lights running.',
        MIDDLE_SCHOOL: 'Backup power is the electricity a battery provides when the grid stops supplying it.',
        HIGH_SCHOOL: 'A battery delivering about 5 kW cannot run many large appliances at the same time.',
        UNDERGRADUATE: 'Capacity held in reserve for outages cannot be cycled for daily bill savings.',
        GRADUATE: 'A grid call may drain the charge the owner wanted to keep for an outage, so contracts must define priorities.',
        PHD: 'Fleet control must respect owner preferences and data privacy while still meeting network needs.',
      },
    },
    {
      id: 're-stor2-q4',
      question: {
        ELEMENTARY: 'Where is a home battery often kept?',
        MIDDLE_SCHOOL: 'What unit measures how much energy a battery can hold?',
        HIGH_SCHOOL: 'What is a virtual power plant?',
        UNDERGRADUATE: 'Why has lithium iron phosphate become popular for home batteries?',
        GRADUATE: 'What does "value stacking" mean for a distributed battery?',
        PHD: 'Why does locational value complicate the pricing of distributed storage?',
      },
      options: {
        ELEMENTARY: ['In the freezer', 'On a wall in the garage', 'Up a tree', 'Under the bed'],
        MIDDLE_SCHOOL: ['Degrees', 'Kilowatt-hours', 'Litres', 'Metres'],
        HIGH_SCHOOL: ['A coal plant painted green', 'Many small batteries controlled together like one power station', 'A video game about energy', 'A single giant battery'],
        UNDERGRADUATE: ['It is the cheapest metal', 'Thermal stability and long cycle life', 'It needs no inverter', 'It stores heat'],
        GRADUATE: ['Stacking batteries physically', 'Earning from several services with the same asset', 'Buying more batteries each year', 'Charging twice as fast'],
        PHD: ['Batteries are identical everywhere', 'A kWh\'s value depends on local constraints and timing, but prices are often uniform', 'Location has no effect on networks', 'Prices are set only by inverter makers'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Home batteries usually hang on a wall, often in a garage.',
        MIDDLE_SCHOOL: 'Battery energy is measured in kilowatt-hours (kWh).',
        HIGH_SCHOOL: 'Linking many home batteries lets them work together like one power station for the grid.',
        UNDERGRADUATE: 'LFP chemistry is valued for being thermally stable and lasting many cycles.',
        GRADUATE: 'Value stacking combines bill savings, network relief and market services from one battery.',
        PHD: 'The same discharge is worth more at a congested node and time, which uniform prices fail to reflect.',
      },
    },
    {
      id: 're-stor2-q5',
      question: {
        ELEMENTARY: 'Why is sharing a big battery with neighbours a good idea?',
        MIDDLE_SCHOOL: 'About how long do home batteries usually last before wearing out?',
        HIGH_SCHOOL: 'Besides technology, what do communities have to agree on for a community battery?',
        UNDERGRADUATE: 'Which factor reduces a battery\'s lifetime value and must be counted in its economics?',
        GRADUATE: 'Who tends to capture subsidies for home batteries, according to adoption studies?',
        PHD: 'What concern do adoption patterns raise for cost recovery of network upgrades?',
      },
      options: {
        ELEMENTARY: ['It makes the battery smaller', 'More people can use clean power', 'It stops the sun', 'It makes noise'],
        MIDDLE_SCHOOL: ['One week', 'About ten to fifteen years', 'Forever', 'One day'],
        HIGH_SCHOOL: ['The colour of the battery', 'Ownership, how savings are shared and where it goes', 'Who gets the first solar panel', 'Nothing else'],
        UNDERGRADUATE: ['Painting the enclosure', 'Degradation from cycling', 'Higher export prices', 'Lower installation costs'],
        GRADUATE: ['Renters', 'Wealthier owner-occupiers', 'Low-income tenants', 'Network operators only'],
        PHD: ['Batteries lower network costs for everyone equally', 'Costs may shift onto households that do not adopt', 'Upgrades become unnecessary everywhere', 'Adoption has no distributional effect'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Sharing lets families without their own battery use clean power too.',
        MIDDLE_SCHOOL: 'Home batteries slowly lose capacity and usually last around ten to fifteen years.',
        HIGH_SCHOOL: 'Ownership, sharing of savings and placement need community agreement and trust.',
        UNDERGRADUATE: 'Each cycle uses part of the warranted throughput, so degradation lowers lifetime value.',
        GRADUATE: 'Studies find home battery subsidies go mostly to higher-income owner-occupiers.',
        PHD: 'If adopters avoid network charges, the cost of upgrades can shift onto non-adopters.',
      },
    },
  ],
}

export default expansion
