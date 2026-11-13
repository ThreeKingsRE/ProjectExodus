import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'water-smart-agriculture',
  lessons: [
    {
      id: 'ra-ws-1',
      title: 'Every Drop Counts',
      content: {
        ELEMENTARY: `
<h2>Every Drop Counts on the Farm</h2>
<p>Plants are thirsty! Every carrot, apple and grain of rice needs water to grow. But fresh water is precious, and farmers use more of it than anyone else. Smart farmers have clever tricks to grow lots of food while saving water. Let's discover them together!</p>

<h3>Why Plants Need Water</h3>
<p>Plants drink water through their roots. The water travels up the stem to the leaves. Leaves use water, sunlight and air to make food for the plant. On a hot day, plants also "sweat" a little water out of their leaves to stay cool, just like you do.</p>
<ul>
<li><strong>Roots:</strong> the underground parts of a plant that drink water from the soil</li>
<li><strong>Soil:</strong> the dark earth where plants grow, full of tiny spaces that hold water</li>
<li><strong>Drought:</strong> a long time with very little rain, when soil and rivers dry out</li>
</ul>

<h3>Tricks for Saving Water</h3>
<p>Farmers have many ways to make every drop count:</p>
<ul>
<li><strong>Mulch:</strong> a blanket of straw, leaves or wood chips on top of soil that keeps water from drying up</li>
<li><strong>Drip line:</strong> a thin hose with tiny holes that gives water slowly, right at the plant's roots</li>
<li><strong>Rain barrel:</strong> a big container that catches rain from a roof so it can be used later</li>
</ul>
<p>Healthy soil is like a sponge. When it has lots of old leaves and roots mixed in, it soaks up rain and holds it for days. Bare, hard soil lets the rain run away.</p>

<h3>Water at the Right Time</h3>
<p>Watering in the early morning is smart. The sun is not hot yet, so less water floats away into the air. Watering at noon on a sunny day wastes water because much of it dries up before plants can drink it.</p>

<h3>You Can Help Too!</h3>
<ol>
<li>Put a layer of mulch around plants in a garden or pot.</li>
<li>Water plants in the morning, at the bottom near the roots.</li>
<li>Catch rain in a bucket and use it to water flowers.</li>
<li>Choose plants that grow well where you live without lots of extra water.</li>
</ol>

<h3>Think About It</h3>
<p>Next time it rains, watch where the water goes. Does it soak into the grass, or run across the pavement? Every drop that soaks into soil is a drop a plant can use later!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Farming That Uses Water Wisely</h2>
<p>Agriculture is the biggest user of fresh water in the world. In many countries, irrigation for crops takes the largest share of all the water people pull from rivers, lakes and underground aquifers. As populations grow and droughts become more common, farmers need ways to grow more food with less water. This is called water-smart agriculture.</p>

<h3>Where Does Farm Water Go?</h3>
<p>Not all the water a farmer applies reaches the plant's roots. Some is lost along the way:</p>
<ol>
<li><strong>Evaporation</strong> from the soil surface and from sprinkler spray in the air</li>
<li><strong>Runoff</strong> that flows off the field, sometimes carrying soil with it</li>
<li><strong>Deep drainage</strong> that sinks below the roots where plants cannot reach it</li>
<li><strong>Leaks</strong> from canals and pipes before the water even reaches the field</li>
</ol>
<p>Water-smart farming tries to shrink each of these losses.</p>

<h3>Comparing Irrigation Methods</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Water efficiency</th></tr></thead>
<tbody>
<tr><td>Flood or furrow</td><td>Water flows across the field or along channels</td><td>Usually the lowest; much is lost to runoff and drainage</td></tr>
<tr><td>Sprinklers</td><td>Water sprays through the air like rain</td><td>Medium; some evaporates, especially on windy, hot days</td></tr>
<tr><td>Drip irrigation</td><td>Tubes drip water right at the root zone</td><td>Usually the highest; little evaporation or runoff</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Irrigation:</strong> supplying water to crops by pipes, channels or sprinklers instead of relying only on rain</li>
<li><strong>Aquifer:</strong> a layer of underground rock or sand that holds water people can pump up through wells</li>
<li><strong>Evaporation:</strong> water turning into vapor and rising into the air, which is faster when it is hot and windy</li>
<li><strong>Soil organic matter:</strong> decayed plant and animal material in soil that helps it hold more water</li>
<li><strong>Drought-tolerant crop:</strong> a plant variety that can survive and still produce food with less water</li>
<li><strong>Water harvesting:</strong> collecting and storing rainwater so it can be used during dry times</li>
</ul>

<h3>Building a Spongy Soil</h3>
<p>One of the most powerful water tools is not a machine at all. It is healthy soil. Soil with more organic matter has more tiny pores that hold water. Cover crops, compost and leaving crop leftovers on the surface all help. A covered soil surface also stays cooler, so less water evaporates.</p>

<h3>Why It Matters</h3>
<p>When farms pump more groundwater than rain can refill, wells must go deeper and some even run dry. Saving water on farms keeps rivers flowing for fish and leaves water for towns and future generations.</p>
`,
        HIGH_SCHOOL: `
<h2>Water-Smart Agriculture: More Crop per Drop</h2>
<p>Feeding a growing population in a warming climate means farmers face a double squeeze: more demand for food and less reliable water. Water-smart agriculture combines efficient irrigation, drought-resistant practices and water harvesting to keep yields stable while protecting rivers and aquifers. The goal is often summarized as "more crop per drop."</p>

<h3>Where Water Is Lost</h3>
<p>The water a crop actually uses is mostly <em>transpiration</em>, water that moves through the plant and exits its leaves. Everything else is, from the crop's perspective, a loss or a transfer. Soil evaporation, surface runoff and drainage below the roots all reduce how much applied water becomes harvest. Conveyance losses from unlined canals can be large before water even reaches the field.</p>

<h3>Irrigation Efficiency Compared</h3>
<table>
<thead><tr><th>System</th><th>Typical efficiency</th><th>Advantages</th><th>Drawbacks</th></tr></thead>
<tbody>
<tr><td>Surface (flood, furrow)</td><td>Lowest</td><td>Cheap, simple, low energy</td><td>Uneven watering, runoff, waterlogging and salt build-up</td></tr>
<tr><td>Sprinkler and center pivot</td><td>Moderate to high</td><td>Covers large areas evenly</td><td>Wind drift and evaporation, needs pumping energy</td></tr>
<tr><td>Drip and micro-irrigation</td><td>Highest</td><td>Precise, can deliver fertilizer too</td><td>Higher cost, clogging, needs maintenance and filtering</td></tr>
</tbody>
</table>
<p>Efficiency is not only about hardware. <em>Irrigation scheduling</em>, deciding when and how much to water using soil moisture sensors or weather-based estimates, can save as much water as a new system.</p>

<h3>Drought-Resistant Practices</h3>
<ul>
<li><strong>Mulching:</strong> covering soil with residue or other material to cut evaporation and keep the surface cool</li>
<li><strong>Conservation tillage:</strong> reducing soil disturbance so structure and pores that store water stay intact</li>
<li><strong>Cover cropping:</strong> growing plants between main crops to build organic matter and improve infiltration</li>
<li><strong>Drought-tolerant varieties:</strong> crop types bred or selected to keep producing under water stress</li>
<li><strong>Deficit irrigation:</strong> deliberately supplying less water than the crop's full demand at less sensitive growth stages</li>
<li><strong>Infiltration:</strong> the process of water soaking into the soil instead of running off the surface</li>
</ul>

<h3>Harvesting Water</h3>
<p>Water harvesting captures rain where it falls. Examples include farm ponds, rooftop tanks, contour bunds and swales that slow water on slopes, and terraces. Many of these methods have been used for centuries by farming communities in dry regions, and local knowledge often shows where water naturally collects.</p>

<h3>The Efficiency Paradox</h3>
<p>Here is a surprising trade-off: when farmers switch to more efficient irrigation, they sometimes use the "saved" water to plant more land or thirstier crops. Water that used to seep back into rivers or aquifers is then consumed. Real savings at the scale of a whole river basin need rules or limits on total water use, not just better equipment.</p>

<h3>Solutions in Practice</h3>
<ol>
<li>Build soil organic matter so fields store more rain.</li>
<li>Match irrigation to crop needs using sensors and weather data.</li>
<li>Choose crops and varieties suited to the local climate.</li>
<li>Capture and store rainfall during wet periods.</li>
<li>Manage water at the basin level so savings are real.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Water-Use Efficiency in Agriculture</h2>
<p>Agricultural water management sits at the intersection of plant physiology, soil physics, hydrology and economics. To evaluate whether a practice is truly "water-smart," analysts must be clear about which water they are counting, where it goes and at what scale. This lesson builds the core concepts for analyzing water-use efficiency, deficit irrigation and drought adaptation.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Evapotranspiration:</strong> the combined water loss from soil evaporation and plant transpiration, the main consumptive use of a crop field</li>
<li><strong>Water-use efficiency:</strong> the amount of biomass or yield produced per unit of water used, defined differently by agronomists and physiologists</li>
<li><strong>Crop water productivity:</strong> yield or economic value produced per unit of water consumed, usually per unit of evapotranspiration</li>
<li><strong>Irrigation efficiency:</strong> the share of applied water that is beneficially used by the crop rather than lost to runoff, drainage or evaporation</li>
<li><strong>Regulated deficit irrigation:</strong> supplying below full crop demand during growth stages that tolerate stress, while protecting sensitive stages</li>
<li><strong>Available water capacity:</strong> the water a soil can hold between field capacity and the wilting point, which plants can actually extract</li>
</ul>

<h3>Efficiency Versus Productivity</h3>
<p>Irrigation efficiency is an engineering ratio: how much of the water applied reaches the root zone and is used. Crop water productivity is an agronomic ratio: how much harvest you get per unit of water consumed. A drip system can raise irrigation efficiency without changing productivity, if the crop transpires the same amount. Productivity improves mainly by reducing non-beneficial evaporation, improving fertility and pest control so plants convert water into yield, and choosing varieties with a better harvest index.</p>

<h3>Water Accounting at Different Scales</h3>
<table>
<thead><tr><th>Scale</th><th>Question asked</th><th>Common pitfall</th></tr></thead>
<tbody>
<tr><td>Plant or leaf</td><td>How much carbon is fixed per unit water transpired?</td><td>Ignoring field-level losses</td></tr>
<tr><td>Field</td><td>How much applied water becomes yield?</td><td>Treating drainage as lost when it recharges aquifers</td></tr>
<tr><td>Irrigation district</td><td>How well is water delivered and shared?</td><td>Ignoring return flows reused downstream</td></tr>
<tr><td>River basin</td><td>How much water is consumed versus returned?</td><td>Counting field savings that are actually re-used elsewhere</td></tr>
</tbody>
</table>
<p>The key distinction is between <em>consumptive</em> use (evapotranspiration, which leaves the basin as vapor) and <em>non-consumptive</em> losses that return to rivers or aquifers. Only reducing consumptive use frees water at basin scale.</p>

<h3>Deficit Irrigation Logic</h3>
<p>Yield response to water is not linear. Many crops show a plateau near full irrigation, where the last increments of water add little yield. Withholding some water during tolerant stages, such as certain vegetative phases, can save water with modest yield loss, while stress during flowering or grain fill is usually far more damaging. For some fruit crops, mild stress can even improve quality. The economic optimum depends on the price of water, the crop price and how steeply yield falls.</p>

<h3>Drought Adaptation Toolkit</h3>
<ol>
<li>Characterize soil available water capacity and rooting depth for each field.</li>
<li>Estimate crop evapotranspiration from weather data and crop coefficients.</li>
<li>Monitor soil moisture or plant stress to trigger irrigation.</li>
<li>Identify critical growth stages and protect them during shortages.</li>
<li>Diversify crops and planting dates to spread drought risk.</li>
<li>Build soil organic matter and surface cover to raise infiltration and storage.</li>
</ol>

<h3>Applying the Analysis</h3>
<p>When evaluating a proposed practice, ask: does it reduce consumptive use or merely move water around? Does it raise yield per unit evapotranspiration? Who downstream depended on the previous return flows? Clear answers prevent well-intended investments from deepening scarcity.</p>
`,
        GRADUATE: `
<h2>Water Productivity, Virtual Water and Climate-Smart Water Management</h2>
<p>At the graduate level, water-smart agriculture becomes a question of allocation and governance across sectors, regions and generations. Farm-level efficiency gains matter, but outcomes depend on water rights, pricing, trade and the institutions that manage shared basins under climate change. This lesson connects water productivity metrics with policy and planning tools.</p>

<h3>Key Frameworks</h3>
<ul>
<li><strong>Virtual water:</strong> the water used to produce a good, which is implicitly traded when that good moves between regions</li>
<li><strong>Water footprint:</strong> an accounting of the total fresh water used to make a product, often split into green, blue and grey components</li>
<li><strong>Green water:</strong> rainwater stored in soil and used directly by plants, the basis of rain-fed farming</li>
<li><strong>Blue water:</strong> surface and groundwater withdrawn from rivers, lakes and aquifers, mainly for irrigation</li>
<li><strong>Climate-smart agriculture:</strong> an approach that aims to raise productivity, strengthen adaptation and reduce emissions together</li>
<li><strong>Managed aquifer recharge:</strong> intentionally refilling aquifers with surplus surface water or treated water for later use</li>
</ul>

<h3>Virtual Water and Trade</h3>
<p>Water-scarce regions can in principle import water-intensive goods rather than grow them, conserving local water. In practice, trade patterns are driven by land, labor, subsidies and policy far more than by water. Some dry regions export thirsty crops while depleting aquifers. Virtual water analysis is useful for revealing these hidden flows, but it says little by itself about whether the water used had a high opportunity cost or whether its use was sustainable.</p>

<h3>Green Water Matters</h3>
<p>Most of the world's cropland is rain-fed, so improving green water productivity has enormous reach. Practices that increase infiltration, reduce soil evaporation and extend the period plants can draw on stored soil water, including residue retention, cover crops and supplemental irrigation at critical stages, are often among the most cost-effective adaptation options for smallholders.</p>

<h3>Policy Instruments Compared</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Key challenge</th></tr></thead>
<tbody>
<tr><td>Volumetric pricing</td><td>Charging per unit of water delivered</td><td>Metering costs and political resistance</td></tr>
<tr><td>Caps and tradable allocations</td><td>Limiting total use and letting users trade shares</td><td>Defining rights fairly, protecting third parties and the environment</td></tr>
<tr><td>Efficiency subsidies</td><td>Co-funding drip or sprinkler systems</td><td>Rebound effects that increase consumption</td></tr>
<tr><td>Groundwater regulation</td><td>Well permits, metering, pumping limits</td><td>Enforcement across many dispersed users</td></tr>
<tr><td>Energy pricing for pumps</td><td>Indirectly signaling water cost</td><td>Equity impacts on small farmers</td></tr>
</tbody>
</table>

<h3>Climate-Smart Water Management</h3>
<p>Climate change shifts the timing and reliability of water supply: more intense rainfall, longer dry spells, earlier snowmelt and higher evaporative demand. Adaptive management relies on storage in many forms (soils, small reservoirs, aquifers), flexible allocation rules that respond to drought conditions, and early warning systems. Infrastructure built for historical averages may be poorly suited to new extremes.</p>

<h3>Equity and Institutions</h3>
<p>Water reforms create winners and losers. Smallholders, women farmers and Indigenous communities may hold informal or customary rights that formal allocation systems overlook. Participatory basin governance, recognition of customary rights and attention to who can afford new technologies shape whether water-smart agriculture reduces or deepens inequality.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the hydrological boundary and separate consumptive from non-consumptive use.</li>
<li>Distinguish green and blue water contributions.</li>
<li>Assess rebound risks and whether total consumption is capped.</li>
<li>Test interventions against drought and climate scenarios.</li>
<li>Identify affected users, including those with customary rights.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Agricultural Water Management</h2>
<p>Research on agricultural water now spans molecular plant physiology, sensing and control engineering, and coupled human-natural systems modeling. Central open questions include how to predict crop water stress accurately enough to automate irrigation, how to scale field findings to basins, and how to manage the water-food-energy nexus under deep climate uncertainty. This lesson surveys methods and debates for advanced study.</p>

<h3>Crop Water Stress Physiology</h3>
<p>Plants respond to drying soil through hydraulic and chemical signals. Stomatal closure, often mediated by abscisic acid, limits transpiration but also carbon uptake. Species differ in how tightly they regulate leaf water potential, a spectrum often described as more isohydric or more anisohydric behavior. Root architecture, osmotic adjustment and hydraulic conductance all shape drought responses. Translating these traits into breeding targets is difficult because a trait that helps under terminal drought may cost yield in wetter years.</p>

<h3>Key Methods</h3>
<ul>
<li><strong>Crop water stress index:</strong> a measure derived from canopy temperature relative to well-watered and non-transpiring baselines</li>
<li><strong>Thermal remote sensing:</strong> using infrared imagery of canopy temperature to map transpiration and stress across fields</li>
<li><strong>Crop simulation models:</strong> process-based models that simulate growth, water uptake and yield from weather, soil and management inputs</li>
<li><strong>Surface energy balance models:</strong> methods that estimate evapotranspiration as the residual of radiation, sensible and soil heat fluxes</li>
<li><strong>Model predictive control:</strong> an automation approach that uses forecasts and models to choose optimal irrigation actions over a moving horizon</li>
<li><strong>Socio-hydrology:</strong> the study of two-way feedbacks between human water use decisions and hydrological systems over time</li>
</ul>

<h3>Precision Irrigation</h3>
<p>Variable-rate irrigation adjusts water within fields according to soil and crop variability. The promise depends on reliable spatial data, robust stress sensing and models that capture soil-plant-atmosphere dynamics. Research questions include optimal sensor density, fusion of satellite, drone and in-field data, and how much spatial heterogeneity justifies variable-rate investment. Closed-loop control that combines sensing with weather forecasts is an active area, though field validation across diverse conditions remains limited.</p>

<h3>The Water-Food-Energy Nexus</h3>
<p>Groundwater irrigation links water and energy directly: pumping energy rises as water tables fall, and subsidized electricity can accelerate depletion. Solar-powered pumping reduces emissions and costs for farmers but, with near-zero marginal cost, may increase extraction unless paired with limits. Biofuel crops, hydropower operations and fertilizer production add further couplings. Nexus models attempt to capture these interactions but often struggle with scale mismatches and behavioral responses.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Does efficient irrigation save water?</td><td>Basin-scale studies often find rebound increases consumptive use</td></tr>
<tr><td>Value of water footprint metrics</td><td>Volumetric footprints may ignore local scarcity and opportunity cost</td></tr>
<tr><td>Breeding for drought tolerance</td><td>Trade-offs between survival traits and yield potential vary by environment</td></tr>
<tr><td>Solar pumping and groundwater</td><td>Low marginal costs can accelerate depletion without governance</td></tr>
<tr><td>Scaling soil health effects on water</td><td>Effects of organic matter on water holding vary with texture and are debated in magnitude</td></tr>
</tbody>
</table>

<h3>Modeling Under Uncertainty</h3>
<p>Coupling crop models with hydrological and economic models introduces compounding uncertainty from climate projections, parameterization and human behavior. Ensemble approaches, sensitivity analysis and robust decision frameworks help identify strategies that perform acceptably across many futures. Agent-based models represent heterogeneous farmers responding to prices, rules and neighbors, revealing emergent outcomes such as aquifer tragedies of the commons.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Field-validated closed-loop irrigation control across diverse crops and climates.</li>
<li>Better representation of root water uptake and deep soil water in crop models.</li>
<li>Empirical basin-scale evaluation of efficiency programs and rebound.</li>
<li>Integration of local and Indigenous water knowledge into participatory models.</li>
<li>Governance designs that pair solar pumping with sustainable extraction limits.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rwsq1',
      question: {
        ELEMENTARY: 'What helps soil hold water like a sponge?',
        MIDDLE_SCHOOL: 'Which irrigation method usually uses water most efficiently?',
        HIGH_SCHOOL: 'What is deficit irrigation?',
        UNDERGRADUATE: 'What is crop water productivity?',
        GRADUATE: 'What is managed aquifer recharge?',
        PHD: 'What does the crop water stress index measure?',
      },
      options: {
        ELEMENTARY: ['Old leaves, roots and mulch mixed into the soil', 'Bare, hard dirt', 'Concrete on top', 'Only rocks'],
        MIDDLE_SCHOOL: ['Drip irrigation', 'Flood irrigation', 'Sprinklers at noon on a windy day', 'Leaving the hose running'],
        HIGH_SCHOOL: ['Deliberately giving less water than full crop demand at less sensitive stages', 'Flooding fields every day', 'Never watering crops at all', 'Watering only weeds'],
        UNDERGRADUATE: ['Yield or value produced per unit of water consumed', 'The total water stored in a reservoir', 'The speed of water in a canal', 'The cost of an irrigation pump'],
        GRADUATE: ['Intentionally refilling aquifers with surplus water for later use', 'Pumping aquifers dry as fast as possible', 'Paving over recharge zones', 'Selling groundwater to other countries'],
        PHD: ['Plant stress inferred from canopy temperature relative to wet and non-transpiring baselines', 'The salt content of irrigation water', 'The price of water in a market', 'The depth of the water table'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Healthy soil full of old plant bits and covered with mulch soaks up rain and holds it for plants.',
        MIDDLE_SCHOOL: 'Drip tubes deliver water right at the roots, so very little is lost to evaporation or runoff.',
        HIGH_SCHOOL: 'Deficit irrigation saves water by supplying less than full demand when the crop can tolerate it.',
        UNDERGRADUATE: 'Crop water productivity relates harvest to the water consumed, usually evapotranspiration.',
        GRADUATE: 'Managed aquifer recharge stores surplus water underground so it is available in dry periods.',
        PHD: 'Stressed plants close stomata and warm up, so canopy temperature against baselines indicates stress.',
      },
    },
    {
      id: 'rwsq2',
      question: {
        ELEMENTARY: 'When is the best time to water a garden?',
        MIDDLE_SCHOOL: 'What is an aquifer?',
        HIGH_SCHOOL: 'Why does mulching help in dry weather?',
        UNDERGRADUATE: 'What is evapotranspiration?',
        GRADUATE: 'What is green water?',
        PHD: 'Why can solar-powered pumping speed up groundwater depletion?',
      },
      options: {
        ELEMENTARY: ['At noon when the sun is hottest', 'Early in the morning', 'Never', 'Only during a rainstorm'],
        MIDDLE_SCHOOL: ['A type of sprinkler', 'An underground layer of rock or sand that holds water', 'A water tower in town', 'A fish that lives in rivers'],
        HIGH_SCHOOL: ['It makes the soil hotter', 'It covers the soil, cutting evaporation and keeping it cool', 'It pulls water out of the roots', 'It stops rain from reaching the soil'],
        UNDERGRADUATE: ['Water lost to leaks in canals', 'Soil evaporation plus plant transpiration combined', 'Water flowing into a river', 'Rain that falls on a roof'],
        GRADUATE: ['Water dyed green for tracking', 'Rainwater stored in soil and used directly by plants', 'Polluted water from farms', 'Water pumped from deep wells'],
        PHD: ['Solar panels heat the aquifer', 'Near-zero marginal pumping cost can encourage more extraction without limits', 'Solar pumps only work at night', 'Solar power makes wells shallower'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'In the cool morning less water dries up, so plants get to drink more of it.',
        MIDDLE_SCHOOL: 'Aquifers are underground layers that hold water, which people reach with wells.',
        HIGH_SCHOOL: 'A mulch cover shades the soil, slowing evaporation so more water stays for the crop.',
        UNDERGRADUATE: 'Evapotranspiration combines evaporation from soil and transpiration through plants.',
        GRADUATE: 'Green water is soil moisture from rain, the basis of rain-fed farming.',
        PHD: 'Once installed, solar pumping costs little to run, so extraction can rise unless governed.',
      },
    },
    {
      id: 'rwsq3',
      question: {
        ELEMENTARY: 'What is a rain barrel for?',
        MIDDLE_SCHOOL: 'Which is a way water is lost before it reaches plant roots?',
        HIGH_SCHOOL: 'What is the "efficiency paradox" in irrigation?',
        UNDERGRADUATE: 'Why does stress during flowering usually hurt yield more than stress at other times?',
        GRADUATE: 'What is a common problem with subsidies for efficient irrigation equipment?',
        PHD: 'What does socio-hydrology study?',
      },
      options: {
        ELEMENTARY: ['Keeping fish', 'Storing toys', 'Catching rain to use later', 'Making juice'],
        MIDDLE_SCHOOL: ['Photosynthesis', 'Root growth', 'Runoff flowing off the field', 'Seed germination'],
        HIGH_SCHOOL: ['Efficient systems always save water at every scale', 'Drip systems use more water than flooding', '"Saved" water may be used to expand irrigation, so total use does not fall', 'Farmers stop irrigating entirely'],
        UNDERGRADUATE: ['Flowers need no water', 'Plants stop growing roots', 'Flowering and grain fill are sensitive stages that determine harvest', 'Leaves fall off during flowering'],
        GRADUATE: ['They always reduce basin water use', 'They make irrigation impossible', 'Rebound effects can increase total consumption', 'They are only for cities'],
        PHD: ['The chemistry of salt water', 'Ocean currents', 'Two-way feedbacks between human water decisions and hydrology', 'The history of dams only'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A rain barrel catches rain from a roof so you can water plants with it later.',
        MIDDLE_SCHOOL: 'Runoff carries water off the field before it can soak in for the roots.',
        HIGH_SCHOOL: 'Without limits on total use, efficiency can lead to more planting and more water consumed.',
        UNDERGRADUATE: 'Water stress during flowering or grain fill strongly reduces yield, so these stages are protected.',
        GRADUATE: 'Subsidized efficiency can lead farmers to expand or switch to thirstier crops, raising consumption.',
        PHD: 'Socio-hydrology examines how people and water systems shape each other over time.',
      },
    },
    {
      id: 'rwsq4',
      question: {
        ELEMENTARY: 'What is a drought?',
        MIDDLE_SCHOOL: 'How does soil organic matter help farms in dry times?',
        HIGH_SCHOOL: 'What is water harvesting?',
        UNDERGRADUATE: 'At basin scale, which kind of water use must be reduced to truly free up water?',
        GRADUATE: 'What does virtual water describe?',
        PHD: 'What is model predictive control in irrigation?',
      },
      options: {
        ELEMENTARY: ['A big flood', 'A type of plant', 'A rain cloud', 'A long time with very little rain'],
        MIDDLE_SCHOOL: ['It makes soil waterproof', 'It turns soil into sand', 'It attracts more weeds only', 'It helps soil hold more water'],
        HIGH_SCHOOL: ['Pumping water from the ocean', 'Selling water to cities', 'Draining wetlands', 'Capturing rain where it falls with ponds, tanks or terraces'],
        UNDERGRADUATE: ['Water that drains back to aquifers', 'Water returned to rivers', 'Water stored in tanks', 'Consumptive use such as evapotranspiration'],
        GRADUATE: ['Water in video games', 'Water vapor in clouds', 'Water lost to leaks', 'Water used to produce goods, implicitly traded with them'],
        PHD: ['A fixed watering timer', 'Watering by hand only', 'A pricing rule for water', 'Using forecasts and models to choose irrigation actions over a moving horizon'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A drought is a long dry time when rain stays away and soil dries out.',
        MIDDLE_SCHOOL: 'Organic matter creates tiny pores that hold water like a sponge.',
        HIGH_SCHOOL: 'Water harvesting collects rain in ponds, tanks, swales or terraces for later use.',
        UNDERGRADUATE: 'Return flows can be reused downstream; only cutting consumptive use frees water for the basin.',
        GRADUATE: 'Virtual water is the water embedded in products that moves with trade.',
        PHD: 'Model predictive control repeatedly optimizes irrigation decisions using models and forecasts.',
      },
    },
    {
      id: 'rwsq5',
      question: {
        ELEMENTARY: 'What does a drip line do?',
        MIDDLE_SCHOOL: 'What is a drought-tolerant crop?',
        HIGH_SCHOOL: 'What is irrigation scheduling?',
        UNDERGRADUATE: 'What is available water capacity of a soil?',
        GRADUATE: 'Why can water reforms deepen inequality?',
        PHD: 'Why is breeding for drought tolerance difficult?',
      },
      options: {
        ELEMENTARY: ['Gives water slowly right at the plant roots', 'Sprays water high into the sky', 'Pulls water out of the soil', 'Freezes water'],
        MIDDLE_SCHOOL: ['A plant that can survive and produce with less water', 'A plant that needs to be flooded', 'A plant that only grows in water', 'A plastic plant'],
        HIGH_SCHOOL: ['Deciding when and how much to water using sensors or weather data', 'Watering on the same day every year', 'Building new canals', 'Choosing the color of pipes'],
        UNDERGRADUATE: ['Water held between field capacity and the wilting point that plants can extract', 'Water held in a farm pond', 'Rain that falls in one year', 'The volume of an irrigation tank'],
        GRADUATE: ['Customary or informal rights of smallholders and Indigenous communities may be overlooked', 'Everyone always gains equally', 'Reforms never affect farmers', 'Water has no economic value'],
        PHD: ['Traits that help survival under drought may cost yield in wetter years', 'Plants cannot be bred at all', 'Drought never affects yield', 'All crops respond identically to stress'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A drip line has tiny holes that slowly give water right where roots can drink it.',
        MIDDLE_SCHOOL: 'Drought-tolerant crops are chosen or bred to keep producing when water is short.',
        HIGH_SCHOOL: 'Good scheduling matches water to crop needs and can save as much as new equipment.',
        UNDERGRADUATE: 'Available water capacity is the plant-usable water a soil stores between those two limits.',
        GRADUATE: 'Formal systems can miss customary rights, and new technology may favor those who can afford it.',
        PHD: 'Drought traits involve trade-offs whose value depends on the environment the crop faces.',
      },
    },
  ],
}

export default expansion
