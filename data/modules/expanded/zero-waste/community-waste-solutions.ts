import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'community-waste-solutions',
  lessons: [
    {
      id: 'zw-comm-1',
      title: 'Together for Zero Waste: Sharing, Repair and Reuse in Communities',
      content: {
        ELEMENTARY: `
<h2>Better Together: Neighbors Who Waste Less</h2>
<p>Hi, I am Pip the Squirrel! Squirrels share the best acorn spots with their friends, and people can share too. When neighbors work together, they can use fewer things, fix what is broken and keep good stuff out of the trash. Let's see how!</p>

<h3>Why Share?</h3>
<p>Think about a ladder. Most families only use a ladder a few times a year. If every house on the street buys its own ladder, that is a lot of ladders sitting in garages doing nothing. If neighbors share one or two ladders, fewer ladders need to be made, and fewer end up in the trash one day.</p>
<ul>
<li><strong>Sharing:</strong> letting other people use something you have, so they do not need to buy their own</li>
<li><strong>Borrowing:</strong> using something that belongs to someone else for a while and then giving it back</li>
<li><strong>Library:</strong> a place where you borrow things like books, toys or tools and bring them back later</li>
</ul>

<h3>Fixing Things Together</h3>
<p>Some towns have a special day called a repair cafe. People bring a broken lamp, a ripped jacket or a wobbly chair. Friendly helpers show them how to fix it. Instead of throwing it away, the lamp shines again!</p>
<ul>
<li><strong>Repair:</strong> fixing something that is broken so it can be used again</li>
<li><strong>Volunteer:</strong> a helper who gives their time because they care, not to get paid</li>
<li><strong>Swap:</strong> trading things you no longer need for things someone else no longer needs</li>
</ul>

<h3>Ideas From Around the Neighborhood</h3>
<p>Communities have lots of clever ideas. Some have a little free library box on a post. Some have toy swaps where kids trade toys they have outgrown. Some schools collect lost-and-found clothes and give them to families who need them. Some gardens share one big compost pile for the whole street.</p>

<h3>What You Can Do</h3>
<ol>
<li>Pass on clothes and toys you have outgrown to a friend or younger cousin.</li>
<li>Ask your class to hold a book or toy swap.</li>
<li>Before buying something new, ask: could we borrow it instead?</li>
<li>Help a grown-up fix something, like sewing on a button.</li>
</ol>

<h3>Think About It</h3>
<p>What is something at your home that you only use once in a while? Could you share it with a neighbor? When we share and fix things together, our whole community becomes a team against waste!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Community Programs That Cut Waste</h2>
<p>Most waste talk focuses on what one person or one family can do. But some of the most powerful waste solutions happen at the community level, when neighbors, schools, libraries and local groups organize together. These programs make it easy to share, repair and reuse things that would otherwise be thrown away, and they often bring people closer together at the same time.</p>

<h3>Why Communities Matter</h3>
<p>Many products we own sit unused most of the time. A drill, a camping tent or a sewing machine might be used only a few hours a year. When a community shares these items, fewer need to be manufactured, which saves raw materials, energy and the waste created when they wear out. Communities can also pool skills: one person knows how to fix bikes, another knows how to mend clothes.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Repair cafe:</strong> a free event where volunteers help people fix broken items like clothes, lamps and small appliances</li>
<li><strong>Tool library:</strong> a lending program where members borrow tools instead of each buying their own</li>
<li><strong>Reuse center:</strong> a place that collects used furniture, building materials or household goods and passes them on</li>
<li><strong>Swap event:</strong> a gathering where people trade clothes, books or toys they no longer need</li>
<li><strong>Freecycling:</strong> giving away unwanted items for free, often through a local online group, so they get used again</li>
<li><strong>Community composting:</strong> a shared site where neighbors turn food scraps into compost for local gardens</li>
</ul>

<h3>Comparing Community Programs</h3>
<table>
<thead><tr><th>Program</th><th>What it keeps out of the trash</th><th>Extra benefit</th></tr></thead>
<tbody>
<tr><td>Repair cafe</td><td>Small appliances, clothes, bikes, toys</td><td>People learn repair skills</td></tr>
<tr><td>Tool library</td><td>Tools that would be bought and rarely used</td><td>Saves families money</td></tr>
<tr><td>Clothing swap</td><td>Wearable clothes</td><td>Fun way to refresh a wardrobe</td></tr>
<tr><td>Community compost</td><td>Food scraps and yard waste</td><td>Healthy soil for gardens</td></tr>
<tr><td>Reuse center</td><td>Furniture and building materials</td><td>Affordable goods for neighbors</td></tr>
</tbody>
</table>

<h3>How a Repair Cafe Works</h3>
<ol>
<li>Organizers find a space, such as a library, school or community hall.</li>
<li>Volunteers with fixing skills sign up for different tables: electronics, sewing, bikes, furniture.</li>
<li>Visitors bring broken items and sit with a volunteer while it is repaired.</li>
<li>The visitor watches and helps, so they learn how to fix it next time.</li>
</ol>
<p>Not every item can be saved, but many can, and even a failed repair teaches people how things are built.</p>

<h3>Why It Matters</h3>
<p>Community programs work because they make the sustainable choice the easy choice. When there is a tool library down the street, borrowing is simpler than buying. Students can help by starting a swap at school, volunteering at a repair event or helping a local garden collect compost.</p>
`,
        HIGH_SCHOOL: `
<h2>Community-Based Waste Reduction and Social Enterprise</h2>
<p>Municipal waste systems mostly handle trash after it has been thrown away. Community-based models work further upstream: they reduce how much stuff people need to buy and extend the life of what already exists. These models range from all-volunteer repair events to social enterprises that run reuse stores as businesses with a social mission. Understanding how they work, and why some thrive while others fade, is a useful lens on how change actually happens.</p>

<h3>The Main Models</h3>
<ul>
<li><strong>Sharing systems:</strong> tool libraries, toy libraries and "libraries of things" that lend rarely used items to members</li>
<li><strong>Repair networks:</strong> repair cafes, bike kitchens and fix-it clinics where volunteers and visitors fix items together</li>
<li><strong>Reuse operations:</strong> thrift stores, furniture banks and building material reuse centers that redistribute used goods</li>
<li><strong>Gifting networks:</strong> online and offline groups where people give away items for free to neighbors</li>
<li><strong>Social enterprise:</strong> a business that earns revenue but exists mainly to achieve social or environmental goals, often reinvesting profits locally</li>
<li><strong>Community composting:</strong> neighborhood-scale sites that process food scraps close to where they are produced</li>
</ul>

<h3>Volunteer Groups Versus Social Enterprises</h3>
<table>
<thead><tr><th>Feature</th><th>Volunteer initiative</th><th>Social enterprise</th></tr></thead>
<tbody>
<tr><td>Funding</td><td>Donations, small grants, free space</td><td>Sales and service fees, sometimes grants</td></tr>
<tr><td>Staffing</td><td>Unpaid volunteers</td><td>Paid staff, often including job trainees</td></tr>
<tr><td>Strength</td><td>Low cost, strong community spirit</td><td>Stable, can grow and employ people</td></tr>
<tr><td>Weakness</td><td>Depends on a few key organizers; burnout risk</td><td>Must stay financially viable in a competitive market</td></tr>
</tbody>
</table>
<p>Many reuse social enterprises also provide job training for people facing barriers to employment, so their impact is social as well as environmental.</p>

<h3>Why People Participate</h3>
<p>Convenience matters most. People join when a program is nearby, easy to use and reliable. But motivation is also social: people enjoy meeting neighbors, learning skills and feeling useful. Programs that build these social rewards tend to keep members longer than programs that only appeal to environmental duty.</p>

<h3>Trade-offs and Challenges</h3>
<ul>
<li>Some items are cheap to buy new and hard to repair, so repair can feel not worth the effort.</li>
<li>Products glued shut or lacking spare parts limit what volunteers can fix.</li>
<li>Insurance, safety and liability questions arise when lending power tools or repairing electrical items.</li>
<li>Reuse stores receive donations that are broken or unsellable, which they must then pay to dispose of.</li>
</ul>

<h3>Getting Involved</h3>
<ol>
<li>Map what already exists in your area: repair events, thrift stores, compost sites.</li>
<li>Identify a gap, such as no place to borrow sports gear.</li>
<li>Start small with a one-off event at school and measure how many items are swapped or fixed.</li>
<li>Partner with a library, school or local business for space and publicity.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Community Waste Systems and Collaborative Consumption</h2>
<p>Community waste initiatives occupy the upper levels of the waste hierarchy: prevention and preparation for reuse. Their environmental logic is straightforward, since extending product life and raising utilization reduce demand for new production. Their organizational logic is less obvious. Why do some sharing schemes flourish while others collapse after a year? This lesson analyzes these initiatives through the lenses of utilization, social capital and collaborative consumption.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Collaborative consumption:</strong> accessing goods through sharing, lending, swapping or renting rather than individual ownership</li>
<li><strong>Utilization rate:</strong> the share of time a product is actually in use, which is very low for many household goods</li>
<li><strong>Social capital:</strong> the networks, trust and norms of reciprocity that allow people to cooperate for mutual benefit</li>
<li><strong>Bonding and bridging capital:</strong> ties within a close group versus ties that connect people across different groups</li>
<li><strong>Transaction cost:</strong> the time, effort and coordination needed to arrange a borrowing, swap or repair</li>
<li><strong>Waste hierarchy:</strong> a ranking that prefers prevention and reuse over recycling, recovery and disposal</li>
</ul>

<h3>The Utilization Argument</h3>
<p>If a product is used only a small fraction of the time, sharing it among several households can, in principle, cut the number of units needed by a similar factor. The real saving depends on three things: whether sharing actually replaces purchases rather than adding new use, whether shared items wear out faster from heavier use, and the extra travel needed to collect and return items. A tool library reached by car can lose part of its benefit to transport emissions, while one embedded in a walkable neighborhood keeps most of it.</p>

<h3>Why Social Capital Is the Enabling Condition</h3>
<p>Sharing and repair depend on trust: lenders trust that items return in good condition, and borrowers trust that items are safe. Communities with dense networks and norms of reciprocity reduce the transaction costs of these exchanges. Bonding capital sustains a core group of volunteers; bridging capital brings in new members and diverse skills. Initiatives that depend only on bonding capital often stay small and homogeneous.</p>

<h3>Comparing Initiative Types</h3>
<table>
<thead><tr><th>Initiative</th><th>Primary mechanism</th><th>Key constraint</th></tr></thead>
<tbody>
<tr><td>Library of things</td><td>Raises utilization of rarely used goods</td><td>Inventory management and maintenance</td></tr>
<tr><td>Repair cafe</td><td>Extends product lifetime and builds skills</td><td>Design barriers and parts availability</td></tr>
<tr><td>Reuse store</td><td>Redistributes goods to new owners</td><td>Quality of donations and disposal costs</td></tr>
<tr><td>Peer gifting network</td><td>Low-cost matching of surplus and need</td><td>Reliability and coordination effort</td></tr>
<tr><td>Community composting</td><td>Local organics processing</td><td>Site access, contamination and odor management</td></tr>
</tbody>
</table>

<h3>Measuring Impact</h3>
<p>Common metrics include items repaired, loans made and mass diverted. These are useful but imperfect: mass favors heavy items, and loans do not reveal displaced purchases. Better evaluations combine counts with short surveys asking what people would otherwise have done, which allows rough estimates of avoided production.</p>

<h3>Applied Checklist: Assessing a Community Initiative</h3>
<ol>
<li>Define the product categories and the counterfactual: what would participants do without the program?</li>
<li>Estimate displaced purchases and lifetime extension, not just throughput.</li>
<li>Account for added transport, wear and any rebound from money saved.</li>
<li>Assess organizational resilience: volunteer base, funding mix and dependence on key individuals.</li>
<li>Check inclusion: who participates, and who faces barriers of time, language or location?</li>
</ol>
`,
        GRADUATE: `
<h2>Community-Based Social Marketing, Collective Action and Scaling</h2>
<p>For planners and policymakers, community initiatives raise a strategic question: how can local, often volunteer-driven efforts be supported, replicated and scaled without losing the qualities that make them work? This lesson examines community-based social marketing as a behavior change method, theories of collective action that explain participation, and the institutional choices involved in scaling.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Community-based social marketing:</strong> an approach that uses behavioral research to identify barriers and benefits, then designs and pilots local interventions before broad rollout</li>
<li><strong>Barrier analysis:</strong> systematic research, through literature, interviews and surveys, into what prevents a target behavior</li>
<li><strong>Social norms:</strong> shared expectations about what others do and approve of, which strongly shape participation</li>
<li><strong>Commitment strategy:</strong> asking people to make a small, often public pledge, which tends to increase follow-through</li>
<li><strong>Collective action problem:</strong> a situation where everyone benefits from cooperation but individuals face incentives to free ride</li>
<li><strong>Scaling out and scaling up:</strong> replicating an initiative in new places versus changing the policies and institutions that shape all initiatives</li>
</ul>

<h3>The Community-Based Social Marketing Process</h3>
<ol>
<li>Select behaviors that are non-divisible and end-state, such as using a tool library, rather than vague goals like being sustainable.</li>
<li>Identify barriers and benefits for the specific audience.</li>
<li>Design a strategy combining tools such as prompts, norms, commitments, convenience and feedback.</li>
<li>Pilot with a comparison group to test whether it works.</li>
<li>Implement broadly and continue to evaluate.</li>
</ol>
<p>The core insight is that information campaigns alone rarely change behavior. Removing structural barriers, such as distance or opening hours, and making the behavior socially visible usually matter more.</p>

<h3>Collective Action and Institutional Design</h3>
<p>Shared tool collections and community compost sites are small commons. Research on commons governance suggests they last longer when users help set the rules, monitoring is visible, sanctions are graduated and conflicts can be resolved cheaply. Many failed sharing schemes underinvested in exactly these features, relying on goodwill without clear rules for late returns, damage or contamination.</p>

<h3>Scaling Pathways</h3>
<table>
<thead><tr><th>Pathway</th><th>Example</th><th>Risk</th></tr></thead>
<tbody>
<tr><td>Replication through networks</td><td>A shared toolkit and brand for local repair events</td><td>Variable quality across sites</td></tr>
<tr><td>Municipal partnership</td><td>City funds space or staff for a reuse hub</td><td>Loss of independence; vulnerable to budget cycles</td></tr>
<tr><td>Social enterprise growth</td><td>Reuse store expands to multiple locations</td><td>Mission drift under commercial pressure</td></tr>
<tr><td>Policy change (scaling up)</td><td>Right-to-repair rules or reuse targets</td><td>Slow, contested and politically dependent</td></tr>
</tbody>
</table>

<h3>Economics and Funding</h3>
<p>Community initiatives produce public benefits, such as avoided disposal costs and social cohesion, that they cannot fully capture in revenue. This justifies public support, but funding structures matter. Short project grants encourage launches but not maintenance; multi-year operating support or payments linked to avoided disposal tend to support durability.</p>

<h3>Equity Considerations</h3>
<p>Volunteer-led initiatives often reflect the demographics of their founders. Without deliberate outreach, they can serve already advantaged groups while overlooking communities with long traditions of repair, mending and informal sharing. Partnering with existing community organizations, and recognizing rather than replacing local practices, improves both reach and legitimacy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Specify target behaviors and the barriers the intervention addresses.</li>
<li>Use pilot and comparison groups where feasible.</li>
<li>Measure behavior and avoided purchases, not only awareness.</li>
<li>Track organizational health: volunteer turnover, funding diversity, governance.</li>
<li>Assess who benefits and who is missing.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Community Transitions, Social Innovation and Intervention Design</h2>
<p>Community waste initiatives are a rich research site for questions about how sustainability transitions begin and spread. They are small, numerous and diverse, which makes them suited to comparative study, yet their effects are hard to isolate from broader social and economic change. This lesson surveys the theoretical frameworks, methods and open debates in this field.</p>

<h3>Theoretical Lenses</h3>
<ul>
<li><strong>Grassroots innovation:</strong> bottom-up solutions developed by community actors, often driven by social values rather than profit</li>
<li><strong>Strategic niche management:</strong> a framework analyzing how protected niches build learning, networks and shared expectations that may later influence mainstream regimes</li>
<li><strong>Social practice theory:</strong> an approach that treats routines such as repairing or discarding as configurations of materials, competences and meanings rather than individual choices</li>
<li><strong>Diffusion of innovations:</strong> theory describing how new practices spread through social systems over time</li>
<li><strong>Program fidelity:</strong> the degree to which an intervention is delivered as designed when transferred to new settings</li>
<li><strong>Translocal networks:</strong> connections among local initiatives across places that share knowledge and identity</li>
</ul>

<h3>Niches, Regimes and Their Limits</h3>
<p>Transition frameworks treat repair cafes and libraries of things as niche experiments. A recurring finding is that many niches remain small not because they fail locally but because they conflict with regime features: low prices for new goods, designs that resist repair and norms of individual ownership. Researchers debate whether these initiatives are best understood as seeds of system change, as complements that coexist with mainstream consumption, or as spaces of meaning and community whose value is not captured by scaling metrics at all.</p>

<h3>The Fidelity-Adaptation Tension</h3>
<p>When initiatives replicate, they face a core design question. High fidelity to a model preserves elements that make it effective; adaptation fits local culture, infrastructure and needs. Implementation science distinguishes core components, which should be preserved, from adaptable periphery. Identifying core components empirically for community waste programs is an open problem, since most evaluations lack the comparative designs needed to test which elements matter.</p>

<h3>Methodological Challenges</h3>
<table>
<thead><tr><th>Challenge</th><th>Why it is difficult</th><th>Promising approaches</th></tr></thead>
<tbody>
<tr><td>Counterfactual impact</td><td>Participants self-select; displaced purchases are unobserved</td><td>Matched comparisons, stated and revealed preference combined</td></tr>
<tr><td>Rebound effects</td><td>Money saved may be spent on other consumption</td><td>Household expenditure analysis linked to environmental input-output data</td></tr>
<tr><td>Social outcomes</td><td>Cohesion, skills and wellbeing resist standard metrics</td><td>Mixed methods, network analysis, longitudinal case studies</td></tr>
<tr><td>Spillovers</td><td>Behavior in one domain may spread to, or license, others</td><td>Panel studies tracking multiple behaviors over time</td></tr>
<tr><td>Small-n heterogeneity</td><td>Each initiative differs in context and design</td><td>Qualitative comparative analysis across many cases</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ul>
<li>Do community initiatives meaningfully reduce aggregate material throughput, or mainly change the experience and meaning of consumption?</li>
<li>Does institutional support strengthen initiatives or erode the autonomy and voluntarism that sustain them?</li>
<li>Can digital platforms extend sharing at scale without the commercialization that turned some sharing services into conventional rental markets?</li>
<li>How should research account for long-standing informal repair and sharing economies, especially in lower-income and non-Western contexts, rather than framing community reuse as novel?</li>
</ul>

<h3>Intervention Design Research</h3>
<p>Experimental and quasi-experimental studies can test specific design elements, such as reminders, default enrollment, opening hours or location, against comparison conditions. Agent-based models can explore how participation spreads through networks under different seeding strategies. Combining such designs with ethnographic work helps explain why interventions behave differently across communities.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Identifying core components of repair and sharing programs through multi-site comparative evaluation.</li>
<li>Estimating net material and emissions effects including rebound and transport.</li>
<li>Theorizing relationships between grassroots initiatives and policy changes such as right-to-repair rules.</li>
<li>Studying governance arrangements that keep shared resources durable over many years.</li>
<li>Centering participatory and justice-oriented methods that involve communities as co-researchers.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwcmq1',
      question: {
        ELEMENTARY: 'How can sharing help reduce waste?',
        MIDDLE_SCHOOL: 'What is a repair cafe?',
        HIGH_SCHOOL: 'What is a social enterprise?',
        UNDERGRADUATE: 'What is the key enabling condition for community sharing programs?',
        GRADUATE: 'What is community-based social marketing?',
        PHD: 'What is the fidelity-adaptation tension in scaling community programs?',
      },
      options: {
        ELEMENTARY: ['When we share, fewer things need to be made and thrown away', 'Sharing makes more trash', 'Sharing does not change anything', 'Sharing means buying two of everything'],
        MIDDLE_SCHOOL: ['A free event where volunteers help people fix broken items', 'A coffee shop that sells new appliances', 'A store that sells tools', 'A factory that recycles cans'],
        HIGH_SCHOOL: ['A business that earns revenue but exists mainly to achieve social or environmental goals', 'A government recycling department', 'A company that only sells new products', 'An online game about waste'],
        UNDERGRADUATE: ['Social capital: networks, trust and norms of reciprocity', 'Only large amounts of money', 'Only government rules', 'Only new technology'],
        GRADUATE: ['Using behavioral research to identify barriers and pilot local interventions before rollout', 'Running advertising campaigns that only share information', 'Relying solely on regulations and fines', 'Leaving behavior entirely to market competition'],
        PHD: ['Balancing preservation of effective core components with adapting to local context', 'Programs are too easy to scale', 'Every community needs exactly the same program', 'There is no difficulty transferring programs'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'When neighbors share, each family does not need to buy its own, so less stuff is made and thrown away.',
        MIDDLE_SCHOOL: 'At a repair cafe, volunteers help visitors fix clothes, lamps, bikes and more, and teach them how.',
        HIGH_SCHOOL: 'Social enterprises, like many reuse stores, sell goods or services but put their social or environmental mission first.',
        UNDERGRADUATE: 'Trust and networks lower the transaction costs of lending, borrowing and repairing together.',
        GRADUATE: 'Community-based social marketing researches barriers and benefits, then pilots interventions with comparison groups.',
        PHD: 'Replicating programs requires keeping the elements that make them work while fitting each new context.',
      },
    },
    {
      id: 'zwcmq2',
      question: {
        ELEMENTARY: 'What happens at a repair cafe?',
        MIDDLE_SCHOOL: 'What is a tool library?',
        HIGH_SCHOOL: 'What is a common weakness of all-volunteer initiatives?',
        UNDERGRADUATE: 'What does "utilization rate" describe?',
        GRADUATE: 'Why do information campaigns alone rarely change behavior?',
        PHD: 'What does strategic niche management analyze?',
      },
      options: {
        ELEMENTARY: ['People sell new toys', 'Helpers show people how to fix broken things', 'People throw things away', 'People only drink coffee'],
        MIDDLE_SCHOOL: ['A store that sells expensive tools', 'A lending program where members borrow tools instead of buying them', 'A factory that makes tools', 'A school class about hammers'],
        HIGH_SCHOOL: ['They always earn too much money', 'They depend on a few key organizers and risk burnout', 'They cannot hold events', 'They are not allowed in libraries'],
        UNDERGRADUATE: ['The price of a product', 'The share of time a product is actually in use', 'The number of products in a store', 'How fast a product can be recycled'],
        GRADUATE: ['People never read information', 'Structural barriers like distance and convenience often matter more than knowledge', 'Information is illegal to share', 'Campaigns always cost nothing'],
        PHD: ['How protected niches build learning and networks that may influence mainstream regimes', 'How to manage retail shelf space', 'How to price recycled materials', 'How landfills are engineered'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'At a repair cafe, friendly helpers fix lamps, clothes and chairs with people so they can be used again.',
        MIDDLE_SCHOOL: 'A tool library lends tools that people only need once in a while, so fewer have to be bought.',
        HIGH_SCHOOL: 'Volunteer groups are low cost but often rely on a small core of people who can become exhausted.',
        UNDERGRADUATE: 'Many household goods are used only a small fraction of the time, which is why sharing can reduce how many are needed.',
        GRADUATE: 'Removing practical barriers and using norms and commitments tends to work better than information alone.',
        PHD: 'Strategic niche management studies how experiments in protected spaces may grow and shape wider systems.',
      },
    },
    {
      id: 'zwcmq3',
      question: {
        ELEMENTARY: 'What is a swap?',
        MIDDLE_SCHOOL: 'What happens at a community composting site?',
        HIGH_SCHOOL: 'What motivates people to keep participating in community programs, besides convenience?',
        UNDERGRADUATE: 'Why can a tool library reached mainly by car lose part of its benefit?',
        GRADUATE: 'According to commons research, what helps shared resources last?',
        PHD: 'What does social practice theory treat routines like repairing as?',
      },
      options: {
        ELEMENTARY: ['Throwing things in the trash', 'Buying something new at the store', 'Trading things you do not need for things someone else does not need', 'Hiding toys from friends'],
        MIDDLE_SCHOOL: ['Neighbors throw plastic bottles into a pile', 'Old cars are crushed', 'Neighbors turn food scraps into compost for local gardens', 'Clothes are washed for free'],
        HIGH_SCHOOL: ['Being forced by law', 'Getting paid large salaries', 'Social rewards like meeting neighbors and learning skills', 'Winning prizes every visit'],
        UNDERGRADUATE: ['Tools become heavier', 'Libraries charge too much', 'Transport emissions from collecting and returning items', 'Cars cannot carry tools'],
        GRADUATE: ['Having no rules at all', 'Letting one person decide everything secretly', 'Users helping set rules, visible monitoring and cheap conflict resolution', 'Charging the highest possible fees'],
        PHD: ['Purely individual rational choices', 'Configurations of materials, competences and meanings', 'Random events with no pattern', 'Decisions made only by governments'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A swap lets you trade things you have outgrown for things someone else no longer needs.',
        MIDDLE_SCHOOL: 'Community composting turns neighborhood food scraps into rich soil for gardens nearby.',
        HIGH_SCHOOL: 'Programs that offer friendship, learning and a sense of being useful keep members longer.',
        UNDERGRADUATE: 'Extra car trips add emissions that offset some of the savings from sharing.',
        GRADUATE: 'Shared commons last longer when users shape rules, monitoring is visible and conflicts are easy to resolve.',
        PHD: 'Social practice theory looks at how materials, skills and meanings fit together, not just individual choices.',
      },
    },
    {
      id: 'zwcmq4',
      question: {
        ELEMENTARY: 'What is a good question to ask before buying something new?',
        MIDDLE_SCHOOL: 'Why do community programs work well?',
        HIGH_SCHOOL: 'What challenge do reuse stores often face with donations?',
        UNDERGRADUATE: 'What is bridging social capital?',
        GRADUATE: 'What is a risk of scaling through municipal partnership?',
        PHD: 'Why is the rebound effect a methodological challenge for evaluating sharing programs?',
      },
      options: {
        ELEMENTARY: ['Is it the shiniest one?', 'Can I buy three of them?', 'Will it fit in the trash?', 'Could we borrow it instead?'],
        MIDDLE_SCHOOL: ['They make sharing harder', 'They are only for adults', 'They cost a lot to join', 'They make the sustainable choice the easy choice'],
        HIGH_SCHOOL: ['They receive too few items ever', 'Donations are always perfect', 'Nobody ever donates', 'Some donations are broken or unsellable and must be disposed of at a cost'],
        UNDERGRADUATE: ['Ties only within one close family', 'Money borrowed from a bank', 'A bridge built by volunteers', 'Ties that connect people across different groups'],
        GRADUATE: ['Initiatives become completely independent', 'Funding becomes unlimited', 'Volunteers are no longer allowed', 'Loss of independence and vulnerability to budget cycles'],
        PHD: ['Rebound effects only affect energy use', 'Sharing programs never save money', 'Rebound is always zero', 'Money saved may be spent on other consumption, offsetting benefits'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Borrowing means one less new thing has to be made, which saves materials and waste.',
        MIDDLE_SCHOOL: 'When borrowing or fixing is close by and simple, more people do it.',
        HIGH_SCHOOL: 'Reuse operations must pay to get rid of donations they cannot sell, which is a real cost.',
        UNDERGRADUATE: 'Bridging capital links different groups, bringing in new members and skills.',
        GRADUATE: 'City support helps, but it can reduce autonomy and disappear when budgets change.',
        PHD: 'Households may spend savings on other goods, so net environmental benefits are hard to measure.',
      },
    },
    {
      id: 'zwcmq5',
      question: {
        ELEMENTARY: 'What is a volunteer?',
        MIDDLE_SCHOOL: 'What is freecycling?',
        HIGH_SCHOOL: 'What is a "library of things"?',
        UNDERGRADUATE: 'Why are "items repaired" or "mass diverted" imperfect impact metrics?',
        GRADUATE: 'What is the difference between scaling out and scaling up?',
        PHD: 'Why do researchers caution against framing community reuse as novel?',
      },
      options: {
        ELEMENTARY: ['A helper who gives their time because they care', 'A person who sells toys', 'A kind of robot', 'Someone who makes trash'],
        MIDDLE_SCHOOL: ['Giving away unwanted items for free so they get used again', 'Riding a bike to the dump', 'Recycling only metal', 'Buying things on sale'],
        HIGH_SCHOOL: ['A program that lends rarely used items to members', 'A library that only holds books about waste', 'A warehouse for landfill trash', 'A store that sells new gadgets'],
        UNDERGRADUATE: ['They do not reveal displaced purchases, and mass favors heavy items', 'They are always too precise', 'They count only food waste', 'They cannot be counted at all'],
        GRADUATE: ['Scaling out replicates initiatives in new places; scaling up changes policies and institutions', 'They mean exactly the same thing', 'Scaling up means building taller buildings', 'Scaling out means closing programs'],
        PHD: ['Long-standing informal repair and sharing economies already exist in many communities', 'Reuse was invented recently by researchers', 'Repair has never happened before', 'Only wealthy countries share goods'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Volunteers help at repair cafes, swaps and gardens because they want to make their community better.',
        MIDDLE_SCHOOL: 'Freecycling passes items to neighbors who can use them, keeping them out of the trash.',
        HIGH_SCHOOL: 'A library of things lends tools, toys, camping gear and more, so people do not each need to buy them.',
        UNDERGRADUATE: 'Good evaluations also ask what participants would have done otherwise, to estimate avoided production.',
        GRADUATE: 'Replication spreads initiatives; scaling up changes the rules, such as right-to-repair policies, that affect all of them.',
        PHD: 'Many communities have long traditions of mending and sharing, which research should recognize rather than overlook.',
      },
    },
  ],
}

export default expansion
