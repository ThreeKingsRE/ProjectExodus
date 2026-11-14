import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-storage~2',
  lessons: [
    {
      id: 're-stor-1',
      title: 'Saving Energy for Later',
      content: {
        ELEMENTARY: `
<h2>A Piggy Bank for Electricity</h2>
<p>Do you have a piggy bank? When you get a coin, you can drop it in and save it for another day. Energy storage works the same way. When there is extra electricity, we save it. Later, when we need it, we take it back out. This helps us use clean energy from the sun and the wind all day and all night.</p>

<h3>Why Do We Need to Save Energy?</h3>
<p>The sun only shines during the day. The wind blows hard sometimes and gently at other times. But people want lights, fridges and computers all the time. Storage fills the gaps. It saves energy when there is plenty and gives it back when there is not enough.</p>
<ul>
<li><strong>Energy storage:</strong> a way of saving energy now so it can be used later</li>
<li><strong>Battery:</strong> a box that saves electricity as chemical energy and gives it back when needed</li>
<li><strong>Charging:</strong> putting energy into a battery, like filling a piggy bank</li>
</ul>

<h3>Different Kinds of Energy Piggy Banks</h3>
<p>There are many ways to save energy. Some are tiny and some are as big as a mountain lake!</p>
<ul>
<li><strong>Pumped hydro:</strong> pumping water up a hill to a high lake, then letting it rush down through a spinning wheel to make electricity again</li>
<li><strong>Flywheel:</strong> a very heavy wheel that keeps spinning for a long time and can turn its spin back into electricity</li>
<li><strong>Heat storage:</strong> keeping energy as warmth in hot water, rocks or special salts</li>
</ul>

<h3>Batteries Get Tired Too</h3>
<p>Have you noticed that an old tablet or phone does not last as long as a new one? That is because batteries slowly wear out each time they are filled and emptied. Engineers try to look after big batteries so they last for many years, just like you look after your favorite toy.</p>

<h3>Be an Energy Saver</h3>
<ol>
<li>Unplug chargers when your device is full.</li>
<li>Keep batteries away from very hot places like a sunny car window.</li>
<li>Never throw batteries in the trash. Ask a grown-up to take them to a recycling spot.</li>
<li>Turn off lights you are not using, so less energy needs to be saved and made.</li>
</ol>

<h3>Think About It</h3>
<p>Imagine a sunny day where solar panels make lots of electricity. Where could that extra energy go? Into a battery, up a hill as water, or into warm rocks. Then at night, out it comes. Storage is how sunshine can light your bedroom at bedtime!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Ways to Store Energy From Sun and Wind</h2>
<p>Electricity is tricky because the grid must balance supply and demand every second. If power plants make too little, lights can flicker or go out. If they make too much, equipment can be damaged. Solar and wind power change with the weather, so storage is becoming one of the most important parts of a clean energy system.</p>

<h3>Energy Changes Form</h3>
<p>Energy cannot be created or destroyed, but it can change form. Storage systems change electricity into another form of energy that can sit and wait, then change it back. Every change loses a little energy as heat, so no storage is perfect.</p>
<table>
<thead><tr><th>Storage type</th><th>Energy saved as</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Lithium-ion battery</td><td>Chemical energy</td><td>Homes, cars and a few hours of grid power</td></tr>
<tr><td>Pumped hydro</td><td>Height of water (gravity)</td><td>Large amounts of energy for many hours</td></tr>
<tr><td>Flywheel</td><td>Motion (spinning)</td><td>Very quick bursts of power</td></tr>
<tr><td>Thermal storage</td><td>Heat or cold</td><td>Warming or cooling buildings and factories</td></tr>
<tr><td>Compressed air</td><td>Squeezed air in tanks or caves</td><td>Large storage where geology allows</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Grid:</strong> the network of power lines that carries electricity from power plants to homes</li>
<li><strong>Capacity:</strong> how much energy a storage system can hold, often measured in kilowatt-hours</li>
<li><strong>Power rating:</strong> how fast a storage system can put energy in or out, measured in kilowatts</li>
<li><strong>Efficiency:</strong> how much energy you get back compared with how much you put in</li>
<li><strong>Cycle:</strong> one full charge followed by one full discharge of a battery</li>
<li><strong>Degradation:</strong> the slow loss of a battery's ability to hold energy as it gets older</li>
</ul>

<h3>Power Versus Energy</h3>
<p>Think of a water bottle. The size of the bottle is like capacity: how much it holds. The width of the opening is like power: how fast you can pour it out. A storage system might have a big bottle with a small opening, which can give steady power for a long time, or a small bottle with a wide opening, which gives a big burst quickly. Dividing capacity by power tells you how many hours the system can run at full output.</p>

<h3>Why Batteries Wear Out</h3>
<p>Inside a lithium-ion battery, tiny lithium particles move back and forth each time it charges and discharges. Over many cycles, small side reactions slowly use some of them up. Heat, charging all the way to full and draining all the way to empty speed this up. That is why many grid batteries avoid the very top and bottom of their charge range.</p>

<h3>Storage Helps the Whole Grid</h3>
<p>Storage can soak up extra solar power at midday and release it during the evening, when people come home and use more electricity. It can also react in a split second to keep the grid steady. Using storage this way lets us replace some fossil fuel power plants that used to sit waiting for busy times.</p>
`,
        HIGH_SCHOOL: `
<h2>Battery Chemistry, Pumped Hydro and Beyond</h2>
<p>Storage technologies are not interchangeable. Each one converts electricity into a different form of energy, with its own efficiency, lifetime, cost and ideal duration. Choosing the right storage is like choosing the right vehicle: a bicycle, a delivery van and a cargo ship all move things, but for very different jobs. This lesson explores how the main technologies work and what they are good at.</p>

<h3>Inside a Lithium-Ion Battery</h3>
<p>A lithium-ion cell has a negative electrode (often graphite), a positive electrode (a metal oxide or phosphate), a liquid electrolyte and a thin separator. During charging, lithium ions leave the positive electrode, cross the electrolyte and tuck into the graphite. During discharge they travel back while electrons flow through the external circuit to power devices. Two cathode families dominate grid storage:</p>
<ul>
<li><strong>Lithium iron phosphate:</strong> a cathode chemistry valued for safety, long cycle life and no cobalt or nickel</li>
<li><strong>Nickel manganese cobalt:</strong> a cathode chemistry with higher energy density, common in electric vehicles</li>
<li><strong>Electrolyte:</strong> the material inside a battery that lets ions move between the electrodes</li>
<li><strong>Thermal runaway:</strong> a dangerous chain reaction where a damaged cell overheats and can spread heat to neighbors</li>
<li><strong>State of charge:</strong> how full a battery is, expressed as a percentage of its usable capacity</li>
</ul>

<h3>Pumped Hydro: The Giant</h3>
<p>Pumped storage hydropower uses two reservoirs at different heights. Cheap or surplus electricity pumps water uphill; later the water flows down through turbines. It is the largest form of energy storage installed worldwide and can last for decades, but it needs suitable geography, takes years to build and can affect rivers and ecosystems.</p>

<h3>Comparing Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Typical duration</th><th>Round-trip efficiency</th><th>Key limitation</th></tr></thead>
<tbody>
<tr><td>Lithium-ion batteries</td><td>About 1 to 4 hours</td><td>High, roughly 85 to 90 percent</td><td>Degradation and fire safety</td></tr>
<tr><td>Pumped hydro</td><td>Many hours</td><td>Moderate to high, roughly 70 to 80 percent</td><td>Geography and long build times</td></tr>
<tr><td>Flow batteries</td><td>Several hours or more</td><td>Moderate</td><td>Lower energy density, higher upfront cost</td></tr>
<tr><td>Compressed air</td><td>Many hours</td><td>Moderate, depends on heat handling</td><td>Needs caverns or large tanks</td></tr>
<tr><td>Flywheels</td><td>Seconds to minutes</td><td>High for short periods</td><td>Lose energy if held for long</td></tr>
</tbody>
</table>

<h3>Flow Batteries</h3>
<p>In a flow battery, energy is stored in liquid electrolytes kept in external tanks and pumped through a cell stack. To store more energy, you add bigger tanks; to deliver more power, you add more stack. This separation of power and energy makes flow batteries attractive for longer durations.</p>

<h3>Trade-offs and Safety</h3>
<ol>
<li><strong>Efficiency versus duration:</strong> batteries are efficient but costly to scale to very long durations.</li>
<li><strong>Location:</strong> batteries fit almost anywhere; pumped hydro and compressed air depend on geography.</li>
<li><strong>Safety:</strong> grid batteries use monitoring, spacing and fire suppression to manage thermal runaway risk.</li>
<li><strong>Materials:</strong> lithium, nickel and cobalt mining raise environmental and human rights concerns, which recycling and new chemistries aim to reduce.</li>
</ol>
<p>Real-world grids increasingly combine several technologies, using each for what it does best.</p>
`,
        UNDERGRADUATE: `
<h2>Storage Economics, Degradation and Grid Services</h2>
<p>A storage asset produces no energy; it moves energy in time and provides flexibility. Its value therefore depends entirely on how it is operated and what it is paid for. This lesson treats storage as an economic asset: what services it sells, how degradation erodes value, and how to compare costs across technologies using consistent metrics.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Energy arbitrage:</strong> charging when electricity prices are low and discharging when they are high to profit from the spread</li>
<li><strong>Frequency regulation:</strong> rapid adjustments of power output to keep grid frequency at its target value</li>
<li><strong>Levelized cost of storage:</strong> lifetime costs of a storage system divided by the total energy it discharges</li>
<li><strong>Depth of discharge:</strong> the share of capacity used in a cycle, which strongly affects battery wear</li>
<li><strong>Value stacking:</strong> earning revenue from several services with one asset, subject to technical and contractual limits</li>
<li><strong>Capacity fade:</strong> the gradual loss of usable energy capacity as a battery ages</li>
</ul>

<h3>Grid Services</h3>
<table>
<thead><tr><th>Service</th><th>Timescale</th><th>What storage provides</th></tr></thead>
<tbody>
<tr><td>Frequency response and regulation</td><td>Sub-second to minutes</td><td>Very fast power injection or absorption</td></tr>
<tr><td>Operating reserves</td><td>Minutes to an hour</td><td>Standby capacity for unexpected outages</td></tr>
<tr><td>Energy arbitrage and peak shifting</td><td>Hours</td><td>Moving solar surplus into evening peaks</td></tr>
<tr><td>Resource adequacy</td><td>Peak periods across the year</td><td>Firm capacity during the riskiest hours</td></tr>
<tr><td>Transmission and distribution deferral</td><td>Hours, on peak days</td><td>Local relief that postpones network upgrades</td></tr>
<tr><td>Backup power</td><td>Hours to days</td><td>Islanded supply for critical loads during outages</td></tr>
</tbody>
</table>

<h3>Reasoning About Arbitrage</h3>
<p>Arbitrage revenue per cycle is roughly the price spread multiplied by energy discharged, minus losses. If round-trip efficiency is about 85 percent, a battery must buy more energy than it sells, so the discharge price must exceed the charge price divided by efficiency just to break even before degradation. Each cycle also consumes part of the battery's finite life, so a rational operator only cycles when the spread exceeds the marginal degradation cost. As more storage enters a market, it narrows the very spreads it profits from, a self-cannibalization effect.</p>

<h3>Degradation</h3>
<p>Battery aging has two components. Calendar aging occurs with time even at rest and is accelerated by high temperature and high state of charge. Cycle aging depends on throughput, depth of discharge and charging rate. Developers often oversize systems or plan augmentation, adding modules over time so the system keeps meeting its contracted capacity. Warranties typically limit cycles per year and specify end-of-life capacity, which shapes how aggressively the asset can be dispatched.</p>

<h3>Comparing Costs</h3>
<p>Levelized cost of storage accounts for capital cost, operating costs, efficiency losses, charging cost, degradation and replacement, divided by delivered energy. Two systems with similar capital cost per kilowatt-hour can have very different levelized costs if one cycles daily for twenty years and the other degrades quickly. Note also that cost per kilowatt (power) and cost per kilowatt-hour (energy) are different metrics: longer-duration systems look cheap per kilowatt-hour but expensive per kilowatt.</p>

<h3>Applied Evaluation Checklist</h3>
<ol>
<li>Identify the services available in the target market and their timescales.</li>
<li>Size power and energy to the highest-value service mix.</li>
<li>Model dispatch with a degradation cost, not just prices.</li>
<li>Check that stacked services do not conflict over the same energy at the same time.</li>
<li>Compare levelized cost with the value of the alternative, such as a peaking plant or network upgrade.</li>
</ol>
`,
        GRADUATE: `
<h2>Storage Policy, Market Design and Hybrid Optimization</h2>
<p>Storage challenges market designs that were built around generators and loads. It is both a buyer and a seller, it has a limited energy budget, and its value comes from flexibility across many timescales. At the graduate level, the central questions are how markets and regulation should treat storage, how hybrid systems should be designed and operated, and how planners should value storage relative to alternatives.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Capacity value:</strong> the contribution of a resource to meeting demand during the hours of highest reliability risk</li>
<li><strong>Effective load carrying capability:</strong> a probabilistic measure of how much additional demand a resource allows the system to serve reliably</li>
<li><strong>State-of-charge management:</strong> rules and strategies ensuring storage has energy available when it is needed</li>
<li><strong>Hybrid resource:</strong> storage paired with generation, either sharing a grid connection or operated as one unit</li>
<li><strong>Market participation model:</strong> rules that define how storage can bid, be dispatched and be paid in wholesale markets</li>
<li><strong>Non-wires alternative:</strong> using storage or other local resources to defer or avoid a network upgrade</li>
</ul>

<h3>Market Design Issues</h3>
<p>Early markets often had no category for storage, forcing it to register as a generator or a load. Better participation models allow storage to bid both charging and discharging, submit state-of-charge parameters, and provide multiple services. Remaining design issues include whether operators or owners manage state of charge, how to pay for fast response accurately, and how to treat storage that also serves a distribution utility. Charging fees and network tariffs also matter: charging storage as an end consumer can double-count network costs.</p>

<h3>Declining Capacity Value</h3>
<p>Short-duration storage can be very effective at covering narrow evening peaks. But as more storage is added, it flattens and broadens the peak, so each additional unit of the same duration contributes less to reliability. This saturation is why capacity accreditation methods based on effective load carrying capability are replacing simple rules that credit storage based on its power rating, and why longer durations gain relative value as storage penetration grows.</p>

<h3>Hybrid System Design</h3>
<table>
<thead><tr><th>Configuration</th><th>Benefit</th><th>Constraint</th></tr></thead>
<tbody>
<tr><td>Co-located, separately metered</td><td>Shared site and permitting, independent bidding</td><td>Combined output limited by interconnection size</td></tr>
<tr><td>DC-coupled with solar</td><td>Captures clipped solar energy and avoids some conversion losses</td><td>Charging mostly limited to solar output</td></tr>
<tr><td>Fully integrated hybrid</td><td>Single dispatch schedule, simpler operation</td><td>Less flexibility in market participation</td></tr>
<tr><td>Standalone storage</td><td>Siting where the grid needs it most</td><td>Separate interconnection and permitting</td></tr>
</tbody>
</table>
<p>Optimizing hybrids involves sizing the battery relative to generation and interconnection, choosing coupling, and designing dispatch that respects tax-credit charging rules, warranties and market obligations.</p>

<h3>Policy Instruments</h3>
<ol>
<li><strong>Procurement targets</strong> that direct utilities to acquire storage capacity.</li>
<li><strong>Investment incentives</strong> such as tax credits for standalone storage.</li>
<li><strong>Integrated resource planning</strong> that compares storage fairly with generation and network upgrades.</li>
<li><strong>Interconnection reform</strong> to reduce queues and allow surplus interconnection use.</li>
<li><strong>Safety codes and siting standards</strong> that address fire risk and community concerns.</li>
</ol>

<h3>Equity and Governance</h3>
<p>Storage can improve resilience in communities that suffer frequent outages, and can replace polluting peaker plants that are often located near lower-income neighborhoods. But benefits are not automatic. Siting decisions, fire safety communication, local jobs and who owns the asset all shape whether communities experience storage as a benefit or a burden.</p>

<h3>Evaluation Framework</h3>
<p>Evaluate storage policy by asking whether market rules let storage provide all the services it can, whether capacity accreditation reflects declining marginal value, whether hybrids are sized for system needs rather than only tax benefits, and whether siting and ownership spread benefits fairly.</p>
`,
        PHD: `
<h2>Research Frontiers: Novel Storage, Aging Models and Portfolios</h2>
<p>Storage research operates at three interacting scales: materials and devices, asset lifetime and operation, and the system-level portfolio of storage technologies. Doctoral research often sits at the boundaries, for example asking how an improved aging model changes optimal dispatch, or how the arrival of a cheap long-duration technology reshapes the optimal mix. This lesson reviews emerging technologies, degradation modeling and portfolio optimization, with attention to methodological debates.</p>

<h3>Novel Storage Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Promise</th><th>Open questions</th></tr></thead>
<tbody>
<tr><td>Sodium-ion batteries</td><td>Abundant materials, good low-temperature behavior</td><td>Energy density and lifetime relative to lithium iron phosphate</td></tr>
<tr><td>Iron-air batteries</td><td>Very low material cost for multi-day duration</td><td>Low round-trip efficiency and durability of air electrodes</td></tr>
<tr><td>Organic and new flow chemistries</td><td>Avoid scarce metals, tunable molecules</td><td>Molecular stability and crossover over long lifetimes</td></tr>
<tr><td>Thermal storage for heat and power</td><td>Cheap media such as rocks, sand or molten salts</td><td>Efficiency when converting heat back to electricity</td></tr>
<tr><td>Solid-state batteries</td><td>Potential safety and density gains</td><td>Interfaces, dendrites and manufacturing scale-up</td></tr>
</tbody>
</table>

<h3>Aging Models</h3>
<ul>
<li><strong>Empirical aging model:</strong> a fitted function linking capacity loss to time, temperature, cycling and state of charge</li>
<li><strong>Physics-based electrochemical model:</strong> a model that represents ion transport and reactions inside the cell to simulate behavior and aging</li>
<li><strong>Solid electrolyte interphase:</strong> a layer that forms on the anode, consuming lithium as it grows and causing capacity loss</li>
<li><strong>Lithium plating:</strong> metallic lithium deposition on the anode, often during fast or cold charging, that accelerates aging</li>
<li><strong>Knee point:</strong> the transition where gradual capacity fade turns into rapid, nonlinear decline</li>
<li><strong>Rainflow counting:</strong> a method that decomposes irregular charge profiles into equivalent cycles for degradation estimation</li>
</ul>
<p>Empirical models are tractable for optimization but extrapolate poorly beyond their test conditions. Physics-based models generalize better but are computationally heavy and require parameters that are hard to identify. Hybrid and data-driven approaches, including machine learning on fleet data, aim to predict knee points early, but their transferability across chemistries and duty cycles remains contested.</p>

<h3>Degradation-Aware Dispatch</h3>
<p>Including degradation cost in dispatch optimization changes behavior: operators cycle less aggressively, avoid high states of charge at high temperatures and favor shallow cycles. Because degradation is path-dependent and nonlinear, embedding it in optimization creates non-convex problems. Researchers use piecewise linearization, cycle-based approximations and learned surrogates, each trading accuracy for tractability.</p>

<h3>Portfolio Optimization</h3>
<p>System-level capacity-expansion models determine how much storage of each duration and technology is optimal. Results depend heavily on temporal representation. Models using a handful of representative days cannot capture multi-day wind lulls or seasonal imbalances, so they tend to undervalue long-duration storage. Approaches that link representative periods to track state of charge across them, or that run full chronological years with multiple weather years, give more credible results at higher computational cost.</p>

<h3>Contested Questions</h3>
<ol>
<li>How much long-duration storage will be needed, versus alternatives like transmission, demand flexibility and firm clean generation?</li>
<li>How should cost projections for immature technologies be formed, given uncertain learning rates?</li>
<li>How should second-life batteries be valued when remaining health is uncertain?</li>
<li>What life-cycle metrics, including mining impacts and recycling, should inform technology choice?</li>
</ol>

<h3>Open Research Directions</h3>
<ul>
<li>Early, transferable prediction of battery lifetime from limited test data.</li>
<li>Tractable optimization formulations that faithfully represent nonlinear degradation.</li>
<li>Multi-weather-year capacity expansion models with endogenous storage durations.</li>
<li>Recycling and circular supply chains for emerging chemistries.</li>
<li>Integrating reliability, equity and siting constraints into storage portfolio design.</li>
</ul>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rstq1',
      question: {
        ELEMENTARY: 'Why do we need to store energy?',
        MIDDLE_SCHOOL: 'What does a storage system power rating tell you?',
        HIGH_SCHOOL: 'What is round-trip efficiency?',
        UNDERGRADUATE: 'What is energy arbitrage?',
        GRADUATE: 'What is capacity value?',
        PHD: 'What is the knee point in battery aging?',
      },
      options: {
        ELEMENTARY: ['To use sun power at night', 'To make batteries heavier', 'To make noise', 'To paint the sky'],
        MIDDLE_SCHOOL: ['How fast it can put energy in or out', 'How heavy it is', 'What color it is', 'How old it is'],
        HIGH_SCHOOL: ['Energy you get back divided by energy you put in', 'How fast a battery charges', 'How large the battery is', 'The number of cells in a pack'],
        UNDERGRADUATE: ['Charging when prices are low and discharging when prices are high', 'Receiving free electricity', 'A government grant for batteries', 'Selling used batteries'],
        GRADUATE: ['The contribution to meeting demand during the riskiest reliability hours', 'The physical size of a battery container', 'The total megawatt-hours sold per year', 'The price of a battery per kilowatt-hour'],
        PHD: ['The transition where gradual fade turns into rapid, nonlinear decline', 'The first charge after manufacturing', 'The point where a battery is fully charged', 'A connector between cells'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'We save extra sunshine energy during the day so we can use it at night when the sun is gone.',
        MIDDLE_SCHOOL: 'Power rating is how fast energy can flow, like the width of a bottle opening.',
        HIGH_SCHOOL: 'Round-trip efficiency compares energy out to energy in; losses become heat.',
        UNDERGRADUATE: 'Arbitrage profits from the price spread, after efficiency losses and degradation costs.',
        GRADUATE: 'Capacity value measures how much a resource helps keep the lights on when risk is highest.',
        PHD: 'Knee points mark a shift to rapid capacity loss, and predicting them early is an active research goal.',
      },
    },
    {
      id: 'rstq12',
      question: {
        ELEMENTARY: 'How does pumped hydro save energy?',
        MIDDLE_SCHOOL: 'What is battery degradation?',
        HIGH_SCHOOL: 'What makes flow batteries special?',
        UNDERGRADUATE: 'Why does adding more storage to a market reduce arbitrage profits?',
        GRADUATE: 'Why does capacity value of short-duration storage decline as more is added?',
        PHD: 'Why do representative-day models tend to undervalue long-duration storage?',
      },
      options: {
        ELEMENTARY: ['By freezing water', 'By pumping water up a hill and letting it flow down later', 'By putting water in bottles', 'By painting water blue'],
        MIDDLE_SCHOOL: ['A battery getting brighter', 'The slow loss of a battery ability to hold energy as it ages', 'A battery getting bigger', 'Charging a battery faster'],
        HIGH_SCHOOL: ['They are made of rocks', 'Power and energy can be scaled separately using tanks and stacks', 'They never lose any energy', 'They only work in cars'],
        UNDERGRADUATE: ['Storage makes electricity free', 'Storage narrows the price spreads it profits from', 'Storage raises all prices equally', 'Markets ban extra storage'],
        GRADUATE: ['Batteries get smaller over time', 'Added storage flattens and broadens peaks, so each new unit covers less risk', 'Regulators cap storage size', 'Short storage cannot charge'],
        PHD: ['They use too much data', 'They cannot capture multi-day lulls and seasonal imbalances', 'They model every hour perfectly', 'They ignore battery chemistry'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Water is pumped up to a high lake, then rushes down through a spinning wheel to make electricity again.',
        MIDDLE_SCHOOL: 'Side reactions inside batteries slowly use up materials, so they hold less energy over time.',
        HIGH_SCHOOL: 'Bigger tanks add energy and more stack adds power, which suits longer durations.',
        UNDERGRADUATE: 'Charging raises low prices and discharging lowers high prices, shrinking the spread.',
        GRADUATE: 'Once peaks are flattened, the remaining risk spans longer periods that short storage cannot cover.',
        PHD: 'Separate representative days cannot carry state of charge across long weather events.',
      },
    },
    {
      id: 'rstq13',
      question: {
        ELEMENTARY: 'What should you do with old batteries?',
        MIDDLE_SCHOOL: 'Which storage type is best for very quick bursts of power?',
        HIGH_SCHOOL: 'Which is the largest form of energy storage installed worldwide?',
        UNDERGRADUATE: 'What is value stacking?',
        GRADUATE: 'What is a non-wires alternative?',
        PHD: 'What is the solid electrolyte interphase?',
      },
      options: {
        ELEMENTARY: ['Throw them in the trash', 'Bury them in the garden', 'Ask a grown-up to take them to recycling', 'Leave them in a hot car'],
        MIDDLE_SCHOOL: ['Pumped hydro', 'Compressed air in caves', 'A flywheel', 'A pile of firewood'],
        HIGH_SCHOOL: ['Flywheels', 'Flow batteries', 'Pumped storage hydropower', 'Phone batteries'],
        UNDERGRADUATE: ['Stacking batteries on top of each other', 'Adding more cells to a pack', 'Earning revenue from several services with one asset', 'Raising electricity prices'],
        GRADUATE: ['A wireless phone charger', 'A battery with no cables', 'Using storage or local resources to defer or avoid a network upgrade', 'A type of transmission line'],
        PHD: ['A cooling plate', 'The battery case', 'A layer on the anode whose growth consumes lithium and causes capacity loss', 'A software setting'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Old batteries should be recycled, never thrown in the trash.',
        MIDDLE_SCHOOL: 'Flywheels store energy as spinning motion and can release it very quickly.',
        HIGH_SCHOOL: 'Pumped storage hydropower is the largest installed storage technology, though it needs special geography.',
        UNDERGRADUATE: 'Stacking combines services like arbitrage and reserves, as long as they do not need the same energy at once.',
        GRADUATE: 'Storage placed where the network is congested can postpone costly lines or substations.',
        PHD: 'The interphase forms on the anode and keeps growing slowly, trapping lithium over time.',
      },
    },
    {
      id: 'rstq14',
      question: {
        ELEMENTARY: 'Why does an old tablet not last as long as a new one?',
        MIDDLE_SCHOOL: 'Why might grid batteries avoid charging all the way to full?',
        HIGH_SCHOOL: 'What is thermal runaway?',
        UNDERGRADUATE: 'What is calendar aging?',
        GRADUATE: 'Why can charging storage as an end consumer be a problem?',
        PHD: 'Why is embedding battery degradation in dispatch optimization difficult?',
      },
      options: {
        ELEMENTARY: ['It is too clean', 'It is painted a different color', 'It has more games', 'Its battery wears out a little each time it is filled and emptied'],
        MIDDLE_SCHOOL: ['To make the battery heavier', 'To save money on paint', 'To hear it hum', 'Because very full and very empty charges speed up wear'],
        HIGH_SCHOOL: ['Charging with solar power', 'A battery running smoothly', 'A cooling system', 'A chain reaction where a damaged cell overheats and spreads heat'],
        UNDERGRADUATE: ['Aging only during fast charging', 'Aging caused by dropping a battery', 'The date printed on a battery', 'Degradation that happens over time even when the battery is resting'],
        GRADUATE: ['It makes storage free', 'It prevents storage from discharging', 'It is required by physics', 'It can double-count network costs on energy that is later resold'],
        PHD: ['Batteries never degrade', 'Degradation is linear and simple', 'There is no data on aging', 'Degradation is nonlinear and path-dependent, creating non-convex problems'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Every charge and discharge wears the battery a little, so it holds less energy over time.',
        MIDDLE_SCHOOL: 'Staying away from the very top and bottom of the charge range helps batteries last longer.',
        HIGH_SCHOOL: 'Thermal runaway is why grid batteries use monitoring, spacing and fire suppression.',
        UNDERGRADUATE: 'Calendar aging is faster at high temperature and high state of charge, even without cycling.',
        GRADUATE: 'Storage passes energy back to the grid, so charging it like a final consumer can add costs twice.',
        PHD: 'Nonlinear, history-dependent aging makes optimization hard, so researchers use approximations and surrogates.',
      },
    },
    {
      id: 'rstq15',
      question: {
        ELEMENTARY: 'What is charging a battery like?',
        MIDDLE_SCHOOL: 'How can storage help with evening electricity use?',
        HIGH_SCHOOL: 'Which battery chemistry is valued for safety and long life without cobalt?',
        UNDERGRADUATE: 'Why do developers plan augmentation for battery projects?',
        GRADUATE: 'What is a DC-coupled solar-plus-storage system good at?',
        PHD: 'What is a main limitation of empirical battery aging models?',
      },
      options: {
        ELEMENTARY: ['Filling a piggy bank', 'Popping a balloon', 'Eating a sandwich', 'Watching a movie'],
        MIDDLE_SCHOOL: ['It stores midday solar power and releases it when people come home', 'It makes the sun set later', 'It turns off all lights at night', 'It moves power plants closer'],
        HIGH_SCHOOL: ['Lithium iron phosphate', 'Nickel manganese cobalt', 'Lead paint', 'Alkaline zinc'],
        UNDERGRADUATE: ['To keep meeting contracted capacity as cells degrade', 'To make batteries look bigger', 'To avoid paying for land', 'To reduce efficiency'],
        GRADUATE: ['Capturing clipped solar energy and avoiding some conversion losses', 'Charging from any grid source at any time', 'Eliminating all interconnection limits', 'Replacing solar panels'],
        PHD: ['They extrapolate poorly beyond the conditions they were fitted on', 'They are too slow for any computer', 'They model every atom', 'They cannot use any data'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Charging puts energy in to save for later, just like dropping coins into a piggy bank.',
        MIDDLE_SCHOOL: 'Storage shifts extra midday solar energy into the evening when demand rises.',
        HIGH_SCHOOL: 'Lithium iron phosphate avoids cobalt and nickel and offers long cycle life and good safety.',
        UNDERGRADUATE: 'Adding modules over time offsets capacity fade so the system meets its obligations.',
        GRADUATE: 'DC coupling lets the battery store solar energy that would otherwise be clipped by the inverter limit.',
        PHD: 'Empirical models are tractable but can mislead under duty cycles they were not tested on.',
      },
    },
  ],
}

export default expansion
