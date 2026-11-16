import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'ocean-energy',
  lessons: [
    {
      id: 're-ocean-1',
      title: 'Power from the Sea',
      content: {
        ELEMENTARY: `
<h2>The Ocean Is Full of Energy!</h2>
<p>Have you ever stood on a beach and felt a wave push against your legs? That push is energy! The ocean is always moving. Waves roll in, tides go up and down, and the water is warm on top and cold deep down. People have invented clever machines that turn all this movement into electricity.</p>

<h3>Waves: The Ocean's Bumps</h3>
<p>Waves are made mostly by the wind. When wind blows across the sea, it pushes the water into bumps that travel a long way. A wave machine can bob up and down like a floating toy, and that bobbing movement can be turned into electricity.</p>
<ul>
<li><strong>Wave:</strong> a moving bump of water made when the wind blows across the sea</li>
<li><strong>Buoy:</strong> a floating object that bobs up and down on top of the water</li>
<li><strong>Generator:</strong> a machine that turns movement into electricity</li>
</ul>

<h3>Tides: The Ocean Breathes In and Out</h3>
<p>Twice a day, the sea at many beaches creeps up the sand and then slides back down. This is called the tide. The Moon is a big helper here. Its pull makes the ocean water rise and fall. Underwater windmills, called tidal turbines, can spin when tide water rushes past.</p>
<ul>
<li><strong>Tide:</strong> the slow rising and falling of the sea, usually twice each day</li>
<li><strong>Tidal turbine:</strong> an underwater spinning machine pushed around by moving tide water</li>
<li><strong>Gravity:</strong> the invisible pull that the Moon and Earth have on everything</li>
</ul>

<h3>Warm Water on Top, Cold Water Below</h3>
<p>In sunny tropical places, the top of the sea is warm like bath water, but deep down it is very cold. Some special power plants use that difference between warm and cold to make electricity. It is like using the sea as a giant battery charged by the Sun.</p>

<h3>Why Is Ocean Energy Great?</h3>
<p>Tides are very easy to predict. We know when they will come for years ahead! Ocean energy also does not make smoke. But the ocean is rough and salty, so the machines must be very strong. Engineers also work hard to keep fish, seals and whales safe.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Next time you visit a beach, watch the waves and count how many come in a minute.</li>
<li>Look for a tide chart and see when high tide happens.</li>
<li>Keep beaches clean so ocean animals stay healthy.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>Harnessing Waves, Tides and Ocean Heat</h2>
<p>Oceans cover most of our planet, and they are always in motion. That motion carries a huge amount of energy. Ocean energy, also called marine energy, is the set of technologies that capture this energy and turn it into electricity. There are three main sources: waves, tides and the temperature difference between warm surface water and cold deep water.</p>

<h3>How Waves Get Their Energy</h3>
<p>Waves start when wind blows over the sea surface. The longer and stronger the wind blows, and the more open water it crosses, the bigger the waves become. Because the wind itself comes from the Sun heating Earth unevenly, wave energy is really a form of solar energy delivered by the sea. Wave energy converters are machines that float or sit on the seabed and move with the waves. Their motion drives a generator.</p>

<h3>How Tides Work</h3>
<p>Tides are caused mainly by the Moon's gravity, with help from the Sun. As Earth rotates, most coastlines pass through two high tides and two low tides roughly every day. Water flows in and out of bays and channels, creating strong tidal currents. There are two main ways to use them:</p>
<ol>
<li><strong>Tidal stream turbines:</strong> underwater turbines placed in fast currents, similar to wind turbines but in water.</li>
<li><strong>Tidal barrages and lagoons:</strong> walls that trap water at high tide and release it through turbines as the tide falls.</li>
</ol>

<h3>Ocean Thermal Energy</h3>
<p>In tropical oceans, surface water can be much warmer than water hundreds of meters below. Ocean thermal energy conversion (OTEC) uses warm water to boil a fluid with a low boiling point. The vapor spins a turbine, and cold deep water turns it back into liquid. It works best where the temperature difference is large, which is mostly near the equator.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Marine energy:</strong> electricity produced from waves, tides, currents or ocean heat</li>
<li><strong>Wave energy converter:</strong> a device that captures the up-and-down or back-and-forth motion of waves</li>
<li><strong>Tidal current:</strong> the horizontal flow of seawater as tides rise and fall</li>
<li><strong>Barrage:</strong> a dam-like wall built across an estuary to capture tidal energy</li>
<li><strong>OTEC:</strong> a way of making electricity from the temperature difference between warm and cold seawater</li>
<li><strong>Predictability:</strong> how accurately we can know in advance when energy will be available</li>
</ul>

<h3>Comparing the Three Sources</h3>
<table>
<thead><tr><th>Source</th><th>What drives it</th><th>Best places</th></tr></thead>
<tbody>
<tr><td>Waves</td><td>Wind blowing over the sea</td><td>Exposed coasts facing open oceans</td></tr>
<tr><td>Tides</td><td>Gravity of the Moon and Sun</td><td>Narrow channels and bays with big tides</td></tr>
<tr><td>Ocean thermal</td><td>Sunlight warming the surface</td><td>Tropical seas near the equator</td></tr>
</tbody>
</table>

<h3>Challenges</h3>
<p>The sea is a tough place for machines. Storms, salt water that causes rust, and sea life that grows on equipment all make ocean devices expensive to build and repair. Scientists also study how devices might affect fish, marine mammals and seabirds. Today ocean energy is much smaller than wind or solar, but its predictability makes it an exciting partner for them.</p>
`,
        HIGH_SCHOOL: `
<h2>Wave, Tidal and Ocean Thermal Energy Technologies</h2>
<p>The ocean stores and transports energy in several forms: the motion of waves, the flow of tides and currents, and heat stored in sunlit surface water. Each form requires a different technology, sits at a different stage of maturity and suits different coastlines. This lesson explores how these technologies work and why ocean energy, despite its large potential, still supplies only a tiny share of the world's electricity.</p>

<h3>Wave Energy Converters</h3>
<p>Wave energy is concentrated wind energy. Waves can travel thousands of kilometers with little loss, so coastlines facing large oceans, especially at mid to high latitudes, receive the most. Engineers have tested many designs because no single design has yet become standard:</p>
<ul>
<li><strong>Point absorber:</strong> a floating buoy that moves up and down relative to a fixed or slower-moving base</li>
<li><strong>Oscillating water column:</strong> a partly submerged chamber where rising and falling water pushes air through a turbine</li>
<li><strong>Attenuator:</strong> a long, jointed floating structure that flexes as waves pass along its length</li>
<li><strong>Overtopping device:</strong> a structure that lets waves spill into a raised reservoir, then drains the water back through low-head turbines</li>
<li><strong>Oscillating surge converter:</strong> a hinged flap near the seabed that rocks back and forth with wave surge</li>
</ul>
<p>Many devices use a power take-off system, such as hydraulics or a direct-drive generator, to convert slow, irregular motion into steady electricity.</p>

<h3>Tidal Energy</h3>
<p>Tides are driven by gravity and are predictable years in advance. Tidal range systems, such as barrages, use the height difference between high and low water. Tidal stream systems use the speed of the current. Because water is far denser than air, a tidal turbine can be much smaller than a wind turbine of similar power. Only a handful of locations worldwide have very strong tidal currents or very large tidal ranges, which limits where tidal energy can be built.</p>

<h3>Ocean Thermal Energy Conversion</h3>
<p>OTEC exploits the temperature difference between warm surface water and cold water from roughly a kilometer deep. A useful difference is around twenty degrees Celsius, found mainly in the tropics. Because the temperature difference is small, efficiency is low and large volumes of water must be pumped. OTEC can also supply cold water for air conditioning and, in some designs, fresh water.</p>

<h3>Comparing Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Maturity</th><th>Strength</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Tidal barrage</td><td>Commercial, few sites</td><td>Highly predictable, long life</td><td>Large ecological change to estuaries</td></tr>
<tr><td>Tidal stream</td><td>Early commercial</td><td>Predictable, compact turbines</td><td>Limited sites, harsh installation</td></tr>
<tr><td>Wave energy</td><td>Demonstration</td><td>Large global resource</td><td>Storm survival, no standard design</td></tr>
<tr><td>OTEC</td><td>Pilot plants</td><td>Steady, round-the-clock output</td><td>Low efficiency, high capital cost</td></tr>
</tbody>
</table>

<h3>Trade-offs and Solutions</h3>
<p>Ocean devices face corrosion, biofouling (marine growth on surfaces), extreme storm loads and costly maintenance at sea. Environmental questions include collision risk for marine animals, underwater noise during construction and changes to sediment movement. Developers respond with stronger materials, devices that can be towed to port for repair, careful monitoring and siting away from sensitive habitats. Ocean energy is especially promising for islands and remote coastal communities that currently rely on imported diesel.</p>
`,
        UNDERGRADUATE: `
<h2>Ocean Energy: Resources, Conversion and Deployment</h2>
<p>Ocean energy resources are large in aggregate but diffuse, variable in different ways and located in demanding environments. Analyzing them requires understanding how resource physics sets the available power, how conversion devices capture a fraction of it, and why costs remain high relative to offshore wind and solar. This lesson develops these ideas and applies them to project screening.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Wave power flux:</strong> the energy carried per meter of wave crest, which scales with the square of wave height and linearly with wave period</li>
<li><strong>Significant wave height:</strong> a statistical measure roughly equal to the average height of the highest third of waves</li>
<li><strong>Capture width ratio:</strong> the fraction of incident wave power across a device's width that it actually absorbs</li>
<li><strong>Tidal range:</strong> the vertical difference between high and low water, which sets the potential energy available to barrages</li>
<li><strong>Capacity factor:</strong> average output divided by maximum possible output over a period</li>
<li><strong>Levelized cost of energy:</strong> the lifetime cost of a project divided by its lifetime energy output</li>
</ul>

<h3>Resource Physics</h3>
<p>Because wave power scales with height squared, a doubling of wave height quadruples available power, and storm waves carry many times the energy of typical conditions. This creates a design tension: devices must be tuned to capture common moderate seas efficiently while surviving rare extremes. Tidal stream power, like wind, scales with the cube of current speed, so a modest increase in flow speed yields a large gain in power. This concentrates economic tidal stream sites in a few constricted channels. Tidal range energy scales with the square of the range and with the basin area.</p>
<p>OTEC is bounded by thermodynamics: with only around twenty degrees of temperature difference, the theoretical Carnot efficiency is a few percent, and practical net efficiency is lower after pumping losses. The resource is steady, but the plant must move enormous volumes of water.</p>

<h3>Variability Compared</h3>
<table>
<thead><tr><th>Resource</th><th>Variability type</th><th>Forecast horizon</th></tr></thead>
<tbody>
<tr><td>Tidal</td><td>Periodic, follows lunar cycles and spring-neap variation</td><td>Years, with high accuracy</td></tr>
<tr><td>Wave</td><td>Stochastic but smoother than wind, lagging distant storms</td><td>Days, with good skill</td></tr>
<tr><td>OTEC</td><td>Nearly constant, slight seasonal changes</td><td>Effectively baseload</td></tr>
</tbody>
</table>
<p>This variability profile is a key value argument. Tidal output is predictable, and wave output is often less correlated with solar, so ocean energy can diversify a renewable portfolio and reduce balancing needs.</p>

<h3>Deployment Challenges</h3>
<p>Cost drivers include structural mass needed for survivability, marine operations requiring specialized vessels and calm weather windows, subsea cables and grid connection, and consenting processes. Wave energy has not converged on a dominant design, which prevents the economies of scale and learning that drove down wind and solar costs. Tidal stream is closer to convergence around horizontal-axis turbines.</p>

<h3>Applied Method: Screening a Site</h3>
<ol>
<li>Characterize the resource with multi-year wave or current data, including extremes.</li>
<li>Match device type to the resource, considering water depth and seabed conditions.</li>
<li>Estimate annual energy from the device power matrix or power curve and resource statistics.</li>
<li>Assess grid distance, port access and available installation vessels.</li>
<li>Identify environmental and user conflicts such as fishing, shipping and protected habitats.</li>
<li>Estimate levelized cost and compare with local alternatives, especially diesel on islands.</li>
</ol>
`,
        GRADUATE: `
<h2>Marine Spatial Planning, Environmental Effects and Technology Readiness</h2>
<p>For ocean energy to move from demonstration to deployment at scale, technical progress must be matched by planning, consenting and investment frameworks. The sea is a shared space with established users, sensitive ecosystems and complex jurisdiction. This lesson examines how marine spatial planning allocates space, how environmental uncertainty is managed, and how technology readiness shapes policy support.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Marine spatial planning:</strong> a public process that allocates ocean space among uses such as fishing, shipping, conservation and energy</li>
<li><strong>Technology readiness level:</strong> a scale describing maturity from basic principles through prototypes to proven commercial operation</li>
<li><strong>Adaptive management:</strong> deploying in stages with monitoring and agreed responses if impacts exceed thresholds</li>
<li><strong>Survey, deploy and monitor:</strong> a consenting approach that allows small deployments while data are gathered on uncertain effects</li>
<li><strong>Cumulative effects:</strong> the combined impact of many projects and activities on the same ecosystem</li>
<li><strong>Revenue support:</strong> policy mechanisms, such as guaranteed prices, that give early technologies a stable income</li>
</ul>

<h3>Allocating Ocean Space</h3>
<p>Ocean energy sites overlap with fisheries, navigation routes, cables, defense zones and cultural areas. Marine spatial planning brings these interests together, often using spatial data layers to identify zones of lower conflict. Good practice includes early engagement with fishers and coastal communities, recognition of Indigenous rights and knowledge of the sea, and transparent criteria. Poorly planned zones can stall projects for years in disputes.</p>

<h3>Environmental Effects and Uncertainty</h3>
<table>
<thead><tr><th>Stressor</th><th>Receptor</th><th>Current understanding</th></tr></thead>
<tbody>
<tr><td>Moving turbine blades</td><td>Marine mammals, fish, diving birds</td><td>Collision appears rare at small scale; uncertain for large arrays</td></tr>
<tr><td>Underwater noise</td><td>Marine mammals, fish</td><td>Construction noise is the main concern; operational noise generally lower</td></tr>
<tr><td>Energy removal</td><td>Sediment transport, mixing</td><td>Negligible for small projects; potentially significant at large scale</td></tr>
<tr><td>Electromagnetic fields from cables</td><td>Sharks, rays, some fish</td><td>Localized effects; research ongoing</td></tr>
<tr><td>Barrage impoundment</td><td>Estuarine habitats, migratory fish</td><td>Well documented and potentially large</td></tr>
</tbody>
</table>
<p>The central governance challenge is that the main uncertainties concern large arrays that do not yet exist. Requiring certainty before consenting creates a catch-22. Staged, adaptive approaches allow learning while limiting risk.</p>

<h3>Technology Readiness and Policy Design</h3>
<p>Most wave technologies sit at mid readiness levels, while tidal stream has reached early commercial arrays. Policy instruments must match maturity: grant funding and test centers for early stages, revenue support and ring-fenced auctions for pre-commercial arrays, and competitive procurement only once costs have fallen. Exposing immature technologies directly to competition with mature offshore wind usually means they never win contracts and never learn.</p>

<h3>Economics and Value</h3>
<p>Levelized cost comparisons understate system value. Predictable tidal output and wave output that is less correlated with solar can lower balancing costs. For islands, the relevant benchmark is often expensive imported diesel, not mainland wholesale prices, and energy security has value beyond cost per unit.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Locate projects through marine spatial planning with early stakeholder and rights-holder engagement.</li>
<li>Match policy support to technology readiness and set clear progression milestones.</li>
<li>Use staged consenting with monitoring, thresholds and agreed responses.</li>
<li>Value system benefits such as predictability and portfolio diversity.</li>
<li>Share data from demonstrations to reduce uncertainty for the whole sector.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Hydrodynamics, Arrays and Survivability</h2>
<p>Ocean energy research spans fluid mechanics, control theory, structural reliability and ecology. Its central technical problem is extracting energy efficiently from an irregular, multidirectional and occasionally extreme resource with devices that remain affordable. This lesson surveys modeling methods, array interactions, control strategies, survivability engineering and contested questions shaping the field.</p>

<h3>Hydrodynamic Modeling Methods</h3>
<ul>
<li><strong>Linear potential flow:</strong> frequency-domain models assuming small motions and inviscid flow, computationally cheap and widely used for early design</li>
<li><strong>Boundary element method:</strong> numerical technique that computes added mass, radiation damping and excitation forces on a body surface</li>
<li><strong>Cummins equation:</strong> time-domain formulation that includes memory effects of radiated waves, enabling nonlinear control and power take-off modeling</li>
<li><strong>Computational fluid dynamics:</strong> solving the full fluid equations to capture viscous effects, wave breaking and slamming at high computational cost</li>
<li><strong>Spectral wave models:</strong> phase-averaged models representing sea states by energy spectra across frequency and direction</li>
<li><strong>Blade element momentum theory:</strong> a standard method for estimating tidal turbine rotor loads and performance</li>
</ul>
<p>A recurring methodological issue is validity range. Linear models perform well in moderate seas but break down for large motions that controlled devices are designed to achieve, which is precisely where power capture is greatest. Mid-fidelity approaches that add nonlinear Froude-Krylov forces or viscous drag terms try to bridge the gap.</p>

<h3>Control and Resonance</h3>
<p>A wave energy converter absorbs most power near resonance, yet real seas are broadband. Control strategies such as reactive control and latching attempt to widen the effective bandwidth by adjusting power take-off forces in real time. Optimal control requires short-term wave prediction and must respect motion and force constraints. Model predictive control is an active research area, with debates over robustness to model error and the energy cost of reactive power flow.</p>

<h3>Array Interactions</h3>
<p>In an array, each device radiates and scatters waves that alter the field seen by its neighbors. Interactions can be constructive or destructive depending on spacing, wave direction and frequency, quantified by an interaction factor. For tidal arrays, wake recovery and blockage effects govern layout, and in constrained channels the extractable resource is limited by the back effect of turbines on the flow itself. Upscaling from single devices to arrays is therefore not linear.</p>

<h3>Survivability Engineering</h3>
<table>
<thead><tr><th>Approach</th><th>Principle</th><th>Open questions</th></tr></thead>
<tbody>
<tr><td>Submergence or detuning</td><td>Reduce exposure during storms</td><td>Reliability of the transition itself</td></tr>
<tr><td>Compliant mooring</td><td>Allow motion to limit peak loads</td><td>Fatigue and snap loads in synthetic lines</td></tr>
<tr><td>Extreme value analysis</td><td>Estimate design loads from limited data</td><td>Tail uncertainty and joint wave-current extremes</td></tr>
<tr><td>Reliability-based design</td><td>Optimize for target failure probability</td><td>Sparse component failure data</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Researchers debate whether wave energy should converge on a dominant design or retain diversity for different resource types; how to define meaningful performance metrics beyond levelized cost; and how to scale environmental conclusions from single devices to commercial arrays. Methodologically, there is tension between tank tests at reduced scale, which suffer from scaling distortions in viscous and power take-off behavior, and open-sea tests, which are realistic but expensive and hard to control.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Coupled hydrodynamic, control and power take-off co-design rather than sequential optimization.</li>
<li>Validated mid-fidelity models for large-motion and extreme-load regimes.</li>
<li>Array layout optimization under directional, broadband seas and channel blockage.</li>
<li>Probabilistic survivability methods with better treatment of tail uncertainty.</li>
<li>Ecological models that scale individual animal encounter data to population effects.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'roq1',
      question: {
        ELEMENTARY: 'What makes most waves in the ocean?',
        MIDDLE_SCHOOL: 'What mainly causes tides?',
        HIGH_SCHOOL: 'How does an oscillating water column produce electricity?',
        UNDERGRADUATE: 'How does wave power flux scale with wave height?',
        GRADUATE: 'What is marine spatial planning?',
        PHD: 'What is a key limitation of linear potential flow models for wave energy converters?',
      },
      options: {
        ELEMENTARY: ['Wind blowing on the water', 'Fish swimming fast', 'Boats honking', 'Rocks falling into the sea'],
        MIDDLE_SCHOOL: ['The gravity of the Moon and Sun', 'Wind over the sea', 'Earthquakes', 'Rain falling on the ocean'],
        HIGH_SCHOOL: ['Rising and falling water pushes air through a turbine', 'Salt is burned to make steam', 'Sunlight hits a panel on the chamber', 'Fish push a paddle wheel'],
        UNDERGRADUATE: ['With the square of wave height', 'It does not depend on wave height', 'With the square root of wave height', 'Only with water temperature'],
        GRADUATE: ['A public process allocating ocean space among uses like fishing, shipping, conservation and energy', 'A shipping timetable', 'A method for drawing nautical charts', 'A plan for building ports only'],
        PHD: ['They assume small motions and break down for the large motions where power capture is greatest', 'They cannot represent any waves', 'They require full viscous simulation', 'They only work for tidal turbines'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Wind blowing across the sea pushes the water into waves.',
        MIDDLE_SCHOOL: 'Tides are caused mainly by the Moon\'s gravity, with help from the Sun.',
        HIGH_SCHOOL: 'In an oscillating water column, the moving water level acts like a piston, pushing air through a turbine.',
        UNDERGRADUATE: 'Wave power scales with height squared, so doubling height roughly quadruples power.',
        GRADUATE: 'Marine spatial planning brings ocean users together to allocate space and reduce conflicts.',
        PHD: 'Linear models assume small motions, yet controlled devices aim for large motions where nonlinear effects matter.',
      },
    },
    {
      id: 'roq2',
      question: {
        ELEMENTARY: 'What is a tidal turbine?',
        MIDDLE_SCHOOL: 'What is a tidal barrage?',
        HIGH_SCHOOL: 'Why can a tidal turbine be smaller than a wind turbine of similar power?',
        UNDERGRADUATE: 'How does tidal stream power scale with current speed?',
        GRADUATE: 'Why is adaptive management useful for consenting ocean energy?',
        PHD: 'What do control strategies such as reactive control and latching try to achieve?',
      },
      options: {
        ELEMENTARY: ['A windmill on a hill', 'An underwater spinning machine pushed by moving tide water', 'A boat with sails', 'A floating beach ball'],
        MIDDLE_SCHOOL: ['A floating buoy', 'A type of fishing net', 'A wall across an estuary that traps tide water and releases it through turbines', 'A deep cold-water pipe'],
        HIGH_SCHOOL: ['Water is much denser than air', 'Tides are always slower than wind', 'Tidal turbines have no blades', 'Salt water is lighter than air'],
        UNDERGRADUATE: ['Linearly', 'With the cube of speed', 'It does not depend on speed', 'Inversely'],
        GRADUATE: ['It removes the need for any monitoring', 'It allows staged deployment with monitoring and agreed responses while uncertainties are resolved', 'It guarantees projects have no impacts', 'It avoids engaging communities'],
        PHD: ['Widen the effective bandwidth so devices absorb more power in broadband seas', 'Stop the device from moving at all times', 'Increase structural mass', 'Reduce the need for wave prediction to zero'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A tidal turbine sits underwater and spins when tide water rushes past it.',
        MIDDLE_SCHOOL: 'A barrage holds back water at high tide and lets it flow out through turbines as the tide falls.',
        HIGH_SCHOOL: 'Because water is so much denser than air, moving water carries much more energy through a smaller area.',
        UNDERGRADUATE: 'Like wind, tidal stream power scales with the cube of speed, concentrating good sites in fast channels.',
        GRADUATE: 'Adaptive management lets learning happen at small scale instead of demanding certainty about arrays that do not exist yet.',
        PHD: 'Devices absorb most near resonance; control adjusts power take-off forces to perform well across many wave frequencies.',
      },
    },
    {
      id: 'roq3',
      question: {
        ELEMENTARY: 'Which helper pulls on the ocean to make tides?',
        MIDDLE_SCHOOL: 'Where does ocean thermal energy conversion work best?',
        HIGH_SCHOOL: 'Which ocean energy technology is still mostly at the demonstration stage?',
        UNDERGRADUATE: 'Why is OTEC efficiency low?',
        GRADUATE: 'Why can exposing immature ocean technologies to competition with offshore wind be a problem?',
        PHD: 'What is array interaction in wave energy?',
      },
      options: {
        ELEMENTARY: ['A rainbow', 'The clouds', 'The Moon', 'A lighthouse'],
        MIDDLE_SCHOOL: ['Near the North Pole', 'In freshwater lakes', 'In tropical seas with a big difference between warm and cold water', 'In shallow ponds'],
        HIGH_SCHOOL: ['Tidal barrages', 'Coal power', 'Wave energy converters', 'Onshore wind'],
        UNDERGRADUATE: ['The temperature difference is only around twenty degrees, so thermodynamic efficiency is a few percent', 'Seawater is too salty to boil', 'It only runs at night', 'Tropical water is too cold'],
        GRADUATE: ['They usually lose contracts and never reach the scale needed to learn and cut costs', 'They always win auctions', 'Offshore wind cannot compete', 'Competition makes them too cheap'],
        PHD: ['Devices radiating and scattering waves that change the energy available to neighboring devices', 'Fish schooling around devices', 'Ship traffic patterns', 'Seasonal temperature change'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The Moon\'s pull makes the ocean rise and fall in tides.',
        MIDDLE_SCHOOL: 'OTEC needs a large difference between warm surface water and cold deep water, found in the tropics.',
        HIGH_SCHOOL: 'Wave energy has many designs being tested but no standard design at commercial scale yet.',
        UNDERGRADUATE: 'With a small temperature difference, the Carnot limit is low, and pumping losses reduce net output further.',
        GRADUATE: 'Policy should match technology readiness; immature options need support before facing mature competitors.',
        PHD: 'Interaction can be constructive or destructive depending on spacing, direction and frequency.',
      },
    },
    {
      id: 'roq4',
      question: {
        ELEMENTARY: 'Why is tide energy easy to plan for?',
        MIDDLE_SCHOOL: 'What is biofouling or rust on ocean machines an example of?',
        HIGH_SCHOOL: 'What is biofouling?',
        UNDERGRADUATE: 'What makes tidal energy valuable in a renewable portfolio?',
        GRADUATE: 'Which environmental effect is well documented and potentially large for tidal barrages?',
        PHD: 'Why are reduced-scale tank tests of wave devices methodologically limited?',
      },
      options: {
        ELEMENTARY: ['Tides only come once a year', 'We can know when tides will come for years ahead', 'Tides happen at random', 'Tides only happen in rivers'],
        MIDDLE_SCHOOL: ['Challenges of working in the sea', 'Benefits of the ocean', 'Ways to make waves bigger', 'Types of ocean heat'],
        HIGH_SCHOOL: ['Electricity flowing through cables', 'Marine growth building up on device surfaces', 'Fish eating plastic', 'Waves breaking on a beach'],
        UNDERGRADUATE: ['It is predictable years in advance', 'It never varies at all', 'It produces most power at noon', 'It is cheaper than all other sources'],
        GRADUATE: ['Changes to estuarine habitats and migratory fish', 'Light pollution', 'Air emissions', 'Soil erosion inland'],
        PHD: ['Viscous and power take-off behavior do not scale cleanly, causing scaling distortions', 'Tanks cannot make waves', 'Results are always identical to the open sea', 'They are more expensive than open-sea tests'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Tides follow the Moon, so we can predict them far ahead.',
        MIDDLE_SCHOOL: 'Rust, storms and marine growth make ocean machines hard and expensive to maintain.',
        HIGH_SCHOOL: 'Biofouling is the growth of marine organisms on submerged surfaces, which adds weight and drag.',
        UNDERGRADUATE: 'Tidal output follows lunar cycles and can be forecast accurately years ahead, reducing balancing needs.',
        GRADUATE: 'Barrages impound estuaries, changing habitats and affecting migratory fish.',
        PHD: 'Small-scale tests distort viscous effects and power take-off behavior, so results may not transfer to full scale.',
      },
    },
    {
      id: 'roq5',
      question: {
        ELEMENTARY: 'What can you do to help ocean animals?',
        MIDDLE_SCHOOL: 'Why is ocean energy exciting even though it is small today?',
        HIGH_SCHOOL: 'Which communities could benefit most from ocean energy?',
        UNDERGRADUATE: 'Why has wave energy not achieved the cost reductions seen in wind and solar?',
        GRADUATE: 'What is often the right cost benchmark for ocean energy on islands?',
        PHD: 'Why is upscaling from single tidal turbines to arrays not linear?',
      },
      options: {
        ELEMENTARY: ['Leave trash on the sand', 'Throw rocks at waves', 'Feed seagulls chips', 'Keep beaches clean'],
        MIDDLE_SCHOOL: ['It makes a lot of smoke', 'It only works on land', 'It is unpredictable', 'Its predictability makes it a good partner for wind and solar'],
        HIGH_SCHOOL: ['Inland desert cities', 'Mountain villages far from the sea', 'Big cities with cheap coal', 'Islands and remote coasts that rely on imported diesel'],
        UNDERGRADUATE: ['The resource is too small', 'Waves never carry energy', 'Tides interfere with waves', 'No dominant design has emerged, preventing economies of scale and learning'],
        GRADUATE: ['Mainland wholesale prices', 'Rooftop solar costs on the mainland', 'The price of fishing licenses', 'Expensive imported diesel generation'],
        PHD: ['Turbines do not interact', 'Arrays always produce exactly the sum of single devices', 'Turbines only work alone', 'Wakes, blockage and the turbines\' effect on the flow itself limit extractable energy'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Keeping beaches clean helps fish, seals, birds and whales stay healthy.',
        MIDDLE_SCHOOL: 'Ocean energy, especially tides, is predictable, which helps balance wind and solar power.',
        HIGH_SCHOOL: 'Islands and remote coasts often pay a lot for diesel, so local ocean energy can be valuable.',
        UNDERGRADUATE: 'Without design convergence, wave energy cannot benefit from mass production and learning-by-doing.',
        GRADUATE: 'On islands, ocean energy competes with costly diesel, not mainland wholesale electricity.',
        PHD: 'In channels, turbines alter the flow, so the extractable resource depends on wake and blockage effects.',
      },
    },
  ],
}

export default expansion
