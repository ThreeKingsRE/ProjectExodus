import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'building-performance-monitoring',
  lessons: [
    {
      id: 'gb-perf-1',
      title: 'Watching Building Energy',
      content: {
        ELEMENTARY: `
<h2>Being a Building Energy Detective</h2>
<p>Buildings use energy all day long. Lights glow, computers hum, heaters warm the rooms and fans move the air. But how do we know if a building is using energy wisely or wasting it? We watch it closely, just like a detective looking for clues!</p>

<h3>Meters Count the Energy</h3>
<p>Every building has meters. A meter is a little machine that counts how much electricity, gas or water the building uses. Some new meters are called smart meters, and they send their numbers to a computer every few minutes, so people can see what is happening right now.</p>
<ul>
<li><strong>Meter:</strong> a machine that counts how much electricity, gas or water a building uses</li>
<li><strong>Smart meter:</strong> a meter that sends its numbers to a computer all the time</li>
<li><strong>Sensor:</strong> a tiny device that notices things like heat, light or whether someone is in a room</li>
<li><strong>Dashboard:</strong> a screen that shows pictures and charts about how much energy is being used</li>
<li><strong>Energy waste:</strong> energy that is used when nobody needs it, like lights left on in an empty room</li>
</ul>

<h3>Finding Clues</h3>
<p>When people look at the numbers, they can spot clues. If a school uses lots of electricity at midnight when everyone is asleep, something is probably left on! If one classroom is always too hot, the heater might be broken. Finding these clues helps fix problems and save energy.</p>

<h3>Sensors That Help</h3>
<p>Some buildings have sensors that can tell when a room is empty and switch off the lights. Others check the temperature and tell the heater when to rest. These helpers watch the building all the time so nothing gets forgotten.</p>

<h3>You Can Be an Energy Detective Too</h3>
<ol>
<li>Walk around your home or classroom and count how many lights are on in empty rooms.</li>
<li>Ask a grown-up to show you the electricity meter and read the numbers together.</li>
<li>Check the meter in the morning and again at night to see how much was used.</li>
<li>Make a poster reminding everyone to switch things off.</li>
<li>Feel if any windows or doors let cold air in, and tell a grown-up.</li>
</ol>

<h3>Think About It</h3>
<p>If you could see a number that showed how much energy your home was using right now, what would you switch off to make the number go down? Watching helps us all make smarter choices!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Monitoring Buildings to Save Energy</h2>
<p>You cannot improve what you do not measure. Building owners use meters, sensors and computer dashboards to see how much energy and water their buildings use, when they use it and where it goes. This information helps them find waste, fix broken equipment and check whether energy-saving upgrades really work.</p>

<h3>What Gets Measured</h3>
<ul>
<li><strong>Energy use:</strong> electricity, natural gas, heating oil or district heat, usually measured in kilowatt-hours</li>
<li><strong>Water use:</strong> how much water flows through taps, toilets, cooling systems and irrigation</li>
<li><strong>Indoor conditions:</strong> temperature, humidity, carbon dioxide and light levels</li>
<li><strong>Occupancy:</strong> whether people are in a room and roughly how many</li>
</ul>

<h3>Key Words</h3>
<ul>
<li><strong>Submeter:</strong> an extra meter that measures one part of a building, such as one floor or the lighting</li>
<li><strong>Baseload:</strong> the energy a building uses all the time, even when it is empty, like at night</li>
<li><strong>Peak demand:</strong> the highest amount of power a building uses at one moment</li>
<li><strong>Building automation system:</strong> a computer system that controls heating, cooling, ventilation and lighting</li>
<li><strong>Energy dashboard:</strong> a display that shows energy and water use with charts in real time</li>
<li><strong>Benchmarking:</strong> comparing a building's energy use with similar buildings</li>
</ul>

<h3>Reading a Daily Energy Pattern</h3>
<p>A school's electricity use usually follows a pattern. It is low at night, rises when people arrive, stays high during the day and drops after everyone leaves. Unusual patterns are clues:</p>
<table>
<thead><tr><th>What the data shows</th><th>Possible cause</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>High use at night</td><td>Lights, computers or fans left on</td><td>Set schedules and switch-off routines</td></tr>
<tr><td>Same use on weekends as weekdays</td><td>Heating or cooling schedule not set</td><td>Adjust the automation schedule</td></tr>
<tr><td>Sudden jump that never goes down</td><td>Equipment stuck on or broken</td><td>Call maintenance to inspect it</td></tr>
<tr><td>Heating and cooling at the same time</td><td>Controls fighting each other</td><td>Fix the settings</td></tr>
</tbody>
</table>

<h3>Comparing With Other Buildings</h3>
<p>To know whether a building is efficient, people compare it with similar buildings. A common way is to divide yearly energy use by floor area. This number, called energy use intensity, lets you compare a small school with a big one fairly.</p>

<h3>Why It Matters</h3>
<p>Monitoring often finds savings that cost little or nothing, like changing a schedule. Many schools let students use energy dashboards for science projects and energy-saving competitions between classrooms. When people can see their energy use, they tend to use less.</p>
`,
        HIGH_SCHOOL: `
<h2>Energy Monitoring, Benchmarking and Building Automation</h2>
<p>Buildings are complex machines with hundreds of fans, pumps, valves and lights controlled by software. Even well-designed buildings drift away from their intended performance as settings change and equipment wears out. Performance monitoring uses data to keep buildings running efficiently, compare them fairly and prove that upgrades deliver results.</p>

<h3>The Monitoring Toolkit</h3>
<ul>
<li><strong>Utility meter:</strong> the main meter that the energy company uses to bill the whole building</li>
<li><strong>Interval data:</strong> meter readings recorded at regular short intervals, such as every 15 minutes, showing how use changes through the day</li>
<li><strong>Building automation system:</strong> a network of controllers and sensors that runs heating, ventilation, air conditioning and lighting on schedules and setpoints</li>
<li><strong>Setpoint:</strong> the target value a control system tries to maintain, such as a room temperature</li>
<li><strong>Energy use intensity:</strong> annual energy use divided by floor area, used to compare buildings of different sizes</li>
<li><strong>Weather normalization:</strong> adjusting energy data to remove the effect of an unusually hot or cold year</li>
</ul>

<h3>Benchmarking</h3>
<p>Benchmarking compares a building with itself over time and with peers. A building's energy use intensity can be compared with similar buildings of the same type and climate. Some benchmarking tools convert this into a score or percentile that shows how a building ranks. Because weather and occupancy strongly affect energy use, fair comparisons adjust for climate, operating hours and building type.</p>
<table>
<thead><tr><th>Approach</th><th>Question it answers</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Year-over-year comparison</td><td>Are we improving?</td><td>Weather and occupancy changes can hide trends</td></tr>
<tr><td>Peer comparison</td><td>How do we rank against similar buildings?</td><td>Peers may differ in hidden ways</td></tr>
<tr><td>Comparison with design model</td><td>Is the building performing as designed?</td><td>Design models often use idealized assumptions</td></tr>
<tr><td>Real-time interval analysis</td><td>What is wasting energy right now?</td><td>Needs good meters and someone to act on findings</td></tr>
</tbody>
</table>

<h3>How Automation and Monitoring Work Together</h3>
<p>A building automation system controls equipment, while monitoring software analyzes data from it. Together they can switch equipment off when spaces are empty, adjust ventilation based on carbon dioxide levels, and alert operators when something behaves strangely. But automation is only as good as its settings. Overrides that are never reversed, sensors that drift out of calibration and schedules that do not match real use are common sources of waste.</p>

<h3>The Performance Gap</h3>
<p>Many buildings use noticeably more energy in operation than their designers predicted. This difference is called the performance gap. Causes include construction quality, equipment that was never set up correctly, different occupancy than expected and poor operation. Monitoring is the main tool for finding and closing this gap.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Schools and offices use dashboards to engage occupants and run savings competitions.</li>
<li>Facility managers receive alerts when energy use exceeds expected levels.</li>
<li>Owners use measured data to verify savings from upgrades such as LED lighting or new boilers.</li>
<li>Cities in some regions require large buildings to benchmark and report energy use.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Building Analytics, Fault Detection and Continuous Commissioning</h2>
<p>Modern buildings generate large volumes of time-series data from meters, sensors and control points. Turning that data into savings requires analytics that model expected behavior, detect deviations, diagnose causes and prioritize fixes. This lesson introduces the core analytical methods behind fault detection and continuous commissioning.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Baseline model:</strong> a statistical model that predicts energy use from drivers such as outdoor temperature and occupancy, used to measure savings</li>
<li><strong>Fault detection and diagnostics:</strong> automated analysis that flags abnormal equipment behavior and suggests likely causes</li>
<li><strong>Continuous commissioning:</strong> ongoing monitoring and adjustment to keep systems operating as intended, rather than a one-time check at handover</li>
<li><strong>Measurement and verification:</strong> a structured process for quantifying savings by comparing measured use with an adjusted baseline</li>
<li><strong>Change-point model:</strong> a regression in which energy use changes slope above or below a balance temperature</li>
<li><strong>Trend log:</strong> a record of a control point, such as a valve position or temperature, sampled over time</li>
</ul>

<h3>Modeling Expected Energy Use</h3>
<p>Heating and cooling energy usually rise as outdoor temperatures move away from a comfortable range. A change-point regression captures this: below a heating balance point, energy use rises as it gets colder; above a cooling balance point, it rises as it gets hotter; in between, use is roughly flat at a baseload. Once fitted on a baseline period, the model predicts what the building would have used under current weather. Comparing predictions with actual use estimates savings or exposes drift. Good practice checks model fit, includes enough data to cover the full range of seasons, and accounts for non-routine changes such as new tenants.</p>

<h3>Fault Detection Methods</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Rule-based</td><td>Engineering rules, such as heating and cooling valves both open</td><td>Transparent and easy to act on</td><td>Many rules needed; false alarms if poorly tuned</td></tr>
<tr><td>Physical model-based</td><td>Compares measurements with equipment models</td><td>Diagnoses causes well</td><td>Costly to build and calibrate</td></tr>
<tr><td>Data-driven</td><td>Statistical or machine learning models of normal behavior</td><td>Scales across many buildings</td><td>Less interpretable; needs clean training data</td></tr>
</tbody>
</table>
<p>Common faults include simultaneous heating and cooling, economizers that fail to use cool outdoor air, stuck dampers, short-cycling equipment, sensors out of calibration and schedules that run equipment during unoccupied hours.</p>

<h3>From Alerts to Savings</h3>
<p>Analytics only save energy when someone acts. Many programs struggle with alarm fatigue, where operators ignore frequent low-value alerts. Prioritization by estimated cost of the fault, energy impact and comfort risk focuses attention. Data quality also matters: missing values, mislabeled points and inconsistent naming can consume much of an analytics project's effort, which is why standardized naming schemes for building data have become important.</p>

<h3>Applied Method: A Monitoring-Based Commissioning Cycle</h3>
<ol>
<li>Inventory meters and control points and fix data gaps and naming.</li>
<li>Build a weather-normalized baseline of energy use.</li>
<li>Deploy fault rules and anomaly detection on key systems.</li>
<li>Rank issues by estimated energy cost and comfort impact.</li>
<li>Fix issues, then verify the change in measured data.</li>
<li>Repeat on a regular cycle and update the baseline after major changes.</li>
</ol>
`,
        GRADUATE: `
<h2>Performance Policy, Disclosure and Portfolio Management</h2>
<p>Building performance monitoring has moved from the plant room into public policy and corporate strategy. Many jurisdictions now require large buildings to report energy use, and some set performance standards that buildings must meet over time. Investors and owners manage portfolios of hundreds of buildings using measured data. This lesson examines the policy instruments, governance challenges and portfolio strategies built on performance data.</p>

<h3>Policy Instruments</h3>
<ul>
<li><strong>Benchmarking ordinance:</strong> a local rule requiring buildings above a size threshold to measure and report annual energy use</li>
<li><strong>Energy disclosure:</strong> making building energy performance visible to regulators, buyers, tenants or the public</li>
<li><strong>Building performance standard:</strong> a regulation requiring existing buildings to meet energy or emissions targets that tighten over time</li>
<li><strong>Operational rating:</strong> a label based on measured energy use, as opposed to an asset rating based on design characteristics</li>
<li><strong>Data access:</strong> arrangements that let owners obtain whole-building utility data even when tenants hold the accounts</li>
<li><strong>Split incentive:</strong> a situation in which the party paying for upgrades is not the party who receives the savings</li>
</ul>

<h3>From Disclosure to Performance Standards</h3>
<p>Disclosure works through information: when owners and markets see energy data, poor performers face reputational and market pressure. Evidence suggests benchmarking is associated with modest savings, but information alone rarely drives deep upgrades. Building performance standards go further by attaching consequences, such as fines or required actions, to missing targets. They depend on reliable measured data, clear compliance pathways, and provisions for hardship cases.</p>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Data needs</th><th>Key design questions</th></tr></thead>
<tbody>
<tr><td>Benchmarking and disclosure</td><td>Information and market pressure</td><td>Annual whole-building energy</td><td>Thresholds, publication, data quality checks</td></tr>
<tr><td>Operational ratings and labels</td><td>Comparable signals to buyers and tenants</td><td>Measured energy, normalized</td><td>Normalization method, label format</td></tr>
<tr><td>Building performance standards</td><td>Mandatory targets with penalties</td><td>Verified annual data</td><td>Target metric, trajectory, flexibility, support</td></tr>
<tr><td>Audit and retro-commissioning mandates</td><td>Required periodic assessment</td><td>Audit reports and system data</td><td>Whether findings must be implemented</td></tr>
</tbody>
</table>

<h3>Choosing a Metric</h3>
<p>Policy designers must choose what to measure: site energy, source energy or greenhouse gas emissions. Site energy is what the meter shows; source energy accounts for losses in producing and delivering energy; emissions metrics depend on the carbon intensity of the grid and fuels. Each choice shifts incentives, for example toward or away from electrification. Normalization for weather, occupancy and use type affects fairness across building types.</p>

<h3>Portfolio Management</h3>
<p>Owners with many buildings use performance data to rank properties, plan capital investment and report to investors. A typical approach screens the portfolio with benchmarking, targets the worst performers for audits, and aligns upgrades with equipment replacement cycles. Measured data also supports green leases, which share costs and benefits between landlords and tenants and help overcome split incentives.</p>

<h3>Institutional Barriers and Equity</h3>
<p>Barriers include limited access to tenant utility data, inconsistent data quality, small owners lacking technical capacity, and compliance costs that weigh on affordable housing. Equitable programs pair requirements with technical assistance, financing and longer timelines for under-resourced owners, and protect tenants from cost pass-through or displacement after upgrades.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the policy goal: energy, emissions, peak demand or a combination.</li>
<li>Assess data availability, quality and verification processes.</li>
<li>Estimate savings attributable to the policy against a credible counterfactual.</li>
<li>Examine compliance costs and impacts by building type and owner capacity.</li>
<li>Review whether data is used by markets, owners and tenants in practice.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Building Performance Analytics</h2>
<p>Advances in sensing, connectivity and computing have made building data abundant, but turning it into reliable insight remains difficult. Research now focuses on machine learning that generalizes across buildings, on integrating occupant feedback, on digital twins that link models to live data, and on causal methods that separate genuine savings from noise. This lesson surveys methods, debates and open questions for advanced study.</p>

<h3>Machine Learning Applications</h3>
<ul>
<li><strong>Load forecasting:</strong> predicting future energy demand from weather, calendar and operational data for control and grid interaction</li>
<li><strong>Anomaly detection:</strong> identifying unusual patterns in time-series data without predefined rules</li>
<li><strong>Transfer learning:</strong> reusing a model trained on data-rich buildings to improve performance on buildings with little data</li>
<li><strong>Digital twin:</strong> a virtual model of a building continuously updated with measured data to support simulation and optimization</li>
<li><strong>Model predictive control:</strong> a control strategy that uses a model to plan actions over a future horizon while respecting constraints</li>
<li><strong>Semantic metadata:</strong> machine-readable descriptions of sensors, equipment and their relationships that let analytics run across different buildings</li>
</ul>
<p>Data-driven models perform well on forecasting tasks with sufficient history, but buildings are heterogeneous, and models trained in one building often fail in another. Transfer learning, physics-informed machine learning and semantic metadata standards aim to make analytics portable. A persistent bottleneck is labeled fault data, since real faults are rarely documented systematically.</p>

<h3>Modeling Approaches Compared</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>White-box physics simulation</td><td>Interpretable, supports design questions</td><td>Calibration is laborious and often underdetermined</td></tr>
<tr><td>Grey-box resistance-capacitance models</td><td>Compact, physically meaningful, suited to control</td><td>Simplified dynamics, parameter identifiability issues</td></tr>
<tr><td>Black-box machine learning</td><td>Flexible, accurate with abundant data</td><td>Poor extrapolation, limited interpretability</td></tr>
<tr><td>Physics-informed learning</td><td>Combines constraints with data flexibility</td><td>Methods still maturing; implementation complexity</td></tr>
</tbody>
</table>

<h3>Occupant Feedback and Human Factors</h3>
<p>Measured energy data says little about whether occupants are comfortable or productive. Research integrates comfort surveys, feedback apps and personal comfort models with sensor data. Questions include how to weight subjective votes against sensor readings, how feedback interfaces change behavior, whether eco-feedback effects persist over time, and how to protect privacy when occupancy and personal data are collected.</p>

<h3>Contested Questions</h3>
<ul>
<li>How should savings be attributed when multiple interventions and external changes overlap?</li>
<li>What counts as a digital twin, and when does its added complexity justify the cost?</li>
<li>Do performance gaps arise mainly from design, construction, operation or occupant behavior?</li>
<li>How transferable are machine learning results reported on public benchmark datasets to real portfolios?</li>
</ul>

<h3>Methodological Debates</h3>
<p>Measurement and verification relies on counterfactual baselines, and the choice of model can change estimated savings. Researchers are exploring causal inference methods, comparison groups and Bayesian approaches that express uncertainty explicitly. Reproducibility is limited by proprietary data and inconsistent metrics. Open datasets and shared benchmarks have helped, but they may not represent the diversity of real buildings, climates and operating practices.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust, portable fault detection that works with sparse labels and heterogeneous metadata.</li>
<li>Uncertainty quantification for savings estimates used in policy compliance and markets.</li>
<li>Grid-interactive buildings that balance comfort, cost and emissions under real-time signals.</li>
<li>Privacy-preserving analytics for occupancy and personal comfort data.</li>
<li>Long-term field evaluation of whether analytics recommendations are implemented and sustained.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbperfq1',
      question: {
        ELEMENTARY: 'Why do people watch how much energy a building uses?',
        MIDDLE_SCHOOL: 'What does an energy dashboard show?',
        HIGH_SCHOOL: 'What is benchmarking?',
        UNDERGRADUATE: 'What is fault detection and diagnostics?',
        GRADUATE: 'What is energy disclosure?',
        PHD: 'What is a digital twin?',
      },
      options: {
        ELEMENTARY: ['To find ways to save energy', 'To make the building use more energy', 'To paint the meters', 'To make the lights brighter'],
        MIDDLE_SCHOOL: ['Energy and water use with charts in real time', 'The speed of cars outside', 'Only the weather forecast', 'The names of students'],
        HIGH_SCHOOL: ['Comparing a building with itself over time and with similar buildings', 'Building new benches', 'Turning off the automation system', 'Choosing paint colors'],
        UNDERGRADUATE: ['Automated analysis that flags abnormal equipment behavior and suggests likely causes', 'Blaming occupants for high bills', 'Replacing every sensor each year', 'Only checking the main utility bill'],
        GRADUATE: ['Making building energy performance visible to regulators, buyers, tenants or the public', 'Hiding energy bills from tenants', 'Banning energy meters', 'A rule that applies only to new houses'],
        PHD: ['A virtual model of a building continuously updated with measured data', 'Two identical buildings side by side', 'A backup power supply', 'A second utility meter'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Watching energy helps us find waste, like lights left on, so we can save energy.',
        MIDDLE_SCHOOL: 'Dashboards display energy and water use as charts so people can see what is happening.',
        HIGH_SCHOOL: 'Benchmarking shows whether a building is improving and how it ranks against peers.',
        UNDERGRADUATE: 'Fault detection and diagnostics finds problems like stuck dampers or simultaneous heating and cooling.',
        GRADUATE: 'Disclosure creates transparency so markets and regulators can see building performance.',
        PHD: 'A digital twin links a model to live data so the building can be simulated and optimized.',
      },
    },
    {
      id: 'gbperfq2',
      question: {
        ELEMENTARY: 'What is a meter?',
        MIDDLE_SCHOOL: 'What might high electricity use at night in a school mean?',
        HIGH_SCHOOL: 'What is energy use intensity?',
        UNDERGRADUATE: 'In a change-point model, what happens below the heating balance point?',
        GRADUATE: 'How does a building performance standard differ from benchmarking alone?',
        PHD: 'Why is transfer learning useful for building analytics?',
      },
      options: {
        ELEMENTARY: ['A kind of ruler for measuring desks', 'A machine that counts how much electricity, gas or water is used', 'A light switch', 'A type of heater'],
        MIDDLE_SCHOOL: ['Everything is working perfectly', 'Lights, computers or fans may be left on', 'The school has no electricity', 'It is always sunny at night'],
        HIGH_SCHOOL: ['The cost of energy per person', 'Annual energy use divided by floor area', 'The number of light bulbs in a building', 'The temperature setpoint'],
        UNDERGRADUATE: ['Energy use stays exactly flat', 'Energy use rises as it gets colder', 'Energy use falls as it gets colder', 'The building turns off completely'],
        GRADUATE: ['It removes the need for data', 'It attaches consequences to missing energy or emissions targets', 'It applies only to new buildings', 'It is purely voluntary'],
        PHD: ['It removes the need for any data', 'It lets models trained on data-rich buildings help buildings with little data', 'It guarantees perfect accuracy', 'It only works for one building'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A meter counts how much energy or water a building uses.',
        MIDDLE_SCHOOL: 'Nobody is in school at night, so high use suggests something has been left on.',
        HIGH_SCHOOL: 'Dividing by floor area lets you compare buildings of different sizes fairly.',
        UNDERGRADUATE: 'Below the heating balance point, colder weather increases heating energy use.',
        GRADUATE: 'Performance standards set targets with penalties or required actions, going beyond information.',
        PHD: 'Buildings differ greatly, and transfer learning reduces the data needed for each new building.',
      },
    },
    {
      id: 'gbperfq3',
      question: {
        ELEMENTARY: 'What can a sensor in a classroom do?',
        MIDDLE_SCHOOL: 'What is baseload?',
        HIGH_SCHOOL: 'What is the performance gap?',
        UNDERGRADUATE: 'What is alarm fatigue?',
        GRADUATE: 'What is a split incentive?',
        PHD: 'What is a key limitation of black-box machine learning models for buildings?',
      },
      options: {
        ELEMENTARY: ['Make the room smell nice', 'Grow plants', 'Notice the room is empty and switch off the lights', 'Write homework'],
        MIDDLE_SCHOOL: ['The energy used only at lunchtime', 'The highest energy use of the year', 'Energy a building uses all the time, even when empty', 'The energy used by buses'],
        HIGH_SCHOOL: ['The space between two buildings', 'A gap in the roof', 'The difference between predicted and actual energy use', 'The time between meter readings'],
        UNDERGRADUATE: ['Equipment that overheats', 'A fire alarm test', 'Operators ignoring frequent low-value alerts', 'A broken alarm clock'],
        GRADUATE: ['When energy is split between two meters', 'When two buildings share a roof', 'When the party paying for upgrades is not the one receiving the savings', 'When incentives are paid in two parts'],
        PHD: ['They cannot use data', 'They are always slower than simulation', 'They extrapolate poorly and are hard to interpret', 'They require no training'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Occupancy sensors notice when nobody is in a room and turn off the lights.',
        MIDDLE_SCHOOL: 'Baseload is the always-on energy use, which you can see at night or on weekends.',
        HIGH_SCHOOL: 'Many buildings use more energy than designers predicted; that difference is the performance gap.',
        UNDERGRADUATE: 'Too many unimportant alerts cause operators to tune out, so prioritization is essential.',
        GRADUATE: 'For example, a landlord pays for upgrades while tenants who pay the bills get the savings.',
        PHD: 'Black-box models can be accurate within their data but fail outside it and offer little explanation.',
      },
    },
    {
      id: 'gbperfq4',
      question: {
        ELEMENTARY: 'Which is a good energy detective action?',
        MIDDLE_SCHOOL: 'What is a submeter?',
        HIGH_SCHOOL: 'Why do benchmarking tools use weather normalization?',
        UNDERGRADUATE: 'What is continuous commissioning?',
        GRADUATE: 'Why does the choice between site energy, source energy and emissions matter?',
        PHD: 'What are semantic metadata used for in building analytics?',
      },
      options: {
        ELEMENTARY: ['Leaving the TV on all night', 'Opening the fridge for fun', 'Turning up the heater with the window open', 'Counting lights left on in empty rooms'],
        MIDDLE_SCHOOL: ['A meter under the ground', 'A very small building', 'A meter for submarines', 'An extra meter that measures one part of a building'],
        HIGH_SCHOOL: ['To make data look better', 'To count the number of rainy days', 'Because weather has no effect on energy', 'To remove the effect of an unusually hot or cold year'],
        UNDERGRADUATE: ['Building a new building every year', 'Checking systems only once at handover', 'Turning equipment on and off constantly', 'Ongoing monitoring and adjustment to keep systems working as intended'],
        GRADUATE: ['It does not matter at all', 'All three are always identical', 'Only emissions can be measured', 'Each metric shifts incentives, for example toward or away from electrification'],
        PHD: ['Decorating dashboards', 'Encrypting meter readings', 'Replacing all sensors', 'Describing sensors and equipment in machine-readable form so analytics can run across buildings'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Spotting lights left on in empty rooms is a great way to find energy waste.',
        MIDDLE_SCHOOL: 'Submeters show where energy goes, such as one floor or the lighting system.',
        HIGH_SCHOOL: 'Normalization adjusts for weather so comparisons reflect real performance changes.',
        UNDERGRADUATE: 'Continuous commissioning uses data to catch and fix problems as they arise over time.',
        GRADUATE: 'Different metrics reward different strategies, so the choice shapes owner decisions.',
        PHD: 'Standardized metadata let the same analytics work on buildings with different naming and systems.',
      },
    },
    {
      id: 'gbperfq5',
      question: {
        ELEMENTARY: 'What is a smart meter?',
        MIDDLE_SCHOOL: 'What might it mean if heating and cooling run at the same time?',
        HIGH_SCHOOL: 'What is a setpoint?',
        UNDERGRADUATE: 'What is a strength of rule-based fault detection?',
        GRADUATE: 'What is a common barrier for benchmarking in buildings with many tenants?',
        PHD: 'Why is measurement and verification methodologically debated?',
      },
      options: {
        ELEMENTARY: ['A meter that sends its numbers to a computer all the time', 'A meter that does homework', 'A meter that never works', 'A meter made of glass only'],
        MIDDLE_SCHOOL: ['The controls are fighting each other and wasting energy', 'The building is very efficient', 'It is a normal weekend', 'The meter is new'],
        HIGH_SCHOOL: ['The target value a control system tries to maintain', 'The place where a meter is installed', 'The number of floors in a building', 'The price of electricity'],
        UNDERGRADUATE: ['Rules are transparent and easy to act on', 'Rules never produce false alarms', 'Rules need no tuning', 'Rules discover unknown faults automatically'],
        GRADUATE: ['Owners may lack access to whole-building data when tenants hold utility accounts', 'Tenants never use energy', 'Meters are illegal', 'All buildings are identical'],
        PHD: ['Savings depend on a counterfactual baseline, and model choices can change the estimate', 'Savings can be measured directly with a meter', 'There is only one possible baseline', 'Verification is never used in policy'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Smart meters share their numbers often so people can see energy use right away.',
        MIDDLE_SCHOOL: 'Heating and cooling together is a classic sign of controls working against each other.',
        HIGH_SCHOOL: 'Control systems compare measurements with setpoints and adjust equipment to meet them.',
        UNDERGRADUATE: 'Engineering rules are easy to understand, which helps operators trust and act on them.',
        GRADUATE: 'Data access arrangements help owners collect whole-building data from tenant accounts.',
        PHD: 'You cannot meter energy that was not used, so savings rely on modeled baselines with uncertainty.',
      },
    },
  ],
}

export default expansion
