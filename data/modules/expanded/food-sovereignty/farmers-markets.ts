import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'farmers-markets',
  lessons: [
    {
      id: 'fs-market-1',
      title: 'Meet Your Farmer',
      content: {
        ELEMENTARY: `
<h2>Meet the People Who Grow Your Food</h2>
<p>Have you ever wondered who grew the carrot on your plate? At a farmers market, you can find out! Farmers bring food they grew themselves and set up tables, tents and baskets. You can walk from stand to stand, say hello, and ask questions. It feels like a big outdoor party made of food.</p>

<h3>What You Can Find</h3>
<p>Farmers markets change with the seasons. In spring you might see lettuce, peas and strawberries. In summer there are tomatoes, corn, peaches and berries. In fall you will find apples, pumpkins and squash. Some stands also sell eggs, honey, bread, cheese or flowers.</p>
<ul>
<li><strong>Farmers market:</strong> a place where farmers sell food they grew directly to the people who eat it</li>
<li><strong>Stand:</strong> a table or tent where one farmer shows and sells their food</li>
<li><strong>Season:</strong> a time of year, like spring or fall, when certain foods are ready to pick</li>
<li><strong>Harvest:</strong> picking fruits and vegetables when they are ripe and ready to eat</li>
<li><strong>Local food:</strong> food grown close to where you live instead of far away</li>
</ul>

<h3>Why Farmers Markets Are Special</h3>
<p>Food at the market usually traveled a short distance, so it can be picked when it is ripe and still taste fresh. When you buy from a farmer, the money goes right to the family who did the work. You can also learn amazing things. Ask a farmer how they keep bugs away or which apple is best for pie. Most farmers love to talk about their crops!</p>

<h3>Your Market Adventure</h3>
<ol>
<li>Bring a reusable bag and go with a grown-up.</li>
<li>Walk around the whole market first to see everything.</li>
<li>Pick one fruit or vegetable you have never tried before.</li>
<li>Ask the farmer a question, like "How do you grow this?"</li>
<li>Say thank you, and try your new food at home!</li>
</ol>

<h3>A Place for Everyone</h3>
<p>Many markets have music, cooking shows and games for kids. Some help families use food benefits so more people can buy fresh food. A farmers market is not just a store. It is a place where neighbors meet, farmers and families become friends, and everyone learns where food really comes from.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Farmers Markets Connect Farms and Communities</h2>
<p>Most food in a supermarket passes through many hands before you buy it: packers, shippers, warehouses, wholesalers and stores. At a farmers market, the farmer sells straight to you. This is called <em>direct marketing</em>, and it changes who earns the money, how fresh the food is, and how people in a community connect with each other.</p>

<h3>Following the Food Dollar</h3>
<p>When you buy food at a grocery store, only a small part of what you pay usually goes to the farmer. The rest pays for processing, transport, packaging, advertising and the store itself. At a farmers market, the farmer keeps most of the sale, minus costs like the stall fee, gas and their own time selling.</p>
<table>
<thead><tr><th>Step in the chain</th><th>Supermarket</th><th>Farmers market</th></tr></thead>
<tbody>
<tr><td>Who sells to you</td><td>A store employee</td><td>The farmer or farm worker</td></tr>
<tr><td>Distance food travels</td><td>Often hundreds or thousands of kilometers</td><td>Usually from nearby farms</td></tr>
<tr><td>Farmer's share of your money</td><td>Usually a small part</td><td>Most of it</td></tr>
<tr><td>Choice</td><td>Same foods all year</td><td>Changes with the seasons</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Direct marketing:</strong> farmers selling straight to customers without stores or wholesalers in between</li>
<li><strong>Middleman:</strong> a business between the farmer and the customer that buys, moves or sells food</li>
<li><strong>Supply chain:</strong> all the steps food goes through from the farm to your plate</li>
<li><strong>Market manager:</strong> the person who organizes the market, chooses vendors and sets the rules</li>
<li><strong>Vendor:</strong> a farmer or food maker who sells at a market stand</li>
<li><strong>Food assistance benefits:</strong> government help, like SNAP in the United States, that families use to buy food</li>
</ul>

<h3>Good for Farms and Neighborhoods</h3>
<p>Many small farms could not survive selling only to big stores, which often want huge, uniform amounts at low prices. Markets give these farms a place to sell smaller amounts of many different crops. Markets also become community gathering spots. Researchers have observed that shoppers tend to have many more conversations at farmers markets than in supermarkets.</p>

<h3>Making Markets Work for Everyone</h3>
<p>Markets are not perfect. They may be open only a few hours a week, prices can be higher for some items, and not every neighborhood has one. Many markets now accept food assistance benefits, and some offer programs that match those dollars so families can buy more fruits and vegetables. Some cities run mobile markets that bring farm food to neighborhoods with few grocery stores.</p>
`,
        HIGH_SCHOOL: `
<h2>The Economics of Direct-to-Consumer Food</h2>
<p>Farmers markets are one of the most visible forms of direct-to-consumer (DTC) agriculture, alongside farm stands, community supported agriculture and online farm sales. They promise better prices for farmers, fresher food for customers and stronger communities. But they also face real economic and social challenges. This lesson weighs both sides.</p>

<h3>Why Farmers Choose Direct Sales</h3>
<p>In conventional supply chains, each intermediary takes a margin, so the farmer receives only a fraction of the retail price. Selling directly lets farmers capture the retail price themselves. In exchange, they take on jobs that intermediaries usually do: transporting, displaying, pricing, handling payments and talking with customers.</p>
<ul>
<li><strong>Farm share:</strong> the portion of the final retail price that ends up with the farmer</li>
<li><strong>Price premium:</strong> a higher price customers willingly pay for qualities like freshness or local origin</li>
<li><strong>Transaction cost:</strong> the time and money spent making a sale, such as travel and staffing a stand</li>
<li><strong>Producer-only rule:</strong> a market policy that vendors may sell only what they grew or made</li>
<li><strong>Nutrition incentive:</strong> a program that adds extra dollars when shoppers use food benefits for produce</li>
<li><strong>Multiplier effect:</strong> money spent locally that keeps circulating through other local businesses</li>
</ul>

<h3>Benefits and Challenges</h3>
<table>
<thead><tr><th>Group</th><th>Benefits</th><th>Challenges</th></tr></thead>
<tbody>
<tr><td>Farmers</td><td>Higher share of the sale, quick cash flow, customer feedback, space to test new crops</td><td>Long hours, weather risk, unpredictable sales, small volumes</td></tr>
<tr><td>Shoppers</td><td>Fresh seasonal food, knowing the grower, unusual varieties</td><td>Limited hours, sometimes higher prices, fewer convenience items</td></tr>
<tr><td>Communities</td><td>Gathering space, local spending, support for new farmers</td><td>Markets may not reach low-income or transit-poor neighborhoods</td></tr>
</tbody>
</table>

<h3>Are Markets More Expensive?</h3>
<p>Price comparisons are mixed. Some studies find market prices competitive with supermarkets for seasonal produce at peak harvest, while specialty items and organic goods often cost more. Shoppers also weigh qualities that price tags miss, such as freshness and supporting local farms. For low-income families, though, cost and limited hours remain real barriers.</p>

<h3>Expanding Access</h3>
<ol>
<li><strong>Accepting food benefits:</strong> many markets use a central token or card system so vendors can accept benefit payments.</li>
<li><strong>Matching programs:</strong> incentives that double benefit dollars spent on fruits and vegetables.</li>
<li><strong>Location and timing:</strong> markets near transit, clinics or schools, and evening hours for working families.</li>
<li><strong>Inclusive vendors:</strong> recruiting farmers and food makers who reflect the community's cultures.</li>
</ol>

<h3>Think Like a Market Manager</h3>
<p>Running a market means balancing many interests. Too many vendors selling the same crop and nobody earns enough; too few and shoppers go elsewhere. Managers set fees, choose a vendor mix, enforce rules and promote the market. A healthy market grows when both farmers and shoppers keep coming back.</p>
`,
        UNDERGRADUATE: `
<h2>Farmers Markets and Local Food System Outcomes</h2>
<p>Farmers markets are frequently promoted as tools for farm viability, community health and local economic development. Evaluating those claims requires care: markets are diverse, data are often limited, and outcomes depend on design and context. This lesson analyzes market impacts on farms, food access and local economies, and introduces methods for assessing them.</p>

<h3>Farm Viability</h3>
<p>For many small and beginning farms, direct markets are a primary or entry sales channel. They offer higher margins per unit, rapid feedback and low barriers to entry. However, research on farm finances suggests direct sales are often a modest share of total agricultural sales and that labor costs of selling can erode the margin advantage. Many farms combine channels, using markets for brand building and then adding restaurants, CSA subscriptions or food hubs to reach volume.</p>
<ul>
<li><strong>Channel mix:</strong> the combination of sales outlets a farm uses to balance price, volume and labor</li>
<li><strong>Gross margin:</strong> sales revenue minus the direct costs of producing and selling those goods</li>
<li><strong>Labor opportunity cost:</strong> the value of what farmers could do with the hours spent selling</li>
<li><strong>Food hub:</strong> an enterprise that aggregates, distributes and markets products from many local farms</li>
<li><strong>Economic impact analysis:</strong> estimating how spending in one sector affects jobs and income across a region</li>
<li><strong>Substitution effect:</strong> local spending that replaces, rather than adds to, spending at other local businesses</li>
</ul>

<h3>Local Economic Effects</h3>
<p>Proponents argue that money spent at markets recirculates locally. Economic impact models typically estimate positive effects, but results depend heavily on assumptions. A key issue is substitution: if a shopper buys tomatoes at the market instead of at a locally owned grocer, the net regional gain is smaller than gross market sales suggest. Market days may also generate spillover spending at nearby shops.</p>

<h3>Food Access</h3>
<table>
<thead><tr><th>Barrier</th><th>Mechanism</th><th>Common intervention</th></tr></thead>
<tbody>
<tr><td>Price</td><td>Produce costs compete with tight food budgets</td><td>Benefit acceptance and matching incentives</td></tr>
<tr><td>Location</td><td>Markets cluster in higher-income areas</td><td>Siting in underserved areas, mobile markets</td></tr>
<tr><td>Time</td><td>Limited hours conflict with work schedules</td><td>Evening or weekend markets, longer seasons</td></tr>
<tr><td>Culture and belonging</td><td>Products and atmosphere may not reflect all residents</td><td>Diverse vendors, community-led programming</td></tr>
</tbody>
</table>
<p>Evaluations of nutrition incentive programs have generally found increased fruit and vegetable purchases among participants, though effect sizes and long-term diet changes vary.</p>

<h3>Applied Method: Evaluating a Market</h3>
<ol>
<li>Define the outcomes of interest: farm income, shopper access, diet, community connection.</li>
<li>Collect baseline data: vendor sales, shopper counts, zip codes, payment types.</li>
<li>Use simple tools like dot surveys and sticker counts to measure shopper demographics.</li>
<li>Estimate net economic effects, accounting for substitution and spillover.</li>
<li>Compare against a counterfactual such as similar neighborhoods without markets.</li>
</ol>
<p>Rigorous evaluation is rare because markets have small budgets, so partnerships with universities and extension services are often key.</p>
`,
        GRADUATE: `
<h2>Farmers Markets as Alternative Food Networks</h2>
<p>Scholars group farmers markets with community supported agriculture, food hubs and other short supply chains under the label <em>alternative food networks</em>. These networks aim to re-connect producers and consumers, re-embed food in social and ecological relationships, and challenge the concentrated structure of conventional distribution. This lesson examines that ambition critically, including what markets can and cannot change.</p>

<h3>Theoretical Lenses</h3>
<ul>
<li><strong>Alternative food network:</strong> a food provisioning arrangement positioned as different from mainstream industrial supply chains</li>
<li><strong>Short food supply chain:</strong> a chain with few or no intermediaries between producer and consumer</li>
<li><strong>Social embeddedness:</strong> the degree to which economic exchange is shaped by trust, relationships and shared norms</li>
<li><strong>Local trap:</strong> the assumption that local scale is inherently more just or sustainable than other scales</li>
<li><strong>Conventionalization:</strong> the drift of alternative markets toward mainstream practices as they grow</li>
<li><strong>Civic agriculture:</strong> locally oriented agriculture tied to community economic and social development</li>
</ul>
<p>Embeddedness scholarship notes that markets combine relational exchange with ordinary price competition: shoppers value relationships, but they still compare prices, and vendors still compete. The local trap critique warns that local is a scale, not an outcome; a local system can still be exploitative or exclusionary.</p>

<h3>Equity Critiques</h3>
<p>Research has documented that many markets primarily serve higher-income and, in some regions, predominantly white shoppers, and that the cultural codes of markets can make other residents feel unwelcome. Farmworker labor conditions are rarely visible in market narratives. Organizers respond with benefit acceptance, community-designed markets, and support for farmers of color and immigrant growers, who often face barriers to land and credit.</p>

<h3>Policy and Governance</h3>
<table>
<thead><tr><th>Policy lever</th><th>Intended effect</th><th>Governance consideration</th></tr></thead>
<tbody>
<tr><td>Benefit acceptance infrastructure</td><td>Lower payment barriers for low-income shoppers</td><td>Who pays for equipment and transaction processing</td></tr>
<tr><td>Nutrition incentive funding</td><td>Raise produce purchases, boost farm sales</td><td>Funding stability across budget cycles</td></tr>
<tr><td>Public space and permitting</td><td>Secure sites and simplify operation</td><td>Zoning, health codes, fees for small vendors</td></tr>
<tr><td>Market development grants</td><td>Start-up and capacity building</td><td>Risk of dependency on short-term grants</td></tr>
</tbody>
</table>

<h3>Market Governance Models</h3>
<p>Markets may be run by nonprofits, farmer associations, municipalities, or private operators. Governance choices shape vendor rules, fee structures and whose interests prevail. Producer-only rules protect farmers from resellers but may exclude small food entrepreneurs; strict rules on location may preserve local identity while limiting product range.</p>

<h3>Evaluation Framework</h3>
<ol>
<li><strong>Economic:</strong> vendor net income, retention of farmers across seasons, entry of new farmers.</li>
<li><strong>Access:</strong> share of sales from benefit programs, shopper demographics relative to neighborhood.</li>
<li><strong>Social:</strong> relationships, civic participation, sense of belonging.</li>
<li><strong>Environmental:</strong> farm practices of vendors, not just distance traveled.</li>
<li><strong>Procedural:</strong> who participates in market decisions.</li>
</ol>
<p>Food miles alone are a weak sustainability indicator, since transport is often a small share of food's life-cycle emissions compared with production. Markets' environmental value lies mainly in supporting diverse, smaller farms and their practices.</p>
`,
        PHD: `
<h2>Research Frontiers: Effectiveness, Scale and Institutional Embeddedness</h2>
<p>After decades of growth, research on farmers markets has shifted from documenting their spread to asking harder questions: under what conditions do markets deliver their claimed outcomes, why do many plateau or close, and how are they embedded in broader institutional arrangements? This lesson reviews methods, debates and open questions for advanced researchers.</p>

<h3>Identification Problems in Impact Research</h3>
<p>Most market evaluations rely on cross-sectional surveys and vendor self-reports. These suffer from selection bias, since health-conscious or higher-income people are more likely to shop at markets, and from the lack of credible counterfactuals. Stronger designs include difference-in-differences comparisons around market openings, natural experiments from policy changes such as benefit acceptance rollouts, randomized incentive trials, and transaction-level data from payment systems.</p>
<ul>
<li><strong>Selection bias:</strong> distortion arising when the people studied differ systematically from the comparison group</li>
<li><strong>Counterfactual:</strong> what would have happened in the absence of the intervention being studied</li>
<li><strong>Difference-in-differences:</strong> comparing changes over time between treated and untreated groups to estimate effects</li>
<li><strong>Market saturation:</strong> the point where additional markets divide existing demand rather than expand it</li>
<li><strong>Institutional embeddedness:</strong> how organizations are shaped by surrounding rules, funding and partner networks</li>
<li><strong>Scaling up:</strong> increasing volume through aggregation and larger buyers rather than replicating small outlets</li>
</ul>

<h3>Scaling Limitations</h3>
<p>Market counts grew rapidly for years, then flattened in several regions. Explanations include saturation, competition from grocery chains that adopted local branding, home delivery services, and vendor fatigue from long selling days. Scaling direct sales faces structural limits: the labor of selling does not shrink with volume, and many consumers prefer convenience. Research thus distinguishes scaling out (more markets), scaling up (aggregation through food hubs and institutional procurement), and scaling deep (changing values and norms).</p>

<h3>Methodological Approaches</h3>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Regional input-output modeling</td><td>Estimates economy-wide multipliers</td><td>Sensitive to substitution assumptions</td></tr>
<tr><td>Spatial accessibility analysis</td><td>Maps who can physically reach markets</td><td>Ignores time, culture and price barriers</td></tr>
<tr><td>Ethnography</td><td>Reveals belonging, exclusion and meaning</td><td>Limited generalizability</td></tr>
<tr><td>Panel data on vendors</td><td>Tracks farm survival and channel shifts</td><td>Attrition and small samples</td></tr>
<tr><td>Field experiments</td><td>Credible causal estimates of incentives</td><td>Cost and ethical constraints</td></tr>
</tbody>
</table>

<h3>Institutional Embeddedness</h3>
<p>Markets rely on public land, municipal permits, benefit program rules, health regulations and grant funding. Their stability therefore reflects institutional arrangements more than consumer enthusiasm alone. Comparative research asks how differing regulatory environments, including traditional public markets in many countries that predate the modern alternative food movement, shape vendor composition and access. This perspective cautions against treating the contemporary North American model as universal.</p>

<h3>Contested Questions</h3>
<p>Do markets meaningfully challenge concentrated food retail, or do they function as a niche complement that leaves dominant structures intact? Do nutrition incentives produce lasting diet changes or temporary purchase shifts? Does a relational economy at markets translate into political mobilization for broader food system reform? Answers depend on which outcomes and time horizons researchers privilege.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Linked transaction and health data to assess long-run diet effects of incentives.</li>
<li>Vendor-level panel studies explaining farm entry, exit and channel transitions.</li>
<li>Comparative studies of public market traditions across regions and regulatory systems.</li>
<li>Analysis of digital platforms that blend market relationships with online ordering.</li>
<li>Participatory research with excluded communities on market design and governance.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fmq1',
      question: {
        ELEMENTARY: "What is special about buying food at a farmers market?",
        MIDDLE_SCHOOL: "What is direct marketing?",
        HIGH_SCHOOL: "Why can farmers earn a bigger share of the price at a farmers market?",
        UNDERGRADUATE: "Why can economic impact studies overstate the local benefit of farmers markets?",
        GRADUATE: "What does the local trap critique argue?",
        PHD: "Why do cross-sectional surveys struggle to show causal market impacts?",
      },
      options: {
        ELEMENTARY: ["You can meet the farmer who grew it", "Everything is frozen", "The food comes from very far away", "There are no fruits or vegetables"],
        MIDDLE_SCHOOL: ["Farmers selling straight to customers without stores in between", "Selling food only on television", "Shipping food overseas", "Giving food away for free"],
        HIGH_SCHOOL: ["They sell directly, so no intermediaries take a margin", "Markets pay farmers a government salary", "Farmers pay no costs at markets", "Shoppers must buy everything"],
        UNDERGRADUATE: ["They may ignore substitution away from other local businesses", "They always count too few shoppers", "They exclude farm sales", "They assume no money stays local"],
        GRADUATE: ["Local scale is not automatically more just or sustainable", "Local food is always better", "Markets should never be local", "Only global supply chains are fair"],
        PHD: ["Market shoppers differ systematically from non-shoppers, and counterfactuals are missing", "Surveys are always too large", "Markets have no shoppers to survey", "Cross-sectional data measure change over time perfectly"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "At a farmers market, the farmers sell their own food, so you can meet them and ask questions.",
        MIDDLE_SCHOOL: "Direct marketing cuts out the middlemen so the farmer sells right to you.",
        HIGH_SCHOOL: "Without wholesalers and stores, the farmer keeps the retail price, minus their own selling costs.",
        UNDERGRADUATE: "If market spending replaces spending at a local grocer, the net regional gain is smaller.",
        GRADUATE: "Local is a scale, not an outcome; a local system can still be exploitative or exclusionary.",
        PHD: "Selection bias and missing counterfactuals make it hard to separate market effects from who chooses to shop.",
      },
    },
    {
      id: 'fmq2',
      question: {
        ELEMENTARY: "Why does food at a farmers market often taste fresh?",
        MIDDLE_SCHOOL: "What does a market manager do?",
        HIGH_SCHOOL: "What is a nutrition incentive program?",
        UNDERGRADUATE: "Why do many farms combine farmers markets with other sales channels?",
        GRADUATE: "What does conventionalization describe?",
        PHD: "What does scaling up mean for direct-market food systems?",
      },
      options: {
        ELEMENTARY: ["It was made in a factory", "It was kept in a freezer for a year", "It traveled a short distance and was picked ripe", "It came on a long airplane trip"],
        MIDDLE_SCHOOL: ["Grows all the food alone", "Drives the delivery trucks for supermarkets", "Organizes the market, chooses vendors and sets rules", "Only cleans the parking lot"],
        HIGH_SCHOOL: ["A rule that bans sweets", "A tax on vegetables", "A program that adds extra dollars when food benefits are spent on produce", "A diet plan for farmers"],
        UNDERGRADUATE: ["Markets ban farms from selling more than once", "Markets pay the lowest prices", "Selling labor limits volume, so other channels add scale", "Other channels require no labor"],
        GRADUATE: ["Farmers switching to organic methods", "Markets moving indoors", "Alternative markets drifting toward mainstream practices as they grow", "Consumers refusing to buy local food"],
        PHD: ["Opening many more identical small markets", "Raising market stall fees", "Increasing volume through aggregation and larger buyers like institutions", "Changing shoppers' values only"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Market food usually comes from nearby farms, so it can be picked when it is ripe.",
        MIDDLE_SCHOOL: "The market manager organizes everything: vendors, rules, fees and promotion.",
        HIGH_SCHOOL: "Incentives match benefit dollars spent on fruits and vegetables, helping families and farmers.",
        UNDERGRADUATE: "Selling at markets is labor-intensive, so restaurants, CSA or food hubs help farms reach volume.",
        GRADUATE: "As alternative networks grow, they often adopt practices of the mainstream system they set out to change.",
        PHD: "Scaling up aggregates supply through food hubs and institutional procurement rather than more small outlets.",
      },
    },
    {
      id: 'fmq3',
      question: {
        ELEMENTARY: "Which food might you find at a farmers market in the fall?",
        MIDDLE_SCHOOL: "In a supermarket, how much of what you pay usually goes to the farmer?",
        HIGH_SCHOOL: "What is a producer-only rule?",
        UNDERGRADUATE: "Which intervention addresses the time barrier to market access?",
        GRADUATE: "Why are food miles a weak sustainability indicator for markets?",
        PHD: "Why might grocery chains contribute to farmers market saturation?",
      },
      options: {
        ELEMENTARY: ["Snowballs", "Fresh strawberries in the snow", "Ice cream cones", "Apples and pumpkins"],
        MIDDLE_SCHOOL: ["All of it", "Exactly half", "None ever", "Usually only a small part"],
        HIGH_SCHOOL: ["Only producers may shop at the market", "Farmers can produce only one crop", "Shoppers must make their own food", "Vendors may sell only what they grew or made"],
        UNDERGRADUATE: ["Higher stall fees", "Fewer vendors", "Closing in summer", "Evening or weekend market hours"],
        GRADUATE: ["Food miles cannot be measured", "Markets always use airplanes", "Distance has no relationship to freshness", "Transport is often a small share of food's life-cycle emissions compared with production"],
        PHD: ["They banned all farmers markets", "They stopped selling produce", "They pay farmers market vendors directly", "They adopted local branding, competing for the same shoppers"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Apples, pumpkins and squash are fall harvest foods.",
        MIDDLE_SCHOOL: "Most of the supermarket price pays for processing, shipping, packaging and the store.",
        HIGH_SCHOOL: "Producer-only rules keep resellers out so vendors sell what they produced themselves.",
        UNDERGRADUATE: "Working families often cannot shop during weekday daytime hours, so timing matters.",
        GRADUATE: "Production practices usually matter more for emissions than how far food traveled.",
        PHD: "Local branding in supermarkets captures some of the demand that markets once had to themselves.",
      },
    },
    {
      id: 'fmq4',
      question: {
        ELEMENTARY: "What is a good thing to bring to the farmers market?",
        MIDDLE_SCHOOL: "What is one way markets help more families buy fresh food?",
        HIGH_SCHOOL: "Which is a common challenge for farmers selling at markets?",
        UNDERGRADUATE: "What do evaluations of nutrition incentive programs generally find?",
        GRADUATE: "What tension do producer-only rules create?",
        PHD: "What weakness does spatial accessibility analysis have?",
      },
      options: {
        ELEMENTARY: ["A bucket of sand", "A reusable bag", "A fishing net", "A snow shovel"],
        MIDDLE_SCHOOL: ["Charging an entry fee", "Accepting food assistance benefits and matching them", "Opening only at midnight", "Selling only imported food"],
        HIGH_SCHOOL: ["Too many government salaries", "Long hours and unpredictable sales", "No customer feedback ever", "Being required to sell only candy"],
        UNDERGRADUATE: ["Participants buy fewer vegetables", "Participants generally buy more fruits and vegetables", "No change ever occurs", "The programs harm farm sales"],
        GRADUATE: ["They increase reselling of imported goods", "They protect farmers from resellers but may exclude small food entrepreneurs", "They lower all market fees", "They remove all vendor rules"],
        PHD: ["It cannot map locations", "It ignores time, culture and price barriers beyond physical distance", "It only studies emotions", "It always uses experiments"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "A reusable bag carries your food home and saves plastic.",
        MIDDLE_SCHOOL: "Accepting benefits and matching programs help families afford fresh produce.",
        HIGH_SCHOOL: "Selling at markets takes many hours, and weather and sales can be unpredictable.",
        UNDERGRADUATE: "Incentives generally raise produce purchases, though long-term diet effects vary.",
        GRADUATE: "Producer-only rules keep markets farmer-centered but can shut out small processors and food makers.",
        PHD: "Being physically close does not mean a market is affordable, open at usable times or welcoming.",
      },
    },
    {
      id: 'fmq5',
      question: {
        ELEMENTARY: "Where does your money go when you buy from a farmer at the market?",
        MIDDLE_SCHOOL: "Why do farmers markets help small farms?",
        HIGH_SCHOOL: "What is the multiplier effect?",
        UNDERGRADUATE: "What is a food hub?",
        GRADUATE: "What equity critique has research raised about many farmers markets?",
        PHD: "Why does institutional embeddedness matter for understanding market stability?",
      },
      options: {
        ELEMENTARY: ["To the family who grew the food", "To a faraway factory", "Into a river", "To a toy store"],
        MIDDLE_SCHOOL: ["They give small farms a place to sell smaller amounts of many crops", "They require huge uniform amounts", "They pay the lowest prices", "They only buy one crop"],
        HIGH_SCHOOL: ["Money spent locally keeps circulating through other local businesses", "Prices doubling every week", "Farmers planting more seeds", "A way to count shoppers"],
        UNDERGRADUATE: ["An enterprise that aggregates and distributes products from many local farms", "A single farm's storage shed", "A government food bank", "A type of farmers market stall"],
        GRADUATE: ["Many markets mainly serve higher-income shoppers and can feel unwelcoming to others", "Markets are only for farmers", "Markets are always free", "Markets ban local residents"],
        PHD: ["Markets depend on public land, permits, benefit rules and grants, not just consumer demand", "Markets have no connection to rules or funding", "Stability depends only on the weather", "Institutions never affect vendors"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "When you buy from the farmer, the money goes straight to the people who grew your food.",
        MIDDLE_SCHOOL: "Big stores often want huge uniform amounts, but markets welcome smaller farms with many crops.",
        HIGH_SCHOOL: "Local spending can circulate through other local businesses, supporting more jobs and income.",
        UNDERGRADUATE: "Food hubs help farms reach larger buyers by combining and distributing their products.",
        GRADUATE: "Research shows markets often serve wealthier shoppers and can carry cultural codes that exclude others.",
        PHD: "Market survival reflects permits, programs and funding as much as shopper enthusiasm.",
      },
    },
  ],
}

export default expansion
