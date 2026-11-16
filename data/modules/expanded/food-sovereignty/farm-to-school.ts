import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'farm-to-school',
  lessons: [
    {
      id: 'fs-school-1',
      title: 'From Local Farms to the School Lunch Tray',
      content: {
        ELEMENTARY: `
<h2>Fresh Food from the Farm to Your Lunch Tray</h2>
<p>Have you ever wondered where the apple on your lunch tray came from? Sometimes it traveled a very long way on trucks, boats or planes. But in a farm-to-school program, some of the food in your cafeteria comes from farms close to your town. That means it can be picked fresh, travel only a short way and still taste crunchy and sweet when it reaches you!</p>

<h3>How Farm Food Gets to School</h3>
<p>Let's follow a carrot on its journey. First, a farmer plants a tiny seed in the soil. Rain, sunshine and the farmer's care help it grow. When it is ready, the farmer pulls it up, washes it and packs it in a box. A truck carries the box to your school. Then the cafeteria cooks wash, chop and cook the carrots, and they end up on your plate.</p>
<ul>
<li><strong>Farmer:</strong> a person who grows plants or raises animals to make food for people</li>
<li><strong>Cafeteria:</strong> the place at school where meals are cooked and where children eat lunch together</li>
<li><strong>Harvest:</strong> the time when farmers pick the fruits and vegetables that are ripe and ready</li>
<li><strong>Local:</strong> something that comes from a place near where you live, not far away</li>
<li><strong>Cook:</strong> a kitchen helper who turns fresh food into tasty, healthy meals for everyone</li>
</ul>

<h3>Why Close-By Food Is Great</h3>
<p>Food from nearby farms has a short trip, so it can be picked when it is ripe. It helps farmers in your own community earn money to keep growing food. It also means you might meet the very people who grew your lunch!</p>

<h3>Learning with Farm Food</h3>
<p>Farm-to-school is not only about eating. Some schools have taste tests where you try a new vegetable, like purple carrots or crunchy snap peas. Some classes visit a farm to see cows, chickens or orchards. Others grow a small garden right at school.</p>
<ol>
<li>Try one new fruit or vegetable at lunch this week, even just one bite.</li>
<li>Ask your cafeteria cooks which foods came from nearby farms.</li>
<li>Draw a map of how your favorite vegetable got to your plate.</li>
<li>Say thank you to the farmers and cooks who make your meals.</li>
</ol>

<h3>Think About It</h3>
<p>Which foods grow in your area at different times of year? In many places, apples come in the fall and strawberries come in late spring. Eating with the seasons is a fun way to taste what your own land can grow!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Farm-to-School: Connecting Cafeterias, Farms and Classrooms</h2>
<p>Every school day, millions of students eat breakfast or lunch at school. That makes schools some of the biggest food buyers in many communities. Farm-to-school programs use that buying power to bring fresh, local food into cafeterias while also teaching students where food comes from. Most programs are built from three connected parts.</p>

<h3>The Three Parts of Farm-to-School</h3>
<ol>
<li><strong>Local procurement:</strong> the school buys some of its food from farms, ranches or fishers in its region.</li>
<li><strong>Education:</strong> students learn about food, farming and nutrition through lessons, taste tests and farm visits.</li>
<li><strong>School gardens:</strong> students grow plants at school, connecting what they learn to real soil and seeds.</li>
</ol>
<p>A school does not need all three to start. Many begin with something simple, like serving local apples once a month, and grow from there.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Procurement:</strong> the process an organization uses to buy the goods it needs, such as food for meals</li>
<li><strong>Seasonal eating:</strong> choosing foods at the time of year when they naturally ripen in your region</li>
<li><strong>Taste test:</strong> a small sample of a new food offered to students so they can try it and give their opinion</li>
<li><strong>Food service director:</strong> the person who plans school menus, manages kitchen staff and buys food</li>
<li><strong>Supply chain:</strong> all the steps and people that move food from the farm to the person eating it</li>
<li><strong>Scratch cooking:</strong> making meals from basic raw ingredients instead of heating up ready-made foods</li>
</ul>

<h3>Who Benefits?</h3>
<table>
<thead><tr><th>Group</th><th>How they benefit</th></tr></thead>
<tbody>
<tr><td>Students</td><td>Fresher food, new tastes and hands-on learning about where food comes from</td></tr>
<tr><td>Farmers</td><td>A steady customer close to home, which helps small farms stay in business</td></tr>
<tr><td>Communities</td><td>Money spent on food stays in the local economy instead of leaving the region</td></tr>
<tr><td>The environment</td><td>Shorter trips for some foods, and support for farmland near towns</td></tr>
</tbody>
</table>

<h3>Why Is It Not Everywhere Yet?</h3>
<p>Farm-to-school sounds simple, but schools face real challenges. School meal budgets are tight. Many school kitchens were built only to reheat food, not to wash and chop whole vegetables. Small farms may not grow enough to feed a whole district, and schools usually need food delivered on time, packed in a certain way and meeting safety rules. Programs work best when farmers, cooks, teachers and families team up to solve these problems together.</p>

<h3>What You Can Do</h3>
<p>Students have real power here. You can join a garden club, vote in taste tests, suggest local foods to your student council, or interview a farmer for a class project. When students show they like local food, schools are more likely to buy more of it.</p>
`,
        HIGH_SCHOOL: `
<h2>Farm-to-School: Procurement, Education and Gardens Working Together</h2>
<p>Farm-to-school is a strategy that links schools with nearby food producers. It aims to improve the quality of school meals, teach students about food systems and give local farmers a reliable market. Because public schools serve meals every day to large numbers of students, even modest shifts in what they buy can matter for regional farms. This lesson looks at how programs actually work and why they succeed or struggle.</p>

<h3>The Core Components</h3>
<ul>
<li><strong>Local procurement:</strong> buying foods grown, raised or caught within a region the school defines as local</li>
<li><strong>Food and agriculture education:</strong> classroom lessons, cooking demonstrations and farm field trips that build food knowledge</li>
<li><strong>School gardens:</strong> growing spaces on school grounds used for science, nutrition and outdoor learning</li>
<li><strong>Harvest of the month:</strong> a program that features one seasonal local crop across menus and lessons each month</li>
<li><strong>Distributor:</strong> a company that buys food from many suppliers and delivers it to schools on a schedule</li>
<li><strong>Minimally processed:</strong> food that has been washed, cut or frozen but not heavily changed from its raw form</li>
</ul>

<h3>How a Local Purchase Happens</h3>
<p>Schools usually buy most food through large distributors. To add local food, a food service director might ask an existing distributor to source and label local products, buy directly from a nearby farm, work with a farmer cooperative or food hub, or join with other districts to buy together. Each path has trade-offs.</p>
<table>
<thead><tr><th>Purchasing path</th><th>Advantages</th><th>Challenges</th></tr></thead>
<tbody>
<tr><td>Direct from a farm</td><td>Strong relationship, freshest product, farmer earns more per item</td><td>Many small invoices, deliveries and safety checks to manage</td></tr>
<tr><td>Through a regular distributor</td><td>Fits existing ordering and delivery systems</td><td>Local origin may be harder to track; farmer may earn less</td></tr>
<tr><td>Through a food hub</td><td>Combines products from many farms into larger, consistent orders</td><td>Hubs need enough volume and funding to stay viable</td></tr>
<tr><td>Group purchasing with other districts</td><td>More buying power and shared paperwork</td><td>Requires coordination and agreement on specifications</td></tr>
</tbody>
</table>

<h3>Trade-offs and Barriers</h3>
<p>Local food is not automatically cheaper; sometimes it costs more, especially when it needs extra labor to prepare. Growing seasons often peak in summer, when many schools are closed, so cafeterias lean on crops that store well, such as apples, potatoes, squash and carrots, or on local foods that have been frozen. Kitchens may lack equipment and trained staff for scratch cooking. Farms must meet food safety expectations, carry insurance and deliver reliably.</p>

<h3>Why Education Matters</h3>
<p>Simply putting a new vegetable on the tray does not guarantee students will eat it. Programs that pair new foods with taste tests, garden lessons or visits from farmers tend to get more students willing to try them. When students help grow or prepare food, they often feel a sense of ownership that makes them more curious about eating it.</p>

<h3>Making Programs Stronger</h3>
<ol>
<li><strong>Start small:</strong> pick one or two local items that fit the menu and build from there.</li>
<li><strong>Plan menus around seasons:</strong> use storage crops and frozen local produce in colder months.</li>
<li><strong>Invest in kitchens:</strong> basic equipment and staff training make whole-food cooking possible.</li>
<li><strong>Build relationships:</strong> regular conversations between cooks and farmers help match supply and demand.</li>
<li><strong>Involve students:</strong> student voice in taste tests and menu planning increases acceptance.</li>
</ol>
<p>Farm-to-school shows how a public institution can become a partner in a more local, resilient food system while helping young people build lifelong habits.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Farm-to-School Policy, Models and Outcomes</h2>
<p>Farm-to-school sits at the intersection of public nutrition programs, agricultural markets and education. Analyzing it well requires understanding how school meal programs are funded and regulated, how procurement rules shape what is possible, which implementation models exist, and how outcomes can be measured credibly. This lesson builds those analytical tools.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Institutional procurement:</strong> purchasing by public or large organizations such as schools, hospitals and universities, usually under formal rules</li>
<li><strong>Geographic preference:</strong> a rule allowing public buyers to give some advantage to locally produced items when evaluating bids</li>
<li><strong>Product specification:</strong> the detailed description of size, pack, grade and processing that a buyer requires from suppliers</li>
<li><strong>Reimbursable meal:</strong> a school meal that qualifies for public funding because it meets nutrition standards</li>
<li><strong>Logic model:</strong> a diagram linking a program's inputs and activities to expected outputs and outcomes</li>
<li><strong>Value chain:</strong> a supply chain organized around shared values and fair relationships, not only lowest cost</li>
</ul>

<h3>The Policy Context</h3>
<p>In many countries, school meals are publicly funded and must meet nutrition standards and food safety rules. Public purchasing laws usually require competition and transparency, with simpler procedures below certain purchase thresholds. Farm-to-school advocates have worked to clarify that schools may prefer local products within these rules, for example by writing specifications that favor freshly harvested items or by using geographic preference where permitted. Some governments also offer grants for planning, equipment and training. The exact rules vary by country and region, so analysis should begin by mapping the legal framework that applies.</p>

<h3>Implementation Models</h3>
<table>
<thead><tr><th>Model</th><th>Typical features</th><th>Best suited to</th></tr></thead>
<tbody>
<tr><td>Promotional</td><td>Occasional local menu days, harvest of the month, taste tests</td><td>Districts beginning with limited capacity</td></tr>
<tr><td>Integrated procurement</td><td>Local items written into regular bids and menus year-round</td><td>Districts with stable supplier relationships</td></tr>
<tr><td>Scratch-cook hub</td><td>Central kitchen processing whole local produce for many schools</td><td>Larger districts able to invest in facilities</td></tr>
<tr><td>Education-led</td><td>Gardens and curriculum drive the program, with smaller procurement shifts</td><td>Schools with strong teacher and community engagement</td></tr>
</tbody>
</table>

<h3>Thinking Quantitatively</h3>
<p>A useful starting metric is the share of the food budget spent on local products, but it must be read carefully. A district buying a small amount of very expensive local beef may show the same share as one buying a large volume of local produce. Analysts often track several indicators together: local spending, number of farms supplying, number of local items on menus, student participation in meals and plate waste for featured items. Because the definition of local varies, comparisons across districts require consistent boundaries.</p>
<p>Cost analysis also needs care. Unit prices for local items may be higher, yet total meal cost depends on labor, waste and participation. If more appealing meals raise participation, reimbursement revenue rises too, which can offset ingredient costs.</p>

<h3>Evaluating Outcomes</h3>
<p>Expected outcomes fall into three domains: student health and dietary behavior, educational engagement and local economic impact. Common methods include plate waste measurement, student surveys of food preferences, sales records and farmer interviews. Many evaluations are observational, so selection effects are a concern: schools that adopt farm-to-school may already differ from those that do not.</p>

<h3>Applied Checklist: Assessing a District Program</h3>
<ol>
<li>Map the legal and funding rules that govern school food purchasing in the jurisdiction.</li>
<li>Define local clearly and track spending and items against that definition.</li>
<li>Assess kitchen capacity: equipment, storage, staffing and training.</li>
<li>Identify supply options: direct farms, distributors, food hubs and cooperatives.</li>
<li>Build a logic model connecting activities to measurable outcomes.</li>
<li>Choose indicators for health, education and economy, and collect baseline data.</li>
</ol>
`,
        GRADUATE: `
<h2>Institutional Procurement and Scaling Farm-to-School Supply Chains</h2>
<p>At the graduate level, farm-to-school is best understood as a case of institutional food procurement used as a policy lever. Public institutions represent large, stable demand. Directing part of that demand toward regional producers can support farm viability and food system resilience, but doing so at scale requires supply chain infrastructure, aligned incentives and governance that small pilot programs rarely need. This lesson examines those structural questions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Food hub:</strong> an enterprise that aggregates, stores, processes, distributes or markets products from many regional producers</li>
<li><strong>Aggregation:</strong> combining small volumes from multiple farms into consistent lots that meet institutional order sizes</li>
<li><strong>Values-based procurement:</strong> purchasing policy that weighs criteria such as local economy, labor, environment and nutrition alongside price</li>
<li><strong>Anchor institution:</strong> a large, place-based organization whose purchasing can shape regional markets</li>
<li><strong>Forward contract:</strong> an agreement setting volume and price before planting, reducing risk for both buyer and grower</li>
<li><strong>Light processing:</strong> washing, cutting, freezing or packing that makes raw produce usable in institutional kitchens</li>
</ul>

<h3>The Missing Middle</h3>
<p>Many regional food systems have plenty of very small direct-market farms and very large commodity operations, but few mid-sized farms and businesses able to supply institutions. Schools need consistent quality, predictable deliveries, liability insurance, food safety documentation and product forms that suit limited kitchen labor. Small farms often cannot meet these requirements alone, and large distributors may not prioritize regional sourcing. Food hubs, cooperatives and shared processing facilities address this gap, but they face thin margins and depend on enough committed demand to cover fixed costs.</p>

<h3>Scaling Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Mechanism</th><th>Key risk</th></tr></thead>
<tbody>
<tr><td>Multi-district buying consortia</td><td>Pool demand to justify investment by suppliers</td><td>Coordination costs and conflicting specifications</td></tr>
<tr><td>Forward contracting</td><td>Gives farmers assurance to plant for school demand</td><td>Crop failure or menu changes break commitments</td></tr>
<tr><td>Regional processing infrastructure</td><td>Converts whole produce into kitchen-ready forms and extends the season</td><td>High capital costs and underutilization</td></tr>
<tr><td>Distributor partnerships</td><td>Uses existing logistics to move local products</td><td>Loss of source transparency and lower farmer share</td></tr>
<tr><td>Values-based procurement policy</td><td>Embeds local and other criteria in standard purchasing</td><td>Uneven implementation without monitoring</td></tr>
</tbody>
</table>

<h3>Economics and Incentives</h3>
<p>School food budgets are constrained and largely set by reimbursement rates, so food service directors face strong pressure to minimize cost per meal. Programs that add incentives for local purchasing, fund kitchen equipment or pay for training can change that calculus. Analysts should also consider economic multipliers: money spent with local businesses tends to recirculate in the regional economy more than money spent with distant firms, though the size of this effect depends on the local supply chain and should not be assumed.</p>

<h3>Equity and Governance</h3>
<p>Farm-to-school benefits are not evenly distributed. Well-resourced districts often have more staff time, grant-writing capacity and kitchen infrastructure, while districts serving lower-income communities may face the greatest barriers despite having students who rely most on school meals. On the producer side, procurement can be designed to include beginning farmers, farmers of color and Indigenous producers, or it can default to the farms already best positioned. Governance choices, including who sets the local definition, who sits on advisory groups and how contracts are structured, determine which outcomes appear.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define program goals across nutrition, education, farm economy and equity.</li>
<li>Map the supply chain and identify bottlenecks in aggregation, processing and logistics.</li>
<li>Measure procurement with consistent definitions and verified source data.</li>
<li>Assess distribution of benefits among districts, students and producers.</li>
<li>Test financial sustainability of intermediaries such as hubs under realistic volumes.</li>
<li>Build feedback loops so findings shape policy and contract design.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Farm-to-School Impacts</h2>
<p>Farm-to-school has grown from scattered local initiatives into an established field of policy and practice, yet the research base remains uneven. Many studies are descriptive or rely on short-term outcomes, and causal claims about health, academic and economic effects are hard to establish. This lesson surveys methodological challenges, competing theories of change and open research directions for doctoral-level work.</p>

<h3>Methodological Concepts</h3>
<ul>
<li><strong>Selection bias:</strong> systematic differences between schools that adopt programs and those that do not, which can be mistaken for program effects</li>
<li><strong>Dose-response:</strong> the relationship between the intensity of program exposure and the size of measured outcomes</li>
<li><strong>Plate waste measurement:</strong> weighing or visually estimating food left uneaten to infer actual consumption</li>
<li><strong>Quasi-experimental design:</strong> methods such as matched comparisons or difference-in-differences that approximate experiments without random assignment</li>
<li><strong>Input-output modeling:</strong> economic analysis estimating how spending in one sector ripples through linked sectors of a regional economy</li>
<li><strong>Implementation fidelity:</strong> the degree to which a program is delivered as designed across sites</li>
</ul>

<h3>Measuring Health and Dietary Outcomes</h3>
<p>Researchers examine fruit and vegetable selection, consumption, preferences and knowledge. Each measure has limits. Selection data from point-of-sale records may not reflect consumption; self-reported intake is vulnerable to recall and social desirability bias; plate waste methods are labor-intensive and capture only school meals. Distal outcomes such as body weight or chronic disease risk are influenced by many factors beyond school, making attribution to farm-to-school extremely difficult over typical study timeframes.</p>

<h3>Educational Outcomes</h3>
<p>Garden and food education components are theorized to increase engagement, science learning and social-emotional skills. Evidence often comes from small studies with varied designs. Disentangling the effect of food-based learning from the effect of enthusiastic teachers, smaller groups or outdoor time is a persistent challenge.</p>

<h3>Economic Impact Research</h3>
<p>Studies of local economic effects commonly use input-output models to estimate multipliers. Results depend heavily on assumptions about substitution: if a school buys local apples instead of distant apples, the net local gain depends on what the farm would otherwise have sold and to whom. Farm-level studies using interviews and financial records offer richer detail about whether school sales improve stability, diversify markets or simply replace other channels.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Is local procurement or education the active ingredient?</td><td>Components are usually bundled, so separating effects requires factorial or comparative designs</td></tr>
<tr><td>How large are regional economic multipliers?</td><td>Estimates are sensitive to substitution assumptions and model structure</td></tr>
<tr><td>Who benefits most?</td><td>Programs may widen or narrow gaps depending on targeting and capacity</td></tr>
<tr><td>Does institutional demand transform food systems?</td><td>Some argue it builds regional infrastructure; others see marginal shifts within existing supply chains</td></tr>
</tbody>
</table>

<h3>Theories of Change</h3>
<p>Different disciplines frame farm-to-school differently. Public health research emphasizes exposure and behavior change. Agricultural economics focuses on market access and supply chain development. Critical food studies examine whether programs challenge or reproduce existing power relations, including who controls land and who defines local. Integrating these perspectives through mixed methods and community-engaged research can produce richer explanations than any single lens.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal and quasi-experimental studies linking program intensity to dietary and educational outcomes.</li>
<li>Factorial designs that separate procurement, education and garden components.</li>
<li>Farm-level panel data on the financial effects of institutional market participation.</li>
<li>Equity analyses of which districts, students and producers gain access to benefits.</li>
<li>Studies of supply chain intermediaries, including the viability of food hubs under varying demand.</li>
<li>Community-engaged and Indigenous-led research on culturally grounded school food programs.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fschoolq1',
      question: {
        ELEMENTARY: 'Where does farm-to-school food come from?',
        MIDDLE_SCHOOL: 'What are the three main parts of farm-to-school?',
        HIGH_SCHOOL: 'What does a "harvest of the month" program do?',
        UNDERGRADUATE: 'What is geographic preference in public purchasing?',
        GRADUATE: 'What is a food hub?',
        PHD: 'Why is selection bias a concern in farm-to-school research?',
      },
      options: {
        ELEMENTARY: ['Farms close to your town', 'Only faraway countries', 'Only from factories', 'From nowhere at all'],
        MIDDLE_SCHOOL: ['Local buying, food education and school gardens', 'Recess, homework and sports', 'Only lunches with no learning', 'Vending machines, snacks and soda'],
        HIGH_SCHOOL: ['Features one seasonal local crop across menus and lessons each month', 'Bans all fruit for a month', 'Replaces lunch with a field trip', 'Only serves imported foods'],
        UNDERGRADUATE: ['A rule letting public buyers give some advantage to local products when evaluating bids', 'A map showing where schools are located', 'A ban on buying any non-local food', 'A preference for the cheapest supplier only'],
        GRADUATE: ['An enterprise that aggregates and distributes products from many regional producers', 'A bicycle repair center', 'A computer server for school records', 'A single farm stand'],
        PHD: ['Schools that adopt programs may already differ from those that do not', 'Every school is identical', 'It only affects laboratory experiments', 'It makes plate waste impossible to measure'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Farm-to-school brings fresh food from farms near your community to your school.',
        MIDDLE_SCHOOL: 'Most programs combine local procurement, education about food and farming, and school gardens.',
        HIGH_SCHOOL: 'Harvest of the month highlights one seasonal local crop in both the cafeteria and the classroom.',
        UNDERGRADUATE: 'Where permitted, geographic preference lets buyers favor local products within public purchasing rules.',
        GRADUATE: 'Food hubs aggregate, store, process and distribute products so small farms can meet institutional orders.',
        PHD: 'Pre-existing differences between adopting and non-adopting schools can be mistaken for program effects.',
      },
    },
    {
      id: 'fschoolq2',
      question: {
        ELEMENTARY: 'What is a harvest?',
        MIDDLE_SCHOOL: 'What is procurement?',
        HIGH_SCHOOL: 'Why do many schools rely on storage crops like apples and squash?',
        UNDERGRADUATE: 'Why can the share of budget spent on local food be misleading on its own?',
        GRADUATE: 'What is the "missing middle" in regional food systems?',
        PHD: 'Why do economic multiplier estimates for farm-to-school vary so much?',
      },
      options: {
        ELEMENTARY: ['When children go home from school', 'When farmers pick ripe fruits and vegetables', 'When it snows in winter', 'When the bus arrives'],
        MIDDLE_SCHOOL: ['A type of farm animal', 'The process an organization uses to buy what it needs', 'A school sports team', 'A kind of vegetable'],
        HIGH_SCHOOL: ['They are the only foods students like', 'Growing seasons peak in summer when many schools are closed', 'They are always imported', 'Laws forbid serving fresh greens'],
        UNDERGRADUATE: ['It is always perfectly accurate', 'A small amount of costly local food can show the same share as a large volume of produce', 'Local food never costs money', 'Schools do not track spending'],
        GRADUATE: ['A shortage of mid-sized farms and businesses able to supply institutions', 'A gap in the school day between classes', 'Too many large commodity farms near schools', 'The middle shelf of a cafeteria fridge'],
        PHD: ['Multipliers are fixed by law', 'Results depend heavily on assumptions about substitution and model structure', 'Nobody has tried to estimate them', 'They only measure student health'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Harvest is the time when farmers pick fruits and vegetables that are ripe and ready to eat.',
        MIDDLE_SCHOOL: 'Procurement is how schools and other organizations buy goods, including the food for meals.',
        HIGH_SCHOOL: 'Many local crops ripen in summer, so schools use foods that store well or local food that has been frozen.',
        UNDERGRADUATE: 'Spending share alone hides volume and price differences, so analysts track several indicators together.',
        GRADUATE: 'Institutions need consistent volume and documentation that very small farms struggle to provide alone.',
        PHD: 'Whether local purchases replace other local sales strongly changes the estimated net economic gain.',
      },
    },
    {
      id: 'fschoolq3',
      question: {
        ELEMENTARY: 'What is a good way to learn about a new vegetable at school?',
        MIDDLE_SCHOOL: 'What is scratch cooking?',
        HIGH_SCHOOL: 'Which purchasing path combines products from many farms into larger, consistent orders?',
        UNDERGRADUATE: 'How can more appealing meals help offset the higher price of some local items?',
        GRADUATE: 'What does a forward contract do for farmers supplying schools?',
        PHD: 'What does implementation fidelity refer to?',
      },
      options: {
        ELEMENTARY: ['Never look at it', 'Hide it under your napkin', 'Try a small bite at a taste test', 'Throw it away right away'],
        MIDDLE_SCHOOL: ['Scratching a pan clean', 'Heating frozen ready-made meals', 'Making meals from basic raw ingredients', 'Buying snacks from a machine'],
        HIGH_SCHOOL: ['Buying from a single backyard garden', 'Ordering from overseas suppliers', 'Buying through a food hub', 'Growing everything in the school garden'],
        UNDERGRADUATE: ['By lowering nutrition standards', 'By reducing the number of meals served', 'By raising participation, which increases reimbursement revenue', 'By cutting kitchen staff pay'],
        GRADUATE: ['It removes all food safety rules', 'It guarantees the highest price on the market', 'It sets volume and price before planting, reducing risk for both sides', 'It replaces the need for any delivery'],
        PHD: ['How loyal students are to the cafeteria', 'The accuracy of farm weather forecasts', 'The degree to which a program is delivered as designed across sites', 'How long food stays fresh'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Taste tests let you try a little bit of a new food, which is a fun and brave way to learn.',
        MIDDLE_SCHOOL: 'Scratch cooking starts from raw ingredients such as whole vegetables rather than reheating prepared food.',
        HIGH_SCHOOL: 'Food hubs aggregate products from many farms so schools can buy consistent, larger amounts.',
        UNDERGRADUATE: 'If more students eat school meals, reimbursement revenue rises and can balance ingredient costs.',
        GRADUATE: 'Forward contracts give farmers assurance to plant for school demand and give schools reliable supply.',
        PHD: 'Fidelity measures whether sites actually deliver the program as intended, which affects outcomes.',
      },
    },
    {
      id: 'fschoolq4',
      question: {
        ELEMENTARY: 'How does buying food from nearby farms help farmers?',
        MIDDLE_SCHOOL: 'Why might a school kitchen struggle to cook whole local vegetables?',
        HIGH_SCHOOL: 'Why does simply adding a new vegetable to the tray not guarantee students will eat it?',
        UNDERGRADUATE: 'What is a logic model used for in program evaluation?',
        GRADUATE: 'Why might farm-to-school benefits be unevenly distributed among districts?',
        PHD: 'Why is it hard to link farm-to-school to long-term health outcomes like body weight?',
      },
      options: {
        ELEMENTARY: ['It makes their farms disappear', 'It makes them stop growing food', 'It sends their money far away', 'It gives them money to keep growing food'],
        MIDDLE_SCHOOL: ['Vegetables cannot be cooked at all', 'Students refuse to eat in kitchens', 'Laws require all food to be candy', 'Many kitchens were built only to reheat ready-made food'],
        HIGH_SCHOOL: ['Vegetables are always unsafe', 'Students are not allowed to eat vegetables', 'Lunch trays are too small', 'Students often need taste tests, lessons or garden experiences to build interest'],
        UNDERGRADUATE: ['To draw the school floor plan', 'To decorate the cafeteria', 'To calculate the lunch bell schedule', 'To link inputs and activities to expected outputs and outcomes'],
        GRADUATE: ['All districts have identical resources', 'Benefits are assigned by lottery', 'Only rural districts can buy food', 'Better-resourced districts often have more staff time, grant capacity and kitchen infrastructure'],
        PHD: ['Body weight cannot be measured', 'Schools do not serve food', 'Health never changes during childhood', 'Many factors beyond school influence these outcomes over long timeframes'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'When schools buy from nearby farms, farmers earn money that helps them keep growing food.',
        MIDDLE_SCHOOL: 'Kitchens designed for reheating may lack the equipment and staff training for washing and chopping.',
        HIGH_SCHOOL: 'Pairing new foods with education and hands-on experiences helps more students try them.',
        UNDERGRADUATE: 'A logic model maps how resources and activities are expected to lead to measurable results.',
        GRADUATE: 'Districts with more capacity can more easily start programs, which can widen existing gaps.',
        PHD: 'Diet, family, income and environment all affect health, making attribution to one program difficult.',
      },
    },
    {
      id: 'fschoolq5',
      question: {
        ELEMENTARY: 'What does "local" mean?',
        MIDDLE_SCHOOL: 'How do communities benefit from farm-to-school?',
        HIGH_SCHOOL: 'What is a good first step for a school starting a farm-to-school program?',
        UNDERGRADUATE: 'Why is a clear definition of "local" important when comparing districts?',
        GRADUATE: 'What is values-based procurement?',
        PHD: 'What research design helps separate the effects of procurement, education and gardens?',
      },
      options: {
        ELEMENTARY: ['From a place near where you live', 'From the moon', 'From the other side of the world', 'From a cartoon'],
        MIDDLE_SCHOOL: ['Money spent on food stays in the local economy', 'Farms near town close down', 'Food travels farther', 'Students learn less'],
        HIGH_SCHOOL: ['Start small with one or two local items that fit the menu', 'Replace every food item on the first day', 'Close the kitchen', 'Buy only imported produce'],
        UNDERGRADUATE: ['Different boundaries make comparisons inconsistent', 'Local always means the same distance everywhere', 'Definitions do not affect data', 'Only national food counts'],
        GRADUATE: ['Purchasing that weighs local economy, labor, environment and nutrition alongside price', 'Buying only the cheapest product', 'Purchasing without any rules', 'Buying food based on package color'],
        PHD: ['Factorial or comparative designs that vary components separately', 'Measuring only one school once', 'Asking teachers to guess outcomes', 'Ignoring program components entirely'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Local means close to home, like farms near your town.',
        MIDDLE_SCHOOL: 'Buying from local farms keeps more money circulating in the community.',
        HIGH_SCHOOL: 'Starting with a few items lets cooks and farmers learn together before expanding.',
        UNDERGRADUATE: 'If districts define local differently, their local purchasing numbers cannot be fairly compared.',
        GRADUATE: 'Values-based procurement embeds social and environmental criteria in purchasing decisions.',
        PHD: 'Because components are usually bundled, designs that vary them separately are needed to identify each effect.',
      },
    },
  ],
}

export default expansion
