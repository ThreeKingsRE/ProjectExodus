import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'groundwater-management',
  lessons: [
    {
      id: 'ws-gw-1',
      title: 'Water Underground: Using Groundwater Wisely',
      content: {
        ELEMENTARY: `
<h2>The Hidden Water Under Our Feet</h2>
<p>Did you know there is water hiding under the ground beneath you? It is not in a big underground lake like in a cartoon. Instead, it fills tiny spaces between grains of sand, bits of gravel and cracks in rocks. This hidden water is called groundwater, and many people around the world drink it every day!</p>

<h3>How Water Gets Underground</h3>
<p>When rain falls on soil, some of it soaks in, just like water soaking into a sponge. It keeps trickling down, slowly, through the soil and sand until it reaches a place where all the spaces are already full of water. That full layer is where groundwater lives.</p>
<ul>
<li><strong>Groundwater:</strong> water stored underground in the tiny spaces between sand, gravel and rocks</li>
<li><strong>Aquifer:</strong> a layer of rock, sand or gravel underground that holds lots of water</li>
<li><strong>Well:</strong> a deep hole dug or drilled into the ground to bring up groundwater</li>
<li><strong>Spring:</strong> a place where groundwater comes out of the ground all by itself</li>
<li><strong>Soak in:</strong> when rain sinks down into the soil instead of running away</li>
</ul>

<h3>Try This at Home</h3>
<p>Fill a clear cup with small pebbles or sand. Slowly pour in some water. Watch how the water fills the spaces between the pebbles from the bottom up. That is just like an aquifer! The top of the wet part is like the top of the groundwater.</p>

<h3>How We Use Groundwater</h3>
<p>People use pumps to pull groundwater up through wells. Farmers use it to water crops. Towns use it for drinking water. In dry places, groundwater can be the main water people have, because it is still there when rivers dry up.</p>

<h3>Taking Care of Groundwater</h3>
<p>Groundwater refills slowly. If people pump out water faster than rain can put it back, the water level goes down and wells can run dry. Pollution can also sink into the ground and get into groundwater, and that is very hard to clean up.</p>
<ol>
<li>Save water at home so less needs to be pumped.</li>
<li>Never pour paint, oil or medicine onto the ground or down drains.</li>
<li>Help plant gardens and trees, which let rain soak into the soil.</li>
<li>Thank the people who test and protect your drinking water!</li>
</ol>
<p>Even though we cannot see it, groundwater is a treasure worth protecting.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Aquifers and Sustainable Groundwater Use</h2>
<p>Groundwater is one of Earth's largest stores of fresh liquid water, much larger than all the rivers and lakes combined. It supplies drinking water to a large share of the world's people and irrigates a big portion of the world's crops. Because we cannot see it, groundwater is easy to overuse or pollute without noticing until problems appear.</p>

<h3>How Groundwater Is Stored</h3>
<p>Below the surface there are two main zones. Near the top is the <em>unsaturated zone</em>, where spaces in soil and rock contain both air and water. Deeper down is the <em>saturated zone</em>, where every space is filled with water. The boundary between them is called the water table.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Aquifer:</strong> an underground layer of rock or sediment that holds and can release useful amounts of water</li>
<li><strong>Water table:</strong> the top of the saturated zone where all the spaces are filled with water</li>
<li><strong>Recharge:</strong> water that soaks down from the surface and refills an aquifer</li>
<li><strong>Porosity:</strong> how much open space there is in a rock or sediment to hold water</li>
<li><strong>Permeability:</strong> how easily water can flow through a rock or sediment</li>
<li><strong>Overdraft:</strong> pumping more water out of an aquifer than is recharged over time</li>
</ul>

<h3>Good and Poor Aquifer Materials</h3>
<table>
<thead><tr><th>Material</th><th>Holds water?</th><th>Lets water flow?</th></tr></thead>
<tbody>
<tr><td>Gravel</td><td>Yes</td><td>Very easily</td></tr>
<tr><td>Sand</td><td>Yes</td><td>Easily</td></tr>
<tr><td>Clay</td><td>Holds a lot</td><td>Very slowly, so it often blocks flow</td></tr>
<tr><td>Fractured rock</td><td>In the cracks</td><td>Through the cracks</td></tr>
<tr><td>Solid granite</td><td>Very little</td><td>Hardly at all unless cracked</td></tr>
</tbody>
</table>

<h3>Groundwater and Rivers Are Connected</h3>
<p>Groundwater slowly moves, often toward rivers, lakes and the sea. In dry weather, many streams keep flowing because groundwater seeps into them. That steady flow is called baseflow. When too much groundwater is pumped, streams can shrink or dry up, harming fish and wildlife.</p>

<h3>Problems From Overuse</h3>
<ol>
<li><strong>Falling water tables:</strong> wells must be drilled deeper, which costs more money and energy.</li>
<li><strong>Land sinking:</strong> when water is removed from some clay layers, the ground above can slowly sink.</li>
<li><strong>Saltwater intrusion:</strong> near coasts, seawater can move into aquifers if fresh water is pumped out too fast.</li>
<li><strong>Drying streams and wetlands:</strong> less groundwater means less water feeding nature.</li>
</ol>

<h3>Using Groundwater Sustainably</h3>
<p>Sustainable use means pumping no more than the aquifer can supply over the long term while still keeping streams and wetlands healthy. Communities measure water levels in monitoring wells, limit pumping, protect recharge areas from paving and pollution, and sometimes help water soak back underground on purpose. Everyone shares the same aquifer, so cooperation among neighbors is essential.</p>
`,
        HIGH_SCHOOL: `
<h2>Groundwater Hydrology, Wells and Aquifer Management</h2>
<p>Groundwater management combines geology, physics and community decision-making. To manage an aquifer well, people need to know how water enters it, how it moves, how wells affect it and who depends on it. Because many users draw from the same aquifer, managing groundwater is as much a social challenge as a technical one.</p>

<h3>Aquifer Types</h3>
<ul>
<li><strong>Unconfined aquifer:</strong> an aquifer whose upper surface is the water table, open to recharge from directly above</li>
<li><strong>Confined aquifer:</strong> an aquifer sandwiched between low-permeability layers that keep its water under pressure</li>
<li><strong>Aquitard:</strong> a layer such as clay that slows groundwater movement between aquifers</li>
<li><strong>Artesian well:</strong> a well in a confined aquifer where pressure pushes water up above the top of the aquifer</li>
<li><strong>Hydraulic head:</strong> a measure of the water's energy, shown by the level water rises to in a well</li>
<li><strong>Cone of depression:</strong> the funnel-shaped lowering of the water table around a pumping well</li>
</ul>

<h3>How Groundwater Moves</h3>
<p>Groundwater flows from areas of higher hydraulic head to areas of lower head, usually very slowly, from centimeters to meters per day in many aquifers. The flow rate depends on how steep the head gradient is and how permeable the material is. Some groundwater is only years old, while some deep groundwater has been underground for thousands of years and is recharged very little today.</p>

<h3>Wells and Their Effects</h3>
<p>When a well pumps, water flows toward it from all directions, creating a cone of depression. If cones from neighboring wells overlap, they interfere, lowering water levels for everyone. A shallow household well can go dry when a large irrigation or municipal well starts pumping nearby. Wells also need proper construction, with a sealed casing, to prevent surface pollution from flowing down along the pipe.</p>

<h3>Comparing Management Problems</h3>
<table>
<thead><tr><th>Problem</th><th>Cause</th><th>Management response</th></tr></thead>
<tbody>
<tr><td>Declining water levels</td><td>Pumping exceeds recharge</td><td>Pumping limits, efficiency, alternative supplies</td></tr>
<tr><td>Land subsidence</td><td>Compaction of clay layers as water is removed</td><td>Reduce pumping in sensitive zones</td></tr>
<tr><td>Saltwater intrusion</td><td>Coastal pumping draws seawater inland</td><td>Relocate wells, inject fresh water barriers</td></tr>
<tr><td>Contamination</td><td>Fertilizers, fuel leaks, industrial chemicals, natural arsenic</td><td>Wellhead protection, cleanup, treatment</td></tr>
<tr><td>Streamflow depletion</td><td>Pumping captures water that would feed streams</td><td>Manage surface water and groundwater together</td></tr>
</tbody>
</table>

<h3>Management Tools</h3>
<ol>
<li><strong>Monitoring:</strong> networks of observation wells track water levels and quality.</li>
<li><strong>Metering and permits:</strong> measuring and limiting how much each user pumps.</li>
<li><strong>Wellhead protection:</strong> restricting risky activities near drinking water wells.</li>
<li><strong>Recharge enhancement:</strong> spreading water in basins so more soaks into the aquifer.</li>
<li><strong>Local cooperation:</strong> groups of users agreeing on shared limits and rules.</li>
</ol>

<h3>Real-World Connections</h3>
<p>In several major farming regions around the world, groundwater levels have fallen significantly over recent decades because irrigation pumping exceeds recharge. Satellites that measure tiny changes in Earth's gravity have helped scientists detect these losses over large areas. Responses include more efficient irrigation, crop changes, recharge projects and community agreements on pumping.</p>
`,
        UNDERGRADUATE: `
<h2>Groundwater Modeling, Sustainable Yield and Contamination</h2>
<p>Quantitative groundwater analysis rests on a few physical principles, but applying them to real aquifers is challenging because the subsurface is hidden, variable and slow to respond. This lesson covers the governing concepts, the long-debated idea of sustainable yield, and the transport of contaminants.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Darcy's law:</strong> the principle that groundwater flow rate is proportional to hydraulic conductivity times the hydraulic gradient</li>
<li><strong>Hydraulic conductivity:</strong> a property describing how easily water moves through a porous material under a gradient</li>
<li><strong>Transmissivity:</strong> hydraulic conductivity multiplied by aquifer thickness, describing how much water an aquifer can transmit</li>
<li><strong>Storativity:</strong> the volume of water an aquifer releases from storage per unit area per unit decline in head</li>
<li><strong>Capture:</strong> the increase in recharge or decrease in natural discharge caused by pumping, which ultimately supplies wells</li>
<li><strong>Advection-dispersion:</strong> the combined processes that move a contaminant with flowing groundwater and spread it out</li>
</ul>

<h3>From Darcy to Models</h3>
<p>Darcy's law combined with conservation of mass yields the groundwater flow equation, which numerical models solve over a grid or mesh. Inputs include aquifer geometry, hydraulic properties, recharge, boundary conditions and pumping. Pumping tests, in which a well is pumped and drawdown is measured in nearby wells, are a primary way to estimate transmissivity and storativity. Models are calibrated by adjusting parameters until simulated heads and flows match observations.</p>

<h3>The Sustainable Yield Debate</h3>
<p>A common misconception, sometimes called the water budget myth, holds that an aquifer can safely supply pumping equal to its natural recharge. In reality, before pumping, recharge is balanced by natural discharge to streams, springs, wetlands and vegetation. Pumping is ultimately supplied by capturing some of that discharge, by inducing more recharge, or by depleting storage. Pumping equal to recharge would eventually capture all natural discharge, drying the features that depended on it. Sustainable yield is therefore a management decision that weighs water supply against acceptable impacts, not a fixed property of the aquifer.</p>
<table>
<thead><tr><th>Source of pumped water</th><th>Timing</th><th>Consequence</th></tr></thead>
<tbody>
<tr><td>Storage depletion</td><td>Dominates early</td><td>Falling water levels</td></tr>
<tr><td>Reduced natural discharge</td><td>Grows over time</td><td>Less baseflow, drying springs and wetlands</td></tr>
<tr><td>Induced recharge</td><td>Depends on connection to surface water</td><td>Streams lose water to the aquifer</td></tr>
</tbody>
</table>

<h3>Contamination</h3>
<p>Contaminants move with groundwater by advection, spread by dispersion and diffusion, and can be slowed by sorption to aquifer materials or broken down by microbes. Dense non-aqueous phase liquids, such as some chlorinated solvents, can sink below the water table and act as long-lasting sources. Nitrate from fertilizers and septic systems is a widespread concern, as are naturally occurring contaminants like arsenic in some geologic settings. Because groundwater moves slowly, contamination can persist for decades.</p>

<h3>Applied Analysis Checklist</h3>
<ol>
<li>Build a conceptual model: geology, boundaries, recharge and discharge areas.</li>
<li>Estimate hydraulic properties from pumping tests and geologic data.</li>
<li>Identify which streams, springs and ecosystems depend on groundwater.</li>
<li>Simulate pumping scenarios and evaluate drawdown and capture over time.</li>
<li>Assess contamination sources and protect well capture zones.</li>
<li>Communicate uncertainty and update the model as monitoring data arrive.</li>
</ol>
`,
        GRADUATE: `
<h2>Conjunctive Use, Managed Aquifer Recharge and Governance</h2>
<p>Groundwater is often managed separately from rivers and reservoirs, yet the two are physically connected and economically substitutable. Graduate-level management focuses on combining sources, storing water underground, and building institutions capable of governing a hidden, shared resource.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Conjunctive use:</strong> coordinated management of surface water and groundwater to improve overall supply reliability</li>
<li><strong>Managed aquifer recharge:</strong> intentionally adding water to aquifers for later recovery or environmental benefit</li>
<li><strong>Aquifer storage and recovery:</strong> injecting water through a well during wet periods and pumping it back from the same well later</li>
<li><strong>Common-pool resource:</strong> a resource from which it is hard to exclude users and where one user's withdrawal reduces what is left for others</li>
<li><strong>Groundwater-dependent ecosystem:</strong> an ecosystem such as a spring, fen or riparian forest that relies on groundwater</li>
<li><strong>Adjudication:</strong> a legal process in which a court determines and allocates groundwater rights among users</li>
</ul>

<h3>Conjunctive Use Strategies</h3>
<p>Surface water tends to be plentiful in wet years and scarce in droughts, while aquifers can act as large, evaporation-free reservoirs. In conjunctive use, communities rely more on surface water in wet years, allowing aquifers to recover, and lean on groundwater in dry years. This works only if pumping in dry years is balanced by recovery in wet years, which requires accounting, monitoring and enforceable rules.</p>

<h3>Managed Aquifer Recharge Methods</h3>
<table>
<thead><tr><th>Method</th><th>Description</th><th>Key considerations</th></tr></thead>
<tbody>
<tr><td>Spreading basins</td><td>Water ponds and infiltrates through permeable soil</td><td>Needs suitable land and soils, clogging management</td></tr>
<tr><td>Floodwater recharge on farmland</td><td>High winter flows spread onto fields</td><td>Crop tolerance, nitrate leaching, legal access to flows</td></tr>
<tr><td>Injection wells</td><td>Treated water injected directly into aquifers</td><td>Water quality compatibility, well clogging, cost</td></tr>
<tr><td>Riverbank filtration</td><td>Wells near rivers draw water through riverbed sediments</td><td>Natural treatment benefit, depends on river quality</td></tr>
</tbody>
</table>

<h3>Governance Challenges</h3>
<p>Groundwater is a classic common-pool resource. Each user has an incentive to pump more before others do, and impacts appear slowly and far away. Historical legal systems often treated groundwater as attached to land ownership with few limits, or separated groundwater law from surface water law even where the two are connected. Effective governance tends to include reliable measurement, clearly defined rights or allocations, local participation in rule-making, credible enforcement, and mechanisms to resolve conflicts. Research on common-pool resources shows that user groups can self-govern successfully when these conditions are present.</p>

<h3>Equity Considerations</h3>
<p>When water tables fall, owners of shallow domestic wells, often lower-income rural households, are usually the first to lose access, while large users can afford deeper wells. Indigenous nations may hold water rights or cultural ties to springs and groundwater-fed places that past management ignored. Policies such as pumping caps, well-mitigation funds and inclusive basin planning aim to share burdens fairly.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define sustainability goals: water levels, storage, subsidence, quality and ecosystems.</li>
<li>Establish monitoring and transparent water accounting.</li>
<li>Evaluate conjunctive use and recharge options for cost, feasibility and water quality.</li>
<li>Design allocations and enforcement with participation from all user groups.</li>
<li>Track impacts on domestic wells, disadvantaged communities and ecosystems.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Groundwater-Surface Water Interaction, Uncertainty and Policy</h2>
<p>Groundwater research increasingly focuses on the coupled behavior of aquifers, rivers, land surface and people. Advanced work grapples with uncertainty arising from the hidden subsurface, with scaling from wells to basins, and with designing policy that functions despite incomplete knowledge.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Hyporheic zone:</strong> the region beneath and beside a streambed where surface water and groundwater mix and exchange</li>
<li><strong>Integrated hydrologic model:</strong> a model that simulates surface flow, unsaturated zone and groundwater in one coupled framework</li>
<li><strong>Heterogeneity:</strong> spatial variation in aquifer properties that strongly controls flow paths and contaminant transport</li>
<li><strong>Equifinality:</strong> the situation in which many different parameter sets reproduce observations equally well</li>
<li><strong>Data assimilation:</strong> methods that update model states and parameters as new observations become available</li>
<li><strong>Socio-hydrology:</strong> the study of two-way feedbacks between human decisions and water systems</li>
</ul>

<h3>Groundwater-Surface Water Interactions</h3>
<p>Streams can gain water from aquifers, lose water to them, or switch between the two seasonally and along their length. Pumping can convert gaining reaches into losing reaches, with impacts on temperature, habitat and water quality. The hyporheic zone is a hotspot for biogeochemical processing, including nitrogen transformation. Representing these exchanges requires fine spatial resolution near streams and careful treatment of streambed properties, which are often poorly known.</p>

<h3>Modeling Uncertainty</h3>
<p>Groundwater models face structural uncertainty in the conceptual model itself, parameter uncertainty because hydraulic properties vary over orders of magnitude, and forcing uncertainty from recharge and climate. Calibration to heads alone is often non-unique, so different parameter sets may fit observations yet predict different futures.</p>
<table>
<thead><tr><th>Approach</th><th>Purpose</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Multi-model ensembles</td><td>Represent alternative conceptual models</td><td>Weighting models is subjective</td></tr>
<tr><td>Bayesian calibration</td><td>Quantify parameter uncertainty</td><td>Computationally expensive for large models</td></tr>
<tr><td>Geostatistical simulation</td><td>Generate plausible heterogeneous fields</td><td>Depends on sparse borehole data</td></tr>
<tr><td>Surrogate models</td><td>Speed up uncertainty analysis</td><td>May miss nonlinear behavior</td></tr>
<tr><td>Remote sensing integration</td><td>Add large-scale storage and deformation data</td><td>Coarse resolution, separation from other storage terms</td></tr>
</tbody>
</table>

<h3>Policy Research</h3>
<p>Policy scholars study why groundwater depletion persists despite known consequences. Explanations include weak monitoring, energy subsidies that make pumping cheap, legal regimes that fail to link groundwater and surface water, and the political difficulty of limiting established users. Proposed responses include groundwater markets, pumping fees, collective local management and direct metering, each with contested effectiveness and equity implications. Socio-hydrological models explore how feedbacks between scarcity, technology and policy can produce cycles of expansion and crisis.</p>

<h3>Contested Questions</h3>
<ul>
<li>How should acceptable streamflow depletion be defined when ecological thresholds are uncertain?</li>
<li>Do groundwater markets improve efficiency without concentrating access among large users?</li>
<li>How should models communicate uncertainty to decision-makers without paralyzing action?</li>
<li>How can non-renewable fossil groundwater be governed across generations?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Integrated models linking aquifers, streams, land use and human decisions at basin scale.</li>
<li>Improved characterization of streambed and aquifer heterogeneity using geophysics and tracers.</li>
<li>Uncertainty-aware decision frameworks for pumping limits and recharge investment.</li>
<li>Evaluation of how climate change alters recharge timing and magnitude.</li>
<li>Comparative studies of governance institutions and their long-term outcomes.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wgwq1',
      question: {
        ELEMENTARY: 'Where is groundwater found?',
        MIDDLE_SCHOOL: 'What is an aquifer?',
        HIGH_SCHOOL: 'What is a cone of depression?',
        UNDERGRADUATE: 'Why is sustainable yield not simply equal to natural recharge?',
        GRADUATE: 'What is managed aquifer recharge?',
        PHD: 'What is equifinality in groundwater modeling?',
      },
      options: {
        ELEMENTARY: ['Underground in spaces between rocks and sand', 'In clouds', 'On top of mountains', 'In the ocean only'],
        MIDDLE_SCHOOL: ['An underground layer that holds and releases useful water', 'A type of fish', 'A water tank on a roof', 'A river'],
        HIGH_SCHOOL: ['A funnel-shaped lowering of the water table around a pumping well', 'A mountain made of sand', 'A cloud shape', 'A kind of artesian spring'],
        UNDERGRADUATE: ['Pumping equal to recharge would eventually capture natural discharge that feeds streams and wetlands', 'Recharge is always zero', 'Aquifers have unlimited water', 'Pumping never affects anything'],
        GRADUATE: ['Intentionally adding water to aquifers for later recovery or environmental benefit', 'Maximum annual rainfall', 'Minimum aquifer recovery', 'Mapping all aquifer regions'],
        PHD: ['Many different parameter sets reproduce observations equally well', 'All models give identical predictions', 'Aquifers are perfectly uniform', 'Data are always complete'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Groundwater fills tiny spaces between rocks, sand and soil underground.',
        MIDDLE_SCHOOL: 'An aquifer is a layer of rock or sediment that holds water and lets wells pump it.',
        HIGH_SCHOOL: 'Pumping draws water toward the well, lowering the water table in a funnel shape.',
        UNDERGRADUATE: 'Before pumping, recharge is balanced by natural discharge; pumping captures part of that discharge.',
        GRADUATE: 'MAR stores water underground on purpose, using basins, injection wells or floodwater spreading.',
        PHD: 'Because many parameter combinations fit the data, calibrated models can still predict different futures.',
      },
    },
    {
      id: 'wgwq2',
      question: {
        ELEMENTARY: 'What is a well?',
        MIDDLE_SCHOOL: 'What is the water table?',
        HIGH_SCHOOL: 'What is a confined aquifer?',
        UNDERGRADUATE: 'What does Darcy\'s law state?',
        GRADUATE: 'What is conjunctive use?',
        PHD: 'What is the hyporheic zone?',
      },
      options: {
        ELEMENTARY: ['A kind of cloud', 'A deep hole that brings up groundwater', 'A tall tree', 'A puddle on the road'],
        MIDDLE_SCHOOL: ['The bottom of the ocean', 'The top of the saturated zone', 'The surface of a lake', 'The height of clouds'],
        HIGH_SCHOOL: ['An aquifer open to the surface', 'An aquifer between low-permeability layers, holding water under pressure', 'A dry layer of sand', 'A water storage tank'],
        UNDERGRADUATE: ['Water always flows uphill', 'Flow is proportional to hydraulic conductivity times the hydraulic gradient', 'All aquifers have the same flow', 'Flow depends only on temperature'],
        GRADUATE: ['Using only groundwater forever', 'Coordinating surface water and groundwater to improve reliability', 'Pumping during floods only', 'Banning all wells'],
        PHD: ['The deepest part of a confined aquifer', 'The zone beneath and beside a streambed where surface and groundwater mix', 'A layer of the atmosphere', 'A type of well casing'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A well is dug or drilled into the ground so pumps can bring groundwater up.',
        MIDDLE_SCHOOL: 'The water table is the boundary below which all spaces are filled with water.',
        HIGH_SCHOOL: 'Confining layers like clay trap the water under pressure, which can create artesian wells.',
        UNDERGRADUATE: 'Darcy\'s law links groundwater flow to conductivity and the head gradient.',
        GRADUATE: 'Conjunctive use leans on surface water in wet years and groundwater in dry years.',
        PHD: 'The hyporheic zone is an exchange area and a hotspot for biogeochemical processing.',
      },
    },
    {
      id: 'wgwq3',
      question: {
        ELEMENTARY: 'What can happen if people pump groundwater faster than rain refills it?',
        MIDDLE_SCHOOL: 'What is baseflow?',
        HIGH_SCHOOL: 'What causes saltwater intrusion?',
        UNDERGRADUATE: 'What does a pumping test help estimate?',
        GRADUATE: 'Why is groundwater called a common-pool resource?',
        PHD: 'Why do energy subsidies matter for groundwater depletion?',
      },
      options: {
        ELEMENTARY: ['It rains chocolate', 'The ground turns blue', 'Wells can run dry', 'Rivers get bigger'],
        MIDDLE_SCHOOL: ['Water from sprinklers', 'Rain falling on a roof', 'Groundwater seeping into streams to keep them flowing in dry weather', 'Water in a bathtub'],
        HIGH_SCHOOL: ['Too much rain', 'Cold winters', 'Coastal pumping drawing seawater inland', 'Planting trees'],
        UNDERGRADUATE: ['Rainfall amount', 'Air temperature', 'Transmissivity and storativity', 'River color'],
        GRADUATE: ['It is owned by one person', 'It is hard to exclude users and one user\'s pumping reduces what others have', 'It never runs out', 'It is always free of rules'],
        PHD: ['They make pumping cheaper, weakening incentives to limit withdrawals', 'They clean groundwater', 'They increase recharge', 'They have no effect'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'If water comes out faster than it goes back in, the water level drops and wells can dry up.',
        MIDDLE_SCHOOL: 'Baseflow is groundwater that keeps streams flowing between rains.',
        HIGH_SCHOOL: 'Pumping fresh groundwater near coasts lowers heads so seawater moves into the aquifer.',
        UNDERGRADUATE: 'Measuring drawdown during pumping reveals how the aquifer transmits and stores water.',
        GRADUATE: 'Shared access with competing withdrawals creates incentives to overpump.',
        PHD: 'Cheap or free electricity for pumps lowers the cost of extraction and can drive depletion.',
      },
    },
    {
      id: 'wgwq4',
      question: {
        ELEMENTARY: 'What is a spring?',
        MIDDLE_SCHOOL: 'Which material lets water flow through most easily?',
        HIGH_SCHOOL: 'Why should a well have a sealed casing?',
        UNDERGRADUATE: 'Why can dense non-aqueous phase liquids be long-lasting contamination sources?',
        GRADUATE: 'Who often loses water access first when water tables fall?',
        PHD: 'Why is calibration to heads alone often insufficient?',
      },
      options: {
        ELEMENTARY: ['A toy that bounces', 'A kind of rain cloud', 'A pipe on a house', 'A place where groundwater comes out of the ground by itself'],
        MIDDLE_SCHOOL: ['Clay', 'Solid granite', 'Concrete', 'Gravel'],
        HIGH_SCHOOL: ['To make the water warmer', 'To make pumping louder', 'To keep fish out', 'To stop surface pollution flowing down along the pipe'],
        UNDERGRADUATE: ['They evaporate immediately', 'They float on the surface and wash away', 'They are harmless', 'They sink below the water table and slowly dissolve over time'],
        GRADUATE: ['Large irrigation users with deep wells', 'Water utilities with big pumps', 'Bottled water companies', 'Owners of shallow domestic wells'],
        PHD: ['Heads are never measured', 'Models never use heads', 'Heads are always perfectly known', 'Different parameter sets can fit heads yet predict different futures'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A spring is where groundwater flows out of the ground on its own.',
        MIDDLE_SCHOOL: 'Gravel has large connected spaces, so water flows through it very easily.',
        HIGH_SCHOOL: 'A sealed casing stops polluted surface water from running down the outside of the well.',
        UNDERGRADUATE: 'These dense liquids pool deep in the aquifer and keep releasing contamination for decades.',
        GRADUATE: 'Shallow domestic wells, often owned by lower-income households, go dry first.',
        PHD: 'Head data alone leave parameters non-unique, so predictions can diverge despite good fits.',
      },
    },
    {
      id: 'wgwq5',
      question: {
        ELEMENTARY: 'Which action helps protect groundwater?',
        MIDDLE_SCHOOL: 'What is overdraft?',
        HIGH_SCHOOL: 'What causes land subsidence from groundwater pumping?',
        UNDERGRADUATE: 'Which source dominates pumped water early in a well\'s life?',
        GRADUATE: 'What is aquifer storage and recovery?',
        PHD: 'What does socio-hydrology study?',
      },
      options: {
        ELEMENTARY: ['Never pouring oil or paint on the ground', 'Pouring paint into the yard', 'Paving every garden', 'Leaving taps running'],
        MIDDLE_SCHOOL: ['Pumping more water out than is recharged over time', 'A kind of rain', 'A deep river', 'Saving water at home'],
        HIGH_SCHOOL: ['Compaction of clay layers as water is removed', 'Earthquakes only', 'Too much rainfall', 'Tree roots'],
        UNDERGRADUATE: ['Storage depletion', 'Induced recharge from the ocean', 'Evaporation from the well', 'Rain falling on the wellhead'],
        GRADUATE: ['Injecting water into a well in wet times and pumping it back later', 'Storing water in plastic tanks', 'Buying bottled water', 'Draining aquifers permanently'],
        PHD: ['Two-way feedbacks between human decisions and water systems', 'Only the chemistry of water', 'Ocean waves', 'The history of plumbing'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Pollution on the ground can soak down into groundwater, so keeping it off the ground protects our water.',
        MIDDLE_SCHOOL: 'Overdraft means taking out more than nature puts back, so water levels fall.',
        HIGH_SCHOOL: 'When water leaves some clay layers they compact, and the land above sinks.',
        UNDERGRADUATE: 'At first, pumped water comes mostly from storage; capture of discharge grows over time.',
        GRADUATE: 'ASR uses the aquifer as an underground reservoir accessed through the same well.',
        PHD: 'Socio-hydrology examines how people and water systems shape each other over time.',
      },
    },
  ],
}

export default expansion
