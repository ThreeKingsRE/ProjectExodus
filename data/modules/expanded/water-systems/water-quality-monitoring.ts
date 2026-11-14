import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-quality-monitoring',
  lessons: [
    {
      id: 'ws-wq-1',
      title: 'Is the Water Clean?',
      content: {
        ELEMENTARY: `
<h2>Is the Water Clean?</h2>
<p>Water can look clear and still have things in it we cannot see. That is why scientists test water, just like a doctor checks you to see if you are healthy. They check rivers, lakes and the water that comes out of our taps to make sure it is safe for people, fish, frogs and plants.</p>

<h3>What Scientists Look For</h3>
<p>Scientists use their eyes, special tools and little test kits. They look at how cloudy the water is, how warm it is, and whether there is enough air in it for fish to breathe. They also look for tiny germs and chemicals that could make people or animals sick.</p>
<ul>
<li><strong>Clear water:</strong> water you can see through, which lets sunlight reach water plants</li>
<li><strong>Cloudy water:</strong> water filled with tiny bits of mud or dirt that block the light</li>
<li><strong>Temperature:</strong> how warm or cold the water is, which matters a lot to fish</li>
<li><strong>Oxygen:</strong> the air that fish breathe through their gills from the water</li>
<li><strong>Germs:</strong> tiny living things too small to see that can make people sick</li>
</ul>

<h3>Little Creatures Are Clues</h3>
<p>Here is a neat trick. Scientists turn over rocks in a stream and look at the tiny bugs and snails living there. Some little creatures, like mayfly babies, only live in very clean water. If scientists find lots of them, the stream is probably healthy. If they only find a few kinds of tough bugs, the water may need help.</p>

<h3>Why Testing Matters</h3>
<p>Testing helps people find problems early, before anyone gets sick. If a test shows something is wrong, grown-ups can find out where the problem is coming from and fix it. The water in your tap is tested often so it is safe to drink.</p>

<h3>Be a Water Helper</h3>
<ol>
<li>Never pour paint, oil or medicine down the sink or a drain.</li>
<li>Pick up litter near streams and lakes with a grown-up.</li>
<li>Look closely at a pond or stream: is it clear or cloudy? Can you see any little creatures?</li>
<li>Ask your teacher if your class can join a stream study day.</li>
</ol>

<h3>Think About It</h3>
<p>If you were a fish, what kind of water would you want to live in? Cool, clear water with plenty of oxygen is a happy home for many water animals!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Testing Streams and Lakes</h2>
<p>How do we know if a stream is healthy? Water quality scientists measure several properties of water, both physical and chemical, and they also study the living things that make their home there. Together, these clues tell a story about the health of a stream, lake or wetland.</p>

<h3>Common Water Tests</h3>
<table>
<thead><tr><th>Test</th><th>What it measures</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Temperature</td><td>How warm or cold the water is</td><td>Warm water holds less oxygen and stresses cold-water fish</td></tr>
<tr><td>Dissolved oxygen</td><td>Oxygen gas mixed into the water</td><td>Fish and insects need it to breathe</td></tr>
<tr><td>pH</td><td>How acidic or basic the water is</td><td>Most aquatic life needs water near neutral</td></tr>
<tr><td>Turbidity</td><td>How cloudy the water is</td><td>Cloudy water blocks light and can smother habitats</td></tr>
<tr><td>Nutrients</td><td>Nitrogen and phosphorus</td><td>Too much feeds algae blooms</td></tr>
<tr><td>Bacteria</td><td>Indicator germs such as E. coli</td><td>Signals possible sewage or animal waste</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Dissolved oxygen:</strong> the amount of oxygen gas mixed into water that aquatic animals can breathe</li>
<li><strong>pH:</strong> a scale that shows how acidic or basic water is, with seven being neutral</li>
<li><strong>Turbidity:</strong> a measure of how cloudy water is because of floating particles</li>
<li><strong>Algae bloom:</strong> a fast growth of algae, often fed by extra nutrients, that can harm water life</li>
<li><strong>Macroinvertebrates:</strong> small animals without backbones, like insect larvae and snails, big enough to see</li>
<li><strong>Indicator species:</strong> living things whose presence or absence tells us about water conditions</li>
</ul>

<h3>Living Clues</h3>
<p>Chemical tests show what the water is like at the moment of sampling. Macroinvertebrates live in a stream for months, so they show what conditions have been like over a longer time. Mayfly, stonefly and caddisfly larvae are sensitive to pollution. Worms and some midge larvae can survive in poorer water. Counting which groups are present gives a simple health score.</p>

<h3>Algae and Oxygen</h3>
<p>When fertilizer or sewage adds extra nutrients, algae can grow very fast. When the algae die, bacteria break them down and use up oxygen. Low oxygen can cause fish to die. This chain of events shows how one test result is often connected to another.</p>

<h3>Try It Yourself</h3>
<p>Many communities run volunteer stream monitoring programs where students use test kits and nets. Recording results in the same place over many visits lets you spot changes, such as cloudier water after storms.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Quality Parameters and Testing Methods</h2>
<p>Water quality monitoring combines chemistry, physics and biology to answer practical questions: Is this water safe to drink or swim in? Can it support fish? Is it getting better or worse? Choosing the right parameters and methods depends on the question and on the type of water body being studied.</p>

<h3>Physical, Chemical and Biological Parameters</h3>
<ul>
<li><strong>Conductivity:</strong> how well water conducts electricity, which rises with dissolved salts and minerals</li>
<li><strong>Biochemical oxygen demand:</strong> the oxygen used by microbes breaking down organic matter in a water sample</li>
<li><strong>Nutrient loading:</strong> the amount of nitrogen and phosphorus entering a water body over time</li>
<li><strong>Fecal indicator bacteria:</strong> bacteria such as E. coli used to signal possible contamination by human or animal waste</li>
<li><strong>Biotic index:</strong> a score based on which organisms are present and how tolerant they are of pollution</li>
<li><strong>Eutrophication:</strong> the process by which excess nutrients cause algae growth and oxygen depletion</li>
</ul>
<p>Physical parameters such as temperature and turbidity are quick to measure in the field. Chemical parameters range from simple pH and dissolved oxygen readings to laboratory analysis for metals, pesticides and other trace contaminants. Biological parameters, including macroinvertebrates, fish, algae and bacteria, integrate conditions over time.</p>

<h3>Comparing Methods</h3>
<table>
<thead><tr><th>Method</th><th>Speed</th><th>Precision</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Test strips and color kits</td><td>Minutes</td><td>Low to moderate</td><td>Education, screening, volunteer programs</td></tr>
<tr><td>Handheld electronic meters</td><td>Minutes</td><td>Moderate to high when calibrated</td><td>Field measurements of pH, oxygen, conductivity</td></tr>
<tr><td>Laboratory analysis</td><td>Days</td><td>High</td><td>Regulatory compliance, trace contaminants</td></tr>
<tr><td>Biological surveys</td><td>Hours plus identification time</td><td>Depends on skill</td><td>Long-term ecological health</td></tr>
<tr><td>Continuous sensors</td><td>Real time</td><td>Variable, needs maintenance</td><td>Tracking daily cycles and storm events</td></tr>
</tbody>
</table>

<h3>Why One Sample Is Not Enough</h3>
<p>Water quality changes with time of day, season and weather. Dissolved oxygen often rises in the afternoon as plants photosynthesize and falls overnight. A storm can flush sediment and bacteria into a stream within hours. Good monitoring samples at planned locations and times, often upstream and downstream of a possible source, so that results can be compared fairly.</p>

<h3>Real-World Applications</h3>
<ol>
<li><strong>Drinking water:</strong> utilities test source water and treated water regularly to meet health standards.</li>
<li><strong>Beach advisories:</strong> bacteria tests help decide when swimming is safe.</li>
<li><strong>Pollution tracking:</strong> comparing sites can reveal a leaking pipe or farm runoff.</li>
<li><strong>Restoration checks:</strong> monitoring before and after a project shows whether it worked.</li>
</ol>

<h3>Community Science</h3>
<p>Trained volunteers collect a large share of stream data in many regions. Their records are most useful when they follow consistent procedures, which leads to the professional topic of quality assurance.</p>
`,
        UNDERGRADUATE: `
<h2>Designing Monitoring Programs and Interpreting Data</h2>
<p>A monitoring program is only as good as its design. Before a single sample is taken, the program must define its objectives, the decisions the data will support, and the level of confidence required. This lesson covers program design, quality assurance and quality control (QA/QC), and the statistical reasoning needed to interpret water quality data responsibly.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Monitoring objective:</strong> the specific question a program is designed to answer, such as detecting a trend or checking compliance</li>
<li><strong>Quality assurance:</strong> the planned system of procedures that ensures data are fit for their intended use</li>
<li><strong>Quality control:</strong> the routine checks, such as blanks and duplicates, that measure and limit error in samples</li>
<li><strong>Detection limit:</strong> the lowest concentration a method can reliably distinguish from zero</li>
<li><strong>Representativeness:</strong> how well samples reflect the true condition of the water body in space and time</li>
<li><strong>Statistical power:</strong> the probability that a sampling design will detect a real change of a given size</li>
</ul>

<h3>Program Design Choices</h3>
<table>
<thead><tr><th>Design type</th><th>Question answered</th><th>Typical approach</th></tr></thead>
<tbody>
<tr><td>Fixed-station trend monitoring</td><td>Is quality changing over years?</td><td>Same sites, regular intervals, consistent methods</td></tr>
<tr><td>Probabilistic survey</td><td>What share of streams in a region are in good condition?</td><td>Randomly selected sites to allow unbiased estimates</td></tr>
<tr><td>Targeted investigation</td><td>Where is a pollutant coming from?</td><td>Upstream-downstream pairs, intensive sampling near suspected sources</td></tr>
<tr><td>Compliance monitoring</td><td>Does a discharge or water body meet standards?</td><td>Sampling frequency and methods specified by rules</td></tr>
<tr><td>Event-based sampling</td><td>What happens during storms?</td><td>Automatic samplers triggered by flow or rainfall</td></tr>
</tbody>
</table>

<h3>QA/QC in Practice</h3>
<p>A quality assurance project plan documents objectives, methods, responsibilities and data quality criteria such as precision, accuracy and completeness. Quality control samples quantify error: field blanks reveal contamination during handling, duplicates measure precision, and spiked samples or certified reference materials test accuracy. Instruments are calibrated against standards before use and checked afterward for drift. Chain-of-custody records track each sample from collection to analysis, which matters when data support regulatory or legal decisions.</p>

<h3>Interpreting the Data</h3>
<p>Water quality data are rarely normally distributed. Concentrations are often skewed, include values below the detection limit, and vary with flow and season. Several practices help:</p>
<ol>
<li>Plot the data first: time series, box plots by season and concentration against flow.</li>
<li>Handle censored values below detection limits with methods designed for them rather than substituting arbitrary numbers.</li>
<li>Use nonparametric trend tests or seasonal versions of them when data are skewed and seasonal.</li>
<li>Consider flow adjustment, since a lower concentration in a wet year may reflect dilution rather than improvement.</li>
<li>Distinguish concentration from load: load equals concentration multiplied by flow and reflects total mass delivered.</li>
</ol>

<h3>Biological Assessment</h3>
<p>Biological indices compare observed communities to those expected at reference sites with minimal disturbance. Multimetric indices combine measures such as taxa richness and the proportion of sensitive taxa. Their strength is integration over time; their limitation is that they show that a stream is impaired without always identifying why, which calls for stressor identification using chemical and habitat data.</p>
`,
        GRADUATE: `
<h2>Standards, TMDLs and Adaptive Management</h2>
<p>Monitoring data become consequential when they feed regulatory decisions. Water quality standards define what a water body should support, assessments determine whether it does, and restoration plans allocate responsibility for pollutant reductions. This lesson examines that chain, using the United States framework as a detailed example while noting that other jurisdictions follow broadly similar logic.</p>

<h3>The Standards Framework</h3>
<ul>
<li><strong>Designated use:</strong> the purpose a water body is expected to support, such as drinking water supply, recreation or aquatic life</li>
<li><strong>Water quality criteria:</strong> numeric or narrative limits on pollutants or conditions needed to protect a designated use</li>
<li><strong>Antidegradation:</strong> a policy that limits lowering of water quality in waters that currently meet or exceed standards</li>
<li><strong>Total maximum daily load:</strong> a calculation of the maximum pollutant amount a water body can receive and still meet standards, divided among sources</li>
<li><strong>Waste load allocation:</strong> the portion of a total maximum daily load assigned to permitted point sources</li>
<li><strong>Load allocation:</strong> the portion assigned to nonpoint sources and natural background</li>
</ul>
<p>Under the Clean Water Act, states assess waters against standards and list those that are impaired. For listed waters, a total maximum daily load (TMDL) is developed. A TMDL sums waste load allocations, load allocations and a margin of safety that accounts for uncertainty. Point source allocations are implemented through discharge permits, while nonpoint allocations typically rely on voluntary programs, incentives and state authorities.</p>

<h3>The Implementation Gap</h3>
<p>Many TMDLs have been written, yet attainment of standards often lags. A recurring reason is that nonpoint sources, especially agricultural and urban runoff, are harder to regulate than pipes. Monitoring designed only to support listing may also be too sparse to show whether implementation is working. Some programs use water quality trading, letting sources that can reduce pollution cheaply sell credits to others, though trading requires credible verification and attention to local hotspots.</p>

<h3>Adaptive Management</h3>
<table>
<thead><tr><th>Stage</th><th>Role of monitoring</th></tr></thead>
<tbody>
<tr><td>Assess</td><td>Characterize condition and identify stressors</td></tr>
<tr><td>Plan</td><td>Set measurable targets and hypotheses about which actions will work</td></tr>
<tr><td>Implement</td><td>Track which practices are installed and where</td></tr>
<tr><td>Monitor</td><td>Measure response at scales matched to expected effects</td></tr>
<tr><td>Evaluate and adjust</td><td>Compare outcomes to targets and revise actions</td></tr>
</tbody>
</table>
<p>Adaptive management only works if monitoring has enough power to detect expected changes within a useful time frame. Lag times are a common obstacle: nutrients stored in soils and groundwater can delay water quality response for years after practices are adopted, so short-term data may falsely suggest failure.</p>

<h3>Equity and Governance</h3>
<p>Monitoring networks are unevenly distributed. Small rural systems, private wells and some Indigenous and low-income communities may have sparse data, which can hide exposure. Community-based monitoring, data-sharing agreements that respect community ownership, and transparent public reporting can address these gaps. Who decides where monitors go shapes whose problems are seen.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Confirm that designated uses and criteria reflect current science and community uses.</li>
<li>Check whether monitoring is spatially and temporally adequate for the decisions it supports.</li>
<li>Assess how allocations will be implemented, especially for nonpoint sources.</li>
<li>Build in lag-time expectations and interim milestones.</li>
<li>Publish data and progress in accessible forms to support accountability.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Sensor Networks and Predictive Water Quality</h2>
<p>Water quality science is shifting from sparse grab samples toward high-frequency sensing, large integrated datasets and predictive models. These tools reveal dynamics that monthly sampling misses, but they also raise new problems in data quality, model transferability and decision making. This lesson surveys methods, debates and research directions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>High-frequency monitoring:</strong> measuring water quality at intervals of minutes to hours using in-situ sensors</li>
<li><strong>Surrogate regression:</strong> estimating hard-to-measure constituents from continuously measured proxies such as turbidity or conductivity</li>
<li><strong>Biofouling:</strong> the growth of organisms on sensor surfaces that biases readings over time</li>
<li><strong>Concentration-discharge relationship:</strong> how a constituent's concentration changes with streamflow, revealing source and transport behavior</li>
<li><strong>Data assimilation:</strong> combining model predictions with observations to update estimates of system state</li>
<li><strong>Process-based model:</strong> a model built from physical, chemical and biological equations rather than statistical patterns alone</li>
</ul>

<h3>What High-Frequency Data Reveal</h3>
<p>Continuous records capture storm pulses, diel cycles in oxygen and nitrate, and hysteresis, in which concentrations differ on the rising and falling limbs of a hydrograph. Hysteresis patterns help distinguish near-channel sources from distant ones and indicate whether a constituent is supply-limited or transport-limited. Such analysis was rarely possible with monthly samples, which tend to miss short events that may carry a large share of annual loads.</p>

<h3>Sensor Challenges</h3>
<p>Field sensors face biofouling, sediment burial, drift, power and communication failures. Wipers, protective housings and frequent servicing reduce fouling, but data still require correction using calibration checks and paired grab samples. Optical sensors for nitrate and dissolved organic matter can be affected by turbidity and temperature. Automated anomaly detection and transparent correction workflows are active areas of method development, as is quantifying uncertainty after correction.</p>

<h3>Modeling Approaches Compared</h3>
<table>
<thead><tr><th>Approach</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Process-based watershed models</td><td>Represent mechanisms, support scenario analysis</td><td>Many parameters, equifinality, heavy data needs</td></tr>
<tr><td>Statistical and regression models</td><td>Transparent, efficient with long records</td><td>Limited extrapolation beyond observed conditions</td></tr>
<tr><td>Machine learning models</td><td>Capture nonlinear patterns in large datasets</td><td>Risk of poor transfer to new sites or climates, limited interpretability</td></tr>
<tr><td>Hybrid or physics-guided models</td><td>Combine mechanistic structure with data-driven flexibility</td><td>Methodologically young, validation standards still forming</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Researchers debate how far data-driven models can be trusted for forecasting under changing climate and land use, when training data come from a different regime. Another debate concerns equifinality: many parameter sets in process models can fit observations equally well while implying different responses to management. There are also questions about whether dense sensing in a few well-funded catchments biases scientific understanding toward particular landscapes.</p>

<h3>Forecasting and Early Warning</h3>
<p>Short-term forecasts of harmful algal blooms, fecal bacteria at beaches and source water turbidity can support operational decisions. Value depends on forecast skill, lead time and how users act on warnings. Evaluating forecasts by decision outcomes, not just statistical accuracy, is an emerging practice.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust, low-maintenance sensors for nutrients, organic contaminants and pathogens.</li>
<li>Standardized, reproducible workflows for correcting and flagging sensor data.</li>
<li>Models that transfer reliably across sites and remain valid under nonstationary conditions.</li>
<li>Integrating community-collected data with professional networks while respecting data sovereignty.</li>
<li>Linking forecast information to decisions and measuring its real-world value.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wwqq1',
      question: {
        ELEMENTARY: 'Why do scientists test water?',
        MIDDLE_SCHOOL: 'What does dissolved oxygen tell us?',
        HIGH_SCHOOL: 'Why are macroinvertebrates useful in water quality monitoring?',
        UNDERGRADUATE: 'What is the purpose of QA/QC in monitoring?',
        GRADUATE: 'What is a TMDL?',
        PHD: 'What is a key challenge for continuous in-situ sensors?',
      },
      options: {
        ELEMENTARY: ['To make sure it is safe for people and animals', 'To make the water blue', 'To heat the water up', 'To add more fish'],
        MIDDLE_SCHOOL: ['How much oxygen is available for fish and insects to breathe', 'The color of the water', 'How the water tastes', 'How heavy the water is'],
        HIGH_SCHOOL: ['They are biological indicators that reflect conditions over time', 'They are only food for fish', 'They make water cleaner by themselves', 'They are only decoration'],
        UNDERGRADUATE: ['To ensure data are fit for their intended use by controlling and measuring error', 'To speed up sampling by skipping calibration', 'To answer public questions', 'To increase the number of sites'],
        GRADUATE: ['The maximum pollutant amount a water body can receive and still meet standards, divided among sources', 'A temperature limit for drinking water', 'A minimum drainage level', 'A laboratory method code'],
        PHD: ['Biofouling and drift that bias readings and require correction', 'Sensors never need power', 'Sensors are always perfectly accurate', 'Sensors only work in winter'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Testing water helps make sure it is safe for people, animals and plants.',
        MIDDLE_SCHOOL: 'Dissolved oxygen is the oxygen mixed into water that fish and insects breathe.',
        HIGH_SCHOOL: 'Macroinvertebrates live in streams for months, so their presence integrates conditions over time.',
        UNDERGRADUATE: 'QA/QC uses plans, calibration, blanks and duplicates to ensure data quality is known and adequate.',
        GRADUATE: 'A TMDL sets a pollutant budget and allocates it among point sources, nonpoint sources and a margin of safety.',
        PHD: 'Organisms growing on sensors and gradual drift mean data need servicing, calibration checks and correction.',
      },
    },
    {
      id: 'wwqq2',
      question: {
        ELEMENTARY: 'What does it mean if lots of mayfly babies live in a stream?',
        MIDDLE_SCHOOL: 'What does turbidity measure?',
        HIGH_SCHOOL: 'Why is one water sample usually not enough?',
        UNDERGRADUATE: 'What does a field blank reveal?',
        GRADUATE: 'Why do nonpoint allocations in TMDLs often lag in implementation?',
        PHD: 'What does hysteresis in a concentration-discharge plot show?',
      },
      options: {
        ELEMENTARY: ['The stream is probably very dirty', 'The stream is probably clean and healthy', 'The stream has no water', 'The stream is too cold'],
        MIDDLE_SCHOOL: ['How salty water is', 'How cloudy water is because of floating particles', 'How fast water flows', 'How deep water is'],
        HIGH_SCHOOL: ['Samples are too expensive to repeat', 'Water quality changes with time of day, season and weather', 'Water never changes', 'Laws allow only one sample'],
        UNDERGRADUATE: ['The exact pollutant concentration in the stream', 'Contamination introduced during sample handling', 'The detection limit of every method', 'The stream\'s flow rate'],
        GRADUATE: ['Nonpoint sources do not exist', 'Runoff from farms and cities is harder to regulate than pipe discharges', 'Permits cover all farms automatically', 'TMDLs ignore nonpoint sources entirely'],
        PHD: ['That sensors are broken', 'Concentrations differ on rising and falling limbs, hinting at source location and transport', 'That flow is constant', 'That the constituent is absent'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Mayfly babies need very clean water, so finding many of them is a good sign.',
        MIDDLE_SCHOOL: 'Turbidity measures cloudiness from particles like mud that block light.',
        HIGH_SCHOOL: 'Oxygen changes over a day and storms can change water within hours, so planned repeated sampling is needed.',
        UNDERGRADUATE: 'A field blank is clean water handled like a sample, so anything detected came from handling or equipment.',
        GRADUATE: 'Nonpoint sources usually rely on voluntary programs and incentives rather than enforceable permits.',
        PHD: 'Hysteresis loops help distinguish near-channel from distant sources and supply- from transport-limited behavior.',
      },
    },
    {
      id: 'wwqq3',
      question: {
        ELEMENTARY: 'Why is cloudy water a problem for water plants?',
        MIDDLE_SCHOOL: 'What can happen when extra nutrients enter a lake?',
        HIGH_SCHOOL: 'What does conductivity tell us about water?',
        UNDERGRADUATE: 'Why can flow adjustment be important when analyzing trends?',
        GRADUATE: 'What is a margin of safety in a TMDL for?',
        PHD: 'What is equifinality in process-based models?',
      },
      options: {
        ELEMENTARY: ['It makes the water too sweet', 'It makes the water too warm', 'It blocks the sunlight plants need', 'It gives plants too much food'],
        MIDDLE_SCHOOL: ['The water turns to ice', 'Fish grow bigger and healthier', 'Algae blooms grow and then oxygen can drop when they decay', 'Nothing happens'],
        HIGH_SCHOOL: ['How cold the water is', 'How many fish live there', 'How much dissolved salts and minerals it contains', 'How clear it looks'],
        UNDERGRADUATE: ['Flow has no effect on concentration', 'Laws require it', 'A lower concentration in a wet year may reflect dilution rather than real improvement', 'It removes all outliers'],
        GRADUATE: ['Extra profit for dischargers', 'Room for new factories', 'Accounting for uncertainty in the load calculation', 'Rewarding volunteers'],
        PHD: ['All models give identical results', 'Models have no parameters', 'Many parameter sets fit observations equally well yet imply different responses', 'A model that only works at equilibrium'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Tiny bits of mud make water cloudy and stop sunlight from reaching water plants.',
        MIDDLE_SCHOOL: 'Nutrients feed algae; when the algae die, bacteria use up oxygen and fish can suffer.',
        HIGH_SCHOOL: 'Dissolved salts and minerals carry electric current, so conductivity rises as they increase.',
        UNDERGRADUATE: 'Concentrations vary with flow, so adjusting for flow separates weather effects from true trends.',
        GRADUATE: 'The margin of safety covers uncertainty in how loads relate to water quality.',
        PHD: 'Equifinality means good fit does not guarantee the model represents processes correctly for management scenarios.',
      },
    },
    {
      id: 'wwqq4',
      question: {
        ELEMENTARY: 'Which of these should never go down a drain?',
        MIDDLE_SCHOOL: 'What does pH measure?',
        HIGH_SCHOOL: 'What is eutrophication?',
        UNDERGRADUATE: 'What is a detection limit?',
        GRADUATE: 'Why can short-term monitoring falsely suggest that restoration has failed?',
        PHD: 'What is a surrogate regression?',
      },
      options: {
        ELEMENTARY: ['Clean rain', 'Melting snow', 'A splash of tap water', 'Paint, oil or medicine'],
        MIDDLE_SCHOOL: ['Water temperature', 'Water speed', 'Water depth', 'How acidic or basic water is'],
        HIGH_SCHOOL: ['Water freezing in winter', 'Removing salt from water', 'Adding oxygen to a stream', 'Excess nutrients causing algae growth and oxygen depletion'],
        UNDERGRADUATE: ['The highest concentration a lab can measure', 'The deepest a sampler can go', 'The legal limit for a pollutant', 'The lowest concentration a method can reliably distinguish from zero'],
        GRADUATE: ['Monitoring is always wrong', 'Restoration never works', 'Lab methods expire', 'Nutrients stored in soils and groundwater can delay the water quality response for years'],
        PHD: ['A model of fish behavior', 'A test for sensor power', 'A regression on rainfall only', 'Estimating hard-to-measure constituents from continuously measured proxies like turbidity'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Paint, oil and medicine can harm fish and make water unsafe, so they need special disposal.',
        MIDDLE_SCHOOL: 'pH shows how acidic or basic water is, with seven being neutral.',
        HIGH_SCHOOL: 'Eutrophication is nutrient enrichment that fuels algae and can lead to low oxygen.',
        UNDERGRADUATE: 'Below the detection limit, a method cannot reliably tell a small value from zero.',
        GRADUATE: 'Legacy nutrients cause lag times, so interim milestones and realistic expectations are needed.',
        PHD: 'Surrogates such as turbidity can estimate constituents like suspended sediment continuously.',
      },
    },
    {
      id: 'wwqq5',
      question: {
        ELEMENTARY: 'What do fish breathe from the water?',
        MIDDLE_SCHOOL: 'What are macroinvertebrates?',
        HIGH_SCHOOL: 'What do fecal indicator bacteria such as E. coli suggest?',
        UNDERGRADUATE: 'What is the difference between concentration and load?',
        GRADUATE: 'What is a designated use?',
        PHD: 'What is a known risk of machine learning water quality models?',
      },
      options: {
        ELEMENTARY: ['Oxygen', 'Sand', 'Salt', 'Smoke'],
        MIDDLE_SCHOOL: ['Small animals without backbones, like insect larvae and snails', 'Large fish such as trout', 'Tiny plants floating on the surface', 'Rocks on the stream bed'],
        HIGH_SCHOOL: ['Possible contamination by human or animal waste', 'Very clean water', 'High salt content', 'Cold water temperatures'],
        UNDERGRADUATE: ['Load is concentration multiplied by flow and reflects total mass delivered', 'They are the same thing', 'Concentration is always larger than load', 'Load only applies to groundwater'],
        GRADUATE: ['The purpose a water body is expected to support, such as recreation or aquatic life', 'The amount of water a city uses', 'A type of permit fee', 'A sampling schedule'],
        PHD: ['Poor transfer to new sites or changing conditions outside the training data', 'They cannot use large datasets', 'They always explain mechanisms clearly', 'They require no data'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fish use their gills to breathe oxygen that is mixed into the water.',
        MIDDLE_SCHOOL: 'Macroinvertebrates are small creatures without backbones that are big enough to see.',
        HIGH_SCHOOL: 'Indicator bacteria signal that waste, and possibly harmful germs, may be present.',
        UNDERGRADUATE: 'Concentration is mass per volume; load accounts for flow and gives total mass over time.',
        GRADUATE: 'Designated uses define what a water body should support, and criteria are set to protect them.',
        PHD: 'Data-driven models may perform poorly when climate, land use or site characteristics differ from the training data.',
      },
    },
  ],
}

export default expansion
