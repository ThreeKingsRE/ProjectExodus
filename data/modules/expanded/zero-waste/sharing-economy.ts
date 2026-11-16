import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'sharing-economy',
  lessons: [
    {
      id: 'zw-share-1',
      title: 'Sharing Is Caring',
      content: {
        ELEMENTARY: `
<h2>Sharing Is Caring for the Planet</h2>
<p>Do you have a toy you only played with once? Lots of things sit in cupboards and closets most of the time, waiting to be used. When we share things, one item can make many people happy. That means fewer new things need to be made, and less ends up as trash. Let's discover how sharing helps the Earth!</p>

<h3>Why Do We Need Fewer Things?</h3>
<p>Every new toy, bike or tool is made from materials taken from nature, like wood, metal and plastic. Factories use energy to make them, and trucks carry them to shops. When something breaks or is not wanted anymore, it can become trash. If we share, one ladder can help a whole street, and one book can be read by a whole class.</p>
<ul>
<li><strong>Sharing:</strong> letting other people use something that belongs to you or to everyone</li>
<li><strong>Borrowing:</strong> using something that belongs to someone else and giving it back</li>
<li><strong>Library:</strong> a place where people borrow books and other things for free</li>
</ul>

<h3>Places Where Sharing Happens</h3>
<p>You might already use sharing places without knowing it! A library shares books with the whole town. Some towns also have toy libraries, where families borrow toys and bring them back when children grow bored of them. Some neighborhoods have little free book boxes on the street. Parks and playgrounds are shared too, because everyone gets to play on the same swings.</p>
<ul>
<li><strong>Toy library:</strong> a place where children borrow toys instead of buying new ones</li>
<li><strong>Hand-me-down:</strong> clothes or toys passed on to a younger child when you outgrow them</li>
<li><strong>Swap:</strong> trading something you do not need for something someone else does not need</li>
</ul>

<h3>Things You Can Do</h3>
<ol>
<li>Visit your library and borrow a book instead of buying one.</li>
<li>Pass clothes you have outgrown to a friend, cousin or neighbor.</li>
<li>Have a toy swap with your class or friends.</li>
<li>Share art supplies at school so fewer get wasted.</li>
<li>Ask a grown-up if you can borrow a tool from a neighbor instead of buying it.</li>
</ol>

<h3>Think About It</h3>
<p>Look around your home. Can you find one thing that you hardly ever use? Could someone else enjoy it? Sharing is kind to friends and kind to the planet at the same time. That makes it a double win!</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Sharing Economy: Use More, Own Less</h2>
<p>Think about a power drill. Many people buy one, use it for a few minutes, and then it sits in a drawer for years. Multiply that by every household in a town, and you get a mountain of products that are mostly idle. The <em>sharing economy</em> is the idea that people can get what they need by sharing, borrowing, renting or swapping instead of each person owning everything. Less buying means fewer products made, fewer resources used and less waste.</p>

<h3>How Sharing Reduces Waste</h3>
<p>Every product has a hidden backstory. Materials are mined or harvested, factories make parts, trucks and ships move them, and stores sell them. At the end, many items are thrown away. When one shared item replaces several owned items, all of those steps happen less often. Sharing also tends to keep items in use longer, because shared items are usually looked after and repaired.</p>

<h3>Kinds of Sharing</h3>
<table>
<thead><tr><th>Type of sharing</th><th>Example</th><th>How it helps</th></tr></thead>
<tbody>
<tr><td>Lending libraries</td><td>Book, toy or tool libraries</td><td>Many people use one item</td></tr>
<tr><td>Swapping</td><td>Clothing swaps and toy swaps</td><td>Items find new owners instead of the trash</td></tr>
<tr><td>Renting</td><td>Renting a costume or camping gear</td><td>No need to buy things used once a year</td></tr>
<tr><td>Shared spaces</td><td>Community gardens and makerspaces</td><td>People share land, tools and skills</td></tr>
<tr><td>Shared rides</td><td>Carpools and bike-share schemes</td><td>Fewer vehicles needed overall</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Sharing economy:</strong> a way of getting what we need by sharing, lending and renting instead of always buying</li>
<li><strong>Tool library:</strong> a place where members borrow tools like drills and ladders instead of buying them</li>
<li><strong>Idle capacity:</strong> the time an item spends unused, like a car parked most of the day</li>
<li><strong>Consumption:</strong> the buying and using up of goods and resources</li>
<li><strong>Makerspace:</strong> a shared workshop where people use tools and learn skills together</li>
<li><strong>Repair cafe:</strong> a community event where volunteers help people fix broken items</li>
</ul>

<h3>Is All Sharing Green?</h3>
<p>Not always. Some sharing apps make it so cheap and easy to rent things that people use them more than they would have otherwise. For example, a ride-hailing trip might replace a bus ride or a walk, which adds traffic rather than reducing it. Sharing helps the planet most when it truly replaces buying new things or replaces more polluting choices.</p>

<h3>Start Sharing</h3>
<ol>
<li>Find out if your town has a library of things, a tool library or a repair cafe.</li>
<li>Organize a clothing or book swap at school.</li>
<li>Make a list of items your family rarely uses and offer to lend them to neighbors.</li>
</ol>
`,
        HIGH_SCHOOL: `
<h2>Collaborative Consumption and Access Over Ownership</h2>
<p>For most of the twentieth century, success was often measured by what people owned: a car, a house full of appliances, closets of clothes. The sharing economy challenges this idea. It is built on <em>access over ownership</em>: what most people want is the benefit a product provides, such as a hole in the wall, a ride across town or a dress for a party, not necessarily the product itself. When access replaces ownership, fewer products can meet the same needs, which can cut material use and waste.</p>

<h3>Forms of Collaborative Consumption</h3>
<ul>
<li><strong>Collaborative consumption:</strong> sharing, swapping, lending, renting or gifting goods and services among many users</li>
<li><strong>Access over ownership:</strong> using goods when needed through borrowing or renting without owning them</li>
<li><strong>Product-sharing system:</strong> one item, such as a car or tool, used by many people at different times</li>
<li><strong>Redistribution market:</strong> passing used goods from someone who does not need them to someone who does</li>
<li><strong>Peer-to-peer platform:</strong> a website or app that connects individuals directly to share, rent or sell goods</li>
<li><strong>Utilization rate:</strong> the share of time a product is actually being used rather than sitting idle</li>
</ul>

<h3>Comparing Sharing Models</h3>
<table>
<thead><tr><th>Model</th><th>Example</th><th>Environmental potential</th><th>Main risk</th></tr></thead>
<tbody>
<tr><td>Community lending</td><td>Tool library, library of things</td><td>High: directly replaces purchases</td><td>Depends on volunteers and funding</td></tr>
<tr><td>Peer-to-peer rental</td><td>Renting a neighbor's camping gear</td><td>Moderate to high</td><td>Trust, insurance and damage disputes</td></tr>
<tr><td>Business-run sharing</td><td>Car-share or bike-share fleets</td><td>Moderate to high if it replaces private cars</td><td>Fleet rebalancing and short product life</td></tr>
<tr><td>Resale and swap</td><td>Secondhand clothing apps</td><td>Moderate: extends product life</td><td>Can encourage buying more, more often</td></tr>
<tr><td>Ride-hailing and short-term home rental</td><td>App-based rides and stays</td><td>Uncertain or negative</td><td>Extra travel, traffic and housing pressure</td></tr>
</tbody>
</table>

<h3>Why the Impact Depends on Behavior</h3>
<p>Sharing helps the environment only if it changes what people do. A shared car that replaces several private cars reduces the number of vehicles that must be built. But if cheap shared rides pull people off buses and bikes, emissions can go up. This is called a <em>rebound effect</em>: savings in one place lead to extra consumption somewhere else. Delivery and transport of shared items also has a footprint, and shared items can wear out faster if users treat them carelessly.</p>

<h3>Social Questions</h3>
<p>The sharing economy is not only about the environment. Platforms connect strangers, which requires trust systems like ratings and reviews. Some platforms rely on gig workers who may lack stable pay or benefits. Community sharing, by contrast, can strengthen neighborhoods and give lower-income residents access to things they could not afford to buy. Who owns and benefits from a sharing system matters.</p>

<h3>Making Sharing Work Better</h3>
<ol>
<li>Prioritize sharing items with low utilization and high production impact, like tools, cars and equipment.</li>
<li>Design shared products to be durable and easy to repair.</li>
<li>Pair car and bike sharing with good public transport rather than competing with it.</li>
<li>Support local, community-run sharing schemes that keep benefits in the neighborhood.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Sharing Economy Business Models</h2>
<p>The term "sharing economy" covers a wide range of arrangements, from volunteer-run tool libraries to global digital platforms valued in the billions. Analyzing them requires separating the marketing label from the underlying mechanics: who owns the assets, how transactions are coordinated, how value is captured and whether the model actually reduces material throughput. This lesson builds a framework for assessing business models, platform dynamics and sustainability impacts.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Platform:</strong> a digital intermediary that matches providers and users and sets the rules for their transactions</li>
<li><strong>Network effects:</strong> the tendency of a platform to become more valuable to each user as more users join</li>
<li><strong>Two-sided market:</strong> a market where a platform must attract two distinct groups, such as owners and renters, at once</li>
<li><strong>Transaction costs:</strong> the time, effort and risk of finding, negotiating with and trusting a trading partner</li>
<li><strong>Rebound effect:</strong> extra consumption triggered by savings or convenience that offsets expected environmental gains</li>
<li><strong>Substitution rate:</strong> the share of shared-use transactions that actually replace a purchase or a more harmful activity</li>
</ul>

<h3>Why Digital Platforms Changed Sharing</h3>
<p>People have always shared, but sharing with strangers used to carry high transaction costs. Smartphones, location data, digital payments and reputation systems lowered those costs dramatically, making it practical to rent a stranger's car for an hour. Network effects then push markets toward concentration: a platform with more listings attracts more users, which attracts more listings. This dynamic explains why a few large firms dominate many sharing markets and why early growth is often subsidized by investors.</p>

<h3>A Typology of Models</h3>
<table>
<thead><tr><th>Model</th><th>Asset ownership</th><th>Coordination</th><th>Revenue logic</th></tr></thead>
<tbody>
<tr><td>Business-to-consumer sharing</td><td>Company owns a fleet</td><td>Company app or counter</td><td>Usage fees or subscriptions</td></tr>
<tr><td>Peer-to-peer platform</td><td>Individuals</td><td>Platform matching and ratings</td><td>Commission on each transaction</td></tr>
<tr><td>Community or nonprofit</td><td>Members or the organization</td><td>Membership and volunteers</td><td>Dues, grants, donations</td></tr>
<tr><td>Platform cooperative</td><td>Members, with shared platform ownership</td><td>Democratic governance</td><td>Fees returned to members</td></tr>
</tbody>
</table>

<h3>Estimating Environmental Impact</h3>
<p>The environmental case for sharing rests on a simple chain of reasoning. If an item sits idle most of the time, raising its utilization means fewer units must be produced to meet the same demand. Production impacts are then spread over more uses. But several factors can erode or reverse the gain:</p>
<ol>
<li><strong>Substitution:</strong> does each shared use replace a purchase, or is it an extra activity that would not otherwise happen?</li>
<li><strong>Logistics:</strong> how much transport is needed to move items between users or to rebalance a fleet?</li>
<li><strong>Durability:</strong> do shared items last long enough under heavy use, or do they wear out quickly?</li>
<li><strong>Income rebound:</strong> what do users do with the money they save by not buying?</li>
<li><strong>Modal shift:</strong> in mobility, does the service draw people from cars or from walking, cycling and transit?</li>
</ol>
<p>Life-cycle assessment is the standard tool for comparing a sharing scenario to an ownership baseline. Results are highly sensitive to assumptions about substitution and user behavior, which is why studies of similar services sometimes reach different conclusions.</p>

<h3>An Applied Checklist</h3>
<ul>
<li>Identify the function delivered, such as kilometers traveled or holes drilled, and use it as the unit of comparison.</li>
<li>Gather evidence on what users would have done without the service.</li>
<li>Include manufacturing, transport, maintenance and end-of-life in the boundary.</li>
<li>Test results against high and low rebound assumptions.</li>
<li>Assess social impacts alongside environmental ones, including worker conditions and access for low-income users.</li>
</ul>
`,
        GRADUATE: `
<h2>Governing the Sharing Economy</h2>
<p>At the graduate level, the sharing economy is best understood as a set of institutional innovations whose environmental and social outcomes depend on governance. Platforms reorganize markets for mobility, housing, labor and goods, often entering faster than regulators can respond. Whether those changes support circularity or simply accelerate consumption depends on regulation, ownership structures, data access and how labor is treated. This lesson examines governance tools, labor implications and system-level environmental effects.</p>

<h3>Key Governance Concepts</h3>
<ul>
<li><strong>Regulatory arbitrage:</strong> gaining advantage by operating in gaps between existing rules, such as those written for hotels or taxis</li>
<li><strong>Platform labor:</strong> work organized through apps, often classified as independent contracting rather than employment</li>
<li><strong>Algorithmic management:</strong> the use of software to assign, monitor, rate and discipline workers</li>
<li><strong>Data governance:</strong> rules about who can collect, access and use the data generated by platform activity</li>
<li><strong>Systemic rebound:</strong> economy-wide increases in consumption that offset efficiency gains from individual services</li>
<li><strong>Municipal sharing strategy:</strong> a city plan that supports community sharing infrastructure as public policy</li>
</ul>

<h3>Labor Implications</h3>
<p>Many sharing platforms, especially in transport and delivery, depend on workers who are classified as independent contractors. Supporters point to flexibility and low barriers to entry; critics point to income volatility, lack of benefits, limited bargaining power and opaque algorithmic control. Courts and legislatures in various jurisdictions have debated worker classification, and outcomes differ. For sustainability analysis, labor matters because a model that degrades working conditions is unlikely to meet social sustainability goals even if it reduces material use.</p>

<h3>Systemic Environmental Effects</h3>
<table>
<thead><tr><th>Sector</th><th>Potential benefit</th><th>Potential system-level harm</th></tr></thead>
<tbody>
<tr><td>Car sharing</td><td>Fewer private cars, lower car ownership</td><td>Limited if mainly used by people who already rarely drive</td></tr>
<tr><td>Ride-hailing</td><td>Fewer parked vehicles</td><td>Empty cruising, more trips, competition with transit</td></tr>
<tr><td>Short-term home rental</td><td>Better use of existing buildings</td><td>Induced travel and pressure on local housing supply</td></tr>
<tr><td>Goods lending and resale</td><td>Extended product life, avoided production</td><td>Faster turnover if resale encourages more purchasing</td></tr>
<tr><td>Micromobility</td><td>Short car trips replaced</td><td>Short vehicle lifetimes and rebalancing emissions</td></tr>
</tbody>
</table>

<h3>Policy Tools</h3>
<ol>
<li><strong>Licensing and registration:</strong> requiring platforms or hosts to register so rules can be enforced.</li>
<li><strong>Data-sharing requirements:</strong> obliging platforms to share anonymized data with cities for planning and oversight.</li>
<li><strong>Integration with transit:</strong> using permits and pricing to steer mobility services toward complementing public transport.</li>
<li><strong>Public sharing infrastructure:</strong> funding libraries of things, repair cafes and community workshops as civic services.</li>
<li><strong>Worker protections:</strong> minimum earnings standards, portable benefits or collective bargaining arrangements.</li>
<li><strong>Product durability standards:</strong> ensuring shared fleets use robust, repairable equipment.</li>
</ol>

<h3>Equity Considerations</h3>
<p>Sharing can widen access to goods and mobility for households that cannot afford ownership, but digital platforms may exclude people without smartphones, bank accounts or good credit. Rating systems can embed bias. Short-term rentals can raise housing costs in popular neighborhoods. Community and public sharing models often score better on inclusion, but they need stable funding and institutional support to scale.</p>

<h3>Evaluation Framework</h3>
<ul>
<li>Define the counterfactual: what would users and the market look like without the service?</li>
<li>Assess material, energy and emissions outcomes across the full system, including induced demand.</li>
<li>Evaluate labor quality, consumer protection and data practices.</li>
<li>Examine distribution of benefits and costs across neighborhoods and income groups.</li>
<li>Consider governance capacity: can the public sector monitor and adjust rules over time?</li>
</ul>
`,
        PHD: `
<h2>Research Frontiers: Commons, Cooperatives and Post-Ownership Transitions</h2>
<p>Research on the sharing economy has moved beyond early optimism about collaborative consumption toward critical analysis of ownership, power and system change. Scholars now ask whether sharing practices can underpin a durable shift away from ownership-centered consumption, or whether platform capitalism absorbs sharing into conventional growth dynamics. This lesson surveys theoretical frames, methodological approaches, contested questions and open directions for doctoral research.</p>

<h3>Theoretical Frames</h3>
<ul>
<li><strong>Platform cooperativism:</strong> a movement and model in which digital platforms are owned and governed by their workers and users</li>
<li><strong>Commons-based peer production:</strong> collaborative creation of shared resources by distributed contributors outside firm hierarchies and price signals</li>
<li><strong>Platform capitalism:</strong> an analytical frame viewing platforms as firms that extract value by controlling data and intermediating markets</li>
<li><strong>Post-ownership:</strong> a hypothesized consumption regime in which access, use rights and collective provision replace private ownership for many goods</li>
<li><strong>Social practice theory:</strong> an approach that studies routines and the materials, skills and meanings that sustain them, rather than individual choices</li>
<li><strong>Commons governance:</strong> institutional arrangements through which communities manage shared resources by collective rules</li>
</ul>

<h3>From Commons Theory to Digital Platforms</h3>
<p>Research on common-pool resources showed that communities can manage shared resources sustainably through locally adapted rules, monitoring and conflict-resolution mechanisms, challenging the assumption that shared resources are inevitably overused. Applying these insights to digital and physical sharing raises new questions. Digital goods such as open software are non-rival, while physical shared goods wear out and must be allocated. Tool libraries and community workshops are small-scale commons; platform cooperatives attempt to combine commons governance with the scale advantages of digital coordination.</p>

<h3>Methodological Approaches</h3>
<table>
<thead><tr><th>Method</th><th>What it reveals</th><th>Key limitation</th></tr></thead>
<tbody>
<tr><td>Consequential life-cycle assessment</td><td>Net environmental change relative to a counterfactual</td><td>Highly sensitive to assumed substitution and rebound</td></tr>
<tr><td>Natural experiments and quasi-experimental designs</td><td>Causal effects of platform entry on travel, housing or ownership</td><td>Requires suitable variation and data access</td></tr>
<tr><td>Agent-based modeling</td><td>How adoption, trust and network effects produce system outcomes</td><td>Behavioral rules are hard to validate</td></tr>
<tr><td>Ethnography and practice studies</td><td>How sharing reshapes routines, meanings and social ties</td><td>Limited generalizability</td></tr>
<tr><td>Institutional and comparative analysis</td><td>How ownership and governance shape outcomes across models</td><td>Small numbers of comparable cases</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ol>
<li><strong>Does sharing reduce aggregate consumption?</strong> Micro-level savings may be offset by income and time rebound, and empirical evidence varies widely by sector and context.</li>
<li><strong>Can cooperatives compete with venture-funded platforms?</strong> Network effects and access to capital favor incumbents, raising questions about financing, scale and federation among cooperatives.</li>
<li><strong>Is post-ownership desirable for everyone?</strong> Access models can shift control and risk to providers, and ownership may provide security that subscription models remove.</li>
<li><strong>What counts as sharing?</strong> Definitional disputes affect which services are studied and how results are generalized.</li>
</ol>

<h3>Transition Perspectives</h3>
<p>Socio-technical transition frameworks treat sharing initiatives as niches that may or may not destabilize dominant ownership regimes. Grassroots innovations offer alternative values and practices but often struggle to scale; commercial platforms scale quickly but may reproduce regime logics. A central research question is how niche practices diffuse while keeping their sustainability and solidarity aims, and what role municipalities, cooperatives and public infrastructure can play in that process.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal studies of whether sharing participation changes household ownership and purchasing over years.</li>
<li>Comparative governance research on platform cooperatives, including financing and decision-making at scale.</li>
<li>Integrated models linking platform network effects with material flows and rebound dynamics.</li>
<li>Research on data commons and how shared data ownership could support public planning.</li>
<li>Studies of equity, inclusion and digital exclusion in access-based consumption.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwshareq1',
      question: {
        ELEMENTARY: 'Why is sharing good for the planet?',
        MIDDLE_SCHOOL: 'What is a tool library?',
        HIGH_SCHOOL: 'What does access over ownership mean?',
        UNDERGRADUATE: 'What are network effects?',
        GRADUATE: 'What is regulatory arbitrage in the sharing economy?',
        PHD: 'What is platform cooperativism?',
      },
      options: {
        ELEMENTARY: ['Fewer new things need to be made, so there is less waste', 'Sharing makes toys break faster', 'Sharing means buying more things', 'Sharing means throwing things away'],
        MIDDLE_SCHOOL: ['A place where members borrow tools instead of buying them', 'A shop that only sells new tools', 'A book about how tools are made', 'A factory that builds hammers'],
        HIGH_SCHOOL: ['Using goods when needed through borrowing or renting without owning them', 'Owning as many products as possible', 'Never using any products at all', 'Buying only brand-new items'],
        UNDERGRADUATE: ['A platform becomes more valuable to each user as more users join', 'A platform loses value whenever it gains users', 'The number of users has no effect on value', 'The cost of running internet cables'],
        GRADUATE: ['Gaining advantage by operating in gaps between rules written for older industries', 'Following every rule exactly as written', 'A government tax on sharing apps', 'A type of insurance for drivers'],
        PHD: ['Digital platforms owned and governed by their workers and users', 'Platforms owned only by outside investors', 'Platforms run entirely by national governments', 'A ban on all digital platforms'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'When one thing is shared by many people, fewer new things are made and less becomes trash.',
        MIDDLE_SCHOOL: 'A tool library lets people borrow tools they only need sometimes, so fewer tools are bought and wasted.',
        HIGH_SCHOOL: 'Access over ownership gives people the benefit of a product without each person owning one.',
        UNDERGRADUATE: 'Network effects make larger platforms more attractive, which tends to concentrate sharing markets.',
        GRADUATE: 'Platforms often grew by operating where hotel or taxi rules did not clearly apply.',
        PHD: 'Platform cooperatives combine digital coordination with democratic ownership by workers and users.',
      },
    },
    {
      id: 'zwshareq2',
      question: {
        ELEMENTARY: 'What is a hand-me-down?',
        MIDDLE_SCHOOL: 'What does idle capacity mean?',
        HIGH_SCHOOL: 'What is a rebound effect in the sharing economy?',
        UNDERGRADUATE: 'What is the substitution rate of a sharing service?',
        GRADUATE: 'What is algorithmic management?',
        PHD: 'What is commons-based peer production?',
      },
      options: {
        ELEMENTARY: ['A brand-new toy from a shop', 'Clothes or toys passed on to a younger child when you outgrow them', 'A glove for your hand', 'A toy that goes in the trash'],
        MIDDLE_SCHOOL: ['How fast a product can be made', 'The time an item spends unused, like a parked car', 'How much a product costs', 'The size of a store'],
        HIGH_SCHOOL: ['When shared items bounce back to the store', 'When savings or convenience lead to extra consumption elsewhere', 'When a product is recycled twice', 'When a platform closes down'],
        UNDERGRADUATE: ['The speed at which users sign up', 'The share of shared uses that actually replace a purchase or a more harmful activity', 'The fee a platform charges', 'The number of items in a fleet'],
        GRADUATE: ['A paper timetable for workers', 'Software that assigns, monitors, rates and disciplines workers', 'A union contract', 'Manual scheduling by a manager'],
        PHD: ['Factory production owned by one firm', 'Collaborative creation of shared resources by distributed contributors outside firm hierarchies', 'Government central planning', 'Producing goods only for export'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A hand-me-down gets used again by someone else instead of being thrown away.',
        MIDDLE_SCHOOL: 'Many items are idle most of the time, so sharing them lets one item do the job of several.',
        HIGH_SCHOOL: 'If cheap shared rides replace walking or buses, emissions can rise instead of fall.',
        UNDERGRADUATE: 'Sharing only reduces impacts when shared uses substitute for purchases or more harmful activities.',
        GRADUATE: 'Algorithmic management uses software rather than human supervisors to control platform work.',
        PHD: 'Peer production creates shared resources through collaboration rather than markets or firm hierarchies.',
      },
    },
    {
      id: 'zwshareq3',
      question: {
        ELEMENTARY: 'Which is a way to share?',
        MIDDLE_SCHOOL: 'Why is not all sharing green?',
        HIGH_SCHOOL: 'Which sharing model has the most uncertain environmental benefit?',
        UNDERGRADUATE: 'Why do digital platforms make sharing with strangers easier?',
        GRADUATE: 'Why might cities require platforms to share data?',
        PHD: 'What did research on common-pool resources show?',
      },
      options: {
        ELEMENTARY: ['Throwing old books away', 'Buying a new toy every day', 'Having a toy swap with friends', 'Hiding your toys from others'],
        MIDDLE_SCHOOL: ['Sharing always uses more plastic', 'Shared things are always broken', 'Cheap sharing apps can make people use things more than before', 'Sharing is against the law'],
        HIGH_SCHOOL: ['Community tool libraries', 'Clothing swaps', 'Ride-hailing and short-term home rental', 'Book libraries'],
        UNDERGRADUATE: ['They make products cheaper to manufacture', 'They remove the need for any trust', 'They lower transaction costs with payments, location data and ratings', 'They ban competition'],
        GRADUATE: ['To sell the data to advertisers', 'To stop platforms from operating', 'To support planning and oversight of how services affect the city', 'To replace public transport'],
        PHD: ['Shared resources are always overused', 'Only private ownership prevents overuse', 'Communities can manage shared resources sustainably with locally adapted rules', 'Commons cannot be governed at all'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A toy swap lets toys find new friends instead of becoming trash.',
        MIDDLE_SCHOOL: 'Sharing helps most when it replaces buying, not when it adds extra trips or use.',
        HIGH_SCHOOL: 'Ride-hailing and home rentals can add travel, traffic and housing pressure, so their impact is uncertain.',
        UNDERGRADUATE: 'Smartphones, digital payments and reputation systems cut the cost and risk of dealing with strangers.',
        GRADUATE: 'Anonymized data helps cities see effects on traffic, housing and transit and adjust rules.',
        PHD: 'Commons research showed that rules, monitoring and conflict resolution can prevent overuse of shared resources.',
      },
    },
    {
      id: 'zwshareq4',
      question: {
        ELEMENTARY: 'What is a library?',
        MIDDLE_SCHOOL: 'What is a repair cafe?',
        HIGH_SCHOOL: 'What is utilization rate?',
        UNDERGRADUATE: 'In a platform cooperative, who governs the platform?',
        GRADUATE: 'What is a municipal sharing strategy?',
        PHD: 'What does social practice theory study?',
      },
      options: {
        ELEMENTARY: ['A shop that sells candy', 'A place where you throw things away', 'A kind of playground', 'A place where people borrow books for free'],
        MIDDLE_SCHOOL: ['A cafe that only sells coffee', 'A shop that sells new phones', 'A factory for broken items', 'A community event where volunteers help people fix broken items'],
        HIGH_SCHOOL: ['The price of a product', 'The number of stores selling a product', 'The weight of a product', 'The share of time a product is actually used rather than idle'],
        UNDERGRADUATE: ['Outside venture investors only', 'A single founder', 'A foreign government', 'Members, through democratic governance'],
        GRADUATE: ['A plan to ban all sharing', 'A tax on secondhand goods', 'A private company marketing plan', 'A city plan that supports community sharing infrastructure as public policy'],
        PHD: ['Only individual purchasing decisions', 'Only prices and markets', 'Only factory output', 'Routines and the materials, skills and meanings that sustain them'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A library shares books with everyone, so each book is read by many people.',
        MIDDLE_SCHOOL: 'Repair cafes help things last longer so they do not become waste.',
        HIGH_SCHOOL: 'Raising utilization means fewer products are needed to meet the same needs.',
        UNDERGRADUATE: 'Platform cooperatives are owned and governed democratically by their members.',
        GRADUATE: 'Cities can fund libraries of things, repair cafes and workshops as public services.',
        PHD: 'Practice theory looks at shared routines and what holds them in place, not just individual choice.',
      },
    },
    {
      id: 'zwshareq5',
      question: {
        ELEMENTARY: 'What can you do with clothes you have outgrown?',
        MIDDLE_SCHOOL: 'Which of these is shared space?',
        HIGH_SCHOOL: 'How can car and bike sharing best help the environment?',
        UNDERGRADUATE: 'Which unit of comparison should a sharing life-cycle assessment use?',
        GRADUATE: 'Why can sharing platforms raise equity concerns?',
        PHD: 'Why is the question of whether sharing reduces aggregate consumption contested?',
      },
      options: {
        ELEMENTARY: ['Pass them to a friend, cousin or neighbor', 'Throw them in the trash', 'Hide them under the bed forever', 'Cut them into tiny pieces'],
        MIDDLE_SCHOOL: ['A community garden', 'A private bedroom', 'A locked safe', 'A personal phone'],
        HIGH_SCHOOL: ['By working alongside good public transport', 'By replacing all buses', 'By adding as many cars as possible', 'By encouraging longer drives'],
        UNDERGRADUATE: ['The function delivered, such as kilometers traveled', 'The number of app downloads', 'The color of the products', 'The age of the company'],
        GRADUATE: ['They may exclude people without smartphones, bank accounts or good credit', 'They always give everyone equal access', 'They only serve rural areas', 'They are free for everyone'],
        PHD: ['Micro-level savings may be offset by income and time rebound, and evidence varies by context', 'Every study has found the same result', 'Consumption cannot be measured at all', 'Sharing has never been studied'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Passing clothes on means someone else can wear them, and fewer new clothes are needed.',
        MIDDLE_SCHOOL: 'Community gardens share land, tools and skills among many people.',
        HIGH_SCHOOL: 'Sharing schemes help most when they complement transit rather than pulling riders away from it.',
        UNDERGRADUATE: 'Comparing by function makes sharing and ownership scenarios fairly comparable.',
        GRADUATE: 'Digital requirements and rating systems can exclude or disadvantage some groups.',
        PHD: 'Rebound effects and differing contexts mean studies reach different conclusions about net consumption.',
      },
    },
  ],
}

export default expansion
