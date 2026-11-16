import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'ocean-energy~2',
  lessons: [
    {
      id: 're-ocean-1',
      title: 'Power from the Sea: From Idea to Grid',
      content: {
        ELEMENTARY: `
<h2>Building a Power Plant in the Sea</h2>
<p>Imagine you live on a small island. All around you, waves splash and tides roll in and out every day. The sea never stops moving! Engineers are learning how to turn that moving water into electricity for island homes and seaside towns. But building machines in the ocean is a big adventure. Let's find out what it takes.</p>

<h3>Watching the Sea First</h3>
<p>Before anyone builds an ocean power machine, they watch the sea for a long time. They put floating measuring tools called buoys in the water. The buoys count how tall the waves are and how often they come. Other tools measure how fast the tide moves. This helps engineers pick the best spot.</p>
<ul>
<li><strong>Buoy:</strong> a floating object that can carry tools to measure waves and weather</li>
<li><strong>Tide:</strong> the slow rise and fall of the sea that happens about twice a day</li>
<li><strong>Current:</strong> a river of moving water inside the ocean</li>
</ul>

<h3>Tough Machines for a Tough Place</h3>
<p>The ocean is strong and salty. Big storms can make giant waves, and salt water can make metal rust. So ocean machines must be very tough. Some float on top of the waves and bob up and down. Others sit on the seabed and have blades that spin like an underwater windmill when the tide flows past.</p>
<ul>
<li><strong>Underwater turbine:</strong> a machine with blades that spin when moving water pushes them</li>
<li><strong>Cable:</strong> a long, thick wire on the seabed that carries electricity back to land</li>
</ul>

<h3>Bringing Power Home</h3>
<p>After the machine makes electricity, a cable carries it along the seabed to the shore. From there, the electricity travels through wires to houses, schools and shops. Tides are great because we know exactly when they will come, so people can plan ahead.</p>

<h3>Being a Good Ocean Neighbor</h3>
<p>Fish, seals, whales and seabirds live in the ocean too. Scientists check that ocean machines do not harm them. Fishing families and people who live by the sea also help decide where machines should go.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Watch the tide at a beach and notice how the water line moves during the day.</li>
<li>Keep beaches clean so sea animals stay healthy.</li>
<li>Draw your own ocean power machine and explain how it would move.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>Capturing Energy from Waves, Tides and Ocean Heat</h2>
<p>The ocean holds energy in several forms: the up-and-down motion of waves, the back-and-forth flow of tides, steady ocean currents, the temperature difference between warm surface water and cold deep water, and even the difference in saltiness where rivers meet the sea. Turning these into electricity is still a young industry, but it could be especially useful for islands and coastal towns.</p>

<h3>Five Ocean Energy Sources</h3>
<table>
<thead><tr><th>Source</th><th>What moves or changes</th><th>Example device</th></tr></thead>
<tbody>
<tr><td>Waves</td><td>Surface water bobbing up and down, made by wind</td><td>Floating buoys or hinged rafts</td></tr>
<tr><td>Tides</td><td>Sea level rising and falling because of the Moon and Sun</td><td>Underwater turbines or tidal barrages</td></tr>
<tr><td>Ocean currents</td><td>Large, steady flows such as major ocean streams</td><td>Moored underwater turbines</td></tr>
<tr><td>Ocean thermal</td><td>Warm surface water versus cold deep water</td><td>Heat engine using a low-boiling fluid</td></tr>
<tr><td>Salinity gradient</td><td>Fresh river water mixing with salty sea water</td><td>Special membranes that capture mixing energy</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Wave energy converter:</strong> a machine that turns the motion of waves into electricity</li>
<li><strong>Tidal stream turbine:</strong> an underwater turbine spun by flowing tidal water</li>
<li><strong>Tidal barrage:</strong> a dam-like wall across an estuary that traps water at high tide and releases it through turbines</li>
<li><strong>Predictable energy:</strong> energy whose timing can be forecast well in advance, like tides</li>
<li><strong>Subsea cable:</strong> a protected electrical cable laid on the seabed to carry power to shore</li>
<li><strong>Corrosion:</strong> damage to metal caused by chemical reactions, sped up by salt water</li>
</ul>

<h3>Steps to Build an Ocean Energy Project</h3>
<ol>
<li><strong>Measure the resource:</strong> record waves, tides and currents for months or years.</li>
<li><strong>Study the environment:</strong> learn which animals live there and how the seabed looks.</li>
<li><strong>Talk to the community:</strong> include fishers, boaters and local people in decisions.</li>
<li><strong>Test a prototype:</strong> try a single device first, often at a special test site.</li>
<li><strong>Connect to the grid:</strong> lay a cable to shore and link the device to power lines.</li>
</ol>

<h3>Why Islands Care</h3>
<p>Many islands bring in diesel fuel by ship to run their power plants. That fuel is expensive and pollutes. Waves and tides are right on their doorstep. Even though ocean devices are still costly, they could help islands become more energy independent. The main challenges are surviving storms, preventing corrosion and lowering costs as more devices are built.</p>
`,
        HIGH_SCHOOL: `
<h2>Ocean Energy Technologies and How Projects Get Built</h2>
<p>Ocean energy is a family of technologies at different stages of maturity. A few tidal barrages have run for decades, tidal stream turbines have reached early commercial arrays, and wave energy is still mostly at the prototype stage. Understanding why requires looking at both the physics and the practical journey from test device to grid-connected project.</p>

<h3>Comparing Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Maturity</th><th>Main strength</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Tidal barrage</td><td>Commercial, few sites</td><td>Large, predictable output</td><td>Big changes to estuary ecosystems</td></tr>
<tr><td>Tidal stream</td><td>Early commercial arrays</td><td>Predictable, smaller footprint</td><td>Few sites with fast enough flow</td></tr>
<tr><td>Wave energy</td><td>Prototypes and pilots</td><td>Huge global resource</td><td>Many competing designs; storm survival</td></tr>
<tr><td>Ocean thermal conversion</td><td>Demonstrations</td><td>Steady, round-the-clock power</td><td>Needs large cold-water pipes; tropical only</td></tr>
<tr><td>Salinity gradient</td><td>Laboratory and pilots</td><td>Steady at river mouths</td><td>Membrane cost and fouling</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Capacity factor:</strong> actual energy produced divided by the energy a device would make running at full power all the time</li>
<li><strong>Technology readiness level:</strong> a scale describing how mature a technology is, from lab concept to proven commercial use</li>
<li><strong>Array:</strong> a group of ocean energy devices installed together and sharing infrastructure such as cables</li>
<li><strong>Mooring:</strong> the lines and anchors that hold a floating device in position</li>
<li><strong>Biofouling:</strong> the build-up of seaweed, barnacles and other organisms on underwater surfaces</li>
<li><strong>Levelized cost of energy:</strong> the average cost of each unit of electricity over a project's lifetime</li>
</ul>

<h3>From Prototype to Power Plant</h3>
<p>Ocean devices usually start as small models in wave tanks, then move to sheltered test sites, then to open-sea test centers with pre-installed cables and monitoring. Only after surviving real storms and producing reliable power do developers build arrays. Each stage reveals new problems: seals that leak, bearings that wear, moorings that snap. Fixing these takes time and money, which is one reason costs remain higher than wind or solar.</p>

<h3>Getting Power to Shore</h3>
<p>Every project needs a subsea export cable, a landfall point and a connection to the onshore grid. For remote coastlines, the nearest strong grid may be far away, adding cost. Tidal power's biggest grid advantage is predictability: output varies, but operators know exactly when, years in advance. Wave power tends to be stronger in winter, which can complement summer-peaking solar.</p>

<h3>Real-World Applications</h3>
<ul>
<li>Island communities using tidal or wave power to reduce reliance on imported diesel.</li>
<li>Powering offshore equipment such as ocean sensors and aquaculture farms.</li>
<li>Pairing ocean devices with offshore wind to share cables and maintenance vessels.</li>
</ul>

<h3>Solutions Ahead</h3>
<ol>
<li>Agreeing on fewer, proven designs so industries can scale up manufacturing.</li>
<li>Using shared test centers to cut the cost of proving new devices.</li>
<li>Designing devices that are easy to tow to port for maintenance.</li>
<li>Planning with communities and environmental monitoring from the start.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Ocean Energy Resources, Device Design and Project Development</h2>
<p>Developing an ocean energy project means translating a physical resource into bankable electricity. The developer must characterize the resource, choose and design a device suited to it, estimate annual energy production, and manage installation, operations and cost. This lesson focuses on that development chain and the quantitative reasoning behind it.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Wave power density:</strong> the power carried by waves per meter of wave crest, which grows with the square of wave height and with wave period</li>
<li><strong>Tidal stream power:</strong> kinetic power in flowing water, which scales with the cube of current speed</li>
<li><strong>Power matrix:</strong> a table giving a wave device's output for each combination of wave height and period</li>
<li><strong>Annual energy production:</strong> the expected yearly electricity output, found by combining a device's power curve with resource statistics</li>
<li><strong>Operations and maintenance:</strong> the ongoing activities and costs of inspecting, repairing and servicing devices over their lifetime</li>
<li><strong>Weather window:</strong> a period of calm enough conditions for vessels to safely install or repair equipment</li>
</ul>

<h3>Resource Characterization</h3>
<p>Wave resources are described statistically, often as joint distributions of significant wave height and energy period built from buoy records and numerical hindcast models. Tidal resources are highly predictable from harmonic analysis of tidal constituents, but local flow is turbulent and varies with depth, so developers deploy acoustic current profilers to measure velocity through the water column. Because tidal power scales with the cube of speed, a modest difference in current velocity between candidate sites produces a large difference in energy yield, making precise site measurement essential.</p>

<h3>Estimating Energy Yield</h3>
<p>For a wave device, multiply each cell of the power matrix by the fraction of time that sea state occurs, then sum and multiply by hours per year. Apply losses for availability, electrical conversion and array effects. For tidal turbines, combine a power curve with the distribution of current speeds. Capacity factors depend on how the rated power is chosen: sizing generators for rare peak conditions lowers the capacity factor, while undersizing loses energy in energetic periods.</p>

<h3>Cost Drivers</h3>
<table>
<thead><tr><th>Cost element</th><th>Why it is high offshore</th><th>Mitigation</th></tr></thead>
<tbody>
<tr><td>Structure and moorings</td><td>Must survive extreme loads far above average conditions</td><td>Load-shedding designs and better extreme load modeling</td></tr>
<tr><td>Installation</td><td>Specialized vessels and narrow weather windows</td><td>Designs that can be installed with smaller, cheaper vessels</td></tr>
<tr><td>Grid connection</td><td>Subsea cable, landfall and onshore upgrades</td><td>Shared export cables across arrays or with offshore wind</td></tr>
<tr><td>Operations and maintenance</td><td>Limited access and corrosion</td><td>Remote monitoring and tow-to-port maintenance</td></tr>
</tbody>
</table>

<h3>Applied Method: Development Checklist</h3>
<ol>
<li>Characterize the resource with measured data and validated numerical models.</li>
<li>Survey seabed, bathymetry and marine life to identify constraints.</li>
<li>Match device type and rating to the resource statistics.</li>
<li>Estimate annual energy production with realistic losses and availability.</li>
<li>Plan installation and maintenance around weather windows and port access.</li>
<li>Secure grid connection and permits early, as these often set the timeline.</li>
</ol>
`,
        GRADUATE: `
<h2>Marine Energy Policy, Environmental Assessment and Grid Integration</h2>
<p>Ocean energy technologies sit in an awkward position: promising enough to attract public support, but not yet cheap enough to compete without it. Policy must sustain innovation through a long, expensive demonstration phase while ensuring environmental and social licensing keeps pace. This lesson examines support mechanisms, consenting under uncertainty and the system value of marine generation.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Revenue support:</strong> policies such as feed-in tariffs or ring-fenced auctions that guarantee prices for early-stage technologies</li>
<li><strong>Adaptive management:</strong> permitting projects with monitoring requirements and conditions that can change as evidence accumulates</li>
<li><strong>Deploy and monitor:</strong> a consenting approach that allows small deployments to proceed while gathering environmental data</li>
<li><strong>Cumulative effects:</strong> combined environmental impacts of multiple projects and other ocean uses in a region</li>
<li><strong>System value:</strong> the value of a generator to the grid beyond its energy output, including timing, predictability and diversity</li>
<li><strong>Social license:</strong> the ongoing acceptance of a project by local communities and stakeholders</li>
</ul>

<h3>Policy Support Through the Valley of Death</h3>
<table>
<thead><tr><th>Stage</th><th>Typical support</th><th>Risk if absent</th></tr></thead>
<tbody>
<tr><td>Research and prototypes</td><td>Grants and public test centers</td><td>Promising designs never reach the sea</td></tr>
<tr><td>Demonstration</td><td>Capital grants and enhanced tariffs</td><td>Developers fail before proving reliability</td></tr>
<tr><td>Early arrays</td><td>Ring-fenced auctions or contracts for difference</td><td>No learning-by-doing or supply chain growth</td></tr>
<tr><td>Commercial scale</td><td>Technology-neutral auctions</td><td>Continued dependence on subsidy</td></tr>
</tbody>
</table>
<p>Several wave energy companies have failed after promising starts, illustrating how fragile the demonstration stage is. Stage-gated programs that fund multiple designs and progressively narrow them aim to spend public money efficiently.</p>

<h3>Environmental Assessment Under Uncertainty</h3>
<p>Key concerns include collision risk between marine animals and turbine blades, underwater noise, electromagnetic fields from cables, changes to sediment transport, and displacement of fishing. Because few devices have been deployed, evidence is limited, and regulators may default to precaution, which can make small projects prohibitively expensive to permit. Proportionate, risk-based consenting, data sharing between projects, and regional baseline studies help resolve this tension.</p>

<h3>Grid Integration and System Value</h3>
<p>Tidal output is variable but highly predictable, reducing forecasting error and reserve requirements. Wave energy is smoother than wind over short timescales and often peaks in winter. In high-renewable systems, these complementary patterns can be worth more than their energy alone suggests. For islands with small grids, marine energy can displace costly diesel, though integration may require storage and advanced controls to maintain stability.</p>

<h3>Equity and Coastal Communities</h3>
<p>Marine projects affect fishing grounds, cultural sites and coastal livelihoods. Indigenous and coastal communities may hold customary rights to marine areas. Meaningful consultation, shared ownership or benefit agreements, and local supply chain opportunities can make projects fairer and strengthen social license.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess technology readiness and the support needed at each stage.</li>
<li>Design proportionate environmental monitoring and adaptive conditions.</li>
<li>Estimate system value, including predictability and seasonal complementarity.</li>
<li>Map spatial conflicts and cumulative effects with other ocean uses.</li>
<li>Agree benefit-sharing and engagement processes with affected communities.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Marine Energy Arrays and Resource Characterization</h2>
<p>As ocean energy moves from single devices to arrays, research questions shift from the behavior of one machine to interactions among many machines, the resource and the environment. Accurate resource characterization, array optimization and robust uncertainty quantification are central to lowering costs and risks. This lesson surveys methods and open questions for advanced study.</p>

<h3>Methods for Resource Characterization</h3>
<ul>
<li><strong>Spectral wave models:</strong> numerical models that evolve the wave energy spectrum across ocean regions to produce hindcasts and forecasts</li>
<li><strong>Regional ocean circulation models:</strong> hydrodynamic models that simulate tides and currents at scales relevant to sites</li>
<li><strong>Acoustic Doppler profiling:</strong> instruments that measure water velocity throughout the water column using sound reflected by particles</li>
<li><strong>Turbulence characterization:</strong> measuring small-scale velocity fluctuations that drive fatigue loads on turbines</li>
<li><strong>Extreme value analysis:</strong> statistical methods for estimating rare but critical events such as design storm waves</li>
<li><strong>Directional wave spectrum:</strong> a description of how wave energy is distributed across both frequency and direction</li>
</ul>
<p>Standard resource metrics often average away the features that drive device loads, such as turbulence intensity, wave-current interaction and directional spreading. Research increasingly emphasizes site characterization that targets these load-relevant quantities.</p>

<h3>Array Interactions</h3>
<p>Tidal turbines extract momentum from the flow, creating wakes and potentially altering flow through an entire channel. At large scale, the extractable power of a channel is limited not by kinetic energy alone but by how extraction changes the head driving the flow. Wave device arrays interact through radiated and diffracted waves, which can increase or decrease total output depending on spacing and layout. Optimizing layout, control and spacing requires coupling device models with flow or wave models across scales.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Extractable tidal resource of channels</td><td>Depends on modeling assumptions about channel dynamics and acceptable flow change</td></tr>
<tr><td>Design convergence for wave energy</td><td>Debate over whether one archetype will dominate or diverse designs suit different seas</td></tr>
<tr><td>Magnitude of collision and noise risk</td><td>Very limited long-term monitoring data at array scale</td></tr>
<tr><td>Fidelity needed for array optimization</td><td>Trade-off between computational cost and accuracy of interaction effects</td></tr>
<tr><td>Learning rates for marine energy</td><td>Too few deployments to estimate cost reduction confidently</td></tr>
</tbody>
</table>

<h3>Uncertainty Quantification</h3>
<p>Energy yield estimates carry uncertainty from measurement, model error, interannual variability and climate change, which may shift storm tracks and wave climates. Propagating these uncertainties into financial metrics is essential for investment decisions. Methods include Monte Carlo simulation, surrogate modeling and Bayesian updating as operational data arrive.</p>

<h3>Systems and Hybrid Research</h3>
<p>Research explores co-locating wave or tidal devices with offshore wind to share infrastructure and smooth combined output, powering offshore uses such as aquaculture and ocean observation, and integrating marine energy into island microgrids with storage. Each raises questions about optimal sizing, control and market design.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Load-relevant site characterization that captures turbulence and wave-current interaction.</li>
<li>Multi-fidelity methods for optimizing large array layouts and control strategies.</li>
<li>Long-term environmental monitoring at array scale, with shared open datasets.</li>
<li>Climate change projections of wave and current resources at candidate sites.</li>
<li>Techno-economic models of hybrid marine-wind platforms and island systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'roceanq1',
      question: {
        ELEMENTARY: 'What carries electricity from an ocean machine back to land?',
        MIDDLE_SCHOOL: 'Which ocean energy source uses the difference between warm surface water and cold deep water?',
        HIGH_SCHOOL: 'Which ocean energy technology is still mostly at the prototype stage?',
        UNDERGRADUATE: 'How does tidal stream power scale with current speed?',
        GRADUATE: 'What is adaptive management in marine energy consenting?',
        PHD: 'What limits the extractable power of a tidal channel at large scale?',
      },
      options: {
        ELEMENTARY: ['A cable on the seabed', 'A fishing net', 'A sailboat', 'A rainbow'],
        MIDDLE_SCHOOL: ['Ocean thermal energy', 'Tidal barrages', 'Wave buoys', 'Salinity gradient'],
        HIGH_SCHOOL: ['Wave energy', 'Tidal barrages', 'Offshore oil rigs', 'Coal power'],
        UNDERGRADUATE: ['With the cube of current speed', 'It does not depend on speed', 'Linearly with speed', 'Inversely with speed'],
        GRADUATE: ['Permitting with monitoring and conditions that can change as evidence builds', 'Refusing all permits until impacts are fully known', 'Letting developers decide impacts themselves', 'Fixing permit conditions forever'],
        PHD: ['How extraction changes the head driving the flow, not kinetic energy alone', 'Only the number of turbines available', 'The color of the water', 'Kinetic energy at the surface alone'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A strong cable on the seabed carries the electricity to shore.',
        MIDDLE_SCHOOL: 'Ocean thermal energy conversion uses warm surface water and cold deep water to run a heat engine.',
        HIGH_SCHOOL: 'Wave energy has many competing designs and is still mostly being tested as prototypes and pilots.',
        UNDERGRADUATE: 'Because power scales with speed cubed, small speed differences between sites make large energy differences.',
        GRADUATE: 'Adaptive management lets small projects proceed while monitoring informs later conditions.',
        PHD: 'Extracting energy changes the flow through the channel, so the limit depends on channel dynamics.',
      },
    },
    {
      id: 'roceanq2',
      question: {
        ELEMENTARY: 'What floating tool helps scientists measure waves?',
        MIDDLE_SCHOOL: 'What is a tidal barrage?',
        HIGH_SCHOOL: 'What is biofouling?',
        UNDERGRADUATE: 'What is a power matrix?',
        GRADUATE: 'Why is tidal power valuable to grid operators despite varying output?',
        PHD: 'Why do standard resource metrics sometimes fall short for device design?',
      },
      options: {
        ELEMENTARY: ['A kite', 'A buoy', 'A shovel', 'A balloon'],
        MIDDLE_SCHOOL: ['A floating wave buoy', 'A dam-like wall across an estuary that releases water through turbines', 'A fishing boat', 'An offshore wind turbine'],
        HIGH_SCHOOL: ['A kind of ocean fuel', 'Build-up of seaweed, barnacles and other organisms on underwater surfaces', 'A storm warning system', 'A cable connection method'],
        UNDERGRADUATE: ['A list of electricity prices', 'A table of a wave device\'s output for each wave height and period', 'A map of subsea cables', 'A schedule for maintenance'],
        GRADUATE: ['It never varies at all', 'Its timing is highly predictable years in advance', 'It only works at night', 'It needs no grid connection'],
        PHD: ['They are always too precise', 'They often average away load-relevant features like turbulence and directional spreading', 'They ignore wave height entirely', 'They are only used for wind'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Buoys float on the sea and carry tools that measure how big and frequent waves are.',
        MIDDLE_SCHOOL: 'A barrage traps water at high tide and lets it flow through turbines as the tide falls.',
        HIGH_SCHOOL: 'Marine organisms grow on submerged surfaces, adding weight and drag and making maintenance harder.',
        UNDERGRADUATE: 'Combining a power matrix with sea-state statistics gives annual energy production.',
        GRADUATE: 'Predictable output reduces forecasting error and the reserves needed to balance the grid.',
        PHD: 'Averages can hide turbulence and wave-current effects that drive fatigue and extreme loads.',
      },
    },
    {
      id: 'roceanq3',
      question: {
        ELEMENTARY: 'Why do ocean machines need to be very tough?',
        MIDDLE_SCHOOL: 'Why are islands interested in ocean energy?',
        HIGH_SCHOOL: 'What is the usual path for a new ocean device?',
        UNDERGRADUATE: 'What is a weather window?',
        GRADUATE: 'Why do regulators sometimes make small marine projects expensive to permit?',
        PHD: 'How do wave energy devices in an array interact?',
      },
      options: {
        ELEMENTARY: ['Because fish like to play with them', 'Because the sun is very hot', 'Because storms and salty water can damage them', 'Because they are very small'],
        MIDDLE_SCHOOL: ['Islands have no wind or sun', 'Ocean energy is free to build', 'They often import costly diesel and have waves and tides nearby', 'Islands cannot use electricity'],
        HIGH_SCHOOL: ['Straight to a large commercial array', 'Built on land and never tested at sea', 'Wave tank, then sheltered test site, then open-sea test center, then arrays', 'Tested only in computer games'],
        UNDERGRADUATE: ['A forecast of electricity prices', 'A window on a ship\'s bridge', 'A calm period when vessels can safely install or repair equipment', 'The time of the highest waves'],
        GRADUATE: ['Small projects always cause the biggest harm', 'Regulators dislike all renewable energy', 'Limited evidence can lead to precautionary requirements that are costly for small deployments', 'Permits are free for large projects only'],
        PHD: ['They never affect each other', 'They always reduce total output', 'Radiated and diffracted waves can raise or lower total output depending on layout', 'They only interact through electrical cables'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Big waves and salt water are hard on machines, so they must be strong and rust-resistant.',
        MIDDLE_SCHOOL: 'Island grids often burn imported diesel, so local waves and tides could save money and pollution.',
        HIGH_SCHOOL: 'Devices progress through stages of testing, surviving real storms before arrays are built.',
        UNDERGRADUATE: 'Offshore work needs calm seas, and limited weather windows raise installation and maintenance costs.',
        GRADUATE: 'Where few devices have been deployed, uncertainty can push regulators toward costly precaution.',
        PHD: 'Waves radiated and scattered by each device change the waves reaching its neighbors.',
      },
    },
    {
      id: 'roceanq4',
      question: {
        ELEMENTARY: 'What is special about tides?',
        MIDDLE_SCHOOL: 'What is the first step in building an ocean energy project?',
        HIGH_SCHOOL: 'What does capacity factor measure?',
        UNDERGRADUATE: 'Why do structures and moorings make ocean energy costly?',
        GRADUATE: 'What are "ring-fenced" auctions designed to do?',
        PHD: 'Why is it hard to estimate learning rates for marine energy?',
      },
      options: {
        ELEMENTARY: ['They only come once a year', 'They are made by fish', 'They stop when it rains', 'We know exactly when they will come'],
        MIDDLE_SCHOOL: ['Selling the electricity', 'Painting the device', 'Removing the fish', 'Measuring the waves, tides and currents'],
        HIGH_SCHOOL: ['The weight of a device', 'How many devices fit in an array', 'The maximum wave height', 'Actual energy produced compared with running at full power all the time'],
        UNDERGRADUATE: ['They are made of gold', 'They are only needed in calm seas', 'They are never inspected', 'They must survive extreme loads far above average conditions'],
        GRADUATE: ['Ban early-stage technologies', 'Make all technologies compete on price alone', 'Remove all public support', 'Reserve support for early-stage technologies so they are not outcompeted by mature ones'],
        PHD: ['Costs never change', 'There are too many projects to count', 'Learning rates only apply to solar', 'There have been too few deployments to estimate cost reductions confidently'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Tides follow the Moon and Sun, so we can predict them far ahead.',
        MIDDLE_SCHOOL: 'Developers measure the ocean resource for months or years before choosing a site.',
        HIGH_SCHOOL: 'Capacity factor compares real output with the theoretical maximum at full power.',
        UNDERGRADUATE: 'Designing for rare storms means structures are much stronger, and costlier, than average conditions require.',
        GRADUATE: 'Ring-fencing protects young technologies from competing directly with cheaper, mature ones.',
        PHD: 'Learning rates come from cumulative deployment, and marine energy has very little so far.',
      },
    },
    {
      id: 'roceanq5',
      question: {
        ELEMENTARY: 'Who should help decide where ocean machines go?',
        MIDDLE_SCHOOL: 'What is corrosion?',
        HIGH_SCHOOL: 'How can ocean energy projects lower costs by working with offshore wind?',
        UNDERGRADUATE: 'Why are acoustic current profilers used at tidal sites?',
        GRADUATE: 'Why can wave energy have extra system value in solar-heavy grids?',
        PHD: 'Why is uncertainty quantification important for marine energy yield estimates?',
      },
      options: {
        ELEMENTARY: ['Fishing families, local people and scientists', 'Only the machines', 'Nobody at all', 'Only the seagulls'],
        MIDDLE_SCHOOL: ['Damage to metal from chemical reactions, sped up by salt water', 'A kind of tide', 'A floating measuring tool', 'A type of underwater turbine'],
        HIGH_SCHOOL: ['By sharing cables and maintenance vessels', 'By removing all cables', 'By building on land instead', 'By using bigger storms'],
        UNDERGRADUATE: ['To measure water velocity through the water column', 'To scare fish away', 'To charge batteries', 'To measure air temperature'],
        GRADUATE: ['It often peaks in winter, complementing summer solar', 'It produces most power at noon in summer', 'It never varies', 'It needs no transmission'],
        PHD: ['Measurement, model error, variability and climate change all affect yield and finance', 'Yield estimates are always exact', 'Uncertainty only matters for solar', 'Investors ignore energy yield'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'People who live and work by the sea, along with scientists, help choose good places.',
        MIDDLE_SCHOOL: 'Salt water speeds up corrosion, so ocean devices need special materials and coatings.',
        HIGH_SCHOOL: 'Sharing export cables, ports and vessels spreads expensive infrastructure costs.',
        UNDERGRADUATE: 'Flow varies with depth and is turbulent, so profilers measure velocity at many depths.',
        GRADUATE: 'Seasonal complementarity means wave energy can fill gaps when solar output is low.',
        PHD: 'Propagating uncertainty into financial metrics helps investors and planners make sound decisions.',
      },
    },
  ],
}

export default expansion
