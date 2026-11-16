import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-storage-technologies',
  lessons: [
    {
      id: 're-stor-1',
      title: 'How Energy Storage Technologies Work',
      content: {
        ELEMENTARY: `
<h2>Energy Storage Inventors Lab</h2>
<p>Have you ever wound up a toy car and watched it zoom away? You were storing energy! When you turned the key, you put energy into a spring. When you let go, the spring gave the energy back. Engineers use the very same idea, only much bigger, to save clean energy from the sun and wind for later.</p>

<h3>Four Ways to Hold On to Energy</h3>
<p>Energy can be saved in different ways. Here are four big families of storage:</p>
<ul>
<li><strong>Battery:</strong> a box of special materials that holds energy and gives it back as electricity</li>
<li><strong>Height storage:</strong> lifting water or heavy things up high so they can make power when they come down</li>
<li><strong>Heat storage:</strong> keeping energy as warmth in hot rocks, sand or salty liquid</li>
<li><strong>Spinning storage:</strong> a heavy wheel that keeps spinning and can turn its motion back into electricity</li>
<li><strong>Charging:</strong> putting energy into storage, like filling a water bottle</li>
</ul>

<h3>Try It at Home</h3>
<p>You can be a storage inventor with simple things. Ask a grown-up to help.</p>
<ol>
<li><strong>Height:</strong> roll a ball down a ramp. The higher you start it, the farther it rolls. Height stores energy!</li>
<li><strong>Spring:</strong> stretch a rubber band and let it go (pointed away from people). The stretch stored energy.</li>
<li><strong>Heat:</strong> wrap a warm water bottle in a towel. The towel keeps the warmth stored for longer.</li>
<li><strong>Battery:</strong> look at a flashlight. The batteries inside hold energy until you click it on.</li>
</ol>

<h3>Giant Storage for Whole Towns</h3>
<p>Some places pump water up a hill into a lake when the wind is strong. Later, when people need power, the water rushes back down and spins a machine that makes electricity. Other places use rows of huge batteries as big as shipping boxes. Some even store heat in giant tanks of hot salty liquid!</p>

<h3>Why It Matters</h3>
<p>The sun goes down at night, and the wind sometimes stops. Storage keeps the clean energy waiting until we need it, like saving some of your lunch for an afternoon snack.</p>

<h3>Be a Storage Helper</h3>
<p>Batteries contain materials that can be used again. Never throw old batteries in the trash. Ask a grown-up to take them to a special recycling place so the materials can become new batteries!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Batteries and Beyond: Ways to Store Renewable Energy</h2>
<p>Solar panels make the most electricity at midday, but many homes use the most in the evening. Wind can blow hard at night and be calm in the afternoon. To match supply and demand, we need ways to store energy. Engineers have invented many storage technologies, each using a different kind of science.</p>

<h3>Energy Changes Form</h3>
<p>A basic law of science says energy cannot be created or destroyed, only changed from one form to another. Storage technologies work by turning electricity into another form, holding it, and turning it back. Some energy is always lost as heat during these changes, so no storage system gives back everything you put in.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Chemical energy:</strong> energy stored in the bonds between atoms, which batteries release as electricity</li>
<li><strong>Potential energy:</strong> stored energy an object has because of its height or position</li>
<li><strong>Thermal energy:</strong> energy stored as heat in a material such as molten salt, rock or water</li>
<li><strong>Lithium-ion battery:</strong> a rechargeable battery where lithium ions move between two electrodes</li>
<li><strong>Efficiency:</strong> the share of stored energy you get back compared with what you put in</li>
<li><strong>Recycling:</strong> recovering useful materials from old products to make new ones</li>
</ul>

<h3>Comparing Storage Families</h3>
<table>
<thead><tr><th>Family</th><th>Example</th><th>How it stores energy</th><th>Good at</th></tr></thead>
<tbody>
<tr><td>Electrochemical</td><td>Lithium-ion battery</td><td>Chemical reactions move ions back and forth</td><td>Fast response, a few hours of power</td></tr>
<tr><td>Mechanical</td><td>Pumped hydro</td><td>Water pumped uphill, released through turbines</td><td>Large amounts for many hours</td></tr>
<tr><td>Mechanical</td><td>Flywheel</td><td>A heavy wheel spinning very fast</td><td>Very short bursts of power</td></tr>
<tr><td>Thermal</td><td>Molten salt tank</td><td>Hot liquid salt kept in insulated tanks</td><td>Storing heat from solar collectors</td></tr>
<tr><td>Chemical</td><td>Hydrogen</td><td>Electricity splits water to make hydrogen fuel</td><td>Storing energy for weeks or seasons</td></tr>
</tbody>
</table>

<h3>Inside a Rechargeable Battery</h3>
<p>A battery has two ends called electrodes, with a material between them called the electrolyte. When you charge it, electricity pushes lithium ions from one electrode to the other. When you use it, the ions travel back and electrons flow through your device as electric current.</p>

<h3>Thinking About the Planet</h3>
<p>Batteries need materials such as lithium, nickel and cobalt that must be mined, which can harm land, water and communities if not done responsibly. Scientists are developing batteries that use more common materials, and recycling helps recover valuable metals. Choosing the right storage for each job also reduces waste.</p>
`,
        HIGH_SCHOOL: `
<h2>Storage Technologies: How They Work and When to Use Them</h2>
<p>As wind and solar supply more electricity, grids need ways to shift energy from times of plenty to times of need. No single storage technology does every job well. Some respond in milliseconds; others hold energy for days. This lesson explains the physics behind the main technologies and how engineers match them to different tasks.</p>

<h3>Two Numbers That Matter</h3>
<p>Every storage system has a <em>power rating</em>, how fast it can deliver energy, and an <em>energy capacity</em>, how much it holds in total. Dividing capacity by power gives the <em>duration</em>: a battery rated at 100 megawatts with 400 megawatt-hours can run at full output for about four hours.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Round-trip efficiency:</strong> the percentage of energy recovered after storing and releasing it</li>
<li><strong>Energy density:</strong> how much energy a technology stores per unit of mass or volume</li>
<li><strong>Cycle life:</strong> the number of charge and discharge cycles before performance drops significantly</li>
<li><strong>Flow battery:</strong> a battery that stores energy in liquid electrolytes kept in external tanks</li>
<li><strong>Compressed air storage:</strong> storing energy by pumping air into underground caverns at high pressure</li>
<li><strong>Thermal runaway:</strong> a dangerous chain reaction in which a battery cell overheats and can catch fire</li>
</ul>

<h3>How the Main Technologies Compare</h3>
<table>
<thead><tr><th>Technology</th><th>Typical duration</th><th>Round-trip efficiency</th><th>Key trade-off</th></tr></thead>
<tbody>
<tr><td>Lithium-ion batteries</td><td>About 1 to 4 hours</td><td>High</td><td>Fast and compact, but materials and fire safety are concerns</td></tr>
<tr><td>Pumped hydro</td><td>Many hours</td><td>Moderately high</td><td>Mature and long-lived, but needs suitable hills and water</td></tr>
<tr><td>Flow batteries</td><td>Several hours or more</td><td>Moderate</td><td>Long life and easy to scale, but bulky</td></tr>
<tr><td>Compressed air</td><td>Many hours</td><td>Moderate to low</td><td>Large scale, but needs suitable geology</td></tr>
<tr><td>Thermal storage</td><td>Hours to days</td><td>Varies widely</td><td>Cheap materials, best when heat itself is needed</td></tr>
<tr><td>Hydrogen</td><td>Days to seasons</td><td>Low</td><td>Very long duration, but large losses in conversion</td></tr>
</tbody>
</table>

<h3>Lithium-Ion Chemistries</h3>
<p>Not all lithium-ion batteries are alike. Chemistries using nickel, manganese and cobalt pack more energy into less space, which suits electric cars. Lithium iron phosphate batteries store somewhat less energy per kilogram but avoid cobalt and nickel, last many cycles and are less prone to overheating, which is why they are widely used for stationary grid storage. Sodium-ion batteries, using abundant sodium, are an emerging option.</p>

<h3>Real-World Applications</h3>
<ul>
<li>Batteries next to solar farms shift midday power into the evening peak.</li>
<li>Pumped hydro has long provided most of the world's installed storage capacity.</li>
<li>Concentrating solar plants store heat in molten salt to keep generating after sunset.</li>
<li>Flywheels and batteries help keep grid frequency steady second by second.</li>
</ul>

<h3>Sustainability Questions</h3>
<p>Mining for battery materials raises concerns about water use, pollution and labor conditions. Solutions include responsible sourcing standards, chemistries that use abundant materials, longer-lasting designs, reusing car batteries in second-life stationary systems and recycling at end of life.</p>
`,
        UNDERGRADUATE: `
<h2>Storage Technologies: Physics, Performance and Applications</h2>
<p>Energy storage technologies differ in the physical principle they exploit, and that principle sets their performance envelope: energy density, efficiency, response time, lifetime and cost structure. Selecting a technology means matching that envelope to an application's requirements. This lesson takes a technology-by-technology view, linking underlying physics to the economics and grid services each can provide.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Specific energy:</strong> energy stored per unit mass, usually in watt-hours per kilogram, critical for vehicles</li>
<li><strong>Power-to-energy ratio:</strong> the relationship between maximum power and total stored energy, which defines the use case</li>
<li><strong>Depth of discharge:</strong> the fraction of a battery's capacity used in a cycle, which strongly affects degradation</li>
<li><strong>Calendar aging:</strong> capacity loss that occurs over time even when a battery is not being cycled</li>
<li><strong>Self-discharge:</strong> the gradual loss of stored energy while a system sits idle</li>
<li><strong>Levelized cost of storage:</strong> lifetime costs divided by lifetime energy discharged, allowing comparison across technologies</li>
</ul>

<h3>Physical Principles</h3>
<table>
<thead><tr><th>Principle</th><th>Technologies</th><th>What sets capacity</th><th>What sets power</th></tr></thead>
<tbody>
<tr><td>Electrochemical</td><td>Lithium-ion, sodium-ion, flow, lead-acid</td><td>Active material quantity (or tank volume for flow)</td><td>Electrode area, kinetics (or cell stack size for flow)</td></tr>
<tr><td>Gravitational</td><td>Pumped hydro, solid-mass gravity systems</td><td>Mass times height difference</td><td>Turbine and pump size</td></tr>
<tr><td>Pressure</td><td>Compressed and liquid air storage</td><td>Storage volume and pressure</td><td>Compressor and expander size</td></tr>
<tr><td>Kinetic</td><td>Flywheels</td><td>Rotor mass and rotational speed squared</td><td>Motor-generator rating</td></tr>
<tr><td>Thermal</td><td>Molten salt, packed rock or sand, phase-change materials</td><td>Mass, heat capacity and temperature range</td><td>Heat exchanger capacity</td></tr>
</tbody>
</table>
<p>A key insight is whether power and energy can be scaled independently. In a flow battery or pumped hydro plant, adding storage hours means a bigger tank or reservoir, without enlarging the power equipment. In a lithium-ion pack, energy and power are coupled in the same cells, so long durations scale cost roughly linearly with hours. This is why decoupled technologies are candidates for longer-duration storage.</p>

<h3>Efficiency and Degradation</h3>
<p>Round-trip efficiency determines how much of the purchased energy is wasted. A lithium-ion system with high efficiency loses a small fraction, while hydrogen pathways through electrolysis and reconversion lose a majority. Degradation also matters: lithium-ion capacity fades through side reactions at electrodes, accelerated by high temperature, high state of charge and deep cycling. Operators manage this through thermal control and operating limits, trading revenue today against lifetime.</p>

<h3>Matching Technology to Service</h3>
<ul>
<li>Frequency regulation needs fast response and many shallow cycles: batteries and flywheels.</li>
<li>Daily energy shifting needs several hours of moderate-cost energy: batteries, pumped hydro.</li>
<li>Multi-day backup needs cheap energy capacity: flow, thermal, compressed air or chemical storage.</li>
<li>Seasonal balancing needs very low cost per unit of energy stored: hydrogen and other fuels.</li>
</ul>

<h3>Applied Method: Technology Screening</h3>
<ol>
<li>Specify required power, duration, cycling frequency and response time.</li>
<li>Eliminate technologies limited by geography, scale or safety constraints.</li>
<li>Compare levelized cost of storage, including degradation and replacement.</li>
<li>Assess material supply, end-of-life options and siting impacts.</li>
<li>Check revenue stacking possibilities across multiple services.</li>
</ol>
`,
        GRADUATE: `
<h2>Storage Technology Policy, Market Design and System Integration</h2>
<p>At the system level, storage is unusual: it is neither purely generation nor purely load, and its value depends on how markets and regulations recognize the services it provides. Different technologies face different barriers. Lithium-ion batteries scale rapidly through manufacturing learning, while pumped hydro and novel long-duration technologies struggle with financing, permitting and revenue certainty. This lesson examines policy, market design and integration strategy through a technology lens.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Learning rate:</strong> the percentage cost decline associated with each doubling of cumulative production</li>
<li><strong>Revenue stacking:</strong> earning income from several services, such as arbitrage, reserves and capacity, from one asset</li>
<li><strong>Capacity accreditation:</strong> the method a system operator uses to credit a resource's contribution to reliability</li>
<li><strong>Long-duration energy storage:</strong> storage able to discharge at rated power for many hours to days</li>
<li><strong>Technology-neutral procurement:</strong> buying services based on performance requirements rather than specific technologies</li>
<li><strong>Critical minerals:</strong> materials essential to clean technologies whose supply chains face concentration or disruption risk</li>
</ul>

<h3>Different Technologies, Different Barriers</h3>
<table>
<thead><tr><th>Technology</th><th>Main barrier</th><th>Policy lever</th></tr></thead>
<tbody>
<tr><td>Lithium-ion batteries</td><td>Supply chain concentration, fire safety, siting opposition</td><td>Supply diversification, safety codes, community engagement</td></tr>
<tr><td>Pumped hydro</td><td>Long lead times, high upfront cost, environmental permitting</td><td>Revenue certainty mechanisms, streamlined review, closed-loop siting</td></tr>
<tr><td>Emerging long-duration technologies</td><td>Unproven at scale, financing risk</td><td>Demonstration funding, targeted procurement, public finance</td></tr>
<tr><td>Thermal storage</td><td>Value split between heat and power sectors</td><td>Recognition in industrial and heating policy</td></tr>
<tr><td>Hydrogen storage</td><td>Low efficiency, high cost, infrastructure gaps</td><td>Focus on hard-to-electrify uses, coordinated infrastructure planning</td></tr>
</tbody>
</table>

<h3>Market Design Issues</h3>
<p>Wholesale markets designed for generators may not accommodate a resource that both buys and sells. Important reforms include participation rules that allow storage to bid as both supplier and consumer, state-of-charge management, fair treatment of charging energy in transmission tariffs and accreditation methods that reflect declining capacity value as storage penetration rises. Short-duration batteries can capture early high-value services, but their marginal reliability contribution falls as evening peaks flatten and peaks shift to longer periods of low wind.</p>

<h3>The Long-Duration Challenge</h3>
<p>Systems with very high renewable shares face multi-day lulls in wind and solar. Energy-arbitrage revenues for long-duration assets are uncertain because they depend on rare events. Policy approaches include procurement targets, capacity mechanisms that value duration, and public co-investment in first-of-a-kind projects. The risk is picking winners prematurely, which technology-neutral requirements try to avoid.</p>

<h3>Equity, Safety and Siting</h3>
<p>Battery facilities near homes raise safety concerns after high-profile fires, while pumped hydro can affect land and waterways, including sites of cultural importance to Indigenous peoples. Mining for battery materials concentrates harms in producing regions. Integration strategies should weigh these impacts, ensure community consent processes and support recycling and responsible sourcing.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the system need: duration, frequency and location of shortfalls.</li>
<li>Compare technology portfolios rather than single technologies.</li>
<li>Assess whether market rules let storage capture the value it provides.</li>
<li>Account for supply chain, safety and lifecycle impacts.</li>
<li>Distinguish technology maturity stages and tailor support to each.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Advanced Materials, Optimal Deployment and Long-Duration Storage</h2>
<p>Storage research spans scales from atoms to continents. At the materials level, the challenge is to store more energy, more cheaply and safely, using abundant elements. At the system level, the question is what portfolio of storage, at which durations and locations, minimizes the cost of a reliable, decarbonized grid. This lesson surveys both frontiers and the methods connecting them.</p>

<h3>Materials and Chemistry Frontiers</h3>
<ul>
<li><strong>Solid-state electrolyte:</strong> a solid ion conductor replacing flammable liquid electrolytes, potentially enabling lithium metal anodes</li>
<li><strong>Solid electrolyte interphase:</strong> a passivating layer formed on electrodes whose growth and stability govern battery lifetime</li>
<li><strong>Dendrite formation:</strong> branching metal growth during charging that can pierce separators and cause short circuits</li>
<li><strong>Metal-air battery:</strong> a chemistry using oxygen from air as a reactant, offering high theoretical energy at low material cost</li>
<li><strong>Redox-active organic molecule:</strong> a carbon-based compound that can store charge in flow batteries without scarce metals</li>
<li><strong>Phase-change material:</strong> a substance that stores and releases large amounts of heat as it melts and solidifies</li>
</ul>

<h3>Key Research Challenges by Chemistry</h3>
<table>
<thead><tr><th>Approach</th><th>Promise</th><th>Open problem</th></tr></thead>
<tbody>
<tr><td>Solid-state lithium</td><td>Higher energy density and improved safety</td><td>Interfacial resistance, dendrites, manufacturability</td></tr>
<tr><td>Sodium-ion</td><td>Abundant materials, reduced supply risk</td><td>Lower energy density, cathode stability</td></tr>
<tr><td>Iron-air and other metal-air</td><td>Very low cost per unit energy for multi-day duration</td><td>Low efficiency, electrode passivation, rechargeability</td></tr>
<tr><td>Aqueous and organic flow</td><td>Decoupled scaling, long life</td><td>Molecular degradation, crossover, low energy density</td></tr>
<tr><td>High-temperature thermal</td><td>Cheap media, integration with industry</td><td>Heat-to-power efficiency, material durability at temperature</td></tr>
</tbody>
</table>
<p>Accelerated discovery uses high-throughput computation, machine learning screening and automated experimentation to explore chemical spaces. A methodological debate concerns how well computed properties predict performance in real cells, where interfaces and manufacturing dominate.</p>

<h3>Degradation Modeling</h3>
<p>Lifetime prediction blends physics-based electrochemical models with data-driven approaches trained on cycling data. Physics models offer interpretability but require many parameters; data models can be accurate within their training range but extrapolate poorly to new chemistries or operating conditions. Hybrid approaches embedding physical constraints in learning models are an active area.</p>

<h3>Optimal Deployment Modeling</h3>
<p>Capacity expansion models determine least-cost storage portfolios but face a temporal problem: many reduce a year to a set of representative days, which can lose the inter-day and seasonal patterns that determine long-duration value. Methods that link representative periods, chronological full-year runs and multi-weather-year analysis show that the value of long-duration storage depends strongly on extreme events and weather-year selection. Studies broadly suggest that the cost per unit of energy capacity, rather than power capacity or efficiency, is the dominant driver of whether long-duration storage plays a large role.</p>

<h3>Contested Questions</h3>
<p>How much long-duration storage will deep decarbonization need, versus alternatives such as transmission expansion, firm clean generation and demand flexibility? Should cost targets be framed per unit energy or per delivered service? How should lifecycle impacts, including mining and recycling, be weighed against operational benefits? Can recycling supply a meaningful share of future materials given growth rates and product lifetimes?</p>

<h3>Open Research Directions</h3>
<ol>
<li>Abundant-element chemistries that meet cost targets for multi-day storage.</li>
<li>Interface engineering and in situ characterization of degradation mechanisms.</li>
<li>Planning models that capture multi-year weather variability and compound events.</li>
<li>Co-optimization of storage with transmission and flexible demand.</li>
<li>Design for recyclability and closed-loop material flows from the start.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rstorq1',
      question: {
        ELEMENTARY: "Where does a wind-up toy car store its energy?",
        MIDDLE_SCHOOL: "What kind of energy does pumped hydro store?",
        HIGH_SCHOOL: "What is a flow battery?",
        UNDERGRADUATE: "Why can flow batteries and pumped hydro scale energy and power independently?",
        GRADUATE: "What is a learning rate?",
        PHD: "What is a solid-state electrolyte?",
      },
      options: {
        ELEMENTARY: ["In a spring", "In its wheels' paint", "In the box it came in", "In the floor"],
        MIDDLE_SCHOOL: ["Potential energy from water lifted to a height", "Sound energy", "Light energy", "Chemical energy in salt"],
        HIGH_SCHOOL: ["A battery that stores energy in liquid electrolytes kept in external tanks", "A battery that floats on water", "A pipe that moves electricity", "A battery with no electrolyte"],
        UNDERGRADUATE: ["Adding storage hours means larger tanks or reservoirs without enlarging power equipment", "They have no power equipment", "Their energy and power are stored in the same cells", "They only work for a few seconds"],
        GRADUATE: ["The percentage cost decline with each doubling of cumulative production", "How quickly engineers learn to install batteries", "The rate at which batteries charge", "A school ranking for energy programs"],
        PHD: ["A solid ion conductor replacing flammable liquid electrolytes", "A frozen battery", "A solid metal casing", "A battery without electrodes"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Winding the key squeezes a spring, which stores energy and releases it to move the car.",
        MIDDLE_SCHOOL: "Water pumped uphill has potential energy that turns turbines when it flows back down.",
        HIGH_SCHOOL: "Flow batteries keep electrolyte in tanks, so capacity grows with tank size.",
        UNDERGRADUATE: "Their energy capacity and power equipment are separate components that can be sized independently.",
        GRADUATE: "Learning rates capture how manufacturing scale drives down technology costs.",
        PHD: "Solid electrolytes could improve safety and allow lithium metal anodes, though interfaces remain challenging.",
      },
    },
    {
      id: 'rstorq2',
      question: {
        ELEMENTARY: "What should you do with old batteries?",
        MIDDLE_SCHOOL: "What is thermal energy storage?",
        HIGH_SCHOOL: "Why is lithium iron phosphate popular for grid storage?",
        UNDERGRADUATE: "What does a flywheel's stored energy depend on?",
        GRADUATE: "Why does the capacity value of short-duration batteries fall as more are added?",
        PHD: "Why can representative-day modeling undervalue long-duration storage?",
      },
      options: {
        ELEMENTARY: ["Throw them in the trash", "Take them to a special recycling place with a grown-up", "Bury them in the garden", "Put them in the bath"],
        MIDDLE_SCHOOL: ["Storing energy as sound", "Storing energy as heat in materials like molten salt or rock", "Storing energy in springs", "Storing energy in clouds"],
        HIGH_SCHOOL: ["It stores the most energy per kilogram of any battery", "It avoids cobalt and nickel, lasts many cycles and is less prone to overheating", "It works only in cold climates", "It needs no electronics"],
        UNDERGRADUATE: ["The color of the rotor", "Rotor mass and the square of its rotational speed", "The height of the building", "The volume of air around it"],
        GRADUATE: ["Batteries wear out instantly", "As peaks flatten, remaining shortfalls last longer than short batteries can cover", "Regulators ban additional batteries", "Their efficiency drops to zero"],
        PHD: ["It runs too slowly on computers", "It can lose inter-day and seasonal patterns that determine long-duration value", "It always overestimates storage value", "It ignores solar power"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Batteries have materials that can be reused, so they should be recycled, not thrown away.",
        MIDDLE_SCHOOL: "Thermal storage keeps energy as heat in insulated materials until it is needed.",
        HIGH_SCHOOL: "Its safety, long cycle life and avoidance of scarce metals suit stationary uses.",
        UNDERGRADUATE: "Kinetic energy rises with mass and with the square of speed, so faster rotors store much more.",
        GRADUATE: "Once short peaks are covered, the next shortfalls are longer events that need more duration.",
        PHD: "Compressing a year into separate days breaks the chronology that multi-day storage relies on.",
      },
    },
    {
      id: 'rstorq3',
      question: {
        ELEMENTARY: "In the ramp experiment, what makes the ball roll farther?",
        MIDDLE_SCHOOL: "Why does no storage system give back all the energy you put in?",
        HIGH_SCHOOL: "A battery is rated 100 megawatts and 400 megawatt-hours. How long can it run at full power?",
        UNDERGRADUATE: "What is the levelized cost of storage?",
        GRADUATE: "What does technology-neutral procurement mean?",
        PHD: "What is dendrite formation?",
      },
      options: {
        ELEMENTARY: ["Painting the ball", "Using a smaller ball", "Starting it higher up", "Clapping loudly"],
        MIDDLE_SCHOOL: ["Energy is destroyed during storage", "Storage creates new energy", "Some energy is lost as heat when it changes form", "Batteries leak water"],
        HIGH_SCHOOL: ["About one hour", "About forty hours", "About four hours", "About four minutes"],
        UNDERGRADUATE: ["The price of one battery cell", "The cost of the land under a plant", "Lifetime costs divided by lifetime energy discharged", "The fee for connecting to the grid"],
        GRADUATE: ["Buying only the cheapest battery brand", "Banning new technologies", "Buying services based on performance requirements rather than specific technologies", "Letting each utility choose without rules"],
        PHD: ["Branching metal growth during charging that can pierce separators", "A protective coating on electrodes", "Heat released by thermal storage", "Corrosion of battery casings"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Starting higher stores more energy, so the ball rolls farther when it comes down.",
        MIDDLE_SCHOOL: "Energy is never destroyed, but every change of form loses some as heat.",
        HIGH_SCHOOL: "Duration equals capacity divided by power: 400 divided by 100 is about four hours.",
        UNDERGRADUATE: "It spreads all lifetime costs over the energy delivered, allowing comparison across technologies.",
        GRADUATE: "Defining the service needed lets any technology that meets it compete.",
        PHD: "Dendrites can cause internal short circuits, a key barrier for lithium metal anodes.",
      },
    },
    {
      id: 'rstorq4',
      question: {
        ELEMENTARY: "Why do we need to store clean energy?",
        MIDDLE_SCHOOL: "What moves between the electrodes of a lithium-ion battery?",
        HIGH_SCHOOL: "What is thermal runaway?",
        UNDERGRADUATE: "Which technologies best suit frequency regulation?",
        GRADUATE: "What is a main barrier for new pumped hydro projects?",
        PHD: "What do studies suggest most drives whether long-duration storage plays a large role?",
      },
      options: {
        ELEMENTARY: ["To make the sun shine brighter", "Because wind never stops", "To keep electricity away from homes", "Because the sun sets and the wind sometimes stops"],
        MIDDLE_SCHOOL: ["Water droplets", "Air bubbles", "Grains of sand", "Lithium ions"],
        HIGH_SCHOOL: ["A battery that charges very quickly", "A turbine spinning out of control", "Heat stored in molten salt", "A chain reaction where a cell overheats and can catch fire"],
        UNDERGRADUATE: ["Hydrogen caverns", "Seasonal thermal pits", "Compressed air in deep mines", "Batteries and flywheels"],
        GRADUATE: ["It cannot store any energy", "It needs no water", "It responds too quickly", "Long lead times, high upfront cost and environmental permitting"],
        PHD: ["Round-trip efficiency alone", "The color of the storage medium", "The number of manufacturers", "Cost per unit of energy capacity"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Storage saves clean energy for nighttime and calm days.",
        MIDDLE_SCHOOL: "Lithium ions shuttle between electrodes while electrons flow through the device.",
        HIGH_SCHOOL: "Thermal runaway is a safety hazard that battery design and management try to prevent.",
        UNDERGRADUATE: "Frequency regulation needs fast response and many shallow cycles, which batteries and flywheels provide.",
        GRADUATE: "Pumped hydro is mature but slow and costly to develop, needing revenue certainty.",
        PHD: "Because long-duration assets cycle rarely, cheap energy capacity matters more than efficiency.",
      },
    },
    {
      id: 'rstorq5',
      question: {
        ELEMENTARY: "What is a battery?",
        MIDDLE_SCHOOL: "Which storage type is good for storing energy for weeks or seasons?",
        HIGH_SCHOOL: "What is round-trip efficiency?",
        UNDERGRADUATE: "What is depth of discharge?",
        GRADUATE: "What is revenue stacking?",
        PHD: "What is a limitation of data-driven battery degradation models?",
      },
      options: {
        ELEMENTARY: ["A box of special materials that holds energy and gives it back as electricity", "A kind of light bulb", "A wire on a pole", "A spinning wind turbine"],
        MIDDLE_SCHOOL: ["Hydrogen made using electricity", "A flywheel", "A small phone battery", "A rubber band"],
        HIGH_SCHOOL: ["The percentage of energy recovered after storing and releasing it", "The distance energy travels in wires", "How many times a battery is charged", "The speed of a spinning turbine"],
        UNDERGRADUATE: ["The fraction of a battery's capacity used in a cycle", "How deep a battery is buried", "The thickness of the electrodes", "The time a battery takes to charge"],
        GRADUATE: ["Earning income from several services from one asset", "Stacking batteries on top of each other", "Raising electricity prices", "Selling the same contract twice"],
        PHD: ["They extrapolate poorly beyond their training conditions", "They cannot use any data", "They are always less accurate than physics models", "They require no measurements"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Batteries hold energy using special materials and release it as electricity when needed.",
        MIDDLE_SCHOOL: "Hydrogen can be stored for long periods and turned back into electricity later.",
        HIGH_SCHOOL: "Round-trip efficiency shows how much energy is lost through storing and releasing it.",
        UNDERGRADUATE: "Deeper discharge in each cycle generally speeds up battery degradation.",
        GRADUATE: "Combining services like arbitrage, reserves and capacity improves storage economics.",
        PHD: "Data models can be accurate within their training range but struggle with new chemistries or conditions.",
      },
    },
  ],
}

export default expansion
