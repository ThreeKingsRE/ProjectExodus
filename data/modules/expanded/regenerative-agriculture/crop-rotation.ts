import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'crop-rotation',
  lessons: [
    {
      id: 'ra-rotation-1',
      title: 'Taking Turns',
      content: {
        ELEMENTARY: `
<h2>Plants Take Turns Too</h2>
<p>Do you take turns on the swings at the playground? Farmers take turns too, but with plants! Instead of growing the same crop in the same field every year, they grow corn one year, beans the next year and maybe wheat after that. This is called crop rotation, and it keeps fields healthy.</p>

<h3>Why Not Grow the Same Thing Every Year?</h3>
<p>Every kind of plant has its own hungry bugs and its own sicknesses. If a farmer grows the same plant in the same place again and again, those bugs and sicknesses always find dinner waiting. Each year there are more of them. When the farmer switches to a different plant, the bugs get confused and hungry, and many of them go away.</p>
<ul>
<li><strong>Crop:</strong> a plant that farmers grow for food or other uses, like corn or wheat</li>
<li><strong>Rotation:</strong> changing which crop grows in a field from one year to the next</li>
<li><strong>Pest:</strong> a bug or animal that eats or harms the plants we want to grow</li>
</ul>

<h3>Plants Eat Different Foods</h3>
<p>Plants take food from the soil. Some plants, like corn, are very hungry and take lots of food. Other plants, like beans and peas, are special. Tiny helpers living on their roots grab a plant food called nitrogen from the air and put it into the soil. So after beans, the soil is ready for hungry plants again!</p>
<ul>
<li><strong>Nitrogen:</strong> an important plant food that helps leaves grow green and strong</li>
<li><strong>Legume:</strong> a plant like beans, peas or clover that helps put nitrogen into soil</li>
<li><strong>Root:</strong> the part of a plant under the ground that drinks water and holds it in place</li>
</ul>

<h3>A Simple Rotation</h3>
<ol>
<li>Year one: plant hungry corn.</li>
<li>Year two: plant beans to feed the soil.</li>
<li>Year three: plant wheat or oats.</li>
<li>Then start again!</li>
</ol>

<h3>Try It in Your Garden</h3>
<p>If you have a garden, draw a map of where each plant grows this year. Next year, move each plant to a new spot. Peas and beans make great neighbors to follow tomatoes or corn. Taking turns helps plants stay healthy, just like sharing helps friends stay happy!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Why Changing Crops Keeps Farms Healthy</h2>
<p>Crop rotation is the practice of growing different crops in a planned order on the same field over several seasons. It is one of the oldest farming ideas in the world. Farmers in many cultures, from ancient times to today, noticed that fields stayed more productive when crops were changed. Science now explains why it works.</p>

<h3>Breaking the Pest Cycle</h3>
<p>Many insects, worms and diseases attack only one kind of crop or a family of related crops. Some survive the winter in the soil or in old plant leftovers. If the same crop returns the next year, they wake up to a feast and their numbers grow. Rotating to an unrelated crop starves them out. This is called breaking the pest cycle.</p>

<h3>Feeding the Soil</h3>
<p>Legumes such as soybeans, peas, beans, clover and alfalfa form a partnership with bacteria called rhizobia. The bacteria live in small bumps on the roots called nodules and turn nitrogen gas from the air into a form plants can use. A crop that follows a legume often needs less fertilizer.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Monoculture:</strong> growing the same single crop in the same field year after year</li>
<li><strong>Crop family:</strong> a group of related plants, such as the tomato family, that often share pests</li>
<li><strong>Nitrogen fixation:</strong> turning nitrogen gas from the air into a form that plants can use</li>
<li><strong>Nodules:</strong> small bumps on legume roots where helpful bacteria live</li>
<li><strong>Heavy feeder:</strong> a crop that takes a lot of nutrients from the soil, such as corn</li>
<li><strong>Cover crop:</strong> a crop grown to protect and improve soil between main crops</li>
</ul>

<h3>Crops and Their Roles</h3>
<table>
<thead><tr><th>Crop type</th><th>Example</th><th>Role in a rotation</th></tr></thead>
<tbody>
<tr><td>Heavy feeder</td><td>Corn</td><td>High yield but uses much nitrogen</td></tr>
<tr><td>Legume</td><td>Soybeans, clover</td><td>Adds nitrogen to the soil</td></tr>
<tr><td>Small grain</td><td>Wheat, oats</td><td>Covers soil and breaks pest cycles</td></tr>
<tr><td>Deep-rooted forage</td><td>Alfalfa</td><td>Builds soil structure and adds nitrogen</td></tr>
</tbody>
</table>

<h3>A Famous Example</h3>
<p>In Europe hundreds of years ago, farmers used a three-field system where one field rested each year. Later, farmers added clover and turnips to their rotations. The clover fed the soil and the turnips fed animals over winter, so there was no need to leave fields empty. Today, rotations are still one of the simplest ways for farmers to keep soil healthy and use fewer chemicals.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Crop Rotations</h2>
<p>A crop rotation is a planned sequence of crops on a field over several years. Good rotation design is like solving a puzzle: each crop must fit the soil, climate, market and equipment, while the sequence as a whole controls pests, balances nutrients and protects soil. This lesson looks at how rotations work and how farmers design them.</p>

<h3>Pest and Disease Cycles</h3>
<p>Many pests are specialists. A classic example is the corn rootworm, whose larvae feed on corn roots. In much of its range, adult beetles lay eggs in cornfields, so rotating to soybeans means the hatching larvae find no corn and die. Diseases that survive in crop residue or soil, and nematodes that feed on specific roots, can be reduced the same way. Pests adapt, however: in some regions rootworm populations have evolved behaviors that partly defeat simple two-crop rotations, which is one reason longer, more diverse rotations are valuable.</p>

<h3>Nutrient Management</h3>
<p>Rotations shape the nutrient budget of a field. Legumes add nitrogen through fixation. Deep-rooted crops can recover nutrients that leached below shallow roots. Crops differ in how much residue they leave and how fast it breaks down, which affects organic matter and the nitrogen available to the next crop.</p>

<h3>Design Principles</h3>
<ul>
<li><strong>Family separation:</strong> avoiding planting crops from the same plant family back to back so shared pests cannot build up</li>
<li><strong>Nitrogen sequencing:</strong> following legumes with heavy feeders to use the nitrogen they leave behind</li>
<li><strong>Root diversity:</strong> mixing fibrous and deep taproot crops to build soil structure at different depths</li>
<li><strong>Season diversity:</strong> including both warm-season and cool-season crops to disrupt weed life cycles</li>
<li><strong>Continuous cover:</strong> using cover crops to keep living roots in the soil between cash crops</li>
</ul>

<h3>Comparing Rotations</h3>
<table>
<thead><tr><th>Rotation</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Continuous corn</td><td>Simple; one set of equipment</td><td>Pest build-up, high fertilizer needs</td></tr>
<tr><td>Corn and soybean</td><td>Breaks some pest cycles; nitrogen credit</td><td>Limited diversity; weeds adapt</td></tr>
<tr><td>Corn, soybean, small grain with clover</td><td>Better weed and pest control; more soil cover</td><td>Needs markets for grain and forage</td></tr>
<tr><td>Grain crops with several years of alfalfa or grass</td><td>Large soil structure and nitrogen benefits</td><td>Requires livestock or a hay market</td></tr>
</tbody>
</table>

<h3>Weeds and Timing</h3>
<p>Weeds tend to thrive in crops planted at the same time each year. Rotating spring-planted crops with fall-planted grains and perennial forages changes when the soil is disturbed and shaded, so no single weed species is always favored. This reduces reliance on herbicides and slows herbicide resistance.</p>

<h3>Real-World Application</h3>
<p>Vegetable growers often divide their land into blocks and rotate crop families through them on a fixed cycle. Grain farmers may add a small grain and a cover crop to a corn and soybean system. In both cases, keeping a written field history is essential so the plan can be followed and improved.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Rotation Effects and Economics</h2>
<p>Rotations produce benefits that cannot be explained by any single mechanism. Crops grown in rotation often yield more than the same crop grown continuously, even when both receive ample fertilizer. This lesson unpacks that rotation effect, considers how rotation length matters, and examines the economic reasoning farmers use when choosing a sequence.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Rotation effect:</strong> the yield increase of a crop grown in rotation compared with continuous cropping that is not explained by fertilizer inputs alone</li>
<li><strong>Nitrogen credit:</strong> the reduction in fertilizer nitrogen needed after a legume, accounted for in nutrient planning</li>
<li><strong>Rotation length:</strong> the number of years before the same crop returns to a field</li>
<li><strong>Break crop:</strong> a crop from a different family inserted to interrupt pests, diseases and weeds of the main crop</li>
<li><strong>Enterprise budget:</strong> a calculation of expected costs, revenues and returns for one crop on a per-area basis</li>
<li><strong>Risk diversification:</strong> spreading income across crops so that a poor season or price for one does not ruin the farm</li>
</ul>

<h3>Explaining the Rotation Effect</h3>
<p>Researchers attribute the rotation effect to several overlapping causes: fewer specialized pathogens and nematodes, reduced autotoxic or allelopathic residues, better soil structure and water relations, more diverse soil biology and improved nutrient cycling beyond nitrogen alone. The relative importance differs by crop, soil and climate, which is why the effect is measured empirically through long-term rotation experiments rather than predicted from first principles.</p>

<h3>How Rotation Length Matters</h3>
<p>Pathogens and pests vary in how long they survive without a host. Some foliar diseases decline within a year, while resting structures of certain soilborne pathogens persist for many years. A rotation must be long enough to let target pests decline. Longer rotations also tend to include more crop types, which spreads labor and builds soil organic matter, especially when perennial forages are included.</p>

<h3>Economics of Rotation Choice</h3>
<table>
<thead><tr><th>Factor</th><th>Favors simple rotations</th><th>Favors diverse rotations</th></tr></thead>
<tbody>
<tr><td>Market access</td><td>Strong markets for one or two crops</td><td>Local buyers for grains, forage or specialty crops</td></tr>
<tr><td>Equipment</td><td>Specialized machinery already owned</td><td>Flexible or shared equipment</td></tr>
<tr><td>Input prices</td><td>Cheap fertilizer and pesticides</td><td>High input prices reward nitrogen credits and fewer sprays</td></tr>
<tr><td>Risk</td><td>Strong crop insurance for main crops</td><td>Need to spread weather and price risk</td></tr>
<tr><td>Labor</td><td>Short, intense workload</td><td>Workload spread across seasons</td></tr>
</tbody>
</table>
<p>Long-term trials in grain regions have found that extending a corn and soybean rotation with small grains and forage legumes can maintain yields and profitability while reducing synthetic fertilizer and herbicide use. Whether this works on a given farm depends heavily on markets for the added crops.</p>

<h3>An Optimization Checklist</h3>
<ol>
<li>List the main pests, diseases and weeds and how long each survives without a host.</li>
<li>Identify crops with available markets and suitable equipment.</li>
<li>Arrange crops to separate families and follow legumes with heavy feeders.</li>
<li>Build enterprise budgets including nitrogen credits and reduced pest control costs.</li>
<li>Test the plan on part of the farm and track yields and costs for several cycles.</li>
</ol>
`,
        GRADUATE: `
<h2>Complex Rotations, Modeling and Long-Term Trials</h2>
<p>Rotation research sits at the meeting point of agronomy, ecology and economics. Because rotation effects unfold over years and interact with weather, management and markets, they are studied through long-term experiments and simulation models. This lesson examines how complex rotations are evaluated, what models can and cannot represent, and why institutions often discourage diversification.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Legacy effect:</strong> an influence of a previous crop on soil, pests or yields that persists for one or more years after it was grown</li>
<li><strong>Long-term experiment:</strong> a replicated field trial maintained for decades to observe slow changes in soil and productivity</li>
<li><strong>Crop simulation model:</strong> a computer model that represents crop growth, soil water and nutrients over time under given management and weather</li>
<li><strong>Yield stability:</strong> how consistent yields are across years with different weather</li>
<li><strong>Path dependence:</strong> the tendency of past investments, markets and policies to lock farms into existing practices</li>
<li><strong>Multi-criteria evaluation:</strong> comparing options using several outcomes at once, such as profit, emissions, soil health and risk</li>
</ul>

<h3>What Long-Term Trials Show</h3>
<p>Some of the world's oldest agricultural experiments, started in the nineteenth century in Europe and North America, include rotation comparisons. Together with newer trials, they show consistent patterns: diverse rotations tend to raise soil organic matter, reduce pest pressure and improve yield stability, especially in dry or otherwise stressful years. They also show that benefits take years to emerge, which short trials systematically miss.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Process-based crop models</td><td>Simulate water and nitrogen carryover between crops</td><td>Represent pests, diseases and soil biology poorly</td></tr>
<tr><td>Statistical analysis of trial networks</td><td>Captures real-world rotation effects</td><td>Hard to extrapolate to new climates or crops</td></tr>
<tr><td>Whole-farm optimization</td><td>Includes labor, markets and machinery constraints</td><td>Depends on uncertain price assumptions</td></tr>
<tr><td>Participatory scenario planning</td><td>Builds on farmer knowledge and local constraints</td><td>Less generalizable</td></tr>
</tbody>
</table>
<p>Because process models usually omit pest and biological mechanisms, they can understate rotation benefits. Combining models with empirical rotation effects from trials is a practical compromise.</p>

<h3>Institutional Barriers</h3>
<p>In many grain regions, infrastructure, commodity programs, insurance products and research funding have centered on a few crops. Elevators may not buy small grains, and specialized equipment is costly to diversify. These forms of path dependence can make diversification unprofitable for an individual farm even when it offers public benefits such as cleaner water and lower emissions.</p>

<h3>Policy Levers</h3>
<ol>
<li>Insurance and support programs that cover diverse crops and reward reduced risk.</li>
<li>Market development for small grains, forages and legumes, including local processing.</li>
<li>Payments for environmental outcomes linked to diverse rotations.</li>
<li>Public investment in long-term trials and extension that translate results to farms.</li>
</ol>

<h3>Evaluation Framework</h3>
<p>A robust evaluation compares rotations across many years and weather conditions, reports yield stability as well as averages, includes environmental outcomes such as nitrate losses, and accounts for labor and market access. Multi-criteria evaluation makes trade-offs explicit rather than reducing them to a single profit number.</p>
`,
        PHD: `
<h2>Research Frontiers: Rotations, Soil Microbiomes and Disease Dynamics</h2>
<p>Rotation effects have long been documented empirically, but their mechanisms remain partly unresolved. Contemporary research uses molecular microbial ecology, plant-soil feedback theory and long-term trials to ask how crop sequences reshape soil communities, how those changes influence disease and productivity, and how to predict rotation outcomes in new environments. This lesson outlines the concepts, evidence and open questions.</p>

<h3>Conceptual Toolkit</h3>
<ul>
<li><strong>Plant-soil feedback:</strong> the process by which a plant changes soil biota and chemistry in ways that affect later plants, positively or negatively</li>
<li><strong>Disease-suppressive soil:</strong> a soil in which a pathogen causes little disease despite being present and a susceptible host being grown</li>
<li><strong>Take-all decline:</strong> the reduction of take-all disease of wheat after several years of continuous wheat, linked to build-up of antagonistic microbes</li>
<li><strong>Rhizosphere recruitment:</strong> the selection by roots of particular microbes from the surrounding soil through exudates and signals</li>
<li><strong>Functional redundancy:</strong> the presence of several taxa able to perform the same ecological function</li>
<li><strong>Legacy period:</strong> the duration over which a previous crop measurably affects soil communities or the next crop</li>
</ul>

<h3>Microbiome Responses to Rotation</h3>
<p>Each crop recruits a characteristic rhizosphere community, and residues differ in chemistry. Diverse rotations therefore expose soil to varied inputs over time. Many studies report shifts in community composition and, in some cases, higher microbial biomass or diversity under diverse rotations, though diversity responses are not universal. A key debate is whether greater diversity itself causes benefits or whether specific functional groups, such as pathogen antagonists or nutrient-cycling organisms, matter more.</p>

<h3>Disease Dynamics: A Paradox</h3>
<p>Rotation is the classic tool for reducing soilborne disease, yet take-all decline shows that monoculture can sometimes create suppression, as antagonistic bacteria accumulate on infected roots. This illustrates that disease outcomes depend on the pathogen's survival biology, the host sequence and community responses. Specific suppression can be lost when rotation interrupts the host, while general suppression may be enhanced by diverse inputs. Reconciling these patterns requires pathosystem-specific study.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it remains open</th></tr></thead>
<tbody>
<tr><td>Does microbial diversity drive the rotation effect?</td><td>Correlations are common; causal tests are scarce</td></tr>
<tr><td>How long do crop legacies last?</td><td>Varies with crop, soil and measurement method</td></tr>
<tr><td>Can rotation outcomes be predicted in new climates?</td><td>Mechanisms interact with weather in nonlinear ways</td></tr>
<tr><td>Productivity trends under climate change</td><td>Diverse rotations may buffer stress, but long datasets are few</td></tr>
</tbody>
</table>

<h3>Methods</h3>
<p>Research combines long-term trials with sequencing, functional assays, stable-isotope probing, and feedback experiments in which soil conditioned by one crop is used to grow another. Network analysis identifies co-occurring taxa, though co-occurrence does not demonstrate interaction. Data from multiple trials can be pooled in meta-analyses, but differing protocols complicate comparison.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Causal experiments linking rotation-driven microbial changes to yield and disease outcomes.</li>
<li>Integrating pest and microbial processes into crop simulation models.</li>
<li>Standardized protocols for measuring legacy effects across trial networks.</li>
<li>Rotation design for climate resilience, including drought and heat buffering.</li>
<li>Managing the trade-off between specific suppression under monoculture and broad benefits of diversity.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rrtq1',
      question: {
        ELEMENTARY: 'Why do farmers rotate crops?',
        MIDDLE_SCHOOL: 'What happens when you grow the same crop in the same field every year?',
        HIGH_SCHOOL: 'Why follow a heavy feeder like corn with legumes?',
        UNDERGRADUATE: 'What is the rotation effect?',
        GRADUATE: 'What is a legacy effect in rotations?',
        PHD: 'What is plant-soil feedback?',
      },
      options: {
        ELEMENTARY: ['To confuse pests and keep soil healthy', 'Just for fun', 'To make fields look different', 'There is no reason'],
        MIDDLE_SCHOOL: ['Pests and diseases can build up', 'The soil always gets better', 'Yields always increase', 'Nothing changes'],
        HIGH_SCHOOL: ['Legumes help restore nitrogen used by heavy feeders', 'Legumes use even more nitrogen', 'Legumes are always easier to sell', 'Legumes kill all weeds'],
        UNDERGRADUATE: ['A yield increase in rotation not explained by fertilizer alone', 'A yield that stays exactly the same', 'A yield that always decreases', 'The cost of changing crops'],
        GRADUATE: ['An influence of a previous crop that persists after it was grown', 'An effect that lasts only one day', 'A rule that crops cannot change', 'A market price trend'],
        PHD: ['A plant changing soil biota and chemistry in ways that affect later plants', 'Feeding plants with liquid fertilizer', 'Farmers giving feedback about seeds', 'Soil returning to its original state instantly'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Changing crops leaves pests hungry and confused and helps keep the soil healthy.',
        MIDDLE_SCHOOL: 'Pests and diseases that attack one crop find food every year and multiply.',
        HIGH_SCHOOL: 'Legumes host bacteria that fix nitrogen, helping replace what heavy feeders used.',
        UNDERGRADUATE: 'Rotated crops often out-yield continuous crops even when both get ample fertilizer.',
        GRADUATE: 'Legacy effects carry a crop\'s influence on soil, pests or yield into later years.',
        PHD: 'Plant-soil feedback describes how plants condition soil for the plants that follow.',
      },
    },
    {
      id: 'rrtq2',
      question: {
        ELEMENTARY: 'Which plant helps put nitrogen into the soil?',
        MIDDLE_SCHOOL: 'Where do the helpful nitrogen-fixing bacteria live on legumes?',
        HIGH_SCHOOL: 'How does rotating corn to soybeans help control corn rootworm?',
        UNDERGRADUATE: 'Why must a rotation sometimes be several years long?',
        GRADUATE: 'What do process-based crop models often represent poorly?',
        PHD: 'What is take-all decline?',
      },
      options: {
        ELEMENTARY: ['Corn', 'Beans', 'Pumpkins', 'Sunflowers'],
        MIDDLE_SCHOOL: ['In the leaves', 'In nodules on the roots', 'In the flowers', 'In the seeds only'],
        HIGH_SCHOOL: ['Soybeans poison the beetles', 'Larvae hatch where there is no corn to eat', 'Soybeans attract birds', 'It makes corn grow faster'],
        UNDERGRADUATE: ['Because crops need rest', 'Some pathogens survive for years without a host', 'Because markets require it', 'Because rain changes each year'],
        GRADUATE: ['Soil water', 'Pests, diseases and soil biology', 'Weather data', 'Nitrogen carryover'],
        PHD: ['A drop in wheat prices', 'Reduced take-all disease after several years of continuous wheat linked to antagonistic microbes', 'Loss of soil from erosion', 'A decline in rotation use'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Beans are legumes, and tiny helpers on their roots put nitrogen into the soil.',
        MIDDLE_SCHOOL: 'Rhizobia bacteria live in root nodules and turn nitrogen gas into plant food.',
        HIGH_SCHOOL: 'Where beetles lay eggs in corn, larvae that hatch in a soybean field find no corn roots and die.',
        UNDERGRADUATE: 'Some soilborne pathogens persist for many years, so the host must stay away long enough for them to decline.',
        GRADUATE: 'Most crop models track water and nutrients well but omit pests and soil biology, understating rotation benefits.',
        PHD: 'In take-all decline, antagonistic bacteria build up under continuous wheat and suppress the disease.',
      },
    },
    {
      id: 'rrtq3',
      question: {
        ELEMENTARY: 'What is a pest?',
        MIDDLE_SCHOOL: 'What is a monoculture?',
        HIGH_SCHOOL: 'Why do farmers avoid planting crops from the same family back to back?',
        UNDERGRADUATE: 'What is a break crop?',
        GRADUATE: 'What is path dependence in rotation choice?',
        PHD: 'Why is co-occurrence in microbial network analysis not enough to show interaction?',
      },
      options: {
        ELEMENTARY: ['A kind of seed', 'A type of tractor', 'A bug or animal that harms our plants', 'A farmer\'s helper'],
        MIDDLE_SCHOOL: ['Many crops grown together', 'A type of legume', 'Growing the same single crop year after year', 'A cover crop mix'],
        HIGH_SCHOOL: ['Their seeds are too expensive', 'They need different tools', 'Related crops often share pests and diseases', 'They grow at the same height'],
        UNDERGRADUATE: ['A crop harvested during a break', 'A crop that breaks equipment', 'A crop from a different family that interrupts pests of the main crop', 'A crop grown only for fun'],
        GRADUATE: ['Planting crops in straight paths', 'A road through the farm', 'Past investments, markets and policies locking farms into existing practices', 'The order of harvest'],
        PHD: ['Because microbes never interact', 'Because sequencing is too slow', 'Because taxa can co-occur due to shared conditions rather than direct interaction', 'Because networks only show fungi'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Pests are bugs or animals that eat or harm the plants we grow.',
        MIDDLE_SCHOOL: 'Monoculture means one crop grown again and again in the same field.',
        HIGH_SCHOOL: 'Crops in the same family often share pests, so planting them in a row lets pests build up.',
        UNDERGRADUATE: 'A break crop from another family interrupts the pests, diseases and weeds of the main crop.',
        GRADUATE: 'Existing infrastructure, programs and equipment can make diversification hard even when it has public benefits.',
        PHD: 'Two taxa can appear together because they like the same conditions, not because they affect each other.',
      },
    },
    {
      id: 'rrtq4',
      question: {
        ELEMENTARY: 'In a simple rotation, what might come after corn?',
        MIDDLE_SCHOOL: 'Why did farmers long ago add clover to their rotations?',
        HIGH_SCHOOL: 'How do rotations help control weeds?',
        UNDERGRADUATE: 'What can make a diverse rotation hard for a farm to adopt?',
        GRADUATE: 'What have long-term trials shown about diverse rotations?',
        PHD: 'Why do rotations sometimes weaken specific disease suppression?',
      },
      options: {
        ELEMENTARY: ['More corn forever', 'Nothing at all', 'Only weeds', 'Beans to feed the soil'],
        MIDDLE_SCHOOL: ['To make the fields purple', 'To scare away birds', 'To grow fruit', 'To feed the soil with nitrogen'],
        HIGH_SCHOOL: ['By using more of the same herbicide', 'By planting at the same time every year', 'By leaving fields bare', 'By changing when soil is disturbed and shaded'],
        UNDERGRADUATE: ['Too many markets for the added crops', 'Too little sunlight', 'Rotations never work', 'No local buyers for the added crops'],
        GRADUATE: ['Benefits appear in the first month', 'They always reduce yields', 'They have no effect on soil', 'They tend to raise organic matter and improve yield stability over years'],
        PHD: ['Rotation adds more of the pathogen', 'Suppression never exists', 'Diversity always kills antagonists', 'Interrupting the host can stop build-up of specific antagonists'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Beans follow corn to feed the soil with nitrogen.',
        MIDDLE_SCHOOL: 'Clover is a legume that adds nitrogen, so fields no longer had to sit empty.',
        HIGH_SCHOOL: 'Mixing spring, fall and perennial crops changes the timing of disturbance and shading so no weed is always favored.',
        UNDERGRADUATE: 'Without buyers for small grains or forage, adding those crops may not pay.',
        GRADUATE: 'Long-term trials show slow gains in organic matter, pest control and yield stability.',
        PHD: 'Specific antagonists may build up on a continuous host, so interrupting the host can lose that suppression.',
      },
    },
    {
      id: 'rrtq5',
      question: {
        ELEMENTARY: 'What should you do with garden plants next year to rotate them?',
        MIDDLE_SCHOOL: 'Which crop is a deep-rooted forage that adds nitrogen?',
        HIGH_SCHOOL: 'Why is keeping a written field history important?',
        UNDERGRADUATE: 'What does a nitrogen credit mean?',
        GRADUATE: 'Why use multi-criteria evaluation for rotations?',
        PHD: 'What is functional redundancy?',
      },
      options: {
        ELEMENTARY: ['Move each plant to a new spot', 'Plant them all in the same spot', 'Throw them away', 'Paint the garden'],
        MIDDLE_SCHOOL: ['Alfalfa', 'Corn', 'Lettuce', 'Potatoes'],
        HIGH_SCHOOL: ['So the plan can be followed and improved', 'To make the farm look tidy', 'Because it is required for all crops', 'It is not important'],
        UNDERGRADUATE: ['Less fertilizer nitrogen needed after a legume', 'A bank loan for buying fertilizer', 'Extra nitrogen bought on credit', 'A tax on nitrogen'],
        GRADUATE: ['To compare profit, emissions, soil health and risk together', 'To focus only on profit', 'To ignore environmental outcomes', 'To pick the crop with the tallest plants'],
        PHD: ['Several taxa able to perform the same ecological function', 'A function that has no use', 'Microbes that do nothing', 'Repeating the same experiment twice'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Moving plants to new spots each year is a garden rotation.',
        MIDDLE_SCHOOL: 'Alfalfa is a deep-rooted legume forage that builds soil and adds nitrogen.',
        HIGH_SCHOOL: 'Records show what grew where, so the sequence can be kept and adjusted.',
        UNDERGRADUATE: 'A nitrogen credit reduces the fertilizer needed by a crop that follows a legume.',
        GRADUATE: 'Multi-criteria evaluation makes trade-offs between several outcomes explicit.',
        PHD: 'When several taxa can do the same job, losing one may not change ecosystem function.',
      },
    },
  ],
}

export default expansion
