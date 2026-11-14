import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'smart-grids~2',
  lessons: [
    {
      id: 're-sg-1',
      title: 'Smarter Power: The Technology Inside a Smart Grid',
      content: {
        ELEMENTARY: `
<h2>The Grid Gets a Brain</h2>
<p>Hi, I am Volt the Spark! Every time you switch on a lamp, electricity travels to your home along a giant web of wires called the grid. For a long time the grid could carry power, but it could not think. Now people are adding tiny computers and sensors so the grid can notice problems and make good choices. We call it a <em>smart grid</em>. Let's look inside!</p>

<h3>Eyes and Ears for the Wires</h3>
<p>A smart grid has small helpers placed all along the wires. They watch how much electricity is flowing, just like a lifeguard watches a pool. If something goes wrong, they send a message right away so workers know where to look.</p>
<ul>
<li><strong>Grid:</strong> the big web of wires, poles and stations that carries electricity to homes and schools</li>
<li><strong>Sensor:</strong> a small device that notices things, like how much power is moving through a wire</li>
<li><strong>Smart meter:</strong> a box on the side of a house that counts electricity and sends the number to the power company</li>
</ul>

<h3>Talking to Each Other</h3>
<p>The helpers in a smart grid can talk to each other and to a control room, a bit like friends sending messages. If a storm knocks down a wire, the grid can quickly find a new path so fewer families lose their lights. That is like taking a different street when one road is blocked.</p>
<ul>
<li><strong>Control room:</strong> a place where people watch big screens that show how the grid is doing</li>
<li><strong>Outage:</strong> a time when the lights go out because power cannot reach a building</li>
</ul>

<h3>Helping Sun and Wind Power</h3>
<p>Sunshine and wind do not stay the same all day. Clouds float by and the breeze slows down. A smart grid keeps track of these changes and helps share clean power where it is needed. That means we can use more clean energy and burn less smoky fuel.</p>

<h3>You Can Help the Grid Too!</h3>
<p>The grid works hardest when lots of people use power at the same time, like on hot afternoons. You can be a grid helper:</p>
<ol>
<li>Turn off lights and screens when you leave a room.</li>
<li>Ask a grown-up to run the washing machine later in the evening or at night.</li>
<li>Close doors and curtains on hot days so the cool air stays inside.</li>
</ol>

<h3>Think About It</h3>
<p>The wires in your street might look the same as always, but more and more of them are getting little computer brains. A smart grid is a team of wires, sensors and people working together to keep the lights on and the air clean.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How a Smart Grid Uses Technology</h2>
<p>The traditional power grid was built for one-way traffic: big power plants made electricity and sent it out through wires to homes and businesses. Operators had little information about what was happening on the wires near your house. A <em>smart grid</em> adds digital technology so that information flows both ways along with the electricity. This helps the grid run more efficiently, recover faster from problems and handle more renewable energy.</p>

<h3>The Main Pieces</h3>
<p>A smart grid is not one machine. It is many technologies working together:</p>
<ol>
<li><strong>Smart meters</strong> measure electricity use in short time steps and send the data automatically.</li>
<li><strong>Sensors on power lines</strong> report voltage, current and faults.</li>
<li><strong>Automated switches</strong> can open or close remotely to reroute power around a damaged line.</li>
<li><strong>Communication networks</strong> carry data between devices and the control center.</li>
<li><strong>Software</strong> analyzes the data and helps operators decide what to do.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Two-way communication:</strong> information flowing from the utility to customers and back again</li>
<li><strong>Smart meter:</strong> an electric meter that records use in detail and sends the data to the utility without a meter reader</li>
<li><strong>Peak demand:</strong> the time when the most people are using electricity at once, such as hot summer evenings</li>
<li><strong>Demand response:</strong> asking customers to use less power or shift their use when the grid is stressed</li>
<li><strong>Self-healing grid:</strong> a grid that can detect a fault and automatically reroute power to restore service</li>
<li><strong>Renewable energy:</strong> energy from sources that are naturally replenished, like sunlight and wind</li>
</ul>

<h3>Old Grid Versus Smart Grid</h3>
<table>
<thead><tr><th>Feature</th><th>Traditional grid</th><th>Smart grid</th></tr></thead>
<tbody>
<tr><td>Meter reading</td><td>A worker visits once a month</td><td>Data sent automatically</td></tr>
<tr><td>Finding outages</td><td>Often waits for customer phone calls</td><td>Sensors report the fault location</td></tr>
<tr><td>Power flow</td><td>Mostly one direction</td><td>Can handle rooftop solar sending power back</td></tr>
<tr><td>Customer role</td><td>Just uses power</td><td>Can shift use and save money</td></tr>
</tbody>
</table>

<h3>Why Peaks Matter</h3>
<p>Utilities must have enough power plants and wires to cover the busiest hour of the year, even if that capacity sits idle most of the time. The plants that run only at peaks are often older and more polluting. If smart grid technology helps people shift some use, like charging a car or running a dishwasher, to quieter hours, the grid needs less of that peak equipment.</p>

<h3>Smart Grids and Clean Energy</h3>
<p>Solar and wind output rises and falls with the weather. Smart grid tools help operators forecast those changes, coordinate batteries and adjust flexible loads so supply and demand stay balanced. Without this information, it is much harder to fit large amounts of renewable energy onto the grid.</p>

<h3>Something to Try</h3>
<p>If your family has a smart meter, ask whether the utility offers an app or website that shows hourly use. Look for the hours when your home uses the most electricity and brainstorm ways to move some of that use to a different time.</p>
`,
        HIGH_SCHOOL: `
<h2>Smart Grid Components, Communication and Modernization</h2>
<p>The electric grid is often called the largest machine ever built. Most of it was designed in an era of large central power stations, predictable demand and manual operation. Grid modernization means layering sensing, communication, automation and data analysis onto this physical system so that it can cope with rooftop solar, electric vehicles, extreme weather and rising demand. This lesson looks at the main components of a smart grid, how they communicate and the trade-offs involved.</p>

<h3>Layers of a Smart Grid</h3>
<p>It helps to think of a smart grid as three connected layers:</p>
<ul>
<li><strong>Physical layer:</strong> generators, transformers, power lines, substations and the devices customers own</li>
<li><strong>Communication layer:</strong> fiber, radio, cellular and power-line networks that move data between devices</li>
<li><strong>Information layer:</strong> software platforms that collect data, analyze it and send control signals</li>
<li><strong>Phasor measurement unit:</strong> a high-speed sensor that records voltage and current many times per second with precise time stamps</li>
<li><strong>Distribution automation:</strong> remote-controlled switches and sensors that let operators isolate faults and restore power quickly</li>
<li><strong>Advanced metering infrastructure:</strong> the system of smart meters, networks and data systems that measures customer use in detail</li>
</ul>

<h3>Key Technologies Compared</h3>
<table>
<thead><tr><th>Technology</th><th>Where it sits</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Smart meters</td><td>Customer premises</td><td>Interval usage data, remote connect, outage alerts</td></tr>
<tr><td>Phasor measurement units</td><td>Transmission substations</td><td>Wide-area view of grid stability in near real time</td></tr>
<tr><td>Fault location, isolation and restoration</td><td>Distribution feeders</td><td>Automatically shrinks the area affected by an outage</td></tr>
<tr><td>Volt/VAR optimization</td><td>Distribution feeders</td><td>Keeps voltage in a tight band to reduce losses and wasted energy</td></tr>
<tr><td>Smart inverters</td><td>Solar and battery systems</td><td>Support grid voltage and frequency instead of only exporting power</td></tr>
</tbody>
</table>

<h3>How Demand Response Works</h3>
<p>Demand response pays or rewards customers for reducing or shifting electricity use when the grid is stressed. A utility might send a signal to smart thermostats to raise the setpoint slightly for an hour, or offer lower prices overnight so people charge cars then. Because a small reduction across many customers adds up, demand response can act like a virtual power plant that avoids firing up expensive peaking units.</p>

<h3>Trade-offs and Concerns</h3>
<ol>
<li><strong>Cost:</strong> sensors, meters and software are expensive, and utilities usually recover those costs through customer bills.</li>
<li><strong>Privacy:</strong> detailed usage data can reveal when people are home, so it must be protected and used only with clear rules.</li>
<li><strong>Cybersecurity:</strong> every connected device is a possible entry point for attackers, so security must be designed in from the start.</li>
<li><strong>Equity:</strong> time-varying prices can help or hurt households depending on whether they are able to shift their use.</li>
<li><strong>Interoperability:</strong> devices from different makers must follow shared standards so they can work together.</li>
</ol>

<h3>Real-World Applications</h3>
<p>Utilities use smart grid tools to restore power faster after storms by automatically rerouting around damaged lines. Grid operators use wide-area measurements to spot oscillations before they turn into blackouts. Cities with many solar roofs use smart inverters and feeder sensors to keep voltages stable on sunny afternoons. As electric vehicles and heat pumps spread, managed charging and flexible heating will become some of the most important smart grid applications.</p>

<h3>The Big Picture</h3>
<p>A smart grid is not a replacement for wires and power plants; it is a way to get more out of them. Better information lets operators run closer to safe limits, integrate more renewables and involve customers as active participants instead of passive users.</p>
`,
        UNDERGRADUATE: `
<h2>Smart Grid Architecture, AMI, Demand Response and Cybersecurity</h2>
<p>A smart grid is best understood as a cyber-physical system: a power network whose behavior is increasingly shaped by sensing, communication and computation. Analyzing it requires connecting electrical engineering concepts, such as voltage regulation and frequency balance, with information-system concepts, such as data latency, network architecture and security. This lesson builds a framework for evaluating smart grid investments and their risks.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Cyber-physical system:</strong> a system in which physical processes are monitored and controlled by networked computing</li>
<li><strong>Advanced metering infrastructure:</strong> smart meters, a communication network and a head-end and data management system that together collect and process interval data</li>
<li><strong>Meter data management system:</strong> software that validates, stores and distributes meter readings to billing and planning systems</li>
<li><strong>Distribution management system:</strong> the operator platform that models feeders, monitors conditions and issues switching and control commands</li>
<li><strong>Latency:</strong> the delay between a measurement or command and its arrival, which determines what control tasks a network can support</li>
<li><strong>Defense in depth:</strong> a security approach that layers multiple protections so a single failure does not expose the whole system</li>
</ul>

<h3>Architecture by Time Scale</h3>
<p>Smart grid functions differ mainly in how fast they must act. Protection relays respond in fractions of a second and are usually local; wide-area monitoring updates many times per second; distribution automation acts in seconds to minutes; demand response and market dispatch operate over minutes to hours; and planning uses months of interval data. Matching each function to an appropriate communication path is a central design decision.</p>
<table>
<thead><tr><th>Function</th><th>Typical time scale</th><th>Communication needs</th></tr></thead>
<tbody>
<tr><td>Protection</td><td>Sub-second</td><td>Local or dedicated, extremely reliable</td></tr>
<tr><td>Wide-area monitoring</td><td>Sub-second updates</td><td>High bandwidth, precise time synchronization</td></tr>
<tr><td>Fault isolation and restoration</td><td>Seconds to minutes</td><td>Reliable links to field switches</td></tr>
<tr><td>Demand response events</td><td>Minutes to hours</td><td>Broad reach to many customer devices</td></tr>
<tr><td>Billing and planning analytics</td><td>Days to months</td><td>Large data volumes, latency tolerant</td></tr>
</tbody>
</table>

<h3>Evaluating AMI</h3>
<p>The business case for advanced metering usually rests on several value streams rather than one. Avoided manual meter reading is the most direct saving. Further value comes from faster outage detection, remote connect and disconnect, theft and loss detection, voltage monitoring and enabling time-varying rates. Many benefits depend on what the utility actually does with the data, so an AMI deployment without supporting analytics and rate design may deliver far less than projected.</p>

<h3>Demand Response as a Resource</h3>
<p>Demand response can be analyzed like a generator with unusual properties. Its capacity is the expected load reduction during an event, but that reduction depends on weather, customer participation and how often events are called. Analysts estimate a baseline of what load would have been, then measure the difference. Baseline errors can over- or under-credit participants, so measurement and verification methods matter as much as the technology.</p>

<h3>Cybersecurity</h3>
<p>Connecting millions of endpoints expands the attack surface. Threats include manipulation of meter data, unauthorized switching, malware in operator systems and coordinated attacks on large numbers of controllable loads. Sound practice separates operational networks from corporate IT, authenticates devices and commands, encrypts sensitive traffic, monitors for anomalies and plans for operation in a degraded mode. Because grid equipment stays in service for decades, the ability to update devices securely is a major design requirement.</p>

<h3>Analytical Checklist</h3>
<ol>
<li>Identify the functions the investment supports and their required time scales.</li>
<li>List each value stream and the operational changes needed to capture it.</li>
<li>Estimate costs over the full lifecycle, including software, communications and security updates.</li>
<li>Assess privacy, cybersecurity and interoperability risks.</li>
<li>Test sensitivity to participation rates and adoption assumptions.</li>
</ol>
`,
        GRADUATE: `
<h2>Grid Digitalization, Transactive Energy and Regulatory Frameworks</h2>
<p>Digitalization changes not only how the grid is operated but who participates in it and how value is assigned. As distributed energy resources such as rooftop solar, batteries, electric vehicles and flexible buildings multiply, the distribution system starts to look less like a passive delivery network and more like a platform. This lesson examines the institutional, economic and regulatory questions raised by that shift, with transactive energy as a central example.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Transactive energy:</strong> a framework in which economic signals and automated negotiation coordinate many devices and participants to balance the grid</li>
<li><strong>Distribution system operator:</strong> an entity that actively manages distribution-level resources and flows, beyond simply maintaining wires</li>
<li><strong>Aggregator:</strong> a company that bundles many small flexible resources and offers them as a single resource to markets or utilities</li>
<li><strong>Performance-based regulation:</strong> a regulatory model that ties utility earnings to outcomes such as reliability and customer service rather than capital spending</li>
<li><strong>Grid modernization plan:</strong> a utility filing that lays out proposed digital and physical investments for regulatory review</li>
<li><strong>Data access policy:</strong> rules that govern who can obtain customer energy data, in what form and with what consent</li>
</ul>

<h3>Why Regulation Shapes Smart Grid Outcomes</h3>
<p>Under traditional cost-of-service regulation, investor-owned utilities earn a return on capital assets. That model can encourage building physical infrastructure while undervaluing software, operational practices or third-party services that could achieve the same goal at lower cost. Digital investments also have shorter lives and recurring costs, which fit awkwardly into accounting rules designed for poles and transformers. Regulators have responded with approaches such as performance incentives, treating some cloud services as capital, and requiring utilities to compare traditional and non-wires alternatives.</p>

<h3>Transactive Energy in Practice</h3>
<p>Transactive designs vary. Some use price signals broadcast to devices that respond autonomously; others use bidding, where devices or aggregators submit offers to adjust consumption. The appeal is scalability: rather than a central operator controlling millions of devices directly, coordination emerges from local decisions guided by prices. The challenges include designing signals that reflect local network constraints, preventing synchronized responses that create new peaks, and ensuring customers understand and accept automation.</p>

<table>
<thead><tr><th>Coordination model</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Direct utility control</td><td>Predictable response</td><td>Limited scale and customer acceptance</td></tr>
<tr><td>Time-of-use rates</td><td>Simple, widely understood</td><td>Static, may create new peaks at rate boundaries</td></tr>
<tr><td>Dynamic pricing</td><td>Reflects real system conditions</td><td>Price volatility risk for customers</td></tr>
<tr><td>Aggregator market participation</td><td>Uses competitive services</td><td>Coordination with distribution constraints is hard</td></tr>
<tr><td>Transactive negotiation</td><td>Scalable, decentralized</td><td>Complex design, limited real-world experience</td></tr>
</tbody>
</table>

<h3>Governance and Equity</h3>
<p>Smart grid costs are typically spread across all customers, but benefits may concentrate among those who own flexible devices or can shift use easily. Households that cannot avoid peak use, often renters or lower-income families, may face higher bills under dynamic rates. Good policy pairs new rate designs with bill protections, targeted programs and transparent data rules. Data governance is also an equity issue: aggregated data can support better planning for underserved neighborhoods, but misuse can expose sensitive personal patterns.</p>

<h3>Institutional Barriers</h3>
<ol>
<li>Utility incentives tied to capital investment rather than outcomes.</li>
<li>Unclear roles between transmission operators, distribution utilities and aggregators.</li>
<li>Slow interconnection and limited visibility of distributed resources.</li>
<li>Workforce and procurement practices built for hardware rather than software.</li>
<li>Fragmented standards that hamper interoperability.</li>
</ol>

<h3>Evaluation Framework</h3>
<p>Evaluate grid modernization proposals by asking what operational outcomes they enable, how benefits are measured after deployment, whether lower-cost alternatives were compared, how cybersecurity and privacy are addressed, and who pays and who benefits. Post-deployment evaluation is essential, because projected benefits frequently depend on later decisions about rates and operations.</p>
`,
        PHD: `
<h2>Research Frontiers in Grid Optimization and Distributed Intelligence</h2>
<p>Smart grid research increasingly treats the power system as a large, heterogeneous network of interacting agents rather than a centrally dispatched machine. Millions of inverters, batteries, vehicles and thermostats each have local objectives and constraints, while the physical network couples them through power flow. The scientific questions concern how to optimize and control such systems at scale, how to guarantee stability and security, and how to model emergent behavior. This lesson surveys methods, debates and open directions.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Optimal power flow:</strong> an optimization problem that chooses generation and control settings to minimize cost subject to network physics and operating limits</li>
<li><strong>Convex relaxation:</strong> reformulating a nonconvex power flow problem so that it can be solved efficiently, with conditions under which the solution is exact</li>
<li><strong>Distributed optimization:</strong> algorithms in which agents solve local subproblems and exchange limited information to reach a coordinated solution</li>
<li><strong>Model predictive control:</strong> repeatedly solving an optimization over a forecast horizon and applying only the first step before updating</li>
<li><strong>Reinforcement learning:</strong> learning control policies from interaction with a system or simulator rather than from an explicit model</li>
<li><strong>State estimation:</strong> inferring the most likely operating state of the network from noisy and incomplete measurements</li>
</ul>

<h3>Centralized Versus Distributed Intelligence</h3>
<p>Centralized optimization offers global optimality in principle but struggles with scale, communication bottlenecks, privacy and single points of failure. Distributed and decentralized approaches, such as alternating direction methods and consensus algorithms, decompose the problem across agents. Their convergence speed, robustness to communication delays and behavior with nonconvex physics remain active research topics. Hierarchical schemes, which combine fast local control with slower coordinating layers, are a common compromise.</p>

<table>
<thead><tr><th>Approach</th><th>Advantages</th><th>Open problems</th></tr></thead>
<tbody>
<tr><td>Centralized optimal power flow</td><td>Clear objective, mature solvers</td><td>Scalability to many devices, data requirements</td></tr>
<tr><td>Distributed optimization</td><td>Scalable, preserves local privacy</td><td>Convergence under delays and nonconvexity</td></tr>
<tr><td>Local feedback control</td><td>Fast and robust to communication loss</td><td>Suboptimal, can interact poorly at scale</td></tr>
<tr><td>Learning-based control</td><td>Handles complex, poorly modeled systems</td><td>Safety guarantees, generalization, interpretability</td></tr>
</tbody>
</table>

<h3>Complex Systems Perspectives</h3>
<p>Power grids exhibit behavior studied in complex systems science: cascading failures, synchronization of rotating machines and inverters, and sensitivity to network topology. As inverter-based resources replace synchronous generators, the system loses physical inertia, and stability increasingly depends on control algorithms. Research explores grid-forming inverter control, the conditions for stable synchronization in low-inertia networks, and how correlated device behavior, such as many loads responding to the same price signal, can create new oscillations or peaks.</p>

<h3>Contested Questions</h3>
<ol>
<li>How much optimality should be traded for robustness and simplicity in real deployments?</li>
<li>Can learning-based controllers be certified as safe for critical infrastructure?</li>
<li>How should local network constraints be represented in prices sent to distributed devices?</li>
<li>What level of data sharing is needed for coordination without unacceptable privacy loss?</li>
<li>How should models capture human behavior and acceptance of automation?</li>
</ol>

<h3>Security and Resilience Research</h3>
<p>Cyber-physical security research studies false data injection that evades state estimation checks, attacks that manipulate large numbers of controllable loads, and resilient control that degrades gracefully. Methods include anomaly detection, game-theoretic models of attacker and defender, and formal verification of control logic. A methodological challenge is the scarcity of realistic, shareable data and test systems, which makes results hard to compare across studies.</p>

<h3>Methodological Debates</h3>
<p>Researchers debate the realism of standard test feeders, the use of simplified linearized power flow models in distribution systems where they may be inaccurate, and how to validate algorithms when field trials are expensive and risky. Co-simulation, which links power system, communication network and market models, is a growing approach but raises questions about consistency between tools.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable, provably convergent coordination for millions of heterogeneous devices.</li>
<li>Stability theory and control design for grids dominated by inverter-based resources.</li>
<li>Safe and interpretable learning-based control with formal performance guarantees.</li>
<li>Privacy-preserving coordination using techniques such as federated learning or secure computation.</li>
<li>Open, realistic benchmark systems and datasets for reproducible research.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rsgq1',
      question: {
        ELEMENTARY: 'What makes a grid smart?',
        MIDDLE_SCHOOL: 'What is a smart meter?',
        HIGH_SCHOOL: 'What is demand response?',
        UNDERGRADUATE: 'What does advanced metering infrastructure (AMI) include?',
        GRADUATE: 'What is transactive energy?',
        PHD: 'What does model predictive control do?',
      },
      options: {
        ELEMENTARY: ['Computers and sensors that watch and share information', 'Painting the poles bright colors', 'Using thicker wires only', 'Turning every light on at once'],
        MIDDLE_SCHOOL: ['A meter that records use in detail and sends the data automatically', 'A meter that a worker must read by hand each month', 'A device that makes electricity from sunlight', 'A tool that measures water pressure'],
        HIGH_SCHOOL: ['Rewarding customers for reducing or shifting use when the grid is stressed', 'Building a new power plant for every peak', 'Sending more power to customers during storms', 'A team that repairs fallen power lines'],
        UNDERGRADUATE: ['Smart meters, a communication network and data management systems', 'Only the meters on customer walls', 'Only the billing department', 'Transmission towers and generators'],
        GRADUATE: ['Using economic signals and automated negotiation to coordinate many devices and participants', 'Trading oil across national borders', 'Moving power plants between cities', 'A fixed monthly charge for electricity'],
        PHD: ['Repeatedly optimizes over a forecast horizon and applies only the first step before updating', 'Solves one optimization once and never updates it', 'Lets devices act randomly without any model', 'Replaces all sensors with forecasts'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Smart grids use computers and sensors to notice problems and share information so power reaches people.',
        MIDDLE_SCHOOL: 'Smart meters measure electricity use in short time steps and send the data back without a meter reader.',
        HIGH_SCHOOL: 'Demand response lowers or shifts use during stressed hours, acting like a virtual power plant.',
        UNDERGRADUATE: 'AMI is a whole system: meters, communications, head-end and meter data management software.',
        GRADUATE: 'Transactive energy coordinates many resources through prices and automated negotiation rather than direct control.',
        PHD: 'Model predictive control re-solves an optimization as forecasts update, applying only the next action each time.',
      },
    },
    {
      id: 'rsgq2',
      question: {
        ELEMENTARY: 'What can a smart grid do when a storm knocks down a wire?',
        MIDDLE_SCHOOL: 'What is peak demand?',
        HIGH_SCHOOL: 'What does a phasor measurement unit do?',
        UNDERGRADUATE: 'Why does the time scale of a smart grid function matter for design?',
        GRADUATE: 'Why can cost-of-service regulation undervalue smart grid software?',
        PHD: 'What is a main advantage of distributed optimization over centralized optimization?',
      },
      options: {
        ELEMENTARY: ['Turn off every light in the town', 'Find a new path so fewer families lose power', 'Make the storm stop', 'Send all the power to one house'],
        MIDDLE_SCHOOL: ['The time when the fewest people use electricity', 'The time when the most people are using electricity at once', 'The top of a power pole', 'The highest price of a solar panel'],
        HIGH_SCHOOL: ['Reads customer meters once a month', 'Records voltage and current many times per second with precise time stamps', 'Stores electricity like a battery', 'Generates power from wind'],
        UNDERGRADUATE: ['All functions need exactly the same network', 'Each function needs a communication path that matches how fast it must act', 'Time scale only affects billing', 'Faster networks are never useful'],
        GRADUATE: ['Software is always free', 'Utilities earn returns on capital assets, so operational and software solutions may be less attractive to them', 'Regulators forbid all software', 'Software has longer lives than poles'],
        PHD: ['It always finds a better optimum', 'It scales to many agents and preserves local privacy', 'It needs no communication at all', 'It removes the need for network physics'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Smart switches can reroute power around a broken wire, like taking another street when one road is blocked.',
        MIDDLE_SCHOOL: 'Peak demand is the busiest hour, such as a hot evening, and the grid must be built to handle it.',
        HIGH_SCHOOL: 'Phasor measurement units give operators a fast, time-synchronized view of grid stability.',
        UNDERGRADUATE: 'Protection needs sub-second reliable links, while billing analytics can tolerate long delays.',
        GRADUATE: 'Earning on capital can bias utilities toward hardware over cheaper operational or software alternatives.',
        PHD: 'Decomposing the problem across agents helps scale and keeps detailed local data private.',
      },
    },
    {
      id: 'rsgq3',
      question: {
        ELEMENTARY: 'When is a good time to run the washing machine to help the grid?',
        MIDDLE_SCHOOL: 'What is a self-healing grid?',
        HIGH_SCHOOL: 'Why is privacy a concern with smart meters?',
        UNDERGRADUATE: 'Why is the baseline important in measuring demand response?',
        GRADUATE: 'Who can be disadvantaged by dynamic electricity rates?',
        PHD: 'Why does the loss of physical inertia matter in grids with many inverters?',
      },
      options: {
        ELEMENTARY: ['On the hottest afternoon', 'When everyone else is using power', 'Later in the evening or at night', 'Never, washing machines are not allowed'],
        MIDDLE_SCHOOL: ['A grid that repairs fallen poles by itself', 'A grid made of living plants', 'A grid that detects a fault and automatically reroutes power', 'A grid that never has any problems'],
        HIGH_SCHOOL: ['Meters make houses colder', 'Meters can play sounds', 'Detailed usage data can reveal when people are home', 'Meters share data only with neighbors'],
        UNDERGRADUATE: ['It sets the price of meters', 'It decides which generator runs', 'Load reduction is measured against an estimate of what load would have been', 'It is the voltage of the feeder'],
        GRADUATE: ['Households with many flexible devices', 'Large companies with batteries', 'Households that cannot shift use away from peak hours', 'Utilities that own power plants'],
        PHD: ['Inverters weigh more than generators', 'Inertia only matters for transmission towers', 'Stability then depends increasingly on control algorithms rather than spinning mass', 'Inertia makes solar panels less efficient'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Running machines later, when fewer people use power, helps the grid on busy days.',
        MIDDLE_SCHOOL: 'A self-healing grid uses sensors and automated switches to restore service around a fault.',
        HIGH_SCHOOL: 'Detailed data can show daily routines, so it must be protected with clear rules.',
        UNDERGRADUATE: 'Because the reduction cannot be observed directly, baseline errors can over- or under-credit participants.',
        GRADUATE: 'Customers who cannot avoid peak use, often renters or lower-income families, may pay more without protections.',
        PHD: 'With fewer spinning machines, inverter control design largely determines how the grid stays synchronized and stable.',
      },
    },
    {
      id: 'rsgq4',
      question: {
        ELEMENTARY: 'What is a sensor?',
        MIDDLE_SCHOOL: 'How do smart grids help us use more solar and wind power?',
        HIGH_SCHOOL: 'What do smart inverters do for the grid?',
        UNDERGRADUATE: 'Which practice is part of defense in depth for grid cybersecurity?',
        GRADUATE: 'What does an aggregator do?',
        PHD: 'What is a false data injection attack designed to do?',
      },
      options: {
        ELEMENTARY: ['A kind of power plant', 'A big battery', 'A broom for cleaning wires', 'A small device that notices things like how much power is moving'],
        MIDDLE_SCHOOL: ['By making the sun shine longer', 'By removing all batteries', 'By turning off wind turbines at night', 'By forecasting changes and coordinating batteries and flexible loads'],
        HIGH_SCHOOL: ['They only turn solar panels on and off', 'They make panels produce power at night', 'They store heat for buildings', 'They support grid voltage and frequency instead of only exporting power'],
        UNDERGRADUATE: ['Connecting all devices directly to the public internet', 'Using one password for every device', 'Disabling software updates', 'Separating operational networks from corporate IT and authenticating commands'],
        GRADUATE: ['It builds transmission lines', 'It sets national energy laws', 'It replaces the utility entirely', 'It bundles many small flexible resources and offers them as one resource'],
        PHD: ['Increase the speed of fiber networks', 'Improve meter accuracy', 'Train operators faster', 'Corrupt measurements in a way that evades state estimation checks'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Sensors are the eyes and ears of the smart grid, watching how power flows.',
        MIDDLE_SCHOOL: 'Forecasts, batteries and flexible use help balance the ups and downs of sun and wind.',
        HIGH_SCHOOL: 'Smart inverters actively help keep voltage and frequency stable, especially where there is a lot of rooftop solar.',
        UNDERGRADUATE: 'Layered protections, such as network separation and authentication, mean one failure does not expose everything.',
        GRADUATE: 'Aggregators combine many small devices so they can participate in markets or utility programs.',
        PHD: 'These attacks manipulate data so the operator sees a false grid state without triggering bad-data detection.',
      },
    },
    {
      id: 'rsgq5',
      question: {
        ELEMENTARY: 'What is a smart meter?',
        MIDDLE_SCHOOL: 'Why are peaker plants a problem?',
        HIGH_SCHOOL: 'What does fault location, isolation and restoration do?',
        UNDERGRADUATE: 'Why might an AMI deployment deliver less value than projected?',
        GRADUATE: 'What is performance-based regulation?',
        PHD: 'Why is co-simulation used in smart grid research?',
      },
      options: {
        ELEMENTARY: ['A box on a house that counts electricity and sends the number to the power company', 'A clock that tells time in the kitchen', 'A robot that fixes wires', 'A light that turns on by itself'],
        MIDDLE_SCHOOL: ['They often are older and more polluting, and run only at the busiest times', 'They make electricity too cheap', 'They run all year without stopping', 'They only use solar power'],
        HIGH_SCHOOL: ['Automatically shrinks the area affected by an outage', 'Bills customers for outages', 'Builds new substations', 'Stores power for later use'],
        UNDERGRADUATE: ['Many benefits depend on analytics, operations and rate design that may not follow', 'Smart meters cannot measure electricity', 'AMI always costs nothing', 'Utilities are banned from using the data'],
        GRADUATE: ['Tying utility earnings to outcomes like reliability rather than capital spending', 'Paying utilities more for every pole they install', 'Letting utilities set any price they want', 'Removing all oversight of utilities'],
        PHD: ['To link power system, communication and market models and study their interactions', 'To replace all field trials permanently', 'To avoid modeling the network', 'To speed up meter reading'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Smart meters count electricity and send the numbers automatically, so nobody has to come read them.',
        MIDDLE_SCHOOL: 'Shifting use away from peaks reduces the need for these expensive, often dirtier plants.',
        HIGH_SCHOOL: 'Automated switches isolate the damaged section and restore power to the rest of the feeder.',
        UNDERGRADUATE: 'The meters create data; value comes only when the utility changes operations and rates to use it.',
        GRADUATE: 'Performance-based regulation rewards results, reducing the bias toward capital-heavy solutions.',
        PHD: 'Co-simulation captures cross-domain effects such as communication delays affecting control performance.',
      },
    },
  ],
}

export default expansion
