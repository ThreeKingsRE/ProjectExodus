import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'recycling-systems',
  lessons: [
    {
      id: 'zw-rec-1',
      title: 'The Recycling Journey',
      content: {
        ELEMENTARY: `
<h2>Recycling the Right Way</h2>
<p>Hi, I am Rory the Recycling Truck! Every week I drive around your neighborhood and pick up the recycling bin. But did you know that what you put in the bin really matters? When we recycle the right way, old things can be turned into brand new things. Let's learn how!</p>

<h3>What Goes in the Bin?</h3>
<p>Most towns collect the same main groups of things. They need to be empty, clean and dry. A quick rinse is usually enough.</p>
<ul>
<li><strong>Paper:</strong> newspapers, letters, comics and drawing paper that are clean and dry</li>
<li><strong>Cardboard:</strong> cereal boxes and shipping boxes, squashed flat so they take up less room</li>
<li><strong>Cans:</strong> metal soup cans and drink cans, rinsed so no food is left inside</li>
<li><strong>Bottles:</strong> plastic and glass drink bottles that are empty and rinsed out</li>
<li><strong>Jars:</strong> glass jars from jam or sauce, with the food scraped out first</li>
</ul>

<h3>What Does NOT Go in the Bin?</h3>
<p>Some things cause big trouble at the recycling center. Plastic bags wrap around the sorting machines like spaghetti on a fork! Greasy pizza boxes, food scraps, dirty tissues and diapers spoil the clean paper. Batteries can even start fires inside my truck. These things need to go somewhere else, so always check with a grown-up.</p>

<h3>Where Do I Take Everything?</h3>
<p>After I collect your bin, I drive to a big sorting building. There, machines and helpers separate paper, cans, glass and plastic into big piles. Then each pile goes to a factory where it is melted or mashed up and made into something new. An old can might come back as a new can. An old cereal box might come back as a new box!</p>

<h3>Your Recycling Mission</h3>
<ol>
<li>Rinse bottles, cans and jars before they go in the bin.</li>
<li>Squash cardboard boxes flat.</li>
<li>Keep plastic bags, food and batteries out of the bin.</li>
<li>When you are not sure, ask a grown-up to check your town's list.</li>
<li>Remember that using less and reusing come first, and recycling comes next.</li>
</ol>

<h3>Think About It</h3>
<p>Look around your kitchen. Can you find three things that could go in the recycling bin? Can you find one thing that should stay out? You are already a recycling expert!</p>
`,
        MIDDLE_SCHOOL: `
<h2>What Happens After the Recycling Truck Leaves?</h2>
<p>Putting a bottle in the blue bin feels like the end of the story, but it is really the beginning of a long journey. Recyclables are collected, sorted, cleaned, sold and turned into new products. Every step depends on the step before it, which is why the choices you make at the bin really do matter.</p>

<h3>The Recycling Journey Step by Step</h3>
<ol>
<li><strong>Collection:</strong> trucks pick up recyclables from homes, schools and businesses.</li>
<li><strong>Sorting:</strong> a sorting facility separates the mix into paper, cardboard, metals, glass and different plastics.</li>
<li><strong>Baling:</strong> each sorted material is squeezed into large, tight blocks called bales.</li>
<li><strong>Selling:</strong> bales are sold to companies that use them as raw material.</li>
<li><strong>Processing:</strong> factories shred, wash, melt or pulp the material.</li>
<li><strong>Manufacturing:</strong> the processed material becomes new products, like cans, boxes or fleece jackets.</li>
<li><strong>Buying recycled:</strong> people buy those products, which keeps the whole loop going.</li>
</ol>

<h3>Wishcycling: A Good Wish That Causes Problems</h3>
<p>Wishcycling means putting something in the recycling bin because you hope it can be recycled, even when it cannot. It comes from good intentions, but it causes contamination. A garden hose can jam a machine. Food leftovers can soak into paper and ruin it. Too much of the wrong stuff can make a whole load worth less, or even send it to the landfill. The rule many recyclers use is simple: when in doubt, find out.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Recyclables:</strong> used materials that can be collected and made into new products</li>
<li><strong>Contamination:</strong> items or dirt in the recycling that do not belong and lower its quality</li>
<li><strong>Wishcycling:</strong> putting items in the recycling bin hoping they will be recycled when they cannot be</li>
<li><strong>Bale:</strong> a large, tightly squeezed block of one sorted material, ready to be sold</li>
<li><strong>Closing the loop:</strong> buying products made from recycled material so recycling keeps working</li>
<li><strong>Downcycling:</strong> recycling a material into something of lower quality than the original</li>
</ul>

<h3>Not All Materials Recycle the Same Way</h3>
<table>
<thead><tr><th>Material</th><th>How well it recycles</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Aluminum cans</td><td>Very well</td><td>Can be melted and remade many times without losing quality</td></tr>
<tr><td>Glass bottles</td><td>Well, if kept clean</td><td>Can be remelted, but broken glass can contaminate paper</td></tr>
<tr><td>Paper and cardboard</td><td>Well, a limited number of times</td><td>Fibers get shorter each time they are recycled</td></tr>
<tr><td>Plastic bottles</td><td>Fairly well</td><td>Common types have buyers, but quality drops with each cycle</td></tr>
<tr><td>Plastic bags and films</td><td>Poorly in home bins</td><td>They tangle sorting machines; some stores collect them separately</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Recycling saves raw materials and usually saves energy compared with making things from scratch. Making a can from recycled aluminum, for example, takes far less energy than making it from ore. But recycling only works when the material is clean, sorted and wanted by someone who will turn it into something new. That is why reducing and reusing come first, and why recycling right is better than recycling everything.</p>
`,
        HIGH_SCHOOL: `
<h2>Inside the Recycling System: MRFs, Markets and Challenges</h2>
<p>Recycling is not a single action but an industrial system with collection fleets, sorting plants, global commodity markets and manufacturers. Each part has costs and limits. Understanding how the system actually works explains why some materials recycle well, why rules differ between towns, and why "just recycle more" is not a complete answer to waste.</p>

<h3>Collection Models</h3>
<p>Communities choose how residents separate recyclables. Each model trades convenience against material quality.</p>
<table>
<thead><tr><th>Model</th><th>How it works</th><th>Advantages</th><th>Drawbacks</th></tr></thead>
<tbody>
<tr><td>Single-stream</td><td>All recyclables go in one bin</td><td>Easy for residents, often more participation</td><td>More contamination, especially broken glass in paper</td></tr>
<tr><td>Dual-stream</td><td>Paper in one bin, containers in another</td><td>Cleaner paper with better market value</td><td>Slightly less convenient</td></tr>
<tr><td>Source-separated</td><td>Each material sorted by the resident or at drop-off sites</td><td>Highest quality material</td><td>Requires more effort and space</td></tr>
<tr><td>Deposit-return</td><td>A small refundable deposit is paid on drink containers</td><td>Very high return rates and clean material</td><td>Needs return points and system management</td></tr>
</tbody>
</table>

<h3>How a MRF Works</h3>
<p>A Material Recovery Facility (MRF, pronounced "murf") sorts mixed recyclables into separate streams using a combination of machines and human workers:</p>
<ul>
<li><strong>Pre-sort:</strong> workers pull out large items, plastic bags and dangerous objects that would damage equipment</li>
<li><strong>Disc screens:</strong> rotating discs let small and heavy items fall through while flat paper and cardboard ride over the top</li>
<li><strong>Magnets:</strong> strong magnets lift steel and tin cans out of the stream</li>
<li><strong>Eddy current separator:</strong> a spinning magnetic field repels aluminum cans so they jump into a separate bin</li>
<li><strong>Optical sorters:</strong> cameras and sensors identify plastic types and puffs of air push each item into the right chute</li>
<li><strong>Baler:</strong> a press compacts each sorted material into dense bales for shipping</li>
</ul>
<p>Whatever cannot be sorted or sold becomes residue, which is sent to a landfill or incinerator. Contamination raises residue, slows the line and creates safety risks for workers. Lithium-ion batteries hidden in bins are a growing cause of fires at MRFs.</p>

<h3>Material Markets</h3>
<p>Sorted bales are commodities. Their prices go up and down with demand from manufacturers and with the price of new (virgin) material. When oil prices fall, new plastic becomes cheap and recycled plastic struggles to compete. For many years a large share of some countries' recyclables was shipped overseas. When China sharply restricted imports of recyclable scrap around 2018 and demanded much cleaner material, many towns suddenly found their bales were hard to sell. This shock pushed the industry to invest in better sorting and domestic processing.</p>

<h3>Why Recycling Is Hard</h3>
<ol>
<li><strong>Mixed materials:</strong> pouches and cartons layer plastic, foil and paper together, which is hard to separate.</li>
<li><strong>Too many plastic types:</strong> the resin code number on a container does not mean it is recyclable everywhere.</li>
<li><strong>Quality loss:</strong> paper fibers shorten and most plastics degrade, so they cannot be recycled endlessly.</li>
<li><strong>Price swings:</strong> recycling programs can lose money when commodity prices crash.</li>
<li><strong>Confusing labels:</strong> rules differ between towns, so people guess and contaminate the bin.</li>
</ol>

<h3>Solutions</h3>
<p>Clear, consistent labels and local guidelines reduce contamination. Deposit-return systems capture clean bottles and cans. Designers can choose single materials that are easy to recycle. Laws that require recycled content in new products create steady demand. Most importantly, the waste hierarchy reminds us that reducing and reusing avoid the need to recycle in the first place.</p>
`,
        UNDERGRADUATE: `
<h2>Recycling Economics, Contamination and System Design</h2>
<p>Recycling systems sit at the intersection of public services, private industry and global commodity markets. Whether a material is recycled depends less on whether it is technically recyclable than on whether collection, sorting and reprocessing can be done at a cost below the value of the recovered material plus the avoided cost of disposal. This lesson builds an analytical framework for evaluating recycling systems.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Capture rate:</strong> the share of a recyclable material generated by households that actually ends up in the recycling stream</li>
<li><strong>Yield:</strong> the share of collected material that leaves the sorting facility as saleable product rather than residue</li>
<li><strong>Avoided disposal cost:</strong> the landfill or incineration fee a community saves for every tonne diverted to recycling</li>
<li><strong>Virgin-recycled price spread:</strong> the price gap between new and recycled material, which shapes manufacturer demand</li>
<li><strong>Contamination rate:</strong> the share of material in the recycling stream that does not belong there</li>
<li><strong>Recycled content:</strong> the proportion of a product made from recovered rather than virgin material</li>
</ul>

<h3>The Economics in Words</h3>
<p>A simple net cost for a recycling program equals the cost of collection plus the cost of sorting, minus the revenue from selling bales, minus the disposal fees avoided. Collection is usually the largest cost, because trucks and labor must visit every household regardless of how much material is set out. Sorting costs rise with contamination, since dirty or mixed loads slow the line and increase residue that must itself be paid for. Revenue depends on volatile commodity prices: aluminum generally carries high value, cardboard and PET bottles moderate value, and mixed plastics and glass often low or even negative value once transport is included. Avoided disposal cost matters most where landfill fees are high, which is one reason recycling economics differ so much between regions.</p>

<h3>Material-Specific Economics</h3>
<table>
<thead><tr><th>Material</th><th>Typical bale value</th><th>Key quality issue</th><th>Energy saving versus virgin</th></tr></thead>
<tbody>
<tr><td>Aluminum</td><td>High</td><td>Coatings and mixed alloys</td><td>Very large</td></tr>
<tr><td>Corrugated cardboard</td><td>Moderate</td><td>Moisture and food residue</td><td>Moderate</td></tr>
<tr><td>PET bottles</td><td>Moderate, oil-price sensitive</td><td>Labels, colors and other resins</td><td>Moderate</td></tr>
<tr><td>Mixed plastics</td><td>Low or negative</td><td>Many incompatible polymers</td><td>Variable and often small</td></tr>
<tr><td>Glass</td><td>Low</td><td>Color mixing and breakage into paper</td><td>Modest</td></tr>
</tbody>
</table>

<h3>Contamination as a System Problem</h3>
<p>Contamination is not simply a resident failing. It arises from confusing labels, inconsistent rules between neighboring towns, single-stream collection that invites broken glass into paper, and packaging that looks recyclable but is not. Effective programs combine clear, image-based guidance, feedback such as bin tagging, simple universal lists and packaging design that reduces confusion. Because contamination affects the value of entire bales, small reductions can produce outsized improvements in program economics.</p>

<h3>System Design Choices</h3>
<p>Designers trade off participation against quality. Single-stream collection increases convenience and capture rates but lowers material quality; dual-stream or deposit systems capture less volume through curbside bins yet yield cleaner, more valuable material. Deposit-return systems shift the cost of collecting beverage containers toward producers and consumers and typically achieve much higher return rates than curbside collection alone. Pay-as-you-throw pricing, which charges for garbage by volume or weight while recycling is free or cheaper, raises the incentive to divert.</p>

<h3>Applied Checklist: Evaluating a Recycling Program</h3>
<ol>
<li>Map the materials: generation, capture rate, contamination and yield for each stream.</li>
<li>Estimate net cost per tonne, including avoided disposal fees.</li>
<li>Check end markets: who buys each bale, at what quality, and how stable is demand?</li>
<li>Assess environmental benefit per tonne, not just tonnage, since materials differ greatly.</li>
<li>Identify upstream fixes such as packaging redesign, recycled-content rules or deposit systems.</li>
</ol>
`,
        GRADUATE: `
<h2>Global Recycling Markets, Policy Tools and the Circular Economy</h2>
<p>Recycling is a globally traded industry shaped by commodity cycles, trade rules and public policy. For decades many high-income countries relied on exporting low-grade scrap to manufacturing economies. Shifts in trade policy, rising concern about pollution in importing countries and the growth of circular economy strategies are reshaping how governments design recycling systems and who pays for them. This lesson examines markets, policy instruments and the place of recycling within a broader circular strategy.</p>

<h3>Key Policy Concepts</h3>
<ul>
<li><strong>Extended producer responsibility:</strong> a policy approach that makes producers financially or physically responsible for their products at end of life</li>
<li><strong>Eco-modulated fees:</strong> producer fees that vary with how recyclable or reusable a product is, rewarding better design</li>
<li><strong>Recycled content mandate:</strong> a legal requirement that products or packaging contain a minimum share of recovered material</li>
<li><strong>Landfill tax:</strong> a charge on each tonne sent to landfill that makes diversion relatively more attractive</li>
<li><strong>Transboundary waste controls:</strong> international rules that require consent before certain wastes are shipped across borders</li>
<li><strong>Waste hierarchy:</strong> the ranking of options from prevention and reuse, through recycling and recovery, down to disposal</li>
</ul>

<h3>Market Structure and Trade</h3>
<p>Recycled materials compete with virgin materials whose prices often exclude environmental costs. This structural disadvantage makes recycling markets fragile: when virgin prices fall, recycled demand collapses. Trade added another layer. When China tightened scrap import rules around 2018, mixed paper and plastic bales were redirected to other countries, several of which then imposed their own restrictions. International controls also tightened: amendments under the Basel Convention brought most mixed and contaminated plastic waste under prior informed consent procedures. The result has been pressure to raise material quality and build domestic reprocessing capacity.</p>

<h3>Comparing Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Main effect</th><th>Strengths</th><th>Limits</th></tr></thead>
<tbody>
<tr><td>Extended producer responsibility</td><td>Shifts end-of-life costs to producers</td><td>Stable funding, incentive for design change if fees are modulated</td><td>Flat fees give weak design signals; governance can be captured by industry</td></tr>
<tr><td>Deposit-return systems</td><td>High capture of beverage containers</td><td>Clean material streams, reduced litter</td><td>Limited to certain product categories</td></tr>
<tr><td>Recycled content mandates</td><td>Create stable demand for secondary material</td><td>Directly address the market side</td><td>Require reliable verification and supply</td></tr>
<tr><td>Landfill and incineration taxes</td><td>Raise the cost of disposal</td><td>Simple, technology-neutral price signal</td><td>Can encourage illegal dumping if enforcement is weak</td></tr>
<tr><td>Pay-as-you-throw</td><td>Household price signal for residual waste</td><td>Reduces residual waste</td><td>Equity concerns for large or low-income households</td></tr>
</tbody>
</table>

<h3>Recycling Within the Circular Economy</h3>
<p>Circular economy frameworks deliberately place recycling below reduction, reuse, repair and remanufacturing, because recycling destroys the embedded value of a product and recovers only material. Policy that rewards tonnage recycled can perversely discourage prevention. Better metrics measure material quality, closed-loop versus open-loop recycling, and the displacement of virgin material, rather than raw diversion rates. A recycling system is most valuable when it serves as the final loop of a system designed around longer product lives.</p>

<h3>Equity and Governance</h3>
<p>Recycling systems carry distributional consequences. Exported scrap has at times shifted pollution and low-paid manual sorting to communities with weaker environmental protections. Within countries, MRFs and transfer stations are often sited in lower-income neighborhoods. Informal waste pickers recover large volumes of material in many cities of the Global South and are increasingly recognized as stakeholders whose livelihoods should be protected and integrated into formal systems rather than displaced.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define objectives: tonnage diverted, emissions avoided, virgin material displaced or jobs created.</li>
<li>Identify which actors bear collection, sorting and market risks today.</li>
<li>Match instruments to the bottleneck, whether supply quality, demand or funding.</li>
<li>Assess trade exposure and the destination of exported material.</li>
<li>Evaluate distributional effects on workers, informal recyclers and host communities.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Recycling System Optimization</h2>
<p>Recycling research has moved from engineering individual sorting processes toward understanding recycling as a coupled socio-technical and economic system embedded in material cycles. Key questions concern how to model material flows and quality, how to optimize networks under market and policy uncertainty, how far recycling can close material loops given thermodynamic and quality limits, and which future scenarios are plausible as technologies like chemical recycling and digital tracing mature.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Material flow analysis:</strong> mass-balanced accounting of material stocks and flows through an economy across defined system boundaries</li>
<li><strong>Dynamic stock modeling:</strong> estimating future waste generation from the in-use stock and product lifetime distributions</li>
<li><strong>Reverse logistics optimization:</strong> mathematical programming of collection routes, facility locations and capacities for returned materials</li>
<li><strong>Quality-aware accounting:</strong> tracking alloying elements, additives and contaminants rather than treating recycled material as a homogeneous mass</li>
<li><strong>Chemical recycling:</strong> processes that break polymers into monomers or other chemical building blocks that can be made into new materials</li>
<li><strong>Consequential life cycle assessment:</strong> estimating the system-wide environmental change caused by a decision, including market-mediated effects</li>
</ul>

<h3>Material Flows and Quality Degradation</h3>
<p>Mass-based recycling rates hide quality loss. In metals, accumulation of tramp elements such as copper in steel scrap constrains which products recycled steel can serve. In aluminum, mixing cast and wrought alloys pushes recyclate toward lower-grade applications. In plastics, mechanical recycling degrades chain length and additives accumulate. Research increasingly represents materials by composition, using thermodynamic and statistical entropy measures to quantify dilution and mixing, and asks what sorting precision is needed to sustain closed loops.</p>

<h3>Network Optimization Under Uncertainty</h3>
<p>Recycling network design couples facility siting, collection system choice and routing with uncertain commodity prices, waste composition and policy. Stochastic and robust optimization approaches seek networks that remain feasible across price shocks and composition changes. Agent-based models represent households, municipalities, recyclers and manufacturers to explore how incentives and information propagate, for example how contamination feedback or deposit levels change behavior.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Role of chemical recycling</td><td>Energy demand, yields and the share of output that becomes fuel rather than new material vary widely between technologies</td></tr>
<tr><td>Mass-balance attribution</td><td>Allocating recycled content to products in mixed feedstock processes raises credibility and greenwashing concerns</td></tr>
<tr><td>Closed-loop versus open-loop credit</td><td>LCA allocation choices strongly change the apparent benefit of recycling</td></tr>
<tr><td>Recycling versus incineration with energy recovery</td><td>Outcomes depend on grid carbon intensity, material type and the counterfactual</td></tr>
<tr><td>Does recycling displace primary production?</td><td>Displacement rates depend on market elasticities and are often assumed rather than measured</td></tr>
</tbody>
</table>

<h3>Digital and Technological Change</h3>
<p>Sensor-based sorting, machine vision and robotic picking are improving sorting precision and generating data on waste composition. Digital watermarks and product passports could carry information about materials and additives to the sorting stage. Researchers ask whether these technologies can reduce the trade-off between collection convenience and material quality, and how data governance should be organized across firms.</p>

<h3>Future Scenarios</h3>
<p>Scenario studies combine dynamic stock models with policy and technology assumptions to estimate future secondary supply. For many metals, growing in-use stocks mean that recycling can supply a rising but still partial share of demand while stocks keep expanding; for plastics, scenarios show that recycling alone cannot match growth without reduction and redesign. These findings support research on demand-side strategies and absolute limits to recycling-led circularity.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Composition-resolved material flow models that link sorting performance to downstream quality.</li>
<li>Empirical estimates of how much recycled material displaces virgin production.</li>
<li>Comparative, transparent LCAs of chemical and mechanical recycling with consistent boundaries.</li>
<li>Integration of informal recycling sectors into flow models and policy evaluation.</li>
<li>Governance of data sharing for digital product passports and sorting systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwrq1',
      question: {
        ELEMENTARY: 'What can usually go in the recycling bin?',
        MIDDLE_SCHOOL: 'What is wishcycling?',
        HIGH_SCHOOL: 'What is a MRF?',
        UNDERGRADUATE: 'Which component is usually the largest cost in a recycling program?',
        GRADUATE: 'What is extended producer responsibility?',
        PHD: 'What is chemical recycling?',
      },
      options: {
        ELEMENTARY: ['Clean bottles, cans, paper and cardboard', 'Dirty diapers', 'Food scraps', 'Plastic bags'],
        MIDDLE_SCHOOL: ['Putting items in the recycling bin hoping they can be recycled when they cannot', 'Wishing for less waste', 'Recycling correctly every time', 'A machine that sorts cans'],
        HIGH_SCHOOL: ['A Material Recovery Facility that sorts mixed recyclables', 'A Main Recycling Fund', 'A Metal Reclamation Factory', 'A Municipal Refuse Furnace'],
        UNDERGRADUATE: ['Collection, because trucks and labor must visit every household', 'Printing recycling leaflets', 'Selling the bales', 'Painting recycling bins'],
        GRADUATE: ['A policy making producers responsible for their products at end of life', 'A tax on landfills only', 'A ban on all plastic', 'A rule about recycling truck emissions'],
        PHD: ['Breaking polymers into monomers or chemical building blocks for new materials', 'Shredding and remelting plastics mechanically', 'Composting plastics', 'Burying plastics in landfills'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Clean, empty bottles, cans, paper and cardboard can usually be recycled into new things.',
        MIDDLE_SCHOOL: 'Wishcycling comes from good intentions but adds contamination that can ruin recyclable loads.',
        HIGH_SCHOOL: 'A MRF uses screens, magnets, eddy currents, optical sorters and workers to separate recyclables.',
        UNDERGRADUATE: 'Collection costs are high because every household must be visited regardless of how much material is set out.',
        GRADUATE: 'EPR shifts financial or physical responsibility for end-of-life management to producers.',
        PHD: 'Chemical recycling depolymerizes or otherwise breaks plastics into building blocks that can be made into new materials.',
      },
    },
    {
      id: 'zwrq2',
      question: {
        ELEMENTARY: 'Why should plastic bags stay out of the recycling bin?',
        MIDDLE_SCHOOL: 'Which material can be recycled many times without losing quality?',
        HIGH_SCHOOL: 'What does an eddy current separator do in a MRF?',
        UNDERGRADUATE: 'What does "yield" mean for a sorting facility?',
        GRADUATE: 'Why do recycled materials often struggle to compete with virgin materials?',
        PHD: 'Why do mass-based recycling rates hide important information?',
      },
      options: {
        ELEMENTARY: ['They are too pretty to recycle', 'They wrap around the sorting machines', 'They are too heavy', 'They turn into glass'],
        MIDDLE_SCHOOL: ['Paper', 'Aluminum cans', 'Plastic bags', 'Greasy pizza boxes'],
        HIGH_SCHOOL: ['It lifts steel cans with a magnet', 'It repels aluminum cans into a separate bin', 'It melts glass', 'It washes paper'],
        UNDERGRADUATE: ['The number of trucks used', 'The share of collected material leaving as saleable product', 'The price of landfill', 'The weight of a single bale'],
        GRADUATE: ['Recycled materials are always lower quality', 'Virgin prices often exclude environmental costs', 'Recycling is illegal in many places', 'Manufacturers cannot use recycled material'],
        PHD: ['They count only plastics', 'They ignore quality loss from mixing, contaminants and degradation', 'They are always too low', 'They are measured in volume, not mass'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Plastic bags tangle around the spinning parts of sorting machines and can stop them working.',
        MIDDLE_SCHOOL: 'Aluminum can be melted and remade again and again without losing quality.',
        HIGH_SCHOOL: 'A spinning magnetic field pushes non-iron metals like aluminum away from the rest of the stream.',
        UNDERGRADUATE: 'Yield is the fraction of incoming material that becomes saleable bales instead of residue.',
        GRADUATE: 'Because virgin material prices rarely include pollution and depletion costs, recycled material is at a structural disadvantage.',
        PHD: 'A tonne recycled may become lower-grade material; composition and quality tracking reveal what mass rates hide.',
      },
    },
    {
      id: 'zwrq3',
      question: {
        ELEMENTARY: 'What should you do to a can before putting it in the bin?',
        MIDDLE_SCHOOL: 'What is a bale?',
        HIGH_SCHOOL: 'What is a main drawback of single-stream recycling?',
        UNDERGRADUATE: 'Why does a high landfill fee improve recycling economics?',
        GRADUATE: 'What are eco-modulated fees?',
        PHD: 'What does dynamic stock modeling estimate?',
      },
      options: {
        ELEMENTARY: ['Fill it with sand', 'Paint it', 'Rinse it so no food is left', 'Hide it under the bin'],
        MIDDLE_SCHOOL: ['A type of plastic', 'A recycling truck', 'A large, tight block of one sorted material', 'A label on a bottle'],
        HIGH_SCHOOL: ['People find it too hard to use', 'It costs nothing to run', 'More contamination, such as broken glass in paper', 'It only accepts aluminum'],
        UNDERGRADUATE: ['It makes trucks faster', 'It raises commodity prices', 'Each tonne diverted avoids a larger disposal cost', 'It reduces contamination automatically'],
        GRADUATE: ['Fees paid by consumers at stores', 'Fees for recycling trucks', 'Producer fees that vary with how recyclable or reusable a product is', 'Fines for littering'],
        PHD: ['Only the price of scrap', 'The number of recycling plants', 'Future waste generation from in-use stocks and product lifetimes', 'Truck routes'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Rinsing cans keeps food from spoiling other recyclables like paper.',
        MIDDLE_SCHOOL: 'Sorted materials are squeezed into bales so they are easy to ship and sell.',
        HIGH_SCHOOL: 'Mixing everything in one bin is convenient but lowers material quality through contamination.',
        UNDERGRADUATE: 'Avoided disposal cost counts as a saving, so diversion becomes more worthwhile where landfill is expensive.',
        GRADUATE: 'Modulated fees reward recyclable or reusable designs with lower charges and penalize hard-to-recycle ones.',
        PHD: 'Dynamic stock models project when products in use will become waste, based on lifetime distributions.',
      },
    },
    {
      id: 'zwrq4',
      question: {
        ELEMENTARY: 'What should we try before recycling?',
        MIDDLE_SCHOOL: 'What does "closing the loop" mean?',
        HIGH_SCHOOL: 'What happened when China restricted imports of recyclable scrap around 2018?',
        UNDERGRADUATE: 'What is a typical effect of a deposit-return system?',
        GRADUATE: 'Why can rewarding tonnage recycled be a problem in circular economy policy?',
        PHD: 'Why is the role of chemical recycling contested?',
      },
      options: {
        ELEMENTARY: ['Throwing things on the ground', 'Buying more things', 'Hiding trash', 'Using less and reusing things'],
        MIDDLE_SCHOOL: ['Closing the lid of the bin', 'Driving the truck in a circle', 'Locking the recycling center', 'Buying products made from recycled material'],
        HIGH_SCHOOL: ['Recycling became free everywhere', 'All plastic was banned', 'Nothing changed', 'Many towns found their bales were hard to sell'],
        UNDERGRADUATE: ['Lower return rates than curbside bins', 'More contaminated material', 'It removes the need for any recycling', 'Much higher return rates and cleaner material'],
        GRADUATE: ['Tonnage is impossible to measure', 'Recycling has no benefits', 'Landfills become cheaper', 'It can discourage prevention and reuse, which rank higher'],
        PHD: ['It has been fully proven at every scale', 'It uses no energy', 'It only works for glass', 'Energy use, yields and the share of output that becomes fuel vary widely'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Using less and reusing come first because they stop waste before it starts.',
        MIDDLE_SCHOOL: 'When people buy recycled products, there is demand for recyclables and the loop keeps turning.',
        HIGH_SCHOOL: 'The import restrictions and stricter quality demands left many exporting towns without buyers for mixed bales.',
        UNDERGRADUATE: 'Deposits give people a reason to return containers, producing high capture and clean streams.',
        GRADUATE: 'Recycling sits below reduction and reuse in the hierarchy, so tonnage targets can reward the wrong behavior.',
        PHD: 'Chemical recycling technologies differ greatly, and some outputs become fuels rather than new materials.',
      },
    },
    {
      id: 'zwrq5',
      question: {
        ELEMENTARY: 'Why should batteries never go in the recycling bin?',
        MIDDLE_SCHOOL: 'Why can paper only be recycled a limited number of times?',
        HIGH_SCHOOL: 'What is residue at a MRF?',
        UNDERGRADUATE: 'What is the capture rate of a recyclable material?',
        GRADUATE: 'Which group recovers large volumes of material in many cities of the Global South?',
        PHD: 'Which method estimates system-wide environmental change caused by a decision?',
      },
      options: {
        ELEMENTARY: ['They can start fires in the truck', 'They are too small to see', 'They smell bad', 'They float away'],
        MIDDLE_SCHOOL: ['Its fibers get shorter each time', 'It turns into plastic', 'It becomes heavier', 'It changes color to blue'],
        HIGH_SCHOOL: ['Material that cannot be sorted or sold and goes to disposal', 'The best quality aluminum', 'Money paid by buyers', 'Clean cardboard'],
        UNDERGRADUATE: ['The share of a material generated that actually reaches the recycling stream', 'The speed of a sorting line', 'The price of a bale', 'The number of bins per street'],
        GRADUATE: ['Informal waste pickers', 'Airline pilots', 'Bank tellers', 'Only large corporations'],
        PHD: ['Consequential life cycle assessment', 'A simple tonnage count', 'Attributional marketing surveys', 'Bale weighing'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Batteries can spark and start fires, so they go to special drop-off places instead.',
        MIDDLE_SCHOOL: 'Each recycling cycle breaks paper fibers into shorter pieces until they are too weak to use.',
        HIGH_SCHOOL: 'Residue is what is left after sorting; it must be landfilled or burned, which costs money.',
        UNDERGRADUATE: 'Capture rate measures how much of the available recyclable material households actually set out for recycling.',
        GRADUATE: 'Informal waste pickers recover substantial material and are increasingly recognized as stakeholders to integrate.',
        PHD: 'Consequential LCA models the change a decision causes, including market-mediated effects such as displacement.',
      },
    },
  ],
}

export default expansion
