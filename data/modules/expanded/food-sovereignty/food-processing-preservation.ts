import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'food-processing-preservation',
  lessons: [
    {
      id: 'fs-process-1',
      title: 'Making Food Last',
      content: {
        ELEMENTARY: `
<h2>Keeping Food Fresh for Longer</h2>
<p>Have you ever seen a banana turn brown and mushy, or bread grow fuzzy spots? That happens because tiny living things called microbes start eating the food too. People have found clever ways to slow them down so food lasts for weeks, months or even a whole year.</p>

<h3>Why Food Goes Bad</h3>
<p>Microbes are so small you cannot see them. They love food that is warm and wet. When we make food cold, dry, salty, sour or very hot, the microbes have a hard time growing. That is the secret behind keeping food fresh!</p>

<h3>Words to Know</h3>
<ul>
<li><strong>Microbe:</strong> a living thing so tiny you need a microscope to see it, like bacteria or mold</li>
<li><strong>Drying:</strong> taking the water out of food, like turning grapes into raisins</li>
<li><strong>Freezing:</strong> making food so cold that it turns hard and microbes stop growing</li>
<li><strong>Pickling:</strong> keeping food in a sour liquid such as vinegar, like cucumbers turned into pickles</li>
<li><strong>Canning:</strong> sealing cooked food in jars or cans and heating them so the food stays safe for a long time</li>
</ul>

<h3>Ways People Keep Food</h3>
<ul>
<li>Drying apples, mangoes, beans and herbs in the sun or a warm oven.</li>
<li>Freezing berries, peas and bread in the freezer.</li>
<li>Making jam by cooking fruit with sugar.</li>
<li>Pickling vegetables in vinegar and salt.</li>
<li>Storing potatoes, carrots and onions in a cool, dark place.</li>
</ul>
<p>Families all over the world have special ways to keep food, from dried fish to kimchi to fruit leather. Many of these ways were invented long before refrigerators!</p>

<h3>Why It Helps the Planet</h3>
<p>When food lasts longer, less of it gets thrown away. A farm that grows lots of tomatoes in summer can turn some into sauce to eat in winter. That means good food all year long.</p>

<h3>Things You Can Do</h3>
<ol>
<li>With a grown-up, freeze ripe bananas to make a smoothie later.</li>
<li>Help make a simple jar of refrigerator pickles.</li>
<li>Look in your kitchen for foods that are dried, canned or frozen.</li>
<li>Always wash your hands before helping with food. Clean hands keep food safe.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>How Preservation Works at Home and in Communities</h2>
<p>Every preservation method works by changing the conditions that spoilage microbes need. Bacteria, yeasts and molds need water, a comfortable temperature, food and the right acidity. Take away one or more of these and food lasts much longer. Communities have used these principles for thousands of years, and today local food businesses use them to turn harvests into products.</p>

<h3>Key Vocabulary</h3>
<ul>
<li><strong>Spoilage:</strong> changes caused by microbes or chemical reactions that make food unpleasant or unsafe to eat</li>
<li><strong>Fermentation:</strong> a process where helpful microbes turn sugars into acids, gases or alcohol, preserving food and adding flavor</li>
<li><strong>Acidity:</strong> how sour something is, measured on the pH scale where lower numbers are more acidic</li>
<li><strong>Dehydration:</strong> removing most of the water from food so microbes cannot grow</li>
<li><strong>Pasteurization:</strong> heating food or drink to a set temperature to kill harmful microbes</li>
<li><strong>Food processing:</strong> any step that changes raw food, such as washing, cutting, cooking, drying or packaging</li>
</ul>

<h3>Comparing Methods</h3>
<table>
<thead><tr><th>Method</th><th>What it changes</th><th>Example foods</th></tr></thead>
<tbody>
<tr><td>Drying</td><td>Removes water</td><td>Raisins, jerky, dried beans, herbs</td></tr>
<tr><td>Freezing</td><td>Lowers temperature so microbes stop growing</td><td>Berries, corn, meat</td></tr>
<tr><td>Fermenting</td><td>Good microbes make acid that blocks bad ones</td><td>Yogurt, sauerkraut, kimchi, miso</td></tr>
<tr><td>Pickling</td><td>Adds acid such as vinegar</td><td>Cucumber pickles, pickled peppers</td></tr>
<tr><td>Canning</td><td>Heat kills microbes and a seal keeps new ones out</td><td>Tomatoes, jam, beans</td></tr>
<tr><td>Salting or sugaring</td><td>Pulls water away from microbes</td><td>Salted fish, fruit preserves</td></tr>
</tbody>
</table>

<h3>Fermentation: Microbes as Helpers</h3>
<p>Not all microbes are bad. In sauerkraut, cabbage is mixed with salt. Lactic acid bacteria that naturally live on the cabbage eat its sugars and make acid. The acid gives sauerkraut its sour taste and stops harmful microbes. Similar processes make yogurt, many cheeses, sourdough bread and soy sauce.</p>

<h3>Preservation in the Community</h3>
<p>Preserving food is not just a home activity. Community canning days let neighbors share equipment and skills. Small farms turn extra fruit into jam or dried snacks to sell. Food banks freeze donated produce so it does not go to waste. All of these keep more food in the local area and help people eat local food in every season.</p>

<h3>Safety First</h3>
<p>Some methods need careful steps. Low-acid foods like green beans must be canned in special pressure canners, because ordinary boiling is not hot enough to destroy certain dangerous bacteria. Always follow tested recipes from trusted food safety sources.</p>
`,
        HIGH_SCHOOL: `
<h2>Canning, Drying, Fermenting and Food Safety</h2>
<p>Food preservation is applied microbiology. Each technique creates a hurdle that spoilage organisms and pathogens cannot easily cross. Understanding those hurdles explains why some methods are simple and forgiving while others demand strict procedures. It also explains why local food systems need processing capacity: without it, a summer harvest becomes waste instead of winter food.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Pathogen:</strong> a microorganism that can cause illness, such as Salmonella, Listeria or Clostridium botulinum</li>
<li><strong>Water activity:</strong> a measure of how much water in a food is available for microbes to use, lowered by drying, salt or sugar</li>
<li><strong>Low-acid food:</strong> food with a pH above 4.6, including most vegetables, meats and beans, which must be pressure canned</li>
<li><strong>Botulism:</strong> a rare but serious illness caused by a toxin from Clostridium botulinum, which can grow in sealed low-acid foods</li>
<li><strong>Hurdle technology:</strong> combining several mild preservation factors so together they stop microbial growth</li>
<li><strong>Headspace:</strong> the empty space left at the top of a canning jar so a proper vacuum seal can form</li>
</ul>

<h3>Why Tested Recipes Matter</h3>
<p>Clostridium botulinum spores survive boiling water temperatures. In an airless, low-acid jar, they can produce a toxin without obvious signs of spoilage. Pressure canners reach temperatures well above boiling, which destroys the spores when used for the tested time. High-acid foods such as most fruits, or vegetables pickled in enough vinegar, can be safely processed in a boiling water bath because the acid prevents the bacteria from growing. Changing ingredients, jar sizes or processing times can push a recipe into unsafe territory, which is why home preservers rely on lab-tested recipes.</p>

<h3>Comparing Techniques</h3>
<table>
<thead><tr><th>Technique</th><th>Main hurdle</th><th>Strengths</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Water bath canning</td><td>Heat plus high acidity</td><td>Shelf-stable, simple equipment</td><td>Only for high-acid or acidified foods</td></tr>
<tr><td>Pressure canning</td><td>High heat under pressure</td><td>Safe for low-acid foods</td><td>Needs special equipment and precise timing</td></tr>
<tr><td>Drying</td><td>Low water activity</td><td>Light, compact, low energy if solar</td><td>Texture changes, some vitamin loss</td></tr>
<tr><td>Fermentation</td><td>Acid from beneficial microbes</td><td>Adds flavor and live cultures</td><td>Needs salt and temperature control</td></tr>
<tr><td>Freezing</td><td>Low temperature</td><td>Keeps nutrients and flavor well</td><td>Depends on constant electricity</td></tr>
</tbody>
</table>

<h3>Real-World Applications</h3>
<p>Preservation is central to food sovereignty because it lets communities control food across seasons rather than depending on long supply chains. Solar dryers help farmers in hot regions turn surplus fruit into a product that can be stored and sold later. Community kitchens host canning workshops. School and hospital food programs freeze local produce at harvest to serve all year. Small businesses make sauces, pickles and dried goods, earning more than they would selling raw produce.</p>

<h3>Safe Practice Checklist</h3>
<ol>
<li>Start with clean hands, surfaces and equipment.</li>
<li>Use fresh, good-quality produce without rot.</li>
<li>Choose a tested recipe and follow it exactly, including acid amounts and times.</li>
<li>Adjust processing for altitude when the recipe says to.</li>
<li>Check seals, label jars with dates and discard any jar that is bulging, leaking or smells off.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Local Processing, Shared-Use Kitchens and Value-Added Products</h2>
<p>A recurring bottleneck in local and regional food systems is not growing food but processing it. Farmers can produce abundant crops in season, yet without facilities to wash, cut, freeze, can or package them, much of that produce cannot reach institutional buyers or year-round markets. This lesson analyzes the processing link in the food chain and the models communities use to rebuild it.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Value-added product:</strong> a raw agricultural commodity transformed into a product that commands a higher price, such as jam, salsa or frozen vegetables</li>
<li><strong>Minimal processing:</strong> light steps such as washing, trimming, cutting and freezing that keep food close to its fresh state</li>
<li><strong>Shared-use kitchen:</strong> a licensed commercial kitchen rented by multiple small producers, sometimes called a commercial kitchen incubator</li>
<li><strong>Co-packer:</strong> a business that manufactures and packages products for other brands under contract</li>
<li><strong>Cottage food law:</strong> a rule allowing certain low-risk foods to be made in home kitchens and sold directly to consumers</li>
<li><strong>Missing middle:</strong> the gap in mid-scale processing, aggregation and distribution infrastructure between small farms and large industry</li>
</ul>

<h3>The Economics of Adding Value</h3>
<p>Raw produce is perishable and sold at commodity-like prices during peak season, when supply is high and prices fall. Processing converts that seasonal surplus into a storable product sold over many months. The farmer or producer captures a larger share of the final retail price, but takes on new costs: ingredients, packaging, labor, licensing, insurance, testing and marketing. Whether value-adding is profitable depends on volume, pricing power, and access to affordable facilities. Many small producers find the fixed cost of building a licensed kitchen prohibitive, which is why shared infrastructure matters.</p>

<h3>Processing Infrastructure Models</h3>
<table>
<thead><tr><th>Model</th><th>Best suited to</th><th>Advantages</th><th>Challenges</th></tr></thead>
<tbody>
<tr><td>Home cottage production</td><td>Low-risk baked goods, jams</td><td>Very low startup cost</td><td>Limited product types and sales channels</td></tr>
<tr><td>Shared-use kitchen</td><td>Startups and small batch producers</td><td>Licensed space, shared equipment, mentoring</td><td>Scheduling, storage limits, operator finances</td></tr>
<tr><td>Co-packing</td><td>Growing brands</td><td>Scale and expertise</td><td>Minimum runs, less control over recipe</td></tr>
<tr><td>Farmer-owned processing cooperative</td><td>Groups of growers with similar crops</td><td>Shared risk, retained value</td><td>Capital needs and governance demands</td></tr>
<tr><td>Institutional processing</td><td>Schools, hospitals, food banks</td><td>Stable demand for minimally processed local food</td><td>Tight budgets and strict specifications</td></tr>
</tbody>
</table>

<h3>Food Safety Within the Business Model</h3>
<p>Commercial processors must manage hazards systematically. Acidified and low-acid canned foods are subject to stricter controls than baked goods because of botulism risk. Many regulators require process reviews by qualified authorities, training in sanitation and documented controls. These requirements protect the public, but compliance costs fall harder on small operators per unit of output, which shapes industry structure.</p>

<h3>Applied Feasibility Checklist</h3>
<ol>
<li>Define the product and its risk category (shelf-stable, refrigerated, acidified, low-acid).</li>
<li>Estimate raw material supply, seasonality and yield after processing.</li>
<li>Calculate full unit costs, including labor, packaging and facility rental.</li>
<li>Identify buyers and price points across direct, wholesale and institutional channels.</li>
<li>Map regulatory requirements and the facility type needed to meet them.</li>
<li>Assess whether shared infrastructure could lower fixed costs.</li>
</ol>
`,
        GRADUATE: `
<h2>Processing Policy, Food Safety Regulation and Infrastructure</h2>
<p>Food processing sits where public health regulation, industrial policy and food system localization meet. Rules designed for large manufacturers can unintentionally exclude small and mid-scale processors, while relaxed rules can expose consumers to real hazards. Graduate study focuses on how to design regulatory and infrastructure systems that are both protective and proportionate, and on who bears the costs and captures the benefits.</p>

<h3>Key Governance Concepts</h3>
<ul>
<li><strong>Hazard Analysis and Critical Control Points:</strong> a preventive system that identifies hazards and sets monitored control points where they can be prevented or reduced</li>
<li><strong>Risk-based regulation:</strong> scaling inspection and requirements to the likelihood and severity of harm a product or process poses</li>
<li><strong>Scale-appropriate regulation:</strong> rules adapted to the size and capacity of operations without lowering the level of protection</li>
<li><strong>Regulatory capture:</strong> a situation in which rules come to serve the interests of dominant firms rather than the public</li>
<li><strong>Food hub:</strong> an enterprise that aggregates, distributes and often processes products from many local producers</li>
<li><strong>Infrastructure gap:</strong> the absence of facilities such as cold storage, slaughterhouses or freezing lines that local supply chains need</li>
</ul>

<h3>Regulatory Design Tensions</h3>
<p>Modern food safety frameworks in many countries have shifted from reacting to outbreaks toward preventing them, requiring written food safety plans, supplier controls and recordkeeping. These preventive approaches are well supported by outbreak experience. Yet compliance has substantial fixed costs, so per-unit costs fall as volume rises. Policymakers have responded with exemptions for very small or direct-marketing operations, cottage food rules for low-risk products, and technical assistance. Each exemption raises questions about consistency, consumer confidence and whether small processors can ever scale into full compliance.</p>

<h3>Infrastructure Policy Options</h3>
<table>
<thead><tr><th>Instrument</th><th>Purpose</th><th>Design considerations</th></tr></thead>
<tbody>
<tr><td>Capital grants and low-interest loans</td><td>Build kitchens, cold storage, meat processing</td><td>Avoid overbuilding; require viable business plans</td></tr>
<tr><td>Technical assistance and training</td><td>Help producers meet safety rules</td><td>Language access and culturally relevant delivery</td></tr>
<tr><td>Public procurement</td><td>Create stable demand for processed local food</td><td>Specifications that small processors can meet</td></tr>
<tr><td>Mobile or modular units</td><td>Bring processing to dispersed producers</td><td>Inspection logistics and utilization rates</td></tr>
<tr><td>Cooperative development support</td><td>Enable shared ownership of facilities</td><td>Governance training and patient capital</td></tr>
</tbody>
</table>

<h3>Equity and Concentration</h3>
<p>Processing in many sectors, especially meat, is highly concentrated, with a few large firms handling most volume. Concentration can deliver efficiency but creates fragility, as disruptions at a few plants ripple through the system, and it reduces bargaining power for farmers and workers. Processing workers often face hazardous conditions and low wages. Equity analysis should consider workers, small and minority-owned producers seeking market entry, and communities with culturally specific foods that may not fit standard regulatory categories, such as traditional fermented or smoked products.</p>

<h3>Institutional Barriers</h3>
<ul>
<li>Multiple agencies may regulate different products or stages, creating confusing pathways.</li>
<li>Inspectors may be scarce in rural areas, limiting new facilities.</li>
<li>Lenders view small food processing as risky, limiting access to capital.</li>
<li>Utilization risk: shared facilities need enough users to cover operating costs.</li>
</ul>

<h3>Evaluation Framework</h3>
<ol>
<li>Public health: do outcomes and inspection records show safety is maintained?</li>
<li>Market access: are new producers entering and growing?</li>
<li>Value retention: how much of the final price returns to farmers and local businesses?</li>
<li>Resilience: does the system have redundancy if a facility closes?</li>
<li>Labor: are wages, safety and training improving for processing workers?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Local Processing Economics and Food Safety Systems</h2>
<p>Doctoral research on food processing spans agricultural economics, food science, industrial organization, risk analysis and science and technology studies. Central questions concern the efficient scale of processing, how safety systems perform across scales, how innovation diffuses to small enterprises, and how processing structure shapes the resilience and distributional outcomes of food systems. Many of these questions remain empirically unsettled.</p>

<h3>Analytical Constructs</h3>
<ul>
<li><strong>Economies of scale:</strong> the decline in average cost as output increases, central to explaining concentration in processing</li>
<li><strong>Transaction costs:</strong> costs of searching, contracting and coordinating that shape whether firms integrate or use markets</li>
<li><strong>Quantitative microbial risk assessment:</strong> a modeling approach that estimates illness risk from contamination levels, growth and consumption patterns</li>
<li><strong>Predictive microbiology:</strong> mathematical models describing microbial growth or inactivation under given conditions such as temperature, pH and water activity</li>
<li><strong>Supply chain resilience:</strong> the capacity of a supply network to absorb, adapt to and recover from disruptions</li>
<li><strong>Appropriate technology:</strong> technology designed to match the scale, skills and resources of its users and context</li>
</ul>

<h3>The Scale Question</h3>
<p>Classical analysis predicts consolidation where economies of scale are strong. Yet local processing advocates point to benefits not captured in plant-level costs: reduced transport, retained local value, product differentiation, and resilience through redundancy. Research approaches include cost function estimation, input-output and regional economic impact modeling, and case comparisons. Economic impact studies are contested because estimates of local multipliers depend heavily on assumptions about displacement, that is, whether new local spending replaces spending that would have occurred anyway.</p>
<table>
<thead><tr><th>Method</th><th>Question addressed</th><th>Known limitations</th></tr></thead>
<tbody>
<tr><td>Cost function estimation</td><td>How unit costs change with scale</td><td>Data scarcity for small firms, heterogeneity of products</td></tr>
<tr><td>Regional input-output models</td><td>Local economic impact of processing investment</td><td>Fixed coefficients, displacement assumptions</td></tr>
<tr><td>Network and simulation models</td><td>Resilience to plant closures or shocks</td><td>Calibration and validation difficulties</td></tr>
<tr><td>Microbial risk assessment</td><td>Health risk across processes and scales</td><td>Uncertain dose-response data and parameter variability</td></tr>
<tr><td>Ethnography and institutional analysis</td><td>How rules are interpreted and enforced</td><td>Generalization across jurisdictions</td></tr>
</tbody>
</table>

<h3>Safety Systems Across Scales</h3>
<p>A contested empirical question is whether small processors pose higher, lower or simply different risks than large ones. Large plants have sophisticated controls but distribute products widely, so a single failure can affect many people. Small operations distribute locally but may have fewer resources for testing and documentation. Robust comparison is hampered by underreporting of foodborne illness and difficulty attributing cases to sources. Researchers are exploring risk-based frameworks that evaluate processes rather than firm size, and outcome-based standards that specify safety targets while allowing flexible means.</p>

<h3>Innovation and Traditional Processes</h3>
<p>Innovation in processing includes low-energy drying, high-pressure processing, improved fermentation control, modular cold chains and digital traceability. A parallel research stream examines traditional processing practices such as fermentation, smoking and drying, asking how their safety can be validated scientifically without displacing the communities and knowledge that sustain them. This raises questions about who defines acceptable risk and whose evidence counts.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Estimating resilience benefits of distributed processing capacity relative to their cost.</li>
<li>Validating traditional and artisanal processes with community partnership and consent.</li>
<li>Assessing the distributional effects of food safety rules on market entry by small and minority-owned enterprises.</li>
<li>Integrating energy, emissions and food loss outcomes into processing investment decisions.</li>
<li>Evaluating digital traceability for small producers without imposing prohibitive costs.</li>
</ol>

<h3>Methodological Reflection</h3>
<p>Processing research often divides between engineering and microbiology on one side and social science on the other. Integrated designs that link microbial models, cost models and institutional analysis remain rare but are increasingly called for, because the feasibility of local processing depends simultaneously on physical safety, economic viability and regulatory interpretation.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fprq1',
      question: {
        ELEMENTARY: 'What is one way to make food last longer?',
        MIDDLE_SCHOOL: 'What does fermentation do?',
        HIGH_SCHOOL: 'Why should home canners use tested recipes?',
        UNDERGRADUATE: 'What is a value-added product?',
        GRADUATE: 'What is risk-based regulation?',
        PHD: 'Why are local economic impact estimates for processing often contested?',
      },
      options: {
        ELEMENTARY: ['Drying it', 'Leaving it in a warm wet place', 'Putting it in a puddle', 'Leaving it open in the sun on a plate for days'],
        MIDDLE_SCHOOL: ['Uses helpful microbes to make acid that preserves food and adds flavor', 'Heats food until it burns', 'Freezes food solid', 'Removes all the salt from food'],
        HIGH_SCHOOL: ['Changing acid, jar size or time can make a recipe unsafe', 'Tested recipes are only about saving money', 'They are only for making food look nicer', 'There is no reason to follow them'],
        UNDERGRADUATE: ['A raw product transformed into one that sells for a higher price', 'A product sold below cost', 'Unwashed raw produce', 'A product with no packaging'],
        GRADUATE: ['Scaling requirements to the likelihood and severity of harm', 'Applying identical rules to every product regardless of risk', 'Removing all inspection', 'Regulating only by business name'],
        PHD: ['Results depend heavily on assumptions about displacement of existing spending', 'Economic models cannot use numbers', 'Processing has no economic effects', 'All studies use identical data'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Drying takes the water out of food, and microbes cannot grow well without water.',
        MIDDLE_SCHOOL: 'In fermentation, helpful microbes make acid that blocks harmful ones and gives a sour flavor.',
        HIGH_SCHOOL: 'Tested recipes control acidity and heating so dangerous bacteria cannot survive or grow.',
        UNDERGRADUATE: 'Turning produce into jam or sauce lets the producer capture a larger share of the final price.',
        GRADUATE: 'Risk-based regulation matches requirements to how likely and severe harm would be.',
        PHD: 'Multiplier estimates change a lot depending on whether new spending replaces spending that would have happened anyway.',
      },
    },
    {
      id: 'fprq2',
      question: {
        ELEMENTARY: 'Why does food go bad?',
        MIDDLE_SCHOOL: 'Which food is preserved by pickling?',
        HIGH_SCHOOL: 'Which foods must be pressure canned?',
        UNDERGRADUATE: 'What is a shared-use kitchen?',
        GRADUATE: 'What is a HACCP system?',
        PHD: 'What does predictive microbiology model?',
      },
      options: {
        ELEMENTARY: ['Food gets bored', 'Tiny microbes start eating it', 'The color fades', 'It gets too cold in the freezer'],
        MIDDLE_SCHOOL: ['Ice cream', 'Cucumbers kept in vinegar', 'Fresh bread', 'Raw eggs'],
        HIGH_SCHOOL: ['High-acid fruits only', 'Low-acid foods such as most vegetables, meats and beans', 'Only jams and jellies', 'Only dried herbs'],
        UNDERGRADUATE: ['A private home kitchen', 'A licensed commercial kitchen rented by many small producers', 'A restaurant dining room', 'A grocery store aisle'],
        GRADUATE: ['A marketing plan for new products', 'A preventive system that sets monitored control points for hazards', 'A type of food packaging', 'A tax on processed foods'],
        PHD: ['Consumer brand preferences', 'Microbial growth or inactivation under conditions like temperature, pH and water activity', 'Weather patterns over farms', 'Stock prices of food firms'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Microbes like bacteria and mold grow on food, especially when it is warm and wet.',
        MIDDLE_SCHOOL: 'Pickles are cucumbers kept in a sour vinegar liquid that stops harmful microbes.',
        HIGH_SCHOOL: 'Low-acid foods need the higher temperatures of a pressure canner to destroy botulism spores.',
        UNDERGRADUATE: 'Shared-use kitchens let small producers rent licensed space and equipment affordably.',
        GRADUATE: 'HACCP identifies hazards and controls them at critical points that are monitored and recorded.',
        PHD: 'Predictive microbiology uses equations to describe how microbes grow or die under set conditions.',
      },
    },
    {
      id: 'fprq3',
      question: {
        ELEMENTARY: 'What should you always do before helping with food?',
        MIDDLE_SCHOOL: 'What is pasteurization?',
        HIGH_SCHOOL: 'What is water activity?',
        UNDERGRADUATE: 'What is the missing middle in local food systems?',
        GRADUATE: 'Why can processing concentration create fragility?',
        PHD: 'What makes comparing food safety risk across processor sizes difficult?',
      },
      options: {
        ELEMENTARY: ['Put on a hat', 'Turn on the TV', 'Wash your hands', 'Eat a snack'],
        MIDDLE_SCHOOL: ['Adding color to drinks', 'Keeping food in the sun', 'Heating food or drink to a set temperature to kill harmful microbes', 'Mixing food with sand'],
        HIGH_SCHOOL: ['The total weight of a food', 'How fast a food cooks', 'How much water in a food is available for microbes to use', 'The amount of water needed to wash produce'],
        UNDERGRADUATE: ['Too many large factories', 'A shortage of consumers', 'The gap in mid-scale processing and distribution between small farms and large industry', 'The middle aisle of a supermarket'],
        GRADUATE: ['It makes products cheaper with no downside', 'It guarantees worker safety', 'Disruptions at a few plants ripple through the whole system', 'It increases the number of independent farmers'],
        PHD: ['All outbreaks are perfectly reported', 'Small processors never sell food', 'Underreporting of illness and difficulty attributing cases to sources', 'Large plants never fail'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Washing your hands keeps germs away from food and keeps everyone safe.',
        MIDDLE_SCHOOL: 'Pasteurization heats milk, juice and other foods enough to kill harmful microbes.',
        HIGH_SCHOOL: 'Lowering water activity with drying, salt or sugar makes it hard for microbes to grow.',
        UNDERGRADUATE: 'The missing middle is the lack of mid-scale facilities that local supply chains need.',
        GRADUATE: 'When a few plants handle most volume, problems at one can disrupt supply widely.',
        PHD: 'Many illnesses are never reported, and linking cases to specific sources is hard.',
      },
    },
    {
      id: 'fprq4',
      question: {
        ELEMENTARY: 'Which food is made by cooking fruit with sugar?',
        MIDDLE_SCHOOL: 'Why must green beans be canned in a pressure canner?',
        HIGH_SCHOOL: 'What is one trade-off of freezing food?',
        UNDERGRADUATE: 'What is a cottage food law?',
        GRADUATE: 'What is scale-appropriate regulation?',
        PHD: 'What is appropriate technology?',
      },
      options: {
        ELEMENTARY: ['Popcorn', 'Pickles', 'Raisins', 'Jam'],
        MIDDLE_SCHOOL: ['To make them crunchier', 'To change their color', 'To save time', 'Ordinary boiling is not hot enough to destroy certain dangerous bacteria'],
        HIGH_SCHOOL: ['It adds lots of salt', 'It only works for high-acid foods', 'It ruins all nutrients', 'It depends on constant electricity'],
        UNDERGRADUATE: ['A law banning all home cooking', 'A rule about building cottages', 'A tax on farmers markets', 'A rule letting some low-risk foods be made at home and sold directly'],
        GRADUATE: ['Exempting all businesses from safety rules', 'Requiring small firms to build large factories', 'Banning small processors', 'Adapting rules to operation size without lowering protection'],
        PHD: ['The most expensive technology available', 'Technology that only works in laboratories', 'Technology banned by regulators', 'Technology matched to the scale, skills and resources of its users'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Jam is fruit cooked with sugar. The sugar helps keep it good for a long time.',
        MIDDLE_SCHOOL: 'Green beans are low in acid, so they need the higher heat of a pressure canner.',
        HIGH_SCHOOL: 'Freezing keeps food well, but a power cut can spoil everything in the freezer.',
        UNDERGRADUATE: 'Cottage food laws let people make certain low-risk foods at home for direct sale.',
        GRADUATE: 'Scale-appropriate rules fit small operations while keeping the same level of protection.',
        PHD: 'Appropriate technology is designed to fit the context and capacity of the people using it.',
      },
    },
    {
      id: 'fprq5',
      question: {
        ELEMENTARY: 'How does keeping food longer help the planet?',
        MIDDLE_SCHOOL: 'Which method works by removing water from food?',
        HIGH_SCHOOL: 'What is hurdle technology?',
        UNDERGRADUATE: 'Why do shared facilities matter for small processors?',
        GRADUATE: 'What is a food hub?',
        PHD: 'What research question arises around traditional processing practices?',
      },
      options: {
        ELEMENTARY: ['Less food gets thrown away', 'It makes more garbage', 'It uses up all the water', 'It makes farms grow less'],
        MIDDLE_SCHOOL: ['Dehydration', 'Pasteurization', 'Freezing', 'Fermentation'],
        HIGH_SCHOOL: ['Combining several mild preservation factors that together stop microbes', 'Jumping over boxes in a factory', 'Using one very strong chemical', 'Stacking jars on shelves'],
        UNDERGRADUATE: ['The fixed cost of building a licensed kitchen alone is often prohibitive', 'Small processors need no equipment', 'Shared facilities are always free', 'Regulators forbid private kitchens'],
        GRADUATE: ['An enterprise that aggregates, distributes and often processes products from many local producers', 'A central train station', 'A national food safety agency', 'A single farm stand'],
        PHD: ['How to validate their safety without displacing the communities and knowledge behind them', 'Whether to ban them everywhere', 'How to patent them for one company', 'Whether they involve any microbes at all'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'When food lasts longer, less good food goes into the trash.',
        MIDDLE_SCHOOL: 'Dehydration, or drying, removes water so microbes cannot grow.',
        HIGH_SCHOOL: 'Hurdle technology combines factors like mild acid, salt and cooling that work together.',
        UNDERGRADUATE: 'Sharing a licensed kitchen spreads high fixed costs across many small producers.',
        GRADUATE: 'Food hubs aggregate and move products from many local producers to larger buyers.',
        PHD: 'Researchers ask how to show traditional processes are safe while respecting the communities who hold them.',
      },
    },
  ],
}

export default expansion
