import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'geothermal-energy~2',
  lessons: [
    {
      id: 're-geo-1',
      title: 'Earth\'s Heat Beneath Our Feet',
      content: {
        ELEMENTARY: `
<h2>The Warm Ground Under Your Home</h2>
<p>Did you know the ground under your feet is a little bit like a giant, cozy blanket? Deep inside, our planet is very, very hot. That heat slowly moves up toward the surface. People have found clever ways to use this heat to warm homes, take baths and even make electricity. This is called <em>geothermal energy</em>. "Geo" means Earth and "thermal" means heat.</p>

<h3>Hot Water From the Ground</h3>
<p>In some places, the heat comes so close to the surface that water underground gets hot. Sometimes that hot water bubbles up as a warm pool called a hot spring. In a few special places, the water gets so hot that it shoots up into the air with a whoosh of steam. That is a geyser!</p>
<ul>
<li><strong>Hot spring:</strong> a pool of warm water that comes up naturally from under the ground</li>
<li><strong>Geyser:</strong> a hot spring that sometimes shoots water and steam high into the air</li>
<li><strong>Steam:</strong> the hot cloud that rises when water gets very hot and boils</li>
</ul>

<h3>The Ground Stays the Same</h3>
<p>Here is a fun secret. Just a few steps down under the ground, the soil stays about the same temperature all year long. In winter it feels warmer than the cold air. In summer it feels cooler than the hot air. A machine called a heat pump can use this steady ground to warm a house in winter and cool it in summer.</p>
<ul>
<li><strong>Heat pump:</strong> a machine that moves heat from one place to another to warm or cool a building</li>
<li><strong>Pipe loop:</strong> long tubes buried in the ground that carry water to collect the ground's warmth</li>
<li><strong>Power plant:</strong> a big building that makes electricity for many homes</li>
</ul>

<h3>Why It Is a Great Idea</h3>
<p>Earth's heat is always there, day and night, sunny or rainy. Using it does not make smoky air. That is why many people think geothermal energy is a wonderful helper for a cleaner planet.</p>

<h3>Things You Can Try</h3>
<ol>
<li>Touch a stone in the shade and a stone in the sun. Which feels warmer? The ground can store heat too!</li>
<li>Ask a grown-up if your town has any hot springs nearby.</li>
<li>Draw a picture of a house with pipes going deep into the ground to collect warmth.</li>
</ol>
<p>Next time you stand on the ground, remember: there is a warm, sleepy giant of heat far below you, ready to help!</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Heat Beneath Our Feet</h2>
<p>Earth is hot inside. The deeper you go, the hotter it gets. Part of this heat is left over from when the planet formed, and part comes from radioactive elements in rocks that slowly break down and release energy. This heat flows outward all the time. We can tap into it in three main ways: using hot water directly, making electricity, and using the steady temperature of shallow ground with heat pumps.</p>

<h3>Why Is It Hot Underground?</h3>
<p>Miners noticed long ago that deep mines are warm. On average, temperature rises by a few tens of degrees Celsius for every kilometer you go down. In volcanic areas, near the edges of tectonic plates, hot rock and magma come much closer to the surface. That is why countries such as Iceland, New Zealand and parts of the western United States have so many hot springs and geysers.</p>

<h3>Three Ways to Use Earth's Heat</h3>
<table>
<thead><tr><th>Method</th><th>What it does</th><th>Where it works</th></tr></thead>
<tbody>
<tr><td>Direct use</td><td>Hot water heats buildings, greenhouses, fish farms and pools</td><td>Places with warm water fairly close to the surface</td></tr>
<tr><td>Power plants</td><td>Very hot water or steam spins turbines to make electricity</td><td>Mostly volcanic and tectonically active regions</td></tr>
<tr><td>Ground-source heat pumps</td><td>Move heat between a building and the shallow ground</td><td>Almost anywhere on Earth</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Geothermal gradient:</strong> how quickly temperature increases as you go deeper into the Earth</li>
<li><strong>Magma:</strong> melted rock beneath the surface that heats the rock and water around it</li>
<li><strong>Geyser:</strong> a hot spring that erupts water and steam into the air from time to time</li>
<li><strong>Direct use:</strong> using geothermal hot water for heating without turning it into electricity</li>
<li><strong>District heating:</strong> a system of pipes that carries hot water to warm many buildings in a town</li>
<li><strong>Heat pump:</strong> a machine that moves heat from a cooler place to a warmer place using electricity</li>
</ul>

<h3>How a Ground-Source Heat Pump Works</h3>
<p>A few meters below the surface, the ground stays at a fairly steady temperature all year. A ground-source heat pump circulates fluid through buried pipes. In winter, the fluid picks up warmth from the ground and the heat pump concentrates it to heat the house. In summer, it runs the other way, moving heat out of the house and into the cooler ground. Because it moves heat instead of making it by burning fuel, it can deliver several units of heat for every unit of electricity it uses.</p>

<h3>Why It Matters</h3>
<p>Unlike sunshine and wind, Earth's heat is available all the time. It produces very little air pollution and uses little land. The main challenges are cost, because drilling is expensive, and location, because the hottest resources are only found in certain places. Heat pumps help solve the location problem, since shallow ground works for heating and cooling almost everywhere.</p>
`,
        HIGH_SCHOOL: `
<h2>Geothermal Energy: Power Plants, Heat Pumps and Direct Use</h2>
<p>Geothermal energy is heat stored in rock and fluids beneath Earth's surface. It is one of the few renewable resources that can run around the clock, which makes it valuable for a clean grid. This lesson looks at how geothermal heat is turned into electricity, how it heats buildings directly, and how heat pumps use the shallow ground almost anywhere.</p>

<h3>Where the Resource Comes From</h3>
<p>Heat flows outward from Earth's interior, fed by leftover heat from planetary formation and the decay of radioactive isotopes in the crust. In most places, the rock gets hotter at a moderate rate with depth. Near plate boundaries, volcanoes and hot spots, the gradient is much steeper. A usable <em>hydrothermal</em> resource needs three things together: heat, water and permeable rock that lets the water flow.</p>

<h3>Turning Heat Into Electricity</h3>
<table>
<thead><tr><th>Plant type</th><th>How it works</th><th>Resource needed</th></tr></thead>
<tbody>
<tr><td>Dry steam</td><td>Steam from the reservoir flows straight into the turbine</td><td>Rare, very hot, steam-dominated fields</td></tr>
<tr><td>Flash steam</td><td>High-pressure hot water is depressurized so part of it "flashes" into steam</td><td>Hot water reservoirs, the most common type</td></tr>
<tr><td>Binary cycle</td><td>Moderate-temperature water heats a second fluid with a lower boiling point, which drives the turbine in a closed loop</td><td>Lower-temperature resources, which are far more widespread</td></tr>
</tbody>
</table>
<p>After use, cooled geothermal water is usually injected back underground. This helps maintain reservoir pressure and keeps dissolved minerals and gases out of rivers.</p>

<h3>Direct Use and District Heating</h3>
<p>Turning heat into electricity is inefficient at moderate temperatures, so in many places it makes more sense to use the hot water directly. Geothermal district heating networks pipe hot water to homes, schools and offices. Other direct uses include heating greenhouses, drying crops and timber, warming fish farms, melting snow on sidewalks, and supplying spas and pools.</p>

<h3>Ground-Source Heat Pumps</h3>
<p>Ground-source heat pumps do not need a volcanic hot spot. They use the stable temperature of the shallow ground as a heat source in winter and a heat sink in summer. Loops can be buried horizontally in trenches, placed in vertical boreholes, or laid in a pond. Because the ground is milder than the outdoor air in extreme weather, these systems are often more efficient than air-source heat pumps on the coldest and hottest days.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Hydrothermal reservoir:</strong> an underground zone of hot water or steam in permeable rock</li>
<li><strong>Permeability:</strong> how easily fluid can flow through the cracks and pores in rock</li>
<li><strong>Binary cycle plant:</strong> a power plant that uses geothermal heat to boil a second working fluid in a closed loop</li>
<li><strong>Reinjection:</strong> pumping used geothermal fluid back into the reservoir to sustain pressure</li>
<li><strong>Coefficient of performance:</strong> the heat delivered by a heat pump divided by the electricity it uses</li>
</ul>

<h3>Benefits, Challenges and Solutions</h3>
<ul>
<li><strong>Benefit:</strong> steady, weather-independent output with a small land footprint.</li>
<li><strong>Challenge:</strong> high up-front drilling costs and the risk that a well finds less heat or flow than expected.</li>
<li><strong>Challenge:</strong> some fluids release gases such as hydrogen sulfide and carbon dioxide, which need managing.</li>
<li><strong>Solution:</strong> binary plants and reinjection keep fluids in a closed loop with very low emissions.</li>
<li><strong>Solution:</strong> heat pumps bring geothermal heating and cooling to regions without hot resources.</li>
</ul>
`,
        UNDERGRADUATE: `
<h2>Analyzing Geothermal Resources and Project Economics</h2>
<p>Geothermal projects are best understood as subsurface engineering ventures with an energy plant on top. The plant itself is conventional; the uncertainty, cost and value lie mostly underground. This lesson develops the vocabulary and reasoning needed to classify resources, compare conversion options, and evaluate the economics of geothermal power and heat.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Temperature gradient:</strong> the rate at which rock temperature rises with depth, typically expressed in degrees Celsius per kilometer</li>
<li><strong>Enthalpy:</strong> the heat content of a geothermal fluid, which sets how much useful work or heat it can deliver</li>
<li><strong>Exploration risk:</strong> the chance that wells fail to find adequate temperature, flow or fluid chemistry</li>
<li><strong>Capacity factor:</strong> actual energy produced divided by what the plant would produce running at full output all year</li>
<li><strong>Enhanced geothermal system:</strong> a reservoir created by increasing the permeability of hot, dry or tight rock</li>
<li><strong>Cascading use:</strong> using geothermal fluid first for high-temperature tasks and then for lower-temperature ones</li>
</ul>

<h3>Classifying Resources</h3>
<table>
<thead><tr><th>Resource class</th><th>Typical temperature</th><th>Best uses</th></tr></thead>
<tbody>
<tr><td>High enthalpy</td><td>Well above 150 degrees Celsius</td><td>Flash or dry steam electricity, often with cascaded heat use</td></tr>
<tr><td>Medium enthalpy</td><td>Roughly 90 to 150 degrees Celsius</td><td>Binary cycle electricity, district heating, industrial heat</td></tr>
<tr><td>Low enthalpy</td><td>Below roughly 90 degrees Celsius</td><td>Direct use for buildings, greenhouses and aquaculture</td></tr>
<tr><td>Shallow ground</td><td>Near the local average air temperature</td><td>Ground-source heat pumps for heating and cooling</td></tr>
</tbody>
</table>

<h3>Thermodynamic Limits in Words</h3>
<p>The maximum fraction of heat that any engine can convert to work depends on the gap between the hot source and the cold sink. Because geothermal fluids are much cooler than combustion flames, conversion efficiencies are low, often around a tenth of the heat extracted for moderate resources. This is why using the same heat directly, where a demand exists nearby, frequently delivers more useful energy per well than generating electricity.</p>

<h3>The Cost Structure</h3>
<p>Geothermal electricity has very high capital costs and very low fuel costs, because there is no fuel to buy. Drilling and well completion can account for a large share of total project cost, and exploration happens before the developer knows whether the resource is commercial. The typical development sequence is:</p>
<ol>
<li>Surface exploration: geology, geochemistry of springs and gases, and geophysical surveys.</li>
<li>Exploration drilling: temperature-gradient holes and slim wells to confirm heat.</li>
<li>Resource confirmation: full-size wells and flow tests to estimate reservoir capacity.</li>
<li>Field development: production and injection wells, pipelines and the power plant.</li>
<li>Operation: monitoring pressure and temperature, with make-up wells drilled as output declines.</li>
</ol>
<p>Risk is front-loaded. Lenders are reluctant to finance the early stages, so public risk-sharing schemes, drilling insurance and government exploration programs often play a key role.</p>

<h3>Why Capacity Factor Matters</h3>
<p>Geothermal plants commonly run at high capacity factors because heat is available continuously. Two projects with the same capital cost per kilowatt can therefore have very different costs per unit of energy: the one that runs most hours spreads its fixed cost over far more output. This firmness also has system value that a simple cost comparison misses, because it reduces the need for storage and backup in a high-renewable grid.</p>

<h3>Applied Checklist for a Project Screen</h3>
<ol>
<li>What temperature, flow rate and fluid chemistry are expected, and how confident is that estimate?</li>
<li>Is there a nearby heat demand that could use the fluid directly or in cascade?</li>
<li>Which plant type matches the resource, and what is its expected efficiency?</li>
<li>How will declining reservoir pressure be managed through reinjection and make-up wells?</li>
<li>Who carries exploration risk, and what instruments reduce it?</li>
</ol>
`,
        GRADUATE: `
<h2>Geothermal Policy, Advanced Drilling and Hybrid Systems</h2>
<p>Geothermal energy offers firm, low-carbon power and heat, yet it supplies a small share of global energy compared with its technical potential. The gap is not primarily about plant technology. It reflects exploration risk, drilling cost, permitting complexity and the difficulty of financing subsurface uncertainty. This lesson examines the policy and institutional landscape, the drilling innovations that could expand the resource base, and hybrid configurations that combine geothermal with other energy systems.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Risk mitigation fund:</strong> a public or blended finance facility that reimburses part of the cost of unsuccessful exploration wells</li>
<li><strong>Resource rights:</strong> the legal framework that defines who may explore, extract and reinject geothermal fluids or heat</li>
<li><strong>Firm clean power:</strong> low-carbon generation that can deliver output on demand regardless of weather</li>
<li><strong>Hybrid plant:</strong> an installation that combines geothermal heat with another source such as solar thermal, biomass or storage</li>
<li><strong>Repurposed wells:</strong> oil and gas wells converted for geothermal heat extraction or reused as data sources</li>
<li><strong>Social license:</strong> the ongoing acceptance of a project by local communities and stakeholders</li>
</ul>

<h3>Policy Barriers and Instruments</h3>
<p>Geothermal developers face a funding valley: private capital typically enters only after the resource is confirmed, yet confirmation requires expensive drilling. Countries that have expanded geothermal have often used public geological surveys, government-led exploration, or cost-sharing for early wells. Permitting is another bottleneck, because geothermal straddles mining, water and energy law, and projects may need approvals from several agencies.</p>
<table>
<thead><tr><th>Instrument</th><th>What it addresses</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Public exploration data</td><td>Lowers information costs for all developers</td><td>Requires sustained public budgets and data sharing rules</td></tr>
<tr><td>Drilling risk insurance or cost sharing</td><td>Reduces losses from dry or weak wells</td><td>Needs careful design to avoid moral hazard</td></tr>
<tr><td>Long-term offtake contracts</td><td>Provides revenue certainty for high capital costs</td><td>Can lock in prices if technology costs fall</td></tr>
<tr><td>Streamlined permitting</td><td>Shortens development timelines</td><td>Must still protect water, land and cultural values</td></tr>
<tr><td>Valuing firm capacity</td><td>Rewards round-the-clock output in planning and markets</td><td>Requires market rules that recognize reliability services</td></tr>
</tbody>
</table>

<h3>Advanced Drilling</h3>
<p>Drilling cost rises steeply with depth and rock hardness, which limits access to hot rock outside volcanic regions. Transfer of techniques from the oil and gas industry, such as horizontal drilling, multi-well pads and improved drill bits, has lowered costs in pilot projects. Research also explores non-contact methods that would weaken or remove rock without conventional bits. If drilling costs fall substantially, the resource base expands from a few favored regions toward much of the world.</p>

<h3>Hybrid and Integrated Systems</h3>
<p>Hybrids can raise output or flexibility. Solar thermal can boost the temperature of geothermal fluid during sunny hours, improving binary plant efficiency on hot days when air-cooled plants otherwise lose output. Geothermal reservoirs can also be operated flexibly, storing heat or pressure and dispatching when prices are high. Co-production of minerals from brines, such as lithium in some fields, can add revenue, though it brings its own regulatory and environmental questions.</p>

<h3>Equity and Governance</h3>
<p>Many high-temperature resources lie on land with deep cultural significance, including Indigenous territories where hot springs and volcanic features hold spiritual and community value. Early, genuine consultation, benefit-sharing arrangements and community ownership models influence whether projects proceed and whether benefits stay local. Induced seismicity, subsidence and water use need transparent monitoring so that affected residents can trust the data.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Characterize the resource and the uncertainty around it, not just the central estimate.</li>
<li>Identify who carries exploration risk and which public instruments are available.</li>
<li>Compare power-only, heat-only, cascaded and hybrid configurations.</li>
<li>Value firmness and flexibility in system terms, not only cost per unit of energy.</li>
<li>Assess community consent, benefit-sharing and environmental monitoring arrangements.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Enhanced Systems, Reservoir Modeling and Induced Seismicity</h2>
<p>Most of the world's accessible crustal heat sits in rock that is hot but not naturally permeable. Enhanced geothermal systems aim to engineer permeability in such rock, potentially turning geothermal from a regional niche into a widely available firm resource. Doing so requires predicting coupled processes in fractured rock that are poorly observed, and managing the seismic hazard that stimulation can create. This lesson surveys the modeling methods, debates and open questions at the frontier.</p>

<h3>Concepts and Methods</h3>
<ul>
<li><strong>Hydraulic stimulation:</strong> injecting fluid at pressure to open or shear existing fractures and increase permeability</li>
<li><strong>Coupled thermo-hydro-mechanical modeling:</strong> simulation that links heat transport, fluid flow and rock deformation in one framework</li>
<li><strong>Discrete fracture network:</strong> a model representing individual fractures explicitly rather than averaging them into a continuum</li>
<li><strong>Thermal drawdown:</strong> the gradual cooling of produced fluid as injected water extracts heat from the rock</li>
<li><strong>Traffic light protocol:</strong> an operational rule set that changes injection when observed seismicity crosses defined thresholds</li>
<li><strong>Closed-loop system:</strong> a design that circulates fluid through sealed wellbores so heat is gained by conduction without contacting the formation</li>
</ul>

<h3>Reservoir Modeling</h3>
<p>Reservoir models must represent how injected fluid finds pathways, how quickly it heats up, and how stress changes as rock cools and pressure rises. Continuum models with equivalent permeability are computationally efficient but can miss short-circuiting, where fluid races through a single dominant fracture and causes early thermal breakthrough. Discrete fracture models capture this channeling but require fracture geometry that is rarely known. Hybrid approaches embed key fractures within a continuum. Calibration relies on sparse data: microseismic locations, tracer tests, pressure transients and temperature logs, which together constrain but do not uniquely determine the fracture network.</p>

<h3>Induced Seismicity</h3>
<p>Raising pore pressure reduces the effective normal stress on faults and can trigger slip on those already close to failure. Most induced events are small, but several stimulation projects have been paused or abandoned after felt earthquakes. Research questions include how to forecast the largest expected event during and after injection, whether maximum magnitude is controlled by injected volume or by the size of nearby critically stressed faults, and why significant events sometimes occur after injection stops.</p>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Statistical forecasting from seismicity rates</td><td>Updates quickly with real-time catalogs</td><td>Weak physical basis for extrapolation</td></tr>
<tr><td>Physics-based coupled models</td><td>Links operations to stress change mechanistically</td><td>Depends on uncertain fault and stress inputs</td></tr>
<tr><td>Hybrid physics-statistical models</td><td>Combines mechanistic insight with data assimilation</td><td>Complex to validate and communicate</td></tr>
<tr><td>Adaptive traffic light systems</td><td>Operationally practical risk management</td><td>Thresholds may lag the hazard after shut-in</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ul>
<li>Whether multi-stage stimulation in horizontal wells, adapted from the oil and gas sector, scales reliably across different geologies.</li>
<li>Whether closed-loop designs can extract enough heat by conduction alone to be economic without very long wellbores.</li>
<li>How to define acceptable seismic risk, and who decides, given that hazard and benefit fall on different groups.</li>
<li>How sustainable long-term output is when thermal drawdown and fracture evolution are uncertain over decades.</li>
</ul>

<h3>Methodological Debates</h3>
<p>A central debate concerns how much prediction is possible before drilling versus how much must be learned adaptively. Some researchers favor extensive pre-characterization and physics-based design; others argue that subsurface heterogeneity makes adaptive, data-driven operation unavoidable. Uncertainty quantification is costly for coupled models, so surrogate models and machine learning emulators are increasingly used, raising questions about their reliability outside the training range.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Field-scale validation of coupled models using long-term circulation data from demonstration sites.</li>
<li>Methods to detect and mitigate flow channeling and early thermal breakthrough.</li>
<li>Seismic hazard forecasts that remain reliable after injection stops.</li>
<li>Integration of public risk perception and procedural justice into stimulation decisions.</li>
<li>Techno-economic models linking drilling cost reductions to resource potential across regions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rgeoq1',
      question: {
        ELEMENTARY: 'Where does geothermal energy come from?',
        MIDDLE_SCHOOL: 'What is a geyser?',
        HIGH_SCHOOL: 'What is a binary cycle plant?',
        UNDERGRADUATE: 'What does the temperature gradient describe?',
        GRADUATE: 'What does a risk mitigation fund do for geothermal projects?',
        PHD: 'What is induced seismicity in enhanced geothermal systems?',
      },
      options: {
        ELEMENTARY: ['Heat from inside the Earth', 'Light from the Moon', 'Wind blowing over the sea', 'Rain falling on roofs'],
        MIDDLE_SCHOOL: ['A hot spring that erupts water and steam into the air', 'A cold underground lake', 'A type of volcanic rock', 'A pipe used in heat pumps'],
        HIGH_SCHOOL: ['A plant that uses geothermal heat to boil a second fluid in a closed loop', 'A plant that burns two kinds of fuel', 'A plant with two separate buildings', 'A plant that only works at night'],
        UNDERGRADUATE: ['The rate at which rock temperature rises with depth', 'The slope of the land surface above a reservoir', 'The color change of rocks with depth', 'The temperature of surface rivers only'],
        GRADUATE: ['It reimburses part of the cost of unsuccessful exploration wells', 'It pays customers to use less electricity', 'It funds only solar projects', 'It guarantees that every well finds hot water'],
        PHD: ['Earthquakes triggered when fluid injection raises pore pressure on faults', 'Natural earthquakes far from any wells', 'Vibration from turbines on the surface', 'Cracking of pipes caused by cold weather'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Geothermal energy is the heat that lives deep inside our planet.',
        MIDDLE_SCHOOL: 'A geyser is a hot spring that shoots water and steam into the air from time to time.',
        HIGH_SCHOOL: 'Binary plants pass geothermal heat to a working fluid with a lower boiling point, which drives the turbine.',
        UNDERGRADUATE: 'The temperature gradient measures how quickly rock gets hotter per kilometer of depth.',
        GRADUATE: 'Risk mitigation funds share the losses from dry or weak wells, helping projects cross the early funding valley.',
        PHD: 'Raising pore pressure lowers effective normal stress on faults, which can trigger slip on critically stressed faults.',
      },
    },
    {
      id: 'rgeoq2',
      question: {
        ELEMENTARY: 'How does the ground just under our feet feel in winter compared with the cold air?',
        MIDDLE_SCHOOL: 'What is a ground-source heat pump?',
        HIGH_SCHOOL: 'Why are ground-source heat pumps often more efficient than air-source ones in extreme weather?',
        UNDERGRADUATE: 'Why can direct use of geothermal heat deliver more useful energy than generating electricity from it?',
        GRADUATE: 'Why do private lenders often avoid the early stages of geothermal projects?',
        PHD: 'What is thermal breakthrough caused by flow channeling?',
      },
      options: {
        ELEMENTARY: ['Much colder than the air', 'Warmer than the cold air', 'Exactly as cold as ice', 'It has no temperature'],
        MIDDLE_SCHOOL: ['A machine that burns wood underground', 'A machine that moves heat between a building and the shallow ground', 'A pump that brings oil to the surface', 'A fan that blows air into the soil'],
        HIGH_SCHOOL: ['The ground is milder than the outdoor air on the coldest and hottest days', 'They burn natural gas as a backup', 'They need no electricity at all', 'They only work in volcanic regions'],
        UNDERGRADUATE: ['Electricity generation from geothermal fluid has no losses', 'Converting moderate-temperature heat to electricity is inefficient, so using the heat directly wastes less', 'Direct use requires deeper wells', 'Direct use produces more carbon dioxide'],
        GRADUATE: ['Geothermal plants have high fuel costs', 'Exploration risk is high and the resource is unconfirmed before expensive drilling', 'Geothermal output is too variable', 'Lenders are forbidden from funding energy projects'],
        PHD: ['Injected fluid heating up too slowly everywhere', 'Fluid racing through a dominant fracture so produced fluid cools earlier than expected', 'The surface plant overheating in summer', 'A sudden rise in reservoir temperature'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A little way down, the ground stays about the same temperature, so in winter it is warmer than the cold air.',
        MIDDLE_SCHOOL: 'It circulates fluid through buried pipes to collect or dump heat, warming the house in winter and cooling it in summer.',
        HIGH_SCHOOL: 'The ground stays at a steadier, milder temperature than the air, so the heat pump does less work.',
        UNDERGRADUATE: 'Heat engines convert only a small share of moderate-temperature heat to work, while direct use delivers most of it.',
        GRADUATE: 'Capital usually enters only after the resource is confirmed, leaving a funding gap for exploration drilling.',
        PHD: 'Channeling short-circuits the reservoir, so injected cold water reaches production wells before it has gained much heat.',
      },
    },
    {
      id: 'rgeoq3',
      question: {
        ELEMENTARY: 'Which of these is a good thing about geothermal energy?',
        MIDDLE_SCHOOL: 'What is district heating?',
        HIGH_SCHOOL: 'Why is used geothermal water usually injected back underground?',
        UNDERGRADUATE: 'What is cascading use of geothermal fluid?',
        GRADUATE: 'How can solar thermal help a binary geothermal plant in a hybrid system?',
        PHD: 'What is the main purpose of a traffic light protocol?',
      },
      options: {
        ELEMENTARY: ['It only works on sunny days', 'It makes lots of smoke', 'It is there day and night', 'It needs gasoline'],
        MIDDLE_SCHOOL: ['A heater for one room only', 'A power line between cities', 'Pipes that carry hot water to warm many buildings in a town', 'A district where heating is banned'],
        HIGH_SCHOOL: ['To make the water hotter for drinking', 'To create new geysers', 'To maintain reservoir pressure and keep minerals and gases out of rivers', 'To cool down the turbines'],
        UNDERGRADUATE: ['Mixing geothermal fluid with seawater', 'Drilling many wells in a straight line', 'Using fluid for high-temperature tasks first, then lower-temperature ones', 'Storing fluid in tanks for winter'],
        GRADUATE: ['It replaces the geothermal well entirely', 'It removes minerals from the brine', 'It boosts fluid temperature during sunny hours when air-cooled plants lose output', 'It lowers drilling costs'],
        PHD: ['Scheduling truck traffic at the drill site', 'Setting electricity prices for geothermal plants', 'Changing injection when observed seismicity crosses defined thresholds', 'Measuring reservoir temperature at the surface'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Earth\'s heat is always there, whether it is sunny, rainy, day or night.',
        MIDDLE_SCHOOL: 'District heating networks pipe hot water to many homes and buildings at once.',
        HIGH_SCHOOL: 'Reinjection sustains reservoir pressure and keeps dissolved substances from polluting surface water.',
        UNDERGRADUATE: 'Cascading squeezes more value from each well by matching fluid temperature to successive uses.',
        GRADUATE: 'Solar heat can raise fluid temperature, improving binary plant efficiency on hot afternoons.',
        PHD: 'Traffic light systems reduce or stop injection as seismic activity rises past preset levels.',
      },
    },
    {
      id: 'rgeoq4',
      question: {
        ELEMENTARY: 'What is a hot spring?',
        MIDDLE_SCHOOL: 'Which way of using Earth\'s heat works almost anywhere on Earth?',
        HIGH_SCHOOL: 'Which three things does a usable hydrothermal resource need together?',
        UNDERGRADUATE: 'Why do geothermal plants usually have high capacity factors?',
        GRADUATE: 'Why does reducing drilling cost matter so much for geothermal potential?',
        PHD: 'What is a closed-loop geothermal design?',
      },
      options: {
        ELEMENTARY: ['A pool of ice', 'A spring toy', 'A cloud of rain', 'A pool of warm water that comes up from the ground'],
        MIDDLE_SCHOOL: ['Dry steam power plants', 'Flash steam power plants', 'Geysers', 'Ground-source heat pumps'],
        HIGH_SCHOOL: ['Sunlight, wind and soil', 'Coal, water and air', 'Ice, sand and salt', 'Heat, water and permeable rock'],
        UNDERGRADUATE: ['They shut down every night', 'They depend on daily weather', 'They burn fuel continuously', 'Heat is available continuously, so they run most hours of the year'],
        GRADUATE: ['Drilling has no effect on cost', 'Only surface plants determine cost', 'Cheaper drilling lowers electricity demand', 'Lower costs to reach deep hot rock expand the resource beyond a few volcanic regions'],
        PHD: ['A system that injects water into open fractures', 'A plant that recycles its turbines', 'A well that is permanently sealed and abandoned', 'Fluid circulates through sealed wellbores and gains heat by conduction without touching the formation'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A hot spring is warm water that rises naturally out of the ground.',
        MIDDLE_SCHOOL: 'Shallow ground keeps a steady temperature nearly everywhere, so heat pumps can use it widely.',
        HIGH_SCHOOL: 'A hydrothermal resource needs heat, water to carry it, and rock permeable enough for the water to flow.',
        UNDERGRADUATE: 'Continuous heat lets geothermal plants run most hours, spreading fixed costs over more energy.',
        GRADUATE: 'Hot rock exists at depth almost everywhere; drilling cost decides how much of it is economic.',
        PHD: 'Closed loops avoid contact with formation fluids and stimulation, but rely on conduction alone for heat gain.',
      },
    },
    {
      id: 'rgeoq5',
      question: {
        ELEMENTARY: 'What does a heat pump do?',
        MIDDLE_SCHOOL: 'Why are there many hot springs in places like Iceland and New Zealand?',
        HIGH_SCHOOL: 'Which type of geothermal power plant can use lower-temperature resources?',
        UNDERGRADUATE: 'In the development sequence, what happens during resource confirmation?',
        GRADUATE: 'Why are early consultation and benefit-sharing important for geothermal projects?',
        PHD: 'Why are discrete fracture network models hard to use in practice?',
      },
      options: {
        ELEMENTARY: ['It moves heat to warm or cool a building', 'It pumps air into tires', 'It makes ice cream', 'It turns on the lights'],
        MIDDLE_SCHOOL: ['Hot rock and magma come close to the surface near plate edges', 'They are close to the North Pole', 'It rains more there', 'They have more cities'],
        HIGH_SCHOOL: ['Binary cycle plants', 'Dry steam plants', 'Coal plants', 'Wind farms'],
        UNDERGRADUATE: ['Full-size wells and flow tests estimate reservoir capacity', 'The power plant is demolished', 'Electricity is sold to customers for the first time', 'Surface maps are drawn for the first time'],
        GRADUATE: ['Many resources lie on culturally significant land, and acceptance shapes whether projects proceed', 'They are never needed for energy projects', 'They make drilling physically easier', 'They raise the temperature of the reservoir'],
        PHD: ['They need fracture geometry that is rarely known', 'They cannot represent fractures at all', 'They ignore fluid flow', 'They always run faster than continuum models'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A heat pump moves heat from one place to another to make a building warmer or cooler.',
        MIDDLE_SCHOOL: 'Near plate boundaries and volcanoes, heat sits much closer to the surface.',
        HIGH_SCHOOL: 'Binary plants use a second fluid with a low boiling point, so moderate-temperature water is enough.',
        UNDERGRADUATE: 'Resource confirmation uses full-size wells and flow tests to check how much the reservoir can deliver.',
        GRADUATE: 'Hot springs and volcanic features often hold cultural value, and community consent affects project success.',
        PHD: 'Discrete models capture channeling well, but they depend on fracture data that sparse observations rarely provide.',
      },
    },
  ],
}

export default expansion
