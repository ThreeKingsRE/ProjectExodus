import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'green-infrastructure',
  lessons: [
    {
      id: 'ws-gi-1',
      title: 'Nature Helps Manage Water',
      content: {
        ELEMENTARY: `
<h2>Plants Are Water Helpers!</h2>
<p>When rain falls on a forest, most of it soaks slowly into the soft ground. But when rain falls on a road or a roof, it cannot soak in. It rushes away fast, picking up dirt and trash on the way. Green infrastructure is a big name for a simple idea: using plants and soil in towns to help rainwater soak in, just like in a forest.</p>

<h3>Hard Places and Soft Places</h3>
<p>Roads, parking lots and roofs are hard. Water slides right off them. Grass, gardens and trees are soft. Their roots make little tunnels in the soil so water can sink in. Towns with more soft places have fewer big puddles and cleaner streams.</p>
<ul>
<li><strong>Runoff:</strong> rainwater that flows over the ground instead of soaking in</li>
<li><strong>Roots:</strong> the parts of a plant under the ground that drink water and hold soil together</li>
<li><strong>Soil:</strong> the soft dirt where plants grow and where rainwater can soak in and get cleaner</li>
</ul>

<h3>Cool Green Helpers</h3>
<p>People build special green places to catch rain:</p>
<ul>
<li><strong>Rain garden:</strong> a small, low garden with tough plants that catches rain from roofs and sidewalks</li>
<li><strong>Green roof:</strong> a roof covered with soil and plants that soaks up rain like a sponge</li>
<li><strong>Street tree:</strong> a tree planted along the road whose leaves catch raindrops and whose roots drink water</li>
</ul>
<p>These helpers also give birds and butterflies a home, make streets shady and cool, and look beautiful.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Help plant a tree or flowers at home or at school.</li>
<li>Point a roof downspout onto grass instead of the driveway, with a grown-up's help.</li>
<li>Pick up litter so rain does not wash it into streams.</li>
<li>Watch where water goes the next time it rains. Does it soak in or run away?</li>
</ol>

<h3>Think About It</h3>
<p>A town can be a little bit like a forest. Every garden, tree and patch of grass helps rain soak into the ground, where it gets cleaner and helps plants grow. Nature is a great helper!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Rain Gardens, Green Roofs and Natural Water Management</h2>
<p>In a natural landscape, only a small share of rain becomes runoff. Most of it soaks into the ground or is taken up by plants and returned to the air. When towns cover land with roads, roofs and parking lots, much more rain becomes runoff. That water flows fast into storm drains, carrying pollution and causing floods. Green infrastructure uses plants, soil and natural processes to slow, soak up and clean that water close to where it falls.</p>

<h3>How It Works</h3>
<p>Green infrastructure does three main jobs:</p>
<ol>
<li><strong>Slow it down:</strong> plants and rough surfaces reduce how fast water flows.</li>
<li><strong>Soak it in:</strong> soil lets water infiltrate down toward groundwater.</li>
<li><strong>Clean it up:</strong> soil particles, roots and microbes trap and break down pollutants.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Impervious surface:</strong> a hard surface like concrete or asphalt that water cannot soak through</li>
<li><strong>Infiltration:</strong> water soaking down into the soil</li>
<li><strong>Bioswale:</strong> a shallow, planted channel that slows and filters runoff as it flows along</li>
<li><strong>Green roof:</strong> a roof covered with a growing layer and plants that hold rainwater</li>
<li><strong>Permeable pavement:</strong> pavement with gaps or pores that let water pass through to the ground below</li>
<li><strong>Evapotranspiration:</strong> water returning to the air through evaporation and through plant leaves</li>
</ul>

<h3>Types of Green Infrastructure</h3>
<table>
<thead><tr><th>Practice</th><th>Where it is used</th><th>What it does best</th></tr></thead>
<tbody>
<tr><td>Rain garden</td><td>Yards, schools, parks</td><td>Catches roof and sidewalk runoff and lets it soak in</td></tr>
<tr><td>Bioswale</td><td>Along roads and parking lots</td><td>Slows and filters flowing water</td></tr>
<tr><td>Green roof</td><td>Flat or gently sloped roofs</td><td>Holds rain and cools buildings</td></tr>
<tr><td>Permeable pavement</td><td>Parking spaces, paths, alleys</td><td>Lets water pass through hard surfaces</td></tr>
<tr><td>Urban trees</td><td>Streets and parks</td><td>Catch rain, shade streets and cool the air</td></tr>
<tr><td>Rain barrel</td><td>Next to downspouts</td><td>Stores roof water for gardens</td></tr>
</tbody>
</table>

<h3>More Than Water</h3>
<p>Green infrastructure has bonus benefits. Plants cool hot city streets, give homes to pollinators and birds, clean the air a little and make neighborhoods nicer places to walk and play. Engineers call these extra rewards co-benefits.</p>

<h3>Why It Matters</h3>
<p>In many older cities, rainwater and sewage share the same pipes. During heavy storms, these pipes can overflow and send dirty water into rivers. Every gallon soaked up by a rain garden or green roof is a gallon that does not add to that overflow.</p>
`,
        HIGH_SCHOOL: `
<h2>Green Infrastructure: Design, Performance and Maintenance</h2>
<p>Traditional "gray" stormwater infrastructure uses pipes, gutters and concrete channels to move water away as quickly as possible. That approach protects streets from flooding but sends polluted water and high peak flows into streams. Green infrastructure takes a different approach: manage rain where it falls, using soil and vegetation to store, infiltrate, evaporate and treat it. Done well, it reduces flooding, protects streams and improves neighborhoods. Done poorly, it clogs, ponds and loses public support.</p>

<h3>Common Practices</h3>
<ul>
<li><strong>Bioretention:</strong> a shallow, planted depression with engineered soil that captures runoff, filters it and lets it infiltrate or drain slowly</li>
<li><strong>Ponding depth:</strong> the shallow layer of water a bioretention area is designed to hold above the soil surface after a storm</li>
<li><strong>Engineered soil media:</strong> a designed mix of sand, soil and organic matter that drains well yet still traps pollutants</li>
<li><strong>Underdrain:</strong> a perforated pipe beneath a practice that carries away treated water where native soils drain poorly</li>
<li><strong>Drawdown time:</strong> how long it takes ponded water to disappear, usually designed to be short enough to avoid mosquitoes</li>
</ul>

<h3>Design Basics</h3>
<p>Designers usually size a practice to capture a "water quality storm," a common rainfall depth that covers most storms in a year. They estimate the runoff from the drainage area, then provide enough surface ponding and soil pore space to hold it. Key factors include the infiltration rate of native soils, slope, depth to groundwater, nearby building foundations and utilities, and plant choice. Native or regionally adapted plants that tolerate both flooding and drought tend to perform best.</p>

<h3>Comparing Green and Gray</h3>
<table>
<thead><tr><th>Feature</th><th>Gray infrastructure</th><th>Green infrastructure</th></tr></thead>
<tbody>
<tr><td>Main approach</td><td>Collect and convey water away</td><td>Store, infiltrate and treat water on site</td></tr>
<tr><td>Water quality</td><td>Little treatment unless added</td><td>Filters sediment, metals and some nutrients</td></tr>
<tr><td>Large floods</td><td>Designed for big, rare storms</td><td>Best for frequent small and medium storms</td></tr>
<tr><td>Extra benefits</td><td>Few</td><td>Shade, cooling, habitat, beauty</td></tr>
<tr><td>Maintenance</td><td>Specialized crews, less frequent</td><td>Frequent, landscape-style care</td></tr>
</tbody>
</table>
<p>The two are often combined. Green practices handle everyday storms, while pipes and storage handle rare extreme events.</p>

<h3>Performance and Maintenance</h3>
<p>Green infrastructure is living, so performance changes over time. Sediment can clog the surface, plants can die, and mulch can wash away. Regular maintenance includes removing trash and sediment, replacing plants, weeding, checking inlets and outlets and loosening compacted soil. Studies of installed practices find that maintenance quality strongly affects how well they work years after construction.</p>

<h3>Real-World Applications</h3>
<p>Many cities with combined sewer systems now use green infrastructure alongside storage tunnels to cut overflows. Schools use rain gardens as outdoor classrooms. Some cities offer fee credits or rebates to property owners who disconnect downspouts or install green roofs. Students can join by mapping drainage on their campus or helping maintain a rain garden.</p>
`,
        UNDERGRADUATE: `
<h2>Green Infrastructure Economics, Modeling and Co-Benefits</h2>
<p>Choosing between green and gray stormwater solutions requires more than comparing construction costs. Green infrastructure delivers distributed hydrologic benefits plus a set of co-benefits that conventional engineering economics often ignores. At the same time, its performance is more variable and its costs are spread across many small sites. This lesson develops the analytical tools to compare options: hydrologic modeling, life-cycle cost analysis and co-benefit valuation.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Runoff volume reduction:</strong> the share of incoming rainfall that a practice removes through infiltration and evapotranspiration</li>
<li><strong>Peak flow attenuation:</strong> the reduction and delay of the highest flow rate during a storm</li>
<li><strong>Life-cycle cost analysis:</strong> comparing options by all costs over their lifetime, including design, construction, operation, maintenance and replacement</li>
<li><strong>Co-benefits:</strong> benefits beyond stormwater, such as urban heat reduction, habitat, air quality, recreation and property value</li>
<li><strong>Ecosystem services:</strong> the benefits people receive from ecological processes, such as cooling, filtration and pollination</li>
<li><strong>Continuous simulation:</strong> modeling hydrology over a long rainfall record rather than a single design storm</li>
</ul>

<h3>Modeling Approaches</h3>
<p>Event-based design storms are simple and widely used, but they can misrepresent green infrastructure because performance depends on antecedent conditions: a practice still full from yesterday's rain captures less today. Continuous simulation over many years of rainfall better captures average annual capture and overflow frequency. Urban stormwater models typically represent each practice as layers, such as surface storage, soil and gravel storage, with infiltration and drainage rates. Results are sensitive to infiltration rates, which vary widely over short distances and decline with clogging.</p>

<h3>Economic Comparison</h3>
<table>
<thead><tr><th>Cost or benefit</th><th>Green infrastructure</th><th>Gray infrastructure</th></tr></thead>
<tbody>
<tr><td>Capital cost</td><td>Many small projects; cost per volume varies widely</td><td>Large projects with economies of scale</td></tr>
<tr><td>Operation and maintenance</td><td>Higher relative share, labor-intensive</td><td>Lower relative share, specialized</td></tr>
<tr><td>Flexibility</td><td>Incremental, can be phased and adapted</td><td>Lumpy, hard to modify once built</td></tr>
<tr><td>Co-benefits</td><td>Often substantial</td><td>Usually minimal</td></tr>
<tr><td>Performance certainty</td><td>Variable, site-dependent</td><td>More predictable</td></tr>
</tbody>
</table>

<h3>Valuing Co-Benefits</h3>
<p>Co-benefits can be valued with several methods. Avoided cost methods estimate savings, such as reduced cooling energy from green roofs. Hedonic pricing uses property values to infer how much people value nearby greenery. Benefit transfer applies values from studies elsewhere, which is quick but uncertain. Including co-benefits can change the ranking of options, but analysts should report ranges and avoid double counting the same benefit through two methods.</p>

<h3>Quantitative Reasoning</h3>
<p>Consider a block where roughly two-thirds of the land is impervious. If rain gardens capture runoff from part of that area, the reduction in annual runoff depends on the fraction of area treated, the storage provided per unit of drainage area and the infiltration rate. Doubling storage does not double capture: because most rainfall comes in small storms, the first increments of storage capture a large share of annual runoff, and later increments capture progressively less. This diminishing return is central to cost-effective sizing.</p>

<h3>Applied Method: Evaluating a Green Infrastructure Plan</h3>
<ol>
<li>Define objectives: overflow reduction, flood relief, water quality or a combination.</li>
<li>Characterize sites: soils, slopes, groundwater depth and available space.</li>
<li>Model performance using continuous simulation where possible.</li>
<li>Estimate life-cycle costs, including realistic maintenance.</li>
<li>Value co-benefits with transparent methods and ranges.</li>
<li>Compare against gray and hybrid alternatives on equal terms.</li>
</ol>
`,
        GRADUATE: `
<h2>Green Infrastructure Policy, Financing and Program Implementation</h2>
<p>Most of the technical questions about green infrastructure have workable answers. The harder problems are institutional: who pays, who owns and maintains thousands of small assets, how to deliver on private land, and how to ensure benefits reach communities that need them most. This lesson examines the policy instruments, financing models and implementation challenges that determine whether green infrastructure programs succeed at scale.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Stormwater utility fee:</strong> a charge based on a property's impervious area that funds stormwater management, often with credits for on-site practices</li>
<li><strong>Performance standard:</strong> a regulatory requirement, such as retaining a set depth of rainfall on site, that new development must meet</li>
<li><strong>Public-private partnership:</strong> an arrangement in which private entities finance, build or maintain public infrastructure under contract</li>
<li><strong>Asset management:</strong> a systematic approach to tracking, inspecting and renewing infrastructure over its life</li>
<li><strong>Green gentrification:</strong> rising property values and displacement that can follow new green amenities in lower-income neighborhoods</li>
<li><strong>Consent decree:</strong> a legally binding agreement, often between a city and regulators, that sets requirements and deadlines for reducing sewer overflows</li>
</ul>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Development regulations</td><td>Require on-site retention for new projects</td><td>Low public cost; scales with growth</td><td>Slow to affect existing neighborhoods</td></tr>
<tr><td>Fee and credit systems</td><td>Charge for impervious area; credit practices</td><td>Stable revenue; price signal</td><td>Credits may be too small to motivate retrofits</td></tr>
<tr><td>Grants and rebates</td><td>Pay owners to install practices</td><td>Reaches private land</td><td>Uneven uptake; maintenance uncertainty</td></tr>
<tr><td>Public right-of-way programs</td><td>City builds in streets and parks</td><td>Control over design and upkeep</td><td>Limited space; utility conflicts</td></tr>
<tr><td>Off-site mitigation or trading</td><td>Developers pay for capture elsewhere</td><td>Targets best sites</td><td>Benefits may move away from impacts</td></tr>
</tbody>
</table>

<h3>Financing Models</h3>
<p>Programs draw on stormwater fees, general funds, bonds, state revolving loans and grants. Some cities have experimented with community-based partnerships in which contractors build and maintain practices on private property over a long period, and with outcome-based arrangements that link payments to measured performance. These models can mobilize capital and transfer some risk, but they require clear performance metrics and strong contract management.</p>

<h3>Implementation Barriers</h3>
<ul>
<li><strong>Maintenance responsibility:</strong> long-term care is the most common weak point, especially when ownership is split among agencies or private owners.</li>
<li><strong>Interdepartmental coordination:</strong> street, park, water and planning departments must share space, budgets and standards.</li>
<li><strong>Workforce:</strong> crews need skills in both landscaping and hydraulics; workforce programs can create local jobs.</li>
<li><strong>Design standards:</strong> outdated codes may block curb cuts, permeable pavement or reduced parking.</li>
<li><strong>Data:</strong> tracking thousands of small assets requires inventory systems and inspection routines.</li>
</ul>

<h3>Equity and Siting</h3>
<p>Hydrologic logic and equity logic may point to different places. Lower-income neighborhoods often have more pavement, fewer trees and greater heat and flood exposure, so they stand to gain the most from green infrastructure. Yet programs that rely on voluntary uptake by property owners can favor wealthier areas. Targeting public investment, co-designing projects with residents, and pairing greening with anti-displacement policies help distribute benefits fairly.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Set measurable program goals for overflow, flooding, heat and equity.</li>
<li>Choose a mix of regulatory, financial and direct-delivery instruments.</li>
<li>Secure dedicated, long-term funding for maintenance, not just construction.</li>
<li>Build asset management and monitoring into the program from the start.</li>
<li>Track who benefits and adjust siting and engagement accordingly.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Performance, Optimization and Climate Resilience</h2>
<p>Green infrastructure research has shifted from demonstrating that individual practices work to understanding how distributed networks of living systems perform over decades, how to place them optimally, and how they will function under a changing climate. These questions require coupling hydrology, soil science, ecology, optimization and social science. This lesson surveys methods, uncertainties and open questions.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Performance uncertainty:</strong> variability in how practices perform over time due to soils, weather patterns, clogging and maintenance quality</li>
<li><strong>Spatial optimization:</strong> algorithms that select the type, size and location of practices to maximize objectives under budget and site constraints</li>
<li><strong>Nonstationarity:</strong> the condition in which statistical properties of rainfall change over time, undermining designs based on historical records</li>
<li><strong>Hydrologic connectivity:</strong> how runoff pathways link surfaces, practices and drainage networks across a catchment</li>
<li><strong>Socio-hydrology:</strong> the study of two-way feedbacks between human behavior and water systems</li>
<li><strong>Multi-functionality:</strong> the capacity of a landscape element to deliver several services at once, sometimes with trade-offs among them</li>
</ul>

<h3>Long-Term Performance</h3>
<p>Field monitoring shows that performance evolves. Surface clogging reduces infiltration, while root growth and soil fauna can create macropores that restore it. Engineered media may leach phosphorus early in their life, particularly when rich in compost. Monitoring is expensive, so most datasets are short and site-specific, making it hard to separate design, climate and maintenance effects. Research priorities include long-term monitoring networks, low-cost sensors and statistical methods that pool data across sites.</p>

<h3>Optimization Methods</h3>
<p>Spatial optimization typically couples a stormwater model with a search algorithm, such as a genetic algorithm, to explore combinations of practices. Multi-objective formulations generate trade-off frontiers among cost, runoff reduction, pollutant removal and co-benefits such as cooling. Challenges include computational cost, the large decision space, and the gap between optimal plans and what landowners and agencies will actually accept. Surrogate models and machine learning emulators are being explored to speed up evaluation.</p>

<h3>Climate Resilience</h3>
<p>Many regions expect more intense short-duration rainfall as the atmosphere warms. Practices sized to historical design storms may be overwhelmed more often, while longer dry spells can stress vegetation and alter soil structure. Research explores robust design under ensembles of climate projections, and the role of green infrastructure in urban heat mitigation through evapotranspiration, which itself depends on water availability. These interactions create potential trade-offs between stormwater and cooling goals during droughts.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Can green infrastructure meaningfully reduce large floods?</td><td>Benefits are clear for frequent storms but diminish for extreme events once storage is full</td></tr>
<tr><td>Are distributed practices cost-competitive with centralized storage?</td><td>Results depend on how co-benefits and maintenance are counted</td></tr>
<tr><td>Does greening cause displacement?</td><td>Evidence varies by city and is hard to isolate from broader market trends</td></tr>
<tr><td>How should infiltration be treated near contaminated soils or shallow groundwater?</td><td>Infiltration may mobilize pollutants or raise groundwater levels</td></tr>
</tbody>
</table>

<h3>Methodological Debates</h3>
<p>Upscaling from site experiments to catchment outcomes is a central problem. Paired-catchment studies and before-after-control-impact designs offer stronger causal evidence than single-site monitoring but are rare and slow. Modeling studies depend on parameter choices that are poorly constrained, so results should be accompanied by sensitivity and uncertainty analysis. Socio-hydrological work highlights that adoption, maintenance and public perception change over time and should be modeled rather than assumed constant.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Long-term, multi-site datasets linking design, maintenance and performance.</li>
<li>Optimization approaches that include social acceptance and maintenance capacity as constraints.</li>
<li>Robust design methods under nonstationary rainfall and compound heat-drought events.</li>
<li>Quantifying cooling, biodiversity and health co-benefits with consistent metrics.</li>
<li>Understanding interactions between infiltration, groundwater and legacy contamination.</li>
<li>Evaluating equity outcomes and displacement risks of greening programs.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wgiq1',
      question: {
        ELEMENTARY: 'What can a rain garden do?',
        MIDDLE_SCHOOL: 'What is a bioswale?',
        HIGH_SCHOOL: 'What is bioretention?',
        UNDERGRADUATE: 'What are green infrastructure co-benefits?',
        GRADUATE: 'What is the most common weak point of green infrastructure programs?',
        PHD: 'What does performance uncertainty mean for green infrastructure?',
      },
      options: {
        ELEMENTARY: ['Soak up rain and help clean water', 'Make more rain', 'Stop all water forever', 'Turn water into ice'],
        MIDDLE_SCHOOL: ['A shallow, planted channel that slows and filters runoff', 'A type of fish', 'A rain barrel', 'A swimming pool'],
        HIGH_SCHOOL: ['A planted depression with engineered soil that captures, filters and infiltrates runoff', 'A concrete pipe under the street', 'A tank that stores water forever', 'A machine that boils water'],
        UNDERGRADUATE: ['Benefits beyond stormwater, such as heat reduction, habitat and recreation', 'Only lower water bills', 'Extra costs of construction', 'Benefits only for engineers'],
        GRADUATE: ['Long-term maintenance responsibility', 'There are no weak points', 'Plants grow too well', 'Rain never falls on cities'],
        PHD: ['Variability in performance over time due to soils, weather, clogging and maintenance', 'Perfect prediction of performance', 'Performance that never changes', 'Uncertainty only about plant colors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Rain gardens catch rain so it can soak into the soil, where it gets cleaner.',
        MIDDLE_SCHOOL: 'A bioswale is a planted channel that slows down and filters water flowing through it.',
        HIGH_SCHOOL: 'Bioretention uses engineered soil and plants to capture and treat stormwater.',
        UNDERGRADUATE: 'Co-benefits include cooling, habitat, air quality, recreation and property value.',
        GRADUATE: 'Ensuring long-term maintenance is the most common barrier, especially when ownership is split.',
        PHD: 'Performance evolves with soils, weather, clogging and upkeep, so it varies between sites and years.',
      },
    },
    {
      id: 'wgiq2',
      question: {
        ELEMENTARY: 'What happens to rain that falls on a road?',
        MIDDLE_SCHOOL: 'What is an impervious surface?',
        HIGH_SCHOOL: 'What is the job of an underdrain?',
        UNDERGRADUATE: 'Why is continuous simulation often better than a single design storm for green infrastructure?',
        GRADUATE: 'How does a stormwater utility fee usually work?',
        PHD: 'What does nonstationarity mean in green infrastructure design?',
      },
      options: {
        ELEMENTARY: ['It soaks in like a sponge', 'It runs away fast and picks up dirt', 'It turns into flowers', 'It goes back up to the clouds right away'],
        MIDDLE_SCHOOL: ['A soft garden bed', 'A hard surface like concrete that water cannot soak through', 'A pond for ducks', 'A type of soil'],
        HIGH_SCHOOL: ['To water the plants from below', 'To carry away treated water where native soils drain poorly', 'To bring in drinking water', 'To hold sewage'],
        UNDERGRADUATE: ['It is faster to compute', 'It captures how storage left over from earlier rain affects capture in later storms', 'It ignores rainfall', 'Regulators forbid design storms'],
        GRADUATE: ['Everyone pays the same amount', 'Charges are based on impervious area, often with credits for on-site practices', 'Only factories pay', 'It is based on how many trees a property has'],
        PHD: ['Rainfall statistics never change', 'Statistical properties of rainfall change over time, so historical designs may fail', 'Practices cannot move', 'Soils never change'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Roads are hard, so rain cannot soak in. It rushes away and carries dirt and trash with it.',
        MIDDLE_SCHOOL: 'Impervious surfaces like asphalt and roofs stop water from soaking into the ground.',
        HIGH_SCHOOL: 'An underdrain is a perforated pipe that drains the practice when the soil underneath drains slowly.',
        UNDERGRADUATE: 'Practices still full from earlier rain capture less, which a long rainfall record reveals.',
        GRADUATE: 'Fees tied to impervious area fund stormwater programs and reward owners who manage runoff on site.',
        PHD: 'A changing climate means past rainfall records may not represent future storms.',
      },
    },
    {
      id: 'wgiq3',
      question: {
        ELEMENTARY: 'What is a green roof?',
        MIDDLE_SCHOOL: 'What is evapotranspiration?',
        HIGH_SCHOOL: 'Which kind of storms is green infrastructure best at managing?',
        UNDERGRADUATE: 'Why does doubling storage not double annual runoff capture?',
        GRADUATE: 'What is green gentrification?',
        PHD: 'What is a common approach to spatial optimization of green infrastructure?',
      },
      options: {
        ELEMENTARY: ['A roof painted green', 'A roof made of glass', 'A roof covered with soil and plants that soaks up rain', 'A roof with a swimming pool'],
        MIDDLE_SCHOOL: ['Water freezing into ice', 'Water flowing down a pipe', 'Water returning to the air through evaporation and plant leaves', 'Water turning into salt'],
        HIGH_SCHOOL: ['Only the largest hurricanes', 'No storms at all', 'Frequent small and medium storms', 'Only snowstorms'],
        UNDERGRADUATE: ['Because storage costs nothing', 'Because rain never falls in small amounts', 'Because most rainfall comes in small storms, so the first storage captures the most', 'Because soils stop infiltrating'],
        GRADUATE: ['Painting buildings green', 'Planting only green plants', 'Rising property values and displacement that can follow new green amenities', 'A type of green roof'],
        PHD: ['Picking sites at random', 'Building only one large tank', 'Coupling a stormwater model with a search algorithm to explore combinations of practices', 'Avoiding all models'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A green roof has soil and plants on top that soak up rain like a sponge.',
        MIDDLE_SCHOOL: 'Evapotranspiration is water going back to the air through evaporation and through leaves.',
        HIGH_SCHOOL: 'Green practices handle frequent storms well, while pipes and storage handle rare extremes.',
        UNDERGRADUATE: 'There are diminishing returns because small storms make up most of annual rainfall.',
        GRADUATE: 'New green amenities can raise property values and push out existing residents unless policies protect them.',
        PHD: 'Search algorithms such as genetic algorithms explore many combinations evaluated by a stormwater model.',
      },
    },
    {
      id: 'wgiq4',
      question: {
        ELEMENTARY: 'Besides catching rain, what else do green helpers do?',
        MIDDLE_SCHOOL: 'Why do combined sewers matter for green infrastructure?',
        HIGH_SCHOOL: 'Why do maintenance tasks matter for green infrastructure?',
        UNDERGRADUATE: 'What does hedonic pricing use to value greenery?',
        GRADUATE: 'Which instrument has low public cost but is slow to affect existing neighborhoods?',
        PHD: 'Why is the ability of green infrastructure to reduce large floods contested?',
      },
      options: {
        ELEMENTARY: ['Make streets noisy', 'Make streets hotter', 'Scare away birds', 'Give homes to birds and butterflies and make shade'],
        MIDDLE_SCHOOL: ['They only carry drinking water', 'They never overflow', 'They are made of plants', 'Storms can make them overflow, so soaking up rain reduces dirty overflows'],
        HIGH_SCHOOL: ['Plants never need care', 'Maintenance makes practices clog faster', 'Maintenance is only for looks', 'Clogging, dead plants and washed-away mulch reduce performance if not fixed'],
        UNDERGRADUATE: ['The number of trees counted by satellites', 'The cost of building gardens', 'Rainfall records', 'Differences in property values linked to nearby greenery'],
        GRADUATE: ['Grants and rebates', 'Public right-of-way programs', 'Off-site trading', 'Development regulations requiring on-site retention'],
        PHD: ['Floods never happen in cities', 'Practices always prevent all floods', 'Nobody has studied floods', 'Benefits shrink for extreme events once practice storage is full'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Green helpers give animals homes, shade the streets and make them cooler and prettier.',
        MIDDLE_SCHOOL: 'When rain and sewage share pipes, heavy storms can cause overflows into rivers.',
        HIGH_SCHOOL: 'Living systems need care; without it, practices clog and lose their ability to manage water.',
        UNDERGRADUATE: 'Hedonic pricing infers the value of greenery from how property prices change near it.',
        GRADUATE: 'Development rules apply to new projects, so they change existing areas only slowly.',
        PHD: 'Once storage fills in a big storm, extra rain runs off, limiting benefits for extreme floods.',
      },
    },
    {
      id: 'wgiq5',
      question: {
        ELEMENTARY: 'What can you do to help rainwater soak in?',
        MIDDLE_SCHOOL: 'What does permeable pavement do?',
        HIGH_SCHOOL: 'What is drawdown time?',
        UNDERGRADUATE: 'What is life-cycle cost analysis?',
        GRADUATE: 'Why might programs relying on voluntary uptake favor wealthier areas?',
        PHD: 'Why are paired-catchment or before-after-control-impact studies valuable?',
      },
      options: {
        ELEMENTARY: ['Help plant trees or flowers', 'Pave the whole yard', 'Throw litter on the street', 'Cover the grass with plastic'],
        MIDDLE_SCHOOL: ['Lets water pass through to the ground below', 'Makes water flow faster into drains', 'Stops all rain from touching the ground', 'Turns water into steam'],
        HIGH_SCHOOL: ['How long ponded water takes to disappear after a storm', 'The time it takes to build a garden', 'How long plants take to grow', 'The time between storms'],
        UNDERGRADUATE: ['Comparing options by all costs over their lifetime, including maintenance and replacement', 'Counting only construction costs', 'Measuring how long plants live', 'Estimating rainfall only'],
        GRADUATE: ['Owners with more resources are more able to apply for and install practices', 'Wealthy areas have no roofs', 'Low-income areas get more rain', 'Voluntary programs are illegal'],
        PHD: ['They provide stronger causal evidence of catchment-scale effects than single-site monitoring', 'They are cheap and fast', 'They need no data', 'They replace all modeling'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Plants and their roots help rain soak into the soil instead of running away.',
        MIDDLE_SCHOOL: 'Permeable pavement has pores or gaps that let water pass through instead of running off.',
        HIGH_SCHOOL: 'Drawdown time is designed to be short so water does not sit long enough to breed mosquitoes.',
        UNDERGRADUATE: 'Life-cycle analysis includes design, construction, operation, maintenance and replacement costs.',
        GRADUATE: 'Voluntary uptake depends on owner resources, so public targeting is needed for fair distribution.',
        PHD: 'Comparing treated and control catchments before and after helps isolate the effect of green infrastructure.',
      },
    },
  ],
}

export default expansion
