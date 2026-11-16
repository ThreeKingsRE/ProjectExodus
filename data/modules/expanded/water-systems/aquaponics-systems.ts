import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'aquaponics-systems',
  lessons: [
    {
      id: 'ws-ap-1',
      title: 'Fish Feed Plants!',
      content: {
        ELEMENTARY: `
<h2>Fish and Plants: A Super Team</h2>
<p>Imagine a garden where fish help the plants grow, and the plants help keep the water clean for the fish. It sounds like magic, but it is real! This kind of garden is called <em>aquaponics</em>. Let's find out how it works.</p>

<h3>How the Team Works</h3>
<p>In an aquaponics garden, fish swim in a tank of water. Fish eat food, and then they make waste, just like all animals do. Fish waste would make the water dirty and unhealthy for the fish. But a pump moves that water up to the plants. The plants use the waste as food, and the cleaner water flows back to the fish. Round and round it goes!</p>
<ul>
<li><strong>Aquaponics:</strong> a way of growing fish and plants together so they help each other</li>
<li><strong>Fish tank:</strong> the big container of water where the fish live and swim</li>
<li><strong>Grow bed:</strong> the place above or beside the tank where the plants grow their roots</li>
<li><strong>Pump:</strong> a machine that pushes water from the fish tank up to the plants</li>
<li><strong>Bacteria:</strong> tiny living helpers, too small to see, that change fish waste into plant food</li>
</ul>

<h3>The Tiny Helpers</h3>
<p>There is a secret third member of the team: bacteria! These tiny living things live on rocks, pipes and roots. They change the fish waste into a kind of food that plant roots can drink up. Without them, the system would not work.</p>

<h3>No Soil Needed</h3>
<p>Plants in aquaponics do not grow in dirt. Their roots sit in water or in little clay pebbles. Lettuce, basil, mint and spinach love growing this way. Some people even grow tomatoes and strawberries!</p>

<h3>Why It Is Good for the Earth</h3>
<ol>
<li>It uses much less water than a normal garden, because the water goes round and round.</li>
<li>It makes two kinds of food at once: vegetables and fish.</li>
<li>It can fit in small places, like a classroom, a balcony or a rooftop.</li>
</ol>

<h3>Try It Yourself</h3>
<p>Some classrooms keep a small tank with goldfish and a tray of herbs on top. If your class tries this, you can take turns feeding the fish a little bit, checking that the plants look green and healthy, and watching the roots grow. Remember: never overfeed fish, because extra food makes the water dirty. Fish and plants really are a super team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Aquaponics: Fish Farming Meets Plant Growing</h2>
<p>Aquaponics joins two ways of producing food. <em>Aquaculture</em> is raising fish or other water animals. <em>Hydroponics</em> is growing plants without soil, with their roots in nutrient-rich water. Put them together and you get a loop where fish waste feeds plants and plants clean the water for the fish.</p>

<h3>The Problem Aquaponics Solves</h3>
<p>In a normal fish farm, fish waste builds up in the water. Fish release a chemical called ammonia through their gills and waste. Too much ammonia is poisonous to fish, so farmers must replace water often. In normal hydroponics, growers must buy fertilizer to feed their plants. Aquaponics turns one system's waste into the other system's food.</p>

<h3>The Nitrogen Cycle in a Tank</h3>
<ol>
<li>Fish eat food that contains protein.</li>
<li>Fish release ammonia into the water.</li>
<li>One group of nitrifying bacteria changes ammonia into nitrite, which is still harmful.</li>
<li>A second group of bacteria changes nitrite into nitrate, which is much safer for fish.</li>
<li>Plant roots absorb nitrate as food, cleaning the water.</li>
<li>Clean water returns to the fish tank.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Aquaculture:</strong> raising fish, shellfish or other water animals for food</li>
<li><strong>Hydroponics:</strong> growing plants without soil, with roots fed by water containing nutrients</li>
<li><strong>Ammonia:</strong> a nitrogen chemical released by fish that is toxic when it builds up</li>
<li><strong>Nitrifying bacteria:</strong> helpful microbes that turn ammonia into nitrite and then nitrate</li>
<li><strong>Nitrate:</strong> a form of nitrogen that plants absorb easily and fish can tolerate</li>
<li><strong>Biofilter:</strong> a surface with lots of area where nitrifying bacteria can live and work</li>
</ul>

<h3>Three Ways to Build It</h3>
<table>
<thead><tr><th>System type</th><th>How plants grow</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Media bed</td><td>Roots in gravel or clay pebbles that also filter water</td><td>Beginners, schools, many crop types</td></tr>
<tr><td>Deep water culture (rafts)</td><td>Plants float on foam rafts with roots hanging in water</td><td>Lettuce and leafy greens</td></tr>
<tr><td>Nutrient film technique</td><td>A thin stream of water flows through narrow channels</td><td>Small, light plants such as herbs</td></tr>
</tbody>
</table>

<h3>Keeping Everyone Healthy</h3>
<p>Fish, plants and bacteria all need slightly different conditions, so growers look for a balance. They test the water for ammonia, nitrite, nitrate and pH. They make sure the water has plenty of oxygen by using air pumps. Popular fish include tilapia in warm water and trout in cool water. A new system needs several weeks to "cycle," meaning the bacteria colonies grow large enough to handle the fish waste.</p>

<h3>Why It Matters</h3>
<p>Because water is recirculated, aquaponics uses far less water than growing in soil. It can produce fresh food in cities, deserts and places with poor soil. It does need electricity for pumps and careful daily attention, so it is not effortless.</p>
`,
        HIGH_SCHOOL: `
<h2>Aquaponics: Chemistry, Biology and System Design</h2>
<p>Aquaponics is a recirculating food production system that links fish, nitrifying bacteria and plants. Each part depends on the others: fish supply nutrients, bacteria convert those nutrients into usable forms, and plants remove them so the water stays safe for fish. Running a healthy system means managing a small ecosystem, which makes aquaponics an excellent window into the nitrogen cycle and water chemistry.</p>

<h3>The Nitrogen Cycle Step by Step</h3>
<p>Fish feed is rich in protein, which contains nitrogen. Fish excrete most of their nitrogenous waste as ammonia, mainly through their gills. Ammonia exists in water in two forms: un-ionized ammonia (NH3), which is highly toxic, and ammonium (NH4+), which is much less toxic. Higher pH and temperature shift the balance toward the toxic form.</p>
<ul>
<li><strong>Nitrification:</strong> the two-step bacterial process that oxidizes ammonia to nitrite and then nitrite to nitrate</li>
<li><strong>Ammonia-oxidizing bacteria:</strong> microbes such as Nitrosomonas that convert ammonia into nitrite</li>
<li><strong>Nitrite-oxidizing bacteria:</strong> microbes such as Nitrobacter and Nitrospira that convert nitrite into nitrate</li>
<li><strong>Nitrate:</strong> the end product of nitrification and the main nitrogen source plants absorb in aquaponics</li>
<li><strong>Dissolved oxygen:</strong> oxygen gas mixed into water, needed by fish, roots and nitrifying bacteria alike</li>
<li><strong>Cycling:</strong> the start-up period of several weeks during which bacterial colonies become established</li>
</ul>

<h3>Comparing System Designs</h3>
<table>
<thead><tr><th>Design</th><th>Strengths</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Media bed</td><td>Combines filtration, biofiltration and growing; simple</td><td>Heavy; can clog with solids if overloaded</td></tr>
<tr><td>Deep water culture</td><td>Large water volume buffers changes; high leafy green yields</td><td>Needs separate solids filter and aeration</td></tr>
<tr><td>Nutrient film technique</td><td>Uses little water in the grow area; light structures</td><td>Small water volume; vulnerable to pump failure</td></tr>
<tr><td>Decoupled (multi-loop)</td><td>Fish and plant loops tuned separately</td><td>More equipment and complexity</td></tr>
</tbody>
</table>

<h3>The pH Compromise</h3>
<p>Each organism prefers different conditions. Many plants absorb nutrients best in slightly acidic water. Nitrifying bacteria work best in neutral to slightly alkaline water. Most farmed fish tolerate a fairly wide range. Growers therefore aim for a compromise near neutral. Because nitrification naturally produces acid, pH slowly drifts downward, and growers add buffers such as calcium or potassium carbonates or hydroxides, which also supply useful nutrients.</p>

<h3>Nutrient Gaps</h3>
<p>Fish feed does not supply every plant nutrient in the right amount. Iron, potassium and calcium are commonly deficient, so many growers add chelated iron and use potassium- or calcium-based buffers. Yellowing leaves are a common sign that something is missing.</p>

<h3>Real-World Applications and Limits</h3>
<ol>
<li><strong>Water savings:</strong> recirculation means only water lost to evaporation and plant transpiration must be replaced.</li>
<li><strong>Urban food:</strong> rooftop and warehouse farms grow greens close to customers.</li>
<li><strong>Education:</strong> classroom systems teach biology, chemistry and engineering together.</li>
<li><strong>Limits:</strong> systems depend on electricity, daily monitoring and skilled management, and a single pump failure can harm fish within hours.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Designing and Evaluating Aquaponic Systems</h2>
<p>From an engineering perspective, an aquaponic system is a set of coupled mass balances. Feed enters the system, a portion becomes fish biomass, a portion becomes dissolved and solid waste, and plants, microbes and water exchange remove the rest. Good design matches the rate at which nutrients are produced with the rate at which they are removed, while keeping water quality within limits for every organism. This lesson develops the core design logic and asks whether aquaponics makes economic sense.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Feed rate ratio:</strong> the daily mass of fish feed per unit of plant growing area, the main sizing parameter for balancing fish and plants</li>
<li><strong>Feed conversion ratio:</strong> the mass of feed required to produce one unit of fish weight gain</li>
<li><strong>Stocking density:</strong> the mass of fish held per unit volume of tank water</li>
<li><strong>Hydraulic retention time:</strong> the average time water spends in a given component before moving on</li>
<li><strong>Mineralization:</strong> the microbial breakdown of solid organic waste that releases nutrients back into the water</li>
<li><strong>Coupled system:</strong> a single water loop shared by fish and plants, in contrast to a decoupled system with separate loops</li>
</ul>

<h3>Balancing Fish and Plants</h3>
<p>Because fish waste is ultimately a function of what fish eat, design guidelines express balance as a feed rate ratio rather than a ratio of tank volume to bed area. The logic is straightforward: nutrient supply scales with feed, and nutrient demand scales with plant area and crop type. Leafy greens need less nitrogen per square meter than fruiting crops such as tomatoes or peppers, so fruiting systems need a higher feed rate per unit area. Growers verify balance empirically: steadily rising nitrate suggests too many fish for the plant area, while falling nitrate and nutrient deficiencies suggest too few.</p>

<h3>Component Functions</h3>
<table>
<thead><tr><th>Component</th><th>Function</th><th>Design consideration</th></tr></thead>
<tbody>
<tr><td>Fish tank</td><td>Holds fish; first stage of nutrient production</td><td>Stocking density, aeration, solids flushing</td></tr>
<tr><td>Solids removal</td><td>Clarifiers or swirl filters capture uneaten feed and feces</td><td>Too little removal clogs roots; too much loses nutrients</td></tr>
<tr><td>Biofilter</td><td>Hosts nitrifying bacteria on high-surface-area media</td><td>Sized to ammonia load; needs oxygen</td></tr>
<tr><td>Plant units</td><td>Nutrient uptake and crop production</td><td>Area set by feed rate ratio and crop choice</td></tr>
<tr><td>Sump and pump</td><td>Returns water; sets circulation rate</td><td>Redundancy and backup power reduce risk</td></tr>
</tbody>
</table>

<h3>Mass Balance Reasoning</h3>
<p>Only a minority of the nitrogen in feed is retained in fish flesh; most is excreted. Of the excreted nitrogen, some is taken up by plants, some is lost as gas through denitrification in low-oxygen pockets, some accumulates in sludge, and some leaves with water exchange. Improving nutrient use efficiency therefore means recovering more nutrients from solids, for example by mineralizing sludge in a separate reactor and returning the liquid to the plants.</p>

<h3>Economic Viability</h3>
<p>Aquaponics produces two products, but it also carries the costs of two enterprises. Energy for pumping, aeration and, in many climates, heating or lighting is a major operating cost. Labor is substantial because the system needs daily monitoring. Revenue depends on premium markets for fresh, local produce; fish are often a smaller revenue stream than vegetables. Many small operations earn additional income from education, tours or training.</p>

<h3>Design Checklist</h3>
<ol>
<li>Choose crops and fish species suited to the same temperature range.</li>
<li>Estimate daily feed input from target fish biomass and feeding rate.</li>
<li>Size plant area using a feed rate ratio appropriate to the crop type.</li>
<li>Size solids removal and biofiltration to the feed load.</li>
<li>Plan aeration redundancy and backup power.</li>
<li>Build a budget that includes energy, labor, feed and marketing, and test it against realistic prices.</li>
</ol>
`,
        GRADUATE: `
<h2>Commercial Aquaponics: Production, Safety and Integration</h2>
<p>Aquaponics has attracted strong interest as a resource-efficient, urban-compatible food system, yet commercial operations have a mixed track record. At the graduate level the questions shift from how a system works to whether it can operate reliably, safely and profitably at scale, and how it fits into broader food, water and waste systems. This lesson examines production strategy, food safety governance, economic barriers and integration with other sectors.</p>

<h3>Production Strategy</h3>
<ul>
<li><strong>Decoupled aquaponics:</strong> a configuration in which fish and plant loops are separated so each can be kept at its own optimal conditions</li>
<li><strong>Nutrient supplementation:</strong> adding minerals that fish feed under-supplies, such as iron, potassium and calcium, to reach commercial yields</li>
<li><strong>Controlled environment agriculture:</strong> crop production in greenhouses or indoor facilities where climate and light are managed</li>
<li><strong>Good agricultural practices:</strong> standardized procedures that reduce contamination risks during growing, harvesting and handling</li>
<li><strong>Industrial symbiosis:</strong> an arrangement in which waste heat, water or nutrients from one operation become inputs for another</li>
</ul>
<p>Many commercial growers have moved toward decoupled designs. Running the plant loop at a lower pH with supplemental nutrients raises plant productivity, while the fish loop stays near the conditions that favor fish health and nitrification. The trade-off is greater capital cost and system complexity, and some argue that heavy supplementation erodes the closed-loop narrative that underpins consumer appeal.</p>

<h3>Food Safety and Regulation</h3>
<p>Aquaponic produce is grown in water that has contacted fish waste, which raises legitimate food safety questions. Fish are cold-blooded and are generally considered lower-risk carriers of many human pathogens than warm-blooded livestock, but contamination can enter through birds, rodents, workers, source water or contaminated feed. Risk management focuses on preventing water from touching edible plant parts where possible, excluding animals, hygiene protocols, water testing and traceability. Regulatory treatment varies between jurisdictions: aquaponic farms may fall under both aquaculture and produce rules, and whether soilless production can be certified organic has been debated in several countries.</p>

<h3>Why Profitability Is Hard</h3>
<table>
<thead><tr><th>Barrier</th><th>Mechanism</th><th>Possible response</th></tr></thead>
<tbody>
<tr><td>Energy cost</td><td>Pumping, aeration, heating and lighting run continuously</td><td>Efficient equipment, waste heat, passive solar greenhouses</td></tr>
<tr><td>Labor and skills</td><td>Managing fish, plants and microbes requires broad expertise</td><td>Automation, training, standard operating procedures</td></tr>
<tr><td>Market access</td><td>Price premiums depend on specific buyers and branding</td><td>Direct sales, contracts with restaurants and institutions</td></tr>
<tr><td>Biological risk</td><td>Disease or equipment failure can affect both product lines</td><td>Redundancy, biosecurity, insurance, decoupling</td></tr>
<tr><td>Scale mismatch</td><td>Fish and vegetable markets have different volumes and prices</td><td>Crop and species selection based on market analysis</td></tr>
</tbody>
</table>

<h3>Integration With Wider Systems</h3>
<p>The strongest commercial cases often come from integration rather than stand-alone farms. Greenhouses can use waste heat from industrial facilities or data centers. Sludge can be mineralized into liquid fertilizer or digested for biogas. Urban farms can partner with schools, food banks and workforce programs, generating social value that grants or municipal partners may support. Policy makers interested in urban food resilience must weigh these co-benefits against high costs per unit of food compared with field agriculture.</p>

<h3>Evaluation Framework</h3>
<ol>
<li><strong>Productivity:</strong> yield per unit area, per unit feed and per unit energy.</li>
<li><strong>Resource efficiency:</strong> water and nutrient use efficiency compared with alternatives.</li>
<li><strong>Financial viability:</strong> operating margins, payback period and sensitivity to energy and produce prices.</li>
<li><strong>Safety and compliance:</strong> documented food safety plans and testing results.</li>
<li><strong>Social value:</strong> local food access, education and employment, measured honestly rather than assumed.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Aquaponic Nutrient Dynamics and Microbial Ecology</h2>
<p>Aquaponic systems are engineered ecosystems in which fish, plants and diverse microbial communities interact through shared water chemistry. Research has moved beyond proof-of-concept toward understanding nutrient flows at fine resolution, characterizing the microbiome and optimizing systems that are inherently multi-objective. This lesson surveys the main research frontiers, the methods used to study them and the questions that remain unresolved.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Nutrient use efficiency:</strong> the fraction of nutrients entering as feed that is recovered in fish and plant biomass</li>
<li><strong>Comammox:</strong> complete ammonia oxidation by single Nitrospira organisms that carry out both steps of nitrification</li>
<li><strong>Denitrification:</strong> the microbial reduction of nitrate to nitrogen gases in low-oxygen zones, a loss pathway for nitrogen</li>
<li><strong>Rhizosphere microbiome:</strong> the community of microbes living on and around plant roots that can influence growth and disease</li>
<li><strong>Metagenomics:</strong> sequencing genetic material from a whole community to identify organisms and their functional genes</li>
<li><strong>Multi-objective optimization:</strong> finding designs that balance competing goals such as yield, cost, energy and nutrient recovery</li>
</ul>

<h3>Nutrient Dynamics</h3>
<p>Mass balance studies consistently show that a substantial portion of feed nitrogen and phosphorus is not recovered in harvested biomass. Phosphorus tends to accumulate in solids, while nitrogen can be lost through denitrification, which may also release nitrous oxide, a potent greenhouse gas. Research questions include how solids treatment such as aerobic or anaerobic mineralization changes nutrient availability, how micronutrients partition between water, sludge and biomass, and how feed formulation could be redesigned to suit both fish and plants. Isotope tracing and detailed budgets at the component level are important tools.</p>

<h3>Microbial Communities</h3>
<p>Early descriptions credited nitrification to Nitrosomonas and Nitrobacter, but sequencing-based studies of recirculating systems often find Nitrospira and other taxa prominent, and the discovery of comammox organisms has complicated the classic two-step picture. Beyond nitrifiers, heterotrophic bacteria break down organic matter, and root-associated microbes may promote plant growth or suppress pathogens. Key open questions concern how stable these communities are, what drives their assembly during start-up, and whether they can be steered through inoculation or management.</p>

<h3>Methods and Their Limits</h3>
<table>
<thead><tr><th>Method</th><th>What it reveals</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Amplicon sequencing</td><td>Community composition</td><td>Presence does not prove activity</td></tr>
<tr><td>Metagenomics and metatranscriptomics</td><td>Functional potential and gene expression</td><td>Costly; links to process rates remain indirect</td></tr>
<tr><td>Component mass balances</td><td>Where nutrients go</td><td>Sensitive to sampling error and unmeasured losses</td></tr>
<tr><td>Dynamic process models</td><td>System behavior over time and under scenarios</td><td>Parameters often uncertain or system-specific</td></tr>
<tr><td>Life-cycle assessment</td><td>Environmental footprint across the supply chain</td><td>Results hinge on boundaries and energy source assumptions</td></tr>
</tbody>
</table>

<h3>System Optimization</h3>
<p>Optimization research uses dynamic models of fish growth, nutrient release, nitrification and plant uptake to explore designs and operating strategies. Decoupled and multi-loop configurations, sludge digesters and controllable nutrient dosing expand the design space but make modeling harder. Sensor-based control of pH, oxygen and nutrients is an active area, as is integration with renewable energy and waste heat.</p>

<h3>Contested Questions</h3>
<ul>
<li>Is aquaponics more resource-efficient than separate recirculating aquaculture plus hydroponics when supplementation and energy are counted?</li>
<li>How should life-cycle studies treat electricity sources, infrastructure and feed ingredients, which often dominate impacts?</li>
<li>Do root-zone microbes in aquaponics reliably suppress disease, or are reported benefits system-specific?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized reporting of nutrient budgets so studies can be compared.</li>
<li>Quantifying nitrous oxide emissions and strategies to minimize them.</li>
<li>Linking microbial community data to measurable process rates and plant outcomes.</li>
<li>Feed formulations designed for nutrient recovery as well as fish growth.</li>
<li>Techno-economic models validated against real commercial operating data.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wapq1',
      question: {
        ELEMENTARY: 'What do fish give to the plants in aquaponics?',
        MIDDLE_SCHOOL: 'Which helpers turn ammonia into nitrite and then nitrate?',
        HIGH_SCHOOL: 'What is the main form of nitrogen that plants absorb in aquaponics?',
        UNDERGRADUATE: 'Why is fish-plant balance usually expressed as a feed rate ratio?',
        GRADUATE: 'Why have many commercial growers moved toward decoupled systems?',
        PHD: 'How has the discovery of comammox changed the picture of nitrification?',
      },
      options: {
        ELEMENTARY: ['Plant food from their waste', 'Sunlight', 'Soil', 'Seeds'],
        MIDDLE_SCHOOL: ['Nitrifying bacteria', 'Fish scales', 'Plant leaves', 'Air bubbles'],
        HIGH_SCHOOL: ['Nitrate', 'Un-ionized ammonia', 'Nitrogen gas', 'Whole proteins'],
        UNDERGRADUATE: ['Because nutrient supply scales with the feed fish eat', 'Because tank color controls nutrient levels', 'Because fish species alone determines plant area', 'Because plant area does not matter'],
        GRADUATE: ['Each loop can be kept at its own optimal conditions', 'Decoupled systems need no equipment', 'Decoupling removes all food safety rules', 'Fish grow without feed in decoupled systems'],
        PHD: ['Single Nitrospira organisms can perform both steps of nitrification', 'It showed nitrification does not occur in aquaponics', 'It proved Nitrobacter oxidizes ammonia directly to nitrogen gas', 'It showed plants carry out nitrification themselves'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fish waste is changed by tiny bacteria into food the plants can use to grow.',
        MIDDLE_SCHOOL: 'Nitrifying bacteria change toxic ammonia into nitrite and then into nitrate, which plants absorb.',
        HIGH_SCHOOL: 'Nitrification ends with nitrate, which is the main nitrogen source taken up by plant roots.',
        UNDERGRADUATE: 'Fish waste depends on what fish eat, so matching daily feed to plant area balances supply and demand.',
        GRADUATE: 'Separate loops let plants run at a lower pH with supplements while fish stay at their preferred conditions.',
        PHD: 'Comammox Nitrospira oxidize ammonia all the way to nitrate, complicating the classic two-group model.',
      },
    },
    {
      id: 'wapq2',
      question: {
        ELEMENTARY: 'Why does aquaponics use less water than a normal garden?',
        MIDDLE_SCHOOL: 'Which system type grows plants on floating foam rafts?',
        HIGH_SCHOOL: 'Why does pH in an aquaponic system slowly drift downward?',
        UNDERGRADUATE: 'What happens to most of the nitrogen in fish feed?',
        GRADUATE: 'Which is a common way contamination can enter an aquaponic farm?',
        PHD: 'Which nutrient tends to accumulate in solids in aquaponic systems?',
      },
      options: {
        ELEMENTARY: ['The fish drink all the water', 'The water goes round and round', 'Plants do not need water', 'It only rains on aquaponics'],
        MIDDLE_SCHOOL: ['Media bed', 'Deep water culture', 'Nutrient film technique', 'Soil garden'],
        HIGH_SCHOOL: ['Plants release salt', 'Nitrification produces acid', 'Fish add lime to the water', 'Evaporation adds acid'],
        UNDERGRADUATE: ['It is all stored in fish flesh', 'It is excreted, with only a minority retained in fish', 'It disappears instantly', 'It turns into phosphorus'],
        GRADUATE: ['Birds, rodents, workers or source water', 'Sunlight on the greenhouse', 'Using chelated iron', 'Testing the water too often'],
        PHD: ['Oxygen', 'Phosphorus', 'Hydrogen', 'Argon'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The same water flows from the fish to the plants and back again, so little is wasted.',
        MIDDLE_SCHOOL: 'In deep water culture, plants float on rafts with their roots hanging in the water.',
        HIGH_SCHOOL: 'Nitrification releases acid, so growers add buffers to keep pH near neutral.',
        UNDERGRADUATE: 'Fish retain only part of the nitrogen they eat; the rest is excreted and must be removed or recovered.',
        GRADUATE: 'Fish are lower-risk carriers, but animals, people and source water can still introduce pathogens.',
        PHD: 'Phosphorus largely partitions into sludge, which is why solids mineralization matters for recovery.',
      },
    },
    {
      id: 'wapq3',
      question: {
        ELEMENTARY: 'What can happen if you give fish too much food?',
        MIDDLE_SCHOOL: 'What does it mean when a new system needs to "cycle"?',
        HIGH_SCHOOL: 'Which nutrients are commonly lacking in aquaponics and often added?',
        UNDERGRADUATE: 'What does steadily rising nitrate usually suggest?',
        GRADUATE: 'Which is typically a major operating cost in commercial aquaponics?',
        PHD: 'What is a key limitation of amplicon sequencing for studying aquaponic microbes?',
      },
      options: {
        ELEMENTARY: ['The plants turn blue', 'The fish learn to fly', 'The extra food makes the water dirty', 'Nothing happens at all'],
        MIDDLE_SCHOOL: ['The pump spins in circles', 'The fish swim in circles', 'Bacteria colonies grow big enough to handle fish waste', 'Water is replaced every hour'],
        HIGH_SCHOOL: ['Nitrogen and oxygen', 'Sodium and chloride', 'Iron, potassium and calcium', 'Carbon and hydrogen'],
        UNDERGRADUATE: ['Too few fish for the plant area', 'The biofilter has stopped working entirely', 'Too many fish for the plant area', 'The plants are absorbing too much'],
        GRADUATE: ['Seeds', 'Paint for the tanks', 'Energy for pumping, aeration, heating or lighting', 'Packaging only'],
        PHD: ['It cannot identify any organisms', 'It is only used on soil', 'Presence of an organism does not prove it is active', 'It measures nutrient concentrations directly'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Uneaten food rots in the water and makes it unhealthy for the fish.',
        MIDDLE_SCHOOL: 'Cycling takes several weeks while nitrifying bacteria become established.',
        HIGH_SCHOOL: 'Fish feed under-supplies iron, potassium and calcium, so growers add chelated iron and mineral buffers.',
        UNDERGRADUATE: 'If nitrate keeps rising, fish are producing more nutrients than the plants can take up.',
        GRADUATE: 'Pumps and aerators run continuously, and heating or lighting adds more energy cost in many climates.',
        PHD: 'Amplicon data show who is there, but activity and process rates need other methods.',
      },
    },
    {
      id: 'wapq4',
      question: {
        ELEMENTARY: 'Which plant grows well in aquaponics?',
        MIDDLE_SCHOOL: 'Why do growers use air pumps in aquaponics?',
        HIGH_SCHOOL: 'Which form of ammonia is most toxic to fish?',
        UNDERGRADUATE: 'Why does a fruiting crop system need a higher feed rate ratio than a leafy green system?',
        GRADUATE: 'What is industrial symbiosis in the aquaponics context?',
        PHD: 'Why is nitrous oxide a concern in aquaponic nutrient research?',
      },
      options: {
        ELEMENTARY: ['Lettuce', 'Giant oak trees', 'Cactus in sand', 'Mushrooms on logs'],
        MIDDLE_SCHOOL: ['To make the water colder', 'To keep plenty of oxygen in the water', 'To remove nitrate', 'To feed the fish'],
        HIGH_SCHOOL: ['Un-ionized ammonia (NH3)', 'Ammonium (NH4+)', 'Nitrate', 'Nitrogen gas'],
        UNDERGRADUATE: ['Fruiting crops need more nitrogen per square meter', 'Fruiting crops need no nutrients', 'Leafy greens need more nitrogen', 'Fruiting crops grow without roots'],
        GRADUATE: ['Using waste heat, water or nutrients from one operation in another', 'Keeping fish and plants in separate countries', 'Using only manual labor', 'Banning greenhouse production'],
        PHD: ['It can be released during denitrification and is a potent greenhouse gas', 'It is the main plant nutrient', 'It increases fish growth', 'It is the same as nitrate'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Leafy plants like lettuce, basil and spinach love growing in aquaponics.',
        MIDDLE_SCHOOL: 'Fish, plant roots and bacteria all need oxygen, so air pumps keep the water oxygen-rich.',
        HIGH_SCHOOL: 'Un-ionized ammonia is highly toxic, and higher pH and temperature increase its share.',
        UNDERGRADUATE: 'Fruiting crops demand more nutrients per unit area, so more feed is needed to supply them.',
        GRADUATE: 'For example, a greenhouse can use waste heat from a nearby facility, lowering energy costs.',
        PHD: 'Low-oxygen zones can produce nitrous oxide, adding to the climate footprint and losing nitrogen.',
      },
    },
    {
      id: 'wapq5',
      question: {
        ELEMENTARY: 'Where do plant roots grow in aquaponics?',
        MIDDLE_SCHOOL: 'What two kinds of farming does aquaponics combine?',
        HIGH_SCHOOL: 'What is a major risk of nutrient film technique systems?',
        UNDERGRADUATE: 'What is mineralization?',
        GRADUATE: 'Why should social benefits of urban aquaponics be measured rather than assumed?',
        PHD: 'Why do life-cycle assessments of aquaponics often disagree?',
      },
      options: {
        ELEMENTARY: ['In a pile of sand on the floor', 'In the clouds', 'In the fish', 'In water or clay pebbles'],
        MIDDLE_SCHOOL: ['Cattle ranching and wheat farming', 'Beekeeping and orchards', 'Forestry and mining', 'Aquaculture and hydroponics'],
        HIGH_SCHOOL: ['Too much water in the grow channels', 'Plants grow too slowly to harvest', 'Fish escape into the channels', 'A small water volume makes pump failure dangerous'],
        UNDERGRADUATE: ['Adding minerals from a bag', 'Freezing the water', 'Filtering out all bacteria', 'Microbes breaking down solid waste to release nutrients'],
        GRADUATE: ['They are always zero', 'Regulators forbid measuring them', 'They cannot exist', 'Claimed benefits may justify support, so they need honest evidence'],
        PHD: ['All studies use identical systems', 'Fish never eat feed', 'Plants do not use energy', 'Results depend on boundaries, energy sources and feed assumptions'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Aquaponic plants grow without soil; their roots sit in water or small clay pebbles.',
        MIDDLE_SCHOOL: 'Aquaponics combines aquaculture (raising fish) and hydroponics (growing plants without soil).',
        HIGH_SCHOOL: 'NFT channels hold little water, so roots can dry out quickly if the pump stops.',
        UNDERGRADUATE: 'Mineralization releases nutrients from solids so plants can use them.',
        GRADUATE: 'Grants and partnerships often rely on social value claims, so evaluation should measure them honestly.',
        PHD: 'Electricity source, infrastructure and feed ingredients often dominate impacts, so boundary choices shift results.',
      },
    },
  ],
}

export default expansion
