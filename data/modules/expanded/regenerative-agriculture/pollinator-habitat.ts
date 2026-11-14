import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'pollinator-habitat',
  lessons: [
    {
      id: 'ra-poll-1',
      title: 'Helping Our Pollinators',
      content: {
        ELEMENTARY: `
<h2>Busy Helpers in the Garden</h2>
<p>Buzz, flutter, zoom! Bees, butterflies, moths, beetles and even some birds and bats visit flowers every day. They are called pollinators, and they help plants make fruits and seeds. Without them, we would have far fewer apples, strawberries, pumpkins and blueberries. Let's learn how we can give these little helpers a happy home!</p>

<h3>What Do Pollinators Do?</h3>
<p>Flowers make a sweet drink called nectar and a yellow dust called pollen. When a bee visits a flower to sip nectar, pollen sticks to its fuzzy body. Then the bee flies to another flower and some pollen rubs off. That moving pollen helps the flower turn into a fruit with seeds inside.</p>
<ul>
<li><strong>Pollen:</strong> a fine, dusty powder made by flowers that helps them make seeds</li>
<li><strong>Nectar:</strong> a sweet, sugary liquid inside flowers that pollinators drink for energy</li>
<li><strong>Pollinator:</strong> an animal that carries pollen from one flower to another</li>
</ul>

<h3>What Pollinators Need</h3>
<p>Just like you need a home, food and water, pollinators do too.</p>
<ul>
<li><strong>Flowers all season:</strong> different flowers blooming in spring, summer and fall so there is always food</li>
<li><strong>Nesting places:</strong> safe spots like bare soil, hollow stems or old logs where many bees lay their eggs</li>
<li><strong>Host plants:</strong> special plants that caterpillars eat so they can grow into butterflies</li>
</ul>
<p>Many bees do not live in hives. Most kinds live alone and dig tiny tunnels in the ground or hide in hollow plant stems.</p>

<h3>Be a Pollinator Helper</h3>
<ol>
<li>Plant flowers that grow naturally where you live. Ask a grown-up or a garden center which ones they are.</li>
<li>Leave a small patch of the garden a bit wild and messy, with some bare soil and old stems.</li>
<li>Put out a shallow dish of water with pebbles so insects can land and drink.</li>
<li>Watch bees calmly from a little distance. They are busy working!</li>
</ol>

<h3>Think About It</h3>
<p>Next time you eat a juicy piece of fruit, say thank you to a pollinator. A tiny bee may have helped make your snack!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Why Pollinators Matter for Our Food</h2>
<p>Many of the foods that make our meals colorful and nutritious, like fruits, nuts, vegetables and coffee, depend on animals to move pollen between flowers. Scientists often say that roughly one out of every three bites of food we eat comes from crops that benefit from pollinators. Farms that provide good pollinator habitat help protect our food supply.</p>

<h3>How Pollination Works</h3>
<p>A flower has male parts that make pollen and a female part that receives it. When pollen lands on the right part of a flower of the same kind, the flower can be fertilized and begin to grow seeds and fruit. Some crops, such as wheat and corn, are pollinated by wind. Others, like apples, squash and almonds, need insects to do the job well.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Pollination:</strong> the transfer of pollen from one flower part to another so seeds and fruit can form</li>
<li><strong>Native bee:</strong> a wild bee species that naturally lives in a region, such as bumble bees or mining bees</li>
<li><strong>Habitat:</strong> the place where an animal finds the food, shelter and nesting sites it needs</li>
<li><strong>Wildflower strip:</strong> a band of flowering plants grown along the edge of a field to feed pollinators</li>
<li><strong>Hedgerow:</strong> a line of shrubs and trees along a field border that provides shelter and flowers</li>
<li><strong>Pesticide:</strong> a chemical used to kill pests, which can also harm helpful insects if used carelessly</li>
</ul>

<h3>Honey Bees and Wild Bees</h3>
<table>
<thead><tr><th>Feature</th><th>Honey bees</th><th>Wild native bees</th></tr></thead>
<tbody>
<tr><td>Where they live</td><td>Large colonies in hives kept by beekeepers</td><td>Mostly alone, in the ground or hollow stems</td></tr>
<tr><td>How many kinds</td><td>Just a few species</td><td>Thousands of species worldwide</td></tr>
<tr><td>Role on farms</td><td>Often moved to crops when they bloom</td><td>Provide free pollination if habitat is nearby</td></tr>
</tbody>
</table>

<h3>Building Habitat on Farms</h3>
<p>Big fields of a single crop bloom for only a few weeks. After that, pollinators may have nothing to eat. Farmers can help by planting wildflower strips, keeping hedgerows, leaving some areas unmown and protecting patches of bare ground for ground-nesting bees. Spraying pesticides only when needed, and never on flowers while bees are visiting, also makes a big difference.</p>

<h3>Why It Matters</h3>
<p>Pollinators are facing trouble from habitat loss, pesticides, diseases and climate change. Giving them places to eat and nest is one of the most practical ways people can help, from big farms to school gardens.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Farms for Pollinators</h2>
<p>Pollinators link wild ecosystems with our food system. Bees, flies, butterflies, moths, beetles, birds and bats move pollen between flowers, increasing fruit set and quality for many crops. Modern farming has often removed the flowers and nesting sites these animals depend on. This lesson explores pollinator ecology, how to create habitat and which conservation strategies work on working farms.</p>

<h3>Pollinator Ecology Basics</h3>
<p>Different pollinators have different needs. Bumble bees fly in cool weather and can "buzz pollinate" crops like tomatoes and blueberries by vibrating flowers. Many solitary bees are active for only a few weeks a year and may specialize on certain plant families. Butterflies need host plants for their caterpillars, not just nectar for adults. Hover flies pollinate while their larvae eat aphids. A diverse pollinator community makes pollination more reliable because species respond differently to weather and seasons.</p>

<h3>Three Needs: Food, Nesting, Safety</h3>
<ul>
<li><strong>Forage:</strong> the pollen and nectar resources available to pollinators across the whole season</li>
<li><strong>Bloom succession:</strong> planting species that flower one after another so food never runs out</li>
<li><strong>Ground-nesting bees:</strong> bees that dig tunnels in bare, undisturbed, well-drained soil to raise their young</li>
<li><strong>Cavity-nesting bees:</strong> bees that nest in hollow stems, beetle holes in wood or similar tunnels</li>
<li><strong>Foraging range:</strong> the distance a pollinator will travel from its nest, which is short for many small bees</li>
<li><strong>Buffer zone:</strong> an untreated strip that separates habitat from areas where pesticides are applied</li>
</ul>

<h3>Habitat Options Compared</h3>
<table>
<thead><tr><th>Habitat feature</th><th>Benefits</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Wildflower strips</td><td>Quick to establish, diverse forage near crops</td><td>Need weed control while establishing, take some land</td></tr>
<tr><td>Hedgerows</td><td>Long-lasting shelter, early-season blooms, windbreaks</td><td>Slow to mature, need planting and pruning</td></tr>
<tr><td>Flowering cover crops</td><td>Feed pollinators while protecting soil</td><td>Must be managed so they do not compete with cash crops</td></tr>
<tr><td>Untilled field margins</td><td>Nesting sites for ground bees, very low cost</td><td>Can host weeds if not managed</td></tr>
</tbody>
</table>

<h3>Reducing Harm</h3>
<p>Integrated pest management reduces pesticide use by monitoring pests and acting only when needed. When sprays are necessary, applying them when crops are not in bloom, in the evening when bees are less active, and choosing products less toxic to bees all lower risk. Systemic insecticides, which move into the whole plant including pollen and nectar, deserve particular care.</p>

<h3>Real-World Applications</h3>
<p>Orchard growers plant flowering ground covers between tree rows. Vegetable farms sow strips of flowers among crops to attract both pollinators and pest-eating insects. Ranches protect native grasslands rich in wildflowers. Even roadsides, power-line corridors and schoolyards can become stepping-stones that connect habitat patches across a landscape.</p>

<h3>Planning Checklist</h3>
<ol>
<li>Survey what already flowers and nests on the farm.</li>
<li>Choose diverse native plants that bloom from early spring to late fall.</li>
<li>Place habitat within short flying distance of crops.</li>
<li>Protect nesting sites from tillage and heavy traffic.</li>
<li>Coordinate pest management to keep habitat free of drift.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Pollination Services on Farms</h2>
<p>Pollination is a classic ecosystem service: a benefit that nature provides to agriculture, often unpriced. Analyzing it requires understanding which crops depend on animal pollination, which pollinators deliver the service, how habitat supplies them, and whether investments in habitat pay off. This lesson builds the conceptual and practical tools to integrate pollinator habitat into farm management.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Pollination service:</strong> the contribution of animal pollinators to crop yield or quality, valued as an ecosystem service</li>
<li><strong>Pollinator dependence:</strong> the share of a crop's yield that would be lost without animal pollination, which varies widely among crops</li>
<li><strong>Pollen limitation:</strong> a situation where fruit or seed set is lower than possible because flowers receive too little suitable pollen</li>
<li><strong>Functional diversity:</strong> the variety of traits among pollinators, such as body size, flight season and flower handling, that affects service</li>
<li><strong>Spillover:</strong> the movement of pollinators from semi-natural habitat into nearby crop fields</li>
<li><strong>Agri-environment scheme:</strong> a public program that pays farmers for environmental practices such as planting pollinator habitat</li>
</ul>

<h3>Crop Dependence Varies</h3>
<table>
<thead><tr><th>Dependence level</th><th>Example crops</th><th>Management implication</th></tr></thead>
<tbody>
<tr><td>High</td><td>Many melons, squash, almonds, some berries</td><td>Pollination can be the main yield constraint</td></tr>
<tr><td>Moderate</td><td>Apples, cherries, some oilseeds</td><td>Pollination improves fruit set, size and shape</td></tr>
<tr><td>Little or none</td><td>Wheat, rice, maize</td><td>Wind- or self-pollinated; habitat still supports biodiversity</td></tr>
</tbody>
</table>
<p>Crop varieties also differ: some cultivars need cross-pollination from a compatible variety, so orchard design and pollinator movement interact.</p>

<h3>Managed Versus Wild Pollinators</h3>
<p>Many growers rent honey bee colonies during bloom. Research has repeatedly found that wild pollinators also contribute substantially to yields in many crops, and that adding more honey bees does not fully replace a diverse wild community. Wild bees may visit flowers differently, fly in different weather, or move more between rows. Relying on one managed species concentrates risk if colonies suffer losses.</p>

<h3>Habitat Management Methods</h3>
<p>Effective habitat balances establishment cost, land taken out of production and the service gained. Key decisions include seed mix composition (native species with overlapping bloom), placement relative to crop fields, size and connectivity of patches, and long-term maintenance such as mowing timing and control of invasive weeds. Habitat must also be protected from insecticide drift.</p>

<h3>Evaluating Returns</h3>
<p>A simple analysis compares the cost of habitat (seed, labor, foregone crop area) with expected gains in yield or quality from better pollination, plus co-benefits such as natural pest control, erosion control and eligibility for conservation payments. Benefits may take several seasons to appear as pollinator populations build. Results depend strongly on crop dependence, the surrounding landscape and how much habitat already exists nearby.</p>

<h3>Farm Integration Checklist</h3>
<ol>
<li>Identify which crops depend on pollinators and when they bloom.</li>
<li>Assess existing habitat on and around the farm.</li>
<li>Design plantings to fill gaps before and after crop bloom.</li>
<li>Secure nesting habitat for ground- and cavity-nesting bees.</li>
<li>Align pest management with pollinator protection.</li>
<li>Monitor pollinator visits and fruit set to evaluate outcomes.</li>
</ol>
`,
        GRADUATE: `
<h2>Pollinator Decline, Landscape Ecology and Valuing Ecosystem Services</h2>
<p>Evidence from many regions points to declines in the abundance and diversity of wild pollinators, along with high losses in managed honey bee colonies. At the graduate level, pollinator habitat becomes a landscape-scale planning challenge involving multiple landowners, policy instruments and methods for valuing services that markets largely ignore. This lesson examines drivers of decline, landscape ecology principles and valuation approaches.</p>

<h3>Drivers of Decline</h3>
<p>Researchers generally identify several interacting drivers: loss and fragmentation of flower-rich habitat, pesticide exposure, pathogens and parasites (including spread from managed to wild bees), invasive species, and climate change that shifts ranges and disrupts the timing of flowering and insect emergence. These stressors interact; for example, poor nutrition from limited forage can make bees more vulnerable to disease and chemical stress. Attributing decline to a single cause is usually misleading.</p>

<h3>Landscape Ecology Concepts</h3>
<ul>
<li><strong>Landscape heterogeneity:</strong> the mix of land cover types in an area, which strongly influences pollinator diversity</li>
<li><strong>Habitat connectivity:</strong> the degree to which habitat patches are linked so pollinators can move between them</li>
<li><strong>Pollinator corridor:</strong> a linear habitat feature such as a hedgerow or roadside that links larger patches</li>
<li><strong>Intermediate landscape hypothesis:</strong> the idea that local habitat additions have most effect in moderately simplified landscapes</li>
<li><strong>Ecosystem services valuation:</strong> methods that estimate the economic value of benefits nature provides to people</li>
<li><strong>Additionality:</strong> whether a funded conservation action produces benefits that would not have occurred anyway</li>
</ul>
<p>Small habitat patches may produce little response in landscapes that are already rich in semi-natural habitat, and also in extremely simplified landscapes where source populations are missing. This context dependence matters for targeting public funds.</p>

<h3>Valuation Approaches</h3>
<table>
<thead><tr><th>Method</th><th>What it estimates</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Production function</td><td>Yield and revenue attributable to pollinators</td><td>Requires good dependence data; ignores non-market values</td></tr>
<tr><td>Replacement cost</td><td>Cost of substituting with managed bees or hand pollination</td><td>May overstate or understate true value</td></tr>
<tr><td>Stated preference</td><td>Willingness to pay for pollinator conservation</td><td>Survey biases and hypothetical framing</td></tr>
<tr><td>Spatial service models</td><td>Where pollination is supplied and used in a landscape</td><td>Sensitive to parameter assumptions about foraging</td></tr>
</tbody>
</table>

<h3>Policy and Governance</h3>
<p>Public programs pay farmers to establish flower strips, hedgerows and field margins. Their effectiveness depends on seed mix quality, management requirements, placement and monitoring. Result-based payments, which reward measured outcomes rather than prescribed actions, are one approach to improving additionality. Pesticide regulation, roadside management, urban green space and landowner cooperatives that plan across farm boundaries all contribute to landscape-scale outcomes.</p>

<h3>Equity and Knowledge</h3>
<p>Smallholders in many regions depend heavily on pollinator-dependent crops for nutrition and income but may lack access to habitat programs. Local and Indigenous knowledge of flowering plants and insect behavior can strengthen habitat design. Programs that ignore land tenure, labor demands or local priorities risk low uptake.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the landscape context and existing habitat amount.</li>
<li>Identify target pollinator groups and their resource gaps.</li>
<li>Estimate service delivery to dependent crops and non-market values.</li>
<li>Assess additionality, cost-effectiveness and long-term maintenance.</li>
<li>Monitor pollinators and crop outcomes to adapt management.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Pollinator Habitat and Restoration</h2>
<p>Pollinator research has moved from documenting declines toward understanding the structure of plant-pollinator interactions, the mechanisms by which stressors act and interact, and how to restore functional communities in agricultural landscapes. Many questions remain unresolved, partly because long-term data are scarce and pollinator communities vary greatly in space and time. This lesson surveys concepts, methods and debates for advanced research.</p>

<h3>Plant-Pollinator Networks</h3>
<p>Ecologists represent interactions as bipartite networks linking plants and their visitors. Common structural properties include nestedness, where specialists tend to interact with subsets of the partners of generalists, and modularity, where groups of species interact more among themselves. These structures may influence robustness to species loss. However, network metrics are sensitive to sampling effort, and observed visitation does not always equal effective pollination.</p>

<h3>Key Concepts and Methods</h3>
<ul>
<li><strong>Network nestedness:</strong> a pattern in which specialist species interact with subsets of the partners used by generalists</li>
<li><strong>Interaction rewiring:</strong> the formation of new links when species are lost or when timing and distribution shift</li>
<li><strong>Pollen metabarcoding:</strong> identifying plant sources in pollen loads using DNA sequences, revealing forage use</li>
<li><strong>Sublethal effects:</strong> impacts of pesticides on behavior, learning, navigation or reproduction that do not kill directly</li>
<li><strong>Phenological mismatch:</strong> a loss of overlap between flowering time and pollinator activity caused by climate change</li>
<li><strong>Functional restoration:</strong> rebuilding the processes and interactions of a community, not only its species list</li>
</ul>

<h3>Pesticide Impacts: Methodological Debates</h3>
<p>Laboratory studies can establish toxicity and sublethal effects, but field realism is debated: exposure doses, routes (nectar, pollen, soil, water) and combinations with other stressors vary. Field studies capture realism but face confounding and low statistical power. Most regulatory testing has historically focused on honey bees, while solitary and ground-nesting bees may differ in exposure pathways and sensitivity. Mixtures, synergies with fungicides and chronic low-dose exposure remain active research areas.</p>

<h3>Restoration Ecology Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested or open</th></tr></thead>
<tbody>
<tr><td>Does habitat create or just attract pollinators?</td><td>Concentration effects may move pollinators without increasing populations</td></tr>
<tr><td>Which seed mixes restore networks?</td><td>Species richness, phenology and plant traits interact in complex ways</td></tr>
<tr><td>How much habitat is enough?</td><td>Thresholds depend on landscape context and target taxa</td></tr>
<tr><td>Do managed bees harm wild bees?</td><td>Competition and pathogen spillover evidence varies by system</td></tr>
<tr><td>How to measure success?</td><td>Abundance, diversity, network structure and crop yield can disagree</td></tr>
</tbody>
</table>

<h3>Modeling Approaches</h3>
<p>Spatially explicit models estimate pollinator supply from habitat maps and foraging distances; mechanistic population models simulate colony or population dynamics under stressors; network models explore coextinction cascades. Integrating these requires parameter data on foraging, nesting and demography that are lacking for most wild species. Long-term monitoring programs and standardized protocols are essential to detect trends against high natural variability.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Disentangling attraction from population growth in habitat interventions.</li>
<li>Field-realistic assessment of pesticide mixtures on diverse wild bees.</li>
<li>Linking network structure to pollination function and crop outcomes.</li>
<li>Predicting phenological mismatch and adaptive capacity under climate change.</li>
<li>Co-designing restoration with farmers and local knowledge holders.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rpollq1',
      question: {
        ELEMENTARY: 'What do bees carry between flowers?',
        MIDDLE_SCHOOL: 'About how much of our food comes from crops that benefit from pollinators?',
        HIGH_SCHOOL: 'What is bloom succession?',
        UNDERGRADUATE: 'What is pollen limitation?',
        GRADUATE: 'What is a pollinator corridor?',
        PHD: 'What is network nestedness?',
      },
      options: {
        ELEMENTARY: ['Pollen', 'Water', 'Soil', 'Pebbles'],
        MIDDLE_SCHOOL: ['Roughly one out of every three bites', 'Almost none', 'Every single bite', 'Only honey'],
        HIGH_SCHOOL: ['Planting species that flower one after another through the season', 'Picking all flowers at once', 'Mowing every flower in spring', 'Growing only one kind of flower'],
        UNDERGRADUATE: ['Lower fruit or seed set because flowers receive too little suitable pollen', 'Too much pollen causing allergies', 'A legal limit on pollen sales', 'Pollen that cannot be seen'],
        GRADUATE: ['A linear habitat feature like a hedgerow linking larger habitat patches', 'A paved road for beekeepers', 'A greenhouse for bees', 'A shipping route for honey'],
        PHD: ['Specialists interact with subsets of the partners used by generalists', 'All species interact with every other species equally', 'Bees build nests inside networks', 'Plants have no pollinators'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Pollen sticks to fuzzy bees and rubs off on the next flower, helping it make fruit.',
        MIDDLE_SCHOOL: 'Scientists often say about one in three bites of food comes from pollinator-helped crops.',
        HIGH_SCHOOL: 'Bloom succession keeps food available from early spring to late fall.',
        UNDERGRADUATE: 'When pollen delivery is insufficient, flowers set fewer or poorer fruits and seeds.',
        GRADUATE: 'Corridors help pollinators move between patches across a landscape.',
        PHD: 'Nestedness describes specialists linking to subsets of generalists\' partners, which may affect robustness.',
      },
    },
    {
      id: 'rpollq2',
      question: {
        ELEMENTARY: 'Where do many bees lay their eggs?',
        MIDDLE_SCHOOL: 'How are most wild native bees different from honey bees?',
        HIGH_SCHOOL: 'Why are untilled field margins useful for pollinators?',
        UNDERGRADUATE: 'Why are wild pollinators important even where honey bees are rented?',
        GRADUATE: 'What does the intermediate landscape hypothesis suggest?',
        PHD: 'What are sublethal effects of pesticides?',
      },
      options: {
        ELEMENTARY: ['In ice cubes', 'In tiny tunnels in soil or hollow stems', 'On the moon', 'In car tires only'],
        MIDDLE_SCHOOL: ['They live in big hives', 'Most live alone in the ground or hollow stems', 'They make most of the honey we eat', 'They are not insects'],
        HIGH_SCHOOL: ['They are always full of pesticides', 'They provide undisturbed nesting sites for ground-nesting bees', 'They grow the most crops', 'They keep pollinators away'],
        UNDERGRADUATE: ['Wild pollinators never visit crops', 'Wild pollinators add to yields and spread risk beyond one managed species', 'Honey bees pollinate every crop perfectly', 'Wild bees only pollinate wind crops'],
        GRADUATE: ['Habitat always works the same everywhere', 'Local habitat additions have most effect in moderately simplified landscapes', 'Only cities need habitat', 'Landscapes do not affect pollinators'],
        PHD: ['Effects that only happen in labs', 'Impacts on behavior, navigation or reproduction that do not kill directly', 'Effects on plants only', 'Effects that improve bee health'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Many bees live alone and nest in little tunnels in the ground or inside hollow stems.',
        MIDDLE_SCHOOL: 'Most native bee species are solitary, nesting alone rather than in hives.',
        HIGH_SCHOOL: 'Undisturbed soil lets ground-nesting bees dig and raise their young safely.',
        UNDERGRADUATE: 'Wild pollinators contribute substantially, and relying on one species concentrates risk.',
        GRADUATE: 'Effects are strongest where some source populations remain but habitat is limited.',
        PHD: 'Sublethal effects reduce fitness without killing directly, and they are hard to measure in the field.',
      },
    },
    {
      id: 'rpollq3',
      question: {
        ELEMENTARY: 'What do caterpillars need to grow into butterflies?',
        MIDDLE_SCHOOL: 'What is a hedgerow?',
        HIGH_SCHOOL: 'When is the safest time to spray a needed pesticide?',
        UNDERGRADUATE: 'Which crop has little or no dependence on animal pollinators?',
        GRADUATE: 'Which is generally considered a driver of pollinator decline?',
        PHD: 'Why might habitat plantings not increase pollinator populations?',
      },
      options: {
        ELEMENTARY: ['Candy', 'Plastic flowers', 'Host plants they can eat', 'Rain boots'],
        MIDDLE_SCHOOL: ['A type of beehive', 'A pesticide', 'A line of shrubs and trees along a field edge', 'A kind of flower petal'],
        HIGH_SCHOOL: ['At midday while the crop is blooming', 'Directly onto flower strips', 'In the evening when crops are not in bloom', 'Whenever bees are most active'],
        UNDERGRADUATE: ['Almonds', 'Squash', 'Wheat', 'Melons'],
        GRADUATE: ['Too many wildflowers', 'More hedgerows', 'Loss and fragmentation of flower-rich habitat', 'Cooler summers everywhere'],
        PHD: ['Pollinators cannot see flowers', 'Plantings always fail to grow', 'They may just attract existing pollinators rather than grow populations', 'Pollinators avoid all native plants'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Caterpillars eat special host plants, then turn into butterflies.',
        MIDDLE_SCHOOL: 'Hedgerows give shelter and flowers along field borders.',
        HIGH_SCHOOL: 'Spraying outside bloom and when bees are less active lowers their exposure.',
        UNDERGRADUATE: 'Wheat is wind- and self-pollinated, so it does not depend on animals.',
        GRADUATE: 'Habitat loss is a major driver, interacting with pesticides, disease and climate change.',
        PHD: 'Concentration effects may move pollinators into habitat without increasing total numbers.',
      },
    },
    {
      id: 'rpollq4',
      question: {
        ELEMENTARY: 'What is a good way to give insects water?',
        MIDDLE_SCHOOL: 'Why can large single-crop fields be hard on pollinators?',
        HIGH_SCHOOL: 'How do hover flies help farms?',
        UNDERGRADUATE: 'What is spillover in pollination ecology?',
        GRADUATE: 'What is additionality in conservation payments?',
        PHD: 'What does pollen metabarcoding allow researchers to do?',
      },
      options: {
        ELEMENTARY: ['A deep bucket with no place to land', 'A soda can', 'A sprinkler on full blast', 'A shallow dish of water with pebbles'],
        MIDDLE_SCHOOL: ['They have too many flowers all year', 'They are too colorful', 'They are too small', 'They bloom for only a few weeks, then food runs out'],
        HIGH_SCHOOL: ['They eat crop leaves', 'They spread plant diseases', 'They build hives', 'Adults pollinate while larvae eat aphids'],
        UNDERGRADUATE: ['Pesticide spilling from a tank', 'Pollen blowing into the ocean', 'Water overflowing a pond', 'Pollinators moving from semi-natural habitat into nearby crops'],
        GRADUATE: ['Adding extra seeds to a mix', 'Paying farmers twice', 'Adding more bees to a hive', 'Whether funded actions produce benefits that would not have happened anyway'],
        PHD: ['Count bees by photographing them', 'Measure pesticide residues', 'Track bee flight speed', 'Identify plant sources in pollen loads using DNA'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Pebbles give insects a safe place to land and drink without falling in.',
        MIDDLE_SCHOOL: 'A single crop flowers briefly, leaving pollinators without food for the rest of the season.',
        HIGH_SCHOOL: 'Hover flies do double duty: pollinating as adults and controlling aphids as larvae.',
        UNDERGRADUATE: 'Spillover carries pollination services from habitat into neighboring fields.',
        GRADUATE: 'Additionality asks whether payments buy real extra benefits.',
        PHD: 'DNA metabarcoding reveals which plants pollinators actually use for forage.',
      },
    },
    {
      id: 'rpollq5',
      question: {
        ELEMENTARY: 'Which plants are best to grow for local pollinators?',
        MIDDLE_SCHOOL: 'What is a wildflower strip?',
        HIGH_SCHOOL: 'What is a buffer zone?',
        UNDERGRADUATE: 'What is an agri-environment scheme?',
        GRADUATE: 'What does a production function approach estimate?',
        PHD: 'What is phenological mismatch?',
      },
      options: {
        ELEMENTARY: ['Flowers that grow naturally where you live', 'Plastic flowers', 'Only one kind of grass', 'Plants with no flowers'],
        MIDDLE_SCHOOL: ['A band of flowering plants along a field edge to feed pollinators', 'A paved path in a garden', 'A row of beehives', 'A strip of bare concrete'],
        HIGH_SCHOOL: ['An untreated strip separating habitat from sprayed areas', 'A fence to keep bees in', 'A zone where bees are banned', 'A crop storage shed'],
        UNDERGRADUATE: ['A public program paying farmers for environmental practices', 'A private pesticide company', 'A type of beehive', 'A crop insurance fraud'],
        GRADUATE: ['Yield and revenue attributable to pollinators', 'The number of bees in a hive', 'The price of honey', 'The cost of a greenhouse'],
        PHD: ['Loss of overlap between flowering time and pollinator activity due to climate change', 'Two plants with the same color', 'A bee that cannot fly', 'A mismatch in crop prices'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Local native flowers are the foods that local pollinators know and need.',
        MIDDLE_SCHOOL: 'Wildflower strips give pollinators food beside crops after the crop finishes blooming.',
        HIGH_SCHOOL: 'Buffer zones reduce pesticide drift into pollinator habitat.',
        UNDERGRADUATE: 'These programs pay for practices like flower strips and hedgerows.',
        GRADUATE: 'Production functions link pollinator activity to crop output and its market value.',
        PHD: 'When warming shifts flowering and insect emergence differently, interactions can be lost.',
      },
    },
  ],
}

export default expansion
