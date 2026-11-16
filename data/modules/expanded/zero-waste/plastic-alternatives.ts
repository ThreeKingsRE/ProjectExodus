import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'plastic-alternatives',
  lessons: [
    {
      id: 'zw-plastic-1',
      title: 'Materials Beyond Plastic',
      content: {
        ELEMENTARY: `
<h2>Amazing Materials That Can Replace Plastic</h2>
<p>Long before plastic was invented, people carried things in baskets, drank from cups made of clay and stored food in jars. Today we can use many of these old ideas, and some brand-new ones, to use less plastic and help keep our oceans clean.</p>

<h3>Materials From Nature</h3>
<p>Some materials come from plants and trees. They can be grown again, and many of them can go back to the earth when we are done with them.</p>
<ul>
<li><strong>Bamboo:</strong> a tall, fast-growing grass that can be made into toothbrushes, bowls and spoons</li>
<li><strong>Cotton:</strong> soft fibers from a plant, used to make cloth bags and clothes</li>
<li><strong>Wood:</strong> material from trees, used for toys, brushes and kitchen tools</li>
<li><strong>Paper:</strong> thin sheets made from wood fibers, which can often be recycled</li>
</ul>

<h3>Materials That Last a Long Time</h3>
<p>Other materials come from rocks and minerals. They are strong, and some can be used for many years.</p>
<ul>
<li><strong>Glass:</strong> a clear, hard material made from melted sand, great for jars and bottles</li>
<li><strong>Steel:</strong> a strong metal used for water bottles and lunch boxes that last for years</li>
</ul>

<h3>Which One Is Best?</h3>
<p>Every material is good at some jobs and not so good at others. Glass is great for keeping food fresh, but it can break if you drop it. Steel is strong and does not break, but it is heavier. A cloth bag is soft and easy to carry, and it is best when you use it lots and lots of times.</p>
<p>The secret is this: the best choice is usually something you will use again and again. A steel bottle you keep for years is much better than any bottle you use only once, no matter what it is made of.</p>

<h3>Try These Swaps</h3>
<ol>
<li>Use a bamboo or wooden toothbrush handle.</li>
<li>Keep leftovers in a glass jar with a lid.</li>
<li>Take a steel water bottle to school.</li>
<li>Carry snacks in a cloth bag or wrap.</li>
</ol>

<h3>Think About It</h3>
<p>Look at the things in your room. What are they made of? Could any plastic thing be swapped for something made of wood, glass, metal or cloth the next time it needs replacing? Remember, it is best to keep using what you already have until it wears out!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Choosing Better Materials</h2>
<p>When people decide to use less plastic, the next question is: what should we use instead? There is no single perfect material. Each one has its own strengths, weaknesses and effects on the planet. Learning to compare materials helps you make smart choices instead of just swapping one problem for another.</p>

<h3>What Makes a Material Good for the Job?</h3>
<p>Scientists and designers look at a material's <em>properties</em>, which are the things it can and cannot do. For food packaging, important properties include keeping out air and water, being safe to touch food, being strong enough not to break, and being light enough to carry and ship easily.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Material properties:</strong> features of a material such as strength, weight, flexibility and resistance to water</li>
<li><strong>Renewable:</strong> a resource that can grow back, like plants and trees, if it is managed well</li>
<li><strong>Durable:</strong> able to last a long time and be used many times without wearing out</li>
<li><strong>Compostable:</strong> able to break down into compost under the right conditions, often in an industrial facility</li>
<li><strong>Bioplastic:</strong> a plastic made partly or fully from plants, or one designed to biodegrade</li>
<li><strong>Trade-off:</strong> when choosing one benefit means accepting a downside somewhere else</li>
</ul>

<h3>Comparing Common Alternatives</h3>
<table>
<thead><tr><th>Material</th><th>Good at</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Glass</td><td>Safe for food, reusable, recyclable many times</td><td>Heavy to ship, can break</td></tr>
<tr><td>Stainless steel</td><td>Very durable, reusable for years</td><td>Takes a lot of energy to make</td></tr>
<tr><td>Aluminum</td><td>Light, widely recycled</td><td>Making new aluminum uses lots of energy</td></tr>
<tr><td>Paper and cardboard</td><td>Renewable, recyclable</td><td>Weak when wet, uses water and energy to make</td></tr>
<tr><td>Beeswax wraps</td><td>Reusable for covering food</td><td>Not suitable for raw meat or hot food</td></tr>
<tr><td>Bioplastics</td><td>Can reduce fossil fuel use</td><td>Many only break down in special facilities</td></tr>
</tbody>
</table>

<h3>The Bioplastic Puzzle</h3>
<p>Bioplastics sound perfect, but they can be confusing. Some are made from plants but behave just like normal plastic and do not break down. Others are labeled compostable, but they often need the high heat of an industrial composting site. If they are tossed in the ocean or a backyard, they may last a long time. So a plant-based label does not automatically mean it is better.</p>

<h3>The Most Important Rule</h3>
<p>The biggest difference usually comes from <em>reuse</em>, not from the material. A glass jar used a hundred times is far better than a compostable cup used once. When choosing an alternative, ask: Will I use it many times? Can it be recycled or composted where I live? Do I really need it at all?</p>
`,
        HIGH_SCHOOL: `
<h2>Plastic Substitutes: Properties, Uses and Trade-offs</h2>
<p>Plastics are popular because they combine low weight, low cost, flexibility and moisture resistance in a way few other materials can match. Replacing them is therefore not simply a matter of picking a natural material. This lesson compares the major alternatives, explains where each works well, and shows why careful thinking about trade-offs leads to better outcomes than simple rules such as "natural is always better."</p>

<h3>Families of Alternatives</h3>
<ul>
<li><strong>Fiber-based materials:</strong> paper, cardboard and molded pulp made from wood or agricultural residues</li>
<li><strong>Glass:</strong> an inert, impermeable material that can be recycled repeatedly without losing quality</li>
<li><strong>Metals:</strong> aluminum and steel, durable and highly recyclable but energy intensive to produce from ore</li>
<li><strong>Bio-based plastics:</strong> polymers made from renewable feedstocks such as corn or sugarcane, which may or may not biodegrade</li>
<li><strong>Biodegradable plastics:</strong> polymers that microorganisms can break down, with the speed depending strongly on conditions</li>
<li><strong>Reusable systems:</strong> containers designed for many cycles, where the system matters more than the material</li>
</ul>

<h3>Where Each Works Best</h3>
<table>
<thead><tr><th>Application</th><th>Common alternative</th><th>Key trade-off</th></tr></thead>
<tbody>
<tr><td>Beverage containers</td><td>Glass, aluminum, refillable bottles</td><td>Glass weight raises transport impacts unless reused locally</td></tr>
<tr><td>Takeaway food</td><td>Molded fiber, reusable containers</td><td>Fiber often needs a coating to resist grease and water</td></tr>
<tr><td>Shopping bags</td><td>Paper, cotton, durable polymer bags</td><td>Reusables must be used many times to pay back their footprint</td></tr>
<tr><td>Food wrap</td><td>Beeswax wraps, lidded containers</td><td>Limited use with raw meat or hot food</td></tr>
<tr><td>Cutlery</td><td>Wood, bamboo, metal</td><td>Single-use wood still creates waste</td></tr>
</tbody>
</table>

<h3>Hidden Problems to Watch For</h3>
<p>Some paper cups and food containers are lined with a thin plastic layer or treated with water-repellent chemicals, which makes them harder to recycle or compost. Compostable plastics can contaminate recycling streams if put in the wrong bin. Heavier materials can increase fuel use in transport. And growing feedstocks for bio-based materials uses land, water and fertilizer.</p>

<h3>Real-World Applications</h3>
<p>Many cities and companies are testing reusable cup and container schemes, where customers borrow a container and return it for washing. Refill stations for cleaning products, toiletries and dry foods let people bring their own containers. Molded pulp has replaced plastic foam in some electronics packaging. Each of these works because it is matched to a specific use and supported by a system.</p>

<h3>Making Better Choices</h3>
<ol>
<li><strong>Start with need:</strong> can the item be avoided altogether?</li>
<li><strong>Prefer reuse:</strong> durable items used many times usually beat any single-use option.</li>
<li><strong>Match the material to the job:</strong> consider moisture, heat, weight and food safety.</li>
<li><strong>Check end of life:</strong> make sure local systems can recycle or compost the material.</li>
<li><strong>Beware of labels:</strong> "bio-based" and "biodegradable" do not mean the same thing.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Alternative Material Systems and Their Life Cycle Implications</h2>
<p>Substituting plastics is an engineering and systems problem. A material replacement changes product mass, manufacturing energy, supply chains, transport, use-phase performance and end-of-life options. Studies comparing packaging materials frequently find that a naive substitution can raise impacts in some categories even while reducing others. This lesson develops the tools for analyzing alternatives systematically.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Functional analysis:</strong> identifying exactly what service a material provides, such as barrier protection or structural support, before choosing a substitute</li>
<li><strong>Barrier properties:</strong> the ability of a material to block oxygen, moisture, light or aroma, crucial for food preservation</li>
<li><strong>Mass ratio:</strong> how much heavier or lighter a substitute is for the same function, which drives transport and production impacts</li>
<li><strong>Burden shifting:</strong> reducing one environmental impact while increasing another or moving it elsewhere in the lifecycle</li>
<li><strong>Drop-in bioplastic:</strong> a bio-based polymer chemically identical to a fossil plastic, such as bio-based polyethylene, which does not biodegrade</li>
<li><strong>Closed-loop recycling:</strong> recycling material back into the same product with little loss of quality</li>
</ul>

<h3>Performance Characteristics</h3>
<table>
<thead><tr><th>Material</th><th>Barrier</th><th>Relative mass</th><th>Recycling quality</th></tr></thead>
<tbody>
<tr><td>Conventional plastic film</td><td>Good, especially in multilayers</td><td>Very low</td><td>Poor for multilayer films</td></tr>
<tr><td>Glass</td><td>Excellent</td><td>Very high</td><td>High, can be closed loop</td></tr>
<tr><td>Aluminum</td><td>Excellent</td><td>Low</td><td>High, recycling saves most of the primary energy</td></tr>
<tr><td>Paper and board</td><td>Poor without coatings</td><td>Moderate</td><td>Good, but fibers shorten each cycle</td></tr>
<tr><td>PLA (polylactic acid)</td><td>Moderate</td><td>Low</td><td>Limited infrastructure, often industrially composted</td></tr>
</tbody>
</table>

<h3>Quantitative Reasoning</h3>
<p>Because impacts scale with mass, a substitute that is several times heavier needs a correspondingly lower impact per kilogram to break even. Glass, for instance, can carry higher climate impact per single-use container than plastic, but a refillable glass bottle reused many times within a short distribution radius can outperform both. Aluminum production from ore is very energy intensive, but recycled aluminum requires only a small fraction of that energy, so recycling rates strongly influence its footprint. These relationships show why the number of uses, recycled content and distance often matter more than the material itself.</p>

<h3>Food Waste Interactions</h3>
<p>Packaging often has a much smaller footprint than the food it protects. If a substitute has weaker barrier properties and shortens shelf life, extra food waste can outweigh any packaging savings. Functional analysis should therefore include the protected product.</p>

<h3>Applied Method: Alternatives Assessment</h3>
<ol>
<li>Define the function, including barrier, strength, safety and shelf-life requirements.</li>
<li>Screen candidate materials and reuse systems for technical feasibility.</li>
<li>Compare lifecycle impacts per functional unit across several impact categories.</li>
<li>Assess end-of-life compatibility with existing local infrastructure.</li>
<li>Check for hazardous additives or coatings that could create new problems.</li>
<li>Identify burden shifting and decide transparently which trade-offs are acceptable.</li>
</ol>
`,
        GRADUATE: `
<h2>Plastic Substitution Pathways, Systems Effects and Transition Strategy</h2>
<p>Policies restricting single-use plastics have spread widely, triggering large-scale material substitution. Graduate analysis moves beyond comparing individual materials to asking how substitution reshapes supply chains, waste infrastructure, land use and markets, and how transitions can be steered toward genuine reduction rather than material switching.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Substitution pathway:</strong> the sequence of material and system changes by which a product moves away from conventional plastic</li>
<li><strong>Regrettable substitution:</strong> replacing one material or chemical with another that turns out to be equally or more harmful</li>
<li><strong>Rebound effect:</strong> a response in which cheaper or seemingly greener alternatives lead to more consumption, eroding expected benefits</li>
<li><strong>Indirect land use change:</strong> land conversion elsewhere caused by demand for crop-based feedstocks</li>
<li><strong>Reuse system:</strong> the infrastructure of containers, collection, washing and logistics that allows packaging to circulate many times</li>
<li><strong>Infrastructure compatibility:</strong> whether a new material can be handled by existing collection, sorting and treatment systems</li>
</ul>

<h3>Systems Effects of Substitution</h3>
<p>Material switches propagate through systems. Large-scale shifts to fiber packaging increase demand for pulp and may intensify pressure on forests unless sourcing is well managed. Compostable plastics need industrial composting capacity and clear sorting, otherwise they contaminate both recycling and organics streams. Heavier materials can raise transport emissions. Paper with plastic or chemical coatings can be hard to recycle, replicating the problem it was meant to solve.</p>

<table>
<thead><tr><th>Pathway</th><th>Potential benefit</th><th>Systems risk</th></tr></thead>
<tbody>
<tr><td>Fossil plastic to fiber</td><td>Renewable, lower persistence</td><td>Forest pressure, coatings, higher mass</td></tr>
<tr><td>Fossil plastic to bio-based plastic</td><td>Lower fossil carbon</td><td>Land use, same persistence for drop-ins</td></tr>
<tr><td>Fossil plastic to compostable plastic</td><td>Fits organics recovery</td><td>Needs facilities and correct sorting</td></tr>
<tr><td>Single-use to reuse</td><td>Large reductions when return rates are high</td><td>Requires logistics, washing and user participation</td></tr>
<tr><td>Elimination</td><td>Avoids impacts entirely</td><td>Only possible where function is unnecessary</td></tr>
</tbody>
</table>

<h3>Transition Strategies</h3>
<p>Effective strategies follow a hierarchy: eliminate unnecessary packaging, then shift to reuse, and only then substitute materials for remaining single-use needs. Policy tools include reuse targets, standardized container pools shared across brands, deposit systems that ensure high return rates, procurement rules for public institutions, and labeling standards that prevent misleading environmental claims. Pairing bans with reuse infrastructure helps avoid simple one-for-one switches to other disposables.</p>

<h3>Economics and Governance</h3>
<p>Single-use packaging externalizes disposal and pollution costs, which makes it artificially cheap compared with reuse. Extended producer responsibility with fees that reflect real end-of-life costs, along with investment in shared reuse infrastructure, can rebalance these economics. Coordination problems are significant: no single brand can build a city-wide return network alone, so public or collective governance often plays a role.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Does the pathway reduce total material throughput or only change material type?</li>
<li>Is the needed end-of-life infrastructure in place where the product is sold?</li>
<li>Are land, forest and chemical risks of substitutes assessed?</li>
<li>Are rebound and regrettable substitution risks monitored?</li>
<li>Who bears transition costs, including small businesses and low-income consumers?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Material Innovation and Post-Plastic Futures</h2>
<p>Research on plastic alternatives spans polymer chemistry, materials science, lifecycle methodology and social science. The frontier is not simply discovering a better material, but understanding how material innovation interacts with infrastructure, markets and cultural practice, and whether a substantially lower-plastic economy is achievable. This lesson surveys research methods, contested questions and directions for doctoral work.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Design for degradation:</strong> engineering polymers to break down under defined environmental conditions while remaining stable during use</li>
<li><strong>Chemically recyclable polymers:</strong> materials designed to depolymerize cleanly back to monomers for repeated recycling</li>
<li><strong>Safe and sustainable by design:</strong> an approach integrating hazard, lifecycle and circularity criteria early in material development</li>
<li><strong>Prospective LCA:</strong> lifecycle assessment of emerging technologies modeled at future industrial scale rather than laboratory scale</li>
<li><strong>Post-plastic futures:</strong> visions of economies and cultures substantially less dependent on petrochemical materials</li>
<li><strong>Degrowth perspective:</strong> a view that reducing total material throughput, not only substituting materials, is necessary for sustainability</li>
</ul>

<h3>Material Innovation</h3>
<p>Researchers are developing polymers from biomass residues, microbial fermentation, and captured carbon, along with fiber composites and biologically derived coatings that might replace plastic barrier layers. A central challenge is the tension between durability during use and degradability afterward: materials stable enough for a long shelf life tend to persist in the environment, while readily degradable materials may fail in service. Biodegradation in real environments, especially marine ones, is highly variable and remains poorly predicted by standard laboratory tests.</p>

<h3>Methodological Debates</h3>
<table>
<thead><tr><th>Debate</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Scaling lab results for emerging materials</td><td>Early-stage LCAs can over- or underestimate impacts at industrial scale</td></tr>
<tr><td>Accounting for biogenic carbon</td><td>Choices about timing and storage strongly affect bio-based results</td></tr>
<tr><td>Capturing persistence and leakage</td><td>Standard impact categories do not fully represent litter harm</td></tr>
<tr><td>Testing biodegradation</td><td>Laboratory standards may not reflect real environmental conditions</td></tr>
</tbody>
</table>

<h3>Systemic Plastic Reduction</h3>
<p>Systems research suggests that material substitution alone cannot deliver large reductions in plastic pollution while consumption grows. Scenario modeling typically combines reduction, reuse, substitution and improved waste management, and finds that no single lever is sufficient. Open questions concern the realistic potential of reuse at scale, the land and resource limits of bio-based feedstocks, and how petrochemical industry strategies respond to declining packaging demand.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether bio-based plastics are a meaningful step or a distraction from reduction.</li>
<li>Whether biodegradable materials could encourage littering by signaling that disposal is harmless.</li>
<li>How to balance plastic's role in reducing food waste and enabling medical hygiene with reduction goals.</li>
<li>How post-plastic futures can be designed to be fair across countries at different stages of development.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized, environment-specific biodegradation testing linked to field validation.</li>
<li>Prospective LCA methods that handle learning curves and future energy systems.</li>
<li>Barrier materials that are both high performing and compatible with recycling or composting.</li>
<li>Socio-technical studies of reuse adoption, return behavior and infrastructure governance.</li>
<li>Integrated scenarios linking material innovation to land use, energy and equity outcomes.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwplastq1',
      question: {
        ELEMENTARY: 'What can replace plastic shopping bags?',
        MIDDLE_SCHOOL: 'What is a plastic alternative for wrapping food?',
        HIGH_SCHOOL: 'Why is it important to consider trade-offs between alternative materials?',
        UNDERGRADUATE: 'What is functional analysis in materials substitution?',
        GRADUATE: 'What is a rebound effect in the context of plastic alternatives?',
        PHD: 'What are post-plastic futures?',
      },
      options: {
        ELEMENTARY: ['A cloth bag you use again and again', 'More plastic bags', 'Nothing at all', 'Throwing groceries in the trash'],
        MIDDLE_SCHOOL: ['Beeswax wraps', 'More plastic wrap', 'A new plastic bag every time', 'Nothing works'],
        HIGH_SCHOOL: ['Each alternative has different impacts and limitations', 'All alternatives are perfect', 'Natural materials are always better', 'Material choice does not matter'],
        UNDERGRADUATE: ['Identifying exactly what service a material provides before choosing a substitute', 'Checking whether a product turns on', 'Testing materials at random', 'Measuring only the price'],
        GRADUATE: ['When cheaper or greener-seeming alternatives lead to more consumption', 'When alternatives have only positive effects', 'When plastic bounces back from a wall', 'When recycling rates fall to zero'],
        PHD: ['Visions of economies and cultures much less dependent on petrochemical materials', 'A future with more plastic than today', 'A world where nothing changes', 'A new type of plastic bottle'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A cloth bag can be used many, many times instead of throwing away plastic bags.',
        MIDDLE_SCHOOL: 'Beeswax wraps are reusable and can cover many foods instead of plastic wrap.',
        HIGH_SCHOOL: 'Weight, coatings, end-of-life options and production impacts differ, so each choice involves trade-offs.',
        UNDERGRADUATE: 'Knowing whether a material provides barrier, strength or safety guides an appropriate substitute.',
        GRADUATE: 'Rebound effects can erode benefits when alternatives encourage more use.',
        PHD: 'Post-plastic futures imagine economies designed with far less dependence on petrochemical materials.',
      },
    },
    {
      id: 'zwplastq2',
      question: {
        ELEMENTARY: 'What is glass made from?',
        MIDDLE_SCHOOL: 'What does "compostable" usually mean for packaging?',
        HIGH_SCHOOL: 'What is a hidden problem with some paper cups?',
        UNDERGRADUATE: 'What is a drop-in bioplastic?',
        GRADUATE: 'What is regrettable substitution?',
        PHD: 'What is prospective lifecycle assessment?',
      },
      options: {
        ELEMENTARY: ['Leaves', 'Melted sand', 'Milk', 'Feathers'],
        MIDDLE_SCHOOL: ['It disappears instantly anywhere', 'It can break down into compost under the right conditions, often in an industrial facility', 'It is made of metal', 'It can never be thrown away'],
        HIGH_SCHOOL: ['They are made of glass', 'They have a thin plastic lining that makes recycling harder', 'They are too heavy to carry', 'They cannot hold liquids'],
        UNDERGRADUATE: ['A plastic that dissolves in water', 'A bio-based polymer chemically identical to a fossil plastic that does not biodegrade', 'A plastic made of glass fibers', 'A plastic that is always composted'],
        GRADUATE: ['Replacing something with an option that turns out equally or more harmful', 'Choosing the cheapest option', 'Removing packaging entirely', 'Using more recycled content'],
        PHD: ['Assessing only past products', 'Assessing emerging technologies modeled at future industrial scale', 'Assessing only the price of materials', 'Skipping assessment until a product is sold'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Glass is made by melting sand at very high heat, then shaping it.',
        MIDDLE_SCHOOL: 'Many compostable items need the high heat of an industrial composting site to break down.',
        HIGH_SCHOOL: 'A plastic layer or water-repellent treatment can make paper cups hard to recycle or compost.',
        UNDERGRADUATE: 'Drop-ins like bio-based polyethylene come from plants but behave like conventional plastic, including persistence.',
        GRADUATE: 'Regrettable substitution replaces one problem with another, such as hard-to-recycle coated paper.',
        PHD: 'Prospective LCA models emerging materials as they might perform at industrial scale in the future.',
      },
    },
    {
      id: 'zwplastq3',
      question: {
        ELEMENTARY: 'What is the best kind of bottle to use?',
        MIDDLE_SCHOOL: 'Which material is very durable and reusable for years?',
        HIGH_SCHOOL: 'Why can glass beverage bottles have higher transport impacts?',
        UNDERGRADUATE: 'Why does recycling strongly affect aluminum\'s footprint?',
        GRADUATE: 'In the substitution hierarchy, what should come first?',
        PHD: 'What is the central tension in designing degradable materials?',
      },
      options: {
        ELEMENTARY: ['A new plastic bottle every day', 'A bottle you throw away after one sip', 'A bottle you keep using for years', 'No bottle, only puddles'],
        MIDDLE_SCHOOL: ['Paper towel', 'Plastic wrap', 'Stainless steel', 'Tissue paper'],
        HIGH_SCHOOL: ['Glass is lighter than plastic', 'Glass melts in trucks', 'Glass is heavy, so it uses more fuel to ship', 'Glass cannot be put in trucks'],
        UNDERGRADUATE: ['Recycling makes aluminum heavier', 'Aluminum cannot be recycled', 'Recycled aluminum needs only a small fraction of the energy of making it from ore', 'Recycling adds plastic to aluminum'],
        GRADUATE: ['Switching every item to paper', 'Using compostable plastics everywhere', 'Eliminating unnecessary packaging', 'Increasing production'],
        PHD: ['Degradable materials are always too expensive', 'Durability during use tends to conflict with breakdown afterward', 'Degradation can be predicted perfectly in labs', 'All polymers degrade at the same rate'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A bottle you keep and refill for years saves many throwaway bottles.',
        MIDDLE_SCHOOL: 'Stainless steel is strong and can be used for many years.',
        HIGH_SCHOOL: 'Heavier containers need more fuel to transport unless they are reused locally.',
        UNDERGRADUATE: 'Because recycled aluminum saves most of the production energy, recycling rates shape its footprint.',
        GRADUATE: 'The hierarchy is eliminate, then reuse, then substitute materials for remaining needs.',
        PHD: 'Materials stable enough for use tend to persist, while readily degradable ones may fail during use.',
      },
    },
    {
      id: 'zwplastq4',
      question: {
        ELEMENTARY: 'Which material comes from a fast-growing grass?',
        MIDDLE_SCHOOL: 'Why are bioplastics sometimes confusing?',
        HIGH_SCHOOL: 'What can happen if compostable plastics go in the recycling bin?',
        UNDERGRADUATE: 'Why might a substitute with weaker barrier properties increase total impact?',
        GRADUATE: 'Why do reuse systems often need public or collective governance?',
        PHD: 'Why is biogenic carbon accounting debated in bio-based material LCAs?',
      },
      options: {
        ELEMENTARY: ['Glass', 'Steel', 'Plastic', 'Bamboo'],
        MIDDLE_SCHOOL: ['They are always made of metal', 'They always break down in the ocean', 'They cannot hold food', 'Some do not break down and others need special facilities'],
        HIGH_SCHOOL: ['They improve the recycling', 'They turn into glass', 'They make the bin lighter', 'They can contaminate the recycling stream'],
        UNDERGRADUATE: ['It makes the package cheaper', 'It always lowers emissions', 'It reduces transport distance', 'Shorter shelf life can cause food waste that outweighs packaging savings'],
        GRADUATE: ['Reuse systems are illegal for brands', 'Reuse needs no infrastructure', 'Governments forbid return schemes', 'No single brand can build a city-wide return network alone'],
        PHD: ['Biogenic carbon does not exist', 'All methods treat it identically', 'It only matters for metals', 'Choices about timing and storage strongly affect the results'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Bamboo is a tall grass that grows very quickly and can be made into many things.',
        MIDDLE_SCHOOL: 'Plant-based does not always mean it breaks down, and compostable ones often need industrial composting.',
        HIGH_SCHOOL: 'Compostable plastics look like normal plastic but behave differently, which can spoil recycled material.',
        UNDERGRADUATE: 'Food usually has a larger footprint than its packaging, so extra spoilage can outweigh packaging gains.',
        GRADUATE: 'Shared return and washing networks are a coordination problem that often needs collective solutions.',
        PHD: 'How and when stored plant carbon is counted can swing the climate results for bio-based materials.',
      },
    },
    {
      id: 'zwplastq5',
      question: {
        ELEMENTARY: 'What should you do with plastic things you already have?',
        MIDDLE_SCHOOL: 'What usually makes the biggest difference when choosing an alternative?',
        HIGH_SCHOOL: 'What is the difference between bio-based and biodegradable?',
        UNDERGRADUATE: 'What is burden shifting?',
        GRADUATE: 'What is a systems risk of a large-scale shift to fiber packaging?',
        PHD: 'What does a degrowth perspective add to debates on plastic alternatives?',
      },
      options: {
        ELEMENTARY: ['Keep using them until they wear out', 'Throw them all away today', 'Bury them in the garden', 'Drop them in a river'],
        MIDDLE_SCHOOL: ['Using it many times', 'Its color', 'Its brand name', 'How shiny it is'],
        HIGH_SCHOOL: ['Bio-based describes where it comes from; biodegradable describes how it breaks down', 'They mean exactly the same thing', 'Bio-based plastics always biodegrade', 'Biodegradable plastics are made of metal'],
        UNDERGRADUATE: ['Reducing one impact while increasing another or moving it elsewhere', 'Carrying heavy packages', 'Recycling the same material forever', 'Removing all impacts at once'],
        GRADUATE: ['Increased pressure on forests unless sourcing is well managed', 'Fiber packaging cannot be made', 'Fiber always removes all coatings', 'Paper is lighter than every plastic'],
        PHD: ['That reducing total material throughput may be necessary, not only substitution', 'That plastic use should grow', 'That materials science should stop', 'That recycling solves everything'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Using what you already have until it wears out avoids making new waste.',
        MIDDLE_SCHOOL: 'Reuse matters more than material: a jar used a hundred times beats any single-use cup.',
        HIGH_SCHOOL: 'A plant-based plastic may not biodegrade, and a biodegradable plastic may come from fossil fuels.',
        UNDERGRADUATE: 'Burden shifting moves impact between categories or lifecycle stages rather than reducing it overall.',
        GRADUATE: 'Rising pulp demand can intensify pressure on forests if sourcing is not carefully managed.',
        PHD: 'A degrowth view argues that substitution alone cannot keep pace with growing consumption.',
      },
    },
  ],
}

export default expansion
