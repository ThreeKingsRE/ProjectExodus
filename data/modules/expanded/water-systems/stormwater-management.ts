import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'stormwater-management',
  lessons: [
    {
      id: 'ws-sw-1',
      title: 'Where Rain Goes',
      content: {
        ELEMENTARY: `
<h2>Where Does the Rain Go?</h2>
<p>Have you ever watched rain splash on a sidewalk and run away down the street? In a forest, rain soaks into soft soil. In a town, rain lands on roofs, roads and parking lots. Those hard surfaces do not drink water, so the rain has to go somewhere else. Let's follow a raindrop!</p>

<h3>Soft Ground and Hard Ground</h3>
<p>Soil is full of tiny spaces, like a sponge. When rain falls on grass or a garden, much of it sinks in. When rain falls on a road, it slides across the top and starts to rush along. Water that flows over the ground instead of soaking in is called runoff.</p>
<ul>
<li><strong>Runoff:</strong> rainwater that flows over the ground instead of soaking into the soil</li>
<li><strong>Storm drain:</strong> an opening in the street that carries rainwater away through pipes</li>
<li><strong>Hard surface:</strong> a roof, road or parking lot that water cannot soak through</li>
<li><strong>Soil:</strong> the soft ground that holds water in tiny spaces like a sponge</li>
<li><strong>Puddle:</strong> a small pool of water that forms when rain has nowhere to go</li>
</ul>

<h3>Why Runoff Can Be a Problem</h3>
<p>When lots of rain rushes off hard surfaces at once, streets can flood. The rushing water also picks up things along the way: litter, leaves, oil from cars and soap from washing. Many storm drains lead straight to a stream, a lake or the sea, so whatever goes into the drain ends up where fish and frogs live.</p>

<h3>Ways Towns Help Rain Soak In</h3>
<p>People have clever ideas to help rain slow down and sink in. A rain garden is a low patch of plants that catches water from a roof. Some sidewalks are made with special stones that let water slip through. Trees catch rain on their leaves and drink water with their roots.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Put litter in the bin so it never reaches a storm drain.</li>
<li>Never pour anything down a storm drain. Only rain belongs there.</li>
<li>Help plant a tree, a garden or a rain garden at home or school.</li>
<li>Use a bucket or rain barrel to collect roof water for plants.</li>
</ol>

<h3>Be a Rain Detective</h3>
<p>Next time it rains, look outside with a grown-up. Where does the water go? Does it soak into the grass or run along the road to a drain? You are now thinking like a real stormwater engineer!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Managing Rain in Cities</h2>
<p>When a city grows, it covers the land with roofs, roads and parking lots. These surfaces change what happens to rain. Instead of soaking slowly into the soil, much more water races off the surface, carrying pollution with it. Managing this rainwater, called stormwater, is an important job for every town.</p>

<h3>How Building a City Changes the Water Cycle</h3>
<p>In a forest or meadow, rain is shared in several ways. Some evaporates or is used by plants, much of it soaks into the soil, and only a small part runs off. In a city, the balance flips: less soaks in and much more runs off, and it reaches streams faster.</p>
<table>
<thead><tr><th>What happens to rain</th><th>Natural land</th><th>Paved city</th></tr></thead>
<tbody>
<tr><td>Soaks into the ground</td><td>A lot</td><td>Very little</td></tr>
<tr><td>Runs off the surface</td><td>A little</td><td>A lot</td></tr>
<tr><td>Speed it reaches streams</td><td>Slow</td><td>Fast</td></tr>
<tr><td>Pollution carried along</td><td>Low</td><td>Higher</td></tr>
</tbody>
</table>

<h3>Two Big Problems: Floods and Pollution</h3>
<p>Fast runoff can overload drains and cause local flooding. It can also scour stream banks, washing away soil and habitat. On the way, runoff collects oil, metals from brakes and tires, fertilizer from lawns, pet waste and trash. This is called nonpoint source pollution because it comes from many places at once rather than one pipe.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Stormwater:</strong> rain or snowmelt that flows over the land and into drains or streams</li>
<li><strong>Impervious surface:</strong> a surface such as asphalt or concrete that water cannot pass through</li>
<li><strong>Infiltration:</strong> the process of water soaking down into the soil</li>
<li><strong>Rain garden:</strong> a shallow planted area that collects runoff and lets it soak in slowly</li>
<li><strong>Nonpoint source pollution:</strong> pollution that comes from many scattered places instead of one pipe</li>
<li><strong>Detention pond:</strong> a basin that holds stormwater for a while and releases it slowly</li>
</ul>

<h3>Tools Cities Use</h3>
<p>Engineers use both pipes and plants. Traditional systems collect water in drains and pipes and move it away quickly. Newer approaches, often called green infrastructure, try to slow water down, spread it out and let it soak in where it falls. Examples include rain gardens, green roofs covered in plants, permeable pavement, street trees and swales, which are shallow grassy channels.</p>

<h3>How You Can Help</h3>
<p>Pick up after pets, keep litter out of gutters, and sweep grass clippings back onto the lawn instead of into the street. You could also map the storm drains around your school and find out which stream they flow to.</p>
`,
        HIGH_SCHOOL: `
<h2>Stormwater Management: Gray, Green and Low Impact Development</h2>
<p>Urban stormwater sits at the intersection of engineering, ecology and city planning. Every new roof and road changes how quickly water leaves a site and what it carries. Modern stormwater management aims to control flooding, protect water quality and keep streams healthy, using a mix of conventional pipes and basins and nature-based solutions.</p>

<h3>The Urban Hydrograph</h3>
<p>A hydrograph is a graph of stream flow over time during a storm. When a watershed is paved, the hydrograph changes shape: the peak flow gets higher, it arrives sooner, and the total runoff volume grows, while the slow baseflow fed by groundwater often shrinks between storms. Scientists use the phrase urban stream syndrome to describe the eroded channels, warmer water, more pollutants and fewer sensitive species often found downstream of developed land.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Peak flow:</strong> the highest rate of water flow reached during a storm event</li>
<li><strong>Detention:</strong> temporarily storing runoff and releasing it slowly to reduce peak flow</li>
<li><strong>Retention:</strong> holding runoff permanently so it infiltrates, evaporates or is reused</li>
<li><strong>Low impact development:</strong> site design that manages rain close to where it falls by mimicking natural hydrology</li>
<li><strong>Permeable pavement:</strong> paving with gaps or pores that let water pass through into a stone layer below</li>
<li><strong>Green roof:</strong> a roof covered with soil and plants that absorbs and slowly releases rain</li>
</ul>

<h3>Comparing Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Pipes and culverts</td><td>Collect and convey water away quickly</td><td>Predictable, handles large flows</td><td>Moves the problem downstream, little water quality benefit</td></tr>
<tr><td>Detention ponds</td><td>Store runoff and release it slowly</td><td>Reduces flood peaks, settles some sediment</td><td>Takes land, does not reduce total volume much</td></tr>
<tr><td>Rain gardens and bioretention</td><td>Plants and engineered soil filter and infiltrate runoff</td><td>Reduces volume and pollutants, adds habitat</td><td>Needs maintenance, depends on soil conditions</td></tr>
<tr><td>Permeable pavement</td><td>Water passes through surface into stone storage</td><td>Uses space already paved</td><td>Can clog without regular vacuuming</td></tr>
<tr><td>Green roofs</td><td>Plants and growing media hold rain</td><td>Cools buildings, uses roof space</td><td>Higher cost, structural loads</td></tr>
</tbody>
</table>

<h3>Combined Sewers</h3>
<p>Many older cities have combined sewer systems, where stormwater and household sewage share the same pipes. In dry weather everything goes to the treatment plant, but in heavy rain the pipes can overflow and send a mix of stormwater and untreated sewage into rivers. Reducing runoff at the source is one way these cities cut overflows.</p>

<h3>Real-World Solutions</h3>
<ol>
<li><strong>Disconnect downspouts:</strong> direct roof water to lawns, rain barrels or rain gardens instead of the street.</li>
<li><strong>Green streets:</strong> add planted curb extensions and tree trenches that capture runoff from the road.</li>
<li><strong>Protect natural areas:</strong> keep wetlands, floodplains and stream buffers that already store and clean water.</li>
<li><strong>Prevent pollution:</strong> street sweeping, proper chemical storage and public education stop pollutants before they wash away.</li>
</ol>
<p>The best plans combine gray and green tools, matching each to the space, soils and goals of a site.</p>
`,
        UNDERGRADUATE: `
<h2>Stormwater Analysis, BMP Design and Regulatory Compliance</h2>
<p>Professional stormwater practice turns hydrologic understanding into designs that meet specific performance targets. Engineers estimate how much runoff a site will produce, select best management practices (BMPs) that reduce peak flows, volumes and pollutant loads, and document compliance with local and national requirements. This lesson introduces the core methods and the reasoning behind them.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Best management practice:</strong> a structural or nonstructural measure that reduces runoff quantity or improves runoff quality</li>
<li><strong>Design storm:</strong> a rainfall event of specified depth, duration and frequency used as the basis for sizing facilities</li>
<li><strong>Return period:</strong> the average interval between events of a given size, the inverse of annual exceedance probability</li>
<li><strong>Runoff coefficient:</strong> the fraction of rainfall that becomes runoff from a surface, higher for pavement than for lawns</li>
<li><strong>Water quality volume:</strong> the runoff volume from small, frequent storms that a BMP must capture and treat</li>
<li><strong>Time of concentration:</strong> the time for runoff to travel from the hydraulically most distant point to the outlet</li>
</ul>

<h3>Estimating Runoff</h3>
<p>For small drainage areas, the Rational Method estimates peak flow as the product of a runoff coefficient, rainfall intensity and drainage area. Its logic is intuitive: a larger, more impervious area under more intense rain produces a larger peak. Rainfall intensity is chosen for a duration equal to the time of concentration, because that is when the whole area contributes at once. For larger or more complex watersheds, engineers use curve number methods that relate runoff depth to soil type and land cover, and they route hydrographs through storage using continuous or event-based simulation models.</p>
<p>A key insight is that most annual rainfall arrives in small storms. Capturing the first portion of runoff from each event, often called the first flush, can treat a large share of the yearly pollutant load even though big storms dominate flood design.</p>

<h3>Selecting BMPs</h3>
<table>
<thead><tr><th>BMP type</th><th>Volume reduction</th><th>Peak reduction</th><th>Main treatment mechanism</th></tr></thead>
<tbody>
<tr><td>Bioretention</td><td>Moderate to high where soils infiltrate</td><td>Moderate</td><td>Filtration, sorption, plant uptake</td></tr>
<tr><td>Wet pond</td><td>Low</td><td>High</td><td>Settling and biological uptake in a permanent pool</td></tr>
<tr><td>Dry extended detention</td><td>Low</td><td>High</td><td>Settling of sediment during slow drawdown</td></tr>
<tr><td>Infiltration trench</td><td>High</td><td>Moderate</td><td>Infiltration into native soil</td></tr>
<tr><td>Vegetated swale</td><td>Low to moderate</td><td>Low</td><td>Sedimentation and filtration through grass</td></tr>
<tr><td>Constructed wetland</td><td>Low</td><td>Moderate to high</td><td>Settling, plant uptake, microbial processes</td></tr>
</tbody>
</table>
<p>Pollutants differ in behavior: sediment and particle-bound metals settle readily, dissolved nutrients need biological uptake or sorption, and bacteria respond to filtration and sunlight. A treatment train links several BMPs in series so each handles what it does best.</p>

<h3>Regulatory Context</h3>
<p>In the United States, stormwater discharges are regulated under the Clean Water Act through the National Pollutant Discharge Elimination System, which covers municipal systems, construction sites and certain industrial facilities. Other countries use different frameworks, but most require development projects to limit post-development runoff and include erosion and sediment control during construction.</p>

<h3>A Design Checklist</h3>
<ol>
<li>Delineate the drainage area and land cover before and after development.</li>
<li>Identify soils, groundwater depth and infiltration potential.</li>
<li>Set targets for peak flow, volume and water quality from applicable rules.</li>
<li>Select a treatment train and size each BMP for its design event.</li>
<li>Plan inspection and maintenance, since performance declines when BMPs clog.</li>
</ol>
`,
        GRADUATE: `
<h2>Integrated Stormwater Management: Permits, Programs and Green-Gray Systems</h2>
<p>At the scale of a city, stormwater management becomes a long-term program rather than a series of site designs. Municipalities must meet permit obligations, prioritize investment across thousands of drainage assets, coordinate with transportation and parks departments, and respond to communities who experience flooding unequally. This lesson examines the institutional, economic and planning dimensions of integrated stormwater management.</p>

<h3>The MS4 Permit Framework</h3>
<p>In the United States, cities that operate a municipal separate storm sewer system (MS4) discharge under permits that require a stormwater management program. Typical program elements include public education and participation, detection and elimination of illicit discharges, construction site runoff control, post-construction stormwater management, and pollution prevention in municipal operations. Where a water body is impaired, permits may also require reductions consistent with a pollutant load allocation. Comparable obligations exist elsewhere through river basin and urban drainage regulation.</p>
<ul>
<li><strong>MS4:</strong> a municipal separate storm sewer system that conveys stormwater separately from sanitary sewage</li>
<li><strong>Illicit discharge:</strong> any non-stormwater flow entering a storm sewer, such as a misconnected sewer line or dumped waste</li>
<li><strong>Green-gray integration:</strong> designing pipes, tunnels and basins together with vegetated systems so each performs its best role</li>
<li><strong>Stormwater utility fee:</strong> a charge based on a property's impervious area that funds stormwater programs</li>
<li><strong>Asset management:</strong> a systematic approach to maintaining infrastructure based on condition, risk and life-cycle cost</li>
<li><strong>Co-benefits:</strong> additional gains beyond runoff control, such as shade, habitat, recreation and lower urban heat</li>
</ul>

<h3>Financing and Incentives</h3>
<p>Stormwater programs historically relied on general tax revenue, which competes with other priorities. Many jurisdictions have adopted fees tied to impervious area, which link cost to the runoff each parcel generates and allow credits for on-site management. Fee design raises questions of fairness, legal authority and administrative burden. Some cities also use in-lieu fees, credit trading between sites, and public-private partnerships to deliver distributed green infrastructure on private land.</p>

<h3>Green-Gray Portfolios</h3>
<table>
<thead><tr><th>Consideration</th><th>Gray infrastructure</th><th>Green infrastructure</th></tr></thead>
<tbody>
<tr><td>Performance certainty</td><td>Well understood and standardized</td><td>More variable, depends on design and upkeep</td></tr>
<tr><td>Spatial footprint</td><td>Concentrated, often underground</td><td>Distributed across many sites</td></tr>
<tr><td>Co-benefits</td><td>Limited</td><td>Heat reduction, habitat, amenity</td></tr>
<tr><td>Maintenance model</td><td>Centralized crews and equipment</td><td>Many small sites, landscaping skills</td></tr>
<tr><td>Adaptability</td><td>Hard to expand once built</td><td>Can be added incrementally</td></tr>
</tbody>
</table>
<p>For large storms and combined sewer overflow control, storage tunnels or tanks may be unavoidable; distributed green infrastructure reduces the volume those facilities must handle and adds value where people live. Portfolio analysis compares cost per unit of volume managed while also valuing co-benefits that conventional engineering economics often omits.</p>

<h3>Equity and Governance</h3>
<p>Flooding and poor drainage often concentrate in neighborhoods with older infrastructure and less investment. Green infrastructure programs can improve these areas, but they can also raise property values in ways that pressure existing residents. Inclusive planning, local hiring for maintenance work and transparent prioritization criteria help align stormwater investment with community needs.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define program objectives across flood risk, water quality, ecology and community benefit.</li>
<li>Inventory assets and condition, and map where impacts and needs overlap.</li>
<li>Compare green, gray and hybrid portfolios using life-cycle cost and co-benefit valuation.</li>
<li>Set measurable performance indicators and a monitoring plan tied to permit reporting.</li>
<li>Revisit design standards as rainfall patterns change.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Urban Stormwater Hydrology</h2>
<p>Urban stormwater research has moved from site-scale BMP performance studies toward questions about how distributed systems behave at watershed scale, how nonstationary rainfall should reshape design, and how competing objectives can be optimized together. This lesson surveys modeling approaches, open debates and research directions for advanced study.</p>

<h3>Modeling Approaches</h3>
<ul>
<li><strong>Distributed hydrologic model:</strong> a model that represents spatial variation in land cover, soils and drainage across many computational units</li>
<li><strong>Dual drainage model:</strong> a coupled model of the underground pipe network and the surface flow paths that carry water when pipes surcharge</li>
<li><strong>Nonstationarity:</strong> the condition in which the statistical properties of rainfall change over time, undermining fixed design storms</li>
<li><strong>Multi-objective optimization:</strong> searching for sets of designs that trade off cost, flood reduction, water quality and co-benefits</li>
<li><strong>Real-time control:</strong> using sensors and actuated valves to operate storage dynamically ahead of and during storms</li>
<li><strong>Effective impervious area:</strong> the portion of impervious surface hydraulically connected to the drainage network</li>
</ul>
<p>Lumped models calibrated on outlet flow can reproduce hydrographs while misrepresenting internal processes, which matters when evaluating distributed interventions. Fully distributed and dual drainage models resolve surface pathways but demand high-resolution terrain and network data and substantial computing resources. Surrogate models and emulators are increasingly used to make optimization over many design alternatives tractable.</p>

<h3>Scaling From Sites to Watersheds</h3>
<p>Plot-scale studies of bioretention and permeable pavement show substantial volume and pollutant reductions, but evidence that widespread adoption restores stream ecology is more mixed. Hypotheses for the gap include insufficient coverage, poor placement relative to connected impervious area, legacy channel degradation and groundwater interactions. Research that links spatial configuration of controls to in-stream outcomes, through paired watershed designs or long-term monitoring, remains a priority.</p>

<h3>Design Under Changing Rainfall</h3>
<p>Design standards often rely on intensity-duration-frequency relationships derived from historical records. Warming increases the atmosphere's capacity to hold moisture, and many studies anticipate more intense short-duration rainfall, though projections at the subdaily scale relevant to urban drainage are uncertain. Approaches include adjusting design curves with climate factors, stress testing designs across scenarios, and adopting adaptive pathways that stage investment as evidence accumulates.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Should targets aim for predevelopment flow regimes?</td><td>Full restoration may be infeasible in dense areas; partial targets risk ecological ineffectiveness</td></tr>
<tr><td>How to value co-benefits in optimization</td><td>Monetizing heat, amenity and habitat involves contested methods and equity weights</td></tr>
<tr><td>Long-term performance of green infrastructure</td><td>Clogging, vegetation change and maintenance variation are poorly characterized over decades</td></tr>
<tr><td>Infiltration and groundwater risks</td><td>Increased recharge can raise water tables, mobilize contaminants or affect basements</td></tr>
</tbody>
</table>

<h3>Smart Systems and Real-Time Control</h3>
<p>Low-cost sensors, weather forecasts and controllable outlets allow existing storage to be operated actively, releasing water before a storm or holding it to improve settling. Research questions concern control algorithms, robustness to forecast error, coordination across many assets, and cybersecurity of networked infrastructure. Data assimilation methods that update model states from sensor observations are an active area.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Linking distributed control placement to measurable stream ecological recovery.</li>
<li>Characterizing subdaily rainfall extremes under warming for design use.</li>
<li>Long-term field evaluation of green infrastructure hydrology and maintenance needs.</li>
<li>Optimization frameworks that integrate equity and procedural justice alongside cost and performance.</li>
<li>Coupled surface-subsurface models capturing urban groundwater responses to infiltration.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wswq1',
      question: {
        ELEMENTARY: 'Why does rain cause problems in cities?',
        MIDDLE_SCHOOL: 'What is a rain garden?',
        HIGH_SCHOOL: 'What does permeable pavement do?',
        UNDERGRADUATE: 'What does BMP stand for in stormwater practice?',
        GRADUATE: 'What is an MS4?',
        PHD: 'What does a dual drainage model represent?',
      },
      options: {
        ELEMENTARY: ['Hard surfaces stop it from soaking in', 'Rain is always bad', 'Cities never get rain', 'Rain only falls on grass'],
        MIDDLE_SCHOOL: ['A shallow planted area that collects runoff and lets it soak in', 'An indoor flower display', 'A vegetable patch watered by hose', 'A pond for raising fish'],
        HIGH_SCHOOL: ['Lets water pass through into a stone layer below', 'Blocks all water from entering the ground', 'Heats water to make it evaporate', 'Pumps water into storm drains faster'],
        UNDERGRADUATE: ['Best management practice', 'Big municipal pipe', 'Building material permit', 'Basic monitoring plan'],
        GRADUATE: ['A municipal separate storm sewer system that carries stormwater apart from sewage', 'A type of combined sewer tunnel', 'A national water quality laboratory', 'A rainfall measuring station'],
        PHD: ['Both the underground pipe network and the surface flow paths used when pipes surcharge', 'Two separate rain gauges', 'Only groundwater flow', 'Drinking water and wastewater networks'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Roads and roofs do not let rain soak in, so it runs off fast and can flood streets.',
        MIDDLE_SCHOOL: 'Rain gardens catch runoff from roofs and pavement and let it soak in slowly while plants and soil filter it.',
        HIGH_SCHOOL: 'Permeable pavement has gaps or pores so water drains into a stone storage layer and can infiltrate.',
        UNDERGRADUATE: 'A best management practice is any measure that reduces runoff quantity or improves its quality.',
        GRADUATE: 'MS4s convey stormwater separately from sanitary sewage and operate under permits requiring a stormwater program.',
        PHD: 'Dual drainage models couple pipe flow with overland flow, which matters once pipes fill during large storms.',
      },
    },
    {
      id: 'wswq2',
      question: {
        ELEMENTARY: 'Where do many storm drains lead?',
        MIDDLE_SCHOOL: 'What is nonpoint source pollution?',
        HIGH_SCHOOL: 'How does paving a watershed usually change the storm hydrograph?',
        UNDERGRADUATE: 'Why can capturing small, frequent storms treat a large share of annual pollution?',
        GRADUATE: 'What is a stormwater utility fee usually based on?',
        PHD: 'Why is nonstationarity a problem for stormwater design?',
      },
      options: {
        ELEMENTARY: ['To a big trash factory', 'To a stream, lake or the sea', 'Back up into the clouds', 'Into people\'s kitchens'],
        MIDDLE_SCHOOL: ['Pollution from one single factory pipe', 'Pollution from many scattered places at once', 'Pollution that only happens indoors', 'Pollution caused by clean rain'],
        HIGH_SCHOOL: ['The peak gets lower and arrives later', 'The peak gets higher and arrives sooner', 'Flow stops completely', 'Nothing changes'],
        UNDERGRADUATE: ['Small storms never carry pollutants', 'Most annual rainfall arrives in small storms and their first flush carries much of the load', 'Large storms are illegal to treat', 'Small storms only happen in winter'],
        GRADUATE: ['The number of people living in a home', 'The amount of a property\'s impervious area', 'The age of the building', 'The owner\'s income'],
        PHD: ['Rain gauges stop working over time', 'Changing rainfall statistics undermine design storms based on historical records', 'Pipes cannot be modeled', 'Rainfall never changes'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Many storm drains flow straight to streams, lakes or the sea, so only rain should go in them.',
        MIDDLE_SCHOOL: 'Runoff picks up oil, fertilizer, pet waste and litter from many places, which is nonpoint source pollution.',
        HIGH_SCHOOL: 'Hard surfaces send water to streams faster, so the peak rises and comes sooner.',
        UNDERGRADUATE: 'Because small storms supply most annual rainfall, treating the first portion of runoff captures much of the yearly load.',
        GRADUATE: 'Fees tied to impervious area link the charge to how much runoff a parcel generates.',
        PHD: 'If rainfall statistics shift, intensity-duration-frequency curves from past records may misstate future risk.',
      },
    },
    {
      id: 'wswq3',
      question: {
        ELEMENTARY: 'What is runoff?',
        MIDDLE_SCHOOL: 'What is an impervious surface?',
        HIGH_SCHOOL: 'What can happen in a combined sewer during heavy rain?',
        UNDERGRADUATE: 'What is a treatment train?',
        GRADUATE: 'What is an illicit discharge?',
        PHD: 'What does real-time control of stormwater storage involve?',
      },
      options: {
        ELEMENTARY: ['A race at school', 'Water stored in a bottle', 'Rainwater that flows over the ground instead of soaking in', 'Snow on a mountain'],
        MIDDLE_SCHOOL: ['Soft garden soil', 'A forest floor', 'A surface like asphalt that water cannot pass through', 'A grassy field'],
        HIGH_SCHOOL: ['The pipes freeze solid', 'All sewage disappears', 'Stormwater and untreated sewage can overflow into rivers', 'Rain turns into drinking water'],
        UNDERGRADUATE: ['A railway for moving water', 'A single large detention pond', 'Several BMPs linked in series so each handles what it does best', 'A training course for engineers'],
        GRADUATE: ['Rain falling on a roof', 'Snowmelt entering a stream', 'Any non-stormwater flow entering a storm sewer, such as a misconnected sewer line', 'Water leaving a rain garden'],
        PHD: ['Building bigger pipes', 'Removing all sensors', 'Using sensors, forecasts and actuated valves to operate storage before and during storms', 'Letting ponds fill without any management'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Runoff is rain that slides across hard ground instead of sinking into the soil.',
        MIDDLE_SCHOOL: 'Impervious surfaces like roads and roofs stop water from soaking into the ground.',
        HIGH_SCHOOL: 'Combined sewers carry both stormwater and sewage, so heavy rain can cause overflows into rivers.',
        UNDERGRADUATE: 'A treatment train combines practices, such as a swale followed by bioretention, to remove different pollutants.',
        GRADUATE: 'Illicit discharge detection and elimination is a standard element of municipal stormwater programs.',
        PHD: 'Real-time control operates existing storage actively, for example releasing water ahead of a forecast storm.',
      },
    },
    {
      id: 'wswq4',
      question: {
        ELEMENTARY: 'What is the only thing that belongs in a storm drain?',
        MIDDLE_SCHOOL: 'What does a detention pond do?',
        HIGH_SCHOOL: 'What is the difference between detention and retention?',
        UNDERGRADUATE: 'What does the Rational Method estimate?',
        GRADUATE: 'Why might a city still need storage tunnels when using green infrastructure?',
        PHD: 'What is effective impervious area?',
      },
      options: {
        ELEMENTARY: ['Old paint', 'Car oil', 'Litter', 'Rain'],
        MIDDLE_SCHOOL: ['Turns runoff into drinking water', 'Pumps water uphill', 'Grows fish for food', 'Holds stormwater for a while and releases it slowly'],
        HIGH_SCHOOL: ['They are exactly the same', 'Retention only works in winter', 'Detention adds pollutants', 'Detention stores water temporarily; retention holds it permanently to infiltrate, evaporate or be reused'],
        UNDERGRADUATE: ['Annual groundwater recharge', 'Pollutant concentration', 'Evaporation from ponds', 'Peak flow from a small drainage area'],
        GRADUATE: ['Green infrastructure never works', 'Tunnels are always cheaper', 'Laws forbid green infrastructure', 'Large storms and sewer overflow control may exceed what distributed green systems can handle'],
        PHD: ['All paved area in a city', 'Area covered by trees', 'Roof area only', 'Impervious surface hydraulically connected to the drainage network'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Storm drains are for rain only, because they often lead straight to streams and lakes.',
        MIDDLE_SCHOOL: 'Detention ponds hold water during storms and let it out slowly to reduce flooding downstream.',
        HIGH_SCHOOL: 'Detention slows water down; retention keeps it from leaving the site at all.',
        UNDERGRADUATE: 'The Rational Method multiplies a runoff coefficient, rainfall intensity and area to estimate peak flow.',
        GRADUATE: 'Green infrastructure reduces the load on gray systems, but very large events may still need concentrated storage.',
        PHD: 'Only connected impervious surfaces deliver runoff quickly to streams, so this metric predicts impacts better than total imperviousness.',
      },
    },
    {
      id: 'wswq5',
      question: {
        ELEMENTARY: 'How do trees help with rain in a town?',
        MIDDLE_SCHOOL: 'What is a swale?',
        HIGH_SCHOOL: 'Which practice uses roof space to hold rain?',
        UNDERGRADUATE: 'Why does BMP performance often decline over time?',
        GRADUATE: 'What are co-benefits of green infrastructure?',
        PHD: 'Why is long-term green infrastructure performance a contested research question?',
      },
      options: {
        ELEMENTARY: ['They catch rain on leaves and drink water with their roots', 'They make more rain fall', 'They block all storm drains', 'They turn rain into snow'],
        MIDDLE_SCHOOL: ['A shallow grassy channel that slows and carries runoff', 'A deep underground tunnel', 'A kind of swimming pool', 'A metal storm drain cover'],
        HIGH_SCHOOL: ['A green roof', 'A culvert', 'A storm drain inlet', 'A combined sewer'],
        UNDERGRADUATE: ['Clogging and lack of maintenance reduce how well they work', 'Rain stops falling on them', 'They grow larger every year', 'Regulations change their shape'],
        GRADUATE: ['Gains beyond runoff control, such as shade, habitat and lower urban heat', 'Extra pipe costs', 'Higher flood peaks', 'Fewer permit requirements'],
        PHD: ['Clogging, vegetation change and maintenance differences are poorly characterized over decades', 'It has been fully settled by one study', 'Green infrastructure has no measurable effects', 'It never needs monitoring'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Tree leaves slow the rain and roots soak up water, so less runs into the street.',
        MIDDLE_SCHOOL: 'Swales are shallow vegetated channels that slow runoff, let some soak in and trap sediment.',
        HIGH_SCHOOL: 'Green roofs hold rain in plants and growing media and release it slowly.',
        UNDERGRADUATE: 'Sediment clogs filters and pavement pores, so inspection and maintenance are part of design.',
        GRADUATE: 'Green infrastructure can cool streets, add habitat and improve neighborhoods as well as manage water.',
        PHD: 'Few long-term field records exist, so how performance evolves over decades remains uncertain.',
      },
    },
  ],
}

export default expansion
