import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'textile-waste',
  lessons: [
    {
      id: 'zw-tex-1',
      title: 'Fashion and Waste: Where Old Clothes Go',
      content: {
        ELEMENTARY: `
<h2>The Journey of Your T-Shirt</h2>
<p>Hi, I am Tilly the T-shirt! I started as a fluffy cotton plant in a sunny field. People picked me, spun me into thread, wove me into cloth, dyed me blue and sewed me into a shirt. That took lots of water, energy and hard work. So please do not throw me away too soon!</p>

<h3>Why Throwing Clothes Away Hurts the Planet</h3>
<p>When clothes go in the trash, they usually end up in a big pile of garbage called a landfill, or they get burned. All the water, energy and work that went into making them is lost. Some clothes are made from plastic threads, and those can take a very, very long time to break down.</p>
<ul>
<li><strong>Textile:</strong> any cloth or fabric, like the material in shirts, sheets and towels</li>
<li><strong>Fiber:</strong> a tiny thread-like strand that is spun together to make yarn and cloth</li>
<li><strong>Landfill:</strong> a huge place where trash is buried in the ground</li>
</ul>

<h3>Clothes Can Have Many Lives</h3>
<p>The good news is that clothes can be used again and again. A jacket that is too small for you might be just right for a younger cousin. A shirt with a hole can be sewn. A worn-out towel can become cleaning rags.</p>
<ul>
<li><strong>Donate:</strong> to give things you no longer need to people or places that can use them</li>
<li><strong>Hand-me-down:</strong> clothing passed from an older child to a younger one</li>
<li><strong>Mend:</strong> to fix a hole or tear so something can be used again</li>
</ul>

<h3>Things You Can Do</h3>
<ol>
<li>Take good care of your clothes so they last a long time.</li>
<li>Pass clothes you have outgrown to friends, family or a donation center.</li>
<li>Ask a grown-up to help you sew on a button or patch a hole.</li>
<li>Turn old socks into puppets or old T-shirts into bags.</li>
<li>Swap clothes with friends instead of always buying new ones.</li>
</ol>

<h3>Think About It</h3>
<p>Look in your closet. Which piece of clothing is your favorite? How could you help it last as long as possible? Every time a piece of clothing gets a second life, the planet gets a little break!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Fast Fashion and the Textile Waste Problem</h2>
<p>Clothes have never been cheaper or easier to buy. New styles appear in stores and online every few weeks, and many people buy more clothes than ever before while wearing each item fewer times. This pattern is called <em>fast fashion</em>, and it has created a mountain of textile waste.</p>

<h3>How Fast Fashion Works</h3>
<p>Fast fashion brands copy runway trends quickly and produce huge amounts of low-cost clothing. To keep prices low, they often use cheap materials and fast production. Clothes that are poorly made wear out faster, and clothes that are cheap feel easy to throw away. The result is a cycle: buy, wear a few times, throw away, buy again.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Fast fashion:</strong> cheap, trendy clothing made quickly and often thrown away after only a few wears</li>
<li><strong>Slow fashion:</strong> buying fewer, better-made clothes and keeping them for a long time</li>
<li><strong>Synthetic fiber:</strong> a fiber made from plastic, such as polyester or nylon</li>
<li><strong>Natural fiber:</strong> a fiber that comes from plants or animals, such as cotton, linen or wool</li>
<li><strong>Microfiber:</strong> a tiny piece of fiber that breaks off clothes, often during washing</li>
<li><strong>Secondhand:</strong> owned and used by someone before you, like clothes from a thrift store</li>
</ul>

<h3>Where Do Old Clothes Go?</h3>
<table>
<thead><tr><th>Path</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Trash bin</td><td>Clothes are buried in a landfill or burned</td></tr>
<tr><td>Donation</td><td>The best items are resold; many others are sold abroad or turned into rags</td></tr>
<tr><td>Downcycling</td><td>Fabric is shredded into stuffing, insulation or cleaning cloths</td></tr>
<tr><td>Fiber recycling</td><td>Fabric is made into new fibers for new clothes, but this is still rare</td></tr>
</tbody>
</table>

<h3>Why Recycling Clothes Is Hard</h3>
<p>Most clothes are mixtures of fibers, like cotton blended with polyester. They also have buttons, zippers, dyes and labels. Separating all of these is tricky, so only a very small share of old clothing becomes new clothing. That is why wearing clothes longer is one of the best things you can do.</p>

<h3>What You Can Do</h3>
<ol>
<li>Ask yourself if you will wear something many times before buying it.</li>
<li>Shop secondhand or swap clothes with friends.</li>
<li>Wash clothes in cool water and air-dry them so they last longer.</li>
<li>Learn simple repairs like sewing buttons and patching holes.</li>
</ol>
`,
        HIGH_SCHOOL: `
<h2>Textile Waste: From Closet to Collection Bin and Beyond</h2>
<p>The global clothing industry has grown rapidly over the past few decades, while the number of times each garment is worn has fallen. This combination creates a large and growing stream of textile waste. Understanding where that waste goes, and why so little of it is recycled into new clothes, is the first step toward fixing the system.</p>

<h3>The Life Cycle of a Garment</h3>
<p>A garment's environmental footprint is spread across its whole life: growing or synthesizing fibers, spinning yarn, weaving or knitting fabric, dyeing and finishing, sewing, shipping, washing, and finally disposal. Dyeing and finishing use large amounts of water and chemicals, and synthetic fibers are made from fossil fuels. Because so much impact is "locked in" during production, keeping a garment in use longer spreads that impact over more wears.</p>

<h3>What Happens After You Let Go</h3>
<table>
<thead><tr><th>Route</th><th>Process</th><th>Outcome</th></tr></thead>
<tbody>
<tr><td>Reuse</td><td>Collected clothes are sorted by hand; best items resold locally</td><td>Highest value, keeps garment whole</td></tr>
<tr><td>Export</td><td>Lower-grade items baled and shipped to other countries</td><td>Some are resold; surplus may be dumped or burned abroad</td></tr>
<tr><td>Upcycling</td><td>Garments redesigned into new products</td><td>Adds value but small in scale</td></tr>
<tr><td>Downcycling</td><td>Shredded into rags, insulation, padding</td><td>Delays disposal but loses fiber quality</td></tr>
<tr><td>Fiber-to-fiber recycling</td><td>Fibers recovered to make new yarn</td><td>Ideal but still a tiny share of the total</td></tr>
<tr><td>Disposal</td><td>Landfill or incineration</td><td>All materials and embedded resources lost</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Upcycling:</strong> turning old garments or fabric into new products of equal or higher value</li>
<li><strong>Downcycling:</strong> recycling material into a lower-quality product, such as clothes into insulation</li>
<li><strong>Fiber blend:</strong> fabric made from two or more fiber types, such as cotton mixed with polyester</li>
<li><strong>Mechanical recycling:</strong> shredding fabric back into fibers, which makes the fibers shorter and weaker</li>
<li><strong>Chemical recycling:</strong> using chemical processes to break fibers down into raw materials that can be rebuilt</li>
<li><strong>Microfiber shedding:</strong> the release of tiny fibers from fabric during wear and washing</li>
</ul>

<h3>Barriers to Recycling</h3>
<p>Textile recycling faces several challenges. Blended fabrics are difficult to separate. Mechanical recycling shortens fibers, so recycled cotton usually has to be mixed with new fiber. Zippers, buttons, prints and coatings must be removed. Sorting by fiber type has traditionally been done by hand, though automated sorters that "read" fabric with infrared light are emerging. And recycled fiber often costs more than new polyester, which is made cheaply from fossil fuels.</p>

<h3>Solutions Across the System</h3>
<ol>
<li><strong>Buy less, choose well:</strong> durable clothes worn many times have a lower impact per wear.</li>
<li><strong>Extend life:</strong> repair, careful washing and resale keep garments in use.</li>
<li><strong>Design for recycling:</strong> single-fiber fabrics and removable trims make recycling easier.</li>
<li><strong>Better collection:</strong> separate textile collection keeps clothes out of trash bins.</li>
<li><strong>Producer responsibility:</strong> some places require brands to fund collection and recycling.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing the Textile Waste System</h2>
<p>Textile waste is the end point of a linear system shaped by globalized supply chains, low production costs and rising consumption. Industry analyses commonly estimate that well under one percent of the material used to make clothing is recycled into new clothing. To understand why, we need to look at the industry's material flows, the economics of each recovery route, and the technical properties of fibers themselves.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Clothing utilization:</strong> the average number of times a garment is worn before it stops being used</li>
<li><strong>Post-consumer textiles:</strong> clothing and household textiles discarded by users after use</li>
<li><strong>Pre-consumer textiles:</strong> cutting scraps, offcuts and unsold stock generated before products reach users</li>
<li><strong>Closed-loop recycling:</strong> recycling a material back into the same kind of product, such as old garments into new garments</li>
<li><strong>Open-loop recycling:</strong> recycling a material into a different product, usually of lower value</li>
<li><strong>Circular fashion:</strong> an approach in which clothes are designed, used and recovered so their materials stay in productive use</li>
</ul>

<h3>Where Impacts Occur</h3>
<p>Life-cycle studies of apparel typically find that fiber production and wet processing (dyeing and finishing) account for a large share of impacts, with the use phase significant for items washed and tumble-dried often. Disposal itself is usually a smaller share of a garment's footprint. The implication is important: the main benefit of keeping textiles out of landfill is avoiding new production, not just avoiding disposal emissions.</p>

<h3>Recovery Routes Compared</h3>
<table>
<thead><tr><th>Route</th><th>Value retained</th><th>Technical maturity</th><th>Key constraint</th></tr></thead>
<tbody>
<tr><td>Reuse and resale</td><td>Very high</td><td>Mature</td><td>Quality of collected garments, sorting labor costs</td></tr>
<tr><td>Mechanical fiber recycling</td><td>Moderate</td><td>Mature for some fibers</td><td>Fiber shortening, color and blend sorting</td></tr>
<tr><td>Polymer recycling of polyester</td><td>Moderate to high</td><td>Developing</td><td>Contaminants such as elastane and dyes</td></tr>
<tr><td>Cellulose dissolution of cotton</td><td>High</td><td>Developing</td><td>Feedstock purity and scale-up</td></tr>
<tr><td>Downcycling to nonwovens</td><td>Low</td><td>Mature</td><td>Limited markets</td></tr>
</tbody>
</table>

<h3>Innovation in Circular Fashion</h3>
<p>Innovation is happening on several fronts: automated near-infrared sorting to identify fiber composition, chemical processes to separate cotton from polyester in blends, digital product labels that record material content, rental and resale business models, and design approaches using single fibers and removable trims. Each addresses a different bottleneck, and none works without reliable collection volumes and markets for recycled fiber.</p>

<h3>Applied Method: Assessing a Garment's Circularity</h3>
<ol>
<li>Identify fiber composition, including small percentages of elastane or coatings.</li>
<li>Estimate expected durability and number of wears.</li>
<li>Check whether trims, prints and labels can be removed easily.</li>
<li>Determine which recovery routes realistically exist for that material in the region.</li>
<li>Compare impact per wear for alternatives rather than impact per item.</li>
</ol>
`,
        GRADUATE: `
<h2>Textile Waste Policy, Technology and Business Models</h2>
<p>Textiles are rising on policy agendas because volumes are large, recovery rates are low and impacts are spread across global supply chains. Governments are moving from voluntary industry initiatives toward mandatory measures, while firms experiment with resale, rental and recycling. This lesson examines the policy toolkit, the state of fiber recycling technology and the economics of circular business models.</p>

<h3>Policy Instruments</h3>
<ul>
<li><strong>Separate collection mandate:</strong> a requirement that municipalities or producers collect textiles separately from mixed waste</li>
<li><strong>Textile EPR:</strong> a scheme making clothing brands responsible for funding collection, sorting and recycling of their products</li>
<li><strong>Destruction ban:</strong> a rule prohibiting firms from destroying unsold goods such as excess clothing stock</li>
<li><strong>Ecodesign requirement:</strong> a mandatory product standard covering durability, recyclability or recycled content</li>
<li><strong>Digital product passport:</strong> a digital record of a product's materials and origin, designed to support repair and recycling</li>
<li><strong>Waste export control:</strong> a rule that limits shipping low-quality used textiles to countries that cannot manage them</li>
</ul>
<p>The European Union has required member states to organize separate textile collection and is developing EPR and ecodesign rules for textiles. France has operated a textile EPR scheme for many years, offering an extended case study of both its achievements in collection and its limits in driving recycling.</p>

<h3>Fiber Recycling Technology</h3>
<table>
<thead><tr><th>Technology</th><th>Inputs</th><th>Output</th><th>Barriers to scale</th></tr></thead>
<tbody>
<tr><td>Mechanical shredding</td><td>Sorted single-fiber textiles</td><td>Short recycled fibers</td><td>Quality loss, need for virgin blending</td></tr>
<tr><td>Polyester depolymerization</td><td>Polyester-rich textiles</td><td>Monomers for new polyester</td><td>Energy use, dye and additive removal, cost versus virgin</td></tr>
<tr><td>Cellulose dissolution</td><td>Cotton-rich textiles</td><td>Pulp for man-made cellulosic fibers</td><td>Feedstock purity, investment, offtake agreements</td></tr>
<tr><td>Blend separation</td><td>Cotton-polyester blends</td><td>Separated streams</td><td>Process yields, early-stage commercialization</td></tr>
</tbody>
</table>

<h3>Business Models</h3>
<p>Resale, rental, subscription and repair services can decouple revenue from new production, but their environmental benefit depends on displacing new purchases rather than adding to them, and on logistics such as transport and cleaning. Brands face a structural tension: revenue in the dominant model grows with volume, while circularity implies fewer new garments. Policy can shift this balance through EPR fees, ecodesign standards and public procurement.</p>

<h3>Global Equity</h3>
<p>Large volumes of used clothing are exported from wealthy countries. Importing markets support many traders and tailors, but a share of each bale is unsellable and becomes waste that local systems were not built to handle. Equitable policy considers export quality standards, support for receiving countries and the livelihoods of informal workers in both collection and resale.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map flows from production through collection, sorting, export and final disposal.</li>
<li>Distinguish reuse, closed-loop recycling and downcycling in reported recovery rates.</li>
<li>Test whether business models displace new production or add consumption.</li>
<li>Assess the financing gap between recycled and virgin fiber.</li>
<li>Examine impacts on workers and communities in importing countries.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Textile System Transformation</h2>
<p>Transforming the textile system requires changes in materials, technologies, business models, consumer practices and global trade at the same time. Research is increasingly interdisciplinary, combining polymer chemistry, industrial ecology, consumer behavior and political economy. This lesson surveys material innovation, methods for modeling textile flows, debates about consumption, and open research directions.</p>

<h3>Material Innovation</h3>
<ul>
<li><strong>Depolymerization:</strong> chemically breaking a polymer such as polyester into monomers that can be purified and repolymerized</li>
<li><strong>Selective dissolution:</strong> using solvents that dissolve one fiber in a blend while leaving others intact for separate recovery</li>
<li><strong>Bio-based fibers:</strong> fibers made from renewable biological feedstocks, whose impacts depend on land, chemicals and end of life</li>
<li><strong>Mono-material design:</strong> designing garments from a single fiber family, including threads and trims, to simplify recycling</li>
<li><strong>Fiber degradation:</strong> the loss of fiber length and strength over washing, wear and mechanical recycling cycles</li>
<li><strong>Microfiber release:</strong> fragments shed during production, wear and laundering that enter wastewater and the environment</li>
</ul>
<p>Material research faces a mismatch between chemistry and garments: real textiles contain dyes, finishes, elastane and contaminants that reduce yields and complicate purification. A key frontier is processes robust to heterogeneous post-consumer feedstock rather than clean industrial scraps.</p>

<h3>Modeling Textile Systems</h3>
<p>Dynamic material flow analysis is used to estimate stocks of clothing in wardrobes and future discard volumes, while prospective life-cycle assessment evaluates emerging recycling technologies at projected scale. Both depend on uncertain parameters such as garment lifetimes, wear frequency and sorting yields. Agent-based models explore how consumer choices, brand strategies and policy interact, for example whether resale platforms extend lifetimes or accelerate turnover.</p>
<p>Data scarcity is itself a research problem. Collection and sorting data are often proprietary, export statistics record weight rather than quality, and fiber composition labels can be inaccurate. Studies that combine sorting trials, trade data and household surveys are improving estimates, but results remain sensitive to assumptions about what share of collected textiles is genuinely reusable.</p>

<h3>Consumer Behavior Debates</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Does resale displace new purchases?</td><td>Resale may extend use or may fund more buying, a form of rebound</td></tr>
<tr><td>Value-action gap</td><td>Stated environmental concern often does not predict actual purchasing</td></tr>
<tr><td>Durability: physical or emotional?</td><td>Garments are often discarded for style or fit, not wear, so technical durability may not raise lifetimes</td></tr>
<tr><td>Recycling versus sufficiency</td><td>Technology-led strategies may legitimize high consumption rather than reduce it</td></tr>
</tbody>
</table>

<h3>Political Economy and Justice</h3>
<p>Textile production and end-of-life handling are concentrated in different regions from consumption. Research examines how responsibility is distributed along value chains, how used-clothing trade affects local industries and waste systems, and how circular transitions affect garment workers, sorters and informal traders. Questions of who captures value in recycled fiber markets are increasingly prominent.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Recycling processes tolerant of mixed, dyed and contaminated post-consumer feedstock.</li>
<li>Robust estimates of garment lifetimes and displacement rates for resale and rental.</li>
<li>Prospective assessment of chemical recycling at industrial scale, including energy and solvent use.</li>
<li>Interventions that close the value-action gap and support sufficiency-oriented practices.</li>
<li>Justice-centered analysis of global used-textile flows and circular economy transitions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwtexq1',
      question: {
        ELEMENTARY: 'What can we do with clothes we have outgrown?',
        MIDDLE_SCHOOL: 'What is fast fashion?',
        HIGH_SCHOOL: 'Which route keeps the most value in a used garment?',
        UNDERGRADUATE: 'What is closed-loop textile recycling?',
        GRADUATE: 'What is textile EPR?',
        PHD: 'What is depolymerization?',
      },
      options: {
        ELEMENTARY: ['Donate them or pass them on to someone else', 'Always throw them in the trash', 'Bury them in the garden', 'Leave them on the street'],
        MIDDLE_SCHOOL: ['Cheap, trendy clothes made quickly and often thrown away soon', 'Clothes kept for many years', 'Very expensive clothes made by hand', 'Clothes from a hundred years ago'],
        HIGH_SCHOOL: ['Reuse and resale of the whole garment', 'Shredding into insulation', 'Burning for energy', 'Burying in a landfill'],
        UNDERGRADUATE: ['Recycling old garments back into new garments', 'Burning fabric to make electricity', 'Shredding clothes into car padding', 'Sending clothes to landfill'],
        GRADUATE: ['A scheme making brands fund collection, sorting and recycling of their products', 'A tax on cotton farmers', 'A ban on all synthetic fibers', 'A voluntary customer donation program'],
        PHD: ['Chemically breaking a polymer into monomers that can be purified and rebuilt', 'Melting cotton into plastic', 'Burning polyester for energy', 'Washing fibers in cold water'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Clothes you have outgrown can be donated or given to friends and family so they get a second life.',
        MIDDLE_SCHOOL: 'Fast fashion is cheap, trendy clothing designed to be bought quickly and often discarded after a few wears.',
        HIGH_SCHOOL: 'Reuse keeps the garment whole, so none of the resources used to make it are lost.',
        UNDERGRADUATE: 'Closed-loop means the material returns to the same product type, such as garment to garment.',
        GRADUATE: 'Textile EPR makes clothing brands responsible for financing the end-of-life management of what they sell.',
        PHD: 'Depolymerization breaks polymers such as polyester into monomers that can be repolymerized into new fiber.',
      },
    },
    {
      id: 'zwtexq2',
      question: {
        ELEMENTARY: 'What does it mean to mend clothes?',
        MIDDLE_SCHOOL: 'Which of these is a synthetic fiber?',
        HIGH_SCHOOL: 'What is a drawback of mechanical textile recycling?',
        UNDERGRADUATE: 'According to life-cycle studies, where does much of a garment\'s impact occur?',
        GRADUATE: 'What does a destruction ban do?',
        PHD: 'What is the value-action gap?',
      },
      options: {
        ELEMENTARY: ['To throw them away', 'To fix a hole or tear so they can be worn again', 'To dye them a new color', 'To fold them neatly'],
        MIDDLE_SCHOOL: ['Cotton', 'Polyester', 'Wool', 'Linen'],
        HIGH_SCHOOL: ['It makes fibers longer and stronger', 'It shortens and weakens the fibers', 'It requires no sorting', 'It removes all dyes'],
        UNDERGRADUATE: ['Only at disposal', 'In fiber production and dyeing and finishing', 'Only in the store', 'Only in shipping'],
        GRADUATE: ['It bans the sale of secondhand clothes', 'It prohibits firms from destroying unsold goods', 'It bans clothing exports completely', 'It prohibits recycling'],
        PHD: ['The difference in price between new and used clothes', 'The gap between stated environmental concern and actual purchasing', 'The gap between two fibers in a blend', 'The time between design and sale'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Mending means fixing clothes, like sewing a hole or a ripped seam, so you can keep wearing them.',
        MIDDLE_SCHOOL: 'Polyester is made from plastic, so it is a synthetic fiber. Cotton, wool and linen are natural fibers.',
        HIGH_SCHOOL: 'Shredding breaks fibers into shorter pieces, so recycled fiber usually needs mixing with new fiber.',
        UNDERGRADUATE: 'Fiber production and wet processing are major impact stages, so avoiding new production matters most.',
        GRADUATE: 'Destruction bans stop companies from burning or shredding unsold stock instead of finding other uses.',
        PHD: 'People often say they care about the environment but buy in ways that do not reflect it.',
      },
    },
    {
      id: 'zwtexq3',
      question: {
        ELEMENTARY: 'What is a fiber?',
        MIDDLE_SCHOOL: 'Why is it hard to recycle most clothes into new clothes?',
        HIGH_SCHOOL: 'What is downcycling?',
        UNDERGRADUATE: 'What can automated near-infrared sorting help identify?',
        GRADUATE: 'When do resale and rental models deliver environmental benefits?',
        PHD: 'Why might greater technical durability not lengthen garment lifetimes?',
      },
      options: {
        ELEMENTARY: ['A kind of button', 'A type of shoe', 'A tiny thread-like strand used to make cloth', 'A clothes hanger'],
        MIDDLE_SCHOOL: ['Clothes are too light', 'Clothes never wear out', 'They are often blends with buttons, zippers and dyes that are hard to separate', 'Clothes are made of glass'],
        HIGH_SCHOOL: ['Selling clothes at a lower price', 'Buying fewer clothes', 'Recycling material into a lower-quality product such as insulation', 'Making clothes darker'],
        UNDERGRADUATE: ['The price of a garment', 'The brand of a garment', 'The fiber composition of a garment', 'Who owned the garment before'],
        GRADUATE: ['Whenever they exist', 'When they increase total buying', 'When they displace new purchases rather than add to them', 'Only when items are shipped long distances'],
        PHD: ['Durable fabrics cannot be worn', 'Garments wear out in a single wash', 'Many garments are discarded for style or fit rather than physical wear', 'Durability always shortens lifetimes'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Fibers are tiny strands that are spun into yarn and then woven or knitted into cloth.',
        MIDDLE_SCHOOL: 'Blended fibers and attached parts make separating clothing materials difficult.',
        HIGH_SCHOOL: 'Downcycling turns fabric into lower-value products like rags, padding or insulation.',
        UNDERGRADUATE: 'Near-infrared sorters read the fabric to identify what fibers it contains.',
        GRADUATE: 'Circular models help only if they replace new production instead of adding consumption.',
        PHD: 'Emotional and style durability matter, since many clothes are discarded while still physically usable.',
      },
    },
    {
      id: 'zwtexq4',
      question: {
        ELEMENTARY: 'What can an old T-shirt become?',
        MIDDLE_SCHOOL: 'What is a microfiber?',
        HIGH_SCHOOL: 'What is a fiber blend?',
        UNDERGRADUATE: 'What are pre-consumer textiles?',
        GRADUATE: 'Why is used clothing export an equity concern?',
        PHD: 'What is a major challenge for chemical recycling of real post-consumer textiles?',
      },
      options: {
        ELEMENTARY: ['A rock', 'A sandwich', 'A puddle', 'A bag or cleaning rag'],
        MIDDLE_SCHOOL: ['A large sheet of cloth', 'A kind of sewing machine', 'A clothing store', 'A tiny piece of fiber that breaks off clothes'],
        HIGH_SCHOOL: ['A fabric made from a single fiber', 'A dye mixture', 'A type of zipper', 'Fabric made from two or more fiber types'],
        UNDERGRADUATE: ['Clothes discarded after years of use', 'Clothes donated to charity', 'Clothes sold online', 'Cutting scraps and unsold stock created before products reach users'],
        GRADUATE: ['Exports are always fully resold', 'Importing countries pay nothing', 'Exports never contain waste', 'Unsellable portions become waste in systems not built to handle it'],
        PHD: ['Post-consumer textiles are perfectly clean', 'Chemistry cannot affect polymers', 'There are no dyes in clothing', 'Dyes, finishes, elastane and contaminants reduce yields'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Old T-shirts can be cut and tied into bags or used as cleaning rags.',
        MIDDLE_SCHOOL: 'Microfibers are tiny fibers that break off clothes, often during washing.',
        HIGH_SCHOOL: 'A blend mixes fibers, like cotton and polyester, which makes recycling harder.',
        UNDERGRADUATE: 'Pre-consumer textiles are waste from manufacturing, such as offcuts and unsold stock.',
        GRADUATE: 'Part of each exported bale cannot be resold and becomes a waste burden in the receiving country.',
        PHD: 'Real garments are chemically messy, which complicates purification and reduces process yields.',
      },
    },
    {
      id: 'zwtexq5',
      question: {
        ELEMENTARY: 'Where do clothes usually go when they are thrown in the trash?',
        MIDDLE_SCHOOL: 'Which habit helps clothes last longer?',
        HIGH_SCHOOL: 'Why does keeping a garment in use longer reduce its impact?',
        UNDERGRADUATE: 'What does clothing utilization measure?',
        GRADUATE: 'What is a digital product passport?',
        PHD: 'What does dynamic material flow analysis estimate for textiles?',
      },
      options: {
        ELEMENTARY: ['A landfill or a fire that burns trash', 'Back to the cotton field', 'Into a new store', 'Up into the clouds'],
        MIDDLE_SCHOOL: ['Washing in cool water and air-drying', 'Washing in very hot water every day', 'Throwing clothes on the floor', 'Wearing them only once'],
        HIGH_SCHOOL: ['Production impacts are spread over more wears', 'Old clothes become lighter', 'Washing has no impact', 'It makes dyes disappear'],
        UNDERGRADUATE: ['How many times a garment is worn before it stops being used', 'How much a garment weighs', 'How fast a garment is sewn', 'How many stores sell a garment'],
        GRADUATE: ['A digital record of a product\'s materials and origin to support repair and recycling', 'A travel document for fashion designers', 'An online coupon', 'A social media account for a brand'],
        PHD: ['Stocks of clothing in use and future discard volumes', 'Daily fashion trends', 'The color of fibers', 'Retail store locations'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Trashed clothes are usually buried in a landfill or burned, and all their materials are lost.',
        MIDDLE_SCHOOL: 'Cool washing and air-drying are gentler on fabric, so clothes last longer.',
        HIGH_SCHOOL: 'Most impact happens when a garment is made, so more wears means less impact per wear.',
        UNDERGRADUATE: 'Clothing utilization counts the average number of wears before a garment is discarded.',
        GRADUATE: 'A product passport records material content and origin, helping repairers and recyclers.',
        PHD: 'Dynamic material flow analysis models wardrobe stocks and when garments will be discarded.',
      },
    },
  ],
}

export default expansion
