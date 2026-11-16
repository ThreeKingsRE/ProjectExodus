import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'product-lifecycle',
  lessons: [
    {
      id: 'zw-life-1',
      title: 'Following the Journey of a Product',
      content: {
        ELEMENTARY: `
<h2>Every Thing Has a Story</h2>
<p>Hello, Detective! Today you are going to solve a mystery. Pick up a pencil. Where did it come from? Where will it go when it is tiny and worn out? Every single thing around you has a story, from its very beginning to its very end. Thinking about that whole story is called <em>lifecycle thinking</em>.</p>

<h3>Chapter One: Where It Comes From</h3>
<p>Everything starts with something from nature. A pencil starts as a tree and some graphite dug from the ground. A t-shirt might start as cotton growing in a field. A soda can starts as rock with metal inside it.</p>

<h3>Chapter Two: Making and Moving</h3>
<p>Next, factories turn those natural things into products. Machines cut, melt, spin and shape them. Then trucks, trains and ships carry the products to stores. All of this uses energy, water and work from many people.</p>

<h3>Chapter Three: Using It</h3>
<p>Then the product comes home with you! Some things, like a lamp, use electricity every day. Others, like a book, do not need any energy while you use them.</p>

<h3>Chapter Four: The Ending</h3>
<p>Finally, the story ends. The thing might go in the trash, the recycling bin or the compost. Or, even better, it might get a new chapter by being fixed or passed on to a friend!</p>

<h3>Detective Words</h3>
<ul>
<li><strong>Lifecycle:</strong> the whole story of a thing, from where it comes from to where it goes</li>
<li><strong>Natural resources:</strong> things from nature like trees, water, rocks and oil that we use to make stuff</li>
<li><strong>Factory:</strong> a big building where machines and people make products</li>
<li><strong>Transport:</strong> moving things from one place to another by truck, train, ship or plane</li>
<li><strong>Disposal:</strong> what happens to a thing at the end, like going to the trash or recycling</li>
</ul>

<h3>Be a Lifecycle Detective</h3>
<ol>
<li>Choose one thing in your room.</li>
<li>Guess what it was made from in nature.</li>
<li>Think about how it got to your home.</li>
<li>Decide the best ending for it: reuse, repair, share, recycle or compost.</li>
</ol>
<p>When you know a thing's whole story, you can help give it a happier ending!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Tracing a Product from Cradle to Grave</h2>
<p>When you buy something, you only see a small part of its life: the moment it sits on a store shelf. But before that moment, materials were mined or grown, processed, made into parts, assembled and shipped. After you are finished with it, it still has to go somewhere. Scientists call this full journey a product's <em>lifecycle</em>, and they sometimes describe it as going from "cradle to grave."</p>

<h3>The Five Main Stages</h3>
<ol>
<li><strong>Raw material extraction:</strong> mining metals, drilling for oil, cutting trees or growing crops</li>
<li><strong>Manufacturing:</strong> turning raw materials into parts and then into finished products</li>
<li><strong>Distribution:</strong> packaging and transporting products to stores and homes</li>
<li><strong>Use:</strong> the time the product is used, including any energy, water or supplies it needs</li>
<li><strong>End of life:</strong> landfill, incineration, recycling, composting, reuse or repair</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Cradle to grave:</strong> looking at a product from raw material extraction all the way to disposal</li>
<li><strong>Cradle to cradle:</strong> designing products so their materials become the start of new products instead of waste</li>
<li><strong>Environmental footprint:</strong> the total effect a product or activity has on the environment</li>
<li><strong>Embodied energy:</strong> all the energy used to make and deliver a product before you ever use it</li>
<li><strong>Supply chain:</strong> the network of companies and places involved in making and delivering a product</li>
</ul>

<h3>Where Is the Biggest Impact?</h3>
<p>Different products have their biggest impact at different stages. Knowing where helps us make better choices.</p>
<table>
<thead><tr><th>Product</th><th>Stage with usually the biggest impact</th><th>Smart choice</th></tr></thead>
<tbody>
<tr><td>Smartphone</td><td>Making it (mining metals, building chips)</td><td>Keep it longer and repair it</td></tr>
<tr><td>Washing machine</td><td>Using it (energy and water)</td><td>Wash full loads in cold water</td></tr>
<tr><td>Cotton t-shirt</td><td>Growing and processing cotton</td><td>Wear it often and buy secondhand</td></tr>
<tr><td>Car with a gasoline engine</td><td>Using it (burning fuel)</td><td>Walk, bike or share rides</td></tr>
</tbody>
</table>

<h3>Surprising Results</h3>
<p>Lifecycle thinking sometimes surprises people. A product that looks "green" because it is made of paper might actually need more energy and water to make than you expect. A product that looks wasteful might be fine if it is used many, many times. That is why scientists study the whole journey instead of guessing from one stage.</p>

<h3>Try It Yourself</h3>
<p>Pick a product you use every day, like a backpack or a water bottle. Draw its lifecycle as a chain of boxes. Under each box, write what resources might be used. Circle the stage you think has the biggest impact, and think of one action you can take to shrink it.</p>
`,
        HIGH_SCHOOL: `
<h2>Lifecycle Assessment and Environmental Footprints</h2>
<p>How do we know whether a reusable bag is better than a single-use one, or whether an electric car is cleaner than a gasoline car? Guessing is not enough. Scientists and engineers use a method called <em>Lifecycle Assessment</em>, or LCA, to measure the environmental impacts of a product across its entire life, from raw materials to disposal.</p>

<h3>The Four Phases of an LCA</h3>
<ol>
<li><strong>Goal and scope:</strong> decide the question, the product system and its boundaries</li>
<li><strong>Inventory analysis:</strong> list all inputs (materials, energy, water) and outputs (emissions, waste) at each stage</li>
<li><strong>Impact assessment:</strong> convert those flows into environmental effects such as climate change or water pollution</li>
<li><strong>Interpretation:</strong> check the results, identify the biggest contributors and draw careful conclusions</li>
</ol>
<p>These phases are described in international standards (the ISO 14040 series), so that studies follow a consistent approach.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Functional unit:</strong> the amount of service being compared, such as carrying groceries for a year, so options are fair to compare</li>
<li><strong>System boundary:</strong> the line that decides which processes are included in the study and which are left out</li>
<li><strong>Carbon footprint:</strong> the total greenhouse gas emissions caused by a product, expressed as carbon dioxide equivalent</li>
<li><strong>Hotspot:</strong> a stage or process that causes a large share of a product's total impact</li>
<li><strong>Cradle to cradle:</strong> a design approach where materials are made to safely return to nature or to industry in new products</li>
</ul>

<h3>Why the Functional Unit Matters</h3>
<p>Comparing "one reusable bag" with "one plastic bag" is unfair because the reusable bag is meant to be used many times. Instead, an LCA compares the bags needed to provide the same service, such as carrying a family's groceries for a year. Studies generally find that heavier reusable bags must be used many times before they beat thin single-use bags on climate impact. The lesson is not that reusable bags are bad, but that they must actually be reused often.</p>

<h3>Cradle to Grave versus Cradle to Cradle</h3>
<table>
<thead><tr><th>Approach</th><th>Main idea</th><th>Typical end</th></tr></thead>
<tbody>
<tr><td>Cradle to gate</td><td>Measures impacts up to the factory gate</td><td>Not included</td></tr>
<tr><td>Cradle to grave</td><td>Measures the full life, including disposal</td><td>Landfill, incineration or recycling</td></tr>
<tr><td>Cradle to cradle</td><td>Designs products so materials cycle safely</td><td>New products or healthy soil</td></tr>
</tbody>
</table>

<h3>Trade-offs Between Impacts</h3>
<p>A product can be better in one category and worse in another. Glass bottles can be reused but are heavier to transport. Paper comes from renewable trees but can take more water and energy to produce than some plastics. Organic cotton avoids synthetic pesticides but may need more land. LCA helps reveal these trade-offs so decisions are made with eyes open.</p>

<h3>Applying Lifecycle Thinking</h3>
<ol>
<li>Ask where a product's biggest impact is before deciding how to reduce it.</li>
<li>Use durable items many times to spread their impact over more uses.</li>
<li>Be cautious of claims based on only one stage, such as "made from recycled material."</li>
<li>Remember that the greenest product is often the one you do not need to buy.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>LCA Methodology, Impact Categories and Decision-Making</h2>
<p>Lifecycle Assessment is the most widely used quantitative method for comparing the environmental performance of products and services. Its power comes from tracing impacts across supply chains and life stages; its weaknesses come from data gaps, modeling choices and the temptation to reduce many impacts to one number. This lesson explains how an LCA is built and how its results should and should not inform decisions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Life cycle inventory:</strong> the compiled list of all material and energy inputs and environmental releases across the product system</li>
<li><strong>Foreground system:</strong> the processes directly controlled or studied, usually modeled with specific primary data</li>
<li><strong>Background system:</strong> upstream processes such as electricity or steel production, usually modeled with database averages</li>
<li><strong>Allocation:</strong> the method of dividing impacts among co-products that come from the same process</li>
<li><strong>Characterization factor:</strong> a number converting an emission into its contribution to an impact category, such as methane into carbon dioxide equivalent</li>
<li><strong>Normalization:</strong> expressing results relative to a reference, such as the average impact per person per year, to judge magnitude</li>
</ul>

<h3>Impact Categories</h3>
<p>Impact assessment translates inventory flows into effects. Midpoint categories describe environmental mechanisms; endpoint categories describe final damage to human health, ecosystems and resources.</p>
<table>
<thead><tr><th>Midpoint category</th><th>Typical unit</th><th>Main contributors</th></tr></thead>
<tbody>
<tr><td>Climate change</td><td>kg carbon dioxide equivalent</td><td>Fossil energy, methane, nitrous oxide</td></tr>
<tr><td>Acidification</td><td>Acid-forming emissions equivalent</td><td>Sulfur dioxide, nitrogen oxides, ammonia</td></tr>
<tr><td>Eutrophication</td><td>Nutrient equivalent (nitrogen or phosphorus)</td><td>Fertilizer runoff, wastewater</td></tr>
<tr><td>Water use or scarcity</td><td>Cubic meters, often weighted by local scarcity</td><td>Irrigation, cooling, processing</td></tr>
<tr><td>Toxicity (human and ecological)</td><td>Comparative toxic units</td><td>Metals, pesticides, organic chemicals</td></tr>
<tr><td>Resource depletion</td><td>Reference mineral or fossil equivalent</td><td>Metal ores, fossil fuels</td></tr>
</tbody>
</table>

<h3>Methodological Choices That Change Results</h3>
<p>Allocation is a frequent source of disagreement. If a process makes two products, impacts can be split by mass, by economic value or avoided by expanding the system to include what the co-product displaces. Recycling raises a similar question: should the benefit of recycled content be credited to the product that uses recycled input, or to the product that is recycled at end of life? Different conventions can shift results substantially, which is why transparent reporting of choices is required by the standards.</p>

<h3>Quantitative Reasoning: Break-Even Analysis</h3>
<p>Many comparisons reduce to a break-even point. If a reusable cup has a manufacturing footprint many times that of a disposable cup, it must be used at least that many times, after accounting for washing impacts, to come out ahead. Washing adds a per-use impact, so break-even depends on how it is washed, the electricity mix and the water temperature. Framing results this way turns abstract numbers into actionable guidance.</p>

<h3>Using LCA in Decisions</h3>
<ol>
<li>Define a functional unit that reflects the real service being delivered.</li>
<li>Report several impact categories, not only carbon, to reveal burden shifting.</li>
<li>Run sensitivity analysis on key assumptions such as lifetime, electricity mix and allocation.</li>
<li>Identify hotspots and focus improvements there.</li>
<li>Treat small differences between options as inconclusive given data uncertainty.</li>
<li>Seek critical review for any comparative claims made public.</li>
</ol>
`,
        GRADUATE: `
<h2>Consequential LCA, Uncertainty and Policy Applications</h2>
<p>When LCA moves from describing a product to informing policy, the questions change. A regulator asking whether to promote a biofuel or ban a packaging type needs to know what will happen in the wider system as a result, not just the average footprint of a product today. This lesson covers the distinction between attributional and consequential modeling, the treatment of uncertainty, and the uses and misuses of LCA in public policy.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Attributional LCA:</strong> an approach that assigns a share of current average global impacts to a product, answering what burdens it carries</li>
<li><strong>Consequential LCA:</strong> an approach that models how impacts change in response to a decision, including market effects</li>
<li><strong>Marginal supplier:</strong> the producer whose output actually changes when demand changes, often different from the average supplier</li>
<li><strong>Indirect land use change:</strong> land conversion elsewhere caused when demand for a crop displaces other production</li>
<li><strong>Monte Carlo simulation:</strong> repeatedly sampling uncertain input values to produce a distribution of possible results</li>
<li><strong>Product environmental footprint:</strong> a standardized, rule-based LCA approach used to make product claims comparable within a category</li>
</ul>

<h3>Attributional versus Consequential</h3>
<table>
<thead><tr><th>Feature</th><th>Attributional</th><th>Consequential</th></tr></thead>
<tbody>
<tr><td>Question answered</td><td>What share of impacts belongs to this product?</td><td>What changes if we make this decision?</td></tr>
<tr><td>Electricity data</td><td>Average grid mix</td><td>Marginal generation that responds to demand</td></tr>
<tr><td>Co-products</td><td>Often handled by allocation</td><td>Handled by system expansion and substitution</td></tr>
<tr><td>Market effects</td><td>Usually excluded</td><td>Central, including price-driven responses</td></tr>
<tr><td>Typical use</td><td>Footprint reporting, labels</td><td>Policy assessment, large-scale decisions</td></tr>
</tbody>
</table>
<p>Biofuel policy is a well-known example. Attributional studies of some crop-based fuels showed lower emissions than fossil fuels, but consequential analyses that included indirect land use change suggested benefits could be much smaller or even negative, depending on assumptions. Debates of this kind shaped how some jurisdictions designed biofuel rules.</p>

<h3>Uncertainty and Its Communication</h3>
<p>Uncertainty in LCA has several sources: parameter uncertainty in measured data, scenario uncertainty in choices such as lifetime or end-of-life route, and model uncertainty in characterization methods. Good practice includes quantifying parameter uncertainty with simulation, testing scenarios explicitly and, when comparing products, examining whether the difference between them remains consistent across the uncertainty range. Overly precise single numbers can mislead decision-makers.</p>

<h3>Policy Applications</h3>
<p>LCA underpins ecodesign rules, carbon footprint labels, green procurement criteria, environmental product declarations in construction and the evaluation of packaging regulations. Standardized category rules make results more comparable but can lock in particular modeling choices. There is also a risk that LCA is used selectively to justify predetermined positions, especially when industry funds studies about its own products.</p>

<h3>Governance and Equity</h3>
<p>Database coverage is uneven: processes in some regions are represented by proxies from elsewhere, which can misstate impacts on producer communities. Data ownership and cost also matter, since smaller firms and public bodies may lack access to commercial databases. Transparent, open data and independent critical review strengthen the legitimacy of LCA in policy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Clarify whether the question is attributional or consequential.</li>
<li>Identify marginal technologies and plausible market responses.</li>
<li>Quantify uncertainty and test key scenarios.</li>
<li>Report multiple impact categories and note burden shifting.</li>
<li>Disclose funding, data sources and review status.</li>
</ol>
`,
        PHD: `
<h2>Advances in LCA: Social LCA, Absolute Sustainability and Methodological Debates</h2>
<p>Lifecycle Assessment has evolved from comparing products relative to each other toward ambitious questions: are products and economies operating within environmental limits, what are their social consequences, and how can models represent change over time? These extensions raise deep methodological debates about boundaries, values and the meaning of sustainability itself.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Social life cycle assessment:</strong> a method assessing social and socio-economic impacts, such as labor conditions and community well-being, across a product's life cycle</li>
<li><strong>Absolute environmental sustainability assessment:</strong> comparing impacts to a share of a safe operating space defined by planetary boundaries</li>
<li><strong>Sharing principle:</strong> the rule used to allocate a portion of a global environmental limit to a person, sector or product</li>
<li><strong>Dynamic LCA:</strong> modeling that accounts for the timing of emissions and changes in technology over time</li>
<li><strong>Prospective LCA:</strong> assessing emerging technologies at a future scale, using scenarios for how background systems will evolve</li>
<li><strong>Hybrid LCA:</strong> combining process-based detail with input-output data to reduce truncation of supply chains</li>
</ul>

<h3>Social LCA</h3>
<p>Social LCA extends lifecycle thinking to stakeholders such as workers, local communities, consumers and value chain actors. It addresses topics like fair wages, working hours, health and safety, child labor and community access to resources. Methodological challenges are significant: many indicators are qualitative, site-specific data are scarce, generic country-sector risk databases can obscure local variation, and it is unclear whether social impacts scale with the physical flows used in environmental LCA. Debate continues over whether social LCA should measure performance of companies or consequences for people.</p>

<h3>Absolute Sustainability</h3>
<p>Conventional LCA says whether one option is better than another, not whether either is sustainable. Absolute approaches compare impacts against a share of planetary boundaries. The core difficulty is the sharing principle: allocating a global budget by population, economic value, need or historical responsibility produces very different verdicts, and each embeds ethical choices. Researchers also question how well global boundaries can be downscaled to products and regions.</p>
<table>
<thead><tr><th>Sharing approach</th><th>Basis</th><th>Main critique</th></tr></thead>
<tbody>
<tr><td>Equal per capita</td><td>Each person gets an equal share</td><td>Ignores differing needs and circumstances</td></tr>
<tr><td>Economic value</td><td>Share proportional to value added</td><td>Can favor wealthy sectors and regions</td></tr>
<tr><td>Grandfathering</td><td>Based on current impact shares</td><td>Rewards historical high emitters</td></tr>
<tr><td>Needs-based</td><td>Priority to essential functions like food</td><td>Defining essential is contested</td></tr>
</tbody>
</table>

<h3>Time, Scale and Emerging Technologies</h3>
<p>Static LCA aggregates emissions regardless of timing, yet the climate effect of carbon emitted now differs from that emitted decades later, especially for biogenic carbon and long-lived buildings. Prospective LCA of early-stage technologies faces the problem that laboratory processes look inefficient compared with mature incumbents; scale-up modeling and future background scenarios, such as decarbonized electricity, are used to make fairer comparisons.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether value choices in weighting and sharing should be made explicit and participatory, or kept separate from the scientific core.</li>
<li>How to integrate consequential market modeling without introducing excessive speculative assumptions.</li>
<li>Whether single-score indicators help decision-makers or hide trade-offs.</li>
<li>How to treat biodiversity loss, which is poorly captured by current characterization methods.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Site-specific and spatially explicit impact assessment, especially for water and biodiversity.</li>
<li>Coupling LCA with integrated assessment and energy system scenarios for prospective studies.</li>
<li>Robust, transparent sharing principles for absolute sustainability assessment.</li>
<li>Better social indicators grounded in participatory engagement with affected communities.</li>
<li>Open, interoperable inventory databases with regional coverage of the Global South.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwlifeq1',
      question: {
        ELEMENTARY: 'What is a product\'s lifecycle?',
        MIDDLE_SCHOOL: 'Which list shows the main stages of a product\'s life?',
        HIGH_SCHOOL: 'What is LCA?',
        UNDERGRADUATE: 'What are LCA impact categories?',
        GRADUATE: 'What is consequential LCA?',
        PHD: 'What is social life cycle assessment?',
      },
      options: {
        ELEMENTARY: ['The whole story of where it comes from and where it goes', 'Just its name', 'Only its color', 'Only how much it costs'],
        MIDDLE_SCHOOL: ['Raw materials, manufacturing, distribution, use, end of life', 'Buying it only', 'The store shelf only', 'Your home only'],
        HIGH_SCHOOL: ['Lifecycle Assessment of environmental impacts across a product\'s life', 'A large container area', 'A list of company advertisements', 'A last call alert'],
        UNDERGRADUATE: ['Types of environmental effects, such as climate change or eutrophication', 'Sections of a store', 'Product price ranges', 'Kinds of shipping boxes'],
        GRADUATE: ['Modeling how impacts change in response to a decision, including market effects', 'Following one product with average data only', 'Ignoring all consequences', 'Simple bookkeeping of sales'],
        PHD: ['Assessing social impacts such as labor conditions across the life cycle', 'Assessing only greenhouse gases', 'A method that excludes people', 'Measuring only technology costs'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A lifecycle is the whole story: where a thing comes from, how it is made and used, and where it goes at the end.',
        MIDDLE_SCHOOL: 'Products move from raw material extraction to manufacturing, distribution, use and finally end of life.',
        HIGH_SCHOOL: 'Lifecycle Assessment measures environmental impacts from raw materials through disposal.',
        UNDERGRADUATE: 'Impact categories include climate change, acidification, eutrophication, water use, toxicity and resource depletion.',
        GRADUATE: 'Consequential LCA uses marginal suppliers and market responses to model what changes because of a decision.',
        PHD: 'Social LCA looks at workers, communities and other stakeholders, covering topics like wages, safety and child labor.',
      },
    },
    {
      id: 'zwlifeq2',
      question: {
        ELEMENTARY: 'What does a pencil start as?',
        MIDDLE_SCHOOL: 'For a smartphone, which stage usually has the biggest impact?',
        HIGH_SCHOOL: 'Why do LCAs compare products using a functional unit?',
        UNDERGRADUATE: 'What is allocation in LCA?',
        GRADUATE: 'What does a Monte Carlo simulation do in LCA?',
        PHD: 'What is a sharing principle in absolute sustainability assessment?',
      },
      options: {
        ELEMENTARY: ['A plastic bag', 'A tree and graphite from the ground', 'A cloud', 'A glass bottle'],
        MIDDLE_SCHOOL: ['Throwing it away', 'Making it, including mining metals and building chips', 'Carrying it in your pocket', 'Charging it once'],
        HIGH_SCHOOL: ['So products are always the same size', 'So options delivering the same service are compared fairly', 'To make studies shorter', 'Because the law bans other comparisons'],
        UNDERGRADUATE: ['Dividing impacts among co-products from the same process', 'Choosing which store sells a product', 'Assigning workers to factories', 'Setting product prices'],
        GRADUATE: ['Repeatedly samples uncertain inputs to give a distribution of results', 'Predicts the weather', 'Removes all uncertainty', 'Picks the cheapest option'],
        PHD: ['A rule for allocating a share of a global environmental limit', 'A rule for sharing data between companies', 'A way to share products between neighbors', 'A method to split profits'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Pencils start as wood from trees and graphite dug from the ground.',
        MIDDLE_SCHOOL: 'Most of a smartphone\'s impact comes from making it, so keeping it longer helps a lot.',
        HIGH_SCHOOL: 'The functional unit, like carrying groceries for a year, makes sure the comparison is about the same service.',
        UNDERGRADUATE: 'When one process makes several products, allocation splits impacts among them by mass, value or system expansion.',
        GRADUATE: 'Monte Carlo simulation samples uncertain inputs many times to show the range of possible results.',
        PHD: 'Sharing principles, such as equal per capita or needs-based, decide how much of a planetary budget a product may use.',
      },
    },
    {
      id: 'zwlifeq3',
      question: {
        ELEMENTARY: 'Which is the happiest ending for an old toy that still works?',
        MIDDLE_SCHOOL: 'What is embodied energy?',
        HIGH_SCHOOL: 'What is a hotspot in an LCA?',
        UNDERGRADUATE: 'What does a break-even analysis show for a reusable cup?',
        GRADUATE: 'Why did consequential analyses change debates about some crop-based biofuels?',
        PHD: 'Why does prospective LCA matter for emerging technologies?',
      },
      options: {
        ELEMENTARY: ['Throwing it in the trash', 'Leaving it outside in the rain', 'Giving it to a friend to play with', 'Breaking it apart'],
        MIDDLE_SCHOOL: ['Energy stored in batteries only', 'Energy you use while sleeping', 'All the energy used to make and deliver a product', 'Energy from the sun only'],
        HIGH_SCHOOL: ['A place where products are sold', 'A very warm factory', 'A stage that causes a large share of the total impact', 'A popular product'],
        UNDERGRADUATE: ['Its price compared with a disposable cup', 'How fast it breaks', 'How many uses are needed before it beats a disposable cup', 'Its color options'],
        GRADUATE: ['They ignored land completely', 'They showed biofuels have no emissions', 'Including indirect land use change could make benefits much smaller', 'They proved biofuels are always better'],
        PHD: ['Lab-scale processes look inefficient, so future scale and background systems must be modeled', 'Emerging technologies never need assessment', 'Only mature technologies matter', 'It removes all uncertainty'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Passing a working toy to a friend gives it a whole new chapter instead of ending its story.',
        MIDDLE_SCHOOL: 'Embodied energy counts all the energy used before you even start using the product.',
        HIGH_SCHOOL: 'Hotspots show where to focus improvements because they cause a big share of the impact.',
        UNDERGRADUATE: 'Because a reusable cup has a larger manufacturing footprint, it needs a certain number of uses, including washing, to come out ahead.',
        GRADUATE: 'Market-driven land conversion elsewhere can add emissions that attributional studies left out.',
        PHD: 'Prospective LCA models technologies at future scale and with evolving background systems for fairer comparison.',
      },
    },
    {
      id: 'zwlifeq4',
      question: {
        ELEMENTARY: 'What is transport?',
        MIDDLE_SCHOOL: 'What does cradle to cradle mean?',
        HIGH_SCHOOL: 'What do studies generally find about heavier reusable shopping bags?',
        UNDERGRADUATE: 'Why should an LCA report several impact categories, not only carbon?',
        GRADUATE: 'Which electricity data does a consequential LCA typically use?',
        PHD: 'What is hybrid LCA?',
      },
      options: {
        ELEMENTARY: ['A kind of food', 'A type of tree', 'A game you play', 'Moving things from place to place by truck, train or ship'],
        MIDDLE_SCHOOL: ['Products are made to be thrown away', 'Babies use products', 'Only furniture is studied', 'Materials become the start of new products instead of waste'],
        HIGH_SCHOOL: ['They should never be used', 'They are always worse than plastic bags', 'They are best used only once', 'They must be reused many times to beat thin single-use bags on climate'],
        UNDERGRADUATE: ['Carbon is not measurable', 'Because the standard bans carbon', 'Only to make reports longer', 'To reveal burden shifting from one impact to another'],
        GRADUATE: ['Only solar power data', 'The cheapest electricity ever recorded', 'No electricity data', 'Marginal generation that responds to demand'],
        PHD: ['An LCA of hybrid cars only', 'An LCA done by two teams', 'An LCA ignoring supply chains', 'Combining process detail with input-output data to reduce truncation'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Transport moves products from factories to stores and homes, and it uses energy.',
        MIDDLE_SCHOOL: 'Cradle to cradle designs products so their materials safely become new products or healthy soil.',
        HIGH_SCHOOL: 'Heavier bags have a bigger making footprint, so they must be reused often to come out ahead.',
        UNDERGRADUATE: 'An option can lower carbon but raise water use or toxicity, so multiple categories show trade-offs.',
        GRADUATE: 'Consequential LCA uses the generation that actually changes when demand changes, not the average mix.',
        PHD: 'Hybrid LCA fills gaps in process-based supply chains with economy-wide input-output data.',
      },
    },
    {
      id: 'zwlifeq5',
      question: {
        ELEMENTARY: 'What is disposal?',
        MIDDLE_SCHOOL: 'For a washing machine, which stage usually has the biggest impact?',
        HIGH_SCHOOL: 'What is a system boundary in an LCA?',
        UNDERGRADUATE: 'What is a characterization factor?',
        GRADUATE: 'What is a concern about how LCA can be used in policy?',
        PHD: 'What is a main challenge of social LCA?',
      },
      options: {
        ELEMENTARY: ['What happens to a thing at the end, like trash or recycling', 'Buying something new', 'Making a thing in a factory', 'Growing a tree'],
        MIDDLE_SCHOOL: ['Using it, because of energy and water', 'Painting the box', 'Printing the manual', 'Carrying it into the house'],
        HIGH_SCHOOL: ['The line deciding which processes are included in the study', 'A fence around the factory', 'The border of a country', 'The edge of a product label'],
        UNDERGRADUATE: ['A number converting an emission into its contribution to an impact category', 'A label on a product', 'A shipping cost', 'A product\'s brand name'],
        GRADUATE: ['It may be used selectively to justify predetermined positions', 'It is too simple to matter', 'It cannot measure anything', 'It is banned from policy'],
        PHD: ['Indicators are often qualitative and site-specific data are scarce', 'There are no people to study', 'It only measures carbon', 'It has no indicators at all'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Disposal is the ending of a thing\'s story, such as going to the trash, recycling or compost.',
        MIDDLE_SCHOOL: 'Washing machines use energy and water every time they run, so the use stage often matters most.',
        HIGH_SCHOOL: 'The system boundary defines which stages and processes are counted in the assessment.',
        UNDERGRADUATE: 'Characterization factors, like converting methane into carbon dioxide equivalent, link flows to impacts.',
        GRADUATE: 'Studies funded by interested parties or with selective choices can be used to support set positions, so transparency matters.',
        PHD: 'Social LCA struggles with qualitative indicators, scarce local data and generic risk databases.',
      },
    },
  ],
}

export default expansion
