import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'food-preservation',
  lessons: [
    {
      id: 'fs-preserve-1',
      title: 'Making Food Last',
      content: {
        ELEMENTARY: `
<h2>Making Food Last Longer</h2>
<p>Have you ever found a banana that turned brown and mushy, or bread with fuzzy spots? Food does not stay fresh forever. Tiny living things called microbes, too small to see, like to eat our food too. People have found clever ways to keep food good for a long time, so nothing goes to waste!</p>

<h3>Why Food Spoils</h3>
<p>Microbes love food that is wet and warm. Mold is one kind of microbe that makes fuzzy spots. Bacteria are even tinier. When microbes grow on food, it can smell bad, look strange and make people sick. To stop them, we can take away the things they need: water and warmth.</p>
<ul>
<li><strong>Microbe:</strong> a living thing so tiny you need a microscope to see it</li>
<li><strong>Mold:</strong> a fuzzy microbe that grows on old bread, fruit and cheese</li>
<li><strong>Spoil:</strong> when food goes bad and is no longer safe or nice to eat</li>
<li><strong>Preserve:</strong> to keep food safe and good to eat for a longer time</li>
<li><strong>Dried fruit:</strong> fruit with most of its water taken out, like raisins from grapes</li>
</ul>

<h3>Ways to Keep Food Good</h3>
<table>
<thead><tr><th>Way</th><th>How it works</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Cold</td><td>Microbes grow slowly when it is cold</td><td>Milk in the fridge</td></tr>
<tr><td>Freezing</td><td>Ice stops microbes from growing</td><td>Frozen peas and berries</td></tr>
<tr><td>Drying</td><td>Microbes need water, so dry food lasts</td><td>Raisins, dried beans, rice</td></tr>
<tr><td>Pickling</td><td>Sour vinegar keeps bad microbes away</td><td>Pickled cucumbers</td></tr>
</tbody>
</table>

<h3>Fun Fact: Good Microbes!</h3>
<p>Not all microbes are bad. Some friendly microbes help make yogurt, cheese and sauerkraut. These good microbes make food sour, and the sourness helps keep bad microbes away. People all over the world have made special foods this way for a very long time.</p>

<h3>How You Can Help</h3>
<ol>
<li>Put leftovers in the fridge after dinner with a grown-up.</li>
<li>Freeze very ripe bananas to use in smoothies later.</li>
<li>Help make a jar of quick fridge pickles with an adult.</li>
<li>Eat the oldest food first, so nothing gets forgotten at the back.</li>
</ol>
<p>When we make food last, we waste less, save money and respect the farmers who grew it. Every saved bite counts!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Traditional Ways to Preserve the Harvest</h2>
<p>Before refrigerators existed, people still needed food through long winters, dry seasons and journeys. Every culture developed ways to keep food from spoiling: drying fish in the wind, packing meat in salt, fermenting cabbage, smoking foods over fires, and storing roots in cool cellars. Many of these methods are still used today because they work and they taste delicious.</p>

<h3>The Enemies of Fresh Food</h3>
<p>Food spoils for a few main reasons. Microbes such as bacteria, yeasts and molds grow on it. Natural chemicals called enzymes inside the food keep working after harvest, softening and browning it. Air, light and pests can damage it too. Every preservation method slows down one or more of these enemies.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Fermentation:</strong> using helpful microbes to change food, often making it sour and longer lasting</li>
<li><strong>Curing:</strong> preserving meat or fish with salt, sometimes with sugar or smoke</li>
<li><strong>Dehydration:</strong> removing water from food so microbes cannot grow</li>
<li><strong>Canning:</strong> sealing food in jars or cans and heating it to kill microbes</li>
<li><strong>Root cellar:</strong> a cool, dark, slightly damp storage room for vegetables like potatoes and carrots</li>
<li><strong>Enzyme:</strong> a natural substance in food that speeds up changes like ripening and browning</li>
</ul>

<h3>Methods Around the World</h3>
<table>
<thead><tr><th>Method</th><th>What it stops</th><th>Traditional examples</th></tr></thead>
<tbody>
<tr><td>Drying in sun or wind</td><td>Microbes, by removing water</td><td>Dried fruit, jerky, dried fish, dried chilies</td></tr>
<tr><td>Salting</td><td>Microbes, by pulling out water</td><td>Salted fish, cured ham</td></tr>
<tr><td>Fermenting</td><td>Harmful microbes, by making food acidic</td><td>Sauerkraut, kimchi, yogurt, miso</td></tr>
<tr><td>Smoking</td><td>Microbes, by drying and coating with smoke</td><td>Smoked fish and meats</td></tr>
<tr><td>Sugar preserving</td><td>Microbes, by tying up water</td><td>Jams and fruit preserves</td></tr>
<tr><td>Cool storage</td><td>Slows microbes and enzymes</td><td>Root cellars, clay pot coolers</td></tr>
</tbody>
</table>

<h3>Why It Matters Today</h3>
<p>Preserving food helps families eat local food all year, saves money when harvests are cheap and plentiful, and cuts food waste. A garden often produces far more tomatoes or zucchini than a family can eat at once. Preserving that extra harvest turns waste into winter meals. Traditional recipes also carry family and cultural memories from one generation to the next.</p>

<h3>Safety First</h3>
<p>Some methods, especially canning, must be done exactly right. If not, dangerous bacteria can survive in sealed jars. That is why careful home cooks always follow tested recipes and work with an experienced adult.</p>
`,
        HIGH_SCHOOL: `
<h2>The Science of Canning, Fermenting and Drying</h2>
<p>Every preservation method is applied microbiology and chemistry. Microbes need water, nutrients, a suitable temperature, the right acidity and, for some, oxygen. Preservation works by removing or changing one or more of these conditions. Understanding the science explains why some methods are forgiving and others, especially canning low-acid foods, demand precise procedures.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>pH:</strong> a scale measuring acidity, where lower numbers mean more acidic conditions</li>
<li><strong>Water activity:</strong> a measure of how much water in food is available for microbes to use</li>
<li><strong>Clostridium botulinum:</strong> a soil bacterium whose spores can survive boiling and produce a deadly toxin in sealed low-acid food</li>
<li><strong>Lactic acid bacteria:</strong> helpful microbes that turn sugars into lactic acid during fermentation</li>
<li><strong>Pressure canning:</strong> heating jars under pressure to reach temperatures above boiling for low-acid foods</li>
<li><strong>Water bath canning:</strong> processing jars in boiling water, safe only for high-acid foods</li>
</ul>

<h3>Canning: Heat and Seal</h3>
<p>Canning heats food in sealed containers to destroy spoilage organisms and pathogens, and the seal prevents recontamination. The critical distinction is acidity. High-acid foods, such as most fruits, jams, pickles and properly acidified tomatoes, can be processed in a boiling water bath. Low-acid foods, such as most vegetables, beans, meat and fish, must be pressure canned. At sea level, boiling water cannot get hotter than 100 degrees Celsius, which does not reliably destroy botulinum spores. A pressure canner raises the temperature to around 116 degrees Celsius. Recipes must also be adjusted for altitude because water boils at lower temperatures higher up.</p>

<h3>Fermentation: Friendly Acid</h3>
<p>In vegetable fermentation, salt draws water out of vegetables and favors salt-tolerant lactic acid bacteria. Kept submerged under brine, away from air, these bacteria produce lactic acid that lowers the pH and makes the food inhospitable to many harmful microbes. Fermentation also changes flavor and texture and can add beneficial microbes when the food is eaten unheated.</p>

<h3>Drying: Remove the Water</h3>
<p>Drying lowers water activity until microbes cannot grow. Most bacteria need relatively high water activity, while some molds and yeasts tolerate drier conditions, so foods must be dried thoroughly and stored away from humidity. Methods range from sun drying and solar dryers to electric dehydrators and freeze drying.</p>

<h3>Comparing Methods</h3>
<table>
<thead><tr><th>Method</th><th>Main hurdle</th><th>Energy use</th><th>Safety notes</th></tr></thead>
<tbody>
<tr><td>Water bath canning</td><td>Heat plus high acidity</td><td>Moderate, during processing only</td><td>Only for high-acid foods</td></tr>
<tr><td>Pressure canning</td><td>High heat under pressure</td><td>Moderate, during processing only</td><td>Required for low-acid foods; use tested times</td></tr>
<tr><td>Fermentation</td><td>Acidity and salt</td><td>Very low</td><td>Keep food submerged; discard if moldy throughout or off-smelling</td></tr>
<tr><td>Drying</td><td>Low water activity</td><td>Low with solar, higher with machines</td><td>Dry fully; store airtight</td></tr>
<tr><td>Freezing</td><td>Cold stops growth</td><td>Continuous electricity</td><td>Microbes resume growing after thawing</td></tr>
</tbody>
</table>

<h3>Practical Takeaways</h3>
<ol>
<li>Use tested recipes from reliable food safety sources; do not improvise canning times.</li>
<li>Never water-bath can low-acid vegetables, beans or meats.</li>
<li>Start with forgiving projects like refrigerator pickles, sauerkraut or dried apples.</li>
<li>Label every jar with contents and date, and rotate older stock forward.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Preservation Methods, Food Safety and Food Security</h2>
<p>Food preservation sits at the junction of microbiology, engineering and food security. Globally, a significant share of food is lost between harvest and retail, much of it because of inadequate storage, cooling and processing. This lesson analyzes preservation through the hurdle concept, examines safety-critical controls, and connects household and small-scale preservation to food security outcomes.</p>

<h3>The Hurdle Concept</h3>
<p>Rather than relying on one extreme treatment, many products combine several moderate barriers, or hurdles, to microbial growth: reduced water activity, lowered pH, mild heat, salt, preservatives, cold storage and controlled atmosphere. Each hurdle alone might be insufficient, but together they stabilize the product while preserving flavor and nutrition. Traditional foods such as cured sausages and pickled vegetables are classic examples of hurdle design developed empirically long before the theory.</p>
<ul>
<li><strong>Hurdle technology:</strong> combining several mild preservation barriers so microbes cannot overcome them all</li>
<li><strong>Critical control point:</strong> a step where control is essential to prevent or eliminate a food safety hazard</li>
<li><strong>Thermal death time:</strong> the time at a given temperature needed to destroy a defined population of microbes</li>
<li><strong>Postharvest loss:</strong> food lost between harvest and the consumer through spoilage, damage or pests</li>
<li><strong>Cold chain:</strong> an unbroken sequence of refrigerated storage and transport from producer to consumer</li>
<li><strong>Hermetic storage:</strong> sealed, airtight storage that starves insects of oxygen, used especially for grains</li>
</ul>

<h3>Safety-Critical Parameters</h3>
<table>
<thead><tr><th>Parameter</th><th>Why it matters</th><th>Typical control</th></tr></thead>
<tbody>
<tr><td>pH</td><td>Botulinum growth is generally prevented at pH 4.6 or below</td><td>Acidify with vinegar or citric acid; measure pH</td></tr>
<tr><td>Water activity</td><td>Lower values restrict bacteria, then yeasts and molds</td><td>Drying, salting, sugaring</td></tr>
<tr><td>Process temperature and time</td><td>Determines lethality to spores and pathogens</td><td>Validated process schedules</td></tr>
<tr><td>Oxygen</td><td>Affects aerobic spoilage, but anaerobic conditions can favor botulinum</td><td>Vacuum or hermetic sealing combined with other hurdles</td></tr>
<tr><td>Storage temperature</td><td>Governs growth rate of remaining organisms</td><td>Refrigeration and cold chain monitoring</td></tr>
</tbody>
</table>
<p>A key reasoning point: removing oxygen is not inherently protective. Low-acid foods sealed without adequate heat treatment can create exactly the conditions botulinum needs, which is why vacuum-packed or oil-infused low-acid foods require refrigeration or acidification.</p>

<h3>Nutritional Trade-offs</h3>
<p>Heat processing can reduce heat-sensitive vitamins such as vitamin C, while making some nutrients more available. Freezing generally retains nutrients well, and produce frozen soon after harvest can match or exceed the nutritional quality of fresh produce that spent days in transport. Fermentation can increase certain B vitamins and reduce some anti-nutrients. Evaluating methods requires comparing realistic alternatives, not idealized fresh food.</p>

<h3>Preservation and Food Security</h3>
<p>Preservation smooths seasonal gluts and scarcities, allowing households to store food for lean periods and farmers to sell when prices recover instead of at harvest lows. Low-cost technologies, such as hermetic grain bags, solar dryers and evaporative coolers, can reduce losses where cold chains are limited.</p>

<h3>Applied Checklist: Assessing a Preservation Option</h3>
<ol>
<li>Identify the food's acidity and water activity, and its main hazards.</li>
<li>Select hurdles appropriate to those hazards, using validated processes.</li>
<li>Compare energy needs, equipment costs and skills required.</li>
<li>Estimate shelf life, nutritional effects and consumer acceptance.</li>
<li>Consider who controls the stored food and who benefits from the value added.</li>
</ol>
`,
        GRADUATE: `
<h2>Preservation as Culture, Sovereignty Tool and Enterprise</h2>
<p>Preservation is more than a technical step after harvest. It encodes cultural knowledge, shapes seasonal diets, determines who captures value in the food chain and influences community resilience. This lesson examines preservation through three lenses: cultural practice, food sovereignty strategy and small business opportunity, along with the institutional barriers that shape each.</p>

<h3>Preservation as Cultural Practice</h3>
<p>Fermented, dried, smoked and salted foods are central to culinary identities worldwide. These practices carry ecological knowledge about seasons, local species and microbial processes, and they are often transmitted within families and communities, frequently by women and elders. Industrialization of the food supply and changes in household labor have weakened transmission in many places, while revival movements are reconnecting younger generations with these skills.</p>
<ul>
<li><strong>Intangible cultural heritage:</strong> living practices, knowledge and skills that communities recognize as part of their heritage</li>
<li><strong>Value addition:</strong> transforming raw produce into a product worth more, such as jam from fruit</li>
<li><strong>Cottage food law:</strong> rules allowing certain low-risk foods made in home kitchens to be sold directly</li>
<li><strong>Acidified food:</strong> a low-acid food to which acid is added, often subject to specific regulation</li>
<li><strong>Shared-use kitchen:</strong> a licensed commercial kitchen rented by multiple small food producers</li>
<li><strong>Food sovereignty:</strong> the right of peoples to define their own food and agriculture systems</li>
</ul>

<h3>Preservation as a Sovereignty Tool</h3>
<p>Community control over storage and processing reduces dependence on distant processors and volatile markets. Collective grain stores, community canneries, shared drying facilities and cooperative processing allow producers to hold produce until prices improve and to keep food in local hands during disruptions. Where processing is concentrated in a few large firms, primary producers often capture a small share of final value; local processing can shift that balance.</p>

<h3>Preservation as Enterprise</h3>
<table>
<thead><tr><th>Pathway</th><th>Opportunities</th><th>Barriers</th></tr></thead>
<tbody>
<tr><td>Cottage production</td><td>Low start-up costs, direct sales</td><td>Product limits, sales caps, restricted channels</td></tr>
<tr><td>Shared-use kitchens</td><td>Licensed space without major capital</td><td>Scheduling, rental costs, distance</td></tr>
<tr><td>Cooperative processing</td><td>Shared equipment, collective marketing</td><td>Governance demands, working capital</td></tr>
<tr><td>Commercial manufacturing</td><td>Scale, retail access</td><td>Safety planning requirements, capital, competition</td></tr>
</tbody>
</table>
<p>Regulation is a central institutional barrier. Food safety rules are essential, particularly for low-acid and acidified products, but compliance costs fall disproportionately on small producers. Policy designs such as tiered requirements, technical assistance, process authority support and public shared kitchens can maintain safety while lowering entry costs.</p>

<h3>Equity Considerations</h3>
<p>Who has time, equipment and space to preserve food is unevenly distributed. Small apartments, shift work and lack of storage limit preservation for many low-income households. Programs that provide community kitchens, equipment lending and culturally relevant workshops can widen participation. Recognizing traditional practices also requires respecting community authority over how knowledge is shared and commercialized.</p>

<h3>Evaluation Framework</h3>
<ol>
<li><strong>Safety:</strong> validated processes, training reach and incident monitoring.</li>
<li><strong>Food security:</strong> reduction in losses and seasonal shortfalls.</li>
<li><strong>Economic:</strong> income retained by producers and local enterprises.</li>
<li><strong>Cultural:</strong> intergenerational transmission and community control of knowledge.</li>
<li><strong>Environmental:</strong> energy use, packaging and waste diversion.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Efficacy, Knowledge Documentation and Innovation</h2>
<p>Preservation research spans predictive microbiology, process engineering, nutrition science, anthropology and innovation studies. Key frontiers include quantifying the efficacy of traditional and novel methods, documenting traditional knowledge ethically, and developing low-energy technologies for contexts without reliable cold chains. Each raises methodological questions about evidence, validity and power.</p>

<h3>Quantifying Efficacy</h3>
<p>Predictive microbiology models how microbial populations grow or decline under varying temperature, pH, water activity and preservative concentrations. Primary models describe growth curves, secondary models relate parameters to environmental conditions, and tertiary models package these into decision tools. Quantitative microbial risk assessment links process performance to probable health outcomes. Applying these tools to traditional foods is challenging because practices vary between households, raw materials vary seasonally, and spontaneous fermentations involve complex microbial communities.</p>
<ul>
<li><strong>Predictive microbiology:</strong> mathematical modeling of microbial behavior as a function of environmental conditions</li>
<li><strong>Quantitative microbial risk assessment:</strong> estimating the probability and severity of illness from hazards in food</li>
<li><strong>Challenge study:</strong> deliberately inoculating a product with a target organism to test whether it can grow or survive</li>
<li><strong>Metagenomics:</strong> sequencing all genetic material in a sample to characterize whole microbial communities</li>
<li><strong>Nonthermal processing:</strong> preservation techniques that inactivate microbes without high heat, such as high pressure</li>
<li><strong>Prior informed consent:</strong> agreement given freely by knowledge holders before their knowledge is accessed or used</li>
</ul>

<h3>Microbial Ecology of Fermentation</h3>
<p>Sequencing methods have transformed fermentation research, revealing succession patterns, community assembly processes and functional genes in foods once studied only through culturing. Open questions include how stable these communities are across households and regions, how starter cultures compare with spontaneous fermentation in safety and diversity, and whether traditional practices encode effective controls that formal validation has overlooked.</p>

<h3>Documenting Traditional Knowledge</h3>
<p>Documentation can support intergenerational transmission and regulatory recognition, but it also raises risks of misappropriation, decontextualization and commercialization without benefit to knowledge holders. Ethical research increasingly uses community protocols, data sovereignty principles, co-authorship and control over publication. A methodological tension exists between standardization, which regulators and scientists favor, and the situated variability that gives traditional practices their resilience and meaning.</p>

<h3>Innovation Frontiers</h3>
<table>
<thead><tr><th>Area</th><th>Research question</th><th>Key uncertainty</th></tr></thead>
<tbody>
<tr><td>Off-grid cooling</td><td>How well do evaporative and solar-powered coolers reduce losses?</td><td>Performance under humid climates, adoption and maintenance</td></tr>
<tr><td>Solar drying</td><td>Can low-cost dryers meet quality and safety targets reliably?</td><td>Weather variability, contamination control</td></tr>
<tr><td>Nonthermal processing</td><td>Can high pressure or pulsed electric fields scale for small producers?</td><td>Capital cost, energy, regulatory acceptance</td></tr>
<tr><td>Hermetic storage</td><td>Long-term effects on grain quality and pest resistance</td><td>Durability and reuse</td></tr>
<tr><td>Bio-preservation</td><td>Using protective cultures and their metabolites</td><td>Strain safety and consistency</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Should regulation recognize traditional processes based on historical safety records, or require formal validation? How should researchers weigh nutritional losses against energy and access gains? Do technology transfer programs strengthen local systems or create dependency on imported equipment and expertise? Measuring postharvest loss itself is contested, since estimates vary widely with methods and definitions.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Predictive models calibrated for household-scale traditional fermentations.</li>
<li>Standardized, comparable methods for measuring postharvest losses.</li>
<li>Participatory evaluation of low-energy preservation technologies with users.</li>
<li>Ethical frameworks and data governance for documenting traditional preservation knowledge.</li>
<li>Life-cycle comparisons of cold chain expansion versus distributed preservation.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fpq1',
      question: {
        ELEMENTARY: "Why does food in the fridge last longer?",
        MIDDLE_SCHOOL: "How does drying help preserve food?",
        HIGH_SCHOOL: "Why must low-acid vegetables be pressure canned instead of water bath canned?",
        UNDERGRADUATE: "What is the hurdle concept in food preservation?",
        GRADUATE: "Why do food safety rules often fall hardest on small preservation businesses?",
        PHD: "What is a challenge study?",
      },
      options: {
        ELEMENTARY: ["Microbes grow slowly when it is cold", "The fridge adds vitamins", "Light makes food fresh", "Cold food gets bigger"],
        MIDDLE_SCHOOL: ["It removes the water microbes need to grow", "It adds sugar to fruit", "It makes food colder", "It kills enzymes with light"],
        HIGH_SCHOOL: ["Boiling water cannot get hot enough to reliably destroy botulinum spores", "Pressure canning is faster", "Water baths make jars crack", "Vegetables float in water"],
        UNDERGRADUATE: ["Combining several mild barriers so microbes cannot overcome them all", "Using one very extreme treatment only", "Jumping jars over hurdles to test seals", "Removing all oxygen to make food safe"],
        GRADUATE: ["Compliance costs are similar in total but spread over far smaller sales", "Small businesses are exempt from all rules", "Rules only apply to large companies", "Regulators ban small producers"],
        PHD: ["Deliberately inoculating a product with a target organism to test whether it grows", "A cooking competition for preservers", "Asking consumers to taste a product", "Testing jars by dropping them"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Cold slows down microbes, so food stays good longer in the fridge.",
        MIDDLE_SCHOOL: "Microbes need water; drying takes it away so they cannot grow.",
        HIGH_SCHOOL: "Pressure canners reach around 116 degrees Celsius, hot enough for low-acid foods.",
        UNDERGRADUATE: "Several moderate hurdles together stabilize food while keeping flavor and nutrition.",
        GRADUATE: "Fixed compliance costs weigh more heavily on small producers with low sales volumes.",
        PHD: "Challenge studies test directly whether a product's hurdles stop a target pathogen.",
      },
    },
    {
      id: 'fpq2',
      question: {
        ELEMENTARY: "What is mold?",
        MIDDLE_SCHOOL: "Which of these is a fermented food?",
        HIGH_SCHOOL: "What do lactic acid bacteria do in fermentation?",
        UNDERGRADUATE: "Why is removing oxygen alone not enough to make low-acid food safe?",
        GRADUATE: "How can community control of storage and processing support food sovereignty?",
        PHD: "What has metagenomic sequencing contributed to fermentation research?",
      },
      options: {
        ELEMENTARY: ["A fuzzy microbe that grows on old food", "A kind of vitamin", "A type of fridge", "A shiny fruit skin"],
        MIDDLE_SCHOOL: ["Sauerkraut", "Fresh lettuce", "Raw carrot sticks", "A glass of water"],
        HIGH_SCHOOL: ["Turn sugars into lactic acid, lowering the pH", "Add salt to vegetables", "Heat the jar to boiling", "Remove all water from food"],
        UNDERGRADUATE: ["Anaerobic conditions can favor botulinum growth", "Oxygen is the only thing microbes need", "Without oxygen all microbes die instantly", "Oxygen makes food acidic"],
        GRADUATE: ["Producers can hold produce until prices improve and keep food local in disruptions", "It moves all processing to distant firms", "It removes the need for any harvest", "It guarantees the highest retail prices"],
        PHD: ["Revealing succession patterns and functional genes in whole microbial communities", "Proving all fermentations are identical", "Eliminating the need for safety testing", "Replacing traditional knowledge entirely"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Mold is a fuzzy microbe that grows on old bread, fruit and cheese.",
        MIDDLE_SCHOOL: "Sauerkraut is cabbage fermented by helpful microbes that make it sour.",
        HIGH_SCHOOL: "Lactic acid bacteria make lactic acid, which lowers pH and protects the food.",
        UNDERGRADUATE: "Botulinum grows without oxygen, so sealed low-acid foods need heat, acid or cold.",
        GRADUATE: "Shared storage and processing keeps value and food in local hands.",
        PHD: "Sequencing shows whole communities, not just organisms that can be cultured.",
      },
    },
    {
      id: 'fpq3',
      question: {
        ELEMENTARY: "Raisins are a dried form of which fruit?",
        MIDDLE_SCHOOL: "What is a root cellar used for?",
        HIGH_SCHOOL: "Which foods can safely be processed in a boiling water bath?",
        UNDERGRADUATE: "Why can frozen produce sometimes match fresh produce in nutrition?",
        GRADUATE: "What is a shared-use kitchen?",
        PHD: "What methodological tension arises when documenting traditional preservation knowledge?",
      },
      options: {
        ELEMENTARY: ["Grapes", "Bananas", "Apples", "Oranges"],
        MIDDLE_SCHOOL: ["Storing vegetables like potatoes in cool, dark conditions", "Growing new roots for trees", "Cooking soup quickly", "Freezing ice cream"],
        HIGH_SCHOOL: ["High-acid foods like jams, pickles and acidified tomatoes", "Plain green beans", "Meat and fish", "Dried beans"],
        UNDERGRADUATE: ["It is frozen soon after harvest, while fresh produce may spend days in transport", "Freezing adds new vitamins", "Fresh produce has no nutrients", "Freezing kills all enzymes forever"],
        GRADUATE: ["A licensed commercial kitchen rented by multiple small producers", "A home kitchen used by neighbors", "A restaurant that shares recipes", "A school cafeteria"],
        PHD: ["Standardization favored by regulators versus the situated variability of practices", "Documents are always too short", "Traditional knowledge cannot be written", "Researchers never need consent"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Raisins are grapes with most of their water dried out.",
        MIDDLE_SCHOOL: "Root cellars keep vegetables cool, dark and slightly damp for months.",
        HIGH_SCHOOL: "The acid in high-acid foods prevents botulinum growth, so boiling water is enough.",
        UNDERGRADUATE: "Quick freezing locks in quality, while fresh produce loses some nutrients during transport.",
        GRADUATE: "Shared-use kitchens give small producers licensed space without buying their own facility.",
        PHD: "Standardization helps validation but can erase the variability that makes practices resilient.",
      },
    },
    {
      id: 'fpq4',
      question: {
        ELEMENTARY: "Which is a good way to save very ripe bananas?",
        MIDDLE_SCHOOL: "Why is it important to follow tested canning recipes?",
        HIGH_SCHOOL: "Why do canning recipes need adjustment at high altitude?",
        UNDERGRADUATE: "What is hermetic storage?",
        GRADUATE: "What is a cottage food law?",
        PHD: "Why is postharvest loss measurement itself contested?",
      },
      options: {
        ELEMENTARY: ["Freeze them for smoothies later", "Leave them in the sun", "Throw them away", "Put them in the bath"],
        MIDDLE_SCHOOL: ["If done wrong, dangerous bacteria can survive in sealed jars", "Recipes make jars prettier", "Tested recipes use less food", "There is no reason at all"],
        HIGH_SCHOOL: ["Water boils at a lower temperature higher up", "Jars are heavier at altitude", "Air pressure makes food acidic", "Altitude has no effect"],
        UNDERGRADUATE: ["Sealed, airtight storage that starves insects of oxygen", "Storing grain in open piles", "Keeping food in a refrigerator", "Drying grain in the sun"],
        GRADUATE: ["Rules allowing certain low-risk home-made foods to be sold directly", "A ban on home cooking", "A tax on small farms", "A law about building cottages"],
        PHD: ["Estimates vary widely with methods and definitions", "Losses never occur", "All countries use identical measurement", "Loss is always exactly one quarter"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Frozen bananas make great smoothies, so nothing goes to waste.",
        MIDDLE_SCHOOL: "Tested recipes give times and methods that make sure harmful bacteria are destroyed.",
        HIGH_SCHOOL: "Lower boiling temperatures mean longer processing or higher pressure is needed.",
        UNDERGRADUATE: "Hermetic bags and containers cut off oxygen, killing insect pests in stored grain.",
        GRADUATE: "Cottage food laws let small producers sell some low-risk foods made at home.",
        PHD: "Different definitions and methods produce very different loss estimates.",
      },
    },
    {
      id: 'fpq5',
      question: {
        ELEMENTARY: "What can good microbes help make?",
        MIDDLE_SCHOOL: "What are enzymes in food?",
        HIGH_SCHOOL: "What is water activity?",
        UNDERGRADUATE: "Below roughly which pH is botulinum growth generally prevented?",
        GRADUATE: "Why might preservation be unevenly accessible to households?",
        PHD: "What does predictive microbiology do?",
      },
      options: {
        ELEMENTARY: ["Yogurt and cheese", "Plastic bags", "Metal spoons", "Glass jars"],
        MIDDLE_SCHOOL: ["Natural substances that speed up changes like ripening and browning", "Tiny insects", "A kind of salt", "Plastic coatings"],
        HIGH_SCHOOL: ["How much water in food is available for microbes to use", "How much water a plant drinks", "The temperature of boiling water", "The weight of a jar"],
        UNDERGRADUATE: ["4.6", "7.0", "9.0", "12.0"],
        GRADUATE: ["Time, equipment and storage space are unevenly distributed", "Everyone has a large pantry", "Preservation requires no time", "Only rural households eat food"],
        PHD: ["Models how microbes grow or decline under varying conditions", "Predicts weather for harvests", "Counts customers in shops", "Forecasts food prices"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Friendly microbes help turn milk into yogurt and cheese.",
        MIDDLE_SCHOOL: "Enzymes keep working after harvest, which is why fruit browns and softens.",
        HIGH_SCHOOL: "Lowering water activity, by drying or salting, keeps microbes from growing.",
        UNDERGRADUATE: "At pH 4.6 or below, botulinum generally cannot grow, which defines high-acid foods.",
        GRADUATE: "Small homes, shift work and limited storage make preserving harder for many families.",
        PHD: "Predictive models relate microbial behavior to temperature, pH, water activity and more.",
      },
    },
  ],
}

export default expansion
