import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'building-integrated-renewables',
  lessons: [
    {
      id: 'gb-ren-1',
      title: 'Power from Buildings',
      content: {
        ELEMENTARY: `
<h2>Buildings That Make Their Own Energy</h2>
<p>Most buildings use energy all day long. Lights, fridges, computers and heaters all need power. But some buildings are clever: they can make some of their own energy, right where people live, learn and work. Let's meet the energy helpers that can live on a building!</p>

<h3>Sunshine Power</h3>
<p>Solar panels are flat, dark rectangles that sit on roofs or walls. When sunlight shines on them, they turn that light into electricity. The electricity travels through wires into the building to run lights and machines. Solar panels are quiet, they do not smoke, and they work best on sunny days.</p>
<ul>
<li><strong>Solar panel:</strong> a flat sheet that turns sunlight into electricity</li>
<li><strong>Electricity:</strong> the energy that flows through wires to make lights and machines work</li>
<li><strong>Renewable energy:</strong> energy that comes from things that do not run out, like sunshine and wind</li>
</ul>

<h3>Wind and Warm Water Helpers</h3>
<p>Some buildings have small wind turbines that spin when the wind blows, making electricity. Other buildings have solar water heaters. These are special boxes or tubes on the roof that use the sun's warmth to heat water for baths and washing up.</p>
<ul>
<li><strong>Wind turbine:</strong> a machine with blades that spin in the wind to make electricity</li>
<li><strong>Solar water heater:</strong> roof tubes or panels that warm water using heat from the sun</li>
</ul>

<h3>Panels That Look Like the Building</h3>
<p>Here is something amazing: some solar panels are built right into the building. They can look like roof tiles, window glass or the outside wall. People walking by might not even notice that the building is making power!</p>

<h3>What About Night Time?</h3>
<p>The sun goes down at night, so solar panels stop making electricity. Some buildings save extra energy in big batteries to use later. Others share energy with the town's power lines, giving some away on sunny days and taking some back at night.</p>

<h3>You Can Help Too</h3>
<ol>
<li>Look around your neighborhood and count how many roofs have solar panels.</li>
<li>Turn off lights you are not using, so the building's own energy goes further.</li>
<li>Draw a picture of your dream building that makes its own power.</li>
</ol>
<p>Every building that makes clean energy helps keep our air fresh and our planet healthy!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Renewable Energy on Buildings</h2>
<p>Buildings use a large share of the world's energy for lighting, heating, cooling and running equipment. Much of that energy still comes from burning fossil fuels at faraway power plants. One way to cut pollution is to produce clean energy right on the building itself. This is called on-site renewable energy, and it is becoming more common every year.</p>

<h3>How Solar Panels Work</h3>
<p>Solar panels are made of many small units called photovoltaic cells, usually made from silicon. When light hits a cell, it knocks tiny particles called electrons loose, creating a flow of electricity. This electricity is direct current (DC), so a device called an inverter changes it into alternating current (AC), the kind used by outlets in your home.</p>
<p>Rooftop solar is by far the most common renewable system on buildings because it is quiet, has no moving parts, and keeps getting cheaper.</p>

<h3>Other Building Renewables</h3>
<ul>
<li><strong>Solar thermal collectors:</strong> panels or tubes that absorb sunlight to heat water or air directly</li>
<li><strong>Small wind turbines:</strong> compact turbines that can work on tall buildings or open sites with steady wind</li>
<li><strong>Ground-source heat pump:</strong> a system that moves heat between the building and the steady temperature underground</li>
<li><strong>Photovoltaic cell:</strong> a small unit, usually made of silicon, that turns light into electricity</li>
<li><strong>Inverter:</strong> a device that changes direct current from panels into alternating current for the building</li>
<li><strong>Battery storage:</strong> batteries that save extra electricity so it can be used later, such as at night</li>
</ul>

<h3>Comparing Building Renewables</h3>
<table>
<thead><tr><th>System</th><th>What it makes</th><th>Works best when</th></tr></thead>
<tbody>
<tr><td>Rooftop solar panels</td><td>Electricity</td><td>The roof faces the sun with little shade</td></tr>
<tr><td>Solar thermal collectors</td><td>Hot water or warm air</td><td>The building needs lots of hot water</td></tr>
<tr><td>Small wind turbine</td><td>Electricity</td><td>Strong, steady wind without obstacles</td></tr>
<tr><td>Ground-source heat pump</td><td>Heating and cooling</td><td>There is space to bury pipes in the ground</td></tr>
</tbody>
</table>

<h3>Sharing With the Grid</h3>
<p>Most buildings with solar stay connected to the electric grid. On a sunny afternoon, the panels may make more power than the building needs, so the extra flows out to the neighborhood. At night, the building takes power back from the grid. In many places, the building owner gets credit for the energy they share.</p>

<h3>Why It Matters</h3>
<p>Making energy on site means less power has to travel long distances, and less fuel is burned. It also helps people see where their energy comes from. When a school has solar panels, students can often watch a screen showing how much power the roof is making that day.</p>
`,
        HIGH_SCHOOL: `
<h2>Building-Integrated Renewables: Turning Structures into Power Plants</h2>
<p>Buildings are responsible for a large portion of global energy use and carbon emissions. Designers are increasingly asking a new question: instead of only using less energy, can a building also generate its own? Building-scale renewable systems range from panels bolted onto a roof to solar materials that replace the roof, facade or windows entirely. Understanding the options, and their trade-offs, is key to designing low-carbon buildings.</p>

<h3>Added Versus Integrated</h3>
<p>There are two broad ways to put photovoltaics on a building. Building-applied photovoltaics (BAPV) are conventional panels mounted on top of an existing roof or wall using racks. Building-integrated photovoltaics (BIPV) replace a building material: the solar product itself becomes the roof covering, the curtain wall glass, the skylight or the shading device. BIPV does two jobs at once, protecting the building from weather while generating electricity.</p>
<ul>
<li><strong>BIPV:</strong> building-integrated photovoltaics, solar products that replace conventional building materials like roofing or glazing</li>
<li><strong>BAPV:</strong> building-applied photovoltaics, standard panels mounted onto an existing building surface</li>
<li><strong>Solar orientation:</strong> the direction a surface faces relative to the sun, which strongly affects output</li>
<li><strong>Semi-transparent PV:</strong> solar glazing that lets some daylight through while generating electricity</li>
<li><strong>Net metering:</strong> a billing arrangement that credits owners for surplus electricity sent to the grid</li>
<li><strong>Capacity factor:</strong> the actual energy produced compared with what a system would make running at full power all the time</li>
</ul>

<h3>Comparing Building-Scale Systems</h3>
<table>
<thead><tr><th>System</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Rooftop PV (BAPV)</td><td>Low cost, mature, easy to maintain</td><td>Limited by roof area and shading</td></tr>
<tr><td>BIPV facades and glazing</td><td>Uses large wall areas, replaces cladding cost</td><td>Vertical surfaces get less sun; higher cost per watt</td></tr>
<tr><td>Solar thermal</td><td>Efficient at capturing heat for water</td><td>Only useful if there is steady hot water demand</td></tr>
<tr><td>Small or building-mounted wind</td><td>Can produce at night and in winter</td><td>Turbulent urban wind, vibration, noise and often low output</td></tr>
<tr><td>Ground-source heat pumps</td><td>Very efficient heating and cooling</td><td>Drilling or trenching adds upfront cost</td></tr>
</tbody>
</table>

<h3>The Urban Wind Problem</h3>
<p>Small wind turbines sound appealing, but cities are tricky places for them. Buildings and trees break wind into gusty, turbulent flows that reduce output and wear out parts. Many rooftop turbine projects have produced far less energy than expected. In most urban settings, solar provides much more reliable output for the money, so designers usually reserve wind for open, exposed sites.</p>

<h3>Efficiency Comes First</h3>
<p>A building has limited surfaces to collect energy. A tall office tower may have a small roof compared with its total floor area, so rooftop panels can supply only a fraction of its needs. That is why designers reduce demand first with insulation, airtight construction, efficient lighting and heat pumps, then size renewables to cover what remains.</p>

<h3>Real-World Applications</h3>
<ol>
<li><strong>Schools and warehouses:</strong> large, flat roofs make them ideal for rooftop solar.</li>
<li><strong>Office towers:</strong> BIPV curtain walls and spandrel panels use facade area that would otherwise generate nothing.</li>
<li><strong>Homes:</strong> solar roof tiles and solar water heaters blend into residential design.</li>
<li><strong>Parking areas:</strong> solar canopies shade cars while producing electricity.</li>
</ol>
<p>Pairing on-site generation with battery storage and smart controls lets buildings use more of their own power and support the grid during peak demand.</p>
`,
        UNDERGRADUATE: `
<h2>Sizing and Integrating Building-Scale Renewables</h2>
<p>Designing renewable systems for buildings is an exercise in matching supply and demand across space and time. The available collecting surfaces, local solar and wind resources, the building's load profile and the rules for grid connection together determine how much of a building's energy can come from on-site sources. This lesson builds the analytical tools for sizing systems and evaluating how well they fit a building.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Load profile:</strong> the pattern of a building's electricity demand by hour, day and season</li>
<li><strong>Load matching:</strong> the degree to which the timing of on-site generation aligns with the building's demand</li>
<li><strong>Self-consumption ratio:</strong> the share of on-site generation used directly by the building rather than exported</li>
<li><strong>Self-sufficiency ratio:</strong> the share of the building's demand met directly by on-site generation</li>
<li><strong>Specific yield:</strong> annual energy produced per unit of installed capacity, reflecting climate and orientation</li>
<li><strong>Power density:</strong> the energy a building uses per unit floor area compared with what its surfaces can generate</li>
</ul>

<h3>Estimating Output in Words</h3>
<p>A first-pass estimate of annual PV output multiplies installed capacity by the site's specific yield, then applies losses for inverter conversion, wiring, soiling, temperature and shading. Specific yield depends on latitude, climate, tilt and orientation: a south-facing tilted array in the Northern Hemisphere generally outperforms a flat roof, and a vertical facade typically produces noticeably less per unit area than an optimally tilted surface, though it may produce more evenly across seasons. Panels lose some efficiency as they get hotter, so ventilated mounting matters, especially for BIPV, which can trap heat behind the cells.</p>

<h3>The Surface-to-Floor Constraint</h3>
<p>The ratio of collecting area to floor area is often the decisive variable. A single-story warehouse may generate more than it uses, while a high-rise with many floors over a small footprint cannot meet its demand from the roof alone. Facade BIPV extends the collecting area, but vertical surfaces receive less irradiance and are more often shaded by neighboring buildings.</p>
<table>
<thead><tr><th>Building type</th><th>Typical roof-to-floor ratio</th><th>Implication for on-site renewables</th></tr></thead>
<tbody>
<tr><td>Single-story retail or warehouse</td><td>High</td><td>Roof PV can often meet or exceed annual demand</td></tr>
<tr><td>Low-rise school or home</td><td>Moderate</td><td>Achievable with strong efficiency measures</td></tr>
<tr><td>Mid-rise office or apartments</td><td>Low</td><td>Needs facade PV or off-site renewables</td></tr>
<tr><td>High-rise tower</td><td>Very low</td><td>On-site generation covers only a small share</td></tr>
</tbody>
</table>

<h3>Load Matching and Grid Connection</h3>
<p>Solar output peaks around midday, while many homes peak in the evening and offices peak during working hours. The mismatch determines how much electricity is exported and imported. Under full net metering, exports are credited at roughly retail value, so mismatch matters little financially. Under net billing or export tariffs, exports earn less than imports cost, which rewards higher self-consumption through storage, load shifting or orienting arrays to produce more in the afternoon. Interconnection rules also set technical requirements, such as anti-islanding protection that stops an inverter from energizing lines during a grid outage.</p>

<h3>Design Checklist</h3>
<ol>
<li>Reduce demand first and build an hourly load profile for the building.</li>
<li>Map usable surfaces, accounting for shading, structure, access and fire setbacks.</li>
<li>Estimate output using local climate data, orientation, tilt and loss factors.</li>
<li>Compare generation and load hour by hour to estimate self-consumption and exports.</li>
<li>Evaluate storage or controllable loads against the local tariff structure.</li>
<li>Confirm interconnection, structural and electrical code requirements early.</li>
</ol>
`,
        GRADUATE: `
<h2>Renewables, Storage and Policy for Net-Zero Energy Buildings</h2>
<p>On-site renewables are a central strategy for net-zero energy buildings, but their value depends on how they interact with storage, building loads, the electricity grid and the policy environment. As grids decarbonize and add large amounts of variable generation, the question shifts from how many kilowatt-hours a building generates to when it generates them and how flexibly the building behaves. This lesson examines definitions, storage integration, incentives and institutional barriers.</p>

<h3>Defining Net-Zero Energy</h3>
<ul>
<li><strong>Net-zero energy building:</strong> a building that produces at least as much renewable energy as it uses over a year, under a stated accounting boundary</li>
<li><strong>Site energy:</strong> energy measured at the building meter, without counting losses in generation and delivery</li>
<li><strong>Source energy:</strong> energy accounting that includes upstream losses from generation, transmission and distribution</li>
<li><strong>Grid-interactive efficient building:</strong> a building that combines efficiency, on-site generation, storage and controls to respond to grid needs</li>
<li><strong>Behind-the-meter storage:</strong> batteries or thermal storage located on the customer side of the utility meter</li>
<li><strong>Export tariff:</strong> the price paid for electricity a building sends back to the grid</li>
</ul>
<p>The choice of boundary matters. A site-energy definition is simple to verify but treats all fuels alike; a source-energy definition reflects upstream impacts but depends on assumed conversion factors. Some definitions allow off-site renewable purchases when on-site potential is limited, which widens access for dense urban buildings but raises questions about additionality.</p>

<h3>Storage Integration</h3>
<p>Annual net-zero balances hide large seasonal and daily mismatches. Batteries can shift midday solar into the evening peak, reduce demand charges and provide backup during outages. Thermal storage, such as chilled water, ice or hot water tanks, can do similar work at lower cost for heating and cooling loads. The building's thermal mass itself can serve as storage when controls pre-cool or pre-heat spaces.</p>
<table>
<thead><tr><th>Storage option</th><th>Main value</th><th>Key constraint</th></tr></thead>
<tbody>
<tr><td>Lithium-ion batteries</td><td>Fast response, backup power, peak shaving</td><td>Upfront cost, degradation, fire safety design</td></tr>
<tr><td>Thermal storage tanks</td><td>Low-cost shifting of heating and cooling</td><td>Space requirements, only serves thermal loads</td></tr>
<tr><td>Building thermal mass</td><td>Little added cost when controls are smart</td><td>Limited duration, comfort boundaries</td></tr>
<tr><td>Electric vehicle charging</td><td>Large flexible load, possible two-way power</td><td>Depends on occupant schedules and vehicle availability</td></tr>
</tbody>
</table>

<h3>Policy Incentives</h3>
<p>Policy tools that influence building renewables include tax credits and rebates, net metering or net billing rules, feed-in tariffs, building energy codes that require solar-ready roofs or on-site generation, and performance standards that cap building emissions. Each tool shapes design differently: generous net metering favors maximizing annual output, while time-varying export rates reward storage and load flexibility. Policy changes midway through a system's life can alter project economics significantly, which creates investment risk.</p>

<h3>Equity and Institutional Barriers</h3>
<p>Renewable incentives have historically flowed mostly to owner-occupiers with suitable roofs and access to capital. Renters, multifamily residents and low-income households often cannot benefit directly. Community solar, on-bill financing and virtual net metering in multifamily buildings are approaches to widen access. Split incentives between landlords and tenants, utility cost recovery concerns about fixed grid costs, and slow interconnection processes are recurring institutional barriers.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>State the net-zero boundary and accounting basis explicitly.</li>
<li>Model hourly generation, load and grid carbon intensity, not just annual totals.</li>
<li>Value storage and flexibility using actual tariff structures and grid signals.</li>
<li>Assess resilience benefits such as backup power for critical loads.</li>
<li>Identify who captures the benefits and who bears the costs.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in BIPV and Building-to-Grid Integration</h2>
<p>Research on building-integrated renewables spans materials science, building physics, control engineering and energy systems analysis. The frontier questions concern how to make building surfaces into efficient, durable, aesthetically flexible generators, how to model their performance accurately in dense urban environments, and how to coordinate millions of generating, storing and flexible buildings with the wider grid. This lesson surveys methods, debates and open directions for advanced study.</p>

<h3>Advanced BIPV Materials and Products</h3>
<ul>
<li><strong>Advanced BIPV:</strong> solar materials engineered as building components such as facades, glazing and roofing rather than add-on panels</li>
<li><strong>Thin-film photovoltaics:</strong> light-absorbing layers deposited on glass or flexible substrates, enabling new form factors</li>
<li><strong>Perovskite solar cells:</strong> an emerging class of cells with tunable color and transparency whose long-term stability remains under study</li>
<li><strong>Photovoltaic-thermal collector:</strong> a hybrid device that recovers heat from behind the cells while generating electricity</li>
<li><strong>Colored and textured modules:</strong> modules modified for appearance, usually with some loss of efficiency</li>
<li><strong>Bifacial modules:</strong> modules that collect light on both faces, including reflected light from nearby surfaces</li>
</ul>
<p>A recurring tension is between aesthetics, transparency and efficiency. Semi-transparent and colored products widen architectural acceptance but reduce output. Research aims to understand these trade-offs quantitatively and to design products whose durability, fire performance and replaceability match the long service life of building envelopes.</p>

<h3>Modeling Methods</h3>
<p>Accurate performance modeling of facade-integrated systems requires resolving shading from neighboring buildings, reflections, partial shading of cell strings, and cell temperature in poorly ventilated assemblies. Methods include ray-tracing irradiance simulation, urban-scale three-dimensional models built from geographic and laser survey data, and coupled thermal-electrical models of the envelope. Co-simulation links building energy models with power-flow models of distribution networks to study how many generating buildings affect voltage and reverse power flows.</p>

<h3>Building-to-Grid Integration</h3>
<p>Distributed generation changes the role of buildings from passive loads to active participants. Research examines model predictive control that schedules heat pumps, batteries and vehicle charging against forecasts of weather, prices and occupancy; aggregation of many buildings into virtual power plants; and transactive or market-based coordination where buildings respond to price signals. Key challenges include forecast uncertainty, occupant comfort constraints, communication standards, cybersecurity and fair allocation of network costs.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>On-site versus off-site renewables for net zero</td><td>On-site generation is visible and resilient but often costlier per unit than utility-scale supply</td></tr>
<tr><td>Annual balance versus hourly matching</td><td>Annual accounting can overstate carbon benefits when exports occur during low-carbon hours</td></tr>
<tr><td>Value of distributed generation to the grid</td><td>Avoided costs, network benefits and cost shifts are hard to measure and politically charged</td></tr>
<tr><td>Life-cycle impacts of BIPV</td><td>Embodied carbon, end-of-life recovery and replacement cycles vary widely by product</td></tr>
</tbody>
</table>

<h3>Optimization Approaches</h3>
<p>Design optimization for building renewables is multi-objective: cost, energy, carbon, daylight, glare, thermal comfort and appearance all interact, especially with semi-transparent glazing. Researchers use surrogate models and evolutionary algorithms to search large design spaces, and stochastic or robust optimization to handle uncertainty in climate and tariffs. Ensuring that optimization results remain valid under future climates and evolving grid conditions is an active methodological concern.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Durable, recyclable BIPV products that match envelope service lives and fire safety needs.</li>
<li>Validated urban-scale models of facade generation under complex shading and reflection.</li>
<li>Control architectures that coordinate many flexible buildings while protecting privacy and comfort.</li>
<li>Hourly and marginal-emissions accounting methods for building net-zero claims.</li>
<li>Equitable tariff and ownership models for distributed generation in multifamily and low-income housing.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbrq1',
      question: {
        ELEMENTARY: 'What do solar panels on buildings do?',
        MIDDLE_SCHOOL: 'What is the most common renewable energy system on buildings?',
        HIGH_SCHOOL: 'What is BIPV?',
        UNDERGRADUATE: 'What is load matching?',
        GRADUATE: 'What is a net-zero energy building?',
        PHD: 'What distinguishes advanced BIPV from conventional add-on panels?',
      },
      options: {
        ELEMENTARY: ['Make electricity from sunlight', 'Make the building taller', 'Make the rain stop', 'Keep birds away'],
        MIDDLE_SCHOOL: ['Rooftop solar panels', 'Coal boilers in the basement', 'Diesel generators', 'Gas-fired furnaces'],
        HIGH_SCHOOL: ['Solar products that replace building materials like roofing or glazing', 'Panels bolted onto racks above an existing roof', 'A type of small wind turbine', 'A battery stored in the basement'],
        UNDERGRADUATE: ['How well the timing of on-site generation aligns with building demand', 'Running panels at maximum output all the time', 'Matching panel color to the roof', 'Adding more weight to the roof structure'],
        GRADUATE: ['A building that produces at least as much renewable energy as it uses over a year', 'A building that uses no energy at all', 'A building disconnected from the grid', 'A building that only uses gas'],
        PHD: ['Solar materials are engineered as facades, glazing and roofing rather than added on top', 'They are simply larger panels', 'They can only be used on flat roofs', 'They need no electrical connection'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Solar panels turn sunlight into electricity that can power the building.',
        MIDDLE_SCHOOL: 'Rooftop solar is by far the most common renewable system on buildings because it is quiet and keeps getting cheaper.',
        HIGH_SCHOOL: 'Building-integrated photovoltaics do two jobs: they protect the building like a normal material and generate electricity.',
        UNDERGRADUATE: 'Load matching describes how well generation timing fits demand, which drives self-consumption and exports.',
        GRADUATE: 'A net-zero energy building balances annual use with renewable production under a stated accounting boundary.',
        PHD: 'Advanced BIPV turns envelope components themselves into generators, raising design, durability and efficiency trade-offs.',
      },
    },
    {
      id: 'gbrq2',
      question: {
        ELEMENTARY: 'What does a wind turbine need to make electricity?',
        MIDDLE_SCHOOL: 'What does an inverter do?',
        HIGH_SCHOOL: 'Why do small wind turbines often perform poorly in cities?',
        UNDERGRADUATE: 'Why can a high-rise tower rarely meet its demand from rooftop solar alone?',
        GRADUATE: 'What is the difference between site energy and source energy?',
        PHD: 'What tension appears in semi-transparent and colored BIPV products?',
      },
      options: {
        ELEMENTARY: ['Snow', 'Wind to spin its blades', 'Water in a bucket', 'Bright lights at night'],
        MIDDLE_SCHOOL: ['Stores rainwater', 'Changes direct current from panels into alternating current', 'Cleans the solar panels', 'Turns the panels to face the sun'],
        HIGH_SCHOOL: ['Cities have no wind at all', 'Buildings break wind into gusty, turbulent flow that reduces output', 'Turbines are not allowed to spin', 'Wind is too steady in cities'],
        UNDERGRADUATE: ['Its roof area is small compared with its total floor area', 'Solar panels do not work above ground level', 'Towers use no electricity', 'Roofs on towers face downward'],
        GRADUATE: ['They are identical measures', 'Source energy includes upstream generation and delivery losses, site energy does not', 'Site energy only counts gas use', 'Source energy only counts on-site solar'],
        PHD: ['They always produce more than clear panels', 'Gains in appearance and transparency usually come with lower efficiency', 'They cannot be installed vertically', 'They have no aesthetic value'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Wind pushes on the blades and makes them spin, and the spinning makes electricity.',
        MIDDLE_SCHOOL: 'Panels make direct current, and an inverter converts it to the alternating current used by building outlets.',
        HIGH_SCHOOL: 'Urban wind is turbulent and blocked by buildings, so rooftop turbines often produce much less than expected.',
        UNDERGRADUATE: 'Many floors stacked over a small footprint mean demand far exceeds what the roof can generate.',
        GRADUATE: 'Source energy accounts for losses before the meter, so it reflects upstream impacts that site energy ignores.',
        PHD: 'Letting light through or changing color reduces the light the cells absorb, so efficiency generally drops.',
      },
    },
    {
      id: 'gbrq3',
      question: {
        ELEMENTARY: 'What do solar water heaters on roofs do?',
        MIDDLE_SCHOOL: 'What happens when rooftop solar panels make more power than the building needs?',
        HIGH_SCHOOL: 'Why should designers reduce energy demand before sizing renewables?',
        UNDERGRADUATE: 'Under an export tariff that pays less than retail prices, what becomes more valuable?',
        GRADUATE: 'Which storage option is often a low-cost way to shift heating and cooling loads?',
        PHD: 'What does co-simulation of buildings and distribution networks help researchers study?',
      },
      options: {
        ELEMENTARY: ['Make ice cubes', 'Turn the roof green', 'Warm water using heat from the sun', 'Make the wind blow'],
        MIDDLE_SCHOOL: ['The panels switch off forever', 'The building catches fire', 'The extra power flows out to the grid', 'The power disappears instantly'],
        HIGH_SCHOOL: ['Renewables work better in leaky buildings', 'Efficiency is never cost-effective', 'Buildings have limited surfaces, so lower demand lets renewables cover more of it', 'Insulation blocks solar panels'],
        UNDERGRADUATE: ['Exporting as much as possible', 'Removing all batteries', 'Raising self-consumption through storage or load shifting', 'Shading the panels at noon'],
        GRADUATE: ['Diesel generators', 'Larger windows', 'Thermal storage tanks such as chilled water or hot water', 'Bigger parking lots'],
        PHD: ['Only the color of BIPV modules', 'Historic architectural styles', 'How many generating buildings affect voltage and reverse power flow', 'Rainfall patterns on roofs'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Solar water heaters use the sun to warm water for baths and washing up.',
        MIDDLE_SCHOOL: 'Extra power goes to the grid, and in many places the owner gets credit for it.',
        HIGH_SCHOOL: 'Collecting area is limited, so cutting demand first makes it possible for renewables to meet a larger share.',
        UNDERGRADUATE: 'When exports earn less than imports cost, using more of your own generation on site saves more money.',
        GRADUATE: 'Thermal storage shifts heating and cooling loads at lower cost than batteries, though it needs space.',
        PHD: 'Linking building models with power-flow models reveals network impacts like voltage rise from many exporting buildings.',
      },
    },
    {
      id: 'gbrq4',
      question: {
        ELEMENTARY: 'What can a building use to save solar energy for night time?',
        MIDDLE_SCHOOL: 'What does a ground-source heat pump use?',
        HIGH_SCHOOL: 'Which building type is usually best suited to large rooftop solar systems?',
        UNDERGRADUATE: 'Why does ventilated mounting matter for PV, especially BIPV?',
        GRADUATE: 'Which group has historically had the hardest time benefiting from rooftop solar incentives?',
        PHD: 'Why is annual net-zero accounting criticized compared with hourly matching?',
      },
      options: {
        ELEMENTARY: ['A paper bag', 'A flower pot', 'A mirror', 'Batteries'],
        MIDDLE_SCHOOL: ['Moonlight', 'Ocean waves', 'Burning wood', 'The steady temperature underground'],
        HIGH_SCHOOL: ['A narrow high-rise tower', 'A shaded house in a forest', 'An underground parking garage', 'A school or warehouse with a large flat roof'],
        UNDERGRADUATE: ['It makes panels heavier', 'It is required for rainwater collection', 'It prevents panels from producing at noon', 'Panels lose efficiency as they get hotter'],
        GRADUATE: ['Owners of large single-family homes', 'Utility companies', 'Big box retailers', 'Renters and residents of multifamily buildings'],
        PHD: ['Annual accounting is too hard to compute', 'Hourly data do not exist', 'Annual balances always understate benefits', 'It can overstate carbon benefits when exports occur during low-carbon hours'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Batteries store extra electricity from sunny times so it can be used at night.',
        MIDDLE_SCHOOL: 'Ground-source heat pumps move heat to and from the ground, which stays at a fairly steady temperature.',
        HIGH_SCHOOL: 'Large, flat, unshaded roofs give plenty of space for panels.',
        UNDERGRADUATE: 'Cell output drops at higher temperatures, and BIPV assemblies can trap heat behind the cells.',
        GRADUATE: 'Renters and multifamily residents often lack control of the roof and cannot capture incentives directly.',
        PHD: 'If exports displace already clean electricity, an annual energy balance can exaggerate the real emissions reduction.',
      },
    },
    {
      id: 'gbrq5',
      question: {
        ELEMENTARY: 'Why is renewable energy good for the planet?',
        MIDDLE_SCHOOL: 'What are photovoltaic cells usually made from?',
        HIGH_SCHOOL: 'What does net metering do?',
        UNDERGRADUATE: 'What is the self-sufficiency ratio?',
        GRADUATE: 'What makes a building grid-interactive?',
        PHD: 'What is a photovoltaic-thermal collector?',
      },
      options: {
        ELEMENTARY: ['It comes from things that do not run out, like sun and wind', 'It makes more smoke', 'It only works indoors', 'It uses up all the coal'],
        MIDDLE_SCHOOL: ['Silicon', 'Wood', 'Rubber', 'Cotton'],
        HIGH_SCHOOL: ['Credits owners for surplus electricity sent to the grid', 'Measures the height of the building', 'Blocks all exports to the grid', 'Charges extra for using solar'],
        UNDERGRADUATE: ['The share of building demand met directly by on-site generation', 'The share of panels that are clean', 'The ratio of roof area to wall area', 'The number of inverters per panel'],
        GRADUATE: ['It combines efficiency, generation, storage and controls to respond to grid needs', 'It is located next to a power line', 'It never uses electricity at peak times by law', 'It has no meter'],
        PHD: ['A hybrid device that recovers heat from behind the cells while generating electricity', 'A panel that only makes heat', 'A wind turbine with solar blades', 'A battery that stores heat'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Sunshine and wind keep coming back, and using them means less smoke and pollution.',
        MIDDLE_SCHOOL: 'Most photovoltaic cells are made from silicon, which releases electrons when light hits it.',
        HIGH_SCHOOL: 'Net metering credits the owner for electricity exported, often offsetting energy taken from the grid later.',
        UNDERGRADUATE: 'Self-sufficiency measures how much of the load is covered by the building\'s own generation.',
        GRADUATE: 'Grid-interactive efficient buildings use controls and storage to shift or reduce load when the grid needs it.',
        PHD: 'PV-thermal collectors capture waste heat from the cells for useful heating while also producing electricity.',
      },
    },
  ],
}

export default expansion
