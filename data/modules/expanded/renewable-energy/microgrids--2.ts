import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'microgrids~2',
  lessons: [
    {
      id: 're-mg-1',
      title: 'Small but Mighty: Microgrids That Keep the Lights On',
      content: {
        ELEMENTARY: `
<h2>Keeping the Lights On When Storms Come</h2>
<p>Have you ever been home when the power went out? The lights turn off, the fridge goes quiet and everything feels strange. Big storms, heavy snow or strong winds can knock down power lines. But some places have a special trick that keeps their lights on. It is called a microgrid!</p>

<h3>What Is a Microgrid?</h3>
<p>The big power grid is like a giant web of wires that brings electricity to a whole city or country. A microgrid is a tiny power grid for just one place, like a hospital, a school, a fire station or a small town. It has its own way to make electricity and its own way to store it.</p>
<ul>
<li><strong>Power grid:</strong> the giant web of wires that carries electricity to homes and buildings</li>
<li><strong>Microgrid:</strong> a small power system that can make and share its own electricity</li>
<li><strong>Power outage:</strong> a time when the electricity stops working, often because of a storm</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Battery:</strong> a box that saves electricity so it can be used later, even at night</li>
</ul>

<h3>The Island Trick</h3>
<p>Most of the time, a microgrid is connected to the big grid, like a small boat tied to a big ship. When a storm breaks the big grid, the microgrid unties itself and keeps going on its own. People call this being an island. The solar panels and batteries keep important things running until the big grid is fixed.</p>

<h3>Who Needs a Microgrid Most?</h3>
<p>Some places must never be without power. Hospitals need electricity for machines that help sick people. Fire stations need it to answer emergency calls. Some schools and community centers become safe places where neighbors can warm up, cool off or charge their phones during a storm.</p>

<h3>How You Can Be Storm Ready</h3>
<ol>
<li>Help your family make a box with a flashlight, water and snacks.</li>
<li>Learn where the safe places are in your town during a storm.</li>
<li>Look around your school or library: do you see solar panels on the roof?</li>
</ol>

<h3>Think About It</h3>
<p>A microgrid is small, but it is mighty! When neighbors share clean power during a storm, everyone stays a little safer and warmer.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Microgrids: Backup Power and Energy Independence</h2>
<p>Most people get electricity from a huge, connected grid. That grid is very reliable, but it has a weakness: when a big storm, wildfire or equipment failure damages power lines, thousands of people can lose power at once. A microgrid is a local energy system that can keep running even when the main grid goes down. That ability to bounce back from trouble is called <em>resilience</em>.</p>

<h3>How a Microgrid Works</h3>
<p>A microgrid has three main parts working together:</p>
<ol>
<li><strong>Generation:</strong> sources that make electricity, like solar panels, small wind turbines or a backup generator</li>
<li><strong>Storage:</strong> batteries that save extra energy for later</li>
<li><strong>Controls:</strong> a smart computer system that decides where the electricity goes and when to disconnect from the main grid</li>
</ol>
<p>When the main grid fails, a special switch opens and the microgrid separates. This is called <em>islanding</em>. The controller then balances supply and demand so the lights stay steady.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Resilience:</strong> the ability of a system to keep working or recover quickly after a disruption</li>
<li><strong>Islanding:</strong> when a microgrid disconnects from the main grid and runs on its own power</li>
<li><strong>Critical load:</strong> the most important equipment that must keep running, like hospital machines or water pumps</li>
<li><strong>Backup generator:</strong> an engine that makes electricity in emergencies, often burning diesel or gas</li>
<li><strong>Energy independence:</strong> being able to meet your own energy needs without relying fully on outside sources</li>
<li><strong>Controller:</strong> the brain of a microgrid that manages power flow and switching</li>
</ul>

<h3>Backup Generator vs. Clean Microgrid</h3>
<table>
<thead><tr><th>Feature</th><th>Diesel generator only</th><th>Solar plus battery microgrid</th></tr></thead>
<tbody>
<tr><td>Works during outages</td><td>Yes, while fuel lasts</td><td>Yes, recharging from the sun each day</td></tr>
<tr><td>Pollution</td><td>Smoke and noise</td><td>Quiet and clean</td></tr>
<tr><td>Useful on normal days</td><td>Usually sits unused</td><td>Saves money every day</td></tr>
<tr><td>Needs fuel deliveries</td><td>Yes, which can be hard after storms</td><td>No fuel needed</td></tr>
</tbody>
</table>

<h3>Where Microgrids Help</h3>
<p>Microgrids protect hospitals, military bases, college campuses and water treatment plants. They also bring power to remote villages and islands that are far from any big grid. In some towns, a microgrid keeps a community center open as a shelter during heat waves or winter storms.</p>

<h3>Why It Matters</h3>
<p>As extreme weather becomes more common, keeping power on in emergencies matters more than ever. Microgrids that use clean energy help communities stay safe and fight climate change at the same time.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Microgrids for Resilience</h2>
<p>The large interconnected grid is efficient, but it is also exposed: a single fallen tree or flooded substation can cut power to many customers. A microgrid is a group of connected loads and energy resources within clear electrical boundaries that acts as a single controllable unit and can operate either connected to the grid or as an island. This lesson focuses on how microgrids are designed specifically to withstand and recover from disruptions.</p>

<h3>Building Blocks of a Resilient Microgrid</h3>
<ul>
<li><strong>Distributed generation:</strong> local sources such as solar, wind, combined heat and power or fuel-based generators</li>
<li><strong>Energy storage:</strong> batteries that cover the night, smooth fluctuations and help restart the system</li>
<li><strong>Point of common coupling:</strong> the connection point where the microgrid joins or separates from the main grid</li>
<li><strong>Microgrid controller:</strong> software and hardware that balance supply and demand and manage islanding</li>
<li><strong>Load prioritization:</strong> ranking loads so critical equipment stays on when supply is limited</li>
<li><strong>Black start capability:</strong> the ability to restart from a complete shutdown without outside power</li>
</ul>

<h3>Islanding Step by Step</h3>
<ol>
<li>Sensors detect a fault or outage on the main grid.</li>
<li>The switch at the point of common coupling opens, separating the microgrid.</li>
<li>Batteries or generators immediately take over keeping voltage and frequency stable.</li>
<li>The controller sheds non-critical loads if supply is short.</li>
<li>When the grid returns, the microgrid synchronizes and reconnects smoothly.</li>
</ol>

<h3>Comparing Resilience Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Diesel generator only</td><td>Proven, can run for long periods with fuel</td><td>Fuel supply can fail after disasters; pollution</td></tr>
<tr><td>Solar plus storage</td><td>No fuel, works every day, clean</td><td>Limited during long cloudy periods</td></tr>
<tr><td>Hybrid (solar, storage, generator)</td><td>Long endurance with reduced fuel use</td><td>More complex controls and higher cost</td></tr>
<tr><td>Burying power lines</td><td>Protects against wind and ice</td><td>Very expensive; vulnerable to flooding</td></tr>
</tbody>
</table>

<h3>Real-World Applications</h3>
<p>Hospitals, emergency operations centers, water and wastewater plants, and military bases are common microgrid hosts because losing power there can endanger lives. Communities in wildfire, hurricane and ice-storm regions are building microgrids around "resilience hubs," such as libraries or community centers that provide cooling, heating, charging and information during emergencies. Remote and island communities use microgrids to replace expensive imported diesel with local renewable power.</p>

<h3>Trade-offs to Consider</h3>
<p>A resilient microgrid costs more than a simple grid connection, so designers must decide how long it should survive an outage and which loads must stay on. Sizing for every possible event would be unaffordable, so planners pick realistic scenarios, such as a multi-day storm outage, and design around the critical loads that matter most.</p>
`,
        UNDERGRADUATE: `
<h2>Microgrid Resilience Economics and Control</h2>
<p>Microgrids create value in two modes. In grid-connected operation they can lower energy bills, provide grid services and integrate renewables. In islanded operation they deliver resilience, the ability to maintain critical services through outages. The analytical challenge is that resilience value is large but rare and hard to price, while everyday savings are smaller but steady. This lesson builds tools to evaluate both.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Reliability:</strong> how often and how long customers lose power under normal conditions, measured with standard outage indices</li>
<li><strong>Resilience:</strong> the ability to withstand, adapt to and recover from rare, high-impact events such as major storms</li>
<li><strong>Value of lost load:</strong> an estimate of the economic cost to customers per unit of electricity not supplied during an outage</li>
<li><strong>Survivability duration:</strong> how long a microgrid can serve its critical loads while islanded under a given scenario</li>
<li><strong>Load shedding:</strong> intentionally disconnecting lower-priority loads to keep the system balanced</li>
<li><strong>Value stacking:</strong> combining multiple revenue or savings streams to justify a project's cost</li>
</ul>

<h3>Reliability Versus Resilience</h3>
<p>Standard reliability indices average outage frequency and duration over a year and often exclude major events. Resilience concerns exactly those excluded events: hurricanes, wildfires, floods and extreme cold. A microgrid may barely change average reliability statistics yet dramatically reduce harm during the rare long outages that matter most to hospitals or water systems. Analysts therefore evaluate microgrids against specific outage scenarios rather than averages alone.</p>

<h3>Control Modes</h3>
<table>
<thead><tr><th>Control function</th><th>Grid-connected mode</th><th>Islanded mode</th></tr></thead>
<tbody>
<tr><td>Frequency and voltage</td><td>Set by the main grid</td><td>Set by local grid-forming inverters or generators</td></tr>
<tr><td>Dispatch objective</td><td>Minimize cost, earn grid revenue</td><td>Maximize survival of critical loads</td></tr>
<tr><td>Battery strategy</td><td>Arbitrage and peak shaving</td><td>Preserve reserve for night and cloudy days</td></tr>
<tr><td>Load management</td><td>Demand response for savings</td><td>Priority-based load shedding</td></tr>
</tbody>
</table>
<p>A key design tension is the battery reserve: energy kept in reserve for possible outages cannot be used for everyday savings. Some operators raise the reserve when storms are forecast, a practice that ties operations to weather information.</p>

<h3>Economic Reasoning</h3>
<p>Project economics combine everyday value streams, such as demand charge reduction, energy arbitrage and grid service payments, with avoided outage costs. Avoided outage cost can be estimated by multiplying expected unserved energy by a value of lost load, though such values vary widely by customer type and outage length. For critical facilities, losses during long outages can be far larger than simple per-kilowatt-hour estimates suggest, because of cascading impacts like spoiled medicine or halted water treatment.</p>

<h3>Applied Checklist for a Resilience Microgrid</h3>
<ol>
<li>Identify critical loads and their power and energy requirements.</li>
<li>Define design outage scenarios, including duration and season.</li>
<li>Size generation and storage to meet survivability targets in those scenarios.</li>
<li>Specify grid-forming capability, protection and black start.</li>
<li>Quantify everyday value streams and the cost of holding reserve.</li>
<li>Estimate avoided outage costs and test sensitivity to assumptions.</li>
</ol>
`,
        GRADUATE: `
<h2>Community Microgrids: Policy, Utility Integration and Resilience Planning</h2>
<p>As climate-driven disasters increase, public agencies and utilities are asking how microgrids fit into broader resilience strategies. The technical case is often clear; the harder questions concern who may build and own microgrids that cross property lines, how costs are recovered, how they interact with utility planning, and whether resilience investments reach the communities most exposed to outages. This lesson examines these governance questions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Community microgrid:</strong> a microgrid that serves multiple customers across a neighborhood or town, often using utility distribution lines</li>
<li><strong>Resilience hub:</strong> a trusted community facility equipped with backup power to provide services during emergencies</li>
<li><strong>Franchise rights:</strong> the exclusive rights a utility often holds to distribute and sell electricity in its territory</li>
<li><strong>Cost recovery:</strong> the regulatory process by which utilities recover investment costs through customer rates</li>
<li><strong>Grid hardening:</strong> traditional resilience measures such as stronger poles, undergrounding and vegetation management</li>
<li><strong>Public safety power shutoff:</strong> a deliberate de-energization of lines to reduce wildfire ignition risk during dangerous weather</li>
</ul>

<h3>Regulatory and Ownership Barriers</h3>
<p>Single-site microgrids behind one customer's meter are relatively simple. Multi-customer microgrids raise questions that existing rules often do not answer: whether a non-utility owner may sell power across property lines, who operates shared distribution wires during islanding, how standby and departing-load charges apply, and how liability is assigned. Different jurisdictions have taken different approaches, ranging from utility-owned community microgrids to third-party models enabled by specific legislation.</p>

<h3>Microgrids Versus Grid Hardening</h3>
<table>
<thead><tr><th>Approach</th><th>Benefit</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Grid hardening</td><td>Protects many customers on a feeder</td><td>Cannot prevent all failures; high capital cost</td></tr>
<tr><td>Single-site microgrids</td><td>Targeted protection of critical facilities</td><td>Does not help surrounding homes</td></tr>
<tr><td>Community microgrids</td><td>Extends resilience to neighborhoods</td><td>Complex regulation, protection and ownership</td></tr>
<tr><td>Networked microgrids</td><td>Mutual support across sites</td><td>Requires advanced coordination and standards</td></tr>
</tbody>
</table>
<p>Integrated resilience planning compares these options side by side, recognizing they are complements rather than substitutes.</p>

<h3>Valuing Resilience in Planning</h3>
<p>Utility planning has traditionally relied on reliability metrics and cost-effectiveness tests that do not capture resilience well. Agencies are experimenting with methods such as scenario-based assessments of critical service loss, customer surveys of outage costs, and metrics focused on the duration of critical service restoration. Without an agreed valuation approach, resilience benefits risk being undercounted relative to cheaper but less robust alternatives.</p>

<h3>Equity and Community Development</h3>
<p>Outages harm people unequally. Households relying on powered medical devices, older residents, people without air conditioning or heating alternatives and those without means to relocate face the greatest risks. Equity-focused programs locate resilience hubs in high-vulnerability areas, involve residents in choosing which services to protect, and support community ownership models. Indigenous, rural and island communities have often led microgrid development to increase energy sovereignty and reduce dependence on imported fuels.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map hazards, critical services and social vulnerability together.</li>
<li>Compare microgrids with hardening and other options on shared scenarios.</li>
<li>Clarify ownership, operation and cost recovery before design.</li>
<li>Value resilience explicitly using a transparent method.</li>
<li>Include community governance and benefit-sharing provisions.</li>
<li>Plan for operations, maintenance and testing over the project life.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Quantifying Resilience and Optimizing Networked Microgrids</h2>
<p>Microgrid research now extends well beyond single-site design. Active questions include how to define and measure resilience rigorously, how to plan microgrids under deep uncertainty about rare events, and how networked microgrids can support each other and the bulk grid during disasters. This lesson surveys methods, debates and open directions, with an emphasis on resilience quantification.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Resilience trapezoid:</strong> a conceptual curve describing system performance through disruption, degraded operation and recovery phases</li>
<li><strong>Two-stage stochastic programming:</strong> optimization that separates investment decisions from operational responses across sampled scenarios</li>
<li><strong>Robust optimization:</strong> planning that protects against the worst case within a defined uncertainty set rather than an expected value</li>
<li><strong>Tri-level defender-attacker-defender model:</strong> a formulation in which a planner hardens a system, an adversary or hazard disrupts it, and an operator responds</li>
<li><strong>Fragility curve:</strong> a function giving the probability that a component fails as hazard intensity increases</li>
<li><strong>Dynamic microgrid formation:</strong> reconfiguring distribution switches after a disaster to create islands around available resources</li>
</ul>

<h3>Defining Resilience Metrics</h3>
<p>There is no single accepted resilience metric. Proposals include performance-loss integrals over the disruption period, critical load served over time, time to restore critical services, and risk measures such as conditional value at risk applied to unserved energy distributions. Each embeds normative choices: whether all load counts equally, whether long outages are penalized nonlinearly, and whether social vulnerability is weighted. Critics note that purely engineering metrics may miss community outcomes, motivating hybrid socio-technical measures.</p>

<h3>Planning Under Rare Events</h3>
<p>Resilience planning must account for low-probability, high-impact events that are poorly represented in historical data. Approaches combine hazard models, component fragility curves and Monte Carlo simulation to generate outage scenarios, then optimize microgrid siting and sizing using stochastic or robust formulations. A methodological tension exists between expected-value approaches, which may underinvest in rare catastrophes, and worst-case approaches, which may be overly conservative and costly.</p>

<h3>Networked Microgrids</h3>
<table>
<thead><tr><th>Research question</th><th>Why it is open</th></tr></thead>
<tbody>
<tr><td>How to share power among adjacent microgrids during outages</td><td>Requires coordination protocols, protection settings and trust between owners</td></tr>
<tr><td>Centralized versus distributed coordination</td><td>Trade-offs among optimality, communication dependence and cyber risk</td></tr>
<tr><td>Stability with many inverter-based sources</td><td>Low inertia and interacting grid-forming controls complicate dynamics</td></tr>
<tr><td>Use of microgrids to support bulk grid restoration</td><td>Coordination with transmission black start plans is underdeveloped</td></tr>
</tbody>
</table>

<h3>Cyber-Physical and Interdependency Risks</h3>
<p>Microgrid controllers depend on communications and software, creating cyber vulnerabilities that could undermine resilience. Microgrids also depend on other infrastructure: natural gas supply for generators, communications for coordination and roads for fuel delivery. Interdependency modeling seeks to capture how failures cascade across sectors, but data sharing between sectors is limited and models are difficult to validate.</p>

<h3>Methodological Debates</h3>
<p>Debates center on validation, since rare events provide few observations; on whether resilience should be valued in monetary terms at all; and on the transferability of results across hazards and regions. Empirical studies of microgrid performance during actual disasters are valuable but scarce and often anecdotal.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized, socially informed resilience metrics suitable for regulatory use.</li>
<li>Scalable stochastic and robust planning methods for many candidate microgrid sites.</li>
<li>Stable control of networked, inverter-dominated microgrids.</li>
<li>Cyber-resilient coordination architectures.</li>
<li>Integration of climate projections into hazard and fragility modeling.</li>
<li>Systematic empirical evaluation of microgrid performance in real disasters.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rmgq1',
      question: {
        ELEMENTARY: 'What can a microgrid do when a storm breaks the big grid?',
        MIDDLE_SCHOOL: 'What is islanding?',
        HIGH_SCHOOL: 'What is the point of common coupling?',
        UNDERGRADUATE: 'How does resilience differ from reliability?',
        GRADUATE: 'What is a community microgrid?',
        PHD: 'What does a fragility curve describe?',
      },
      options: {
        ELEMENTARY: ['Keep working on its own', 'Make the storm stop', 'Turn into a boat', 'Make the wind blow harder'],
        MIDDLE_SCHOOL: ['When a microgrid disconnects from the main grid and runs on its own', 'Building power plants on islands only', 'Turning off all the lights', 'Shipping fuel to an island'],
        HIGH_SCHOOL: ['The connection point where the microgrid joins or separates from the main grid', 'The place where batteries are recycled', 'The middle of a solar panel', 'A type of fuel'],
        UNDERGRADUATE: ['Resilience concerns rare, high-impact events, while reliability averages normal outages', 'They are exactly the same', 'Reliability only applies to batteries', 'Resilience means lower prices'],
        GRADUATE: ['A microgrid serving multiple customers across a neighborhood or town', 'A microgrid inside one house', 'A type of power plant', 'A utility billing system'],
        PHD: ['The probability that a component fails as hazard intensity increases', 'The cost of building a microgrid', 'How fast batteries charge', 'The shape of a solar panel'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A microgrid can untie itself from the big grid and keep power on for important places.',
        MIDDLE_SCHOOL: 'Islanding means the microgrid separates and powers itself like an island.',
        HIGH_SCHOOL: 'The point of common coupling is where the switch opens or closes between the microgrid and the main grid.',
        UNDERGRADUATE: 'Reliability indices often exclude major events, which are exactly what resilience is about.',
        GRADUATE: 'Community microgrids extend resilience beyond one site, often over utility distribution lines.',
        PHD: 'Fragility curves link hazard intensity, like wind speed, to the chance a component fails.',
      },
    },
    {
      id: 'rmgq2',
      question: {
        ELEMENTARY: 'Which place most needs power during a storm?',
        MIDDLE_SCHOOL: 'What is a critical load?',
        HIGH_SCHOOL: 'What is black start capability?',
        UNDERGRADUATE: 'What is the value of lost load?',
        GRADUATE: 'Why can multi-customer microgrids face regulatory barriers?',
        PHD: 'What is a key weakness of expected-value planning for resilience?',
      },
      options: {
        ELEMENTARY: ['A toy store', 'A hospital', 'A playground', 'A movie theater'],
        MIDDLE_SCHOOL: ['The heaviest object in a building', 'The most important equipment that must keep running', 'The amount of fuel in a generator', 'The loudest machine'],
        HIGH_SCHOOL: ['Starting a race', 'The ability to restart from a complete shutdown without outside power', 'Painting generators black', 'Turning on lights at night'],
        UNDERGRADUATE: ['The price of a battery', 'An estimate of the economic cost per unit of electricity not supplied', 'The weight of power lines', 'The energy lost in wires'],
        GRADUATE: ['They use no electricity', 'Utility franchise rights and unclear rules for selling across property lines', 'They are always illegal', 'They cannot use solar panels'],
        PHD: ['It is too conservative', 'It may underinvest in rare catastrophic events', 'It cannot use data', 'It ignores costs'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Hospitals need electricity for machines that help sick people, so they must stay powered.',
        MIDDLE_SCHOOL: 'Critical loads are things like hospital machines and water pumps that must not stop.',
        HIGH_SCHOOL: 'Black start lets a microgrid restart itself after everything has shut down.',
        UNDERGRADUATE: 'Value of lost load puts a money value on electricity that customers do not receive during outages.',
        GRADUATE: 'Utilities often hold exclusive rights to sell and distribute power, which complicates shared microgrids.',
        PHD: 'Averaging over scenarios can give little weight to rare but devastating events.',
      },
    },
    {
      id: 'rmgq3',
      question: {
        ELEMENTARY: 'What does a battery do in a microgrid?',
        MIDDLE_SCHOOL: 'Which is an advantage of a solar plus battery microgrid over a diesel generator alone?',
        HIGH_SCHOOL: 'What does a microgrid controller do if supply is short during islanding?',
        UNDERGRADUATE: 'Why is the battery reserve a design tension?',
        GRADUATE: 'What is a resilience hub?',
        PHD: 'What is dynamic microgrid formation?',
      },
      options: {
        ELEMENTARY: ['Makes wind', 'Cleans the windows', 'Saves electricity to use later, even at night', 'Waters the plants'],
        MIDDLE_SCHOOL: ['It makes more noise', 'It needs fuel deliveries', 'It needs no fuel and is useful every day', 'It only works in winter'],
        HIGH_SCHOOL: ['Adds more customers', 'Turns off the solar panels', 'Sheds non-critical loads to keep the system balanced', 'Reconnects to the broken grid'],
        UNDERGRADUATE: ['Batteries cannot hold energy', 'Reserve makes the battery heavier', 'Energy held for outages cannot be used for everyday savings', 'Reserve is required by law to be zero'],
        GRADUATE: ['A power plant', 'A battery factory', 'A trusted community facility with backup power that provides services in emergencies', 'A utility office'],
        PHD: ['Building new power plants', 'Designing microgrids on paper', 'Reconfiguring distribution switches after a disaster to create islands around available resources', 'Forming a utility company'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Batteries store electricity from the sun so it can be used later.',
        MIDDLE_SCHOOL: 'Solar and batteries need no fuel and save money on normal days too.',
        HIGH_SCHOOL: 'Load shedding protects critical loads when there is not enough power for everything.',
        UNDERGRADUATE: 'Keeping energy in reserve for outages means giving up some everyday value.',
        GRADUATE: 'Resilience hubs offer cooling, heating, charging and information during disasters.',
        PHD: 'After damage, operators can reconfigure switches to form islands powered by local resources.',
      },
    },
    {
      id: 'rmgq4',
      question: {
        ELEMENTARY: 'What can you put in a storm-ready box?',
        MIDDLE_SCHOOL: 'What does resilience mean?',
        HIGH_SCHOOL: 'What is a weakness of relying only on a diesel generator?',
        UNDERGRADUATE: 'What is value stacking?',
        GRADUATE: 'Why are microgrids and grid hardening described as complements?',
        PHD: 'Why is validating resilience models difficult?',
      },
      options: {
        ELEMENTARY: ['Ice cream', 'A goldfish', 'A paper kite', 'A flashlight, water and snacks'],
        MIDDLE_SCHOOL: ['Using more energy', 'Building bigger houses', 'Paying lower bills', 'The ability to keep working or recover quickly after a disruption'],
        HIGH_SCHOOL: ['It is too quiet', 'It works only in sunshine', 'It cannot make electricity', 'Fuel supply can fail after disasters'],
        UNDERGRADUATE: ['Stacking batteries vertically', 'Adding more solar panels', 'Building taller towers', 'Combining multiple revenue or savings streams to justify cost'],
        GRADUATE: ['They are the same thing', 'One is always cheaper', 'Hardening is no longer used', 'Each protects different things, so they work best together'],
        PHD: ['Models have no inputs', 'Resilience never matters', 'There is too much data', 'Rare events provide few observations to test against'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A flashlight, water and snacks help your family during a power outage.',
        MIDDLE_SCHOOL: 'Resilience is about bouncing back from trouble like storms.',
        HIGH_SCHOOL: 'After a disaster, roads may be blocked and fuel deliveries may not arrive.',
        UNDERGRADUATE: 'Value stacking adds up savings and revenues like demand charge reduction and grid services.',
        GRADUATE: 'Hardening protects whole feeders while microgrids protect specific sites and neighborhoods.',
        PHD: 'Because catastrophic events are rare, there is little real data to check model predictions.',
      },
    },
    {
      id: 'rmgq5',
      question: {
        ELEMENTARY: 'What usually knocks down power lines?',
        MIDDLE_SCHOOL: 'Which part of a microgrid is its "brain"?',
        HIGH_SCHOOL: 'Why do designers pick specific outage scenarios instead of designing for every possible event?',
        UNDERGRADUATE: 'Who sets frequency and voltage when a microgrid is islanded?',
        GRADUATE: 'Who faces the greatest risks from long outages?',
        PHD: 'What normative choice is embedded in resilience metrics?',
      },
      options: {
        ELEMENTARY: ['Big storms, heavy snow or strong winds', 'Butterflies', 'Rainbows', 'Quiet sunny days'],
        MIDDLE_SCHOOL: ['The controller', 'The solar panel', 'The battery case', 'The fence'],
        HIGH_SCHOOL: ['Sizing for every possible event would be unaffordable', 'Storms never happen', 'Scenarios are required to be one hour long', 'Microgrids cannot store energy'],
        UNDERGRADUATE: ['Local grid-forming inverters or generators', 'The main grid', 'The customers', 'Nobody, they float freely'],
        GRADUATE: ['People relying on powered medical devices, older residents and those without alternatives', 'Only large factories', 'Everyone equally', 'Only people with generators'],
        PHD: ['Whether all load counts equally and how long outages are weighted', 'The color of graphs', 'Which software language to use', 'Whether to use metric units'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Storms, snow and wind can break power lines and cause outages.',
        MIDDLE_SCHOOL: 'The controller manages where power goes and when to disconnect.',
        HIGH_SCHOOL: 'Planners choose realistic scenarios and focus on the most critical loads to keep costs reasonable.',
        UNDERGRADUATE: 'Without the main grid, local grid-forming sources must hold voltage and frequency steady.',
        GRADUATE: 'Outage harms fall hardest on vulnerable households, which equity programs aim to address.',
        PHD: 'Metric design decides whose losses count and how heavily, which is a value judgment.',
      },
    },
  ],
}

export default expansion
