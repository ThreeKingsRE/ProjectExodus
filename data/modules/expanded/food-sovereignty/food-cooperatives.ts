import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'food-cooperatives',
  lessons: [
    {
      id: 'fs-coop-1',
      title: 'People-Owned Stores',
      content: {
        ELEMENTARY: `
<h2>A Store That Belongs to Everyone</h2>
<p>Most stores belong to one person or one big company. But some special grocery stores belong to the people who shop there! These stores are called food co-ops. "Co-op" is short for cooperative, which means working together. Let's find out how a store can belong to a whole neighborhood.</p>

<h3>How Does a Co-op Work?</h3>
<p>Imagine your class decided to run a snack table together. Everyone puts in a little money to buy the snacks. Everyone gets a vote on which snacks to sell. If there is extra money at the end, the class decides together what to do with it. That is how a food co-op works, just bigger!</p>
<ul>
<li><strong>Co-op:</strong> a store or business owned and run together by its members</li>
<li><strong>Member:</strong> a person who joins the co-op and becomes one of its owners</li>
<li><strong>Vote:</strong> a way for each person to say what they want so the group can decide fairly</li>
<li><strong>Share:</strong> the small amount of money a member pays to become an owner</li>
<li><strong>Local food:</strong> food grown by farmers who live near the store</li>
</ul>

<h3>Why Do People Start Co-ops?</h3>
<p>Sometimes a neighborhood has no grocery store nearby. Sometimes people want to buy food from local farmers. Sometimes they just want a store that cares about the community. When people team up, they can build the store they wish they had.</p>

<h3>Fair for Everyone</h3>
<p>In a co-op, each member gets one vote. It does not matter if you are rich or not, or if you buy a little or a lot. Everyone's voice counts the same. That makes a co-op a bit like a team where every player matters.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Ask a grown-up if there is a food co-op in your town and visit it together.</li>
<li>Look for signs in the store that tell you which farm the food came from.</li>
<li>Try making a group decision with friends where everyone gets one vote.</li>
<li>Share snacks fairly so everyone gets some.</li>
</ol>

<h3>Think About It</h3>
<p>If you and your friends owned a store, what food would you sell? How would you make sure everyone got a fair say? That is exactly what co-op members think about!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Food Co-ops Work and Why People Start Them</h2>
<p>A food cooperative, or co-op, is a business owned by its members instead of outside investors. Members usually pay a one-time fee or buy a share to join. In return, they own part of the business, vote on big decisions and may share in any profits. Co-ops exist all over the world, from small buying clubs to large grocery stores.</p>

<h3>A Short History</h3>
<p>The modern co-op movement is often traced to a group of workers in Rochdale, England, in the 1840s. Food prices were high and some shopkeepers sold watered-down goods. The workers pooled their money and opened their own store, selling honest food at fair prices. They wrote down rules for running it fairly, and these ideas became the basis of cooperative principles still used today.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Cooperative:</strong> a business owned and controlled by the people who use it</li>
<li><strong>Member-owner:</strong> someone who has bought a share and owns part of the co-op</li>
<li><strong>Board of directors:</strong> a group of members elected to guide the co-op's big decisions</li>
<li><strong>Patronage dividend:</strong> money returned to members based on how much they bought during the year</li>
<li><strong>Buying club:</strong> a small group of people who order food in bulk together to save money</li>
<li><strong>Democracy:</strong> a system where people make decisions by voting fairly</li>
</ul>

<h3>Co-op Store vs. Regular Store</h3>
<table>
<thead><tr><th>Question</th><th>Food co-op</th><th>Typical chain store</th></tr></thead>
<tbody>
<tr><td>Who owns it?</td><td>The members who shop there</td><td>Owners or investors</td></tr>
<tr><td>Who makes big decisions?</td><td>Members vote, one member one vote</td><td>Owners or company leaders</td></tr>
<tr><td>Where do profits go?</td><td>Back into the store, the community or members</td><td>Mostly to owners or shareholders</td></tr>
<tr><td>What is the main goal?</td><td>Serve members and the community</td><td>Earn profit</td></tr>
</tbody>
</table>

<h3>Why People Start Co-ops</h3>
<p>People start food co-ops for many reasons. Some neighborhoods have no grocery store, and residents decide to open one themselves. Some people want to buy organic or local food that big stores do not carry. Farmers start co-ops too, so they can share equipment or sell their crops together and get better prices.</p>

<h3>Challenges</h3>
<p>Co-ops must compete with big stores that can buy huge amounts cheaply. Starting a store takes a lot of money and planning. Members also need to stay involved and attend meetings, which takes time. When members work together well, though, a co-op can last for generations.</p>
`,
        HIGH_SCHOOL: `
<h2>Cooperative Business Models, Governance and Community Benefits</h2>
<p>Cooperatives are a distinct business form found in nearly every country and sector, from groceries to farming, banking and housing. In the food system, co-ops give communities a way to own the stores, farms and distribution networks that feed them. Understanding how they are structured and governed shows why they can deliver benefits that conventional businesses often do not.</p>

<h3>The Cooperative Principles</h3>
<p>Most co-ops follow a set of internationally recognized principles that grew out of the Rochdale tradition:</p>
<ol>
<li><strong>Voluntary and open membership:</strong> anyone who can use the services and accept the responsibilities may join.</li>
<li><strong>Democratic member control:</strong> members govern the co-op, usually on a one member, one vote basis.</li>
<li><strong>Member economic participation:</strong> members contribute capital and share surpluses fairly.</li>
<li><strong>Autonomy and independence:</strong> co-ops remain controlled by their members.</li>
<li><strong>Education, training and information:</strong> co-ops teach members and the public.</li>
<li><strong>Cooperation among cooperatives:</strong> co-ops work together locally and globally.</li>
<li><strong>Concern for community:</strong> co-ops work for the sustainable development of their communities.</li>
</ol>

<h3>Types of Food Co-ops</h3>
<ul>
<li><strong>Consumer co-op:</strong> owned by the shoppers who buy from it, such as a member-owned grocery store</li>
<li><strong>Producer co-op:</strong> owned by farmers or fishers who pool their products to process and market them</li>
<li><strong>Worker co-op:</strong> owned and governed by the people who work in the business</li>
<li><strong>Multi-stakeholder co-op:</strong> owned jointly by more than one group, such as workers, farmers and shoppers</li>
<li><strong>Purchasing co-op:</strong> businesses that band together to buy supplies at better prices</li>
</ul>

<h3>Comparing Models</h3>
<table>
<thead><tr><th>Model</th><th>Who benefits most</th><th>Example in food</th></tr></thead>
<tbody>
<tr><td>Consumer co-op</td><td>Shoppers and neighborhoods</td><td>Community grocery store</td></tr>
<tr><td>Producer co-op</td><td>Farmers who gain bargaining power</td><td>Dairy or fruit marketing co-op</td></tr>
<tr><td>Worker co-op</td><td>Employees who share profits and decisions</td><td>Worker-owned bakery or cafe</td></tr>
<tr><td>Multi-stakeholder</td><td>Several groups along the supply chain</td><td>Food hub owned by farmers and buyers</td></tr>
</tbody>
</table>

<h3>Governance in Practice</h3>
<p>Members elect a board of directors, which hires a general manager to run daily operations. The board sets policy and long-term direction, and members vote on major decisions such as changes to bylaws. Good governance depends on informed, engaged members, transparent finances and a clear mission.</p>

<h3>Community Benefits and Trade-offs</h3>
<p>Because profits stay with members, co-ops tend to keep money circulating locally. Many prioritize local farmers, fair wages and healthy food. Some have opened in neighborhoods that chain stores avoided. However, co-ops can struggle to raise capital, since they cannot sell ownership to outside investors in the usual way. Prices may be higher than discount chains, which can make co-ops feel exclusive unless they offer low-income memberships and affordable product lines.</p>
`,
        UNDERGRADUATE: `
<h2>Co-op Economics, Membership Structures and Market Positioning</h2>
<p>Cooperatives respond to market problems that investor-owned firms may not solve, such as a lack of grocery access, weak farmer bargaining power or concerns about product quality. Analyzing their economics requires attention to how capital is raised, how surplus is distributed and how co-ops position themselves against larger competitors.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>User ownership:</strong> the principle that the people who use a co-op's services are the ones who own it</li>
<li><strong>Member equity:</strong> capital contributed by members through share purchases or retained earnings</li>
<li><strong>Patronage dividend:</strong> a distribution of surplus to members in proportion to how much they used the co-op</li>
<li><strong>Retained earnings:</strong> surplus kept in the business to fund growth and protect against hard times</li>
<li><strong>Market failure:</strong> a situation where private markets do not provide goods or services efficiently or fairly</li>
<li><strong>Countervailing power:</strong> the ability of organized groups, such as farmer co-ops, to balance the power of large buyers or sellers</li>
</ul>

<h3>Capital and Surplus</h3>
<p>Unlike investor-owned firms, co-ops cannot easily raise capital by selling shares that promise large returns. Member equity is usually modest per person, so co-ops rely on retained earnings, member loans, community investment campaigns, preferred shares and lending from cooperative or mission-driven financial institutions. Surplus is either kept as retained earnings or returned as patronage dividends. This structure ties financial benefit to use, not to the amount invested, which aligns the co-op's incentives with member needs rather than shareholder returns.</p>

<h3>Membership Structures</h3>
<table>
<thead><tr><th>Structure</th><th>How it works</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Single fee equity share</td><td>One payment, often in installments</td><td>Simple but raises little capital</td></tr>
<tr><td>Working member</td><td>Members volunteer hours for discounts</td><td>Lowers labor costs but can be hard to manage</td></tr>
<tr><td>Subsidized or low-income share</td><td>Reduced fees for members with less income</td><td>Improves inclusion but needs funding</td></tr>
<tr><td>Open shopping with member benefits</td><td>Anyone shops, members get perks</td><td>Grows sales but weakens member connection</td></tr>
</tbody>
</table>

<h3>Market Positioning</h3>
<p>Many consumer food co-ops compete on product differentiation: local, organic and specialty foods, bulk bins, knowledgeable staff and community values. This positioning has worked well, but natural and organic products are now common in mainstream chains, eroding the co-op's niche. Co-ops respond by deepening local sourcing relationships, offering value product lines, collaborating on purchasing through cooperative associations and emphasizing community ownership itself as a reason to shop.</p>

<h3>Applied Method: Feasibility Assessment for a New Co-op</h3>
<ol>
<li>Define the problem the co-op will solve and the people it will serve.</li>
<li>Estimate market demand through surveys and analysis of local spending.</li>
<li>Assess competition, site options and required square footage.</li>
<li>Build a capital plan combining member equity, loans and grants.</li>
<li>Project sales, margins and break-even point under cautious assumptions.</li>
<li>Recruit enough member-owners before opening to prove community support.</li>
<li>Plan governance, including board training and member communication.</li>
</ol>
`,
        GRADUATE: `
<h2>Cooperatives as Alternative Food System Institutions</h2>
<p>Beyond their role as businesses, food cooperatives are institutions that embody different values about ownership, democracy and the purpose of economic activity. At the graduate level, we examine co-ops as part of social movements that seek to transform the food system, as well as the internal and external pressures that shape what they can achieve.</p>

<h3>Co-ops in Movement History</h3>
<p>Food cooperatives have repeatedly emerged during periods of social change. Consumer co-ops grew during economic depressions as a response to high prices. Farmer co-ops organized to counter the power of railroads, grain buyers and processors. In the United States, Black cooperative traditions, documented by scholars of cooperative economics, have long used collective ownership for economic survival and self-determination in the face of discrimination. Later waves linked co-ops to counterculture, organic food and environmental activism. Each wave combined practical provisioning with political goals.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Solidarity economy:</strong> a framework of economic practices based on cooperation, mutual aid and shared ownership rather than profit maximization</li>
<li><strong>Movement building:</strong> developing the people, relationships and organizations needed for lasting social change</li>
<li><strong>Isomorphism:</strong> the tendency of organizations to become similar to dominant competitors over time</li>
<li><strong>Democratic deficit:</strong> a gap between formal democratic rights and actual member participation in decisions</li>
<li><strong>Cooperative ecosystem:</strong> the network of co-ops, financiers, trainers and supportive policies that helps cooperatives form and grow</li>
<li><strong>Community wealth building:</strong> strategies that keep ownership and income rooted in local communities</li>
</ul>

<h3>Policy and Support Environment</h3>
<p>Co-ops perform best where a supportive ecosystem exists: enabling legislation, access to patient capital, technical assistance and networks for shared purchasing. Some governments and cities fund cooperative development as part of community wealth building, and anchor institutions such as hospitals or universities can buy from cooperative suppliers. Where legal forms are unclear or lenders do not understand cooperative structures, formation is harder.</p>

<table>
<thead><tr><th>Support element</th><th>Role</th><th>Common gap</th></tr></thead>
<tbody>
<tr><td>Enabling legislation</td><td>Gives co-ops a clear legal form</td><td>Outdated statutes or unclear rules</td></tr>
<tr><td>Patient capital</td><td>Finances start-up and expansion</td><td>Lenders unfamiliar with member equity</td></tr>
<tr><td>Technical assistance</td><td>Feasibility, governance, management</td><td>Scarce in low-income areas</td></tr>
<tr><td>Cooperative networks</td><td>Shared purchasing and peer learning</td><td>Uneven across regions</td></tr>
</tbody>
</table>

<h3>Equity Tensions</h3>
<p>Co-ops are open by principle, yet many consumer food co-ops have struggled with diversity in membership, staffing and leadership. Higher prices, product mixes oriented to particular tastes and cultures, and locations in more affluent areas can make them feel exclusive. Some have pursued deliberate equity strategies, such as reduced-cost memberships, food assistance acceptance, community-led start-ups in underserved neighborhoods and shared governance with residents. Worker co-ops raise distinct questions about labor conditions, since employees may otherwise be excluded from ownership in consumer co-ops.</p>

<h3>Evaluation Framework</h3>
<ol>
<li><strong>Democratic quality:</strong> share of members voting, diversity of the board, transparency of information.</li>
<li><strong>Economic resilience:</strong> capital reserves, margins and ability to withstand competition.</li>
<li><strong>Community benefit:</strong> local sourcing, food access in underserved areas, quality jobs.</li>
<li><strong>Inclusion:</strong> affordability, cultural relevance and representation.</li>
<li><strong>Movement contribution:</strong> support for other co-ops, policy advocacy and education.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Cooperative Effectiveness, Scale and Systemic Change</h2>
<p>Cooperative research spans economics, sociology, organization studies and political economy. A central question is whether cooperatives can transform food systems or whether they remain niche alternatives that adapt to dominant markets. Doctoral research engages with measurement challenges, theories of organizational change and debates about scale.</p>

<h3>Theoretical Lenses</h3>
<p>Economists analyze co-ops through property rights and transaction cost theories, asking why user ownership emerges and how it handles problems such as free riding and horizon problems, where members with short time horizons underinvest in long-term assets. Sociologists study cooperatives as social movement organizations and examine identity, participation and legitimacy. Political economists situate co-ops within debates about economic democracy, commons and alternatives to capitalism.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Degeneration thesis:</strong> the argument that successful cooperatives tend to drift toward conventional business behavior over time</li>
<li><strong>Horizon problem:</strong> underinvestment that occurs when members cannot capture benefits that arrive after they leave</li>
<li><strong>Free rider problem:</strong> the incentive for individuals to benefit from collective goods without contributing to them</li>
<li><strong>Hybrid organization:</strong> an organization that blends features of different forms, such as cooperative and investor ownership</li>
<li><strong>Regeneration:</strong> processes through which co-ops renew democratic participation and values after drift</li>
<li><strong>Scaling out:</strong> spreading a model through replication and networks rather than growing one large organization</li>
</ul>

<h3>The Scale Debate</h3>
<p>The degeneration thesis predicts that as cooperatives grow, managerial control increases, member participation weakens and market pressure pushes them toward investor-like behavior. Some large agricultural cooperatives have converted to investor ownership or created subsidiaries with outside capital. Critics of the thesis point to cooperatives that have grown large while maintaining strong democratic cultures, and to regeneration mechanisms such as member education, decentralized governance and federated structures. Research increasingly treats degeneration as a contingent outcome shaped by governance design, rather than an inevitable law.</p>

<table>
<thead><tr><th>Scaling strategy</th><th>Mechanism</th><th>Research question</th></tr></thead>
<tbody>
<tr><td>Scaling up</td><td>One co-op grows larger</td><td>Does democratic quality decline with size?</td></tr>
<tr><td>Scaling out</td><td>Replication of many small co-ops</td><td>What supports successful replication?</td></tr>
<tr><td>Federation</td><td>Co-ops form secondary co-ops for shared services</td><td>Can federations gain scale while preserving local control?</td></tr>
<tr><td>Hybridization</td><td>Adding outside investors or subsidiaries</td><td>When does hybrid capital undermine member control?</td></tr>
</tbody>
</table>

<h3>Measuring Effectiveness</h3>
<p>Evaluating co-op performance against investor-owned firms is difficult because co-ops pursue multiple goals. Financial metrics alone miss member benefits such as price, quality, access and voice. Researchers use social accounting, multi-dimensional performance indicators and comparative case studies. Survival analysis compares failure rates across ownership types, but selection effects complicate interpretation. Measuring systemic change, such as influence on market prices, supplier practices or policy, requires network and historical methods.</p>

<h3>Contested Questions</h3>
<ul>
<li>Are cooperatives a transformative alternative or a complement that stabilizes existing markets?</li>
<li>Do multi-stakeholder co-ops resolve conflicts between farmers, workers and consumers, or merely internalize them?</li>
<li>How should research weigh democratic participation against economic efficiency?</li>
<li>Can digital platform cooperatives compete with dominant online food retail?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal studies of democratic participation as food co-ops grow.</li>
<li>Comparative analysis of cooperative ecosystems and enabling policies.</li>
<li>Equity outcomes of co-ops started in underserved neighborhoods.</li>
<li>Governance design for platform and multi-stakeholder food cooperatives.</li>
<li>Methods to measure co-ops' systemic effects on regional food economies.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fcq1',
      question: {
        ELEMENTARY: 'Who owns a food co-op?',
        MIDDLE_SCHOOL: 'How do co-op members make big decisions?',
        HIGH_SCHOOL: 'Which of these is a cooperative principle?',
        UNDERGRADUATE: 'What is a consumer cooperative?',
        GRADUATE: 'What is the solidarity economy?',
        PHD: 'What does the degeneration thesis argue?',
      },
      options: {
        ELEMENTARY: ['The members who shop there', 'One very rich person', 'A robot', 'Nobody'],
        MIDDLE_SCHOOL: ['Democratically, with one vote for each member', 'The manager decides everything alone', 'By flipping a coin', 'Whoever spends the most decides'],
        HIGH_SCHOOL: ['Democratic member control', 'Maximum profit for investors', 'Control by one owner', 'Control by the government'],
        UNDERGRADUATE: ['A co-op owned by the customers who shop there', 'A firm owned by outside investors', 'A store owned by its suppliers', 'A government-run shop'],
        GRADUATE: ['Economic practices based on cooperation, mutual aid and shared ownership', 'A plan to maximize shareholder returns', 'A type of stock market', 'A tax on cooperatives'],
        PHD: ['Successful co-ops tend to drift toward conventional business behavior', 'Co-ops always become more democratic as they grow', 'Co-ops cannot exist in food markets', 'Co-ops should never grow'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Food co-ops belong to their members, the people who shop there!',
        MIDDLE_SCHOOL: 'In a co-op, each member gets one vote, no matter how much they buy.',
        HIGH_SCHOOL: 'Democratic member control means members govern the co-op together.',
        UNDERGRADUATE: 'Consumer co-ops are owned by and serve their shopper-members.',
        GRADUATE: 'The solidarity economy groups co-ops with other cooperative and mutual-aid practices.',
        PHD: 'The thesis predicts managerial control and market pressure will erode cooperative values over time.',
      },
    },
    {
      id: 'fcq2',
      question: {
        ELEMENTARY: 'In a co-op, how many votes does each member get?',
        MIDDLE_SCHOOL: 'Where did the modern co-op movement start?',
        HIGH_SCHOOL: 'Who owns a producer co-op?',
        UNDERGRADUATE: 'What is a patronage dividend?',
        GRADUATE: 'What is isomorphism in organizations?',
        PHD: 'What is the horizon problem in cooperatives?',
      },
      options: {
        ELEMENTARY: ['Ten votes', 'No votes', 'One vote', 'As many as they want'],
        MIDDLE_SCHOOL: ['On a farm in the desert', 'In a big bank', 'With workers in Rochdale, England', 'In a government office'],
        HIGH_SCHOOL: ['Shoppers only', 'Outside investors', 'Farmers or fishers who pool their products', 'The town council'],
        UNDERGRADUATE: ['A fee for joining', 'A loan from a bank', 'Surplus returned to members in proportion to their use of the co-op', 'A tax paid to the state'],
        GRADUATE: ['Organizations becoming more unique over time', 'A type of cooperative law', 'Organizations growing to resemble dominant competitors', 'A method for counting votes'],
        PHD: ['Members cannot see the horizon from the store', 'Too much long-term investment', 'Underinvestment when members cannot capture future benefits', 'A problem with delivery trucks'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Every member gets one vote, so everyone counts the same.',
        MIDDLE_SCHOOL: 'Workers in Rochdale, England opened their own store in the 1840s and wrote fair rules.',
        HIGH_SCHOOL: 'Producer co-ops are owned by farmers or fishers who sell or process together.',
        UNDERGRADUATE: 'Patronage dividends tie benefits to how much members use the co-op, not how much they invested.',
        GRADUATE: 'Co-ops under competitive pressure may start to look and act like mainstream chains.',
        PHD: 'Members who may leave soon have weak incentives to fund assets that pay off later.',
      },
    },
    {
      id: 'fcq3',
      question: {
        ELEMENTARY: 'Why might people start a food co-op?',
        MIDDLE_SCHOOL: 'What does the board of directors do?',
        HIGH_SCHOOL: 'Why do co-ops often struggle to raise money?',
        UNDERGRADUATE: 'Why has the natural foods niche become harder for co-ops?',
        GRADUATE: 'Which strategy helps co-ops become more inclusive?',
        PHD: 'What does "scaling out" mean?',
      },
      options: {
        ELEMENTARY: ['To stop everyone from eating', 'To build a store their neighborhood needs', 'To make food cost more', 'To close all the farms'],
        MIDDLE_SCHOOL: ['Cleans the store every night', 'Is a group of elected members who guide big decisions', 'Delivers food to homes', 'Grows all the vegetables'],
        HIGH_SCHOOL: ['They are not allowed to have money', 'They cannot easily sell ownership to outside investors', 'They never make sales', 'They give everything away'],
        UNDERGRADUATE: ['Nobody wants organic food anymore', 'Organic products are now common in mainstream chains', 'Co-ops are not allowed to sell organic food', 'Organic food has been banned'],
        GRADUATE: ['Raising membership fees for everyone', 'Reduced-cost memberships and community-led start-ups', 'Moving only to wealthy areas', 'Removing member voting'],
        PHD: ['Making one co-op as big as possible', 'Selling the co-op to investors', 'Spreading the model through replication and networks', 'Closing small co-ops'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'People start co-ops to build the kind of store their community needs, like one with fresh local food.',
        MIDDLE_SCHOOL: 'Members elect a board to guide the co-op and make important decisions.',
        HIGH_SCHOOL: 'Without selling investor shares, co-ops rely on member equity, loans and retained earnings.',
        UNDERGRADUATE: 'As chains stock organic and local products, co-ops lose part of what made them different.',
        GRADUATE: 'Lower-cost memberships and resident-led projects make co-ops more accessible.',
        PHD: 'Scaling out spreads the model across many co-ops instead of growing a single giant one.',
      },
    },
    {
      id: 'fcq4',
      question: {
        ELEMENTARY: 'What is local food?',
        MIDDLE_SCHOOL: 'What is a buying club?',
        HIGH_SCHOOL: 'Who owns a worker co-op?',
        UNDERGRADUATE: 'What is countervailing power?',
        GRADUATE: 'What is a democratic deficit in a co-op?',
        PHD: 'What is a hybrid organization in co-op research?',
      },
      options: {
        ELEMENTARY: ['Food from very far away', 'Food made of plastic', 'Food that is only for pets', 'Food grown by farmers who live nearby'],
        MIDDLE_SCHOOL: ['A club for buying toys', 'A sports team', 'A bank for farmers', 'A group that orders food in bulk together to save money'],
        HIGH_SCHOOL: ['The shoppers', 'The suppliers', 'A big company', 'The people who work in the business'],
        UNDERGRADUATE: ['Electricity used by a store', 'Government control of prices', 'Advertising budgets', 'The ability of organized groups to balance powerful buyers or sellers'],
        GRADUATE: ['Too many votes', 'A shortage of money', 'Members refusing to shop', 'A gap between formal voting rights and actual participation'],
        PHD: ['A co-op that only sells hybrid seeds', 'A co-op with two stores', 'A government agency', 'An organization blending features of different forms, like cooperative and investor ownership'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Local food is grown by farmers near you, so it is fresh and helps your neighbors.',
        MIDDLE_SCHOOL: 'Buying clubs order food in large amounts together to get lower prices.',
        HIGH_SCHOOL: 'Worker co-ops are owned and governed by their employees.',
        UNDERGRADUATE: 'Farmer co-ops give individual farmers more bargaining power with large buyers.',
        GRADUATE: 'Members may have votes on paper but rarely use them, weakening democracy in practice.',
        PHD: 'Hybrids add outside capital or other features, raising questions about member control.',
      },
    },
    {
      id: 'fcq5',
      question: {
        ELEMENTARY: 'What do members pay to become owners of a co-op?',
        MIDDLE_SCHOOL: 'What is one challenge food co-ops face?',
        HIGH_SCHOOL: 'What does a multi-stakeholder co-op mean?',
        UNDERGRADUATE: 'Why should a new co-op recruit member-owners before opening?',
        GRADUATE: 'What is a cooperative ecosystem?',
        PHD: 'Why do financial metrics alone miss part of co-op performance?',
      },
      options: {
        ELEMENTARY: ['A share', 'A song', 'A drawing', 'Nothing ever'],
        MIDDLE_SCHOOL: ['Competing with big stores that buy huge amounts cheaply', 'Having too few rules', 'Having no customers anywhere', 'Being too small to need money'],
        HIGH_SCHOOL: ['A co-op owned jointly by more than one group, such as workers and shoppers', 'A co-op with many stores', 'A co-op that sells steaks', 'A co-op owned by one investor'],
        UNDERGRADUATE: ['To prove community support and raise equity', 'To avoid paying rent', 'To skip the business plan', 'Because the law forbids opening with customers'],
        GRADUATE: ['A network of co-ops, financiers, trainers and supportive policies', 'A forest owned by a co-op', 'A single large co-op store', 'An environmental law'],
        PHD: ['Co-ops pursue multiple goals like access, quality and member voice', 'Co-ops do not keep accounts', 'Profit is never measured', 'Financial data are illegal to publish'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Members buy a share, a small payment that makes them part owners.',
        MIDDLE_SCHOOL: 'Big chains can buy in huge quantities, so co-ops must find other ways to compete.',
        HIGH_SCHOOL: 'Multi-stakeholder co-ops share ownership among several groups along the supply chain.',
        UNDERGRADUATE: 'A strong base of member-owners shows demand and provides start-up capital.',
        GRADUATE: 'Co-ops do better where laws, capital, training and networks support them.',
        PHD: 'Member benefits such as price, access and democratic voice are not captured by profit alone.',
      },
    },
  ],
}

export default expansion
