import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'offshore-wind',
  lessons: [
    {
      id: 're-osw-1',
      title: 'Wind at Sea',
      content: {
        ELEMENTARY: `
<h2>Giant Windmills in the Ocean</h2>
<p>Have you ever stood on a beach and felt the wind blow your hair all over the place? The wind over the ocean is often strong and steady. People have built giant wind turbines out in the sea to catch that wind and turn it into electricity for homes, schools and hospitals on land.</p>

<h3>What Is a Wind Turbine?</h3>
<p>A wind turbine looks like a very tall pinwheel. When the wind pushes on its long blades, they spin. The spinning turns a machine inside called a generator, and the generator makes electricity. Ocean turbines are some of the biggest machines people have ever built. One blade can be longer than a whole football field!</p>
<ul>
<li><strong>Blade:</strong> one of the long arms of a wind turbine that the wind pushes to make it spin</li>
<li><strong>Generator:</strong> a machine that turns spinning motion into electricity</li>
<li><strong>Tower:</strong> the tall pole that holds the blades high up where the wind is strong</li>
</ul>

<h3>Why Put Them in the Sea?</h3>
<p>On land, hills, trees and buildings get in the way of the wind and slow it down. Over the flat ocean there is nothing in the way, so the wind blows stronger and more steadily. There is also lots of space out at sea for many turbines.</p>

<h3>How Does the Electricity Get Home?</h3>
<p>The electricity travels through big cables laid on the bottom of the sea. The cables come up on the beach and connect to power lines that carry the electricity to towns and cities.</p>
<ul>
<li><strong>Cable:</strong> a thick, covered wire that carries electricity, even under water</li>
<li><strong>Wind farm:</strong> a group of many wind turbines working together in one place</li>
<li><strong>Ocean floor:</strong> the bottom of the sea, where some turbines are fixed in place</li>
</ul>

<h3>Caring for Sea Life</h3>
<p>Builders try hard to protect fish, whales and birds. They study where animals live and travel, and they try to make less noise when building. Some fish even like to gather around the bottom of the turbines!</p>

<h3>Things You Can Try</h3>
<ol>
<li>Make a paper pinwheel and blow on it softly, then harder. Which way spins faster?</li>
<li>Count how many windy days you notice in one week.</li>
<li>Draw a wind farm in the ocean with cables going to your town.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>How Wind Turbines Work at Sea</h2>
<p>Offshore wind means wind turbines built in the ocean or in large lakes, away from the coast. Many countries are building offshore wind farms because ocean winds are powerful and dependable, and many big cities sit close to the coast where the electricity is needed.</p>

<h3>Why Ocean Wind Is Special</h3>
<p>Wind slows down when it rubs against rough surfaces such as forests, hills and buildings. The sea surface is much smoother, so offshore wind is usually stronger and more consistent. The energy in the wind rises very steeply as wind speed increases: if wind blows twice as fast, it carries about eight times as much power. That is why even a little more wind speed makes a big difference.</p>

<h3>Parts of an Offshore Wind Farm</h3>
<ol>
<li><strong>Turbines</strong> catch the wind and generate electricity.</li>
<li><strong>Foundations</strong> hold the turbines steady in the water.</li>
<li><strong>Array cables</strong> link the turbines together.</li>
<li><strong>An offshore substation</strong> collects the power and raises its voltage so less is lost on the trip to shore.</li>
<li><strong>Export cables</strong> run along the seabed to the coast and connect to the grid.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Offshore:</strong> located out in the sea or a large lake rather than on land</li>
<li><strong>Foundation:</strong> the structure that keeps a turbine fixed to the seabed or steady in the water</li>
<li><strong>Floating turbine:</strong> a turbine on a platform that floats and is held in place by anchors and lines</li>
<li><strong>Substation:</strong> equipment that changes the voltage of electricity so it can travel efficiently</li>
<li><strong>Wind farm:</strong> a group of wind turbines placed together to produce large amounts of electricity</li>
<li><strong>Seabed:</strong> the ground at the bottom of the ocean</li>
</ul>

<h3>Fixed or Floating?</h3>
<table>
<thead><tr><th>Type</th><th>How it stays put</th><th>Where it works</th></tr></thead>
<tbody>
<tr><td>Fixed-bottom</td><td>Attached directly to the seabed with steel piles or heavy bases</td><td>Shallower water near the coast</td></tr>
<tr><td>Floating</td><td>Floats on a platform tied to the seabed with mooring lines and anchors</td><td>Deep water, where fixed foundations are too costly</td></tr>
</tbody>
</table>

<h3>Challenges</h3>
<p>Building at sea is hard. Ships, cranes and workers can only operate in calm weather. Salt water causes rust, so equipment needs special protection. Builders must also protect marine animals, avoid busy shipping lanes, and work with people who fish in the area. Still, offshore wind can produce a lot of clean electricity close to coastal cities, which makes it an important part of a clean energy future.</p>
`,
        HIGH_SCHOOL: `
<h2>Offshore Wind: Technology, Resources and Challenges</h2>
<p>Offshore wind has grown from a few small demonstration projects into a major industry. Turbines have become dramatically larger, foundations have diversified, and floating designs are opening deep waters. This lesson explains how offshore wind works, why it can be so productive, and the trade-offs involved in building it.</p>

<h3>The Resource</h3>
<p>Power in the wind depends on air density, the area swept by the blades, and the cube of wind speed. That cube relationship means a site with modestly higher average wind speed produces much more energy. Offshore sites benefit from smooth surfaces and fewer obstacles, giving higher and steadier winds. Many offshore sites also show helpful timing, with strong winds during evenings or winter when demand can be high.</p>

<h3>Bigger Turbines</h3>
<p>Offshore turbines are among the largest rotating machines in the world. Bigger rotors sweep more area and reach higher, stronger winds, and fewer, larger turbines mean fewer foundations, cables and maintenance visits per unit of energy. Transporting and installing these giants requires specialized vessels and port facilities.</p>

<h3>Foundations Compared</h3>
<table>
<thead><tr><th>Foundation</th><th>Description</th><th>Typical setting</th></tr></thead>
<tbody>
<tr><td>Monopile</td><td>A single large steel tube driven into the seabed</td><td>Shallow water, the most common choice</td></tr>
<tr><td>Jacket</td><td>A lattice steel frame on several smaller piles</td><td>Deeper or harder seabeds</td></tr>
<tr><td>Gravity base</td><td>A heavy concrete base resting on the seabed</td><td>Sites where piling is difficult</td></tr>
<tr><td>Floating platform</td><td>A buoyant structure moored with lines and anchors</td><td>Deep water beyond the reach of fixed foundations</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Fixed-bottom foundation:</strong> a structure attached directly to the seabed, used in relatively shallow water</li>
<li><strong>Capacity factor:</strong> the actual energy produced compared with the maximum possible if the turbine ran at full power all the time</li>
<li><strong>Export cable:</strong> the high-voltage cable that carries power from the wind farm to the shore</li>
<li><strong>Wake effect:</strong> slower, more turbulent wind behind a turbine that reduces output of turbines downstream</li>
<li><strong>Installation vessel:</strong> a specialized ship that lifts and places foundations, towers and blades at sea</li>
</ul>

<h3>Environmental and Social Trade-offs</h3>
<ul>
<li><strong>Construction noise:</strong> pile driving can disturb marine mammals; mitigation includes seasonal timing, bubble curtains and monitoring.</li>
<li><strong>Birds and bats:</strong> careful siting avoids major migration routes and feeding areas.</li>
<li><strong>Habitat:</strong> foundations can act as artificial reefs, but also change local ecosystems.</li>
<li><strong>Ocean users:</strong> fishing, shipping, defense and tourism all share the sea, so planning and dialogue are essential.</li>
<li><strong>Visual impact:</strong> farms far from shore are less visible but cost more to connect.</li>
</ul>

<h3>Real-World Applications</h3>
<p>Coastal regions with crowded land and strong sea winds have led offshore development. Offshore wind can supply large amounts of power near load centers, reduce reliance on imported fuels, and create port and manufacturing jobs. Its output still varies with the weather, so it works best alongside transmission, storage and other clean resources.</p>
`,
        UNDERGRADUATE: `
<h2>Offshore Wind Economics, Supply Chains and Project Development</h2>
<p>Offshore wind combines a strong resource with demanding engineering and logistics. Its costs have fallen substantially over the past decade, driven by larger turbines, industrial learning and competitive procurement, yet it remains sensitive to interest rates, commodity prices and supply chain bottlenecks. This lesson analyzes the cost drivers, the development process and the supply chain that underpins the industry.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Levelized cost of energy:</strong> the average lifetime cost of producing each unit of electricity, including capital, operations and financing</li>
<li><strong>Capacity factor:</strong> actual annual generation divided by the generation possible at full rated output all year</li>
<li><strong>Capital expenditure:</strong> the up-front spending on turbines, foundations, cables, substations and installation</li>
<li><strong>Weather window:</strong> a period of calm enough conditions for vessels to safely install or maintain equipment</li>
<li><strong>Wake loss:</strong> energy lost because upstream turbines slow the wind reaching downstream turbines</li>
<li><strong>Offtake agreement:</strong> a long-term contract that sets the price paid for the project's electricity</li>
</ul>

<h3>What Drives Cost</h3>
<table>
<thead><tr><th>Cost element</th><th>Main drivers</th><th>Levers for reduction</th></tr></thead>
<tbody>
<tr><td>Turbines</td><td>Size, materials, manufacturing capacity</td><td>Larger rotors, standardization, serial production</td></tr>
<tr><td>Foundations</td><td>Water depth, seabed conditions, steel prices</td><td>Design optimization, site selection, floating designs for deep water</td></tr>
<tr><td>Electrical system</td><td>Distance to shore, voltage, substations</td><td>Shared transmission, high-voltage direct current for long distances</td></tr>
<tr><td>Installation</td><td>Vessel availability, weather, port capacity</td><td>Purpose-built vessels, port upgrades, better scheduling</td></tr>
<tr><td>Operations and maintenance</td><td>Access difficulty, failure rates</td><td>Condition monitoring, predictive maintenance, service vessels</td></tr>
<tr><td>Financing</td><td>Interest rates, risk perception</td><td>Revenue certainty, de-risked sites, mature contracts</td></tr>
</tbody>
</table>
<p>Because offshore wind is capital-intensive with no fuel cost, the cost of capital strongly affects the levelized cost. A rise in interest rates raises the annual payment on the large up-front investment, which can squeeze projects that agreed fixed prices before rates increased.</p>

<h3>Capacity Factor Reasoning</h3>
<p>Offshore capacity factors are commonly well above typical onshore values, and at strong sites can approach or exceed one half. A higher capacity factor spreads fixed costs over more energy. However, losses from wakes, electrical transmission and downtime must be subtracted from the theoretical output, so developers model them carefully when estimating revenue.</p>

<h3>The Development Process</h3>
<ol>
<li>Marine spatial planning and leasing designate areas and award development rights.</li>
<li>Site surveys measure wind, waves, seabed geology and ecology.</li>
<li>Environmental assessment and consultation with fishers, shipping and communities.</li>
<li>Design, permitting and securing an offtake agreement and grid connection.</li>
<li>Financing, procurement and manufacturing of major components.</li>
<li>Installation at sea, commissioning and roughly two to three decades of operation, followed by decommissioning or repowering.</li>
</ol>

<h3>Supply Chain Constraints</h3>
<p>Specialized items such as large monopiles, high-voltage cables, installation vessels and suitable ports are produced by relatively few suppliers. When many projects are planned at once, these bottlenecks can cause delays and cost increases. Governments seeking local jobs often invest in ports and factories, though local content requirements can raise costs if they limit competition.</p>

<h3>Applied Checklist</h3>
<ol>
<li>What are the wind resource, water depth, distance to shore and seabed conditions?</li>
<li>Which foundation and electrical design fits the site?</li>
<li>What capacity factor remains after wake, electrical and availability losses?</li>
<li>How exposed is the project to interest rate and commodity price changes?</li>
<li>Are vessels, ports and cables available on the needed schedule?</li>
</ol>
`,
        GRADUATE: `
<h2>Offshore Wind Policy, Floating Platforms and Grid Integration</h2>
<p>Offshore wind deployment is shaped by public decisions as much as by technology: governments control seabed leasing, set procurement rules, plan transmission and balance competing ocean uses. As projects move farther offshore and into deeper water, floating platforms and coordinated offshore grids become central. This lesson examines policy design, the floating wind transition and the integration of large offshore volumes into power systems.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Marine spatial planning:</strong> a public process that allocates ocean areas among uses such as energy, fishing, shipping and conservation</li>
<li><strong>Contract for difference:</strong> a revenue mechanism that pays generators the gap between a strike price and the market price, in both directions</li>
<li><strong>Spar buoy:</strong> a floating platform stabilized by a deep, heavily ballasted cylinder below the waterline</li>
<li><strong>Semi-submersible:</strong> a floating platform that gains stability from several connected columns spread apart</li>
<li><strong>Tension leg platform:</strong> a floating platform held down by taut vertical tethers anchored to the seabed</li>
<li><strong>Meshed offshore grid:</strong> an interconnected network linking multiple wind farms and countries rather than separate radial cables</li>
</ul>

<h3>Procurement and Revenue Design</h3>
<table>
<thead><tr><th>Approach</th><th>How it works</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Centralized site model</td><td>Government surveys sites and offers them with grid access</td><td>Lower developer risk, but heavier public workload</td></tr>
<tr><td>Decentralized model</td><td>Developers choose sites and handle surveys</td><td>More flexibility, but duplicated effort and higher risk</td></tr>
<tr><td>Two-sided contracts for difference</td><td>Stabilizes revenue around a strike price</td><td>Cuts financing costs; exposes consumers if market prices fall</td></tr>
<tr><td>Seabed auctions on price</td><td>Developers bid for lease rights</td><td>Raises public revenue, but high bids can strain project viability</td></tr>
<tr><td>Indexation clauses</td><td>Adjusts prices for inflation or commodity costs</td><td>Reduces cancellations, shifts some risk to buyers</td></tr>
</tbody>
</table>
<p>Recent experience has shown that fixed-price contracts signed in low-interest periods can become unviable when costs rise, leading to renegotiations or cancellations. Policymakers increasingly balance competitive pressure against the need for deliverable projects.</p>

<h3>Floating Wind</h3>
<p>Much of the world's offshore wind resource lies over water too deep for fixed foundations. Floating platforms can unlock coastlines with steep continental shelves. Each platform type balances stability, steel use, draft and port requirements; spar designs need deep water even at the quayside, while semi-submersibles can be assembled in shallower ports and towed out. Floating wind remains more expensive than fixed-bottom today, and cost reduction depends on standardized designs, serial manufacturing, mooring innovation and port investment.</p>

<h3>Grid Integration</h3>
<p>Large offshore build-outs require major transmission planning. Connecting each wind farm with its own radial cable is simple but can multiply landfalls and onshore disruption. Coordinated or meshed offshore grids can reduce total cable length, connect multiple countries and allow power trading, but they raise questions about ownership, cost allocation and regulatory jurisdiction. Onshore, reinforcements are often needed where cables land, and delays in onshore grid upgrades can strand offshore capacity.</p>

<h3>Governance and Equity</h3>
<p>Ocean space is shared, and some groups depend on it more than others. Fishing communities may lose access to grounds; coastal and Indigenous communities may hold cultural ties to waters and seabeds. Meaningful consultation, compensation or co-use arrangements, and benefit-sharing through local jobs or community funds affect legitimacy. Port investments can bring economic revival to coastal towns, but whether local residents gain skilled employment depends on training programs.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess the leasing and procurement model for risk allocation and deliverability.</li>
<li>Match platform type to water depth, seabed and port capability.</li>
<li>Plan offshore and onshore transmission together, including coordinated designs.</li>
<li>Evaluate ecological impacts and co-use opportunities with ocean users.</li>
<li>Track who receives jobs, revenues and costs across communities.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Offshore Wind</h2>
<p>As offshore turbines grow larger and move to deeper water, research challenges multiply. Rotors now interact with atmospheric phenomena that smaller machines barely sensed, floating platforms introduce coupled motions, and large clusters of farms may alter regional wind and ocean conditions. This lesson surveys modeling approaches, environmental research and contested questions shaping the next generation of offshore wind.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Coupled aero-hydro-servo-elastic simulation:</strong> modeling that links aerodynamics, wave and current loads, control systems and structural flexibility together</li>
<li><strong>Large-eddy simulation:</strong> a fluid dynamics method that resolves large turbulent structures to study wakes and atmospheric flow</li>
<li><strong>Engineering wake model:</strong> a simplified analytical model of wake expansion and recovery used for layout optimization</li>
<li><strong>Cluster wake:</strong> the reduction in wind speed downstream of an entire wind farm, which can affect neighboring farms</li>
<li><strong>Wake steering:</strong> deliberately yawing upstream turbines to deflect wakes away from downstream machines</li>
<li><strong>Marine atmospheric boundary layer:</strong> the lowest layer of the atmosphere over the sea, shaped by stability, waves and heat exchange</li>
</ul>

<h3>Wake and Atmospheric Modeling</h3>
<p>Wakes behave differently offshore because low surface roughness means turbulence is often weak, so wakes recover slowly and can persist for long distances, particularly in stable atmospheric conditions. Engineering wake models are fast enough for layout optimization but can misestimate losses in large arrays. Large-eddy simulation captures turbulent detail but is computationally expensive. Mesoscale weather models with wind farm parameterizations can study cluster wakes between neighboring farms, an increasingly important issue where many projects share a region.</p>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Engineering wake models</td><td>Fast, suitable for optimization</td><td>Simplified physics, calibration dependent</td></tr>
<tr><td>Large-eddy simulation</td><td>Resolves turbulence and wake interaction</td><td>High computational cost</td></tr>
<tr><td>Mesoscale models with parameterization</td><td>Captures farm-to-farm and regional effects</td><td>Coarse resolution of individual turbines</td></tr>
<tr><td>Data-driven surrogates</td><td>Very fast once trained</td><td>Uncertain outside training conditions</td></tr>
</tbody>
</table>

<h3>Floating Wind Dynamics</h3>
<p>Floating turbines move in response to wind and waves, and these motions feed back on rotor aerodynamics and control. Conventional pitch controllers designed for fixed turbines can create instability when the platform pitches, so controllers must be redesigned for floating systems. Certification requires simulating many combinations of wind, waves, currents and fault conditions over the design life, making computational cost a binding constraint. Mooring fatigue, dynamic power cables and shared anchors are active topics.</p>

<h3>Environmental Research</h3>
<p>Open questions include how pile-driving noise affects marine mammal behavior and populations, how operational noise and electromagnetic fields from cables influence fish and invertebrates, how foundations change habitats and species distributions, and whether large farms alter local mixing and stratification in the ocean. Cumulative effects across many farms are harder to study than individual project impacts, and long-term baseline data are often missing.</p>

<h3>Contested Questions</h3>
<ul>
<li>How large turbine rotors can grow before structural, logistic and reliability limits outweigh scale benefits.</li>
<li>How to allocate wake losses between neighboring farms and whether this requires regulation.</li>
<li>Whether floating wind can follow a cost-decline path similar to fixed-bottom offshore.</li>
<li>How to design ecological monitoring that detects population-level rather than local effects.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Validated wake models for very large rotors and multi-farm clusters in stable conditions.</li>
<li>Control co-design methods integrating platform, rotor and controller optimization.</li>
<li>Reduced-order models that make probabilistic certification computationally feasible.</li>
<li>Cumulative impact frameworks combining ecological, fishing and social data.</li>
<li>Circular design and recycling methods for composite blades at end of life.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'roswq1',
      question: {
        ELEMENTARY: 'Why put wind turbines in the ocean?',
        MIDDLE_SCHOOL: 'Why is ocean wind usually stronger than wind over land?',
        HIGH_SCHOOL: 'What is a fixed-bottom foundation?',
        UNDERGRADUATE: 'What is capacity factor?',
        GRADUATE: 'What is a spar buoy?',
        PHD: 'What is the wake effect?',
      },
      options: {
        ELEMENTARY: ['The wind is stronger and steadier there', 'Fish need electricity', 'It is easier to paint them there', 'The ocean has no wind'],
        MIDDLE_SCHOOL: ['The sea surface is smoother, with no hills, trees or buildings to slow the wind', 'Salt water pushes the air faster', 'The Moon pulls the wind over the sea', 'Ocean wind is warmer'],
        HIGH_SCHOOL: ['A structure attached directly to the seabed in relatively shallow water', 'A platform floating on the waves', 'A turbine that needs no foundation', 'A foundation made of sand bags'],
        UNDERGRADUATE: ['Actual annual generation divided by generation at full rated output all year', 'The cost of the turbine divided by its height', 'The size of the wind farm in square kilometers', 'The average wind speed at hub height'],
        GRADUATE: ['A floating platform stabilized by a deep, heavily ballasted cylinder', 'A buoy that marks shipping lanes', 'A type of seabed survey instrument', 'A wind direction indicator'],
        PHD: ['Slower, more turbulent wind behind turbines that reduces output downstream', 'Waves created by turbine foundations', 'Noise from rotating blades', 'Faster wind behind a turbine'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Wind over the ocean blows stronger and more steadily because nothing gets in its way.',
        MIDDLE_SCHOOL: 'Rough surfaces slow the wind; the smooth sea lets it blow stronger and more consistently.',
        HIGH_SCHOOL: 'Fixed-bottom foundations such as monopiles and jackets are attached to the seabed in shallower water.',
        UNDERGRADUATE: 'Capacity factor compares real output with the maximum possible; strong offshore sites score high.',
        GRADUATE: 'Spar buoys gain stability from heavy ballast deep below the waterline.',
        PHD: 'Upstream turbines extract energy and add turbulence, leaving slower wind for machines behind them.',
      },
    },
    {
      id: 'roswq2',
      question: {
        ELEMENTARY: 'How does electricity from ocean turbines get to your town?',
        MIDDLE_SCHOOL: 'If the wind blows twice as fast, about how much more power does it carry?',
        HIGH_SCHOOL: 'Which foundation is the most common choice in shallow water?',
        UNDERGRADUATE: 'Why do rising interest rates hurt offshore wind projects so much?',
        GRADUATE: 'What does a two-sided contract for difference do?',
        PHD: 'Why do offshore wakes often persist for long distances?',
      },
      options: {
        ELEMENTARY: ['By boat in buckets', 'Through cables laid on the sea floor', 'Through the air like radio', 'By birds carrying it'],
        MIDDLE_SCHOOL: ['The same amount', 'About eight times as much', 'Half as much', 'Exactly twice as much'],
        HIGH_SCHOOL: ['Gravity base', 'Monopile', 'Floating platform', 'Tension leg platform'],
        UNDERGRADUATE: ['They raise fuel costs', 'Capital-intensive projects pay more each year on their large up-front investment', 'They slow down the wind', 'They make turbines heavier'],
        GRADUATE: ['Sets electricity demand for the project', 'Pays or collects the gap between a strike price and the market price', 'Bans other generators from the market', 'Fixes the price of steel'],
        PHD: ['Strong turbulence over the sea mixes wakes away quickly', 'Low surface roughness means weak turbulence, so wakes recover slowly', 'Waves push the wake back upstream', 'Salt in the air thickens the wake'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Big cables on the bottom of the sea carry electricity to the shore and onto power lines.',
        MIDDLE_SCHOOL: 'Wind power rises with the cube of wind speed, so doubling speed gives about eight times the power.',
        HIGH_SCHOOL: 'A monopile, a single large steel tube driven into the seabed, is the most common shallow-water foundation.',
        UNDERGRADUATE: 'With no fuel costs, financing is a big share of cost, so higher rates raise the levelized cost.',
        GRADUATE: 'Two-sided contracts pay the generator when prices are low and claw back when prices are high.',
        PHD: 'Smooth sea surfaces produce little turbulence, especially in stable air, so wakes linger downstream.',
      },
    },
    {
      id: 'roswq3',
      question: {
        ELEMENTARY: 'What part of a wind turbine does the wind push to make it spin?',
        MIDDLE_SCHOOL: 'What does an offshore substation do?',
        HIGH_SCHOOL: 'Which is a way to reduce harm to marine mammals during construction?',
        UNDERGRADUATE: 'What is a weather window?',
        GRADUATE: 'What is a main advantage of a meshed offshore grid?',
        PHD: 'What is wake steering?',
      },
      options: {
        ELEMENTARY: ['The cable', 'The tower', 'The blades', 'The beach'],
        MIDDLE_SCHOOL: ['Catches fish for workers', 'Stores wind in tanks', 'Collects power and raises its voltage to reduce losses on the way to shore', 'Cleans salt off the blades'],
        HIGH_SCHOOL: ['Driving piles louder', 'Building during whale migration season', 'Using bubble curtains and seasonal timing', 'Removing all monitoring'],
        UNDERGRADUATE: ['A forecast of electricity prices', 'The period when turbines are switched off for the year', 'A calm period when vessels can safely install or maintain equipment', 'The view of a wind farm from the shore'],
        GRADUATE: ['It removes the need for any cables', 'It makes each farm completely independent', 'It can reduce total cable length and link multiple farms and countries', 'It eliminates onshore grid upgrades'],
        PHD: ['Steering ships around wind farms', 'Pointing all turbines away from the wind', 'Yawing upstream turbines to deflect wakes away from downstream machines', 'Moving floating platforms to new sites'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The wind pushes the long blades, and the spinning blades turn the generator.',
        MIDDLE_SCHOOL: 'Higher voltage means less electricity is lost while traveling through the export cable.',
        HIGH_SCHOOL: 'Bubble curtains dampen pile-driving noise, and timing avoids sensitive seasons.',
        UNDERGRADUATE: 'Offshore work can only proceed when waves and wind are calm enough for safe operations.',
        GRADUATE: 'Coordinated grids share infrastructure, reduce landfalls and allow cross-border power trading.',
        PHD: 'Wake steering sacrifices a little upstream output to raise total farm production.',
      },
    },
    {
      id: 'roswq4',
      question: {
        ELEMENTARY: 'What is a wind farm?',
        MIDDLE_SCHOOL: 'Where are floating wind turbines most useful?',
        HIGH_SCHOOL: 'Why do bigger turbines lower costs per unit of energy?',
        UNDERGRADUATE: 'Why can supply chains slow offshore wind growth?',
        GRADUATE: 'Why can semi-submersible platforms be easier to deploy than spar designs?',
        PHD: 'Why must controllers be redesigned for floating turbines?',
      },
      options: {
        ELEMENTARY: ['A farm that grows wind', 'A field of windy flowers', 'A store that sells fans', 'A group of wind turbines working together'],
        MIDDLE_SCHOOL: ['In small ponds', 'On mountain tops', 'Next to houses', 'In deep water where fixed foundations cost too much'],
        HIGH_SCHOOL: ['They spin more slowly', 'They are cheaper to paint', 'They need no cables', 'They reach stronger winds and need fewer foundations and cables per unit of energy'],
        UNDERGRADUATE: ['There are too many suppliers', 'Wind is in short supply', 'Turbines never need parts', 'Few suppliers make large monopiles, cables, vessels and ports'],
        GRADUATE: ['They need no mooring lines', 'They only work in shallow water', 'They are always cheaper than fixed foundations', 'They can be assembled in shallower ports and towed out'],
        PHD: ['Floating turbines have no blades', 'Waves stop the rotor', 'Controllers are not used offshore', 'Fixed-turbine pitch control can cause instability when the platform pitches'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A wind farm is a group of turbines placed together to make lots of electricity.',
        MIDDLE_SCHOOL: 'Floating platforms are anchored with lines, so they work in deep water.',
        HIGH_SCHOOL: 'Larger rotors capture more wind, and fewer machines mean less infrastructure per unit of energy.',
        UNDERGRADUATE: 'When many projects compete for scarce specialized items, delays and cost increases follow.',
        GRADUATE: 'Spars need deep water even at the quayside, while semi-submersibles have a shallower draft.',
        PHD: 'Platform motion couples with rotor aerodynamics, so conventional control can amplify oscillations.',
      },
    },
    {
      id: 'roswq5',
      question: {
        ELEMENTARY: 'What do builders do to care for sea animals?',
        MIDDLE_SCHOOL: 'Why is building wind turbines at sea difficult?',
        HIGH_SCHOOL: 'Why must offshore wind planning involve fishing and shipping?',
        UNDERGRADUATE: 'Which loss must be subtracted from theoretical output when estimating revenue?',
        GRADUATE: 'Why can fixed-price contracts signed in low-interest periods become a problem?',
        PHD: 'Why are cumulative environmental effects hard to study?',
      },
      options: {
        ELEMENTARY: ['Study where animals live and try to make less noise', 'Paint the turbines bright pink', 'Feed the fish every day', 'Build only at night'],
        MIDDLE_SCHOOL: ['Work depends on calm weather and salt water causes rust', 'The ocean has no wind', 'Turbines float away every day', 'Electricity cannot travel through cables'],
        HIGH_SCHOOL: ['Many groups share the sea, so planning must balance their uses', 'Ships provide the wind', 'Fishing boats power the turbines', 'Shipping lanes have the weakest wind'],
        UNDERGRADUATE: ['Wake, electrical and availability losses', 'Fuel costs', 'Coal delivery delays', 'Sunlight reflection losses'],
        GRADUATE: ['When costs and rates rise, the agreed price may no longer cover the project', 'They always pay too much to developers', 'They forbid building turbines', 'They set wind speeds by law'],
        PHD: ['Effects span many farms and long periods, and baseline data are often missing', 'There is only one wind farm in the world', 'Marine life never changes', 'Cumulative effects are always zero'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Builders study animal homes and travel routes and try to keep construction quieter.',
        MIDDLE_SCHOOL: 'Crews need calm seas to work, and salt water corrodes equipment.',
        HIGH_SCHOOL: 'Fishing, shipping, defense and tourism all use the ocean, so offshore wind must fit among them.',
        UNDERGRADUATE: 'Real output is lower than theoretical because of wakes, electrical losses and downtime.',
        GRADUATE: 'Rising costs after the contract is signed can make projects unviable, leading to cancellations.',
        PHD: 'Population-level effects across many projects need long-term, regional monitoring that is often lacking.',
      },
    },
  ],
}

export default expansion
