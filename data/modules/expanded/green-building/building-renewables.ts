import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'building-renewables',
  lessons: [
    {
      id: 'gb-ren-1',
      title: 'Buildings Make Power',
      content: {
        ELEMENTARY: `
<h2>A Building That Is Its Own Power Station</h2>
<p>Most buildings get their electricity from far away, through wires on poles or under the ground. But some buildings can make their own energy, right where they stand! They use sunshine, wind and even the warmth hidden in the ground. Let's meet the team of helpers that let a building make power.</p>

<h3>Helper One: The Sun</h3>
<p>Solar panels are flat, shiny panels that turn sunlight into electricity. They can sit on roofs, cover car parks or even be built into walls. Another kind of solar helper, called a solar water heater, uses the sun's warmth to heat water for baths and washing up.</p>
<ul>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Solar water heater:</strong> a box on the roof that uses sunshine to make water warm</li>
</ul>

<h3>Helper Two: Wind and Ground</h3>
<p>Some buildings in windy places have small wind turbines. The wind pushes the blades around, and the spinning makes electricity. Deep under the ground, the soil stays about the same temperature all year. A special heat pump can use that steady warmth to help heat a building in winter and cool it in summer.</p>
<ul>
<li><strong>Wind turbine:</strong> a machine with blades that spin in the wind to make electricity</li>
<li><strong>Ground heat:</strong> the steady warmth stored in the soil under our feet</li>
</ul>

<h3>Saving Energy for Later</h3>
<p>The sun goes down at night, and the wind does not always blow. So some buildings have a big battery. The battery stores extra electricity from sunny times so the building can use it later, like keeping a snack in your lunchbox for after school.</p>
<ul>
<li><strong>Battery:</strong> a box that stores electricity so it can be used later</li>
</ul>

<h3>Sharing With Neighbors</h3>
<p>When a building makes more electricity than it needs, it can send the extra to other buildings through the power lines. Some neighborhoods even share one big set of solar panels, so everyone gets clean energy.</p>

<h3>You Can Help Too</h3>
<ol>
<li>Look for solar panels on roofs near your home or school and count them.</li>
<li>Turn off lights and screens so the building's own power goes further.</li>
<li>Ask your class if your school could use the sun to make energy.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>How Renewable Energy Systems Work on Buildings</h2>
<p>A building can do more than use energy. With the right equipment it can collect energy from the sun, wind and ground. These are called <em>renewable</em> sources because nature keeps refilling them. This lesson looks at the main building systems, how each works, and how they fit together.</p>

<h3>Solar Electricity</h3>
<p>Solar panels are made of photovoltaic cells, usually made from silicon. When sunlight hits a cell, it knocks electrons loose and makes them flow, creating direct current (DC) electricity. A device called an inverter changes it into alternating current (AC), the kind used by lights and outlets.</p>

<h3>Solar Heat</h3>
<p><em>Solar thermal</em> is different from solar electricity. Instead of making electricity, solar thermal collectors absorb the sun's heat and pass it to water or another fluid. The warm water is stored in an insulated tank and used for showers, sinks and sometimes space heating. Solar thermal collectors can turn a large share of sunlight into useful heat.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Renewable energy:</strong> energy from sources that nature keeps replacing, like sunlight and wind</li>
<li><strong>Photovoltaic cell:</strong> a thin layer of material that turns sunlight directly into electricity</li>
<li><strong>Inverter:</strong> a device that changes direct current into alternating current</li>
<li><strong>Solar thermal:</strong> using the sun's heat to warm water or air instead of making electricity</li>
<li><strong>Ground-source heat pump:</strong> a system that uses the steady temperature underground to heat and cool a building</li>
<li><strong>Net metering:</strong> an arrangement where a building gets credit for extra electricity it sends to the grid</li>
</ul>

<h3>Comparing Building Renewables</h3>
<table>
<thead><tr><th>System</th><th>What it makes</th><th>Works best when</th></tr></thead>
<tbody>
<tr><td>Solar panels</td><td>Electricity</td><td>Sunny roofs with little shade</td></tr>
<tr><td>Solar thermal collectors</td><td>Hot water</td><td>Buildings that use lots of hot water</td></tr>
<tr><td>Small wind turbine</td><td>Electricity</td><td>Open, windy sites away from tall obstacles</td></tr>
<tr><td>Ground-source heat pump</td><td>Heating and cooling</td><td>There is space to place pipes underground</td></tr>
</tbody>
</table>

<h3>Putting It Together</h3>
<p>Many green buildings combine these systems. Solar panels make electricity, a heat pump uses that electricity to heat and cool efficiently, and a battery stores extra power. The building stays connected to the grid for times when its own systems are not enough. First, though, designers make the building efficient, because a building that uses less energy needs fewer panels.</p>
`,
        HIGH_SCHOOL: `
<h2>Building Renewables: Photovoltaics, Solar Thermal, Ground Heat and Small Wind</h2>
<p>On-site renewable energy turns buildings from passive consumers into active parts of the energy system. The main technologies are photovoltaics, solar thermal collectors, ground-coupled heat pumps and, in limited cases, small wind turbines. Each has different physics, costs and site requirements, and the best choice depends on climate, building type and how energy is used.</p>

<h3>Photovoltaics: Added or Integrated</h3>
<p>Photovoltaic modules can be mounted on top of a roof or built into the building itself. <em>Building-integrated photovoltaics</em> (BIPV) replace ordinary materials such as roof tiles, cladding or glass with products that generate electricity. Integration can save material and improve appearance, but integrated modules often run hotter, because they have less air behind them, and that slightly lowers their efficiency.</p>
<ul>
<li><strong>Building-integrated photovoltaics:</strong> solar-generating products that replace conventional roofing, facade or glazing materials</li>
<li><strong>Capacity factor:</strong> actual energy produced over a period divided by what the system would produce running at full power the whole time</li>
<li><strong>Solar fraction:</strong> the share of a building's hot water or heating demand supplied by solar thermal</li>
<li><strong>Coefficient of performance:</strong> the ratio of heat delivered by a heat pump to the electricity it uses</li>
<li><strong>Borehole:</strong> a deep, narrow hole drilled to hold the pipe loops of a ground-source heat pump</li>
<li><strong>Turbulence:</strong> chaotic, gusty airflow around buildings that reduces wind turbine output and increases wear</li>
</ul>

<h3>Solar Thermal and Ground Heat</h3>
<p>Solar thermal collectors come in two common types: flat-plate collectors and evacuated tubes, which reduce heat loss using a vacuum. They are efficient at converting sunlight into heat but need storage and have a supply mismatch: most sun in summer, most heating demand in winter. Ground-source heat pumps circulate fluid through buried loops, using stable underground temperatures to move heat efficiently. They are not generators, but they deliver several units of heat for each unit of electricity, making them a key partner to on-site electricity.</p>

<h3>Comparing the Options</h3>
<table>
<thead><tr><th>Technology</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Rooftop PV</td><td>Modular, falling costs, low maintenance</td><td>Output only in daylight; limited by roof area</td></tr>
<tr><td>BIPV facades</td><td>Uses walls and replaces materials</td><td>Vertical surfaces receive less sun; higher cost</td></tr>
<tr><td>Solar thermal</td><td>High conversion of sunlight to heat</td><td>Seasonal mismatch; plumbing and maintenance</td></tr>
<tr><td>Ground-source heat pump</td><td>Very efficient heating and cooling</td><td>High drilling or trenching cost</td></tr>
<tr><td>Small wind</td><td>Can produce at night and in winter</td><td>Poor output in turbulent urban settings</td></tr>
</tbody>
</table>

<h3>Why Urban Wind Usually Disappoints</h3>
<p>Wind power rises steeply with wind speed, so small drops in speed cause large drops in power. Around buildings, wind is slowed and made turbulent by surrounding structures. As a result, small turbines mounted on city rooftops often produce far less than advertised. Open rural sites, or tall towers away from obstacles, are much better.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Schools pairing rooftop PV with heat pumps and efficient lighting.</li>
<li>Apartment buildings using solar thermal to preheat domestic hot water.</li>
<li>Campuses with shared ground-source loops serving several buildings.</li>
<li>Community solar projects that let renters buy into shared arrays.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Sizing, Integration and Economics of Building Renewables</h2>
<p>Deciding how much renewable capacity a building should host, and of which type, requires matching resource availability to energy demand in both quantity and timing, then testing the economics. This lesson develops the analytical tools for sizing systems, assessing load matching, integrating storage and evaluating cost-effectiveness.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Load profile:</strong> how a building's energy demand changes hour by hour and season by season</li>
<li><strong>Load matching:</strong> the degree to which on-site generation occurs at the same time as the building's energy use</li>
<li><strong>Self-consumption:</strong> the share of on-site generation used directly by the building rather than exported</li>
<li><strong>Self-sufficiency:</strong> the share of the building's demand met by its own generation</li>
<li><strong>Levelized cost of energy:</strong> the lifetime cost of a system divided by the lifetime energy it produces</li>
<li><strong>Specific yield:</strong> annual energy produced per unit of installed capacity, which reflects local sunshine and system losses</li>
</ul>

<h3>Estimating Output in Words</h3>
<p>Annual photovoltaic output roughly equals installed capacity multiplied by the local specific yield, which depends on sunshine, tilt, orientation, shading, temperature and system losses such as inverter and wiring losses. A sunny, low-latitude site can produce substantially more per unit of capacity than a cloudy high-latitude site. Shading on even part of an array can reduce output disproportionately unless the system uses optimizers or microinverters.</p>

<h3>Load Matching and Storage</h3>
<p>An office's daytime demand often aligns reasonably well with solar generation, whereas a home's evening peak does not. Increasing array size raises self-sufficiency but lowers self-consumption, because more of the extra output is exported at midday. Batteries raise self-consumption by shifting midday surplus to evening, while thermal storage, such as hot water tanks or pre-cooling the building, can do the same at lower cost.</p>
<table>
<thead><tr><th>Storage option</th><th>What it shifts</th><th>Typical role</th></tr></thead>
<tbody>
<tr><td>Battery</td><td>Electricity</td><td>Evening use, backup power, peak shaving</td></tr>
<tr><td>Hot water tank</td><td>Heat from solar thermal or heat pump</td><td>Daily hot water and heating shifts</td></tr>
<tr><td>Building thermal mass</td><td>Heating or cooling</td><td>Pre-heating or pre-cooling a few hours ahead</td></tr>
<tr><td>Ice or chilled water storage</td><td>Cooling</td><td>Shifting cooling demand away from peak hours</td></tr>
</tbody>
</table>

<h3>Economic Analysis</h3>
<p>The value of on-site generation depends on what it displaces. Electricity used on site avoids retail prices, while exported electricity may be credited at retail, wholesale or a fixed export rate depending on local rules. When export credit is low, systems sized for self-consumption or paired with storage tend to perform better economically. Analysts compare levelized cost with avoided costs, include incentives and degradation, and run sensitivity analysis on prices and discount rates.</p>

<h3>Design Checklist</h3>
<ol>
<li>Reduce loads first through envelope and efficiency measures.</li>
<li>Collect or model an hourly load profile.</li>
<li>Map available roof, facade and ground area, including shading.</li>
<li>Estimate output by technology using local resource data.</li>
<li>Evaluate self-consumption, export and storage scenarios.</li>
<li>Compare life-cycle economics and grid interconnection requirements.</li>
</ol>
`,
        GRADUATE: `
<h2>Net-Zero Energy, Storage and Grid Interaction</h2>
<p>As on-site renewables spread, the question shifts from whether a building can generate energy to how its generation, storage and flexible loads interact with the wider grid. Net-zero energy goals, storage incentives and tariff design shape investment decisions and determine whether buildings help or strain electricity networks. This lesson examines these planning, policy and governance issues.</p>

<h3>Defining Net-Zero Energy</h3>
<ul>
<li><strong>Net-zero energy building:</strong> a building that produces as much renewable energy as it uses over a year, typically on an annual balance</li>
<li><strong>Site versus source energy:</strong> energy measured at the meter compared with the total primary energy needed to deliver it</li>
<li><strong>Grid-interactive efficient building:</strong> a building that combines efficiency, on-site energy and flexible loads to respond to grid conditions</li>
<li><strong>Demand flexibility:</strong> the ability to shift or reduce electricity use in response to prices or grid signals</li>
<li><strong>Hosting capacity:</strong> the amount of distributed generation a section of the grid can accept without upgrades</li>
<li><strong>Microgrid:</strong> a local group of generation, storage and loads that can operate connected to or separated from the main grid</li>
</ul>
<p>Definitions vary in boundary (single building, campus or community), metric (site energy, source energy, cost or emissions) and whether off-site renewables count. These choices matter: a dense, tall building may never reach net-zero on site, while a low-rise building can do so more easily, even if its total footprint is larger.</p>

<h3>Storage Integration</h3>
<p>Storage changes the value proposition of building renewables. It enables backup power for resilience, reduces demand charges, increases self-consumption and can provide services to the grid. Yet storage costs, safety requirements, space and degradation must be weighed. Thermal storage and controllable heat pumps can offer much of the same flexibility at lower cost.</p>

<h3>Grid Interaction</h3>
<table>
<thead><tr><th>Issue</th><th>Building-level effect</th><th>Grid-level effect</th></tr></thead>
<tbody>
<tr><td>Midday solar exports</td><td>Earns credits under net metering</td><td>Can push voltage up and lower midday prices</td></tr>
<tr><td>Evening demand peak</td><td>Higher bills under time-of-use rates</td><td>Steep ramp as solar output falls</td></tr>
<tr><td>Flexible heat pumps and storage</td><td>Lower costs through load shifting</td><td>Reduced peak and better use of renewables</td></tr>
<tr><td>Islanding microgrids</td><td>Backup during outages</td><td>Requires coordination and protection systems</td></tr>
</tbody>
</table>

<h3>Policy and Tariff Design</h3>
<p>Net metering made early rooftop solar attractive by crediting exports at retail prices. As adoption grows, many jurisdictions have moved toward time-varying export credits and rates that reward self-consumption, storage and flexibility. Building codes increasingly require solar-ready roofs or on-site generation, and some programs value flexibility directly through demand response payments.</p>

<h3>Equity and Institutional Barriers</h3>
<p>Renters, low-income households and residents of multifamily buildings often cannot install their own systems. Community solar and shared building systems can widen access. Tariff changes raise questions about cost-shifting between solar and non-solar customers. Institutional barriers include slow interconnection processes, fragmented permitting and utility business models that earn returns on infrastructure rather than on flexibility.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Choose a net-zero definition and boundary appropriate to the project.</li>
<li>Assess annual balance and hourly matching with the grid.</li>
<li>Value storage and flexibility under current and expected tariffs.</li>
<li>Check hosting capacity and interconnection timelines.</li>
<li>Evaluate access and cost distribution across customer groups.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Building-Grid Integration and Community Energy Systems</h2>
<p>Research on building renewables has moved from device efficiency toward system integration: how many buildings with generation, storage and flexible loads interact with distribution networks, markets and each other. Key questions concern coordination, market design, modeling scale and the social organization of community energy. This lesson surveys methods, contested issues and open directions.</p>

<h3>Coordination and Market Participation</h3>
<ul>
<li><strong>Transactive energy:</strong> a framework in which buildings and devices exchange price or value signals to coordinate energy use and generation</li>
<li><strong>Transactive building:</strong> a building that actively participates in energy markets, buying, selling or adjusting power based on value signals</li>
<li><strong>Peer-to-peer trading:</strong> direct exchange of energy between prosumers within a local network or platform</li>
<li><strong>Aggregator:</strong> an entity that bundles many small flexible resources to participate in markets as one larger resource</li>
<li><strong>Virtual power plant:</strong> a coordinated portfolio of distributed resources managed together to provide grid services</li>
<li><strong>Model predictive control:</strong> a control method that repeatedly optimizes future actions using forecasts and a system model</li>
</ul>
<p>A central research challenge is coordinating thousands of buildings without centralizing private data or creating instability. Hierarchical, distributed and market-based schemes trade off optimality, privacy, communication requirements and robustness. Simultaneous response to the same price signal can create new peaks, a problem studied as load synchronization or rebound.</p>

<h3>Modeling at Multiple Scales</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Co-simulation of buildings and networks</td><td>Captures voltage and power flow effects</td><td>Computationally intensive; detailed data needed</td></tr>
<tr><td>Reduced-order building models</td><td>Fast enough for control and large populations</td><td>Lose physical detail and occupant diversity</td></tr>
<tr><td>Agent-based community models</td><td>Represent heterogeneous decisions and adoption</td><td>Behavioral assumptions are hard to validate</td></tr>
<tr><td>Energy system optimization</td><td>Identifies least-cost portfolios of local resources</td><td>Often assumes perfect foresight and coordination</td></tr>
</tbody>
</table>

<h3>Community Energy Systems</h3>
<p>District heating and cooling networks, shared ground loops, neighborhood batteries and community solar shift the unit of analysis from building to neighborhood. Fifth-generation district networks, which circulate water near ground temperature and let buildings exchange heat, illustrate how diversity of loads can be exploited. Research examines optimal sizing, ownership models, governance and how benefits are shared among participants.</p>

<h3>Contested Questions</h3>
<ul>
<li>Is annual net-zero a meaningful goal, or should targets use hourly, emissions-based matching?</li>
<li>Do peer-to-peer markets add value beyond well-designed tariffs and aggregation?</li>
<li>How should distribution network costs be allocated as more customers self-supply?</li>
<li>When is community-scale generation more efficient than building-scale, given land use and grid costs?</li>
</ul>

<h3>Advanced Technologies</h3>
<p>Research continues on higher-efficiency and tandem cells, colored and semi-transparent modules for facades, photovoltaic-thermal collectors, bidirectional electric vehicle charging, and long-duration thermal storage. Each raises integration questions about durability, fire safety, cost, control and how performance is verified in real buildings.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable, privacy-preserving coordination of large populations of flexible buildings.</li>
<li>Validated models linking building flexibility to distribution network investment.</li>
<li>Emissions-based, time-resolved metrics for building generation and storage.</li>
<li>Governance and benefit-sharing models for equitable community energy.</li>
<li>Field evidence on occupant acceptance of automated flexibility.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbrenq1',
      question: {
        ELEMENTARY: 'How do solar panels help buildings?',
        MIDDLE_SCHOOL: 'What is solar thermal?',
        HIGH_SCHOOL: 'What is BIPV?',
        UNDERGRADUATE: 'What is load matching?',
        GRADUATE: 'What is a net-zero energy building?',
        PHD: 'What is a transactive building?',
      },
      options: {
        ELEMENTARY: ['They make electricity from sunlight', 'They block the sun', 'They only cool the building', 'They make the building heavier'],
        MIDDLE_SCHOOL: ['Using the sun’s heat to warm water or air', 'Solar panels that make electricity only', 'A way of keeping things cold', 'Burning fuel to make steam'],
        HIGH_SCHOOL: ['Building-integrated photovoltaics that replace ordinary building materials', 'A big indoor power vault', 'Photovoltaic panels kept inside the building', 'A type of wind turbine'],
        UNDERGRADUATE: ['How closely on-site generation timing matches building energy use', 'Loading equipment onto trucks', 'Matching panel colors to the roof', 'Sizing systems at random'],
        GRADUATE: ['A building that produces as much renewable energy as it uses over a year', 'A building that uses no energy at all', 'A building with zero construction cost', 'A building with no power connection'],
        PHD: ['A building that participates in energy markets based on value signals', 'A building used for trading goods', 'A bank building', 'A building with no electricity meter'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Solar panels turn sunlight into electricity for lights, computers and more.',
        MIDDLE_SCHOOL: 'Solar thermal collectors absorb the sun’s heat and use it to warm water.',
        HIGH_SCHOOL: 'BIPV replaces roof tiles, cladding or glass with products that also generate electricity.',
        UNDERGRADUATE: 'Good load matching means more generation is used on site when it is produced.',
        GRADUATE: 'Net-zero energy is usually an annual balance between renewable production and use.',
        PHD: 'Transactive buildings buy, sell or adjust power in response to price or value signals.',
      },
    },
    {
      id: 'gbrenq2',
      question: {
        ELEMENTARY: 'What does a battery do for a solar building?',
        MIDDLE_SCHOOL: 'What does an inverter do?',
        HIGH_SCHOOL: 'Why do small rooftop wind turbines in cities often disappoint?',
        UNDERGRADUATE: 'What happens to self-consumption as a solar array is made larger?',
        GRADUATE: 'What is hosting capacity?',
        PHD: 'What is load synchronization or rebound in coordinated buildings?',
      },
      options: {
        ELEMENTARY: ['It makes the sun shine brighter', 'It cleans the solar panels', 'It stores extra electricity to use later', 'It turns lights on by itself'],
        MIDDLE_SCHOOL: ['Turns sunlight into heat', 'Stores electricity overnight', 'Changes direct current into alternating current', 'Measures wind speed'],
        HIGH_SCHOOL: ['City wind is too cold', 'Turbines are not allowed on roofs', 'Buildings slow the wind and make it turbulent, cutting output', 'Wind turbines only work at night'],
        UNDERGRADUATE: ['It always rises', 'It stays exactly the same', 'It tends to fall because more output is exported at midday', 'It becomes impossible to measure'],
        GRADUATE: ['The number of people a building can hold', 'The size of a building’s roof', 'The amount of distributed generation a grid section can accept without upgrades', 'The storage space in a battery'],
        PHD: ['Buildings synchronizing their clocks', 'Many devices responding to the same signal and creating new peaks', 'Buildings sharing one meter', 'Batteries charging at random times'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A battery saves sunny-day electricity for night time.',
        MIDDLE_SCHOOL: 'Panels make DC, and inverters change it to AC for normal use.',
        HIGH_SCHOOL: 'Wind power drops steeply when wind slows, and buildings make wind slow and gusty.',
        UNDERGRADUATE: 'Bigger arrays raise self-sufficiency, but a smaller share of their output is used on site.',
        GRADUATE: 'Hosting capacity limits how much rooftop generation a network can take without investment.',
        PHD: 'If everyone reacts to the same cheap-price hour, demand can spike at that moment.',
      },
    },
    {
      id: 'gbrenq3',
      question: {
        ELEMENTARY: 'Why does a building need a battery or the grid at night?',
        MIDDLE_SCHOOL: 'What does a ground-source heat pump use?',
        HIGH_SCHOOL: 'What is the coefficient of performance of a heat pump?',
        UNDERGRADUATE: 'Why can partial shading cut solar output so much?',
        GRADUATE: 'Why might a tall, dense building struggle to reach net-zero energy on site?',
        PHD: 'What is a virtual power plant?',
      },
      options: {
        ELEMENTARY: ['Because buildings sleep at night', 'Because the sun goes down and solar panels stop making power', 'Because batteries only work in the dark', 'Because lights do not need power at night'],
        MIDDLE_SCHOOL: ['Wind blowing over the roof', 'The steady temperature underground', 'Water from the city supply', 'Heat from burning wood'],
        HIGH_SCHOOL: ['The cost of the heat pump', 'The ratio of heat delivered to electricity used', 'The temperature of the outside air', 'The size of the borehole'],
        UNDERGRADUATE: ['Shade makes panels colder', 'Shade on part of an array can reduce output disproportionately', 'Shade changes the panel color', 'Shade makes inverters run faster'],
        GRADUATE: ['Tall buildings cannot have heat pumps', 'Its roof area is small relative to its large floor area and energy use', 'Net-zero is only for factories', 'Tall buildings receive no sunlight'],
        PHD: ['A power plant shown in a video game', 'A coordinated portfolio of distributed resources providing grid services', 'A single large gas turbine', 'A model of a power plant used only for teaching'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Without sunshine, panels rest, so stored or grid electricity keeps things running.',
        MIDDLE_SCHOOL: 'The ground stays at a fairly steady temperature, which the heat pump uses to heat and cool.',
        HIGH_SCHOOL: 'A coefficient of performance above one means more heat out than electricity in.',
        UNDERGRADUATE: 'Without optimizers or microinverters, a shaded section can drag down a whole string.',
        GRADUATE: 'Roof area grows slower than floor area, so tall buildings run out of space for generation.',
        PHD: 'Aggregated batteries, heat pumps and other resources can act together like one power plant.',
      },
    },
    {
      id: 'gbrenq4',
      question: {
        ELEMENTARY: 'What can a building do with extra electricity it makes?',
        MIDDLE_SCHOOL: 'What is net metering?',
        HIGH_SCHOOL: 'What is a key limitation of solar thermal for space heating?',
        UNDERGRADUATE: 'Why might systems be sized for self-consumption when export credits are low?',
        GRADUATE: 'Why are many jurisdictions moving away from simple retail-rate net metering?',
        PHD: 'What is a fifth-generation district network?',
      },
      options: {
        ELEMENTARY: ['Throw it in the trash', 'Hide it in the basement', 'Let it leak into the air', 'Share it with other buildings through power lines'],
        MIDDLE_SCHOOL: ['Measuring how tall a building is', 'Counting solar panels on a roof', 'Charging extra for using power at night', 'Getting credit for extra electricity sent to the grid'],
        HIGH_SCHOOL: ['It cannot heat water', 'It only works at night', 'It makes too much electricity', 'Most sun arrives in summer while most heating demand is in winter'],
        UNDERGRADUATE: ['Exported power is always worth more', 'Self-consumption is not allowed', 'Exporting is free of charge', 'Electricity used on site avoids retail prices worth more than export credit'],
        GRADUATE: ['Solar panels no longer work', 'Net metering is too simple to calculate', 'Retail rates are always zero', 'As adoption grows, tariffs shift to reward self-consumption, storage and flexibility'],
        PHD: ['A fifth row of power lines', 'A network that burns five fuels', 'A Wi-Fi standard for buildings', 'A network near ground temperature that lets buildings exchange heat'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Extra electricity can travel through the power lines to help neighbors.',
        MIDDLE_SCHOOL: 'Net metering credits a building for electricity it sends back to the grid.',
        HIGH_SCHOOL: 'The seasonal mismatch means solar thermal needs storage or a backup for winter heat.',
        UNDERGRADUATE: 'When exports earn little, using generation on site gives better economic value.',
        GRADUATE: 'Time-varying export credits better reflect the value of power to the grid.',
        PHD: 'Low-temperature networks exploit diverse loads so buildings can share heating and cooling.',
      },
    },
    {
      id: 'gbrenq5',
      question: {
        ELEMENTARY: 'What does a solar water heater do?',
        MIDDLE_SCHOOL: 'What should designers do before adding renewables?',
        HIGH_SCHOOL: 'What is the capacity factor of a system?',
        UNDERGRADUATE: 'What is the levelized cost of energy?',
        GRADUATE: 'What is a microgrid?',
        PHD: 'What is model predictive control?',
      },
      options: {
        ELEMENTARY: ['Uses sunshine to warm water', 'Freezes water into ice', 'Pumps water out of the ground', 'Makes water fizzy'],
        MIDDLE_SCHOOL: ['Make the building efficient so it needs fewer panels', 'Add extra lights', 'Remove all the insulation', 'Paint the roof black'],
        HIGH_SCHOOL: ['Actual energy produced divided by what full power all the time would produce', 'The number of panels on a roof', 'The weight of a wind turbine', 'The size of the storage tank'],
        UNDERGRADUATE: ['Lifetime system cost divided by lifetime energy produced', 'The price of a single panel', 'The monthly electricity bill', 'The cost of the cheapest inverter'],
        GRADUATE: ['A local group of generation, storage and loads that can run connected or separate from the grid', 'A very small power line', 'A tiny power plant inside a computer', 'A grid used only for streetlights'],
        PHD: ['A control method that repeatedly optimizes future actions using forecasts and a system model', 'Predicting energy prices with no model', 'A fixed schedule that never changes', 'A way of choosing building colors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Solar water heaters use the sun’s warmth to heat water for baths and washing.',
        MIDDLE_SCHOOL: 'A building that uses less energy needs a smaller renewable system.',
        HIGH_SCHOOL: 'Capacity factor shows how much a system really produces compared with its maximum.',
        UNDERGRADUATE: 'LCOE lets analysts compare technologies with different costs and lifetimes.',
        GRADUATE: 'Microgrids can island during outages to keep power flowing locally.',
        PHD: 'MPC uses forecasts of weather, prices and loads to plan the best control actions ahead.',
      },
    },
  ],
}

export default expansion
