import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'farm-biodiversity',
  lessons: [
    {
      id: 'ra-bio-1',
      title: 'Farm Wildlife and Living Diversity',
      content: {
        ELEMENTARY: `
<h2>A Farm Full of Life</h2>
<p>When you picture a farm, you might think of cows, corn or apple trees. But a healthy farm is full of many other living things too: birds singing in hedges, ladybugs on leaves, worms in the soil and frogs in the pond. All these different living things together are called biodiversity. The more kinds of life a farm has, the healthier it usually is.</p>

<h3>Little Helpers Everywhere</h3>
<p>Many wild creatures help farmers every day, often without anyone noticing. They eat pests, carry pollen from flower to flower, and turn old leaves into new soil.</p>
<ul>
<li><strong>Biodiversity:</strong> all the many different kinds of plants, animals and tiny living things in one place</li>
<li><strong>Ladybug:</strong> a small spotted beetle that eats aphids, tiny bugs that suck juice from plants</li>
<li><strong>Pollinator:</strong> an animal like a bee or butterfly that carries pollen so plants can make fruit and seeds</li>
<li><strong>Earthworm:</strong> a wiggly soil animal that mixes the soil and makes tunnels for air and water</li>
<li><strong>Habitat:</strong> the home where an animal or plant finds food, water and shelter</li>
</ul>

<h3>Why Lots of Kinds Is Better</h3>
<p>Imagine a team where everyone plays the same position. That team would not do very well! A farm is the same. When there are many kinds of plants and animals, each one does a different job. If one kind has a bad year, the others can still help.</p>

<h3>How Farmers Make Room for Wildlife</h3>
<ol>
<li>They plant rows of bushes and trees along the edges of fields.</li>
<li>They grow strips of wildflowers for bees and butterflies.</li>
<li>They leave a wild corner where long grass and logs can stay.</li>
<li>They keep ponds and streams clean for frogs and fish.</li>
</ol>

<h3>You Can Help Too</h3>
<p>Even a small garden or school yard can be full of life. You can plant flowers that bees love, leave a pile of leaves for beetles to hide in, or put out a shallow dish of water for birds. Then go on a nature hunt and count how many different creatures you can find. Every one of them is part of the team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Biodiversity Makes Farms Healthier</h2>
<p>Biodiversity means the variety of life, from genes to species to whole ecosystems. On a farm, it includes the crops and livestock, the wild plants and animals living around them, and the huge hidden world of soil organisms. Scientists call the variety of life on farmland <em>agrobiodiversity</em>. Farms with more of it tend to be more stable and need fewer chemical inputs.</p>

<h3>Three Layers of Farm Biodiversity</h3>
<ol>
<li><strong>Planned biodiversity:</strong> the crops, trees and animals a farmer chooses to raise</li>
<li><strong>Associated biodiversity:</strong> wild species that show up on their own, like birds, spiders and soil microbes</li>
<li><strong>Genetic diversity:</strong> different varieties and breeds within one crop or animal species</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Agrobiodiversity:</strong> the variety of crops, livestock and wild species found on agricultural land</li>
<li><strong>Monoculture:</strong> growing only one kind of crop over a large area</li>
<li><strong>Natural enemy:</strong> a predator or parasite that attacks crop pests</li>
<li><strong>Hedgerow:</strong> a line of shrubs and trees planted along a field edge</li>
<li><strong>Ecosystem service:</strong> a benefit that nature provides to people, such as pollination or clean water</li>
<li><strong>Soil food web:</strong> the network of bacteria, fungi, insects and worms that live and feed in the soil</li>
</ul>

<h3>Biodiversity at Work</h3>
<table>
<thead><tr><th>Living thing</th><th>Job on the farm</th></tr></thead>
<tbody>
<tr><td>Bees and hoverflies</td><td>Pollinate fruits, vegetables and seeds</td></tr>
<tr><td>Ladybugs, lacewings and spiders</td><td>Eat aphids and other pests</td></tr>
<tr><td>Birds and bats</td><td>Eat insects, including caterpillars and moths</td></tr>
<tr><td>Earthworms and fungi</td><td>Break down plant matter and build soil</td></tr>
<tr><td>Owls and hawks</td><td>Hunt mice and voles that eat crops</td></tr>
</tbody>
</table>

<h3>Why Monocultures Struggle</h3>
<p>A huge field of a single crop is like an all-you-can-eat buffet for the pests that love that crop. With few predators around and nowhere for them to live, pest numbers can explode. Farmers then often rely on pesticides, which can harm helpful insects too and start the cycle again. Adding diversity breaks this cycle by giving natural enemies places to live and making it harder for pests to find their favorite food.</p>

<h3>Making Room for Nature</h3>
<p>Farmers can increase biodiversity with cover crops, crop rotations, wildflower strips, hedgerows, ponds and patches of native vegetation. Keeping some land wild may seem like a loss, but many studies show that these areas support pollinators and pest-eating insects that help the crops nearby.</p>
`,
        HIGH_SCHOOL: `
<h2>On-Farm Biodiversity, Habitat and Ecosystem Services</h2>
<p>Agriculture covers a large share of Earth's ice-free land, which makes farmland critical for global biodiversity. Expansion and intensification of farming are among the leading drivers of biodiversity loss worldwide. Yet well-managed farms can also support a remarkable variety of life, and that life in turn supports food production. This lesson explores how habitat management turns biodiversity into a working part of the farm.</p>

<h3>Functional Biodiversity</h3>
<p>Not all species affect farming in the same way. <em>Functional biodiversity</em> focuses on the groups of organisms that carry out useful processes, such as pollination, pest control, nutrient cycling and soil formation. Having several species that perform the same function, called functional redundancy, makes the service more reliable when conditions change.</p>
<ul>
<li><strong>Functional biodiversity:</strong> the variety of organisms that perform useful ecological functions on a farm</li>
<li><strong>Functional redundancy:</strong> several species performing the same job so the service continues if one declines</li>
<li><strong>Conservation biological control:</strong> managing habitat to support natural enemies of pests</li>
<li><strong>Beetle bank:</strong> a raised grassy strip across a field that shelters ground beetles and spiders</li>
<li><strong>Field margin:</strong> the uncropped strip of land along the edge of a field</li>
<li><strong>Riparian buffer:</strong> a vegetated strip along a stream that filters runoff and provides habitat</li>
</ul>

<h3>Habitat Features Compared</h3>
<table>
<thead><tr><th>Feature</th><th>Main species supported</th><th>Services</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Hedgerows</td><td>Birds, insects, small mammals</td><td>Pest control, windbreak, erosion control</td><td>Shade and space taken from crops</td></tr>
<tr><td>Wildflower strips</td><td>Bees, hoverflies, parasitic wasps</td><td>Pollination and pest control</td><td>Establishment cost and weed management</td></tr>
<tr><td>Cover crops</td><td>Soil organisms, insects</td><td>Soil health, nutrient retention</td><td>Seed cost and timing</td></tr>
<tr><td>Ponds and wetlands</td><td>Amphibians, aquatic insects, birds</td><td>Water storage, nutrient filtering</td><td>Land taken from production</td></tr>
<tr><td>Riparian buffers</td><td>Fish, birds, insects</td><td>Cleaner water, stable banks</td><td>Area along streams not cropped</td></tr>
</tbody>
</table>

<h3>Below Ground</h3>
<p>Much of a farm's biodiversity lives in the soil. A handful of healthy soil can hold billions of microorganisms. Mycorrhizal fungi extend plant roots, bacteria cycle nitrogen and earthworms improve structure. Practices such as reduced tillage, diverse rotations and keeping the soil covered tend to support these communities.</p>

<h3>Real-World Applications</h3>
<p>Fruit growers plant flowering strips between orchard rows to support pollinators and natural enemies. Rice farmers in parts of Asia have long raised fish or ducks in paddies, which can help control pests and weeds. Grain farmers install beetle banks and leave stubble over winter for birds. Many farmers draw on local and Indigenous knowledge of mixed cropping and native plants that has been refined over generations.</p>

<h3>Trade-Offs and Solutions</h3>
<p>Habitat takes some land out of production and requires management. However, research often finds that well-placed habitat on a modest share of farmland can maintain or even improve yields in nearby fields through pollination and pest control. The key is placing the right habitat in the right spot and managing it over time.</p>
`,
        UNDERGRADUATE: `
<h2>Agrobiodiversity, Functional Biodiversity and Conservation Strategies</h2>
<p>Farm biodiversity can be analyzed at multiple levels: genetic diversity within crops and livestock, species diversity across planned and associated organisms, and habitat diversity across the farm and landscape. This lesson develops concepts and methods for assessing biodiversity and for designing conservation strategies that support both wildlife and production.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Alpha diversity:</strong> the number and evenness of species within a single habitat or field</li>
<li><strong>Beta diversity:</strong> the difference in species composition between habitats or sites</li>
<li><strong>Gamma diversity:</strong> the total species diversity across a whole landscape or region</li>
<li><strong>Crop genetic diversity:</strong> variation among varieties and landraces that underpins adaptation to pests and climate</li>
<li><strong>Semi-natural habitat:</strong> uncropped vegetation such as hedgerows, grassland and woodland patches within farmland</li>
<li><strong>Agri-environment scheme:</strong> a program that pays farmers to adopt practices that benefit the environment</li>
</ul>

<h3>Biodiversity and Function</h3>
<p>Ecology suggests that more diverse communities often perform functions more stably over time, partly because species respond differently to stress. In agriculture, increasing plant diversity through rotations, intercropping and cover crops tends to support more diverse soil and insect communities. Natural enemy abundance generally increases with habitat diversity, although the effect on actual pest control and yield varies with crop, pest and landscape context.</p>

<h3>Land Sharing Versus Land Sparing</h3>
<p>A major conceptual debate concerns how to arrange farming and conservation in space.</p>
<table>
<thead><tr><th>Strategy</th><th>Idea</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Land sharing</td><td>Wildlife-friendly farming across the whole landscape</td><td>Supports species living on farmland and delivers on-farm services</td><td>May need more land for the same output</td></tr>
<tr><td>Land sparing</td><td>High-yield farming on less land, with separate protected areas</td><td>Protects species that need large undisturbed habitat</td><td>Intensive areas may lose services and pollute</td></tr>
<tr><td>Mixed approach</td><td>Combination tailored to local species and context</td><td>Flexible and context-specific</td><td>Requires landscape planning and coordination</td></tr>
</tbody>
</table>
<p>Many researchers now see these as ends of a spectrum rather than rival options. The best mix depends on which species are targeted, how yields respond to wildlife-friendly practices and whether spared land is actually protected.</p>

<h3>Measuring Farm Biodiversity</h3>
<p>Because counting every species is impractical, assessments usually rely on indicator groups and habitat measures.</p>
<ol>
<li>Map habitat types and their area, quality and connectivity.</li>
<li>Choose indicator groups, such as birds, pollinators, ground beetles or plants.</li>
<li>Use standard methods, such as transect walks, pan traps or point counts.</li>
<li>Repeat surveys at the same season and locations across years.</li>
<li>Pair biodiversity data with yield and management records.</li>
</ol>

<h3>Designing a Conservation Strategy</h3>
<p>An effective farm plan protects existing high-value habitat first, since mature hedgerows, old grasslands and wetlands are hard to recreate. It then adds habitat where it gives the most benefit, such as flower strips near pollinator-dependent crops, and reduces pressures like broad-spectrum pesticide use. Results should be monitored so the plan can adapt.</p>
`,
        GRADUATE: `
<h2>Biodiversity Policy, Landscape Ecology and Biodiversity-Friendly Farming</h2>
<p>Farmland biodiversity is shaped by forces far beyond the individual farm: market prices, subsidy structures, landscape composition and international commitments. This lesson examines the policy instruments used to support biodiversity on farmland, the landscape-ecology principles that determine their effectiveness, and the governance challenges that limit progress.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Landscape heterogeneity:</strong> the variety and arrangement of land uses and habitats across a landscape</li>
<li><strong>Intermediate landscape hypothesis:</strong> the idea that farm-scale measures often have the largest effect in landscapes with moderate rather than very high or very low habitat cover</li>
<li><strong>Action-based payment:</strong> a payment made for carrying out a prescribed practice regardless of results</li>
<li><strong>Result-based payment:</strong> a payment linked to measured outcomes, such as the number of indicator species present</li>
<li><strong>Additionality:</strong> the extent to which an outcome would not have happened without the intervention</li>
<li><strong>Leakage:</strong> displacement of harmful activity to other places as a result of conservation in one place</li>
</ul>

<h3>Why the Landscape Matters</h3>
<p>Many farmland species need resources spread across multiple fields and seasons. A wildflower strip in a landscape with no other habitat may attract pollinators without supporting viable populations, while the same strip in an already rich landscape may add little. Effectiveness therefore depends on landscape context, which argues for targeting and for coordinating measures across neighboring farms.</p>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Action-based agri-environment payments</td><td>Pay for practices such as hedgerow management</td><td>Simple, predictable for farmers</td><td>Weak link to outcomes</td></tr>
<tr><td>Result-based payments</td><td>Pay for measured biodiversity outcomes</td><td>Rewards results, encourages farmer learning</td><td>Monitoring costs, weather risk for farmers</td></tr>
<tr><td>Collective or cooperative schemes</td><td>Groups of farmers coordinate across a landscape</td><td>Landscape-scale effects</td><td>Transaction costs and need for trust</td></tr>
<tr><td>Regulation</td><td>Limits on drainage, hedgerow removal or pesticide use</td><td>Clear baseline protection</td><td>Enforcement gaps and political resistance</td></tr>
<tr><td>Market standards</td><td>Certification and buyer requirements</td><td>Can reach supply chains globally</td><td>Uneven rigor and limited reach</td></tr>
</tbody>
</table>

<h3>Economics and Incentives</h3>
<p>Biodiversity benefits are partly private, such as pollination and pest control on the farmer's own crops, and partly public, such as the survival of declining species. Private benefits alone rarely justify habitat at the scale conservation requires. Subsidies tied to production volume can also work against biodiversity. Reorienting public support toward public goods is a recurring theme in agricultural policy debates.</p>

<h3>Equity and Knowledge</h3>
<p>Smallholders in many regions manage high levels of crop genetic diversity and complex mixed systems, yet receive little recognition or payment for this. Programs designed around large commercial farms can be inaccessible to them. Recognizing farmers' rights over traditional varieties and engaging local and Indigenous knowledge holders as partners improves both fairness and effectiveness.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define target species or functions and the relevant landscape scale.</li>
<li>Assess landscape context to predict where measures add most value.</li>
<li>Choose instruments that match the strength of evidence and monitoring capacity.</li>
<li>Build in counterfactual monitoring to test additionality.</li>
<li>Check who can access the program and who bears the costs.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Biodiversity, Production and Conservation Effectiveness</h2>
<p>Research on farm biodiversity has moved from documenting declines toward understanding the mechanisms linking biodiversity to production, testing whether conservation interventions work, and developing metrics that can guide policy and markets. Each of these areas involves methodological debates that shape what conclusions the field can draw.</p>

<h3>Biodiversity-Production Relationships</h3>
<p>The shape of the relationship between biodiversity and yield is central to the land sharing and land sparing debate. If biodiversity declines steeply at low levels of intensification, sparing may be favored; if many species tolerate moderate intensification, sharing may perform better. Empirical density-yield curves vary by taxon and region, and estimating them requires consistent yield and species data across gradients of management.</p>
<ul>
<li><strong>Density-yield curve:</strong> a function relating a species' population density to agricultural yield across a landscape</li>
<li><strong>Biodiversity-ecosystem function relationship:</strong> the empirical and theoretical link between diversity and the rate or stability of ecological processes</li>
<li><strong>Before-after-control-impact design:</strong> a study design comparing changes at treated and control sites before and after an intervention</li>
<li><strong>Extinction debt:</strong> future species losses that are expected because of past habitat change but have not yet occurred</li>
<li><strong>Composite biodiversity index:</strong> a single score that combines several biodiversity measures, raising questions of weighting and meaning</li>
<li><strong>Environmental DNA:</strong> genetic material collected from soil, water or air that can be used to detect species present</li>
</ul>

<h3>Conservation Effectiveness</h3>
<p>Evaluations of agri-environment schemes have found mixed effects: positive responses for some taxa and measures, little effect for others, and strong dependence on landscape context and implementation quality. Common methodological weaknesses include absence of baselines, short time frames, non-random placement of measures and confounding from farm characteristics. Quasi-experimental designs, such as matching and difference-in-differences, and long-term monitoring networks are improving causal inference, but replication across regions remains limited.</p>

<h3>Metrics and Measurement</h3>
<table>
<thead><tr><th>Approach</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Species richness of indicator taxa</td><td>Intuitive and widely used</td><td>Sensitive to sampling effort and may miss function</td></tr>
<tr><td>Functional trait diversity</td><td>Links community composition to processes</td><td>Trait data incomplete for many taxa</td></tr>
<tr><td>Habitat-based proxies</td><td>Cheap and scalable with remote sensing</td><td>Assumes habitat equals biodiversity</td></tr>
<tr><td>Environmental DNA and acoustic monitoring</td><td>Broad detection at lower field cost</td><td>Reference database gaps and abundance uncertainty</td></tr>
<tr><td>Composite indices for markets</td><td>Usable for payments and reporting</td><td>Weighting choices are value-laden and contested</td></tr>
</tbody>
</table>
<p>As biodiversity credits and corporate nature disclosures expand, questions of metric validity become pressing. A metric that is easy to improve on paper may not track populations of the species that matter.</p>

<h3>Modeling Methods</h3>
<p>Species distribution models, occupancy models that account for imperfect detection, and spatially explicit population models are used to predict responses to land-use scenarios. Coupled land-use and biodiversity models allow exploration of trade-offs with production and economic outcomes, but propagate uncertainty from each component.</p>

<h3>Contested Questions</h3>
<ul>
<li>How much of global farmland biodiversity can be retained under different yield pathways?</li>
<li>Do on-farm measures support viable populations or merely attract individuals from elsewhere?</li>
<li>How should genetic diversity of crops and livestock be valued alongside wild biodiversity?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Long-term, landscape-scale experiments with randomized or well-matched controls.</li>
<li>Validated, low-cost monitoring combining eDNA, acoustics and remote sensing.</li>
<li>Mechanistic links from habitat to population dynamics, not just occurrence.</li>
<li>Metrics for markets that are robust to gaming and aligned with conservation goals.</li>
<li>Integration of farmer and Indigenous knowledge in research design and interpretation.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rbioq1',
      question: {
        ELEMENTARY: 'Why do farms need wildlife?',
        MIDDLE_SCHOOL: 'What is agrobiodiversity?',
        HIGH_SCHOOL: 'What is functional biodiversity?',
        UNDERGRADUATE: 'What does beta diversity measure?',
        GRADUATE: 'Why does landscape context matter for farm biodiversity measures?',
        PHD: 'What is a common weakness in evaluations of agri-environment schemes?',
      },
      options: {
        ELEMENTARY: ['Wildlife helps eat pests and pollinate plants', 'Wildlife is always bad for farms', 'Farms do not need any wildlife', 'Wildlife makes the soil disappear'],
        MIDDLE_SCHOOL: ['The variety of crops, livestock and wild species on farmland', 'Only the number of tractors on a farm', 'A type of fertilizer', 'The study of farm buildings'],
        HIGH_SCHOOL: ['The variety of organisms that perform useful jobs on a farm', 'Species chosen only for their color', 'Animals kept as pets', 'Plants that have no function'],
        UNDERGRADUATE: ['The difference in species composition between habitats', 'The total species in one field only', 'The weight of all animals on a farm', 'The number of crops sold'],
        GRADUATE: ['Many species need resources spread across many fields and seasons', 'Each farm is a closed system', 'Landscapes never affect wildlife', 'Only national parks hold biodiversity'],
        PHD: ['Missing baselines and non-random placement of measures', 'Too many randomized controls', 'Studies always last for centuries', 'Scheme effects are always obvious'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Birds and bugs eat pests and bees carry pollen, so wildlife helps crops grow.',
        MIDDLE_SCHOOL: 'Agrobiodiversity includes planned crops and animals plus the wild species living on farmland.',
        HIGH_SCHOOL: 'Functional biodiversity focuses on organisms that do jobs like pollination and pest control.',
        UNDERGRADUATE: 'Beta diversity compares how different the species are between habitats or sites.',
        GRADUATE: 'A measure works differently depending on how much habitat already exists around it.',
        PHD: 'Without baselines or random placement, it is hard to tell if a scheme caused any change.',
      },
    },
    {
      id: 'rbioq2',
      question: {
        ELEMENTARY: 'What does a ladybug do on a farm?',
        MIDDLE_SCHOOL: 'Why can pests explode in a monoculture?',
        HIGH_SCHOOL: 'What is a beetle bank?',
        UNDERGRADUATE: 'What is the idea behind land sparing?',
        GRADUATE: 'What is a result-based payment?',
        PHD: 'What does a density-yield curve describe?',
      },
      options: {
        ELEMENTARY: ['It digs big holes', 'It eats aphids that harm plants', 'It eats all the carrots', 'It makes the rain stop'],
        MIDDLE_SCHOOL: ['Because pests dislike that crop', 'There is lots of their food and few predators', 'Because monocultures have too many birds', 'Because pesticides attract helpful insects'],
        HIGH_SCHOOL: ['A place to store harvested beetles', 'A raised grassy strip that shelters ground beetles and spiders', 'A bank that lends money to farmers', 'A pile of rocks in a river'],
        UNDERGRADUATE: ['Spreading wildlife-friendly farming everywhere', 'High-yield farming on less land, with separate protected areas', 'Removing all protected areas', 'Farming only in national parks'],
        GRADUATE: ['A payment for following a practice regardless of results', 'A payment linked to measured biodiversity outcomes', 'A tax on farm biodiversity', 'A loan for buying machinery'],
        PHD: ['How a species population density changes with agricultural yield', 'How fast farm prices change', 'The number of fields per farm', 'The weight of crops per seed'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Ladybugs eat aphids, tiny bugs that suck juice from plants, so they protect crops.',
        MIDDLE_SCHOOL: 'A huge single-crop field is a buffet for pests and offers few homes for predators.',
        HIGH_SCHOOL: 'Beetle banks are grassy strips that shelter predators like ground beetles and spiders.',
        UNDERGRADUATE: 'Land sparing concentrates high-yield farming and protects separate land for nature.',
        GRADUATE: 'Result-based payments reward measured outcomes, such as indicator species present.',
        PHD: 'Density-yield curves link species density to yield and inform sharing versus sparing.',
      },
    },
    {
      id: 'rbioq3',
      question: {
        ELEMENTARY: 'What is a habitat?',
        MIDDLE_SCHOOL: 'What is a hedgerow?',
        HIGH_SCHOOL: 'What does functional redundancy provide?',
        UNDERGRADUATE: 'Why should existing high-value habitat be protected first?',
        GRADUATE: 'What does additionality mean?',
        PHD: 'What is a concern with composite biodiversity indices used in markets?',
      },
      options: {
        ELEMENTARY: ['A kind of farm machine', 'A food that cows eat', 'A home where an animal finds food, water and shelter', 'A type of weather'],
        MIDDLE_SCHOOL: ['A row of crops in the middle of a field', 'A tool for cutting hedges', 'A line of shrubs and trees along a field edge', 'A metal fence'],
        HIGH_SCHOOL: ['Fewer species doing every job', 'More pesticide use', 'Services that continue even if one species declines', 'Less need for any habitat'],
        UNDERGRADUATE: ['It is cheap to recreate quickly', 'It has no wildlife value', 'Mature habitats like old hedgerows and wetlands are hard to recreate', 'New habitat is always better'],
        GRADUATE: ['Adding more fertilizer', 'Counting outcomes twice', 'The extent an outcome would not have happened without the intervention', 'Paying farmers extra for any reason'],
        PHD: ['They are too hard to compute', 'They always use only one species', 'Weighting choices are value-laden and may not track key species', 'They are banned in all markets'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A habitat is a home where a living thing finds food, water and shelter.',
        MIDDLE_SCHOOL: 'Hedgerows are lines of shrubs and trees on field edges that give wildlife homes.',
        HIGH_SCHOOL: 'When several species do the same job, the service keeps going if one declines.',
        UNDERGRADUATE: 'Old habitats take a long time to develop, so protecting them comes before adding new ones.',
        GRADUATE: 'Additionality asks whether the result would have happened anyway without the program.',
        PHD: 'A score easy to improve on paper may not reflect populations of the species that matter.',
      },
    },
    {
      id: 'rbioq4',
      question: {
        ELEMENTARY: 'How can you help wildlife in a garden?',
        MIDDLE_SCHOOL: 'Which animals hunt mice and voles that eat crops?',
        HIGH_SCHOOL: 'What does a riparian buffer do?',
        UNDERGRADUATE: 'What is an agri-environment scheme?',
        GRADUATE: 'Why do production-linked subsidies often work against biodiversity?',
        PHD: 'What does an occupancy model account for?',
      },
      options: {
        ELEMENTARY: ['Pave it with stones', 'Remove every flower', 'Spray everything with bug killer', 'Plant flowers and leave a pile of leaves'],
        MIDDLE_SCHOOL: ['Butterflies and moths', 'Earthworms', 'Ladybugs', 'Owls and hawks'],
        HIGH_SCHOOL: ['It speeds up runoff into the stream', 'It removes all plants near water', 'It is a fence that keeps fish in', 'It filters runoff and provides habitat along streams'],
        UNDERGRADUATE: ['A tax on all farm products', 'A rule banning crops near rivers', 'A trade agreement for grain', 'A program that pays farmers for environmental practices'],
        GRADUATE: ['They reward planting hedgerows', 'They pay only for wildlife outcomes', 'They have no effect on land use', 'They reward output volume, encouraging intensification'],
        PHD: ['Changes in market prices', 'The cost of farm machinery', 'The size of farm buildings', 'Imperfect detection of species during surveys'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Flowers feed bees, and leaf piles give beetles a place to hide.',
        MIDDLE_SCHOOL: 'Owls and hawks are predators that catch mice and voles.',
        HIGH_SCHOOL: 'Plants along streams catch runoff, steady the banks and give wildlife homes.',
        UNDERGRADUATE: 'Agri-environment schemes pay farmers to adopt practices that benefit the environment.',
        GRADUATE: 'Paying for volume pushes farmers to maximize output, often at the expense of habitat.',
        PHD: 'Occupancy models separate true absence from failing to detect a species that is present.',
      },
    },
    {
      id: 'rbioq5',
      question: {
        ELEMENTARY: 'Why is having many kinds of living things on a farm good?',
        MIDDLE_SCHOOL: 'What is a natural enemy?',
        HIGH_SCHOOL: 'Which practices tend to support soil biodiversity?',
        UNDERGRADUATE: 'How do many researchers now view land sharing and land sparing?',
        GRADUATE: 'Why can collective farmer schemes be valuable?',
        PHD: 'What is extinction debt?',
      },
      options: {
        ELEMENTARY: ['Each one does a different job, so the farm keeps working', 'It makes the farm smell bad', 'It means the farm grows nothing', 'It makes all the plants the same'],
        MIDDLE_SCHOOL: ['A predator or parasite that attacks crop pests', 'A farmer who dislikes nature', 'A weed that grows fast', 'A storm that damages crops'],
        HIGH_SCHOOL: ['Reduced tillage, diverse rotations and keeping soil covered', 'Leaving soil bare all year', 'Heavy plowing several times a season', 'Growing only one crop forever'],
        UNDERGRADUATE: ['As ends of a spectrum, with the best mix depending on context', 'As identical ideas', 'As both proven to fail everywhere', 'As irrelevant to biodiversity'],
        GRADUATE: ['They allow coordination across a landscape', 'They remove the need for any trust', 'They only work on a single field', 'They prevent landscape-scale effects'],
        PHD: ['Expected future species losses from past habitat change', 'Money owed by farmers to banks', 'Species that have already been rediscovered', 'The cost of building new habitat'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Like a team with many players, different creatures do different jobs and help in hard years.',
        MIDDLE_SCHOOL: 'Natural enemies such as ladybugs and spiders eat or attack crop pests.',
        HIGH_SCHOOL: 'Less disturbance, more plant variety and constant cover support soil organisms.',
        UNDERGRADUATE: 'The best mix depends on target species, yield responses and whether spared land is protected.',
        GRADUATE: 'Neighboring farms acting together can create habitat networks at landscape scale.',
        PHD: 'Extinction debt means some losses from past habitat change are still to come.',
      },
    },
  ],
}

export default expansion
