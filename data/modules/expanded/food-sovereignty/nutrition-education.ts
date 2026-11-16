import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'nutrition-education',
  lessons: [
    {
      id: 'fs-nut-1',
      title: 'Eating for Health',
      content: {
        ELEMENTARY: `
<h2>Food Helps You Grow Strong!</h2>
<p>Every time you eat, you are giving your body the building blocks it needs. Food helps you run, jump, think, learn and grow taller. Different foods do different jobs, so eating lots of kinds of food is like having a whole team working for you!</p>

<h3>Food Groups Are Like a Team</h3>
<p>Each food group has its own special job. When you eat from many groups, your body gets everything it needs.</p>
<ul>
<li><strong>Fruits:</strong> sweet foods like apples and berries that give you vitamins to help you stay well</li>
<li><strong>Vegetables:</strong> plant foods like carrots and spinach full of vitamins, minerals and fiber</li>
<li><strong>Grains:</strong> foods like bread, rice and oats that give you energy to play and learn</li>
<li><strong>Protein foods:</strong> foods like beans, eggs, fish and nuts that help build strong muscles</li>
<li><strong>Water:</strong> the best drink for your body, helping you stay cool and feel good</li>
</ul>

<h3>Eat the Rainbow</h3>
<p>Here is a fun game: try to eat foods of many colors! Red tomatoes, orange carrots, yellow corn, green peas, blue berries and purple cabbage all have different good things inside. When your plate looks like a rainbow, you are probably getting lots of what your body needs.</p>

<h3>Listen to Your Tummy</h3>
<p>Your body is smart. It tells you when you are hungry and when you are full. Eating slowly helps you notice these feelings. Sometimes foods like candy and soda are fun treats, but they are "sometimes foods," not "every day foods."</p>

<h3>Things You Can Do</h3>
<ol>
<li>Try one new fruit or vegetable this week, even just one bite.</li>
<li>Drink water when you are thirsty.</li>
<li>Help a grown-up wash vegetables or stir a pot.</li>
<li>Count how many colors are on your plate at dinner.</li>
<li>Grow a small plant, like herbs or beans, and taste what you grow.</li>
</ol>

<h3>Think About It</h3>
<p>Where does your favorite food come from? Did it grow on a tree, in the ground or on a farm? Learning about food helps you take care of your body and the earth at the same time.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Nutrition Basics: What Food Does for You</h2>
<p>Nutrition is the science of how food nourishes your body. The food you eat is broken down into nutrients, which your body uses for energy, growth and repair. During your teenage years your body grows quickly, so good nutrition matters a lot right now. Learning the basics helps you make choices that keep you feeling your best.</p>

<h3>The Big Three: Macronutrients</h3>
<p>Your body needs three main nutrients in large amounts. Scientists call them macronutrients.</p>
<ul>
<li><strong>Carbohydrates:</strong> the main source of energy for your brain and muscles, found in grains, fruits, vegetables and beans</li>
<li><strong>Proteins:</strong> nutrients that help build and repair muscles, skin, bones and other tissues in your body</li>
<li><strong>Fats:</strong> a concentrated energy source that also helps your body absorb certain vitamins and build cells</li>
<li><strong>Vitamins and minerals:</strong> nutrients needed in small amounts, such as calcium for bones and iron for blood</li>
<li><strong>Fiber:</strong> the part of plant foods your body cannot fully digest, which helps digestion and keeps you full</li>
<li><strong>Calorie:</strong> a unit that measures how much energy a food gives your body</li>
</ul>

<h3>Building a Balanced Plate</h3>
<p>Many countries use a picture of a plate to show a healthy meal. A common idea is that about half the plate is fruits and vegetables, about a quarter is whole grains, and about a quarter is protein foods, with water or milk to drink. You do not need to be perfect at every meal. What matters most is your overall pattern over days and weeks.</p>
<table>
<thead><tr><th>Part of the plate</th><th>Examples</th><th>Main job</th></tr></thead>
<tbody>
<tr><td>Vegetables and fruits</td><td>Broccoli, apples, peppers, bananas</td><td>Vitamins, minerals and fiber</td></tr>
<tr><td>Whole grains</td><td>Brown rice, oats, whole wheat bread</td><td>Lasting energy and fiber</td></tr>
<tr><td>Protein foods</td><td>Beans, lentils, eggs, fish, chicken, tofu</td><td>Growth and repair</td></tr>
<tr><td>Drinks</td><td>Water, milk or fortified alternatives</td><td>Hydration, calcium</td></tr>
</tbody>
</table>

<h3>Reading a Food Label</h3>
<p>Packaged foods often have a nutrition label. It tells you the serving size, the calories and how much of nutrients like sugar, salt (sodium), fiber and protein are in one serving. A smart trick is to check the serving size first, because a bag might contain several servings. Ingredients are listed from the largest amount to the smallest.</p>

<h3>Why Choices Are Not Just About Willpower</h3>
<p>What we eat depends on more than what we know. It depends on what foods are sold nearby, how much they cost, what our families cook and what ads we see. That is why communities work on things like school gardens, healthy school lunches and farmers markets. Knowing about nutrition helps you, and helping your community get good food helps everyone.</p>

<h3>Try This</h3>
<ol>
<li>Compare the labels of two breakfast cereals and find which has more fiber and less added sugar.</li>
<li>Plan one balanced dinner using the plate idea.</li>
<li>Keep a water bottle with you during the school day.</li>
</ol>
`,
        HIGH_SCHOOL: `
<h2>Nutrition Science, Dietary Guidelines and Health</h2>
<p>Nutrition science studies how nutrients and whole diets affect growth, health and disease. Its findings are summarized in dietary guidelines, which many governments publish to help people eat well. But knowing the science is only part of the story. Nutrition education is about turning knowledge into skills and habits, and about recognizing that the places where we live, learn and shop shape what we eat.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Dietary guidelines:</strong> evidence-based recommendations about healthy eating patterns, published by governments and health bodies</li>
<li><strong>Nutrient density:</strong> how many vitamins, minerals and other beneficial nutrients a food provides relative to its calories</li>
<li><strong>Whole foods:</strong> foods that are unprocessed or minimally processed, such as fresh vegetables, beans and whole grains</li>
<li><strong>Ultra-processed foods:</strong> industrial products made mostly from refined ingredients and additives, often high in sugar, salt or fat</li>
<li><strong>Micronutrient deficiency:</strong> a shortage of a vitamin or mineral, such as iron or vitamin A, that can harm health and development</li>
<li><strong>Chronic disease:</strong> a long-lasting condition such as type 2 diabetes or heart disease that diet can influence</li>
</ul>

<h3>What Dietary Guidelines Generally Agree On</h3>
<p>Guidelines differ between countries, reflecting local foods and cultures, but most share common themes:</p>
<ol>
<li>Eat plenty of vegetables, fruits, legumes and whole grains.</li>
<li>Choose a variety of protein sources, including plant proteins.</li>
<li>Limit added sugars, excess sodium and foods high in saturated fat.</li>
<li>Choose water as the main drink and limit sugary drinks.</li>
<li>Focus on overall eating patterns rather than single "superfoods."</li>
</ol>
<p>Some newer guidelines also mention sustainability, cooking at home and eating together, recognizing that how we eat matters as well as what we eat.</p>

<h3>Comparing Eating Patterns</h3>
<table>
<thead><tr><th>Pattern</th><th>Typical features</th><th>Common observations</th></tr></thead>
<tbody>
<tr><td>Mediterranean-style</td><td>Vegetables, legumes, olive oil, fish, whole grains</td><td>Widely associated with good heart health</td></tr>
<tr><td>Plant-forward</td><td>Mostly plant foods with smaller amounts of animal foods</td><td>Linked to lower risk of several chronic diseases and lower environmental impact</td></tr>
<tr><td>Traditional local diets</td><td>Varies by culture; often based on staple grains, legumes and local produce</td><td>Often nutritious when access to traditional foods is maintained</td></tr>
<tr><td>Diets high in ultra-processed foods</td><td>Packaged snacks, sugary drinks, fast food</td><td>Associated with higher risk of obesity and diet-related disease</td></tr>
</tbody>
</table>

<h3>The Double Burden of Malnutrition</h3>
<p>Malnutrition includes both undernutrition (too little food or too few nutrients) and overnutrition (excess calories, often with poor nutrient quality). Many communities, and even single households, face both at once. A person can consume enough calories yet still lack key micronutrients. Good nutrition education addresses quality, not just quantity.</p>

<h3>From Knowledge to Action</h3>
<p>Research consistently shows that information alone rarely changes eating habits. Effective nutrition education builds practical skills such as cooking, gardening, budgeting and reading labels, and it works alongside changes to the food environment, like healthier school meals and better access to fresh produce.</p>
<ul>
<li>Hands-on cooking classes build confidence with whole ingredients.</li>
<li>School gardens connect students to where food comes from.</li>
<li>Culturally relevant lessons respect family food traditions instead of dismissing them.</li>
<li>Media literacy helps people question food marketing and health claims.</li>
</ul>
`,
        UNDERGRADUATE: `
<h2>Designing and Evaluating Nutrition Education Programs</h2>
<p>Nutrition education is any combination of learning experiences designed to help people adopt eating behaviors that support health and well-being. Analyzing it well means asking three questions: what behavior are we trying to change, what determines that behavior, and how will we know whether the program worked? This lesson introduces behavior change theory, program design principles and evaluation methods.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Food literacy:</strong> the knowledge, skills and confidence needed to plan, select, prepare and eat food that supports health</li>
<li><strong>Self-efficacy:</strong> a person's belief in their ability to carry out a specific behavior, such as cooking a healthy meal</li>
<li><strong>Social cognitive theory:</strong> a framework explaining behavior as the interaction of personal factors, behavior and the environment</li>
<li><strong>Socio-ecological model:</strong> a framework showing that behavior is shaped by individual, interpersonal, organizational, community and policy levels</li>
<li><strong>Logic model:</strong> a diagram linking program inputs and activities to expected outputs, outcomes and long-term impacts</li>
<li><strong>Process evaluation:</strong> assessment of whether a program was delivered as planned and reached its intended audience</li>
</ul>

<h3>Why Knowledge Is Not Enough</h3>
<p>Early nutrition education often assumed a simple chain: give people information, their attitudes change, and then their behavior follows. Evaluations repeatedly found that this "knowledge deficit" approach produced gains in knowledge but small or short-lived changes in diet. Behavior is influenced by habits, taste, cost, time, social norms and the availability of food. Programs that are grounded in behavior change theory and target specific behaviors tend to perform better than general information campaigns.</p>

<h3>Comparing Program Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Main mechanism</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Classroom information sessions</td><td>Knowledge transfer</td><td>Low cost, wide reach</td><td>Weak link to behavior on its own</td></tr>
<tr><td>Cooking and food skills programs</td><td>Skill building, self-efficacy</td><td>Practical, engaging, builds confidence</td><td>Requires kitchens, ingredients and trained staff</td></tr>
<tr><td>Garden-based education</td><td>Exposure, experiential learning</td><td>Increases willingness to try vegetables</td><td>Seasonal, needs space and maintenance</td></tr>
<tr><td>Point-of-purchase prompts</td><td>Cues at the moment of choice</td><td>Acts where decisions happen</td><td>Effects often modest and context-dependent</td></tr>
<tr><td>Multi-component interventions</td><td>Education plus environmental change</td><td>Addresses several levels at once</td><td>Harder to implement and to attribute effects</td></tr>
</tbody>
</table>

<h3>Thinking Quantitatively About Effects</h3>
<p>When reading evaluations, distinguish between statistical significance and practical importance. A program might produce a statistically significant increase in fruit and vegetable intake that amounts to only a fraction of a serving per day. Consider also the time horizon: many effects fade after a program ends, so follow-up measurement matters. Self-reported dietary intake is prone to recall error and social desirability bias, so stronger studies use multiple methods or objective markers where feasible. Finally, ask who was reached; a program that works well for motivated volunteers may perform differently in the wider population.</p>

<h3>Applied Method: Planning a Program</h3>
<ol>
<li>Assess needs with the community, including cultural food practices and existing assets.</li>
<li>Choose a small number of specific, measurable target behaviors.</li>
<li>Identify the determinants of those behaviors using a theory such as social cognitive theory.</li>
<li>Design activities that address those determinants, emphasizing skills and practice.</li>
<li>Build a logic model linking activities to short-, medium- and long-term outcomes.</li>
<li>Plan both process and outcome evaluation before the program starts.</li>
<li>Pair education with changes to the food environment wherever possible.</li>
</ol>
`,
        GRADUATE: `
<h2>Nutrition Policy, Food Environments and Health Equity</h2>
<p>Diet-related disease is unevenly distributed. Lower-income communities and marginalized groups often experience higher rates of diet-related chronic disease, not because they lack knowledge or willpower, but because of the conditions in which they live. At the graduate level, nutrition education is analyzed as one tool within a broader policy mix that includes food environment interventions, economic measures and institutional food procurement. This lesson examines that mix through an equity lens.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Food environment:</strong> the physical, economic, political and sociocultural context in which people acquire and eat food</li>
<li><strong>Health equity:</strong> the condition in which everyone has a fair and just opportunity to be as healthy as possible</li>
<li><strong>Upstream intervention:</strong> a policy that acts on the underlying causes of behavior, such as pricing or availability, rather than on individuals</li>
<li><strong>Intervention-generated inequality:</strong> a widening of health gaps when a program benefits advantaged groups more than disadvantaged ones</li>
<li><strong>Public procurement:</strong> the purchasing of food by public institutions such as schools, hospitals and prisons</li>
<li><strong>Policy coherence:</strong> the alignment of policies across sectors so they reinforce rather than undermine shared goals</li>
</ul>

<h3>What Shapes Food Choices</h3>
<p>Food choices are shaped by availability, affordability, convenience, marketing exposure, cultural meaning and time. Neighborhoods with many convenience stores and few full-service grocers, heavy marketing of energy-dense products to children, and long working hours all push diets in predictable directions. Individual-level education that ignores these forces can inadvertently blame people for outcomes driven by structure.</p>

<h3>The Policy Toolkit</h3>
<table>
<thead><tr><th>Policy lever</th><th>Mechanism</th><th>Equity considerations</th></tr></thead>
<tbody>
<tr><td>Nutrition education in schools and benefit programs</td><td>Builds knowledge and skills</td><td>Can widen gaps if not paired with access; works best when culturally grounded</td></tr>
<tr><td>Healthy school meal standards</td><td>Changes what children are served every day</td><td>Often progressive, since lower-income children rely more on school meals</td></tr>
<tr><td>Taxes on sugary drinks</td><td>Raises the relative price of a target product</td><td>Debated as regressive in cost, though health benefits may be larger for lower-income groups</td></tr>
<tr><td>Fruit and vegetable incentives</td><td>Lowers the effective price of produce for program participants</td><td>Directly targets affordability for low-income households</td></tr>
<tr><td>Front-of-pack labeling</td><td>Simplifies information at the point of purchase</td><td>Easier to use than detailed labels across literacy levels</td></tr>
<tr><td>Restrictions on marketing to children</td><td>Reduces exposure to persuasive advertising</td><td>Protects groups with highest exposure</td></tr>
</tbody>
</table>

<h3>Economics and Political Economy</h3>
<p>Nutrition policy operates in a contested political space. Food and beverage industries are major economic actors with interests in how labeling, marketing and taxation are designed. Agricultural subsidies can shape relative prices in ways that do not align with dietary guidelines. Evaluating policy requires attention to who bears costs, who captures benefits, and how industry reformulation or substitution responds to regulation.</p>

<h3>Community Voice and Food Sovereignty</h3>
<p>Programs designed without community input often miss cultural food practices and local assets. Food sovereignty perspectives emphasize the right of communities to define their own food systems, including the revitalization of traditional and Indigenous foods. Nutrition education aligned with this view builds on existing knowledge, involves community members as educators, and supports local production and cooking skills rather than imposing a single model of "healthy eating."</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the target outcome and the population groups whose outcomes matter most.</li>
<li>Map determinants across individual, community and policy levels.</li>
<li>Combine education with at least one environmental or economic lever.</li>
<li>Assess differential effects by income, race, ethnicity and geography.</li>
<li>Examine implementation: reach, fidelity, cost and sustainability.</li>
<li>Check policy coherence with agriculture, trade and social protection policies.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Nutrition Behavior and Structural Determinants</h2>
<p>Nutrition research faces a persistent puzzle: interventions that change knowledge and intentions often fail to produce durable dietary change at the population level, while structural factors such as income, food prices and neighborhood environments are strongly associated with diet quality. Advanced research asks how to measure diet accurately, how to identify causal effects of complex interventions, how structural determinants operate, and how communities can lead the research itself. This lesson surveys methods, debates and open questions.</p>

<h3>Analytical Constructs</h3>
<ul>
<li><strong>Structural determinants:</strong> the economic, social and policy conditions, such as income distribution and labor markets, that shape access to food and health</li>
<li><strong>Complex intervention:</strong> a program with several interacting components whose effects depend on context and implementation</li>
<li><strong>Natural experiment:</strong> a study design exploiting a policy change or event that exposes some groups and not others, without researcher assignment</li>
<li><strong>Community-based participatory research:</strong> an approach in which community members share power over research questions, methods and use of findings</li>
<li><strong>Measurement error:</strong> differences between reported and true values, a major problem in self-reported dietary intake</li>
<li><strong>Systems science:</strong> methods such as system dynamics and agent-based modeling that represent feedbacks among many actors</li>
</ul>

<h3>Measurement Challenges</h3>
<p>Dietary assessment remains a methodological bottleneck. Food frequency questionnaires, 24-hour recalls and food records each carry distinct biases, and energy intake is commonly underreported. Biomarkers can validate some nutrients but not whole dietary patterns. Digital tools such as image-based food logging and purchase data offer new possibilities, but raise questions about representativeness, privacy and whether purchases reflect consumption. Measurement error can attenuate or distort estimated effects, which complicates comparisons across studies.</p>

<h3>Causal Inference for Complex Interventions</h3>
<p>Randomized trials of individual-level education are feasible, but many structural interventions, such as taxes, zoning or benefit changes, cannot be randomized. Researchers increasingly use quasi-experimental methods, including difference-in-differences, interrupted time series and synthetic control approaches, to evaluate policies. Each relies on assumptions, such as parallel trends, that must be argued and tested. Realist evaluation asks not only whether an intervention works but for whom, in what context and through which mechanisms.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Do food environment changes alone shift diets?</td><td>Studies of new supermarkets in underserved areas have often found limited dietary change, suggesting price, habit and preference also matter</td></tr>
<tr><td>Individual versus structural framing</td><td>Behavioral approaches risk victim-blaming; structural approaches can neglect agency and culture</td></tr>
<tr><td>How to define and classify processing</td><td>Classification systems for ultra-processed foods are debated regarding consistency and mechanism</td></tr>
<tr><td>Role of industry in research and policy</td><td>Funding and partnerships raise concerns about conflicts of interest</td></tr>
<tr><td>Universal versus targeted programs</td><td>Targeting may be efficient but can stigmatize and miss people near eligibility thresholds</td></tr>
</tbody>
</table>

<h3>Community-Based and Decolonizing Approaches</h3>
<p>Community-based participatory research positions communities as partners rather than subjects. In nutrition, this has supported programs centered on traditional foods, community kitchens and local food production. Researchers working with Indigenous communities increasingly follow principles of data sovereignty, which assert community authority over how data about them is collected and used. Methodological debates concern how to combine participatory processes with rigorous evaluation designs and how to value outcomes communities prioritize, such as cultural continuity, that standard dietary metrics may miss.</p>

<h3>Systems Approaches</h3>
<p>Diet emerges from interacting systems: agriculture, retail, marketing, income, time use and culture. System dynamics models and agent-based models allow researchers to explore feedbacks, such as how retailer stocking decisions respond to demand, and to test policy combinations virtually. These models are limited by data and by the difficulty of validating behavioral rules, and their outputs depend heavily on assumptions that should be made transparent.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Improved dietary measurement that combines biomarkers, digital data and validated self-report.</li>
<li>Evaluation of policy packages rather than single interventions, including interaction effects.</li>
<li>Methods to assess differential impacts and avoid intervention-generated inequalities.</li>
<li>Integration of sustainability and nutrition outcomes in the same evaluative frameworks.</li>
<li>Participatory designs that center community-defined outcomes while maintaining causal rigor.</li>
<li>Longitudinal studies of how structural changes in income and work affect diet over the life course.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fnutq1',
      question: {
        ELEMENTARY: 'What do fruits give you?',
        MIDDLE_SCHOOL: 'What do proteins do in your body?',
        HIGH_SCHOOL: 'What are dietary guidelines?',
        UNDERGRADUATE: 'What is food literacy?',
        GRADUATE: 'What is a food environment?',
        PHD: 'What are structural determinants of diet?',
      },
      options: {
        ELEMENTARY: ['Vitamins to help you stay well', 'Nothing at all', 'Only sugar', 'Just a pretty color'],
        MIDDLE_SCHOOL: ['Help build and repair muscles, skin and other tissues', 'Make you tired', 'Measure how much energy food has', 'Only add flavor'],
        HIGH_SCHOOL: ['Evidence-based recommendations about healthy eating patterns', 'Random suggestions from advertisers', 'Rules that ban all treats', 'Recipes printed on packages'],
        UNDERGRADUATE: ['The knowledge, skills and confidence to plan, choose, prepare and eat healthy food', 'The ability to read nutrition labels only', 'A reading test about cookbooks', 'Knowing calorie counts by heart'],
        GRADUATE: ['The physical, economic, political and sociocultural context in which people get and eat food', 'Only the inside of a kitchen', 'A single grocery store', 'The temperature at which food is stored'],
        PHD: ['Economic, social and policy conditions that shape access to food and health', 'Only individual choices', 'The chemical structure of nutrients', 'Random factors with no pattern'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fruits give you vitamins that help your body stay healthy and strong.',
        MIDDLE_SCHOOL: 'Proteins help build and repair muscles, skin, bones and other tissues.',
        HIGH_SCHOOL: 'Dietary guidelines summarize evidence into recommendations about healthy eating patterns.',
        UNDERGRADUATE: 'Food literacy combines knowledge, practical skills and confidence across planning, choosing and preparing food.',
        GRADUATE: 'The food environment is the wider context, including prices, availability and marketing, that shapes food choices.',
        PHD: 'Structural determinants such as income, labor markets and policy shape what food people can access.',
      },
    },
    {
      id: 'fnutq2',
      question: {
        ELEMENTARY: 'What does "eat the rainbow" mean?',
        MIDDLE_SCHOOL: 'On a balanced plate, about how much should be fruits and vegetables?',
        HIGH_SCHOOL: 'What does nutrient density describe?',
        UNDERGRADUATE: 'What is self-efficacy?',
        GRADUATE: 'What is intervention-generated inequality?',
        PHD: 'What is a natural experiment?',
      },
      options: {
        ELEMENTARY: ['Eat only red foods', 'Eat candy of every color', 'Eat fruits and vegetables of many colors', 'Eat outside when it rains'],
        MIDDLE_SCHOOL: ['None of it', 'A tiny corner', 'About half', 'All of it'],
        HIGH_SCHOOL: ['How heavy a food is', 'How much a food costs', 'How many nutrients a food provides relative to its calories', 'How long a food lasts on a shelf'],
        UNDERGRADUATE: ['A food safety rule', 'A type of vitamin', 'A belief in your own ability to carry out a specific behavior', 'A cooking temperature'],
        GRADUATE: ['A program that has no effect on anyone', 'A tax on all foods', 'A widening of health gaps when a program benefits advantaged groups more', 'A rule that guarantees equal outcomes'],
        PHD: ['A laboratory study of plant growth', 'A trial where researchers randomly assign participants', 'A study using a policy change or event that exposes some groups and not others', 'A survey of natural food brands'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Different colored fruits and vegetables have different good things inside, so many colors help your body.',
        MIDDLE_SCHOOL: 'A common guide is to fill about half your plate with fruits and vegetables.',
        HIGH_SCHOOL: 'Nutrient-dense foods give many vitamins and minerals for their calories.',
        UNDERGRADUATE: 'Self-efficacy is confidence in your ability to do something, such as cooking a healthy meal, and it predicts behavior.',
        GRADUATE: 'If advantaged groups benefit more from a program, the gap between groups can grow even as averages improve.',
        PHD: 'Natural experiments exploit exposures the researcher did not assign, such as a new tax in one city.',
      },
    },
    {
      id: 'fnutq3',
      question: {
        ELEMENTARY: 'What is the best drink for your body most of the time?',
        MIDDLE_SCHOOL: 'What should you check first on a nutrition label?',
        HIGH_SCHOOL: 'What is the double burden of malnutrition?',
        UNDERGRADUATE: 'Why did the knowledge deficit approach often fail to change diets?',
        GRADUATE: 'Why are healthy school meal standards often considered progressive?',
        PHD: 'Why is self-reported dietary intake a methodological problem?',
      },
      options: {
        ELEMENTARY: ['Soda', 'Water', 'Syrup', 'Milkshakes'],
        MIDDLE_SCHOOL: ['The color of the box', 'The serving size', 'The brand logo', 'The price sticker'],
        HIGH_SCHOOL: ['Eating two meals a day', 'Undernutrition and overnutrition occurring together', 'Paying twice for food', 'Eating only two food groups'],
        UNDERGRADUATE: ['Information alone rarely overcomes habits, cost, time, norms and food availability', 'People cannot learn about nutrition', 'Knowledge always changes behavior immediately', 'Programs were too hands-on'],
        GRADUATE: ['They cost families more money', 'Lower-income children rely more on school meals, so they benefit more', 'They only apply to private schools', 'They remove all fruit from menus'],
        PHD: ['It is always perfectly accurate', 'It is prone to recall error and underreporting, which can distort estimated effects', 'It cannot be collected at all', 'It only measures water intake'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Water keeps you cool and feeling good, and it has no added sugar.',
        MIDDLE_SCHOOL: 'Check the serving size first, because a package may contain several servings.',
        HIGH_SCHOOL: 'Many communities face both too little nutrition and excess calories with poor quality at the same time.',
        UNDERGRADUATE: 'Evaluations found knowledge gains but small diet changes, because many other factors drive eating behavior.',
        GRADUATE: 'Because lower-income children depend more on school meals, better standards tend to help them most.',
        PHD: 'People misremember and underreport intake, and these errors weaken or bias study results.',
      },
    },
    {
      id: 'fnutq4',
      question: {
        ELEMENTARY: 'How does your body tell you that you have eaten enough?',
        MIDDLE_SCHOOL: 'Which nutrient is the main energy source for your brain and muscles?',
        HIGH_SCHOOL: 'Which approach usually makes nutrition education more effective?',
        UNDERGRADUATE: 'What is a logic model used for?',
        GRADUATE: 'What is an upstream intervention?',
        PHD: 'What does realist evaluation ask?',
      },
      options: {
        ELEMENTARY: ['Your ears get cold', 'Your hair grows', 'Your nose itches', 'You feel full in your tummy'],
        MIDDLE_SCHOOL: ['Fiber', 'Water', 'Calcium', 'Carbohydrates'],
        HIGH_SCHOOL: ['Giving out pamphlets only', 'Telling people to try harder', 'Banning all snacks forever', 'Building practical skills alongside changes to the food environment'],
        UNDERGRADUATE: ['Counting calories in a meal', 'Ranking foods by taste', 'Testing food for bacteria', 'Linking program inputs and activities to expected outcomes and impacts'],
        GRADUATE: ['A lesson taught upstairs', 'A program only for rivers', 'Advice given to one person at a time', 'A policy acting on underlying causes such as pricing or availability'],
        PHD: ['Only whether the average effect is positive', 'Which brand of food is best', 'How many people attended', 'For whom an intervention works, in what context and through which mechanisms'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Your body sends a full feeling, and eating slowly helps you notice it.',
        MIDDLE_SCHOOL: 'Carbohydrates are the main fuel for your brain and muscles.',
        HIGH_SCHOOL: 'Skills like cooking and gardening, plus better access to healthy food, work better than information alone.',
        UNDERGRADUATE: 'A logic model shows how activities are expected to lead to short-, medium- and long-term outcomes.',
        GRADUATE: 'Upstream interventions change the conditions that shape behavior rather than targeting individuals.',
        PHD: 'Realist evaluation focuses on context and mechanisms, not just whether something works on average.',
      },
    },
    {
      id: 'fnutq5',
      question: {
        ELEMENTARY: 'Which is a good way to learn about food?',
        MIDDLE_SCHOOL: 'Why are food choices not just about willpower?',
        HIGH_SCHOOL: 'Why should nutrition lessons be culturally relevant?',
        UNDERGRADUATE: 'What does process evaluation assess?',
        GRADUATE: 'How does a food sovereignty perspective shape nutrition education?',
        PHD: 'What is community-based participatory research?',
      },
      options: {
        ELEMENTARY: ['Help a grown-up wash vegetables or grow a plant', 'Never look at your food', 'Only eat food from a box', 'Skip every meal'],
        MIDDLE_SCHOOL: ['Because nearby stores, prices, family habits and ads also shape what we eat', 'Because willpower does not exist', 'Because food has no effect on health', 'Because everyone eats the same food'],
        HIGH_SCHOOL: ['They respect family food traditions and are more likely to be used', 'Culture has nothing to do with food', 'All cultures eat exactly the same way', 'Only one diet can ever be healthy'],
        UNDERGRADUATE: ['Whether a program was delivered as planned and reached its audience', 'Only the final weight of participants', 'The taste of school lunches', 'The price of groceries'],
        GRADUATE: ['It builds on community knowledge, traditional foods and local production', 'It imposes one model of healthy eating everywhere', 'It ignores culture to focus on calories', 'It relies only on industry advertising'],
        PHD: ['Research in which community members share power over questions, methods and use of findings', 'Research that excludes community input', 'A survey sent to random addresses', 'A study run entirely by food companies'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Washing vegetables, cooking with grown-ups and growing plants are fun ways to learn about food.',
        MIDDLE_SCHOOL: 'What is sold nearby, prices, family cooking and advertising all influence food choices.',
        HIGH_SCHOOL: 'Lessons that honor family traditions are more respectful and more likely to change habits.',
        UNDERGRADUATE: 'Process evaluation checks reach and fidelity, helping explain why outcomes did or did not change.',
        GRADUATE: 'Food sovereignty centers community control, traditional foods and local skills rather than one imposed model.',
        PHD: 'In participatory research, communities are partners who share power throughout the research process.',
      },
    },
  ],
}

export default expansion
