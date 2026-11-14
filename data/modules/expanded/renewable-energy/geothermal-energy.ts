import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'geothermal-energy',
  lessons: [
    {
      id: 're-geo-1',
      title: "Earth's Inner Heat",
      content: {
        ELEMENTARY: `
<h2>The Warm Heart of Our Planet</h2>
<p>Did you know the Earth is warm inside? If you could dig down very, very deep, it would get hotter and hotter. Far down at the center of the Earth, it is about as hot as the surface of the Sun! This heat inside the Earth is called <em>geothermal</em> heat. "Geo" means Earth and "thermal" means heat. So geothermal means Earth heat!</p>

<h3>Where Do We See Earth's Heat?</h3>
<p>Sometimes the heat comes all the way up to the surface. You can see it in a few special places:</p>
<ul>
<li><strong>Hot spring:</strong> a pool of water that comes up from the ground already warm, like a natural bath</li>
<li><strong>Geyser:</strong> a hot spring that shoots water and steam high into the air from time to time</li>
<li><strong>Volcano:</strong> a mountain where melted rock from deep inside the Earth can come out</li>
<li><strong>Magma:</strong> rock so hot that it has melted into a glowing, thick liquid</li>
<li><strong>Steam:</strong> the hot cloud that rises when water gets very hot</li>
</ul>
<p>People around the world, including many Indigenous peoples, have used warm springs for bathing, cooking and staying warm for a very long time.</p>

<h3>Making Electricity From Earth's Heat</h3>
<p>In some places, the hot water and steam are close enough to reach with a deep hole called a well. The steam rushes up the well and spins a big wheel called a turbine. The turbine helps make electricity. Then the water is put back into the ground to heat up again. Geothermal power works day and night, rain or shine, because the Earth is always warm inside.</p>

<h3>Keeping Houses Cozy</h3>
<p>Even just a little way under your backyard, the ground stays about the same temperature all year. A machine called a heat pump can use that steady ground warmth to heat a house in winter and help cool it in summer. Some whole towns use warm water from underground to heat their homes and even their sidewalks!</p>

<h3>Be a Heat Detective</h3>
<ol>
<li>On a hot day, feel the grass, then feel a little bit under the soil with a grown-up. Is it cooler?</li>
<li>On a cold day, try again. Does the soil feel warmer than the air?</li>
<li>Draw the Earth like a peach: a thin skin, a thick middle, and a hot pit in the center.</li>
</ol>
<p>The Earth keeps a big secret store of warmth, and we are learning to use it gently and wisely!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Using Earth's Internal Heat for Power and Heating</h2>
<p>Beneath your feet, the Earth holds an enormous amount of heat. Some of it is left over from when the planet formed, and some is constantly produced by the slow breakdown of radioactive elements in rocks. This heat flows outward toward the surface all the time. Geothermal energy is the use of this heat to make electricity or to warm and cool buildings.</p>

<h3>The Layers of the Earth</h3>
<p>The Earth is built in layers. On top is the thin <em>crust</em> we live on. Below is the thick, hot <em>mantle</em>. At the center is the <em>core</em>, the hottest part. The deeper you go, the hotter it gets. In most places temperature rises steadily with depth, but in some places, often near the edges of tectonic plates and volcanoes, very hot rock lies much closer to the surface. Those are the best places for geothermal power.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Crust:</strong> the thin, rocky outer layer of the Earth where we live</li>
<li><strong>Mantle:</strong> the thick layer of hot rock below the crust</li>
<li><strong>Tectonic plates:</strong> giant slabs of the Earth's crust that slowly move and meet at boundaries</li>
<li><strong>Geothermal reservoir:</strong> an underground area of hot water and steam trapped in cracked or porous rock</li>
<li><strong>Heat pump:</strong> a machine that moves heat from one place to another, such as from the ground into a house</li>
<li><strong>Reinjection:</strong> pumping used geothermal water back underground so it can heat up again</li>
</ul>

<h3>Geothermal Power Plants</h3>
<ol>
<li>Wells are drilled deep into a hot underground reservoir.</li>
<li>Hot water and steam rise up the wells under pressure.</li>
<li>The steam spins a turbine connected to a generator.</li>
<li>The generator produces electricity.</li>
<li>Cooled water is pumped back underground to be reheated.</li>
</ol>

<h3>Three Ways to Use Earth Heat</h3>
<table>
<thead><tr><th>Use</th><th>Temperature needed</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Electricity</td><td>High (very hot water or steam)</td><td>Geothermal power plants near volcanic areas</td></tr>
<tr><td>Direct heating</td><td>Medium (warm to hot water)</td><td>Heating homes, greenhouses and swimming pools</td></tr>
<tr><td>Ground-source heat pumps</td><td>Low (normal ground temperature)</td><td>Heating and cooling houses almost anywhere</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Unlike sunshine and wind, geothermal heat is available all day and all night in every season. Geothermal plants release far less carbon dioxide than fossil fuel plants and take up little land. Iceland, which sits on volcanic rock, heats most of its homes with geothermal water. The challenges are cost and location: drilling deep wells is expensive, and the hottest resources are found only in certain regions. Scientists are working on ways to reach Earth's heat in many more places.</p>
`,
        HIGH_SCHOOL: `
<h2>Geothermal Power Plants, Heat Pumps and Resource Assessment</h2>
<p>Geothermal energy taps the heat stored in the Earth's crust. Unlike wind and solar, it delivers steady output around the clock, which makes it valuable for a clean grid. But using it well requires understanding geology, thermodynamics and how to manage an underground reservoir over decades.</p>

<h3>Where the Heat Comes From</h3>
<p>Heat flows from the hot interior toward the surface. On average, temperature increases by roughly 25 to 30 degrees Celsius for every kilometer of depth, a rate called the <em>geothermal gradient</em>. In volcanic regions, along plate boundaries and above thin crust, the gradient is much steeper, bringing high temperatures within reach of drilling. A usable conventional resource needs three things: heat, water (or steam) and permeable rock that lets fluid flow.</p>
<ul>
<li><strong>Geothermal gradient:</strong> the rate at which temperature increases with depth below the surface</li>
<li><strong>Permeability:</strong> how easily fluid can move through rock via connected pores and fractures</li>
<li><strong>Production well:</strong> a well that brings hot fluid up from the reservoir to the plant</li>
<li><strong>Injection well:</strong> a well that returns cooled fluid to the reservoir to maintain pressure</li>
<li><strong>Working fluid:</strong> a fluid with a low boiling point used in binary plants to drive the turbine</li>
</ul>

<h3>Types of Geothermal Power Plants</h3>
<table>
<thead><tr><th>Plant type</th><th>How it works</th><th>Resource needed</th></tr></thead>
<tbody>
<tr><td>Dry steam</td><td>Steam from the reservoir goes straight to the turbine</td><td>Rare reservoirs that produce mostly steam</td></tr>
<tr><td>Flash steam</td><td>High-pressure hot water is depressurized so part of it flashes into steam</td><td>Very hot water reservoirs; the most common type</td></tr>
<tr><td>Binary cycle</td><td>Hot water heats a separate working fluid that boils and drives the turbine</td><td>Moderate-temperature water; fluids stay in closed loops</td></tr>
</tbody>
</table>
<p>Binary plants are increasingly important because moderate-temperature resources are far more common than very hot ones. Their closed loops also mean very low emissions to air.</p>

<h3>Ground-Source Heat Pumps</h3>
<p>A few meters below the surface, the ground stays at a fairly constant temperature year-round. A ground-source heat pump circulates fluid through buried pipes to collect that heat in winter and to dump heat into the ground in summer. Because it moves heat rather than creating it, it can deliver several units of heat for each unit of electricity it uses. Heat pumps work almost anywhere, which makes them the most widely applicable form of geothermal technology.</p>

<h3>Resource Assessment</h3>
<p>Before building a plant, developers explore. Geologists map hot springs and faults; geochemists analyze fluids to estimate underground temperatures; geophysicists use surveys that detect electrical conductivity and other signals of hot fluids. Exploration wells confirm temperature and flow. Drilling is the largest cost and the greatest risk, because a dry or cool well can cost as much as a successful one.</p>

<h3>Benefits, Challenges and Solutions</h3>
<ol>
<li><strong>Benefit:</strong> high availability, often running most hours of the year.</li>
<li><strong>Benefit:</strong> small land footprint per unit of energy.</li>
<li><strong>Challenge:</strong> some reservoirs release gases such as hydrogen sulfide and carbon dioxide; binary plants and gas capture reduce this.</li>
<li><strong>Challenge:</strong> reservoirs can cool or lose pressure if overused; reinjection and careful production rates help.</li>
<li><strong>Challenge:</strong> high upfront exploration risk; public risk-sharing programs and better survey tools help.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Enhanced Systems, Binary Cycles and Resource Sustainability</h2>
<p>Conventional geothermal power is limited to sites where heat, fluid and permeability coincide naturally. Expanding geothermal beyond those sites requires engineering the reservoir itself and converting lower-temperature heat efficiently. This lesson analyzes binary cycle thermodynamics, enhanced geothermal systems and the question of whether geothermal production is truly renewable at the timescale of a power plant.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Enhanced geothermal system:</strong> a reservoir created or improved by injecting fluid to open fractures in hot rock with low natural permeability</li>
<li><strong>Organic Rankine cycle:</strong> a power cycle that uses an organic working fluid with a low boiling point so moderate-temperature heat can drive a turbine</li>
<li><strong>Carnot efficiency:</strong> the theoretical maximum fraction of heat that can be converted to work between two temperatures</li>
<li><strong>Thermal drawdown:</strong> the gradual cooling of a reservoir when heat is extracted faster than it is replenished</li>
<li><strong>Thermal breakthrough:</strong> the arrival of cooler injected fluid at a production well, lowering produced temperature</li>
<li><strong>Parasitic load:</strong> electricity consumed by the plant itself, such as pumps and cooling fans</li>
</ul>

<h3>Binary Cycle Thermodynamics</h3>
<p>The maximum efficiency of any heat engine depends on the temperature difference between heat source and heat sink. With brine at moderate temperatures and ambient air as the sink, the theoretical ceiling is low, and practical binary plants convert only around a tenth of the heat they receive into net electricity, sometimes less. This is why binary performance is sensitive to ambient temperature: air-cooled plants produce noticeably less on hot days. Engineers select working fluids whose boiling behavior closely matches the falling temperature of the brine, reducing mismatch losses in heat exchangers.</p>
<table>
<thead><tr><th>Design lever</th><th>Effect on output</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Working fluid selection</td><td>Better temperature matching raises efficiency</td><td>Flammability, cost, environmental properties of the fluid</td></tr>
<tr><td>Air versus evaporative cooling</td><td>Evaporative cooling improves summer output</td><td>Consumes water</td></tr>
<tr><td>Recuperator</td><td>Recovers heat within the cycle</td><td>Added capital cost</td></tr>
<tr><td>Brine outlet temperature</td><td>Lower outlet extracts more heat</td><td>Risk of mineral scaling in pipes and wells</td></tr>
</tbody>
</table>

<h3>Enhanced Geothermal Systems</h3>
<p>Hot rock exists at drillable depths almost everywhere, but it is usually too tight for fluid to flow. EGS creates permeability by injecting fluid at pressures that cause existing fractures to slip and open, a process called hydraulic stimulation. Fluid then circulates from injection to production wells, collecting heat. Key engineering challenges include achieving enough flow, avoiding short-circuit pathways that cause early thermal breakthrough, and managing seismicity. Techniques borrowed from the oil and gas industry, including horizontal drilling and multi-stage stimulation, have renewed interest in EGS.</p>

<h3>Is Geothermal Renewable?</h3>
<p>Heat flow from the deep Earth is tiny compared with the rate at which a power plant extracts heat, so individual reservoirs cool over a project's lifetime. Geothermal is therefore better described as a <em>sustainable</em> resource when managed well: production can continue for many decades with reinjection, and rested reservoirs recover over longer timescales. Some historic fields saw output decline due to overproduction, then partially recovered after operators increased reinjection.</p>

<h3>Applied Method: Evaluating a Geothermal Project</h3>
<ol>
<li>Estimate reservoir temperature, volume and recoverable heat with probabilistic ranges.</li>
<li>Select a plant cycle suited to temperature and fluid chemistry.</li>
<li>Calculate net output after parasitic loads and ambient temperature effects.</li>
<li>Model reservoir drawdown and plan reinjection to sustain output.</li>
<li>Account for drilling risk, scaling, emissions and community concerns.</li>
</ol>
`,
        GRADUATE: `
<h2>Reservoir Engineering, Induced Seismicity and Co-Production</h2>
<p>At graduate level, geothermal development is a problem of subsurface uncertainty, risk governance and finance. Projects succeed or fail on reservoir performance that cannot be fully known before drilling, and public acceptance can hinge on a single felt earthquake. This lesson examines reservoir engineering practice, how induced seismicity is managed and regulated, and the growing opportunities for co-production with other industries.</p>

<h3>Reservoir Engineering</h3>
<ul>
<li><strong>Reservoir simulation:</strong> numerical modeling of heat and fluid flow through fractured rock to forecast production over decades</li>
<li><strong>Pressure transient testing:</strong> measuring pressure response to changes in flow to infer permeability and reservoir boundaries</li>
<li><strong>Tracer testing:</strong> injecting a detectable substance and timing its arrival at production wells to map flow paths</li>
<li><strong>Scaling:</strong> deposition of minerals such as silica or calcite inside wells and equipment as fluid cools or depressurizes</li>
<li><strong>History matching:</strong> calibrating a reservoir model so it reproduces observed production data</li>
<li><strong>Make-up wells:</strong> additional wells drilled during operation to replace declining production</li>
</ul>
<p>Reservoir managers balance production rates, reinjection placement and well spacing. Injecting too close to producers risks early cooling; injecting too far fails to support pressure. Strategies evolve as monitoring data reveal how the reservoir actually behaves.</p>

<h3>Induced Seismicity Management</h3>
<p>Injecting or extracting fluid changes pressure and stress in the subsurface and can trigger slip on faults. Most induced events are too small to feel, but a few stimulation projects have caused felt earthquakes and building damage, leading to suspension or cancellation. Management relies on a layered approach:</p>
<table>
<thead><tr><th>Tool</th><th>Purpose</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Site screening</td><td>Avoid critically stressed faults near population</td><td>Faults may be unmapped</td></tr>
<tr><td>Dense seismic monitoring</td><td>Detect small events in real time</td><td>Requires sustained investment</td></tr>
<tr><td>Traffic light protocols</td><td>Pre-agreed thresholds that slow or stop injection</td><td>Largest events can occur after injection stops</td></tr>
<tr><td>Soft stimulation</td><td>Cyclic or staged injection to limit pressure build-up</td><td>Still under evaluation</td></tr>
<tr><td>Community engagement and compensation</td><td>Build trust and address damage</td><td>Cannot substitute for technical safety</td></tr>
</tbody>
</table>

<h3>Co-Production Opportunities</h3>
<p>Many oil and gas fields produce large volumes of hot water as a byproduct. Running that water through binary units can generate electricity without new drilling. Abandoned wells may be repurposed for heat. Some geothermal brines contain dissolved lithium, and extracting it alongside power could create a valuable domestic supply of battery materials, although extraction processes and brine chemistry are still being proven at scale. Geothermal heat can also serve district heating, industry and agriculture directly, often with higher overall efficiency than electricity generation.</p>

<h3>Finance and Policy</h3>
<p>Exploration risk makes early-stage geothermal hard to finance privately. Policy tools include government-backed drilling insurance, cost-shared exploration, public geological data and streamlined permitting for exploration wells. Because geothermal provides firm clean power, some planners argue it deserves capacity value that energy-only prices do not capture.</p>

<h3>Equity and Governance</h3>
<p>Geothermal resources often overlap with lands of cultural significance, including sacred springs and Indigenous territories. Durable projects involve communities from exploration onward, share benefits and respect decisions about sites that should not be developed.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Characterize resource uncertainty with probabilistic estimates rather than single values.</li>
<li>Assess seismic hazard and risk, including exposure of nearby buildings.</li>
<li>Design monitoring, response protocols and liability arrangements before injection.</li>
<li>Evaluate co-production and direct-use options for added value.</li>
<li>Structure finance to share early-stage risk appropriately.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Supercritical Resources and Advanced Drilling</h2>
<p>The next frontier in geothermal energy pushes deeper and hotter. Fluids above the critical point of water carry far more energy per unit mass than conventional geothermal fluids, potentially raising output per well severalfold. Reaching and using them demands advances in drilling, materials, well design and subsurface science. This lesson surveys supercritical geothermal research, emerging drilling technologies, and the modeling and methodological debates that accompany them.</p>

<h3>Supercritical Geothermal Systems</h3>
<ul>
<li><strong>Critical point:</strong> the temperature and pressure above which liquid and vapor water become indistinguishable, roughly 374 degrees Celsius and about 22 megapascals for pure water</li>
<li><strong>Supercritical fluid:</strong> a fluid above its critical point with high enthalpy and unusual transport properties</li>
<li><strong>Brittle-ductile transition:</strong> the depth where rock shifts from fracturing to flowing, influencing whether permeability can be sustained</li>
<li><strong>Enthalpy:</strong> the heat content of a fluid, which determines how much energy each kilogram can deliver</li>
<li><strong>Casing integrity:</strong> the ability of steel and cement well linings to survive extreme temperature, pressure and corrosion</li>
<li><strong>Magma-adjacent drilling:</strong> drilling close to shallow magma bodies to reach extremely high temperatures</li>
</ul>
<p>Pilot projects in volcanic regions have reached supercritical conditions, demonstrating high-enthalpy fluid but also revealing problems with corrosive acidic fluids, casing failure and thermal cycling. A central scientific question is whether permeability can persist near or below the brittle-ductile transition, or whether rock there deforms plastically and seals fractures.</p>

<h3>Advanced Drilling Technologies</h3>
<table>
<thead><tr><th>Approach</th><th>Principle</th><th>Research challenge</th></tr></thead>
<tbody>
<tr><td>Improved mechanical drilling</td><td>Polycrystalline diamond bits and better high-temperature electronics</td><td>Bit wear and tool survival in hot, hard rock</td></tr>
<tr><td>Directional and multilateral wells</td><td>Many branches from one well to contact more rock</td><td>Steering and logging at high temperature</td></tr>
<tr><td>Thermal spallation</td><td>Rapid heating fractures rock into flakes</td><td>Applicability across rock types and depths</td></tr>
<tr><td>Directed energy drilling</td><td>Lasers, plasma or millimeter-wave energy vaporize or melt rock</td><td>Energy delivery at depth, debris removal, borehole stability</td></tr>
<tr><td>Closed-loop systems</td><td>Fluid circulates in sealed pipes without contacting rock</td><td>Low heat transfer rates limit output per well</td></tr>
</tbody>
</table>
<p>Drilling costs rise steeply with depth, so cost reductions are the decisive lever for making deep geothermal widely available. Learning-curve arguments suggest repeated standardized drilling could lower costs substantially, but evidence remains limited.</p>

<h3>Modeling Methods</h3>
<p>Thermo-hydro-mechanical-chemical (THMC) models couple heat transport, fluid flow, rock deformation and mineral reactions. At supercritical conditions, sharp changes in fluid density, viscosity and heat capacity near the critical point make these models numerically difficult and data-poor. Discrete fracture network models represent individual fractures but require statistical assumptions about geometry that are hard to verify. Coupling these with seismicity models that forecast induced events remains an active area.</p>

<h3>Contested Questions</h3>
<ol>
<li>Can engineered permeability be sustained for decades, or will mineral precipitation and fracture closure erode it?</li>
<li>How transferable are lessons from oil and gas drilling to hard, hot crystalline rock?</li>
<li>Are closed-loop designs a practical path or limited by fundamental heat transfer constraints?</li>
<li>How should induced seismicity risk be weighed against climate benefits in densely populated regions?</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Materials and cements that withstand supercritical, corrosive fluids over many years.</li>
<li>High-temperature downhole sensors and electronics for real-time reservoir monitoring.</li>
<li>Validated THMC models calibrated against deep field experiments.</li>
<li>Integrated assessments comparing deep geothermal with other firm clean power sources.</li>
<li>Governance research on public engagement and acceptable seismic risk thresholds.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rgq1',
      question: {
        ELEMENTARY: 'What does the word "geothermal" mean?',
        MIDDLE_SCHOOL: 'Which layer of the Earth do we live on?',
        HIGH_SCHOOL: 'What is the geothermal gradient?',
        UNDERGRADUATE: 'Why do binary plants convert only a small fraction of heat into electricity?',
        GRADUATE: 'What is a traffic light protocol in geothermal operations?',
        PHD: 'Why is the brittle-ductile transition important for supercritical geothermal?',
      },
      options: {
        ELEMENTARY: ['Earth heat', 'Sky water', 'Moon light', 'Ocean wind'],
        MIDDLE_SCHOOL: ['The crust', 'The mantle', 'The core', 'The magma'],
        HIGH_SCHOOL: ['The rate at which temperature increases with depth', 'The slope of a volcano', 'The speed of a geyser', 'The angle of a drill bit'],
        UNDERGRADUATE: ['The temperature difference between brine and the heat sink is small, limiting theoretical efficiency', 'Binary plants have no turbine', 'They burn the working fluid', 'They only run at night'],
        GRADUATE: ['Pre-agreed seismic thresholds that slow or stop injection', 'A system for road traffic near plants', 'Colored lights on drilling rigs', 'A schedule for staff shifts'],
        PHD: ['It influences whether fracture permeability can be sustained or rock flows and seals', 'It marks where water freezes', 'It is the surface of the ocean floor', 'It has no effect on permeability'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Geo means Earth and thermal means heat, so geothermal means Earth heat.',
        MIDDLE_SCHOOL: 'The crust is the thin, rocky outer layer where we live.',
        HIGH_SCHOOL: 'The geothermal gradient describes how quickly the ground warms with depth.',
        UNDERGRADUATE: 'Heat engine efficiency depends on the temperature difference, which is modest for binary resources.',
        GRADUATE: 'Traffic light protocols set seismic thresholds that trigger reduced or halted injection.',
        PHD: 'Below the transition, rock may deform plastically and close fractures, limiting flow.',
      },
    },
    {
      id: 'rgq2',
      question: {
        ELEMENTARY: 'What is a geyser?',
        MIDDLE_SCHOOL: 'What is reinjection?',
        HIGH_SCHOOL: 'Which plant type uses a separate low-boiling-point working fluid?',
        UNDERGRADUATE: 'What is thermal breakthrough?',
        GRADUATE: 'What does tracer testing reveal?',
        PHD: 'Roughly what are the critical temperature and pressure of pure water?',
      },
      options: {
        ELEMENTARY: ['A kind of snowman', 'A hot spring that shoots water and steam into the air', 'A type of tree', 'A cold lake'],
        MIDDLE_SCHOOL: ['Burning rocks for fuel', 'Pumping used geothermal water back underground to heat up again', 'Throwing water into the ocean', 'Freezing water in wells'],
        HIGH_SCHOOL: ['Dry steam', 'Binary cycle', 'Flash steam', 'Coal-fired'],
        UNDERGRADUATE: ['When the turbine breaks', 'When cooler injected fluid reaches a production well and lowers produced temperature', 'When a well first strikes hot rock', 'When steam escapes to the air'],
        GRADUATE: ['The age of the rock', 'Flow paths between injection and production wells', 'The price of electricity', 'The color of the brine'],
        PHD: ['100 degrees Celsius and 1 megapascal', 'About 374 degrees Celsius and about 22 megapascals', '1,000 degrees Celsius and 100 megapascals', '0 degrees Celsius and 0 megapascals'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A geyser is a hot spring that bursts water and steam into the air from time to time.',
        MIDDLE_SCHOOL: 'Reinjection returns cooled water underground to keep the reservoir going.',
        HIGH_SCHOOL: 'Binary plants pass heat from brine to a working fluid that boils at a lower temperature.',
        UNDERGRADUATE: 'Breakthrough happens when injected cool fluid travels too quickly to a producer.',
        GRADUATE: 'Tracer arrival times map how fluid moves through the reservoir.',
        PHD: 'Pure water becomes supercritical above roughly 374 degrees Celsius and 22 megapascals.',
      },
    },
    {
      id: 'rgq3',
      question: {
        ELEMENTARY: 'When does geothermal power work?',
        MIDDLE_SCHOOL: 'Where are the best places for geothermal power often found?',
        HIGH_SCHOOL: 'Why can ground-source heat pumps work almost anywhere?',
        UNDERGRADUATE: 'What does an enhanced geothermal system do?',
        GRADUATE: 'What is co-production in geothermal?',
        PHD: 'What is a main limitation of closed-loop geothermal systems?',
      },
      options: {
        ELEMENTARY: ['Only on sunny days', 'Only when it is windy', 'Day and night, rain or shine', 'Only in summer'],
        MIDDLE_SCHOOL: ['In the middle of deserts only', 'On top of glaciers', 'Near plate boundaries and volcanoes', 'Under big cities only'],
        HIGH_SCHOOL: ['They need volcanoes', 'They burn natural gas', 'The shallow ground stays at a fairly constant temperature', 'They only work in Iceland'],
        UNDERGRADUATE: ['It cools the planet core', 'It replaces turbines with solar panels', 'It creates permeability in hot, tight rock by injecting fluid to open fractures', 'It uses only surface hot springs'],
        GRADUATE: ['Building two plants at once', 'Selling power to two utilities', 'Using hot water from oil and gas fields, or extracting minerals, alongside power', 'Sharing staff between plants'],
        PHD: ['They leak fluid into rock', 'They cause large earthquakes', 'Low heat transfer rates limit output per well', 'They need supercritical fluid'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The Earth is always warm inside, so geothermal power works any time.',
        MIDDLE_SCHOOL: 'Hot rock lies closer to the surface near plate edges and volcanoes.',
        HIGH_SCHOOL: 'A few meters down, ground temperature stays steady, which heat pumps can use.',
        UNDERGRADUATE: 'EGS stimulates fractures so fluid can circulate through hot rock with low natural permeability.',
        GRADUATE: 'Co-production adds geothermal power or mineral recovery to existing fluid flows.',
        PHD: 'Sealed pipes only collect heat by conduction, which limits output.',
      },
    },
    {
      id: 'rgq4',
      question: {
        ELEMENTARY: 'What machine can use ground warmth to heat a house?',
        MIDDLE_SCHOOL: 'Which use of geothermal needs the highest temperatures?',
        HIGH_SCHOOL: 'What is the largest cost and greatest risk in geothermal development?',
        UNDERGRADUATE: 'Why is geothermal described as sustainable rather than strictly renewable at plant timescales?',
        GRADUATE: 'Why is early-stage geothermal hard to finance privately?',
        PHD: 'What do THMC models couple together?',
      },
      options: {
        ELEMENTARY: ['A blender', 'A bicycle', 'A toaster', 'A heat pump'],
        MIDDLE_SCHOOL: ['Heating a swimming pool', 'Ground-source heat pumps', 'Warming a greenhouse', 'Making electricity'],
        HIGH_SCHOOL: ['Painting the plant', 'Buying the turbine', 'Hiring guides', 'Drilling wells'],
        UNDERGRADUATE: ['Geothermal heat is infinite at every site', 'Reservoirs never cool', 'It is the same as burning coal', 'Plants extract heat faster than deep heat flow replaces it, so reservoirs cool without careful management'],
        GRADUATE: ['There is no electricity demand', 'Geothermal is always illegal', 'Turbines are too cheap', 'Exploration risk: a failed well can cost as much as a successful one'],
        PHD: ['Wind, waves, tides and sunlight', 'Taxes, markets, labor and land', 'Weather, oceans, ice and air', 'Heat, fluid flow, rock mechanics and chemistry'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A heat pump moves warmth from the ground into a house.',
        MIDDLE_SCHOOL: 'Electricity generation needs very hot water or steam.',
        HIGH_SCHOOL: 'Drilling is expensive and a cool or dry well can still cost a lot.',
        UNDERGRADUATE: 'Reservoirs cool during production but can be managed for decades and recover over time.',
        GRADUATE: 'Uncertain drilling results make lenders wary, so public risk-sharing tools help.',
        PHD: 'THMC models link thermal, hydraulic, mechanical and chemical processes.',
      },
    },
    {
      id: 'rgq5',
      question: {
        ELEMENTARY: 'What is magma?',
        MIDDLE_SCHOOL: 'Which country heats most of its homes with geothermal water?',
        HIGH_SCHOOL: 'Which plant type is the most common?',
        UNDERGRADUATE: 'What is parasitic load?',
        GRADUATE: 'Why can traffic light protocols not fully eliminate seismic risk?',
        PHD: 'Why do drilling cost reductions matter so much for deep geothermal?',
      },
      options: {
        ELEMENTARY: ['Rock so hot it has melted into a thick liquid', 'A kind of ice cream', 'A cloud of rain', 'A sea animal'],
        MIDDLE_SCHOOL: ['Iceland', 'Egypt', 'Mongolia', 'Chad'],
        HIGH_SCHOOL: ['Flash steam', 'Dry steam', 'Diesel', 'Wind'],
        UNDERGRADUATE: ['Electricity used by the plant itself, such as pumps and fans', 'Power stolen from the grid', 'A type of turbine', 'Heat lost to the sky'],
        GRADUATE: ['The largest events can occur after injection has stopped', 'They are never used', 'Earthquakes are impossible', 'They only apply to wind farms'],
        PHD: ['Drilling costs rise steeply with depth and dominate project costs', 'Drilling is free', 'Depth does not affect cost', 'Turbines are the main cost'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Magma is melted rock from deep inside the Earth.',
        MIDDLE_SCHOOL: 'Iceland sits on volcanic rock and heats most homes with geothermal water.',
        HIGH_SCHOOL: 'Flash steam plants, using very hot water, are the most common type.',
        UNDERGRADUATE: 'Parasitic load is the plant using some of its own electricity.',
        GRADUATE: 'Pressure keeps spreading after injection stops, so events can still occur.',
        PHD: 'Because drilling dominates costs and grows with depth, cheaper drilling unlocks deep resources.',
      },
    },
  ],
}

export default expansion
