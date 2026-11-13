import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'hydropower',
  lessons: [
    {
      id: 're-hydro-1',
      title: 'The Power of Moving Water',
      content: {
        ELEMENTARY: `
<h2>Water That Makes Electricity</h2>
<p>Have you ever put your hand in a fast stream and felt the water push against it? Moving water is strong! People have used that push for a very long time. Long ago, water turned big wooden wheels to grind grain into flour. Today, moving water can make electricity for homes, schools and hospitals. We call this <em>hydropower</em>.</p>

<h3>How Does It Work?</h3>
<p>Imagine a river flowing down a hill. Engineers build a strong wall across the river called a dam. The dam holds back a big lake of water. When the water is let out, it rushes down through a tunnel and spins a giant wheel called a turbine. The spinning turbine turns a machine called a generator, and the generator makes electricity. Then the water flows back into the river.</p>
<ul>
<li><strong>Dam:</strong> a strong wall across a river that holds water back in a big lake</li>
<li><strong>Reservoir:</strong> the big lake that forms behind a dam where water is stored</li>
<li><strong>Turbine:</strong> a giant wheel with blades that spins when water pushes on it</li>
<li><strong>Generator:</strong> a machine that turns spinning motion into electricity</li>
<li><strong>Hydropower:</strong> electricity made from the energy of moving water</li>
</ul>

<h3>Why Is It Clean?</h3>
<p>Hydropower does not burn anything, so it does not make smoky air. And the water keeps coming back, because the sun warms water into clouds, clouds make rain and snow, and rain fills the rivers again. That is why we call hydropower <em>renewable</em>: nature keeps refilling it.</p>

<h3>Rivers Are Homes Too</h3>
<p>Rivers are home to fish, frogs, birds and many plants. A big dam can block fish that swim up the river to lay their eggs. Smart engineers build special paths called fish ladders, like water staircases, so fish can get past. Many communities also care deeply about their rivers, so people need to listen to each other before building a dam.</p>

<h3>Try It Yourself</h3>
<ol>
<li>Ask a grown-up to help you hold a paper or plastic pinwheel under a gently running tap. Watch the water make it spin!</li>
<li>Pour water slowly, then faster. Which way makes the wheel spin quicker?</li>
<li>Draw a picture of a river, a dam, a turbine and a house with its lights on.</li>
</ol>
<p>The faster and higher the water falls, the more power it has. Nature really is powerful!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Dams and Rivers Make Clean Power</h2>
<p>Hydropower is one of the oldest and largest sources of renewable electricity in the world. It turns the energy of falling or flowing water into electricity. To understand it, we need two ideas from science: <em>potential energy</em> and <em>kinetic energy</em>.</p>

<h3>From Height to Motion to Electricity</h3>
<p>Water stored high up behind a dam has potential energy, which is stored energy because of its height. When the water is released and falls, that stored energy turns into kinetic energy, the energy of motion. The moving water pushes the blades of a turbine, the turbine spins a generator, and the generator produces electricity. This chain of changes is called an <em>energy transformation</em>.</p>
<ol>
<li>Water collects in a reservoir behind the dam.</li>
<li>Gates open and water flows down a large pipe called a penstock.</li>
<li>The fast water spins the turbine.</li>
<li>The turbine turns a generator that makes electricity.</li>
<li>Power lines carry the electricity to homes and businesses.</li>
<li>The water flows out and continues down the river.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Potential energy:</strong> stored energy an object has because of its position or height</li>
<li><strong>Kinetic energy:</strong> the energy an object has because it is moving</li>
<li><strong>Penstock:</strong> a large pipe that carries water from the reservoir down to the turbine</li>
<li><strong>Head:</strong> the height the water falls from the reservoir surface to the turbine</li>
<li><strong>Flow:</strong> how much water passes through the turbine every second</li>
<li><strong>Renewable energy:</strong> energy from sources that nature refills, like rain and sunlight</li>
</ul>

<h3>Head and Flow: The Two Secrets</h3>
<p>The power a hydro plant can make depends on two things: how far the water falls (the head) and how much water flows (the flow). A tall dam with a small river can make about as much power as a short dam on a huge river. Double either one, and you roughly double the power.</p>

<h3>Different Kinds of Hydropower</h3>
<table>
<thead><tr><th>Type</th><th>How it works</th></tr></thead>
<tbody>
<tr><td>Reservoir (storage) dam</td><td>A dam stores a large lake and releases water when power is needed</td></tr>
<tr><td>Run-of-river</td><td>Uses the natural flow of a river with little or no storage</td></tr>
<tr><td>Pumped storage</td><td>Pumps water uphill when power is cheap and lets it fall back when power is needed</td></tr>
<tr><td>Small or micro hydro</td><td>Tiny systems on streams that can power a farm or a village</td></tr>
</tbody>
</table>

<h3>Benefits and Problems</h3>
<p>Hydropower produces no smoke while running and can be switched on quickly when people need more electricity. Reservoirs can also store water for farms and help control floods. But large dams flood land, sometimes including farms, forests and the homes of people and wildlife. They change the temperature and flow of rivers and can block fish. Good projects study these effects carefully and involve local and Indigenous communities in decisions about their rivers.</p>
`,
        HIGH_SCHOOL: `
<h2>Hydroelectric Systems and Dam Engineering</h2>
<p>A hydroelectric plant is a machine for converting the gravitational potential energy of water into electrical energy. Modern plants are remarkably efficient: the best turbines and generators convert around nine-tenths of the water's available energy into electricity, far better than any fuel-burning power plant. Yet designing a plant means balancing engineering, geology, ecology and the needs of people who live along the river.</p>

<h3>The Physics of Hydropower</h3>
<p>The power available from falling water is proportional to the water's density, the acceleration due to gravity, the flow rate and the head, multiplied by the overall efficiency of the equipment. In words: more water falling a greater height means more power. Because water is dense, even modest heads with large flows produce enormous power, which is why big rivers host some of the largest power stations on Earth.</p>
<ul>
<li><strong>Gross head:</strong> the total vertical drop between the reservoir surface and the tailwater below the plant</li>
<li><strong>Net head:</strong> the head that remains after subtracting friction losses in pipes and intakes</li>
<li><strong>Tailrace:</strong> the channel that carries water away from the turbine and back to the river</li>
<li><strong>Spillway:</strong> a structure that safely releases excess water during floods without passing it through turbines</li>
<li><strong>Efficiency:</strong> the fraction of the water's energy that ends up as electricity</li>
</ul>

<h3>Choosing a Turbine</h3>
<p>Different turbines suit different combinations of head and flow:</p>
<table>
<thead><tr><th>Turbine</th><th>Type</th><th>Best suited to</th></tr></thead>
<tbody>
<tr><td>Pelton wheel</td><td>Impulse: jets of water strike spoon-shaped buckets</td><td>High head, lower flow (mountain sites)</td></tr>
<tr><td>Francis</td><td>Reaction: water flows inward through curved blades fully submerged</td><td>Medium head, medium flow; the most widely used type</td></tr>
<tr><td>Kaplan</td><td>Reaction: propeller with adjustable blades</td><td>Low head, high flow (large lowland rivers)</td></tr>
<tr><td>Crossflow and small turbines</td><td>Simple, robust designs</td><td>Small and micro hydro on streams</td></tr>
</tbody>
</table>

<h3>Dam Engineering</h3>
<p>Dams come in several forms. <em>Gravity dams</em> resist water pressure with sheer weight of concrete. <em>Arch dams</em> curve upstream and push the load into the canyon walls, so they need strong rock on both sides. <em>Embankment dams</em> are built from compacted earth or rock and are common in wide valleys. Every design must handle extreme floods, earthquakes and the slow seepage of water through foundations, so dams are monitored closely throughout their lives.</p>

<h3>Trade-offs</h3>
<p>Hydropower offers low operating emissions, long lifetimes and the ability to change output within minutes. But reservoirs flood land and can displace communities, block migrating fish, trap sediment that would otherwise nourish downstream deltas, and alter water temperature and oxygen. In some warm regions, decaying flooded vegetation releases methane, a powerful greenhouse gas. The impacts vary enormously from one site to the next.</p>

<h3>Solutions and Real-World Applications</h3>
<ol>
<li><strong>Upgrading old plants:</strong> new turbines in existing dams can add power without new flooding.</li>
<li><strong>Adding turbines to existing dams:</strong> many dams built for irrigation or flood control produce no electricity yet.</li>
<li><strong>Fish passage:</strong> ladders, lifts and fish-friendly turbines help fish move past dams.</li>
<li><strong>Environmental flows:</strong> releasing water in patterns that mimic natural seasons supports river life.</li>
<li><strong>Pumped storage:</strong> pairing with wind and solar to store surplus electricity.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Hydropower: Capacity, Impacts and Storage</h2>
<p>Hydropower is often described as a mature technology, but evaluating a hydro project is far from simple. Output depends on hydrology that varies year to year, environmental impacts are highly site-specific, and the role of a plant on the grid can matter as much as its annual energy. This lesson develops the analytical tools to assess capacity factors, environmental trade-offs and pumped storage.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Installed capacity:</strong> the maximum electrical output a plant can deliver, usually stated in megawatts</li>
<li><strong>Capacity factor:</strong> the actual energy produced over a period divided by what the plant would produce running at full capacity the whole time</li>
<li><strong>Flow duration curve:</strong> a graph showing the percentage of time a river flow is equaled or exceeded, used to size turbines</li>
<li><strong>Firm energy:</strong> the energy a plant can reliably supply even in dry years</li>
<li><strong>Round-trip efficiency:</strong> the fraction of electricity used to pump water uphill that is recovered when it flows back down</li>
<li><strong>Environmental flow:</strong> the minimum quantity and seasonal pattern of water released to sustain downstream ecosystems</li>
</ul>

<h3>Why Capacity Factors Vary</h3>
<p>Hydropower capacity factors commonly fall somewhere between about a third and a half, though individual plants range much more widely. That is not a sign of poor performance. Designers deliberately install more turbine capacity than the average flow could keep busy, so the plant can concentrate output into hours of high demand. A plant with large storage might run hard in the evening peak and idle at night; a run-of-river plant follows the river and swings with seasons. Comparing hydro plants by capacity factor alone therefore misses their value.</p>
<table>
<thead><tr><th>Plant type</th><th>Storage</th><th>Typical role</th><th>Capacity factor drivers</th></tr></thead>
<tbody>
<tr><td>Large reservoir</td><td>Weeks to seasons</td><td>Peaking, balancing, seasonal shifting</td><td>Inflow, release rules, market prices</td></tr>
<tr><td>Run-of-river</td><td>Hours or none</td><td>Baseload-like when flows are steady</td><td>Seasonal hydrology, turbine sizing</td></tr>
<tr><td>Pumped storage</td><td>Hours to days</td><td>Storage and grid services</td><td>Price spreads and system needs; a net consumer of energy</td></tr>
</tbody>
</table>

<h3>Environmental Impact Assessment</h3>
<p>Impacts can be grouped by mechanism. <em>Habitat fragmentation</em> blocks migratory fish and isolates populations. <em>Flow alteration</em> changes the timing and size of floods that shape channels and floodplains. <em>Sediment trapping</em> starves downstream reaches and deltas of sand and silt, causing erosion and subsidence. <em>Water quality changes</em> include thermal stratification in reservoirs and low-oxygen releases. <em>Reservoir greenhouse gas emissions</em> arise from decomposing organic matter and are generally highest in shallow tropical reservoirs with large flooded areas relative to power output. A useful screening ratio is power produced per unit of area flooded: projects that flood large areas for little power tend to have the worst impacts.</p>

<h3>Pumped Storage Hydropower</h3>
<p>Pumped storage moves water between an upper and a lower reservoir. It has long supplied the great majority of the world's grid-scale energy storage capacity. Round-trip efficiency is typically in the range of roughly 70 to 85 percent, so it consumes more electricity than it returns, but it buys cheap surplus power and sells during peaks. Variable-speed units can regulate power while pumping as well as generating, increasing flexibility. Closed-loop designs, which are not connected to a natural river, reduce aquatic impacts.</p>

<h3>Applied Method: Screening a Hydro Site</h3>
<ol>
<li>Estimate available head and build a flow duration curve from historical records.</li>
<li>Size turbines against the flow curve and calculate expected annual energy and capacity factor.</li>
<li>Test output in dry years to find firm energy, and consider climate-driven changes in runoff.</li>
<li>Screen impacts: flooded area per megawatt, fish migration, sediment, downstream users.</li>
<li>Identify affected communities and rights holders early, including Indigenous nations.</li>
<li>Compare with alternatives such as retrofitting existing dams or adding storage elsewhere.</li>
</ol>
`,
        GRADUATE: `
<h2>Hydropower in Modern Power Systems</h2>
<p>As grids absorb growing shares of wind and solar, the value of hydropower is shifting from bulk energy toward flexibility. Graduate-level analysis treats a hydro fleet as a system asset embedded in markets, water governance and aging infrastructure. This lesson examines the grid services hydro provides, the distinct role of run-of-river plants, and the policy and investment questions surrounding modernization.</p>

<h3>Grid Services</h3>
<ul>
<li><strong>Frequency regulation:</strong> fast adjustment of output to keep grid frequency close to its target value</li>
<li><strong>Spinning reserve:</strong> capacity that is online and synchronized, ready to respond within seconds or minutes to a sudden loss</li>
<li><strong>Inertia:</strong> resistance to rapid frequency change provided by the heavy rotating mass of synchronous generators</li>
<li><strong>Black start capability:</strong> the ability to restart without outside power and help re-energize a grid after a blackout</li>
<li><strong>Ramping:</strong> rapidly increasing or decreasing output to follow swings in demand or variable renewables</li>
<li><strong>Ancillary services market:</strong> a market or tariff that pays resources for reliability services rather than energy alone</li>
</ul>
<p>Storage hydro can shift water across hours or seasons, making it an ideal partner for variable renewables. However, frequent cycling increases wear on turbines, seals and generator windings, and rapid flow changes cause <em>hydropeaking</em> downstream, which strands fish and erodes banks. Operators increasingly face a three-way trade-off between revenue, equipment life and river ecology.</p>

<h3>Run-of-River Systems</h3>
<p>Run-of-river plants divert or pass river flow with minimal storage. They avoid large reservoirs and associated flooding, but they are not impact-free: diversion schemes can leave long reaches of river with greatly reduced flow, and weirs still fragment habitat. Their output follows hydrology, so they contribute energy more than flexibility. In planning, run-of-river resources are often modeled like other variable renewables, with seasonal profiles and correlated dry-year risk.</p>

<h3>Modernization and Investment</h3>
<table>
<thead><tr><th>Option</th><th>Benefit</th><th>Key barrier</th></tr></thead>
<tbody>
<tr><td>Turbine and generator refurbishment</td><td>Higher efficiency and capacity at existing sites</td><td>Outage time and capital cost</td></tr>
<tr><td>Digital controls and condition monitoring</td><td>Better scheduling, predictive maintenance</td><td>Cybersecurity and workforce skills</td></tr>
<tr><td>Powering non-powered dams</td><td>New capacity without new reservoirs</td><td>Site-by-site economics, ownership complexity</td></tr>
<tr><td>Conversion to pumped storage</td><td>Adds storage to the system</td><td>Revenue uncertainty in energy-only markets</td></tr>
<tr><td>Dam removal</td><td>River restoration where the asset is obsolete</td><td>Sediment management, stakeholder conflict</td></tr>
</tbody>
</table>
<p>Much of the world's hydro fleet is decades old. Relicensing processes, where they exist, provide recurring windows to renegotiate environmental flows, fish passage and recreation. These decisions can reshape a plant's economics as much as any technology upgrade.</p>

<h3>Markets and Valuation</h3>
<p>Energy-only markets tend to undervalue hydro flexibility because they price megawatt-hours rather than the ability to respond. Long-duration storage revenues depend on uncertain price spreads, which complicates financing for projects lasting many decades. Policy responses include capacity mechanisms, explicit procurement of flexibility and storage, and contracts that share revenue risk.</p>

<h3>Equity and Governance</h3>
<p>Large hydro has a long history of displacing communities, frequently Indigenous peoples and rural residents, often with inadequate consent or compensation. Contemporary good practice emphasizes free, prior and informed consent, benefit-sharing agreements, transboundary cooperation on shared rivers, and transparent dam-safety governance.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the system value: energy, capacity, flexibility and resilience contributions.</li>
<li>Model operations under multiple hydrological and climate scenarios.</li>
<li>Price environmental constraints and hydropeaking limits explicitly.</li>
<li>Assess institutional pathways: licensing, market rules, water rights and consent.</li>
<li>Compare modernization against new build and alternative flexibility resources.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Hydropower Science</h2>
<p>Hydropower research now centers less on turbines than on rivers. The defining questions concern how to reconcile power generation with fish migration and sediment continuity, and how a warming climate will alter the water supply on which entire hydro-dependent grids rely. This lesson surveys research on fish passage technologies, sediment management and climate impacts on hydrology, together with the modeling methods and debates that shape the field.</p>

<h3>Fish Passage Science</h3>
<ul>
<li><strong>Upstream passage:</strong> structures such as pool-and-weir ladders, vertical slot fishways, nature-like bypass channels and fish lifts that help fish ascend past barriers</li>
<li><strong>Downstream passage:</strong> routes such as surface collectors, screens and spillway releases that help juvenile and adult fish travel past dams</li>
<li><strong>Passage efficiency:</strong> the proportion of fish approaching a barrier that successfully pass it, often measured with telemetry</li>
<li><strong>Fish-friendly turbine:</strong> a turbine designed to reduce blade strike, shear and rapid pressure change that injure fish</li>
<li><strong>Barotrauma:</strong> injury caused by rapid decompression as fish pass through low-pressure zones in turbines</li>
<li><strong>Cumulative passage loss:</strong> the multiplied effect of small losses at each of many dams along a migration route</li>
</ul>
<p>A recurring finding is that facilities designed for one species, historically strong-swimming salmonids, can perform poorly for others such as eels, sturgeon and many tropical species. Research uses telemetry, computational fluid dynamics of fishway hydraulics and biological response models that link pressure, shear and strike probability to survival. Cumulative effects matter: modest per-dam losses compound along a chain of dams into large population-level impacts.</p>

<h3>Sediment Management</h3>
<p>Reservoirs trap sediment, gradually losing storage while starving downstream reaches. Management strategies include upstream catchment measures, sediment bypass tunnels, sluicing during high flows, drawdown flushing, dredging and density current venting. Each has trade-offs: flushing can release pulses of sediment and low-oxygen water harmful to aquatic life. Research combines morphodynamic models with field monitoring to optimize timing and to evaluate system-scale sediment budgets, including effects on sinking deltas.</p>

<h3>Climate Impacts on Hydrology</h3>
<p>Climate change alters precipitation, evaporation, snowpack and glacier storage. In snow-dominated basins, earlier melt shifts runoff toward spring and away from summer demand peaks. In glacier-fed basins, melt may first rise and later decline once glaciers shrink past a turning point, sometimes called peak water. Changing drought frequency threatens firm energy in hydro-dependent systems. Projections combine climate model ensembles, downscaling, hydrological models and reservoir operation models, and uncertainty compounds at each step.</p>
<table>
<thead><tr><th>Modeling choice</th><th>Methodological debate</th></tr></thead>
<tbody>
<tr><td>Statistical versus dynamical downscaling</td><td>Resolution and physical consistency versus computational cost</td></tr>
<tr><td>Hydrological model structure</td><td>Structural uncertainty can rival climate model spread</td></tr>
<tr><td>Stationary versus adaptive operating rules</td><td>Fixed historical rules may understate adaptive capacity or overstate it</td></tr>
<tr><td>Ensemble weighting</td><td>Whether to weight climate models by historical skill</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Reservoir greenhouse gas accounting remains contested, particularly how to attribute emissions to hydropower in multi-purpose reservoirs and how to separate pre-existing natural emissions from those caused by impoundment. Researchers also debate whether new large dams in biodiverse, free-flowing basins can be justified on climate grounds, and how to compare diffuse biodiversity losses with concentrated carbon benefits.</p>

<h3>Systems Planning Methods</h3>
<p>Basin-scale strategic planning optimizes the siting of dam portfolios rather than evaluating projects one at a time. Multi-objective approaches trace frontiers among energy, sediment delivery, fish connectivity and river length left free-flowing. A common result is that coordinated siting achieves much of the same energy with substantially lower ecological cost than ad hoc development.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Passage solutions validated for non-salmonid and tropical species.</li>
<li>Integrated sediment and power optimization over reservoir lifetimes.</li>
<li>Coupled climate, hydrology and grid models for hydro-dependent systems.</li>
<li>Consistent life-cycle accounting for reservoir emissions in multi-use systems.</li>
<li>Methods for embedding Indigenous knowledge and consent within basin planning.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rhq1',
      question: {
        ELEMENTARY: 'What spins when water rushes through a hydropower dam?',
        MIDDLE_SCHOOL: 'What kind of energy does water have when it is stored high up behind a dam?',
        HIGH_SCHOOL: 'Which turbine is best suited to a high head and lower flow?',
        UNDERGRADUATE: 'What does the capacity factor of a hydro plant measure?',
        GRADUATE: 'What is hydropeaking?',
        PHD: 'What does passage efficiency measure in fish passage research?',
      },
      options: {
        ELEMENTARY: ['A turbine', 'A kite', 'A rainbow', 'A bicycle bell'],
        MIDDLE_SCHOOL: ['Potential energy', 'Sound energy', 'Chemical energy', 'Light energy'],
        HIGH_SCHOOL: ['Pelton wheel', 'Kaplan turbine', 'A wind turbine', 'A solar panel'],
        UNDERGRADUATE: ['Actual energy produced divided by what full output all the time would produce', 'The height of the dam', 'The volume of the reservoir', 'The number of turbines installed'],
        GRADUATE: ['Rapid changes in released flow from flexible operation that harm downstream ecology', 'Building dams on mountain peaks', 'Running plants only at night', 'Storing water for a full year'],
        PHD: ['The proportion of fish approaching a barrier that successfully pass it', 'The speed of water in a turbine', 'The electrical efficiency of the generator', 'The number of dams in a basin'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Rushing water pushes on the blades of a turbine and makes it spin.',
        MIDDLE_SCHOOL: 'Water held high up has potential energy because of its height.',
        HIGH_SCHOOL: 'Pelton wheels use jets of water striking buckets, ideal for high head sites in mountains.',
        UNDERGRADUATE: 'Capacity factor compares real output to the maximum possible over the same period.',
        GRADUATE: 'Hydropeaking is the downstream flow fluctuation caused by quickly ramping output up and down.',
        PHD: 'Passage efficiency is the share of fish that approach a barrier and get past it.',
      },
    },
    {
      id: 'rhq2',
      question: {
        ELEMENTARY: 'Why is hydropower called renewable?',
        MIDDLE_SCHOOL: 'Which two things decide how much power a hydro plant can make?',
        HIGH_SCHOOL: 'What is the job of a spillway?',
        UNDERGRADUATE: 'Why do hydro plants often have modest capacity factors?',
        GRADUATE: 'Why do energy-only markets tend to undervalue hydropower?',
        PHD: 'Why do cumulative passage losses matter on rivers with many dams?',
      },
      options: {
        ELEMENTARY: ['Because it uses up all the water', 'Because rain and snow keep refilling the rivers', 'Because it burns wood', 'Because it only works at night'],
        MIDDLE_SCHOOL: ['Color and temperature of the water', 'Head and flow', 'The number of fish and birds', 'The size of the power lines'],
        HIGH_SCHOOL: ['To make the dam look nicer', 'To safely release excess water during floods', 'To spin the generator faster', 'To store electricity'],
        UNDERGRADUATE: ['Turbines are always broken', 'Extra turbine capacity is installed deliberately to concentrate output into high-demand hours', 'Water cannot flow at night', 'Hydropower is illegal in most places'],
        GRADUATE: ['Hydro produces no energy', 'They pay for megawatt-hours rather than the ability to respond quickly', 'Hydro is always the most expensive option', 'Markets forbid hydro plants'],
        PHD: ['Losses at each dam cancel out', 'Small losses at each dam multiply into large population-level impacts', 'Fish only meet one dam', 'Passage losses only affect plants'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The water cycle keeps bringing rain and snow that refill rivers, so the water keeps coming.',
        MIDDLE_SCHOOL: 'More height (head) and more water (flow) both mean more power.',
        HIGH_SCHOOL: 'Spillways let floodwater pass safely without going through the turbines.',
        UNDERGRADUATE: 'Designers oversize turbines so plants can deliver more power when it is most valuable.',
        GRADUATE: 'Flexibility services are not fully priced when markets reward energy volume alone.',
        PHD: 'Each dam removes a fraction of migrants, and these fractions compound along the route.',
      },
    },
    {
      id: 'rhq3',
      question: {
        ELEMENTARY: 'What helps fish get past a dam?',
        MIDDLE_SCHOOL: 'What is a penstock?',
        HIGH_SCHOOL: 'Which kind of dam curves upstream and pushes the load into the canyon walls?',
        UNDERGRADUATE: 'What is the typical round-trip efficiency range of pumped storage?',
        GRADUATE: 'What is black start capability?',
        PHD: 'In glacier-fed basins, what is "peak water"?',
      },
      options: {
        ELEMENTARY: ['A fishing rod', 'A big net', 'A fish ladder', 'A wind turbine'],
        MIDDLE_SCHOOL: ['A type of fish', 'A power line', 'A large pipe that carries water down to the turbine', 'A small lake'],
        HIGH_SCHOOL: ['Gravity dam', 'Embankment dam', 'Arch dam', 'Beaver dam'],
        UNDERGRADUATE: ['About 10 to 20 percent', 'Exactly 100 percent', 'Roughly 70 to 85 percent', 'More than 150 percent'],
        GRADUATE: ['Running only at night', 'Painting turbines black', 'Restarting without outside power to help re-energize a grid after a blackout', 'Burning coal to start a dam'],
        PHD: ['The highest point of a dam', 'A flood once every hundred years', 'A turning point after which glacier meltwater declines as glaciers shrink', 'The maximum turbine flow'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A fish ladder is like a water staircase that lets fish swim past the dam.',
        MIDDLE_SCHOOL: 'The penstock carries water from the reservoir down to spin the turbine.',
        HIGH_SCHOOL: 'Arch dams curve upstream and transfer water pressure into strong rock on each side.',
        UNDERGRADUATE: 'Pumped storage returns roughly 70 to 85 percent of the energy used to pump water uphill.',
        GRADUATE: 'Hydro plants can often start on their own and help restore power after a blackout.',
        PHD: 'Melt first rises as glaciers retreat, then falls once they shrink past a turning point.',
      },
    },
    {
      id: 'rhq4',
      question: {
        ELEMENTARY: 'What is the big lake behind a dam called?',
        MIDDLE_SCHOOL: 'Which type of hydropower pumps water uphill and lets it fall back later?',
        HIGH_SCHOOL: 'Which is a way to add hydropower without flooding new land?',
        UNDERGRADUATE: 'Which reservoirs generally have the highest greenhouse gas emissions?',
        GRADUATE: 'What is a key impact of run-of-river diversion schemes?',
        PHD: 'What is barotrauma in fish passing through turbines?',
      },
      options: {
        ELEMENTARY: ['A puddle', 'A cloud', 'A waterfall', 'A reservoir'],
        MIDDLE_SCHOOL: ['Micro hydro', 'Run-of-river', 'Tidal power', 'Pumped storage'],
        HIGH_SCHOOL: ['Building more spillways', 'Draining the river', 'Using smaller power lines', 'Adding turbines to existing dams that make no electricity'],
        UNDERGRADUATE: ['Deep mountain reservoirs in cold climates', 'Reservoirs with no water', 'Reservoirs made of concrete', 'Shallow tropical reservoirs with large flooded areas'],
        GRADUATE: ['They create huge new lakes', 'They burn fuel', 'They always improve fish habitat', 'They can leave long river reaches with greatly reduced flow'],
        PHD: ['Injury from blades only', 'Hearing loss from noise', 'Starvation behind the dam', 'Injury from rapid decompression in low-pressure zones'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'The reservoir is the big lake where water is stored behind the dam.',
        MIDDLE_SCHOOL: 'Pumped storage moves water uphill when power is cheap and releases it when needed.',
        HIGH_SCHOOL: 'Many existing dams were built for irrigation or flood control and could add turbines.',
        UNDERGRADUATE: 'Decomposing flooded vegetation in warm, shallow reservoirs releases more methane.',
        GRADUATE: 'Diverting water through a channel can leave the natural riverbed with little flow.',
        PHD: 'Barotrauma is caused by sudden pressure drops as fish pass through turbines.',
      },
    },
    {
      id: 'rhq5',
      question: {
        ELEMENTARY: 'What can you do to see water power at home with a grown-up?',
        MIDDLE_SCHOOL: 'What is one problem large dams can cause?',
        HIGH_SCHOOL: 'Why is hydropower useful for matching changing electricity demand?',
        UNDERGRADUATE: 'What is a flow duration curve used for?',
        GRADUATE: 'Why are relicensing processes important for existing hydro plants?',
        PHD: 'What does basin-scale strategic planning of dam portfolios often show?',
      },
      options: {
        ELEMENTARY: ['Hold a pinwheel under a gently running tap', 'Leave all the lights on', 'Pour juice on the floor', 'Turn up the heater'],
        MIDDLE_SCHOOL: ['They can block fish and flood land', 'They make the air smoky', 'They make rivers disappear forever', 'They stop it from raining'],
        HIGH_SCHOOL: ['Its output can be changed within minutes', 'It can never be switched off', 'It only runs in winter', 'It needs coal to start'],
        UNDERGRADUATE: ['Sizing turbines by showing how often each flow is equaled or exceeded', 'Measuring electricity prices', 'Counting fish', 'Designing power lines'],
        GRADUATE: ['They offer windows to renegotiate flows, fish passage and other conditions', 'They decide the color of the dam', 'They remove all environmental rules', 'They only change the plant name'],
        PHD: ['Coordinated siting can achieve similar energy with much lower ecological cost', 'Building dams randomly is best', 'Only one dam per continent is possible', 'Ecological costs cannot be measured'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Running water pushes the pinwheel and makes it spin, just like a turbine.',
        MIDDLE_SCHOOL: 'Large dams can flood homes and habitats and block fish from swimming upstream.',
        HIGH_SCHOOL: 'Hydro plants can ramp output up or down quickly by adjusting water flow.',
        UNDERGRADUATE: 'The curve shows how often flows occur, guiding how big the turbines should be.',
        GRADUATE: 'Relicensing lets regulators and communities revisit environmental and social conditions.',
        PHD: 'Planning many dams together reveals siting choices with far smaller ecological harm.',
      },
    },
  ],
}

export default expansion
