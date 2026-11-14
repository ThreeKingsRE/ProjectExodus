import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'composting-fundamentals~2',
  lessons: [
    {
      id: 'zw-comp-1',
      title: "Nature's Recyclers: How Compost Happens",
      content: {
        ELEMENTARY: `
<h2>From Banana Peel to Brown Soil</h2>
<p>Hi, I am Wiggles the worm! I live in a compost bin, and my job is very important. I help turn old banana peels, apple cores and crunchy leaves into dark, crumbly soil that helps new plants grow. It is like magic, but it is really science. Let me show you how it works!</p>

<h3>Who Does the Work?</h3>
<p>Compost is made by lots of tiny helpers. Some are so small you cannot see them without a microscope. Others, like me, you can see if you dig a little. Together we eat old food and plants and turn them into something new.</p>
<ul>
<li><strong>Compost:</strong> dark, crumbly material made when old food and plants break down</li>
<li><strong>Microorganisms:</strong> tiny living things like bacteria and fungi that are too small to see</li>
<li><strong>Decomposer:</strong> a living thing that breaks down dead plants and food scraps</li>
<li><strong>Worm:</strong> a wiggly animal that eats scraps and leaves behind rich soil</li>
<li><strong>Soil:</strong> the ground that plants grow in, full of food for their roots</li>
</ul>

<h3>Greens and Browns</h3>
<p>Our compost pile needs two kinds of food. "Greens" are wet, fresh things like fruit and vegetable peels and grass clippings. "Browns" are dry things like fallen leaves, small twigs and plain cardboard. When we mix them together and add a little water and air, the tiny helpers get busy. The pile can even get warm inside!</p>

<h3>What Goes In, What Stays Out</h3>
<p>Good things for a home compost bin include fruit peels, vegetable scraps, coffee grounds, eggshells and leaves. Keep out plastic, glass, metal and shiny wrappers, because tiny helpers cannot eat them. Most home bins also skip meat and dairy, which can get smelly.</p>

<h3>How You Can Help</h3>
<ol>
<li>Ask a grown-up if your home or school can start a compost bin.</li>
<li>Collect fruit and vegetable scraps in a small container in the kitchen.</li>
<li>Add a handful of dry leaves each time you add scraps.</li>
<li>Use your finished compost to help flowers or vegetables grow.</li>
</ol>

<h3>Think About It</h3>
<p>Every peel you compost becomes food for the soil instead of trash. When the plants grow, they make new fruits and vegetables, and the circle starts again. That is nature's way of recycling!</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Science of Turning Scraps into Soil</h2>
<p>When leaves fall in a forest, nobody hauls them away. Over time, they disappear into the forest floor and become rich soil. Composting copies this natural process and speeds it up. It is one of the simplest ways to keep food scraps and yard waste out of the trash, and it is full of interesting biology and chemistry.</p>

<h3>The Four Ingredients</h3>
<p>Microorganisms in a compost pile need four things to thrive:</p>
<ol>
<li><strong>Carbon</strong> from "browns" such as dry leaves, straw, sawdust and shredded cardboard. Carbon gives microbes energy.</li>
<li><strong>Nitrogen</strong> from "greens" such as vegetable scraps, coffee grounds and fresh grass. Nitrogen helps microbes build their bodies.</li>
<li><strong>Water</strong>, so the pile feels about as damp as a wrung-out sponge.</li>
<li><strong>Oxygen</strong>, because the most helpful microbes breathe air just like we do.</li>
</ol>

<h3>Getting the Balance Right</h3>
<p>Composters talk about the carbon-to-nitrogen ratio, or C:N ratio. Microbes work best when there is roughly 25 to 30 parts carbon for every 1 part nitrogen. Because greens and browns contain different amounts of each, many people simply add two or three scoops of browns for every scoop of greens and adjust by smell and feel.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Organic matter:</strong> material that came from living things, such as plants and food</li>
<li><strong>Aerobic:</strong> a process that happens with oxygen present, which keeps compost from smelling bad</li>
<li><strong>C:N ratio:</strong> the balance of carbon to nitrogen in a compost pile, ideally around 25 to 30 to 1</li>
<li><strong>Humus:</strong> the dark, stable material left after organic matter has fully broken down</li>
<li><strong>Thermophilic bacteria:</strong> heat-loving bacteria that thrive in the hot middle of a busy compost pile</li>
<li><strong>Vermicomposting:</strong> using worms to turn food scraps into compost, often in an indoor bin</li>
</ul>

<h3>Three Stages of a Compost Pile</h3>
<table>
<thead><tr><th>Stage</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Warming up</td><td>Microbes eat the easiest sugars and the pile starts to warm</td></tr>
<tr><td>Hot stage</td><td>Heat-loving bacteria take over, breaking material down fast and killing many weed seeds</td></tr>
<tr><td>Curing</td><td>The pile cools, fungi and worms move in, and the compost becomes stable and earthy</td></tr>
</tbody>
</table>

<h3>Why Composting Matters</h3>
<p>Food scraps and yard waste make up a large share of what households throw away. In a landfill, buried organic matter breaks down without oxygen and releases methane, a powerful greenhouse gas. In a well-run compost pile, the same material becomes a soil improver that holds water and feeds plants. Starting a bin at home or school is a real climate action you can take.</p>
`,
        HIGH_SCHOOL: `
<h2>Composting: Methods, Chemistry and Troubleshooting</h2>
<p>Composting is controlled decomposition. Instead of letting organic waste rot in a landfill, we manage moisture, air and food balance so that microorganisms turn it into a useful soil amendment. Doing it well means understanding the biology, choosing the right method and knowing how to diagnose a pile that is not behaving.</p>

<h3>The Microbial Engine</h3>
<p>Bacteria do most of the early work, followed by fungi and actinomycetes that break down tougher materials such as woody stems and paper fibers. Larger organisms, including worms, mites and beetles, finish the job as the pile cools. As microbes respire, they release carbon dioxide, water and heat. In a large, well-balanced pile the core can become hot enough to kill many pathogens and weed seeds.</p>
<ul>
<li><strong>Mesophilic phase:</strong> the early and late stages when moderate-temperature microbes dominate the pile</li>
<li><strong>Thermophilic phase:</strong> the hot stage when heat-loving microbes rapidly break down material</li>
<li><strong>Actinomycetes:</strong> thread-forming bacteria that break down tough material and give compost its earthy smell</li>
<li><strong>Anaerobic conditions:</strong> a lack of oxygen that lets odor-producing microbes take over</li>
<li><strong>Leachate:</strong> liquid that drains out of a very wet pile, carrying nutrients with it</li>
<li><strong>Maturity:</strong> the point at which compost is stable and will not harm plant roots</li>
</ul>

<h3>Comparing Composting Methods</h3>
<table>
<thead><tr><th>Method</th><th>Best for</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Cold (passive) pile</td><td>Yard waste with little effort</td><td>Slow, may not kill weed seeds</td></tr>
<tr><td>Hot (managed) pile</td><td>Faster results, larger volumes</td><td>Needs turning, balance and enough mass to hold heat</td></tr>
<tr><td>Tumbler</td><td>Small yards, easy mixing</td><td>Limited capacity, can get too wet</td></tr>
<tr><td>Vermicomposting</td><td>Apartments and classrooms</td><td>Worms dislike heat, citrus in excess and overfeeding</td></tr>
<tr><td>Bokashi</td><td>Pre-treating scraps, including some cooked food</td><td>A fermentation step that still needs burying or composting afterward</td></tr>
</tbody>
</table>

<h3>Troubleshooting Guide</h3>
<ol>
<li><strong>Smells like ammonia:</strong> too much nitrogen. Add browns such as leaves or shredded cardboard.</li>
<li><strong>Smells like rotten eggs:</strong> not enough oxygen, often from too much water or compaction. Turn the pile and add coarse browns.</li>
<li><strong>Pile stays cold:</strong> too dry, too small or short on nitrogen. Add water, greens or more material.</li>
<li><strong>Attracts pests:</strong> exposed food. Bury scraps in the middle and avoid meat and oily foods in home systems.</li>
</ol>

<h3>Why It Matters Beyond the Garden</h3>
<p>Compost improves soil structure, helps soil hold water and slowly releases nutrients. It reduces the need for some synthetic fertilizer and keeps organic matter out of landfills, where it would produce methane. Many cities now collect food scraps at the curb, and schools are using compost programs to teach biology, chemistry and responsibility at the same time.</p>
`,
        UNDERGRADUATE: `
<h2>Composting Systems: Process Control, Facility Design and Product Quality</h2>
<p>At scale, composting is a biological treatment process engineered around a few controllable variables: feedstock chemistry, moisture, oxygen supply, temperature and time. Facility operators balance throughput, odor control, land area and capital cost while producing a product that meets the quality expectations of farmers, landscapers and regulators. This lesson frames composting as a process system rather than a backyard hobby.</p>

<h3>Core Process Variables</h3>
<ul>
<li><strong>Feedstock C:N ratio:</strong> the carbon-to-nitrogen balance, typically targeted around 25 to 30 to 1 at the start</li>
<li><strong>Free air space:</strong> the pore volume in a pile that allows oxygen to move through it</li>
<li><strong>Bulking agent:</strong> coarse material such as wood chips that adds structure and porosity to wet feedstocks</li>
<li><strong>Process to further reduce pathogens:</strong> a time and temperature standard used to show that compost has been heated enough to be safe</li>
<li><strong>Stability:</strong> the degree to which microbial activity has slowed, often measured by respiration rate</li>
<li><strong>Phytotoxicity:</strong> harm to plants from immature compost, often caused by organic acids or ammonia</li>
</ul>
<p>These variables interact. Raising moisture improves microbial activity until water fills the pores and blocks oxygen. Adding nitrogen-rich food waste speeds heating but increases ammonia losses and odor risk. A useful mental model is that oxygen demand rises with the readily degradable fraction of the feedstock, so a high-food-waste mix needs more aeration than a leaf-dominated one.</p>

<h3>Facility Technologies Compared</h3>
<table>
<thead><tr><th>System</th><th>Aeration</th><th>Footprint and cost</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Turned windrows</td><td>Mechanical turning plus passive airflow</td><td>Large land area, low capital cost</td><td>Yard trimmings, rural sites</td></tr>
<tr><td>Aerated static pile</td><td>Blowers push or pull air through pipes</td><td>Moderate area, moderate cost</td><td>Mixed food and yard waste, biosolids</td></tr>
<tr><td>In-vessel</td><td>Fully controlled inside a drum, tunnel or container</td><td>Small area, high capital cost</td><td>Urban sites, odor-sensitive locations</td></tr>
<tr><td>Anaerobic digestion followed by composting</td><td>Digestion without oxygen, then aerobic curing</td><td>High capital cost, energy recovery</td><td>Wet food waste and source-separated organics</td></tr>
</tbody>
</table>

<h3>End-Product Quality</h3>
<p>Buyers care about whether compost is safe, stable and clean. Common quality parameters include pathogen indicators, trace metals, physical contaminants such as plastic and glass fragments, maturity, pH, soluble salts and nutrient content. Immature compost can tie up nitrogen in the soil and stunt seedlings, so curing time is not optional. Contamination is often the factor that decides whether compost reaches high-value markets such as organic farming or is downgraded to lower-value uses.</p>

<h3>A Quick Design Checklist</h3>
<ol>
<li>Characterize feedstocks: moisture, C:N ratio, bulk density and expected contamination.</li>
<li>Choose an aeration strategy that matches the most putrescible feedstock, not the average.</li>
<li>Size active and curing areas based on retention times and seasonal peaks such as autumn leaves.</li>
<li>Plan odor management: biofilters, covers, setbacks and community communication.</li>
<li>Manage stormwater and leachate so nutrients do not reach nearby water bodies.</li>
<li>Build a quality testing routine and target specific end markets from the start.</li>
</ol>

<h3>Thinking Quantitatively</h3>
<p>Mass is lost as carbon leaves as carbon dioxide and water evaporates, so finished compost weighs considerably less than the incoming feedstock, often around half or less depending on the mix. That shrinkage matters for logistics and for calculating how much finished product a facility can sell. It also explains why composting reduces the volume of material that would otherwise occupy landfill space.</p>
`,
        GRADUATE: `
<h2>Municipal Composting: Policy, Programs and Contamination Management</h2>
<p>Diverting organics from landfill has become a priority for many cities because organic waste is a major source of landfill methane and makes up a large share of the municipal waste stream. Building a successful municipal composting system, however, is less an engineering problem than a governance one. Collection design, facility siting, contamination control, market development and equitable access must be planned together.</p>

<h3>Policy Instruments</h3>
<ul>
<li><strong>Organics disposal ban:</strong> a rule that prohibits certain generators from sending food or yard waste to landfill</li>
<li><strong>Source separation mandate:</strong> a requirement that households or businesses sort organics from other waste</li>
<li><strong>Pay-as-you-throw:</strong> charging for trash by volume or weight so diverting organics saves money</li>
<li><strong>Procurement requirement:</strong> a commitment by public agencies to buy compost for parks, roads and land projects</li>
<li><strong>Compostable product standard:</strong> a certification that a product breaks down under defined composting conditions</li>
<li><strong>Feedstock acceptance policy:</strong> a facility's rules on which materials it will accept and in what condition</li>
</ul>

<h3>Why Contamination Is the Central Challenge</h3>
<p>Plastic bags, packaging, glass and cutlery that enter organics bins are costly to remove and can fragment into small pieces that end up in the finished product. Contamination reduces compost value, raises processing costs and can turn farmers and landscapers away. A recurring tension involves "compostable" packaging: some items break down under industrial conditions, but they can look like conventional plastic, which confuses residents and sorting staff. Some facilities therefore reject compostable packaging entirely, while others accept only certified items.</p>
<table>
<thead><tr><th>Stage</th><th>Contamination control options</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Household</td><td>Clear labeling, kitchen caddies, education campaigns</td><td>Needs sustained effort and multilingual outreach</td></tr>
<tr><td>Collection</td><td>Cart inspections, feedback tags, targeted follow-up</td><td>Labor costs, potential for perceived unfairness</td></tr>
<tr><td>Facility intake</td><td>Load inspection, rejection or surcharge policies</td><td>Disputes with haulers, may push loads to landfill</td></tr>
<tr><td>Processing</td><td>Screening, depackaging, air separation</td><td>Equipment cost, cannot remove every fragment</td></tr>
</tbody>
</table>

<h3>Economics and Markets</h3>
<p>Composting facilities earn revenue from tipping fees and product sales, but tipping fees usually dominate. Programs are most viable where landfill disposal is expensive or restricted. Market development, such as public procurement and agricultural outreach, closes the loop and prevents finished compost from accumulating unsold. Planners should also compare options in the food recovery hierarchy, since preventing waste and feeding people rank above composting.</p>

<h3>Equity and Siting</h3>
<p>Large facilities can bring truck traffic, odor and noise, and such facilities have historically been sited in lower-income neighborhoods. A fair program pairs centralized processing with community-scale composting, transparent siting criteria and local benefit from the product. Multi-family housing often has lower access to organics collection, which is both an equity issue and a missed diversion opportunity.</p>

<h3>An Evaluation Framework</h3>
<ol>
<li>Diversion: how much organic material is captured relative to what is generated.</li>
<li>Quality: contamination rates at intake and in finished product.</li>
<li>Cost: net cost per tonne compared with landfill disposal.</li>
<li>Climate: avoided methane and soil carbon benefits, net of transport and process emissions.</li>
<li>Equity: participation and access across neighborhoods and housing types.</li>
</ol>
`,
        PHD: `
<h2>Composting Research: Microbial Dynamics, Optimization and Climate Accounting</h2>
<p>Composting is a heterogeneous, non-steady-state bioprocess in which microbial communities, heat and mass transfer, and feedstock chemistry co-evolve over weeks. Despite its long practical history, many fundamental questions remain open: how microbial succession is shaped by process conditions, how to predict greenhouse gas emissions, how persistent contaminants behave, and how composting should be credited in climate accounting.</p>

<h3>Microbial Succession and Function</h3>
<p>High-throughput sequencing has shown that compost communities shift systematically from mesophilic to thermophilic and back, with distinct taxa associated with lignocellulose degradation, nitrogen transformation and humification. A central question is the link between community composition and function: whether specific taxa are reliable indicators of process state, or whether functional redundancy means many different communities achieve similar outcomes. Studies of inoculants remain contested, since native communities often converge regardless of added cultures.</p>
<ul>
<li><strong>Microbial succession:</strong> the predictable sequence of microbial communities as temperature and substrates change</li>
<li><strong>Functional redundancy:</strong> the idea that different organisms can perform the same ecological role</li>
<li><strong>Humification:</strong> the formation of stable, complex organic compounds during maturation</li>
<li><strong>Nitrous oxide:</strong> a potent greenhouse gas formed during nitrogen transformations in compost</li>
<li><strong>Forever chemicals:</strong> a common name for PFAS, synthetic compounds that resist breakdown in the environment</li>
<li><strong>Antibiotic resistance genes:</strong> genetic material conferring drug resistance that may persist through some treatment processes</li>
</ul>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Empirical regression</td><td>Simple, fits site data</td><td>Poor transfer to new feedstocks or climates</td></tr>
<tr><td>Kinetic models with temperature and moisture corrections</td><td>Mechanistic, interpretable parameters</td><td>Parameters are hard to measure in heterogeneous piles</td></tr>
<tr><td>Coupled heat, mass and biological transport models</td><td>Capture spatial gradients within piles</td><td>Computationally demanding, need extensive calibration</td></tr>
<tr><td>Data-driven and sensor-based control</td><td>Adaptive, uses real-time monitoring</td><td>Limited interpretability and transferability</td></tr>
</tbody>
</table>
<p>Spatial heterogeneity is a recurring obstacle: pockets of anaerobic material can produce methane even in a pile that appears well aerated overall, so bulk measurements may underestimate emissions.</p>

<h3>Climate Implications and Contested Accounting</h3>
<p>Composting avoids landfill methane but emits some methane and nitrous oxide of its own, plus ammonia that can later form nitrous oxide elsewhere. The size of the net benefit depends on the counterfactual landfill's gas capture, the composting technology and assumptions about soil carbon. Whether compost-derived soil carbon should be counted as durable sequestration is debated, because much added carbon may decompose over years to decades and results depend on soil type, management and the time horizon chosen.</p>

<h3>Emerging Contaminants</h3>
<p>PFAS from packaging and other sources, microplastic fragments from contaminated feedstocks, and residues of certain persistent herbicides have raised concerns about compost safety and marketability. Key research questions include analytical methods for complex organic matrices, transfer from compost to soil, crops and water, and how acceptance policies for compostable packaging affect contaminant loads.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Linking microbial community data to predictive, process-level control models.</li>
<li>Measuring emissions from full-scale facilities across seasons, not just from pilot reactors.</li>
<li>Establishing harmonized methods for detecting microplastics and PFAS in compost.</li>
<li>Comparing composting, anaerobic digestion and their combination with consistent system boundaries.</li>
<li>Quantifying soil health outcomes of long-term compost application under realistic farm conditions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwcq1',
      question: {
        ELEMENTARY: 'What breaks down food scraps into compost?',
        MIDDLE_SCHOOL: 'What carbon-to-nitrogen ratio do compost microbes like best?',
        HIGH_SCHOOL: 'A compost pile smells like rotten eggs. What is the most likely cause?',
        UNDERGRADUATE: 'What is the main role of a bulking agent such as wood chips?',
        GRADUATE: 'What is usually the biggest operational challenge for municipal composting programs?',
        PHD: 'Which emerging contaminants raise concern about compost safety?',
      },
      options: {
        ELEMENTARY: ['Tiny living things like bacteria, fungi and worms', 'Plastic bags', 'Sunlight alone', 'Cold water alone'],
        MIDDLE_SCHOOL: ['About 25 to 30 parts carbon to 1 part nitrogen', 'Equal parts carbon and nitrogen', 'About 100 parts carbon to 1 part nitrogen', 'About 5 parts carbon to 1 part nitrogen'],
        HIGH_SCHOOL: ['Not enough oxygen, often from too much water or compaction', 'Too many dry leaves', 'The pile is perfectly balanced', 'The pile is too dry'],
        UNDERGRADUATE: ['Adding structure and air space to wet feedstocks', 'Killing pathogens directly', 'Adding nitrogen to the mix', 'Making the compost heavier'],
        GRADUATE: ['Contamination from plastics, glass and other non-compostables', 'Too little organic material being generated', 'No one wanting soil', 'Rainfall at facilities'],
        PHD: ['PFAS and microplastics', 'Excess earthworms', 'Beneficial fungi', 'Water vapor'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Tiny helpers like bacteria and fungi, plus worms, eat old food and plants and turn them into compost.',
        MIDDLE_SCHOOL: 'Microbes work best with roughly 25 to 30 parts carbon for each part nitrogen.',
        HIGH_SCHOOL: 'A rotten-egg smell means anaerobic conditions. Turning the pile and adding coarse browns lets air back in.',
        UNDERGRADUATE: 'Bulking agents create free air space so oxygen can reach microbes in wet, dense feedstocks.',
        GRADUATE: 'Contamination raises processing costs and lowers compost value, so it is the central program challenge.',
        PHD: 'PFAS and microplastic fragments from contaminated feedstocks can persist into finished compost.',
      },
    },
    {
      id: 'zwcq2',
      question: {
        ELEMENTARY: 'Which of these is a "brown" for the compost bin?',
        MIDDLE_SCHOOL: 'Why do helpful compost microbes need oxygen?',
        HIGH_SCHOOL: 'Which composting method uses worms and works well in classrooms?',
        UNDERGRADUATE: 'Which facility type uses blowers and pipes to move air through a pile that is not turned?',
        GRADUATE: 'What does a pay-as-you-throw policy do?',
        PHD: 'What does functional redundancy mean in compost microbiology?',
      },
      options: {
        ELEMENTARY: ['A banana peel', 'Dry fallen leaves', 'A glass jar', 'A plastic toy'],
        MIDDLE_SCHOOL: ['The pile would melt without it', 'They are aerobic and breathe air, which keeps the pile from smelling', 'Oxygen turns compost into plastic', 'They do not need oxygen at all'],
        HIGH_SCHOOL: ['Cold pile', 'Vermicomposting', 'Tumbler', 'Bokashi'],
        UNDERGRADUATE: ['Turned windrow', 'Aerated static pile', 'Landfill cell', 'Incinerator'],
        GRADUATE: ['Bans all composting', 'Charges for trash by amount so diverting organics saves money', 'Pays residents to throw away more', 'Makes trash collection free'],
        PHD: ['Different organisms can perform the same ecological role', 'Microbes repeat the same genes twice', 'Only one species can degrade lignin', 'Compost has no microbes after heating'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Dry leaves are a brown. Peels are greens, and glass and plastic never go in compost.',
        MIDDLE_SCHOOL: 'The most helpful microbes are aerobic. Without air, smelly anaerobic microbes take over.',
        HIGH_SCHOOL: 'Vermicomposting uses worms in a bin, which works well indoors in apartments and classrooms.',
        UNDERGRADUATE: 'An aerated static pile uses blowers and pipes instead of turning to supply oxygen.',
        GRADUATE: 'Pay-as-you-throw makes disposal cost depend on quantity, rewarding separation of organics.',
        PHD: 'Functional redundancy means many different communities can achieve similar process outcomes.',
      },
    },
    {
      id: 'zwcq3',
      question: {
        ELEMENTARY: 'Which of these should stay OUT of the compost bin?',
        MIDDLE_SCHOOL: 'What gas do food scraps release when they rot in a landfill without oxygen?',
        HIGH_SCHOOL: 'What does an ammonia smell in a compost pile usually mean?',
        UNDERGRADUATE: 'Why must compost be cured until it is mature before use?',
        GRADUATE: 'Why is "compostable" packaging a source of tension for facilities?',
        PHD: 'Why can bulk measurements underestimate methane from a compost pile?',
      },
      options: {
        ELEMENTARY: ['Apple cores', 'Eggshells', 'A plastic wrapper', 'Coffee grounds'],
        MIDDLE_SCHOOL: ['Oxygen', 'Helium', 'Methane', 'Neon'],
        HIGH_SCHOOL: ['Too many browns', 'The pile is finished', 'Too much nitrogen', 'Too much air'],
        UNDERGRADUATE: ['Mature compost is heavier', 'Curing adds plastic', 'Immature compost can harm plant roots and tie up nitrogen', 'Curing makes it smell stronger'],
        GRADUATE: ['It is always banned by law', 'It never breaks down', 'It can look like regular plastic and confuse sorting', 'It makes compost too rich'],
        PHD: ['Methane cannot be measured', 'Piles never contain methane', 'Anaerobic pockets can exist inside a pile that looks well aerated overall', 'Sensors only measure nitrogen'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Tiny helpers cannot eat plastic, so wrappers belong elsewhere.',
        MIDDLE_SCHOOL: 'Buried scraps break down without oxygen and release methane, a powerful greenhouse gas.',
        HIGH_SCHOOL: 'Ammonia means excess nitrogen. Adding browns brings the balance back.',
        UNDERGRADUATE: 'Immature compost can contain organic acids or ammonia that stunt seedlings, so curing matters.',
        GRADUATE: 'Compostable items can resemble conventional plastic, so some facilities reject them entirely.',
        PHD: 'Spatial heterogeneity means local anaerobic zones can emit methane missed by bulk sampling.',
      },
    },
    {
      id: 'zwcq4',
      question: {
        ELEMENTARY: 'What can you do with finished compost?',
        MIDDLE_SCHOOL: 'What is humus?',
        HIGH_SCHOOL: 'What is the hot stage of composting called?',
        UNDERGRADUATE: 'Why does finished compost weigh much less than the feedstock?',
        GRADUATE: 'How do public procurement requirements help composting programs?',
        PHD: 'Why is counting compost soil carbon as durable sequestration debated?',
      },
      options: {
        ELEMENTARY: ['Throw it in the trash', 'Put it in the recycling bin', 'Wrap presents with it', 'Spread it on gardens to help plants grow'],
        MIDDLE_SCHOOL: ['A type of plastic', 'A kind of worm', 'A gas from the pile', 'The dark, stable material left after breakdown'],
        HIGH_SCHOOL: ['The curing phase', 'The frozen phase', 'The anaerobic phase', 'The thermophilic phase'],
        UNDERGRADUATE: ['Workers remove most of it', 'Worms carry it away', 'It is dried in ovens', 'Carbon leaves as carbon dioxide and water evaporates'],
        GRADUATE: ['They ban compost sales', 'They raise landfill use', 'They replace collection', 'They create reliable demand for finished compost'],
        PHD: ['Soil never contains carbon', 'It is always permanent', 'Compost contains no carbon', 'Much added carbon may decompose over years to decades depending on conditions'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Finished compost feeds the soil so flowers and vegetables grow strong.',
        MIDDLE_SCHOOL: 'Humus is the dark, stable organic matter left once breakdown is complete.',
        HIGH_SCHOOL: 'The thermophilic phase is when heat-loving microbes break material down fast.',
        UNDERGRADUATE: 'Microbial respiration releases carbon dioxide, and moisture evaporates, so mass drops a lot.',
        GRADUATE: 'Public purchasing for parks and roads gives facilities a dependable market for their product.',
        PHD: 'Persistence of compost carbon depends on soil type, management and the time horizon chosen.',
      },
    },
    {
      id: 'zwcq5',
      question: {
        ELEMENTARY: 'What two kinds of food does a compost pile need?',
        MIDDLE_SCHOOL: 'How damp should a compost pile feel?',
        HIGH_SCHOOL: 'What should you do if a pile stays cold?',
        UNDERGRADUATE: 'Which system has the smallest footprint but the highest capital cost?',
        GRADUATE: 'Which equity concern is common in municipal composting?',
        PHD: 'Why are results from compost inoculant studies contested?',
      },
      options: {
        ELEMENTARY: ['Rocks and sand', 'Greens and browns', 'Plastic and metal', 'Candy and soda'],
        MIDDLE_SCHOOL: ['Bone dry like sand', 'Like a wrung-out sponge', 'Soaking wet like a puddle', 'Frozen solid'],
        HIGH_SCHOOL: ['Add plastic', 'Check moisture and add greens or more material', 'Seal it in a bag', 'Add only glass'],
        UNDERGRADUATE: ['Turned windrow', 'In-vessel', 'Backyard pile', 'Open field spreading'],
        GRADUATE: ['Facilities are only sited in wealthy areas', 'Facilities have often been sited in lower-income neighborhoods', 'Everyone always has equal access', 'Compost is too cheap'],
        PHD: ['Inoculants are illegal', 'Native communities often converge regardless of added cultures', 'No microbes live in compost', 'Inoculants always double speed'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Greens are wet scraps and browns are dry leaves. Mixed together, they feed the tiny helpers.',
        MIDDLE_SCHOOL: 'A pile should be about as damp as a wrung-out sponge: moist but not soggy.',
        HIGH_SCHOOL: 'A cold pile is often too dry, too small or short on nitrogen.',
        UNDERGRADUATE: 'In-vessel systems control conditions in a small space but cost the most to build.',
        GRADUATE: 'Odor and truck traffic burdens have often fallen on lower-income neighborhoods.',
        PHD: 'Because native microbial communities tend to converge, the added value of inoculants is unclear.',
      },
    },
  ],
}

export default expansion
