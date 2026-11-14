import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'smart-buildings',
  lessons: [
    {
      id: 'gb-sm-1',
      title: 'Thinking Buildings',
      content: {
        ELEMENTARY: `
<h2>Buildings That Can Think</h2>
<p>Have you ever walked into a room and the lights turned on all by themselves? That room was being a little bit smart! A smart building uses tiny helpers and a computer "brain" to notice what is happening and to save energy without anyone pressing a button.</p>

<h3>How a Smart Building Senses</h3>
<p>People use eyes, ears and skin to notice the world. A smart building uses small gadgets called sensors. Some sensors feel how warm or cold a room is. Some notice when people walk in. Others measure how bright the sunlight is.</p>
<ul>
<li><strong>Sensor:</strong> a small gadget that notices things like heat, light or movement</li>
<li><strong>Thermostat:</strong> a dial or screen that keeps a room at a comfy temperature</li>
<li><strong>Motion sensor:</strong> a helper that notices when someone moves in a room</li>
</ul>

<h3>The Building's Brain</h3>
<p>All the sensors send messages to a computer. The computer is like the building's brain. It decides what to do. If a classroom is empty, it can turn off the lights. If the sun is shining brightly, it can dim the lamps. If it is a hot afternoon, it can close the blinds to keep the room cool.</p>
<ul>
<li><strong>Controller:</strong> the computer brain that decides when to switch things on and off</li>
<li><strong>Automatic:</strong> something that happens by itself without a person doing it</li>
</ul>

<h3>Why This Helps the Earth</h3>
<p>Lights and heaters left on in empty rooms waste energy. Making electricity often means burning fuels that make the air dirty. When a building only uses energy where people really need it, it saves energy, saves money and helps keep our planet healthy.</p>

<h3>You Can Be a Smart Helper Too</h3>
<p>Even the smartest building needs good friends. You can help by thinking like a sensor!</p>
<ol>
<li>Notice when a room is empty and switch off the lights.</li>
<li>Close the door to keep warm or cool air inside.</li>
<li>Tell a grown-up if a room feels too hot or too cold.</li>
<li>Open the curtains to use sunlight instead of lamps.</li>
</ol>

<h3>Think About It</h3>
<p>What things in your school or home could be smarter? Maybe a tap that turns off by itself, or a light that knows when you leave. Smart buildings and smart kids make a great team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Sensors and Computers Make Buildings Smarter</h2>
<p>Large buildings like schools, offices and hospitals have many systems: heating, cooling, fresh air, lighting, elevators and security. In the past, people controlled each one separately with switches and dials. Today many buildings connect these systems to computers that watch, decide and act automatically. This is called <em>building automation</em>, and it can save a large share of the energy a building uses.</p>

<h3>The Sense, Decide, Act Loop</h3>
<p>Every smart building works using a simple loop that repeats again and again:</p>
<ol>
<li><strong>Sense:</strong> sensors measure temperature, humidity, light, carbon dioxide and whether people are present.</li>
<li><strong>Decide:</strong> a computer compares the measurements with targets, such as keeping a room near a comfortable temperature.</li>
<li><strong>Act:</strong> the computer sends signals to motors, valves, fans and lights to make changes.</li>
<li><strong>Check:</strong> sensors measure again to see if the change worked.</li>
</ol>
<p>This loop is called a <em>feedback loop</em>. Your body does something similar when you sweat on a hot day to cool down.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Building automation:</strong> connecting building systems to computers so they work together automatically</li>
<li><strong>Feedback loop:</strong> a cycle where a system measures results and adjusts what it does next</li>
<li><strong>Occupancy sensor:</strong> a device that detects whether people are in a space</li>
<li><strong>Actuator:</strong> a motor or device that physically moves something, like opening a damper or valve</li>
<li><strong>Schedule:</strong> a plan telling systems when to run, such as heating only during school hours</li>
<li><strong>Carbon dioxide sensor:</strong> a sensor that estimates how stale the air is by measuring the gas people breathe out</li>
</ul>

<h3>What Smart Features Do</h3>
<table>
<thead><tr><th>Smart feature</th><th>What it does</th><th>Why it helps</th></tr></thead>
<tbody>
<tr><td>Occupancy lighting</td><td>Turns lights off when rooms are empty</td><td>Stops wasted electricity</td></tr>
<tr><td>Daylight dimming</td><td>Lowers lamps when sunlight is strong</td><td>Uses free light from the sun</td></tr>
<tr><td>Demand ventilation</td><td>Brings in more fresh air when rooms are crowded</td><td>Keeps air healthy without over-ventilating</td></tr>
<tr><td>Smart thermostats</td><td>Learn schedules and adjust temperature</td><td>Avoids heating or cooling empty spaces</td></tr>
<tr><td>Energy meters</td><td>Track how much electricity is used</td><td>Helps people find waste</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Buildings use a large share of the world's energy, mostly for heating, cooling and lighting. Much of that energy is wasted in empty rooms or when systems fight each other, like a heater and an air conditioner running at the same time. Smart controls help fix these problems.</p>

<h3>Smart Does Not Replace People</h3>
<p>Smart buildings still need people. Someone has to set good targets, fix broken sensors and listen when occupants say they are uncomfortable. A smart system with a broken sensor can make bad decisions very confidently! The best buildings combine good technology with people who care about how it works.</p>
`,
        HIGH_SCHOOL: `
<h2>Building Automation, the Internet of Things and Intelligent Controls</h2>
<p>A modern commercial building can contain thousands of devices: fans, pumps, chillers, boilers, light fixtures, window shades, meters and sensors. A <em>building automation system</em> ties these together so they can be monitored and controlled from one place. Newer approaches add internet-connected devices and data analytics. This lesson explores how these systems are organized, what they make possible and the trade-offs they bring.</p>

<h3>The Layers of a Building Automation System</h3>
<p>Most building automation systems are organized in layers, a bit like a company with workers, managers and executives:</p>
<ul>
<li><strong>Field devices:</strong> sensors and actuators in rooms and equipment that measure conditions and move valves, dampers and switches</li>
<li><strong>Controllers:</strong> local computers that run control logic for a piece of equipment or a zone</li>
<li><strong>Network:</strong> the communication links that carry data between controllers using shared protocols</li>
<li><strong>Supervisory software:</strong> the operator dashboard that shows alarms, trends and schedules for the whole building</li>
<li><strong>Protocol:</strong> a shared language that lets devices from different manufacturers talk to each other</li>
<li><strong>Setpoint:</strong> the target value a controller tries to maintain, such as a room temperature</li>
</ul>
<p>BAS stands for Building Automation System. Many buildings use open communication protocols so that equipment from different suppliers can work together instead of locking an owner into one vendor.</p>

<h3>What the Internet of Things Adds</h3>
<p>The Internet of Things (IoT) refers to everyday devices connected to networks. In buildings, IoT can mean wireless sensors that are cheap enough to place in every room, connected light fixtures that also report occupancy, or meters that stream data to the cloud. More data allows finer control and faster detection of problems.</p>

<h3>Common Intelligent Control Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>How it works</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Scheduling and setbacks</td><td>Relaxes temperature targets when the building is unoccupied</td><td>Wrong schedules can leave early arrivals uncomfortable</td></tr>
<tr><td>Demand-controlled ventilation</td><td>Adjusts outdoor air based on carbon dioxide or occupancy</td><td>Faulty sensors can under-ventilate rooms</td></tr>
<tr><td>Daylight harvesting</td><td>Dims electric lights when daylight is sufficient</td><td>Needs careful sensor placement and calibration</td></tr>
<tr><td>Fault detection</td><td>Software flags equipment behaving abnormally</td><td>Too many false alarms cause operators to ignore them</td></tr>
<tr><td>Demand response</td><td>Reduces load when the electric grid is stressed</td><td>Must protect comfort and critical spaces</td></tr>
</tbody>
</table>

<h3>Risks and Challenges</h3>
<p>Smart buildings are not automatically efficient. Poorly programmed controls, overridden settings and broken sensors are common. Connected devices also create cybersecurity risks, since a hacked system could disable heating or unlock doors. Privacy matters too: occupancy data can reveal where people are and when. Good design uses secure networks, collects only needed data and keeps manual overrides for safety.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Schools that ventilate classrooms based on how many students are present.</li>
<li>Offices that let workers adjust their own comfort through a phone app.</li>
<li>Hospitals that monitor critical rooms continuously and alarm on any problem.</li>
<li>Campuses that shift cooling loads to cheaper, cleaner hours of the day.</li>
</ol>
<p>The goal is not gadgets for their own sake. A smart building succeeds when it saves energy, keeps people comfortable and healthy, and is easy for operators to understand and maintain.</p>
`,
        UNDERGRADUATE: `
<h2>Smart Building Architectures, Data Analytics and Occupant-Centric Design</h2>
<p>Smart building technology is best analyzed as an information system layered onto a physical system. The physical building determines what is possible: its envelope, mechanical plant and zoning. The information system determines how close real operation comes to that potential. Many studies of commercial buildings find a persistent gap between designed and actual energy performance, and much of that gap traces to controls, operations and maintenance rather than equipment.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>System architecture:</strong> the arrangement of devices, controllers, networks and software and how information flows among them</li>
<li><strong>Interoperability:</strong> the ability of systems from different vendors to exchange data and commands meaningfully</li>
<li><strong>Semantic tagging:</strong> labeling data points with standardized meaning so software can understand what each sensor measures</li>
<li><strong>Fault detection and diagnostics:</strong> software that identifies equipment faults and suggests probable causes from operating data</li>
<li><strong>Occupant-centric control:</strong> control that responds to actual occupant presence, preferences and feedback rather than fixed assumptions</li>
<li><strong>Performance gap:</strong> the difference between energy use predicted at design and energy use measured in operation</li>
</ul>

<h3>From Hierarchies to Data Platforms</h3>
<p>Traditional building automation is hierarchical and often proprietary: each vendor's controllers speak to that vendor's supervisory software. Point names are frequently cryptic abbreviations chosen by an installer, which makes analysis slow. Newer architectures separate data collection from applications. Data from many systems flows into a common platform with consistent semantic tags, and analytics applications, dashboards and optimization tools draw from it. This separation lowers the cost of adding new applications and reduces vendor lock-in, but it requires upfront effort to map and tag points.</p>

<table>
<thead><tr><th>Architecture feature</th><th>Traditional BAS</th><th>Data-platform approach</th></tr></thead>
<tbody>
<tr><td>Data access</td><td>Through vendor software</td><td>Through open interfaces</td></tr>
<tr><td>Point naming</td><td>Installer-specific</td><td>Standardized semantic tags</td></tr>
<tr><td>Analytics</td><td>Limited trending and alarms</td><td>Fault detection, benchmarking, optimization</td></tr>
<tr><td>Upgrade path</td><td>Often tied to one vendor</td><td>Applications added independently</td></tr>
<tr><td>Main risk</td><td>Lock-in, opaque logic</td><td>Larger attack surface, integration effort</td></tr>
</tbody>
</table>

<h3>Analytics: Reasoning About Savings</h3>
<p>Analytics deliver value by finding specific, fixable problems: a valve leaking hot water into a cooling coil, a fan running all night, simultaneous heating and cooling. Savings estimates should be grounded in a baseline. A common approach models energy use as a function of outdoor temperature and occupancy schedule, then compares post-intervention data against the model's prediction. Because weather varies, simply comparing this year with last year can mislead. Persistence also matters: savings from re-tuning controls tend to erode as overrides accumulate, so continuous monitoring is often worth more than one-time fixes.</p>

<h3>Occupant-Centric Design</h3>
<p>Comfort standards describe average responses, but individuals differ. Occupant-centric approaches gather feedback through apps or simple voting interfaces, learn preferences and widen setpoint bands where people accept it. Studies suggest that occupants tolerate wider temperature ranges when they have some personal control, such as a desk fan or operable window. The design question is how to give meaningful control without letting individual choices undermine whole-building efficiency.</p>

<h3>Cybersecurity and Privacy</h3>
<p>Connected building systems can be attacked, and older controllers were rarely designed with security in mind. Basic practices include network segmentation separating building controls from business networks, changing default credentials, patch management and logging. Occupancy data can be personal, so collecting aggregate counts rather than identities is a sound default.</p>

<h3>Applied Checklist for Evaluating a Smart Building Project</h3>
<ol>
<li>Define measurable goals: energy, comfort, air quality, maintenance effort.</li>
<li>Inventory existing systems, points and protocols; check data quality.</li>
<li>Establish a weather-normalized baseline before changes.</li>
<li>Prioritize analytics that lead to specific operator actions.</li>
<li>Include cybersecurity and privacy requirements in procurement.</li>
<li>Plan for training, ongoing monitoring and verification of persistence.</li>
</ol>
`,
        GRADUATE: `
<h2>Advanced Control, Machine Learning and Grid-Interactive Buildings</h2>
<p>At the graduate level, smart building technology raises questions of control theory, system integration with electricity grids, economics and institutional design. Buildings are shifting from passive loads to flexible resources that can adjust consumption in response to grid conditions. Realizing that potential depends on control strategies that anticipate the future, on business models that reward flexibility, and on governance that protects occupants and data.</p>

<h3>Beyond Rule-Based Control</h3>
<ul>
<li><strong>Rule-based control:</strong> fixed if-then logic and sequences of operation written by engineers for typical conditions</li>
<li><strong>Model predictive control:</strong> control that uses a model of building dynamics and forecasts to optimize actions over a future horizon</li>
<li><strong>Reinforcement learning:</strong> a machine learning approach in which a controller learns policies through trial, feedback and reward</li>
<li><strong>Thermal mass:</strong> the capacity of building materials to store heat, which allows heating or cooling loads to be shifted in time</li>
<li><strong>Grid-interactive efficient building:</strong> a building that combines efficiency, connectivity and flexible loads to support the grid</li>
<li><strong>Load flexibility:</strong> the ability to shift, shed or modulate electricity demand without unacceptable loss of service</li>
</ul>
<p>Model predictive control (MPC) solves an optimization at each time step: given forecasts of weather, occupancy and electricity prices, choose a sequence of actions that minimizes cost or emissions while respecting comfort constraints, then apply the first action and repeat. Research and pilot projects have reported meaningful savings and load shifting, but adoption is limited by the effort required to build and maintain an adequate model for each building. Data-driven and grey-box models, which combine simplified physics with parameters fitted from operating data, aim to lower that cost.</p>

<h3>Machine Learning in Practice</h3>
<p>Machine learning is used for load forecasting, occupancy prediction, anomaly detection and, increasingly, control. Practical concerns dominate: training data from one building may not transfer to another, rare events are poorly represented, and operators may distrust recommendations they cannot explain. Safety constraints are essential when a learning controller acts on real equipment; many deployments keep learned components in an advisory or supervisory role while conventional controls handle safety.</p>

<h3>Buildings as Grid Resources</h3>
<table>
<thead><tr><th>Flexibility mode</th><th>Example</th><th>Grid value</th></tr></thead>
<tbody>
<tr><td>Shed</td><td>Dim lighting or raise cooling setpoints during a peak event</td><td>Reduces peak demand and emergency costs</td></tr>
<tr><td>Shift</td><td>Pre-cool using thermal mass or ice storage before the peak</td><td>Moves load to hours with cheaper or cleaner power</td></tr>
<tr><td>Modulate</td><td>Continuously adjust fan or heat pump power</td><td>Can provide fast balancing services</td></tr>
<tr><td>Generate and store</td><td>Coordinate on-site solar, batteries and electric vehicle charging</td><td>Reduces net load and supports local networks</td></tr>
</tbody>
</table>
<p>As grids add variable wind and solar, the value of the hour at which energy is used rises relative to the total amount used. Carbon-aware control, which schedules flexible loads according to forecast grid emissions intensity, illustrates this shift.</p>

<h3>Economics and Business Models</h3>
<p>Building owners invest in controls but often do not capture the grid value they create, especially where tenants pay energy bills. Time-varying tariffs, demand charges and aggregator programs that pool many buildings can align incentives. Analytics are increasingly sold as services, which lowers upfront cost but raises questions about data ownership and long-term dependence on a provider.</p>

<h3>Governance, Equity and Institutional Barriers</h3>
<p>Barriers include fragmented responsibilities among owners, facility managers, tenants and vendors; procurement processes that reward lowest first cost; shortages of skilled controls technicians; and weak interoperability. Equity concerns arise because advanced controls concentrate in large, well-resourced buildings, while smaller and lower-income buildings miss the savings. Occupant data raises surveillance concerns, particularly in workplaces. Policy tools include building performance standards, open-protocol requirements in public procurement, workforce training and clear data governance rules.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Specify objectives: energy, cost, emissions, peak demand, comfort and resilience.</li>
<li>Assess model and data requirements against available skills and budget.</li>
<li>Define safety constraints and fallback behavior for advanced controllers.</li>
<li>Quantify grid value under realistic tariffs and program rules.</li>
<li>Examine who captures benefits and who bears risks, including occupants.</li>
<li>Measure and verify performance over seasons, not just a pilot period.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Autonomous Buildings and Human-Building Interaction</h2>
<p>Research on smart buildings now asks whether buildings can operate with substantially less human supervision, how predictive and learning controllers can be made reliable at scale, and how occupants experience and shape automated environments. These questions sit at the intersection of control engineering, machine learning, building physics, social science and computer security. This lesson surveys methods, contested questions and open research directions.</p>

<h3>Modeling for Control</h3>
<ul>
<li><strong>White-box model:</strong> a detailed physics-based simulation of heat, air and moisture flows built from design information</li>
<li><strong>Black-box model:</strong> a purely data-driven model, such as a neural network, fitted to measured inputs and outputs</li>
<li><strong>Grey-box model:</strong> a reduced-order physical model, often a resistance-capacitance network, with parameters identified from data</li>
<li><strong>Digital twin:</strong> a virtual representation of a physical building that is continuously updated with operating data for analysis and control</li>
<li><strong>System identification:</strong> the process of estimating model structure and parameters from observed system behavior</li>
<li><strong>Transfer learning:</strong> reusing knowledge learned in one building or task to speed learning in another</li>
</ul>
<p>The central trade-off is between fidelity and tractability. Detailed simulation models capture physics well but are expensive to calibrate and too slow for real-time optimization. Grey-box models are tractable and interpretable but may miss nonlinear plant behavior. Black-box models can be accurate within their training distribution yet extrapolate poorly and may violate physical laws. Physics-informed learning, which embeds conservation laws or structural priors into data-driven models, is an active response to this tension.</p>

<h3>Learning Control and Safety</h3>
<p>Reinforcement learning promises controllers that adapt without hand-built models, but sample efficiency is a major obstacle: real buildings cannot explore freely for months at occupants' expense. Common strategies include pre-training in simulation, imitation of existing controllers, constrained or safe reinforcement learning, and hybrid architectures in which learned policies propose actions that a verified layer filters. Benchmarking is contested because results depend heavily on the simulation environment, reward design and baseline controller chosen; a poorly tuned baseline can inflate reported gains.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>How much model is enough for predictive control?</td><td>Benefits of fidelity versus engineering cost vary by building type and climate</td></tr>
<tr><td>What counts as a fair baseline?</td><td>Comparisons against poorly tuned rule-based control may overstate gains</td></tr>
<tr><td>Should occupants be modeled as disturbances or agents?</td><td>Occupants adapt to automation, changing the system being controlled</td></tr>
<tr><td>Can savings scale beyond pilots?</td><td>Deployment costs, data quality and staff skills differ from research settings</td></tr>
<tr><td>How should digital twins be validated?</td><td>Calibration criteria rarely address control-relevant dynamics</td></tr>
</tbody>
</table>

<h3>Human-Building Interaction</h3>
<p>Human-building interaction studies how people perceive, override and collaborate with automated systems. Findings across many studies suggest that perceived control influences comfort and satisfaction, and that opaque automation invites overrides that defeat its purpose. Research directions include explainable control interfaces, personal comfort models learned from feedback or physiological signals, and participatory design. Ethical questions include consent for sensing, the risk of workplace surveillance, and whether personalized comfort exacerbates inequities between occupants with different degrees of influence.</p>

<h3>Security, Resilience and Autonomy</h3>
<p>Greater autonomy and connectivity enlarge the attack surface. Research addresses intrusion detection on building networks, resilient control that degrades gracefully when sensors are spoofed, and verification of control logic. Autonomy also interacts with resilience: a building that depends on cloud services may fail during network outages, motivating edge computing and local fallback modes.</p>

<h3>Methodological Debates</h3>
<p>Measurement and verification remains a weak link. Weather normalization, occupancy changes and concurrent retrofits confound attribution of savings to controls. Randomized or quasi-experimental designs, such as alternating control strategies on comparable days, provide stronger evidence but are rarely used. Open datasets, shared simulation testbeds and reproducible reporting would allow the field to compare methods on equal terms.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Scalable, low-effort modeling pipelines from metadata and operating data.</li>
<li>Safe and sample-efficient learning controllers with formal guarantees.</li>
<li>Coordinated control of building portfolios as grid resources.</li>
<li>Explainable and participatory interfaces that sustain occupant trust.</li>
<li>Privacy-preserving sensing and analytics.</li>
<li>Rigorous field evaluation methods and open benchmarks.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbsmq1',
      question: {
        ELEMENTARY: 'What do smart buildings use to notice heat, light and movement?',
        MIDDLE_SCHOOL: 'What is building automation?',
        HIGH_SCHOOL: 'What does BAS stand for?',
        UNDERGRADUATE: 'Why is cybersecurity important for smart buildings?',
        GRADUATE: 'What is model predictive control?',
        PHD: 'What is a digital twin?',
      },
      options: {
        ELEMENTARY: ['Sensors', 'Paint', 'Doorbells', 'Bricks'],
        MIDDLE_SCHOOL: ['Connecting building systems to computers so they work together automatically', 'Turning every switch by hand', 'Removing all technology from a building', 'Keeping records on paper only'],
        HIGH_SCHOOL: ['Building Automation System', 'Basic Air Supply', 'Best Application Software', 'Building Access Station'],
        UNDERGRADUATE: ['Connected controls can be attacked, disabling heating or unlocking doors', 'Building controls cannot connect to any network', 'Only physical door locks matter for safety', 'Security software makes buildings use more water'],
        GRADUATE: ['Control that uses a building model and forecasts to optimize actions over a future horizon', 'Fixed if-then rules that never change', 'Operators adjusting valves manually each hour', 'Turning all equipment off at night only'],
        PHD: ['A virtual representation of a building continuously updated with operating data', 'A second identical building built next door', 'A pair of matching thermostats', 'A double layer of wall insulation'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Sensors are small gadgets that notice heat, light and movement, like eyes and skin for the building.',
        MIDDLE_SCHOOL: 'Building automation connects systems to computers so they can sense, decide and act together.',
        HIGH_SCHOOL: 'A Building Automation System ties together field devices, controllers, networks and supervisory software.',
        UNDERGRADUATE: 'Networked controls create an attack surface, so segmentation, credentials and patching matter.',
        GRADUATE: 'MPC repeatedly optimizes a sequence of actions using a model and forecasts, then applies the first step.',
        PHD: 'A digital twin is a virtual model kept up to date with real operating data for analysis and control.',
      },
    },
    {
      id: 'gbsmq2',
      question: {
        ELEMENTARY: 'What can a smart building do when a classroom is empty?',
        MIDDLE_SCHOOL: 'What is a feedback loop in a smart building?',
        HIGH_SCHOOL: 'What does demand-controlled ventilation do?',
        UNDERGRADUATE: 'What does semantic tagging do?',
        GRADUATE: 'What is load flexibility?',
        PHD: 'What is a grey-box model?',
      },
      options: {
        ELEMENTARY: ['Turn the heater up as high as it goes', 'Open all the windows in winter', 'Turn off the lights', 'Play loud music'],
        MIDDLE_SCHOOL: ['A loop of wire behind the walls', 'A meeting where people complain', 'A cycle where the system measures results and adjusts what it does next', 'A schedule that never changes'],
        HIGH_SCHOOL: ['Keeps fans at full speed all day', 'Adjusts outdoor air based on carbon dioxide or occupancy', 'Closes all fresh air vents permanently', 'Measures the color of the walls'],
        UNDERGRADUATE: ['Encrypts all building data', 'Replaces sensors with cameras', 'Turns off unused equipment', 'Labels data points with standardized meaning so software knows what each measures'],
        GRADUATE: ['Ability to shift, shed or modulate demand without unacceptable loss of service', 'Bending of structural beams under load', 'Moving furniture between floors', 'Using more electricity at every hour'],
        PHD: ['A model built only from a neural network', 'A detailed simulation with no measured data', 'A reduced-order physical model with parameters identified from data', 'A model of building colors and finishes'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Motion sensors notice nobody is there, so the building brain switches off the lights to save energy.',
        MIDDLE_SCHOOL: 'A feedback loop means the system checks its results and adjusts again, much like your body cooling itself.',
        HIGH_SCHOOL: 'Demand-controlled ventilation brings in more outdoor air when rooms are crowded and less when they are empty.',
        UNDERGRADUATE: 'Standard tags give each point a clear meaning, so analytics software can be applied without manual mapping.',
        GRADUATE: 'Flexibility lets buildings help the grid by moving or reducing load while still serving occupants.',
        PHD: 'Grey-box models combine simplified physics, such as resistance-capacitance networks, with data-fitted parameters.',
      },
    },
    {
      id: 'gbsmq3',
      question: {
        ELEMENTARY: 'What is the building brain?',
        MIDDLE_SCHOOL: 'What does an actuator do?',
        HIGH_SCHOOL: 'What is a protocol in building automation?',
        UNDERGRADUATE: 'What is the performance gap?',
        GRADUATE: 'Why can pre-cooling a building shift load?',
        PHD: 'Why is sample efficiency a problem for reinforcement learning in buildings?',
      },
      options: {
        ELEMENTARY: ['A big plant in the lobby', 'A computer that decides when to switch things on and off', 'The roof of the building', 'The front door'],
        MIDDLE_SCHOOL: ['Measures the temperature only', 'Physically moves something, like opening a valve or damper', 'Writes the school schedule', 'Counts how many students are present'],
        HIGH_SCHOOL: ['A rule about who may enter the building', 'A shared language that lets devices from different makers talk', 'A type of air filter', 'A thermostat setting'],
        UNDERGRADUATE: ['Difference between predicted design energy use and measured energy use', 'The space between two buildings', 'The time it takes to install sensors', 'The difference between rents paid by two tenants'],
        GRADUATE: ['Because thermal mass stores coolness that reduces cooling needed during the peak', 'Because cold air is free to produce', 'Because pre-cooling turns off the grid', 'Because buildings have no thermal mass'],
        PHD: ['Learning needs huge numbers of trials, but real buildings cannot explore freely at the expense of occupants', 'Buildings produce no data at all', 'Reinforcement learning requires no data', 'Samples of building materials are expensive'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The building brain is a computer called a controller that decides what the building should do.',
        MIDDLE_SCHOOL: 'Actuators are motors and devices that carry out decisions, like opening a damper to let in air.',
        HIGH_SCHOOL: 'Protocols are shared communication languages; open ones let equipment from different suppliers work together.',
        UNDERGRADUATE: 'Buildings often use more energy than predicted, largely because of controls, operations and maintenance.',
        GRADUATE: 'Thermal mass stores coolness, so cooling early moves electricity use away from peak hours.',
        PHD: 'Real buildings cannot run long exploratory trials, so researchers pre-train in simulation or use safe learning.',
      },
    },
    {
      id: 'gbsmq4',
      question: {
        ELEMENTARY: 'How can you help a smart building save energy?',
        MIDDLE_SCHOOL: 'Why does a smart building still need people?',
        HIGH_SCHOOL: 'What is a privacy concern with smart buildings?',
        UNDERGRADUATE: 'Why is a weather-normalized baseline used to estimate savings?',
        GRADUATE: 'What is a key barrier to capturing grid value in rented buildings?',
        PHD: 'Why can a poorly tuned baseline controller mislead research results?',
      },
      options: {
        ELEMENTARY: ['Leave the lights on when you leave', 'Keep the door open on cold days', 'Turn the heater up all the way', 'Switch off lights in empty rooms'],
        MIDDLE_SCHOOL: ['Computers cannot use electricity', 'People must press every switch by hand', 'Smart buildings do not have any sensors', 'People set targets, fix broken sensors and listen to occupants'],
        HIGH_SCHOOL: ['Sensors make the building louder', 'Wi-Fi makes rooms colder', 'Privacy only matters for paper files', 'Occupancy data can reveal where people are and when'],
        UNDERGRADUATE: ['Weather does not affect energy use', 'Baselines are only needed for water bills', 'It makes the building warmer', 'Because weather varies, comparing one year with another can mislead'],
        GRADUATE: ['Grid operators refuse to buy electricity', 'Controls cannot be installed in rented spaces', 'Tenants never use electricity', 'Owners invest in controls but tenants or others may capture the benefits'],
        PHD: ['It always makes results more accurate', 'Baselines are not used in control research', 'It makes the learned controller run slower', 'Comparing against a weak baseline can inflate the reported gains of a new method'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Switching off lights in empty rooms is just what a smart sensor would do, so you are helping!',
        MIDDLE_SCHOOL: 'A smart system with a broken sensor can make bad decisions, so people must keep it working well.',
        HIGH_SCHOOL: 'Occupancy data can show where people are, so good design collects only the data really needed.',
        UNDERGRADUATE: 'A model linking energy to weather lets you compare like with like before and after a change.',
        GRADUATE: 'This split incentive means the party paying for controls may not receive the savings or grid payments.',
        PHD: 'A strong, well-tuned baseline is needed so improvements reflect the new method, not a weak comparison.',
      },
    },
    {
      id: 'gbsmq5',
      question: {
        ELEMENTARY: 'Why is it good for a building to save energy?',
        MIDDLE_SCHOOL: 'What does daylight dimming do?',
        HIGH_SCHOOL: 'Why can too many false alarms be a problem in fault detection?',
        UNDERGRADUATE: 'What does occupant-centric control respond to?',
        GRADUATE: 'What is carbon-aware control?',
        PHD: 'Why do opaque automated systems often get overridden?',
      },
      options: {
        ELEMENTARY: ['It helps keep our planet healthy and saves money', 'It makes rooms darker for no reason', 'It makes the building taller', 'It uses up more fuel'],
        MIDDLE_SCHOOL: ['Lowers lamps when sunlight is strong', 'Turns lights to full power at noon', 'Paints windows darker', 'Closes all the curtains'],
        HIGH_SCHOOL: ['Operators may start ignoring alarms, missing real problems', 'Alarms use most of the building energy', 'False alarms fix equipment automatically', 'Alarms make sensors more accurate'],
        UNDERGRADUATE: ['Actual occupant presence, preferences and feedback', 'Only the design drawings', 'Only the color of rooms', 'The age of the building'],
        GRADUATE: ['Scheduling flexible loads according to forecast grid emissions intensity', 'Measuring carbon dioxide in rooms only', 'Banning electricity use during the day', 'Painting roofs black'],
        PHD: ['People who do not understand or trust automation adjust it manually, defeating its purpose', 'Opaque systems cannot be switched off', 'Occupants never notice automated systems', 'Override buttons are illegal in buildings'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Using less energy means less fuel burned, cleaner air and lower bills.',
        MIDDLE_SCHOOL: 'Daylight dimming uses free light from the sun by lowering electric lights when it is bright.',
        HIGH_SCHOOL: 'Alarm fatigue causes operators to ignore warnings, so real faults may be missed.',
        UNDERGRADUATE: 'Occupant-centric control uses real presence and feedback instead of fixed assumptions about people.',
        GRADUATE: 'Carbon-aware control shifts flexible loads to hours when grid electricity is cleaner.',
        PHD: 'Research suggests perceived control matters, and unexplained automation invites overrides.',
      },
    },
  ],
}

export default expansion
