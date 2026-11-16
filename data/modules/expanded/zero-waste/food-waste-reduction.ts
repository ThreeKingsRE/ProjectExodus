import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'food-waste-reduction',
  lessons: [
    {
      id: 'zw-food-1',
      title: 'Don\'t Waste Food!',
      content: {
        ELEMENTARY: `
<h2>Every Bite Counts</h2>
<p>Think about an apple. Before it reached your lunchbox, a tree grew for years. Rain watered it. A farmer cared for it. A truck carried it to the store, and someone in your family bought it. If the apple gets thrown away, all of that care and work is thrown away too. That is why every bite counts!</p>

<h3>Why Wasting Food Is a Problem</h3>
<p>Growing food uses water, soil, sunshine, fuel for tractors and trucks, and lots of hard work. When food goes in the trash, all of those things are wasted. Food in a landfill also rots without air and makes a gas that warms our planet. And while some food is thrown away, some people do not have enough to eat.</p>

<h3>Food Words to Know</h3>
<ul>
<li><strong>Leftovers:</strong> food that was cooked but not eaten, which can be saved for another meal</li>
<li><strong>Portion:</strong> the amount of food you put on your plate at one time</li>
<li><strong>Fridge:</strong> a cold box in the kitchen that keeps many foods fresh for longer</li>
<li><strong>Compost:</strong> food scraps and leaves that rot into rich soil for plants</li>
<li><strong>Food bank:</strong> a place that collects extra food and shares it with people who need it</li>
</ul>

<h3>Be a Food Saver</h3>
<ol>
<li>Take a small portion first. You can always go back for more!</li>
<li>Eat the foods that will spoil soonest first, like bananas and berries.</li>
<li>Help a grown-up put leftovers in a box in the fridge.</li>
<li>Try a new way to eat old food, like turning soft bananas into a smoothie.</li>
<li>Put peels and cores in the compost instead of the trash.</li>
</ol>

<h3>Food Saver at School</h3>
<p>At lunch, try to finish your food, or take home what you could not eat. If your school has a share table, you can put an unopened snack there for someone else. Some schools weigh their lunch waste each week to see if it is getting smaller. That is a fun science project!</p>

<h3>Think About It</h3>
<p>Look in your fridge with a grown-up. Is there something that needs to be eaten soon? What yummy meal could you make with it?</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Hidden Cost of Wasted Food</h2>
<p>Around the world, roughly one-third of all food produced is lost or wasted somewhere between the farm and the fork. That is a huge amount of food, and the problem is bigger than just the food itself. Every wasted meal also wastes the land, water, energy and work used to produce it, and it adds to climate change.</p>

<h3>Impacts of Food Waste</h3>
<table>
<thead><tr><th>Type of impact</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Water</td><td>The water used to grow crops and raise animals is wasted with the food</td></tr>
<tr><td>Land</td><td>Forests and grasslands may be cleared to grow food that no one eats</td></tr>
<tr><td>Climate</td><td>Food rotting in landfills releases methane, a strong greenhouse gas</td></tr>
<tr><td>Money</td><td>Families and businesses pay for food they throw away</td></tr>
<tr><td>Hunger</td><td>Edible food is thrown away while some people do not have enough</td></tr>
</tbody>
</table>

<h3>Why Food Gets Wasted at Home</h3>
<ul>
<li>Buying more than we need, especially when there are deals</li>
<li>Forgetting about food at the back of the fridge</li>
<li>Cooking too much and not eating the leftovers</li>
<li>Misunderstanding date labels and throwing out food that is still fine</li>
<li>Storing food in the wrong place so it spoils faster</li>
</ul>

<h3>Key Words</h3>
<ul>
<li><strong>Food loss:</strong> food that is lost on farms, in storage or during transport before it reaches stores</li>
<li><strong>Food waste:</strong> food that is thrown away by stores, restaurants or households</li>
<li><strong>Methane:</strong> a powerful greenhouse gas made when food rots without oxygen in landfills</li>
<li><strong>Best before:</strong> a label about quality, meaning the food may still be safe to eat after that date</li>
<li><strong>Use by:</strong> a label about safety, meaning the food should not be eaten after that date</li>
<li><strong>Meal planning:</strong> deciding ahead what meals to cook so you buy only what you need</li>
</ul>

<h3>Solutions That Work</h3>
<ol>
<li><strong>Plan and list:</strong> check what is in the fridge, plan meals and shop with a list.</li>
<li><strong>Store smart:</strong> keep foods in the right place; for example, many fruits release a gas that makes nearby produce ripen faster.</li>
<li><strong>First in, first out:</strong> move older food to the front so it gets eaten first.</li>
<li><strong>Love leftovers:</strong> turn them into lunches, soups, fried rice or wraps.</li>
<li><strong>Freeze it:</strong> bread, ripe bananas and cooked meals can be frozen before they spoil.</li>
<li><strong>Compost scraps:</strong> peels and cores that cannot be eaten can become soil instead of trash.</li>
</ol>

<h3>Why It Matters</h3>
<p>Reducing food waste is one of the easiest climate actions a family can take, and it saves money too. When less food is wasted, farmers need less land and water to feed everyone. Small habits, repeated every day in millions of homes, add up to a big difference.</p>
`,
        HIGH_SCHOOL: `
<h2>Food Waste Across the Supply Chain</h2>
<p>Food can be lost or wasted at every step between the field and the plate. Where it happens, and why, differs between regions. In many lower-income countries, more food is lost early in the chain because of limited storage, cooling and transport. In many higher-income countries, more is wasted at the retail and household end. Effective solutions depend on knowing where the biggest losses occur.</p>

<h3>The Chain Step by Step</h3>
<table>
<thead><tr><th>Stage</th><th>Common causes of loss or waste</th><th>Example solutions</th></tr></thead>
<tbody>
<tr><td>Farm and harvest</td><td>Pests, weather, crops left unharvested when prices are low, cosmetic standards</td><td>Better pest management, markets for imperfect produce, gleaning</td></tr>
<tr><td>Storage and transport</td><td>Lack of cooling, poor packaging, delays</td><td>Cold chains, improved storage bags and silos, better roads</td></tr>
<tr><td>Processing</td><td>Trimming, spills, overproduction</td><td>Using byproducts, process improvements</td></tr>
<tr><td>Retail</td><td>Overstocking, damaged items, strict appearance standards, date expiry</td><td>Better forecasting, discounts on near-date food, donation</td></tr>
<tr><td>Restaurants and cafeterias</td><td>Large portions, overproduction, plate waste</td><td>Smaller plates, tracking waste, flexible menus</td></tr>
<tr><td>Households</td><td>Over-buying, poor storage, date label confusion, uneaten leftovers</td><td>Meal planning, storage knowledge, clear labels</td></tr>
</tbody>
</table>

<h3>Inside the Household</h3>
<p>In many wealthy countries, households are one of the largest single sources of food waste. Most of it happens in the kitchen: food that spoils before it is used, preparation waste, and leftovers that are never eaten. Fresh produce, bread, dairy and cooked meals are commonly wasted foods. Some waste is inedible, like eggshells and bones, but a large share was once perfectly edible.</p>

<h3>Why It Matters for Climate</h3>
<ul>
<li><strong>Embedded emissions:</strong> the greenhouse gases released while growing, processing, transporting and cooking food</li>
<li><strong>Landfill methane:</strong> gas released as food breaks down without oxygen in landfills</li>
<li><strong>Land use change:</strong> clearing forests or grasslands to grow food, which releases stored carbon</li>
<li><strong>Cold chain:</strong> a series of refrigerated storage and transport steps that keeps food fresh</li>
<li><strong>Gleaning:</strong> collecting crops left in fields after harvest so they can be eaten</li>
</ul>
<p>Because food waste carries all the emissions from production plus methane from disposal, reducing it is considered one of the most effective climate solutions available.</p>

<h3>Strategies and Trade-offs</h3>
<ol>
<li><strong>Prevention first:</strong> not producing surplus saves the most resources.</li>
<li><strong>Redistribution:</strong> donating edible surplus feeds people but needs transport, storage and food safety rules.</li>
<li><strong>Animal feed:</strong> some scraps can feed animals, following safety regulations.</li>
<li><strong>Composting and digestion:</strong> turning scraps into soil or biogas recovers some value.</li>
<li><strong>Packaging trade-off:</strong> some packaging extends shelf life and prevents waste, so removing it is not always better.</li>
</ol>

<h3>Real-World Applications</h3>
<p>Supermarkets sell "ugly" produce at lower prices. Apps connect stores and restaurants with customers who buy surplus meals at a discount. Food banks rescue surplus from farms and shops. Some cities collect food scraps separately for composting. Schools run share tables and measure plate waste. Each of these targets a different stage of the chain.</p>
`,
        UNDERGRADUATE: `
<h2>Measuring Food Loss and Designing Interventions</h2>
<p>Food loss and waste is easy to describe but hard to measure. Definitions differ on whether inedible parts count, whether food sent to animal feed counts as waste, and where the boundaries of the supply chain lie. Without consistent measurement, it is impossible to know whether interventions work. This lesson covers definitions, measurement methods, causal analysis and the design and evaluation of interventions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Food loss:</strong> a decrease in food quantity or quality from harvest up to, but not including, retail</li>
<li><strong>Food waste:</strong> food discarded at retail, food service and household levels</li>
<li><strong>Edible fraction:</strong> the part of discarded food that was intended for human consumption, excluding bones, shells and peels</li>
<li><strong>Baseline:</strong> a measured starting level of waste against which change is assessed</li>
<li><strong>Waste composition analysis:</strong> physically sorting and weighing waste samples to identify what is discarded</li>
<li><strong>Counterfactual:</strong> an estimate of what would have happened without an intervention</li>
</ul>

<h3>Measurement Methods</h3>
<table>
<thead><tr><th>Method</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Direct weighing</td><td>Accurate and objective</td><td>Labor-intensive and hard to scale</td></tr>
<tr><td>Waste composition analysis</td><td>Shows types of food and edible share</td><td>Snapshots may miss seasonal variation</td></tr>
<tr><td>Food waste diaries</td><td>Captures reasons and context</td><td>Self-reporting often underestimates waste</td></tr>
<tr><td>Surveys</td><td>Cheap, captures attitudes</td><td>Weak link to actual behavior</td></tr>
<tr><td>Mass balance modeling</td><td>Covers whole supply chains</td><td>Relies on assumptions and coefficients</td></tr>
</tbody>
</table>
<p>A key insight is that self-reported household waste tends to be lower than measured waste. Studies that compare diaries with physical bin audits often find substantial under-reporting, so survey-based claims of success should be treated cautiously.</p>

<h3>Analyzing Causes</h3>
<p>Causes operate at several levels. Immediate causes include over-purchasing, poor storage or overproduction. Underlying causes include price promotions encouraging bulk buying, rigid cosmetic standards, large default portion sizes and confusing date labels. Systemic drivers include cheap food relative to income, long supply chains and business contracts that shift risk onto suppliers. Interventions targeting only immediate causes may have short-lived effects if underlying drivers remain.</p>

<h3>Designing Interventions</h3>
<ol>
<li><strong>Choose the stage:</strong> focus where measurement shows the largest avoidable edible waste.</li>
<li><strong>Diagnose causes:</strong> combine bin audits with interviews or observation to understand why food is wasted.</li>
<li><strong>Select levers:</strong> information campaigns, changes to defaults such as plate size, technology such as inventory systems, or pricing changes.</li>
<li><strong>Set a baseline:</strong> measure before the intervention using the same method you will use afterward.</li>
<li><strong>Evaluate with a comparison:</strong> use control groups or before-and-after comparisons with matched sites to estimate the counterfactual.</li>
<li><strong>Check for displacement:</strong> make sure waste is not simply moved to another stage or another bin.</li>
</ol>

<h3>Interpreting Results Quantitatively</h3>
<p>Results are best expressed per functional unit, such as grams of edible waste per meal served or per household per week, rather than total tonnes, which can change simply because activity levels change. Reporting the edible fraction separately clarifies how much waste was truly avoidable. Converting reductions into avoided emissions requires emission factors that differ widely between food types: preventing waste of animal products generally avoids more emissions per kilogram than preventing waste of most vegetables.</p>
`,
        GRADUATE: `
<h2>Food Waste Policy, the Recovery Hierarchy and System Change</h2>
<p>Food waste reduction has become an explicit policy goal. The Sustainable Development Goals include a target to halve per-capita global food waste at retail and consumer levels and reduce losses along production and supply chains by 2030. Achieving such targets requires a combination of regulation, economic instruments, voluntary agreements and infrastructure. This lesson examines the food recovery hierarchy, the main policy instruments and the institutional barriers to system change.</p>

<h3>The Food Recovery Hierarchy</h3>
<p>Food recovery hierarchies rank options by the value they preserve. A common version, from most to least preferred, is:</p>
<ol>
<li><strong>Source reduction:</strong> preventing surplus from being produced in the first place.</li>
<li><strong>Feeding people:</strong> redistributing edible surplus through food banks and charities.</li>
<li><strong>Feeding animals:</strong> diverting suitable scraps to animal feed within safety rules.</li>
<li><strong>Industrial uses:</strong> recovering oils, fats or materials for other products.</li>
<li><strong>Composting and anaerobic digestion:</strong> recovering nutrients and energy.</li>
<li><strong>Landfill or incineration:</strong> the last resort.</li>
</ol>

<h3>Key Policy Concepts</h3>
<ul>
<li><strong>Donor liability protection:</strong> laws shielding good-faith food donors from legal liability if donated food causes harm</li>
<li><strong>Date label standardization:</strong> policies that simplify labels to distinguish quality dates from safety dates</li>
<li><strong>Organics disposal ban:</strong> a rule prohibiting large generators from sending food waste to landfill</li>
<li><strong>Voluntary agreement:</strong> a commitment by businesses and governments to measure and reduce waste together</li>
<li><strong>Target-measure-act:</strong> a management approach of setting targets, measuring waste and acting on hotspots</li>
<li><strong>Tax incentive for donation:</strong> deductions or credits that offset the cost of donating rather than discarding food</li>
</ul>

<h3>Comparing Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Hierarchy level targeted</th><th>Strengths</th><th>Risks</th></tr></thead>
<tbody>
<tr><td>Mandatory donation of retail surplus</td><td>Feeding people</td><td>Moves edible food to people quickly</td><td>Can overwhelm charities and shift disposal costs to them</td></tr>
<tr><td>Organics landfill bans</td><td>Composting and digestion</td><td>Drives infrastructure for diversion</td><td>May favor recovery over prevention if not paired with other measures</td></tr>
<tr><td>Mandatory measurement and reporting</td><td>Source reduction</td><td>Creates transparency and management attention</td><td>Inconsistent methods weaken comparability</td></tr>
<tr><td>Date label reform</td><td>Source reduction at households</td><td>Low cost, broad reach</td><td>Requires coordination across retailers and regulators</td></tr>
<tr><td>Unfair trading practice rules</td><td>Supply chain loss</td><td>Stops last-minute order cancellations that create farm waste</td><td>Enforcement depends on supplier willingness to complain</td></tr>
</tbody>
</table>

<h3>Institutional Barriers</h3>
<p>Many barriers are structural. Retailers may profit from over-purchasing by consumers. Contracts may penalize suppliers for under-delivery, encouraging overproduction. Food safety rules can be interpreted conservatively, discouraging redistribution. Responsibility is spread across agriculture, health, environment and waste agencies, so no single ministry owns the problem. Charitable redistribution, while valuable, can become a way to manage surplus without addressing why it exists, and it does not address the root causes of food insecurity.</p>

<h3>Equity and System Change</h3>
<p>Policy should avoid treating food banks as a permanent outlet for corporate surplus while food insecurity persists due to low incomes. Smallholder farmers in lower-income countries face losses linked to lack of storage, credit and market access, so solutions there involve infrastructure and fair market access rather than consumer campaigns. System change means aligning incentives so that preventing surplus is more profitable than managing it.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Locate the dominant losses by stage and food type using consistent measurement.</li>
<li>Rank interventions by the hierarchy level they target and the value they preserve.</li>
<li>Check for cost shifting onto charities, suppliers or municipalities.</li>
<li>Assess effects on food security, farmer livelihoods and worker conditions.</li>
<li>Monitor progress toward targets with transparent, comparable data.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Food System Modeling, Behavior and Climate</h2>
<p>Food waste research spans agronomy, supply chain science, behavioral economics, sociology and climate modeling. The field is moving from estimating how much food is wasted toward explaining why, modeling system-wide effects of interventions and quantifying contributions to climate mitigation. This lesson surveys modeling approaches, behavioral research, climate accounting and contested methodological questions.</p>

<h3>Modeling Approaches</h3>
<ul>
<li><strong>Multi-regional input-output analysis:</strong> economic models tracing resource use and emissions embedded in food through global supply chains</li>
<li><strong>Integrated assessment models:</strong> models linking food demand, land use, emissions and climate to explore long-term scenarios</li>
<li><strong>Agent-based models:</strong> simulations of households, retailers and farmers whose interactions produce system-level waste patterns</li>
<li><strong>Partial equilibrium models:</strong> market models estimating how waste reduction affects prices, production and consumption</li>
<li><strong>Social practice theory:</strong> an approach that studies routines like shopping and cooking as practices shaped by materials, skills and meanings</li>
<li><strong>Rebound effect:</strong> a response in which savings from waste reduction lead to extra spending or consumption elsewhere</li>
</ul>

<h3>Climate Implications</h3>
<p>Food loss and waste are widely estimated to account for a meaningful share of global greenhouse gas emissions, combining production emissions with landfill methane. Integrated assessment models suggest that waste reduction could lower agricultural land demand and emissions, but results depend strongly on assumptions. Market feedbacks matter: if waste reduction lowers food prices, consumption may rise in some regions, partially offsetting savings. Income saved by households may be spent on other emission-intensive goods. Net mitigation therefore depends on market responses, the food types affected and how freed land is used.</p>

<h3>Behavior Change Research</h3>
<p>Early interventions relied on information campaigns, which often show modest or short-lived effects. Research increasingly draws on behavioral economics, using defaults, portion sizes, plate sizes and feedback, and on social practice theory, which argues that waste emerges from routines and household dynamics, such as caring for family members, uncertainty about schedules and desire for abundance. These perspectives suggest that interventions should change the conditions of practices, not just individual knowledge.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Should inedible parts count as waste?</td><td>Definitions change estimates and the apparent potential for prevention</td></tr>
<tr><td>How large are rebound effects?</td><td>Estimates vary with model structure, region and how savings are spent</td></tr>
<tr><td>Is redistribution a solution or a symptom?</td><td>It feeds people but may institutionalize surplus and charity-based food security</td></tr>
<tr><td>Do information campaigns work?</td><td>Evaluations often rely on self-reporting with limited follow-up</td></tr>
<tr><td>How to compare across countries?</td><td>Methods, definitions and data quality vary widely</td></tr>
</tbody>
</table>

<h3>Methodological Directions</h3>
<p>Researchers are improving measurement with smart bins, image recognition in food service and repeated physical audits, reducing reliance on self-reports. Randomized and quasi-experimental designs are being used to evaluate interventions more rigorously. Linking micro-level behavioral data with macro-level economic and climate models remains a major challenge, as does capturing heterogeneity across households and cultures.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust, scalable measurement of household waste that does not rely on self-reporting.</li>
<li>Empirical estimates of rebound effects from food waste reduction.</li>
<li>Coupling behavioral models with supply chain and climate models.</li>
<li>Longitudinal studies of whether behavior changes persist.</li>
<li>Comparative research on food loss reduction for smallholder farmers in different regions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwfq1',
      question: {
        ELEMENTARY: 'Why is wasting food bad?',
        MIDDLE_SCHOOL: 'Roughly how much of the world\'s food is lost or wasted?',
        HIGH_SCHOOL: 'Where does most household food waste happen?',
        UNDERGRADUATE: 'Why should self-reported household food waste be treated cautiously?',
        GRADUATE: 'Which option sits at the top of the food recovery hierarchy?',
        PHD: 'What is a rebound effect in food waste reduction?',
      },
      options: {
        ELEMENTARY: ['It wastes the water, energy and work used to grow it', 'It does not matter', 'Food grows instantly', 'There is always more'],
        MIDDLE_SCHOOL: ['About one-third', 'Almost none', 'About one-hundredth', 'Nearly all of it'],
        HIGH_SCHOOL: ['In the kitchen, through spoiled food, preparation and uneaten leftovers', 'At the car wash', 'At the post office', 'In the garden shed'],
        UNDERGRADUATE: ['It is often lower than measured waste', 'It is always perfectly accurate', 'It always overestimates waste greatly', 'It is illegal to collect'],
        GRADUATE: ['Source reduction', 'Landfill', 'Incineration', 'Composting'],
        PHD: ['Savings from reduced waste lead to extra consumption or spending elsewhere', 'Food bouncing out of bins', 'Waste disappearing forever', 'A law against waste'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Throwing food away wastes all the water, energy and hard work that went into it.',
        MIDDLE_SCHOOL: 'Roughly one-third of food produced is lost or wasted between farm and fork.',
        HIGH_SCHOOL: 'Household waste happens mostly in the kitchen through spoilage, preparation and leftovers.',
        UNDERGRADUATE: 'Comparisons with physical audits show that diaries and surveys often under-report waste.',
        GRADUATE: 'Preventing surplus in the first place preserves the most value, so it ranks highest.',
        PHD: 'Lower prices or household savings can increase consumption elsewhere, partly offsetting environmental gains.',
      },
    },
    {
      id: 'zwfq2',
      question: {
        ELEMENTARY: 'What is a good way to avoid wasting food on your plate?',
        MIDDLE_SCHOOL: 'What does a "best before" date mean?',
        HIGH_SCHOOL: 'Why is more food often lost early in the supply chain in many lower-income countries?',
        UNDERGRADUATE: 'What is the edible fraction of food waste?',
        GRADUATE: 'What is a risk of mandatory donation rules for retailers?',
        PHD: 'What does social practice theory focus on in food waste research?',
      },
      options: {
        ELEMENTARY: ['Take a huge portion', 'Take a small portion first', 'Hide food under the table', 'Throw it away quickly'],
        MIDDLE_SCHOOL: ['The food is unsafe after this date', 'It is about quality; food may still be safe afterward', 'The food was made on this date', 'The store must throw it away'],
        HIGH_SCHOOL: ['People there do not like food', 'Limited storage, cooling and transport', 'Too many supermarkets', 'Strict date labels'],
        UNDERGRADUATE: ['The part of waste that was intended for eating, excluding bones and shells', 'The weight of packaging', 'Food that is safe for animals only', 'The amount of food donated'],
        GRADUATE: ['Charities can be overwhelmed and disposal costs shifted to them', 'Food becomes illegal to sell', 'Farms stop producing food', 'Prices always double'],
        PHD: ['Only individual knowledge and attitudes', 'Routines shaped by materials, skills and meanings', 'Only global trade data', 'Only chemical changes in food'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Starting small means you can go back for more and nothing is left over.',
        MIDDLE_SCHOOL: 'Best before is a quality date; food is often still safe after it, unlike a use by date.',
        HIGH_SCHOOL: 'Without good storage and cold chains, food spoils or is damaged before reaching markets.',
        UNDERGRADUATE: 'Separating the edible fraction shows how much waste was truly avoidable.',
        GRADUATE: 'Charities may receive more than they can handle, inheriting disposal costs and logistical burdens.',
        PHD: 'Social practice theory sees waste as an outcome of everyday routines rather than just individual choices.',
      },
    },
    {
      id: 'zwfq3',
      question: {
        ELEMENTARY: 'Where can peels and apple cores go instead of the trash?',
        MIDDLE_SCHOOL: 'What gas does food make when it rots in a landfill?',
        HIGH_SCHOOL: 'What is gleaning?',
        UNDERGRADUATE: 'Why do evaluators use a control group or matched comparison sites?',
        GRADUATE: 'What does an organics disposal ban do?',
        PHD: 'Why do integrated assessment model results on waste reduction vary?',
      },
      options: {
        ELEMENTARY: ['Under the bed', 'Into a river', 'Into the compost', 'Into the toy box'],
        MIDDLE_SCHOOL: ['Oxygen', 'Helium', 'Methane', 'Steam'],
        HIGH_SCHOOL: ['Polishing apples for sale', 'Freezing leftovers', 'Collecting crops left in fields after harvest', 'Throwing away bruised fruit'],
        UNDERGRADUATE: ['To make the study cheaper', 'To avoid measuring waste', 'To estimate the counterfactual of what would happen without the intervention', 'To increase waste on purpose'],
        GRADUATE: ['Bans all food sales', 'Bans composting', 'Prohibits large generators from landfilling food waste', 'Bans food banks'],
        PHD: ['Food never affects climate', 'All models give identical answers', 'Results depend on assumptions about markets, food types and freed land', 'Models ignore land use entirely'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Compost turns peels and cores into rich soil for plants.',
        MIDDLE_SCHOOL: 'Without oxygen in landfills, rotting food releases methane, a strong greenhouse gas.',
        HIGH_SCHOOL: 'Gleaning rescues crops that would otherwise be left behind after harvest.',
        UNDERGRADUATE: 'A comparison group shows what would have happened anyway, so changes can be attributed to the intervention.',
        GRADUATE: 'Organics bans push large generators toward donation, composting or digestion instead of landfill.',
        PHD: 'Assumptions about price feedbacks, food types and land use strongly shape modeled mitigation.',
      },
    },
    {
      id: 'zwfq4',
      question: {
        ELEMENTARY: 'Which fruit should you eat first?',
        MIDDLE_SCHOOL: 'What does "first in, first out" mean in the kitchen?',
        HIGH_SCHOOL: 'Why is removing all food packaging not always better?',
        UNDERGRADUATE: 'Why express results per meal served rather than total tonnes?',
        GRADUATE: 'Why can redistribution alone be a limited solution?',
        PHD: 'Why is it contested whether inedible parts count as waste?',
      },
      options: {
        ELEMENTARY: ['The one that will last longest', 'The one in the freezer', 'The plastic one', 'The one that will spoil soonest'],
        MIDDLE_SCHOOL: ['Eat dessert first', 'Throw out the oldest food', 'Buy new food every day', 'Move older food to the front so it is eaten first'],
        HIGH_SCHOOL: ['Packaging is always healthy', 'Packaging is free', 'Packaging makes food taste better', 'Some packaging extends shelf life and prevents waste'],
        UNDERGRADUATE: ['Tonnes are hard to spell', 'Meals are heavier', 'Results look larger', 'Totals can change just because activity levels change'],
        GRADUATE: ['Food banks never accept donations', 'Redistribution is illegal', 'It always costs nothing', 'It manages surplus without addressing why surplus exists'],
        PHD: ['Inedible parts weigh nothing', 'Everyone agrees on the definition', 'Inedible parts do not exist', 'Definitions change estimates and the apparent potential for prevention'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Eating soft, ripe fruit first means it does not go bad.',
        MIDDLE_SCHOOL: 'Moving older food forward makes sure it is used before it spoils.',
        HIGH_SCHOOL: 'Removing protective packaging can sometimes increase food spoilage and waste.',
        UNDERGRADUATE: 'Normalizing by meals or households separates real improvement from changes in activity.',
        GRADUATE: 'Redistribution is valuable but does not fix overproduction or the income roots of food insecurity.',
        PHD: 'Whether peels and bones are included changes totals and how much waste appears preventable.',
      },
    },
    {
      id: 'zwfq5',
      question: {
        ELEMENTARY: 'What is a food bank?',
        MIDDLE_SCHOOL: 'What is meal planning?',
        HIGH_SCHOOL: 'What is a cold chain?',
        UNDERGRADUATE: 'Why does preventing waste of animal products often avoid more emissions per kilogram?',
        GRADUATE: 'What does donor liability protection do?',
        PHD: 'What is a multi-regional input-output analysis used for?',
      },
      options: {
        ELEMENTARY: ['A place that shares extra food with people who need it', 'A bank made of food', 'A place to buy candy', 'A garbage truck'],
        MIDDLE_SCHOOL: ['Deciding ahead what to cook so you buy only what you need', 'Eating at random times', 'Buying everything on sale', 'Cooking only once a year'],
        HIGH_SCHOOL: ['A series of refrigerated storage and transport steps', 'A metal chain for locking fridges', 'A frozen dessert', 'A type of farm machine'],
        UNDERGRADUATE: ['Their production generally has higher emission factors', 'They weigh less', 'They never spoil', 'They are always imported'],
        GRADUATE: ['Shields good-faith donors from liability if donated food causes harm', 'Requires donors to pay fines', 'Bans food donations', 'Makes food banks pay taxes'],
        PHD: ['Tracing resource use and emissions embedded in food through global supply chains', 'Counting meals in one kitchen', 'Measuring fridge temperature', 'Designing food labels'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Food banks collect extra food and give it to people and families who need it.',
        MIDDLE_SCHOOL: 'Planning meals and shopping with a list helps families avoid buying too much.',
        HIGH_SCHOOL: 'Cold chains keep perishable food cool from farm to store so it does not spoil.',
        UNDERGRADUATE: 'Animal products usually carry higher production emissions per kilogram than most vegetables.',
        GRADUATE: 'Liability protection removes a key fear that stops businesses from donating surplus.',
        PHD: 'MRIO models link economic sectors across regions to estimate embedded resources and emissions.',
      },
    },
  ],
}

export default expansion
