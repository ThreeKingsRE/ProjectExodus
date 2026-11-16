import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'e-waste',
  lessons: [
    {
      id: 'zw-ew-1',
      title: 'Old Electronics: Keeping Devices in Use and Out of the Trash',
      content: {
        ELEMENTARY: `
<h2>Where Do Old Phones Go?</h2>
<p>Do you have an old phone, a broken toy that beeps or a tablet nobody uses anymore? Electronics are anything that runs on batteries or plugs into the wall. When we are done with them, they should never go in the regular trash. Let's follow an old gadget and see where it should go instead!</p>

<h3>What Makes Electronics Special?</h3>
<p>Inside every phone and computer are tiny bits of metal, like copper, silver and even a little gold. These metals came from deep underground, and digging them up is hard work for the Earth. Electronics also have batteries and parts that can be harmful if they get crushed in a garbage truck or leak into the ground.</p>
<ul>
<li><strong>Electronics:</strong> things that use electricity to work, like phones, tablets, game controllers and TVs</li>
<li><strong>E-waste:</strong> old or broken electronics that people do not want anymore</li>
<li><strong>Battery:</strong> a small energy holder inside many gadgets that must be recycled carefully</li>
</ul>

<h3>The Best Choices, In Order</h3>
<p>Here is a helpful order to remember for an old gadget:</p>
<ol>
<li><strong>Keep using it.</strong> Take good care of it with a case and gentle hands.</li>
<li><strong>Fix it.</strong> A cracked screen or a dead battery can often be replaced.</li>
<li><strong>Give it away.</strong> Someone else might love your old tablet or game.</li>
<li><strong>Recycle it.</strong> Take it to a special electronics drop-off so the metals can be saved.</li>
</ol>

<h3>A Gadget Treasure Hunt</h3>
<p>Recycling workers take old electronics apart. They separate the metal, the plastic and the glass. The metals can be melted and used again to make new things. That means less digging in the ground!</p>
<ul>
<li><strong>Recycle:</strong> to break something down so its materials can be made into something new</li>
<li><strong>Metal:</strong> a strong, shiny material like copper or gold that can be melted and reused many times</li>
<li><strong>Drop-off:</strong> a special place where you bring old electronics so they can be recycled safely</li>
</ul>

<h3>What You Can Do</h3>
<ul>
<li>Ask a grown-up where your town collects old electronics.</li>
<li>Never put batteries in the trash can. Keep them in a jar until you can take them to a drop-off.</li>
<li>Keep a cozy case on tablets and phones so they last longer.</li>
</ul>

<h3>Think About It</h3>
<p>How many electronic things are in your home right now? Can you count them? Every one of them will need a good plan for when it is old. You can help your family make that plan!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Why E-Waste Is a Growing Problem</h2>
<p>Every year, people around the world buy huge numbers of new phones, laptops, headphones, TVs and smart gadgets. Many of the old ones end up in drawers, in the trash or shipped far away. Electronic waste, or e-waste, is often described as one of the fastest-growing waste streams in the world. Understanding why, and what we can do about it, starts with the life of a device.</p>

<h3>Why Is There So Much?</h3>
<ul>
<li>We own more electronic devices than ever, including small items like earbuds, smart watches and toys with chips.</li>
<li>Many people replace phones and computers every few years, often while the old ones still work.</li>
<li>Some devices are hard to repair, with glued batteries or no spare parts available.</li>
<li>Software updates may stop for older devices, making them feel outdated.</li>
</ul>

<h3>Key Words</h3>
<ul>
<li><strong>E-waste:</strong> discarded electrical or electronic equipment, from phones to fridges</li>
<li><strong>Lithium-ion battery:</strong> a rechargeable battery common in phones and laptops that can catch fire if crushed or damaged</li>
<li><strong>Refurbish:</strong> to clean, test and repair a used device so it can be sold or used again</li>
<li><strong>Take-back program:</strong> a service where a store or company collects old devices for reuse or recycling</li>
<li><strong>Data wipe:</strong> safely erasing personal information from a device before passing it on</li>
<li><strong>Hibernating devices:</strong> old electronics stored unused in drawers and closets instead of being reused or recycled</li>
</ul>

<h3>What Happens to Old Devices?</h3>
<table>
<thead><tr><th>Path</th><th>What happens</th><th>Good or bad?</th></tr></thead>
<tbody>
<tr><td>Stored in a drawer</td><td>Sits unused for years</td><td>Wastes valuable materials that could be reused</td></tr>
<tr><td>Thrown in the trash</td><td>Goes to a landfill or incinerator</td><td>Risk of fires and toxic leaks; metals are lost</td></tr>
<tr><td>Refurbished and resold</td><td>Gets a second life with a new owner</td><td>Very good: no new device needs to be made</td></tr>
<tr><td>Certified recycling</td><td>Taken apart, materials recovered safely</td><td>Good: metals are saved for new products</td></tr>
</tbody>
</table>

<h3>How to Pass On a Device Safely</h3>
<ol>
<li>Back up your photos and files.</li>
<li>Sign out of accounts and do a factory reset with an adult's help.</li>
<li>Remove memory cards and SIM cards.</li>
<li>Give it to someone, sell it or bring it to a take-back or certified recycling program.</li>
</ol>

<h3>Why It Matters</h3>
<p>Making a new phone uses a lot of energy and mined materials, much of it before you ever turn the phone on. That means the best thing you can do is keep a device working longer. A protective case, a battery replacement and careful charging can add years of life.</p>
`,
        HIGH_SCHOOL: `
<h2>E-Waste: What It Is Made Of, Why It Is Risky and How It Is Recycled</h2>
<p>Electronic waste is unusual because it is both valuable and hazardous. A single circuit board contains dozens of elements, some precious and some toxic, packed tightly together in tiny amounts. This combination makes e-waste attractive to recover yet difficult to process safely. This lesson looks inside devices, at the hazards they pose and at the steps of formal recycling, with a focus on what consumers and designers can do upstream.</p>

<h3>What Is Inside?</h3>
<table>
<thead><tr><th>Material group</th><th>Examples</th><th>Where found</th></tr></thead>
<tbody>
<tr><td>Common metals</td><td>Copper, aluminum, steel</td><td>Wiring, frames, casings, heat sinks</td></tr>
<tr><td>Precious metals</td><td>Gold, silver, palladium</td><td>Connectors and circuit boards</td></tr>
<tr><td>Specialty elements</td><td>Rare earth elements, cobalt, lithium, tantalum</td><td>Magnets, speakers, batteries, capacitors</td></tr>
<tr><td>Hazardous substances</td><td>Lead, mercury, cadmium, some flame retardants</td><td>Older solder, older screens and lamps, plastics</td></tr>
<tr><td>Plastics and glass</td><td>Many polymer types, screen glass</td><td>Cases, displays</td></tr>
</tbody>
</table>

<h3>Why E-Waste Is Hazardous</h3>
<p>When electronics are dumped or burned, hazardous substances can escape. Burning cables to reach copper releases toxic smoke. Acid baths used to dissolve gold off circuit boards create dangerous waste. Lithium-ion batteries can short-circuit and ignite when crushed, and they have caused fires in garbage trucks and recycling facilities.</p>
<ul>
<li><strong>Heavy metals:</strong> dense, toxic metals such as lead, mercury and cadmium that can harm the brain, kidneys and development</li>
<li><strong>Brominated flame retardants:</strong> chemicals added to plastics to slow fires, some of which persist in the environment</li>
<li><strong>Thermal runaway:</strong> an uncontrolled overheating reaction in a damaged battery that can lead to fire</li>
</ul>

<h3>How Formal Recycling Works</h3>
<ol>
<li><strong>Collection:</strong> devices come in through drop-off sites, retailers and take-back programs.</li>
<li><strong>Sorting and testing:</strong> working devices may be refurbished for reuse.</li>
<li><strong>Depollution:</strong> batteries and hazardous parts are removed by hand first.</li>
<li><strong>Shredding and separation:</strong> machines break devices apart; magnets, eddy currents and density separate metals from plastics.</li>
<li><strong>Refining:</strong> specialized smelters recover copper and precious metals from circuit board concentrates.</li>
</ol>

<h3>Key Terms</h3>
<ul>
<li><strong>Depollution:</strong> removing batteries, mercury lamps and other hazardous parts before shredding</li>
<li><strong>Smelting:</strong> melting materials at high temperatures to separate and recover metals</li>
<li><strong>Certified recycler:</strong> a facility audited to meet standards for worker safety, environmental protection and data security</li>
</ul>

<h3>Trade-offs</h3>
<p>Recycling recovers some metals well, especially copper, gold and silver, but many specialty elements are present in such small amounts that recovery is limited. That is why reuse and repair, which keep the whole device working, usually save far more resources than recycling.</p>

<h3>Solutions</h3>
<ul>
<li>Buy durable or refurbished devices and keep them longer.</li>
<li>Support repairable designs with replaceable batteries and available parts.</li>
<li>Never put batteries or devices in household trash or recycling bins.</li>
<li>Use certified recyclers or official take-back programs.</li>
</ul>
`,
        UNDERGRADUATE: `
<h2>E-Waste Flows, Urban Mining and Circular Electronics Design</h2>
<p>Electronics combine short use lives, rising volumes and complex material composition. From a systems perspective, the important questions are how devices move from purchase to final fate, how much value can be recovered at each step and how design choices determine what recovery is even possible. This lesson treats e-waste as a material flow problem and explores how circular design can change outcomes.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Urban mining:</strong> recovering valuable materials from discarded products and infrastructure, treating the built world as a source of raw materials</li>
<li><strong>Ore grade:</strong> the concentration of a valuable element in a material; circuit boards can contain gold at higher concentrations than typical mined ore</li>
<li><strong>In-use stock:</strong> the quantity of material contained in products currently being used by society</li>
<li><strong>Collection rate:</strong> the share of e-waste generated that enters documented formal collection and recycling</li>
<li><strong>Design for disassembly:</strong> designing products so components can be separated quickly and without damage</li>
<li><strong>Embodied impact:</strong> the environmental burden incurred in mining, manufacturing and transport before a product is used</li>
</ul>

<h3>Following the Flows</h3>
<p>A device purchased today can take several paths: continued use, storage in a drawer, resale or donation, formal collection, informal collection or disposal with household waste. Globally, documented formal collection captures only a minority of e-waste generated, with large differences between regions. Storage is a significant and often overlooked delay, since devices in drawers lose resale value while their materials stay idle.</p>

<h3>Why Lifetime Extension Comes First</h3>
<p>For many personal devices, most of the life-cycle carbon footprint arises in manufacturing rather than use, especially for smartphones and laptops. This reverses the usual efficiency logic: replacing an older device with a more efficient one rarely pays back its embodied impact through energy savings. Extending use from, say, three years to five spreads the embodied burden over more years of service, reducing impact per year of use substantially.</p>

<h3>What Recycling Can and Cannot Do</h3>
<table>
<thead><tr><th>Material</th><th>Typical recovery</th><th>Reason</th></tr></thead>
<tbody>
<tr><td>Copper, gold, silver, palladium</td><td>High in modern smelters</td><td>High value, established metallurgy</td></tr>
<tr><td>Steel and aluminum</td><td>High</td><td>Easy to separate magnetically or by eddy current</td></tr>
<tr><td>Cobalt and nickel in batteries</td><td>Moderate to high where batteries are collected</td><td>Dedicated battery recycling processes</td></tr>
<tr><td>Rare earths, gallium, indium, tantalum</td><td>Very low</td><td>Tiny, dispersed amounts lost in slag or dust</td></tr>
<tr><td>Mixed plastics</td><td>Low</td><td>Many polymer types and additives</td></tr>
</tbody>
</table>
<p>The limit is not only technology but dilution: when an element is spread thinly through many products, the energy and cost to concentrate it rises steeply.</p>

<h3>Circular Electronics Design</h3>
<ul>
<li>Modular architectures that allow replacement of batteries, screens and ports.</li>
<li>Standard fasteners instead of adhesives, and documented repair procedures.</li>
<li>Material choices that avoid problematic additives and simplify sorting.</li>
<li>Software support long enough to match hardware lifetime.</li>
<li>Labeling and digital product information that tells recyclers what is inside.</li>
</ul>

<h3>Applied Method: Comparing End-of-Life Options for a Device Fleet</h3>
<ol>
<li>Inventory devices by type, age and condition.</li>
<li>Estimate remaining useful life with repair or upgrade.</li>
<li>Compare embodied impact avoided by reuse against recycling credits.</li>
<li>Ensure secure data sanitization before any transfer.</li>
<li>Select certified downstream partners and track final destinations.</li>
</ol>
`,
        GRADUATE: `
<h2>E-Waste Governance: Producer Responsibility, Informal Sectors and Trade</h2>
<p>E-waste governance must handle a product category that is globally traded, rapidly changing, valuable in parts and hazardous in others. Policymakers face choices about who pays for collection, how to raise reuse rather than only recycling, how to regulate cross-border movements and how to engage the informal workers who handle a large share of e-waste in many countries. This lesson evaluates those choices.</p>

<h3>Key Policy Concepts</h3>
<ul>
<li><strong>Extended producer responsibility:</strong> a policy approach making producers financially or physically responsible for their products after use</li>
<li><strong>Producer responsibility organization:</strong> a collective body that producers fund to organize collection and recycling on their behalf</li>
<li><strong>Basel Convention:</strong> an international treaty that controls transboundary movements of hazardous wastes, including many types of e-waste</li>
<li><strong>Informal sector:</strong> unregistered workers and small enterprises that collect, repair, dismantle and trade e-waste outside formal regulation</li>
<li><strong>Right to repair:</strong> policies requiring access to spare parts, tools and repair information for consumers and independent repairers</li>
<li><strong>Free riders:</strong> producers that sell products without contributing to end-of-life costs, often through online sales or imports</li>
</ul>

<h3>Designing Extended Producer Responsibility</h3>
<p>EPR systems for electronics are now common in many countries, but their design varies. Key choices include whether producers act individually or collectively, how fees are set, whether targets are based on collection or recycling, and whether reuse counts. Collective schemes are administratively efficient but often charge flat fees by weight, which gives individual producers little incentive to design for repair or recyclability. Eco-modulated fees, which vary with design features, aim to restore that incentive, though setting fair and verifiable criteria is difficult.</p>

<h3>The Informal Sector</h3>
<p>In many lower- and middle-income countries, informal workers collect and process much of the e-waste. They provide livelihoods, extensive repair and refurbishment skills, and high reuse rates. They also often lack protective equipment, and crude methods such as open burning and acid leaching harm workers and nearby communities. Policy responses range from prohibition to integration.</p>
<table>
<thead><tr><th>Approach</th><th>Description</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Prohibition and enforcement</td><td>Ban informal activity and require formal channels</td><td>Destroys livelihoods; activity often continues hidden</td></tr>
<tr><td>Formalization</td><td>Register workers, provide training and equipment</td><td>Costs and paperwork may exclude the poorest</td></tr>
<tr><td>Hybrid integration</td><td>Informal collectors and dismantlers feed formal refiners for hazardous steps</td><td>Requires trust, fair pricing and traceability</td></tr>
<tr><td>Cooperative organizing</td><td>Workers form cooperatives that contract with EPR schemes</td><td>Needs sustained support and recognition</td></tr>
</tbody>
</table>

<h3>Trade and the Reuse Grey Zone</h3>
<p>Used electronics are legitimately exported for reuse, but non-working equipment can be mislabeled as reusable to avoid hazardous waste controls. Rules that require testing and documentation help distinguish genuine reuse from disguised dumping. At the same time, overly strict rules can block valuable second-hand markets that make devices affordable.</p>

<h3>Economics</h3>
<p>Recovery economics depend on metal prices, labor costs and the share of low-value material such as plastics and glass. When commodity prices fall, collection of low-value devices becomes unprofitable without producer funding. Stable financing through EPR is therefore central to collecting the whole stream rather than only the valuable fraction.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess collection coverage, including small devices and rural areas.</li>
<li>Check whether incentives reward reuse and design improvement, not just tonnage.</li>
<li>Track downstream destinations and verify safe processing.</li>
<li>Evaluate effects on informal livelihoods and worker health.</li>
<li>Monitor free riding, especially from online sales.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: E-Waste System Dynamics, Recovery Optimization and Justice</h2>
<p>E-waste research spans materials science, industrial ecology, economics, public health and political ecology. Its central challenge is that outcomes emerge from interactions among product design, consumer behavior, markets, regulation and global trade. This lesson surveys methods for modeling these dynamics, the physical limits on recovery, and justice questions that increasingly shape the field.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Dynamic material flow analysis:</strong> modeling stocks and flows of materials over time using sales data and lifetime distributions</li>
<li><strong>Lifetime distribution:</strong> a statistical description, often a Weibull function, of how long products remain in use before discard</li>
<li><strong>System dynamics modeling:</strong> simulation of feedback loops, delays and stocks that drive system behavior over time</li>
<li><strong>Thermodynamic rarity:</strong> a measure of how much exergy would be needed to replace a mineral from a dispersed state, used to value scarce elements</li>
<li><strong>Environmental justice:</strong> the fair distribution of environmental harms and benefits and meaningful participation of affected people in decisions</li>
<li><strong>Waste colonialism:</strong> a critical term for patterns in which wealthier regions displace waste burdens onto poorer regions</li>
</ul>

<h3>Modeling E-Waste Generation and Stocks</h3>
<p>Estimates of e-waste generation usually combine historical sales with assumed lifetime distributions. Results are sensitive to these assumptions, and lifetimes change with technology, fashion and second-hand markets. Hibernation in households adds a delay that shifts when materials become available. System dynamics models add feedbacks, such as how secondary metal prices affect collection, or how repair availability affects replacement rates, enabling scenario exploration rather than single forecasts.</p>

<h3>Recovery Optimization and Its Limits</h3>
<p>Process design aims to maximize recovery of priority elements, but product complexity creates trade-offs. Metallurgical routes are optimized for carrier metals such as copper, and many minor elements dissolve into slag or alloys where they cannot be economically extracted. Research explores pre-processing to concentrate target components, such as separating magnets or specific chips, and selective hydrometallurgical or bio-based leaching. Optimization frameworks increasingly weigh not only mass recovered but criticality, exergy and environmental burden of the recovery process itself.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>How much e-waste trade is legitimate reuse</td><td>Data on functionality and destinations are sparse and definitions vary</td></tr>
<tr><td>Formalization versus support for informal workers</td><td>Health protection and livelihood preservation can conflict</td></tr>
<tr><td>Whether recycling can supply critical materials at scale</td><td>Growing demand, long lifetimes and dispersion limit secondary supply</td></tr>
<tr><td>Weight-based targets as policy metrics</td><td>Mass rewards heavy, low-value items over scarce elements and reuse</td></tr>
</tbody>
</table>

<h3>Justice and Health Research</h3>
<p>Studies near informal processing sites have documented elevated exposure to heavy metals and persistent organic pollutants, with particular concern for children and pregnant people. Research increasingly emphasizes that the burdens are structured by global inequalities in manufacturing, consumption and regulation. Political ecology scholarship also highlights the agency, skill and economic contribution of informal repairers and dismantlers, cautioning against portraying them only as victims. Participatory research designs that involve workers in defining problems and solutions are an important methodological shift.</p>

<h3>Design and Policy Feedbacks</h3>
<p>Repairability rules, software support requirements and eco-modulated fees could alter lifetime distributions and material composition, but their effects are only beginning to be measured. Linking product-level design data to system models is a key frontier, as is assessing whether right-to-repair policies reduce embodied impacts at the population level.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Improved data on lifetimes, hibernation and second-hand flows across regions.</li>
<li>Recovery processes for dispersed critical elements with acceptable environmental burdens.</li>
<li>Metrics that value reuse, criticality and health outcomes, not just mass recycled.</li>
<li>Evaluations of hybrid formal-informal systems for health, income and recovery.</li>
<li>Models linking design regulation to system-wide material demand.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwewq1',
      question: {
        ELEMENTARY: 'Why should we recycle old phones instead of throwing them in the trash?',
        MIDDLE_SCHOOL: 'Why do many people describe e-waste as a fast-growing waste stream?',
        HIGH_SCHOOL: 'Which valuable materials can be found in electronics?',
        UNDERGRADUATE: 'What is urban mining?',
        GRADUATE: 'What is the Basel Convention?',
        PHD: 'What is a key e-waste justice concern?',
      },
      options: {
        ELEMENTARY: ['They are too heavy for the trash can', 'They are boring', 'They have valuable metals inside that can be used again', 'Trash cans do not like phones'],
        MIDDLE_SCHOOL: ['People are buying fewer gadgets', 'All electronics last forever', 'We own more devices and replace them often', 'Electronics are made of paper'],
        HIGH_SCHOOL: ['Only plastic', 'Only glass', 'Gold, silver, copper and rare earth elements', 'Nothing valuable'],
        UNDERGRADUATE: ['Digging new mines inside cities', 'A video game about cities', 'Recovering valuable materials from discarded products and infrastructure', 'Building houses from ore'],
        GRADUATE: ['A recycling machine', 'A phone company', 'An international treaty controlling transboundary movements of hazardous waste', 'A type of battery'],
        PHD: ['There is too much recycling', 'E-waste has no health effects', 'Burdens fall on informal workers and communities exposed to toxic processing', 'All countries share burdens equally'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Phones have copper, silver and a little gold inside. Recycling saves these metals so less digging is needed.',
        MIDDLE_SCHOOL: 'We own more electronics than ever and often replace them every few years, so e-waste keeps growing.',
        HIGH_SCHOOL: 'Circuit boards and other parts contain gold, silver, copper, palladium and specialty elements like rare earths.',
        UNDERGRADUATE: 'Urban mining treats products like circuit boards as a source of metals, sometimes richer than mined ore.',
        GRADUATE: 'The Basel Convention regulates cross-border shipments of hazardous wastes, including many types of e-waste.',
        PHD: 'Workers and nearby communities at informal processing sites face exposure to heavy metals and toxic smoke.',
      },
    },
    {
      id: 'zwewq2',
      question: {
        ELEMENTARY: 'What is the best first choice for an old gadget that still works?',
        MIDDLE_SCHOOL: 'What should you do before giving away an old phone?',
        HIGH_SCHOOL: 'What happens during the depollution step of formal recycling?',
        UNDERGRADUATE: 'Why does extending a smartphone lifetime usually reduce its impact per year?',
        GRADUATE: 'What is a weakness of flat, weight-based EPR fees?',
        PHD: 'What is a lifetime distribution used for in e-waste modeling?',
      },
      options: {
        ELEMENTARY: ['Keep using it and take good care of it', 'Throw it in the trash', 'Bury it in the yard', 'Break it on purpose'],
        MIDDLE_SCHOOL: ['Back up files, sign out of accounts and do a factory reset', 'Paint it a new color', 'Put it in the freezer', 'Throw away the charger first'],
        HIGH_SCHOOL: ['Batteries and hazardous parts are removed before shredding', 'Devices are painted', 'New phones are assembled', 'Devices are shipped to landfills'],
        UNDERGRADUATE: ['Most of its footprint comes from manufacturing, so spreading it over more years lowers impact per year', 'Old phones use no electricity', 'Phones get lighter with age', 'Manufacturing has no environmental impact'],
        GRADUATE: ['They give producers little incentive to design for repair or recyclability', 'They are impossible to collect', 'They always reward the best designs', 'They make recycling free for everyone'],
        PHD: ['Describing statistically how long products stay in use before discard', 'Measuring the weight of a phone', 'Setting retail prices', 'Counting factory workers'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Keeping a gadget working longer is the best choice, because no new one needs to be made.',
        MIDDLE_SCHOOL: 'Protect your privacy: back up, sign out, reset and remove cards before passing a device on.',
        HIGH_SCHOOL: 'Depollution removes batteries and hazardous components by hand so they do not cause fires or contamination.',
        UNDERGRADUATE: 'For phones, embodied impact dominates, so more years of use means less impact per year of service.',
        GRADUATE: 'If every producer pays the same per kilogram, better design is not rewarded; eco-modulation tries to fix this.',
        PHD: 'Lifetime distributions, often Weibull functions, convert past sales into estimates of future e-waste.',
      },
    },
    {
      id: 'zwewq3',
      question: {
        ELEMENTARY: 'Where should old batteries go?',
        MIDDLE_SCHOOL: 'What does "refurbish" mean?',
        HIGH_SCHOOL: 'Why can lithium-ion batteries be dangerous in garbage trucks?',
        UNDERGRADUATE: 'Why are rare earth elements rarely recovered from e-waste?',
        GRADUATE: 'What does right to repair require?',
        PHD: 'Why is it hard to recover many minor elements in metallurgical routes?',
      },
      options: {
        ELEMENTARY: ['In the regular trash', 'In the bathtub', 'Down the sink', 'To a special drop-off for safe recycling'],
        MIDDLE_SCHOOL: ['To throw away', 'To melt down', 'To paint a device', 'To clean, test and repair a used device so it can be used again'],
        HIGH_SCHOOL: ['They are too heavy', 'They smell bad', 'They make trucks drive faster', 'When crushed they can short-circuit and catch fire'],
        UNDERGRADUATE: ['They are worth nothing', 'They are not in electronics', 'They are always recovered easily', 'They are present in tiny, dispersed amounts lost in slag or dust'],
        GRADUATE: ['Banning all used electronics', 'Higher prices for new products', 'Shorter warranties', 'Access to spare parts, tools and repair information'],
        PHD: ['They are always too large', 'Smelters are banned', 'Minor elements are magnetic', 'Routes are optimized for carrier metals, so minor elements end up in slag or alloys'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Batteries can be harmful in the trash, so they go to a special drop-off to be recycled safely.',
        MIDDLE_SCHOOL: 'Refurbishing gives a used device a second life, so no new one needs to be made.',
        HIGH_SCHOOL: 'Damaged lithium-ion batteries can overheat in thermal runaway and start fires.',
        UNDERGRADUATE: 'Dilution makes it costly to concentrate elements that are spread thinly through many products.',
        GRADUATE: 'Right to repair gives consumers and independent repairers what they need to fix devices.',
        PHD: 'Smelting focuses on copper and precious metals, and many minor elements dissolve where they cannot be extracted economically.',
      },
    },
    {
      id: 'zwewq4',
      question: {
        ELEMENTARY: 'What is e-waste?',
        MIDDLE_SCHOOL: 'What are "hibernating devices"?',
        HIGH_SCHOOL: 'Why do reuse and repair usually save more resources than recycling?',
        UNDERGRADUATE: 'What is design for disassembly?',
        GRADUATE: 'What is a risk in the trade of used electronics?',
        PHD: 'Why are weight-based recycling targets contested as policy metrics?',
      },
      options: {
        ELEMENTARY: ['Food scraps from lunch', 'Old or broken electronics people do not want anymore', 'Leaves from trees', 'Paper from school'],
        MIDDLE_SCHOOL: ['Devices that sleep at night', 'Old devices stored unused in drawers and closets', 'Brand-new phones', 'Devices that only work in winter'],
        HIGH_SCHOOL: ['Recycling is illegal', 'They keep the whole device working instead of recovering only some materials', 'Repair always costs nothing', 'Recycling creates new metals'],
        UNDERGRADUATE: ['Designing so components can be separated quickly and without damage', 'Gluing all parts together permanently', 'Making devices as thin as possible', 'Using only one color of plastic'],
        GRADUATE: ['Used devices can never be exported', 'Non-working equipment can be mislabeled as reusable to avoid hazardous waste controls', 'All exports are tested perfectly', 'Second-hand devices are always more expensive'],
        PHD: ['Weight is impossible to measure', 'Mass rewards heavy, low-value items over scarce elements and reuse', 'Targets always favor reuse', 'No country uses targets'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'E-waste means old phones, toys with batteries, computers and other electronics we no longer use.',
        MIDDLE_SCHOOL: 'Devices sitting in drawers lose value while their materials stay unused.',
        HIGH_SCHOOL: 'Recycling recovers some metals but loses many specialty elements; reuse keeps everything working.',
        UNDERGRADUATE: 'Design for disassembly uses standard fasteners and modular parts to ease repair and recycling.',
        GRADUATE: 'Testing and documentation rules help separate genuine reuse exports from disguised dumping.',
        PHD: 'Counting kilograms favors heavy appliances and ignores small amounts of critical metals and reuse.',
      },
    },
    {
      id: 'zwewq5',
      question: {
        ELEMENTARY: 'How can you help a tablet last longer?',
        MIDDLE_SCHOOL: 'What is a take-back program?',
        HIGH_SCHOOL: 'What is a certified recycler?',
        UNDERGRADUATE: 'What does "collection rate" measure?',
        GRADUATE: 'What is an advantage of the informal e-waste sector?',
        PHD: 'What is a methodological shift in recent e-waste justice research?',
      },
      options: {
        ELEMENTARY: ['Drop it often', 'Leave it in the rain', 'Use a protective case and gentle hands', 'Let the battery get very hot'],
        MIDDLE_SCHOOL: ['A program for returning library books', 'A sale on new phones', 'A service where a store or company collects old devices for reuse or recycling', 'A game where you take turns'],
        HIGH_SCHOOL: ['Any store that sells phones', 'A landfill', 'A facility audited for worker safety, environmental protection and data security', 'A person who buys new gadgets'],
        UNDERGRADUATE: ['The speed of a recycling machine', 'The weight of a single device', 'The share of e-waste generated that enters documented formal collection', 'The price of gold'],
        GRADUATE: ['It never handles any devices', 'It has no repair skills', 'It provides livelihoods and extensive repair and reuse', 'It is always perfectly safe'],
        PHD: ['Ignoring workers entirely', 'Using only satellite data', 'Participatory designs that involve workers in defining problems and solutions', 'Studying only formal factories'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A case and careful handling protect screens and help gadgets keep working for years.',
        MIDDLE_SCHOOL: 'Take-back programs let you return old devices so they can be reused or recycled properly.',
        HIGH_SCHOOL: 'Certified recyclers are checked to make sure they process e-waste safely and protect your data.',
        UNDERGRADUATE: 'Formal collection captures only part of the e-waste generated; the rest is stored, traded informally or discarded.',
        GRADUATE: 'Informal workers repair, refurbish and resell many devices, providing incomes and high reuse.',
        PHD: 'Participatory research treats workers as experts and partners rather than only as subjects or victims.',
      },
    },
  ],
}

export default expansion
