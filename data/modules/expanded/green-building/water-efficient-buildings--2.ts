import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'water-efficient-buildings~2',
  lessons: [
    {
      id: 'gb-wt-1',
      title: 'Saving Water in Buildings: From Fixtures to Neighborhoods',
      content: {
        ELEMENTARY: `
<h2>Buildings That Help Rivers and Fish</h2>
<p>Every drop of water that comes out of a tap at school once lived in a river, a lake or deep underground. Fish, frogs and birds need that water too! When buildings use less water, more stays in nature for the animals. Let's discover how a building can become a water saver.</p>

<h3>Follow the Water</h3>
<p>Water travels through pipes into a building. It fills toilets, splashes out of sinks and showers, cooks food in the kitchen and waters the plants outside. Then it flows down the drain to be cleaned. A smart building tries to use just enough water for each job, and not a drop more.</p>
<ul>
<li><strong>Water meter:</strong> a counting machine that shows how much water a building uses</li>
<li><strong>Leak:</strong> a crack or loose part where water escapes and gets wasted</li>
<li><strong>Drain:</strong> the hole where used water leaves the sink, shower or bath</li>
</ul>

<h3>Super Saving Tools</h3>
<p>Some taps let out a gentle spray that feels just as good but uses less water. Some toilets have two buttons: a small flush and a big flush. Some taps turn off by themselves when you take your hands away. These clever tools save water every single day.</p>
<ul>
<li><strong>Low-flow tap:</strong> a tap that mixes air into the water so it uses less</li>
<li><strong>Dual-flush toilet:</strong> a toilet with a small flush button and a big flush button</li>
<li><strong>Sensor tap:</strong> a tap that turns on and off by itself when it sees your hands</li>
</ul>

<h3>Using Rain and Plants</h3>
<p>Rain falls on roofs for free! Some buildings catch rain in big tanks and use it to water gardens or flush toilets. Gardens with plants that grow naturally in the area need much less watering, because they are used to the local weather.</p>

<h3>Be a Water Detective</h3>
<ol>
<li>Listen for drips and tell a grown-up if a tap or toilet is leaking.</li>
<li>Turn off the tap while you scrub your hands with soap.</li>
<li>Use the small flush button when you can.</li>
<li>Help water plants in the early morning, when less water dries up in the sun.</li>
<li>Make a poster to remind classmates to save water.</li>
</ol>

<h3>Think About It</h3>
<p>If your school saved one bucket of water every day, how many buckets would that be in a whole school year? Every drop you save helps a river stay full for the fish!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Buildings Use Less Water</h2>
<p>Buildings use water in many ways: toilets, sinks, showers, kitchens, cleaning, landscaping and, in big buildings, cooling systems. Saving water in buildings follows a simple order. First, stop wasting water. Next, use efficient equipment. Finally, reuse water and use alternative sources like rain. This order works because the cheapest water is the water you never need.</p>

<h3>Step One: Find the Waste</h3>
<p>Many buildings waste water without anyone noticing. A running toilet or a hidden underground leak can waste a surprising amount every day. Water meters help find problems: if the meter keeps spinning at night when nobody is using water, something is leaking. Some buildings add extra meters, called submeters, to track water use in different areas like the kitchen or the garden.</p>

<h3>Step Two: Efficient Fixtures</h3>
<p>Fixtures are the parts of a building's plumbing that people use, like taps and toilets. Efficient fixtures do the same job with less water. Faucet aerators mix air into the stream, low-flow showerheads reduce flow while keeping good pressure, and some urinals use very little or no water.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Fixture:</strong> a plumbing device people use directly, such as a tap, toilet or shower</li>
<li><strong>Submeter:</strong> an extra water meter that measures use in one part of a building</li>
<li><strong>Greywater:</strong> gently used water from sinks, showers and laundry that can be treated and reused</li>
<li><strong>Blackwater:</strong> wastewater from toilets and often kitchens that needs stronger treatment</li>
<li><strong>Potable water:</strong> water clean enough to drink</li>
<li><strong>Native plants:</strong> plants that grow naturally in a region and usually need little extra watering</li>
</ul>

<h3>Step Three: Reuse and Rain</h3>
<p>Not every job needs drinking-quality water. Flushing a toilet or watering a lawn can use greywater or rainwater instead. Using the right quality of water for each job is called "fit for purpose."</p>
<table>
<thead><tr><th>Water job</th><th>Needs drinking water?</th><th>Possible alternative</th></tr></thead>
<tbody>
<tr><td>Drinking and cooking</td><td>Yes</td><td>None without full treatment</td></tr>
<tr><td>Toilet flushing</td><td>No</td><td>Treated greywater or rainwater</td></tr>
<tr><td>Garden watering</td><td>No</td><td>Rainwater or treated greywater</td></tr>
<tr><td>Cooling towers in large buildings</td><td>No</td><td>Rainwater or recycled water, with treatment</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Every liter a building saves means less water taken from rivers and aquifers, and less energy used to pump, treat and heat it. In places with drought, water-saving buildings help communities share limited water with farms and ecosystems.</p>
`,
        HIGH_SCHOOL: `
<h2>Water-Efficient Fixtures, Rainwater Harvesting and Greywater Systems</h2>
<p>Water efficiency in buildings is about more than low-flow taps. A large office, hospital or apartment building is a complex water system with fixtures, kitchens, laundry, landscaping and, often, a cooling tower that can be the single biggest water user on site. Designers and building operators combine efficient technology, smart operation and alternative water sources to cut demand while keeping occupants safe and comfortable.</p>

<h3>Where Big Buildings Use Water</h3>
<ul>
<li><strong>Cooling tower:</strong> equipment that cools building systems by evaporating water, consuming large volumes in hot weather</li>
<li><strong>Makeup water:</strong> fresh water added to a cooling tower to replace what evaporates or is drained</li>
<li><strong>Blowdown:</strong> water drained from a cooling tower to remove minerals that build up as water evaporates</li>
<li><strong>Irrigation:</strong> watering of landscapes, which can be a large seasonal use in dry climates</li>
<li><strong>Rainwater harvesting:</strong> collecting rain from roofs and storing it for later non-drinking uses</li>
<li><strong>Condensate recovery:</strong> capturing water that drips from air conditioning coils for reuse</li>
</ul>
<p>Because the mix of uses varies so much, the first step in any project is a water audit that measures where water actually goes.</p>

<h3>Rainwater Harvesting</h3>
<p>A rainwater system has a catchment surface (usually the roof), gutters and downpipes, a first-flush diverter that discards the dirtiest early runoff, a storage tank, filters, a pump and often disinfection. How much rain a roof can collect depends on roof area and local rainfall. The tricky part is matching supply to demand: rain arrives in storms and seasons, while toilets flush every day.</p>

<h3>Greywater Systems</h3>
<p>Greywater from showers, bathroom sinks and laundry is available every day in a steady stream, which makes it reliable. Simple systems send laundry water to landscape irrigation, while more advanced systems filter and disinfect greywater for toilet flushing. Because greywater contains soap, skin cells and some bacteria, it should not be stored untreated for long, or it can develop odors and microbial growth.</p>

<h3>Comparing Alternative Sources</h3>
<table>
<thead><tr><th>Source</th><th>Reliability</th><th>Treatment needs</th><th>Best uses</th></tr></thead>
<tbody>
<tr><td>Rainwater</td><td>Seasonal, depends on storms</td><td>Filtration and disinfection</td><td>Irrigation, toilets, cooling towers</td></tr>
<tr><td>Greywater</td><td>Steady daily supply</td><td>Filtration and disinfection</td><td>Toilets, subsurface irrigation</td></tr>
<tr><td>Condensate</td><td>High in hot, humid weather</td><td>Light treatment</td><td>Cooling tower makeup</td></tr>
<tr><td>Municipal recycled water</td><td>Steady, where available</td><td>Treated by the utility</td><td>Irrigation, toilets, cooling</td></tr>
</tbody>
</table>

<h3>Trade-offs and Solutions</h3>
<ol>
<li><strong>Safety:</strong> separate, clearly labeled pipes prevent alternative water from mixing with drinking water.</li>
<li><strong>Maintenance:</strong> filters and disinfection must be maintained, or systems fail quietly.</li>
<li><strong>Cost:</strong> tanks and treatment are expensive, so efficiency usually comes first.</li>
<li><strong>Operations:</strong> smart irrigation controllers and leak alarms often save water cheaply.</li>
<li><strong>Cooling:</strong> better water treatment lets cooling towers recirculate water longer before draining it.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Building Water Budgets, Alternative Sources and Net Zero Water</h2>
<p>A building water budget is a quantitative accounting of every flow entering, moving within and leaving a site. Like an energy model, it lets designers compare strategies, size tanks and treatment equipment, and test whether ambitious goals such as net zero water are realistic. This lesson treats the building as a system of demands, supplies and storage, with special attention to the operational uses that efficient fixtures alone do not address.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Water budget:</strong> an accounting of all water demands and supplies on a site over a defined period</li>
<li><strong>End-use breakdown:</strong> the division of total demand among toilets, showers, kitchens, process loads, irrigation and cooling</li>
<li><strong>Cycles of concentration:</strong> the ratio of dissolved minerals in cooling tower water to those in the makeup water</li>
<li><strong>Storage reliability:</strong> the fraction of demand a tank can meet over time given variable supply</li>
<li><strong>Net zero water:</strong> a building whose water needs are met by captured rain and reused water, with used water returned to the same watershed</li>
<li><strong>Water age:</strong> the time water sits in pipes and tanks before use, which affects quality and microbial growth</li>
</ul>

<h3>Building the Budget</h3>
<p>Demand is estimated from occupancy, fixture flow rates and use patterns, plus process loads such as kitchens, laboratories and cooling. Supply comes from municipal water, rain, greywater, condensate and possibly on-site wells. A daily or hourly simulation tracks tank levels, showing when storage overflows and when backup water is needed. Annual totals alone can mislead, since a roof may catch enough rain in a year but not in the dry season when irrigation peaks.</p>

<h3>Cooling Towers: A Worked Example in Words</h3>
<p>In a cooling tower, evaporation removes pure water and leaves minerals behind. Blowdown removes concentrated water to control scale. As cycles of concentration rise, blowdown falls: going from low cycles to moderately higher cycles can cut blowdown by more than half, while evaporation stays roughly the same because it depends on the cooling load. Beyond a certain point, further increases bring diminishing returns and greater scaling risk. Improved chemical or physical treatment is therefore one of the most effective water measures in large air-conditioned buildings.</p>

<h3>Comparing Strategy Types</h3>
<table>
<thead><tr><th>Strategy</th><th>Typical cost</th><th>Water impact</th><th>Key risk</th></tr></thead>
<tbody>
<tr><td>Leak detection and submetering</td><td>Low</td><td>Moderate, catches hidden losses</td><td>Data ignored without follow-up</td></tr>
<tr><td>Efficient fixtures</td><td>Low to moderate</td><td>Moderate to high for indoor use</td><td>Low flows can increase water age</td></tr>
<tr><td>Cooling tower optimization</td><td>Moderate</td><td>High in cooled buildings</td><td>Scaling or corrosion if poorly managed</td></tr>
<tr><td>Rainwater and greywater reuse</td><td>High</td><td>High for non-potable uses</td><td>Maintenance and pathogen control</td></tr>
</tbody>
</table>

<h3>Net Zero Water in Practice</h3>
<p>Achieving net zero water requires deep demand reduction first, because each liter avoided lowers the size of tanks and treatment needed. Potable water from rain requires robust multi-barrier treatment and regulatory approval, and blackwater treatment on site requires space and skilled operation. Many projects therefore pursue net zero for non-potable uses, which is more achievable.</p>

<h3>Applied Method</h3>
<ol>
<li>Meter and audit existing use, or model demand for new buildings.</li>
<li>Reduce demand with fixtures, operations and landscape design.</li>
<li>Match each remaining demand to the lowest suitable water quality.</li>
<li>Simulate supply and storage at daily or finer resolution.</li>
<li>Design for water quality, including water age and disinfection.</li>
<li>Commission systems and monitor performance after occupancy.</li>
</ol>
`,
        GRADUATE: `
<h2>Water Reuse Regulation, Treatment Technologies and District Systems</h2>
<p>As water stress grows, cities are moving beyond fixture efficiency toward reuse at building and district scales. That shift raises questions of regulation, public health, economics and institutional responsibility that individual building designers cannot answer alone. This lesson examines how reuse is regulated, which treatment technologies are used, when district systems outperform building-scale ones, and who bears the costs and risks.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Fit-for-purpose treatment:</strong> treating water only to the quality required for its intended end use</li>
<li><strong>Risk-based framework:</strong> a regulatory approach that sets treatment targets according to the pathogen risk of each end use</li>
<li><strong>Log reduction:</strong> a measure of pathogen removal, where each log unit means a tenfold reduction</li>
<li><strong>Membrane bioreactor:</strong> a treatment system combining biological breakdown with membrane filtration, producing high-quality effluent in a compact footprint</li>
<li><strong>District water system:</strong> shared infrastructure that collects, treats and redistributes water among several buildings</li>
<li><strong>Cross-connection control:</strong> measures preventing non-potable water from entering drinking water pipes</li>
</ul>

<h3>Regulatory Approaches</h3>
<p>Reuse rules vary widely among jurisdictions. Some prescribe specific technologies or water-quality limits, while others set performance targets for pathogen reduction based on how people might be exposed. Risk-based frameworks are generally considered more flexible, since they allow innovation as long as targets are met and monitored. Common requirements include separate color-coded piping, backflow prevention, signage, operator certification and reporting. Unclear rules or lengthy approvals remain a major barrier to on-site reuse.</p>

<h3>Treatment Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Typical role</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>Media and cartridge filtration</td><td>Simple greywater and rainwater systems</td><td>Low cost, frequent maintenance</td></tr>
<tr><td>Membrane bioreactors</td><td>Greywater and blackwater for non-potable reuse</td><td>Compact, energy-intensive, needs skilled operation</td></tr>
<tr><td>Constructed wetlands</td><td>Biological treatment using plants and media</td><td>Low energy, larger footprint, landscape value</td></tr>
<tr><td>Ultraviolet and chlorine disinfection</td><td>Final pathogen barrier</td><td>Requires monitoring of dose and residual</td></tr>
<tr><td>Reverse osmosis and advanced oxidation</td><td>High-quality reuse approaching potable</td><td>High energy, brine disposal</td></tr>
</tbody>
</table>

<h3>Building Versus District Scale</h3>
<p>Treatment systems have economies of scale: unit costs and operational burdens fall as size grows, and professional operators are easier to justify for a district plant than a single building. District systems can also balance supply and demand across uses, for example pairing residential greywater with office toilet flushing and park irrigation. On the other hand, they need new pipe networks, governance agreements and ownership models. Building-scale systems avoid those, but often suffer from inconsistent maintenance.</p>

<h3>Economics and Equity</h3>
<p>The financial case for reuse depends on water and sewer tariffs, connection fees and avoided infrastructure costs. When utilities recover fixed costs through volumetric charges, widespread reuse can shift costs onto remaining customers, including low-income households. Programs can address this through tariff design and by prioritizing reuse in public facilities. Community trust is essential; engagement and transparent monitoring help build acceptance.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify end uses, quality needs and applicable regulations.</li>
<li>Compare building-scale and district-scale options on life-cycle cost and energy.</li>
<li>Define pathogen targets, monitoring and failure response plans.</li>
<li>Assign ownership, operation and liability clearly.</li>
<li>Assess impacts on utility revenue and vulnerable customers.</li>
<li>Plan engagement and public reporting.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Decentralized Treatment, the Water-Energy Nexus and Climate Adaptation</h2>
<p>Building and district water systems are becoming active research subjects as cities seek resilience to drought, flooding and aging infrastructure. Questions center on the optimal scale of treatment, the energy and carbon implications of decentralization, public health risks within building plumbing, and how distributed systems interact with centralized utilities under climate change. This lesson surveys methods, debates and open directions.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Optimal scale:</strong> the treatment size that minimizes total cost, energy or risk once collection, treatment and distribution are counted together</li>
<li><strong>Energy intensity of reuse:</strong> the energy per unit volume required to treat and deliver reused water at a given scale and quality</li>
<li><strong>Premise plumbing:</strong> the pipes, tanks and fixtures inside buildings, where water quality can degrade after leaving the utility</li>
<li><strong>Opportunistic pathogens:</strong> microorganisms such as Legionella that grow in building water systems and mainly threaten vulnerable people</li>
<li><strong>Socio-technical transition:</strong> a long-term shift in infrastructure involving technology, institutions, users and markets together</li>
<li><strong>Hybrid systems:</strong> combinations of centralized and decentralized infrastructure designed to complement each other</li>
</ul>

<h3>The Water-Energy Nexus at Small Scale</h3>
<p>Decentralized reuse saves the energy of conveying water and wastewater long distances, but small treatment plants often use more energy per unit volume than large ones and may lack energy recovery such as biogas capture. Net effects depend on local topography, source water energy intensity and treatment level. Life-cycle studies reach different conclusions partly because of boundary choices, such as whether avoided centralized expansion is credited. Heat recovery from wastewater is another research topic, since much of the energy embedded in building water leaves as warmth down the drain.</p>

<h3>Public Health in Efficient Buildings</h3>
<p>Efficiency creates a tension: lower flows and reuse increase water age and reduce disinfectant residual, which can encourage growth of opportunistic pathogens in premise plumbing. Research examines pipe sizing for low-flow buildings, temperature management, flushing protocols and monitoring with sensors and molecular methods. Integrating water quality into efficiency standards is an active area.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Method</th><th>Use</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Stochastic demand simulation</td><td>Generating realistic fixture-level use patterns for sizing</td><td>Behavior data are limited and context specific</td></tr>
<tr><td>Life-cycle assessment</td><td>Comparing energy and emissions of system scales</td><td>Sensitive to boundaries and allocation</td></tr>
<tr><td>Quantitative microbial risk assessment</td><td>Estimating infection risk for reuse applications</td><td>Dose-response and exposure data uncertain</td></tr>
<tr><td>Urban water system models</td><td>Testing interactions of distributed and central systems</td><td>Data-intensive and hard to validate</td></tr>
</tbody>
</table>

<h3>Climate Adaptation</h3>
<p>Distributed storage and reuse can provide drought resilience and reduce stormwater peaks during intense rain, offering co-benefits for flood management. However, climate change also alters rainfall reliability, raising questions about how to size rain-based systems using historical records that may no longer represent the future. Researchers explore robust sizing under multiple climate scenarios and the role of building water systems in emergency supply.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether decentralization lowers or raises system-wide energy use and emissions.</li>
<li>How reduced flows affect the hydraulics and finances of existing sewers and utilities.</li>
<li>How to share responsibility for water quality between utilities and building owners.</li>
<li>Whether reuse at scale should be governed by public utilities or private operators.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Integrated models of optimal treatment scale under climate and demand uncertainty.</li>
<li>Low-energy decentralized treatment with resource and heat recovery.</li>
<li>Design guidance that reconciles efficiency with premise plumbing water quality.</li>
<li>Long-term monitoring data on real-world reuse system performance and reliability.</li>
<li>Governance and tariff models that keep distributed reuse equitable.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbwtq1',
      question: {
        ELEMENTARY: 'How do buildings save water?',
        MIDDLE_SCHOOL: 'What is greywater?',
        HIGH_SCHOOL: 'What does a first-flush diverter do in a rainwater system?',
        UNDERGRADUATE: 'What is net zero water?',
        GRADUATE: 'What is blackwater?',
        PHD: 'Why can water efficiency create a public health tension in premise plumbing?',
      },
      options: {
        ELEMENTARY: ['Using special toilets and taps', 'Leaving taps running', 'Taking very long showers', 'Watering plants at noon every day'],
        MIDDLE_SCHOOL: ['Gently used water from sinks, showers and laundry', 'Ocean water', 'Drinking water from a bottle', 'Water from melted snow on mountains'],
        HIGH_SCHOOL: ['Discards the dirtiest early runoff from the roof', 'Heats the rainwater', 'Sends all rain straight to the sewer', 'Adds rain to drinking water pipes'],
        UNDERGRADUATE: ['Needs met by captured rain and reuse, returning water to the same watershed', 'Using no water at all', 'Paying zero for water', 'Using unlimited municipal water'],
        GRADUATE: ['Wastewater from toilets and often kitchens', 'Clean drinking water', 'Rainwater from roofs', 'Condensate from air conditioners'],
        PHD: ['Lower flows raise water age and reduce disinfectant residual, aiding pathogen growth', 'Efficient buildings have no pipes', 'Less water always means cleaner water', 'Pathogens cannot live in buildings'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Low-flow taps and dual-flush toilets do the same job with less water.',
        MIDDLE_SCHOOL: 'Greywater comes from sinks, showers and laundry and can be treated for toilets or gardens.',
        HIGH_SCHOOL: 'The first rain washes dust and debris off the roof, so diverting it keeps the tank cleaner.',
        UNDERGRADUATE: 'Net zero water meets needs on site and keeps water within its watershed.',
        GRADUATE: 'Blackwater carries toilet waste and needs stronger treatment than greywater.',
        PHD: 'Water that sits longer loses disinfectant, which can let organisms like Legionella grow.',
      },
    },
    {
      id: 'gbwtq2',
      question: {
        ELEMENTARY: 'What does a water meter do?',
        MIDDLE_SCHOOL: 'How can a water meter reveal a leak?',
        HIGH_SCHOOL: 'What is blowdown in a cooling tower?',
        UNDERGRADUATE: 'What generally happens to blowdown as cycles of concentration increase?',
        GRADUATE: 'What does each log of reduction mean for pathogens?',
        PHD: 'Why might small decentralized plants use more energy per unit volume than large ones?',
      },
      options: {
        ELEMENTARY: ['Makes water warmer', 'Counts how much water a building uses', 'Turns water into ice', 'Paints the pipes'],
        MIDDLE_SCHOOL: ['It turns red', 'It keeps moving at night when nobody uses water', 'It stops working', 'It plays a sound when it rains'],
        HIGH_SCHOOL: ['Air blown across the roof', 'Water drained to remove built-up minerals', 'Rain falling into the tower', 'Steam from a kettle'],
        UNDERGRADUATE: ['It rises sharply', 'It falls', 'It stays exactly the same', 'It turns into evaporation'],
        GRADUATE: ['A twofold reduction', 'A tenfold reduction', 'A hundredfold increase', 'No change at all'],
        PHD: ['Small plants never treat water', 'Economies of scale are lost and energy recovery like biogas is often absent', 'They pump water across continents', 'Small plants are always solar powered'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A water meter counts water use so people can spot waste.',
        MIDDLE_SCHOOL: 'If the meter moves when no water is being used, water is escaping somewhere.',
        HIGH_SCHOOL: 'Evaporation leaves minerals behind, so some water is drained to prevent scale.',
        UNDERGRADUATE: 'Higher cycles mean water is reused longer before draining, so blowdown drops.',
        GRADUATE: 'Each log unit is a factor of ten, so three logs means a thousandfold reduction.',
        PHD: 'Large plants benefit from scale and recover energy; small ones often cannot.',
      },
    },
    {
      id: 'gbwtq3',
      question: {
        ELEMENTARY: 'Why are native plants good for saving water?',
        MIDDLE_SCHOOL: 'What does "fit for purpose" mean for water?',
        HIGH_SCHOOL: 'Why should untreated greywater not be stored for long?',
        UNDERGRADUATE: 'Why can annual water totals mislead when sizing a rain tank?',
        GRADUATE: 'Why can district water systems have an advantage over building-scale systems?',
        PHD: 'Why is sizing rain-based systems with historical records increasingly questioned?',
      },
      options: {
        ELEMENTARY: ['They drink more water than other plants', 'They need to be watered every hour', 'They are used to local weather and need less watering', 'They only grow indoors'],
        MIDDLE_SCHOOL: ['Using drinking water for everything', 'Only using water from bottles', 'Using the right quality of water for each job', 'Never reusing water'],
        HIGH_SCHOOL: ['It turns into rainwater', 'It becomes drinking water by itself', 'It can develop odors and microbial growth', 'It evaporates instantly'],
        UNDERGRADUATE: ['Rain never varies', 'Totals are always too large', 'Rain may be plentiful yearly but scarce when demand peaks', 'Tanks are sized by color'],
        GRADUATE: ['They need no pipes', 'They are never regulated', 'Economies of scale and professional operation', 'They avoid all costs'],
        PHD: ['Records are too short to read', 'Rainfall never changes', 'Climate change may make past rainfall unrepresentative of the future', 'Historical records are always too wet'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Native plants are adapted to local rain, so they need little extra water.',
        MIDDLE_SCHOOL: 'Fit for purpose means saving drinking water for drinking and using other water for jobs like flushing.',
        HIGH_SCHOOL: 'Greywater contains soap, skin cells and bacteria that can grow if stored untreated.',
        UNDERGRADUATE: 'Daily or hourly simulation reveals dry-season shortfalls that annual totals hide.',
        GRADUATE: 'Larger systems lower unit costs and make skilled operators easier to justify.',
        PHD: 'Changing rainfall patterns call for robust sizing across multiple climate scenarios.',
      },
    },
    {
      id: 'gbwtq4',
      question: {
        ELEMENTARY: 'What does a dual-flush toilet have?',
        MIDDLE_SCHOOL: 'What is a submeter?',
        HIGH_SCHOOL: 'Which big-building system can be the single largest water user on site?',
        UNDERGRADUATE: 'Why should demand reduction come before alternative water systems?',
        GRADUATE: 'What is cross-connection control?',
        PHD: 'What does quantitative microbial risk assessment estimate?',
      },
      options: {
        ELEMENTARY: ['A built-in radio', 'A heater for the seat', 'A light that flashes', 'A small flush button and a big flush button'],
        MIDDLE_SCHOOL: ['A very small toilet', 'A water filter', 'A type of tap', 'An extra meter that measures water in one area'],
        HIGH_SCHOOL: ['Light switches', 'Elevators', 'Fire alarms', 'A cooling tower'],
        UNDERGRADUATE: ['Alternative systems are illegal', 'Fixtures cannot be changed later', 'Rain is unreliable everywhere', 'Each liter avoided shrinks the tanks and treatment needed'],
        GRADUATE: ['Connecting more buildings to the sewer', 'Mixing rainwater with drinking water', 'Linking cooling towers together', 'Preventing non-potable water from entering drinking water pipes'],
        PHD: ['The price of water', 'The weight of pipes', 'Building energy use', 'Infection risk for people exposed to reused water'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'You can choose the small flush when you need less water.',
        MIDDLE_SCHOOL: 'Submeters show where water goes, such as the kitchen or garden.',
        HIGH_SCHOOL: 'Cooling towers evaporate large amounts of water, especially in hot weather.',
        UNDERGRADUATE: 'Efficiency first makes expensive reuse systems smaller and cheaper.',
        GRADUATE: 'Backflow prevention and separate piping keep drinking water safe.',
        PHD: 'QMRA combines exposure and dose-response data to estimate infection risk.',
      },
    },
    {
      id: 'gbwtq5',
      question: {
        ELEMENTARY: 'When is a good time to water plants?',
        MIDDLE_SCHOOL: 'What is the first step in saving water in a building?',
        HIGH_SCHOOL: 'What is condensate recovery?',
        UNDERGRADUATE: 'What is water age?',
        GRADUATE: 'Why can widespread reuse shift costs onto other utility customers?',
        PHD: 'What is a hybrid water system?',
      },
      options: {
        ELEMENTARY: ['Early morning, when less water dries up', 'Noon, when the sun is hottest', 'During a rainstorm', 'Never'],
        MIDDLE_SCHOOL: ['Find and stop wasted water', 'Build a giant tank', 'Buy bottled water', 'Paint the pipes blue'],
        HIGH_SCHOOL: ['Capturing water that drips from air conditioning coils', 'Melting ice for drinking', 'Boiling water for tea', 'Draining a swimming pool'],
        UNDERGRADUATE: ['The time water sits in pipes and tanks before use', 'How old the building is', 'The age of the plumber', 'The year a dam was built'],
        GRADUATE: ['Fixed costs recovered through volumetric charges fall on fewer billed units', 'Reuse makes water free for everyone', 'Utilities have no fixed costs', 'Reuse always lowers all bills equally'],
        PHD: ['A combination of centralized and decentralized infrastructure designed to complement each other', 'A car that runs on water', 'A system using only rain', 'A pipe made of two metals'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Morning watering means less water is lost to the hot sun.',
        MIDDLE_SCHOOL: 'The cheapest water is the water you never waste, so fixing leaks comes first.',
        HIGH_SCHOOL: 'Air conditioners pull moisture from air, and that water can be reused, for example in cooling towers.',
        UNDERGRADUATE: 'Older water can lose disinfectant and develop quality problems.',
        GRADUATE: 'If fewer units are sold, utilities may raise rates, which can burden low-income households.',
        PHD: 'Hybrid systems mix central and distributed infrastructure to improve resilience and efficiency.',
      },
    },
  ],
}

export default expansion
