import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'smart-grids',
  lessons: [
    {
      id: 're-grid-1',
      title: 'The Smart Power Network: Running the Grid',
      content: {
        ELEMENTARY: `
<h2>The Grid: A Giant Team Game</h2>
<p>Every time you switch on a lamp, electricity zooms to you through wires from far away. All those wires, power plants, solar panels and homes are joined together in one huge network called the grid. A smart grid is a grid that can think, talk and help everyone share electricity better. Let's meet the team!</p>

<h3>Keeping Things Balanced</h3>
<p>Imagine a seesaw. On one side is all the electricity being made. On the other side is all the electricity people are using. The grid has to keep the seesaw level all the time. If people use more, power plants must make more right away. People called grid operators watch big screens day and night to keep the seesaw balanced.</p>
<ul>
<li><strong>Grid:</strong> the big network of wires that carries electricity to homes and schools</li>
<li><strong>Grid operator:</strong> a person whose job is to keep electricity supply and use balanced</li>
<li><strong>Balance:</strong> making exactly as much electricity as people are using right now</li>
</ul>

<h3>What Makes a Grid Smart?</h3>
<p>Old grids could not see very much. If a tree fell on a wire, workers might only find out when people called to say their lights were off. A smart grid has sensors, like tiny eyes, all along the wires. They send messages to computers, so problems are found fast and fixed sooner.</p>
<ul>
<li><strong>Sensor:</strong> a small device that notices things, like how much electricity is flowing</li>
<li><strong>Smart meter:</strong> a box at your home that tells the power company how much electricity you use</li>
<li><strong>Outage:</strong> a time when the electricity stops working in an area</li>
</ul>

<h3>Sun and Wind on the Team</h3>
<p>Sunshine and wind change during the day. A smart grid helps by moving electricity to where it is needed and by asking some machines to wait a little. For example, a smart dishwasher might start later at night when there is plenty of power.</p>

<h3>You Can Be a Grid Helper</h3>
<ol>
<li>Turn off lights and screens when you leave a room.</li>
<li>Ask a grown-up to run the washing machine at quieter times of day.</li>
<li>On very hot days, close curtains so the air conditioner works less.</li>
</ol>

<h3>Think About It</h3>
<p>Millions of people all use electricity at once, and the grid keeps it all working. When you help save a little, you are part of the team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Computers Help Run the Power Grid</h2>
<p>The electric grid is one of the largest machines ever built. It connects power plants, wind farms and solar panels to millions of homes and businesses. Electricity is hard to store in large amounts, so the grid must match supply and demand every second. A smart grid adds sensors, communication and computers to the traditional grid so that this balancing job can be done faster, more cheaply and with more clean energy.</p>

<h3>The Control Room</h3>
<p>Grid operators work in control rooms with large screens showing the whole network. They forecast how much electricity people will use, decide which power plants should run, and react when something goes wrong. In a smart grid, they receive far more data, often many times per second, from sensors across the system.</p>

<h3>The Grid's Heartbeat</h3>
<p>Alternating current electricity flows back and forth at a steady rate called the frequency. When demand rises faster than supply, the frequency drops slightly. When supply is larger, it rises. Operators watch frequency like a doctor watches a heartbeat, and automatic systems adjust power plants and batteries to keep it steady.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Supply and demand:</strong> the amount of electricity being produced compared with the amount being used</li>
<li><strong>Frequency:</strong> how many times per second alternating current changes direction, kept very steady on a healthy grid</li>
<li><strong>Peak demand:</strong> the time of day when people use the most electricity, often early evening</li>
<li><strong>Demand response:</strong> asking customers or devices to use less power, or use it later, when the grid is stressed</li>
<li><strong>Distribution network:</strong> the local wires that carry electricity from substations to homes</li>
<li><strong>Automation:</strong> computers and switches that act on their own without a person pressing a button</li>
</ul>

<h3>Old Grid Versus Smart Grid</h3>
<table>
<thead><tr><th>Task</th><th>Traditional grid</th><th>Smart grid</th></tr></thead>
<tbody>
<tr><td>Finding outages</td><td>Wait for customer phone calls</td><td>Sensors and smart meters report automatically</td></tr>
<tr><td>Reading meters</td><td>A worker visits once a month</td><td>Meters send readings automatically</td></tr>
<tr><td>Meeting peak demand</td><td>Turn on extra power plants</td><td>Also shift flexible demand to other times</td></tr>
<tr><td>Fixing problems</td><td>Crews switch lines by hand</td><td>Automatic switches reroute power in seconds</td></tr>
</tbody>
</table>

<h3>Why It Matters for Clean Energy</h3>
<p>Solar output rises and falls with the Sun, and wind changes with the weather. A smart grid can forecast these changes, store extra energy in batteries, and nudge flexible uses like water heaters and electric car charging to the times when clean power is plentiful. That means fewer polluting power plants are needed just for the busiest hours.</p>

<h3>Try This</h3>
<p>Ask an adult whether your electricity company offers a lower price at certain times of day. If so, list three household jobs that could be moved to those cheaper, cleaner hours.</p>
`,
        HIGH_SCHOOL: `
<h2>Smart Grid Operations: Sensors, Automation and Demand Response</h2>
<p>A power grid has to obey a strict rule: generation must equal consumption plus losses at every instant. For a century, operators met that rule mainly by adjusting large, controllable power plants. Today the grid includes variable wind and solar, rooftop panels, batteries and millions of flexible devices. A smart grid gives operators the visibility and control to manage this more complex system reliably.</p>

<h3>How Operators Keep Balance</h3>
<p>Balancing happens across several time scales, from seconds to days:</p>
<ol>
<li><strong>Day-ahead planning:</strong> forecasts of demand, wind and solar decide which plants are scheduled.</li>
<li><strong>Hour-ahead and real-time dispatch:</strong> schedules are updated as forecasts improve.</li>
<li><strong>Automatic control:</strong> within seconds to minutes, signals adjust generators and batteries to hold frequency steady.</li>
<li><strong>Inertia and fast response:</strong> in the first moments after a plant trips, spinning machines and fast batteries slow the frequency drop.</li>
</ol>

<h3>Sensing the Grid</h3>
<ul>
<li><strong>Phasor measurement unit:</strong> a high-speed sensor that measures voltage and current many times per second with precise time stamps</li>
<li><strong>SCADA:</strong> supervisory control and data acquisition, the software and network that let operators monitor and control equipment remotely</li>
<li><strong>Advanced metering infrastructure:</strong> smart meters plus the communication network that links them to the utility</li>
<li><strong>Distribution automation:</strong> sensors and remote-controlled switches on local feeders that detect and isolate faults</li>
<li><strong>Forecasting system:</strong> software that predicts demand and renewable output using weather data</li>
</ul>

<h3>Self-Healing Distribution</h3>
<p>When a fault occurs on a local line, distribution automation can locate it, open switches on either side to isolate the damaged section, and close other switches to restore power to customers from a different direction. This sequence, often called fault location, isolation and service restoration, can reduce the number of customers affected and shorten outages from hours to minutes for many of them.</p>

<h3>Demand Response in Action</h3>
<table>
<thead><tr><th>Program type</th><th>How it works</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Time-of-use pricing</td><td>Prices are higher at peak times</td><td>Running appliances at night</td></tr>
<tr><td>Direct load control</td><td>Utility briefly cycles devices with permission</td><td>Pausing air conditioners for a few minutes</td></tr>
<tr><td>Critical peak events</td><td>Customers paid or alerted to cut use on extreme days</td><td>Heat wave conservation alerts</td></tr>
<tr><td>Managed EV charging</td><td>Charging shifted to off-peak or high-renewable hours</td><td>Cars charging after midnight</td></tr>
</tbody>
</table>

<h3>Trade-offs</h3>
<p>More connected devices bring benefits and risks. Cybersecurity becomes critical, because attackers could target control systems. Smart meter data can reveal daily routines, raising privacy concerns. Upgrades cost money that is ultimately paid by customers, so utilities must show real benefits. Fair program design matters too, so that people who cannot easily shift their electricity use are not penalized.</p>

<h3>The Big Picture</h3>
<p>A smart grid turns electricity customers from passive users into active participants. Operators can then rely on a mix of flexible demand, storage and clean generation instead of only on fossil plants to keep the lights on.</p>
`,
        UNDERGRADUATE: `
<h2>Grid Modernization: Metering, Distribution Automation and Operations</h2>
<p>Grid modernization is the set of investments that add sensing, communications, computation and controllable devices to an electricity system designed for one-way flow from central plants. This lesson analyzes why modernization is needed, how advanced metering and distribution automation change operations, and how to evaluate investments using reliability and cost metrics.</p>

<h3>Why the Distribution Grid Is Changing</h3>
<p>Distribution networks were designed for power flowing from substations to customers, with little monitoring beyond the substation. Rooftop solar, batteries, heat pumps and electric vehicles create two-way flows, local voltage problems and new peak patterns. Midday solar can push voltages above limits on lightly loaded feeders, while clustered EV charging can overload transformers in the evening. Without visibility and control, utilities must either limit new connections or build costly capacity.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Hosting capacity:</strong> the amount of distributed generation a feeder can accept without violating voltage, thermal or protection limits</li>
<li><strong>Volt-VAR optimization:</strong> coordinated control of voltage regulators, capacitors and inverters to keep voltage in range and reduce losses</li>
<li><strong>Conservation voltage reduction:</strong> operating near the lower end of the allowed voltage band to lower energy use in many devices</li>
<li><strong>Advanced distribution management system:</strong> software that combines network models, real-time data and control for the distribution grid</li>
<li><strong>SAIDI:</strong> the System Average Interruption Duration Index, the average outage minutes per customer per year</li>
<li><strong>SAIFI:</strong> the System Average Interruption Frequency Index, the average number of interruptions per customer per year</li>
</ul>

<h3>Advanced Metering Infrastructure</h3>
<p>Smart meters provide interval consumption data, remote connection, outage notifications and voltage readings at the customer edge. Their value comes from several streams: avoided meter reading, faster outage detection, theft reduction, enabling time-varying rates and improving network models. Analysts should be cautious, because many benefits depend on complementary investments and programs. A meter that records hourly data creates little value if rates and analytics do not use it.</p>

<h3>Distribution Automation and Reliability</h3>
<p>Automated switching does not reduce the number of faults, but it reduces how many customers experience each one and for how long. In reliability terms, it mostly lowers SAIDI and the customer-weighted parts of SAIFI. Reasoning in words: if a feeder serving several thousand customers is divided into sections by automated switches, a fault affects only one section for a long time, while the rest are restored within minutes from an adjacent feeder.</p>

<h3>Comparing Investments</h3>
<table>
<thead><tr><th>Investment</th><th>Main benefit</th><th>Dependencies</th></tr></thead>
<tbody>
<tr><td>Smart meters</td><td>Data, billing savings, rate options</td><td>Communications network, data systems, rate design</td></tr>
<tr><td>Feeder automation</td><td>Fewer customer outage minutes</td><td>Network ties to restore from, reliable communications</td></tr>
<tr><td>Volt-VAR optimization</td><td>Energy and loss reduction, higher hosting capacity</td><td>Accurate network model, controllable devices</td></tr>
<tr><td>Distribution management system</td><td>Integrated visibility and control</td><td>Clean asset data, staff training</td></tr>
</tbody>
</table>

<h3>Applied Method: Evaluating a Modernization Plan</h3>
<ol>
<li>Define the problems to solve, such as reliability gaps, hosting limits or peak growth.</li>
<li>Establish baselines for reliability indices, losses and peak load.</li>
<li>Map each investment to specific benefit streams and identify dependencies.</li>
<li>Estimate benefits conservatively, separating what requires additional programs.</li>
<li>Compare against non-digital alternatives such as conventional reinforcement.</li>
<li>Plan cybersecurity, data governance and customer protections from the start.</li>
</ol>
`,
        GRADUATE: `
<h2>Transactive Operations, Cybersecurity and Regulatory Frameworks</h2>
<p>As grids digitalize, the core questions shift from technology to institutions: who coordinates millions of distributed resources, how they are paid, how systems are kept secure and how regulators ensure that modernization spending serves the public. This lesson examines operational coordination models, cybersecurity governance and the regulatory frameworks that shape smart grid outcomes from a grid operator's perspective.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Transactive energy:</strong> using economic signals and automated negotiation to coordinate supply and demand across many devices</li>
<li><strong>Distribution system operator:</strong> an entity that actively manages a distribution network, including local flexibility, rather than only maintaining wires</li>
<li><strong>Aggregator:</strong> a company that bundles many small resources so they can provide services to the grid as one</li>
<li><strong>Defense in depth:</strong> layering multiple security controls so that a single failure does not compromise the system</li>
<li><strong>Performance-based regulation:</strong> linking utility earnings to outcomes such as reliability and customer service rather than only capital spending</li>
<li><strong>Total expenditure approach:</strong> regulatory treatment that puts capital and operating spending on more equal footing</li>
</ul>

<h3>Coordination Models</h3>
<table>
<thead><tr><th>Model</th><th>How resources are coordinated</th><th>Key issue</th></tr></thead>
<tbody>
<tr><td>Utility direct control</td><td>Utility dispatches enrolled devices</td><td>Simple but limited customer choice</td></tr>
<tr><td>Aggregator via wholesale markets</td><td>Aggregators bid flexibility to the system operator</td><td>Can conflict with local network limits</td></tr>
<tr><td>Local flexibility markets</td><td>Distribution operator procures flexibility where congestion occurs</td><td>Liquidity and market power in small areas</td></tr>
<tr><td>Transactive or price-based</td><td>Devices respond automatically to dynamic prices</td><td>Stability, fairness and customer understanding</td></tr>
</tbody>
</table>
<p>A recurring governance challenge is coordination between transmission and distribution operators. A battery dispatched to support the bulk system may worsen a local constraint. Clear rules on visibility, priority and data exchange are needed so resources are not double-counted or set against each other.</p>

<h3>Cybersecurity as Governance</h3>
<p>Smart grids dramatically expand the attack surface: meters, inverters, chargers and cloud platforms all connect to systems that matter for reliability. Effective cybersecurity combines technical controls with governance: security requirements in procurement, network segmentation between business and operational systems, incident response planning, supply chain scrutiny and information sharing among utilities. A growing concern is that many distributed devices are controlled by third parties and manufacturers rather than utilities, so standards for device security and remote access become a public policy issue.</p>

<h3>Regulatory Incentives</h3>
<p>Under traditional cost-of-service regulation, utilities earn returns on capital investments, which can bias them toward building hardware rather than procuring cheaper flexibility from customers. Regulators respond with performance incentives, total expenditure approaches, requirements to consider non-wires alternatives and integrated distribution planning. Evaluating smart grid proposals requires asking whether benefits are realistic, who receives them and whether they could be obtained more cheaply.</p>

<h3>Equity Considerations</h3>
<p>Time-varying rates and demand response can lower system costs but may burden households that cannot shift use, such as those with medical equipment or fixed work schedules. Program design choices, such as opt-in versus default enrollment, bill protection and targeted support, determine distributional outcomes.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Clarify operational roles of transmission operator, distribution operator and aggregators.</li>
<li>Test whether regulatory incentives favor least-cost solutions, including non-wires options.</li>
<li>Require cybersecurity and data governance plans proportionate to risk.</li>
<li>Assess distributional impacts of rate and program designs.</li>
<li>Define measurable outcomes and report on them publicly.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Distributed Optimization, Market Design and Resilience</h2>
<p>Smart grid research addresses a system that is becoming larger, faster, more decentralized and more exposed to extreme events. The challenge is to coordinate vast numbers of heterogeneous resources while respecting physical network constraints, preserving privacy and remaining robust to failures and attacks. This lesson surveys mathematical methods, market design debates and resilience engineering questions.</p>

<h3>Optimization Methods</h3>
<ul>
<li><strong>Optimal power flow:</strong> the problem of choosing generation and controls to minimize cost subject to the nonconvex physics of alternating current networks</li>
<li><strong>Convex relaxation:</strong> replacing nonconvex constraints with convex ones, such as semidefinite or second-order cone forms, to obtain tractable bounds or exact solutions under conditions</li>
<li><strong>Alternating direction method of multipliers:</strong> a decomposition algorithm that lets subsystems solve local problems and exchange limited information</li>
<li><strong>Online optimization:</strong> algorithms that make sequential decisions with performance guarantees despite unknown future inputs</li>
<li><strong>Stochastic and robust optimization:</strong> formulations that handle uncertainty through probability distributions or worst-case sets</li>
<li><strong>Reinforcement learning:</strong> data-driven control methods that learn policies from interaction, raising questions of safety and generalization</li>
</ul>
<p>Distribution networks are well suited to some relaxations because radial structure can make second-order cone relaxations exact under certain conditions, but these conditions may fail with reverse flows from distributed generation. Distributed algorithms promise scalability and privacy but face convergence speed, communication delays and vulnerability to faulty or strategic participants.</p>

<h3>Market Design Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Distribution locational marginal pricing</td><td>Efficient signals versus complexity, volatility and fairness at the household level</td></tr>
<tr><td>Valuing inertia and fast frequency response</td><td>Declining synchronous generation makes these services scarce but hard to define as products</td></tr>
<tr><td>Hierarchical versus peer-to-peer coordination</td><td>Trade-offs among efficiency, scalability and operator control</td></tr>
<tr><td>Aggregation and market power</td><td>Large aggregators may exercise power in thin local markets</td></tr>
</tbody>
</table>

<h3>Resilience Engineering</h3>
<p>Reliability metrics capture routine outages but largely exclude major events, which dominate customer harm in a warming climate. Resilience research models the trajectory of performance before, during and after high-impact, low-probability events, including hardening, emergency operations and restoration. Methods include tri-level defender-attacker-operator models, Monte Carlo simulation with fragility curves for weather hazards, and restoration optimization that sequences crew dispatch and microgrid formation. A key methodological difficulty is the scarcity of data on rare events and the correlation of failures across infrastructure systems.</p>

<h3>Inverter-Dominated Dynamics</h3>
<p>As inverter-based resources replace synchronous machines, grid dynamics change. Grid-following inverters depend on a stable voltage reference, while grid-forming inverters establish one. Research questions include stability criteria for low-inertia systems, interactions among many inverter controllers, and appropriate modeling fidelity for large-scale studies.</p>

<h3>Methodological Debates</h3>
<p>Researchers debate the value of data-driven versus physics-based models, the reproducibility of results built on proprietary network data, and whether stylized test feeders represent real systems. Synthetic network datasets and open benchmarks aim to improve comparability.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable, provably safe coordination algorithms that respect alternating current network physics.</li>
<li>Market designs for local flexibility that balance efficiency, simplicity and equity.</li>
<li>Resilience metrics and valuation methods suitable for planning and regulation.</li>
<li>Stability theory and control for grids dominated by grid-forming inverters.</li>
<li>Privacy-preserving data sharing for operations and research.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rgdq1',
      question: {
        ELEMENTARY: 'What does a grid operator do?',
        MIDDLE_SCHOOL: 'What happens to grid frequency when demand rises faster than supply?',
        HIGH_SCHOOL: 'What is a phasor measurement unit?',
        UNDERGRADUATE: 'What does hosting capacity describe?',
        GRADUATE: 'What is an aggregator?',
        PHD: 'What is optimal power flow?',
      },
      options: {
        ELEMENTARY: ['Keeps electricity supply and use balanced', 'Builds toy cars', 'Paints power poles', 'Sells light bulbs'],
        MIDDLE_SCHOOL: ['It drops slightly', 'It rises sharply', 'It stays exactly the same no matter what', 'It turns into direct current'],
        HIGH_SCHOOL: ['A high-speed sensor measuring voltage and current with precise time stamps', 'A type of solar panel', 'A household light switch', 'A battery for electric cars'],
        UNDERGRADUATE: ['How much distributed generation a feeder can accept without violating limits', 'The number of customers on a feeder', 'The size of a power plant', 'How many meters a utility owns'],
        GRADUATE: ['A company that bundles many small resources to provide grid services as one', 'A type of transformer', 'A regulator that sets prices', 'A power plant fuel supplier'],
        PHD: ['Choosing generation and controls to minimize cost subject to AC network physics', 'Maximizing the number of power lines', 'Measuring outages after they happen', 'A billing method for customers'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Grid operators keep the electricity seesaw level so supply matches use.',
        MIDDLE_SCHOOL: 'When demand outruns supply, frequency drops slightly, and automatic systems respond.',
        HIGH_SCHOOL: 'Phasor measurement units take precisely time-stamped readings many times per second.',
        UNDERGRADUATE: 'Hosting capacity is limited by voltage, thermal and protection constraints on the feeder.',
        GRADUATE: 'Aggregators combine many small devices so they can act as one larger resource.',
        PHD: 'Optimal power flow is a nonconvex optimization problem at the heart of grid operations.',
      },
    },
    {
      id: 'rgdq2',
      question: {
        ELEMENTARY: 'What does a sensor on the wires do?',
        MIDDLE_SCHOOL: 'What is demand response?',
        HIGH_SCHOOL: 'What does fault location, isolation and service restoration do?',
        UNDERGRADUATE: 'Which reliability index does distribution automation mainly improve?',
        GRADUATE: 'Why can cost-of-service regulation bias utilities toward hardware?',
        PHD: 'Why are second-order cone relaxations attractive for distribution networks?',
      },
      options: {
        ELEMENTARY: ['Makes the wires longer', 'Notices problems and sends messages to computers', 'Makes electricity louder', 'Paints the wires'],
        MIDDLE_SCHOOL: ['Building more power lines', 'Asking customers or devices to use less power, or use it later, when the grid is stressed', 'Raising prices forever', 'Turning off all power at night'],
        HIGH_SCHOOL: ['Builds new power plants', 'Isolates a damaged section and restores power to other customers from another direction', 'Measures how sunny it is', 'Bills customers for outages'],
        UNDERGRADUATE: ['Number of faults caused by trees', 'SAIDI, the average outage minutes per customer', 'Generation capacity', 'Fuel prices'],
        GRADUATE: ['Utilities earn returns on capital investments, not on procuring flexibility', 'Hardware is always cheaper', 'Regulators forbid demand response', 'Customers demand more poles'],
        PHD: ['Radial structure can make them exact under certain conditions', 'They are always exact for any network', 'They ignore network physics completely', 'They remove the need for data'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Sensors act like tiny eyes that tell computers when something is wrong.',
        MIDDLE_SCHOOL: 'Demand response shifts or reduces use during stressful times instead of only adding supply.',
        HIGH_SCHOOL: 'Automatic switches isolate the fault and reroute power, shortening outages for many customers.',
        UNDERGRADUATE: 'Automation reduces how long and how many customers are affected, lowering SAIDI.',
        GRADUATE: 'Earning returns on capital gives utilities an incentive to build rather than buy services.',
        PHD: 'For radial networks, these relaxations can be exact under conditions that reverse flows may violate.',
      },
    },
    {
      id: 'rgdq3',
      question: {
        ELEMENTARY: 'When might a smart dishwasher run?',
        MIDDLE_SCHOOL: 'When does peak demand often happen?',
        HIGH_SCHOOL: 'Which program pays or alerts customers to cut use on extreme days?',
        UNDERGRADUATE: 'Why can midday solar cause problems on lightly loaded feeders?',
        GRADUATE: 'What is a coordination challenge between transmission and distribution operators?',
        PHD: 'Why are standard reliability metrics insufficient for resilience planning?',
      },
      options: {
        ELEMENTARY: ['Only during thunderstorms', 'Only at lunchtime', 'Later at night when there is plenty of power', 'Never'],
        MIDDLE_SCHOOL: ['At 3 in the morning', 'Exactly at noon every day', 'Early evening', 'Only on holidays'],
        HIGH_SCHOOL: ['Direct load control', 'Managed EV charging', 'Critical peak events', 'Meter reading'],
        UNDERGRADUATE: ['It lowers voltage too much', 'Solar panels absorb electricity', 'It can push voltages above allowed limits', 'It stops smart meters'],
        GRADUATE: ['They use different voltages', 'Transmission lines are longer', 'A resource dispatched for the bulk system may worsen a local constraint', 'They never share any equipment'],
        PHD: ['They are calculated too often', 'They count only planned outages', 'They largely exclude major events that dominate customer harm', 'They focus only on generation'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Smart machines can wait until later when the grid has plenty of electricity.',
        MIDDLE_SCHOOL: 'Many grids see the most use in the early evening when people come home.',
        HIGH_SCHOOL: 'Critical peak events reward or alert customers to reduce use on the hardest days.',
        UNDERGRADUATE: 'Reverse power flow from solar on low-load feeders can raise voltage above limits.',
        GRADUATE: 'Without coordination, resources can work against each other at different grid levels.',
        PHD: 'Reliability indices usually exclude major events, but those drive most harm under climate change.',
      },
    },
    {
      id: 'rgdq4',
      question: {
        ELEMENTARY: 'What is an outage?',
        MIDDLE_SCHOOL: 'How does a smart grid find outages compared with an old grid?',
        HIGH_SCHOOL: 'Why does cybersecurity become more important in a smart grid?',
        UNDERGRADUATE: 'Why should analysts be cautious about smart meter benefit claims?',
        GRADUATE: 'Why is device security a public policy issue for smart grids?',
        PHD: 'What is the difference between grid-following and grid-forming inverters?',
      },
      options: {
        ELEMENTARY: ['A sunny day', 'A new power plant', 'A time when electricity stops working in an area', 'A type of light bulb'],
        MIDDLE_SCHOOL: ['It waits for monthly bills', 'Sensors and meters report automatically', 'It never finds outages', 'Workers drive around looking'],
        HIGH_SCHOOL: ['Because wires get longer', 'Because solar panels attract hackers', 'Because more connected control systems give attackers more targets', 'Because meters use more power'],
        UNDERGRADUATE: ['Meters never work', 'Meters cost nothing', 'Many benefits depend on complementary programs and rate designs', 'Meters only measure water'],
        GRADUATE: ['Devices are all owned by regulators', 'Utilities control every device directly', 'Many distributed devices are controlled by third parties and manufacturers', 'Devices are never connected'],
        PHD: ['They are identical', 'Grid-forming inverters only work at night', 'Grid-following inverters rely on a stable voltage reference; grid-forming inverters establish one', 'Grid-following inverters have no controls'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'An outage is when the power goes off for a while.',
        MIDDLE_SCHOOL: 'Smart grid sensors and meters report problems automatically, so they are found faster.',
        HIGH_SCHOOL: 'Every connected device is a possible entry point, so security matters more.',
        UNDERGRADUATE: 'Meter value depends on rates, analytics and programs that actually use the data.',
        GRADUATE: 'Third-party remote access to many devices creates risks beyond utility control.',
        PHD: 'Grid-forming control sets voltage and frequency, which matters as synchronous machines retire.',
      },
    },
    {
      id: 'rgdq5',
      question: {
        ELEMENTARY: 'How can you be a grid helper on a hot day?',
        MIDDLE_SCHOOL: 'Why does a smart grid help with clean energy?',
        HIGH_SCHOOL: 'What is a fairness concern with demand response and time-varying rates?',
        UNDERGRADUATE: 'What does conservation voltage reduction do?',
        GRADUATE: 'What is performance-based regulation?',
        PHD: 'What is a known weakness of distributed optimization algorithms?',
      },
      options: {
        ELEMENTARY: ['Open the fridge door', 'Leave the TV on', 'Turn on every light', 'Close curtains so the air conditioner works less'],
        MIDDLE_SCHOOL: ['It burns more coal', 'It removes solar panels', 'It makes wind blow harder', 'It shifts flexible uses to times when clean power is plentiful'],
        HIGH_SCHOOL: ['Everyone saves the same amount', 'It only affects power plants', 'It makes electricity free', 'People who cannot easily shift use may be penalized'],
        UNDERGRADUATE: ['Raises voltage to the maximum', 'Turns off feeders', 'Measures customer income', 'Operates near the low end of the allowed voltage band to save energy'],
        GRADUATE: ['Paying utilities only for building more equipment', 'Removing all regulation', 'Setting prices by auction only', 'Linking utility earnings to outcomes such as reliability and service'],
        PHD: ['They always converge instantly', 'They require no communication', 'They cannot be applied to grids', 'Slow convergence, communication delays and vulnerability to faulty participants'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Closing curtains keeps rooms cooler so less electricity is needed.',
        MIDDLE_SCHOOL: 'Smart grids move flexible demand to clean hours and store extra energy.',
        HIGH_SCHOOL: 'Programs should protect people who cannot change when they use electricity.',
        UNDERGRADUATE: 'Many devices use less energy at slightly lower voltage within the allowed range.',
        GRADUATE: 'Performance-based regulation rewards outcomes rather than capital spending alone.',
        PHD: 'Distributed algorithms trade scalability and privacy against speed and robustness.',
      },
    },
  ],
}

export default expansion
