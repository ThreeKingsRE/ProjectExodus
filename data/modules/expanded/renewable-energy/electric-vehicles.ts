import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'electric-vehicles',
  lessons: [
    {
      id: 're-ev-1',
      title: 'Cars That Plug In',
      content: {
        ELEMENTARY: `
<h2>Cars That Plug In</h2>
<p>Most cars you see drink gasoline from a pump. But some cars are different. They plug into the wall, just like a tablet or a phone! These are called electric cars. Let's find out how they work and why they are good for our air.</p>

<h3>What Makes an Electric Car Go?</h3>
<p>An electric car has a very big battery under the floor. The battery stores electricity. When the driver presses the pedal, electricity flows from the battery to a motor. The motor spins the wheels, and off the car goes, almost silently!</p>
<ul>
<li><strong>Battery:</strong> a box that stores electricity so the car can use it later</li>
<li><strong>Motor:</strong> a machine that uses electricity to spin the wheels around</li>
<li><strong>Charger:</strong> the plug and cable that fill the battery with electricity</li>
</ul>

<h3>Filling Up Without Gas</h3>
<p>Instead of going to a gas station, many families charge their electric car at home overnight, while everyone is asleep. In the morning the battery is full and ready for school and work. There are also charging stations at stores, parks and along big highways for long trips.</p>

<h3>Why Are Electric Cars Good for the Air?</h3>
<p>Gas cars puff smoky exhaust out of a pipe at the back. That smoke makes the air dirty and warms up our planet. Electric cars have no exhaust pipe at all! The air on your street stays cleaner. And if the electricity comes from the sun or the wind, the car is even cleaner.</p>
<ul>
<li><strong>Exhaust:</strong> the dirty gas that comes out of the back of a gasoline car</li>
<li><strong>Pollution:</strong> dirty stuff in the air, water or ground that can make living things sick</li>
<li><strong>Solar power:</strong> electricity made from sunshine by special panels</li>
</ul>

<h3>A Magic Trick When Slowing Down</h3>
<p>Here is something amazing. When an electric car slows down, its motor can work backwards and send a little electricity back into the battery. It is like getting a small gift every time you stop at a red light!</p>

<h3>Be an Electric Car Spotter</h3>
<ol>
<li>Look for cars with no exhaust pipe at the back.</li>
<li>Find charging stations in parking lots. They often have a plug picture.</li>
<li>Listen: electric cars are very quiet when they drive slowly.</li>
<li>Ask a grown-up if your family could walk, bike or share a ride for short trips. That helps the air too!</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>How Electric Vehicles Work</h2>
<p>An electric vehicle, or EV, swaps the gasoline engine for a battery and an electric motor. That one change affects almost everything: how the car is fueled, how much energy it wastes, how it is maintained and how much pollution it creates. Let's look under the hood.</p>

<h3>Inside an EV</h3>
<ol>
<li><strong>Battery pack:</strong> hundreds or thousands of small lithium-ion cells, usually under the floor</li>
<li><strong>Inverter:</strong> changes the battery's direct current into the alternating current many motors use</li>
<li><strong>Electric motor:</strong> turns electrical energy into spinning motion</li>
<li><strong>Charging port:</strong> where the cable plugs in to refill the battery</li>
<li><strong>Onboard computer:</strong> manages temperature, charging and power so the battery stays healthy</li>
</ol>

<h3>Why EVs Waste Less Energy</h3>
<p>A gasoline engine burns fuel in small explosions. Most of the energy in the fuel turns into heat that escapes through the radiator and the exhaust, and only a smaller share actually pushes the car. An electric motor is much more efficient: most of the battery's energy ends up turning the wheels. EVs also use <em>regenerative braking</em>, where the motor acts like a generator while slowing down and puts energy back into the battery.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Electric vehicle:</strong> a vehicle that runs fully or partly on electricity stored in a battery</li>
<li><strong>Lithium-ion battery:</strong> a rechargeable battery type also used in phones and laptops</li>
<li><strong>Regenerative braking:</strong> recapturing energy when slowing down and storing it back in the battery</li>
<li><strong>Range:</strong> how far a vehicle can travel on one full charge</li>
<li><strong>Tailpipe emissions:</strong> pollution that comes directly out of a vehicle's exhaust pipe</li>
<li><strong>Efficiency:</strong> how much of the energy put in actually becomes useful work</li>
</ul>

<h3>Gas Car Versus Electric Car</h3>
<table>
<thead><tr><th>Feature</th><th>Gasoline car</th><th>Electric car</th></tr></thead>
<tbody>
<tr><td>Fuel</td><td>Gasoline from a pump</td><td>Electricity from a plug</td></tr>
<tr><td>Tailpipe pollution</td><td>Yes</td><td>None</td></tr>
<tr><td>Moving parts in the drivetrain</td><td>Many</td><td>Far fewer</td></tr>
<tr><td>Oil changes</td><td>Needed regularly</td><td>Not needed</td></tr>
<tr><td>Energy wasted as heat</td><td>Most of it</td><td>A small share</td></tr>
</tbody>
</table>

<h3>Is an EV Really Cleaner?</h3>
<p>EVs have no tailpipe, but the electricity has to come from somewhere. If it comes from coal, some pollution happens at the power plant instead. Even so, studies of typical grids generally find EVs produce less climate pollution over their lifetime than similar gas cars, and the gap grows as more wind and solar join the grid. Building the battery does create extra pollution at the start, which the car "pays back" by driving cleaner over the years.</p>

<h3>Try This</h3>
<p>Find out what powers your local electricity grid. Is it mostly coal, gas, hydro, nuclear, wind or solar? That tells you how clean an EV charged in your town would be.</p>
`,
        HIGH_SCHOOL: `
<h2>EV Technology, Charging and Emissions</h2>
<p>Electric vehicles have moved from niche to mainstream in many countries. Understanding them means looking at three linked systems: the vehicle itself, the charging network that supports it and the electricity grid behind the charger. Each involves trade-offs that shape how fast EVs can cut transportation emissions.</p>

<h3>Types of Electrified Vehicles</h3>
<table>
<thead><tr><th>Type</th><th>How it works</th><th>Plugs in?</th></tr></thead>
<tbody>
<tr><td>Battery electric vehicle (BEV)</td><td>Runs only on a battery and motor</td><td>Yes</td></tr>
<tr><td>Plug-in hybrid (PHEV)</td><td>Smaller battery for short trips plus a gasoline engine</td><td>Yes</td></tr>
<tr><td>Hybrid (HEV)</td><td>Gasoline engine assisted by a small battery charged by braking</td><td>No</td></tr>
<tr><td>Fuel cell electric vehicle (FCEV)</td><td>Makes electricity on board from hydrogen</td><td>No, refuels with hydrogen</td></tr>
</tbody>
</table>

<h3>Charging Levels</h3>
<ul>
<li><strong>Level 1 charging:</strong> a standard household outlet; very slow, adding only a few miles of range per hour</li>
<li><strong>Level 2 charging:</strong> a 240-volt home or workplace charger that can refill most batteries overnight</li>
<li><strong>DC fast charging:</strong> high-power stations that supply direct current straight to the battery, adding large amounts of range in well under an hour</li>
<li><strong>State of charge:</strong> how full the battery is, shown as a percentage</li>
<li><strong>Charging curve:</strong> the pattern where fast charging slows down as the battery gets fuller to protect it</li>
</ul>
<p>Most charging happens at home or work, where cars sit parked for hours. Fast chargers matter most for road trips and for drivers without a driveway or garage, such as many apartment residents.</p>

<h3>Batteries: The Heart of the EV</h3>
<p>Lithium-ion batteries store energy by moving lithium ions between two electrodes. Different chemistries balance cost, energy density, lifespan and safety. Nickel-rich cathodes pack more energy into less weight, while lithium iron phosphate (LFP) cells are cheaper, longer-lasting and avoid cobalt and nickel, but hold somewhat less energy per kilogram. Battery packs slowly lose capacity with age and use, and heat, very high states of charge and frequent fast charging can speed this up.</p>

<h3>Comparing Lifetime Emissions</h3>
<p>A fair comparison looks at the whole life cycle, not just the tailpipe:</p>
<ol>
<li><strong>Manufacturing:</strong> an EV usually starts with a larger carbon footprint because battery production is energy-intensive.</li>
<li><strong>Use phase:</strong> the EV's emissions depend on how electricity is generated; gasoline cars emit every mile.</li>
<li><strong>End of life:</strong> batteries can be reused for stationary storage or recycled to recover valuable metals.</li>
</ol>
<p>On most grids the EV overtakes the gasoline car after a few years of driving, and its advantage grows as the grid gets cleaner, something a gasoline car can never do.</p>

<h3>Challenges and Solutions</h3>
<ul>
<li>Upfront cost is often higher, though fuel and maintenance savings narrow the gap.</li>
<li>Charging access is uneven, especially for renters and rural drivers.</li>
<li>Mining for lithium, nickel and cobalt raises environmental and human-rights concerns, which recycling and better sourcing standards aim to reduce.</li>
<li>Smart charging can shift charging to times when the grid has spare clean power.</li>
</ul>
`,
        UNDERGRADUATE: `
<h2>EV Economics, Grid Impacts and Vehicle-to-Grid</h2>
<p>An electric vehicle is both a transportation technology and a large, mobile, flexible electrical load. Analyzing EVs therefore requires two lenses: the private economics a buyer faces and the system-level effects on the power grid. This lesson develops both, ending with vehicle-to-grid concepts that blur the line between car and power plant.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Total cost of ownership:</strong> all costs over a vehicle's life, including purchase, financing, energy, maintenance, insurance and resale value</li>
<li><strong>Energy consumption rate:</strong> the electricity used per distance traveled, commonly expressed in kilowatt-hours per 100 kilometers or miles</li>
<li><strong>Battery degradation:</strong> the gradual loss of usable capacity and power as cells age through time and cycling</li>
<li><strong>Coincident peak:</strong> the portion of a load that occurs at the same time as the overall system peak demand</li>
<li><strong>Managed charging:</strong> controlling when and how fast vehicles charge to reduce costs or grid stress, sometimes called V1G</li>
<li><strong>Vehicle-to-grid:</strong> bidirectional charging that lets a parked EV discharge power back to the grid or a building</li>
</ul>

<h3>Total Cost of Ownership in Words</h3>
<p>EVs generally carry a higher purchase price, largely due to the battery, but lower operating costs. Fuel cost per kilometer depends on the ratio of electricity price to gasoline price and on the efficiency gap: because electric drivetrains convert a much larger share of stored energy into motion, an EV typically needs roughly a third to a quarter of the energy a comparable gasoline car uses. Maintenance is also lower since there is no engine oil, fewer fluids and less brake wear thanks to regenerative braking. Whether an EV is cheaper overall depends on annual distance driven, local energy prices, incentives, financing rates and resale value. High-mileage drivers and fleets usually reach cost parity sooner.</p>
<table>
<thead><tr><th>Cost element</th><th>Gasoline vehicle</th><th>Battery electric vehicle</th></tr></thead>
<tbody>
<tr><td>Purchase price</td><td>Lower</td><td>Higher, falling as battery costs decline</td></tr>
<tr><td>Energy cost per distance</td><td>Higher and volatile</td><td>Lower, especially with home charging</td></tr>
<tr><td>Routine maintenance</td><td>Oil, filters, exhaust, more brake wear</td><td>Tires, cabin filter, coolant checks</td></tr>
<tr><td>Main uncertainty</td><td>Fuel prices</td><td>Battery life and resale value</td></tr>
</tbody>
</table>

<h3>Grid Impacts</h3>
<p>Total annual energy for EVs is manageable for most grids; the challenge is <em>when</em> and <em>where</em> it is drawn. Unmanaged evening charging, when people arrive home, can coincide with the existing peak and overload local distribution transformers on streets where several neighbors adopt EVs. Fast-charging hubs concentrate megawatt-scale loads at single sites, which can require costly grid upgrades and expose operators to demand charges. Managed charging shifts load into overnight or midday solar hours, often cutting both costs and emissions without affecting drivers, because most cars are parked far longer than they need to charge.</p>

<h3>Vehicle-to-Grid</h3>
<p>Bidirectional charging extends flexibility from "charge later" to "discharge now." Applications range from vehicle-to-home backup during outages, to vehicle-to-building peak shaving, to aggregated fleets providing grid services such as frequency regulation. Barriers include bidirectional hardware cost, interconnection rules, metering, battery warranty concerns and the need for aggregators to coordinate many small resources reliably. Fleets with predictable schedules, such as school buses parked in summer, are early candidates.</p>

<h3>Applied Method: Evaluating an EV Choice</h3>
<ol>
<li>Estimate annual distance and the share that can be charged at home or work.</li>
<li>Convert energy use to cost using local electricity tariffs, including any time-of-use rates.</li>
<li>Compare purchase, incentives, maintenance and expected resale over a set ownership period.</li>
<li>Estimate life-cycle emissions using the local grid's average and expected future mix.</li>
<li>Check charging access and whether managed charging programs are available.</li>
</ol>
`,
        GRADUATE: `
<h2>Transportation Electrification Policy, Fleets and Life-Cycle Analysis</h2>
<p>At the graduate level, EVs are a policy and systems problem. Governments, utilities and fleet operators must coordinate vehicle supply, charging infrastructure, grid investment and materials supply chains, while ensuring the transition is equitable and genuinely lowers emissions. This lesson examines policy instruments, fleet electrification and the methods used to judge environmental claims.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Zero-emission vehicle mandate:</strong> a regulation requiring manufacturers to sell a rising share of vehicles with no tailpipe emissions</li>
<li><strong>Fuel economy and emissions standards:</strong> fleet-average limits on emissions per distance that push manufacturers toward efficient and electric models</li>
<li><strong>Purchase incentive:</strong> a rebate, tax credit or fee reduction that lowers the upfront cost of an EV for buyers</li>
<li><strong>Make-ready infrastructure:</strong> the wiring, panels and grid connections installed ahead of chargers so sites can electrify cheaply</li>
<li><strong>Attributional life-cycle assessment:</strong> accounting for the share of environmental burdens associated with a product under average conditions</li>
<li><strong>Consequential life-cycle assessment:</strong> estimating how emissions change system-wide as a result of a decision, using marginal effects</li>
</ul>

<h3>The Policy Toolkit</h3>
<table>
<thead><tr><th>Instrument</th><th>Main target</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Vehicle standards and mandates</td><td>Manufacturers</td><td>Shapes supply at scale</td><td>Can be weakened or delayed politically</td></tr>
<tr><td>Purchase incentives</td><td>Buyers</td><td>Directly narrows price gap</td><td>Costly; may favor wealthier buyers</td></tr>
<tr><td>Charging investment</td><td>Infrastructure gaps</td><td>Addresses range and access concerns</td><td>Utilization risk at early sites</td></tr>
<tr><td>Utility rate design</td><td>Charging behavior</td><td>Steers load to low-cost hours</td><td>Demand charges can hurt fast-charger economics</td></tr>
<tr><td>Low-emission zones</td><td>Urban air quality</td><td>Local health gains</td><td>Burden on owners of older vehicles</td></tr>
</tbody>
</table>
<p>These instruments interact. Standards create supply, incentives create demand, charging reduces perceived risk, and rate design determines whether the added load helps or strains the grid.</p>

<h3>Fleet Electrification</h3>
<p>Fleets such as delivery vans, buses, taxis and municipal vehicles are attractive early adopters: they drive many kilometers, return to depots and are managed by professionals who calculate total cost of ownership. Key planning steps include duty-cycle analysis to match battery size to routes, depot power planning that often takes longer than buying vehicles, charging schedules that avoid demand peaks and training for maintenance staff. Telematics data allows operators to right-size vehicles and chargers rather than overbuild.</p>

<h3>Life-Cycle Analysis and Its Pitfalls</h3>
<p>Claims about EV benefits hinge on methodological choices. Average grid emission factors can understate or overstate impacts compared with marginal factors, which reflect the generators that actually respond to new load. Results also depend on assumed vehicle lifetime, battery size, manufacturing location, the grid's future trajectory and whether recycling credits are included. Robust analyses report ranges and sensitivity tests rather than a single figure, and most find meaningful life-cycle benefits across a wide range of assumptions, especially as grids decarbonize.</p>

<h3>Equity and Governance</h3>
<p>Early EV incentives flowed disproportionately to higher-income households. Equitable programs target used-EV purchases, income-qualified rebates, public and curbside charging in multi-unit neighborhoods, electrified transit and shared mobility. Communities near mines and processing facilities also bear burdens, which makes supply-chain standards and recycling part of the equity agenda.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the goal: emissions, air quality, cost, energy security or a combination.</li>
<li>Choose attributional or consequential accounting deliberately and justify it.</li>
<li>Test sensitivity to grid trajectory, vehicle lifetime and battery size.</li>
<li>Assess grid upgrade needs and managed charging potential.</li>
<li>Examine who receives benefits and who bears costs across income and geography.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Batteries, Charging Optimization and System Integration</h2>
<p>EV research spans electrochemistry, power electronics, optimization and energy systems modeling. Open questions include how far battery chemistries can advance, how to charge quickly without accelerating degradation, and how millions of vehicles can be coordinated as a grid resource. This lesson surveys the frontiers, methods and debates.</p>

<h3>Battery Technology Advancement</h3>
<ul>
<li><strong>Solid-state battery:</strong> a cell that replaces the liquid electrolyte with a solid, promising higher energy density and safety but facing interface and manufacturing challenges</li>
<li><strong>Solid electrolyte interphase:</strong> a passivating layer that forms on the anode, protecting it while consuming lithium as it grows over the cell's life</li>
<li><strong>Lithium plating:</strong> deposition of metallic lithium on the anode during fast or cold charging, which reduces capacity and can create safety risks</li>
<li><strong>Sodium-ion battery:</strong> a chemistry using abundant sodium instead of lithium, generally with lower energy density but potential cost and supply advantages</li>
<li><strong>Silicon anode:</strong> an anode material with high theoretical capacity that swells substantially during cycling, complicating durability</li>
<li><strong>Cell-to-pack design:</strong> pack architectures that reduce module hardware so more of the pack's mass and volume is active material</li>
</ul>
<p>Solid-state cells illustrate the gap between laboratory promise and mass production: maintaining stable contact between solid layers through repeated expansion, suppressing dendrites and manufacturing thin electrolytes at scale and low cost remain active problems. Meanwhile, incremental gains in conventional lithium-ion cells, and the rise of cobalt-free chemistries, continue to shift the baseline that new technologies must beat.</p>

<h3>Degradation Modeling</h3>
<table>
<thead><tr><th>Approach</th><th>Description</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Empirical fitting</td><td>Curves fitted to aging test data</td><td>Fast, but poor extrapolation outside tested conditions</td></tr>
<tr><td>Equivalent circuit models</td><td>Resistors and capacitors mimic cell behavior</td><td>Good for control; limited physical insight</td></tr>
<tr><td>Physics-based electrochemical models</td><td>Porous electrode theory with side reactions</td><td>Mechanistic but computationally heavy and hard to parameterize</td></tr>
<tr><td>Data-driven and hybrid models</td><td>Machine learning on fleet or lab data, sometimes physics-informed</td><td>Promising for prediction; risk of poor generalization</td></tr>
</tbody>
</table>
<p>Calendar aging and cycle aging interact with temperature, state of charge and current in nonlinear ways, and path dependence means two cells with the same total throughput can age differently. Separating these effects with limited, costly test data is a core methodological challenge.</p>

<h3>Charging Optimization</h3>
<p>Fast-charging protocols aim to minimize charging time subject to constraints on temperature, voltage and anode potential to avoid plating. Research explores multi-stage constant-current profiles, pulsed charging, model predictive control and thermal preconditioning. At the system level, charging scheduling for fleets and public hubs is formulated as stochastic or robust optimization under uncertain arrivals, departures and energy needs, often with grid constraints and price signals. Decentralized methods, such as price-based coordination and distributed optimization, are studied to avoid herding, where many vehicles respond to the same low price and create a new peak.</p>

<h3>System Integration</h3>
<p>Energy system models increasingly represent EVs as flexible demand and potential storage. Key debates concern how much flexibility drivers will actually provide, how to model behavior realistically, whether vehicle-to-grid revenues justify added degradation and hardware cost, and how distribution-level constraints limit aggregated flexibility that appears available at the bulk-system level.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether vehicle-to-grid degradation costs are small enough to make frequent cycling worthwhile.</li>
<li>How to choose emission factors for charging: average, marginal short-run or long-run marginal.</li>
<li>How quickly recycling can supply a meaningful share of battery materials given growing demand.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable manufacturing of stable solid-state and lithium-metal cells.</li>
<li>Generalizable degradation models that combine physics with fleet data.</li>
<li>Charging control that co-optimizes speed, battery health and grid conditions.</li>
<li>Behavioral models of driver participation in managed charging and vehicle-to-grid.</li>
<li>Integrated assessment of materials supply, recycling and second-life use.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'revq1',
      question: {
        ELEMENTARY: 'What powers an electric car?',
        MIDDLE_SCHOOL: 'What is regenerative braking?',
        HIGH_SCHOOL: 'What is DC fast charging?',
        UNDERGRADUATE: 'What is total cost of ownership?',
        GRADUATE: 'What does a zero-emission vehicle mandate require?',
        PHD: 'What is a key challenge for solid-state batteries?',
      },
      options: {
        ELEMENTARY: ['A big battery', 'Gasoline', 'Coal', 'Firewood'],
        MIDDLE_SCHOOL: ['Recapturing energy when slowing down and storing it in the battery', 'Braking as hard as possible', 'Replacing the brakes every month', 'Braking only with the engine off'],
        HIGH_SCHOOL: ['High-power charging that supplies direct current to add a lot of range in well under an hour', 'Charging from a regular household outlet', 'Charging only with solar panels on the roof', 'Swapping the tires for faster ones'],
        UNDERGRADUATE: ['All costs over the vehicle\'s life, including purchase, energy, maintenance and resale', 'Just the purchase price', 'Only fuel costs', 'Only insurance costs'],
        GRADUATE: ['Manufacturers must sell a rising share of vehicles with no tailpipe emissions', 'Drivers must charge only at night', 'Utilities must build every charger', 'All gasoline cars must be scrapped immediately'],
        PHD: ['Keeping stable contact between solid layers and manufacturing them at scale and low cost', 'They store too much energy to be useful', 'They cannot be made in any size', 'They only work in very cold climates'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Electric cars run on a big battery that you fill with electricity by plugging in.',
        MIDDLE_SCHOOL: 'When slowing down, the motor acts like a generator and sends energy back into the battery.',
        HIGH_SCHOOL: 'DC fast chargers deliver direct current straight to the battery at high power, mainly for road trips.',
        UNDERGRADUATE: 'Total cost of ownership adds up every cost over the life of the vehicle, not just the sticker price.',
        GRADUATE: 'ZEV mandates shape supply by requiring a growing share of zero-tailpipe-emission sales.',
        PHD: 'Interface stability, dendrite suppression and scalable, low-cost manufacturing remain unsolved at mass scale.',
      },
    },
    {
      id: 'revq2',
      question: {
        ELEMENTARY: 'Where do many families charge their electric car?',
        MIDDLE_SCHOOL: 'Why do electric cars waste less energy than gas cars?',
        HIGH_SCHOOL: 'Which type of vehicle runs only on a battery and motor?',
        UNDERGRADUATE: 'Why can unmanaged evening EV charging be a problem?',
        GRADUATE: 'Why are fleets attractive early adopters of EVs?',
        PHD: 'What is lithium plating?',
      },
      options: {
        ELEMENTARY: ['At the gas pump', 'At home overnight', 'At the swimming pool', 'At the bakery oven'],
        MIDDLE_SCHOOL: ['They are painted lighter colors', 'Electric motors turn most of their energy into motion instead of heat', 'They never use any energy at all', 'They only drive downhill'],
        HIGH_SCHOOL: ['Hybrid vehicle', 'Battery electric vehicle', 'Plug-in hybrid', 'Fuel cell vehicle'],
        UNDERGRADUATE: ['It uses more energy per year than all other loads combined', 'It can coincide with the existing peak and overload local transformers', 'It makes batteries charge faster', 'It lowers electricity prices for everyone'],
        GRADUATE: ['They drive very little each year', 'They drive many kilometers, return to depots and are managed by people who calculate total costs', 'They never need charging infrastructure', 'They are exempt from all regulations'],
        PHD: ['A coating applied to protect battery cases', 'Deposition of metallic lithium on the anode during fast or cold charging', 'A recycling method for lithium', 'A way to increase energy density safely'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Many families plug in at home at night so the car is full in the morning.',
        MIDDLE_SCHOOL: 'Gas engines lose most of their fuel energy as heat; electric motors send most energy to the wheels.',
        HIGH_SCHOOL: 'A battery electric vehicle (BEV) has no gasoline engine at all.',
        UNDERGRADUATE: 'Evening charging lines up with the existing peak and can strain distribution transformers where EVs cluster.',
        GRADUATE: 'High mileage and depot charging let fleets reach cost savings quickly and plan charging carefully.',
        PHD: 'Plating happens when the anode cannot accept lithium fast enough, reducing capacity and raising safety risks.',
      },
    },
    {
      id: 'revq3',
      question: {
        ELEMENTARY: 'What comes out of the back of a gasoline car but not an electric car?',
        MIDDLE_SCHOOL: 'What does "range" mean for an electric vehicle?',
        HIGH_SCHOOL: 'Why does an EV usually start life with a larger carbon footprint than a gas car?',
        UNDERGRADUATE: 'What is managed charging?',
        GRADUATE: 'What is the difference between attributional and consequential life-cycle assessment?',
        PHD: 'What is a known weakness of purely empirical battery degradation models?',
      },
      options: {
        ELEMENTARY: ['Music', 'Water balloons', 'Smoky exhaust', 'Bubbles'],
        MIDDLE_SCHOOL: ['How fast the car can go', 'How many seats the car has', 'How far it can travel on one full charge', 'How loud the motor is'],
        HIGH_SCHOOL: ['Its tires are bigger', 'It has more seats', 'Making the battery is energy-intensive', 'It is painted with special paint'],
        UNDERGRADUATE: ['Charging every car at maximum speed at all times', 'Banning EVs from public chargers', 'Controlling when and how fast vehicles charge to cut costs or grid stress', 'Charging only from diesel generators'],
        GRADUATE: ['They are identical methods with different names', 'Attributional is only for buses', 'Attributional assigns average burdens, while consequential estimates system-wide changes from a decision', 'Consequential ignores the electricity grid'],
        PHD: ['They are always too slow to compute', 'They require detailed electrochemistry', 'They extrapolate poorly outside the conditions they were tested under', 'They cannot use any data'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Gas cars puff out exhaust. Electric cars have no exhaust pipe at all.',
        MIDDLE_SCHOOL: 'Range is the distance an EV can drive before it needs to recharge.',
        HIGH_SCHOOL: 'Battery production uses a lot of energy, but the EV usually pays this back after a few years of driving.',
        UNDERGRADUATE: 'Managed charging shifts load to cheaper or cleaner hours, usually without affecting drivers.',
        GRADUATE: 'The choice matters because average and marginal grid emissions can differ substantially.',
        PHD: 'Fitted curves capture tested conditions well but can mislead when used for new temperatures or duty cycles.',
      },
    },
    {
      id: 'revq4',
      question: {
        ELEMENTARY: 'What can an electric car do when it slows down?',
        MIDDLE_SCHOOL: 'What decides how clean an EV is to drive in your town?',
        HIGH_SCHOOL: 'What is one advantage of lithium iron phosphate (LFP) batteries?',
        UNDERGRADUATE: 'What is vehicle-to-grid?',
        GRADUATE: 'What does make-ready infrastructure mean?',
        PHD: 'What is "herding" in decentralized EV charging?',
      },
      options: {
        ELEMENTARY: ['Turn into a boat', 'Fly into the air', 'Honk a song', 'Send a little electricity back into its battery'],
        MIDDLE_SCHOOL: ['The color of the car', 'The size of the wheels', 'The radio station', 'How the local electricity is made'],
        HIGH_SCHOOL: ['It holds the most energy per kilogram of any battery', 'It needs no charging', 'It uses more cobalt', 'It is cheaper and longer-lasting and avoids cobalt and nickel'],
        UNDERGRADUATE: ['A video game about electric cars', 'A type of gasoline engine', 'A road built for EVs only', 'Bidirectional charging that lets a parked EV send power back to the grid or a building'],
        GRADUATE: ['Chargers that are ready to sell to customers', 'Cars made ready at the factory', 'A driving test for EV owners', 'Wiring and grid connections installed ahead of chargers so sites can electrify cheaply'],
        PHD: ['Vehicles parking close together', 'Drivers following each other on highways', 'Batteries sharing cells', 'Many vehicles responding to the same low price and creating a new peak'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'When slowing down, the motor sends some energy back into the battery, like a little gift!',
        MIDDLE_SCHOOL: 'If the grid uses lots of wind and solar, an EV charged there is much cleaner.',
        HIGH_SCHOOL: 'LFP cells cost less, last longer and avoid cobalt and nickel, though they store somewhat less energy per kilogram.',
        UNDERGRADUATE: 'Vehicle-to-grid lets parked EVs discharge power for backup, peak shaving or grid services.',
        GRADUATE: 'Installing make-ready wiring early lowers the cost of adding chargers later.',
        PHD: 'Identical price signals can synchronize charging and simply move the peak instead of flattening it.',
      },
    },
    {
      id: 'revq5',
      question: {
        ELEMENTARY: 'Which choice also helps keep the air clean on short trips?',
        MIDDLE_SCHOOL: 'Which part changes the battery\'s direct current into alternating current for the motor?',
        HIGH_SCHOOL: 'What can happen to EV batteries at the end of their life in a car?',
        UNDERGRADUATE: 'Which drivers usually reach EV cost parity soonest?',
        GRADUATE: 'Why have early EV incentives raised equity concerns?',
        PHD: 'Why might aggregated EV flexibility be smaller than it appears at the bulk-system level?',
      },
      options: {
        ELEMENTARY: ['Walking or biking', 'Leaving the car running', 'Driving around the block for fun', 'Honking more'],
        MIDDLE_SCHOOL: ['The inverter', 'The tires', 'The windshield', 'The seat belt'],
        HIGH_SCHOOL: ['They can be reused for stationary storage or recycled to recover metals', 'They must always be buried in the ground', 'They turn back into gasoline', 'They grow larger over time'],
        UNDERGRADUATE: ['High-mileage drivers and fleets', 'People who never drive', 'Drivers who only use gasoline', 'People who keep a car for one month'],
        GRADUATE: ['They flowed disproportionately to higher-income households', 'They were only offered to bus drivers', 'They made EVs more expensive', 'They banned used EV sales'],
        PHD: ['Distribution-level constraints limit how much flexibility can actually be used', 'EVs cannot be charged at night', 'Batteries have no storage capacity', 'The bulk system has no demand'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Walking, biking or sharing rides on short trips means less pollution for everyone.',
        MIDDLE_SCHOOL: 'The inverter converts direct current from the battery into the alternating current many motors use.',
        HIGH_SCHOOL: 'Old EV batteries can get a second life storing energy or be recycled for lithium, nickel and other metals.',
        UNDERGRADUATE: 'More distance driven means more fuel savings, which offsets the higher purchase price faster.',
        GRADUATE: 'Wealthier buyers bought most new EVs, so equitable programs now target used EVs, transit and income-qualified rebates.',
        PHD: 'Local transformer and feeder limits can block flexibility that bulk-system models assume is available.',
      },
    },
  ],
}

export default expansion
