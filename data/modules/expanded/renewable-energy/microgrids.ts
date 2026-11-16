import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'microgrids',
  lessons: [
    {
      id: 're-micro-1',
      title: 'Mini Power Systems',
      content: {
        ELEMENTARY: `
<h2>A Little Power Grid of Your Own</h2>
<p>Most of our electricity comes from a giant grid that stretches across whole countries. But some places have their own small power system too. It is called a microgrid. "Micro" means small. A microgrid is like a little team that makes, saves and shares electricity right where people live.</p>

<h3>What Is Inside a Microgrid?</h3>
<p>A microgrid has a few important parts that work together. There is something to make electricity, something to store it and something to decide where it goes.</p>
<ul>
<li><strong>Microgrid:</strong> a small power system that can share electricity with a town, school or hospital</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Battery:</strong> a box that saves electricity so it can be used later</li>
<li><strong>Controller:</strong> a smart computer that decides where the electricity should go</li>
<li><strong>Generator:</strong> a machine that makes electricity, sometimes by burning fuel</li>
</ul>

<h3>Working Alone When Needed</h3>
<p>Here is the clever part. Usually a microgrid is joined to the big grid. But if a storm knocks out the big grid, the microgrid can disconnect and keep working all by itself. It is like a sailboat that can untie from the big ship and sail on its own. Hospitals, fire stations and schools use this to keep the lights on in an emergency.</p>

<h3>Power for Faraway Places</h3>
<p>Some villages and islands are too far away for big power lines to reach. A microgrid with solar panels and batteries can bring them electricity for lights, fridges and computers. Children can then read at night and families can keep food fresh.</p>

<h3>Be a Microgrid Detective</h3>
<ol>
<li>Look for solar panels on roofs in your neighborhood.</li>
<li>Ask your school if it has a backup power system.</li>
<li>Draw your own microgrid with a sun, a battery and the buildings it powers.</li>
</ol>

<h3>Think About It</h3>
<p>If your town had its own microgrid, which buildings would you power first in a storm? Many people would choose the hospital and the place where families can stay warm and safe.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Community Mini Grids</h2>
<p>A microgrid is a local energy system with its own sources of electricity, its own storage and a control system, serving a defined area such as a campus, a neighborhood, a military base or a remote village. What makes a microgrid special is that it can run connected to the main grid or separately. This ability helps communities stay powered during outages and use more local clean energy.</p>

<h3>Connected Mode and Island Mode</h3>
<p>Most of the time, a grid-connected microgrid trades electricity with the main grid. It might buy power when it needs extra and sell or share power when it has a surplus. When there is a blackout, a special switch opens and the microgrid "islands," meaning it separates and runs on its own. When the main grid comes back, the microgrid carefully reconnects.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Islanding:</strong> when a microgrid disconnects from the main grid and keeps supplying power by itself</li>
<li><strong>Point of common coupling:</strong> the place where a microgrid connects to the main grid</li>
<li><strong>Distributed energy resources:</strong> small energy sources and storage spread across many locations</li>
<li><strong>Critical load:</strong> equipment that must stay powered, like hospital machines or water pumps</li>
<li><strong>Off-grid microgrid:</strong> a microgrid that is never connected to a main grid, often on islands or in remote villages</li>
<li><strong>Resilience:</strong> the ability to keep working during problems and recover quickly afterward</li>
</ul>

<h3>Types of Microgrids</h3>
<table>
<thead><tr><th>Type</th><th>Where you find it</th><th>Main goal</th></tr></thead>
<tbody>
<tr><td>Campus microgrid</td><td>Universities, hospitals, military bases</td><td>Reliability and lower energy costs</td></tr>
<tr><td>Community microgrid</td><td>Neighborhoods and towns</td><td>Keeping key services running in disasters</td></tr>
<tr><td>Remote or island microgrid</td><td>Villages and islands far from main grids</td><td>Providing electricity where there was none</td></tr>
<tr><td>Industrial microgrid</td><td>Factories and data centers</td><td>Avoiding costly interruptions</td></tr>
</tbody>
</table>

<h3>Balancing a Small System</h3>
<p>In a big grid, many power plants share the job of matching supply and demand. In a microgrid, there are only a few sources, so the controller must work hard. If clouds cover the solar panels, the battery must quickly give more power. If the battery gets low, the controller might start a backup generator or switch off less important uses for a while.</p>

<h3>Why Communities Choose Microgrids</h3>
<p>Microgrids can keep emergency services running, use local sunshine and wind, and reduce how much fuel remote places must ship in. Many remote communities, including Indigenous communities, are building microgrids to replace expensive and polluting diesel generators with local renewable energy that they help own and manage.</p>
`,
        HIGH_SCHOOL: `
<h2>Microgrid Design, Islanding and Integration</h2>
<p>A microgrid is a group of interconnected loads and distributed energy resources within clearly defined electrical boundaries that acts as a single controllable entity with respect to the main grid. It can connect and disconnect to operate in either grid-connected or island mode. Designing one means choosing the right mix of generation and storage, planning how it will island safely and deciding how it will interact with the utility grid.</p>

<h3>Building Blocks</h3>
<ul>
<li><strong>Generation:</strong> solar panels, wind turbines, combined heat and power units or backup generators</li>
<li><strong>Energy storage:</strong> batteries that smooth variability and provide fast response during transitions</li>
<li><strong>Microgrid controller:</strong> software and hardware that dispatch resources and manage mode changes</li>
<li><strong>Switchgear:</strong> breakers and switches, including the main switch at the point of common coupling</li>
<li><strong>Inverter:</strong> power electronics that convert direct current from solar and batteries into alternating current</li>
<li><strong>Load management:</strong> the ability to prioritize critical loads and shed less important ones</li>
</ul>

<h3>Design Steps</h3>
<ol>
<li>Identify loads, especially critical loads, and measure how they vary through the day and year.</li>
<li>Decide how long the microgrid must run in island mode, for example hours versus days.</li>
<li>Size generation and storage to meet critical loads through the worst expected conditions.</li>
<li>Design protection so faults are detected both when connected and when islanded.</li>
<li>Plan controls for normal operation, islanding, reconnection and black start.</li>
</ol>

<h3>The Islanding Challenge</h3>
<p>When the main grid fails, the microgrid must disconnect and immediately take over setting voltage and frequency. In the main grid, large spinning generators do this naturally. In a microgrid dominated by solar and batteries, at least one inverter must operate in grid-forming mode, acting as the reference that others follow. Islanding can be planned, such as during scheduled maintenance, or unplanned, triggered by a sudden outage. Reconnection also requires care: the microgrid must match the main grid's voltage, frequency and phase before the switch closes.</p>

<h3>Comparing Resource Choices</h3>
<table>
<thead><tr><th>Resource</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Solar photovoltaics</td><td>No fuel, low operating cost</td><td>Only produces in daylight</td></tr>
<tr><td>Batteries</td><td>Very fast response, smooths variability</td><td>Limited duration, degrades over time</td></tr>
<tr><td>Diesel or gas generator</td><td>Dispatchable for long periods</td><td>Fuel cost, emissions, fuel supply risk in disasters</td></tr>
<tr><td>Combined heat and power</td><td>High efficiency using waste heat</td><td>Needs steady heat demand and fuel</td></tr>
</tbody>
</table>

<h3>Integration With the Main Grid</h3>
<p>When connected, a microgrid can lower costs by reducing peak demand charges, provide services to the utility such as demand response, and support local voltage. Utilities need to know how the microgrid will behave, so interconnection agreements set rules for protection, communication and safety, including making sure the microgrid never accidentally energizes lines that workers believe are dead.</p>

<h3>Real-World Applications</h3>
<p>Hospitals and emergency centers use microgrids for resilience. Universities use them to cut costs and emissions. Islands use solar-and-battery microgrids to reduce reliance on imported diesel. After major storms and wildfires, communities have increasingly turned to microgrids to protect critical services.</p>
`,
        UNDERGRADUATE: `
<h2>Microgrid Economics, Control Systems and Business Models</h2>
<p>Microgrids are technically mature, but deployment depends on whether their value can be captured and paid for. This lesson analyzes the control architecture that makes microgrids work, the economics of sizing and dispatch, and the business models that determine who owns and pays for them.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Hierarchical control:</strong> a layered control structure with primary, secondary and tertiary levels operating at different time scales</li>
<li><strong>Droop control:</strong> a primary control method in which sources adjust output in proportion to deviations in frequency or voltage, sharing load without communication</li>
<li><strong>Economic dispatch:</strong> choosing how much each resource should produce to meet demand at lowest cost</li>
<li><strong>Value of lost load:</strong> an estimate of the economic cost to customers of an unserved unit of electricity</li>
<li><strong>Demand charge:</strong> a fee based on a customer's highest power draw in a billing period</li>
<li><strong>Energy as a service:</strong> a model in which a third party owns and operates the system and the customer pays for outcomes</li>
</ul>

<h3>Control Architecture</h3>
<table>
<thead><tr><th>Level</th><th>Time scale</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Primary</td><td>Milliseconds to seconds</td><td>Stabilize voltage and frequency, share load via droop</td></tr>
<tr><td>Secondary</td><td>Seconds to minutes</td><td>Restore nominal frequency and voltage after primary deviations</td></tr>
<tr><td>Tertiary</td><td>Minutes to hours</td><td>Optimize dispatch, manage grid exchange and economics</td></tr>
</tbody>
</table>
<p>Primary droop control lets multiple inverters share load without fast communication, which improves robustness. Its drawback is a steady-state deviation from nominal frequency, which secondary control removes. Tertiary control uses forecasts of load, solar output and prices to schedule storage and generators.</p>

<h3>Value Streams</h3>
<p>Microgrid value is a stack of separate streams, and projects rarely succeed on one alone:</p>
<ol>
<li><strong>Energy savings:</strong> self-generation that costs less than retail purchases.</li>
<li><strong>Demand charge reduction:</strong> batteries shaving the site's peak power draw.</li>
<li><strong>Grid services:</strong> payments for demand response, capacity or frequency regulation where markets allow.</li>
<li><strong>Resilience:</strong> avoided losses from outages, valued using outage frequency, duration and cost to the customer.</li>
<li><strong>Emissions reduction:</strong> value through carbon prices, corporate goals or avoided diesel use.</li>
</ol>
<p>Resilience is often the reason a microgrid is built but the hardest stream to monetize. Reasoning in words: if a hospital expects rare but long outages, each costing a great deal in disrupted services, the expected annual avoided loss equals the probability of outages times their cost, which may justify a large share of the investment even if it rarely appears on a bill.</p>

<h3>Sizing Trade-offs</h3>
<p>Sizing involves balancing capital cost against reliability and fuel savings. Adding more solar and storage reduces fuel use but faces diminishing returns, because covering the last few cloudy days requires a large amount of extra storage. Hybrid designs often keep a generator for rare long events while renewables and batteries supply most energy.</p>

<h3>Business Models</h3>
<p>Ownership options include customer ownership, utility ownership, third-party ownership through energy-as-a-service contracts, and community or cooperative ownership. Each allocates risk, financing cost and control differently.</p>

<h3>Applied Checklist</h3>
<ol>
<li>Characterize loads and identify critical loads and their outage costs.</li>
<li>List all available value streams and the rules that govern them.</li>
<li>Optimize resource sizing across scenarios, including long outages.</li>
<li>Select a control architecture with appropriate primary, secondary and tertiary layers.</li>
<li>Choose an ownership model that fits financing and risk preferences.</li>
</ol>
`,
        GRADUATE: `
<h2>Networked Microgrids, Regulatory Challenges and Resilience Value</h2>
<p>Single-customer microgrids on campuses and bases are well established. The frontier for policy is multi-customer and networked microgrids that cross property lines, use utility wires and serve whole communities. These raise unresolved questions about who may build them, how they are regulated and how resilience is valued and paid for.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Networked microgrids:</strong> multiple microgrids that can connect to each other to share resources and support during outages</li>
<li><strong>Multi-customer microgrid:</strong> a microgrid serving several separately owned buildings, often across public rights of way</li>
<li><strong>Franchise rights:</strong> exclusive rights often granted to utilities to provide electric service within a territory</li>
<li><strong>Resilience valuation:</strong> methods for estimating the economic and social value of avoiding or shortening major outages</li>
<li><strong>Non-wires alternative:</strong> a distributed solution that defers or replaces traditional grid investment</li>
<li><strong>Community resilience hub:</strong> a facility that provides power, cooling, communication and services to residents during emergencies</li>
</ul>

<h3>Regulatory Barriers</h3>
<p>Multi-customer microgrids often run into legal frameworks designed for monopoly utilities. Selling electricity to neighbors may make a developer a regulated utility; crossing a street with wires may violate franchise rights; and rules on who may operate distribution equipment can block non-utility operators. Approaches include utility-owned community microgrids, tariffs that allow third-party microgrids to use utility wires, and pilot programs that test new arrangements.</p>

<table>
<thead><tr><th>Ownership model</th><th>Advantage</th><th>Concern</th></tr></thead>
<tbody>
<tr><td>Utility-owned</td><td>Uses existing wires and expertise, fits regulation</td><td>Costs spread to all ratepayers; possible competitive advantage</td></tr>
<tr><td>Third-party</td><td>Private capital and innovation</td><td>Legal barriers, interconnection complexity</td></tr>
<tr><td>Community or cooperative</td><td>Local control, benefits retained locally</td><td>Capacity, financing and technical expertise</td></tr>
<tr><td>Public agency</td><td>Mission focus on critical services</td><td>Budget constraints and procurement rules</td></tr>
</tbody>
</table>

<h3>Valuing Resilience</h3>
<p>Standard cost-benefit methods rely on customer damage functions estimated for short outages, which poorly capture multi-day events where costs escalate and cascade through health, water, communication and supply chains. Approaches include survey-based customer damage functions, regional economic models and scenario-based assessments of critical services. Who bears the cost matters: if resilience benefits accrue to a whole community, but costs fall on a single site owner, microgrids will be underbuilt relative to their social value.</p>

<h3>Networked Operation</h3>
<p>Networked microgrids can share reserves, allowing each to be smaller while improving collective reliability. During extended outages, a utility can segment the distribution network into islanded sections powered by local resources. This requires utility-grade protection, communications and operator coordination, and it blurs the line between microgrids and the broader distribution system.</p>

<h3>Equity</h3>
<p>Early microgrids clustered at wealthy institutions able to finance them. Equitable deployment focuses on communities with high outage exposure, medical vulnerability or remote locations, and supports local ownership and workforce development. For remote and Indigenous communities, energy sovereignty and community decision-making are central goals alongside cost.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the critical services the microgrid must protect and for whom.</li>
<li>Map legal barriers to ownership, wire use and sales between parties.</li>
<li>Value resilience using methods suited to long-duration events.</li>
<li>Align who pays with who benefits through tariffs or public funding.</li>
<li>Plan for coordination with utility operations, including networked operation.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Hierarchical Control, Multi-Agent Systems and Optimal Dispatch</h2>
<p>Microgrids are an ideal laboratory for power systems research: small enough to model in detail, but dominated by inverters, uncertainty and frequent mode changes that challenge classical theory. This lesson surveys research on control hierarchies, distributed and multi-agent coordination, stability of low-inertia systems and optimal dispatch under uncertainty.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Virtual synchronous machine:</strong> inverter control that emulates the inertia and damping of a rotating generator</li>
<li><strong>Consensus algorithm:</strong> a distributed method by which agents converge on shared values, such as frequency correction, through neighbor communication</li>
<li><strong>Multi-agent system:</strong> a framework in which autonomous software agents representing devices negotiate to achieve system goals</li>
<li><strong>Model predictive control:</strong> repeatedly solving a finite-horizon optimization with updated forecasts and applying only the first decision</li>
<li><strong>Small-signal stability:</strong> analysis of whether a system returns to equilibrium after small disturbances, using linearized models</li>
<li><strong>Chance-constrained optimization:</strong> requiring constraints to hold with a specified probability under uncertainty</li>
</ul>

<h3>Hierarchical and Distributed Control</h3>
<p>The classical three-layer hierarchy separates time scales so each layer can be designed independently. Research questions arise where those separations break down, for example when fast secondary control interacts with primary dynamics. Distributed secondary control using consensus removes the single point of failure of a central controller and scales better, but introduces sensitivity to communication delays, packet loss and cyber attacks. Proving stability under realistic communication conditions remains an active topic.</p>

<h3>Low-Inertia Stability</h3>
<p>Inverter-dominated microgrids have little physical inertia, so frequency can change very quickly after disturbances. Grid-forming strategies such as droop, virtual synchronous machines and matching control differ in their stability properties, interaction with each other and behavior during faults, where inverter current limits introduce nonlinearities. A debate continues about whether emulating synchronous machines is the right paradigm or a legacy constraint on what power electronics can achieve.</p>

<h3>Dispatch Under Uncertainty</h3>
<table>
<thead><tr><th>Approach</th><th>Treatment of uncertainty</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Deterministic with reserves</td><td>Point forecasts plus fixed margins</td><td>Simple but may be conservative or unsafe</td></tr>
<tr><td>Stochastic programming</td><td>Scenarios with probabilities</td><td>Needs good scenarios, grows computationally</td></tr>
<tr><td>Robust optimization</td><td>Worst case over an uncertainty set</td><td>Guarantees but can be overly conservative</td></tr>
<tr><td>Distributionally robust</td><td>Worst case over plausible distributions</td><td>Balances data and conservatism, more complex</td></tr>
<tr><td>Learning-based control</td><td>Policies learned from data</td><td>Fast online but safety guarantees are limited</td></tr>
</tbody>
</table>

<h3>Multi-Agent Coordination and Networked Microgrids</h3>
<p>When multiple microgrids interconnect, each may have its own owner and objectives. Game-theoretic and market-based formulations study how they can trade energy and reserves, with questions about equilibrium existence, efficiency loss from strategic behavior and privacy. Dynamic boundaries, where a distribution network reconfigures into microgrids during an outage, require integrated planning and operations models that combine topology decisions with control constraints.</p>

<h3>Methodological Issues</h3>
<p>Many results are validated in simulation on small benchmark systems with idealized communication. Hardware-in-the-loop testing and field data are less common, making it hard to judge real-world performance. Researchers also debate how to compare control strategies fairly given differing assumptions about inverter models and disturbances.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Stability guarantees for distributed control under realistic delays, losses and attacks.</li>
<li>Grid-forming control designs that coordinate with current-limited inverters during faults.</li>
<li>Tractable dispatch methods that combine robustness with data-driven forecasts.</li>
<li>Coordination mechanisms for independently owned networked microgrids.</li>
<li>Open hardware and field datasets for reproducible validation.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rmgq1',
      question: {
        ELEMENTARY: 'What is a microgrid?',
        MIDDLE_SCHOOL: 'What does islanding mean for a microgrid?',
        HIGH_SCHOOL: 'Why must at least one inverter be grid-forming in an islanded solar-and-battery microgrid?',
        UNDERGRADUATE: 'What does droop control allow multiple inverters to do?',
        GRADUATE: 'Why do multi-customer microgrids often face legal barriers?',
        PHD: 'What does a virtual synchronous machine emulate?',
      },
      options: {
        ELEMENTARY: ['A small power system that can make, store and share electricity locally', 'A tiny toy train', 'A very small light bulb', 'A kind of pencil'],
        MIDDLE_SCHOOL: ['Disconnecting from the main grid and running on its own', 'Moving to an island', 'Selling all its batteries', 'Turning off forever'],
        HIGH_SCHOOL: ['Something must set the voltage and frequency reference once the main grid is gone', 'Inverters need sunlight to start', 'It makes the batteries charge faster', 'The law requires it on cloudy days'],
        UNDERGRADUATE: ['Share load without fast communication', 'Eliminate the need for any storage', 'Run only at night', 'Increase demand charges'],
        GRADUATE: ['Laws designed for monopoly utilities may restrict selling power and crossing rights of way', 'Microgrids cannot connect to buildings', 'Customers dislike electricity', 'Batteries are illegal'],
        PHD: ['The inertia and damping of a rotating generator', 'The appearance of a power plant', 'A wind turbine blade', 'A customer billing system'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A microgrid is a little power system that serves a nearby area.',
        MIDDLE_SCHOOL: 'When it islands, a microgrid separates from the main grid and keeps supplying power.',
        HIGH_SCHOOL: 'Without large spinning generators, a grid-forming inverter must act as the reference.',
        UNDERGRADUATE: 'Droop control shares load based on local frequency or voltage deviations.',
        GRADUATE: 'Franchise rights and utility rules can block selling power to neighbors.',
        PHD: 'Virtual synchronous machines emulate inertia and damping to support low-inertia systems.',
      },
    },
    {
      id: 'rmgq2',
      question: {
        ELEMENTARY: 'What does a battery do in a microgrid?',
        MIDDLE_SCHOOL: 'What is a critical load?',
        HIGH_SCHOOL: 'What must happen before a microgrid reconnects to the main grid?',
        UNDERGRADUATE: 'What does secondary control do?',
        GRADUATE: 'Why are standard customer damage functions poor at valuing multi-day outages?',
        PHD: 'What is a drawback of distributed secondary control using consensus?',
      },
      options: {
        ELEMENTARY: ['Makes wind', 'Saves electricity to use later', 'Cleans the windows', 'Plays music'],
        MIDDLE_SCHOOL: ['A very heavy box', 'Equipment that must stay powered, like hospital machines', 'Any light bulb', 'The power company office'],
        HIGH_SCHOOL: ['All batteries must be empty', 'It must match the main grid voltage, frequency and phase', 'All loads must be unplugged forever', 'The solar panels must be removed'],
        UNDERGRADUATE: ['Builds new solar farms', 'Restores nominal frequency and voltage after primary deviations', 'Sets customer bills', 'Measures sunlight'],
        GRADUATE: ['They are too expensive to calculate', 'They were estimated mostly for short outages and miss escalating, cascading costs', 'They overvalue resilience', 'They ignore electricity prices'],
        PHD: ['It always needs a central controller', 'Sensitivity to communication delays, packet loss and cyber attacks', 'It cannot scale at all', 'It removes all stability concerns'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Batteries store electricity so it can be used when the sun is not shining.',
        MIDDLE_SCHOOL: 'Critical loads are the most important things to keep powered during an outage.',
        HIGH_SCHOOL: 'Synchronizing voltage, frequency and phase avoids damage when the switch closes.',
        UNDERGRADUATE: 'Secondary control removes the steady-state offset left by droop control.',
        GRADUATE: 'Long outages cause escalating losses across health, water and supply chains.',
        PHD: 'Consensus avoids a single point of failure but depends on communication quality.',
      },
    },
    {
      id: 'rmgq3',
      question: {
        ELEMENTARY: 'Why might a hospital want a microgrid?',
        MIDDLE_SCHOOL: 'Where are off-grid microgrids often found?',
        HIGH_SCHOOL: 'What is a weakness of using a diesel generator in a microgrid?',
        UNDERGRADUATE: 'Which value stream is often the main reason to build a microgrid but hardest to monetize?',
        GRADUATE: 'What is a community resilience hub?',
        PHD: 'What is a trade-off of robust optimization for microgrid dispatch?',
      },
      options: {
        ELEMENTARY: ['To play games', 'To make the building taller', 'To keep the lights on during a storm', 'To paint the walls'],
        MIDDLE_SCHOOL: ['In big city centers only', 'Inside cars', 'On islands and in remote villages', 'On airplanes'],
        HIGH_SCHOOL: ['It responds too fast', 'It produces no power', 'Fuel cost, emissions and fuel supply risk in disasters', 'It only works in daylight'],
        UNDERGRADUATE: ['Energy savings', 'Demand charge reduction', 'Resilience', 'Meter reading'],
        GRADUATE: ['A power plant fuel depot', 'A billing center', 'A facility providing power, cooling and services to residents during emergencies', 'A transmission substation'],
        PHD: ['It ignores uncertainty', 'It never gives guarantees', 'It provides guarantees but can be overly conservative', 'It requires no model'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Hospitals need power all the time, even when storms knock out the main grid.',
        MIDDLE_SCHOOL: 'Places far from big power lines often use off-grid microgrids.',
        HIGH_SCHOOL: 'Generators need fuel, which costs money, pollutes and can be hard to get after a disaster.',
        UNDERGRADUATE: 'Resilience avoids large outage losses but rarely shows up as a bill saving.',
        GRADUATE: 'Resilience hubs keep residents safe and connected during emergencies.',
        PHD: 'Planning for the worst case guarantees feasibility but may cost more than needed.',
      },
    },
    {
      id: 'rmgq4',
      question: {
        ELEMENTARY: 'What does the microgrid controller do?',
        MIDDLE_SCHOOL: 'What is the point of common coupling?',
        HIGH_SCHOOL: 'Why do interconnection agreements matter for microgrids?',
        UNDERGRADUATE: 'Why do solar and storage face diminishing returns in microgrid sizing?',
        GRADUATE: 'How can networked microgrids improve collective reliability?',
        PHD: 'What is a common methodological limitation of microgrid control research?',
      },
      options: {
        ELEMENTARY: ['Waters the plants', 'Builds the roof', 'Cooks dinner', 'Decides where the electricity should go'],
        MIDDLE_SCHOOL: ['A type of battery', 'A solar panel brand', 'A backup generator', 'The place where a microgrid connects to the main grid'],
        HIGH_SCHOOL: ['They set the price of solar panels', 'They decide school schedules', 'They choose battery colors', 'They set rules for protection, communication and safety'],
        UNDERGRADUATE: ['Solar stops working with more panels', 'Batteries get cheaper with size', 'Storage is free', 'Covering the last few cloudy days needs a large amount of extra storage'],
        GRADUATE: ['By disconnecting all customers', 'By banning storage', 'By using only diesel', 'By sharing reserves so each can be smaller'],
        PHD: ['Too much field data', 'Too many hardware tests', 'No simulations are used', 'Validation mostly in simulation on small benchmarks with idealized communication'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'The controller is the microgrid\'s brain that sends electricity where it is needed.',
        MIDDLE_SCHOOL: 'The point of common coupling is where the microgrid meets the main grid.',
        HIGH_SCHOOL: 'Agreements make sure microgrids behave safely, including never energizing lines workers think are dead.',
        UNDERGRADUATE: 'Rare long cloudy periods require large extra storage for small reliability gains.',
        GRADUATE: 'Connected microgrids can support each other, reducing the reserves each needs.',
        PHD: 'Limited hardware and field testing makes real-world performance hard to judge.',
      },
    },
    {
      id: 'rmgq5',
      question: {
        ELEMENTARY: 'How can a microgrid help a faraway village?',
        MIDDLE_SCHOOL: 'What might a microgrid controller do if the battery gets low?',
        HIGH_SCHOOL: 'What is the first step in designing a microgrid?',
        UNDERGRADUATE: 'What is energy as a service?',
        GRADUATE: 'Why might microgrids be underbuilt relative to their social value?',
        PHD: 'What does model predictive control do?',
      },
      options: {
        ELEMENTARY: ['By bringing electricity for lights and fridges', 'By building a road', 'By making it rain', 'By moving the village'],
        MIDDLE_SCHOOL: ['Start a backup generator or switch off less important uses', 'Turn on every light', 'Sell the battery', 'Open all the doors'],
        HIGH_SCHOOL: ['Identify loads, especially critical loads, and how they vary', 'Buy the largest generator available', 'Paint the switchgear', 'Remove the main switch'],
        UNDERGRADUATE: ['A third party owns and operates the system and the customer pays for outcomes', 'A free government electricity program', 'A type of battery chemistry', 'A utility billing error'],
        GRADUATE: ['Community-wide benefits but costs that fall on a single site owner', 'They are always too cheap', 'They produce too much power', 'Communities never want them'],
        PHD: ['Repeatedly solves a finite-horizon optimization with updated forecasts and applies the first decision', 'Uses a fixed schedule set once a year', 'Ignores forecasts', 'Controls only lighting'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Solar panels and batteries can power lights, fridges and computers in places far from big power lines.',
        MIDDLE_SCHOOL: 'The controller keeps the system balanced by adding power or reducing less important uses.',
        HIGH_SCHOOL: 'Knowing the loads, especially critical ones, comes before sizing anything.',
        UNDERGRADUATE: 'Energy as a service shifts ownership and operation to a provider.',
        GRADUATE: 'When benefits are shared but costs are private, investment falls short of social value.',
        PHD: 'MPC re-plans continuously using new forecasts, applying only the first step each time.',
      },
    },
  ],
}

export default expansion
