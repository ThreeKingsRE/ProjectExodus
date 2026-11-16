import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'desalination~2',
  lessons: [
    {
      id: 'ws-desal-1',
      title: 'Fresh from Salt: Inside the Machines',
      content: {
        ELEMENTARY: `
<h2>The Amazing Salt-Removing Machines</h2>
<p>Imagine a giant machine by the beach that drinks up ocean water and gives back fresh water you can drink. That is real! These machines are called desalination plants. Engineers build them for towns near the sea that do not have enough rivers or rain. Let's peek inside and see how they work.</p>

<h3>Why Can't We Drink Sea Water?</h3>
<p>Sea water has lots of salt mixed into it. You cannot see the salt because it is dissolved, just like sugar disappears in lemonade. If you drink salty sea water, your body has to work hard to get rid of the salt, and you end up even more thirsty. So the salt has to come out first.</p>

<h3>The Super Tiny Sieve</h3>
<p>Most new plants use a very special kind of sieve called a <em>membrane</em>. It looks like a thin sheet of plastic, but it has holes so tiny that water can squeeze through while the salt stays behind. Big pumps push the sea water hard against the membrane, like squeezing water through a sponge. Fresh water comes out the other side!</p>
<ul>
<li><strong>Desalination:</strong> taking the salt out of sea water so people can drink it</li>
<li><strong>Membrane:</strong> a very thin sheet with tiny holes that lets water pass but stops salt</li>
<li><strong>Pump:</strong> a strong machine that pushes water through pipes and membranes</li>
<li><strong>Engineer:</strong> a person who designs and builds machines to solve problems</li>
<li><strong>Brine:</strong> the extra-salty water that is left over after fresh water is made</li>
</ul>

<h3>Cleaning Before Squeezing</h3>
<p>Ocean water also has sand, seaweed and tiny sea creatures in it. Those would clog the tiny holes in the membrane. So first the water goes through screens and filters, a bit like how you rinse sand off your feet before going inside.</p>

<h3>Machines Need Energy</h3>
<p>Pushing water through a membrane takes a lot of energy, so desalination uses lots of electricity. Clever engineers have found ways to reuse some of that push, and some plants use power from the sun or wind. Still, making fresh water from the sea costs more than using rain or river water.</p>

<h3>How You Can Help</h3>
<ol>
<li>Use water carefully, so towns need less from big machines.</li>
<li>Turn off the tap while you brush your teeth.</li>
<li>Draw your own design for a water machine and explain how it would work.</li>
</ol>

<h3>Think About It</h3>
<p>If you were an engineer, how would you make a salt-removing machine that uses less energy? Lots of scientists are working on that very question right now!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How a Desalination Plant Works, Step by Step</h2>
<p>Desalination is the process of removing dissolved salts from seawater or salty groundwater so it can be used for drinking, farming or industry. Today, the most common technology is <em>reverse osmosis</em>, which uses pressure and special membranes. In this lesson you will follow the water through the main parts of a reverse osmosis plant and learn why each part is needed.</p>

<h3>First, What Is Osmosis?</h3>
<p>Osmosis is a natural process. When fresh water and salty water are separated by a membrane that lets only water through, water naturally moves toward the saltier side. This is how plant roots take in water. <em>Reverse</em> osmosis does the opposite: a pump pushes so hard on the salty side that water is forced through the membrane, leaving the salt behind.</p>

<h3>The Journey Through the Plant</h3>
<ol>
<li><strong>Intake:</strong> pipes draw seawater from the ocean, with screens to keep fish and debris out.</li>
<li><strong>Pretreatment:</strong> filters remove sand, algae and tiny particles that could clog the membranes.</li>
<li><strong>High-pressure pumps:</strong> powerful pumps raise the water pressure far above normal tap pressure.</li>
<li><strong>Membranes:</strong> rolled-up membrane sheets inside long tubes let fresh water through and hold back salt.</li>
<li><strong>Post-treatment:</strong> a few minerals are added back so the water tastes good and does not corrode pipes, and it is disinfected.</li>
<li><strong>Brine discharge:</strong> the leftover salty water is carefully returned to the sea.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Osmosis:</strong> the natural movement of water through a membrane toward the saltier side</li>
<li><strong>Reverse osmosis:</strong> using pressure to push water through a membrane away from the salt</li>
<li><strong>Pretreatment:</strong> cleaning seawater before it reaches the membranes so they do not clog</li>
<li><strong>Fouling:</strong> a buildup of dirt, minerals or living things that clogs a membrane</li>
<li><strong>Energy recovery device:</strong> a machine that reuses the pressure left in the brine to save energy</li>
<li><strong>Brackish water:</strong> water that is saltier than fresh water but less salty than the sea</li>
</ul>

<h3>Comparing Desalination Methods</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Where it is common</th></tr></thead>
<tbody>
<tr><td>Reverse osmosis</td><td>Pushes water through membranes using pressure</td><td>Most new plants around the world</td></tr>
<tr><td>Thermal distillation</td><td>Boils water and collects the steam</td><td>Older plants, often where fuel is cheap</td></tr>
<tr><td>Electrodialysis</td><td>Uses electricity to pull salt particles out of water</td><td>Slightly salty (brackish) water</td></tr>
</tbody>
</table>

<h3>The Energy Challenge</h3>
<p>Squeezing water through a membrane takes a lot of energy. Engineers found a smart trick: the leftover brine leaves the membranes still under high pressure. An <em>energy recovery device</em> passes that pressure back to incoming seawater, like passing a push from one swing to another. This simple idea has cut the energy use of modern plants a great deal compared with older ones.</p>

<h3>Why It Matters</h3>
<p>Desalination gives dry coastal places a water source that does not depend on rain. But it uses more energy and money than most other sources, and the brine must be handled carefully to protect sea life. That is why saving water usually comes first, and desalination is often used alongside other sources.</p>
`,
        HIGH_SCHOOL: `
<h2>Desalination Technologies: Pressure, Heat and Energy</h2>
<p>Desalination turns seawater or brackish groundwater into fresh water. It is technically mature and used in many dry coastal regions, from the Middle East to Australia to parts of the Americas. Yet it remains one of the most energy-hungry ways to supply water. Understanding the main technologies, why they need energy and how engineers reduce that need helps explain both the promise and the limits of desalination.</p>

<h3>The Physics: Osmotic Pressure</h3>
<p>Seawater contains roughly 35 grams of dissolved salt per liter. Because of this, it has an <em>osmotic pressure</em> of roughly 25 bar, meaning water would naturally flow into seawater from fresh water with that much force. To push water the other way, a reverse osmosis plant must apply more than that pressure. In practice, seawater plants operate at roughly 55 to 70 bar, because as fresh water is removed, the remaining water gets saltier and its osmotic pressure rises. Brackish water has far less salt, so it can be treated at much lower pressure and lower cost.</p>

<h3>Main Technologies</h3>
<ul>
<li><strong>Reverse osmosis (RO):</strong> high-pressure pumps force water through semi-permeable membranes that reject most dissolved salts</li>
<li><strong>Multi-stage flash (MSF):</strong> heated seawater flashes into steam in a series of chambers at progressively lower pressure</li>
<li><strong>Multi-effect distillation (MED):</strong> steam from one chamber heats the next, reusing heat several times</li>
<li><strong>Electrodialysis:</strong> an electric field pulls charged salt ions through ion-exchange membranes, suited to brackish water</li>
<li><strong>Recovery ratio:</strong> the fraction of feed water that becomes fresh product water, the rest leaving as brine</li>
</ul>

<h3>Comparing Processes</h3>
<table>
<thead><tr><th>Technology</th><th>Energy type</th><th>Relative energy use</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Seawater RO</td><td>Electricity</td><td>Moderate, lowest for seawater</td><td>Most new municipal plants</td></tr>
<tr><td>Brackish RO</td><td>Electricity</td><td>Low</td><td>Inland salty aquifers</td></tr>
<tr><td>MSF and MED</td><td>Heat plus some electricity</td><td>High</td><td>Often paired with power plants</td></tr>
<tr><td>Electrodialysis</td><td>Electricity</td><td>Rises with salinity</td><td>Low-salinity brackish water</td></tr>
</tbody>
</table>

<h3>Cutting the Energy Bill</h3>
<p>Seawater RO energy use has fallen dramatically over recent decades, mainly due to three advances: better membranes that let more water through at a given pressure, efficient high-pressure pumps, and <em>energy recovery devices</em>. A pressure exchanger, for example, transfers the high pressure of the outgoing brine directly to the incoming seawater, recovering most of that energy. Even so, desalinated seawater generally needs several times more energy per liter than conventional treatment of river or lake water.</p>

<h3>Environmental Trade-Offs</h3>
<ol>
<li><strong>Brine:</strong> concentrated salt water, often around twice as salty as seawater, can harm seafloor life if not diluted with diffusers.</li>
<li><strong>Intakes:</strong> open-ocean intakes can trap fish and plankton; subsurface intakes and fine screens reduce this.</li>
<li><strong>Energy emissions:</strong> if powered by fossil fuels, desalination adds greenhouse gases; renewable power reduces this.</li>
<li><strong>Chemicals:</strong> pretreatment and cleaning chemicals must be managed so they do not reach the sea untreated.</li>
</ol>

<h3>Real-World Applications</h3>
<p>Cities often treat desalination as drought insurance: a reliable supply that runs harder in dry years. Many pair it with conservation, water recycling and renewable electricity purchases. Small solar-powered units also serve islands and remote communities. The key lesson is that desalination works best as one part of a diverse water portfolio, not a replacement for using water wisely.</p>
`,
        UNDERGRADUATE: `
<h2>Engineering Analysis of Reverse Osmosis and Thermal Desalination</h2>
<p>This lesson treats desalination as an engineering system to be analyzed quantitatively. We examine the thermodynamics that set a floor on energy use, the design variables of reverse osmosis trains, the role of thermal processes, and how capital, energy and operating costs combine into the cost of desalinated water. The goal is to be able to reason about why plants are designed as they are and where improvements remain possible.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Minimum energy of separation:</strong> the thermodynamic lower bound on the work needed to separate fresh water from salt water, which rises with recovery and salinity</li>
<li><strong>Specific energy consumption:</strong> the energy used per cubic meter of product water, usually expressed in kilowatt-hours per cubic meter</li>
<li><strong>Concentration polarization:</strong> the buildup of salt in a thin layer next to the membrane surface, which raises local osmotic pressure</li>
<li><strong>Salt rejection:</strong> the percentage of dissolved salt held back by the membrane, typically above 99 percent for seawater elements</li>
<li><strong>Levelized cost of water:</strong> the total lifetime cost of a plant divided by the total water it produces, expressed per cubic meter</li>
<li><strong>Gain output ratio:</strong> for thermal plants, the mass of distilled water produced per mass of heating steam used</li>
</ul>

<h3>Thermodynamic Limits</h3>
<p>For typical seawater at around 50 percent recovery, the theoretical minimum separation energy is on the order of 1 kilowatt-hour per cubic meter. Well-designed modern seawater RO plants typically use roughly 3 to 4 kilowatt-hours per cubic meter for the RO step, within a few multiples of the floor. The gap comes from irreversibilities: applying pressure above the local osmotic pressure to sustain flux, pump and motor inefficiencies, friction losses, and incomplete energy recovery. Higher recovery saves pretreatment and intake costs but raises brine osmotic pressure and the required feed pressure, so recovery for seawater RO is usually kept to roughly 40 to 50 percent.</p>

<h3>Anatomy of an RO Train</h3>
<table>
<thead><tr><th>Component</th><th>Function</th><th>Key design variable</th></tr></thead>
<tbody>
<tr><td>Intake (open or subsurface)</td><td>Supplies feed water</td><td>Impingement and entrainment of marine life</td></tr>
<tr><td>Pretreatment (media filters, ultrafiltration, flotation)</td><td>Removes particles, algae and organics</td><td>Feed quality indicators such as silt density index</td></tr>
<tr><td>Spiral-wound membrane elements in pressure vessels</td><td>Separate permeate from concentrate</td><td>Flux, recovery, number of stages and passes</td></tr>
<tr><td>High-pressure pump and energy recovery device</td><td>Supply and recycle pressure</td><td>Pump efficiency, isobaric versus turbine recovery</td></tr>
<tr><td>Post-treatment</td><td>Remineralize and disinfect</td><td>Hardness, alkalinity and corrosion control</td></tr>
</tbody>
</table>
<p>Most seawater membranes are thin-film composite polyamide. They offer high rejection and permeability but are damaged by chlorine, so disinfectant used in pretreatment must be removed before the membranes. Some constituents, such as boron, are only partially rejected in a single pass, so plants may add a second pass, sometimes at elevated pH, to meet drinking or irrigation targets.</p>

<h3>Thermal Processes</h3>
<p>Multi-stage flash and multi-effect distillation evaporate water and condense the vapor. Their energy demand is mostly heat, which is why they are commonly co-located with power plants that supply waste or extraction steam. They tolerate poor feed quality well but generally use more total energy than RO. Mechanical vapor compression is a thermal variant driven by electricity, used at smaller scale.</p>

<h3>Economics</h3>
<p>The cost of desalinated water combines capital recovery (intake, outfall, membranes, buildings), energy, membrane replacement, chemicals, labor and maintenance. Energy is typically one of the largest single operating costs, so electricity price strongly influences the cost per cubic meter. Capacity utilization also matters: a plant built for drought insurance that runs at low output in wet years has a high cost per cubic meter actually delivered.</p>

<h3>Analytical Checklist</h3>
<ol>
<li>Characterize feed salinity, temperature and fouling potential through the seasons.</li>
<li>Choose recovery by balancing intake and pretreatment costs against feed pressure.</li>
<li>Estimate specific energy consumption and compare it with the thermodynamic minimum.</li>
<li>Specify product water quality targets, including boron and remineralization.</li>
<li>Calculate levelized cost under different utilization and energy price scenarios.</li>
</ol>
`,
        GRADUATE: `
<h2>Sustainable Desalination: Brine, Renewables and System Integration</h2>
<p>Graduate-level analysis moves from how desalination works to whether, when and how it should be deployed. Desalination plants are long-lived, capital-intensive assets with environmental footprints at sea and on the grid. Making them sustainable involves brine management, energy sourcing, integration with wider water portfolios and governance arrangements that protect ecosystems and affordability.</p>

<h3>Key Concepts for Sustainable Deployment</h3>
<ul>
<li><strong>Brine management:</strong> the set of methods for disposing of, diluting, treating or reusing the concentrated stream left after desalination</li>
<li><strong>Outfall diffuser:</strong> a discharge structure that mixes brine rapidly with seawater to limit salinity increases near the seabed</li>
<li><strong>Zero liquid discharge:</strong> a treatment approach that recovers almost all water and leaves only solid salts, at high energy and cost</li>
<li><strong>Renewable integration:</strong> powering desalination with wind, solar or other low-carbon sources through direct coupling, contracts or grid procurement</li>
<li><strong>Operational flexibility:</strong> the ability of a plant to vary its output, which affects how well it can follow variable renewable supply</li>
<li><strong>Take-or-pay contract:</strong> a purchase agreement under which a utility pays for contracted water whether or not it uses it</li>
</ul>

<h3>Brine Management Options</h3>
<table>
<thead><tr><th>Option</th><th>Typical setting</th><th>Main concerns</th></tr></thead>
<tbody>
<tr><td>Ocean outfall with diffusers</td><td>Coastal seawater plants</td><td>Benthic habitats, local mixing conditions, residual chemicals</td></tr>
<tr><td>Co-discharge with wastewater or cooling water</td><td>Plants near treatment works or power plants</td><td>Dependence on the partner facility's flows</td></tr>
<tr><td>Deep-well injection</td><td>Inland brackish plants</td><td>Geological suitability, groundwater protection</td></tr>
<tr><td>Evaporation ponds</td><td>Small plants in arid regions</td><td>Large land area, wildlife exposure, leakage</td></tr>
<tr><td>Concentration and mineral recovery</td><td>Emerging, often pilot scale</td><td>High energy demand, market value of recovered products</td></tr>
</tbody>
</table>
<p>For inland brackish desalination, brine disposal is often the binding constraint, because there is no ocean for dilution. This is a major reason why inland projects can cost far more than their energy use alone suggests.</p>

<h3>Renewable Integration</h3>
<p>Desalination's large, steady electricity demand makes its carbon footprint a central policy issue. Options include on-site solar or wind, long-term renewable power purchase agreements, and grid supply in systems with low-carbon generation. Direct coupling to variable renewables raises engineering questions: membranes and pumps prefer steady operation, but storage of product water is usually cheaper than storing electricity. Designing plants with some modular, variable capacity and treating water storage as a buffer can let desalination absorb surplus renewable power.</p>

<h3>Portfolio Planning</h3>
<p>Desalination is often justified as climate-independent supply, but its high fixed costs mean planners must compare it with demand management, leakage reduction, stormwater capture and potable reuse. A sound comparison uses marginal costs, considers reliability value under drought scenarios, and accounts for the risk of building capacity that sits idle. Staged or modular construction can reduce that risk.</p>

<h3>Governance and Equity</h3>
<p>Desalination costs flow into water tariffs, which weigh most heavily on low-income households. Long-term private contracts can shift risks between utilities and investors in ways that are hard for the public to see. Coastal siting can affect fisheries, recreation and Indigenous and local communities with ties to marine areas. Transparent environmental assessment, meaningful consultation and affordability measures are therefore part of sustainable deployment, not optional extras.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Establish the need through a demand and supply portfolio analysis under climate scenarios.</li>
<li>Assess intake and brine impacts with site-specific marine studies and monitoring plans.</li>
<li>Define the energy strategy and its emissions over the plant's life.</li>
<li>Compare costs per cubic meter delivered, including standby periods.</li>
<li>Review contract structures, affordability and community engagement.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Membranes, Energy Recovery and Desalination Optimization</h2>
<p>Desalination research sits at the meeting point of materials science, transport phenomena, process engineering and systems analysis. Seawater reverse osmosis already operates within a few multiples of the thermodynamic minimum, so remaining gains are harder to win and must be justified at the system level. This lesson surveys advanced membranes, alternative processes, energy recovery and optimization methods, along with the methodological debates that shape the field.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Permeability-selectivity trade-off:</strong> the tendency for membranes that pass water faster to reject solutes less effectively</li>
<li><strong>Forward osmosis:</strong> a process that draws water across a membrane into a concentrated draw solution, which must then be regenerated</li>
<li><strong>Membrane distillation:</strong> a thermally driven process in which water vapor crosses a hydrophobic membrane, able to use low-grade heat</li>
<li><strong>Batch and closed-circuit reverse osmosis:</strong> configurations that raise pressure over time to track rising concentration, reducing wasted pressure</li>
<li><strong>Capacitive deionization:</strong> an electrochemical method that stores ions in porous electrodes, mainly suited to low-salinity water</li>
<li><strong>Exergy analysis:</strong> an accounting of useful work destroyed at each process step, used to locate inefficiencies</li>
</ul>

<h3>Advanced Membranes</h3>
<p>Research explores materials such as graphene and other two-dimensional sheets, carbon nanotubes, biomimetic membranes incorporating water-channel proteins, and improved polyamide chemistries. A recurring finding is that higher permeability yields diminishing returns for seawater RO: once permeability is high enough, the energy floor is dominated by osmotic pressure and concentration polarization rather than membrane resistance. As a result, many researchers argue the bigger opportunities lie in selectivity (for example, for boron and small neutral solutes), fouling and chlorine resistance, and durability, rather than raw water flux.</p>

<h3>Process Innovation</h3>
<table>
<thead><tr><th>Approach</th><th>Potential advantage</th><th>Open challenge</th></tr></thead>
<tbody>
<tr><td>Batch or closed-circuit RO</td><td>Approaches reversible pressurization, lowering energy</td><td>Control complexity and scale-up</td></tr>
<tr><td>Forward osmosis</td><td>Low fouling propensity, useful for hard-to-treat feeds</td><td>Draw solution regeneration often costs as much energy as RO</td></tr>
<tr><td>Membrane distillation</td><td>Uses low-grade or waste heat, tolerates high salinity</td><td>Wetting, low thermal efficiency, module design</td></tr>
<tr><td>Osmotically assisted and high-pressure RO</td><td>Extends membranes to brine concentration</td><td>Membrane compaction, pressure limits</td></tr>
<tr><td>Hybrid membrane-thermal systems</td><td>Matches each process to the salinity range it handles best</td><td>Integration and operational coordination</td></tr>
</tbody>
</table>

<h3>Energy Recovery and Optimization</h3>
<p>Isobaric pressure exchangers recover most of the brine's hydraulic energy, so remaining losses lie in mixing, leakage, pump efficiency and the pressure margin above osmotic pressure. Optimization research spans several scales: element and vessel design (spacer geometry, flow channels), train configuration (stages, passes, inter-stage boosting), plant operation under varying temperature and salinity, and fleet scheduling with time-varying electricity prices. Mathematical programming, computational fluid dynamics of spacer-filled channels, and data-driven fouling prediction are all active areas.</p>

<h3>Methodological Debates</h3>
<ol>
<li><strong>Metrics:</strong> specific energy consumption alone can mislead; exergy, cost per cubic meter and life-cycle emissions may rank options differently.</li>
<li><strong>Lab versus field:</strong> small-coupon tests with synthetic feeds often overstate the performance of new materials compared with real seawater over long periods.</li>
<li><strong>System boundaries:</strong> claims about novel processes depend on whether draw-solution recovery, pretreatment and brine handling are included.</li>
<li><strong>Brine valorization:</strong> whether recovering minerals from brine can be economically meaningful at scale remains disputed.</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Chlorine- and fouling-resistant membranes with high selectivity for problem solutes.</li>
<li>Scalable batch and hybrid configurations validated at demonstration scale.</li>
<li>Coupling desalination with variable renewables using water storage as flexibility.</li>
<li>Life-cycle and techno-economic studies with consistent, transparent boundaries.</li>
<li>Ecological studies of long-term brine and intake effects to guide regulation.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wdesal2q1',
      question: {
        ELEMENTARY: 'What does a desalination machine take out of sea water?',
        MIDDLE_SCHOOL: 'What is reverse osmosis?',
        HIGH_SCHOOL: 'Why must seawater reverse osmosis plants run at high pressure?',
        UNDERGRADUATE: 'What is the role of an energy recovery device in a reverse osmosis plant?',
        GRADUATE: 'What is brine in desalination?',
        PHD: 'What is forward osmosis?',
      },
      options: {
        ELEMENTARY: ['Salt', 'Fish', 'Sand castles', 'Bubbles'],
        MIDDLE_SCHOOL: ['Using pressure to push water through a membrane away from the salt', 'Letting water flow backward down a river', 'Boiling water in a kettle', 'Adding salt to fresh water'],
        HIGH_SCHOOL: ['They must overcome the osmotic pressure of salty water, which rises as water is removed', 'High pressure makes the water taste better', 'Pressure kills all the fish in the water', 'Low pressure would melt the membranes'],
        UNDERGRADUATE: ['It recaptures the hydraulic pressure of the brine and transfers it to incoming feed', 'It recovers lost membranes from the brine', 'It stores electricity in batteries', 'It generates power from ocean waves'],
        GRADUATE: ['The concentrated salt stream left after fresh water is extracted', 'Fresh water ready for drinking', 'A cleaning chemical for membranes', 'Rainwater collected on the plant roof'],
        PHD: ['A process that draws water across a membrane into a concentrated draw solution, which must then be regenerated', 'Reverse osmosis run at double pressure', 'Distillation using forward-facing pipes', 'A process that needs no membrane at all'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Desalination means taking the salt out of sea water so people can drink it.',
        MIDDLE_SCHOOL: 'Reverse osmosis uses pumps to force water through a membrane, leaving the salt behind.',
        HIGH_SCHOOL: 'Seawater has an osmotic pressure of roughly 25 bar, and it rises as the water gets saltier, so plants run well above it.',
        UNDERGRADUATE: 'Pressure exchangers and similar devices pass the brine pressure back to the feed, cutting pump energy.',
        GRADUATE: 'Brine is the concentrated stream, often around twice as salty as seawater, that must be managed carefully.',
        PHD: 'Forward osmosis relies on a natural osmotic gradient, but regenerating the draw solution often costs significant energy.',
      },
    },
    {
      id: 'wdesal2q2',
      question: {
        ELEMENTARY: 'What is a membrane in a desalination machine?',
        MIDDLE_SCHOOL: 'Why does seawater go through pretreatment first?',
        HIGH_SCHOOL: 'Which technology is used in most new municipal desalination plants?',
        UNDERGRADUATE: 'Why is seawater reverse osmosis recovery usually kept to roughly 40 to 50 percent?',
        GRADUATE: 'Why is brine disposal often the binding constraint for inland brackish desalination?',
        PHD: 'Why do higher-permeability membranes give diminishing energy savings in seawater reverse osmosis?',
      },
      options: {
        ELEMENTARY: ['A big water tank', 'A type of fish net', 'A thin sheet with tiny holes that lets water through but stops salt', 'A pump handle'],
        MIDDLE_SCHOOL: ['To add more salt', 'To warm the water up', 'To remove sand, algae and particles that would clog the membranes', 'To make the water fizzy'],
        HIGH_SCHOOL: ['Multi-stage flash', 'Solar stills', 'Seawater reverse osmosis', 'Freezing'],
        UNDERGRADUATE: ['Membranes cannot hold more than half the water', 'Regulations ban higher recovery everywhere', 'Higher recovery raises brine osmotic pressure and the required feed pressure', 'Lower recovery produces more fresh water'],
        GRADUATE: ['Inland plants never produce brine', 'Brine is valuable and sold immediately', 'Without an ocean for dilution, options like injection or ponds are costly and site-limited', 'Brackish water has no salt'],
        PHD: ['Permeable membranes cannot be manufactured', 'Permeability has no effect on anything', 'The energy floor becomes dominated by osmotic pressure and concentration polarization', 'Higher permeability always lowers salt rejection to zero'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The membrane is like a super tiny sieve: water squeezes through and the salt stays behind.',
        MIDDLE_SCHOOL: 'Pretreatment protects the membranes from fouling by removing particles and living things.',
        HIGH_SCHOOL: 'Reverse osmosis is the most energy-efficient option for seawater and dominates new plants.',
        UNDERGRADUATE: 'Recovery is a balance: more recovery saves intake and pretreatment but needs higher pressure.',
        GRADUATE: 'Inland plants must use deep-well injection, evaporation ponds or concentration, all costly and site-specific.',
        PHD: 'Once membranes are permeable enough, thermodynamics and polarization, not membrane resistance, set the energy floor.',
      },
    },
    {
      id: 'wdesal2q3',
      question: {
        ELEMENTARY: 'Why does ocean water go through screens and filters first?',
        MIDDLE_SCHOOL: 'What is fouling?',
        HIGH_SCHOOL: 'How does multi-effect distillation save energy?',
        UNDERGRADUATE: 'Why must chlorine be removed before water reaches polyamide RO membranes?',
        GRADUATE: 'What is zero liquid discharge?',
        PHD: 'What is the main idea behind batch or closed-circuit reverse osmosis?',
      },
      options: {
        ELEMENTARY: ['To make it saltier', 'To keep sand, seaweed and tiny creatures from clogging the membrane', 'To turn it blue', 'To make it warm'],
        MIDDLE_SCHOOL: ['A new kind of membrane', 'A buildup of dirt, minerals or living things that clogs a membrane', 'The salt added after treatment', 'A type of pump'],
        HIGH_SCHOOL: ['It uses no heat at all', 'Steam from one chamber is reused to heat the next', 'It freezes the salt out', 'It runs only at night'],
        UNDERGRADUATE: ['Chlorine makes the water taste salty', 'Chlorine damages thin-film composite polyamide membranes', 'Chlorine increases recovery too much', 'Chlorine blocks energy recovery devices'],
        GRADUATE: ['Discharging all brine directly to rivers', 'Recovering almost all water and leaving only solid salts, at high energy and cost', 'A plant that produces no fresh water', 'Turning off the plant during drought'],
        PHD: ['Running at constant maximum pressure throughout', 'Raising pressure over time to track rising concentration, reducing wasted pressure', 'Using no pumps at all', 'Mixing brine back into the product water'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Screens and filters catch the things that would block the tiny holes in the membrane.',
        MIDDLE_SCHOOL: 'Fouling clogs membranes, which is why plants clean water first and wash membranes regularly.',
        HIGH_SCHOOL: 'Each effect reuses the heat from the one before, so the same energy evaporates water several times.',
        UNDERGRADUATE: 'Polyamide membranes are chlorine-sensitive, so disinfectant is removed before the RO stage.',
        GRADUATE: 'Zero liquid discharge eliminates liquid brine but is energy-intensive and expensive.',
        PHD: 'Batch configurations approach reversible pressurization by matching pressure to concentration as it rises.',
      },
    },
    {
      id: 'wdesal2q4',
      question: {
        ELEMENTARY: 'What is the leftover extra-salty water called?',
        MIDDLE_SCHOOL: 'What happens in post-treatment?',
        HIGH_SCHOOL: 'Which is a way to reduce harm to marine life from seawater intakes?',
        UNDERGRADUATE: 'What does specific energy consumption measure?',
        GRADUATE: 'Why can direct coupling to variable renewables be challenging for desalination?',
        PHD: 'Why can small lab tests overstate the performance of new membrane materials?',
      },
      options: {
        ELEMENTARY: ['Juice', 'Rain', 'Snow', 'Brine'],
        MIDDLE_SCHOOL: ['Salt is added until the water is like seawater', 'The membranes are thrown away', 'Fish are returned to the plant', 'Minerals are added back and the water is disinfected'],
        HIGH_SCHOOL: ['Using bigger open pipes with no screens', 'Pumping faster at the intake', 'Adding chemicals at the beach', 'Using subsurface intakes and fine screens'],
        UNDERGRADUATE: ['The salt removed per day', 'The cost of membranes', 'The number of pumps in the plant', 'Energy used per cubic meter of product water'],
        GRADUATE: ['Renewables cannot power pumps', 'Desalination plants need no electricity', 'Water storage is always more expensive than batteries', 'Membranes and pumps prefer steady operation, while renewable output varies'],
        PHD: ['Lab tests always use real seawater for years', 'Field conditions are always easier', 'Membranes perform better as they age', 'They use synthetic feeds over short periods, unlike long-term real seawater operation'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Brine is the very salty water left over after the fresh water is made.',
        MIDDLE_SCHOOL: 'Adding a few minerals back makes the water taste good and protects pipes, then it is disinfected.',
        HIGH_SCHOOL: 'Subsurface intakes and fine screens reduce how many fish and plankton are pulled in.',
        UNDERGRADUATE: 'Specific energy consumption is usually given in kilowatt-hours per cubic meter of fresh water.',
        GRADUATE: 'Plants can be designed with modular capacity and water storage so they can follow renewable supply.',
        PHD: 'Real seawater fouls and ages membranes in ways short synthetic-feed tests do not capture.',
      },
    },
    {
      id: 'wdesal2q5',
      question: {
        ELEMENTARY: 'Why do desalination machines use a lot of electricity?',
        MIDDLE_SCHOOL: 'What is brackish water?',
        HIGH_SCHOOL: 'What is the recovery ratio of a desalination plant?',
        UNDERGRADUATE: 'Why does capacity utilization affect the cost of desalinated water?',
        GRADUATE: 'Why is a take-or-pay contract important in desalination planning?',
        PHD: 'What is exergy analysis used for in desalination research?',
      },
      options: {
        ELEMENTARY: ['Pushing water through the membrane takes a lot of energy', 'They play loud music', 'They light up the beach', 'They heat the ocean'],
        MIDDLE_SCHOOL: ['Water saltier than fresh water but less salty than the sea', 'Water with no salt at all', 'Water saltier than the sea', 'Frozen sea water'],
        HIGH_SCHOOL: ['The fraction of feed water that becomes fresh product water', 'How fast the plant was built', 'How much salt is sold', 'The number of workers at the plant'],
        UNDERGRADUATE: ['High fixed costs are spread over less water when the plant runs at low output', 'Utilization has no link to cost', 'Running less always lowers the cost per cubic meter', 'Only electricity price matters'],
        GRADUATE: ['The utility pays for contracted water whether or not it uses it, shifting risk', 'It guarantees free water', 'It bans the plant from running', 'It sets the salt content of the brine'],
        PHD: ['Locating where useful work is destroyed in each process step', 'Measuring how salty the brine tastes', 'Counting membrane elements', 'Predicting rainfall'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Big pumps must push hard to squeeze water through the tiny holes, and that takes electricity.',
        MIDDLE_SCHOOL: 'Brackish water is in between fresh and seawater, so it is easier and cheaper to desalinate.',
        HIGH_SCHOOL: 'If recovery is 45 percent, 45 out of every 100 liters become fresh water and the rest leaves as brine.',
        UNDERGRADUATE: 'A plant built for drought insurance that runs at low output in wet years has a high cost per cubic meter delivered.',
        GRADUATE: 'Take-or-pay terms can leave utilities paying for idle capacity, which affects tariffs and risk.',
        PHD: 'Exergy analysis pinpoints irreversibilities, guiding where engineering effort can save the most.',
      },
    },
  ],
}

export default expansion
