import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-security',
  lessons: [
    {
      id: 'ws-sec-1',
      title: 'Safe Water for All: Understanding Water Security',
      content: {
        ELEMENTARY: `
<h2>Clean Water for Everyone</h2>
<p>Every living thing needs water. People need it to drink, to cook, to wash their hands and to grow food. Many of us turn on a tap and clean water comes out. But around the world, many children and families do not have clean, safe water close to home. Let's learn why, and how people are helping.</p>

<h3>What Makes Water Safe?</h3>
<p>Water can look clear and still have tiny germs in it that we cannot see. Safe water has been cleaned so it will not make people sick. It also needs to be stored in clean containers with lids.</p>
<ul>
<li><strong>Germs:</strong> tiny living things too small to see that can make people sick</li>
<li><strong>Safe water:</strong> water that is clean enough to drink without getting ill</li>
<li><strong>Well:</strong> a deep hole dug into the ground to reach water hidden underground</li>
</ul>

<h3>Why Some People Do Not Have Enough</h3>
<p>In some places there is very little rain. In other places there is water, but no pipes or pumps to bring it to homes. Some families, often children, walk a long way every day to carry water back home. That leaves less time for school and play.</p>
<ul>
<li><strong>Drought:</strong> a long time with very little rain, when rivers and wells can dry up</li>
<li><strong>Flood:</strong> when too much water covers land that is usually dry, and can make water dirty</li>
<li><strong>Toilet:</strong> a safe place for waste so it does not get into drinking water</li>
</ul>

<h3>How People Help</h3>
<p>Communities, engineers and helpers all over the world work together. They build wells and pipes, clean water with filters, and build toilets that keep waste away from drinking water. Local people know their land and water best, so they are important partners in every project.</p>
<ol>
<li>Wash your hands with soap to keep germs away.</li>
<li>Do not waste clean water at home or at school.</li>
<li>Keep rubbish out of rivers, lakes and drains.</li>
<li>Learn and share why clean water matters for everyone.</li>
</ol>

<h3>Think About It</h3>
<p>Imagine if you had to carry every cup of water you used today. How many trips would you make? Thinking about this helps us remember that clean water is a gift worth protecting, and that everyone everywhere deserves it.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Water Access Around the World</h2>
<p>Water security means that people can reliably get enough clean water for their needs, now and in the future, while staying safe from water-related dangers like floods. Billions of people around the world still lack safely managed drinking water at home, and even more lack safe sanitation. This lesson explores why access is unequal and what can be done.</p>

<h3>Different Kinds of Water Problems</h3>
<p>Scientists describe two main reasons people go without water. Sometimes there simply is not enough water in a region. Other times, water exists but people cannot reach it or afford it because of missing infrastructure or money.</p>
<table>
<thead><tr><th>Type of problem</th><th>What it means</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Physical scarcity</td><td>Not enough water for everyone's needs</td><td>Dry regions where rivers and aquifers are overused</td></tr>
<tr><td>Economic scarcity</td><td>Water exists, but pipes, pumps or money are lacking</td><td>Villages near rivers without treatment or wells</td></tr>
<tr><td>Quality problems</td><td>Water is available but polluted</td><td>Wells contaminated by waste or natural chemicals</td></tr>
<tr><td>Water hazards</td><td>Too much water at once</td><td>Floods that damage homes and spread disease</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Water security:</strong> reliable access to enough safe water for people and nature, with protection from water disasters</li>
<li><strong>Sanitation:</strong> safe systems such as toilets and sewers that keep human waste away from people and water</li>
<li><strong>Water scarcity:</strong> a situation where demand for water is greater than the supply available</li>
<li><strong>Aquifer:</strong> a layer of rock, sand or gravel underground that holds water</li>
<li><strong>Waterborne disease:</strong> an illness spread by germs living in unsafe drinking water</li>
<li><strong>Infrastructure:</strong> the pipes, pumps, treatment plants and dams that move and clean water</li>
</ul>

<h3>Who Is Most Affected?</h3>
<p>The burden of water insecurity falls unevenly. Rural communities, people living in crowded informal neighborhoods and families with low incomes are often hit hardest. Collecting water is frequently the job of women and girls, which can take hours each day. Unsafe water and poor sanitation spread diarrheal diseases, which are especially dangerous for young children.</p>

<h3>Growing Pressures</h3>
<p>Population growth, expanding farms and industry, pollution and climate change all put pressure on water. Climate change can make droughts longer and floods stronger, and melting glaciers can change how much water rivers carry in summer.</p>

<h3>Solutions That Work</h3>
<p>Protecting water sources, building wells and pipe networks, treating water, improving sanitation and teaching handwashing all make a difference. Fair rules for sharing water and involving local communities help solutions last.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Security: Dimensions, Threats and Solutions</h2>
<p>Water security is widely described as the capacity of a population to safeguard sustainable access to adequate quantities of acceptable-quality water for livelihoods, human well-being and development, while protecting against water-related disasters and preserving ecosystems. It is broader than water supply alone: it connects health, food, energy, economics, ecosystems and peace.</p>

<h3>The Dimensions of Water Security</h3>
<ul>
<li><strong>Availability:</strong> whether enough water physically exists in rivers, lakes, aquifers and soil for the needs of a region</li>
<li><strong>Access:</strong> whether people can actually reach water, through infrastructure, affordable prices and fair rights</li>
<li><strong>Quality:</strong> whether water is safe for drinking, farming and ecosystems, free of harmful pollution</li>
<li><strong>Stability:</strong> whether supply remains reliable through droughts, floods and seasons over the years</li>
<li><strong>Disaster risk:</strong> how exposed communities are to floods, storm surges and landslides caused by water</li>
<li><strong>Ecosystem health:</strong> whether rivers and wetlands keep enough water to support the life that depends on them</li>
</ul>

<h3>Major Threats</h3>
<table>
<thead><tr><th>Threat</th><th>How it undermines security</th><th>Example responses</th></tr></thead>
<tbody>
<tr><td>Over-extraction</td><td>Rivers run dry and aquifers fall faster than they recharge</td><td>Allocation limits, efficient irrigation</td></tr>
<tr><td>Pollution</td><td>Makes available water unsafe or costly to treat</td><td>Wastewater treatment, source protection</td></tr>
<tr><td>Climate change</td><td>More variable rainfall, droughts, floods and glacier loss</td><td>Storage, flood planning, adaptive management</td></tr>
<tr><td>Weak infrastructure</td><td>Leaking pipes, intermittent supply, unsafe storage</td><td>Investment, maintenance, local operators</td></tr>
<tr><td>Weak governance</td><td>Unclear rights, corruption, conflict between users</td><td>Transparent rules, participation, cooperation</td></tr>
</tbody>
</table>

<h3>Water, Food and Energy</h3>
<p>Agriculture is the largest user of fresh water worldwide, so water security is tied to food security. Energy production needs water for cooling and hydropower, and water systems need energy for pumping and treatment. A shortage in one sector can cascade into the others.</p>

<h3>Shared Rivers: Conflict or Cooperation?</h3>
<p>Many large rivers and aquifers cross national borders. Tensions over shared water are real, but research on international river basins has found that cooperation, through treaties, joint commissions and data sharing, is historically more common than violent conflict. Water disputes are more likely to cause local tension within countries, for example between farmers and cities.</p>

<h3>Pathways to Water Security</h3>
<ol>
<li><strong>Infrastructure:</strong> treatment plants, pipes, storage and flood defenses, both built and natural.</li>
<li><strong>Nature-based solutions:</strong> protecting forests, wetlands and floodplains that store and clean water.</li>
<li><strong>Efficiency and reuse:</strong> using less and recycling treated wastewater.</li>
<li><strong>Fair governance:</strong> clear rights, affordable services and inclusive decision making.</li>
<li><strong>Monitoring:</strong> tracking rainfall, river flows, groundwater and quality to plan ahead.</li>
</ol>
<p>Achieving water security is not a single project but an ongoing process of managing risk and sharing water fairly.</p>
`,
        UNDERGRADUATE: `
<h2>Water Security Frameworks, Indicators and Assessment</h2>
<p>Water security has become a central organizing concept in water policy, but it is defined and measured in many ways. Some frameworks emphasize household access, others national resource availability, economic risk or ecosystem health. This lesson analyzes the major framings, the indicators used to operationalize them and the methodological choices that shape assessment results.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Water stress:</strong> the ratio of water withdrawals to available renewable supply, where high ratios indicate competition and vulnerability</li>
<li><strong>Per capita availability:</strong> renewable freshwater resources divided by population, a simple but coarse indicator of physical scarcity</li>
<li><strong>Safely managed drinking water:</strong> water from an improved source on premises, available when needed and free from priority contamination</li>
<li><strong>Exposure:</strong> the people, assets and ecosystems located where water hazards such as floods or droughts can affect them</li>
<li><strong>Vulnerability:</strong> the susceptibility of a system to harm, shaped by sensitivity and adaptive capacity</li>
<li><strong>Adaptive capacity:</strong> the ability of institutions, communities and infrastructure to adjust to changing water conditions</li>
</ul>

<h3>Competing Framings</h3>
<table>
<thead><tr><th>Framing</th><th>Central question</th><th>Typical indicators</th></tr></thead>
<tbody>
<tr><td>Resource scarcity</td><td>Is there enough water?</td><td>Per capita availability, withdrawal-to-availability ratios</td></tr>
<tr><td>Human development</td><td>Can people access safe water and sanitation?</td><td>Service coverage, affordability, time spent collecting water</td></tr>
<tr><td>Risk-based</td><td>What is the probability and consequence of water-related harm?</td><td>Flood and drought losses, supply reliability</td></tr>
<tr><td>Economic</td><td>How does water affect growth and productivity?</td><td>Water productivity, losses to shortages</td></tr>
<tr><td>Ecosystem</td><td>Are environmental water needs met?</td><td>Environmental flow compliance, biodiversity indices</td></tr>
</tbody>
</table>

<h3>Assessment Methods</h3>
<p>Assessments typically follow a sequence: define the unit of analysis (household, city, basin or nation), select indicators for each dimension, normalize them onto common scales, weight and aggregate them, and interpret the results. Each step involves judgment. Normalization can exaggerate small differences; equal weighting implies that all dimensions matter equally; and national averages can hide severe local insecurity, such as informal settlements in an otherwise well-served country.</p>

<h3>Quantitative Reasoning</h3>
<p>Consider two basins with identical annual renewable water. In one, flow is steady; in the other, most water arrives in a short rainy season. Annual averages suggest equal security, but the second basin depends on storage to stay reliable. Variability, not just quantity, drives security. Similarly, a city with abundant water but high leakage and intermittent supply may be less secure in practice than a drier city with well-managed infrastructure.</p>

<h3>Applied Assessment Checklist</h3>
<ol>
<li>State the purpose and audience of the assessment.</li>
<li>Choose the spatial and temporal scale that matches decisions.</li>
<li>Cover availability, access, quality, stability, hazards and ecosystems.</li>
<li>Document normalization, weighting and data sources transparently.</li>
<li>Disaggregate by location, income and gender where data allow.</li>
<li>Test sensitivity of results to alternative weights and indicators.</li>
</ol>
`,
        GRADUATE: `
<h2>Water Security Policy, Conflict and Governance</h2>
<p>Water security is fundamentally a governance challenge. Physical scarcity matters, but outcomes depend on how institutions allocate water, finance infrastructure, manage risk and resolve disputes. This lesson examines policy instruments, the evidence on water and conflict, transboundary cooperation and the institutional barriers that keep water insecurity in place.</p>

<h3>Key Governance Concepts</h3>
<ul>
<li><strong>Human right to water:</strong> the recognized entitlement to sufficient, safe, acceptable, physically accessible and affordable water for personal and domestic uses</li>
<li><strong>Integrated water resources management:</strong> a process promoting coordinated management of water, land and related resources across sectors and scales</li>
<li><strong>Transboundary waters:</strong> rivers, lakes and aquifers shared by two or more countries or jurisdictions</li>
<li><strong>Benefit sharing:</strong> an approach to shared rivers that divides the benefits of water use, such as power or food, rather than only volumes</li>
<li><strong>Polycentric governance:</strong> a system of multiple overlapping decision centers that coordinate without a single authority</li>
<li><strong>Hydro-hegemony:</strong> the idea that powerful riparian states can shape water arrangements in their favor through power asymmetries</li>
</ul>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Purpose</th><th>Risks</th></tr></thead>
<tbody>
<tr><td>Allocation caps and permits</td><td>Keep extraction within sustainable limits</td><td>Political pressure to over-allocate</td></tr>
<tr><td>Tariffs with social protections</td><td>Fund services while keeping basic needs affordable</td><td>Poorly targeted subsidies benefit wealthier users</td></tr>
<tr><td>Infrastructure investment</td><td>Expand storage, treatment and distribution</td><td>Maintenance neglect, stranded assets</td></tr>
<tr><td>Risk management and insurance</td><td>Reduce flood and drought losses</td><td>Moral hazard, unequal coverage</td></tr>
<tr><td>Source and ecosystem protection</td><td>Maintain natural storage and filtration</td><td>Enforcement and land-use conflicts</td></tr>
</tbody>
</table>

<h3>Does Water Scarcity Cause Wars?</h3>
<p>Popular narratives predict water wars, but research on international river basins finds that cooperative events, such as agreements and joint management, have historically outnumbered conflictive ones, and interstate wars fought primarily over water are rare. Water is more often a contributing stressor than a sole cause. Local and subnational disputes, between farmers and herders, upstream and downstream districts, or rural and urban users, are more common, and violence can be associated with water infrastructure being targeted in wider conflicts. Institutional capacity to absorb change, such as treaties with flexible allocation and dispute resolution mechanisms, appears more important than scarcity itself.</p>

<h3>Transboundary Cooperation</h3>
<p>Effective transboundary arrangements typically include data sharing, joint monitoring, notification of planned works, procedures for drought and flood, and dispute resolution. Treaties that fix volumes can become brittle as climate shifts flows; provisions based on proportions or adaptive review tend to cope better. Shared aquifers remain far less governed than shared rivers.</p>

<h3>Institutional Barriers</h3>
<p>Water insecurity persists because of fragmented mandates, underfunded utilities, weak enforcement, limited data and political incentives that favor visible new projects over maintenance. Gender and power dynamics influence who participates in decisions. Recognizing Indigenous and customary water rights and knowledge strengthens legitimacy and often improves outcomes.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify whose security is at stake and at which scale.</li>
<li>Map institutions, rights and power relationships among users.</li>
<li>Assess hazards and vulnerability under climate and demand scenarios.</li>
<li>Evaluate instruments for effectiveness, equity and political feasibility.</li>
<li>Build mechanisms for review, dispute resolution and adaptation.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Water Security Measurement and Futures</h2>
<p>Water security research has expanded from resource accounting toward multidimensional, risk-based and justice-oriented approaches. Scholars debate how to measure it, at which scale, and how to project it under deep uncertainty. Transboundary governance and the coupling of social and hydrological dynamics remain active frontiers. This lesson surveys those methods and debates.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Composite index:</strong> an aggregate measure combining multiple normalized indicators into a single score for comparison</li>
<li><strong>Experiential measurement:</strong> survey-based scales that capture how people actually experience water insecurity in daily life</li>
<li><strong>Socio-hydrology:</strong> a field studying the two-way coevolution of human societies and hydrological systems</li>
<li><strong>Deep uncertainty:</strong> conditions in which experts cannot agree on probabilities or models for key future drivers</li>
<li><strong>Scenario analysis:</strong> exploring alternative plausible futures to test how water security might evolve under different assumptions</li>
<li><strong>Virtual water trade:</strong> the water embedded in traded goods, which can redistribute water stress across regions</li>
</ul>

<h3>Measurement Debates</h3>
<p>Composite indices make complex conditions comparable and communicable, but they embed value judgments in indicator selection, normalization and weighting. Small methodological changes can reorder country rankings. Alternative approaches include dashboards that avoid aggregation, multi-criteria analysis with stakeholder-derived weights, and experiential scales administered in household surveys that capture worry, disruption and coping behaviors. Experiential measures reveal insecurity in places that look secure by infrastructure coverage, but they raise questions of cross-cultural comparability.</p>

<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Composite indices</td><td>Comparability, communication</td><td>Hidden value judgments, sensitivity to weights</td></tr>
<tr><td>Indicator dashboards</td><td>Transparency across dimensions</td><td>Harder to summarize for decision makers</td></tr>
<tr><td>Experiential scales</td><td>Capture lived experience at household level</td><td>Survey cost, comparability across contexts</td></tr>
<tr><td>Risk-based metrics</td><td>Link hazards to expected losses</td><td>Require probability estimates that may be unavailable</td></tr>
</tbody>
</table>

<h3>Transboundary Research</h3>
<p>Studies of shared basins examine how treaty design, power asymmetries, data sharing and economic interdependence shape cooperation. Hydro-political analysis shows that formal cooperation can coexist with unequal outcomes, so the presence of a treaty does not by itself indicate equity. Research on transboundary aquifers is constrained by limited data on storage and flow across borders. Remote sensing of terrestrial water storage has improved observation of large-scale groundwater trends but cannot replace local measurements.</p>

<h3>Modeling Future Water Security</h3>
<p>Projections couple climate models, hydrological models and socioeconomic scenarios of population, land use and demand. Uncertainty compounds across this chain, especially for regional precipitation. Decision-oriented approaches such as robust decision making and adaptation pathways shift the question from predicting the future to identifying strategies that remain acceptable across many futures, along with signposts that trigger changes in strategy.</p>

<h3>Contested Questions</h3>
<p>Is water security best framed as risk management or as justice? Does a security framing risk militarizing water or privileging state interests over communities and ecosystems? How should virtual water trade be interpreted: as a buffer that relieves local scarcity, or as a channel that exports water stress? These questions shape both research design and policy uptake.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Validated, comparable experiential measures linked to infrastructure and hydrological data.</li>
<li>Socio-hydrological models that capture feedbacks between institutions, behavior and water availability.</li>
<li>Methods to integrate equity and procedural justice into security indices and scenarios.</li>
<li>Governance research on shared aquifers and climate-adaptive treaty provisions.</li>
<li>Assessment of how compound hazards, such as drought followed by flood, affect long-term security.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wsecq1',
      question: {
        ELEMENTARY: 'Does everyone in the world have clean water at home?',
        MIDDLE_SCHOOL: 'Roughly how many people lack safely managed drinking water at home?',
        HIGH_SCHOOL: 'What is water security?',
        UNDERGRADUATE: 'Which dimensions are commonly included in water security assessments?',
        GRADUATE: 'What does research on international river basins suggest about water and conflict?',
        PHD: 'What is a composite water security index?',
      },
      options: {
        ELEMENTARY: ['No, many people still need help getting clean water', 'Yes, everyone does', 'Water does not matter', 'Only grown-ups need clean water'],
        MIDDLE_SCHOOL: ['Billions of people', 'Nobody at all', 'Only about ten people', 'Only people living in cities'],
        HIGH_SCHOOL: ['Reliable access to enough water of acceptable quality, with protection from water disasters', 'Water kept in locked tanks', 'Water owned by private guards', 'Having a swimming pool'],
        UNDERGRADUATE: ['Availability, access, quality, stability, hazards and ecosystems', 'Only the total amount of rain', 'Only water quality', 'Only the price of water'],
        GRADUATE: ['Cooperative events have historically outnumbered conflictive ones', 'Shared rivers always lead to war', 'There is never any tension over water', 'Water has no link to politics'],
        PHD: ['An aggregate measure combining multiple normalized indicators into a single score', 'A simple count of rivers', 'A list of dams', 'A security camera network at reservoirs'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Many families around the world do not have clean, safe water close to home.',
        MIDDLE_SCHOOL: 'Billions of people still lack safely managed drinking water at home, and even more lack safe sanitation.',
        HIGH_SCHOOL: 'Water security combines enough water, good quality, reliable access and protection from floods and droughts.',
        UNDERGRADUATE: 'Assessments cover several dimensions because quantity alone does not capture security.',
        GRADUATE: 'Cooperation through treaties and joint management is historically more common than war over water.',
        PHD: 'Composite indices aggregate indicators, which aids comparison but embeds value judgments.',
      },
    },
    {
      id: 'wsecq2',
      question: {
        ELEMENTARY: 'What are germs?',
        MIDDLE_SCHOOL: 'What is economic water scarcity?',
        HIGH_SCHOOL: 'Which sector is the largest user of fresh water worldwide?',
        UNDERGRADUATE: 'Why can national averages be misleading in water security assessment?',
        GRADUATE: 'What is benefit sharing on a shared river?',
        PHD: 'What do experiential water insecurity scales measure?',
      },
      options: {
        ELEMENTARY: ['Big animals in rivers', 'Tiny living things that can make people sick', 'A kind of water bottle', 'Rain clouds'],
        MIDDLE_SCHOOL: ['When there is no water on the planet', 'When water exists but pipes, pumps or money are lacking', 'When water is too cheap', 'When it rains every day'],
        HIGH_SCHOOL: ['Swimming pools', 'Agriculture', 'Car washes', 'Bottled water companies'],
        UNDERGRADUATE: ['National averages are always too low', 'They can hide severe local insecurity in particular places or groups', 'Averages cannot be calculated', 'They only measure rainfall'],
        GRADUATE: ['Dividing only water volumes equally', 'Dividing benefits of water use such as power or food rather than only volumes', 'Letting one country take all the water', 'Sharing water bills between households'],
        PHD: ['River flow at gauging stations', 'How people actually experience water insecurity in daily life', 'Satellite rainfall estimates', 'Pipe pressure in cities'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Germs are too small to see, which is why water must be cleaned even when it looks clear.',
        MIDDLE_SCHOOL: 'Economic scarcity means water is there but people lack the infrastructure or money to use it safely.',
        HIGH_SCHOOL: 'Agriculture uses the most fresh water, which links water security to food security.',
        UNDERGRADUATE: 'A well-served country can still contain informal settlements or rural areas with severe insecurity.',
        GRADUATE: 'Benefit sharing broadens negotiation from volumes to the value water creates.',
        PHD: 'Experiential scales capture worry, disruption and coping at the household level.',
      },
    },
    {
      id: 'wsecq3',
      question: {
        ELEMENTARY: 'What can you do to keep germs away?',
        MIDDLE_SCHOOL: 'What is sanitation?',
        HIGH_SCHOOL: 'Which threat makes rivers run dry and aquifers fall faster than they recharge?',
        UNDERGRADUATE: 'What is water stress?',
        GRADUATE: 'Why can treaties with fixed water volumes become brittle?',
        PHD: 'What is socio-hydrology?',
      },
      options: {
        ELEMENTARY: ['Never wash at all', 'Drink from puddles', 'Wash your hands with soap', 'Throw rubbish in rivers'],
        MIDDLE_SCHOOL: ['A type of rain', 'A kind of fish', 'Safe systems like toilets and sewers that keep waste away from people and water', 'A water slide'],
        HIGH_SCHOOL: ['Rainwater harvesting', 'Wetland protection', 'Over-extraction', 'Leak repair'],
        UNDERGRADUATE: ['The pressure inside water pipes', 'The stress people feel when they are thirsty', 'The ratio of water withdrawals to available renewable supply', 'The weight of water in a tank'],
        GRADUATE: ['Volumes are always too small', 'They never include rivers', 'Climate change can shift flows so fixed volumes no longer match reality', 'Treaties cannot be signed'],
        PHD: ['The study of water chemistry only', 'A survey of social media about water', 'The study of the two-way coevolution of human societies and hydrological systems', 'A method for building dams'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Washing hands with soap removes germs and helps keep everyone healthy.',
        MIDDLE_SCHOOL: 'Sanitation keeps human waste away from drinking water, which prevents disease.',
        HIGH_SCHOOL: 'Taking more water than nature replaces drains rivers and lowers groundwater levels.',
        UNDERGRADUATE: 'High withdrawal-to-availability ratios indicate competition and vulnerability.',
        GRADUATE: 'Proportional or adaptive provisions cope better with changing flows than fixed volumes.',
        PHD: 'Socio-hydrology models feedbacks between human decisions and water availability over time.',
      },
    },
    {
      id: 'wsecq4',
      question: {
        ELEMENTARY: 'What is a well?',
        MIDDLE_SCHOOL: 'Who often does the job of collecting water in places without taps?',
        HIGH_SCHOOL: 'What is a nature-based solution for water security?',
        UNDERGRADUATE: 'Why can two basins with the same annual water have different water security?',
        GRADUATE: 'What is the human right to water?',
        PHD: 'What is the aim of adaptation pathways and robust decision making for water futures?',
      },
      options: {
        ELEMENTARY: ['A tall tower for birds', 'A cloud that holds rain', 'A big puddle on the road', 'A deep hole dug into the ground to reach water'],
        MIDDLE_SCHOOL: ['Only machines', 'Nobody, water comes by itself', 'Only city officials', 'Frequently women and girls'],
        HIGH_SCHOOL: ['Paving over floodplains', 'Draining wetlands', 'Building more parking lots', 'Protecting forests and wetlands that store and clean water'],
        UNDERGRADUATE: ['Their rivers have different names', 'One basin is always larger', 'Water security never depends on rainfall', 'Variability and storage matter, not only the annual total'],
        GRADUATE: ['A right to unlimited free water for any purpose', 'A right for companies to own rivers', 'A rule that only farmers get water', 'An entitlement to sufficient, safe, accessible and affordable water for personal and domestic use'],
        PHD: ['To predict one exact future', 'To ignore uncertainty', 'To use only historical data', 'To find strategies that stay acceptable across many futures, with signposts for changing course'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A well reaches water stored underground so people can pull or pump it up.',
        MIDDLE_SCHOOL: 'Women and girls often spend hours collecting water, which takes time from school and work.',
        HIGH_SCHOOL: 'Healthy forests, wetlands and floodplains store, slow and clean water naturally.',
        UNDERGRADUATE: 'A basin whose water arrives in a short season needs storage to stay reliable.',
        GRADUATE: 'The human right covers water for personal and domestic needs that is safe, accessible and affordable.',
        PHD: 'These approaches plan for many futures rather than optimizing for a single forecast.',
      },
    },
    {
      id: 'wsecq5',
      question: {
        ELEMENTARY: 'Who is important to include when building a water project?',
        MIDDLE_SCHOOL: 'How can climate change affect water?',
        HIGH_SCHOOL: 'Why is energy linked to water security?',
        UNDERGRADUATE: 'What does adaptive capacity describe?',
        GRADUATE: 'Which barrier commonly keeps water insecurity in place?',
        PHD: 'Why is virtual water trade contested in water security research?',
      },
      options: {
        ELEMENTARY: ['Local people who know their land and water', 'Nobody at all', 'Only people far away', 'Only cartoon characters'],
        MIDDLE_SCHOOL: ['It can make droughts longer and floods stronger', 'It makes all water disappear tomorrow', 'It has no effect on water', 'It only changes the color of water'],
        HIGH_SCHOOL: ['Water systems need energy for pumping and treatment, and energy needs water for cooling and hydropower', 'Energy and water are never connected', 'Only solar panels use water', 'Electricity makes new water'],
        UNDERGRADUATE: ['The ability of institutions and communities to adjust to changing water conditions', 'The size of a water tank', 'The number of pipes in a city', 'The amount of rainfall in a year'],
        GRADUATE: ['Fragmented mandates and political incentives that favor new projects over maintenance', 'Too much data sharing', 'Excessive maintenance budgets', 'Perfect enforcement of rules'],
        PHD: ['It can be read as relieving local scarcity or as exporting water stress', 'It is never measured', 'It only concerns bottled water', 'It has no link to agriculture'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Local people know their water best and help make projects work for a long time.',
        MIDDLE_SCHOOL: 'Climate change can bring longer droughts, stronger floods and changes in glacier-fed rivers.',
        HIGH_SCHOOL: 'Shortages in water or energy can cascade into the other sector.',
        UNDERGRADUATE: 'Adaptive capacity reduces vulnerability by allowing adjustment to change.',
        GRADUATE: 'Fragmentation and neglect of maintenance are common institutional causes of insecurity.',
        PHD: 'Researchers disagree whether embedded water in trade relieves or shifts water stress.',
      },
    },
  ],
}

export default expansion
