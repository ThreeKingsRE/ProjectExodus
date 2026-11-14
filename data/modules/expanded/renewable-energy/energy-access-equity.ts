import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-access-equity',
  lessons: [
    {
      id: 're-access-1',
      title: 'Energy for All',
      content: {
        ELEMENTARY: `
<h2>Energy for Everyone</h2>
<p>When you flip a switch, a light comes on. When you are hungry, someone cooks food on a stove. It feels normal, but not every child in the world can do this. Many families still live without electricity, and many cook over smoky fires inside their homes. Let's learn why, and how clean energy can help everyone.</p>

<h3>What Is Energy Access?</h3>
<p>Energy access means having the energy you need for a safe, healthy life. It means lights to read by at night, a clean way to cook, and power for things like a fridge, a fan or a phone charger.</p>
<ul>
<li><strong>Electricity:</strong> the energy that flows through wires to make lights, fans and fridges work</li>
<li><strong>Clean cooking:</strong> cooking food in a way that does not fill the home with smoke</li>
<li><strong>Solar lamp:</strong> a small light that charges in the sunshine during the day and glows at night</li>
</ul>

<h3>Why Do Some Families Not Have It?</h3>
<p>Some villages are far away from big power lines. Building long wires over mountains, deserts or forests costs a lot of money. Some families live close to the wires but cannot afford to pay for electricity. Others get power that turns off often, so they cannot count on it.</p>

<h3>Smoke in the Kitchen</h3>
<p>Imagine cooking every meal over a fire of wood or charcoal inside a small room. The smoke makes eyes sting and makes it hard to breathe. Children and mothers who spend time near the fire are often hurt the most. Cleaner stoves help families breathe easier.</p>

<h3>Sunshine to the Rescue</h3>
<p>The sun shines almost everywhere, even in places with no power lines. A solar panel on a roof can charge a battery, and the battery can run lights and a phone charger at night. A group of houses can even share a small set of solar panels, like a tiny power station just for their village.</p>
<ul>
<li><strong>Solar panel:</strong> a flat sheet that turns sunlight into electricity</li>
<li><strong>Battery:</strong> a box that saves electricity so it can be used later, even at night</li>
</ul>

<h3>Fair Means Everyone</h3>
<p>Being fair means making sure nobody is left out. Clean energy should help the families who need it most, not only people who already have plenty.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Turn off lights you are not using, and remember that energy is precious.</li>
<li>Talk with your family about how lucky it is to have lights and a stove.</li>
<li>Draw a picture of a village lit up by the sun and share it with your class.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>Why Some People Live Without Modern Energy</h2>
<p>Hundreds of millions of people around the world still have no electricity at home, and a much larger number, measured in billions, cook with wood, charcoal, dung or kerosene. These numbers have been shrinking over time, but progress is uneven. Understanding who lacks energy, and why, is the first step toward fixing the problem fairly.</p>

<h3>Two Kinds of Energy Access</h3>
<p>Experts usually talk about two separate goals:</p>
<ol>
<li><strong>Electricity access:</strong> having a reliable supply of electricity for lights, phones, fans, fridges and small businesses.</li>
<li><strong>Clean cooking access:</strong> cooking with fuels and stoves that do not produce harmful smoke indoors, such as electric cookers, gas (LPG), biogas or improved stoves.</li>
</ol>
<p>A family can have one without the other. Many homes have a light bulb but still cook over an open fire, because cooking takes much more energy than lighting.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Energy poverty:</strong> not having enough affordable, reliable energy to meet basic needs like light, cooking and heating</li>
<li><strong>The grid:</strong> the large network of power plants and wires that carries electricity across a region</li>
<li><strong>Off-grid:</strong> getting electricity without being connected to the main grid, for example from solar panels</li>
<li><strong>Household air pollution:</strong> smoke and fumes inside a home, mostly from cooking or heating with solid fuels</li>
<li><strong>Affordability:</strong> whether a family can pay for energy without giving up other essentials like food or school</li>
<li><strong>Reliability:</strong> how often the power stays on when people need it</li>
</ul>

<h3>Where Is Energy Poverty?</h3>
<p>Most people without electricity live in rural areas, and the largest share today is in sub-Saharan Africa. Energy poverty also exists in wealthy countries, where some households struggle to pay heating or cooling bills and may have to choose between staying warm and buying food.</p>

<h3>Ways to Bring Power</h3>
<table>
<thead><tr><th>Option</th><th>How it works</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Grid extension</td><td>Building new power lines out to more homes</td><td>Towns close to existing lines</td></tr>
<tr><td>Mini-grid</td><td>A small local power system, often solar with batteries, serving a village</td><td>Clusters of homes and shops far from the grid</td></tr>
<tr><td>Solar home system</td><td>Panels, a battery and lights for one household</td><td>Scattered homes in remote places</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Electricity lets students study after dark, lets clinics keep vaccines cold, and lets small shops stay open longer. Clean cooking protects lungs and saves the hours that people, often women and girls, spend gathering firewood. When energy reaches everyone, health, education and income can all improve together.</p>
`,
        HIGH_SCHOOL: `
<h2>Energy Poverty, Off-Grid Solutions and a Just Transition</h2>
<p>Access to modern energy is so closely tied to health, education and income that it is recognized as one of the global Sustainable Development Goals: affordable, reliable, sustainable and modern energy for all. At the same time, the world must cut greenhouse gas emissions. The challenge of this era is to deliver both goals at once, and to do it fairly.</p>

<h3>The Shape of Energy Poverty</h3>
<p>Energy poverty is not a single yes-or-no condition. A household might have a wire to the grid but receive power only a few hours a day, or have electricity that is too expensive to use for anything beyond a light bulb. That is why experts increasingly measure access in tiers, from basic lighting up to reliable power for appliances and productive work.</p>
<ul>
<li><strong>Energy poverty:</strong> lacking affordable, reliable access to the energy services needed for health and well-being</li>
<li><strong>Mini-grid:</strong> a small, locally operated electricity network serving a community, often powered by solar with battery storage</li>
<li><strong>Solar home system:</strong> a package of solar panel, battery and appliances that powers a single household</li>
<li><strong>Productive use:</strong> using electricity to earn income, for example for milling grain, irrigation pumps or refrigeration</li>
<li><strong>Just transition:</strong> moving to clean energy in a way that is fair to workers, communities and people with low incomes</li>
<li><strong>Clean cooking:</strong> cooking with stoves and fuels that greatly reduce harmful indoor smoke</li>
</ul>

<h3>Comparing Off-Grid and Grid Solutions</h3>
<table>
<thead><tr><th>Solution</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Grid extension</td><td>Can support heavy loads; cheapest per unit where many customers live close together</td><td>Slow and costly to reach remote, scattered homes; depends on the reliability of the national grid</td></tr>
<tr><td>Mini-grid</td><td>Supports businesses and community services; can later connect to the main grid</td><td>Needs good local management and enough paying customers</td></tr>
<tr><td>Solar home system</td><td>Fast to deploy, modular, no wires needed</td><td>Limited power; usually cannot run large appliances or machinery</td></tr>
</tbody>
</table>

<h3>Why Solar Changed the Picture</h3>
<p>Solar panels, LED lights and lithium batteries have all become far cheaper over the past two decades. Combined with mobile phones and mobile money, this allowed companies to sell solar kits that customers pay off in small amounts. In many remote places, off-grid solar is now the quickest and least expensive way to deliver a first level of electricity access.</p>

<h3>The Cooking Challenge</h3>
<p>Clean cooking has advanced more slowly than electricity. Stoves must fit local foods and cooking habits, fuels must be affordable every day, and supply chains must reach rural markets. Household smoke from solid fuels is a major cause of illness worldwide, so progress here saves lives directly.</p>

<h3>What Makes a Transition Just?</h3>
<p>A just transition asks who benefits and who pays. Questions include whether low-income households can afford new technologies, whether workers in coal or oil regions are supported to find new jobs, and whether communities have a real say in projects built near them. In wealthier countries, it also means helping households with high energy bills afford efficiency upgrades, not only those who can pay upfront.</p>

<h3>Solutions to Explore</h3>
<ol>
<li>Plan electrification using the cheapest option for each area: grid, mini-grid or standalone solar.</li>
<li>Pair electricity with productive uses so that power also creates income.</li>
<li>Design subsidies so they reach the poorest households, not just those already connected.</li>
<li>Involve women and local leaders in planning, since they often know community energy needs best.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Measuring and Delivering Energy Access</h2>
<p>Universal energy access is a measurable development target, yet the way access is defined strongly shapes what gets built and who counts as served. This lesson examines access metrics, the main delivery models for electricity and clean cooking, and the financing mechanisms that determine whether services reach the poorest households and remain viable over time.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Binary access metric:</strong> a simple count of whether a household has an electricity connection, regardless of its quality or use</li>
<li><strong>Multi-tier framework:</strong> a measurement approach that rates access across tiers using attributes such as capacity, duration, reliability, quality, affordability, legality and safety</li>
<li><strong>Least-cost electrification planning:</strong> geospatial analysis that assigns each settlement to grid, mini-grid or standalone supply based on cost and demand</li>
<li><strong>Pay-as-you-go:</strong> a model in which customers pay for solar equipment or service in small instalments, usually through mobile money, with remote lockout if payments stop</li>
<li><strong>Results-based financing:</strong> subsidies paid to providers only after verified outcomes, such as confirmed connections or sales</li>
<li><strong>Energy burden:</strong> the share of household income spent on energy, a common indicator of affordability</li>
</ul>

<h3>Why Metrics Matter</h3>
<p>A binary count can declare a village electrified once a single line arrives, even if most households cannot afford to connect or the supply fails each evening. Tiered measurement reveals these gaps and shifts attention from connections to services actually used. The trade-off is cost and complexity: tiered surveys require more data, and comparisons across countries depend on consistent methods.</p>

<h3>Delivery Models Compared</h3>
<table>
<thead><tr><th>Model</th><th>Typical cost driver</th><th>Main risk</th><th>Revenue logic</th></tr></thead>
<tbody>
<tr><td>Grid extension by a utility</td><td>Distance and customer density; cost per connection rises steeply in sparse areas</td><td>Utility finances weakened by low consumption from new customers</td><td>Regulated tariffs, often cross-subsidized</td></tr>
<tr><td>Private or community mini-grid</td><td>Generation and storage capital; customer acquisition</td><td>Low demand, tariff regulation, risk of the main grid arriving</td><td>Cost-reflective tariffs, sometimes with connection subsidies</td></tr>
<tr><td>Pay-as-you-go solar home systems</td><td>Hardware, distribution and collections</td><td>Customer default and currency risk</td><td>Instalment payments over months or years</td></tr>
<tr><td>Clean cooking programs</td><td>Stove and fuel cost; distribution networks</td><td>Low sustained adoption ("stacking" with old fuels)</td><td>Product sales, fuel sales, carbon or results-based payments</td></tr>
</tbody>
</table>

<h3>Reasoning About Economics</h3>
<p>Grid extension has high fixed cost per kilometer, so cost per connection falls as density rises. Standalone solar has roughly constant cost per household regardless of location, which is why it wins in sparse areas. Mini-grids sit in between and depend heavily on load: a mini-grid serving only lighting has poor economics, while one anchored by a mill, a clinic or a telecom tower can spread fixed costs over more kilowatt-hours. This is why practitioners stress demand stimulation and productive use alongside supply.</p>

<h3>Financing Mechanisms</h3>
<p>Because access customers often have low and irregular incomes, the central financing challenge is turning large upfront costs into small, predictable payments. Instruments include consumer credit through pay-as-you-go, concessional loans to providers, connection subsidies, results-based grants and, in some programs, revenue from carbon credits. Each mechanism shifts risk among customers, companies, governments and donors in different ways.</p>

<h3>Applied Checklist: Assessing an Access Program</h3>
<ol>
<li>Define access using a tiered metric and set targets for service quality, not only connections.</li>
<li>Map settlements and demand to identify the least-cost technology for each area.</li>
<li>Estimate energy burden at the proposed tariff for low-income households.</li>
<li>Identify anchor loads and productive uses that improve viability.</li>
<li>Check how subsidies are targeted and whether they reach the poorest quintile.</li>
<li>Plan for maintenance, battery replacement and end-of-life recycling.</li>
</ol>
`,
        GRADUATE: `
<h2>Energy Justice, Procedural Equity and Community Energy</h2>
<p>Energy access programs and decarbonization policies both distribute benefits and burdens. Energy justice offers a framework for asking who gains, who pays, who decides and who is recognized in those processes. This lesson applies that framework to access, to transitions in wealthy and emerging economies, and to community energy as an institutional alternative.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Distributional justice:</strong> concern with how the costs, benefits and risks of energy systems are shared across groups and places</li>
<li><strong>Procedural justice:</strong> concern with fair, informed and meaningful participation in energy decisions, including access to information and appeal</li>
<li><strong>Recognition justice:</strong> acknowledging groups whose needs, identities or rights have been overlooked, such as Indigenous peoples, women or renters</li>
<li><strong>Community energy:</strong> energy projects owned, governed or substantially controlled by local residents or cooperatives</li>
<li><strong>Free, prior and informed consent:</strong> a principle requiring that Indigenous peoples agree to projects affecting their lands before they proceed, with full information</li>
<li><strong>Regressive cost recovery:</strong> charging policy costs in a way that takes a larger share of income from poorer households than from richer ones</li>
</ul>

<h3>Distributional Questions in Transition Policy</h3>
<p>Many clean energy policies have distributional side effects. Subsidies for rooftop solar, electric vehicles or heat pumps often flow first to homeowners with capital and good credit. If program costs are recovered through per-unit electricity charges, non-participants, including renters and low-income households, may pay more. Carbon pricing raises fuel costs, which can be regressive unless revenue is returned through dividends or targeted support. Well-designed policy can offset these effects, but only if they are measured.</p>

<table>
<thead><tr><th>Policy</th><th>Potential equity risk</th><th>Common mitigation</th></tr></thead>
<tbody>
<tr><td>Rooftop solar incentives</td><td>Benefits concentrate among wealthier homeowners</td><td>Community solar carve-outs, low-income incentive tiers</td></tr>
<tr><td>Carbon pricing</td><td>Higher fuel costs take a bigger share of low incomes</td><td>Revenue recycling through rebates or dividends</td></tr>
<tr><td>Fossil fuel subsidy reform</td><td>Short-term price shocks for poor households</td><td>Phased reform with targeted cash transfers</td></tr>
<tr><td>Coal plant retirement</td><td>Job and tax-base losses in specific regions</td><td>Worker transition support and regional economic diversification</td></tr>
</tbody>
</table>

<h3>Procedure and Participation</h3>
<p>Large renewable projects often fail or face delays not on technical grounds but because communities were consulted late or superficially. Procedural equity calls for early engagement, transparent information on impacts and benefits, accessible formats and languages, and real ability to influence siting and design. Where Indigenous lands are involved, consent principles and benefit-sharing agreements are central. Meaningful participation also reduces long-term project risk.</p>

<h3>Community Energy as an Institutional Model</h3>
<p>Community energy, including cooperatives, municipal utilities and community-owned mini-grids, can keep revenues local, build skills and increase acceptance. Its challenges are real: limited access to capital, volunteer fatigue, complex regulation and the risk that participation is dominated by better-resourced residents. Supportive policies include simplified grid connection, standardized contracts, technical assistance and dedicated finance.</p>

<h3>Gender and Access</h3>
<p>Women frequently bear the time burden of fuel collection and the health burden of household smoke, yet are underrepresented in energy planning and enterprises. Gender-responsive programs collect sex-disaggregated data, include women in design and distribution networks, and target appliances and services that reduce unpaid labor.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map who benefits and who bears costs, including non-participants and future ratepayers.</li>
<li>Assess energy burden and affordability before and after the policy.</li>
<li>Examine who was involved in decisions, how, and at what stage.</li>
<li>Identify groups not recognized in planning data or governance bodies.</li>
<li>Design and monitor mitigation measures with clear indicators.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Energy Access and Inclusive Transitions</h2>
<p>Research on energy access has moved from counting connections toward understanding pathways: how households move up the energy ladder, how access interacts with livelihoods and climate goals, and how transitions redistribute welfare. The field draws on development economics, engineering systems modeling, political economy and justice theory, and its central debates concern measurement, causality and the politics of who sets the agenda.</p>

<h3>Methodological Toolkit</h3>
<ul>
<li><strong>Geospatial electrification models:</strong> optimization tools that combine population, demand and infrastructure data to compare least-cost supply options across space</li>
<li><strong>Randomized and quasi-experimental evaluation:</strong> methods that estimate the causal effect of electrification on outcomes such as income, education and health</li>
<li><strong>Incidence analysis:</strong> techniques that trace how the costs and benefits of a policy fall across income groups and regions</li>
<li><strong>Energy stacking analysis:</strong> study of how households use several fuels and technologies at once rather than switching cleanly from one to another</li>
<li><strong>Capabilities approach:</strong> a normative framework that judges energy systems by the real freedoms and opportunities they enable for people</li>
<li><strong>Energy leapfrogging:</strong> the hypothesis that late-developing regions can bypass fossil-heavy and centralized stages and adopt distributed renewables directly</li>
</ul>

<h3>The Impact Debate</h3>
<p>Early program evaluations often assumed large development gains from electrification. Some rigorous studies of rural grid connections found smaller short-run effects on income than expected, especially where demand was low and complementary inputs such as credit, markets and appliances were missing. Other work finds meaningful effects on education, time use or enterprise in particular settings. The debate centers on external validity, the time horizon of measurement, and whether access should be justified by economic returns or treated as a basic right.</p>

<h3>Modeling Access Within Transition Pathways</h3>
<p>Global decarbonization models historically represented developing regions coarsely and sometimes assumed demand growth that was low relative to development aspirations. Newer work examines the emissions implications of meeting a decent standard of living for all, generally finding that universal basic energy services are compatible with climate goals because the added demand is small relative to global consumption. Contested questions remain about how much energy is needed for decent living, and how to reconcile this with consumption in high-income groups.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>What threshold of service counts as access</td><td>Low thresholds make targets achievable but can lock in minimal service</td></tr>
<tr><td>Off-grid solar as a stepping stone or a substitute</td><td>Standalone systems may reduce political pressure for grid investment</td></tr>
<tr><td>Role of gas in clean cooking and power</td><td>Near-term health gains versus long-term emissions lock-in</td></tr>
<tr><td>Private provision versus public utilities</td><td>Efficiency and speed versus universal service obligations and affordability</td></tr>
<tr><td>Leapfrogging feasibility</td><td>Distributed systems may struggle to supply industrial loads that drive development</td></tr>
</tbody>
</table>

<h3>Distributional Impacts in Advanced Economies</h3>
<p>In high-income countries, research focuses on energy burden, fuel poverty indicators, the incidence of policy costs in tariffs, and spatial patterns of adoption for rooftop solar, heat pumps and electric vehicles. Questions include whether electrification leaves remaining gas customers with rising fixed costs, a dynamic sometimes described as a utility death spiral for gas networks, and how tariff design can protect vulnerable households.</p>

<h3>Political Economy and Knowledge</h3>
<p>Critical scholarship asks who defines access goals, whose data underpin plans, and how donor and investor priorities shape technology choices. It highlights the value of local and Indigenous knowledge about resources and community needs, and the risk that externally designed programs neglect maintenance, local institutions and accountability.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Long-run panel studies of electrification and clean cooking that capture slow-moving development effects.</li>
<li>Integrated models linking access, productive use and grid planning under demand uncertainty.</li>
<li>Methods for measuring reliability and quality at scale using smart meters and remote sensing.</li>
<li>Incidence analysis of transition policies across income, gender, tenure and geography.</li>
<li>Governance research on community ownership, consent and benefit-sharing in renewable projects.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'raccessq1',
      question: {
        ELEMENTARY: 'What does energy access mean?',
        MIDDLE_SCHOOL: 'What is energy poverty?',
        HIGH_SCHOOL: 'What is a mini-grid?',
        UNDERGRADUATE: 'What is pay-as-you-go in the context of off-grid solar?',
        GRADUATE: 'What is procedural justice in energy decisions?',
        PHD: 'What is energy leapfrogging?',
      },
      options: {
        ELEMENTARY: ['Having the energy you need for light, clean cooking and staying healthy', 'Having a password to turn on lights', 'Only big cities getting power', 'Using as much energy as possible'],
        MIDDLE_SCHOOL: ['Not having enough affordable, reliable energy for basic needs', 'Having too much electricity at home', 'Getting energy for free', 'A type of power plant'],
        HIGH_SCHOOL: ['A small, locally operated electricity network serving a community', 'A battery for a single phone', 'The national transmission grid', 'A map of power lines'],
        UNDERGRADUATE: ['Customers pay for solar equipment or service in small instalments, often by mobile money', 'Customers pay the full cost in one payment upfront', 'Energy is provided free by the government', 'Customers pay only when the grid fails'],
        GRADUATE: ['Fair, informed and meaningful participation in energy decisions', 'Focusing only on final outcomes', 'Letting engineers decide alone', 'Making decisions at random'],
        PHD: ['Late-developing regions adopting distributed renewables directly, bypassing fossil-heavy stages', 'Copying the exact energy history of industrialized countries', 'Jumping between energy suppliers each month', 'Avoiding all development'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Energy access means having lights, a clean way to cook, and power for things families need.',
        MIDDLE_SCHOOL: 'Energy poverty means a family cannot get enough affordable, reliable energy for light, cooking and heating.',
        HIGH_SCHOOL: 'Mini-grids are small local networks, often solar with batteries, that serve villages away from the main grid.',
        UNDERGRADUATE: 'Pay-as-you-go turns a large upfront cost into small instalments, with remote lockout if payments stop.',
        GRADUATE: 'Procedural justice is about who takes part in decisions, when, and with what information and influence.',
        PHD: 'Leapfrogging is the hypothesis that regions can skip fossil-heavy stages and go straight to distributed renewables.',
      },
    },
    {
      id: 'raccessq2',
      question: {
        ELEMENTARY: 'Why is cooking over a fire inside the home a problem?',
        MIDDLE_SCHOOL: 'Why can a family have a light bulb but still cook over an open fire?',
        HIGH_SCHOOL: 'Why is off-grid solar often the quickest way to bring first electricity to remote homes?',
        UNDERGRADUATE: 'Why does standalone solar tend to win over grid extension in sparse areas?',
        GRADUATE: 'Why can rooftop solar incentives raise equity concerns?',
        PHD: 'What have some rigorous evaluations of rural grid connections found?',
      },
      options: {
        ELEMENTARY: ['It makes the food taste too sweet', 'The smoke makes it hard to breathe and can make people sick', 'Fires are too quiet', 'It uses too much water'],
        MIDDLE_SCHOOL: ['Light bulbs make cooking illegal', 'Cooking needs much more energy than lighting', 'Fires are always free and clean', 'Stoves only work at night'],
        HIGH_SCHOOL: ['Solar kits never need batteries', 'Cheaper panels, LEDs, batteries and mobile money made small kits fast and affordable to deploy', 'Governments ban power lines in rural areas', 'Solar works only in cities'],
        UNDERGRADUATE: ['Solar panels are free in rural areas', 'Grid cost per connection rises steeply as density falls, while solar cost per home stays roughly constant', 'Grid electricity cannot travel far', 'Rural homes use more electricity than cities'],
        GRADUATE: ['Rooftop solar increases air pollution', 'Benefits flow first to homeowners with capital, while costs may fall on non-participants', 'Incentives are only offered to renters', 'Rooftop solar cannot be connected to the grid'],
        PHD: ['Electrification always doubles income within a year', 'Short-run income effects were sometimes smaller than expected where demand and complementary inputs were low', 'Electricity has no effect on any outcome', 'All studies agree on large immediate gains'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Smoke inside a small room stings eyes and hurts lungs, especially for children and the people cooking.',
        MIDDLE_SCHOOL: 'A light uses a little energy, but cooking needs much more, so families often keep using wood or charcoal.',
        HIGH_SCHOOL: 'Falling costs of solar, LEDs and batteries, plus mobile payments, made kits affordable and quick to install.',
        UNDERGRADUATE: 'Grid extension has high fixed costs per kilometer; in sparse areas each connection becomes very expensive.',
        GRADUATE: 'Wealthier homeowners adopt first, and if costs are recovered through rates, renters and low-income households may pay more.',
        PHD: 'Some studies found modest short-run income effects, sparking debate about context, time horizons and complementary inputs.',
      },
    },
    {
      id: 'raccessq3',
      question: {
        ELEMENTARY: 'How can the sun help a village with no power lines?',
        MIDDLE_SCHOOL: 'Which option is usually best for scattered homes in remote places?',
        HIGH_SCHOOL: 'What does "productive use" of electricity mean?',
        UNDERGRADUATE: 'What does a multi-tier framework for energy access measure?',
        GRADUATE: 'What is a common way to make carbon pricing less regressive?',
        PHD: 'Why is the role of gas in clean cooking contested?',
      },
      options: {
        ELEMENTARY: ['The sun makes the village colder', 'The sun can only dry clothes', 'Solar panels can charge batteries that run lights at night', 'The sun turns off at noon'],
        MIDDLE_SCHOOL: ['A coal power plant', 'Building a new highway', 'A solar home system', 'A bigger fireplace'],
        HIGH_SCHOOL: ['Using electricity only for decorations', 'Producing new electricity in a factory', 'Using electricity to earn income, such as milling grain or refrigeration', 'Turning off all appliances'],
        UNDERGRADUATE: ['Only whether a connection exists', 'Only the price of solar panels', 'Attributes such as capacity, duration, reliability, quality, affordability and safety', 'The number of power plants in a country'],
        GRADUATE: ['Doubling the carbon price for poor households', 'Banning all fuel use', 'Returning revenue through rebates, dividends or targeted support', 'Ignoring who pays'],
        PHD: ['Gas produces no emissions at all', 'Gas cooking is illegal everywhere', 'It brings near-term health gains but risks long-term emissions lock-in', 'Gas cannot be used for cooking'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Solar panels turn sunshine into electricity, and batteries save it so lights can glow at night.',
        MIDDLE_SCHOOL: 'A solar home system gives one household its own panel, battery and lights without any wires.',
        HIGH_SCHOOL: 'Productive uses create income from power, which also helps local energy systems pay for themselves.',
        UNDERGRADUATE: 'Tiered frameworks look at the quality and usefulness of service, not just whether a wire arrives.',
        GRADUATE: 'Recycling revenue to households can offset the larger share of income poor households spend on fuel.',
        PHD: 'Replacing smoky solid fuels with gas cuts household pollution quickly, but adds fossil infrastructure that may persist.',
      },
    },
    {
      id: 'raccessq4',
      question: {
        ELEMENTARY: 'What does it mean for clean energy to be fair?',
        MIDDLE_SCHOOL: 'Who often spends hours collecting firewood?',
        HIGH_SCHOOL: 'What does a just transition ask?',
        UNDERGRADUATE: 'Why is an anchor load such as a mill or clinic valuable to a mini-grid?',
        GRADUATE: 'What is recognition justice?',
        PHD: 'What does energy stacking describe?',
      },
      options: {
        ELEMENTARY: ['Only people with lots of energy get more', 'Clean energy is only for grown-ups', 'Nobody uses energy', 'Making sure nobody is left out, especially families who need it most'],
        MIDDLE_SCHOOL: ['Power plant engineers', 'Airline pilots', 'Bank managers', 'Often women and girls'],
        HIGH_SCHOOL: ['How fast new power plants can be built', 'Which color solar panels should be', 'Whether energy should be banned', 'Who benefits and who pays as we move to clean energy'],
        UNDERGRADUATE: ['It removes the need for batteries', 'It makes tariffs illegal', 'It reduces the number of customers', 'It spreads fixed costs over more kilowatt-hours, improving viability'],
        GRADUATE: ['Recognizing award-winning projects', 'Tracking how many meters are installed', 'Rewarding the fastest developers', 'Acknowledging groups whose needs or rights have been overlooked'],
        PHD: ['Piling batteries on top of each other', 'Ranking countries by energy use', 'Stacking solar panels vertically', 'Households using several fuels and technologies at once rather than switching cleanly'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Fair means clean energy reaches everyone, including families who do not have it yet.',
        MIDDLE_SCHOOL: 'Women and girls often gather fuel, so clean cooking frees up their time for school and work.',
        HIGH_SCHOOL: 'A just transition looks at workers, communities and low-income households so the change is fair.',
        UNDERGRADUATE: 'A large, steady customer raises demand, so the mini-grid earns more from the same equipment.',
        GRADUATE: 'Recognition justice makes overlooked groups visible in data, planning and governance.',
        PHD: 'Stacking explains why new stoves may not fully replace old fuels, which matters for health and emissions outcomes.',
      },
    },
    {
      id: 'raccessq5',
      question: {
        ELEMENTARY: 'What does a battery do in a solar lamp?',
        MIDDLE_SCHOOL: 'Can energy poverty happen in wealthy countries?',
        HIGH_SCHOOL: 'Which solution can support businesses and later connect to the main grid?',
        UNDERGRADUATE: 'What is energy burden?',
        GRADUATE: 'What is community energy?',
        PHD: 'What does incidence analysis study?',
      },
      options: {
        ELEMENTARY: ['It saves electricity so the lamp can glow at night', 'It makes the lamp heavier for fun', 'It cools the room', 'It turns sunlight into water'],
        MIDDLE_SCHOOL: ['Yes, some households struggle to pay heating or cooling bills', 'No, it only exists in deserts', 'No, everyone in wealthy countries has free energy', 'Only during holidays'],
        HIGH_SCHOOL: ['A mini-grid', 'A single solar lamp', 'A candle', 'A kerosene lantern'],
        UNDERGRADUATE: ['The share of household income spent on energy', 'The weight of a solar panel', 'The total electricity a country produces', 'The cost of building a power line'],
        GRADUATE: ['Energy projects owned, governed or controlled by local residents or cooperatives', 'Any project located in a city', 'Projects run only by national governments', 'Energy sold on international markets'],
        PHD: ['How the costs and benefits of a policy fall across income groups and regions', 'How often lightning strikes power lines', 'The chemistry of battery electrodes', 'The speed of electricity in wires'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The battery stores energy from the sun during the day so the lamp can shine after dark.',
        MIDDLE_SCHOOL: 'Even in rich countries, some families must choose between paying energy bills and buying other essentials.',
        HIGH_SCHOOL: 'Mini-grids can power shops and services and may connect to the national grid when it arrives.',
        UNDERGRADUATE: 'Energy burden measures affordability: a high share of income spent on energy signals hardship.',
        GRADUATE: 'Community energy keeps ownership and decisions local, through cooperatives, municipal utilities or community mini-grids.',
        PHD: 'Incidence analysis traces who actually bears policy costs and receives benefits, revealing regressive effects.',
      },
    },
  ],
}

export default expansion
