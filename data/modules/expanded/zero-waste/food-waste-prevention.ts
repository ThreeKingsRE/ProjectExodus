import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'food-waste-prevention',
  lessons: [
    {
      id: 'zw-food-1',
      title: 'Saving Our Food',
      content: {
        ELEMENTARY: `
<h2>Food Is Too Good to Waste</h2>
<p>Every apple, carrot and slice of bread took a lot of work to reach your plate. A farmer grew it, a truck carried it, and a store kept it fresh. When food ends up in the trash, all that work and water and sunshine is wasted too. The good news is that you can be a Food Rescue Hero!</p>

<h3>Why Wasting Food Matters</h3>
<p>Growing food needs land, water and energy. When we throw food away, we throw those away too. Food that ends up buried in a landfill rots without air and makes a gas that warms the planet. Saving food helps farmers, families and the Earth all at once.</p>
<ul>
<li><strong>Food waste:</strong> good food that gets thrown away instead of eaten</li>
<li><strong>Leftovers:</strong> food from one meal that is saved and eaten later</li>
<li><strong>Meal plan:</strong> a list of what your family will eat this week so you buy just enough</li>
<li><strong>Best before date:</strong> a date that tells you when food tastes best, not always when it goes bad</li>
<li><strong>Food bank:</strong> a place that collects extra food and shares it with people who need it</li>
</ul>

<h3>Hero Moves at Home</h3>
<ol>
<li>Take a small serving first. You can always go back for more!</li>
<li>Help make a shopping list so your family buys only what you need.</li>
<li>Put older food at the front of the fridge so it gets eaten first.</li>
<li>Turn leftovers into something new, like veggie soup or banana pancakes.</li>
<li>Use your senses: look and smell before deciding food is bad, and ask a grown-up.</li>
</ol>

<h3>Hero Moves at School</h3>
<p>Some schools have a share table where kids can leave unopened snacks or whole fruit they do not want, so someone else can enjoy them. Peels and cores that cannot be eaten can go into compost to feed the soil.</p>

<h3>Think About It</h3>
<p>Benny the Banana has a few brown spots. Is he ready for the trash? No way! Brown spots mean he is extra sweet, perfect for smoothies or banana bread. What food in your kitchen could you rescue today?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Preventing Food Waste at Home, School and Beyond</h2>
<p>A widely cited estimate from the United Nations is that roughly one-third of the food produced in the world is lost or wasted. That food used farmland, water, fuel and labor, and when it rots in landfills it releases methane. Preventing food waste is one of the most powerful everyday climate actions, because it saves all the resources that went into growing the food in the first place.</p>

<h3>Where Does Food Get Wasted?</h3>
<p>Food can be lost at every step of its journey. On farms, some crops are left unharvested or rejected for looking odd. During storage and transport, food can spoil without good cooling. Stores may throw out food that is near its date. At home and in restaurants, people buy or cook too much and throw away the extra. In many wealthy countries, homes are one of the biggest sources of food waste.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Food loss:</strong> food that spoils or is thrown out on farms, in storage or during transport before reaching shops</li>
<li><strong>Food waste:</strong> food thrown away by shops, restaurants and households even though it was fit to eat</li>
<li><strong>Use by date:</strong> a safety date on perishable foods that should not be eaten after it passes</li>
<li><strong>Best before date:</strong> a quality date; food is often still safe after it, though it may be less fresh</li>
<li><strong>Food recovery:</strong> collecting surplus edible food and getting it to people who can eat it</li>
<li><strong>Imperfect produce:</strong> fruits and vegetables that look unusual but are perfectly good to eat</li>
</ul>

<h3>Prevention Strategies</h3>
<table>
<thead><tr><th>Place</th><th>Strategy</th><th>Why it works</th></tr></thead>
<tbody>
<tr><td>Home</td><td>Plan meals and shop with a list</td><td>You buy only what you will use</td></tr>
<tr><td>Home</td><td>Store food correctly and freeze extras</td><td>Food stays fresh longer</td></tr>
<tr><td>School</td><td>Share tables and letting students choose portions</td><td>Unwanted food finds a new eater</td></tr>
<tr><td>School</td><td>Recess before lunch</td><td>Students arrive hungrier and less rushed</td></tr>
<tr><td>Community</td><td>Food banks and food rescue groups</td><td>Surplus reaches people who need it</td></tr>
</tbody>
</table>

<h3>Prevent First, Compost Last</h3>
<p>Composting is great for scraps like peels and coffee grounds, but it is better not to waste edible food in the first place. Think of it as a ladder: first prevent waste, then share extra food with people, then feed animals if safe, and only then compost. You can help by tracking what your family throws away for a week. The results often surprise people and show where to start.</p>
`,
        HIGH_SCHOOL: `
<h2>Food Waste: Causes, Prevention and the Recovery Hierarchy</h2>
<p>Food waste is a problem that hides in plain sight. It happens in fields, warehouses, supermarkets, cafeterias and fridges, and each stage has different causes. Because food production uses so much land, water and energy and generates significant greenhouse gas emissions, wasted food multiplies its environmental cost. Reducing food waste is commonly listed among the most effective climate solutions available.</p>

<h3>Root Causes Along the Chain</h3>
<ul>
<li><strong>Cosmetic standards:</strong> retailer rules on size, shape and color that cause edible produce to be rejected</li>
<li><strong>Cold chain:</strong> the network of refrigerated storage and transport that keeps perishable food fresh</li>
<li><strong>Overproduction:</strong> growing or preparing more food than will be sold or eaten, often to avoid running out</li>
<li><strong>Date label confusion:</strong> misunderstanding best before and use by labels, leading people to discard safe food</li>
<li><strong>Portion distortion:</strong> serving sizes larger than people want to eat, leaving plate waste</li>
<li><strong>Source reduction:</strong> preventing surplus food from being created in the first place</li>
</ul>
<p>In lower-income countries, losses tend to concentrate early in the chain, where storage and refrigeration are limited. In higher-income countries, more waste tends to happen at retail and in homes, where food is relatively cheap and abundant.</p>

<h3>The Food Recovery Hierarchy</h3>
<p>Environmental agencies use a hierarchy to rank options for dealing with surplus food, from most to least preferred:</p>
<ol>
<li><strong>Source reduction:</strong> do not create the surplus.</li>
<li><strong>Feed hungry people:</strong> donate edible food to food banks and shelters.</li>
<li><strong>Feed animals:</strong> where safe and legal, send suitable scraps to livestock.</li>
<li><strong>Industrial uses:</strong> turn fats and oils into fuels, or digest scraps for biogas.</li>
<li><strong>Composting:</strong> return nutrients to the soil.</li>
<li><strong>Landfill or incineration:</strong> the last resort.</li>
</ol>

<h3>Comparing Interventions</h3>
<table>
<thead><tr><th>Intervention</th><th>Stage targeted</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Selling imperfect produce</td><td>Farm and retail</td><td>Needs consumer acceptance and lower prices</td></tr>
<tr><td>Standardized date labels</td><td>Retail and home</td><td>Requires industry and government coordination</td></tr>
<tr><td>Smaller plates or trayless dining</td><td>Food service</td><td>Some diners may take more trips</td></tr>
<tr><td>Donation programs</td><td>Retail and food service</td><td>Need transport, cold storage and liability protections</td></tr>
<tr><td>Better storage and cooling</td><td>Post-harvest</td><td>Up-front cost and energy use</td></tr>
</tbody>
</table>

<h3>Real-World Solutions</h3>
<p>Apps now connect restaurants and shops with customers who can buy surplus meals at a discount. Some countries have encouraged or required supermarkets to donate unsold edible food. Schools have cut plate waste by letting students serve themselves and by scheduling recess before lunch. At home, simple habits like a weekly fridge check and a designated "eat first" shelf can make a real difference.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Food Loss and Waste Across Supply Chains</h2>
<p>Food loss and waste (often abbreviated FLW) is a systems problem with economic, environmental and social dimensions. Interventions are effective only if they target the right stage, are measured correctly, and account for how actors along the chain respond. This lesson develops the analytical tools to quantify FLW, compare hotspots, and evaluate interventions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Food loss:</strong> a decrease in quantity or quality of food from harvest up to, but not including, retail</li>
<li><strong>Food waste:</strong> food discarded at retail, food service and household levels</li>
<li><strong>Inedible parts:</strong> components such as bones, shells and peels that are not usually eaten, often reported separately from edible waste</li>
<li><strong>Embodied impacts:</strong> the land, water, energy and emissions accumulated in food up to the point it is wasted</li>
<li><strong>Waste audit:</strong> a structured measurement of discarded food by weight, type and cause in a given setting</li>
<li><strong>Sustainable Development Goal target 12.3:</strong> the international goal of halving per capita food waste at retail and consumer levels and reducing losses along supply chains</li>
</ul>

<h3>Why Stage Matters</h3>
<p>Embodied impacts accumulate as food moves along the chain. A tomato wasted in a household carries the impacts of growing, packing, transport, refrigeration, retail and often cooking, while one lost in the field carries only production impacts. As a result, a kilogram wasted late in the chain generally has a higher footprint than a kilogram lost early. Food type matters even more: animal products, especially beef and dairy, typically carry far higher emissions and land use per kilogram than grains or vegetables, so preventing their waste delivers outsized benefits.</p>

<h3>Measurement Methods</h3>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Direct weighing</td><td>Accurate and specific</td><td>Labor intensive; hard to scale</td></tr>
<tr><td>Waste compositional analysis</td><td>Shows what is in discarded bins</td><td>Misses food sent to sewers, pets or home compost</td></tr>
<tr><td>Kitchen diaries</td><td>Captures reasons and behaviors</td><td>People tend to under-report</td></tr>
<tr><td>Surveys</td><td>Cheap and broad</td><td>Strong self-reporting bias</td></tr>
<tr><td>Mass balance modeling</td><td>Covers whole supply chains</td><td>Depends on assumed loss factors</td></tr>
</tbody>
</table>
<p>Because survey methods consistently show lower waste than direct measurement, comparing figures from different studies requires checking methods and definitions, including whether inedible parts are counted.</p>

<h3>Intervention Strategies</h3>
<p>Interventions fall into several families: technology (cold storage, packaging that extends shelf life, demand forecasting), market changes (selling imperfect produce, dynamic pricing near expiry), information (date label reform, consumer campaigns), and redistribution (donation logistics). Each carries trade-offs. For example, packaging can extend shelf life and prevent waste but adds its own material footprint; the net benefit depends on the food and the packaging.</p>

<h3>Applied Method: Running a Food Waste Audit</h3>
<ol>
<li>Define the boundary: kitchen preparation, plate waste, unsold stock or all three.</li>
<li>Separate edible from inedible fractions and record food type.</li>
<li>Weigh waste over a representative period, noting the cause of each discard.</li>
<li>Estimate embodied impacts using food-specific factors.</li>
<li>Rank causes by weight and impact, then pilot targeted fixes and re-measure.</li>
</ol>
`,
        GRADUATE: `
<h2>Behavioral Economics, Policy Instruments and Systemic Food Waste Solutions</h2>
<p>Food waste persists not because people value it but because wasting food is often individually rational, invisible and cheap. Households face uncertainty about schedules and appetite; retailers face penalties for empty shelves but small costs for overstock; farmers face contracts that reject off-spec produce. Effective policy works with these incentives rather than against them. This lesson examines behavioral approaches, regulatory instruments and systemic strategies.</p>

<h3>Behavioral Foundations</h3>
<ul>
<li><strong>Nudge:</strong> a change to how choices are presented that makes a desired behavior easier without restricting options</li>
<li><strong>Choice architecture:</strong> the design of the environment in which decisions are made, such as plate size or shelf layout</li>
<li><strong>Present bias:</strong> the tendency to overweight immediate preferences, such as buying ambitious amounts of fresh food</li>
<li><strong>Salience:</strong> how noticeable a cost or consequence is, which strongly affects whether people act on it</li>
<li><strong>Voluntary agreement:</strong> a negotiated commitment by businesses, often with government, to meet waste reduction targets</li>
<li><strong>Liability protection:</strong> legal provisions that shield good-faith food donors from lawsuits</li>
</ul>
<p>Studies of food service settings have found that smaller plates, removing trays and changing default portion sizes can reduce plate waste. Effects vary by context, and nudges tend to work best when paired with structural changes rather than used alone.</p>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>Donation mandates for retailers</td><td>Require surplus edible food to be donated</td><td>Needs recipient capacity and logistics</td></tr>
<tr><td>Organics disposal bans</td><td>Make landfilling food more costly or illegal</td><td>Can push toward compost rather than prevention</td></tr>
<tr><td>Tax incentives for donation</td><td>Lower the net cost of giving food</td><td>May favor large firms; cost to public budgets</td></tr>
<tr><td>Date label standardization</td><td>Reduce confusion between safety and quality dates</td><td>Requires cross-sector agreement</td></tr>
<tr><td>Mandatory measurement and reporting</td><td>Makes waste visible to managers and the public</td><td>Reporting burden; risk of gaming</td></tr>
<tr><td>Unfair trading practice rules</td><td>Limit last-minute order cancellations that push waste onto suppliers</td><td>Complex to enforce</td></tr>
</tbody>
</table>

<h3>The Problem of Shifting Waste</h3>
<p>Retailers can appear to reduce waste by pushing it upstream, for example by rejecting deliveries or imposing strict specifications that leave produce unharvested. Whole-chain measurement and supply contract reform help ensure that reported improvements are real rather than relocated.</p>

<h3>Systemic Approaches</h3>
<p>Systemic strategies coordinate actors around shared targets. Voluntary agreements bring retailers, manufacturers and hospitality firms together to measure and act, while a "target, measure, act" approach structures progress. Public procurement can require waste tracking in school and hospital catering. Redistribution, while valuable, should not be framed as a solution to food insecurity, which stems from poverty; relying on surplus can entrench charity in place of social policy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Establish a measured baseline using consistent definitions across the chain.</li>
<li>Check for displacement of waste between stages or actors.</li>
<li>Separate prevention outcomes from redistribution and recycling outcomes.</li>
<li>Estimate environmental benefits using food-type-specific impact factors.</li>
<li>Assess distributional effects on farmers, low-income consumers and food assistance systems.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Food Waste Quantification and Governance</h2>
<p>Food waste research has expanded rapidly, yet basic questions remain unsettled: how much is wasted, where, why, and which interventions produce durable change. Doctoral work in this field engages measurement science, multi-level governance, and theories of transformation that go beyond incremental efficiency. This lesson surveys methods, contested questions and promising research directions.</p>

<h3>Quantification Challenges</h3>
<ul>
<li><strong>Definitional boundary:</strong> the choice of what counts as food waste, including whether inedible parts or redirected animal feed are included</li>
<li><strong>Loss factor:</strong> an assumed percentage of food lost at a given stage, used in models when direct data are lacking</li>
<li><strong>Measurement bias:</strong> systematic error such as under-reporting in diaries and surveys compared with direct weighing</li>
<li><strong>Multi-level governance:</strong> coordination of policy across international, national, regional and local authorities and private actors</li>
<li><strong>Transformative intervention:</strong> a change that reshapes underlying system structures rather than improving efficiency within them</li>
<li><strong>Rebound effect:</strong> savings from reduced waste being spent on additional consumption that offsets part of the environmental gain</li>
</ul>
<p>Global estimates rely heavily on loss factors and extrapolation from limited studies, so uncertainty ranges are wide. International indices for food loss and for food waste use different methodologies, making it hard to compare stages directly. Researchers increasingly argue for harmonized direct measurement and transparent uncertainty reporting.</p>

<h3>Multi-Level Governance</h3>
<p>Food waste governance spans global targets, national strategies, municipal collection systems and private supply chain standards. Coordination is difficult because responsibility is diffuse: no single actor controls the outcome, and actors at one stage can externalize waste onto others. Governance research examines how voluntary agreements, regulation and civil society interact, and whether private standards can be aligned with public goals.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Should surplus redistribution count as prevention?</td><td>It feeds people but may entrench overproduction and charity-based food systems</td></tr>
<tr><td>How large are rebound effects?</td><td>Estimates depend on spending patterns and what money saved is used for</td></tr>
<tr><td>Is household behavior or system design the main driver?</td><td>Behavioral and practice-based explanations imply different interventions</td></tr>
<tr><td>Does packaging prevent more impact than it adds?</td><td>Net results vary by product, packaging type and use context</td></tr>
</tbody>
</table>

<h3>Theories of Transformation</h3>
<p>Incremental approaches improve efficiency within the current food system. Transformative perspectives ask whether abundance-oriented retail, low food prices that do not reflect environmental costs, and long supply chains structurally produce surplus. Practice theory studies household waste as an outcome of shopping, provisioning, cooking and caring routines shaped by work schedules and norms of hospitality. Sustainability transitions research examines how niche innovations, such as surplus food platforms, interact with incumbent regimes.</p>

<h3>Methodological Directions</h3>
<p>Promising methods include randomized and quasi-experimental field trials of interventions, smart bin and sensor data in food service, hybrid life cycle and input-output models linking waste to embodied impacts, and mixed methods designs combining measurement with ethnography. Each faces challenges in external validity, data access and the persistence of effects over time.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Harmonized, direct measurement protocols with transparent uncertainty for national reporting.</li>
<li>Long-term studies of whether intervention effects persist after initial novelty fades.</li>
<li>Whole-chain analysis that detects displacement of waste between actors.</li>
<li>Integration of rebound effects into environmental assessments of waste prevention.</li>
<li>Governance research on aligning private supply chain standards with public food waste targets.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwfoodq1',
      question: {
        ELEMENTARY: 'How can we save food?',
        MIDDLE_SCHOOL: 'About how much of the world\'s food is lost or wasted, according to a widely cited estimate?',
        HIGH_SCHOOL: 'What is the top priority in the food recovery hierarchy?',
        UNDERGRADUATE: 'Where along the supply chain do food loss and waste occur?',
        GRADUATE: 'What is a nudge?',
        PHD: 'What is multi-level governance in food waste policy?',
      },
      options: {
        ELEMENTARY: ['Eat leftovers and plan meals', 'Throw away food with brown spots', 'Buy lots of extra food', 'Take a huge serving every time'],
        MIDDLE_SCHOOL: ['Roughly one-third', 'Almost none', 'All of it', 'Only spoiled food'],
        HIGH_SCHOOL: ['Source reduction, preventing surplus in the first place', 'Composting', 'Landfilling', 'Incineration'],
        UNDERGRADUATE: ['At every stage, from harvest to households', 'Only in homes', 'Only in supermarkets', 'Only on farms'],
        GRADUATE: ['A change in how choices are presented that makes a behavior easier without restricting options', 'A legal ban with fines', 'A tax on all food', 'A rule forcing people to eat everything'],
        PHD: ['Coordination of policy across international, national, local and private actors', 'Rules made at only one level', 'The absence of any governance', 'Purely top-down control by one ministry'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Planning meals and eating leftovers means less good food ends up in the trash.',
        MIDDLE_SCHOOL: 'A widely cited UN estimate is that roughly one-third of food produced is lost or wasted.',
        HIGH_SCHOOL: 'The hierarchy puts prevention first, then feeding people, with landfill as the last resort.',
        UNDERGRADUATE: 'Losses happen in fields, storage and transport, and waste happens in retail, food service and homes.',
        GRADUATE: 'Nudges reshape choice architecture, such as plate size, to make less waste the easy option.',
        PHD: 'Food waste spans many levels and actors, so policy must coordinate across scales.',
      },
    },
    {
      id: 'zwfoodq2',
      question: {
        ELEMENTARY: 'What does a best before date tell you?',
        MIDDLE_SCHOOL: 'What is the difference between food loss and food waste?',
        HIGH_SCHOOL: 'In higher-income countries, where does more food waste tend to happen?',
        UNDERGRADUATE: 'Why does a kilogram of food wasted at home generally have a bigger footprint than one lost in the field?',
        GRADUATE: 'Why can donation mandates fall short on their own?',
        PHD: 'Why are global food waste estimates uncertain?',
      },
      options: {
        ELEMENTARY: ['The day the food was grown', 'When food tastes best, not always when it goes bad', 'The price of the food', 'The name of the farmer'],
        MIDDLE_SCHOOL: ['They mean the same thing', 'Loss happens before shops; waste happens in shops, restaurants and homes', 'Loss only happens in homes', 'Waste only happens on farms'],
        HIGH_SCHOOL: ['Only in fields', 'At retail and in homes', 'Only during shipping by sea', 'Nowhere at all'],
        UNDERGRADUATE: ['Home food is always heavier', 'It has accumulated impacts from processing, transport, storage and cooking', 'Fields have no environmental impact', 'Household waste is never measured'],
        GRADUATE: ['They need recipient capacity, transport and cold storage to work', 'They make all food free', 'They ban composting', 'They require nothing from retailers'],
        PHD: ['Every country weighs all its food waste perfectly', 'They rely heavily on assumed loss factors and limited direct data', 'Food waste does not exist', 'All studies use identical definitions'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Best before is about taste and quality. Food is often still fine after it, so look, smell and ask a grown-up.',
        MIDDLE_SCHOOL: 'Food loss happens on farms and in transport; food waste happens later, in shops, restaurants and homes.',
        HIGH_SCHOOL: 'Where food is cheap and abundant, more waste tends to occur at retail and household stages.',
        UNDERGRADUATE: 'Embodied impacts accumulate along the chain, so later waste usually carries more.',
        GRADUATE: 'Without logistics and capable recipients, mandated donations may not reach people.',
        PHD: 'Extrapolation from loss factors and limited studies produces wide uncertainty ranges.',
      },
    },
    {
      id: 'zwfoodq3',
      question: {
        ELEMENTARY: 'What can you do with a banana that has brown spots?',
        MIDDLE_SCHOOL: 'What is a share table at school?',
        HIGH_SCHOOL: 'What are cosmetic standards?',
        UNDERGRADUATE: 'What is a known weakness of using surveys to measure household food waste?',
        GRADUATE: 'What does it mean for a retailer to "shift" waste upstream?',
        PHD: 'Why is counting surplus redistribution as prevention contested?',
      },
      options: {
        ELEMENTARY: ['Throw it away right away', 'Hide it under the bed', 'Use it in a smoothie or banana bread', 'Give it to the trash truck'],
        MIDDLE_SCHOOL: ['A table for selling snacks', 'A table for homework', 'A place where kids leave unopened food for others to take', 'A place to throw away trash'],
        HIGH_SCHOOL: ['Rules about how clean kitchens must be', 'Rules about packaging colors', 'Retailer rules on produce size, shape and color that cause edible food to be rejected', 'Rules about food safety temperatures'],
        UNDERGRADUATE: ['They are too expensive', 'They measure waste too precisely', 'People tend to under-report how much they waste', 'They only count inedible parts'],
        GRADUATE: ['Selling more food to customers', 'Building bigger stores', 'Pushing waste onto suppliers through rejected deliveries or strict specifications', 'Donating all surplus'],
        PHD: ['Redistribution never feeds anyone', 'Redistribution is always illegal', 'It feeds people but may entrench overproduction and charity-based food systems', 'It has no environmental effect'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Brown spots mean the banana is extra sweet, great for smoothies and baking!',
        MIDDLE_SCHOOL: 'Share tables let unwanted but good food find someone who will eat it.',
        HIGH_SCHOOL: 'Cosmetic standards reject odd-looking but edible produce, causing waste early in the chain.',
        UNDERGRADUATE: 'Self-reported surveys consistently show less waste than direct weighing.',
        GRADUATE: 'Waste can be moved to suppliers, making retail figures look better without real reduction.',
        PHD: 'Redistribution helps but may treat symptoms rather than the causes of surplus and food insecurity.',
      },
    },
    {
      id: 'zwfoodq4',
      question: {
        ELEMENTARY: 'Where should older food go in the fridge?',
        MIDDLE_SCHOOL: 'Which school change can reduce lunch waste?',
        HIGH_SCHOOL: 'What is the cold chain?',
        UNDERGRADUATE: 'Why does preventing waste of animal products often deliver bigger benefits?',
        GRADUATE: 'What is liability protection for food donors?',
        PHD: 'What is a rebound effect in food waste prevention?',
      },
      options: {
        ELEMENTARY: ['At the very back', 'In the freezer forever', 'In the trash', 'At the front so it gets eaten first'],
        MIDDLE_SCHOOL: ['Shorter lunch periods', 'Bigger portions for everyone', 'Removing water fountains', 'Having recess before lunch'],
        HIGH_SCHOOL: ['A chain used to lock freezers', 'A type of frozen dessert', 'A set of winter farming rules', 'Refrigerated storage and transport that keeps perishable food fresh'],
        UNDERGRADUATE: ['Animal products are lighter', 'They are never wasted', 'They are always cheaper', 'They typically carry far higher emissions and land use per kilogram'],
        GRADUATE: ['A rule making donors pay fines', 'Insurance for food banks only', 'A tax on donated food', 'Legal provisions shielding good-faith donors from lawsuits'],
        PHD: ['Waste increasing after a policy ends', 'Food bouncing out of bins', 'Recycling more packaging', 'Money saved from wasting less being spent on other consumption that offsets gains'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Putting older food at the front reminds everyone to eat it before it spoils.',
        MIDDLE_SCHOOL: 'Students who play first arrive hungrier and less rushed, so they eat more of their lunch.',
        HIGH_SCHOOL: 'The cold chain keeps food chilled from farm to store, preventing spoilage.',
        UNDERGRADUATE: 'Beef and dairy usually have much larger footprints than grains or vegetables per kilogram.',
        GRADUATE: 'Protection from lawsuits removes a common reason businesses give for not donating.',
        PHD: 'If saved money funds other high-impact consumption, part of the environmental benefit is lost.',
      },
    },
    {
      id: 'zwfoodq5',
      question: {
        ELEMENTARY: 'What is a food bank?',
        MIDDLE_SCHOOL: 'What is imperfect produce?',
        HIGH_SCHOOL: 'Which option is at the bottom of the food recovery hierarchy?',
        UNDERGRADUATE: 'What is the first step in running a food waste audit?',
        GRADUATE: 'Why should redistribution not be framed as the solution to food insecurity?',
        PHD: 'What is a transformative intervention?',
      },
      options: {
        ELEMENTARY: ['A place that shares extra food with people who need it', 'A bank that stores money for food companies', 'A big trash can', 'A food factory'],
        MIDDLE_SCHOOL: ['Fruits and vegetables that look unusual but are good to eat', 'Spoiled food that is unsafe', 'Plastic toy food', 'Food with no vitamins'],
        HIGH_SCHOOL: ['Landfill or incineration', 'Source reduction', 'Feeding hungry people', 'Composting'],
        UNDERGRADUATE: ['Define the boundary of what will be measured', 'Buy new trash cans', 'Publish the results', 'Stop serving food'],
        GRADUATE: ['Food insecurity stems from poverty, which requires social policy', 'Donated food is always unsafe', 'Food banks waste all donations', 'Food insecurity does not exist'],
        PHD: ['A change that reshapes underlying system structures, not just efficiency', 'A small tweak to bin labels', 'A one-day campaign', 'Ignoring the food system'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Food banks collect extra food and share it with families who need it.',
        MIDDLE_SCHOOL: 'Odd-shaped or marked produce tastes just as good and should not be wasted.',
        HIGH_SCHOOL: 'Landfill and incineration are last resorts after prevention, donation and other uses.',
        UNDERGRADUATE: 'Defining the boundary decides whether you measure preparation, plate or unsold food.',
        GRADUATE: 'Surplus food helps, but hunger is driven by poverty and needs structural responses.',
        PHD: 'Transformative interventions address structures that produce surplus, such as pricing and retail models.',
      },
    },
  ],
}

export default expansion
