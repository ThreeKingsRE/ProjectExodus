import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'electric-vehicles~2',
  lessons: [
    {
      id: 're-ev-1',
      title: 'Electric Cars, Buses and Clean Ways to Travel',
      content: {
        ELEMENTARY: `
<h2>Clean Ways to Get Around</h2>
<p>Every day, people travel to school, to work and to visit friends. Some ride in cars, some take a bus, some ride bikes and some walk. Many cars and buses burn gasoline or diesel, which puts smoke and dirty air into the sky. But there is a cleaner way: vehicles that run on electricity! Let's take a ride and find out how they work.</p>

<h3>Cars and Buses With Batteries</h3>
<p>An electric car has a big battery instead of a gas tank. The battery sends electricity to a motor, and the motor turns the wheels. There is no tailpipe, so no smoke comes out the back. Many cities now have electric buses too. They are big, quiet and carry lots of people at once.</p>
<ul>
<li><strong>Battery:</strong> a box that stores electricity so the vehicle can use it later</li>
<li><strong>Electric motor:</strong> a machine that uses electricity to make the wheels spin</li>
<li><strong>Charger:</strong> a plug that fills the battery with electricity, a bit like a phone charger</li>
<li><strong>Tailpipe:</strong> the pipe on a gas car where smoky exhaust comes out</li>
<li><strong>Electric bus:</strong> a big bus that runs on a battery and carries many riders quietly</li>
</ul>

<h3>Plugging In Instead of Filling Up</h3>
<p>A gas car goes to a gas station. An electric car plugs in, often at home at night while the family sleeps. Some chargers are at stores, schools and parking lots. Electric buses usually charge at a bus depot, which is a big garage where buses rest.</p>

<h3>Why Is It Better for the Air?</h3>
<p>Because electric vehicles have no tailpipe, the air on the street stays cleaner. That helps people breathe more easily, especially kids. When the electricity comes from the sun or the wind, the whole trip is even cleaner!</p>

<h3>The Cleanest Trips of All</h3>
<p>Electric cars are great, but some trips are even cleaner. Walking and riding a bike use no fuel at all. A full bus or train carries many people, so each person makes much less pollution than driving alone.</p>
<ol>
<li>Walk or bike to places that are close by, with a grown-up.</li>
<li>Take the bus or train with your family when you can.</li>
<li>Count the electric cars and buses you see on your street this week.</li>
</ol>

<h3>Think About It</h3>
<p>Imagine a city where buses hum quietly, bikes zip along safe paths and the air smells fresh. You can help build that city by choosing clean ways to travel!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Electric Vehicles Help Clean Up Transportation</h2>
<p>Transportation is one of the biggest sources of greenhouse gas emissions in many countries, because most vehicles still burn oil-based fuels. Electric vehicles, often called EVs, offer a cleaner path. But clean transportation is about more than swapping one kind of car for another. It also includes buses, trains, bikes, scooters and smart city design.</p>

<h3>How an EV Works</h3>
<p>A gas engine burns fuel in small explosions to push pistons. Most of the energy in the fuel turns into wasted heat. An electric vehicle is much simpler: a battery pack sends electricity to a motor, and the motor turns the wheels directly. Electric motors turn most of their energy into motion, so EVs need much less energy to travel the same distance.</p>
<p>EVs also use <em>regenerative braking</em>. When the driver slows down, the motor runs backward like a generator and puts some energy back into the battery instead of wasting it as heat in the brakes.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Electric vehicle (EV):</strong> a vehicle powered fully or partly by electricity stored in a battery</li>
<li><strong>Regenerative braking:</strong> using the motor to slow down and recharge the battery at the same time</li>
<li><strong>Charging station:</strong> a place where EVs plug in to refill their batteries with electricity</li>
<li><strong>Range:</strong> how far a vehicle can travel on one full charge or one full tank</li>
<li><strong>Public transit:</strong> shared transportation like buses, trains and trams that many people ride together</li>
<li><strong>Emissions:</strong> gases and particles released into the air, such as carbon dioxide and soot</li>
</ul>

<h3>Different Ways to Travel</h3>
<table>
<thead><tr><th>Way to travel</th><th>Pollution per person</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Walking or biking</td><td>Almost none</td><td>Healthy and free, best for short trips</td></tr>
<tr><td>Electric bus or train</td><td>Very low</td><td>Carries many people with one vehicle</td></tr>
<tr><td>Electric car</td><td>Low</td><td>Depends on how clean the electricity is</td></tr>
<tr><td>Gas car with one driver</td><td>High</td><td>Burns fuel and releases exhaust</td></tr>
</tbody>
</table>

<h3>Is the Electricity Clean?</h3>
<p>An EV is only as clean as the electricity that charges it. If power comes from coal, the EV still causes some pollution at the power plant. Even so, studies in most places find that EVs cause less pollution over their lifetime than gas cars, and they get cleaner every year as more solar and wind power is added to the grid.</p>

<h3>Making Batteries</h3>
<p>EV batteries need minerals such as lithium, nickel and cobalt. Mining these materials can harm land, water and workers if it is done carelessly. That is why recycling old batteries and mining responsibly are important parts of clean transportation.</p>

<h3>Try This</h3>
<p>Make a map of your neighborhood. Mark places you could reach by walking, biking or bus. You may be surprised how many trips do not need a car at all!</p>
`,
        HIGH_SCHOOL: `
<h2>Decarbonizing Transportation: EVs, Charging and Beyond</h2>
<p>Road transportation burns a large share of the world's oil and is a major source of both climate pollution and local air pollution. Electrification is the leading strategy for cutting those emissions, but the transportation system is more than vehicles. It includes charging networks, the electricity grid, public transit, land use and the choices people make every day. This lesson looks at how all these pieces fit together.</p>

<h3>Types of Electrified Vehicles</h3>
<ul>
<li><strong>Battery electric vehicle (BEV):</strong> runs only on electricity from a battery and has no engine or tailpipe</li>
<li><strong>Plug-in hybrid (PHEV):</strong> has a smaller battery for short electric trips plus a gasoline engine for longer ones</li>
<li><strong>Hybrid electric vehicle:</strong> uses a small battery to assist a gasoline engine but cannot be plugged in</li>
<li><strong>Fuel cell electric vehicle:</strong> makes electricity on board from hydrogen and releases only water vapor</li>
<li><strong>Electric micromobility:</strong> small electric vehicles such as e-bikes and e-scooters for short trips</li>
</ul>

<h3>Why Electric Drivetrains Are Efficient</h3>
<p>A typical gasoline engine turns only a minority of its fuel energy into motion; the rest is lost as heat. Electric motors convert most of the battery's energy into motion, and regenerative braking recovers energy that would otherwise be lost. That is why an EV usually needs a fraction of the energy of a comparable gas car to travel the same distance.</p>

<h3>Charging Infrastructure</h3>
<table>
<thead><tr><th>Charging type</th><th>Speed</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Level 1 (standard outlet)</td><td>Slow, a few kilometers of range per hour</td><td>Overnight home charging for short daily trips</td></tr>
<tr><td>Level 2 (dedicated circuit)</td><td>Medium, a full charge overnight</td><td>Homes, workplaces, apartment garages</td></tr>
<tr><td>DC fast charging</td><td>Fast, large share of a charge in under an hour</td><td>Highway road trips, taxis, delivery fleets</td></tr>
<tr><td>Depot charging</td><td>Medium to high power</td><td>Buses and trucks charging overnight at a base</td></tr>
</tbody>
</table>
<p>Most EV charging happens at home or work. A major challenge is people who live in apartments or rent and cannot install a home charger. Public and curbside chargers are essential for them.</p>

<h3>Beyond the Car: Avoid, Shift, Improve</h3>
<p>Transportation planners often use a three-part approach:</p>
<ol>
<li><strong>Avoid</strong> unnecessary trips through compact neighborhoods where shops and schools are close by.</li>
<li><strong>Shift</strong> trips to walking, cycling and public transit, which use far less energy per person.</li>
<li><strong>Improve</strong> the vehicles that remain, mainly by electrifying them and making them efficient.</li>
</ol>
<p>Electric buses are a powerful example of combining shift and improve: they serve many riders and remove diesel exhaust from busy streets.</p>

<h3>Trade-offs and Challenges</h3>
<ul>
<li>Battery production requires mining, which has environmental and human-rights risks.</li>
<li>Heavy trucks need large batteries, so long-haul trucking is harder to electrify than city driving.</li>
<li>Charging many vehicles at once can strain local power lines.</li>
<li>EVs still produce tire and brake dust, so cleaner cars do not solve every air problem.</li>
</ul>

<h3>Real-World Solutions</h3>
<p>Cities are adding bus lanes and electric bus fleets, utilities are offering cheaper night-time charging rates, and battery recycling is growing. Combined with a grid that gets cleaner each year, these steps make transportation one of the fastest-changing parts of the energy transition.</p>
`,
        UNDERGRADUATE: `
<h2>EV Economics, Grid Integration and Fleet Electrification</h2>
<p>Electrifying transportation shifts energy demand from oil to the power grid. Whether that shift delivers the expected climate, cost and air-quality benefits depends on vehicle economics, the carbon intensity of electricity, how and when vehicles charge, and how quickly fleets turn over. This lesson develops the analytical tools to evaluate those factors.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Total cost of ownership:</strong> the full cost of a vehicle over its life, including purchase, energy, maintenance, insurance and resale value</li>
<li><strong>Energy efficiency (vehicle):</strong> the energy a vehicle uses per distance traveled, usually in kilowatt-hours per kilometer for EVs</li>
<li><strong>Grid carbon intensity:</strong> the emissions released per unit of electricity generated, which varies by region and hour</li>
<li><strong>Managed charging:</strong> scheduling or modulating charging to reduce costs, avoid peaks or follow renewable output</li>
<li><strong>Duty cycle:</strong> the pattern of distance, speed, stops and idle time a vehicle experiences in daily service</li>
<li><strong>Fleet turnover:</strong> the rate at which old vehicles are retired and replaced, which limits how fast the stock can change</li>
</ul>

<h3>Total Cost of Ownership Reasoning</h3>
<p>EVs typically have a higher purchase price than comparable combustion vehicles, mainly because of the battery, but lower energy and maintenance costs. Electricity per kilometer is usually cheaper than gasoline, and electric drivetrains have far fewer moving parts, with no oil changes and less brake wear. The break-even point depends on distance driven per year, local fuel and electricity prices, incentives and financing costs. High-mileage vehicles such as taxis, delivery vans and buses reach break-even fastest, which is why fleets are often early adopters.</p>

<h3>Comparing Fleet Segments</h3>
<table>
<thead><tr><th>Segment</th><th>Electrification readiness</th><th>Key constraint</th></tr></thead>
<tbody>
<tr><td>Urban transit buses</td><td>High</td><td>Depot power capacity and route scheduling</td></tr>
<tr><td>Last-mile delivery vans</td><td>High</td><td>Charger installation at depots</td></tr>
<tr><td>Ride-hailing and taxis</td><td>Moderate to high</td><td>Access to fast charging and driver downtime</td></tr>
<tr><td>Regional trucks</td><td>Moderate</td><td>Battery weight and payload trade-offs</td></tr>
<tr><td>Long-haul trucks</td><td>Lower today</td><td>Megawatt-scale charging and route coverage</td></tr>
</tbody>
</table>

<h3>Grid Integration</h3>
<p>Each EV adds a substantial new load, but the aggregate impact depends on timing. Uncontrolled charging tends to cluster in the early evening when people return home, overlapping with existing peaks and stressing distribution transformers. Managed charging can move most of that load to overnight or midday solar hours with little inconvenience, because the average vehicle is parked most of the day. At the distribution level, clusters of fast chargers or bus depots may require transformer and feeder upgrades, so siting and coordination with utilities matter.</p>

<h3>Emissions Accounting</h3>
<p>Comparing EVs to combustion vehicles requires counting emissions from vehicle and battery manufacturing, fuel or electricity production, and operation. EVs usually start with a higher manufacturing footprint because of the battery, then pay it back through lower operating emissions. The payback is faster on cleaner grids and for vehicles driven more. Using average versus marginal grid emissions can change results, so analysts should state which they use.</p>

<h3>Applied Checklist for a Fleet Electrification Study</h3>
<ol>
<li>Characterize duty cycles: daily distance, dwell times and depot locations.</li>
<li>Match vehicle range and charging power to those duty cycles with a safety margin.</li>
<li>Estimate total cost of ownership under several fuel and electricity price scenarios.</li>
<li>Engage the utility early on service capacity and managed charging tariffs.</li>
<li>Calculate life-cycle emissions with stated grid assumptions.</li>
<li>Plan a phased rollout aligned with natural vehicle replacement cycles.</li>
</ol>
`,
        GRADUATE: `
<h2>Transforming Transportation Systems: Policy, Planning and Equity</h2>
<p>Transportation decarbonization is a system transformation, not a product swap. Vehicles, fuels, infrastructure, land use and institutions co-evolve, and decisions made today about roads, charging networks and transit will shape emissions for decades. This lesson examines the policy frameworks, planning tools and equity questions that determine whether electrification delivers broad public benefit.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Vehicle emissions standards:</strong> regulations that cap average emissions or require a rising share of zero-emission vehicles in manufacturers' sales</li>
<li><strong>Infrastructure lock-in:</strong> the tendency of long-lived roads, depots and land-use patterns to sustain particular travel behaviors for decades</li>
<li><strong>Induced demand:</strong> additional travel generated when road capacity expands or travel becomes cheaper</li>
<li><strong>Charging deserts:</strong> areas with few public chargers, often lower-income or rural, where adoption lags as a result</li>
<li><strong>Mode share:</strong> the proportion of trips made by each travel mode, such as car, transit, walking or cycling</li>
<li><strong>Just transition (transport):</strong> managing the shift so that workers, communities and low-income travelers share in the benefits</li>
</ul>

<h3>The Policy Toolkit</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Main limitation</th></tr></thead>
<tbody>
<tr><td>Purchase incentives</td><td>Lower upfront cost to speed adoption</td><td>Can favor higher-income buyers unless income-targeted</td></tr>
<tr><td>Zero-emission vehicle mandates</td><td>Require manufacturers to sell a rising share of EVs</td><td>Depends on enforcement and charging readiness</td></tr>
<tr><td>Fuel and carbon pricing</td><td>Raise the cost of fossil fuels relative to electricity</td><td>Politically difficult and regressive without rebates</td></tr>
<tr><td>Public charging investment</td><td>Reduce range anxiety and serve renters</td><td>Utilization risk in early years</td></tr>
<tr><td>Transit and active travel investment</td><td>Shift trips to lower-energy modes</td><td>Long lead times and land-use dependence</td></tr>
<tr><td>Low-emission or clean-air zones</td><td>Restrict polluting vehicles in dense areas</td><td>Can burden low-income drivers of older vehicles</td></tr>
</tbody>
</table>

<h3>Why Electrification Alone Is Not Enough</h3>
<p>Even an all-electric car fleet requires very large amounts of electricity, battery materials and road space, and it does not address congestion, road safety or the travel needs of people who cannot drive. Scenario analyses commonly find that combining electrification with reduced vehicle travel lowers total system cost and material demand. Planners therefore pair electrification with transit investment, safe cycling networks, compact development and pricing reforms.</p>

<h3>Utility and Institutional Coordination</h3>
<p>Charging infrastructure sits at the boundary of transport agencies, utilities, municipalities and private operators. Common barriers include slow interconnection of high-power sites, demand charges that penalize low-utilization fast chargers, permitting delays and unclear ownership of curbside space. Regulators can respond with tariffs designed for early-stage charging, utility-funded make-ready infrastructure and coordinated planning between transport and grid agencies.</p>

<h3>Equity and Distribution</h3>
<p>Early EV benefits have flowed disproportionately to wealthier households who own homes with garages. Meanwhile, communities near highways, ports and freight corridors bear the heaviest diesel pollution. Equity-focused strategies prioritize electrifying buses, school buses, drayage trucks and ride-hailing fleets, invest in chargers in underserved areas, support used-EV markets and retrain workers in vehicle maintenance and manufacturing.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the goal: emissions, air quality, cost, access or a combination.</li>
<li>Assess the full mobility system, including mode shift and travel demand.</li>
<li>Model grid and infrastructure requirements across scenarios.</li>
<li>Analyze who pays, who benefits and who bears residual pollution.</li>
<li>Identify institutional barriers and the agencies responsible for each.</li>
<li>Design monitoring to track adoption, utilization and distributional outcomes.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Vehicle-Grid Integration, Mobility Systems and Life-Cycle Impacts</h2>
<p>Research on transportation electrification has moved from questions of technical feasibility to questions of system integration, behavior and sustainability across supply chains. Open problems span power systems engineering, transport modeling, materials science and social science. This lesson surveys the main research threads, methods and debates.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Vehicle-grid integration:</strong> the umbrella term for coordinating EV charging, and potentially discharging, with power system needs</li>
<li><strong>Vehicle-to-grid (V2G):</strong> bidirectional power flow that lets parked EVs export energy to the grid or a building</li>
<li><strong>Agent-based travel simulation:</strong> models that represent individual travelers and vehicles to capture emergent charging and traffic patterns</li>
<li><strong>Consequential life-cycle assessment:</strong> an approach that estimates the system-wide change in impacts caused by a decision, rather than averaging existing flows</li>
<li><strong>Battery degradation modeling:</strong> methods that predict capacity loss from cycling, temperature and state-of-charge patterns over time</li>
<li><strong>Prospective LCA:</strong> life-cycle assessment that projects future technologies, supply chains and grids rather than using current data</li>
</ul>

<h3>Vehicle-Grid Integration</h3>
<p>Aggregated EV fleets represent a large, distributed and mostly idle storage resource. Research questions include how to coordinate millions of vehicles with privacy and limited communication, how to design incentives that respect driver mobility needs, and whether V2G services justify the added battery wear and hardware cost. Optimization formulations range from centralized model predictive control to decentralized schemes such as price-based coordination and distributed optimization, each with trade-offs between optimality, scalability and robustness to forecast error. A recurring finding is that smart unidirectional charging captures much of the available value, leaving the marginal value of bidirectional flow contested and context-dependent.</p>

<h3>Mobility System Modeling</h3>
<p>Electrification interacts with shared mobility, automation and land use. Coupled transport-energy models attempt to represent how charging availability affects route choice, how shared fleets change vehicle counts and kilometers traveled, and how these feed back into grid load. Challenges include behavioral parameters that are poorly observed, spatial resolution mismatches between transport zones and distribution feeders, and the computational cost of large agent-based simulations.</p>

<h3>Life-Cycle and Supply-Chain Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Average versus marginal grid emissions for charging</td><td>Choice of method can change estimated benefits substantially</td></tr>
<tr><td>Future battery chemistries and their footprints</td><td>Rapid technology change makes current inventories age quickly</td></tr>
<tr><td>Recycling rates and second-life use</td><td>Outcomes depend on future markets, policy and collection systems</td></tr>
<tr><td>Non-exhaust particulate emissions</td><td>Heavier vehicles may emit more tire wear, partly offset by regenerative braking</td></tr>
<tr><td>Critical mineral supply and social impacts</td><td>Environmental and labor conditions vary widely across mining regions</td></tr>
</tbody>
</table>

<h3>Methodological Debates</h3>
<p>Comparative studies often disagree because of differences in system boundaries, functional units, vehicle lifetimes, grid trajectories and driving cycles. Attributional assessments describe the footprint of a vehicle within today's economy, while consequential assessments ask what changes when adoption grows. Both are legitimate but answer different questions, and conflating them fuels public confusion. Harmonization efforts and transparent sensitivity analysis are active areas of methodological work.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable, privacy-preserving coordination of large EV populations on distribution networks.</li>
<li>Empirical evidence on driver acceptance of managed charging and V2G participation.</li>
<li>Integrated models linking travel demand, land use and grid capacity expansion.</li>
<li>Prospective life-cycle assessment of emerging chemistries and recycling pathways.</li>
<li>Electrification strategies for heavy freight, including charging corridors and alternative fuels.</li>
<li>Distributional analysis of electrification benefits and burdens across communities.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'revq1',
      question: {
        ELEMENTARY: 'What does an electric car use instead of a gas tank?',
        MIDDLE_SCHOOL: 'What is regenerative braking?',
        HIGH_SCHOOL: 'What is DC fast charging mainly used for?',
        UNDERGRADUATE: 'Why do high-mileage fleets often reach EV cost break-even fastest?',
        GRADUATE: 'What is a common equity concern with untargeted EV purchase incentives?',
        PHD: 'What is vehicle-to-grid (V2G)?',
      },
      options: {
        ELEMENTARY: ['A big battery', 'A bag of coal', 'A water tank', 'A sail'],
        MIDDLE_SCHOOL: ['Using the motor to slow down and recharge the battery', 'Braking hard to save tires', 'Filling the tank while driving', 'Turning off the engine at red lights'],
        HIGH_SCHOOL: ['Highway road trips and busy fleets that need a quick charge', 'Charging phones in the car', 'Only charging bicycles', 'Heating the car in winter'],
        UNDERGRADUATE: ['Lower energy and maintenance costs add up faster with more distance driven', 'They pay no electricity bills', 'Their batteries are free', 'They never need tires'],
        GRADUATE: ['Benefits can flow mainly to higher-income buyers', 'They always raise fuel prices', 'They ban older cars immediately', 'They only apply to buses'],
        PHD: ['Bidirectional power flow that lets parked EVs export energy to the grid', 'A rule requiring EVs on highways', 'A type of gasoline engine', 'A battery recycling process'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Electric cars store their energy in a big battery and plug in to fill it up.',
        MIDDLE_SCHOOL: 'When slowing down, the motor acts like a generator and sends energy back into the battery.',
        HIGH_SCHOOL: 'DC fast chargers deliver a large share of a charge in under an hour, useful for long trips and fleets.',
        UNDERGRADUATE: 'The savings per kilometer are what pay back the higher purchase price, so more kilometers means faster payback.',
        GRADUATE: 'Without income targeting, incentives tend to help households who could already afford new cars and home chargers.',
        PHD: 'V2G lets an EV battery discharge to the grid or a building, not only charge from it.',
      },
    },
    {
      id: 'revq2',
      question: {
        ELEMENTARY: 'Which way of getting to a nearby park makes no pollution at all?',
        MIDDLE_SCHOOL: 'What decides how clean an EV really is?',
        HIGH_SCHOOL: 'In the avoid-shift-improve approach, what does "shift" mean?',
        UNDERGRADUATE: 'Why does uncontrolled EV charging often stress the grid?',
        GRADUATE: 'What is infrastructure lock-in?',
        PHD: 'What does consequential life-cycle assessment estimate?',
      },
      options: {
        ELEMENTARY: ['Driving a big truck', 'Walking or riding a bike', 'Riding in a smoky old car', 'Taking a plane'],
        MIDDLE_SCHOOL: ['The color of the car', 'How clean the electricity that charges it is', 'How loud the radio is', 'The number of doors'],
        HIGH_SCHOOL: ['Moving trips to walking, cycling and public transit', 'Changing gears in a car', 'Moving gas stations to new places', 'Switching which side of the road people drive on'],
        UNDERGRADUATE: ['It tends to cluster in the early evening, overlapping existing peaks', 'EVs can only charge at noon', 'Chargers produce smoke', 'EVs use no electricity'],
        GRADUATE: ['Long-lived roads and land-use patterns sustaining certain travel behaviors for decades', 'Locking cars at night', 'A type of charging plug', 'A ban on new roads'],
        PHD: ['The system-wide change in impacts caused by a decision', 'Only the emissions of the factory', 'The average emissions of all cars today', 'The price of batteries'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Walking and biking use no fuel, so they make no pollution at all.',
        MIDDLE_SCHOOL: 'If the electricity comes from sun or wind, the EV is very clean; if from coal, less so.',
        HIGH_SCHOOL: 'Shift means moving trips to modes that use much less energy per person.',
        UNDERGRADUATE: 'People plug in when they get home, which adds load at the same time as the evening peak.',
        GRADUATE: 'Infrastructure lasts for decades, so today choices shape travel and emissions far into the future.',
        PHD: 'Consequential LCA asks what changes across the system when adoption grows, rather than averaging current flows.',
      },
    },
    {
      id: 'revq3',
      question: {
        ELEMENTARY: 'Why is the air cleaner on a street with electric buses?',
        MIDDLE_SCHOOL: 'Why do EVs need less energy than gas cars to go the same distance?',
        HIGH_SCHOOL: 'Which kind of vehicle has a small battery plus a gasoline engine and can be plugged in?',
        UNDERGRADUATE: 'What is managed charging?',
        GRADUATE: 'Why do scenario studies often pair electrification with reduced vehicle travel?',
        PHD: 'Why is the value of bidirectional V2G considered contested?',
      },
      options: {
        ELEMENTARY: ['They are painted green', 'They drive faster', 'They have no tailpipe smoke', 'They have bigger windows'],
        MIDDLE_SCHOOL: ['They are always lighter', 'They never stop at lights', 'Electric motors turn most of their energy into motion', 'They only drive downhill'],
        HIGH_SCHOOL: ['Battery electric vehicle', 'Fuel cell vehicle', 'Plug-in hybrid', 'Electric scooter'],
        UNDERGRADUATE: ['Charging only at gas stations', 'Driving more slowly', 'Scheduling charging to reduce costs, avoid peaks or follow renewable output', 'Charging every vehicle at full power at once'],
        GRADUATE: ['Because EVs cannot travel far', 'Because transit is always cheaper to build', 'It lowers total system cost and demand for electricity and materials', 'Because roads are being removed'],
        PHD: ['V2G is illegal everywhere', 'Batteries cannot discharge', 'Smart one-way charging captures much of the value, while V2G adds battery wear and hardware cost', 'EVs are never parked'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Electric buses have no tailpipe, so no smoky exhaust goes into the air on the street.',
        MIDDLE_SCHOOL: 'Gas engines waste most fuel energy as heat; electric motors waste far less.',
        HIGH_SCHOOL: 'A plug-in hybrid has a battery for short electric trips and a gas engine for longer ones.',
        UNDERGRADUATE: 'Managed charging shifts or adjusts charging, often to overnight or sunny hours.',
        GRADUATE: 'Fewer vehicle kilometers means less electricity, fewer batteries and less road space are needed.',
        PHD: 'Research often finds smart unidirectional charging captures much value, so the extra benefit of V2G depends on context.',
      },
    },
    {
      id: 'revq4',
      question: {
        ELEMENTARY: 'Where do electric buses usually charge?',
        MIDDLE_SCHOOL: 'What does "range" mean for a vehicle?',
        HIGH_SCHOOL: 'Why is long-haul trucking harder to electrify than city driving?',
        UNDERGRADUATE: 'Why do EVs usually start with a higher manufacturing carbon footprint?',
        GRADUATE: 'What is a charging desert?',
        PHD: 'Why might heavier EVs raise non-exhaust particle concerns?',
      },
      options: {
        ELEMENTARY: ['At a swimming pool', 'At the library shelves', 'Under a tree', 'At a bus depot'],
        MIDDLE_SCHOOL: ['The color options', 'The top speed', 'The price', 'How far it can travel on one full charge or tank'],
        HIGH_SCHOOL: ['Trucks have no wheels', 'Highways have no electricity', 'Trucks are always slow', 'Heavy trucks need very large batteries for long distances'],
        UNDERGRADUATE: ['Because of the paint', 'Because of their tires', 'Because they are larger', 'Because producing the battery is energy- and material-intensive'],
        GRADUATE: ['A desert with solar farms', 'A charger in a hot climate', 'A parking lot with many chargers', 'An area with few public chargers, often lower-income or rural'],
        PHD: ['EVs have exhaust pipes', 'Batteries emit dust', 'Electric motors burn fuel', 'Greater weight can increase tire wear, partly offset by regenerative braking'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Electric buses rest and charge at a bus depot, a big garage for buses.',
        MIDDLE_SCHOOL: 'Range tells you how far a vehicle can go before it needs to recharge or refuel.',
        HIGH_SCHOOL: 'Long trips with heavy loads need big, heavy batteries, which reduces payload.',
        UNDERGRADUATE: 'Battery manufacturing adds emissions up front, which are paid back by lower operating emissions.',
        GRADUATE: 'Charging deserts slow adoption where people already have fewer options.',
        PHD: 'Heavier vehicles can wear tires faster, while regenerative braking reduces brake dust.',
      },
    },
    {
      id: 'revq5',
      question: {
        ELEMENTARY: 'Why is a full bus a clean way to travel?',
        MIDDLE_SCHOOL: 'Why is recycling EV batteries important?',
        HIGH_SCHOOL: 'What is a big charging challenge for people who rent apartments?',
        UNDERGRADUATE: 'What is a duty cycle in fleet planning?',
        GRADUATE: 'Why do equity-focused strategies often prioritize electrifying buses and drayage trucks?',
        PHD: 'Why do comparative EV life-cycle studies often disagree?',
      },
      options: {
        ELEMENTARY: ['It carries many people at once, so each person makes less pollution', 'It is the fastest vehicle', 'It never needs a driver', 'It is the biggest vehicle on the road'],
        MIDDLE_SCHOOL: ['It reduces the need for new mining of minerals like lithium', 'It makes batteries heavier', 'It makes cars faster', 'It is required to drive at night'],
        HIGH_SCHOOL: ['They often cannot install a home charger', 'Apartments have no electricity', 'Renters cannot drive EVs', 'Chargers only work on houses'],
        UNDERGRADUATE: ['The pattern of distance, speed, stops and idle time in daily service', 'How often a vehicle is washed', 'The number of seats', 'The color code of a fleet'],
        GRADUATE: ['They reduce diesel pollution in communities near highways, ports and freight corridors', 'They are the cheapest vehicles to make', 'They are used only by wealthy people', 'They need no charging'],
        PHD: ['Differences in system boundaries, lifetimes, grid trajectories and driving cycles', 'All studies use identical data', 'EVs have no life cycle', 'Only one country studies EVs'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Sharing one bus spreads its energy use over many riders.',
        MIDDLE_SCHOOL: 'Recycling recovers materials so less new mining is needed.',
        HIGH_SCHOOL: 'Without a home charger, renters depend on public, workplace or curbside charging.',
        UNDERGRADUATE: 'Duty cycles determine the range and charging power a fleet vehicle actually needs.',
        GRADUATE: 'Those communities bear the heaviest diesel exhaust, so cleaning those vehicles brings large local health benefits.',
        PHD: 'Different assumptions about boundaries and future grids can produce quite different results.',
      },
    },
  ],
}

export default expansion
