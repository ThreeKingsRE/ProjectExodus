import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'soil-testing',
  lessons: [
    {
      id: 'ra-test-1',
      title: 'Checking Soil Health',
      content: {
        ELEMENTARY: `
<h2>Is the Soil Happy and Healthy?</h2>
<p>Doctors check on us to make sure we are healthy. They listen to our heart and look in our ears. Farmers do the same thing for their soil! Healthy soil grows strong plants and tasty food. So how do farmers find out if their soil is feeling good? They test it!</p>

<h3>What Makes Soil Healthy?</h3>
<p>Healthy soil is dark and crumbly, like chocolate cake crumbs. It smells sweet and earthy after rain. It is full of tiny living things, from wiggly worms to creatures too small to see. It soaks up water like a sponge instead of letting it run away.</p>
<ul>
<li><strong>Soil test:</strong> a way of checking soil to find out what it has and what it needs</li>
<li><strong>Nutrients:</strong> the food plants take from the soil to help them grow big and strong</li>
<li><strong>Earthworm:</strong> a wiggly animal that makes tunnels and turns old leaves into rich soil</li>
</ul>

<h3>Tests You Can Do With Your Eyes and Hands</h3>
<ol>
<li><strong>Look:</strong> Is the soil dark brown or pale and dusty?</li>
<li><strong>Squeeze:</strong> Does a handful crumble nicely or stay hard like a brick?</li>
<li><strong>Count worms:</strong> Dig one spadeful and count the worms. More worms usually means happier soil.</li>
<li><strong>Smell:</strong> Healthy soil smells fresh and earthy, not sour.</li>
<li><strong>Pour water:</strong> Does water soak in quickly or sit in a puddle on top?</li>
</ol>

<h3>Tests in a Laboratory</h3>
<p>Farmers can also send a little bag of soil to a laboratory. Scientists there use special machines to find out how much plant food is in the soil. They also check if the soil is sour or sweet. Then they tell the farmer what the soil needs.</p>
<ul>
<li><strong>Laboratory:</strong> a special room where scientists use tools to study things carefully</li>
<li><strong>Sample:</strong> a small amount of something taken to learn about the whole thing</li>
</ul>

<h3>Why Testing Helps</h3>
<p>When farmers know what their soil needs, they only add what is missing. That saves money and keeps extra fertilizer from washing into rivers where fish live. Testing every year or two shows if the soil is getting healthier.</p>

<h3>Be a Soil Detective</h3>
<p>With a grown-up, dig a small hole in a garden or park. Look at the color, feel the texture and count the worms. Then dig in a spot where people walk a lot. Which soil looks happier? You just did your first soil test!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Soil Testing Works</h2>
<p>You cannot tell everything about soil just by looking at it. Two fields can look the same but have very different amounts of nutrients, acidity and life. Soil testing gives farmers and gardeners real information, so they can feed their plants exactly what they need and keep the soil improving over time.</p>

<h3>Taking a Good Sample</h3>
<p>A soil test is only as good as the sample. A laboratory tests just a small cup of soil, so that cup must represent the whole field. Here is how it is usually done:</p>
<ol>
<li>Walk across the field in a zigzag pattern.</li>
<li>Use a soil probe to take many small cores from the same depth.</li>
<li>Mix all the cores together in a clean bucket.</li>
<li>Put a portion of the mix in a labeled bag and send it to the lab.</li>
<li>Sample at the same time of year each time so results can be compared.</li>
</ol>

<h3>What the Lab Measures</h3>
<table>
<thead><tr><th>Measurement</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>pH</td><td>Whether soil is acidic, neutral or alkaline, which affects how plants absorb nutrients</td></tr>
<tr><td>Nitrogen, phosphorus, potassium</td><td>The main nutrients plants need in large amounts</td></tr>
<tr><td>Organic matter</td><td>How much decayed plant and animal material the soil holds</td></tr>
<tr><td>Texture</td><td>The mix of sand, silt and clay</td></tr>
<tr><td>Micronutrients</td><td>Small amounts of elements like zinc and iron that plants also need</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>pH:</strong> a scale that measures how acidic or alkaline something is, with 7 being neutral</li>
<li><strong>Soil probe:</strong> a metal tube pushed into the ground to pull out a narrow column of soil</li>
<li><strong>Macronutrients:</strong> nutrients such as nitrogen, phosphorus and potassium that plants need in large amounts</li>
<li><strong>Organic matter:</strong> decomposed remains of plants and animals that store nutrients and water</li>
<li><strong>Soil texture:</strong> the relative amounts of sand, silt and clay particles in soil</li>
<li><strong>Soil structure:</strong> the way soil particles clump together into crumbs with spaces between them</li>
</ul>

<h3>Testing Soil Life</h3>
<p>Nutrients are only part of the story. Healthy soil is alive. Farmers can count earthworms, watch how fast water soaks in, or bury a cotton cloth and see how quickly soil microbes break it down. Some labs also measure how much carbon dioxide soil releases after being moistened, which shows how active its microbes are.</p>

<h3>Using the Results</h3>
<p>If the test shows soil is too acidic, a farmer might spread lime. If phosphorus is already high, adding more would be wasteful and could pollute streams. Regenerative farmers watch organic matter and biological tests over years to see whether practices like cover crops and composting are working.</p>
`,
        HIGH_SCHOOL: `
<h2>Soil Testing: Methods, Interpretation and Decisions</h2>
<p>Soil is one of the most complex materials on Earth: a mixture of minerals, water, air, organic matter and billions of organisms. Soil testing turns that complexity into numbers that guide decisions about fertilizer, lime, crop choices and conservation practices. Understanding how tests work, and what they cannot tell you, helps farmers avoid both nutrient shortages and costly, polluting overuse.</p>

<h3>Three Kinds of Soil Indicators</h3>
<ul>
<li><strong>Chemical indicators:</strong> measurements such as pH, nutrient levels and salinity that describe soil chemistry</li>
<li><strong>Physical indicators:</strong> properties such as texture, compaction, aggregate stability and water infiltration</li>
<li><strong>Biological indicators:</strong> signs of soil life, such as microbial activity, earthworm counts and active carbon</li>
<li><strong>Aggregate stability:</strong> how well soil crumbs hold together when wetted, a sign of good structure</li>
<li><strong>Infiltration rate:</strong> how quickly water soaks into the soil surface</li>
<li><strong>Cation exchange capacity:</strong> the soil's ability to hold onto positively charged nutrients like calcium and potassium</li>
</ul>

<h3>Field Tests Versus Lab Tests</h3>
<table>
<thead><tr><th>Approach</th><th>Examples</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Visual and field tests</td><td>Spade test, infiltration ring, slake test, worm count</td><td>Cheap, fast, done on site</td><td>Less precise, depend on observer</td></tr>
<tr><td>Standard lab nutrient tests</td><td>pH, phosphorus, potassium, organic matter</td><td>Reliable, widely calibrated</td><td>Mostly chemical, snapshot in time</td></tr>
<tr><td>Biological lab tests</td><td>Respiration, active carbon, potentially mineralizable nitrogen</td><td>Show soil life and change sooner</td><td>Less calibrated to fertilizer decisions</td></tr>
<tr><td>In-season tissue or nitrate tests</td><td>Leaf analysis, late-spring soil nitrate</td><td>Adjust nitrogen during the season</td><td>Must be timed carefully</td></tr>
</tbody>
</table>

<h3>Interpreting Results</h3>
<p>A lab report usually labels nutrient levels as low, optimum or high. These categories come from calibration trials that tested how crops responded to fertilizer at different soil test levels. If a nutrient tests low, adding it is likely to increase yield. If it tests high, adding more probably will not help and may cause runoff pollution. Because pH controls nutrient availability, correcting pH is often the first step.</p>

<h3>Sources of Error</h3>
<p>Soil varies across a field, so poor sampling can mislead. Results also change with season, moisture and depth. A single test is a snapshot; trends over several years tell a much more reliable story. Comparing results is only meaningful when the same lab, method, depth and season are used.</p>

<h3>From Test to Action</h3>
<ol>
<li><strong>Acidic soil:</strong> apply lime to raise pH and improve nutrient availability.</li>
<li><strong>Low phosphorus or potassium:</strong> add fertilizer, manure or compost in measured amounts.</li>
<li><strong>Low aggregate stability:</strong> reduce tillage and add cover crops to rebuild structure.</li>
<li><strong>Poor infiltration:</strong> address compaction with deep-rooted plants and less heavy traffic.</li>
<li><strong>Low biological activity:</strong> increase plant diversity, living roots and organic inputs.</li>
</ol>

<h3>Why It Matters for Regenerative Farming</h3>
<p>Regenerative farmers aim to improve soil function, not just feed the crop. Testing gives evidence of whether practices are working and helps them reduce purchased inputs safely as biological nutrient cycling improves.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Soil Test Methods and Soil Health Assessment</h2>
<p>Soil testing is a measurement system with a specific logic: extract a fraction of a nutrient using a chemical solution, relate that number to crop response through field calibration, and translate it into a recommendation. Soil health assessment extends this logic to physical and biological function. Analyzing both requires understanding what each method measures, how it is calibrated and how uncertainty propagates into decisions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Extractant:</strong> a chemical solution used in the lab to pull a plant-available fraction of a nutrient from soil</li>
<li><strong>Calibration:</strong> field research relating soil test values to the probability and size of crop yield response</li>
<li><strong>Critical level:</strong> the soil test value above which additional nutrient is unlikely to increase yield</li>
<li><strong>Sufficiency approach:</strong> applying nutrients only when soil tests fall below the level needed for the crop</li>
<li><strong>Build and maintain approach:</strong> raising nutrient levels to a target and then replacing what crops remove</li>
<li><strong>Spatial variability:</strong> differences in soil properties across a field that affect sampling and management</li>
</ul>

<h3>Why Method Matters</h3>
<p>Different extractants recover different fractions of a nutrient, and each performs better in some soils than others. A phosphorus number from one method cannot be directly compared to a number from another. Recommendations are valid only when the method used matches the one calibrated for that region's soils and crops. This is why regional guidelines exist and why switching labs can create apparent changes that are not real.</p>

<h3>Biological Assessment</h3>
<p>Biological indicators respond faster to management than total organic matter, which changes slowly. Common measures include short-term respiration after rewetting, permanganate-oxidizable carbon as an estimate of active carbon, and potentially mineralizable nitrogen. These indicators are useful for tracking change and comparing practices, but they are less firmly linked to specific fertilizer rates. Interpretation relies on comparing results to regional reference values or to the same field over time.</p>

<h3>Sampling Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Description</th><th>Best use</th></tr></thead>
<tbody>
<tr><td>Whole-field composite</td><td>Many cores mixed into one sample</td><td>Uniform fields, low cost</td></tr>
<tr><td>Grid sampling</td><td>Samples taken on a regular grid</td><td>Mapping variability for variable-rate application</td></tr>
<tr><td>Management zones</td><td>Samples within zones defined by yield, terrain or soil maps</td><td>Balancing cost and detail</td></tr>
<tr><td>Benchmark sites</td><td>Fixed, georeferenced spots resampled over years</td><td>Tracking long-term trends</td></tr>
</tbody>
</table>

<h3>Precision Agriculture Links</h3>
<p>Yield monitors, satellite and drone imagery, electrical conductivity sensors and terrain models help define zones that behave differently. Combining these layers with targeted soil samples allows variable-rate lime and fertilizer. The benefit depends on whether variability is large enough and stable enough to justify the cost of extra sampling and equipment.</p>

<h3>Reasoning About Uncertainty</h3>
<p>Imagine two years of results show organic matter rising slightly. Before concluding that practices are working, ask whether the change exceeds normal sampling and lab variation. Small changes in slow-moving indicators can easily fall within measurement error. Detecting real change usually requires consistent methods, fixed sampling locations, adequate replication and several years of data.</p>

<h3>Applied Checklist</h3>
<ol>
<li>Define the decision the test must inform.</li>
<li>Choose methods calibrated for local soils and crops.</li>
<li>Design sampling to capture relevant variability.</li>
<li>Keep depth, timing and lab consistent across years.</li>
<li>Interpret biological indicators as trends, not single values.</li>
</ol>
`,
        GRADUATE: `
<h2>Soil Health Metrics, Indicator Selection and Adaptive Management</h2>
<p>As soil health has moved into policy, markets and supply-chain sustainability programs, the question of what to measure has become consequential. Indicators shape payments, certifications and farmer behavior. This lesson examines how indicator sets are chosen, how they support adaptive management, and the institutional and equity issues that arise when soil health becomes a metric for accountability.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Indicator:</strong> a measurable property used to represent a broader soil function that is hard to observe directly</li>
<li><strong>Minimum data set:</strong> a small group of indicators selected to represent soil function efficiently</li>
<li><strong>Soil health index:</strong> a score combining several indicators into a single number for comparison</li>
<li><strong>Adaptive management:</strong> a structured cycle of acting, monitoring, learning and adjusting management decisions</li>
<li><strong>Baseline:</strong> initial measurements against which later change is judged</li>
<li><strong>Measurement, reporting and verification:</strong> the system that documents and confirms outcomes for programs or markets</li>
</ul>

<h3>Criteria for Choosing Indicators</h3>
<table>
<thead><tr><th>Criterion</th><th>Question to ask</th></tr></thead>
<tbody>
<tr><td>Relevance</td><td>Does it relate to a soil function people care about, such as water infiltration or nutrient supply?</td></tr>
<tr><td>Sensitivity</td><td>Does it respond to management within a useful time frame?</td></tr>
<tr><td>Reliability</td><td>Is it repeatable across labs and seasons?</td></tr>
<tr><td>Interpretability</td><td>Can farmers and advisors act on the result?</td></tr>
<tr><td>Cost and accessibility</td><td>Can it be measured affordably at scale?</td></tr>
</tbody>
</table>
<p>No single indicator meets every criterion. Soil organic carbon is highly relevant but changes slowly and varies spatially. Respiration responds quickly but is sensitive to sample handling. Effective programs pair slow, meaningful indicators with faster diagnostic ones.</p>

<h3>Adaptive Management in Practice</h3>
<p>Monitoring is valuable only if it changes decisions. An adaptive cycle starts with clear goals, such as better infiltration or reduced fertilizer, then sets thresholds or triggers for action. Farmers implement practices, monitor indicators at benchmark sites, review results with advisors and adjust. Side-by-side strip trials make learning stronger, because they separate the effect of a practice from weather differences between years.</p>

<h3>Institutional Issues</h3>
<p>When soil metrics underpin payments or carbon credits, measurement burden, verification cost and data ownership become central. Intensive sampling can cost more than the payment it supports, particularly for small farms. Models can reduce cost but introduce their own uncertainty. Who owns farm data, who can access it and whether it can be used against farmers are live governance questions.</p>

<h3>Equity Considerations</h3>
<p>Laboratory access, sampling equipment and advisory services are unevenly distributed. Farmers on rented land may have little incentive to invest in slow soil improvements. Indigenous and local knowledge often includes rich, qualitative indicators of soil condition based on long observation, and participatory approaches can combine these with laboratory data rather than replacing one with the other.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>State the soil functions and goals the program aims to change.</li>
<li>Select a minimum data set balancing relevance, sensitivity and cost.</li>
<li>Establish baselines at fixed sites with documented methods.</li>
<li>Define decision triggers and review cycles with farmers.</li>
<li>Assess measurement costs, data governance and who bears the burden.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Soil Health Measurement Science</h2>
<p>Soil health is an appealing concept but a difficult measurement target. It refers to the capacity of soil to function as a living system, a property that cannot be observed directly and must be inferred from proxies. Research in this area addresses how to define the construct, how to build indices that are valid across environments, how to detect change amid variability, and how emerging sensing and molecular technologies might transform monitoring. This lesson surveys those methodological frontiers.</p>

<h3>Methodological Concepts</h3>
<ul>
<li><strong>Construct validity:</strong> the degree to which a set of measurements actually captures the concept it claims to represent</li>
<li><strong>Scoring function:</strong> a curve that converts a raw indicator value into a standardized score, often between zero and one</li>
<li><strong>Inherent versus dynamic properties:</strong> properties set by parent material and climate versus those that change with management</li>
<li><strong>Minimum detectable difference:</strong> the smallest change that a sampling design can reliably distinguish from noise</li>
<li><strong>Proximal sensing:</strong> measuring soil properties with sensors close to the soil, such as spectroscopy, rather than lab chemistry</li>
<li><strong>Digital soil mapping:</strong> predicting soil properties across space using statistical models and environmental covariates</li>
</ul>

<h3>Index Development Debates</h3>
<p>Composite indices typically follow three steps: select indicators, score them, and combine scores. Each step involves choices. Indicators can be selected by expert judgment or statistical methods such as principal component analysis. Scoring functions can follow "more is better", "less is better" or optimum-range shapes, and their thresholds may be derived from regional distributions or from links to outcomes like yield. Combination may be additive or weighted. Critics note that indices conflate inherent and dynamic properties, so a sandy soil can score poorly regardless of management. Context-specific scoring, which compares soils to others with similar texture and climate, addresses this but requires large reference databases.</p>

<h3>Detecting Change</h3>
<table>
<thead><tr><th>Challenge</th><th>Implication</th><th>Methodological responses</th></tr></thead>
<tbody>
<tr><td>High spatial variability</td><td>Large sample sizes needed to detect small changes</td><td>Stratified designs, fixed resampling points, power analysis</td></tr>
<tr><td>Bulk density changes</td><td>Concentration changes may not equal stock changes</td><td>Equivalent soil mass accounting</td></tr>
<tr><td>Depth limitations</td><td>Surface gains may mask subsoil losses</td><td>Full-profile sampling to deeper layers</td></tr>
<tr><td>Temporal noise</td><td>Season and moisture alter biological indicators</td><td>Standardized timing and handling protocols</td></tr>
<tr><td>Lab-to-lab variation</td><td>Results not comparable across programs</td><td>Method harmonization and reference samples</td></tr>
</tbody>
</table>

<h3>Emerging Technologies</h3>
<p>Visible and near-infrared and mid-infrared spectroscopy can predict organic carbon and texture cheaply once calibrated against large spectral libraries, though transferring models across regions remains difficult. Molecular methods such as DNA sequencing of soil communities describe microbial diversity, but linking community composition to function is an open problem, since many organisms perform overlapping roles. Remote sensing can track ground cover and some surface properties, feeding model-based monitoring that combines sparse samples with process models and satellite data.</p>

<h3>Contested Questions</h3>
<ul>
<li>Is soil health a coherent scientific construct or a useful boundary concept that bridges science and practice?</li>
<li>Should thresholds be tied to agronomic outcomes, environmental outcomes or reference ecosystems?</li>
<li>How should monitoring programs balance direct measurement with model-based estimates?</li>
<li>Can microbial community data become actionable indicators, or will functional assays remain more useful?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Large, harmonized reference datasets that support context-specific scoring.</li>
<li>Transferable spectral models and uncertainty quantification for proximal sensing.</li>
<li>Linking microbial genes and traits to measurable soil functions.</li>
<li>Monitoring designs that combine benchmark sites, sensing and models with known error.</li>
<li>Participatory frameworks integrating farmer observations into formal monitoring systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'stq1',
      question: {
        ELEMENTARY: 'Why do farmers test their soil?',
        MIDDLE_SCHOOL: 'Why do you take many small cores from across a field for one sample?',
        HIGH_SCHOOL: 'Which of these is a biological soil indicator?',
        UNDERGRADUATE: 'What does soil test calibration do?',
        GRADUATE: 'What is a minimum data set in soil health monitoring?',
        PHD: 'What problem does equivalent soil mass accounting address?',
      },
      options: {
        ELEMENTARY: ['To find out what the soil has and what it needs', 'To paint the soil a new color', 'To make the soil disappear', 'To find buried treasure'],
        MIDDLE_SCHOOL: ['So the sample represents the whole field', 'To make the bag heavier', 'Because labs charge by weight', 'To find the biggest rock'],
        HIGH_SCHOOL: ['Soil texture', 'Microbial activity', 'Soil pH', 'Salinity'],
        UNDERGRADUATE: ['It cleans the lab equipment', 'It relates soil test values to crop yield response in the field', 'It sets fertilizer prices', 'It measures rainfall'],
        GRADUATE: ['A complete list of every soil property', 'A small set of indicators selected to represent soil function efficiently', 'A list of farm machinery', 'The farm budget'],
        PHD: ['Changes in bulk density can make concentration changes misrepresent stock changes', 'Labs using different colors of bags', 'Rainfall at sampling time', 'Microbial DNA degradation'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Testing shows farmers what is in the soil so they only add what is missing.',
        MIDDLE_SCHOOL: 'Soil varies, so mixing many cores gives a sample that stands for the whole field.',
        HIGH_SCHOOL: 'Microbial activity measures soil life; texture, pH and salinity are physical or chemical.',
        UNDERGRADUATE: 'Calibration trials link a test number to whether and how much a crop responds to fertilizer.',
        GRADUATE: 'A minimum data set keeps monitoring affordable while still representing key functions.',
        PHD: 'Comparing equal masses of soil avoids errors when compaction or loosening changes bulk density.',
      },
    },
    {
      id: 'stq2',
      question: {
        ELEMENTARY: 'What does it usually mean if you find lots of worms in a spadeful of soil?',
        MIDDLE_SCHOOL: 'What does pH measure?',
        HIGH_SCHOOL: 'What does aggregate stability tell you?',
        UNDERGRADUATE: 'Why can phosphorus results from different extractants not be compared directly?',
        GRADUATE: 'Why do strip trials strengthen adaptive management?',
        PHD: 'What is a common criticism of composite soil health indices?',
      },
      options: {
        ELEMENTARY: ['The soil is sick', 'The soil is probably healthy', 'The soil is made of sand', 'It is going to snow'],
        MIDDLE_SCHOOL: ['How heavy soil is', 'How acidic or alkaline soil is', 'How many worms live there', 'How deep the roots go'],
        HIGH_SCHOOL: ['How fast plants grow', 'How well soil crumbs hold together when wet', 'How much the soil weighs', 'How warm the soil is'],
        UNDERGRADUATE: ['They always give identical numbers', 'Each extractant recovers a different fraction of the nutrient', 'Phosphorus cannot be measured', 'Only one extractant exists'],
        GRADUATE: ['They avoid any need for monitoring', 'Side-by-side comparisons separate practice effects from year-to-year weather', 'They make soil tests unnecessary', 'They only work in deserts'],
        PHD: ['They are too simple to calculate', 'They conflate inherent and dynamic properties, so some soils score poorly regardless of management', 'They never use numbers', 'They only measure worms'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Worms love healthy soil, so more worms usually means happier soil.',
        MIDDLE_SCHOOL: 'pH shows acidity, which affects how easily plants can absorb nutrients.',
        HIGH_SCHOOL: 'Stable aggregates resist breaking apart in water, a sign of good structure.',
        UNDERGRADUATE: 'Recommendations only make sense with the method calibrated for local soils.',
        GRADUATE: 'Comparing treatments in the same year controls for weather differences between years.',
        PHD: 'Sandy soils, for example, may score low because of parent material, not poor management.',
      },
    },
    {
      id: 'stq3',
      question: {
        ELEMENTARY: 'What should happen to water poured on healthy soil?',
        MIDDLE_SCHOOL: 'If a soil test shows soil is too acidic, what might a farmer add?',
        HIGH_SCHOOL: 'If a nutrient tests high, what is the best action?',
        UNDERGRADUATE: 'What is grid sampling best used for?',
        GRADUATE: 'Why can soil carbon be a difficult indicator for short-term programs?',
        PHD: 'What is a main challenge for using spectroscopy to predict soil properties?',
      },
      options: {
        ELEMENTARY: ['It should turn into ice', 'It should turn the soil blue', 'It should soak in quickly', 'It should bounce off'],
        MIDDLE_SCHOOL: ['Salt', 'Sugar', 'Lime', 'Sand'],
        HIGH_SCHOOL: ['Add even more of it', 'Test it every day', 'Avoid adding more, since it likely will not help and may pollute', 'Burn the crop'],
        UNDERGRADUATE: ['Finding lost tools', 'Measuring rainfall', 'Mapping variability for variable-rate application', 'Counting crops'],
        GRADUATE: ['It never changes at all', 'It is too cheap to measure', 'It changes slowly and varies a lot across a field', 'It responds within days'],
        PHD: ['Spectra cannot be recorded', 'Spectroscopy only works on water', 'Transferring calibrated models across regions is difficult', 'It always needs DNA sequencing'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Healthy soil acts like a sponge and soaks water in instead of letting it puddle.',
        MIDDLE_SCHOOL: 'Lime raises the pH of acidic soil.',
        HIGH_SCHOOL: 'Extra nutrient on high-testing soil wastes money and can run off into water.',
        UNDERGRADUATE: 'Grid samples reveal patterns that variable-rate equipment can respond to.',
        GRADUATE: 'Small, slow changes in carbon can be hidden by spatial variation and measurement error.',
        PHD: 'Spectral models depend on local calibration libraries and often lose accuracy elsewhere.',
      },
    },
    {
      id: 'stq4',
      question: {
        ELEMENTARY: 'What is a soil sample?',
        MIDDLE_SCHOOL: 'What is soil texture?',
        HIGH_SCHOOL: 'Why is a single soil test called a snapshot?',
        UNDERGRADUATE: 'Why are biological indicators useful even though they are less tied to fertilizer rates?',
        GRADUATE: 'What equity issue arises when soil metrics are used for payments?',
        PHD: 'Why is linking microbial DNA data to soil function difficult?',
      },
      options: {
        ELEMENTARY: ['A kind of shovel', 'A soil-colored crayon', 'A tall tree', 'A small amount of soil taken to learn about the whole field'],
        MIDDLE_SCHOOL: ['The smell of soil', 'The temperature of soil', 'The number of worms', 'The mix of sand, silt and clay'],
        HIGH_SCHOOL: ['It is taken with a camera', 'It is always wrong', 'It never changes', 'Results vary with season, moisture and depth, so trends matter more'],
        UNDERGRADUATE: ['They never change', 'They replace all other tests', 'They are always cheaper', 'They respond faster to management and help track change'],
        GRADUATE: ['Every farm has equal lab access', 'Payments are always too high', 'Data has no value', 'Sampling costs can exceed payments, especially for small farms'],
        PHD: ['DNA cannot be extracted from soil', 'Microbes do not do anything', 'Soils contain no microbes', 'Many organisms perform overlapping roles, so composition does not map neatly onto function'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A sample is a little bit of soil that tells scientists about the whole field.',
        MIDDLE_SCHOOL: 'Texture describes the proportions of sand, silt and clay particles.',
        HIGH_SCHOOL: 'Soil changes over time, so repeated tests show more reliable trends.',
        UNDERGRADUATE: 'Biological indicators shift sooner than total organic matter, revealing early progress.',
        GRADUATE: 'Measurement burden can make programs unaffordable for smaller farms.',
        PHD: 'Functional redundancy means many different communities can perform similar functions.',
      },
    },
    {
      id: 'stq5',
      question: {
        ELEMENTARY: 'How does testing soil help rivers and fish?',
        MIDDLE_SCHOOL: 'How can you test how active soil microbes are with a cotton cloth?',
        HIGH_SCHOOL: 'What practice helps rebuild soil with low aggregate stability?',
        UNDERGRADUATE: 'Before concluding that a small rise in organic matter is real, what should you check?',
        GRADUATE: 'What does adaptive management involve?',
        PHD: 'What does a power analysis help determine in soil monitoring?',
      },
      options: {
        ELEMENTARY: ['Farmers add only what is needed, so less fertilizer washes into rivers', 'It makes rivers flow uphill', 'It feeds the fish directly', 'It turns rivers into soil'],
        MIDDLE_SCHOOL: ['Bury it and see how quickly microbes break it down', 'Wave it in the air', 'Wash it in the sink', 'Paint it green'],
        HIGH_SCHOOL: ['Reducing tillage and adding cover crops', 'Plowing more often', 'Leaving soil bare all year', 'Driving heavy machinery on wet soil'],
        UNDERGRADUATE: ['Whether the change is larger than normal sampling and lab variation', 'The color of the lab report', 'The price of corn', 'The brand of soil probe'],
        GRADUATE: ['A cycle of acting, monitoring, learning and adjusting decisions', 'Never changing practices', 'Testing once and stopping', 'Copying another farm exactly'],
        PHD: ['The sample size needed to detect a given change with confidence', 'The electrical power of lab machines', 'The strength of tractors', 'The soil\'s energy content'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Knowing what soil needs means less extra fertilizer reaches rivers where fish live.',
        MIDDLE_SCHOOL: 'Active microbes break down buried cotton faster, showing a lively soil.',
        HIGH_SCHOOL: 'Less disturbance and more living roots rebuild soil crumbs.',
        UNDERGRADUATE: 'Small changes in slow indicators can fall within measurement error.',
        GRADUATE: 'Adaptive management uses monitoring results to adjust practices over time.',
        PHD: 'Power analysis links variability, effect size and sample number to design adequate monitoring.',
      },
    },
  ],
}

export default expansion
