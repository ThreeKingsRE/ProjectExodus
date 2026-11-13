import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'hydrogen-energy',
  lessons: [
    {
      id: 're-h2-1',
      title: 'The Lightest Fuel',
      content: {
        ELEMENTARY: `
<h2>Hydrogen: The Tiny Fuel With Big Power</h2>
<p>Everything around you is made of tiny building blocks called atoms. The smallest and lightest of them all is hydrogen. It is so light that a balloon filled with it floats right up into the sky. Scientists and engineers are excited about hydrogen because it can carry energy and help power buses, trucks and even buildings without making smoky air.</p>

<h3>Where Is Hydrogen Hiding?</h3>
<p>Hydrogen is everywhere, but it is almost always holding hands with other atoms. The biggest hiding place is water. Every drop of water is made of hydrogen and oxygen stuck together. That is why water is called H2O: two hydrogen atoms and one oxygen atom. To use hydrogen as a fuel, people first have to pull it apart from the other atoms.</p>
<ul>
<li><strong>Atom:</strong> a tiny building block that everything in the world is made from</li>
<li><strong>Hydrogen:</strong> the lightest and smallest kind of atom, found inside water</li>
<li><strong>Oxygen:</strong> the gas in the air that we breathe in to stay alive</li>
</ul>

<h3>Splitting Water</h3>
<p>Here is a neat trick. If you send electricity through water, the water splits apart into hydrogen gas and oxygen gas. This is called electrolysis. When the electricity comes from the sun or the wind, the hydrogen is very clean, and some people call it green hydrogen.</p>

<h3>Putting It Back Together</h3>
<p>Now for the magic part. A special box called a fuel cell lets hydrogen and oxygen join back together. When they join, they make electricity, a little heat and plain water. That electricity can turn the motor of a bus or a truck. The only thing that comes out of the tailpipe is water!</p>
<ul>
<li><strong>Fuel cell:</strong> a box where hydrogen and oxygen meet to make electricity and water</li>
<li><strong>Electrolysis:</strong> using electricity to split water into hydrogen and oxygen</li>
<li><strong>Green hydrogen:</strong> hydrogen made with electricity from the sun or the wind</li>
</ul>

<h3>Why Is It Tricky?</h3>
<p>Hydrogen is so light and tiny that it is hard to keep in a tank. It likes to escape, and it needs to be squeezed very tightly or kept super cold. It also burns easily, so grown-ups and engineers handle it with special care and strong safety rules. Kids should never play with gas tanks of any kind.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Draw a water drop and label the two hydrogen atoms and one oxygen atom.</li>
<li>Look for buses or trucks in your town that say they run on hydrogen.</li>
<li>Tell a friend how a fuel cell only puts out water.</li>
<li>Save electricity at home, because clean electricity is what makes clean hydrogen.</li>
</ol>
<p>Hydrogen may be the tiniest atom, but it could play a big part in a cleaner future!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Hydrogen Stores and Delivers Clean Energy</h2>
<p>Hydrogen is not an energy source like sunlight or wind. Instead, it is an energy carrier. That means we put energy into making hydrogen, store or move it, and then get much of that energy back later. In this way hydrogen works a bit like a rechargeable battery that you can pour into a tank or send through a pipe.</p>

<h3>Making Hydrogen</h3>
<p>Today most hydrogen is made from natural gas in a process called steam methane reforming. It works well but releases carbon dioxide, a greenhouse gas. A cleaner way is electrolysis, where an electrolyzer uses electricity to split water. People often describe hydrogen with colors to show how it was made:</p>
<table>
<thead><tr><th>Name</th><th>How it is made</th><th>Climate impact</th></tr></thead>
<tbody>
<tr><td>Gray hydrogen</td><td>From natural gas, carbon dioxide released into the air</td><td>High</td></tr>
<tr><td>Blue hydrogen</td><td>From natural gas, with much of the carbon dioxide captured and stored</td><td>Lower</td></tr>
<tr><td>Green hydrogen</td><td>Electrolysis powered by renewable electricity</td><td>Very low</td></tr>
</tbody>
</table>

<h3>Using Hydrogen</h3>
<p>Inside a fuel cell, hydrogen gives up tiny charged particles called electrons. The electrons flow through a wire as electricity, then meet oxygen and the leftover hydrogen to form water. Fuel cell vehicles use this electricity to drive an electric motor. Hydrogen can also be burned for very high heat in factories, or used as an ingredient to make fertilizer and steel.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Energy carrier:</strong> something that holds energy made somewhere else so it can be moved and used later</li>
<li><strong>Electrolyzer:</strong> a machine that uses electricity to split water into hydrogen and oxygen</li>
<li><strong>Fuel cell:</strong> a device that turns hydrogen and oxygen into electricity, heat and water</li>
<li><strong>Steam methane reforming:</strong> the common method of making hydrogen from natural gas and hot steam</li>
<li><strong>Emissions:</strong> gases such as carbon dioxide that are released into the air</li>
<li><strong>Electron:</strong> a tiny charged particle whose movement through a wire is electricity</li>
</ul>

<h3>Storing Sunshine and Wind</h3>
<p>On sunny, windy days, solar panels and wind turbines can make more electricity than people need. That extra electricity can run electrolyzers and turn it into hydrogen. The hydrogen can be stored for days, weeks or even months and then used when the weather is calm or cloudy. Batteries are better for storing energy for a few hours, while hydrogen might help with much longer gaps.</p>

<h3>The Challenges</h3>
<ul>
<li>Hydrogen is very light, so it takes up a lot of space unless it is squeezed hard or cooled until it becomes a liquid.</li>
<li>Energy is lost at every step: making it, storing it and turning it back into electricity.</li>
<li>Green hydrogen still usually costs more than gray hydrogen.</li>
<li>We need new pipes, tanks and filling stations.</li>
</ul>
<p>Because of these losses, experts often say hydrogen works best for jobs that are hard to do with batteries or plugs, like making steel or powering big ships.</p>
`,
        HIGH_SCHOOL: `
<h2>Hydrogen Energy: Production, Fuel Cells and Storage</h2>
<p>Hydrogen gets a lot of attention as a clean fuel, and also a lot of skepticism. Both reactions make sense once you understand the chemistry and engineering. Hydrogen holds a lot of energy per kilogram, burns or reacts without carbon dioxide, and can be made from water. But it is costly to make cleanly, hard to store and loses energy at each conversion step. This lesson explores how it is made, how fuel cells work and why storage is such a challenge.</p>

<h3>Production Methods</h3>
<table>
<thead><tr><th>Method</th><th>Input</th><th>Main trade-off</th></tr></thead>
<tbody>
<tr><td>Steam methane reforming</td><td>Natural gas and steam</td><td>Cheap and mature, but releases roughly ten kilograms of carbon dioxide per kilogram of hydrogen</td></tr>
<tr><td>Reforming with carbon capture</td><td>Natural gas, plus capture equipment</td><td>Lower emissions, but capture is never complete and methane leaks still matter</td></tr>
<tr><td>Water electrolysis</td><td>Water and electricity</td><td>Clean only if the electricity is clean; currently more expensive</td></tr>
<tr><td>Biomass gasification</td><td>Plant and waste material</td><td>Uses residues, but supply is limited and land use matters</td></tr>
</tbody>
</table>
<p>Electrolysis follows a simple reaction: water plus electrical energy yields hydrogen and oxygen. Making one kilogram of hydrogen takes about nine kilograms of water in theory, plus extra for purification.</p>

<h3>How a Fuel Cell Works</h3>
<p>A proton exchange membrane fuel cell has two electrodes separated by a thin membrane. At the anode, a catalyst, often platinum, splits hydrogen molecules into protons and electrons. Protons pass through the membrane, but electrons cannot, so they travel around an external circuit and do useful work. At the cathode, electrons, protons and oxygen from air combine to make water. A single cell produces less than one volt, so many are stacked together.</p>
<ul>
<li><strong>Anode:</strong> the electrode where hydrogen is split into protons and electrons</li>
<li><strong>Cathode:</strong> the electrode where oxygen combines with protons and electrons to form water</li>
<li><strong>Catalyst:</strong> a material that speeds up a chemical reaction without being used up</li>
<li><strong>Membrane:</strong> a thin layer that lets protons through while blocking electrons and gases</li>
<li><strong>Fuel cell stack:</strong> many cells connected together to reach a useful voltage and power</li>
</ul>

<h3>The Storage Problem</h3>
<p>By mass, hydrogen carries roughly three times the energy of gasoline. By volume it is the opposite: at normal pressure a tank of hydrogen holds very little energy. Engineers use three main approaches:</p>
<ol>
<li><strong>Compression</strong> to several hundred times atmospheric pressure in strong carbon-fiber tanks, common in vehicles.</li>
<li><strong>Liquefaction</strong> by cooling to about minus 253 degrees Celsius, which takes a large share of the hydrogen's energy and requires heavily insulated tanks.</li>
<li><strong>Chemical carriers</strong> such as ammonia, which pack hydrogen into a denser liquid that is easier to ship.</li>
</ol>
<p>Hydrogen molecules are tiny, so they leak easily and can make some steels brittle. Hydrogen also ignites across a wide range of mixtures with air and burns with a nearly invisible flame, so sensors, ventilation and careful materials are essential.</p>

<h3>Where Hydrogen Makes Sense</h3>
<p>Because every conversion loses energy, using electricity directly, such as in a battery electric car or a heat pump, is usually more efficient. Hydrogen is most promising where direct electrification is difficult: making fertilizer and steel, refining, long-distance shipping and some heavy trucking, and storing energy across seasons. Thinking about efficiency, cost and the specific job helps cut through hype in both directions.</p>
`,
        UNDERGRADUATE: `
<h2>The Economics and Engineering of Green Hydrogen</h2>
<p>Hydrogen is already a major industrial commodity, used mostly in oil refining and ammonia production, and nearly all of it is made from fossil fuels. The policy question is not whether hydrogen is useful, but which hydrogen, at what cost and for which applications. This lesson develops the cost structure of electrolytic hydrogen, compares electrolyzer technologies and frames a merit order for end uses.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Levelized cost of hydrogen:</strong> the lifetime cost of producing hydrogen divided by the total hydrogen produced, usually per kilogram</li>
<li><strong>Specific energy consumption:</strong> the electricity an electrolyzer needs per kilogram of hydrogen, which reflects its efficiency</li>
<li><strong>Capacity factor:</strong> the fraction of the year an electrolyzer operates at full output, which spreads its capital cost</li>
<li><strong>Higher heating value:</strong> the energy released by hydrogen including the heat recovered from condensing the water produced</li>
<li><strong>Stack degradation:</strong> the gradual loss of electrolyzer efficiency over operating hours that eventually requires stack replacement</li>
<li><strong>Offtake agreement:</strong> a long-term contract with a buyer that reduces revenue risk for a hydrogen project</li>
</ul>

<h3>Cost Structure</h3>
<p>The levelized cost of electrolytic hydrogen is driven by two main terms. The first is electricity: multiply the specific energy consumption, typically in the range of fifty or more kilowatt-hours per kilogram for today's systems, by the electricity price. At high utilization, electricity commonly dominates the total. The second is capital: electrolyzer, balance of plant, compression and water treatment, annualized and divided by output. Here capacity factor is decisive. An electrolyzer that runs only when solar output is high spreads its capital over few hours, so cheap but intermittent power can still yield expensive hydrogen. This creates a trade-off: higher utilization means buying more expensive or less clean electricity, while lower utilization raises the capital share.</p>

<h3>Electrolyzer Technologies</h3>
<table>
<thead><tr><th>Technology</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Alkaline</td><td>Mature, no precious metal catalysts, long industrial record</td><td>Slower response to fluctuating power, larger footprint</td></tr>
<tr><td>Proton exchange membrane</td><td>Compact, fast dynamic response, high output purity</td><td>Uses platinum group metals such as iridium; higher capital cost</td></tr>
<tr><td>Solid oxide</td><td>Highest electrical efficiency when waste heat is available</td><td>High operating temperature, durability still developing</td></tr>
<tr><td>Anion exchange membrane</td><td>Aims to combine low-cost materials with membrane designs</td><td>Early stage; lifetime not yet proven at scale</td></tr>
</tbody>
</table>

<h3>Round-Trip Efficiency</h3>
<p>Converting electricity to hydrogen and back through a fuel cell or turbine typically returns well under half of the original electricity, compared with most of it for a lithium-ion battery. This is why hydrogen storage is most compelling for long durations where battery capital costs per unit of energy become prohibitive, and why direct electrification usually wins where it is feasible.</p>

<h3>A Merit Order of Uses</h3>
<ol>
<li><strong>Replace existing gray hydrogen</strong> in ammonia and refining, where demand already exists and no new end-use equipment is needed.</li>
<li><strong>Hard-to-electrify industry</strong> such as direct reduction of iron ore for steel.</li>
<li><strong>Shipping and aviation fuels</strong> via ammonia, methanol or synthetic kerosene derived from hydrogen.</li>
<li><strong>Long-duration and seasonal storage</strong> for power systems with high renewable shares.</li>
<li><strong>Lower priority</strong>: home heating and light vehicles, where heat pumps and batteries are generally more efficient.</li>
</ol>

<h3>Applied Checklist</h3>
<p>When evaluating a hydrogen project, ask: what is the electricity source and its emissions intensity hour by hour, what capacity factor is realistic, who buys the hydrogen and at what price, how will it be stored and moved, and what is the most efficient alternative for the same service?</p>
`,
        GRADUATE: `
<h2>Hydrogen Infrastructure, Sector Coupling and Trade</h2>
<p>At the graduate level, hydrogen is best viewed as a system design and governance problem. Producers will not invest without buyers, buyers will not switch without supply and infrastructure, and infrastructure owners will not build without both. This lesson examines how sector coupling shapes hydrogen's role, how infrastructure and markets can be coordinated, and what international trade in hydrogen and its derivatives implies for energy security and equity.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Sector coupling:</strong> linking the electricity system with industry, transport and heat so that flexibility and energy flow between them</li>
<li><strong>Chicken-and-egg problem:</strong> the coordination failure in which supply, demand and infrastructure each wait for the others to commit first</li>
<li><strong>Hydrogen hub:</strong> a geographic cluster that co-locates production, storage and multiple users to share infrastructure costs</li>
<li><strong>Additionality:</strong> the requirement that electricity for electrolysis comes from new clean generation rather than diverting existing supply</li>
<li><strong>Guarantee of origin:</strong> a certificate system that records how a unit of hydrogen was produced and its associated emissions</li>
<li><strong>Derivative fuel:</strong> a product such as ammonia or methanol made from hydrogen that is easier to transport and store</li>
</ul>

<h3>Sector Coupling in Practice</h3>
<p>Electrolyzers can act as flexible loads, absorbing surplus renewable output and relieving grid congestion. Stored hydrogen can then serve industrial demand or, less efficiently, return to the grid during long low-renewable periods. The value of this coupling depends on the counterfactual. If electrolyzers run on grid power during hours dominated by fossil generation, they can increase emissions. This is why temporal matching (hourly rather than annual matching of clean electricity), geographic matching and additionality rules are central and contested in hydrogen policy design.</p>

<h3>Infrastructure Options</h3>
<table>
<thead><tr><th>Option</th><th>Best suited to</th><th>Governance issue</th></tr></thead>
<tbody>
<tr><td>Dedicated pipelines</td><td>Large, steady flows between hubs</td><td>Who bears utilization risk early on</td></tr>
<tr><td>Repurposed gas pipelines</td><td>Corridors where gas demand is declining</td><td>Material compatibility and regulated asset values</td></tr>
<tr><td>Salt cavern storage</td><td>Large-scale seasonal balancing</td><td>Geology is unevenly distributed across regions</td></tr>
<tr><td>Trucked compressed gas</td><td>Small, early, dispersed demand</td><td>High per-unit cost and road safety rules</td></tr>
<tr><td>Ammonia shipping</td><td>Intercontinental trade</td><td>Toxicity, reconversion losses and port standards</td></tr>
</tbody>
</table>

<h3>Policy Instruments</h3>
<ol>
<li><strong>Production subsidies or tax credits</strong> lower the cost gap, ideally tied to verified life-cycle emissions.</li>
<li><strong>Contracts for difference</strong> pay producers the gap between a strike price and a reference price, reducing revenue risk.</li>
<li><strong>Demand-side mandates or green procurement</strong> create bankable offtake in steel, fertilizer or fuels.</li>
<li><strong>Regulated infrastructure</strong> models allow network costs to be recovered over time while demand grows.</li>
<li><strong>Certification</strong> enables cross-border trade by making emissions claims comparable.</li>
</ol>

<h3>International Trade</h3>
<p>Regions with excellent solar or wind resources and available land may become exporters, while dense industrial regions with limited renewable potential may import hydrogen or derivatives. Because hydrogen gas is costly to ship, trade may favor derivatives or relocating energy-intensive production, such as making iron near cheap renewables and shipping the iron instead. This raises questions of industrial policy, energy dependence and who captures value.</p>

<h3>Equity and Local Impacts</h3>
<p>Export projects can bring investment but also compete for land and fresh water, and may be planned in regions where local communities, including Indigenous peoples, hold rights to land and resources. Fair processes involve early consent-based engagement, benefit sharing, use of desalinated or reclaimed water where freshwater is scarce, and ensuring that local populations also gain access to clean electricity rather than only exporting it.</p>

<h3>Evaluation Framework</h3>
<p>Assess hydrogen strategies by asking which end uses are prioritized, whether emissions accounting is credible hour by hour, how infrastructure risk is shared, how trade affects domestic energy access, and whether direct electrification has been fully considered first.</p>
`,
        PHD: `
<h2>Research Frontiers in Hydrogen Systems</h2>
<p>Hydrogen research spans electrochemistry, materials science, process engineering and energy systems modeling. Doctoral-level work must connect these scales: catalyst and membrane advances only matter if they shift system costs, and system models are only as good as their representation of electrolyzer dynamics, storage geology and end-use demand. This lesson surveys advanced electrolysis, hydrogen carriers and integration optimization, along with the methodological debates that shape the field.</p>

<h3>Advanced Electrolysis</h3>
<p>Thermodynamics sets the floor. The reversible cell voltage for water splitting is about 1.23 volts at standard conditions, while the thermoneutral voltage, at which no external heat is needed, is about 1.48 volts. Real cells operate above these values because of activation, ohmic and mass-transport overpotentials. Research targets each loss.</p>
<ul>
<li><strong>Overpotential:</strong> the extra voltage beyond the thermodynamic value needed to drive a reaction at a useful rate</li>
<li><strong>Oxygen evolution reaction:</strong> the slow anode half-reaction that dominates activation losses in water electrolysis</li>
<li><strong>Iridium thrifting:</strong> reducing or replacing scarce iridium catalysts in acidic membrane electrolyzers</li>
<li><strong>Solid oxide electrolysis:</strong> high-temperature electrolysis that uses heat to reduce the electrical energy needed</li>
<li><strong>Accelerated stress testing:</strong> protocols that compress degradation into shorter tests to predict long-term durability</li>
<li><strong>Liquid organic hydrogen carrier:</strong> an organic liquid that is hydrogenated for transport and dehydrogenated at the destination</li>
</ul>
<p>Key open problems include scarce-metal dependence in proton exchange membrane systems, durability under intermittent operation, high-temperature degradation in solid oxide cells, and direct seawater electrolysis that avoids chloride corrosion and competing chlorine evolution.</p>

<h3>Hydrogen Carriers</h3>
<table>
<thead><tr><th>Carrier</th><th>Advantage</th><th>Research question</th></tr></thead>
<tbody>
<tr><td>Liquid hydrogen</td><td>Pure product at the destination</td><td>Liquefaction energy and boil-off losses during storage and shipping</td></tr>
<tr><td>Ammonia</td><td>High hydrogen density, existing trade experience</td><td>Efficient cracking catalysts and nitrogen oxide control when burned</td></tr>
<tr><td>Liquid organic carriers</td><td>Handled like conventional liquid fuels</td><td>Heat demand for release and long-term carrier stability</td></tr>
<tr><td>Methanol and synthetic fuels</td><td>Drop-in compatibility with existing uses</td><td>Sustainable carbon sourcing and full life-cycle accounting</td></tr>
<tr><td>Metal hydrides</td><td>Dense, low-pressure storage</td><td>Weight, kinetics and thermal management</td></tr>
</tbody>
</table>

<h3>System Integration and Optimization</h3>
<p>Capacity-expansion and operational models increasingly co-optimize electrolyzer sizing, renewable portfolios, storage in tanks or caverns, pipelines and end-use demand. Important modeling choices include temporal resolution (representative days versus full chronological years), whether multi-year weather variability is captured, spatial resolution of networks, and how electrolyzer part-load efficiency and degradation are represented. Coarse temporal resolution can understate the value of long-duration storage, while ignoring degradation can overstate the benefit of highly flexible operation.</p>

<h3>Contested Questions</h3>
<ul>
<li>How strict should temporal matching rules be, given the trade-off between emissions integrity and early-stage cost?</li>
<li>What is hydrogen's indirect climate effect? Leaked hydrogen extends the lifetime of methane in the atmosphere, so leakage rates across the value chain matter.</li>
<li>How large will hydrogen demand really be, given rapid progress in batteries and heat pumps that compete for many of the same uses?</li>
<li>How should learning rates for electrolyzers be projected, given limited deployment history?</li>
</ul>

<h3>Methodological Debates</h3>
<p>Life-cycle assessments of hydrogen vary widely with assumptions about electricity carbon intensity, upstream methane leakage for reformed hydrogen, capture rates and system boundaries. Techno-economic studies are sensitive to discount rates, capacity factors and assumed cost declines. Robust research reports these assumptions transparently, runs sensitivity and scenario analyses, and avoids comparing results drawn from inconsistent boundaries.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Durable, low-scarcity catalysts and membranes validated under realistic dynamic operation.</li>
<li>Coupled models linking electrolyzer degradation to dispatch and investment decisions.</li>
<li>Measurement and modeling of hydrogen leakage and its atmospheric chemistry.</li>
<li>Comparative assessment of carriers across full supply chains, including reconversion.</li>
<li>Integration of equity, land and water constraints into hydrogen export planning models.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rh2q1',
      question: {
        ELEMENTARY: 'What comes out when hydrogen and oxygen join in a fuel cell?',
        MIDDLE_SCHOOL: 'Why is hydrogen called an energy carrier and not an energy source?',
        HIGH_SCHOOL: 'In a proton exchange membrane fuel cell, what passes through the membrane?',
        UNDERGRADUATE: 'Why can cheap but intermittent solar power still produce expensive hydrogen?',
        GRADUATE: 'What is sector coupling?',
        PHD: 'What does the thermoneutral voltage of water electrolysis represent?',
      },
      options: {
        ELEMENTARY: ['Electricity and water', 'Black smoke', 'Sand', 'Nothing at all'],
        MIDDLE_SCHOOL: ['Energy must be put in to make it, then much of that energy is recovered later', 'It is found in pure tanks underground', 'It creates energy from nothing', 'It only works in space'],
        HIGH_SCHOOL: ['Protons', 'Electrons', 'Oxygen gas', 'Water droplets'],
        UNDERGRADUATE: ['A low capacity factor spreads the electrolyzer capital cost over few operating hours', 'Solar electricity cannot run electrolyzers', 'Sunlight damages hydrogen', 'Electrolyzers need coal to start'],
        GRADUATE: ['Linking electricity with industry, transport and heat so flexibility and energy flow between them', 'Merging two utility companies', 'Blending hydrogen into gasoline', 'Splitting the grid into separate regions'],
        PHD: ['The voltage at which electrolysis needs no external heat input', 'The highest voltage a cell can survive', 'The voltage at which water freezes', 'The voltage needed to compress hydrogen'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In a fuel cell, hydrogen and oxygen join to make electricity, a little heat and plain water.',
        MIDDLE_SCHOOL: 'Hydrogen holds energy that was put in to make it, like a rechargeable battery, so it carries energy rather than being a source.',
        HIGH_SCHOOL: 'The membrane lets protons through; electrons must travel around the external circuit, which is the useful electricity.',
        UNDERGRADUATE: 'Capital costs are divided by output, so an electrolyzer that runs few hours per year has a high cost per kilogram.',
        GRADUATE: 'Sector coupling connects electricity to other sectors; hydrogen is one bridge that can absorb surplus renewable power.',
        PHD: 'At about 1.48 volts the electrical input covers both the reaction energy and its heat requirement.',
      },
    },
    {
      id: 'rh2q2',
      question: {
        ELEMENTARY: 'Where is most hydrogen on Earth hiding?',
        MIDDLE_SCHOOL: 'Which kind of hydrogen is made using renewable electricity?',
        HIGH_SCHOOL: 'How does hydrogen compare with gasoline in energy content?',
        UNDERGRADUATE: 'Which electrolyzer type is known for fast dynamic response but uses scarce metals like iridium?',
        GRADUATE: 'What does additionality require for electrolytic hydrogen?',
        PHD: 'What is a liquid organic hydrogen carrier?',
      },
      options: {
        ELEMENTARY: ['In rocks on the Moon', 'Inside water', 'In tree leaves only', 'In the sound of thunder'],
        MIDDLE_SCHOOL: ['Gray hydrogen', 'Green hydrogen', 'Blue hydrogen', 'Black hydrogen'],
        HIGH_SCHOOL: ['Less energy per kilogram and per liter', 'More energy per kilogram but much less per liter', 'Exactly the same in every way', 'More energy per liter but less per kilogram'],
        UNDERGRADUATE: ['Alkaline', 'Proton exchange membrane', 'Solid oxide', 'Biomass gasifier'],
        GRADUATE: ['That hydrogen is mixed with natural gas', 'That electricity comes from new clean generation rather than diverting existing supply', 'That projects add extra storage tanks', 'That hydrogen is sold abroad'],
        PHD: ['A pipeline lined with plastic', 'An organic liquid that is hydrogenated for transport and dehydrogenated at the destination', 'A cryogenic tanker', 'A solid metal block'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Every drop of water contains hydrogen joined to oxygen. That is why water is called H2O.',
        MIDDLE_SCHOOL: 'Green hydrogen comes from electrolysis powered by solar, wind or other renewable electricity.',
        HIGH_SCHOOL: 'Hydrogen holds roughly three times the energy of gasoline per kilogram but very little per liter unless compressed or liquefied.',
        UNDERGRADUATE: 'Proton exchange membrane electrolyzers respond quickly and are compact but rely on platinum group metals.',
        GRADUATE: 'Without additionality, electrolyzers could pull clean power away from other users and raise overall emissions.',
        PHD: 'Liquid organic carriers are handled like ordinary liquids, but releasing the hydrogen requires heat.',
      },
    },
    {
      id: 'rh2q3',
      question: {
        ELEMENTARY: 'What is electrolysis?',
        MIDDLE_SCHOOL: 'How is most hydrogen made today?',
        HIGH_SCHOOL: 'Why is liquefying hydrogen difficult?',
        UNDERGRADUATE: 'Which use sits highest in the merit order for clean hydrogen?',
        GRADUATE: 'Why might hydrogen trade favor derivatives like ammonia or relocated iron making?',
        PHD: 'What is the indirect climate concern about leaked hydrogen?',
      },
      options: {
        ELEMENTARY: ['Freezing water into ice', 'Painting water green', 'Using electricity to split water into hydrogen and oxygen', 'Boiling water for tea'],
        MIDDLE_SCHOOL: ['From melted snow', 'From sunlight directly', 'From natural gas by steam methane reforming', 'From ocean waves'],
        HIGH_SCHOOL: ['Hydrogen turns solid at room temperature', 'It needs no insulation', 'It must be cooled to about minus 253 degrees Celsius, which uses a lot of energy', 'Liquid hydrogen is heavier than water'],
        UNDERGRADUATE: ['Heating homes', 'Fueling small cars', 'Replacing existing gray hydrogen in ammonia and refining', 'Powering phones'],
        GRADUATE: ['Hydrogen gas is cheap to ship long distances', 'Ammonia never needs ports', 'Hydrogen gas is costly to ship, so denser derivatives or products are easier to move', 'Trade rules ban hydrogen gas'],
        PHD: ['It directly blocks sunlight', 'It turns into carbon dioxide', 'It extends the atmospheric lifetime of methane', 'It destroys all clouds'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Electrolysis sends electricity through water and splits it into hydrogen gas and oxygen gas.',
        MIDDLE_SCHOOL: 'Most hydrogen today comes from natural gas through steam methane reforming, which releases carbon dioxide.',
        HIGH_SCHOOL: 'Cooling to about minus 253 degrees Celsius takes a large share of the energy in the hydrogen and needs heavily insulated tanks.',
        UNDERGRADUATE: 'Replacing gray hydrogen where demand already exists cuts emissions without new end-use equipment.',
        GRADUATE: 'Moving denser derivatives or energy-intensive products like iron can be cheaper than shipping hydrogen gas.',
        PHD: 'Hydrogen reacts with the same molecules that break down methane, so leaks let methane linger longer.',
      },
    },
    {
      id: 'rh2q4',
      question: {
        ELEMENTARY: 'Why is hydrogen tricky to keep in a tank?',
        MIDDLE_SCHOOL: 'For which job do experts think hydrogen is most useful?',
        HIGH_SCHOOL: 'Why is using electricity directly often better than converting it to hydrogen?',
        UNDERGRADUATE: 'What is the levelized cost of hydrogen?',
        GRADUATE: 'What is the chicken-and-egg problem in hydrogen markets?',
        PHD: 'Which reaction dominates activation losses in water electrolysis?',
      },
      options: {
        ELEMENTARY: ['It is heavy like a rock', 'It is sticky like glue', 'It smells bad', 'It is so tiny and light that it likes to escape'],
        MIDDLE_SCHOOL: ['Charging phones', 'Running toasters', 'Lighting a desk lamp', 'Making steel or powering big ships'],
        HIGH_SCHOOL: ['Electricity is always dirtier', 'Hydrogen has no energy', 'Fuel cells never work', 'Each conversion step loses energy, so direct use is usually more efficient'],
        UNDERGRADUATE: ['The price of a hydrogen balloon', 'The cost of one electrolyzer stack', 'The tax on hydrogen fuel', 'Lifetime production cost divided by total hydrogen produced'],
        GRADUATE: ['A food safety rule', 'A pipeline material defect', 'A type of carbon credit', 'Supply, demand and infrastructure each waiting for the others to commit first'],
        PHD: ['The hydrogen evolution reaction', 'Ammonia cracking', 'Methane combustion', 'The oxygen evolution reaction at the anode'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Hydrogen is the smallest, lightest atom, so it must be squeezed tight or kept very cold, and it can sneak out.',
        MIDDLE_SCHOOL: 'Because energy is lost at each step, hydrogen fits best where batteries and plugs struggle, like steelmaking and shipping.',
        HIGH_SCHOOL: 'Making, storing and reconverting hydrogen each lose energy, so batteries and heat pumps usually do the same job with less.',
        UNDERGRADUATE: 'Levelized cost spreads capital, electricity and operating costs over all the hydrogen produced.',
        GRADUATE: 'Coordination tools like hubs, contracts and regulated infrastructure aim to break this mutual waiting.',
        PHD: 'The oxygen evolution reaction is kinetically slow and accounts for much of the overpotential.',
      },
    },
    {
      id: 'rh2q5',
      question: {
        ELEMENTARY: 'What is the only thing that comes out of a hydrogen fuel cell bus tailpipe?',
        MIDDLE_SCHOOL: 'How can hydrogen help store extra wind and solar power?',
        HIGH_SCHOOL: 'What does a catalyst do in a fuel cell?',
        UNDERGRADUATE: 'Why is hydrogen storage most compelling for long durations?',
        GRADUATE: 'What is a hydrogen hub?',
        PHD: 'Why can coarse temporal resolution bias hydrogen system models?',
      },
      options: {
        ELEMENTARY: ['Water', 'Smoke', 'Glitter', 'Oil'],
        MIDDLE_SCHOOL: ['Extra electricity runs electrolyzers, and the hydrogen is stored for calm or cloudy days', 'Hydrogen makes the wind blow harder', 'Hydrogen cools solar panels', 'Hydrogen is painted on turbines'],
        HIGH_SCHOOL: ['Speeds up the reaction without being used up', 'Stores the hydrogen', 'Cools the exhaust', 'Blocks electrons from the circuit'],
        UNDERGRADUATE: ['Its low round-trip efficiency matters less than the low cost of storing large amounts of energy over time', 'It is more efficient than batteries', 'It never loses any energy', 'Batteries cannot store energy at all'],
        GRADUATE: ['A cluster that co-locates production, storage and multiple users to share infrastructure', 'A single filling station', 'A hydrogen balloon festival', 'A regulatory agency'],
        PHD: ['It can understate the value of long-duration storage across multi-day and seasonal patterns', 'It always overstates storage value', 'It has no effect on results', 'It only affects catalyst chemistry'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fuel cell vehicles release only water, so the air around them stays clean.',
        MIDDLE_SCHOOL: 'Surplus renewable electricity can be turned into hydrogen and stored for days, weeks or months.',
        HIGH_SCHOOL: 'Catalysts such as platinum speed up splitting hydrogen into protons and electrons.',
        UNDERGRADUATE: 'For seasonal storage, cheap bulk storage like caverns can outweigh hydrogen conversion losses.',
        GRADUATE: 'Hubs concentrate supply and demand so shared pipelines and storage are used efficiently.',
        PHD: 'Representative days can miss long renewable lulls, which are exactly when long-duration storage is valuable.',
      },
    },
  ],
}

export default expansion
