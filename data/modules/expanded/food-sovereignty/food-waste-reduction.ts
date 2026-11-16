import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'food-waste-reduction',
  lessons: [
    {
      id: 'fs-waste-1',
      title: 'Stop Food Waste',
      content: {
        ELEMENTARY: `
<h2>Be a Food Waste Warrior!</h2>
<p>Have you ever left half a sandwich on your plate or found a squishy banana at the bottom of your bag? Lots of good food ends up in the trash every day. That is called food waste, and it is a big problem for our planet. The good news is that kids can help fix it!</p>

<h3>Why Is Wasting Food a Problem?</h3>
<p>Every piece of food took a lot of work to make. A farmer planted seeds. Rain and sunshine helped the plants grow. Trucks carried the food to stores. When we throw food away, we also waste all the water, soil, energy and hard work that went into it. Food in the trash can also rot and make a gas that warms the Earth.</p>
<ul>
<li><strong>Food waste:</strong> good food that gets thrown away instead of being eaten</li>
<li><strong>Leftovers:</strong> food that was not finished at a meal and can be eaten later</li>
<li><strong>Compost:</strong> a mix of old food scraps and leaves that turns into rich soil</li>
<li><strong>Landfill:</strong> a giant place where trash is buried in the ground</li>
<li><strong>Scraps:</strong> small bits of food like peels and cores that we do not usually eat</li>
</ul>

<h3>Where Does Food Get Wasted?</h3>
<p>Food can be wasted on farms when fruit looks a little funny. It can be wasted in stores when too much is put out. And a lot is wasted at home, when we forget food in the fridge or take more than we can eat.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Take a small portion first. You can always go back for more!</li>
<li>Eat the food you take, or save leftovers for later.</li>
<li>Help a grown-up make a shopping list so you only buy what you need.</li>
<li>Put the oldest food at the front of the fridge so it gets eaten first.</li>
<li>Turn peels and cores into compost for the garden.</li>
<li>Do not be afraid of "ugly" fruit. A bumpy apple tastes just as good!</li>
</ol>

<h3>Think About It</h3>
<p>If your whole class saved just one apple each week, how many apples would that be by the end of the year? Small actions add up to something big.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Where Food Waste Happens and How to Stop It</h2>
<p>A widely cited estimate says that roughly one-third of all the food produced in the world is lost or wasted somewhere between the farm and the fork. That is a huge amount of food, while many people still do not have enough to eat. To fix this problem, we first need to understand where food goes missing.</p>

<h3>The Journey of Food</h3>
<p>Food can be lost or wasted at every step of the supply chain:</p>
<ol>
<li><strong>Farm:</strong> crops are damaged by pests or weather, or left unharvested because prices are low or they look imperfect.</li>
<li><strong>Storage and transport:</strong> food spoils without cool storage or gets bruised on bumpy roads.</li>
<li><strong>Processing:</strong> trimmings and offcuts are thrown out when food is packed or cooked in factories.</li>
<li><strong>Stores:</strong> food is removed from shelves when it nears its date or looks less than perfect.</li>
<li><strong>Restaurants and cafeterias:</strong> large portions and over-preparation lead to leftovers.</li>
<li><strong>Homes:</strong> people buy too much, forget food or are confused by date labels.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Supply chain:</strong> all the steps food goes through from the farm to your plate</li>
<li><strong>Food loss:</strong> food that is lost early in the chain, on farms or during storage and processing</li>
<li><strong>Food waste:</strong> edible food thrown away by stores, restaurants or households</li>
<li><strong>Methane:</strong> a powerful greenhouse gas released when food rots without air in landfills</li>
<li><strong>Best before date:</strong> a date about when food tastes best, not when it becomes unsafe</li>
<li><strong>Food bank:</strong> an organization that collects extra food and gives it to people who need it</li>
</ul>

<h3>What Do Households Waste Most?</h3>
<table>
<thead><tr><th>Type of food</th><th>Why it gets wasted</th></tr></thead>
<tbody>
<tr><td>Fresh fruit and vegetables</td><td>They spoil quickly and get forgotten</td></tr>
<tr><td>Bread and baked goods</td><td>They go stale or moldy within days</td></tr>
<tr><td>Leftovers</td><td>Cooked too much and not eaten later</td></tr>
<tr><td>Milk and dairy</td><td>Thrown out because of date label confusion</td></tr>
</tbody>
</table>

<h3>Solutions at Every Level</h3>
<p>Farmers can sell "imperfect" produce or let volunteers gather leftover crops, an old practice called gleaning. Stores can donate unsold food to food banks. Schools can serve smaller portions and set up share tables. At home, families can plan meals, store food properly, freeze extras and compost scraps. Preventing waste comes first, sharing extra food comes next, and composting is better than sending food to the landfill.</p>
`,
        HIGH_SCHOOL: `
<h2>Food Waste Across the Supply Chain</h2>
<p>Food waste is one of the clearest examples of inefficiency in the global food system. Producing food uses land, water, fertilizer, energy and labor, so every wasted meal carries a hidden environmental cost. Reducing waste is often described as a "triple win": it saves money, eases hunger and cuts greenhouse gas emissions. Understanding where and why waste happens is the first step to designing solutions that work.</p>

<h3>Loss Versus Waste</h3>
<p>Experts usually separate food <em>loss</em>, which happens before food reaches retail, from food <em>waste</em>, which happens at retail, in food service and in households. The pattern varies by region. In many lower-income countries, more food is lost early because of limited cold storage, roads and processing. In many higher-income countries, a larger share is wasted by stores and consumers.</p>
<ul>
<li><strong>Food loss:</strong> a decrease in edible food between harvest and retail, during handling, storage and processing</li>
<li><strong>Food waste:</strong> edible food discarded at the retail, food service or household level</li>
<li><strong>Cold chain:</strong> refrigerated storage and transport that keeps perishable food fresh</li>
<li><strong>Gleaning:</strong> collecting leftover crops from fields after the main harvest</li>
<li><strong>Food recovery hierarchy:</strong> a ranking of actions from most preferred, preventing waste, to least preferred, landfill</li>
</ul>

<h3>Environmental Impacts</h3>
<p>When food rots in a landfill without oxygen, it produces methane, a greenhouse gas that traps far more heat than carbon dioxide over the short term. Wasted food also represents wasted irrigation water, cleared land and fertilizer runoff. Because of this, food waste is often estimated to account for a meaningful share of global greenhouse gas emissions, and preventing it is considered one of the more effective climate actions available.</p>

<h3>Comparing Solutions</h3>
<table>
<thead><tr><th>Stage</th><th>Main cause of waste</th><th>Example solution</th></tr></thead>
<tbody>
<tr><td>Farm</td><td>Cosmetic standards, low prices, weather</td><td>Selling imperfect produce, gleaning programs</td></tr>
<tr><td>Storage and transport</td><td>Lack of cooling, pests, damage</td><td>Improved storage bags, solar-powered cold rooms</td></tr>
<tr><td>Retail</td><td>Overstocking, date rules, appearance</td><td>Discounting near-date items, donating surplus</td></tr>
<tr><td>Food service</td><td>Large portions, over-preparation</td><td>Smaller plates, tracking waste, flexible menus</td></tr>
<tr><td>Household</td><td>Over-buying, poor storage, label confusion</td><td>Meal planning, freezing, clearer date labels</td></tr>
</tbody>
</table>

<h3>The Food Recovery Hierarchy</h3>
<ol>
<li><strong>Prevent:</strong> produce and buy only what is needed.</li>
<li><strong>Feed people:</strong> donate safe surplus food to food banks and community fridges.</li>
<li><strong>Feed animals:</strong> where safe and legal, use suitable scraps as livestock feed.</li>
<li><strong>Industrial uses:</strong> turn waste into energy through anaerobic digestion.</li>
<li><strong>Compost:</strong> return nutrients to the soil.</li>
<li><strong>Landfill or incineration:</strong> the last resort.</li>
</ol>

<h3>Food Waste and Food Sovereignty</h3>
<p>Waste reduction connects to food justice. Recovering surplus helps people facing hunger, but relying only on donated leftovers does not give communities control over their food. Strong local food systems, shorter supply chains and community preservation skills can reduce waste while also strengthening local control. Traditional practices such as preserving, fermenting and using whole animals and plants show that low-waste eating is not new.</p>
`,
        UNDERGRADUATE: `
<h2>Food Loss and Waste: Measurement, Causes and Interventions</h2>
<p>Food loss and waste (FLW) has become a recognized policy target, most visibly through the Sustainable Development Goal target to halve per capita food waste at retail and consumer levels and reduce food losses along production and supply chains. Achieving reductions requires consistent definitions, credible measurement and interventions matched to the specific drivers at each stage. This lesson develops the analytical tools to do that.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Food loss and waste:</strong> food intended for human consumption that leaves the supply chain without being eaten by people</li>
<li><strong>Edible and inedible parts:</strong> the distinction between food that could be eaten and parts such as bones, shells and pits</li>
<li><strong>Destination:</strong> where removed food ends up, such as animal feed, digestion, compost, sewer or landfill</li>
<li><strong>Waste audit:</strong> a direct measurement of discarded material by sorting and weighing it</li>
<li><strong>Diary study:</strong> a method where households record what they throw away over a period of time</li>
<li><strong>Avoidable waste:</strong> food that was edible at some point before it was discarded</li>
</ul>

<h3>Measurement Challenges</h3>
<p>Estimates differ widely because studies choose different scopes. Some include inedible parts, some count food sent to animal feed as waste and others do not, and some measure by weight while others use calories or economic value. Measurement methods also differ in reliability:</p>
<table>
<thead><tr><th>Method</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Direct weighing and waste composition analysis</td><td>Objective and detailed</td><td>Costly; misses food poured down drains or composted at home</td></tr>
<tr><td>Household diaries</td><td>Capture reasons and all disposal routes</td><td>Under-reporting because recording changes behavior</td></tr>
<tr><td>Surveys</td><td>Cheap and scalable</td><td>Self-reports often substantially underestimate waste</td></tr>
<tr><td>Mass balance modeling</td><td>Covers whole supply chains</td><td>Depends on assumed coefficients and data quality</td></tr>
</tbody>
</table>
<p>A key lesson is that comparisons across countries or years are only meaningful when scope and method are consistent.</p>

<h3>Causes as a Layered System</h3>
<p>Drivers operate at several levels. Micro-level causes are immediate actions, such as over-purchasing or poor storage. Meso-level causes involve organizations and relationships, such as retailer cosmetic specifications, contract rules that push risk onto farmers or take-back clauses. Macro-level causes include policies, infrastructure and cultural norms, such as cheap food prices, weak cold chains or social expectations of abundance at meals. Effective interventions target the level where the cause sits.</p>

<h3>Reasoning About Impact</h3>
<p>Not all waste is equal. A kilogram of wasted beef carries a much larger land, water and emissions footprint than a kilogram of wasted potatoes, so weight-based targets can misdirect effort. Similarly, waste near the end of the chain embodies more cumulative inputs, because processing, transport, refrigeration and cooking energy have already been spent. Prioritization should weigh volume, environmental intensity and feasibility together.</p>

<h3>An Applied Method</h3>
<ol>
<li>Define scope: which stages, which materials, edible only or all parts.</li>
<li>Establish a baseline with a suitable measurement method.</li>
<li>Identify hotspots by weight, footprint and cost.</li>
<li>Diagnose causes at micro, meso and macro levels.</li>
<li>Select interventions following the recovery hierarchy, prevention first.</li>
<li>Re-measure with the same method to evaluate change.</li>
</ol>
`,
        GRADUATE: `
<h2>Food Waste Policy, Redistribution Systems and Behavior Change</h2>
<p>Reducing food waste at scale depends on policy design, the economics of redistribution and the realities of human behavior. Many interventions that seem obvious, such as donating surplus or telling people to waste less, have mixed or modest effects on their own. This lesson examines the policy toolkit, the governance of redistribution and evidence on what changes behavior, with attention to equity and unintended consequences.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Date label confusion:</strong> misunderstanding quality dates such as best before as safety dates, leading to disposal of safe food</li>
<li><strong>Liability protection:</strong> legal shields that protect good-faith food donors from lawsuits if donated food causes harm</li>
<li><strong>Extended producer responsibility:</strong> policies that make producers responsible for the end-of-life impacts of their products</li>
<li><strong>Organic waste diversion:</strong> rules that keep food scraps out of landfills by requiring composting or digestion</li>
<li><strong>Choice architecture:</strong> designing the way options are presented to steer decisions, such as smaller plates or trayless dining</li>
<li><strong>Voluntary agreement:</strong> a commitment among businesses and government to meet shared targets and report progress</li>
</ul>

<h3>The Policy Toolkit</h3>
<table>
<thead><tr><th>Instrument</th><th>Example</th><th>Main consideration</th></tr></thead>
<tbody>
<tr><td>Regulation</td><td>Bans on sending organics to landfill; requirements for large retailers to donate edible surplus</td><td>Needs enforcement and adequate receiving capacity</td></tr>
<tr><td>Economic incentives</td><td>Tax deductions for donations; pay-as-you-throw waste fees</td><td>May reward redistribution more than prevention</td></tr>
<tr><td>Standardization</td><td>Simplified date labels separating quality and safety</td><td>Requires industry coordination and public communication</td></tr>
<tr><td>Voluntary agreements</td><td>Industry targets with measurement and public reporting</td><td>Effectiveness depends on transparency and participation</td></tr>
<tr><td>Information campaigns</td><td>Storage tips and meal planning messages</td><td>Awareness alone often produces modest change</td></tr>
</tbody>
</table>

<h3>The Politics of Redistribution</h3>
<p>Donation systems recover large amounts of food and provide real help to people facing hunger. Yet scholars and advocates raise several concerns. Relying on surplus can make charitable food provision depend on the inefficiencies of the food system it is meant to correct. Donated food may not match nutritional or cultural needs. Tax incentives can make donation more attractive to businesses than preventing surplus in the first place. And redistributing leftovers does not address the low incomes that underlie food insecurity. A food sovereignty perspective asks whether recovery strengthens community control or reinforces dependency.</p>

<h3>Behavior Change Evidence</h3>
<p>Household waste emerges from routines: shopping, storing, cooking, eating and managing leftovers. Interventions that change the environment tend to outperform those that only provide information. Examples include smaller portion and plate sizes in food service, trayless dining, better fridge storage guidance, clear labels and tools that make leftovers easy to use. Social norms messages can help, but effects may fade without reinforcement. Rigorous evaluation with measured rather than self-reported waste is still relatively rare.</p>

<h3>Equity Considerations</h3>
<p>Low-income households often waste less food per person, partly because budgets are tight, so campaigns that blame consumers can misplace responsibility. At the same time, they may face barriers such as limited storage, unreliable refrigeration or irregular shopping access. Costs of diversion mandates may pass through to small businesses and local governments. Fair policy places obligations on actors with the most influence over the system.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Is the target defined consistently and measured objectively?</li>
<li>Does the intervention follow the hierarchy, favoring prevention over recovery?</li>
<li>Who bears the costs, and who captures the benefits?</li>
<li>Does redistribution respect dignity, nutrition and cultural appropriateness?</li>
<li>Are rebound effects or perverse incentives likely?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Quantification, Systems Interventions and Circular Food Systems</h2>
<p>Food waste research has grown rapidly, but the field still faces basic problems of measurement, causal inference and system boundaries. Advanced work increasingly treats waste not as an isolated behavior but as an emergent outcome of interacting actors, technologies, contracts and norms. This lesson surveys quantification methods, intervention pathways, circular economy debates and open research questions.</p>

<h3>Quantification Methods and Uncertainty</h3>
<ul>
<li><strong>Material flow analysis:</strong> tracking mass through a system to estimate where food leaves the supply chain</li>
<li><strong>Life-cycle assessment:</strong> estimating environmental impacts across all stages, including those embedded in wasted food</li>
<li><strong>Uncertainty propagation:</strong> carrying measurement and coefficient uncertainty through models to final estimates</li>
<li><strong>Intervention pathway:</strong> a causal chain from a waste driver through behaviors and practices to a reduction outcome</li>
<li><strong>Rebound effect:</strong> savings from reduced waste being spent on additional consumption that offsets environmental gains</li>
<li><strong>Cascading use:</strong> using biomass sequentially for its highest-value purposes before final energy recovery or composting</li>
</ul>
<p>Global estimates rely heavily on extrapolation from limited primary data, with loss coefficients applied across countries and commodities. Differences in definitions, such as treatment of inedible parts and animal feed, can change totals substantially. Researchers increasingly report ranges and conduct sensitivity analyses rather than single figures.</p>

<h3>Causal Inference and Intervention Pathways</h3>
<p>Many evaluations rely on before-and-after comparisons or self-reported outcomes, which are vulnerable to confounding and social desirability bias. Stronger designs include randomized or stepped-wedge trials in cafeterias and retailers, difference-in-differences analysis of policy changes and natural experiments. Intervention pathway models make assumptions explicit: for example, a clearer label must be noticed, understood, trusted and acted upon before it changes disposal. Mapping these links helps explain why some interventions fail.</p>

<h3>Circular Food Systems</h3>
<p>Circular approaches aim to keep nutrients and biomass in productive use: preventing surplus, redistributing edible food, upcycling by-products into new foods, feeding animals and recovering energy and nutrients through digestion and composting. Debates concern the ordering and limits of these options.</p>
<table>
<thead><tr><th>Debate</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Upcycled foods</td><td>Valorize by-products but may lock in demand for the processes that generate them</td></tr>
<tr><td>Feeding food waste to animals</td><td>Recovers value but raises disease control and regulatory concerns</td></tr>
<tr><td>Anaerobic digestion versus prevention</td><td>Infrastructure investments may create demand for a steady waste stream</td></tr>
<tr><td>Weight-based versus impact-based targets</td><td>Weight is measurable; impact better reflects environmental priorities</td></tr>
<tr><td>Surplus redistribution</td><td>Relieves hunger but may institutionalize charitable food systems</td></tr>
</tbody>
</table>

<h3>Systems and Socio-Technical Perspectives</h3>
<p>Practice theory analyzes household waste as the outcome of routines shaped by materials, skills and meanings rather than individual attitudes alone. Supply chain research examines how contracts, cosmetic standards and power imbalances shift waste upstream onto farmers. System dynamics and agent-based models explore how interventions at one stage displace waste elsewhere. Integrating these perspectives remains a methodological challenge.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Low-cost, standardized primary measurement across supply chain stages, especially in data-poor regions.</li>
<li>Robust causal evaluation of policies such as donation mandates and date label reform.</li>
<li>Modeling displacement and rebound effects across stages and sectors.</li>
<li>Impact-weighted metrics that combine nutrition, emissions, water and land.</li>
<li>Analysis of how circular infrastructure interacts with prevention goals and food sovereignty.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fwasq1',
      question: {
        ELEMENTARY: 'What should we do with the food on our plate?',
        MIDDLE_SCHOOL: 'About how much of the world\'s food is lost or wasted, according to a widely cited estimate?',
        HIGH_SCHOOL: 'What is the most preferred action in the food recovery hierarchy?',
        UNDERGRADUATE: 'What is the usual difference between food loss and food waste?',
        GRADUATE: 'What is date label confusion?',
        PHD: 'What is a food waste intervention pathway?',
      },
      options: {
        ELEMENTARY: ['Eat it or save it as leftovers, not throw it away', 'Throw it all in the trash', 'Hide it under the table', 'Leave it outside for a week'],
        MIDDLE_SCHOOL: ['Roughly one-third', 'Almost none', 'All of it', 'Exactly one percent'],
        HIGH_SCHOOL: ['Preventing waste in the first place', 'Sending food to landfill', 'Burning food for heat', 'Composting all food'],
        UNDERGRADUATE: ['Loss happens before retail; waste happens at retail, food service and households', 'They are exactly the same thing', 'Loss only happens in homes', 'Waste only happens on farms'],
        GRADUATE: ['Mistaking quality dates for safety dates and discarding safe food', 'Labels that are always perfectly understood', 'A rule that bans all labels', 'Printing labels in the wrong color'],
        PHD: ['A causal chain from a waste driver through behaviors to a reduction outcome', 'A random collection of actions', 'A single solution for every context', 'The route a garbage truck follows'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Eating the food we take, or saving leftovers, keeps good food out of the trash.',
        MIDDLE_SCHOOL: 'A widely cited estimate says roughly a third of food is lost or wasted between farm and fork.',
        HIGH_SCHOOL: 'Prevention comes first because it saves all the resources used to make the food.',
        UNDERGRADUATE: 'Food loss occurs between harvest and retail; food waste occurs at retail, food service and consumer levels.',
        GRADUATE: 'People often throw out safe food because they treat best before dates as safety deadlines.',
        PHD: 'Pathway models trace how a driver must change behavior before a reduction outcome appears.',
      },
    },
    {
      id: 'fwasq2',
      question: {
        ELEMENTARY: 'What is compost?',
        MIDDLE_SCHOOL: 'Which gas is released when food rots in a landfill without air?',
        HIGH_SCHOOL: 'Why is more food lost early in the supply chain in many lower-income countries?',
        UNDERGRADUATE: 'Why do household surveys often give unreliable food waste estimates?',
        GRADUATE: 'What is a concern about relying on surplus food redistribution?',
        PHD: 'What is a rebound effect in food waste reduction?',
      },
      options: {
        ELEMENTARY: ['A type of candy', 'Old food scraps and leaves that turn into rich soil', 'A plastic bag', 'A kind of fridge'],
        MIDDLE_SCHOOL: ['Oxygen', 'Methane', 'Helium', 'Neon'],
        HIGH_SCHOOL: ['People there do not like food', 'Limited cold storage, roads and processing', 'Farms there grow nothing', 'Stores there throw out everything'],
        UNDERGRADUATE: ['Surveys always overestimate waste', 'Self-reports often substantially underestimate waste', 'Surveys measure only restaurants', 'Surveys weigh every item directly'],
        GRADUATE: ['It provides no help to anyone', 'It can make charitable food depend on system inefficiencies and does not address low incomes', 'It is always illegal', 'It increases prevention automatically'],
        PHD: ['Food bouncing off a plate', 'Money saved by wasting less being spent on extra consumption that offsets gains', 'A rise in compost quality', 'A type of landfill liner'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Compost is made from food scraps and leaves breaking down into healthy soil.',
        MIDDLE_SCHOOL: 'Food rotting without oxygen in landfills releases methane, a strong greenhouse gas.',
        HIGH_SCHOOL: 'Without cold chains, good roads and processing, food spoils before it ever reaches a store.',
        UNDERGRADUATE: 'People tend to under-report what they throw away, so direct measurement is more reliable.',
        GRADUATE: 'Redistribution helps but can entrench dependence on surplus and leave the causes of food insecurity untouched.',
        PHD: 'Rebound means savings are spent on other consumption, eroding some of the environmental benefit.',
      },
    },
    {
      id: 'fwasq3',
      question: {
        ELEMENTARY: 'Which is a smart way to waste less food at lunch?',
        MIDDLE_SCHOOL: 'What is gleaning?',
        HIGH_SCHOOL: 'What is a cold chain?',
        UNDERGRADUATE: 'Why can weight-based waste targets misdirect effort?',
        GRADUATE: 'Which type of intervention tends to outperform information alone?',
        PHD: 'Why is anaerobic digestion sometimes debated alongside prevention?',
      },
      options: {
        ELEMENTARY: ['Take a huge pile of food', 'Throw away the crusts every day', 'Take a small portion first and go back for more if hungry', 'Only eat dessert'],
        MIDDLE_SCHOOL: ['Polishing apples in a store', 'Throwing away bruised fruit', 'Collecting leftover crops from fields after harvest', 'Buying food online'],
        HIGH_SCHOOL: ['A metal chain used on tractors', 'A winter festival', 'Refrigerated storage and transport that keeps perishable food fresh', 'A list of frozen recipes'],
        UNDERGRADUATE: ['Weight cannot be measured', 'All foods have identical footprints', 'A kilogram of beef has a much larger footprint than a kilogram of potatoes', 'Weight targets are illegal'],
        GRADUATE: ['Posters with no other changes', 'Asking people to try harder', 'Changing the environment, such as smaller plates or trayless dining', 'Ignoring waste completely'],
        PHD: ['Digestion produces no energy', 'Digestion is always banned', 'Digestion infrastructure may create demand for a steady waste stream', 'Prevention and digestion are the same thing'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Starting small means less food is left over and thrown away.',
        MIDDLE_SCHOOL: 'Gleaning means gathering crops left in the field after the main harvest.',
        HIGH_SCHOOL: 'The cold chain keeps perishable food cool from farm to store so it does not spoil.',
        UNDERGRADUATE: 'Foods differ greatly in footprint, so impact matters as well as weight.',
        GRADUATE: 'Changing the setting people act in usually works better than awareness messages alone.',
        PHD: 'Investments in digestion can lock in a need for waste feedstock, weakening incentives to prevent waste.',
      },
    },
    {
      id: 'fwasq4',
      question: {
        ELEMENTARY: 'Why is wasting food bad for the planet?',
        MIDDLE_SCHOOL: 'What does a best before date tell you?',
        HIGH_SCHOOL: 'Which food recovery action ranks just after prevention?',
        UNDERGRADUATE: 'What is a meso-level cause of food waste?',
        GRADUATE: 'Why can blaming consumers misplace responsibility for food waste?',
        PHD: 'What does practice theory emphasize about household food waste?',
      },
      options: {
        ELEMENTARY: ['Food in the trash makes rainbows', 'Trash cans get lonely', 'It makes food grow faster', 'It wastes the water, soil and work used to grow it'],
        MIDDLE_SCHOOL: ['The exact moment food becomes poisonous', 'The day the food was planted', 'The price of the food', 'When food tastes best, not when it becomes unsafe'],
        HIGH_SCHOOL: ['Landfill', 'Incineration', 'Composting', 'Feeding people through donations of safe surplus'],
        UNDERGRADUATE: ['A person forgetting leftovers', 'A national food price policy', 'Global climate patterns', 'Retailer cosmetic specifications and contract rules'],
        GRADUATE: ['Consumers never waste food', 'Businesses produce no waste', 'Waste cannot be measured', 'Low-income households often waste less and powerful actors shape the system'],
        PHD: ['Waste is caused only by attitudes', 'Households never change', 'Waste is unrelated to daily life', 'Waste emerges from routines shaped by materials, skills and meanings'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Wasted food also wastes the water, soil, energy and hard work that made it.',
        MIDDLE_SCHOOL: 'Best before is about quality and taste, not safety.',
        HIGH_SCHOOL: 'After prevention, the next best step is getting safe surplus to people who need it.',
        UNDERGRADUATE: 'Meso-level causes sit in organizations and relationships, such as retailer standards and contracts.',
        GRADUATE: 'Responsibility should rest with actors who have the most influence over the system, not only households.',
        PHD: 'Practice theory looks at everyday routines rather than treating waste as a matter of individual attitude.',
      },
    },
    {
      id: 'fwasq5',
      question: {
        ELEMENTARY: 'Where should the oldest food go in the fridge?',
        MIDDLE_SCHOOL: 'What does a food bank do?',
        HIGH_SCHOOL: 'Why is food waste reduction called a "triple win"?',
        UNDERGRADUATE: 'Why are cross-country comparisons of food waste often unreliable?',
        GRADUATE: 'What is liability protection for food donors?',
        PHD: 'Why do researchers increasingly report ranges for global food waste estimates?',
      },
      options: {
        ELEMENTARY: ['At the front so it gets eaten first', 'Hidden at the very back', 'In the freezer forever', 'In the trash right away'],
        MIDDLE_SCHOOL: ['Collects extra food and gives it to people who need it', 'Stores money for farmers', 'Makes food more expensive', 'Throws food into landfills'],
        HIGH_SCHOOL: ['It saves money, eases hunger and cuts emissions', 'It wins three cooking contests', 'It only helps stores', 'It triples food prices'],
        UNDERGRADUATE: ['Studies use different scopes, definitions and methods', 'Every country uses the same method', 'Waste is identical everywhere', 'Food waste cannot be weighed'],
        GRADUATE: ['Legal shields for good-faith donors if donated food causes harm', 'Insurance for landfills', 'A ban on food donation', 'A tax on compost'],
        PHD: ['Estimates rely on extrapolation and assumptions that create substantial uncertainty', 'Exact figures are known for every country', 'Ranges are required by law', 'Food waste has no uncertainty'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Putting older food at the front helps us remember to eat it before it spoils.',
        MIDDLE_SCHOOL: 'Food banks gather surplus food and share it with people facing hunger.',
        HIGH_SCHOOL: 'Wasting less saves money, helps people who need food and lowers greenhouse gas emissions.',
        UNDERGRADUATE: 'Comparisons only work when scope, definitions and methods are consistent.',
        GRADUATE: 'Liability protection encourages donation by shielding donors acting in good faith.',
        PHD: 'Limited primary data and differing definitions mean single global figures hide large uncertainty.',
      },
    },
  ],
}

export default expansion
