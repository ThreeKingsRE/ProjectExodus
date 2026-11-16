import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'desalination',
  lessons: [
    {
      id: 'ws-desal-1',
      title: 'Fresh from Salt',
      content: {
        ELEMENTARY: `
<h2>Turning Salty Sea Water Into Drinking Water</h2>
<p>Most of the water on Earth is in the oceans, but we cannot drink it. Ocean water is too salty! If people drink salty sea water, it makes them even more thirsty. So how do some towns near the sea get drinking water from the ocean? They use something called <em>desalination</em>.</p>

<h3>What Does Desalination Mean?</h3>
<p>The word "desalination" means taking the salt out. A desalination plant is a big building near the sea. It pulls in ocean water, takes out the salt, and sends fresh water through pipes to homes and schools.</p>
<ul>
<li><strong>Desalination:</strong> taking salt out of sea water so people can drink it</li>
<li><strong>Salt water:</strong> water from the ocean that has lots of salt mixed in</li>
<li><strong>Fresh water:</strong> water with only a tiny bit of salt, like the water from your tap</li>
<li><strong>Brine:</strong> the extra-salty water left over after the fresh water is taken out</li>
<li><strong>Treatment plant:</strong> a big building where water is cleaned so it is safe to drink</li>
</ul>

<h3>Two Big Ideas</h3>
<p>There are two main ways to take salt out of water:</p>
<ol>
<li><strong>Heating:</strong> When salty water is heated, the water turns into steam and floats up. The salt stays behind! When the steam cools, it turns back into fresh water.</li>
<li><strong>Squeezing through a super filter:</strong> Strong pumps push sea water against a very special sheet with holes so tiny that water can squeeze through but salt cannot.</li>
</ol>

<h3>What About the Leftover Salt?</h3>
<p>After the fresh water is taken out, the plant has extra-salty water left over called brine. People must be careful with brine, because too much salt in one spot can hurt sea animals and plants. Engineers mix it gently back into the ocean or find other safe ways to handle it.</p>

<h3>Try It at Home</h3>
<p>With a grown-up, mix a spoonful of salt into a bowl of warm water. Put a small empty cup in the middle and cover the bowl with plastic wrap. Place a pebble on top so the wrap dips over the cup. Leave it in the sun. Water will rise as invisible vapor, stick to the wrap, and drip into the cup. Taste a drop from the cup: it is not salty! The sun did desalination for you.</p>

<h3>Think About It</h3>
<p>Desalination uses a lot of energy, so saving the fresh water we already have is still very important. Every drop counts!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Desalination Plants Remove Salt From Seawater</h2>
<p>About 97 percent of Earth's water is salty ocean water. In dry coastal places, where rivers and underground water are not enough, communities build desalination plants to make fresh water from the sea. These plants are big water treatment factories, and they follow a series of steps.</p>

<h3>The Steps Inside a Plant</h3>
<ol>
<li><strong>Intake:</strong> Seawater is drawn in through pipes or wells near the shore, with screens that keep out fish and seaweed.</li>
<li><strong>Pretreatment:</strong> Sand, tiny particles and living things are filtered out so they do not clog the equipment.</li>
<li><strong>Salt removal:</strong> The main step, using either membranes or heat.</li>
<li><strong>Post-treatment:</strong> Small amounts of minerals are added back and the water is disinfected so it is safe and does not corrode pipes.</li>
<li><strong>Brine handling:</strong> The leftover salty water is safely returned to the sea or treated another way.</li>
</ol>

<h3>Membrane Method: Reverse Osmosis</h3>
<p>Osmosis is when water naturally moves through a thin barrier from less salty water toward saltier water. Reverse osmosis does the opposite. Powerful pumps push seawater so hard against a special membrane that fresh water squeezes through and the salt stays behind. This is the most common method in new plants today.</p>

<h3>Thermal Method: Using Heat</h3>
<p>Thermal plants heat seawater until it evaporates. The vapor is pure water, so when it is cooled and condensed it becomes fresh water. Thermal plants are common in places with cheap fuel or waste heat from power plants.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Reverse osmosis:</strong> using pressure to push water through a membrane that blocks salt</li>
<li><strong>Membrane:</strong> a very thin sheet that lets water molecules through but stops salt</li>
<li><strong>Distillation:</strong> boiling water and collecting the steam to separate it from salt</li>
<li><strong>Pretreatment:</strong> cleaning seawater before the main salt removal step</li>
<li><strong>Brine:</strong> the concentrated salty water left after fresh water is removed</li>
<li><strong>Intake:</strong> the structure that brings seawater into the plant</li>
</ul>

<h3>Comparing the Two Methods</h3>
<table>
<thead><tr><th>Feature</th><th>Reverse osmosis</th><th>Thermal</th></tr></thead>
<tbody>
<tr><td>Main energy used</td><td>Electricity for pumps</td><td>Heat to evaporate water</td></tr>
<tr><td>Energy needs</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Where common</td><td>Most new plants worldwide</td><td>Places with cheap fuel or waste heat</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Desalination gives coastal communities a water source that does not depend on rain. But it costs more than using rivers or groundwater, uses a lot of energy, and produces brine that must be handled carefully. That is why most communities use it alongside water conservation and recycling, not instead of them.</p>
`,
        HIGH_SCHOOL: `
<h2>Desalination: Reverse Osmosis, Thermal Processes and Energy</h2>
<p>Desalination separates dissolved salts from water to produce fresh water. Seawater typically contains around 35 grams of dissolved salts per liter, while drinking water must contain only a tiny fraction of that. Removing so much salt is physically demanding, which explains why desalination costs more and uses more energy than most other water sources. This lesson explains how the main processes work and where the energy goes.</p>

<h3>Osmosis and Osmotic Pressure</h3>
<p>When pure water and salt water are separated by a semi-permeable membrane, water flows naturally toward the salty side. The pressure needed to stop that flow is the <em>osmotic pressure</em>, and it rises with salt concentration. In reverse osmosis, pumps apply pressure higher than the osmotic pressure, forcing water through the membrane in the opposite direction. Seawater plants run at high pressures, many times the pressure in a car tire, while brackish groundwater, which is far less salty, needs much lower pressure.</p>
<ul>
<li><strong>Osmotic pressure:</strong> the pressure that must be overcome to push water out of a salt solution through a membrane</li>
<li><strong>Semi-permeable membrane:</strong> a barrier that allows water to pass while rejecting most dissolved salts</li>
<li><strong>Permeate:</strong> the fresh water that passes through a reverse osmosis membrane</li>
<li><strong>Recovery rate:</strong> the share of incoming feed water that becomes fresh water</li>
<li><strong>Brackish water:</strong> water saltier than fresh water but much less salty than seawater</li>
<li><strong>Fouling:</strong> the build-up of particles, minerals or microbes on a membrane that reduces its performance</li>
</ul>

<h3>Thermal Desalination</h3>
<p>Thermal methods mimic the natural water cycle. In <em>multi-stage flash</em> plants, heated seawater flows into chambers at progressively lower pressures, where part of it boils instantly. In <em>multi-effect distillation</em>, vapor from one stage heats the next, reusing energy several times. Thermal plants tolerate poor feed water quality and have long histories in the Gulf region, often paired with power plants that supply waste heat.</p>

<h3>Comparing Processes</h3>
<table>
<thead><tr><th>Process</th><th>Energy form</th><th>Relative energy use</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Seawater reverse osmosis</td><td>Electricity</td><td>Moderate</td><td>Dominant choice for new plants</td></tr>
<tr><td>Brackish reverse osmosis</td><td>Electricity</td><td>Low</td><td>Higher recovery; inland brine disposal is a challenge</td></tr>
<tr><td>Multi-stage flash</td><td>Heat plus some electricity</td><td>High</td><td>Robust; usually co-located with power plants</td></tr>
<tr><td>Multi-effect distillation</td><td>Heat plus some electricity</td><td>High but lower than flash</td><td>Reuses vapor heat across effects</td></tr>
<tr><td>Electrodialysis</td><td>Electricity</td><td>Low for brackish water</td><td>Uses electric fields to move ions; unsuited to seawater</td></tr>
</tbody>
</table>

<h3>Why Energy Matters</h3>
<p>Energy is often the largest operating cost of a desalination plant. If that energy comes from fossil fuels, desalination adds greenhouse gas emissions. Modern reverse osmosis plants have cut energy use dramatically by using better membranes and devices that recover pressure from the brine stream before it is discharged.</p>

<h3>Environmental Trade-Offs</h3>
<ol>
<li><strong>Intakes:</strong> open ocean intakes can trap fish and kill plankton; subsurface wells reduce this.</li>
<li><strong>Brine:</strong> concentrated brine is denser than seawater and can sink, harming seafloor life unless diffused well.</li>
<li><strong>Chemicals:</strong> pretreatment and cleaning chemicals must be managed in the discharge.</li>
<li><strong>Emissions:</strong> pairing plants with renewable electricity reduces the climate impact.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Desalination Plant Design, Energy Optimization and Brine Management</h2>
<p>A seawater desalination plant is a treatment train in which each unit protects the next. Poor pretreatment shortens membrane life; poor energy design drives up the cost of every cubic meter; poor brine management creates permitting and ecological problems. This lesson walks through the design of a reverse osmosis plant as a system and introduces the quantities engineers use to optimize it.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Specific energy consumption:</strong> the electricity used to produce one cubic meter of fresh water, typically in kilowatt-hours per cubic meter</li>
<li><strong>Thermodynamic minimum energy:</strong> the theoretical least work needed to separate fresh water from a salt solution at a given recovery</li>
<li><strong>Energy recovery device:</strong> equipment such as a pressure exchanger that transfers pressure from the outgoing brine to incoming feed water</li>
<li><strong>Salt rejection:</strong> the percentage of dissolved salt that a membrane prevents from passing into the permeate</li>
<li><strong>Concentration factor:</strong> how many times saltier the brine is than the feed, set mainly by recovery</li>
<li><strong>Remineralization:</strong> adding calcium and alkalinity to permeate so it is stable, less corrosive and palatable</li>
</ul>

<h3>The Treatment Train</h3>
<table>
<thead><tr><th>Stage</th><th>Purpose</th><th>Typical technologies</th></tr></thead>
<tbody>
<tr><td>Intake</td><td>Draw seawater with minimal marine harm</td><td>Open intakes with screens, beach wells, infiltration galleries</td></tr>
<tr><td>Pretreatment</td><td>Remove particles, organics and microbes that foul membranes</td><td>Coagulation, media filters, ultrafiltration, cartridge filters</td></tr>
<tr><td>Reverse osmosis</td><td>Separate salts from water</td><td>Spiral-wound thin-film composite membranes in pressure vessels</td></tr>
<tr><td>Energy recovery</td><td>Recapture brine pressure</td><td>Isobaric pressure exchangers, turbochargers</td></tr>
<tr><td>Post-treatment</td><td>Stabilize and disinfect product water</td><td>Lime or calcite contact, carbon dioxide dosing, chlorination</td></tr>
<tr><td>Brine discharge</td><td>Return concentrate safely</td><td>Diffuser outfalls, blending with other discharges</td></tr>
</tbody>
</table>

<h3>Energy: Where the Kilowatt-Hours Go</h3>
<p>The high-pressure pump dominates the energy budget. The required pressure rises with feed salinity and with recovery, because the salt left behind makes the remaining water progressively saltier. Higher recovery therefore produces more water per unit of intake and pretreatment, but raises pumping pressure and brine concentration. Designers seek the recovery that minimizes total cost, which for seawater usually lands in a moderate range of roughly 40 to 50 percent. Energy recovery devices transformed the economics of reverse osmosis: isobaric pressure exchangers return most of the brine's pressure energy to the feed, and modern plants operate within a few multiples of the thermodynamic minimum, leaving limited room for further gains from the separation step alone.</p>

<h3>Water Quality Details</h3>
<p>Seawater membranes reject most salts very well, but some constituents, notably boron, pass more readily and may require a second pass or pH adjustment for irrigation or drinking standards. Permeate is very low in minerals and slightly aggressive toward pipes, so remineralization is essential before the water enters a distribution network.</p>

<h3>Brine Management Options</h3>
<p>Coastal plants usually discharge brine through outfalls equipped with diffusers that mix it rapidly to near-ambient salinity. Inland brackish plants face harder choices: evaporation ponds need land and suit arid climates, deep well injection requires suitable geology, and discharge to sewers is limited by treatment plant tolerance. Zero liquid discharge systems evaporate and crystallize brine into solids but use large amounts of energy.</p>

<h3>Design Checklist</h3>
<ol>
<li>Characterize feed water, including salinity, temperature, organics and seasonal algal blooms.</li>
<li>Select an intake that balances marine protection, cost and feasibility.</li>
<li>Design pretreatment to keep fouling indicators within membrane supplier limits.</li>
<li>Choose recovery and membrane arrangement to minimize lifetime cost.</li>
<li>Include energy recovery and efficient, variable-speed pumping.</li>
<li>Model brine dilution and confirm compliance with discharge limits.</li>
</ol>
`,
        GRADUATE: `
<h2>Desalination Policy, Environmental Impacts and Supply Integration</h2>
<p>Desalination offers something rare in water management: a supply largely independent of rainfall. That reliability makes it attractive to drought-prone coastal regions, but it comes with high capital costs, energy demand and environmental concerns. Graduate-level analysis treats desalination not as an engineering project alone but as a choice within a water supply portfolio, governed by environmental law, utility finance and public acceptance.</p>

<h3>Key Policy Concepts</h3>
<ul>
<li><strong>Climate-independent supply:</strong> a water source whose yield does not depend on precipitation, such as seawater desalination or advanced reuse</li>
<li><strong>Portfolio approach:</strong> planning a mix of conservation, reuse, storage and new supply rather than relying on one source</li>
<li><strong>Take-or-pay contract:</strong> an agreement in which a utility pays for contracted water whether or not it is used</li>
<li><strong>Environmental impact assessment:</strong> a formal study of a project's likely effects on ecosystems and communities before approval</li>
<li><strong>Least-cost planning:</strong> comparing supply and demand options on lifetime cost per unit of reliable water</li>
<li><strong>Social license:</strong> the ongoing acceptance of a project by affected communities and stakeholders</li>
</ul>

<h3>Environmental Impacts and Their Regulation</h3>
<table>
<thead><tr><th>Impact</th><th>Mechanism</th><th>Mitigation and regulatory tools</th></tr></thead>
<tbody>
<tr><td>Impingement and entrainment</td><td>Organisms trapped on screens or drawn through the plant</td><td>Subsurface intakes, low-velocity screens, intake siting rules</td></tr>
<tr><td>Brine discharge</td><td>Dense, saline plumes affecting seafloor communities</td><td>Diffusers, mixing zone limits, ecological monitoring</td></tr>
<tr><td>Chemical residues</td><td>Antiscalants, coagulants and cleaning agents in effluent</td><td>Discharge permits, treatment of cleaning wastes</td></tr>
<tr><td>Greenhouse gas emissions</td><td>Electricity from fossil sources</td><td>Renewable power purchase agreements, efficiency standards</td></tr>
<tr><td>Coastal land use</td><td>Large facilities on valuable shoreline</td><td>Siting reviews, co-location with existing industrial sites</td></tr>
</tbody>
</table>

<h3>The Economics of Insurance</h3>
<p>Desalination functions partly as drought insurance. Its value is highest in dry years and lowest in wet ones, yet its capital costs are fixed. Several regions have built large plants during severe droughts and then run them at low output or placed them on standby when rains returned, while customers continued to pay for the capital. Whether this represents prudent insurance or over-investment depends on how planners valued reliability, how quickly demand-side measures could have been scaled, and how contracts allocated risk between the utility and private operators.</p>

<h3>Integration Strategies</h3>
<ol>
<li><strong>Staged capacity:</strong> building modular plants that can expand as demand or drought risk grows.</li>
<li><strong>Conjunctive operation:</strong> using desalinated water to rest groundwater or reservoirs in wet years and banking supplies.</li>
<li><strong>Flexible operation:</strong> running harder when renewable electricity is abundant and storing product water.</li>
<li><strong>Regional sharing:</strong> connecting networks so one plant serves several utilities and reduces stranded risk.</li>
<li><strong>Demand first:</strong> exhausting cheaper conservation and reuse before committing to new capacity.</li>
</ol>

<h3>Equity and Governance</h3>
<p>Because desalinated water is expensive, its costs flow into tariffs. Planners must consider how rate increases affect low-income households, and whether communities near intake and outfall sites bear disproportionate burdens. Transparent decision processes, independent review of demand forecasts and genuine public participation help build the social license that large infrastructure requires.</p>

<h3>Evaluation Framework</h3>
<ul>
<li>Is the need demonstrated after accounting for conservation and reuse potential?</li>
<li>What is the full lifetime cost per unit of reliable water, including standby years?</li>
<li>How are environmental impacts avoided, minimized and monitored?</li>
<li>Who bears financial risk if demand or rainfall differs from forecasts?</li>
<li>How will energy be supplied, and what are the resulting emissions?</li>
</ul>
`,
        PHD: `
<h2>Research Frontiers: Novel Membranes, Renewable Coupling and Zero Liquid Discharge</h2>
<p>Desalination research is shaped by a paradox. Seawater reverse osmosis already operates relatively close to its thermodynamic limit for the separation step, yet total system costs, environmental impacts and brine management remain major barriers. Research frontiers therefore span materials science, process engineering, energy systems and resource recovery. This lesson surveys three of them and the methodological debates surrounding each.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Permeability-selectivity trade-off:</strong> the tendency for membranes that pass water faster to also pass more salt</li>
<li><strong>Zero liquid discharge:</strong> treatment that recovers nearly all water and leaves only solid residues, with no liquid waste stream</li>
<li><strong>Minimum liquid discharge:</strong> a less energy-intensive goal that greatly reduces, but does not eliminate, brine volume</li>
<li><strong>Membrane distillation:</strong> a thermally driven process in which vapor crosses a hydrophobic membrane, tolerant of very high salinity</li>
<li><strong>Brine valorization:</strong> recovering useful products such as salts, minerals or chemicals from concentrated brine</li>
<li><strong>Variable operation:</strong> running desalination at changing output to follow fluctuating renewable energy supply</li>
</ul>

<h3>Novel Membranes</h3>
<p>Thin-film composite polyamide membranes dominate the market. Candidate successors include graphene and graphene oxide, carbon nanotubes, biomimetic membranes incorporating aquaporin water channels, and other nanostructured materials. Laboratory results have sometimes reported very high permeability, but analyses have argued that, for seawater, raising permeability yields diminishing returns because concentration polarization and the osmotic pressure of the brine set a floor on pressure. Many researchers therefore argue that improvements in selectivity for specific solutes such as boron, fouling resistance, chlorine tolerance and manufacturability at scale may matter more than raw flux.</p>

<h3>Renewable Energy Integration</h3>
<p>Coupling desalination with solar and wind can cut emissions, but variability poses engineering challenges. Reverse osmosis membranes and pretreatment prefer steady operation; frequent ramping can affect fouling and component wear. Research explores hybrid approaches: grid-connected plants that act as flexible loads, battery or water storage to smooth operation, and small off-grid systems for remote communities. Modeling studies co-optimize plant capacity, storage and renewable generation, raising the question of how much oversizing is worth the flexibility.</p>

<h3>Zero Liquid Discharge and Resource Recovery</h3>
<table>
<thead><tr><th>Approach</th><th>Principle</th><th>Main barrier</th></tr></thead>
<tbody>
<tr><td>Brine concentrators and crystallizers</td><td>Thermal evaporation to solids</td><td>Very high energy and capital cost</td></tr>
<tr><td>High-pressure and osmotically assisted RO</td><td>Push membranes beyond conventional salinity limits</td><td>Membrane and module durability</td></tr>
<tr><td>Membrane distillation</td><td>Vapor transport driven by temperature difference</td><td>Thermal efficiency, wetting of membranes</td></tr>
<tr><td>Selective mineral recovery</td><td>Extract magnesium, lithium or other valuable ions</td><td>Low concentrations and market uncertainty</td></tr>
</tbody>
</table>

<h3>Methodological Debates</h3>
<ul>
<li>Laboratory membrane tests often use simple salt solutions and short durations, which may not predict performance with real seawater and long-term fouling.</li>
<li>Techno-economic analyses depend heavily on assumed energy prices, plant scale and discount rates, making cross-study comparison difficult.</li>
<li>Ecological studies of brine discharge are often site-specific and short in duration, limiting general conclusions about long-term effects.</li>
<li>Life-cycle assessments vary in whether they include construction, chemicals and end-of-life membrane disposal.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Fouling-resistant and chlorine-tolerant membranes manufacturable at commercial scale.</li>
<li>Energy-efficient pathways from minimum to zero liquid discharge for inland plants.</li>
<li>Control strategies that allow flexible operation without accelerating membrane degradation.</li>
<li>Selective separation processes that make brine mining economically viable.</li>
<li>Long-term ecological monitoring that links discharge characteristics to marine community responses.</li>
<li>Standardized testing and reporting protocols for emerging membrane materials.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wdslq1',
      question: {
        ELEMENTARY: 'What does desalination take out of sea water?',
        MIDDLE_SCHOOL: 'What are the two main ways desalination plants remove salt?',
        HIGH_SCHOOL: 'In reverse osmosis, what must the applied pressure exceed?',
        UNDERGRADUATE: 'What does an energy recovery device do in a reverse osmosis plant?',
        GRADUATE: 'What makes seawater desalination a climate-independent supply?',
        PHD: 'What is the permeability-selectivity trade-off?',
      },
      options: {
        ELEMENTARY: ['Salt', 'Fish', 'Sand', 'Color'],
        MIDDLE_SCHOOL: ['Membranes (reverse osmosis) and heat (thermal)', 'Freezing and stirring', 'Mixing and settling', 'Magnets and sunlight only'],
        HIGH_SCHOOL: ['The osmotic pressure of the salt water', 'The air pressure inside the building', 'The weight of the membrane', 'The pressure of rain on the ocean'],
        UNDERGRADUATE: ['Transfers pressure from the outgoing brine to incoming feed water', 'Generates solar power for the plant', 'Stores fresh water for emergencies', 'Adds minerals back to the water'],
        GRADUATE: ['Its yield does not depend on precipitation', 'It never needs any energy', 'It produces no waste at all', 'It is always the cheapest option'],
        PHD: ['Membranes that pass water faster tend to pass more salt as well', 'Faster membranes always reject more salt', 'Selectivity has no relation to permeability', 'Permeability only matters for thermal plants'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Desalination removes salt from ocean water so people can drink it.',
        MIDDLE_SCHOOL: 'Most plants use reverse osmosis membranes or thermal processes that evaporate water.',
        HIGH_SCHOOL: 'Pumps must push harder than the osmotic pressure to force water through the membrane away from the salt.',
        UNDERGRADUATE: 'Pressure exchangers return most of the brine pressure energy to the feed, greatly cutting electricity use.',
        GRADUATE: 'Seawater is available whether or not it rains, which makes desalination valuable in droughts.',
        PHD: 'Higher water permeability usually comes with lower salt rejection, a key constraint in membrane design.',
      },
    },
    {
      id: 'wdslq2',
      question: {
        ELEMENTARY: 'What is the extra-salty water left over called?',
        MIDDLE_SCHOOL: 'Why are minerals added back to desalinated water?',
        HIGH_SCHOOL: 'Why can brine harm seafloor life if it is not mixed well?',
        UNDERGRADUATE: 'Why does seawater RO usually operate at a moderate recovery rather than a very high one?',
        GRADUATE: 'What is a take-or-pay contract?',
        PHD: 'Why do some analyses argue that much higher membrane permeability gives limited benefit for seawater?',
      },
      options: {
        ELEMENTARY: ['Rain', 'Brine', 'Steam', 'Juice'],
        MIDDLE_SCHOOL: ['To make it salty again', 'So it is safe and does not corrode pipes', 'To change its color', 'To make it heavier'],
        HIGH_SCHOOL: ['It is lighter and floats away', 'It is denser and can sink to the seafloor', 'It is colder than ice', 'It contains no salt'],
        UNDERGRADUATE: ['Higher recovery reduces pressure needs', 'Higher recovery raises pressure and brine concentration', 'Recovery has no effect on energy', 'Membranes cannot exceed 10 percent recovery'],
        GRADUATE: ['A contract where the utility pays only for water used', 'A contract where the utility pays for contracted water even if unused', 'A ban on private operators', 'A tax on brine'],
        PHD: ['Permeability does not affect flux at all', 'Concentration polarization and brine osmotic pressure set a floor on pressure', 'Seawater has no osmotic pressure', 'High-permeability membranes cannot be made'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Brine is the very salty water left after fresh water is taken out.',
        MIDDLE_SCHOOL: 'Water with almost no minerals can corrode pipes, so minerals are added and the water is disinfected.',
        HIGH_SCHOOL: 'Brine is denser than seawater and can form salty layers on the seabed unless diffused.',
        UNDERGRADUATE: 'As recovery rises, the remaining water gets saltier, so pressure and brine salinity increase.',
        GRADUATE: 'Take-or-pay contracts shift demand risk onto the utility, which pays even in wet years.',
        PHD: 'Because the required pressure is bounded by osmotic effects, faster membranes save relatively little energy.',
      },
    },
    {
      id: 'wdslq3',
      question: {
        ELEMENTARY: 'In the sun experiment, how does the fresh water get into the cup?',
        MIDDLE_SCHOOL: 'What happens during pretreatment?',
        HIGH_SCHOOL: 'Which process uses electric fields to move ions and suits brackish water?',
        UNDERGRADUATE: 'Which constituent often passes seawater membranes more readily and may need a second pass?',
        GRADUATE: 'Which integration strategy reduces the risk of building too much capacity at once?',
        PHD: 'What distinguishes minimum liquid discharge from zero liquid discharge?',
      },
      options: {
        ELEMENTARY: ['The salt jumps into the cup', 'Fish carry it there', 'Water rises as vapor, then drips from the wrap', 'The wrap makes new water'],
        MIDDLE_SCHOOL: ['Salt is added to the water', 'The water is heated to boiling', 'Sand, particles and living things are filtered out', 'Brine is mixed back in'],
        HIGH_SCHOOL: ['Multi-stage flash', 'Reverse osmosis', 'Electrodialysis', 'Distillation'],
        UNDERGRADUATE: ['Sodium', 'Chloride', 'Boron', 'Oxygen'],
        GRADUATE: ['Building one very large plant immediately', 'Ignoring demand forecasts', 'Staged, modular capacity', 'Banning conservation programs'],
        PHD: ['They are identical', 'Minimum liquid discharge produces more brine than standard RO', 'Minimum liquid discharge greatly reduces brine volume without eliminating it', 'Zero liquid discharge uses less energy'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The sun turns water into vapor, which leaves the salt behind and drips into the cup as fresh water.',
        MIDDLE_SCHOOL: 'Pretreatment cleans the seawater so it does not clog the salt removal equipment.',
        HIGH_SCHOOL: 'Electrodialysis moves ions with electric fields and works well for less salty brackish water.',
        UNDERGRADUATE: 'Boron is rejected less effectively than most salts, so plants may add a second pass or adjust pH.',
        GRADUATE: 'Modular plants can grow as needed, lowering the chance of idle capacity.',
        PHD: 'Minimum liquid discharge trades some residual brine for much lower energy use than full zero discharge.',
      },
    },
    {
      id: 'wdslq4',
      question: {
        ELEMENTARY: 'Why is saving fresh water still important if we have desalination?',
        MIDDLE_SCHOOL: 'What is the most common desalination method in new plants?',
        HIGH_SCHOOL: 'Why do subsurface intakes help marine life?',
        UNDERGRADUATE: 'Which piece of equipment dominates the energy budget of a seawater RO plant?',
        GRADUATE: 'Why have some desalination plants been criticized after droughts ended?',
        PHD: 'What is a key challenge of running RO plants on variable renewable power?',
      },
      options: {
        ELEMENTARY: ['Desalination uses a lot of energy', 'Fresh water is not needed', 'Oceans are running out of salt', 'Desalination makes too much water'],
        MIDDLE_SCHOOL: ['Freezing', 'Thermal distillation in every case', 'Settling ponds', 'Reverse osmosis'],
        HIGH_SCHOOL: ['They add salt to the sea', 'They heat the ocean', 'They make plants louder', 'They reduce fish and plankton being trapped'],
        UNDERGRADUATE: ['The chlorination tank', 'The office lighting', 'The cartridge filter housing', 'The high-pressure pump'],
        GRADUATE: ['They produced too little brine', 'They had no capital costs', 'They were too small to measure', 'They ran at low output while customers kept paying capital costs'],
        PHD: ['Renewables produce too much steady power', 'Membranes require no pressure', 'Variable power never affects plants', 'Frequent ramping can worsen fouling and wear'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Making fresh water from the sea takes lots of energy, so saving water still matters.',
        MIDDLE_SCHOOL: 'Reverse osmosis uses less energy than thermal methods and is the usual choice today.',
        HIGH_SCHOOL: 'Drawing water through sand and wells keeps fish and plankton from being trapped or pulled in.',
        UNDERGRADUATE: 'The high-pressure pump supplies the pressure needed to overcome osmosis and uses most of the energy.',
        GRADUATE: 'Plants built for droughts may sit at low output in wet years, raising questions about investment.',
        PHD: 'RO prefers steady operation; frequent changes can accelerate fouling and component wear.',
      },
    },
    {
      id: 'wdslq5',
      question: {
        ELEMENTARY: 'Why can we not drink ocean water?',
        MIDDLE_SCHOOL: 'What is osmosis?',
        HIGH_SCHOOL: 'What is fouling?',
        UNDERGRADUATE: 'What is the purpose of remineralization?',
        GRADUATE: 'What is a portfolio approach to water supply?',
        PHD: 'What is brine valorization?',
      },
      options: {
        ELEMENTARY: ['It is too salty and makes you more thirsty', 'It is too cold', 'It is too sweet', 'It is too thick'],
        MIDDLE_SCHOOL: ['Water naturally moving through a barrier toward saltier water', 'Salt jumping out of water', 'Water freezing into ice', 'Boiling water at high heat'],
        HIGH_SCHOOL: ['Build-up on membranes that reduces performance', 'A way to add salt', 'A type of fish', 'Painting pipes'],
        UNDERGRADUATE: ['Adding calcium and alkalinity so water is stable and less corrosive', 'Removing all minerals completely', 'Adding seawater back', 'Heating water'],
        GRADUATE: ['Planning a mix of conservation, reuse, storage and new supply', 'Relying on a single source', 'Buying shares in water companies', 'Building only dams'],
        PHD: ['Recovering useful products such as minerals from concentrated brine', 'Dumping brine without treatment', 'Diluting brine with fresh drinking water', 'Measuring brine temperature'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Ocean water has so much salt that drinking it makes your body need even more water.',
        MIDDLE_SCHOOL: 'In osmosis, water moves naturally toward the saltier side; reverse osmosis uses pressure to push it the other way.',
        HIGH_SCHOOL: 'Particles, minerals and microbes collect on membranes and lower their output.',
        UNDERGRADUATE: 'Permeate is very low in minerals, so calcium and alkalinity are added before distribution.',
        GRADUATE: 'Combining options reduces risk and cost compared with relying on one source.',
        PHD: 'Valorization turns brine from a waste into a source of salts, minerals or chemicals.',
      },
    },
  ],
}

export default expansion
