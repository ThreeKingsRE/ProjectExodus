import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'agroecology',
  lessons: [
    {
      id: 'fs-agro-1',
      title: 'Farming Like Nature',
      content: {
        ELEMENTARY: `
<h2>A Farm That Works Like a Forest</h2>
<p>Have you ever walked in a forest? Nobody waters it, nobody sprays it, and yet it stays green and full of life. That is because plants, animals, bugs and tiny soil creatures all help each other. Agroecology is a way of farming that tries to copy how nature works.</p>

<h3>Lots of Different Plants</h3>
<p>In nature, many kinds of plants grow side by side. An agroecology farm grows many crops too, like beans, carrots, flowers, fruit trees and herbs. If a bug likes to eat one plant, the other plants are still fine.</p>
<ul>
<li><strong>Agroecology:</strong> a way of farming that copies how nature works so plants and animals help each other</li>
<li><strong>Diversity:</strong> having many different kinds of plants and animals in one place</li>
<li><strong>Compost:</strong> old food scraps and leaves that rot into rich soil food</li>
<li><strong>Ladybug:</strong> a friendly beetle that eats tiny bugs called aphids that hurt plants</li>
<li><strong>Pollinator:</strong> an animal like a bee or butterfly that carries pollen so plants can make fruit</li>
</ul>

<h3>Bug Helpers</h3>
<p>Not all bugs are bad! Ladybugs, spiders and some wasps eat the bugs that munch on crops. Farmers plant flowers to give these helpers a home. Bees and butterflies visit the flowers too, and help the farm make fruit and vegetables.</p>

<h3>Nothing Goes to Waste</h3>
<p>In a forest, fallen leaves rot and feed the soil. On an agroecology farm, leftover plants and animal manure become compost. Chickens might eat weeds and bugs, and their droppings feed the garden. Everything goes around in a circle.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Plant flowers near your vegetables to invite bee and ladybug helpers.</li>
<li>Start a small compost bin with fruit and vegetable scraps.</li>
<li>Grow two or three different plants together in one pot or garden bed.</li>
<li>Look for bugs in the garden and find out if they are helpers.</li>
</ol>

<h3>Think About It</h3>
<p>A farm that works like nature needs fewer sprays and less waste, and it is full of life. What could you copy from nature in your own garden?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Farming With Nature's Patterns</h2>
<p>Agroecology means applying ecology, the science of how living things interact, to farming. Instead of fighting nature with lots of chemicals, agroecological farmers design their farms so that natural processes do much of the work: building soil, controlling pests, recycling nutrients and holding water.</p>

<h3>Nature's Patterns on the Farm</h3>
<p>Healthy ecosystems share some patterns. Agroecology copies them:</p>
<ol>
<li><strong>Diversity:</strong> many species living together, so no single pest or disease can wipe everything out</li>
<li><strong>Recycling:</strong> nutrients moving in loops, from plants to animals to soil and back</li>
<li><strong>Cover:</strong> soil almost always protected by plants or mulch, never left bare</li>
<li><strong>Relationships:</strong> species helping each other, such as flowers feeding insects that eat pests</li>
</ol>

<h3>How Agroecology Controls Pests</h3>
<p>Rather than spraying pesticides at the first sign of trouble, agroecology farmers use natural pest control. They plant hedgerows and flower strips where ladybugs, lacewings and birds can live. They rotate crops so pests cannot build up in one field. They mix crops so pests have a harder time finding their favorite plant.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Ecology:</strong> the science of how living things interact with each other and their environment</li>
<li><strong>Crop rotation:</strong> changing which crop grows in a field each season to keep soil healthy and pests down</li>
<li><strong>Cover crop:</strong> a plant grown to protect and feed the soil rather than to harvest</li>
<li><strong>Beneficial insect:</strong> an insect that helps farmers by eating pests or pollinating crops</li>
<li><strong>Intercropping:</strong> growing two or more crops in the same field at the same time</li>
<li><strong>Monoculture:</strong> growing just one crop over a large area</li>
</ul>

<h3>Two Kinds of Farms</h3>
<table>
<thead><tr><th>Feature</th><th>Agroecological farm</th><th>Monoculture farm</th></tr></thead>
<tbody>
<tr><td>Number of crops</td><td>Many, often with animals and trees</td><td>Usually one</td></tr>
<tr><td>Pest control</td><td>Beneficial insects, rotation, diversity</td><td>Mainly pesticides</td></tr>
<tr><td>Soil fertility</td><td>Compost, manure, cover crops, legumes</td><td>Mainly bought fertilizer</td></tr>
<tr><td>Knowledge</td><td>Farmers share and test ideas together</td><td>Advice often from input sellers</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Agroecology can lower costs for farmers because they buy fewer chemicals. It protects soil, water and wildlife. It also respects the knowledge of farmers, including small farmers and Indigenous peoples, who have farmed this way for centuries. Many farmer groups around the world see it as a path to food sovereignty.</p>
`,
        HIGH_SCHOOL: `
<h2>Agroecology: Principles, Practices and Transitions</h2>
<p>Agroecology is both a set of farming practices and a way of thinking about whole food systems. It applies ecological principles to agriculture and pays attention to the social side too: who farms, who decides and who benefits. It has deep roots in traditional and Indigenous farming and has grown into a global field of science and a rallying point for farmer movements.</p>

<h3>Core Principles</h3>
<p>Different organizations list agroecological principles in slightly different ways, but most include these ideas:</p>
<ul>
<li><strong>Biodiversity:</strong> increasing the variety of crops, animals, trees and soil life on and around the farm</li>
<li><strong>Nutrient recycling:</strong> returning crop residues, manure and compost to the soil to close nutrient loops</li>
<li><strong>Synergy:</strong> combining parts of the farm so they benefit each other, such as livestock grazing cover crops</li>
<li><strong>Input reduction:</strong> relying less on purchased fertilizers, pesticides and fuel</li>
<li><strong>Soil health:</strong> building organic matter and soil life that hold water and feed plants</li>
<li><strong>Knowledge sharing:</strong> learning through farmer-to-farmer exchange as well as research</li>
</ul>

<h3>Practices in the Field</h3>
<p>Common agroecological practices include intercropping, crop rotation with legumes, cover cropping, agroforestry (growing trees with crops or livestock), integrating animals, composting, mulching and creating habitat for beneficial insects. A well-known example from East Africa is push-pull farming, in which plants that repel stem-boring insects are grown among maize, while attractive grasses around the field draw the pests away.</p>

<h3>Trade-offs and Challenges</h3>
<table>
<thead><tr><th>Benefit</th><th>Challenge</th></tr></thead>
<tbody>
<tr><td>Lower input costs</td><td>Often more labor and management skill needed</td></tr>
<tr><td>Healthier soil over time</td><td>Benefits may take several seasons to appear</td></tr>
<tr><td>Diverse harvest spreads risk</td><td>Harder to sell many small crops than one big one</td></tr>
<tr><td>Less pollution of water and air</td><td>Research and advice systems often favor conventional methods</td></tr>
</tbody>
</table>

<h3>Making the Transition</h3>
<p>Few farms change overnight. Researchers often describe transition in stages:</p>
<ol>
<li>Use inputs more efficiently, such as applying fertilizer more precisely.</li>
<li>Substitute ecological practices for chemical inputs, such as biological pest control.</li>
<li>Redesign the whole farm around diversity and natural processes.</li>
<li>Reconnect farmers and eaters through local markets and fair prices.</li>
<li>Change the wider food system so these approaches are supported everywhere.</li>
</ol>
<p>The first two stages make farms less harmful; the later ones transform how farms and food systems work.</p>

<h3>Real-World Applications</h3>
<p>Agroecology is practiced by smallholder farmers across Latin America, Africa and Asia, often supported by farmer networks that share techniques. In many countries, governments and the UN Food and Agriculture Organization now promote agroecology as a way to improve food security, protect the environment and help farmers adapt to climate change.</p>
`,
        UNDERGRADUATE: `
<h2>Agroecology as Science, Practice and Social Movement</h2>
<p>Agroecology is commonly described as having three faces: a scientific discipline that studies agroecosystems, a set of practices that apply ecological principles on farms, and a social movement that seeks to transform food systems. These faces overlap and sometimes pull in different directions. This lesson builds the conceptual tools needed to analyze each and to evaluate agroecological systems quantitatively.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Agroecosystem:</strong> a farm or landscape viewed as an ecosystem, including crops, livestock, soil organisms, wild species and people</li>
<li><strong>Functional biodiversity:</strong> the components of biodiversity that deliver services such as pest regulation, pollination and nutrient cycling</li>
<li><strong>Ecosystem services:</strong> benefits people receive from ecosystems, such as pollination, soil formation and water regulation</li>
<li><strong>Land equivalent ratio:</strong> the area of sole crops needed to produce the same yields as one unit of intercrop</li>
<li><strong>Biological nitrogen fixation:</strong> conversion of atmospheric nitrogen into plant-available forms by bacteria living with legumes</li>
<li><strong>Resilience:</strong> the capacity of a system to absorb shocks and keep functioning</li>
</ul>

<h3>Agroecology as Science</h3>
<p>As a science, agroecology studies interactions within agroecosystems: how plant diversity affects pest populations, how soil organic matter influences water holding, and how crop and livestock integration changes nutrient flows. It draws on ecology, agronomy, soil science and, increasingly, social sciences. Its research style emphasizes systems thinking and often involves farmers as co-researchers in participatory trials.</p>

<h3>Quantitative Reasoning: Intercropping</h3>
<p>The land equivalent ratio (LER) is a simple tool for comparing intercrops with sole crops. Divide each crop's intercrop yield by its sole-crop yield, then add the fractions. If a maize-bean intercrop yields eighty percent of sole maize and forty percent of sole beans, the LER is 1.2, meaning sole crops would need about twenty percent more land to produce the same harvest. LER above one indicates complementarity, such as legumes supplying nitrogen or crops using light at different heights. However, LER does not capture labor, market value or year-to-year stability, so it is one indicator among several.</p>

<h3>Agroecology as Practice</h3>
<table>
<thead><tr><th>Practice</th><th>Main ecological function</th><th>Typical constraint</th></tr></thead>
<tbody>
<tr><td>Intercropping</td><td>Complementary resource use, pest dilution</td><td>Harder to mechanize</td></tr>
<tr><td>Cover crops</td><td>Erosion control, nitrogen supply, soil organic matter</td><td>Seed cost and timing</td></tr>
<tr><td>Agroforestry</td><td>Shade, microclimate, long-term carbon storage</td><td>Years before trees produce</td></tr>
<tr><td>Crop-livestock integration</td><td>Nutrient recycling through manure and grazing</td><td>Labor and fencing</td></tr>
<tr><td>Habitat for natural enemies</td><td>Biological pest regulation</td><td>Land taken from crops</td></tr>
</tbody>
</table>

<h3>Agroecology as Social Movement</h3>
<p>Peasant and farmer organizations, notably the international movement La Via Campesina, have adopted agroecology as part of the broader food sovereignty agenda. In this framing, agroecology is not only a toolkit but a challenge to corporate control of seeds and inputs, to land concentration and to trade rules that disadvantage small farmers. Farmer-to-farmer networks, in which farmers teach each other through demonstration plots and exchanges, are a hallmark of the movement.</p>

<h3>Tensions Among the Three Faces</h3>
<p>Some actors adopt agroecological practices, such as cover crops, within otherwise conventional systems while ignoring social dimensions. Movement advocates often criticize this as co-optation that strips agroecology of its transformative goals. Researchers must be clear about which definition they are using.</p>

<h3>A Method for Assessing a Farm</h3>
<ol>
<li>Map flows of nutrients, energy, water, money and labor into and out of the farm.</li>
<li>Inventory planned and associated biodiversity and the functions it provides.</li>
<li>Measure yields per area and per unit of labor, plus indicators such as LER.</li>
<li>Assess dependence on purchased inputs and exposure to price shocks.</li>
<li>Include social indicators: farmer autonomy, knowledge networks and market access.</li>
</ol>
`,
        GRADUATE: `
<h2>Agroecology in Policy, Research and Food System Transformation</h2>
<p>Over the past two decades, agroecology has moved from the margins of agricultural policy into international discussion. UN bodies, national governments and research institutions now reference it, while farmer movements warn against diluted versions. This lesson examines the frameworks used to define agroecology in policy, the institutional and economic barriers to scaling it, and approaches to evaluating transitions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Ten Elements of Agroecology:</strong> an FAO framework listing diversity, co-creation of knowledge, synergies, efficiency, recycling, resilience, human and social values, culture and food traditions, responsible governance, and circular and solidarity economy</li>
<li><strong>Lock-in:</strong> a situation in which existing technologies, institutions and investments make alternative pathways hard to adopt</li>
<li><strong>Scaling out:</strong> spreading agroecological practices to more farmers and places</li>
<li><strong>Scaling up:</strong> changing policies, institutions and markets so they support agroecology</li>
<li><strong>True cost accounting:</strong> valuing environmental, health and social costs and benefits that market prices ignore</li>
<li><strong>Public procurement:</strong> government purchasing, for example of school meals, that can create markets for agroecological producers</li>
</ul>

<h3>Policy Frameworks</h3>
<p>The FAO has hosted international symposia on agroecology and adopted the Ten Elements as a guide for policy. A high-level expert panel advising the UN Committee on World Food Security also set out a list of thirteen agroecological principles and compared agroecology with other innovation pathways such as sustainable intensification and climate-smart agriculture. These frameworks deliberately combine ecological and social dimensions, which distinguishes them from narrower efficiency-focused approaches.</p>

<h3>Why Scaling Is Hard: Lock-in</h3>
<table>
<thead><tr><th>Source of lock-in</th><th>Example</th><th>Policy lever</th></tr></thead>
<tbody>
<tr><td>Subsidies</td><td>Payments tied to area or specific commodities favor monocultures</td><td>Redirect payments toward diversity and ecosystem services</td></tr>
<tr><td>Research priorities</td><td>Funding concentrated on single-crop breeding and inputs</td><td>Fund participatory, systems-level research</td></tr>
<tr><td>Extension services</td><td>Advice delivered by input companies</td><td>Public and farmer-to-farmer extension</td></tr>
<tr><td>Market infrastructure</td><td>Processing and logistics built for bulk commodities</td><td>Local food hubs and procurement for diverse crops</td></tr>
<tr><td>Land tenure</td><td>Insecure tenure discourages long-term soil investment</td><td>Secure tenure, especially for women and smallholders</td></tr>
</tbody>
</table>

<h3>Economics</h3>
<p>Agroecological farms often show lower input costs and greater stability, but yields per hectare of a single crop may be lower during transition, and labor needs may rise. Whether agroecology is economically competitive depends heavily on how outputs are valued. Systems that produce many crops plus ecosystem services may outperform monocultures when total output and avoided environmental costs are counted, which is why true cost accounting features prominently in agroecology policy debates.</p>

<h3>Governance and Equity</h3>
<p>Agroecology frameworks emphasize responsible governance, including secure access to land and seeds, recognition of women's roles in farming and the participation of farmers in research and policy. Equity questions include who captures value from agroecological products, whether premium markets exclude low-income eaters and how transitions affect farmworkers.</p>

<h3>Evaluating Transitions</h3>
<p>Because agroecology spans many dimensions, evaluation tools use multiple criteria. The FAO Tool for Agroecology Performance Evaluation (TAPE) first characterizes a farm against the Ten Elements, then measures performance across economic, environmental, health and social criteria.</p>
<ol>
<li>Characterize the starting point and the stage of transition.</li>
<li>Select indicators covering productivity, income, biodiversity, soil, nutrition and empowerment.</li>
<li>Compare with appropriate counterfactuals, not just with high-input yields.</li>
<li>Track change over multiple years, since benefits accumulate slowly.</li>
<li>Involve farmers in interpreting results and setting priorities.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Agroecological Transitions, Metrics and Political Ecology</h2>
<p>Agroecology research now grapples with questions of scale, measurement and power. How do agroecological practices spread from farms to territories? What metrics can capture multifunctional performance without reducing it to yield? How do political economy and knowledge politics shape which pathways are funded and adopted? This lesson surveys theoretical frameworks, methods and active debates.</p>

<h3>Theoretical Frameworks</h3>
<ul>
<li><strong>Socio-technical transitions:</strong> frameworks that analyze how niches, regimes and landscape pressures interact to change systems such as agriculture</li>
<li><strong>Political ecology:</strong> the study of how power, economics and politics shape environmental change and access to resources</li>
<li><strong>Territorial approach:</strong> coordinating agroecological transitions across a landscape or region rather than farm by farm</li>
<li><strong>Multifunctionality:</strong> the capacity of agriculture to produce food alongside environmental, social and cultural outputs</li>
<li><strong>Diversified farming systems:</strong> farms that intentionally include functional biodiversity at multiple spatial and temporal scales</li>
<li><strong>Knowledge politics:</strong> struggles over whose knowledge counts as legitimate in research and policy</li>
</ul>

<h3>Transition Theory and Scale</h3>
<p>The multi-level perspective frames agroecological farms as niches challenging an industrial regime embedded in markets, regulations and infrastructure. Critics note that this framework can underplay power and treat the regime as uniform. Territorial approaches argue that many ecological processes, such as pest regulation, pollination and water flows, operate at landscape scale, so coordinated change among neighboring farms, local governments and markets is required. Research on territorial transitions examines institutions such as participatory guarantee systems, local food councils and municipal procurement.</p>

<h3>The Metrics Problem</h3>
<table>
<thead><tr><th>Metric approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Single-crop yield per hectare</td><td>Simple and widely available</td><td>Ignores other outputs and inputs</td></tr>
<tr><td>Total farm output or nutritional yield</td><td>Captures diversity of production</td><td>Requires detailed data and aggregation choices</td></tr>
<tr><td>Multi-criteria indicator sets</td><td>Reflects multiple dimensions</td><td>Weighting is value-laden and contested</td></tr>
<tr><td>Ecosystem service valuation</td><td>Makes hidden benefits visible</td><td>Monetization can obscure non-market values</td></tr>
<tr><td>Resilience and stability indicators</td><td>Captures performance under shocks</td><td>Needs long time series</td></tr>
</tbody>
</table>
<p>A central debate concerns the yield gap between agroecological and conventional systems. Meta-analyses comparing organic or diversified systems with conventional ones generally find lower average yields for some crops, with gaps that narrow under diversification and good management and vary strongly by crop and context. Critics argue that yield comparisons themselves frame the question in the regime's terms.</p>

<h3>Methods</h3>
<p>Agroecology research uses long-term field experiments, landscape ecology with remote sensing, farm typologies, participatory action research and political economy analysis. Mixed methods are common but difficult: integrating plot-scale biophysical data with household and institutional analysis raises issues of scale mismatch and causal inference. Participatory research raises questions of how to share authority with farmers while meeting academic standards.</p>

<h3>Political Ecology of Agroecology</h3>
<p>Political ecologists examine how agroecology is shaped by struggles over land, seeds and markets. One concern is co-optation: corporations or governments adopting the language of agroecology while promoting input substitution without addressing concentration of power. Another is the risk that premium markets confine agroecology to niches serving wealthier consumers. Movement scholars argue that agroecology's transformative potential depends on collective organization and policies that redistribute resources.</p>

<h3>Contested Questions</h3>
<ol>
<li>Can agroecology feed growing urban populations without expanding farmland?</li>
<li>Should agroecology be defined by practices, principles or political commitments?</li>
<li>How should land sparing versus land sharing debates be resolved in agroecological landscapes?</li>
<li>What role, if any, should new technologies such as digital tools or gene editing play?</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Long-term comparative studies of territorial transitions and their drivers.</li>
<li>Standardized but flexible multidimensional performance metrics.</li>
<li>Modeling landscape-scale ecosystem services under coordinated management.</li>
<li>Analysis of policy mixes that unlock agroecological transitions.</li>
<li>Research on labor, gender and livelihoods within agroecological systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'faq1',
      question: {
        ELEMENTARY: 'What does agroecology copy?',
        MIDDLE_SCHOOL: 'How does agroecology control pests?',
        HIGH_SCHOOL: 'Which is a core agroecological principle?',
        UNDERGRADUATE: 'What are the three faces of agroecology?',
        GRADUATE: 'What is the FAO Ten Elements framework?',
        PHD: 'What is a territorial approach to agroecology?',
      },
      options: {
        ELEMENTARY: ['How nature works', 'How factories work', 'How cities work', 'Nothing at all'],
        MIDDLE_SCHOOL: ['Beneficial insects, crop rotation and diversity', 'Spraying more pesticides', 'Ignoring pests completely', 'Removing all insects'],
        HIGH_SCHOOL: ['Increasing biodiversity', 'Growing one crop everywhere', 'Using as many chemicals as possible', 'Removing all animals from farms'],
        UNDERGRADUATE: ['Science, practice and social movement', 'Only laboratory science', 'Only farm machinery', 'Only international trade'],
        GRADUATE: ['A guide listing ecological and social elements of agroecology for policy', 'A list of approved pesticides', 'A trade agreement on grain exports', 'A ranking of the largest farms'],
        PHD: ['Coordinating transitions across a landscape or region', 'Changing only one farm at a time', 'Focusing on a single export crop', 'Moving all farming indoors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Agroecology copies nature, where plants and animals help each other.',
        MIDDLE_SCHOOL: 'Agroecology farmers use beneficial insects, rotation and mixed crops instead of relying on sprays.',
        HIGH_SCHOOL: 'Increasing biodiversity on and around the farm is central to agroecology.',
        UNDERGRADUATE: 'Agroecology is described as a science, a set of practices and a social movement.',
        GRADUATE: 'The Ten Elements combine ecological ideas like diversity and recycling with social ones like governance and culture.',
        PHD: 'Because pests, pollinators and water work at landscape scale, territorial approaches coordinate change across a region.',
      },
    },
    {
      id: 'faq2',
      question: {
        ELEMENTARY: 'What is compost?',
        MIDDLE_SCHOOL: 'What is a cover crop?',
        HIGH_SCHOOL: 'How does push-pull farming work?',
        UNDERGRADUATE: 'An intercrop yields 80 percent of sole maize and 40 percent of sole beans. What is its land equivalent ratio?',
        GRADUATE: 'What is meant by lock-in in agricultural systems?',
        PHD: 'What is a main criticism of the multi-level perspective on transitions?',
      },
      options: {
        ELEMENTARY: ['A kind of plastic', 'Old scraps and leaves that rot into rich soil food', 'A spray that kills bugs', 'A tractor part'],
        MIDDLE_SCHOOL: ['A crop sold at the market', 'A plant grown to protect and feed the soil', 'A plastic sheet over the field', 'A crop grown only indoors'],
        HIGH_SCHOOL: ['Spraying pests with stronger chemicals', 'Repelling plants among maize and attractive grasses around the field draw pests away', 'Pushing crops into the ground by machine', 'Pulling all weeds by hand'],
        UNDERGRADUATE: ['0.4', '1.2', '0.8', '2.0'],
        GRADUATE: ['Locking farm gates at night', 'Existing technologies, institutions and investments make alternatives hard to adopt', 'A rule requiring diverse crops', 'A type of seed storage'],
        PHD: ['It focuses too much on power', 'It can underplay power and treat the regime as uniform', 'It ignores technology', 'It only applies to energy systems'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Compost is made from food scraps, leaves and manure that rot into food for the soil.',
        MIDDLE_SCHOOL: 'Cover crops are grown to protect soil from erosion and add nutrients, not mainly for harvest.',
        HIGH_SCHOOL: 'Push-pull uses repellent plants inside the field and attractive grasses around it to move pests away from maize.',
        UNDERGRADUATE: 'Add the fractions: 0.8 plus 0.4 equals 1.2, so sole crops would need about 20 percent more land.',
        GRADUATE: 'Subsidies, research, extension and infrastructure built for monocultures make switching pathways difficult.',
        PHD: 'Critics argue the framework underplays power relations and treats the industrial regime as uniform.',
      },
    },
    {
      id: 'faq3',
      question: {
        ELEMENTARY: 'Why do farmers plant flowers near vegetables?',
        MIDDLE_SCHOOL: 'What is a monoculture?',
        HIGH_SCHOOL: 'What is a common challenge for farms using agroecology?',
        UNDERGRADUATE: 'What does functional biodiversity refer to?',
        GRADUATE: 'Why is true cost accounting important in agroecology debates?',
        PHD: 'What concern do political ecologists raise about co-optation?',
      },
      options: {
        ELEMENTARY: ['To hide the vegetables', 'To make the farm smell bad', 'To invite helpers like bees and ladybugs', 'To keep the sun away'],
        MIDDLE_SCHOOL: ['Many crops mixed together', 'A garden with animals', 'Just one crop over a large area', 'A forest farm'],
        HIGH_SCHOOL: ['It needs no knowledge at all', 'It never saves money', 'It often needs more labor and skill', 'It always lowers soil health'],
        UNDERGRADUATE: ['Every species on Earth', 'Only species that can be sold', 'Biodiversity that delivers services like pest control and pollination', 'Only animals on the farm'],
        GRADUATE: ['It raises the price of all food', 'It ignores the environment', 'It values environmental and social costs and benefits that market prices ignore', 'It only counts yields'],
        PHD: ['Farmers using too many trees', 'Agroecology being too popular among farmers', 'Using the language of agroecology while promoting input substitution without addressing power', 'Governments banning agroecology'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Flowers give a home and food to helpers like bees and ladybugs that help the crops.',
        MIDDLE_SCHOOL: 'A monoculture grows one crop over a large area, which can make pests easier to spread.',
        HIGH_SCHOOL: 'Agroecology can save input costs but usually requires more labor and management skill.',
        UNDERGRADUATE: 'Functional biodiversity is the part of biodiversity that provides services such as pest regulation and nutrient cycling.',
        GRADUATE: 'Diverse farms may outperform monocultures once environmental and health costs and benefits are counted.',
        PHD: 'Co-optation strips agroecology of its social goals, keeping practices while leaving power concentrated.',
      },
    },
    {
      id: 'faq4',
      question: {
        ELEMENTARY: 'What does a ladybug do on a farm?',
        MIDDLE_SCHOOL: 'What is crop rotation?',
        HIGH_SCHOOL: 'What is the first stage of an agroecological transition?',
        UNDERGRADUATE: 'What is a limitation of the land equivalent ratio?',
        GRADUATE: 'What does scaling up agroecology mean?',
        PHD: 'What do meta-analyses generally find about yields of diversified systems compared with conventional ones?',
      },
      options: {
        ELEMENTARY: ['It eats the vegetables', 'It digs holes', 'It makes the soil dry', 'It eats tiny bugs that hurt plants'],
        MIDDLE_SCHOOL: ['Spinning plants in their pots', 'Planting the same crop forever', 'Turning the soil upside down', 'Changing which crop grows in a field each season'],
        HIGH_SCHOOL: ['Changing the whole world food system', 'Reconnecting farmers and eaters', 'Redesigning the farm', 'Using inputs more efficiently'],
        UNDERGRADUATE: ['It cannot compare intercrops at all', 'It is always below one', 'It only measures pests', 'It ignores labor, market value and stability'],
        GRADUATE: ['Moving farms to higher ground', 'Making each farm bigger', 'Adding more machinery', 'Changing policies, institutions and markets to support agroecology'],
        PHD: ['Yields are always higher in every case', 'There are never any differences', 'Yields are zero', 'Average yields are lower for some crops, with gaps that narrow under good diversified management'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Ladybugs eat aphids and other tiny bugs that damage plants.',
        MIDDLE_SCHOOL: 'Crop rotation changes the crop in a field each season to keep soil healthy and pests down.',
        HIGH_SCHOOL: 'Transition often begins with using inputs more efficiently before substituting and redesigning.',
        UNDERGRADUATE: 'LER compares land use, but it says nothing about labor, prices or year-to-year stability.',
        GRADUATE: 'Scaling up changes the rules and institutions, while scaling out spreads practices to more farms.',
        PHD: 'Yield gaps exist for some crops but vary by context and shrink with diversification and good management.',
      },
    },
    {
      id: 'faq5',
      question: {
        ELEMENTARY: 'What is a pollinator?',
        MIDDLE_SCHOOL: 'Why can agroecology lower costs for farmers?',
        HIGH_SCHOOL: 'What is agroforestry?',
        UNDERGRADUATE: 'Which movement adopted agroecology as part of food sovereignty?',
        GRADUATE: 'How can public procurement support agroecology?',
        PHD: 'Why is weighting indicators in multi-criteria assessments contested?',
      },
      options: {
        ELEMENTARY: ['An animal like a bee that helps plants make fruit', 'A machine that sprays water', 'A kind of weed', 'A rock in the soil'],
        MIDDLE_SCHOOL: ['Farmers buy fewer chemicals', 'Farmers buy more machines', 'Farmers stop selling food', 'Farmers pay higher taxes'],
        HIGH_SCHOOL: ['Growing trees together with crops or livestock', 'Cutting down all trees on a farm', 'Growing crops only in forests far away', 'Selling wood instead of food'],
        UNDERGRADUATE: ['La Via Campesina, an international peasant movement', 'A global pesticide company', 'A stock exchange', 'A shipping company'],
        GRADUATE: ['By creating markets, such as school meals, for agroecological producers', 'By banning local food', 'By buying only imported food', 'By removing all school meals'],
        PHD: ['Weighting reflects value choices about what matters most', 'Weights are fixed by physics', 'Indicators never need weights', 'Weighting is always done by computers'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Pollinators like bees and butterflies carry pollen so plants can make fruit and seeds.',
        MIDDLE_SCHOOL: 'Natural pest control and compost replace many bought pesticides and fertilizers.',
        HIGH_SCHOOL: 'Agroforestry combines trees with crops or animals for shade, soil and extra harvests.',
        UNDERGRADUATE: 'La Via Campesina, a global peasant movement, made agroecology part of its food sovereignty agenda.',
        GRADUATE: 'Government purchasing for schools and hospitals can provide stable demand for diverse local producers.',
        PHD: 'How much weight each indicator gets is a value judgment, so results depend on whose priorities are used.',
      },
    },
  ],
}

export default expansion
