import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-storage',
  lessons: [
    {
      id: 're-storage-1',
      title: 'Saving Power for Later',
      content: {
        ELEMENTARY: `
<h2>A Battery for the Whole City</h2>
<p>Think about your lunchbox. In the morning you pack food, and at lunchtime you open it and eat. You saved the food for later! Electricity can be saved for later too. Saving electricity is called <em>energy storage</em>, and it helps us use clean energy even when the Sun is not shining or the wind is not blowing.</p>

<h3>Why Do We Need to Save Energy?</h3>
<p>Solar panels make lots of electricity at noon on a sunny day. But people want lights in the evening, when it is dark! Wind turbines spin fast on windy days, but sometimes the air is calm. If we save extra electricity when there is plenty, we can use it later when we need it.</p>
<ul>
<li><strong>Energy storage:</strong> a way to save electricity now so we can use it later</li>
<li><strong>Battery:</strong> a container that stores energy and gives it back as electricity</li>
<li><strong>Charging:</strong> filling a battery up with energy, like filling a water bottle</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Power grid:</strong> the giant web of wires that carries electricity to everyone</li>
</ul>

<h3>Different Ways to Save Energy</h3>
<p>Batteries are not the only way! Here are some clever ideas people use:</p>
<ol>
<li><strong>Giant batteries:</strong> rows of big battery boxes, like the battery in a tablet but much, much bigger.</li>
<li><strong>Water uphill:</strong> pumping water up a hill into a lake, then letting it rush back down to spin a turbine.</li>
<li><strong>Spinning wheels:</strong> a heavy wheel that keeps spinning and can give its energy back.</li>
<li><strong>Hot and cold:</strong> storing heat in hot rocks or salt, or making ice at night to cool buildings in the day.</li>
</ol>

<h3>Batteries All Around You</h3>
<p>You already use stored energy every day! A phone, a toy car, a flashlight and a watch all have batteries. Some families have a battery at home that saves solar power from their roof for nighttime. Electric buses and cars carry big batteries too.</p>

<h3>Be a Battery Helper</h3>
<ol>
<li>Use rechargeable batteries in toys instead of throwing batteries away.</li>
<li>Never put old batteries in the trash. Ask a grown-up to take them to a recycling spot.</li>
<li>Unplug chargers when your device is full.</li>
</ol>
<p>When we save sunshine and wind for later, clean energy can help us all day and all night!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Ways to Store Electricity for When We Need It</h2>
<p>Electricity is tricky: on a power grid, the amount produced must match the amount used at every moment. For most of history, power plants simply burned more or less fuel to follow demand. Solar and wind do not work that way, because their output depends on the weather. Energy storage solves this by soaking up extra electricity when there is plenty and releasing it when supply is short.</p>

<h3>Energy Changes Form</h3>
<p>Most storage does not keep electricity as electricity. Instead it changes energy into another form and back again. A battery turns electrical energy into chemical energy. Pumped hydro turns it into gravitational potential energy by lifting water. A flywheel stores kinetic energy in a spinning mass. Every conversion loses a little energy as heat, so we always get back a bit less than we put in.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Chemical energy:</strong> energy stored in the bonds and arrangement of substances, released by chemical reactions</li>
<li><strong>Lithium-ion battery:</strong> a rechargeable battery that moves lithium ions between two electrodes, used in phones and electric cars</li>
<li><strong>Pumped hydro:</strong> storage that pumps water uphill and lets it flow back through turbines later</li>
<li><strong>Flywheel:</strong> a heavy wheel spun at high speed that stores energy in its motion</li>
<li><strong>Thermal storage:</strong> saving energy as heat or cold in materials like water, molten salt or ice</li>
<li><strong>Efficiency:</strong> how much of the energy you put in that you get back out</li>
</ul>

<h3>Comparing Storage Types</h3>
<table>
<thead><tr><th>Storage type</th><th>Energy form</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Lithium-ion battery</td><td>Chemical</td><td>A few hours, fast response, homes and grids</td></tr>
<tr><td>Pumped hydro</td><td>Height (potential)</td><td>Many hours, very large amounts</td></tr>
<tr><td>Flywheel</td><td>Motion (kinetic)</td><td>Seconds to minutes, smoothing quick changes</td></tr>
<tr><td>Thermal storage</td><td>Heat or cold</td><td>Heating, cooling and some solar power plants</td></tr>
<tr><td>Hydrogen</td><td>Chemical fuel</td><td>Possibly days or seasons, still developing</td></tr>
</tbody>
</table>

<h3>How Storage Helps the Grid</h3>
<ol>
<li><strong>Time shifting:</strong> storing midday solar power for the evening.</li>
<li><strong>Backup:</strong> keeping lights on during a blackout.</li>
<li><strong>Quick fixes:</strong> responding in a fraction of a second if a power plant suddenly trips off.</li>
<li><strong>Saving money:</strong> charging when electricity is cheap and using it when it is expensive.</li>
</ol>

<h3>Challenges</h3>
<p>Storage costs money, and batteries slowly wear out over years of charging. Mining lithium, cobalt and other materials can harm land, water and workers if it is not done responsibly, so recycling and better battery designs are important. Battery prices have fallen dramatically over the past decade, which is why giant battery systems are now being built next to solar and wind farms around the world.</p>
`,
        HIGH_SCHOOL: `
<h2>Batteries, Pumped Hydro and Other Storage Technologies</h2>
<p>Storage is the missing piece that lets variable renewable energy run a reliable grid. But "storage" covers technologies as different as a phone battery and a mountain reservoir. To compare them you need two numbers, not one: how much power a system can deliver at once, and how much energy it can hold in total. This lesson explains those ideas, how the main technologies work, and where each fits.</p>

<h3>Power Versus Energy</h3>
<p>Power is the rate of energy flow, measured in kilowatts or megawatts. Energy is the total amount, measured in kilowatt-hours or megawatt-hours. A system rated at 100 megawatts and 400 megawatt-hours can deliver full power for about four hours; that ratio is its <em>duration</em>. Short-duration systems handle quick fluctuations, while long-duration systems can carry the grid through a night or a windless spell.</p>
<ul>
<li><strong>Power capacity:</strong> the maximum rate at which a storage system can charge or discharge</li>
<li><strong>Energy capacity:</strong> the total amount of energy a storage system can hold</li>
<li><strong>Duration:</strong> how many hours a system can discharge at full power before it is empty</li>
<li><strong>Round-trip efficiency:</strong> the share of energy put into storage that comes back out as electricity</li>
<li><strong>Cycle life:</strong> how many full charge and discharge cycles a system can complete before it wears out</li>
<li><strong>State of charge:</strong> how full a storage system is at a given moment, as a percentage</li>
</ul>

<h3>How the Main Technologies Work</h3>
<p><em>Lithium-ion batteries</em> shuttle lithium ions through an electrolyte between a graphite anode and a metal-oxide cathode. Common grid chemistries include lithium iron phosphate, prized for safety and long life, and nickel-based chemistries with higher energy density used widely in vehicles. <em>Pumped hydro</em> moves water between two reservoirs and has supplied most of the world's grid storage capacity for decades. <em>Flow batteries</em> store energy in liquid electrolytes in external tanks, so energy can be expanded by adding more liquid. <em>Compressed air storage</em> pumps air into underground caverns and releases it through turbines. <em>Thermal storage</em> uses molten salt, rocks or water to hold heat.</p>

<table>
<thead><tr><th>Technology</th><th>Typical duration</th><th>Round-trip efficiency</th><th>Key trade-off</th></tr></thead>
<tbody>
<tr><td>Lithium-ion</td><td>Minutes to several hours</td><td>High</td><td>Degrades with use; fire risk must be managed</td></tr>
<tr><td>Pumped hydro</td><td>Hours to days</td><td>Moderate to high</td><td>Needs suitable geography, long build times</td></tr>
<tr><td>Flow battery</td><td>Several hours or more</td><td>Moderate</td><td>Bulkier, higher cost today</td></tr>
<tr><td>Compressed air</td><td>Hours to days</td><td>Low to moderate</td><td>Needs caverns, heat management</td></tr>
<tr><td>Flywheel</td><td>Seconds to minutes</td><td>High</td><td>Little total energy</td></tr>
</tbody>
</table>

<h3>Real-World Applications</h3>
<ol>
<li><strong>Solar plus storage:</strong> solar farms paired with batteries shift midday output into the evening peak.</li>
<li><strong>Frequency response:</strong> batteries react in milliseconds to keep grid frequency stable.</li>
<li><strong>Home backup:</strong> household batteries keep essential appliances running during outages.</li>
<li><strong>Deferring upgrades:</strong> a battery at a busy substation can avoid or delay an expensive new line.</li>
</ol>

<h3>Sustainability Questions</h3>
<p>Batteries rely on mined materials such as lithium, nickel, cobalt and graphite. Responsible sourcing, longer-lasting designs, chemistries that avoid scarce metals, and recycling that recovers materials at end of life all reduce impacts. Safety standards and spacing also reduce the risk of battery fires.</p>
`,
        UNDERGRADUATE: `
<h2>Storage Economics, Sizing and Grid Services</h2>
<p>Whether a storage project makes sense depends on what it is asked to do and how it is paid. A battery that earns money by shifting energy from cheap to expensive hours needs very different sizing from one that provides fast frequency response. This lesson develops the economic metrics, sizing logic and service categories needed to evaluate storage projects.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Levelized cost of storage:</strong> the lifetime cost of a storage system divided by the energy it discharges, used to compare options</li>
<li><strong>Arbitrage:</strong> buying electricity when prices are low and selling it when prices are high</li>
<li><strong>Depth of discharge:</strong> how much of the stored energy is used in a cycle, which affects battery wear</li>
<li><strong>C-rate:</strong> the charge or discharge rate relative to battery capacity, where a one-hour full discharge is called 1C</li>
<li><strong>Revenue stacking:</strong> earning income from several services with the same asset</li>
<li><strong>Capacity value:</strong> the contribution a resource makes to meeting peak demand reliably</li>
</ul>

<h3>Thinking About Costs</h3>
<p>Storage costs split into a power component (inverters, grid connection, power conversion) and an energy component (cells, tanks, reservoir volume). Lithium-ion has relatively low power costs but energy costs that scale with every added hour, so it is most competitive at durations of a few hours. Technologies with cheap energy components but expensive power equipment, such as pumped hydro, flow batteries or some thermal systems, become relatively attractive at longer durations. The levelized cost of storage also depends on round-trip losses, degradation, utilization and the price of charging energy.</p>

<h3>Sizing Logic</h3>
<p>Arbitrage revenue depends on the spread between charging and discharging prices minus efficiency losses. With an efficiency of around 85 percent, a battery must sell power at a price somewhat above the charging price just to break even on energy. Adding hours of duration captures more of the daily price curve, but each additional hour usually captures a smaller spread than the last. The optimal duration is where the marginal revenue of one more hour equals its marginal cost.</p>

<h3>Grid Services</h3>
<table>
<thead><tr><th>Service</th><th>Timescale</th><th>Typical requirement</th></tr></thead>
<tbody>
<tr><td>Frequency regulation</td><td>Seconds</td><td>Fast, accurate response; little energy</td></tr>
<tr><td>Contingency reserves</td><td>Seconds to an hour</td><td>Availability when a large unit trips</td></tr>
<tr><td>Energy arbitrage</td><td>Hours</td><td>Energy capacity matched to price peaks</td></tr>
<tr><td>Resource adequacy</td><td>Peak periods</td><td>Sustained output over the peak window</td></tr>
<tr><td>Transmission or distribution deferral</td><td>Peak hours over years</td><td>Located where congestion occurs</td></tr>
<tr><td>Backup and resilience</td><td>Hours to days</td><td>Reserved state of charge for outages</td></tr>
</tbody>
</table>
<p>Services compete for the same state of charge. Energy held in reserve for backup cannot simultaneously be sold for arbitrage, so revenue stacking requires careful scheduling and is limited by market rules.</p>

<h3>Capacity Value Saturates</h3>
<p>The first few hours of storage on a grid are very valuable for meeting a short evening peak. As more storage is added, it flattens that peak into a longer, broader one, so each new increment needs more duration to provide the same reliability contribution. This saturation effect is a key reason planners study long-duration storage.</p>

<h3>Applied Method: Screening a Storage Project</h3>
<ol>
<li>Define the primary service and its timescale.</li>
<li>Select candidate technologies whose power-to-energy ratio fits that service.</li>
<li>Model dispatch against historical or forecast prices, including efficiency losses.</li>
<li>Include degradation, augmentation costs and replacement over the project life.</li>
<li>Identify stackable secondary services and rule-based limits on stacking.</li>
<li>Compare levelized cost of storage with the value of services delivered.</li>
</ol>
`,
        GRADUATE: `
<h2>Long-Duration Storage, Market Design and Policy</h2>
<p>Most storage built so far discharges for a few hours. Deeply decarbonized grids also face multi-day lulls in wind and solar, and seasonal mismatches between supply and demand. Long-duration energy storage could fill those gaps, but markets and policies designed around fuel-burning plants struggle to value it. This lesson examines the technology landscape for long-duration storage, the market design challenges, and policy frameworks that shape investment.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Long-duration energy storage:</strong> storage able to discharge for many hours to days, often defined loosely as roughly ten hours or more</li>
<li><strong>Seasonal storage:</strong> storage that shifts energy across weeks or months, such as from summer to winter</li>
<li><strong>Effective load carrying capability:</strong> a probabilistic measure of how much additional load a resource lets the system serve at the same reliability</li>
<li><strong>Scarcity pricing:</strong> allowing prices to rise sharply when supply is tight, signaling the value of flexible resources</li>
<li><strong>Capacity market:</strong> a mechanism that pays resources in advance to be available during future peak periods</li>
<li><strong>Technology-neutral procurement:</strong> buying a defined service from whichever resources can supply it most cheaply</li>
</ul>

<h3>Technology Landscape</h3>
<table>
<thead><tr><th>Option</th><th>Duration range</th><th>Main barrier</th></tr></thead>
<tbody>
<tr><td>Pumped hydro (including closed-loop)</td><td>Hours to days</td><td>Siting, permitting and long lead times</td></tr>
<tr><td>Compressed or liquid air</td><td>Hours to days</td><td>Efficiency and geological or equipment costs</td></tr>
<tr><td>Flow and metal-air batteries</td><td>Many hours to days</td><td>Early commercial maturity</td></tr>
<tr><td>Thermal storage for power or industrial heat</td><td>Hours to days</td><td>Low efficiency when heat is converted back to electricity</td></tr>
<tr><td>Hydrogen in tanks or salt caverns</td><td>Days to seasons</td><td>Low round-trip efficiency, infrastructure needs</td></tr>
</tbody>
</table>
<p>A useful insight from capacity-expansion studies is that, for long-duration storage, low energy-capacity cost often matters more than high efficiency, because the asset cycles infrequently. That favors chemistries and media that are cheap per kilowatt-hour stored, even if they lose more energy per cycle.</p>

<h3>Market Design Challenges</h3>
<p>Energy-only markets pay storage through price spreads, which may be too infrequent and uncertain to finance assets that are needed mainly in rare, extreme events. Price caps can suppress the scarcity signals that would reward them. Capacity mechanisms help but must accredit storage correctly: a four-hour battery and a hundred-hour system contribute very differently to reliability, and accreditation methods such as effective load carrying capability capture this better than nameplate ratings. Other design issues include whether storage pays transmission charges when it charges and again when its output is consumed, minimum size rules, and whether aggregated small batteries can participate.</p>

<h3>Policy Frameworks</h3>
<ol>
<li><strong>Procurement targets:</strong> regulators require utilities to acquire defined amounts of storage.</li>
<li><strong>Investment incentives:</strong> tax credits or grants reduce capital costs for qualifying projects.</li>
<li><strong>Market rule reform:</strong> rules allowing storage to provide all services it is technically capable of.</li>
<li><strong>Planning integration:</strong> including storage as an alternative to new lines or peaking plants.</li>
<li><strong>Demonstration funding:</strong> public support to move long-duration technologies down the cost curve.</li>
</ol>

<h3>Equity and Siting</h3>
<p>Storage can replace polluting peaking plants, which are often located near low-income communities, offering local air quality benefits. Conversely, poorly regulated battery facilities raise local safety concerns, and mineral supply chains carry social and environmental risks abroad. Community engagement, safety codes and supply-chain standards address both sides.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the reliability gaps a future system faces, including multi-day events.</li>
<li>Model storage portfolios against alternatives such as firm generation and transmission.</li>
<li>Test market designs for whether they reward the resources the models favor.</li>
<li>Evaluate distributional impacts of siting and supply chains.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Chemistries, Degradation and Optimization</h2>
<p>Storage research spans electrochemistry, materials science and operations research. Progress depends on three intertwined questions: which new chemistries can deliver low cost and long life from abundant materials, how and why devices degrade, and how to operate and plan storage optimally under uncertainty. This lesson surveys the frontiers and debates in each area.</p>

<h3>Novel Chemistries</h3>
<ul>
<li><strong>Sodium-ion battery:</strong> a battery that uses abundant sodium instead of lithium, trading some energy density for lower material risk</li>
<li><strong>Solid-state battery:</strong> a battery that replaces the liquid electrolyte with a solid, potentially enabling lithium metal anodes and improved safety</li>
<li><strong>Metal-air battery:</strong> a battery that uses oxygen from air as a reactant with metals such as iron or zinc, targeting very low cost per unit of energy</li>
<li><strong>Redox flow battery:</strong> a battery that stores energy in dissolved active species pumped through a cell stack, decoupling power from energy</li>
<li><strong>Organic electrolyte:</strong> carbon-based redox-active molecules designed to replace metal ions in flow batteries</li>
<li><strong>Interphase:</strong> a thin layer that forms where an electrode meets the electrolyte and strongly influences battery life</li>
</ul>
<p>Each chemistry presents distinct research problems. Solid-state designs must manage dendrite penetration and interfacial resistance. Metal-air systems face low round-trip efficiency and electrode reversibility challenges. Organic flow electrolytes must resist chemical decomposition over thousands of cycles. Sodium-ion research focuses on cathode and hard-carbon anode materials.</p>

<h3>Degradation Mechanisms</h3>
<p>In lithium-ion cells, capacity fade arises from loss of lithium inventory and loss of active material. The solid electrolyte interphase on the anode grows over time, consuming lithium; lithium plating occurs at low temperatures or high charge rates; cathode particles crack under repeated expansion and contraction; and transition metals can dissolve and migrate. Degradation is commonly divided into <em>calendar aging</em>, which depends on time, temperature and state of charge, and <em>cycle aging</em>, which depends on throughput, depth of discharge and rate. The two interact nonlinearly, and some cells show a sudden "knee" where fade accelerates.</p>
<table>
<thead><tr><th>Modeling approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Physics-based electrochemical models</td><td>Mechanistic insight, extrapolation</td><td>Many uncertain parameters, computationally heavy</td></tr>
<tr><td>Semi-empirical aging models</td><td>Simple, fit to test data</td><td>Weak outside tested conditions</td></tr>
<tr><td>Data-driven and machine learning</td><td>Early life prediction from cycling data</td><td>Generalization across chemistries and use patterns</td></tr>
<tr><td>Hybrid physics-informed models</td><td>Combines interpretability and accuracy</td><td>Methodology still maturing</td></tr>
</tbody>
</table>

<h3>System Optimization</h3>
<p>Operating storage is a sequential decision problem under uncertain prices, renewable output and demand. Methods include deterministic optimization with forecasts, stochastic programming over scenarios, model predictive control, and reinforcement learning. A central question is how to price degradation inside dispatch: ignoring it overuses the asset, while crude cost-per-cycle penalties misrepresent nonlinear aging. At planning scale, capacity-expansion models must represent chronology to value storage, yet full hourly resolution over many years is computationally expensive. Representative-period selection can miss the rare multi-day events that drive long-duration storage value.</p>

<h3>Contested Questions</h3>
<ol>
<li>How much long-duration storage a decarbonized system needs, given competing options such as firm clean generation and transmission.</li>
<li>Whether laboratory degradation tests predict field performance under real duty cycles.</li>
<li>How to account for the embodied emissions and mineral impacts of storage in system models.</li>
<li>Whether market participation by many storage operators produces efficient system outcomes or new forms of strategic behavior.</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Abundant-material chemistries with long cycle life at low cost per kilowatt-hour.</li>
<li>Early prediction of lifetime and failure using physics-informed learning.</li>
<li>Degradation-aware dispatch that remains tractable in real time.</li>
<li>Planning methods that capture multi-day and inter-annual variability.</li>
<li>Design for recycling and second-life use integrated into chemistry development.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rstq1',
      question: {
        ELEMENTARY: 'Why do we need to save energy for later?',
        MIDDLE_SCHOOL: 'What kind of energy does a battery store?',
        HIGH_SCHOOL: 'A storage system rated at 100 megawatts and 400 megawatt-hours has what duration?',
        UNDERGRADUATE: 'What is energy arbitrage?',
        GRADUATE: 'Why does low energy-capacity cost often matter more than efficiency for long-duration storage?',
        PHD: 'What is calendar aging in lithium-ion batteries?',
      },
      options: {
        ELEMENTARY: ['So we can use solar power at night when the Sun is not shining', 'So electricity gets heavier', 'So the wind stops blowing', 'So lights turn off by themselves'],
        MIDDLE_SCHOOL: ['Chemical energy', 'Sound energy', 'Nuclear energy', 'Light energy only'],
        HIGH_SCHOOL: ['About 4 hours', 'About 40 hours', 'About 1 minute', 'About 400 days'],
        UNDERGRADUATE: ['Buying electricity when prices are low and selling when prices are high', 'Building storage in deserts only', 'Giving power away for free', 'Storing energy forever without use'],
        GRADUATE: ['Because the asset cycles infrequently, so cheap storage capacity outweighs per-cycle losses', 'Because efficiency is always 100 percent', 'Because energy capacity is free', 'Because long-duration storage never discharges'],
        PHD: ['Degradation that depends on time, temperature and state of charge even when not cycling', 'Aging that only happens in winter', 'The date printed on a battery', 'Wear caused only by charging speed'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Saving extra energy lets us use clean power when the Sun or wind is not available.',
        MIDDLE_SCHOOL: 'Batteries store energy in chemical form and release it as electricity.',
        HIGH_SCHOOL: 'Duration is energy divided by power: 400 divided by 100 is about four hours.',
        UNDERGRADUATE: 'Arbitrage earns money from the price difference between charging and discharging times.',
        GRADUATE: 'Rarely used assets earn little from efficiency, so cheap kilowatt-hours dominate.',
        PHD: 'Calendar aging happens over time even when a battery sits unused, depending on conditions.',
      },
    },
    {
      id: 'rstq2',
      question: {
        ELEMENTARY: 'What does "charging" a battery mean?',
        MIDDLE_SCHOOL: 'Which storage type stores energy in a heavy spinning wheel?',
        HIGH_SCHOOL: 'Which lithium-ion chemistry is prized for safety and long life on the grid?',
        UNDERGRADUATE: 'Why does capacity value of storage saturate as more is added?',
        GRADUATE: 'What does effective load carrying capability measure?',
        PHD: 'What is a challenge for solid-state batteries?',
      },
      options: {
        ELEMENTARY: ['Throwing it away', 'Filling it up with energy', 'Painting it', 'Making it colder'],
        MIDDLE_SCHOOL: ['Pumped hydro', 'Flywheel', 'Hydrogen', 'Thermal storage'],
        HIGH_SCHOOL: ['Lead-acid', 'Lithium iron phosphate', 'Alkaline', 'Carbon-zinc'],
        UNDERGRADUATE: ['Batteries stop working after one year', 'Storage flattens a short peak into a longer one, so more duration is needed for the same contribution', 'Prices always fall to zero', 'Grids cannot connect more batteries'],
        GRADUATE: ['The weight of a battery', 'How much additional load a resource lets the system serve at the same reliability', 'The color of the grid map', 'The number of customers'],
        PHD: ['They have too much liquid electrolyte', 'Managing dendrite penetration and interfacial resistance', 'They cannot store any energy', 'They need oxygen from air'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Charging means filling a battery with energy, like filling a water bottle.',
        MIDDLE_SCHOOL: 'A flywheel stores energy in the motion of a fast-spinning wheel.',
        HIGH_SCHOOL: 'Lithium iron phosphate is widely used on the grid for its safety and long cycle life.',
        UNDERGRADUATE: 'Each added increment must cover a broader peak, so its reliability value shrinks.',
        GRADUATE: 'ELCC measures the reliability contribution of a resource in load terms.',
        PHD: 'Dendrites and resistance at solid interfaces are central solid-state challenges.',
      },
    },
    {
      id: 'rstq3',
      question: {
        ELEMENTARY: 'What should you do with old batteries?',
        MIDDLE_SCHOOL: 'Why do we always get back a little less energy than we put into storage?',
        HIGH_SCHOOL: 'What is a key advantage of flow batteries?',
        UNDERGRADUATE: 'What is revenue stacking?',
        GRADUATE: 'How can price caps affect storage investment?',
        PHD: 'Why is pricing degradation inside dispatch difficult?',
      },
      options: {
        ELEMENTARY: ['Put them in the trash', 'Bury them in the garden', 'Take them to a recycling spot with a grown-up', 'Throw them in a river'],
        MIDDLE_SCHOOL: ['Energy disappears completely', 'Batteries steal energy', 'Every conversion loses a little energy as heat', 'Electricity gets tired'],
        HIGH_SCHOOL: ['They are the smallest batteries', 'They never need any tanks', 'Energy can be expanded by adding more liquid in external tanks', 'They work only at night'],
        UNDERGRADUATE: ['Stacking batteries on shelves', 'Selling the same kilowatt-hour twice', 'Earning income from several services with the same asset', 'Raising prices for customers'],
        GRADUATE: ['They always increase storage revenue', 'They have no effect', 'They can suppress scarcity signals that would reward storage', 'They ban storage from markets'],
        PHD: ['Degradation never happens', 'Batteries do not age with use', 'Aging is nonlinear, so simple cost-per-cycle penalties misrepresent it', 'Dispatch never uses batteries'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Old batteries should be recycled safely, never put in the trash.',
        MIDDLE_SCHOOL: 'Each change of energy form wastes a bit as heat.',
        HIGH_SCHOOL: 'Flow batteries store energy in liquid electrolytes, so bigger tanks mean more energy.',
        UNDERGRADUATE: 'Stacking combines income from multiple services, limited by shared state of charge.',
        GRADUATE: 'Caps limit the high prices that pay storage for helping during scarcity.',
        PHD: 'Nonlinear and interacting aging makes simple penalties inaccurate.',
      },
    },
    {
      id: 'rstq4',
      question: {
        ELEMENTARY: 'Which of these is a way to store energy by moving water?',
        MIDDLE_SCHOOL: 'Which storage type has provided very large amounts of storage for many hours?',
        HIGH_SCHOOL: 'What does round-trip efficiency describe?',
        UNDERGRADUATE: 'Why is lithium-ion most competitive at durations of a few hours?',
        GRADUATE: 'Which option is most suited to seasonal storage?',
        PHD: 'What can representative-period selection miss in capacity-expansion models?',
      },
      options: {
        ELEMENTARY: ['Painting the water blue', 'Freezing a puddle', 'Putting water in a cup', 'Pumping water up a hill into a lake'],
        MIDDLE_SCHOOL: ['Flywheel', 'Phone battery', 'Flashlight battery', 'Pumped hydro'],
        HIGH_SCHOOL: ['How fast a battery spins', 'How long a battery is', 'How far power travels', 'The share of energy put in that comes back out as electricity'],
        UNDERGRADUATE: ['It has no power costs', 'It never degrades', 'Its energy costs are zero', 'Its energy costs scale with every added hour while power costs are relatively low'],
        GRADUATE: ['Flywheels', 'Supercapacitors', 'Short-duration lithium-ion', 'Hydrogen in tanks or salt caverns'],
        PHD: ['Average daily prices', 'Typical sunny days', 'Normal weekday demand', 'Rare multi-day events that drive long-duration storage value'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Pumped hydro lifts water uphill, then lets it rush down to make electricity later.',
        MIDDLE_SCHOOL: 'Pumped hydro can store very large amounts of energy for many hours.',
        HIGH_SCHOOL: 'Round-trip efficiency tells you how much energy survives the storage trip.',
        UNDERGRADUATE: 'Because every extra hour needs more cells, lithium-ion gets costly at long durations.',
        GRADUATE: 'Hydrogen can be stored in large volumes for weeks or months, despite low efficiency.',
        PHD: 'Representative days can overlook rare extreme lulls that matter most for long-duration assets.',
      },
    },
    {
      id: 'rstq5',
      question: {
        ELEMENTARY: 'Which of these has a battery inside?',
        MIDDLE_SCHOOL: 'How can storage help during a blackout?',
        HIGH_SCHOOL: 'How can a battery at a busy substation save money?',
        UNDERGRADUATE: 'What does depth of discharge affect?',
        GRADUATE: 'How can storage bring local air quality benefits?',
        PHD: 'What is the solid electrolyte interphase and why does it matter?',
      },
      options: {
        ELEMENTARY: ['A flashlight', 'A rock', 'A sandwich', 'A leaf'],
        MIDDLE_SCHOOL: ['By providing backup power to keep lights on', 'By making more wind', 'By turning off the Sun', 'By cooling the ocean'],
        HIGH_SCHOOL: ['By avoiding or delaying an expensive new power line', 'By painting the substation', 'By stopping all electricity use', 'By using more coal'],
        UNDERGRADUATE: ['Battery wear and lifetime', 'The color of the battery', 'The price of land', 'The voltage of the house'],
        GRADUATE: ['By replacing polluting peaking plants often near low-income communities', 'By burning cleaner coal', 'By moving pollution to the sky', 'By increasing traffic'],
        PHD: ['A layer on the anode that grows over time, consuming lithium and causing capacity fade', 'A safety label on the case', 'A type of cathode coating that never changes', 'A cooling fan inside the cell'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Flashlights, phones and toy cars use batteries to store energy.',
        MIDDLE_SCHOOL: 'Stored energy can power homes and buildings when the grid goes down.',
        HIGH_SCHOOL: 'Storage can handle peak demand locally, deferring costly grid upgrades.',
        UNDERGRADUATE: 'Deeper cycles generally cause more wear and shorten battery life.',
        GRADUATE: 'Storage can displace peakers, reducing local air pollution where they operate.',
        PHD: 'SEI growth consumes lithium inventory, a major cause of lithium-ion capacity fade.',
      },
    },
  ],
}

export default expansion
