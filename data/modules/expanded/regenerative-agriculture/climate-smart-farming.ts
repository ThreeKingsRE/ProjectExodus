import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'climate-smart-farming',
  lessons: [
    {
      id: 'ra-clim-1',
      title: 'Farms and a Changing Climate',
      content: {
        ELEMENTARY: `
<h2>Farms That Help Fight Climate Change</h2>
<p>The weather is getting a bit wild. Some places have more very hot days, some get big storms, and some go a long time without rain. This is because our planet is warming up. Farmers feel these changes first, because their plants and animals live outside. The good news? Farmers can also help slow down warming and get ready for wild weather!</p>

<h3>What Is Climate Change?</h3>
<p>Some gases in the air act like a cozy blanket around the Earth. When we burn fuel in cars and factories, we add more of these gases, so the blanket gets thicker and the Earth gets warmer.</p>
<ul>
<li><strong>Climate:</strong> the usual weather a place has over many, many years</li>
<li><strong>Greenhouse gas:</strong> a gas in the air that traps heat and warms the Earth</li>
<li><strong>Carbon dioxide:</strong> a gas we breathe out and make when we burn fuel, which plants breathe in</li>
</ul>

<h3>Plants Are Carbon Catchers</h3>
<p>Plants breathe in carbon dioxide from the air and use sunlight to grow. Some of that carbon goes down through their roots into the soil. When farmers keep plants growing all year and do not dig up the soil too much, more carbon stays safely underground.</p>

<h3>Getting Ready for Wild Weather</h3>
<p>Farmers use clever tricks to keep their farms safe when the weather is tough:</p>
<ol>
<li><strong>Cover the soil:</strong> plants and straw keep soil from drying out or washing away.</li>
<li><strong>Plant trees:</strong> trees give shade to animals and block strong winds.</li>
<li><strong>Grow many kinds of crops:</strong> if one crop has a bad year, another may do well.</li>
<li><strong>Save rainwater:</strong> ponds and tanks store water for dry days.</li>
</ol>
<ul>
<li><strong>Drought:</strong> a long time with much less rain than usual</li>
<li><strong>Shade:</strong> a cool spot where trees or roofs block the hot sun</li>
</ul>

<h3>How You Can Help</h3>
<p>You can be a climate helper too! Eat the food on your plate so less gets thrown away. Try fruits and vegetables grown near where you live. Plant a seed in a pot or garden and watch it catch carbon as it grows.</p>

<h3>Think About It</h3>
<p>Every green leaf is a tiny carbon catcher. When farmers grow lots of plants and care for their soil, they help the whole planet stay cooler.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Climate-Smart Farming: Adapting and Helping</h2>
<p>Farming and climate change are connected in two directions. Farms are affected by climate change through heat, droughts, floods and new pests. Farms also contribute to climate change by releasing greenhouse gases. Climate-smart farming tries to do three things at once: keep food production strong, help farms cope with changing weather, and reduce or remove greenhouse gases.</p>

<h3>The Three Goals</h3>
<ol>
<li><strong>Productivity:</strong> growing enough food and earning a fair living.</li>
<li><strong>Adaptation:</strong> preparing for heat, drought, floods and other changes.</li>
<li><strong>Mitigation:</strong> reducing emissions and storing carbon in soil and trees.</li>
</ol>

<h3>Where Farm Emissions Come From</h3>
<table>
<thead><tr><th>Source</th><th>Main gas</th><th>How it happens</th></tr></thead>
<tbody>
<tr><td>Cattle and sheep digestion</td><td>Methane</td><td>Microbes in their stomachs make methane, which animals burp out</td></tr>
<tr><td>Fertilizer use</td><td>Nitrous oxide</td><td>Soil microbes turn extra nitrogen into a powerful warming gas</td></tr>
<tr><td>Flooded rice fields</td><td>Methane</td><td>Microbes in waterlogged soil produce methane</td></tr>
<tr><td>Manure storage</td><td>Methane and nitrous oxide</td><td>Manure breaks down without air in ponds and piles</td></tr>
<tr><td>Fuel and land clearing</td><td>Carbon dioxide</td><td>Tractors burn fuel and cleared forests release stored carbon</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Adaptation:</strong> changing how we do things to cope with a changing climate</li>
<li><strong>Mitigation:</strong> actions that reduce greenhouse gases or remove them from the air</li>
<li><strong>Methane:</strong> a strong greenhouse gas released by cattle digestion, rice paddies and manure</li>
<li><strong>Nitrous oxide:</strong> a powerful greenhouse gas released when soil microbes process extra nitrogen</li>
<li><strong>Carbon sequestration:</strong> capturing carbon dioxide and storing it in soil, plants or trees</li>
<li><strong>Resilience:</strong> the ability to recover quickly after a shock like a drought or flood</li>
</ul>

<h3>Practices That Help</h3>
<p>Cover crops protect soil and add carbon. Using fertilizer at the right time and in the right amount cuts nitrous oxide. Planting trees along fields shades animals and stores carbon. Drought-tolerant seeds and better water storage help crops survive dry spells. Many of these practices do more than one job at once.</p>

<h3>Why It Matters</h3>
<p>Farmers feed the world, and a stable climate helps them do it. Climate-smart choices protect harvests today while making the planet safer for the future.</p>
`,
        HIGH_SCHOOL: `
<h2>Climate-Smart Agriculture: Mitigation and Adaptation</h2>
<p>Agriculture is uniquely exposed to climate change and is also a significant source of greenhouse gases. When land-use change such as deforestation is included, food systems account for a substantial share of global emissions. Climate-smart agriculture is an approach that seeks to raise productivity, build resilience and reduce emissions together, recognizing that the best mix of practices depends on local conditions.</p>

<h3>How Climate Change Affects Farms</h3>
<ul>
<li><strong>Heat stress:</strong> high temperatures that reduce crop yields and harm livestock health</li>
<li><strong>Shifting rainfall:</strong> changes in when and how much rain falls, causing both droughts and floods</li>
<li><strong>Pest range expansion:</strong> insects and diseases moving into new areas as temperatures rise</li>
<li><strong>Growing season change:</strong> earlier springs or later frosts that shift planting windows</li>
<li><strong>Extreme events:</strong> more intense storms, heat waves and floods that damage crops and infrastructure</li>
<li><strong>Soil degradation:</strong> erosion and loss of organic matter made worse by heavy rain and heat</li>
</ul>

<h3>Mitigation Strategies</h3>
<table>
<thead><tr><th>Practice</th><th>Main effect</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Precise nitrogen management</td><td>Less nitrous oxide and runoff</td><td>Requires testing and planning</td></tr>
<tr><td>Cover crops and reduced tillage</td><td>Soil carbon gains, less erosion</td><td>Carbon gains vary and can be reversed</td></tr>
<tr><td>Agroforestry and hedgerows</td><td>Carbon stored in trees, shade</td><td>Takes land and years to establish</td></tr>
<tr><td>Improved livestock feed and grazing</td><td>Lower methane per unit of food</td><td>Benefits differ by system</td></tr>
<tr><td>Alternate wetting and drying in rice</td><td>Less methane from paddies</td><td>Can raise nitrous oxide if poorly managed</td></tr>
<tr><td>Reducing food waste</td><td>Less production needed overall</td><td>Depends on behavior across the supply chain</td></tr>
</tbody>
</table>

<h3>Adaptation Strategies</h3>
<ol>
<li><strong>Diversification:</strong> growing several crops and raising different animals spreads risk.</li>
<li><strong>Water management:</strong> efficient irrigation, rainwater harvesting and soil that holds more water.</li>
<li><strong>Climate-adapted varieties:</strong> seeds bred or selected for heat, drought or flood tolerance.</li>
<li><strong>Adjusted timing:</strong> shifting planting dates to match new seasons.</li>
<li><strong>Information:</strong> weather forecasts and early-warning systems guide decisions.</li>
</ol>

<h3>Synergies and Trade-offs</h3>
<p>Some practices help both adaptation and mitigation. Healthier soil with more organic matter holds more water during drought and stores carbon. Trees shade animals and store carbon. But not every practice is a win-win. Expanding irrigation can protect yields while increasing energy use, and draining wetlands for farming releases large amounts of carbon. Good decisions weigh the whole picture.</p>

<h3>Real-World Applications</h3>
<p>Farmers around the world are combining old and new knowledge. Many traditional practices, such as mixing crops, keeping trees on farms and saving locally adapted seeds, already build resilience. Modern tools add precise weather data, soil sensors and improved varieties. Climate-smart farming works best when it builds on what local farmers already know.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Farm-Level Climate Strategies</h2>
<p>At the farm level, climate strategy involves two linked analyses: a greenhouse gas footprint that identifies where emissions come from, and a resilience assessment that identifies where climate risks threaten the operation. Combining them reveals practices that deliver co-benefits and highlights trade-offs that must be managed. This lesson introduces the core concepts, accounting logic and planning methods.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Carbon dioxide equivalent:</strong> a common unit that expresses different gases by their warming effect relative to carbon dioxide</li>
<li><strong>Global warming potential:</strong> a measure of how much heat a gas traps over a set period compared with carbon dioxide</li>
<li><strong>Emission intensity:</strong> emissions per unit of product, such as per kilogram of grain or liter of milk</li>
<li><strong>Carbon footprint:</strong> the total greenhouse gas emissions associated with a farm or product</li>
<li><strong>Permanence:</strong> how long stored carbon remains out of the atmosphere before it could be released</li>
<li><strong>Vulnerability:</strong> the combination of exposure, sensitivity and limited capacity to adapt to climate hazards</li>
</ul>

<h3>Building a Farm Footprint</h3>
<p>A farm footprint typically sums emissions from enteric fermentation, manure, fertilizer and soil nitrous oxide, fuel and electricity, and purchased inputs such as feed and fertilizer manufacture. Removals from soil carbon gains and trees are tracked separately because they are less certain and can be reversed. Methane and nitrous oxide are converted to carbon dioxide equivalents, but the conversion depends on the time horizon chosen. Methane is short-lived but potent, so its relative weight is much larger over twenty years than over a hundred.</p>

<h3>Absolute Versus Intensity Metrics</h3>
<table>
<thead><tr><th>Metric</th><th>What it shows</th><th>Risk of misreading</th></tr></thead>
<tbody>
<tr><td>Total emissions per farm</td><td>Absolute contribution to warming</td><td>Penalizes larger farms regardless of efficiency</td></tr>
<tr><td>Emissions per hectare</td><td>Land-based impact</td><td>Can favor low-output systems that need more land</td></tr>
<tr><td>Emissions per unit of product</td><td>Efficiency of production</td><td>Can hide rising totals if output grows</td></tr>
</tbody>
</table>
<p>Reasoning in words: if a dairy farm raises milk yield per cow so that emissions per liter fall, but it also adds more cows, total emissions can still rise. Both metrics matter for honest assessment.</p>

<h3>Soil Carbon Realities</h3>
<p>Soil carbon gains are valuable but bounded. Soils approach a new equilibrium after a practice change, so annual gains slow over time. Gains can be lost if practices stop, and measurement is difficult because changes are small relative to existing stocks and spatial variation. Increasing nitrogen inputs to boost plant growth can add nitrous oxide that offsets some carbon benefit.</p>

<h3>Resilience Planning</h3>
<p>Resilience planning starts by identifying the hazards a farm faces, such as drought, heat or flooding, then estimates which enterprises are most sensitive. Options are scored for how they reduce sensitivity or increase adaptive capacity: diversifying income, improving soil water storage, securing water rights, using insurance and building cash reserves.</p>

<h3>Applied Planning Checklist</h3>
<ol>
<li>Inventory emissions sources and convert to consistent units.</li>
<li>Identify the two or three largest sources for targeted action.</li>
<li>Assess climate hazards and the enterprises most at risk.</li>
<li>Screen practices for co-benefits across mitigation, adaptation and profit.</li>
<li>Monitor results and update the plan as conditions change.</li>
</ol>
`,
        GRADUATE: `
<h2>Climate Policy for Agriculture: Landscapes and Just Transitions</h2>
<p>Agriculture has often been treated differently from energy and industry in climate policy. Its emissions come from millions of dispersed sources, are biologically variable and are hard to measure. Food security, rural livelihoods and trade concerns also make policymakers cautious. This lesson examines policy instruments, landscape approaches and the principles of a just transition for farmers and rural communities.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Policy instrument:</strong> a tool governments use to change behavior, such as regulation, subsidies, taxes or information programs</li>
<li><strong>Landscape approach:</strong> managing multiple land uses and stakeholders across an area to balance food, conservation and climate goals</li>
<li><strong>Just transition:</strong> a shift to a low-carbon economy that protects workers and communities and shares costs and benefits fairly</li>
<li><strong>Leakage:</strong> when reducing emissions in one place causes increases elsewhere, such as production shifting to another region</li>
<li><strong>Additionality:</strong> the principle that a credited climate benefit must exceed what would have happened anyway</li>
<li><strong>Nationally determined contribution:</strong> a country's pledge of climate action under the international climate agreement framework</li>
</ul>

<h3>Policy Instruments Compared</h3>
<table>
<thead><tr><th>Instrument</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Practice-based payments</td><td>Simple to administer and verify</td><td>Pays for actions, not measured outcomes</td></tr>
<tr><td>Outcome-based payments</td><td>Rewards actual reductions</td><td>Measurement cost and uncertainty</td></tr>
<tr><td>Carbon offset markets</td><td>Mobilize private finance</td><td>Additionality, permanence and leakage concerns</td></tr>
<tr><td>Regulation of specific sources</td><td>Clear standards, such as for manure storage</td><td>Political resistance, uneven enforcement</td></tr>
<tr><td>Research and extension</td><td>Builds knowledge and options</td><td>Slow, indirect impact</td></tr>
<tr><td>Subsidy reform</td><td>Redirects large existing budgets</td><td>Strong vested interests</td></tr>
</tbody>
</table>

<h3>Landscape Approaches</h3>
<p>Many climate outcomes in agriculture depend on decisions beyond a single farm: protecting forests and peatlands from conversion, managing watersheds, connecting habitat and coordinating water use. Landscape approaches bring together farmers, communities, governments and companies to negotiate shared goals. Their strength is recognizing interdependence; their challenge is sustaining coordination, clarifying responsibilities and avoiding processes dominated by the most powerful actors.</p>

<h3>Just Transition Principles</h3>
<p>Climate policy affects farmers unequally. Smallholders often contribute little to emissions but face the highest climate risks and the least access to finance. Livestock-dependent regions may face major economic disruption from emissions policies. A just transition includes meaningful participation in decisions, support for income diversification, secure land tenure, recognition of Indigenous land rights and knowledge, and attention to farm workers as well as landowners.</p>

<h3>Institutional Barriers</h3>
<p>Barriers include fragmented agencies, short policy cycles relative to long-term soil and tree investments, measurement costs, and commodity support systems built around maximizing output. Trade rules and food price concerns constrain unilateral action. Overcoming them requires aligning agricultural, environmental and social policies rather than adding climate goals on top of unchanged incentives.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define mitigation, adaptation and livelihood objectives together.</li>
<li>Check additionality, permanence and leakage for claimed climate benefits.</li>
<li>Assess who pays, who benefits and who participates in decisions.</li>
<li>Consider landscape interactions beyond the farm gate.</li>
<li>Build in monitoring and review to adjust policy as evidence grows.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Agricultural Climate Modeling and Transformation</h2>
<p>Research on agriculture and climate spans biophysical modeling of crop and livestock responses, estimation of mitigation potential, and analysis of transformation pathways for food systems. Each area raises distinctive methodological challenges, from structural uncertainty in crop models to the contested accounting of soil carbon and methane. This lesson surveys modeling approaches, key debates and open research directions.</p>

<h3>Modeling Approaches</h3>
<ul>
<li><strong>Process-based crop models:</strong> simulations of plant growth from physiological processes driven by weather, soil and management inputs</li>
<li><strong>Statistical yield models:</strong> empirical relationships between historical weather and yields, used to project climate impacts</li>
<li><strong>Model ensembles:</strong> combinations of multiple models used to characterize structural uncertainty in projections</li>
<li><strong>Integrated assessment models:</strong> frameworks linking economy, energy, land use and climate to explore long-term pathways</li>
<li><strong>Marginal abatement cost curve:</strong> a ranking of mitigation options by cost per unit of emissions reduced</li>
<li><strong>Partial equilibrium models:</strong> economic models of agricultural markets used to estimate trade, price and land-use responses</li>
</ul>

<h3>Impact Modeling Debates</h3>
<p>Process models capture mechanisms such as carbon dioxide fertilization and heat stress at flowering, but differ in structure and parameterization. Statistical models capture observed responses, including farmer behavior, but may extrapolate poorly beyond historical climates. Ensemble comparisons show that model disagreement can rival climate scenario uncertainty, particularly for extreme heat and for carbon dioxide effects interacting with water and nitrogen limits. Representing adaptation endogenously, rather than assuming fixed management, is a persistent challenge.</p>

<h3>Mitigation Potential Questions</h3>
<table>
<thead><tr><th>Issue</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Soil carbon sequestration potential</td><td>Estimates vary with assumptions about saturation, depth, permanence and nitrogen availability</td></tr>
<tr><td>Methane metrics</td><td>Different metrics treat short-lived gases very differently, changing policy conclusions</td></tr>
<tr><td>Technical versus economic potential</td><td>What is physically possible differs greatly from what is affordable and adopted</td></tr>
<tr><td>Diet and demand change</td><td>Large modeled potential, uncertain behavioral and cultural feasibility</td></tr>
<tr><td>Land sparing versus land sharing</td><td>Intensification may free land or spur expansion through rebound effects</td></tr>
</tbody>
</table>

<h3>Transformation Pathways</h3>
<p>Incremental adaptation adjusts existing systems, while transformational adaptation changes what is grown, where and by whom. Research on transformation examines when incremental measures reach their limits, how systems shift to new configurations, and who wins and loses. Socio-technical transition theory and resilience thinking offer contrasting lenses: the former emphasizes niches, regimes and institutional change; the latter emphasizes thresholds, feedbacks and adaptive capacity.</p>

<h3>Methodological Challenges</h3>
<p>Linking scales is central. Farm-level experiments generate mechanistic insight but may not represent regional heterogeneity, while global models depend on coarse parameters. Uncertainty compounds across climate, crop, economic and behavioral components. Validation is difficult for long-term projections. Participatory scenario methods add stakeholder knowledge but raise questions about representativeness and integration with quantitative models.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Improved representation of extreme events and compound hazards in crop and livestock models.</li>
<li>Robust, affordable measurement and modeling of soil carbon and nitrous oxide at scale.</li>
<li>Endogenous adaptation and farmer decision-making in impact assessments.</li>
<li>Evaluation of rebound and leakage effects of mitigation policies across regions.</li>
<li>Integrating equity and justice metrics into transformation pathway analysis.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'csfq1',
      question: {
        ELEMENTARY: 'How do plants help fight climate change?',
        MIDDLE_SCHOOL: 'What does adaptation mean in climate-smart farming?',
        HIGH_SCHOOL: 'Which practice reduces nitrous oxide emissions?',
        UNDERGRADUATE: 'Why is the time horizon important when converting methane to carbon dioxide equivalents?',
        GRADUATE: 'What is additionality?',
        PHD: 'Why are model ensembles used in crop impact studies?',
      },
      options: {
        ELEMENTARY: ['They breathe in carbon dioxide and store some carbon in the soil', 'They make the air hotter', 'They burn fuel', 'They make storms'],
        MIDDLE_SCHOOL: ['Changing how we farm to cope with a changing climate', 'Adding more fertilizer every day', 'Ignoring the weather', 'Selling the farm'],
        HIGH_SCHOOL: ['Precise nitrogen management', 'Burning crop residues', 'Draining wetlands', 'Leaving soil bare'],
        UNDERGRADUATE: ['Methane is short-lived but potent, so its weight is much larger over shorter horizons', 'Methane lasts forever in the air', 'Time horizon has no effect', 'Methane does not trap heat'],
        GRADUATE: ['A credited benefit must exceed what would have happened anyway', 'Adding extra fertilizer to fields', 'Adding more farms to a program', 'Any benefit is automatically credited'],
        PHD: ['To characterize structural uncertainty from differences among models', 'To make one model run faster', 'To remove all uncertainty', 'To avoid using climate data'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Plants catch carbon dioxide from the air and send some carbon down into the soil.',
        MIDDLE_SCHOOL: 'Adaptation means adjusting farming to heat, drought, floods and other changes.',
        HIGH_SCHOOL: 'Using the right amount of nitrogen at the right time leaves less for microbes to turn into nitrous oxide.',
        UNDERGRADUATE: 'Over twenty years methane counts far more relative to carbon dioxide than over a hundred years.',
        GRADUATE: 'Without additionality, credits may pay for actions that would have happened anyway.',
        PHD: 'Model disagreement can be as large as climate scenario uncertainty, so ensembles reveal it.',
      },
    },
    {
      id: 'csfq2',
      question: {
        ELEMENTARY: 'What is a drought?',
        MIDDLE_SCHOOL: 'Where does methane from cattle come from?',
        HIGH_SCHOOL: 'Which is an example of a practice that helps both adaptation and mitigation?',
        UNDERGRADUATE: 'Why can lower emissions per liter of milk still mean higher total emissions?',
        GRADUATE: 'What is leakage in agricultural climate policy?',
        PHD: 'Why is soil carbon sequestration potential contested?',
      },
      options: {
        ELEMENTARY: ['A big snowstorm', 'A long time with much less rain than usual', 'A very windy day', 'A flood'],
        MIDDLE_SCHOOL: ['From their hooves', 'From microbes in their stomachs during digestion', 'From the grass after it dies', 'From their fur'],
        HIGH_SCHOOL: ['Draining wetlands for crops', 'Building soil organic matter that holds water and stores carbon', 'Expanding fuel-intensive irrigation everywhere', 'Burning forests'],
        UNDERGRADUATE: ['Milk does not cause emissions', 'If the farm adds more cows, totals can rise even as intensity falls', 'Intensity and totals are always identical', 'Total emissions never change'],
        GRADUATE: ['Water leaking from irrigation pipes', 'When cutting emissions in one place causes increases elsewhere', 'Nutrients leaching from soil', 'Data leaking from farm records'],
        PHD: ['Soil contains no carbon', 'Estimates depend on assumptions about saturation, depth, permanence and nitrogen', 'Everyone agrees on one number', 'Soil carbon cannot change'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A drought is a long dry time when much less rain falls than usual.',
        MIDDLE_SCHOOL: 'Stomach microbes produce methane as they digest food, and cattle burp it out.',
        HIGH_SCHOOL: 'Healthier soil helps crops through drought and stores carbon at the same time.',
        UNDERGRADUATE: 'Efficiency gains can be outweighed by growth in total production.',
        GRADUATE: 'If production simply moves to another region, global emissions may not fall.',
        PHD: 'Different assumptions produce widely varying estimates of how much soils can store.',
      },
    },
    {
      id: 'csfq3',
      question: {
        ELEMENTARY: 'How do trees help animals on a hot farm?',
        MIDDLE_SCHOOL: 'What is resilience?',
        HIGH_SCHOOL: 'Why can alternate wetting and drying in rice involve a trade-off?',
        UNDERGRADUATE: 'What does permanence mean for stored carbon?',
        GRADUATE: 'What is a strength of a landscape approach?',
        PHD: 'What is the difference between incremental and transformational adaptation?',
      },
      options: {
        ELEMENTARY: ['They make the sun brighter', 'They make it rain inside the barn', 'They give cool shade', 'They eat the grass'],
        MIDDLE_SCHOOL: ['Growing only one crop', 'Using more fuel', 'The ability to recover quickly after a shock like a drought', 'A type of fertilizer'],
        HIGH_SCHOOL: ['It makes rice taste different', 'It uses more water', 'It lowers methane but can raise nitrous oxide if poorly managed', 'It has no effect on gases'],
        UNDERGRADUATE: ['How quickly carbon is measured', 'The price of carbon credits', 'How long carbon stays out of the atmosphere before it could be released', 'The color of carbon-rich soil'],
        GRADUATE: ['It ignores all stakeholders', 'It focuses on one farm only', 'It recognizes interdependence among land uses and stakeholders across an area', 'It avoids coordination'],
        PHD: ['They are the same thing', 'Incremental changes the whole system; transformational adjusts slightly', 'Incremental adjusts existing systems; transformational changes what is grown, where and by whom', 'Neither involves farmers'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Trees make shady spots where animals can cool down.',
        MIDDLE_SCHOOL: 'A resilient farm bounces back faster after droughts, floods or other shocks.',
        HIGH_SCHOOL: 'Drying the paddy cuts methane, but changing soil conditions can increase nitrous oxide.',
        UNDERGRADUATE: 'Stored soil or tree carbon can be lost if practices change or disturbances occur.',
        GRADUATE: 'Many outcomes depend on decisions beyond one farm, which landscape approaches coordinate.',
        PHD: 'Transformational adaptation is needed when incremental measures reach their limits.',
      },
    },
    {
      id: 'csfq4',
      question: {
        ELEMENTARY: 'Why do farmers grow many kinds of crops?',
        MIDDLE_SCHOOL: 'What are the three goals of climate-smart farming?',
        HIGH_SCHOOL: 'Which is an effect of climate change on farms?',
        UNDERGRADUATE: 'Why are soil carbon removals tracked separately from emissions in a farm footprint?',
        GRADUATE: 'Which is part of a just transition for farmers?',
        PHD: 'Why is representing adaptation endogenously a challenge in impact modeling?',
      },
      options: {
        ELEMENTARY: ['So all crops fail together', 'Because seeds are pretty', 'To make the field look messy', 'If one crop has a bad year, another may do well'],
        MIDDLE_SCHOOL: ['Speed, color and size', 'Bigger tractors, more fuel and more land', 'Profit only', 'Productivity, adaptation and mitigation'],
        HIGH_SCHOOL: ['Weather becomes perfectly stable', 'Pests disappear completely', 'Soil becomes impossible to erode', 'Pests and diseases moving into new areas'],
        UNDERGRADUATE: ['Removals are always larger', 'Removals are illegal to count', 'Soil carbon has no warming effect', 'They are less certain and can be reversed'],
        GRADUATE: ['Excluding farm workers from planning', 'Ignoring land rights', 'Removing all support for smallholders', 'Support for income diversification and secure land tenure'],
        PHD: ['Farmers never change practices', 'Models cannot use weather data', 'Adaptation has no effect on yields', 'Assuming fixed management misses how farmers respond to change'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Growing different crops spreads the risk, so a bad year for one is not a disaster.',
        MIDDLE_SCHOOL: 'Climate-smart farming aims for strong production, better coping and fewer emissions.',
        HIGH_SCHOOL: 'Warming lets insects and diseases spread into places that were once too cool.',
        UNDERGRADUATE: 'Soil carbon gains are uncertain and can be lost, unlike already-released emissions.',
        GRADUATE: 'A just transition protects livelihoods and shares costs and benefits fairly.',
        PHD: 'Real farmers adapt, so models with fixed management can misstate climate impacts.',
      },
    },
    {
      id: 'csfq5',
      question: {
        ELEMENTARY: 'What is a greenhouse gas?',
        MIDDLE_SCHOOL: 'What does fertilizer overuse release?',
        HIGH_SCHOOL: 'Why does climate-smart farming build on local knowledge?',
        UNDERGRADUATE: 'What is vulnerability in resilience planning?',
        GRADUATE: 'What is a weakness of practice-based payments?',
        PHD: 'What does a marginal abatement cost curve show?',
      },
      options: {
        ELEMENTARY: ['A gas in the air that traps heat and warms the Earth', 'A gas that makes plants green', 'A gas only found in greenhouses', 'A gas that cools the planet'],
        MIDDLE_SCHOOL: ['Nitrous oxide, a powerful warming gas', 'Pure oxygen', 'Fresh water', 'Helium'],
        HIGH_SCHOOL: ['Traditional practices like mixing crops and saving adapted seeds already build resilience', 'Local knowledge is always wrong', 'Only new technology matters', 'Farmers know nothing about weather'],
        UNDERGRADUATE: ['Exposure, sensitivity and limited capacity to adapt combined', 'The total size of a farm', 'The price of fuel', 'The number of tractors owned'],
        GRADUATE: ['It pays for actions rather than measured outcomes', 'It is impossible to administer', 'It always overpays', 'It cannot be verified at all'],
        PHD: ['Mitigation options ranked by cost per unit of emissions reduced', 'Crop yields by month', 'Rainfall over time', 'Farm sizes by country'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Greenhouse gases act like a blanket that traps heat around the Earth.',
        MIDDLE_SCHOOL: 'Soil microbes turn extra nitrogen into nitrous oxide.',
        HIGH_SCHOOL: 'Many long-standing farming practices already help farms cope with climate variability.',
        UNDERGRADUATE: 'Vulnerability combines how exposed and sensitive a farm is with its ability to adapt.',
        GRADUATE: 'Paying for practices is simple, but actual climate outcomes may vary.',
        PHD: 'The curve helps compare options by cost-effectiveness, from cheapest to most expensive.',
      },
    },
  ],
}

export default expansion
