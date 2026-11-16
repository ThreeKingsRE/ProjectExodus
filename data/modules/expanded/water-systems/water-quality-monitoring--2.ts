import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-quality-monitoring~2',
  lessons: [
    {
      id: 'ws-mon-1',
      title: 'Testing the Water: From Source to Tap',
      content: {
        ELEMENTARY: `
<h2>Water Detectives at Work</h2>
<p>Every time you fill a glass from the tap, a team of water detectives has already been busy. These scientists test the water many times on its journey to your home. They look for anything that could make people sick. Let's follow the water and see how they keep it safe!</p>

<h3>The Water's Journey</h3>
<p>Water starts in a river, a lake or deep underground. It travels to a treatment plant, where it is cleaned. Then it flows through long pipes under the streets to homes and schools. Scientists test the water at the start, at the plant and even in the pipes near your home.</p>

<h3>The Detective's Toolkit</h3>
<ul>
<li><strong>Test strip:</strong> a small paper strip that changes color to show what is in the water</li>
<li><strong>Thermometer:</strong> a tool that tells how warm or cold the water is</li>
<li><strong>Sample bottle:</strong> a very clean bottle used to collect a little water for testing</li>
<li><strong>Microscope:</strong> a tool that makes tiny living things look big enough to see</li>
<li><strong>Germs:</strong> tiny living things too small to see that can make people sick</li>
</ul>

<h3>What Do They Look For?</h3>
<p>Clean water looks clear, but that is not enough. Some germs and chemicals are invisible! So detectives check if the water is cloudy, whether it has the right amount of cleaning chemical to kill germs, and whether any harmful things are hiding in it. If something is wrong, they fix it fast and tell people what to do.</p>

<h3>Some Tests Happen All by Themselves</h3>
<p>Not every test needs a person. Some special machines, called sensors, sit in the water all day and night. They measure the water again and again and send messages to computers. If something changes suddenly, an alarm tells the scientists to check right away.</p>

<h3>You Can Help Too</h3>
<ol>
<li>Never pour paint, oil or medicine down the sink or drain.</li>
<li>Pick up litter so it does not wash into rivers.</li>
<li>Ask your teacher if your class can test a puddle or pond with test strips.</li>
</ol>

<h3>Think About It</h3>
<p>Why do you think the detectives test the water many times instead of just once? Water can change as it travels, so checking often helps keep everyone safe.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Water Quality Is Measured</h2>
<p>Water quality describes how suitable water is for a purpose, such as drinking, swimming or supporting fish. To know whether water is safe, scientists measure many different features. Some measurements are quick and done right beside a river, while others need a laboratory. In this lesson you will learn the most common tests and why each one matters.</p>

<h3>The Main Tests</h3>
<table>
<thead><tr><th>Test</th><th>What it tells us</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>pH</td><td>How acidic or basic water is, on a 0 to 14 scale</td><td>Most fish and plants live best near the middle of the scale</td></tr>
<tr><td>Temperature</td><td>How warm the water is</td><td>Warm water holds less oxygen</td></tr>
<tr><td>Dissolved oxygen</td><td>How much oxygen is mixed into the water</td><td>Fish and insects need it to breathe</td></tr>
<tr><td>Turbidity</td><td>How cloudy the water is</td><td>Cloudiness can hide germs and block sunlight</td></tr>
<tr><td>Nitrates and phosphates</td><td>Nutrients, often from fertilizer or sewage</td><td>Too much feeds algae blooms</td></tr>
<tr><td>Bacteria</td><td>Signs of germs from human or animal waste</td><td>Can make people sick</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>pH:</strong> a number that shows how acidic or basic a liquid is, with 7 being neutral</li>
<li><strong>Dissolved oxygen:</strong> oxygen gas mixed into water that animals need to breathe</li>
<li><strong>Turbidity:</strong> how cloudy water is because of tiny floating particles</li>
<li><strong>Contaminant:</strong> any substance in water that can harm people or nature</li>
<li><strong>Sensor:</strong> a device that measures something automatically and records the result</li>
<li><strong>Indicator bacteria:</strong> common bacteria whose presence warns that harmful germs may be present</li>
</ul>

<h3>Checking Drinking Water</h3>
<p>Water utilities test drinking water at the source, during treatment and in the pipes. One important check is the amount of leftover disinfectant, usually chlorine. A small amount should remain all the way to your tap so germs cannot grow in the pipes. Utilities also test for bacteria regularly, because testing for every possible germ would be impossible. Finding indicator bacteria is a warning sign that something may be wrong.</p>

<h3>Measuring Around the Clock</h3>
<p>Some rivers and treatment plants have sensors that measure temperature, pH, turbidity and oxygen every few minutes. The data travel to computers, where operators can watch for sudden changes. This helps them catch problems, such as a spill upstream, much faster than waiting for a lab result.</p>

<h3>Try It Yourself</h3>
<p>With simple test kits, students can measure pH, temperature and turbidity at a local stream through the seasons. Recording results carefully in a notebook, with the date and place, is how real scientists build a picture of a river's health over time.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Quality Parameters, Methods and Monitoring Systems</h2>
<p>Monitoring water quality means repeatedly measuring the physical, chemical and biological features of water to understand its condition and detect change. It protects drinking water, guides pollution control and tracks the health of rivers, lakes and coasts. This lesson explains what is measured, how it is measured and how different monitoring approaches fit together into a system.</p>

<h3>Three Families of Parameters</h3>
<ul>
<li><strong>Physical parameters:</strong> properties such as temperature, turbidity, color and conductivity that can often be measured directly</li>
<li><strong>Chemical parameters:</strong> measurements of substances like nutrients, metals, pH, dissolved oxygen and disinfectant levels</li>
<li><strong>Biological parameters:</strong> measurements of living things, such as bacteria, algae and aquatic insects</li>
<li><strong>Conductivity:</strong> how easily water carries an electric current, which rises with dissolved salts</li>
<li><strong>Biological indicators:</strong> organisms whose presence, absence or abundance reveals water conditions over time</li>
</ul>

<h3>Comparing Monitoring Methods</h3>
<table>
<thead><tr><th>Method</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Grab samples sent to a lab</td><td>Accurate, can test many substances</td><td>Slow results; shows one moment only</td></tr>
<tr><td>Field kits and handheld meters</td><td>Fast, low cost, easy to use</td><td>Less precise; need careful calibration</td></tr>
<tr><td>Continuous sensors</td><td>Data every few minutes, catch sudden events</td><td>Limited parameters; sensors drift and foul</td></tr>
<tr><td>Biological surveys</td><td>Reveal long-term conditions</td><td>Need trained identification; slower to respond</td></tr>
<tr><td>Satellite and aerial imagery</td><td>Cover large areas such as lakes and coasts</td><td>Only see surface features like color and algae</td></tr>
</tbody>
</table>

<h3>Why Bugs Tell the Truth</h3>
<p>A chemical test captures conditions at one moment, but insects such as mayfly, stonefly and caddisfly larvae live in a stream for months. Many of these are sensitive to pollution and low oxygen. If they are abundant, the stream has likely been healthy for a long time. If only pollution-tolerant species remain, something has been wrong, even if today's sample looks fine.</p>

<h3>Monitoring Drinking Water Systems</h3>
<p>Utilities monitor raw water, treated water and the distribution network. Key checks include turbidity after filtration, disinfectant residual throughout the pipes and indicator bacteria. Automatic monitoring systems at treatment plants feed live readings to control rooms, so operators can adjust treatment within minutes. Regular laboratory tests for metals such as lead, and for other chemicals, confirm that water meets health standards.</p>

<h3>Real-World Applications</h3>
<ol>
<li><strong>Beach advisories:</strong> bacteria tests decide when swimming is unsafe after storms.</li>
<li><strong>Algae alerts:</strong> monitoring warns when harmful algal blooms threaten drinking water or pets.</li>
<li><strong>Spill response:</strong> upstream sensors can give treatment plants time to close intakes.</li>
<li><strong>Community science:</strong> trained volunteers extend monitoring to streams agencies cannot visit often.</li>
</ol>

<h3>Trade-Offs</h3>
<p>No single method is enough. Labs give precision, sensors give speed, biology gives history and satellites give coverage. Good monitoring programs combine them, and they plan carefully where and how often to sample, because poorly planned data can be expensive and still miss the problem.</p>
`,
        UNDERGRADUATE: `
<h2>Monitoring Networks, Data Management and Compliance</h2>
<p>Water quality data are only as useful as the network that collects them and the systems that manage them. At this level we analyze monitoring as an information system: how networks are designed, how data quality is assured, how data are stored and shared, and how monitoring supports regulatory compliance. The central idea is that every monitoring program should start from a clear question.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Monitoring objective:</strong> the specific question a program must answer, such as compliance, trend detection or early warning</li>
<li><strong>Quality assurance and quality control:</strong> planned procedures and checks that make sure monitoring data are accurate, precise and defensible</li>
<li><strong>Detection limit:</strong> the lowest concentration of a substance that a method can reliably distinguish from zero</li>
<li><strong>Chain of custody:</strong> a written record of who handled a sample and when, protecting its legal reliability</li>
<li><strong>Metadata:</strong> information describing how, where and when data were collected, needed to interpret results correctly</li>
<li><strong>Compliance monitoring:</strong> sampling designed to show whether a water system or discharger meets legal limits</li>
</ul>

<h3>Network Design Choices</h3>
<table>
<thead><tr><th>Objective</th><th>Typical design</th><th>Key statistical concern</th></tr></thead>
<tbody>
<tr><td>Compliance</td><td>Fixed sites and schedules defined by regulation</td><td>Representative sampling of the regulated point</td></tr>
<tr><td>Trend detection</td><td>Long-term fixed stations with consistent methods</td><td>Enough record length to separate trend from variability</td></tr>
<tr><td>Status assessment</td><td>Probability-based random site selection</td><td>Unbiased estimates for the whole water body population</td></tr>
<tr><td>Early warning</td><td>Continuous sensors upstream of intakes</td><td>Balancing false alarms against missed events</td></tr>
</tbody>
</table>
<p>Sampling frequency must match variability. Many pollutants, such as sediment and phosphorus, are carried mostly during storms. A program that samples only on fixed calm days can badly underestimate loads. Flow-weighted or event-triggered sampling helps correct this.</p>

<h3>QA/QC in Practice</h3>
<ol>
<li>Write a quality assurance plan stating objectives, methods and acceptance criteria.</li>
<li>Calibrate instruments with known standards before and after use.</li>
<li>Collect field blanks and duplicates to detect contamination and measure precision.</li>
<li>Use spiked samples to check that lab methods recover known amounts.</li>
<li>Flag, document and never silently delete questionable values.</li>
</ol>

<h3>Data Management</h3>
<p>Large programs produce data from many labs, sensors and volunteers. Consistent units, parameter names and site identifiers are essential, as are metadata on methods and detection limits. Results below detection limits require careful statistical treatment rather than being recorded as zero. Shared databases with common standards allow data from different agencies to be combined into regional assessments.</p>

<h3>Regulatory Compliance</h3>
<p>Drinking water rules typically set maximum contaminant levels or treatment requirements, along with required sampling frequencies and reporting. Discharge permits require facilities to monitor their effluent and report results. Compliance depends on credible data, which is why QA/QC and chain of custody matter. Reasoning quantitatively: if a system samples only a small fraction of taps, the chance of catching an intermittent problem depends on sample number and how localized the problem is, which is why sampling plans target higher-risk locations.</p>
`,
        GRADUATE: `
<h2>Real-Time Monitoring, Sensor Networks and Early Warning Systems</h2>
<p>Traditional water quality monitoring relied on periodic samples and laboratory analysis that took days. Real-time sensor networks now let utilities and agencies watch water conditions continuously. Used well, they turn monitoring into an operational tool for protecting public health. Used poorly, they generate floods of unreliable data and alarms no one trusts. This lesson examines design, governance and evaluation of real-time systems.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>SCADA:</strong> supervisory control and data acquisition, the system that collects real-time data from sensors and lets operators control equipment</li>
<li><strong>Early warning system:</strong> an integrated set of sensors, analysis and response procedures that detects contamination in time to act</li>
<li><strong>Event detection algorithm:</strong> software that flags unusual patterns across sensor signals that may indicate contamination</li>
<li><strong>Surrogate parameter:</strong> an easily measured property, such as conductivity or chlorine residual, that changes when harder-to-measure contaminants are present</li>
<li><strong>Sensor drift:</strong> a gradual shift in sensor readings over time that makes data inaccurate unless corrected</li>
<li><strong>Response protocol:</strong> a pre-agreed plan specifying who investigates an alarm and what actions follow</li>
</ul>

<h3>What Real-Time Systems Can and Cannot Do</h3>
<p>Few contaminants can be measured directly and cheaply in real time. Instead, networks track surrogates: a sudden drop in chlorine residual, a jump in turbidity, or an unexpected change in conductivity or organic carbon can signal intrusion or a spill. Event detection compares current readings with expected baselines, often accounting for daily demand patterns. Real-time data identify that something has changed; confirmation still requires sampling and laboratory analysis.</p>

<h3>Designing an Early Warning System</h3>
<table>
<thead><tr><th>Component</th><th>Design question</th><th>Common pitfall</th></tr></thead>
<tbody>
<tr><td>Sensor placement</td><td>Which locations cover the most population and risk?</td><td>Placing sensors where access is easy rather than where risk is high</td></tr>
<tr><td>Parameters</td><td>Which surrogates respond to likely threats?</td><td>Measuring many parameters with little maintenance budget</td></tr>
<tr><td>Data communication</td><td>Is transmission reliable and cyber-secure?</td><td>Connecting control systems to networks without adequate protection</td></tr>
<tr><td>Event detection</td><td>What alarm threshold balances false positives and misses?</td><td>Alarm fatigue from frequent false alerts</td></tr>
<tr><td>Response</td><td>Who acts, how fast, and how are the public informed?</td><td>Data with no clear owner or response plan</td></tr>
</tbody>
</table>

<h3>Source Water and Watershed Networks</h3>
<p>Upstream river monitoring can give intake operators time to stop withdrawals before a spill arrives. Shared networks across jurisdictions require agreements on data sharing, maintenance responsibility and notification. Many watersheds cross municipal, state or national borders, so governance can be harder than engineering.</p>

<h3>Equity and Governance</h3>
<p>Small and rural systems often lack the staff and funding for real-time monitoring, yet they may face higher risks. Communities relying on private wells may have no routine monitoring at all. Publicly accessible data dashboards can build trust, but only if data are explained clearly and gaps are disclosed. Investment decisions should weigh where monitoring reduces risk most, not only where it is easiest to deploy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the threats the system must detect and the response time needed.</li>
<li>Model sensor placement for coverage of population and vulnerable users.</li>
<li>Budget for maintenance, calibration and data review over the full life cycle.</li>
<li>Track false alarm rates and detection performance with drills and tests.</li>
<li>Document response protocols and review them after every real event.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Remote Sensing, Machine Learning and Citizen Science</h2>
<p>Water quality science faces a basic mismatch: water bodies are numerous and variable, while conventional monitoring is sparse and costly. Three research fronts aim to close this gap. Remote sensing extends observation across space, machine learning extracts patterns and predictions from heterogeneous data, and citizen science multiplies the number of observers. Each raises distinct methodological questions about validity, bias and integration.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Optically active constituents:</strong> water properties such as chlorophyll, suspended sediment and colored dissolved organic matter that change how water reflects light</li>
<li><strong>Atmospheric correction:</strong> processing that removes the influence of the atmosphere from satellite signals, a major error source over water</li>
<li><strong>Surrogate modeling:</strong> estimating hard-to-measure constituents from easier measurements using statistical or machine learning relationships</li>
<li><strong>Domain shift:</strong> a drop in model performance when applied to sites, seasons or conditions different from those in its training data</li>
<li><strong>Data fusion:</strong> combining information from satellites, sensors, laboratory samples and models into a single consistent estimate</li>
<li><strong>Participatory monitoring:</strong> monitoring designed and carried out with community members, who help decide questions and use the results</li>
</ul>

<h3>Remote Sensing of Water Quality</h3>
<p>Satellites and aerial sensors detect optically active constituents and surface temperature. Algal blooms, sediment plumes and thermal discharges are well-suited targets. Constituents without an optical signature, such as many dissolved chemicals and pathogens, can only be inferred indirectly. Challenges include atmospheric correction, adjacency effects near shorelines, cloud cover, the optical complexity of inland and coastal waters compared with the open ocean, and the trade-off between spatial resolution and revisit frequency.</p>

<h3>Machine Learning Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Typical use</th><th>Main concern</th></tr></thead>
<tbody>
<tr><td>Regression and tree ensembles</td><td>Surrogate estimation from sensor data</td><td>Extrapolation beyond training conditions</td></tr>
<tr><td>Deep learning on imagery</td><td>Mapping blooms or turbidity from satellites</td><td>Labeled data scarcity, interpretability</td></tr>
<tr><td>Anomaly detection</td><td>Flagging sensor faults or contamination events</td><td>Distinguishing real events from sensor drift</td></tr>
<tr><td>Physics-guided and hybrid models</td><td>Forecasting temperature, oxygen or blooms</td><td>Balancing mechanistic constraints with flexibility</td></tr>
</tbody>
</table>
<p>A recurring debate concerns whether purely data-driven models generalize. Water quality relationships are non-stationary under land-use and climate change, so models trained on the past may fail in the future. Physics-guided approaches, rigorous out-of-site validation and explicit uncertainty estimates are increasingly treated as essential.</p>

<h3>Citizen Science</h3>
<p>Volunteer programs collect observations at scales agencies cannot match, from stream invertebrate surveys to smartphone-based color readings. Research shows that well-trained volunteers using standardized protocols can produce data of useful quality, but sampling tends to cluster where volunteers live, creating spatial bias. Methodological work addresses calibration against professional data, statistical correction for uneven effort and governance of data use. Participatory approaches also raise questions of power and benefit: who sets research questions, who owns data, and whether results lead to action for affected communities, including Indigenous communities with their own knowledge of local waters.</p>

<h3>Contested Questions</h3>
<ol>
<li>How much confidence regulators should place in remotely sensed or volunteer data for formal assessments.</li>
<li>Whether model-based estimates should fill gaps in official records, and how to label them.</li>
<li>How to report uncertainty so that managers can act without overstating precision.</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Fusion frameworks that combine satellites, sensors and volunteers with consistent uncertainty.</li>
<li>Transferable models validated across regions and robust to domain shift.</li>
<li>Better retrieval algorithms for optically complex inland and coastal waters.</li>
<li>Methods to detect and correct spatial bias in citizen science data.</li>
<li>Studies of how monitoring information actually changes management decisions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wmon2q1',
      question: {
        ELEMENTARY: 'Why do scientists test water?',
        MIDDLE_SCHOOL: 'What does pH measure?',
        HIGH_SCHOOL: 'What are biological indicators?',
        UNDERGRADUATE: 'What is QA/QC in water monitoring?',
        GRADUATE: 'What is SCADA?',
        PHD: 'Which water properties can satellites detect most directly?',
      },
      options: {
        ELEMENTARY: ['To make sure it is safe to drink', 'To make it taste sweet', 'To change its color', 'To make it colder'],
        MIDDLE_SCHOOL: ['How acidic or basic water is', 'How deep the water is', 'How fast the water flows', 'How many fish live there'],
        HIGH_SCHOOL: ['Organisms whose presence or absence reveals water conditions over time', 'Chemicals added to kill germs', 'Machines that measure pH', 'Plants grown in a laboratory'],
        UNDERGRADUATE: ['Planned procedures and checks that make monitoring data accurate and defensible', 'A list of questions and answers', 'A quick, cheap testing shortcut', 'A count of how much water is used'],
        GRADUATE: ['Supervisory control and data acquisition, collecting real-time sensor data and controlling equipment', 'A type of water filter', 'A laboratory test for bacteria', 'A national water law'],
        PHD: ['Optically active constituents such as chlorophyll, sediment and surface temperature', 'All dissolved chemicals at any concentration', 'Pathogens deep below the surface', 'Groundwater nitrate concentrations directly'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Water detectives test water to find anything that could make people sick.',
        MIDDLE_SCHOOL: 'pH shows how acidic or basic water is on a scale from 0 to 14, with 7 neutral.',
        HIGH_SCHOOL: 'Organisms like mayfly larvae live in streams for months, so they reflect long-term conditions.',
        UNDERGRADUATE: 'QA/QC includes calibration, blanks, duplicates and spikes so data can be trusted.',
        GRADUATE: 'SCADA systems gather live sensor readings and let operators control pumps and treatment.',
        PHD: 'Satellites see how water reflects light, so they detect constituents with an optical signature.',
      },
    },
    {
      id: 'wmon2q2',
      question: {
        ELEMENTARY: 'What is a sensor in the water?',
        MIDDLE_SCHOOL: 'Why should a small amount of disinfectant stay in water all the way to your tap?',
        HIGH_SCHOOL: 'What is a main limitation of grab samples sent to a lab?',
        UNDERGRADUATE: 'What is a detection limit?',
        GRADUATE: 'Why do early warning systems rely on surrogate parameters?',
        PHD: 'What is domain shift in water quality machine learning?',
      },
      options: {
        ELEMENTARY: ['A toy boat', 'A fishing hook', 'A machine that measures the water again and again and sends messages', 'A kind of fish'],
        MIDDLE_SCHOOL: ['To make the water smell nice', 'To color the water', 'So germs cannot grow in the pipes', 'To make the water warmer'],
        HIGH_SCHOOL: ['They are never accurate', 'They can only test pH', 'Results are slow and show only one moment', 'They require satellites'],
        UNDERGRADUATE: ['The deepest point where water can be sampled', 'The maximum amount of a pollutant allowed by law', 'The lowest concentration a method can reliably distinguish from zero', 'The number of samples a lab can process'],
        GRADUATE: ['Surrogates are required by every law', 'Surrogates are always more accurate than lab tests', 'Few contaminants can be measured directly and cheaply in real time', 'Surrogate sensors never need maintenance'],
        PHD: ['A change in river course', 'Moving sensors to a new site', 'A drop in model performance under conditions different from its training data', 'An error in satellite orbits'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Sensors stay in the water day and night and send their measurements to computers.',
        MIDDLE_SCHOOL: 'Leftover disinfectant, usually chlorine, protects water from germs on its way through the pipes.',
        HIGH_SCHOOL: 'Lab results take time and a single sample can miss changes that happen between visits.',
        UNDERGRADUATE: 'Below the detection limit, a method cannot reliably tell a substance from zero, so results need careful handling.',
        GRADUATE: 'Changes in chlorine residual, turbidity or conductivity can signal contamination that is hard to measure directly.',
        PHD: 'Models trained on some sites or years may fail elsewhere, so out-of-site validation is essential.',
      },
    },
    {
      id: 'wmon2q3',
      question: {
        ELEMENTARY: 'Why should we never pour paint or oil down the drain?',
        MIDDLE_SCHOOL: 'What does turbidity measure?',
        HIGH_SCHOOL: 'Why can stream insects reveal problems a single chemical test misses?',
        UNDERGRADUATE: 'Why can sampling only on calm days underestimate pollutant loads?',
        GRADUATE: 'What is alarm fatigue in an early warning system?',
        PHD: 'What is a known source of bias in citizen science water data?',
      },
      options: {
        ELEMENTARY: ['It makes the drain shiny', 'It can pollute water and harm people and animals', 'It helps fish grow', 'It cleans the pipes'],
        MIDDLE_SCHOOL: ['How salty water is', 'How cloudy water is', 'How cold water is', 'How deep water is'],
        HIGH_SCHOOL: ['Insects change color every hour', 'They live in the stream for months and reflect long-term conditions', 'Insects can talk to scientists', 'Chemical tests never work'],
        UNDERGRADUATE: ['Calm days have more pollution', 'Many pollutants such as sediment and phosphorus are carried mostly during storms', 'Labs are closed on stormy days', 'Calm water hides all pollutants'],
        GRADUATE: ['Sensors getting tired', 'Operators ignoring alerts after frequent false alarms', 'Alarms that run out of battery', 'A shortage of alarm sounds'],
        PHD: ['Volunteers always use satellites', 'Sampling tends to cluster where volunteers live', 'Volunteer data are always identical to agency data', 'Volunteers only sample oceans'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Paint, oil and medicine can end up in rivers and harm living things, so they need proper disposal.',
        MIDDLE_SCHOOL: 'Turbidity shows how cloudy water is because of tiny floating particles.',
        HIGH_SCHOOL: 'Sensitive insects disappear if water has been polluted, even if today’s sample looks fine.',
        UNDERGRADUATE: 'Storm events carry much of the load, so flow-weighted or event-triggered sampling is needed.',
        GRADUATE: 'Too many false alerts lead people to ignore alarms, so thresholds must be tuned carefully.',
        PHD: 'Uneven volunteer effort creates spatial bias that statistical methods must correct.',
      },
    },
    {
      id: 'wmon2q4',
      question: {
        ELEMENTARY: 'What is a sample bottle used for?',
        MIDDLE_SCHOOL: 'Why does warm water matter for fish?',
        HIGH_SCHOOL: 'What does conductivity tell us about water?',
        UNDERGRADUATE: 'What is chain of custody?',
        GRADUATE: 'What is sensor drift?',
        PHD: 'Why is atmospheric correction important in satellite water quality work?',
      },
      options: {
        ELEMENTARY: ['Holding juice for lunch', 'Growing plants', 'Catching fish', 'Collecting a little water for testing'],
        MIDDLE_SCHOOL: ['Warm water makes fish grow faster always', 'Warm water is saltier', 'Warm water is always cleaner', 'Warm water holds less oxygen'],
        HIGH_SCHOOL: ['How fast the water flows', 'How many fish live there', 'How cloudy the water is', 'How easily it carries electric current, which rises with dissolved salts'],
        UNDERGRADUATE: ['A metal chain on sample bottles', 'A list of all lab instruments', 'The order of sampling sites along a river', 'A written record of who handled a sample and when'],
        GRADUATE: ['Sensors floating downstream', 'Wireless signals moving between towers', 'A sudden contamination event', 'A gradual shift in readings over time that makes data inaccurate'],
        PHD: ['It improves cloud cover', 'It changes the water chemistry', 'It is only needed over deserts', 'The atmosphere strongly distorts the weak signal from water'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Scientists use very clean sample bottles to collect water to test.',
        MIDDLE_SCHOOL: 'Warm water holds less dissolved oxygen, so fish can struggle to breathe.',
        HIGH_SCHOOL: 'More dissolved salts make water carry electricity more easily, so conductivity rises.',
        UNDERGRADUATE: 'Chain of custody protects a sample’s legal reliability by documenting every handoff.',
        GRADUATE: 'Drift is corrected through regular calibration and maintenance.',
        PHD: 'Water reflects little light, so atmospheric effects are a major error source that must be removed.',
      },
    },
    {
      id: 'wmon2q5',
      question: {
        ELEMENTARY: 'Where do scientists test drinking water?',
        MIDDLE_SCHOOL: 'What are indicator bacteria?',
        HIGH_SCHOOL: 'Why do good monitoring programs combine several methods?',
        UNDERGRADUATE: 'What should every monitoring program start from?',
        GRADUATE: 'Why can governance be harder than engineering for watershed early warning networks?',
        PHD: 'Why are physics-guided models attractive for water quality prediction?',
      },
      options: {
        ELEMENTARY: ['At the start, at the treatment plant and in the pipes', 'Only in the ocean', 'Only on birthdays', 'Never'],
        MIDDLE_SCHOOL: ['Common bacteria whose presence warns that harmful germs may be present', 'Bacteria that clean water', 'Bacteria that live only in oceans', 'Bacteria found only in labs'],
        HIGH_SCHOOL: ['Each method has different strengths such as precision, speed, history and coverage', 'One method is always enough', 'Combining methods is required only at beaches', 'More methods always cost less'],
        UNDERGRADUATE: ['A clear question or objective', 'The cheapest sensor available', 'A random choice of sites', 'Whatever the last program did'],
        GRADUATE: ['Watersheds often cross borders, needing agreements on data sharing and notification', 'Engineers refuse to build sensors', 'Rivers flow uphill across borders', 'Sensors cannot send data across borders'],
        PHD: ['Water quality relationships change over time, and mechanistic constraints help models generalize', 'They require no data at all', 'They are always simpler than regression', 'They ignore uncertainty completely'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Water is checked many times on its journey so problems are caught early.',
        MIDDLE_SCHOOL: 'Testing for every germ is impossible, so indicator bacteria act as a warning sign.',
        HIGH_SCHOOL: 'Labs, sensors, biology and satellites each fill gaps the others leave.',
        UNDERGRADUATE: 'Compliance, trend detection and early warning each need different network designs.',
        GRADUATE: 'Shared networks need agreements on maintenance, data sharing and who notifies whom.',
        PHD: 'Non-stationarity under land-use and climate change makes purely data-driven models risky to extrapolate.',
      },
    },
  ],
}

export default expansion
