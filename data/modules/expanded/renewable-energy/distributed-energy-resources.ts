import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'distributed-energy-resources',
  lessons: [
    {
      id: 're-dist-1',
      title: 'Local Energy: Power Made Close to Home',
      content: {
        ELEMENTARY: `
<h2>Making Energy Right Where We Live</h2>
<p>A long time ago, almost all electricity came from big power plants far away. The electricity traveled a long way through wires to reach your home. Today, many homes, schools and stores can make their own clean energy right on their roofs! Energy made close to where people use it is called local energy.</p>

<h3>Energy on the Roof</h3>
<p>Solar panels on a roof catch sunlight and turn it into electricity. That electricity can power the lights, the fridge and the computer inside the building. On sunny days, the panels may make more electricity than the house needs. The extra can be shared with neighbors through the wires.</p>
<ul>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Rooftop:</strong> the top of a building, a great sunny spot for solar panels</li>
<li><strong>Home battery:</strong> a box in a house that saves extra electricity for later</li>
<li><strong>Local energy:</strong> electricity made close to the place where it is used</li>
<li><strong>Meter:</strong> a counter that measures how much electricity a home uses or shares</li>
</ul>

<h3>Saving Sunshine for Later</h3>
<p>The sun goes down at night, but people still need lights. A home battery saves extra electricity from the day so the family can use it in the evening. It is like saving some of your lunch for an afternoon snack!</p>

<h3>Smart Helpers at Home</h3>
<p>Some homes have smart helpers, like a thermostat that knows when to warm or cool the house, or a dishwasher that waits to run until the sun is shining. These helpers use energy at the best times, which helps everyone share clean power.</p>

<h3>Many Small Helpers Make a Big Team</h3>
<p>One roof of solar panels is small. But thousands of roofs together can make as much electricity as a big power plant! When lots of homes help, the whole town gets cleaner energy.</p>
<ol>
<li>Look for solar panels on roofs in your neighborhood and count them.</li>
<li>Help run the washing machine or dishwasher during the day if your home has solar panels.</li>
<li>Turn off lights you are not using so local energy goes further.</li>
</ol>

<h3>Think About It</h3>
<p>What if your school made its own electricity from the sun? Where on your school would be the best sunny spot for solar panels?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Distributed Energy: Rooftop Solar, Home Batteries and Local Power</h2>
<p>The traditional power system works like a one-way street: big power plants make electricity and send it out over long wires to customers. Distributed energy changes that. Now homes, schools and businesses can make, store and manage their own electricity. These small, local energy tools are called <em>distributed energy resources</em>, or DERs.</p>

<h3>Types of Distributed Energy Resources</h3>
<ul>
<li><strong>Distributed energy resource (DER):</strong> a small energy device located near where electricity is used</li>
<li><strong>Rooftop solar:</strong> solar panels installed on homes or buildings to make electricity on site</li>
<li><strong>Home battery:</strong> a battery that stores electricity for use at night or during outages</li>
<li><strong>Smart thermostat:</strong> a device that controls heating and cooling and can adjust when energy is in high demand</li>
<li><strong>Electric vehicle charger:</strong> equipment that charges an EV and can often be scheduled for better times</li>
<li><strong>Inverter:</strong> a device that changes solar panel electricity into the kind used in homes</li>
</ul>

<h3>From One-Way to Two-Way</h3>
<table>
<thead><tr><th>Old power system</th><th>Power system with DERs</th></tr></thead>
<tbody>
<tr><td>A few big power plants</td><td>Many small sources on homes and buildings</td></tr>
<tr><td>Electricity flows one way</td><td>Electricity can flow both ways</td></tr>
<tr><td>Customers only use power</td><td>Customers can make, store and share power</td></tr>
<tr><td>Long-distance transmission</td><td>More power made close to where it is used</td></tr>
</tbody>
</table>

<h3>How Rooftop Solar and Batteries Work Together</h3>
<p>During the day, rooftop solar panels make electricity. The house uses what it needs first. Extra electricity can charge a home battery or flow back into the grid for neighbors to use. In many places, the utility gives the home a credit for that shared power. At night, the house can use the battery or buy electricity from the grid.</p>

<h3>Why Distributed Energy Helps</h3>
<ol>
<li><strong>Less waste:</strong> some electricity is lost traveling through long wires, so making it nearby saves energy.</li>
<li><strong>Cleaner power:</strong> rooftop solar produces no pollution while it runs.</li>
<li><strong>Backup:</strong> a home battery can keep important things running during a power outage.</li>
<li><strong>Savings:</strong> families can lower their electricity bills over time.</li>
</ol>

<h3>Shifting When We Use Energy</h3>
<p>Electricity demand is highest at certain times, like hot summer afternoons. Some utilities ask customers to use a little less during those times, which is called <em>demand response</em>. A smart thermostat might pre-cool a house before the peak so the air conditioner can rest during it.</p>

<h3>Try This</h3>
<p>Ask an adult to look at a home electricity bill with you. Can you find how much electricity your home used last month? Think about which appliances could run at a different time of day.</p>
`,
        HIGH_SCHOOL: `
<h2>Distributed Generation, Demand Response and Virtual Power Plants</h2>
<p>For most of the twentieth century, power systems were built around large central plants feeding a one-directional network. Distributed energy resources, or DERs, are reshaping that model. Millions of rooftop solar systems, batteries, smart appliances and EV chargers now sit at the edge of the grid, and when coordinated they can act like a power plant themselves.</p>

<h3>Kinds of DERs</h3>
<ul>
<li><strong>Distributed generation:</strong> small-scale electricity production near the point of use, such as rooftop solar or small combined heat and power</li>
<li><strong>Behind-the-meter:</strong> equipment located on the customer side of the utility meter, like home batteries</li>
<li><strong>Demand response:</strong> reducing or shifting electricity use when the grid is stressed, often in exchange for payment</li>
<li><strong>Flexible load:</strong> a device whose timing can change without hurting the user, such as water heaters or EV charging</li>
<li><strong>Virtual power plant (VPP):</strong> a software platform that coordinates many DERs to act like a single power plant</li>
<li><strong>Net metering:</strong> a billing approach that credits customers for electricity their systems send to the grid</li>
</ul>

<h3>How a Virtual Power Plant Works</h3>
<p>A virtual power plant does not have one building or smokestack. Instead, software connects thousands of devices over the internet. When the grid needs more power, the VPP might tell home batteries to discharge, pause water heaters and slow EV charging all at once. Together, those small actions can equal the output of a power plant, often much faster and without burning fuel.</p>

<h3>Comparing Ways to Meet Peak Demand</h3>
<table>
<thead><tr><th>Option</th><th>How it works</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Peaker power plant</td><td>Gas plant that runs only during peaks</td><td>Expensive per hour used, pollution near communities</td></tr>
<tr><td>Grid-scale battery</td><td>Large battery charges off-peak and discharges at peak</td><td>Limited hours of storage</td></tr>
<tr><td>Virtual power plant</td><td>Coordinates home batteries and flexible loads</td><td>Depends on customer participation and communication</td></tr>
<tr><td>Demand response</td><td>Customers cut use when asked</td><td>Limited duration and comfort concerns</td></tr>
</tbody>
</table>

<h3>Challenges at the Edge of the Grid</h3>
<p>Local distribution lines were designed for power flowing one way. When many rooftop systems export power on a sunny afternoon, voltage can rise too high on some streets. Utilities may limit how much solar can connect to a line, a limit called <em>hosting capacity</em>. Smart inverters that adjust their output and batteries that absorb midday power help raise those limits.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Utilities run programs that pay customers to let them adjust smart thermostats during heat waves.</li>
<li>Groups of home batteries are dispatched together to support the grid in the evening.</li>
<li>Businesses pair rooftop solar and batteries to lower demand charges on their bills.</li>
<li>Schools use solar and storage to cut costs and teach students about energy.</li>
</ol>
<p>DERs give customers a more active role in the power system, turning them from passive consumers into "prosumers" who both produce and consume energy.</p>
`,
        UNDERGRADUATE: `
<h2>DER Economics, Interconnection and Grid Integration</h2>
<p>Distributed energy resources change both the physics and the economics of distribution networks. Their value depends on where and when they produce or reduce load, how they are compensated, and how well utilities can see and coordinate them. This lesson develops the vocabulary and analytical approach needed to evaluate DER deployment.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Hosting capacity:</strong> the amount of DER a distribution feeder can accommodate without violating voltage, thermal or protection limits</li>
<li><strong>Interconnection:</strong> the technical and administrative process of connecting a DER to the utility grid</li>
<li><strong>Locational value:</strong> the extra value a DER provides because of where it is on the network, such as deferring a local upgrade</li>
<li><strong>Retail rate design:</strong> the structure of customer charges, such as fixed, volumetric, time-of-use and demand charges</li>
<li><strong>Smart inverter:</strong> an inverter with grid-support functions such as voltage regulation and ride-through during disturbances</li>
<li><strong>Aggregation:</strong> combining many small DERs so they can participate in markets or utility programs as one resource</li>
</ul>

<h3>Customer Economics</h3>
<p>From a customer perspective, rooftop solar economics depend on system cost, solar resource, the retail rate structure and how exports are compensated. When exports are credited at the full retail rate, payback is faster. When exports are credited at a lower value, self-consumption becomes more important, which increases the attractiveness of pairing solar with batteries. Commercial customers often value batteries mainly for reducing demand charges, which are based on peak usage.</p>

<h3>System Value Versus Customer Value</h3>
<table>
<thead><tr><th>Value component</th><th>Who benefits</th><th>Depends on</th></tr></thead>
<tbody>
<tr><td>Avoided energy purchases</td><td>Customer and system</td><td>Time of production and wholesale prices</td></tr>
<tr><td>Avoided generation capacity</td><td>System</td><td>Output during system peak hours</td></tr>
<tr><td>Deferred distribution upgrades</td><td>System, locally</td><td>Location on constrained feeders</td></tr>
<tr><td>Reduced line losses</td><td>System</td><td>Proximity of generation to load</td></tr>
<tr><td>Bill savings</td><td>Customer</td><td>Retail rate design</td></tr>
<tr><td>Resilience</td><td>Customer</td><td>Battery and islanding capability</td></tr>
</tbody>
</table>
<p>When customer compensation differs from system value, cross-subsidies can arise. That gap drives much of the debate over net metering and export rates.</p>

<h3>Integration Challenges</h3>
<p>High DER penetration can cause voltage rise, reverse power flow through equipment not designed for it, and protection coordination issues. Utilities often lack real-time visibility into behind-the-meter devices, making forecasting harder. Mitigations include smart inverter settings, feeder upgrades, dynamic export limits and better data from advanced meters.</p>

<h3>Applied Method: Evaluating a DER Proposal</h3>
<ol>
<li>Check hosting capacity and interconnection requirements for the location.</li>
<li>Model production and load hour by hour across a typical year.</li>
<li>Apply the actual tariff, including export compensation and demand charges.</li>
<li>Estimate system value components separately from bill savings.</li>
<li>Assess whether aggregation or program participation adds revenue.</li>
<li>Test sensitivity to future rate changes and equipment degradation.</li>
</ol>
`,
        GRADUATE: `
<h2>DER Policy, Utility Business Models and Distribution Planning</h2>
<p>DERs challenge institutions built around central generation and utility ownership of the grid. Utilities earn returns on capital they own, while DERs are often owned by customers or third parties and can reduce utility sales. Regulators must decide how to compensate DERs, how to integrate them into planning and how to keep the grid fair and affordable. This lesson examines these policy and governance questions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Cost-of-service regulation:</strong> a model in which utilities recover approved costs plus a regulated return on invested capital</li>
<li><strong>Throughput incentive:</strong> the motivation a utility has to sell more electricity when its revenue depends on volume sold</li>
<li><strong>Decoupling:</strong> a mechanism that separates utility revenue from sales volume to reduce opposition to efficiency and DERs</li>
<li><strong>Performance-based regulation:</strong> regulation that ties utility earnings to measurable outcomes such as reliability or DER integration</li>
<li><strong>Non-wires alternative:</strong> using DERs, efficiency or demand response to avoid or defer a traditional grid upgrade</li>
<li><strong>Distribution system operator:</strong> an entity that actively manages distribution-level resources and markets, beyond simply maintaining wires</li>
</ul>

<h3>Why Utility Incentives Matter</h3>
<p>Under traditional cost-of-service regulation, utilities earn returns on capital investments such as substations and lines but not on customer-owned DERs. A DER that defers a substation upgrade may save customers money but also reduce utility earnings. This misalignment, sometimes called capital bias, helps explain slow adoption of non-wires alternatives. Reforms such as decoupling, shared-savings mechanisms and performance-based regulation aim to realign incentives.</p>

<h3>Compensation Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Description</th><th>Main debate</th></tr></thead>
<tbody>
<tr><td>Net metering</td><td>Exports credited at retail rate</td><td>Simple but may overpay relative to system value</td></tr>
<tr><td>Net billing</td><td>Exports credited at a lower export rate</td><td>Better cost alignment; may slow adoption</td></tr>
<tr><td>Time-varying export rates</td><td>Credit varies by hour</td><td>Rewards storage and shifting; more complex</td></tr>
<tr><td>Locational value pricing</td><td>Credit reflects local grid needs</td><td>Accurate but data-intensive and hard to explain</td></tr>
</tbody>
</table>

<h3>Integrated Distribution Planning</h3>
<p>Distribution planning has traditionally forecast load growth and built capacity to match. With DERs, planners must forecast adoption, model two-way flows, publish hosting capacity maps and evaluate non-wires alternatives alongside traditional investments. Some jurisdictions require utilities to file integrated distribution plans with stakeholder input. Coordination between distribution utilities and transmission operators also matters when aggregated DERs participate in wholesale markets.</p>

<h3>Equity and Cost Shifts</h3>
<p>Early DER adopters have tended to be homeowners with higher incomes and suitable roofs. If DER compensation exceeds system value, fixed grid costs may shift to non-adopters, who are disproportionately lower-income renters. Responses include community solar programs, income-qualified incentives, on-bill financing, and rate designs that recover fixed costs more fairly. Each response carries trade-offs between equity, efficiency and continued DER growth.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the services DERs provide and to whom.</li>
<li>Compare compensation to a transparent estimate of system value.</li>
<li>Assess utility incentives under current regulation.</li>
<li>Integrate DER forecasts and non-wires options into distribution plans.</li>
<li>Analyze distributional impacts on adopters and non-adopters.</li>
<li>Define metrics and review cycles to adjust policy as adoption grows.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: DER Optimization, Transactive Energy and Grid Architecture</h2>
<p>With millions of controllable devices at the grid edge, research has turned to questions of coordination at scale. How should distributed resources be optimized without central control of every device? What market and control architectures allow distribution networks to operate reliably with high DER penetration? This lesson surveys modeling methods, emerging paradigms and contested questions.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Optimal power flow (distribution):</strong> optimization of power injections subject to network physics and limits, adapted to unbalanced distribution feeders</li>
<li><strong>Convex relaxation:</strong> reformulating a nonconvex power flow problem into a convex one that can be solved efficiently, with conditions for exactness</li>
<li><strong>Distributed optimization:</strong> algorithms such as dual decomposition or alternating direction methods where agents solve local problems and exchange limited information</li>
<li><strong>Transactive energy:</strong> a framework using economic signals and market-like mechanisms to coordinate supply and demand across many participants</li>
<li><strong>Peer-to-peer energy trading:</strong> direct exchange of energy between prosumers, usually on platforms that respect network constraints</li>
<li><strong>Grid architecture:</strong> the structural design of a power system, including roles, interfaces and coordination layers among entities</li>
</ul>

<h3>Optimization at the Grid Edge</h3>
<p>Distribution networks are radial, unbalanced and have high resistance-to-reactance ratios, so transmission-oriented simplifications often fail. Researchers use branch-flow models, semidefinite and second-order cone relaxations, and linearizations to make distribution optimal power flow tractable. The challenge grows when coordinating thousands of devices with uncertainty in solar output and consumer behavior, motivating stochastic, robust and online optimization approaches, as well as learning-based controllers whose safety guarantees remain an open concern.</p>

<h3>Transactive Energy and Market Design</h3>
<p>Transactive approaches send prices or other value signals to devices, which respond autonomously. Proposed designs range from distribution-level locational marginal prices to bilateral and peer-to-peer markets. Critics question whether households will engage, whether automated responses could synchronize and create new peaks, and whether market complexity is justified relative to simpler tariff-based coordination. Field demonstrations exist but are typically small and short.</p>

<h3>Architecture Debates</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Should a distribution system operator run local markets?</td><td>Raises questions about neutrality, utility ownership and coordination with transmission</td></tr>
<tr><td>Centralized versus decentralized coordination</td><td>Trade-offs among optimality, privacy, robustness and communication needs</td></tr>
<tr><td>Price signals versus direct control</td><td>Prices respect autonomy but may yield less predictable responses</td></tr>
<tr><td>Value of peer-to-peer trading</td><td>Benefits may be small relative to transaction and network costs</td></tr>
</tbody>
</table>

<h3>Data, Privacy and Cybersecurity</h3>
<p>Coordinating DERs requires data on device states and consumption, which raises privacy concerns and creates cyber-attack surfaces. Research explores privacy-preserving optimization, secure communication protocols and the systemic risk of compromised device fleets that could be manipulated in unison. Standards for interoperability are also a research and policy priority, as fragmented protocols hinder aggregation.</p>

<h3>Methodological Challenges</h3>
<p>Many DER studies rely on synthetic feeders and simulated behavior because real distribution network data are often proprietary. Results can be sensitive to feeder topology, customer heterogeneity and assumptions about participation. Open test systems and data-sharing agreements help, but bridging simulation and field reality remains difficult.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable distribution optimal power flow with uncertainty and unbalanced networks.</li>
<li>Safe, verifiable learning-based control of DER fleets.</li>
<li>Empirical evaluation of transactive and peer-to-peer market designs.</li>
<li>Coordination frameworks linking distribution and transmission operations.</li>
<li>Privacy-preserving and cyber-resilient aggregation methods.</li>
<li>Equitable participation mechanisms that broaden DER benefits.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rdistq1',
      question: {
        ELEMENTARY: 'What does a home battery do?',
        MIDDLE_SCHOOL: 'What is a distributed energy resource?',
        HIGH_SCHOOL: 'What is a virtual power plant?',
        UNDERGRADUATE: 'What is hosting capacity?',
        GRADUATE: 'What is a non-wires alternative?',
        PHD: 'What is transactive energy?',
      },
      options: {
        ELEMENTARY: ['Makes the roof warmer', 'Saves extra electricity for later', 'Washes the dishes', 'Grows plants'],
        MIDDLE_SCHOOL: ['A giant power plant far away', 'A small energy device located near where electricity is used', 'A long transmission line', 'A type of coal mine'],
        HIGH_SCHOOL: ['A power plant inside a video game', 'Software that coordinates many DERs to act like one power plant', 'A plant that runs on wind only', 'A model of a power plant for a museum'],
        UNDERGRADUATE: ['The size of a home battery', 'How much DER a feeder can take without violating voltage, thermal or protection limits', 'The number of customers a utility serves', 'The output of a central power plant'],
        GRADUATE: ['Using DERs, efficiency or demand response to avoid or defer a traditional grid upgrade', 'Wireless electricity', 'Removing all power lines', 'Building more substations'],
        PHD: ['Using economic signals and market-like mechanisms to coordinate many participants', 'Transmitting energy across oceans', 'A battery chemistry', 'A form of nuclear power'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A home battery saves extra solar electricity so the family can use it at night.',
        MIDDLE_SCHOOL: 'DERs are small, local energy tools like rooftop solar, home batteries and smart thermostats.',
        HIGH_SCHOOL: 'A VPP uses software to dispatch many small devices together so they act like a power plant.',
        UNDERGRADUATE: 'Hosting capacity sets how much DER a line can accept before upgrades or limits are needed.',
        GRADUATE: 'Non-wires alternatives meet a grid need with distributed resources instead of new equipment.',
        PHD: 'Transactive energy coordinates devices through value signals rather than direct central control.',
      },
    },
    {
      id: 'rdistq2',
      question: {
        ELEMENTARY: 'Where do many homes put solar panels?',
        MIDDLE_SCHOOL: 'What is demand response?',
        HIGH_SCHOOL: 'What does "behind-the-meter" mean?',
        UNDERGRADUATE: 'Why does lower export compensation make batteries more attractive?',
        GRADUATE: 'What is the throughput incentive?',
        PHD: 'Why do transmission-style power flow simplifications often fail on distribution networks?',
      },
      options: {
        ELEMENTARY: ['In the basement', 'Under the bed', 'On the roof', 'In the fridge'],
        MIDDLE_SCHOOL: ['Answering phone calls', 'Building new power plants', 'Using a little less electricity when demand is highest', 'Turning on every appliance at once'],
        HIGH_SCHOOL: ['Equipment on the utility side of the grid', 'Equipment hidden behind a wall', 'Equipment on the customer side of the utility meter', 'Equipment that reads meters'],
        UNDERGRADUATE: ['Batteries make panels produce more', 'Batteries are free', 'Storing solar for self-consumption becomes more valuable than exporting', 'Exports become illegal'],
        GRADUATE: ['A tax on electricity', 'A rule requiring solar panels', 'The motivation a utility has to sell more electricity when revenue depends on volume', 'A grid upgrade method'],
        PHD: ['Distribution networks have no losses', 'They use direct current only', 'Distribution feeders are radial, unbalanced and have high resistance-to-reactance ratios', 'They have no voltage limits'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Roofs are high and sunny, so they are a great place for solar panels.',
        MIDDLE_SCHOOL: 'Demand response means reducing or shifting use when the grid is stressed.',
        HIGH_SCHOOL: 'Behind-the-meter devices, like home batteries, sit on the customer side of the meter.',
        UNDERGRADUATE: 'If exports earn less, using your own solar later with a battery saves more money.',
        GRADUATE: 'When revenue depends on sales, utilities may resist efficiency and DERs that reduce sales.',
        PHD: 'These network features make simplified transmission models inaccurate for feeders.',
      },
    },
    {
      id: 'rdistq3',
      question: {
        ELEMENTARY: 'How can thousands of rooftop solar panels help a town?',
        MIDDLE_SCHOOL: 'Why does making electricity close to home save energy?',
        HIGH_SCHOOL: 'What problem can many rooftop solar systems cause on a sunny afternoon?',
        UNDERGRADUATE: 'What is locational value?',
        GRADUATE: 'What does decoupling do?',
        PHD: 'What is a concern with price-based coordination of many automated devices?',
      },
      options: {
        ELEMENTARY: ['They make the town darker', 'They make it rain', 'They make noise at night', 'Together they can make as much electricity as a big power plant'],
        MIDDLE_SCHOOL: ['It makes the wires longer', 'It uses more coal', 'Nearby power never reaches homes', 'Less electricity is lost traveling through long wires'],
        HIGH_SCHOOL: ['Too little sunlight', 'Frozen panels', 'Louder appliances', 'Voltage rising too high on some lines'],
        UNDERGRADUATE: ['The price of land under a solar farm', 'The color of the inverter', 'The utility headquarters address', 'Extra value a DER provides because of where it is on the network'],
        GRADUATE: ['Disconnects solar panels', 'Splits the grid into two', 'Removes meters', 'Separates utility revenue from sales volume'],
        PHD: ['Prices cannot be computed', 'Devices cannot read prices', 'Prices are always zero', 'Automated responses could synchronize and create new peaks'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Many small solar roofs add up to a lot of clean electricity.',
        MIDDLE_SCHOOL: 'Some electricity is lost as heat in long wires, so local power wastes less.',
        HIGH_SCHOOL: 'Lots of exported power can push voltage up on lines designed for one-way flow.',
        UNDERGRADUATE: 'A DER on a constrained feeder can defer a costly local upgrade, adding value.',
        GRADUATE: 'Decoupling reduces a utility reason to oppose efficiency and DERs.',
        PHD: 'If many devices respond the same way to the same price, they may all switch on at once.',
      },
    },
    {
      id: 'rdistq4',
      question: {
        ELEMENTARY: 'When is a good time to run the dishwasher in a home with solar panels?',
        MIDDLE_SCHOOL: 'What does an inverter do?',
        HIGH_SCHOOL: 'What is a flexible load?',
        UNDERGRADUATE: 'What can cause cross-subsidies between DER adopters and non-adopters?',
        GRADUATE: 'Why can cost-of-service regulation slow non-wires alternatives?',
        PHD: 'Why do many DER studies rely on synthetic feeders?',
      },
      options: {
        ELEMENTARY: ['During the sunny day', 'In the middle of a storm', 'Never', 'Only at midnight'],
        MIDDLE_SCHOOL: ['Changes solar panel electricity into the kind used in homes', 'Cleans the panels', 'Measures the temperature', 'Stores water'],
        HIGH_SCHOOL: ['A device whose timing can change without hurting the user', 'A load that bends', 'A battery with no limits', 'A power plant that moves'],
        UNDERGRADUATE: ['Compensation that differs from the value DERs provide to the system', 'Customers using too little electricity', 'Panels facing north', 'Short power lines'],
        GRADUATE: ['Utilities earn returns on capital they own, not on customer-owned DERs', 'DERs are illegal under it', 'It requires all power to come from solar', 'It bans demand response'],
        PHD: ['Real distribution network data are often proprietary', 'Real feeders do not exist', 'Synthetic feeders are always more accurate', 'Regulators forbid real data'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Running it while the sun shines uses clean electricity from your own roof.',
        MIDDLE_SCHOOL: 'Inverters convert solar panel electricity into the form homes use.',
        HIGH_SCHOOL: 'Water heaters and EV charging can often be shifted in time without bother.',
        UNDERGRADUATE: 'If credits exceed system value, fixed costs can shift to customers without DERs.',
        GRADUATE: 'A DER that defers a substation may save money but reduce utility earnings, creating capital bias.',
        PHD: 'Without access to real network data, researchers use synthetic or open test feeders.',
      },
    },
    {
      id: 'rdistq5',
      question: {
        ELEMENTARY: 'What is local energy?',
        MIDDLE_SCHOOL: 'How is a power system with DERs different from the old system?',
        HIGH_SCHOOL: 'What is a "prosumer"?',
        UNDERGRADUATE: 'What do smart inverters do?',
        GRADUATE: 'What is a common equity concern with DER policy?',
        PHD: 'What is a cybersecurity concern with DER fleets?',
      },
      options: {
        ELEMENTARY: ['Electricity made close to where it is used', 'Energy from the Moon', 'Electricity from faraway countries only', 'Energy stored in toys'],
        MIDDLE_SCHOOL: ['Electricity can flow both ways', 'It has no customers', 'It only works at night', 'It uses only coal'],
        HIGH_SCHOOL: ['Someone who both produces and consumes energy', 'A professional athlete', 'A utility worker', 'A type of solar panel'],
        UNDERGRADUATE: ['Provide grid-support functions like voltage regulation and ride-through', 'Make panels move with the sun', 'Turn off all lights', 'Store hydrogen'],
        GRADUATE: ['Fixed grid costs may shift to non-adopters, often lower-income renters', 'Everyone adopts DERs equally', 'DERs only benefit utilities', 'Renters always own rooftops'],
        PHD: ['Compromised device fleets could be manipulated in unison', 'Devices are too slow', 'Batteries cannot be hacked', 'Data are never collected'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Local energy is made nearby, like solar panels on your own roof.',
        MIDDLE_SCHOOL: 'With DERs, homes can send power back, so electricity flows in both directions.',
        HIGH_SCHOOL: 'Prosumers produce energy, often with rooftop solar, and also consume it.',
        UNDERGRADUATE: 'Smart inverters help keep voltage in range and stay connected during disturbances.',
        GRADUATE: 'Early adopters tend to be wealthier homeowners, so cost shifts can burden others.',
        PHD: 'If attackers control many devices, they could switch them together and destabilize the grid.',
      },
    },
  ],
}

export default expansion
