import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'grid-decarbonization',
  lessons: [
    {
      id: 're-gd-1',
      title: 'Building a Clean Grid',
      content: {
        ELEMENTARY: `
<h2>Making All Our Electricity Clean</h2>
<p>Every time you switch on a light, electricity zooms to you through wires. That electricity comes from power plants. Some power plants burn coal or gas, which makes smoke and pollution. Others use clean energy from the sun, wind and water. Our big goal is to make all of our electricity clean!</p>

<h3>What Is the Grid?</h3>
<p>The grid is a giant web of wires that connects power plants to homes, schools and shops. It is like a huge road system, but instead of cars, electricity travels on it. Lots of different power plants send electricity onto the grid, and everyone shares it.</p>
<ul>
<li><strong>Grid:</strong> the big web of wires that carries electricity to everyone</li>
<li><strong>Power plant:</strong> a place where electricity is made</li>
<li><strong>Pollution:</strong> dirty smoke and gases that harm the air and warm the planet</li>
</ul>

<h3>Swapping Dirty for Clean</h3>
<p>Making the grid clean means slowly swapping old, smoky power plants for clean ones. Wind turbines spin in the breeze. Solar panels soak up sunshine. Dams let rushing water turn wheels. None of these make smoke while they work.</p>
<ul>
<li><strong>Clean energy:</strong> electricity made without smoke, like from the sun, wind or water</li>
<li><strong>Wind turbine:</strong> a tall tower with blades that spin in the wind to make electricity</li>
<li><strong>Battery:</strong> a box that saves electricity so we can use it later</li>
</ul>

<h3>The Tricky Part</h3>
<p>The sun goes down at night, and the wind does not always blow. So how do we keep the lights on? Helpers save the day:</p>
<ol>
<li>Big batteries save extra sunshine and wind power for later.</li>
<li>Long wires carry power from windy or sunny places to places that need it.</li>
<li>Smart machines, like some fridges and car chargers, can wait a little and use power when there is lots of it.</li>
</ol>

<h3>How You Can Help</h3>
<ol>
<li>Turn off lights when you leave a room. Less electricity needed means fewer power plants running.</li>
<li>Unplug chargers when they are not being used.</li>
<li>Ask your family or teacher where your town's electricity comes from.</li>
<li>Draw a picture of your dream clean-energy town!</li>
</ol>
<p>Lots of countries and towns are already working on a clean grid. One day, the electricity in your home could be powered completely by sunshine, wind and water. That is a bright idea!</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Path to 100% Clean Electricity</h2>
<p>Electricity is a big source of the greenhouse gases that warm our planet, because much of it still comes from burning coal and natural gas. <em>Decarbonizing</em> the grid means cutting the carbon dioxide released when we make electricity, until it is close to zero. Many countries, states and cities have set goals to reach 100% clean electricity. How would that actually work?</p>

<h3>Where Our Electricity Comes From</h3>
<table>
<thead><tr><th>Source</th><th>Makes carbon pollution while running?</th><th>Can it run any time?</th></tr></thead>
<tbody>
<tr><td>Coal</td><td>Yes, the most</td><td>Yes</td></tr>
<tr><td>Natural gas</td><td>Yes, less than coal</td><td>Yes</td></tr>
<tr><td>Nuclear</td><td>No</td><td>Yes, runs steadily</td></tr>
<tr><td>Hydropower</td><td>No</td><td>Mostly, depends on rain and snow</td></tr>
<tr><td>Wind</td><td>No</td><td>Only when it is windy</td></tr>
<tr><td>Solar</td><td>No</td><td>Only when it is sunny</td></tr>
</tbody>
</table>

<h3>Four Big Steps</h3>
<ol>
<li><strong>Build lots of wind and solar.</strong> They are now among the cheapest ways to make new electricity in much of the world.</li>
<li><strong>Add storage.</strong> Batteries and other storage save extra energy for when it is needed.</li>
<li><strong>Expand transmission lines.</strong> High-voltage lines move power from sunny deserts and windy plains to cities.</li>
<li><strong>Retire the dirtiest plants.</strong> Coal plants close first, and gas plants run less and less.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Decarbonization:</strong> reducing the carbon dioxide released by an activity, like making electricity</li>
<li><strong>Greenhouse gas:</strong> a gas such as carbon dioxide that traps heat in the atmosphere</li>
<li><strong>Variable energy:</strong> power from sources like wind and solar whose output changes with the weather</li>
<li><strong>Transmission line:</strong> a high-voltage power line that carries electricity long distances</li>
<li><strong>Demand:</strong> how much electricity people are using at a given moment</li>
<li><strong>Carbon-free:</strong> producing no carbon dioxide while generating electricity</li>
</ul>

<h3>Balancing Supply and Demand</h3>
<p>The grid has a strict rule: the electricity made must match the electricity used at every single moment. When people switch on air conditioners on a hot afternoon, power plants must instantly make more. With lots of wind and solar, grid operators use weather forecasts, batteries and flexible demand to keep things balanced. For example, electric cars can be set to charge when the wind is blowing hard at night.</p>

<h3>Why It Matters So Much</h3>
<p>A clean grid helps with more than just electricity. As we switch cars, buses and home heating to run on electricity, a clean grid makes those cleaner too. That is why experts often say: clean up the grid, then electrify everything. Cleaner power plants also mean cleaner air and healthier communities, especially for people living near old coal and gas plants.</p>
`,
        HIGH_SCHOOL: `
<h2>Grid Decarbonization: Pathways, Challenges and Solutions</h2>
<p>The electricity sector is often seen as the easiest major sector to decarbonize, because proven clean technologies already exist and costs have fallen sharply. Yet getting from a grid that is partly clean to one that is almost entirely carbon-free raises hard engineering, economic and social questions. This lesson explores the main pathways, the challenges that grow as clean energy shares rise, and the tools that address them.</p>

<h3>Core Ideas</h3>
<ul>
<li><strong>Carbon intensity:</strong> the amount of carbon dioxide emitted per unit of electricity generated</li>
<li><strong>Firm capacity:</strong> generation that can be counted on to produce power whenever needed, for as long as needed</li>
<li><strong>Dispatchable:</strong> able to be turned up or down on command by grid operators</li>
<li><strong>Curtailment:</strong> deliberately reducing wind or solar output because the grid cannot use or move it</li>
<li><strong>Peak demand:</strong> the highest level of electricity use during a day or year</li>
<li><strong>Interconnection:</strong> linking regional grids so they can share power across larger areas</li>
</ul>

<h3>The Easy Part and the Hard Part</h3>
<p>Early steps in decarbonization are relatively straightforward: replace coal with a mix of wind, solar and natural gas, and emissions fall quickly. Coal-to-gas switching has driven large emission cuts in some countries, but gas still emits carbon dioxide and leaks methane, a powerful greenhouse gas, so it is generally seen as a bridge rather than a destination. The last portion of decarbonization is harder because the grid must stay reliable during long stretches with little wind or sun, such as calm winter weeks.</p>

<h3>Comparing Clean Resources</h3>
<table>
<thead><tr><th>Resource</th><th>Main strength</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Solar PV</td><td>Low cost, quick to build</td><td>Daytime only, seasonal variation</td></tr>
<tr><td>Wind</td><td>Low cost, often produces at night and in winter</td><td>Variable, siting and transmission needs</td></tr>
<tr><td>Batteries</td><td>Fast response, shifts energy by hours</td><td>Limited duration for multi-day gaps</td></tr>
<tr><td>Hydropower</td><td>Flexible and firm where available</td><td>Limited sites, ecological impacts, drought risk</td></tr>
<tr><td>Nuclear</td><td>Firm, carbon-free, small land footprint</td><td>High cost, long build times, waste management</td></tr>
<tr><td>Geothermal</td><td>Firm, carbon-free</td><td>Location-dependent, drilling cost</td></tr>
</tbody>
</table>

<h3>Key Challenges</h3>
<ol>
<li><strong>Variability:</strong> wind and solar output change with weather and time of day.</li>
<li><strong>Transmission:</strong> the best wind and solar sites are often far from cities, and new lines can take many years to permit.</li>
<li><strong>Grid stability:</strong> traditional spinning generators naturally help keep frequency steady; inverter-based resources need advanced controls to provide similar support.</li>
<li><strong>Interconnection delays:</strong> many projects wait in long queues before they can connect.</li>
<li><strong>Just transition:</strong> communities that depend on coal plants for jobs and tax revenue need support.</li>
</ol>

<h3>Solutions in Practice</h3>
<p>Grid operators combine several tools. Geographic diversity helps, because the wind is often blowing somewhere across a large region. Storage shifts solar into the evening. Demand flexibility lets water heaters, electric vehicles and factories adjust when they use power. Firm clean resources such as hydropower, geothermal and nuclear cover long gaps. Some regions now run for hours at a time on very high shares of renewable electricity, showing that high levels are technically achievable with good planning.</p>
<p>Decarbonizing the grid also multiplies benefits: as transportation and heating electrify, each clean kilowatt-hour cuts emissions in those sectors too.</p>
`,
        UNDERGRADUATE: `
<h2>Planning a Decarbonized Power System</h2>
<p>Grid decarbonization at the undergraduate level is about how policy targets translate into investment and operating decisions. Clean energy standards set goals; capacity planning determines which resources to build; and integration analysis checks that the resulting system can meet demand reliably every hour. This lesson introduces the policy instruments, planning logic and integration challenges that shape decarbonization pathways.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Renewable portfolio standard:</strong> a requirement that a set share of electricity sales come from eligible renewable sources by a target date</li>
<li><strong>Clean energy standard:</strong> a broader requirement that counts all low- or zero-carbon sources, often including nuclear</li>
<li><strong>Capacity expansion model:</strong> an optimization model that chooses which generation, storage and transmission to build over time at least cost</li>
<li><strong>Levelized cost of energy:</strong> the average lifetime cost per unit of energy produced, used to compare technologies</li>
<li><strong>Net load:</strong> demand minus variable renewable output, representing what other resources must supply</li>
<li><strong>Planning reserve margin:</strong> extra capacity above expected peak demand held to maintain reliability</li>
</ul>

<h3>Policy Instruments Compared</h3>
<table>
<thead><tr><th>Instrument</th><th>How it works</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Renewable portfolio standard</td><td>Mandates a share of renewable sales, often with tradable credits</td><td>Clear, proven driver of deployment</td><td>May exclude firm clean resources</td></tr>
<tr><td>Clean energy standard</td><td>Mandates a share of clean sales, technology-inclusive</td><td>Flexibility to use any zero-carbon source</td><td>Definitions of "clean" can be contested</td></tr>
<tr><td>Carbon price</td><td>Taxes or caps emissions, letting markets find cuts</td><td>Economically efficient in theory</td><td>Political resistance; price may be too low</td></tr>
<tr><td>Emissions performance standard</td><td>Limits emissions rate for each plant</td><td>Direct control of pollution</td><td>Less flexibility in how cuts are achieved</td></tr>
<tr><td>Subsidies and tax credits</td><td>Lower cost of clean technologies</td><td>Politically popular, accelerate learning</td><td>Fiscal cost; not targeted at emissions directly</td></tr>
</tbody>
</table>

<h3>Why Levelized Cost Is Not Enough</h3>
<p>Levelized cost compares technologies on average cost per megawatt-hour, but electricity is worth different amounts at different times. Solar produced at noon on a grid already saturated with solar is worth less than energy delivered at the evening peak. As variable renewable shares rise, their market value tends to decline relative to the average price, an effect sometimes called value deflation. Planners therefore use system-level models that account for timing, location and reliability rather than ranking technologies by levelized cost alone.</p>

<h3>The Shape of Net Load</h3>
<p>When large amounts of solar are added, net load drops at midday and ramps up steeply in the evening, creating the well-known "duck curve." This shape demands fast-ramping resources and makes storage valuable for shifting midday surplus. Over longer periods, the critical problem becomes multi-day periods of low wind and sun, which short-duration batteries cannot cover alone.</p>

<h3>Integration Challenges</h3>
<ol>
<li><strong>Ramping:</strong> resources must follow steep changes in net load.</li>
<li><strong>Curtailment:</strong> surplus renewable energy must be stored, exported or wasted.</li>
<li><strong>Inertia and frequency:</strong> fewer synchronous generators require fast frequency response and grid-forming inverters.</li>
<li><strong>Transmission congestion:</strong> limited lines trap clean power in remote areas.</li>
<li><strong>Resource adequacy:</strong> reliability must be checked across all hours and weather years, not only the peak hour.</li>
</ol>

<h3>Applied Method: Evaluating a Pathway</h3>
<ol>
<li>Set the emissions target and the timeline.</li>
<li>Project demand, including electrification of vehicles and heating.</li>
<li>Run a capacity expansion model with hourly operations for several weather years.</li>
<li>Check reliability metrics and identify the hours of greatest stress.</li>
<li>Compare costs and emissions across scenarios with different technology assumptions.</li>
</ol>
`,
        GRADUATE: `
<h2>Deep Decarbonization: Firm Capacity and Policy Design</h2>
<p>Deep decarbonization studies consistently find that reaching very high clean shares is achievable, but that cost rises sharply in the last stretch unless firm low-carbon resources, long-duration storage or large-scale flexibility are available. This lesson examines the role of firm capacity, the scenario evidence on the "last mile," and the policy, market and governance designs that determine whether deep decarbonization is affordable and fair.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Firm low-carbon resource:</strong> a carbon-free or near carbon-free resource that can deliver power on demand for extended periods regardless of weather</li>
<li><strong>Long-duration storage:</strong> storage able to discharge for many hours to days, bridging extended low-renewable periods</li>
<li><strong>Dunkelflaute:</strong> a term for extended periods of low wind and low solar output, often in winter</li>
<li><strong>Option value:</strong> the value of keeping technology choices open while uncertainty about cost and performance is resolved</li>
<li><strong>Just transition:</strong> policies ensuring workers and communities dependent on fossil energy share in the benefits of decarbonization</li>
<li><strong>Market design:</strong> the rules governing how electricity, capacity and services are bought and sold</li>
</ul>

<h3>Scenario Evidence on the Last Mile</h3>
<p>Many modeling studies show that the cost of decarbonizing a grid rises nonlinearly as emissions approach zero when the only tools available are variable renewables and short-duration batteries. Large overbuilds of wind and solar and heavy curtailment would be needed to cover rare, extended low-output periods. Adding firm options such as geothermal, nuclear, hydropower, long-duration storage, gas with carbon capture or clean fuels flattens the cost curve. The precise numbers differ widely by region and assumptions, but the qualitative finding that a diverse portfolio lowers cost is robust across much of the literature.</p>

<h3>Policy Design Choices</h3>
<table>
<thead><tr><th>Design question</th><th>Options</th><th>Key trade-off</th></tr></thead>
<tbody>
<tr><td>Target definition</td><td>Renewable share, clean share, emissions cap</td><td>Technology neutrality versus clarity and public support</td></tr>
<tr><td>Accounting</td><td>Annual matching versus hourly matching of clean supply</td><td>Simplicity versus incentives for firm and flexible resources</td></tr>
<tr><td>Capacity procurement</td><td>Capacity markets, bilateral obligations, central procurement</td><td>Market efficiency versus planning certainty</td></tr>
<tr><td>Transmission planning</td><td>Regional versus local, proactive versus reactive</td><td>Cost allocation disputes versus access to cheap resources</td></tr>
<tr><td>Fossil retirement</td><td>Managed phase-out, securitization, market-driven exit</td><td>Ratepayer cost versus stranded asset risk</td></tr>
</tbody>
</table>

<h3>Market Design Under High Renewables</h3>
<p>Energy-only markets reward energy delivered at marginal cost. When near-zero-marginal-cost wind and solar dominate, prices fall in many hours, weakening revenue for all resources, including those needed for reliability. Responses include scarcity pricing, capacity mechanisms, long-term contracts for clean resources, and new products for flexibility and system strength. Each has implications for who bears risk: investors, utilities or consumers.</p>

<h3>Governance and Equity</h3>
<p>Decarbonization redistributes costs and benefits. Closing fossil plants can harm local economies and tax bases, while new transmission and generation affect landowners, ecosystems and Indigenous territories. Meaningful consultation, benefit-sharing agreements and community ownership can improve legitimacy and speed deployment. Rate design matters too: recovering fixed grid costs through volumetric charges can burden households that cannot invest in their own solar or efficiency.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Specify targets, accounting rules and the time horizon.</li>
<li>Model multiple weather years to capture extended low-output events.</li>
<li>Compare portfolios with and without firm low-carbon and long-duration options.</li>
<li>Assess market and institutional readiness to procure needed resources.</li>
<li>Analyze distributional impacts on workers, ratepayers and frontline communities.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Grid Decarbonization</h2>
<p>Grid decarbonization research spans engineering, economics and social science. Its central tools are energy system models whose outputs inform targets and investment, yet these models face deep uncertainty about technology costs, demand, weather and human behavior. This lesson surveys modeling methods, debates about technology pathways and the emerging study of transition dynamics as a socio-technical process.</p>

<h3>Modeling Methods</h3>
<ul>
<li><strong>Capacity expansion modeling:</strong> optimization of investment and operation over decades, typically minimizing system cost subject to policy and reliability constraints</li>
<li><strong>Production cost modeling:</strong> detailed simulation of unit commitment and dispatch for a fixed fleet, used to test operational feasibility</li>
<li><strong>Temporal aggregation:</strong> methods such as representative periods that reduce computational burden by modeling selected time slices</li>
<li><strong>Modeling to generate alternatives:</strong> techniques that search for near-optimal solutions that differ substantially from the least-cost plan</li>
<li><strong>Integrated assessment model:</strong> a model linking energy, economy, land and climate to evaluate global mitigation pathways</li>
<li><strong>Socio-technical transition theory:</strong> frameworks explaining how technologies, institutions and practices change together over time</li>
</ul>

<h3>Resolution and Fidelity Debates</h3>
<p>Results depend strongly on resolution. Models with coarse temporal resolution tend to overstate the value of variable renewables and understate the need for flexibility; models with few weather years can miss rare extreme events that drive reliability investment. Spatial aggregation hides transmission constraints. Researchers debate how much detail is enough, and increasingly use decomposition, parallel computing and hybrid workflows that pass candidate portfolios from capacity expansion into detailed operational and stability studies.</p>

<h3>Contested Technology Pathways</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Role of nuclear and carbon capture</td><td>Cost and deployment-rate assumptions dominate results and are deeply uncertain</td></tr>
<tr><td>Need for long-duration and seasonal storage</td><td>Depends on weather-year selection, demand flexibility and firm alternatives</td></tr>
<tr><td>Value of transmission expansion</td><td>Technically large benefits, but social acceptance and permitting are rarely modeled</td></tr>
<tr><td>Annual versus hourly clean accounting</td><td>Different accounting rules produce different emissions outcomes and investment signals</td></tr>
<tr><td>Hydrogen in the power sector</td><td>Competing uses, round-trip losses and infrastructure needs remain uncertain</td></tr>
</tbody>
</table>

<h3>Near-Optimal Spaces and Uncertainty</h3>
<p>Least-cost optimization yields a single plan that can be misleading when many very different portfolios cost nearly the same. Modeling to generate alternatives and related methods map this near-optimal space, revealing which decisions are robust (for example, large wind and solar build-out) and which are fragile. Combined with scenario discovery and robust decision-making, these approaches shift emphasis from prediction to understanding trade-offs under deep uncertainty.</p>

<h3>Transition Dynamics</h3>
<p>Optimization models usually assume a central planner with perfect foresight. Real transitions involve path dependence, incumbent resistance, learning-by-doing, supply chain constraints and public acceptance. Research on transition dynamics uses historical analysis of diffusion rates, agent-based models of investors and households, and political economy analysis of coalitions and policy feedback. A key open question is how fast clean technologies can scale relative to historical precedents, and what limits growth: materials, workforce, permitting or finance.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Integrating stability and inverter-based resource constraints into planning models.</li>
<li>Representing climate change impacts on weather, demand and hydropower in long-term planning.</li>
<li>Coupling energy models with social acceptance, siting conflicts and land-use analysis.</li>
<li>Empirical validation of model projections against observed deployment and costs.</li>
<li>Incorporating distributional justice metrics alongside cost and emissions in optimization.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rgdq1',
      question: {
        ELEMENTARY: 'What is the grid?',
        MIDDLE_SCHOOL: 'What does decarbonizing the grid mean?',
        HIGH_SCHOOL: 'What is firm capacity?',
        UNDERGRADUATE: 'How does a clean energy standard differ from a renewable portfolio standard?',
        GRADUATE: 'What does the term "dunkelflaute" describe?',
        PHD: 'What is the purpose of modeling to generate alternatives?',
      },
      options: {
        ELEMENTARY: ['A big web of wires that carries electricity to everyone', 'A kind of solar panel', 'A tall tower that spins in the wind', 'A box that saves electricity'],
        MIDDLE_SCHOOL: ['Cutting the carbon dioxide released when making electricity until it is close to zero', 'Removing all power lines', 'Using more coal', 'Turning off electricity at night'],
        HIGH_SCHOOL: ['Generation that can be counted on to produce power whenever needed, for as long as needed', 'A battery that lasts only minutes', 'Power from sources that vary with the weather', 'The maximum size of a solar panel'],
        UNDERGRADUATE: ['It counts all low- or zero-carbon sources, often including nuclear', 'It only counts solar power', 'It bans all renewable energy', 'It applies only to transportation fuels'],
        GRADUATE: ['Extended periods of low wind and low solar output', 'A type of battery chemistry', 'A carbon pricing mechanism', 'A sudden spike in electricity demand'],
        PHD: ['To find near-optimal solutions that differ substantially from the least-cost plan', 'To make the model run faster by removing constraints', 'To generate electricity from alternative fuels', 'To produce a single exact forecast of the future'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The grid is a giant web of wires that connects power plants to homes and schools.',
        MIDDLE_SCHOOL: 'Decarbonization means reducing the carbon dioxide from making electricity toward zero.',
        HIGH_SCHOOL: 'Firm capacity can deliver power on demand regardless of weather, for extended periods.',
        UNDERGRADUATE: 'A clean energy standard is technology-inclusive, counting any zero-carbon source.',
        GRADUATE: 'Dunkelflaute refers to calm, dark periods, often in winter, when wind and solar output are low.',
        PHD: 'MGA maps the near-optimal space to show which decisions are robust and which are fragile.',
      },
    },
    {
      id: 'rgdq2',
      question: {
        ELEMENTARY: 'Which of these makes clean electricity without smoke?',
        MIDDLE_SCHOOL: 'What must be true on the grid at every single moment?',
        HIGH_SCHOOL: 'Why is natural gas often described as a bridge rather than a destination?',
        UNDERGRADUATE: 'Why is levelized cost of energy alone not enough to plan a high-renewable grid?',
        GRADUATE: 'What do many deep decarbonization studies find about firm low-carbon resources?',
        PHD: 'Why can coarse temporal resolution bias capacity expansion results?',
      },
      options: {
        ELEMENTARY: ['A coal power plant', 'A wind turbine', 'A campfire', 'A smoky chimney'],
        MIDDLE_SCHOOL: ['All power must come from solar', 'Electricity made must match electricity used', 'Every home must have a battery', 'Power plants must be turned off at night'],
        HIGH_SCHOOL: ['It produces no emissions at all', 'It still emits carbon dioxide and can leak methane', 'It is always more expensive than coal', 'It cannot be used to make electricity'],
        UNDERGRADUATE: ['Levelized cost is impossible to calculate', 'Electricity is worth different amounts at different times and places', 'All technologies have identical levelized costs', 'Levelized cost includes reliability automatically'],
        GRADUATE: ['They always raise total system cost', 'Including them flattens the steep cost rise near zero emissions', 'They are never needed in any region', 'They make storage unnecessary everywhere'],
        PHD: ['It always makes models more accurate', 'It can overstate renewable value and understate flexibility needs', 'It has no effect on results', 'It only affects transmission costs'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Wind turbines spin in the breeze to make electricity without any smoke.',
        MIDDLE_SCHOOL: 'Supply and demand must balance instantly, every moment, to keep the grid working.',
        HIGH_SCHOOL: 'Gas emits less than coal but still releases carbon dioxide, and leaked methane is a powerful greenhouse gas.',
        UNDERGRADUATE: 'Timing and location change the value of energy, so system models are needed.',
        GRADUATE: 'Firm options cover rare extended low-output periods without massive overbuilding.',
        PHD: 'Averaging away variability hides the hours when flexibility is most needed.',
      },
    },
    {
      id: 'rgdq3',
      question: {
        ELEMENTARY: 'How do big batteries help a clean grid?',
        MIDDLE_SCHOOL: 'Why are new transmission lines important for clean electricity?',
        HIGH_SCHOOL: 'What is curtailment?',
        UNDERGRADUATE: 'What is net load?',
        GRADUATE: 'What is the key difference between annual and hourly clean energy matching?',
        PHD: 'What does socio-technical transition theory study?',
      },
      options: {
        ELEMENTARY: ['They make the wind blow harder', 'They make smoke disappear', 'They save extra sunshine and wind power for later', 'They make the sun stay up longer'],
        MIDDLE_SCHOOL: ['They make electricity cleaner by themselves', 'They replace all power plants', 'They carry power from sunny and windy places to cities', 'They store power underground'],
        HIGH_SCHOOL: ['Building new wind farms', 'Adding more batteries', 'Deliberately reducing wind or solar output because the grid cannot use or move it', 'Cutting the cost of solar panels'],
        UNDERGRADUATE: ['Total demand plus losses', 'The output of nuclear plants', 'Demand minus variable renewable output', 'The capacity of transmission lines'],
        GRADUATE: ['They give identical investment signals', 'Annual matching is always stricter', 'Hourly matching requires clean supply in each hour, rewarding firm and flexible resources', 'Hourly matching ignores emissions'],
        PHD: ['Only the physics of electricity', 'Only electricity prices', 'How technologies, institutions and practices change together over time', 'Only the chemistry of batteries'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Batteries save clean energy when there is extra and give it back when the sun and wind are low.',
        MIDDLE_SCHOOL: 'The best sites for wind and solar are often far away, so long lines bring the power to cities.',
        HIGH_SCHOOL: 'Curtailment wastes clean energy when there is too much or not enough line capacity.',
        UNDERGRADUATE: 'Net load is what the rest of the system must supply after wind and solar.',
        GRADUATE: 'Hourly matching values clean power when it is actually needed, not just in annual totals.',
        PHD: 'Transition theory examines the co-evolution of technology, institutions and social practices.',
      },
    },
    {
      id: 'rgdq4',
      question: {
        ELEMENTARY: 'What can you do to help the grid use less electricity?',
        MIDDLE_SCHOOL: 'Which source can run any time but makes the most carbon pollution?',
        HIGH_SCHOOL: 'Why do inverter-based resources need advanced controls for grid stability?',
        UNDERGRADUATE: 'What causes the "duck curve" shape in net load?',
        GRADUATE: 'Why do energy-only markets face challenges under high renewable shares?',
        PHD: 'Which issue is often missing from optimization models of transmission expansion?',
      },
      options: {
        ELEMENTARY: ['Leave the TV on all day', 'Open the fridge door wide', 'Plug in more chargers', 'Turn off lights when you leave a room'],
        MIDDLE_SCHOOL: ['Wind', 'Solar', 'Nuclear', 'Coal'],
        HIGH_SCHOOL: ['They make too much smoke', 'They only work at night', 'They are always unstable', 'They lack the natural frequency support of traditional spinning generators'],
        UNDERGRADUATE: ['Too much wind at night', 'Nuclear plants turning off', 'High winter heating loads', 'Large amounts of solar lowering midday net load, followed by a steep evening ramp'],
        GRADUATE: ['Prices are always too high', 'Renewables cannot sell energy', 'Markets are banned', 'Near-zero marginal cost resources depress prices, weakening revenue for reliability resources'],
        PHD: ['Electrical resistance', 'Line voltage', 'Construction materials', 'Social acceptance and permitting'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Turning off lights saves electricity, so fewer power plants need to run.',
        MIDDLE_SCHOOL: 'Coal can run any time but releases the most carbon dioxide.',
        HIGH_SCHOOL: 'Spinning generators naturally steady frequency; inverters must be programmed to help.',
        UNDERGRADUATE: 'Solar pushes midday net load down, then demand rises as solar fades in the evening.',
        GRADUATE: 'Low prices in many hours make it hard for needed resources to recover their costs.',
        PHD: 'Transmission has large technical benefits, but siting conflicts and permitting are rarely modeled.',
      },
    },
    {
      id: 'rgdq5',
      question: {
        ELEMENTARY: 'Which of these makes pollution when it makes electricity?',
        MIDDLE_SCHOOL: 'Why do experts say "clean up the grid, then electrify everything"?',
        HIGH_SCHOOL: 'How does geographic diversity help a grid with lots of wind?',
        UNDERGRADUATE: 'Why must reliability be checked across many weather years?',
        GRADUATE: 'Why can recovering fixed grid costs through volumetric charges raise equity concerns?',
        PHD: 'What does path dependence mean for real energy transitions?',
      },
      options: {
        ELEMENTARY: ['A power plant that burns coal', 'A solar panel', 'A wind turbine', 'A dam with a water wheel'],
        MIDDLE_SCHOOL: ['Cars and heating that run on clean electricity become cleaner too', 'Electric cars do not need electricity', 'It makes gas cheaper', 'It means using fewer power lines'],
        HIGH_SCHOOL: ['The wind is often blowing somewhere across a large region', 'Wind blows the same everywhere at once', 'It makes turbines taller', 'It removes the need for any power lines'],
        UNDERGRADUATE: ['Rare extended low-output events may be missed if only one year is studied', 'Weather never changes between years', 'Only the peak hour matters', 'It is required to calculate levelized cost'],
        GRADUATE: ['They can burden households that cannot invest in their own solar or efficiency', 'They make electricity free for everyone', 'They only affect large factories', 'They remove all fixed costs'],
        PHD: ['Past choices and existing infrastructure shape and constrain future options', 'Every transition follows the same path', 'Technologies can change instantly', 'Models always predict the correct path'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Coal plants burn coal and make smoke. Sun, wind and water make clean electricity.',
        MIDDLE_SCHOOL: 'When the grid is clean, everything that runs on electricity gets cleaner as well.',
        HIGH_SCHOOL: 'Spreading wind farms over a wide area smooths out local calm spells.',
        UNDERGRADUATE: 'Multi-day low wind and sun periods vary by year, and they drive reliability needs.',
        GRADUATE: 'Households that use less grid power through rooftop solar shift fixed costs onto others.',
        PHD: 'Incumbent infrastructure, institutions and interests make some transition paths easier than others.',
      },
    },
  ],
}

export default expansion
