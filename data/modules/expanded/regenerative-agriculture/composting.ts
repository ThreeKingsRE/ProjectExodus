import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'composting',
  lessons: [
    {
      id: 'ra-compost-1',
      title: 'Black Gold',
      content: {
        ELEMENTARY: `
<h2>Turning Scraps Into Super Soil</h2>
<p>What happens to an apple core, a pile of autumn leaves or some grass clippings? If we put them in the right kind of pile, tiny helpers slowly turn them into dark, crumbly, sweet-smelling stuff called compost. Gardeners love compost so much that they call it black gold, because it makes plants grow strong and healthy.</p>

<h3>Meet the Tiny Helpers</h3>
<p>A compost pile is like a busy city full of workers. Most of them are so small you cannot see them. They munch on old plants and food scraps and break them into smaller and smaller pieces until they become new soil.</p>
<ul>
<li><strong>Bacteria:</strong> tiny living things, too small to see, that do most of the munching</li>
<li><strong>Fungi:</strong> living things like mushrooms and molds that break down tough leaves and wood</li>
<li><strong>Earthworms:</strong> wiggly helpers that eat scraps and leave behind rich soil</li>
</ul>

<h3>The Compost Recipe</h3>
<p>Making compost is a bit like baking. You need the right ingredients mixed together.</p>
<ul>
<li><strong>Browns:</strong> dry things like fallen leaves, straw and plain cardboard</li>
<li><strong>Greens:</strong> fresh, wet things like fruit peels, vegetable scraps and grass clippings</li>
<li><strong>Water:</strong> enough to make the pile damp like a squeezed-out sponge</li>
<li><strong>Air:</strong> the tiny helpers need to breathe, so the pile gets stirred now and then</li>
</ul>

<h3>Things That Stay Out</h3>
<p>Some things do not belong in a home compost pile. Meat, bones, cheese and oily foods can smell bad and attract animals. Plastic, glass and metal never turn into compost at all.</p>

<h3>Feel the Heat</h3>
<p>When a big pile gets going, it can feel warm inside, even on a cool day! That warmth comes from all the tiny helpers working hard. After some weeks or months, the pile shrinks and turns dark and crumbly. Then it is ready to feed the garden.</p>

<h3>You Can Help</h3>
<ol>
<li>Save fruit and vegetable scraps in a bowl instead of the trash.</li>
<li>Collect dry leaves in autumn to use as browns.</li>
<li>Ask your family or school about starting a small compost bin.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>The Science of Decomposition</h2>
<p>Every living thing eventually dies, and nature has a cleanup crew that recycles it. Decomposition is the process of breaking dead plants and animals into simpler materials that new life can use. Composting is decomposition that people manage on purpose, so it happens faster, smells better and produces something useful for soil.</p>

<h3>Carbon and Nitrogen</h3>
<p>The microbes in compost need two main kinds of food. Carbon gives them energy, and nitrogen helps them build their bodies. Browns, like dry leaves and straw, are high in carbon. Greens, like food scraps and fresh grass, are higher in nitrogen. Composters talk about the carbon-to-nitrogen ratio, written C:N. A pile works best when it has roughly 25 to 30 times more carbon than nitrogen by weight. Because browns are light and fluffy, that usually means a few buckets of browns for every bucket of greens.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Decomposition:</strong> the breaking down of dead plants and animals into simpler materials</li>
<li><strong>Microbes:</strong> living things too small to see without a microscope, such as bacteria and fungi</li>
<li><strong>C:N ratio:</strong> how much carbon there is compared with nitrogen in compost ingredients</li>
<li><strong>Aerobic:</strong> happening with oxygen, which keeps a compost pile working fast and smelling earthy</li>
<li><strong>Humus:</strong> dark, stable organic matter that is left after decomposition is mostly complete</li>
<li><strong>Nutrients:</strong> substances such as nitrogen, phosphorus and potassium that plants need to grow</li>
</ul>

<h3>Troubleshooting a Pile</h3>
<table>
<thead><tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Smells rotten</td><td>Too wet or not enough air</td><td>Add browns and turn the pile</td></tr>
<tr><td>Smells like ammonia</td><td>Too many greens</td><td>Mix in more browns</td></tr>
<tr><td>Nothing happens</td><td>Too dry or too many browns</td><td>Add water and greens</td></tr>
<tr><td>Pile stays cool</td><td>Too small</td><td>Build a bigger pile</td></tr>
</tbody>
</table>

<h3>Why Compost Matters</h3>
<p>When food scraps are buried in a landfill without air, they break down slowly and give off methane, a powerful greenhouse gas. Composting with plenty of air turns the same scraps into a soil builder instead. Compost helps soil hold water like a sponge, feeds earthworms and other soil life, and slowly releases nutrients to plants. Many towns now collect food scraps for composting, and farms use compost to keep their soils healthy year after year.</p>
`,
        HIGH_SCHOOL: `
<h2>Composting Methods and Farm-Scale Systems</h2>
<p>Composting is controlled aerobic decomposition. Whether it happens in a backyard bin or a large farm windrow, the same principles apply: balance carbon and nitrogen, manage moisture and oxygen, and let microbial communities succeed one another through distinct temperature phases. Getting these right produces a stable soil amendment, reduces odors and kills many weed seeds and pathogens.</p>

<h3>The Four Phases of a Hot Pile</h3>
<ol>
<li><strong>Mesophilic phase:</strong> moderate-temperature microbes break down sugars and easy compounds, and the pile warms up within days.</li>
<li><strong>Thermophilic phase:</strong> heat-loving microbes take over, and the core commonly reaches roughly 40 to 70 degrees Celsius. Sustained high temperatures kill many pathogens and weed seeds.</li>
<li><strong>Cooling phase:</strong> as easy food runs out, temperatures fall and moderate-temperature organisms, including many fungi, return.</li>
<li><strong>Curing phase:</strong> slower processes stabilize the material over weeks to months, producing mature compost.</li>
</ol>

<h3>Key Variables</h3>
<ul>
<li><strong>Carbon-to-nitrogen ratio:</strong> a starting mix of roughly 25 to 30 parts carbon to 1 part nitrogen by weight supports fast, odor-free composting</li>
<li><strong>Moisture content:</strong> about 40 to 60 percent water, like a wrung-out sponge, so microbes stay active without drowning</li>
<li><strong>Oxygen supply:</strong> air reaching the pile through turning, forced aeration or coarse bulking materials</li>
<li><strong>Particle size:</strong> smaller pieces decompose faster, but some coarse material keeps air spaces open</li>
<li><strong>Pile size:</strong> large enough to hold heat, small enough that air can reach the center</li>
</ul>

<h3>Comparing Methods</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Best suited for</th></tr></thead>
<tbody>
<tr><td>Turned windrow</td><td>Long piles turned regularly by machine</td><td>Farms with space and equipment</td></tr>
<tr><td>Aerated static pile</td><td>Blowers push or pull air through an unturned pile</td><td>Larger volumes and odor control</td></tr>
<tr><td>In-vessel</td><td>Enclosed drums or containers with controlled conditions</td><td>Urban sites and food waste</td></tr>
<tr><td>Vermicomposting</td><td>Worms process scraps at cooler temperatures</td><td>Small scale, high-quality product</td></tr>
<tr><td>Passive pile</td><td>Left mostly alone for a long time</td><td>Low-labor sites, slow and cooler</td></tr>
</tbody>
</table>

<h3>Compost on the Farm</h3>
<p>Farms often compost manure mixed with bedding, crop residues or wood chips. Composting reduces volume, stabilizes nutrients, lowers odor and makes manure easier to spread. Applied to fields, compost adds organic matter, improves soil structure and water holding, and supplies slowly available nutrients. Because compost nutrients are released gradually, farmers often test both the compost and the soil to avoid over-applying phosphorus.</p>

<h3>Watch Outs</h3>
<p>Poorly managed piles can lose nitrogen as ammonia and produce methane in airless pockets. Some persistent herbicides can survive composting and damage sensitive crops, and plastic contamination in collected food waste is a growing concern. Good recipes, regular monitoring and clean feedstocks solve most problems.</p>
`,
        UNDERGRADUATE: `
<h2>Compost Chemistry, Biology and Application</h2>
<p>Compost quality depends on what goes in, how the process is managed and when the product is used. This lesson connects the biochemistry of decomposition to practical decisions about recipes, process control, maturity testing and field application rates.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Lignocellulose:</strong> the structural material of plant cell walls, made of cellulose, hemicellulose and lignin, which decomposes slowly</li>
<li><strong>Humification:</strong> the transformation of organic residues into stable, dark organic matter resistant to further rapid decay</li>
<li><strong>Compost stability:</strong> the degree to which easily decomposed material has been used up, often measured by respiration rate</li>
<li><strong>Compost maturity:</strong> the readiness of compost for plant use, including the absence of compounds that harm seed germination</li>
<li><strong>Mineralization:</strong> the microbial conversion of organic nutrients into inorganic forms that plants can absorb</li>
<li><strong>Vermicomposting:</strong> decomposition driven by earthworms, typically red wigglers, together with microbes at moderate temperatures</li>
</ul>

<h3>Biochemistry of the Process</h3>
<p>Microbes first consume sugars, starches and proteins, releasing heat, carbon dioxide, water and ammonium. Cellulose and hemicellulose are degraded more slowly, largely by bacteria and fungi with specialized enzymes. Lignin is the most resistant and is broken down mainly by fungi during cooler phases. Nitrogen behavior depends on balance: excess nitrogen relative to carbon is lost as ammonia gas, especially at high pH and temperature, while excess carbon slows the process because microbes run short of nitrogen. Reaching a balanced starting ratio is therefore both an efficiency and a nutrient-conservation decision.</p>

<h3>Microbial Succession</h3>
<p>Communities shift with temperature and substrate. Mesophilic bacteria and fungi start the process; thermophilic bacteria, including many spore-forming species and actinomycetes, dominate the hot phase; and fungal and actinomycete activity rises again during cooling and curing. Actinomycetes produce the earthy smell associated with finished compost. Turning redistributes material so every part passes through the hot core.</p>

<h3>Testing Quality</h3>
<table>
<thead><tr><th>Test</th><th>What it tells you</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Respiration rate</td><td>How actively microbes are still decomposing</td><td>Unstable compost can tie up nitrogen in soil</td></tr>
<tr><td>Seed germination test</td><td>Whether phytotoxic compounds remain</td><td>Immature compost can damage seedlings</td></tr>
<tr><td>Nutrient analysis</td><td>Nitrogen, phosphorus, potassium and salts</td><td>Sets safe and useful application rates</td></tr>
<tr><td>pH and soluble salts</td><td>Chemical suitability for crops</td><td>High salts can harm sensitive plants</td></tr>
<tr><td>Contaminant screening</td><td>Plastics, metals, persistent herbicides</td><td>Protects soil and crop safety</td></tr>
</tbody>
</table>

<h3>Application Strategy</h3>
<p>Only a fraction of compost nitrogen becomes available in the first year because most is bound in stable organic matter. Rates based on crop nitrogen needs can therefore deliver far more phosphorus than crops use, building up soil phosphorus and runoff risk. A common approach is to apply compost to meet phosphorus needs or soil-building goals and supplement nitrogen from legumes or other sources.</p>
<ol>
<li>Analyze the compost and the soil before deciding a rate.</li>
<li>Estimate first-year nutrient availability, not just total content.</li>
<li>Match compost maturity to use: mature compost for seedlings and potting mixes.</li>
<li>Incorporate or cover compost where runoff risk is high.</li>
<li>Track soil organic matter and phosphorus over several years.</li>
</ol>
`,
        GRADUATE: `
<h2>Commercial Composting, Regulation and Compost Tea</h2>
<p>Composting has grown from an on-farm practice into an organics recycling industry that processes food waste, yard trimmings, manures and biosolids. Scaling up introduces questions of siting, odor, contamination, pathogen control, product standards and market development. At the same time, liquid extracts and teas promise biological benefits with uneven evidence. This lesson examines the institutional and technical landscape.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Feedstock:</strong> the raw organic material accepted by a composting facility, such as food scraps, yard trimmings or manure</li>
<li><strong>Time-temperature requirement:</strong> a regulatory or certification rule that compost reach specified temperatures for a set number of days to reduce pathogens</li>
<li><strong>Physical contamination:</strong> non-compostable material such as plastics and glass that lowers compost quality and value</li>
<li><strong>Tipping fee:</strong> the charge a facility receives for accepting waste, often a major part of its revenue</li>
<li><strong>Compost tea:</strong> a liquid made by steeping compost in water, sometimes with aeration and added nutrients, intended to transfer microbes</li>
<li><strong>Organics diversion:</strong> policy that redirects food and yard waste away from landfills toward composting or digestion</li>
</ul>

<h3>Facility Economics</h3>
<p>Commercial composters typically earn money twice: tipping fees for accepting material and sales of finished product. Costs include land, equipment, labor, odor control, contamination removal and compliance. Food waste is valuable for its nitrogen and moisture but is often contaminated with packaging, and removing plastic is expensive. Product markets are seasonal and regional, so facilities with stable buyers among landscapers, farms or public agencies are more resilient.</p>

<h3>Regulatory Themes</h3>
<table>
<thead><tr><th>Regulatory focus</th><th>Purpose</th><th>Typical approach</th></tr></thead>
<tbody>
<tr><td>Pathogen reduction</td><td>Protect human and animal health</td><td>Time-temperature rules and testing for indicator organisms</td></tr>
<tr><td>Metals and contaminants</td><td>Prevent soil accumulation</td><td>Concentration limits, especially for biosolids-derived compost</td></tr>
<tr><td>Site permitting</td><td>Control odor, runoff and nuisance</td><td>Pads, stormwater management, setbacks and size thresholds</td></tr>
<tr><td>Product labeling and certification</td><td>Inform buyers and organic growers</td><td>Quality testing programs and organic input rules</td></tr>
</tbody>
</table>
<p>Emerging concerns include persistent herbicides that survive composting and per- and polyfluoroalkyl substances, which can enter through some feedstocks and are not destroyed by composting. These push facilities toward stricter feedstock screening and source control.</p>

<h3>Climate Accounting</h3>
<p>Diverting food waste from landfills avoids methane formed under anaerobic conditions, which is the main climate rationale for organics policy. Composting itself emits some methane and nitrous oxide if piles become compacted or wet, so process management matters. Benefits on the application side, such as soil carbon additions and reduced fertilizer use, are real but harder to quantify and should be counted carefully to avoid double claiming.</p>

<h3>Compost Tea and Extracts</h3>
<p>Aerated teas are brewed with oxygen supply, often with added food sources such as molasses; non-aerated extracts are steeped without aeration. Field evidence for disease suppression and growth promotion is inconsistent, varying with compost source, brewing method, crop and disease. Adding sugars can support growth of human pathogens if the compost was not properly processed, which is a food safety concern for produce. A rigorous program treats teas as experimental, uses mature, verified compost and evaluates results against untreated controls.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define feedstocks and screen for contaminants at the source.</li>
<li>Document process control, including temperature records and turning.</li>
<li>Test finished product for stability, maturity, nutrients and contaminants.</li>
<li>Account for avoided landfill emissions and process emissions separately.</li>
<li>Assess community impacts of siting, including odor and traffic.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Compost Microbiomes and Disease Suppression</h2>
<p>Compost is a microbially engineered material whose properties emerge from feedstock chemistry, process conditions and community assembly. Research now seeks to explain why some composts suppress plant diseases and others do not, how compost microbes interact with resident soil communities, and how amendments can be optimized for specific soils and goals. This lesson surveys methods, debates and open directions.</p>

<h3>Conceptual Toolkit</h3>
<ul>
<li><strong>General suppression:</strong> disease reduction caused by the overall activity and competition of a large, diverse microbial community</li>
<li><strong>Specific suppression:</strong> disease reduction attributed to particular antagonistic organisms that can be isolated and transferred</li>
<li><strong>Community assembly:</strong> the processes, including selection, dispersal and chance, that determine which microbes establish in a habitat</li>
<li><strong>Priming effect:</strong> a change in decomposition of existing soil organic matter triggered by adding fresh organic material</li>
<li><strong>Co-composting:</strong> composting a primary feedstock together with an additive such as biochar, minerals or clays</li>
<li><strong>Coalescence:</strong> the mixing of two whole microbial communities, such as compost and soil, and the resulting new community</li>
</ul>

<h3>Mechanisms of Disease Suppression</h3>
<p>Composts can suppress soilborne diseases such as damping-off caused by water molds, especially in container media. Proposed mechanisms include competition for nutrients and space, antibiotic production, parasitism of pathogens and induced systemic resistance in plants. General suppression tends to correlate with high microbial activity in stable but not over-mature compost, while specific suppression depends on particular taxa that may or may not colonize the product. A long-standing puzzle is variability: suppression differs between batches of nominally similar compost, partly because the curing environment strongly influences which antagonists establish.</p>

<h3>Methods and Their Limits</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Bioassays with sterilized controls</td><td>Separates biological from chemical effects</td><td>Sterilization changes chemistry too</td></tr>
<tr><td>Amplicon sequencing</td><td>Broad community profiles over time</td><td>Weak link to function and activity</td></tr>
<tr><td>Metagenomics and metatranscriptomics</td><td>Reveal functional potential and expression</td><td>Costly; complex substrate complicates extraction</td></tr>
<tr><td>Synthetic communities</td><td>Test causal roles of defined taxa</td><td>May not reflect complex field communities</td></tr>
</tbody>
</table>

<h3>Compost in Soil: Coalescence and Priming</h3>
<p>Once applied, compost microbes meet established soil communities. Many introduced organisms decline, yet compost can shift resident communities through added substrate and changed chemistry. Fresh, less stable inputs may prime decomposition of native organic matter, partly offsetting carbon additions. Understanding how compost properties govern persistence of its organic matter in different soils is central to claims about carbon sequestration from compost use.</p>

<h3>Optimization and Co-Composting</h3>
<p>Co-composting with biochar is studied for effects on nitrogen retention, ammonia and greenhouse gas emissions, and microbial habitat, with results that vary by biochar type and rate. Optimization research seeks to tailor recipes and curing conditions to target outcomes such as suppression, nutrient release or structure improvement, but outcomes remain hard to predict from feedstock data alone.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Predictive markers of disease suppression that work across composts and pathosystems.</li>
<li>Causal tests of community coalescence using tracked inoculants and synthetic communities.</li>
<li>Persistence of compost-derived carbon across soil types, measured with isotopes and fractionation.</li>
<li>Fate of emerging contaminants and microplastics through composting and field application.</li>
<li>Process models that link feedstock chemistry, temperature history and final product function.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rcpq1',
      question: {
        ELEMENTARY: 'What do you need to make compost?',
        MIDDLE_SCHOOL: 'About what carbon-to-nitrogen ratio helps a compost pile work best?',
        HIGH_SCHOOL: 'What happens during the thermophilic phase?',
        UNDERGRADUATE: 'What is vermicomposting?',
        GRADUATE: 'What is the main climate reason for diverting food waste from landfills?',
        PHD: 'What is general disease suppression?',
      },
      options: {
        ELEMENTARY: ['Browns, greens, water and air', 'Just water', 'Only plastic bags', 'Only rocks'],
        MIDDLE_SCHOOL: ['Roughly 25 to 30 parts carbon to 1 part nitrogen', 'Exactly 1 to 1', 'All nitrogen and no carbon', 'All carbon and no nitrogen'],
        HIGH_SCHOOL: ['Heat-loving microbes raise the core to roughly 40 to 70 degrees Celsius', 'The pile freezes solid', 'Worms do all the work at room temperature', 'Nothing happens at all'],
        UNDERGRADUATE: ['Decomposition driven by earthworms with microbes at moderate temperatures', 'Composting with chemicals only', 'Burning waste for energy', 'Composting in a landfill'],
        GRADUATE: ['Avoiding methane formed when food waste breaks down without oxygen', 'Making landfills last longer only', 'Increasing plastic recycling', 'Reducing water use at homes'],
        PHD: ['Disease reduction caused by the activity and competition of a large, diverse community', 'Suppression by one isolated antagonist only', 'Killing all microbes by sterilization', 'Adding fungicides to compost'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Good compost needs browns, greens, a little water and air for the tiny helpers.',
        MIDDLE_SCHOOL: 'Microbes work best with roughly 25 to 30 times more carbon than nitrogen by weight.',
        HIGH_SCHOOL: 'In the thermophilic phase, heat-loving microbes heat the pile, killing many pathogens and weed seeds.',
        UNDERGRADUATE: 'Vermicomposting uses worms, typically red wigglers, together with microbes at cooler temperatures.',
        GRADUATE: 'Food waste in landfills decomposes anaerobically and releases methane; composting with air avoids most of it.',
        PHD: 'General suppression comes from overall microbial activity and competition rather than one specific organism.',
      },
    },
    {
      id: 'rcpq2',
      question: {
        ELEMENTARY: 'Which of these is a "brown" for compost?',
        MIDDLE_SCHOOL: 'What does it usually mean if a compost pile smells rotten?',
        HIGH_SCHOOL: 'How wet should a working compost pile be?',
        UNDERGRADUATE: 'Why can immature compost harm seedlings?',
        GRADUATE: 'Why is plastic in food waste a big problem for composting facilities?',
        PHD: 'What is community coalescence?',
      },
      options: {
        ELEMENTARY: ['A banana peel', 'Dry fallen leaves', 'Fresh grass clippings', 'A carrot top'],
        MIDDLE_SCHOOL: ['It has too many browns', 'It is too wet or lacks air', 'It is perfectly finished', 'It is too cold outside'],
        HIGH_SCHOOL: ['Completely dry like dust', 'About 40 to 60 percent water, like a wrung-out sponge', 'Under water like a pond', 'It does not matter'],
        UNDERGRADUATE: ['It is too dark in color', 'It may still contain phytotoxic compounds and keep tying up nitrogen', 'It has too much humus', 'It contains no microbes'],
        GRADUATE: ['Plastic speeds composting too much', 'It lowers product quality and is expensive to remove', 'Plastic adds nitrogen', 'It improves compost sales'],
        PHD: ['Two composts reaching the same temperature', 'The mixing of whole microbial communities, such as compost and soil', 'The drying of compost in storage', 'A method for measuring pH'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Dry leaves are browns. Peels, grass clippings and carrot tops are greens.',
        MIDDLE_SCHOOL: 'Rotten smells usually mean the pile is too wet or lacks air, so adding browns and turning helps.',
        HIGH_SCHOOL: 'Microbes need moisture, but too much water fills air spaces, so aim for a wrung-out sponge feel.',
        UNDERGRADUATE: 'Immature compost can contain compounds that harm germination and can still tie up soil nitrogen.',
        GRADUATE: 'Plastic contamination reduces value and safety of compost and removing it adds cost.',
        PHD: 'Coalescence describes how compost and soil communities mix and form a new community.',
      },
    },
    {
      id: 'rcpq3',
      question: {
        ELEMENTARY: 'Why does the inside of a big compost pile feel warm?',
        MIDDLE_SCHOOL: 'What does "aerobic" mean?',
        HIGH_SCHOOL: 'Which composting method uses blowers to move air through a pile that is not turned?',
        UNDERGRADUATE: 'Which plant material is the hardest for microbes to break down?',
        GRADUATE: 'What is a tipping fee?',
        PHD: 'What is a priming effect?',
      },
      options: {
        ELEMENTARY: ['The sun shines inside it', 'Someone put a heater in it', 'Tiny helpers are working hard', 'It is made of hot rocks'],
        MIDDLE_SCHOOL: ['Without any water', 'Very cold', 'Happening with oxygen', 'Made of plastic'],
        HIGH_SCHOOL: ['Passive pile', 'Vermicomposting', 'Aerated static pile', 'Turned windrow'],
        UNDERGRADUATE: ['Sugars', 'Starches', 'Lignin', 'Proteins'],
        GRADUATE: ['A fee paid to farmers for compost', 'A tax on fertilizer', 'The charge a facility receives for accepting waste', 'The cost of a compost thermometer'],
        PHD: ['A coating applied before composting', 'A way to start a compost pile', 'A change in decomposition of existing soil organic matter after fresh material is added', 'The first watering of seedlings'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'All the tiny helpers munching on scraps make heat, so the pile gets warm.',
        MIDDLE_SCHOOL: 'Aerobic means with oxygen. Air keeps compost working fast and smelling earthy.',
        HIGH_SCHOOL: 'An aerated static pile uses blowers to push or pull air through the pile instead of turning it.',
        UNDERGRADUATE: 'Lignin is the most resistant part of plant cell walls and is broken down mainly by fungi.',
        GRADUATE: 'Tipping fees are paid to facilities for taking waste and are often a major part of revenue.',
        PHD: 'Adding fresh material can speed up or slow decomposition of the soil organic matter that was already there.',
      },
    },
    {
      id: 'rcpq4',
      question: {
        ELEMENTARY: 'Which of these should stay out of a home compost pile?',
        MIDDLE_SCHOOL: 'If a compost pile smells like ammonia, what should you add?',
        HIGH_SCHOOL: 'Why do farmers test compost before spreading lots of it?',
        UNDERGRADUATE: 'Why can applying compost based on nitrogen needs cause problems?',
        GRADUATE: 'Why is field evidence for compost tea described as inconsistent?',
        PHD: 'Why do sterilized-control bioassays have a limitation?',
      },
      options: {
        ELEMENTARY: ['Apple cores', 'Dry leaves', 'Coffee grounds', 'Meat and bones'],
        MIDDLE_SCHOOL: ['More greens', 'More meat scraps', 'Nothing, it is finished', 'More browns'],
        HIGH_SCHOOL: ['To check its color for fun', 'To make it heavier', 'Because compost has no nutrients', 'To avoid over-applying nutrients like phosphorus'],
        UNDERGRADUATE: ['Compost has no nitrogen', 'Nitrogen is released too fast', 'Compost removes phosphorus', 'Only part of the nitrogen is available early, so phosphorus can build up'],
        GRADUATE: ['Teas are always harmful', 'Teas never contain microbes', 'Teas are illegal everywhere', 'Results vary with compost source, brewing method, crop and disease'],
        PHD: ['They are too cheap', 'They only work in the field', 'They cannot measure disease', 'Sterilization changes chemistry as well as biology'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Meat and bones can smell bad and attract animals, so they stay out of home piles.',
        MIDDLE_SCHOOL: 'An ammonia smell means too many greens, so mix in more browns.',
        HIGH_SCHOOL: 'Compost nutrients add up over time, and testing helps avoid building up too much phosphorus.',
        UNDERGRADUATE: 'Most compost nitrogen is bound in organic matter, so meeting nitrogen needs can over-supply phosphorus.',
        GRADUATE: 'Outcomes depend on many factors, so teas should be treated as experimental and tested against controls.',
        PHD: 'Heat or radiation sterilization alters compost chemistry, so differences are not purely biological.',
      },
    },
    {
      id: 'rcpq5',
      question: {
        ELEMENTARY: 'Why do gardeners call compost "black gold"?',
        MIDDLE_SCHOOL: 'What is humus?',
        HIGH_SCHOOL: 'What can happen in a compacted pile with airless pockets?',
        UNDERGRADUATE: 'What gives finished compost its earthy smell?',
        GRADUATE: 'What do time-temperature requirements aim to do?',
        PHD: 'Why does disease suppression vary between batches of similar compost?',
      },
      options: {
        ELEMENTARY: ['Because it helps plants grow strong and healthy', 'Because it is made of real gold', 'Because it is very shiny', 'Because it costs nothing'],
        MIDDLE_SCHOOL: ['Dark, stable organic matter left after decomposition', 'A type of bean dip', 'A kind of rock', 'Fresh green leaves'],
        HIGH_SCHOOL: ['Methane can form and nitrogen can be lost', 'The pile turns to plastic', 'It becomes too clean', 'All weeds are guaranteed to die'],
        UNDERGRADUATE: ['Actinomycetes', 'Plastic', 'Lignin alone', 'Ammonia'],
        GRADUATE: ['Reduce pathogens by reaching set temperatures for a set number of days', 'Make compost cooler', 'Speed up shipping', 'Increase plastic content'],
        PHD: ['The curing environment strongly influences which antagonists establish', 'All batches are identical', 'Suppression depends only on color', 'Pathogens cannot live in soil'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Compost is so good for plants that gardeners say it is as precious as gold.',
        MIDDLE_SCHOOL: 'Humus is the dark, stable organic matter that remains when decomposition is mostly complete.',
        HIGH_SCHOOL: 'Without air, microbes can make methane, and poor balance can lose nitrogen as ammonia.',
        UNDERGRADUATE: 'Actinomycetes, active in cooling and curing, produce the familiar earthy smell.',
        GRADUATE: 'Rules require compost to stay hot long enough to reduce pathogens before use.',
        PHD: 'Which suppressive organisms colonize compost during curing varies, so batches differ.',
      },
    },
  ],
}

export default expansion
