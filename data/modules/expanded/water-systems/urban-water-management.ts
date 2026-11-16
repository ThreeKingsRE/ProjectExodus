import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'urban-water-management',
  lessons: [
    {
      id: 'ws-urban-1',
      title: 'How Cities Manage Water',
      content: {
        ELEMENTARY: `
<h2>The Secret Water World Under Your City</h2>
<p>Hi, I am Pip the Pipe! I live under the street with lots of other pipes. You cannot see us, but we work all day and night. We bring clean water to your home, carry dirty water away and help keep the streets from flooding when it rains. Come on a tour with me!</p>

<h3>Clean Water Coming In</h3>
<p>Clean water starts in a river, a lake or deep underground. It goes to a treatment plant where it is cleaned and made safe. Then pumps push it through big pipes under the streets, into smaller pipes and finally out of your tap.</p>
<ul>
<li><strong>Water main:</strong> a big pipe under the street that carries clean water to many homes</li>
<li><strong>Water tower:</strong> a tall tank that stores water up high so it flows down with good pressure</li>
<li><strong>Treatment plant:</strong> a place where water is cleaned so people can drink it safely</li>
</ul>

<h3>Dirty Water Going Out</h3>
<p>When you flush the toilet or let the bath drain, the water goes into a different set of pipes called sewers. The sewers carry it to a wastewater plant. There, the water is cleaned again before it goes back to a river or the sea.</p>
<ul>
<li><strong>Sewer:</strong> a pipe that carries used water from homes to be cleaned</li>
<li><strong>Wastewater plant:</strong> a place that cleans used water before it goes back to nature</li>
</ul>

<h3>Rain on the Streets</h3>
<p>When it rains hard, water rushes along streets because roads and roofs do not soak it up. Drains at the side of the road catch the rain and send it away so streets do not flood. Some cities also plant gardens and trees that drink up rainwater like sponges.</p>

<h3>How You Can Help</h3>
<ol>
<li>Only flush pee, poop and toilet paper. Wipes and toys can block the pipes!</li>
<li>Never pour oil or paint down a drain.</li>
<li>Keep leaves and trash away from street drains.</li>
<li>Turn off the tap when you are not using it.</li>
</ol>

<h3>Think About It</h3>
<p>Next time you walk down the street, look for round metal covers on the road. Those are doors to my underground world! Every city has a hidden water world working hard to keep people healthy and safe.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Cities Manage Water</h2>
<p>A city of millions of people needs a huge, carefully managed water system. Every day, clean water must arrive at every tap, used water must be carried away and cleaned, and rainwater must drain without flooding streets. These jobs are handled by three connected systems that together make city life possible.</p>

<h3>The Three Urban Water Systems</h3>
<table>
<thead><tr><th>System</th><th>What it does</th><th>Main parts</th></tr></thead>
<tbody>
<tr><td>Water supply</td><td>Brings clean, safe water to homes and businesses</td><td>Sources, treatment plants, pumps, storage tanks, water mains</td></tr>
<tr><td>Wastewater</td><td>Collects used water and cleans it</td><td>Sewer pipes, pumping stations, wastewater treatment plants</td></tr>
<tr><td>Stormwater</td><td>Drains rainwater to prevent flooding</td><td>Gutters, street drains, storm pipes, ponds, green spaces</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Water utility:</strong> the organization, often run by the city, that provides water and sewer services</li>
<li><strong>Distribution network:</strong> the web of pipes that carries treated water around a city</li>
<li><strong>Impervious surface:</strong> a hard surface like a road or roof that water cannot soak into</li>
<li><strong>Runoff:</strong> rainwater that flows over the ground instead of soaking in</li>
<li><strong>Combined sewer:</strong> an older type of sewer that carries both wastewater and rainwater in the same pipe</li>
<li><strong>Infrastructure:</strong> the basic structures and systems, like pipes and plants, that a city needs to run</li>
</ul>

<h3>Why Cities Flood</h3>
<p>In a forest, much of the rain soaks into soil. In a city, roads, parking lots and roofs cover the ground. Rain runs off quickly and fills the drains all at once. If the pipes are too small, water backs up into streets and basements. In some older cities, combined sewers can overflow during big storms and release a mix of rainwater and sewage into rivers.</p>

<h3>Keeping Old Pipes Working</h3>
<p>Many cities have pipes that are very old. Pipes crack, rust and leak. Some water is lost before it ever reaches a tap. Water utilities must inspect pipes, fix breaks and slowly replace old ones, all while keeping water flowing. That costs money, which is part of what your family's water bill pays for.</p>

<h3>New Ideas for City Water</h3>
<p>Cities are trying new approaches: green roofs and rain gardens that soak up stormwater, recycling treated wastewater for parks and industry, and smart meters that spot leaks. Some cities now plan all three systems together, an idea often called One Water, because supply, wastewater and stormwater are all connected parts of the same water cycle.</p>
`,
        HIGH_SCHOOL: `
<h2>Urban Water Management: Integrated Systems for Growing Cities</h2>
<p>Cities concentrate people, buildings and pavement, which transforms the natural water cycle. Traditional urban water management treated supply, wastewater and drainage as separate engineering problems, each solved with pipes and plants. Modern integrated urban water management treats them as one system, looking for solutions that save money, reduce pollution and make cities more resilient.</p>

<h3>How Cities Change the Water Cycle</h3>
<p>When land is urbanized, impervious surfaces replace soil and vegetation. Less rain infiltrates, so groundwater recharge falls. More rain becomes runoff, which arrives at streams faster and in larger peaks, causing flooding and erosion. Runoff also picks up oil, metals, litter and fertilizer. Meanwhile, cities import water from distant sources and export wastewater, creating a linear system that is energy-intensive and vulnerable to drought.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Integrated urban water management:</strong> an approach that plans water supply, wastewater and stormwater together with land use</li>
<li><strong>Green infrastructure:</strong> using plants, soils and natural processes to manage stormwater and provide other benefits</li>
<li><strong>Gray infrastructure:</strong> conventional engineered systems such as pipes, tanks, culverts and treatment plants</li>
<li><strong>Combined sewer overflow:</strong> a discharge of untreated sewage and stormwater when a combined system exceeds capacity during storms</li>
<li><strong>Non-revenue water:</strong> water that is produced but lost to leaks, theft or metering errors before billing</li>
<li><strong>Urban heat island:</strong> the tendency of cities to be warmer than surrounding areas, which vegetation and water can help reduce</li>
</ul>

<h3>Gray Versus Green</h3>
<table>
<thead><tr><th>Feature</th><th>Gray infrastructure</th><th>Green infrastructure</th></tr></thead>
<tbody>
<tr><td>Examples</td><td>Storm pipes, deep tunnels, concrete channels</td><td>Rain gardens, bioswales, green roofs, permeable pavement, street trees</td></tr>
<tr><td>Main function</td><td>Move water away quickly</td><td>Slow, soak and filter water near where it falls</td></tr>
<tr><td>Extra benefits</td><td>Reliable, well understood</td><td>Shade, habitat, cooler streets, groundwater recharge</td></tr>
<tr><td>Challenges</td><td>Expensive, single-purpose</td><td>Needs space, ongoing maintenance and community care</td></tr>
</tbody>
</table>
<p>Most cities use a blend. Green infrastructure reduces the volume reaching pipes, so gray systems can be smaller or overflow less often.</p>

<h3>Real-World Applications</h3>
<ul>
<li>Cities with combined sewers have built large storage tunnels while also adding green infrastructure to cut overflows.</li>
<li>Some arid cities recycle treated wastewater for irrigation, industry or even drinking water after advanced treatment.</li>
<li>Utilities use pressure management and acoustic sensors to reduce leaks in distribution networks.</li>
<li>Rainwater harvesting on buildings supplies toilet flushing and landscape watering.</li>
</ul>

<h3>Trade-offs</h3>
<p>Every option has costs. Deep tunnels are expensive but reliable. Green infrastructure spreads across neighborhoods and depends on maintenance. Recycled water requires public trust. Integrated planning helps compare options fairly, including benefits that do not show up on a water bill, like cooler summers and better parks.</p>

<h3>What You Can Do</h3>
<ol>
<li>Learn whether your city has combined or separate sewers.</li>
<li>Support tree planting and rain gardens in your neighborhood.</li>
<li>Keep fats, wipes and chemicals out of drains.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Urban Water Systems</h2>
<p>Urban water systems are networks of physical assets, institutions and flows that deliver safe water, remove wastes and manage stormwater. They represent some of the largest public investments a city makes, with assets lasting many decades. This lesson examines system components, performance metrics, asset management and the One Water approach.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Combined sewer:</strong> a single pipe network carrying both sanitary sewage and stormwater to treatment, prone to overflow in heavy rain</li>
<li><strong>Asset management:</strong> a systematic approach to operating, maintaining, renewing and replacing infrastructure at the lowest life-cycle cost for a target service level</li>
<li><strong>Level of service:</strong> the defined quality, reliability and performance a utility commits to provide to customers</li>
<li><strong>Infiltration and inflow:</strong> groundwater and stormwater that enter sanitary sewers through cracks and improper connections, consuming capacity</li>
<li><strong>One Water:</strong> a planning philosophy that manages all water, including drinking water, wastewater and stormwater, as one resource</li>
<li><strong>Water balance:</strong> an accounting of all inputs, outputs and losses in a system, used to quantify non-revenue water</li>
</ul>

<h3>System Components and Failure Modes</h3>
<table>
<thead><tr><th>Subsystem</th><th>Key assets</th><th>Common failure modes</th></tr></thead>
<tbody>
<tr><td>Supply and treatment</td><td>Intakes, wells, treatment plants, reservoirs</td><td>Source contamination, drought, treatment upsets</td></tr>
<tr><td>Distribution</td><td>Mains, valves, pumps, storage tanks, service lines</td><td>Main breaks, pressure loss, leaks, water age and quality decline</td></tr>
<tr><td>Wastewater collection and treatment</td><td>Sewers, lift stations, treatment plants</td><td>Blockages, infiltration and inflow, overflows</td></tr>
<tr><td>Stormwater</td><td>Inlets, pipes, detention basins, green infrastructure</td><td>Undersized capacity, clogging, flooding</td></tr>
</tbody>
</table>

<h3>Asset Management Reasoning</h3>
<p>Every asset follows a deterioration path. Replacing a pipe too early wastes remaining life; replacing it too late increases break costs, service disruption and water loss. Asset management uses condition data, failure history and consequence of failure to rank assets by risk, usually framed as likelihood of failure multiplied by consequence. A large transmission main under a hospital may warrant renewal before a small residential pipe with more frequent but less consequential breaks.</p>
<p>Many cities face a renewal gap: pipes installed during rapid growth periods are reaching the end of their lives at roughly the same time, while past rates did not fully fund replacement.</p>

<h3>The One Water Approach</h3>
<p>One Water reframes stormwater and wastewater as resources. Examples include recycling treated effluent for irrigation, capturing stormwater to recharge aquifers, and recovering energy and nutrients at treatment plants. It also emphasizes collaboration among departments that traditionally plan separately, such as utilities, transportation and parks.</p>

<h3>Performance Metrics</h3>
<ul>
<li>Main breaks per length of pipe per year</li>
<li>Non-revenue water as a share of production or per connection</li>
<li>Number and volume of sewer overflows</li>
<li>Compliance with drinking water and discharge standards</li>
<li>Energy use per unit of water delivered and treated</li>
</ul>

<h3>An Applied Method</h3>
<ol>
<li>Build an inventory of assets with age, material, condition and criticality.</li>
<li>Define levels of service with stakeholders.</li>
<li>Score risk for each asset and prioritize renewal.</li>
<li>Compare gray, green and demand-side options on life-cycle cost.</li>
<li>Develop a long-term financial plan that funds renewal sustainably.</li>
</ol>
`,
        GRADUATE: `
<h2>Water Utility Management, Rates and Resilience</h2>
<p>Urban water services are delivered by utilities that are capital-intensive, often natural monopolies, and subject to health, environmental and economic regulation. Graduate-level analysis focuses on how utilities are governed and financed, how rates are designed to balance competing goals, and how systems are made resilient to shocks. This lesson examines these institutional and economic dimensions.</p>

<h3>Utility Governance Models</h3>
<ul>
<li><strong>Natural monopoly:</strong> an industry where one network provider can serve a market at lower cost than competitors, justifying regulation</li>
<li><strong>Cost of service:</strong> the total revenue a utility needs to cover operations, maintenance, debt service and capital renewal</li>
<li><strong>Increasing block rate:</strong> a tariff where the price per unit rises as consumption crosses defined thresholds</li>
<li><strong>Affordability program:</strong> a discount, credit or assistance scheme that keeps essential water service affordable for low-income customers</li>
<li><strong>System resilience:</strong> the ability of a water system to anticipate, absorb, recover from and adapt to disruptions</li>
<li><strong>Consent decree:</strong> a court-supervised agreement requiring a utility to fix violations, often sewer overflows, on a set schedule</li>
</ul>
<p>Utilities may be municipal departments, independent public authorities, cooperatives or private companies under concession or regulated ownership. Each model distributes risk, accountability and access to capital differently. Public ownership can access low-cost municipal bonds; private participation may bring operational expertise but raises questions about accountability and pricing.</p>

<h3>Rate Design</h3>
<p>Rate design balances revenue sufficiency, conservation signals, equity and simplicity. Because most costs are fixed, high fixed charges stabilize revenue but weaken conservation incentives and burden small users. Volumetric rates encourage efficiency but make revenue sensitive to weather and conservation.</p>
<table>
<thead><tr><th>Rate structure</th><th>Advantages</th><th>Drawbacks</th></tr></thead>
<tbody>
<tr><td>Uniform volumetric</td><td>Simple, understandable</td><td>Weak signal for high discretionary use</td></tr>
<tr><td>Increasing block</td><td>Targets outdoor and discretionary use</td><td>Can penalize large low-income households</td></tr>
<tr><td>Seasonal or drought surcharge</td><td>Reflects scarcity timing</td><td>Revenue volatility, complexity</td></tr>
<tr><td>Budget-based</td><td>Tailors allocations to household size and landscape</td><td>Data-intensive to administer</td></tr>
</tbody>
</table>
<p>Affordability is a growing concern as renewal needs push rates up. Many places restrict how utility revenue can fund customer assistance, so programs often rely on separate funding or partnerships.</p>

<h3>Resilience Planning</h3>
<p>Threats include drought, floods, heat, earthquakes, cyberattacks, power outages and contamination events. Resilience strategies combine redundancy (multiple sources and connected pressure zones), robustness (seismic-resistant pipe), rapid recovery (emergency interconnections, backup power, mutual aid agreements) and adaptability (diversified portfolios including reuse and stormwater capture).</p>

<h3>Institutional Barriers</h3>
<p>Separate departments for water, sewer, streets and parks often prevent integrated solutions like green streets. Rate-setting can be politically constrained, deferring maintenance. Regulatory frameworks may favor proven gray infrastructure over distributed solutions with uncertain performance. Fragmentation into many small utilities limits technical capacity, while regionalization raises governance questions.</p>

<h3>Equity in Urban Water</h3>
<p>Service quality, lead service lines, flooding exposure and shutoff policies often fall unequally along income and racial lines. Equitable management includes prioritizing replacement in underserved areas, transparent shutoff protections and meaningful community engagement in capital planning.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess financial sustainability: full cost recovery including renewal.</li>
<li>Test rate options for revenue stability, conservation and affordability.</li>
<li>Map hazards and critical assets; identify single points of failure.</li>
<li>Compare portfolio options across scenarios, including distributed solutions.</li>
<li>Evaluate distribution of service quality, costs and risks across neighborhoods.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Urban Water Sustainability</h2>
<p>Urban water research asks how cities can transition from centralized, linear systems toward configurations that are resource-efficient, resilient and just. The field draws on urban hydrology, systems engineering, industrial ecology and socio-technical transitions theory. This lesson surveys modeling methods, debates over centralization and open research directions.</p>

<h3>Urban Hydrology</h3>
<p>Urbanization alters runoff volume, peak timing, baseflow and water quality, a cluster of effects often called the urban stream syndrome. Research seeks to quantify how distributed green infrastructure restores hydrologic function at catchment scale, a question complicated by heterogeneous soils, maintenance variability and limited long-term monitoring. Non-stationary rainfall under climate change undermines design standards based on historical intensity-duration-frequency curves.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Urban water metabolism:</strong> an analytical framing that quantifies flows of water, energy and materials through a city as an ecosystem would be studied</li>
<li><strong>Decentralized system:</strong> water, wastewater or stormwater infrastructure that operates at building, block or neighborhood scale rather than citywide</li>
<li><strong>Socio-technical transition:</strong> a long-term shift in which technologies, institutions, practices and cultural meanings change together</li>
<li><strong>Path dependence:</strong> the tendency of past infrastructure and institutional choices to constrain future options</li>
<li><strong>Water sensitive city:</strong> a vision of urban form in which water management supports livability, ecology and resilience</li>
<li><strong>Hydraulic model:</strong> a computational representation of flows and pressures in pipe networks used to simulate system behavior</li>
</ul>

<h3>Modeling Methods</h3>
<table>
<thead><tr><th>Method</th><th>Use</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Hydraulic and hydrologic network models</td><td>Simulate pressure, flow, overflow and flooding</td><td>Calibration data scarce; computationally heavy at fine scales</td></tr>
<tr><td>Urban metabolism accounting</td><td>Quantifies stocks, flows and efficiency</td><td>Boundary choices strongly shape results</td></tr>
<tr><td>Life-cycle and cost assessment</td><td>Compares centralized and decentralized options</td><td>Sensitive to assumptions about scale and maintenance</td></tr>
<tr><td>Agent-based and socio-hydrological models</td><td>Represents household adoption and feedbacks</td><td>Validation difficult</td></tr>
<tr><td>Digital twins</td><td>Real-time operation using sensor data</td><td>Data integration, cybersecurity and cost</td></tr>
</tbody>
</table>

<h3>Centralized Versus Decentralized</h3>
<p>Centralized systems benefit from economies of scale in treatment and professional operation, but distribution and collection networks dominate cost and lock cities into specific configurations. Decentralized and hybrid systems, such as building-scale reuse or neighborhood stormwater harvesting, may reduce conveyance costs and enable fit-for-purpose quality, but they shift operational responsibility and raise public health oversight questions. Evidence suggests optimal scale depends on density, topography and existing assets, and that hybrid configurations are often favored. Lower flows in centralized sewers from decentralized reuse can create new problems such as solids deposition and odor.</p>

<h3>Contested Questions</h3>
<p>Debates include how to value co-benefits of green infrastructure in decision-making, whether decentralization fragments accountability, how to manage risks in potable reuse, and whether infrastructure-led greening displaces long-term residents. Scholars also contest whether transitions are best driven by technical niches, regulatory change or community movements.</p>

<h3>Transitions and Governance</h3>
<p>Transitions research uses multi-level perspectives to explain why innovations remain niche despite advantages: entrenched regimes, sunk costs, professional norms and regulation built around centralized models. Experiments, demonstration projects and boundary organizations can help, but scaling them requires changes in finance, standards and capacity.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Long-term catchment-scale monitoring of distributed green infrastructure performance.</li>
<li>Design standards that account for non-stationary rainfall extremes.</li>
<li>Optimization of hybrid centralized-decentralized configurations including network effects.</li>
<li>Integrating justice and displacement risks into urban water planning models.</li>
<li>Cyber-physical security and governance of data-intensive digital twins.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wurbanq1',
      question: {
        ELEMENTARY: 'What carries clean water to homes in cities?',
        MIDDLE_SCHOOL: 'What are the three urban water systems?',
        HIGH_SCHOOL: 'What is green infrastructure?',
        UNDERGRADUATE: 'What is a combined sewer?',
        GRADUATE: 'Why are water utilities often considered natural monopolies?',
        PHD: 'What is urban water metabolism?',
      },
      options: {
        ELEMENTARY: ['Pipes under the ground', 'Trucks full of buckets', 'Clouds that rain inside', 'Birds carrying cups'],
        MIDDLE_SCHOOL: ['Supply, wastewater and stormwater', 'Only drinking water', 'Rivers, lakes and oceans', 'Snow, ice and steam'],
        HIGH_SCHOOL: ['Using plants, soils and natural processes to manage stormwater', 'Pipes painted green', 'Garden hoses', 'Concrete channels'],
        UNDERGRADUATE: ['A single pipe network carrying both sewage and stormwater', 'Two separate pipe systems', 'A pipe carrying only drinking water', 'A ditch for irrigation'],
        GRADUATE: ['One network can serve a market at lower cost than competing networks', 'They have no customers', 'Water is free to produce', 'Competition is required by law everywhere'],
        PHD: ['Quantifying flows of water, energy and materials through a city like an ecosystem', 'Cities literally eating water', 'The chemistry of tap water', 'Only natural rivers outside cities'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Big and small pipes under the streets bring clean water to every tap.',
        MIDDLE_SCHOOL: 'Cities manage water supply, wastewater and stormwater as connected systems.',
        HIGH_SCHOOL: 'Green infrastructure slows, soaks and filters water using natural processes.',
        UNDERGRADUATE: 'Combined sewers carry both, so heavy rain can cause overflows.',
        GRADUATE: 'Duplicating pipe networks is very costly, so a single regulated provider is typical.',
        PHD: 'Metabolism framing tracks resource stocks and flows through urban systems.',
      },
    },
    {
      id: 'wurbanq2',
      question: {
        ELEMENTARY: 'What should you NOT flush down the toilet?',
        MIDDLE_SCHOOL: 'Why do cities flood more easily than forests?',
        HIGH_SCHOOL: 'What is non-revenue water?',
        UNDERGRADUATE: 'What is infiltration and inflow?',
        GRADUATE: 'What is a drawback of high fixed charges in rate design?',
        PHD: 'What is a known problem when decentralized reuse lowers flows in centralized sewers?',
      },
      options: {
        ELEMENTARY: ['Toilet paper', 'Wipes and toys', 'Pee', 'Poop'],
        MIDDLE_SCHOOL: ['Cities get more sunshine', 'Hard surfaces stop rain from soaking into the ground', 'Forests have more pipes', 'Cities are always higher up'],
        HIGH_SCHOOL: ['Water sold at a discount', 'Water produced but lost to leaks, theft or meter errors before billing', 'Rainwater that falls on parks', 'Bottled water sold in shops'],
        UNDERGRADUATE: ['Water flowing into a reservoir from rivers', 'Groundwater and stormwater entering sanitary sewers through cracks and wrong connections', 'Rain soaking into lawns', 'Water entering a treatment plant on purpose'],
        GRADUATE: ['They make revenue too unstable', 'They weaken conservation incentives and burden small users', 'They are impossible to bill', 'They only apply to industry'],
        PHD: ['Pipes become too pressurized', 'Solids deposition and odor problems', 'Water becomes too clean', 'Sewers start producing electricity'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Only pee, poop and toilet paper should be flushed. Wipes and toys block pipes.',
        MIDDLE_SCHOOL: 'Roads and roofs make rain run off quickly into drains instead of soaking in.',
        HIGH_SCHOOL: 'Non-revenue water is lost or unbilled water, often from leaking pipes.',
        UNDERGRADUATE: 'Unwanted water entering sewers uses up capacity and can cause overflows.',
        GRADUATE: 'High fixed charges stabilize revenue but reduce the payoff from using less water.',
        PHD: 'Lower flows can let solids settle in pipes, causing blockages and odors.',
      },
    },
    {
      id: 'wurbanq3',
      question: {
        ELEMENTARY: 'Why do cities have water towers?',
        MIDDLE_SCHOOL: 'What is runoff?',
        HIGH_SCHOOL: 'What is a combined sewer overflow?',
        UNDERGRADUATE: 'How does asset management usually prioritize pipe renewal?',
        GRADUATE: 'What does system resilience mean for a water utility?',
        PHD: 'Why does non-stationary rainfall challenge urban drainage design?',
      },
      options: {
        ELEMENTARY: ['To keep birds as pets', 'To make clouds', 'To store water up high so it flows with good pressure', 'To hold the city flag'],
        MIDDLE_SCHOOL: ['Water you drink', 'A race at school', 'Rainwater that flows over the ground instead of soaking in', 'Water frozen in pipes'],
        HIGH_SCHOOL: ['Clean water spraying from a fountain', 'A broken water tower', 'A discharge of untreated sewage and stormwater when capacity is exceeded', 'A flood of drinking water into homes'],
        UNDERGRADUATE: ['By replacing the newest pipes first', 'By picking pipes at random', 'By ranking risk as likelihood of failure times consequence', 'By color of the pipe'],
        GRADUATE: ['Never spending money on repairs', 'Having only one water source', 'The ability to anticipate, absorb, recover from and adapt to disruptions', 'Charging the highest rates possible'],
        PHD: ['Rain never changes', 'Pipes cannot carry rainwater', 'Design standards based on historical rainfall statistics may underestimate future extremes', 'Rainfall stops in cities'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Water stored high up flows down with enough push to reach every tap.',
        MIDDLE_SCHOOL: 'Runoff is rain that flows across surfaces, often into street drains.',
        HIGH_SCHOOL: 'Overflows send untreated mixed water into rivers during heavy storms.',
        UNDERGRADUATE: 'Risk-based ranking weighs how likely a failure is and how bad it would be.',
        GRADUATE: 'Resilience covers preparing for, absorbing and recovering from shocks.',
        PHD: 'If rainfall extremes are changing, past records no longer reliably describe future design storms.',
      },
    },
    {
      id: 'wurbanq4',
      question: {
        ELEMENTARY: 'Where does water go after you flush the toilet?',
        MIDDLE_SCHOOL: 'What does the idea of One Water mean?',
        HIGH_SCHOOL: 'How does green infrastructure help gray infrastructure?',
        UNDERGRADUATE: 'What is a renewal gap?',
        GRADUATE: 'What is a consent decree in the urban water context?',
        PHD: 'What does path dependence mean in urban water transitions?',
      },
      options: {
        ELEMENTARY: ['Back into the tap', 'Up to the clouds right away', 'Into a swimming pool', 'Through sewers to a wastewater plant to be cleaned'],
        MIDDLE_SCHOOL: ['Only one person may use water', 'There is only one pipe in a city', 'Using one bottle of water per day', 'Planning supply, wastewater and stormwater together as one connected resource'],
        HIGH_SCHOOL: ['It makes pipes longer', 'It paints pipes green', 'It replaces all treatment plants', 'It reduces the volume reaching pipes, so overflows happen less often'],
        UNDERGRADUATE: ['A gap between two pipes', 'Extra money left over each year', 'A break in the rainy season', 'Many aging assets needing replacement while past funding fell short'],
        GRADUATE: ['A voluntary customer survey', 'A rate discount for seniors', 'A new type of pipe', 'A court-supervised agreement requiring a utility to fix violations on a schedule'],
        PHD: ['Water always follows the shortest path', 'Pipes must follow roads', 'Rivers change their paths yearly', 'Past infrastructure and institutional choices constrain future options'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Sewer pipes carry used water to a plant where it is cleaned before returning to nature.',
        MIDDLE_SCHOOL: 'One Water treats all city water systems as parts of the same water cycle.',
        HIGH_SCHOOL: 'By soaking up rain near where it falls, green infrastructure eases the load on pipes.',
        UNDERGRADUATE: 'Pipes installed in growth periods age together, and past rates did not fully fund renewal.',
        GRADUATE: 'Consent decrees often require utilities to reduce sewer overflows by set deadlines.',
        PHD: 'Sunk costs, norms and regulations built around existing systems make change difficult.',
      },
    },
    {
      id: 'wurbanq5',
      question: {
        ELEMENTARY: 'How can you help keep street drains working?',
        MIDDLE_SCHOOL: 'What is an impervious surface?',
        HIGH_SCHOOL: 'Which is an example of green infrastructure?',
        UNDERGRADUATE: 'What is a level of service?',
        GRADUATE: 'What is a concern with increasing block rates?',
        PHD: 'Why are hybrid centralized-decentralized systems often favored?',
      },
      options: {
        ELEMENTARY: ['Keep leaves and trash away from them', 'Pour paint into them', 'Put toys in them', 'Cover them with rocks'],
        MIDDLE_SCHOOL: ['A hard surface like a road or roof that water cannot soak into', 'A soft lawn', 'A sandy beach', 'A forest floor'],
        HIGH_SCHOOL: ['A rain garden that soaks up stormwater', 'A deep concrete tunnel', 'A steel water main', 'A pumping station'],
        UNDERGRADUATE: ['The defined quality, reliability and performance a utility commits to provide', 'The floor of a treatment plant', 'The height of a water tower', 'The number of employees'],
        GRADUATE: ['They can penalize large low-income households', 'They are too simple', 'They encourage outdoor watering', 'They lower all bills'],
        PHD: ['Optimal scale depends on density, topography and existing assets', 'Centralized systems have no benefits', 'Decentralized systems need no oversight', 'Hybrid systems use no pipes'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Clear drains can carry rainwater away so streets do not flood.',
        MIDDLE_SCHOOL: 'Impervious surfaces make rain run off instead of soaking in.',
        HIGH_SCHOOL: 'Rain gardens use plants and soil to slow and filter stormwater.',
        UNDERGRADUATE: 'Levels of service define what customers can expect and guide investment.',
        GRADUATE: 'Large households may cross into higher price blocks even with efficient use.',
        PHD: 'Local conditions determine which mix of scales is most efficient and resilient.',
      },
    },
  ],
}

export default expansion
