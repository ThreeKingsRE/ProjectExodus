import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'building-commissioning',
  lessons: [
    {
      id: 'gb-cx-1',
      title: 'Testing Buildings: Making Sure Everything Works',
      content: {
        ELEMENTARY: `
<h2>Giving a Building a Check-Up</h2>
<p>When you visit the doctor, they listen to your heart, check your ears and make sure you are healthy. New buildings need a check-up too! Before people move into a new school, home or library, special helpers test the building to make sure everything works the way it should. This big check-up has a long name: <em>commissioning</em>.</p>

<h3>What Gets Checked?</h3>
<p>A building is full of hidden machines. Some keep you warm in winter. Some keep you cool in summer. Some bring in fresh air so you can breathe easily and think clearly. Others turn the lights on and off. The testers look at all of them.</p>
<ul>
<li><strong>Heater:</strong> a machine that warms the air or water so rooms stay cozy in cold weather</li>
<li><strong>Air conditioner:</strong> a machine that cools the air and takes away extra heat on hot days</li>
<li><strong>Fan:</strong> a spinning machine that pushes fresh air into rooms and old air out</li>
<li><strong>Thermostat:</strong> a small box on the wall that tells the heater or cooler what temperature to aim for</li>
<li><strong>Sensor:</strong> a tiny electronic helper that notices things like light, heat or people moving</li>
</ul>

<h3>How Do Testers Check?</h3>
<p>Testers do not just look at the machines. They make them work! They turn the heat up and down. They walk into a dark room to see if the lights switch on. They check that the fans really push fresh air into every classroom. If something is wrong, they write it down so it can be fixed.</p>

<h3>Why It Helps the Planet</h3>
<p>A machine that is set up the wrong way can waste lots of energy. Imagine a heater and an air conditioner running at the same time, fighting each other! That wastes electricity and money. When testers catch mistakes early, the building uses less energy, and less energy means less pollution.</p>

<h3>You Can Be a Building Tester Too</h3>
<ol>
<li>Notice if a room feels too hot or too cold, and tell a grown-up.</li>
<li>Check if lights are left on in empty rooms.</li>
<li>Look for windows that are open while the heater is running.</li>
<li>Listen for strange noises from fans or machines and report them.</li>
</ol>
<p>Every building works best when people pay attention. Just like a check-up keeps you healthy, testing keeps buildings healthy and kind to the Earth!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Commissioning: Making Sure Buildings Work as Designed</h2>
<p>Architects and engineers spend months designing a building to be comfortable, healthy and energy efficient. But a design on paper is only a plan. Hundreds of workers install thousands of parts, and small mistakes are common: a sensor put in the wrong spot, a valve installed backwards, or a control setting typed incorrectly. <em>Commissioning</em> is the quality process that checks whether the finished building actually does what the design promised.</p>

<h3>The Steps of Commissioning</h3>
<ol>
<li><strong>Set goals:</strong> the owner writes down what they need, such as comfortable temperatures, good air and low energy bills.</li>
<li><strong>Review the design:</strong> a commissioning expert reads the plans to catch problems before anything is built.</li>
<li><strong>Check installation:</strong> during construction, they inspect equipment to confirm it was installed correctly.</li>
<li><strong>Test performance:</strong> they run each system through different situations to see how it behaves.</li>
<li><strong>Fix and retest:</strong> problems go on a list, get repaired and are tested again.</li>
<li><strong>Train the team:</strong> the people who will run the building learn how everything works.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Commissioning:</strong> a quality process that checks building systems are designed, installed and working as intended</li>
<li><strong>Commissioning agent:</strong> an expert, often independent from the builders, who leads the testing and checking</li>
<li><strong>Functional test:</strong> a test where a system is made to run in different conditions to see if it responds correctly</li>
<li><strong>Issues log:</strong> a list that records every problem found, who will fix it and whether it has been fixed</li>
<li><strong>Building automation system:</strong> a computer network that controls heating, cooling, fans and lighting</li>
</ul>

<h3>Common Problems Testers Find</h3>
<table>
<thead><tr><th>Problem</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Heating and cooling running at once</td><td>Energy is wasted as the systems fight each other</td></tr>
<tr><td>Fans running all night in an empty building</td><td>Electricity is used when no one needs it</td></tr>
<tr><td>Sensor in a sunny spot</td><td>The system thinks the room is hotter than it really is</td></tr>
<tr><td>Fresh air dampers stuck closed</td><td>Rooms get stuffy and people feel tired</td></tr>
</tbody>
</table>

<h3>Why It Matters for Sustainability</h3>
<p>Buildings use a large share of the world's energy. A green design only helps the planet if the building really runs efficiently. Commissioning often pays for itself through lower energy bills, and it also makes people more comfortable. That is why many green building rating systems require it.</p>
`,
        HIGH_SCHOOL: `
<h2>Commissioning: Quality Assurance for Building Systems</h2>
<p>Modern buildings are complex machines. Heating, ventilation and air conditioning (HVAC), lighting, water heating, controls and sometimes solar panels must all work together. Studies of new buildings commonly find installation and control errors that waste energy or make people uncomfortable. <em>Commissioning</em>, often shortened to "Cx", is a systematic process that verifies building systems are planned, designed, installed, tested and operated to meet the owner's needs.</p>

<h3>Commissioning Across the Project</h3>
<p>Good commissioning starts early, not at the end. Fixing a mistake on a drawing costs far less than fixing it after walls are closed.</p>
<ul>
<li><strong>Owner's Project Requirements:</strong> a document describing what the owner needs the building to achieve, such as comfort ranges and energy goals</li>
<li><strong>Basis of Design:</strong> the designers' explanation of how their systems and assumptions will meet those requirements</li>
<li><strong>Prefunctional checklist:</strong> a list used to confirm equipment is delivered, installed and connected properly before testing</li>
<li><strong>Functional performance testing:</strong> running systems through normal, extreme and failure conditions to check their responses</li>
<li><strong>Systems manual:</strong> a reference that explains how each system works and how to operate and maintain it</li>
</ul>

<h3>How Functional Testing Works</h3>
<p>A commissioning agent writes test procedures for each system. For an air handler, the test might simulate a hot afternoon, a cold morning and a fire alarm. The agent watches whether dampers open, fans change speed and valves modulate the way the control sequence says they should. Visual inspection alone cannot catch control logic errors, which is why active testing matters.</p>

<h3>Comparing Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>When it happens</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Basic startup by installer</td><td>End of construction</td><td>Quick and low cost</td><td>Installer checks own work; misses system interactions</td></tr>
<tr><td>New building commissioning</td><td>Design through first year</td><td>Catches design and installation errors early</td><td>Requires budget and early involvement</td></tr>
<tr><td>Retro-commissioning</td><td>In an existing building never commissioned</td><td>Finds low-cost operational savings</td><td>Original design intent may be unknown</td></tr>
<tr><td>Ongoing commissioning</td><td>Continuously during operation</td><td>Keeps savings from fading over time</td><td>Needs data systems and trained staff</td></tr>
</tbody>
</table>

<h3>Trade-Offs and Benefits</h3>
<p>Commissioning adds cost and time to a project, so some owners skip it. Yet it usually pays back through lower energy use, fewer complaints, fewer warranty disputes and longer equipment life. It also protects occupant health by confirming ventilation actually delivers fresh air.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Hospitals use commissioning to verify pressure relationships that limit the spread of infection.</li>
<li>Schools confirm that classrooms get enough outdoor air for students to concentrate.</li>
<li>Green building rating systems such as LEED require a basic level of commissioning.</li>
<li>Data centers test backup power and cooling to avoid costly outages.</li>
</ol>
<p>Commissioning turns a promising design into a building that really performs, which is the whole point of sustainable architecture.</p>
`,
        UNDERGRADUATE: `
<h2>Commissioning Scope, Roles and Documentation</h2>
<p>Commissioning is best understood as a quality-based process that links an owner's intentions to verified building performance. It is not a single test at handover but a sequence of reviews, verifications and documentation that runs from pre-design into the first year of occupancy and, ideally, beyond. Industry guidance such as ASHRAE Guideline 0 describes the process in general terms, while discipline-specific guidance covers HVAC, envelope and other systems. This lesson analyzes how scope is set, who does what, and which documents carry the process.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Commissioning authority:</strong> the person or firm that leads and documents the commissioning process, ideally independent of the design and construction teams</li>
<li><strong>Commissioning plan:</strong> a project-specific document defining scope, schedule, responsibilities, communication protocols and test procedures</li>
<li><strong>Design review:</strong> a structured check of drawings and specifications against the owner's requirements before construction</li>
<li><strong>Sequence of operations:</strong> the written control logic that describes how equipment should respond to conditions and schedules</li>
<li><strong>Seasonal testing:</strong> deferred functional tests performed when weather allows systems to run near their design conditions</li>
<li><strong>Warranty review:</strong> an inspection near the end of the warranty period to identify deficiencies the contractor must still correct</li>
</ul>

<h3>Setting Scope</h3>
<p>Scope is a cost-benefit decision. Mechanical and control systems are almost always included because they drive energy use and comfort and are most prone to errors. Lighting controls, domestic hot water, renewable systems and building envelope are frequently added. Envelope commissioning, which may include air-leakage testing and inspection of flashing and water barriers, addresses failures that are very expensive to fix after occupancy. A sensible scope focuses effort where complexity, consequence and likelihood of error are highest.</p>

<h3>Team Roles</h3>
<table>
<thead><tr><th>Role</th><th>Main responsibilities</th></tr></thead>
<tbody>
<tr><td>Owner</td><td>Defines requirements, funds the process, accepts the building</td></tr>
<tr><td>Commissioning authority</td><td>Plans, reviews, witnesses tests, tracks issues, reports</td></tr>
<tr><td>Design team</td><td>Writes the basis of design and responds to review comments</td></tr>
<tr><td>Contractors and controls installer</td><td>Complete checklists, perform tests, correct deficiencies</td></tr>
<tr><td>Facility operators</td><td>Participate in testing and training, receive the systems manual</td></tr>
</tbody>
</table>
<p>Independence matters: a commissioning authority who reports directly to the owner can raise problems without the conflict of checking their own firm's work.</p>

<h3>Documentation as the Backbone</h3>
<p>The documentation chain lets anyone trace a requirement through design, installation and testing. The owner's requirements state the goal; the basis of design explains the approach; specifications assign commissioning duties to contractors; checklists and test forms record evidence; the issues log tracks every deficiency to resolution; and the final report and systems manual hand knowledge to operators. When documentation is weak, savings tend to erode because operators cannot tell how systems were meant to work.</p>

<h3>Reasoning About Value</h3>
<p>Commissioning cost is typically a small fraction of construction cost, while uncorrected control faults can waste a noticeable share of a building's annual energy every year for decades. Comparing a one-time cost with a recurring loss explains why many evaluations find short paybacks, often within a few years, before counting non-energy benefits such as comfort, fewer service calls and reduced liability.</p>

<h3>An Applied Checklist</h3>
<ol>
<li>Confirm the owner's requirements are measurable, not vague.</li>
<li>Engage the commissioning authority during design, not only at construction.</li>
<li>Write commissioning duties into contractor specifications.</li>
<li>Witness functional tests, including failure and seasonal modes.</li>
<li>Close every issue in the log with evidence.</li>
<li>Deliver training, a systems manual and a plan for ongoing commissioning.</li>
</ol>
`,
        GRADUATE: `
<h2>Ongoing and Monitoring-Based Commissioning Across Portfolios</h2>
<p>Commissioning at handover verifies a building at one moment. Buildings, however, change: occupants rearrange spaces, operators override controls to answer complaints, sensors drift and equipment wears. Savings achieved at handover tend to decline over time unless someone keeps watching. Graduate-level practice therefore treats commissioning as an operational management system and, for owners of many buildings, as a portfolio strategy tied to capital planning, staffing and policy.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Ongoing commissioning:</strong> a continuous process of monitoring, diagnosing and correcting building operation throughout its life</li>
<li><strong>Monitoring-based commissioning:</strong> an approach that uses trend data and energy metering to find and verify operational improvements</li>
<li><strong>Retro-commissioning:</strong> a first-time systematic investigation of an existing building to restore or improve operation</li>
<li><strong>Recommissioning:</strong> repeating commissioning on a building that was commissioned before, often after changes in use</li>
<li><strong>Performance persistence:</strong> the degree to which energy and comfort improvements last over months and years</li>
<li><strong>Measurement and verification:</strong> structured methods for estimating savings by comparing actual use with an adjusted baseline</li>
</ul>

<h3>From Projects to Programs</h3>
<p>A university, hospital system or public agency may manage dozens or hundreds of buildings. Commissioning every building deeply each year is unaffordable, so portfolio managers triage. Energy benchmarking identifies buildings using far more energy than peers of similar type and climate; interval meter data reveal abnormal night or weekend loads; and complaint records point to comfort problems. Resources then flow to buildings with the largest expected benefit.</p>
<table>
<thead><tr><th>Strategy</th><th>Data needs</th><th>Typical role in a portfolio</th></tr></thead>
<tbody>
<tr><td>Periodic retro-commissioning</td><td>Site visits, short-term trends</td><td>Deep tune-ups on a rotating schedule</td></tr>
<tr><td>Monitoring-based commissioning</td><td>Meters, control-system trends, analytics</td><td>Continuous detection across many buildings</td></tr>
<tr><td>Automated fault detection</td><td>Reliable sensor points and rule libraries</td><td>Prioritized alerts for operators</td></tr>
<tr><td>Commissioning at major renovation</td><td>Design documents, test procedures</td><td>Protecting capital investments</td></tr>
</tbody>
</table>

<h3>Economics and Incentives</h3>
<p>Operational savings from commissioning are often among the lowest-cost energy savings available because they require little capital. Yet incentives are frequently misaligned. In leased buildings, tenants pay energy bills while landlords control equipment. Construction budgets are separate from operating budgets, so a project manager may cut commissioning to stay on budget while operators inherit the higher bills. Some utility programs and building performance policies address this by funding retro-commissioning or requiring periodic tune-ups for large buildings.</p>

<h3>Governance and Workforce</h3>
<p>Ongoing commissioning depends on skilled operators who understand control sequences and data tools. Many facility teams are understaffed, and expertise is unevenly distributed: well-resourced institutions benefit first, while schools, affordable housing and small commercial buildings lag. Program designers should consider training pathways, shared service models and procurement rules that make commissioning accessible beyond flagship buildings.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the baseline and the measurement and verification method before changes are made.</li>
<li>Track both energy and non-energy outcomes such as comfort complaints and work orders.</li>
<li>Measure persistence at intervals rather than reporting only first-year savings.</li>
<li>Attribute savings carefully, separating weather, occupancy and commissioning effects.</li>
<li>Review who benefits and who is left out across the portfolio.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Commissioning Effectiveness, Fault Detection and Persistence</h2>
<p>Commissioning research asks three linked questions: How much does commissioning actually improve performance, how can faults be found automatically and reliably, and why do improvements decay? Answering them requires combining building physics, control theory, statistics and data science with organizational research on how operators use information. This lesson surveys methods, debates and open directions.</p>

<h3>Methodological Vocabulary</h3>
<ul>
<li><strong>Fault detection and diagnostics:</strong> methods that identify abnormal operation automatically and infer its likely root cause</li>
<li><strong>Rule-based diagnostics:</strong> expert-written logical tests on sensor data, such as checking for simultaneous heating and cooling</li>
<li><strong>Model-based diagnostics:</strong> comparing measured behavior with predictions from physical or calibrated models to flag deviations</li>
<li><strong>Data-driven diagnostics:</strong> statistical or machine learning methods that learn normal patterns and detect anomalies</li>
<li><strong>Counterfactual baseline:</strong> an estimate of what energy use would have been without the intervention, used to quantify savings</li>
<li><strong>Semantic metadata:</strong> structured descriptions of sensors and equipment that let analytics software be reused across buildings</li>
</ul>

<h3>Measuring Effectiveness</h3>
<p>Many reported savings come from program evaluations with heterogeneous methods, self-selected participants and short follow-up periods. Selection bias is a real concern: owners who commission may also manage buildings better in other ways. Stronger designs use comparison groups, interrupted time-series analysis with weather normalization, or Bayesian calibration to estimate counterfactuals with uncertainty. A recurring finding is wide variance in outcomes, which shifts attention from average effects to the conditions under which commissioning succeeds.</p>

<h3>Fault Detection Approaches Compared</h3>
<table>
<thead><tr><th>Approach</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Rule-based</td><td>Transparent, explainable, easy to deploy</td><td>Many false alarms; needs tuning; brittle to unusual designs</td></tr>
<tr><td>Physics model-based</td><td>Diagnoses root causes; works with little history</td><td>Calibration effort; model error mimics faults</td></tr>
<tr><td>Data-driven</td><td>Scales across many points; finds unknown patterns</td><td>Needs labeled data; limited interpretability; dataset shift</td></tr>
<tr><td>Hybrid</td><td>Combines physical constraints with learned behavior</td><td>Complex to build and validate</td></tr>
</tbody>
</table>
<p>A persistent bottleneck is the scarcity of labeled fault data from real buildings. Researchers rely on simulation, laboratory test facilities and deliberately imposed faults, each of which may not reflect field conditions. Benchmarking FDD tools fairly requires shared datasets and agreed metrics for detection rate, false-alarm rate and diagnostic accuracy.</p>

<h3>Why Performance Decays</h3>
<p>Persistence research suggests that technical drift, such as sensor bias and fouling, explains only part of the decline. Human and organizational factors matter: operators override automatic controls to resolve complaints, staff turnover erases knowledge, and alerts that are too frequent lead to alarm fatigue. This makes the operator interface and workflow integration a research topic in its own right, connecting engineering with human factors and organizational behavior.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether automated diagnostics can replace or merely support skilled commissioning agents.</li>
<li>How to value non-energy benefits such as comfort, health and equipment life in effectiveness studies.</li>
<li>Whether savings from operational fixes should count toward policy targets given uncertain persistence.</li>
<li>How privacy and cybersecurity concerns should shape access to building data.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Transferable diagnostics that use semantic metadata to deploy across diverse buildings with minimal setup.</li>
<li>Field studies linking fault prevalence and persistence to organizational characteristics.</li>
<li>Methods that prioritize faults by energy, comfort and health impact rather than by count.</li>
<li>Automated correction, where control systems fix certain faults with appropriate safeguards.</li>
<li>Rigorous, open benchmark datasets for fault detection under realistic operating conditions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbcxq1',
      question: {
        ELEMENTARY: 'Why do helpers test new buildings before people move in?',
        MIDDLE_SCHOOL: 'What is building commissioning?',
        HIGH_SCHOOL: 'What is functional performance testing?',
        UNDERGRADUATE: 'Why should a commissioning authority ideally be independent?',
        GRADUATE: 'What is ongoing commissioning?',
        PHD: 'What is fault detection and diagnostics?',
      },
      options: {
        ELEMENTARY: ['To make sure everything works the right way', 'To paint the walls a new color', 'To make the machines louder', 'To count the windows'],
        MIDDLE_SCHOOL: ['A quality process that checks building systems work as designed', 'Selling a finished building', 'Paying workers a bonus', 'Choosing furniture for the rooms'],
        HIGH_SCHOOL: ['Running systems through normal, extreme and failure conditions to check responses', 'Looking at equipment without turning it on', 'Counting how many parts were delivered', 'Measuring the size of each room'],
        UNDERGRADUATE: ['So they can raise problems without checking work done by their own firm', 'So they can design the HVAC system themselves', 'So they can avoid writing any reports', 'So they can skip the design review'],
        GRADUATE: ['Continuous monitoring, diagnosing and correcting of operation over the building life', 'Testing only once at handover', 'Replacing all equipment every year', 'Commissioning that happens only during design'],
        PHD: ['Methods that automatically identify abnormal operation and infer likely causes', 'Inspecting drawings for spelling errors', 'Manual review of utility bills once a year', 'A method for designing new buildings'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Testers make the machines work to catch mistakes, so the building is comfortable and does not waste energy.',
        MIDDLE_SCHOOL: 'Commissioning checks that systems were designed, installed and are working as intended.',
        HIGH_SCHOOL: 'Functional testing actively runs systems in different conditions, catching control errors that inspection would miss.',
        UNDERGRADUATE: 'An authority reporting to the owner avoids the conflict of verifying work done by their own team.',
        GRADUATE: 'Ongoing commissioning keeps watching and correcting operation so savings do not fade.',
        PHD: 'FDD uses rules, models or data methods to flag faults and suggest their root causes.',
      },
    },
    {
      id: 'gbcxq2',
      question: {
        ELEMENTARY: 'What happens if a heater and an air conditioner run at the same time?',
        MIDDLE_SCHOOL: 'What is an issues log?',
        HIGH_SCHOOL: 'What does the Owner’s Project Requirements document describe?',
        UNDERGRADUATE: 'What is seasonal testing?',
        GRADUATE: 'What is retro-commissioning?',
        PHD: 'Why is selection bias a concern in commissioning effectiveness studies?',
      },
      options: {
        ELEMENTARY: ['The room gets extra cozy for free', 'Nothing happens at all', 'They fight each other and waste energy', 'The lights turn off'],
        MIDDLE_SCHOOL: ['A list of the trees cut down for wood', 'A schedule of class times', 'A list of every problem found and whether it is fixed', 'A diary written by the architect'],
        HIGH_SCHOOL: ['The price of the land', 'The color of the furniture', 'What the owner needs the building to achieve', 'The names of every worker'],
        UNDERGRADUATE: ['Painting the building each season', 'Testing only in spring', 'Tests deferred until weather lets systems run near design conditions', 'Replacing filters every season'],
        GRADUATE: ['Commissioning a building a second time after renovation', 'Designing a building in a retro style', 'A first-time systematic tune-up of an existing building', 'Removing old equipment'],
        PHD: ['Because buildings cannot be measured', 'Because savings are always zero', 'Because owners who commission may also manage buildings better in other ways', 'Because weather has no effect on energy use'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'When heating and cooling fight each other, the building uses lots of extra energy for nothing.',
        MIDDLE_SCHOOL: 'The issues log tracks each problem, who will fix it and whether it has been fixed.',
        HIGH_SCHOOL: 'The OPR states the owner goals, such as comfort and energy targets, that the design must meet.',
        UNDERGRADUATE: 'Some tests must wait for hot or cold weather so systems can be checked near their design conditions.',
        GRADUATE: 'Retro-commissioning is the first systematic investigation of an existing building that was never commissioned.',
        PHD: 'If participants differ systematically from non-participants, simple comparisons overstate or misstate savings.',
      },
    },
    {
      id: 'gbcxq3',
      question: {
        ELEMENTARY: 'What does a thermostat do?',
        MIDDLE_SCHOOL: 'Which of these is a problem commissioning might find?',
        HIGH_SCHOOL: 'Why is fixing mistakes during design better than after construction?',
        UNDERGRADUATE: 'Which systems are almost always included in commissioning scope?',
        GRADUATE: 'How do portfolio managers decide which buildings to commission first?',
        PHD: 'What is a common weakness of rule-based fault detection?',
      },
      options: {
        ELEMENTARY: ['It cleans the windows', 'It tells the heater or cooler what temperature to aim for', 'It plays music', 'It opens the doors'],
        MIDDLE_SCHOOL: ['Too many trees outside', 'Fans running all night in an empty building', 'A nice paint color', 'A comfortable chair'],
        HIGH_SCHOOL: ['Design mistakes are illegal to fix later', 'Fixing a drawing costs far less than fixing closed walls', 'Construction workers prefer it', 'It makes the building taller'],
        UNDERGRADUATE: ['Landscaping and parking', 'Mechanical and control systems', 'Furniture and finishes', 'Signs and artwork'],
        GRADUATE: ['By choosing the newest buildings only', 'By using benchmarking, meter data and complaints to target the largest benefits', 'By picking buildings at random', 'By commissioning only the smallest buildings'],
        PHD: ['It cannot be explained to operators', 'Many false alarms and brittleness to unusual designs', 'It needs huge labeled datasets', 'It always requires a full physics model'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The thermostat is the wall box that tells heating and cooling machines what temperature the room should be.',
        MIDDLE_SCHOOL: 'Fans running in an empty building waste electricity, a common problem testers catch.',
        HIGH_SCHOOL: 'Errors caught on paper are cheap to fix, while errors behind finished walls are costly.',
        UNDERGRADUATE: 'Mechanical and controls drive energy use and comfort and are the most error-prone, so they are core scope.',
        GRADUATE: 'Triage with benchmarking, interval data and complaint records directs limited resources to the biggest opportunities.',
        PHD: 'Rules are transparent but often generate false alarms and need tuning for each building.',
      },
    },
    {
      id: 'gbcxq4',
      question: {
        ELEMENTARY: 'What can you do to help your school building work well?',
        MIDDLE_SCHOOL: 'Why do many green building rating systems require commissioning?',
        HIGH_SCHOOL: 'Which approach is used in an existing building that was never commissioned?',
        UNDERGRADUATE: 'What is the role of the sequence of operations?',
        GRADUATE: 'Why are incentives for commissioning often misaligned in leased buildings?',
        PHD: 'Beyond sensor drift, what helps explain why commissioning savings decay?',
      },
      options: {
        ELEMENTARY: ['Leave all the lights on', 'Open windows while the heater runs', 'Ignore strange noises', 'Tell a grown-up if a room is too hot or too cold'],
        MIDDLE_SCHOOL: ['Because it makes buildings look nicer', 'Because it is the cheapest part of building', 'Because it replaces the architect', 'Because a green design only helps if the building really runs efficiently'],
        HIGH_SCHOOL: ['Basic startup', 'New building commissioning', 'Design review', 'Retro-commissioning'],
        UNDERGRADUATE: ['It lists the furniture in each room', 'It sets the construction budget', 'It names the building owner', 'It describes how equipment should respond to conditions and schedules'],
        GRADUATE: ['Because tenants never use energy', 'Because landlords pay no taxes', 'Because commissioning is illegal in leased space', 'Because tenants pay the energy bills while landlords control the equipment'],
        PHD: ['The phase of the moon', 'Building height alone', 'Paint fading on walls', 'Operator overrides, staff turnover and alarm fatigue'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Noticing and reporting problems helps grown-ups fix them, just like a building tester.',
        MIDDLE_SCHOOL: 'Rating systems want proof that the efficient design actually works in real life.',
        HIGH_SCHOOL: 'Retro-commissioning examines existing buildings that never went through commissioning.',
        UNDERGRADUATE: 'The sequence of operations is the written control logic that functional tests check against.',
        GRADUATE: 'The split incentive means the party who could fix operation is not the one who saves money.',
        PHD: 'Human and organizational factors, not just technical drift, erode savings over time.',
      },
    },
    {
      id: 'gbcxq5',
      question: {
        ELEMENTARY: 'Why does fixing building mistakes help the planet?',
        MIDDLE_SCHOOL: 'Who are trained at the end of commissioning?',
        HIGH_SCHOOL: 'What is a benefit of ongoing commissioning?',
        UNDERGRADUATE: 'Why do many evaluations find short paybacks for commissioning?',
        GRADUATE: 'What does measurement and verification do?',
        PHD: 'Why is semantic metadata important for fault detection research?',
      },
      options: {
        ELEMENTARY: ['It makes buildings heavier', 'It uses less energy, which means less pollution', 'It adds more machines', 'It makes rooms darker'],
        MIDDLE_SCHOOL: ['The people who will run the building', 'The neighbors across the street', 'Only the architects', 'Nobody at all'],
        HIGH_SCHOOL: ['It keeps savings from fading over time', 'It removes the need for maintenance', 'It costs nothing at all', 'It only happens before construction'],
        UNDERGRADUATE: ['A one-time cost is small compared with recurring energy waste from faults', 'Commissioning is always free', 'Energy prices never change', 'Buildings last only one year'],
        GRADUATE: ['It estimates savings by comparing actual use with an adjusted baseline', 'It measures room sizes', 'It verifies the identity of tenants', 'It replaces the commissioning plan'],
        PHD: ['It lets analytics be reused across many buildings with less custom setup', 'It makes sensors cheaper to buy', 'It removes the need for data', 'It describes the building architecture style'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'When machines work correctly they waste less energy, and less energy means cleaner air for everyone.',
        MIDDLE_SCHOOL: 'Training helps the building operators understand how all the systems work.',
        HIGH_SCHOOL: 'Continuous attention catches new problems so efficiency lasts.',
        UNDERGRADUATE: 'Uncorrected faults waste energy every year, so a modest one-time cost often pays back quickly.',
        GRADUATE: 'M and V separates real savings from changes caused by weather or occupancy.',
        PHD: 'Structured descriptions of points and equipment make diagnostic tools transferable between buildings.',
      },
    },
  ],
}

export default expansion
