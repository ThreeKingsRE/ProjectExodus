import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: the different ways to compost and how to choose
// one. Chapter 1 covers why and how composting works.
const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'composting-fundamentals~2',
  title: 'Composting Methods: Worms, Bokashi and Community Sites',
  description: {
    ELEMENTARY: 'Different ways to turn food scraps into rich soil: worm bins, bucket bins and big neighbourhood piles.',
    MIDDLE_SCHOOL: 'Comparing composting methods, from worm bins and bokashi buckets to community and city composting.',
    HIGH_SCHOOL: 'Choosing a composting method for a home, school or town: vermicomposting, bokashi, hot piles and municipal systems.',
    UNDERGRADUATE: 'Composting systems compared: process conditions, inputs, outputs and scale from household to municipal.',
    GRADUATE: 'Planning organics recovery: composting technologies, collection systems, quality standards and policy.',
    PHD: 'Research on composting systems: emissions, contaminants, microbial ecology and organics policy.',
  },
  lessons: [
    {
      id: 'zw-comp-1',
      title: 'Composting Methods: Worms, Bokashi and Community Sites',
      content: {
        ELEMENTARY: `
<h2>Many Ways to Make Compost</h2>
<p>Banana peels, apple cores and coffee grounds do not have to go in the trash. They can become compost, a dark, crumbly soil food that helps gardens grow. There is more than one way to make compost. Some ways use wiggly worms, some use a special bucket, and some use giant piles that a whole town shares.</p>

<h3>Worm Bins</h3>
<p>A worm bin is a box with holes for air, filled with damp shredded paper and special red worms. You add fruit and vegetable scraps, and the worms eat them. What comes out the other end is called worm castings, one of the best plant foods there is! Worm bins can even live under a kitchen sink or in a classroom.</p>
<ul>
<li><strong>Compost:</strong> rich soil made from rotted food scraps and leaves</li>
<li><strong>Worm bin:</strong> a box where worms turn food scraps into plant food</li>
<li><strong>Worm castings:</strong> the rich plant food that worms leave behind</li>
<li><strong>Bokashi:</strong> a way to pickle food scraps in a sealed bucket before burying them</li>
<li><strong>Community garden:</strong> a garden that many neighbours share</li>
</ul>

<h3>The Pickle Bucket</h3>
<p>Bokashi is a bucket method from Japan. You put food scraps in a bucket with special bran full of helpful microbes, press it down and close the lid tight. The scraps pickle! After a few weeks you bury them in the garden, where they turn into soil quickly.</p>

<h3>Sharing a Big Pile</h3>
<p>Some neighbourhoods and cities collect food scraps from many homes in green bins. Trucks take them to big compost sites, where giant piles get hot and turn everything into compost for parks and farms. It is like a team effort to feed the soil.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Choosing a Composting Method</h2>
<p>Composting turns food scraps and yard waste into a valuable soil amendment instead of trash. Food waste in landfills rots without air and releases methane, a powerful greenhouse gas, so composting it helps the climate. But not everyone has a big backyard. Luckily, there are composting methods for apartments, schools, gardens and whole cities. This chapter compares them.</p>

<h3>Indoor and Small-Space Methods</h3>
<p>Vermicomposting uses red wiggler worms in a bin. The worms eat fruit and vegetable scraps and produce castings rich in nutrients. Bins fit indoors and do not smell when managed well. Bokashi, from Japan, ferments food scraps in an airtight bucket using bran inoculated with microbes. It can take meat and dairy, which worm bins cannot, but the fermented scraps must then be buried or added to a compost pile to finish breaking down.</p>
<ul>
<li><strong>Vermicomposting:</strong> composting with worms</li>
<li><strong>Red wiggler:</strong> a worm species that thrives in compost and eats lots of scraps</li>
<li><strong>Fermentation:</strong> a process where microbes break down material without much oxygen</li>
<li><strong>Hot composting:</strong> a managed pile that heats up enough to kill weed seeds and germs</li>
<li><strong>Curbside collection:</strong> picking up food scraps from homes, like trash pickup</li>
</ul>

<h3>Backyard Piles and Bins</h3>
<p>Cold composting means piling scraps and leaves and letting them rot slowly over a year. Hot composting balances "greens" (food scraps, grass) and "browns" (leaves, cardboard), keeps the pile moist and turns it for air. It heats up and finishes in a couple of months.</p>

<h3>Community and City Composting</h3>
<p>Community gardens often run shared bins. Many cities collect food scraps at the curb and send them to large composting facilities or to digesters that also make biogas. The finished compost goes back to farms, parks and gardens, closing the loop between our kitchens and the soil.</p>
`,
        HIGH_SCHOOL: `
<h2>From Kitchen to Community: Composting Systems</h2>
<p>About a third of food produced worldwide is lost or wasted, and much of it ends up in landfills, where it decomposes without oxygen and releases methane. Composting diverts that material and turns it into a soil amendment that improves structure, water holding and fertility. The right method depends on space, volume, the types of scraps and the people involved. This chapter compares common methods across scales.</p>

<h3>Household Methods</h3>
<p>Vermicomposting relies on epigeic worms such as red wigglers, which live in the top layer of organic matter. Bins kept moist, with bedding of shredded paper or leaves, handle fruit and vegetable scraps and produce castings and liquid "leachate." Bokashi is an anaerobic fermentation method: scraps, including meat and dairy, are layered with inoculated bran in a sealed bucket. After about two weeks the acidic, pickled material is buried or added to a pile, where it breaks down rapidly. Backyard hot composting requires a balanced carbon-to-nitrogen ratio, moisture like a wrung-out sponge, and regular turning to reach temperatures of 55 to 65 °C.</p>
<ul>
<li><strong>Carbon-to-nitrogen ratio:</strong> the balance of carbon-rich browns and nitrogen-rich greens, ideally around 25–30 to 1</li>
<li><strong>Epigeic worm:</strong> a worm species living in surface organic matter, suited to composting</li>
<li><strong>Anaerobic:</strong> happening without oxygen, as in a sealed bokashi bucket or a landfill</li>
<li><strong>Windrow:</strong> a long pile of composting material turned by machines at large sites</li>
<li><strong>Anaerobic digestion:</strong> breaking down organic material without oxygen in a sealed tank to make biogas</li>
</ul>

<h3>Community-Scale Composting</h3>
<p>Schools, community gardens and urban farms run shared systems such as three-bin setups or in-vessel composters. These build local skills, keep material and value in the neighbourhood and produce compost for local growing. They require volunteer coordination, training to keep out contaminants and attention to pests and odours.</p>

<h3>Municipal Systems</h3>
<p>Cities with curbside organics collection send material to large facilities. Windrow composting forms long piles turned by machines; aerated static piles force air through piles; in-vessel systems compost in enclosed containers. Anaerobic digestion produces biogas for energy plus digestate that can be composted. Contamination, especially plastic, is the biggest challenge, so clear guidance and compostable bag rules matter.</p>
`,
        UNDERGRADUATE: `
<h2>Composting Systems Compared</h2>
<p>Composting is the controlled aerobic decomposition of organic material by successive microbial communities, producing a stabilised, humus-like product. Its performance depends on feedstock composition, moisture, oxygen supply, particle size and temperature. Systems range from household vermicomposting to municipal facilities processing hundreds of thousands of tonnes per year. This chapter compares process conditions, inputs, outputs and scale considerations across systems.</p>

<h3>Process Fundamentals</h3>
<p>Thermophilic composting passes through mesophilic, thermophilic (above about 45 °C) and maturation phases. Sustained temperatures of 55 °C or more for several days achieve pathogen and weed seed reduction, a basis for regulatory process standards. Optimal conditions include a C:N ratio of about 25–30:1, moisture of 50–60 percent, oxygen above about 5 percent in pore space and adequate porosity. Imbalances cause odours, slow decomposition or ammonia loss.</p>
<ul>
<li><strong>Thermophilic phase:</strong> the high-temperature stage of composting dominated by heat-loving microbes</li>
<li><strong>Process to further reduce pathogens:</strong> a time-temperature standard ensuring compost is safe to use</li>
<li><strong>Maturity:</strong> the degree to which compost is stable and will not harm plants</li>
<li><strong>Aerated static pile:</strong> a composting method that forces air through an unturned pile</li>
<li><strong>Feedstock:</strong> the raw organic materials fed into a composting or digestion system</li>
</ul>

<h3>Household and Community Systems</h3>
<p>Vermicomposting operates below thermophilic temperatures (worms die above about 35 °C), so it does not reliably kill pathogens or weed seeds, but it produces castings with high microbial activity and plant-available nutrients. Bokashi lactic acid fermentation preserves nutrients and accepts broader feedstocks but requires a secondary step for decomposition. Community systems trade economies of scale for local engagement and require management plans for odours, pests and contamination.</p>

<h3>Municipal Systems</h3>
<p>Turned windrows are low-cost but need space and generate odours; aerated static piles and in-vessel systems allow process control and smaller footprints at higher capital cost. Anaerobic digestion recovers energy as biogas and is suited to wet food waste, with digestate requiring further treatment. System choice depends on feedstock mix, available land, proximity to neighbours, energy prices and end markets.</p>

<h3>Product Quality and Markets</h3>
<p>Compost quality is assessed by maturity, stability, nutrient content, salinity, pathogens, heavy metals and physical contaminants. Certification schemes support market confidence. Plastic contamination from collection is a major quality concern and depends on upstream education and policy. Regular testing and clear feedback to collection programmes help keep finished compost clean enough for farms and gardens.</p>
`,
        GRADUATE: `
<h2>Planning Organics Recovery</h2>
<p>Organic waste typically makes up a large share of municipal solid waste, and diverting it from landfill is among the most effective municipal climate actions because landfills are major sources of methane. Planning organics recovery involves choosing processing technologies, designing collection systems, ensuring product quality and setting supporting policy. This chapter examines these decisions and their trade-offs.</p>

<h3>Technology Choices</h3>
<p>Composting technologies (windrows, aerated static piles, in-vessel systems) and anaerobic digestion differ in capital and operating costs, footprint, odour control, energy balance and suitability for feedstocks. Digestion recovers energy from wet food waste and can co-digest with wastewater sludge, while composting suits woody yard trimmings and produces a soil amendment directly. Many systems combine them: digestion for food waste followed by composting of digestate. Decentralised options, including community composting and on-site systems at institutions, complement centralised facilities and reduce transport.</p>
<ul>
<li><strong>Source separation:</strong> separating organics from other waste where it is generated, before collection</li>
<li><strong>Contamination rate:</strong> the share of non-compostable material in collected organics</li>
<li><strong>Digestate:</strong> the material remaining after anaerobic digestion, often composted or applied to land</li>
<li><strong>Organics disposal ban:</strong> a rule prohibiting organic waste from being landfilled</li>
<li><strong>End market:</strong> the buyers and uses for finished compost or digestate</li>
</ul>

<h3>Collection System Design</h3>
<p>Source-separated collection produces cleaner feedstock than mixed-waste processing. Design variables include container types, collection frequency, whether compostable bags are allowed, and pricing such as pay-as-you-throw. Contamination rates depend heavily on outreach, feedback (for example, bin tagging) and simple, consistent rules. Multi-family buildings have lower participation and higher contamination, requiring targeted strategies.</p>

<h3>Quality Standards and Markets</h3>
<p>Product standards for pathogens, heavy metals, physical contaminants and maturity protect end users and build markets. Concerns about microplastics and persistent chemicals such as PFAS in compost have prompted stricter feedstock controls and testing. Developing end markets through public procurement, agricultural outreach and specifications for landscaping and road projects stabilises facility revenues.</p>

<h3>Policy Instruments</h3>
<p>Organics disposal bans, landfill taxes, diversion mandates and funding for infrastructure drive recovery. Jurisdictions with comprehensive programmes combine mandates with collection services, education and enforcement. Equity considerations include ensuring services reach all neighbourhoods and that facilities are not concentrated in disadvantaged communities.</p>

<h3>Decentralised Networks</h3>
<p>Several cities support networks of community composting sites alongside central facilities. These sites process smaller volumes but build public knowledge, create local jobs and supply compost to urban farms. Small grants, technical assistance, model permits suited to small sites and partnerships with parks departments help such networks grow without compromising odour and pest control. Evaluating their combined contribution to diversion and community benefits is an emerging practice.</p>
`,
        PHD: `
<h2>Research on Composting Systems</h2>
<p>Composting is often portrayed as a simple, benign process, but research reveals complex trade-offs in greenhouse gas emissions, contaminant fate, microbial ecology and policy effectiveness. As organics diversion expands, these questions shape technology choices, standards and climate accounting. This chapter surveys current research frontiers.</p>

<h3>Emissions and Climate Accounting</h3>
<p>Although composting avoids landfill methane, it emits methane and nitrous oxide from anaerobic microsites and nitrogen transformations, as well as ammonia. Emission factors vary widely with technology, feedstock and management, complicating lifecycle assessments that compare composting, anaerobic digestion and landfill gas capture. Research quantifies emissions with chamber and micrometeorological methods, models them as functions of aeration and moisture, and evaluates mitigation through biofilters, covers and process control. Accounting for soil carbon effects of compost application, including priming and long-term stabilisation, is a further source of uncertainty.</p>
<ul>
<li><strong>Emission factor:</strong> the quantity of a gas emitted per unit of material processed</li>
<li><strong>Microplastics:</strong> plastic particles smaller than 5 millimetres, which can enter compost from contaminated feedstock</li>
<li><strong>PFAS:</strong> persistent synthetic chemicals that can accumulate in compost from packaging and other sources</li>
<li><strong>Microbial succession:</strong> the sequence of microbial communities that dominate as conditions change</li>
<li><strong>Antibiotic resistance genes:</strong> genes enabling bacteria to survive antibiotics, studied in manure-based composts</li>
</ul>

<h3>Contaminants</h3>
<p>Microplastics from packaging and imperfect sorting, and "compostable" plastics that do not fully degrade under real conditions, raise concerns about soil contamination. PFAS from food packaging and other sources can persist through composting. Research addresses detection methods, fate during processing, plant uptake and the effectiveness of feedstock restrictions. Composting's ability to degrade some pharmaceuticals and reduce antibiotic resistance genes in manure is another active area.</p>

<h3>Microbial Ecology</h3>
<p>High-throughput sequencing has characterised microbial succession across composting phases, revealing functional groups responsible for lignocellulose degradation and nitrogen transformations. Research aims to link community composition to process performance and to design inocula or conditions that accelerate composting or reduce emissions, though the benefits of commercial inoculants remain debated.</p>

<h3>Policy and Systems</h3>
<p>Evaluations of disposal bans, pay-as-you-throw and community composting programmes examine participation, contamination and diversion outcomes. Systems research compares centralised and decentralised configurations, transport emissions and the circularity of nutrient flows between cities and farms.</p>

<h3>Integrating Evidence</h3>
<p>Combining emission measurements, contaminant monitoring and lifecycle assessment with field trials of compost use would clarify the net environmental benefit of organics recovery pathways and guide standards and incentives.</p>

<h3>Food Waste Prevention Versus Recovery</h3>
<p>Waste hierarchy frameworks prioritise preventing food waste over recovering it. Research examines whether convenient composting services reduce incentives to prevent waste, and how prevention and recovery policies can be designed together. Linking household behaviour studies with collection data offers a way to test these interactions and to design messages that encourage both prevention and proper sorting.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zw-comp2-q1',
      question: {
        ELEMENTARY: 'What do worms make from food scraps in a worm bin?',
        MIDDLE_SCHOOL: 'Why is food waste in landfills bad for the climate?',
        HIGH_SCHOOL: 'What kind of worms are used in vermicomposting?',
        UNDERGRADUATE: 'What temperature range defines the thermophilic phase?',
        GRADUATE: 'Why does source-separated collection matter?',
        PHD: 'Which gases can composting emit despite avoiding landfill methane?',
      },
      options: {
        ELEMENTARY: ['Plastic', 'Candy', 'Worm castings, a rich plant food', 'Rocks'],
        MIDDLE_SCHOOL: ['It turns into gold', 'It freezes', 'It rots without air and releases methane', 'It disappears instantly'],
        HIGH_SCHOOL: ['Deep-burrowing earthworms', 'Ocean worms', 'Epigeic worms like red wigglers', 'Silkworms'],
        UNDERGRADUATE: ['Below 10 °C', 'About 20 °C', 'Above about 45 °C', 'Exactly 100 °C'],
        GRADUATE: ['It costs nothing', 'It removes the need for facilities', 'It produces cleaner feedstock', 'It is required everywhere'],
        PHD: ['Only oxygen', 'Only helium', 'Methane, nitrous oxide and ammonia', 'None at all'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Worms turn scraps into castings, a great plant food.',
        MIDDLE_SCHOOL: 'Without air, food rots and makes methane, a strong greenhouse gas.',
        HIGH_SCHOOL: 'Epigeic worms like red wigglers live in surface organic matter.',
        UNDERGRADUATE: 'The thermophilic phase is above about 45 °C.',
        GRADUATE: 'Separating organics at the source keeps contaminants out.',
        PHD: 'Anaerobic pockets and nitrogen changes emit methane, nitrous oxide and ammonia.',
      },
    },
    {
      id: 'zw-comp2-q2',
      question: {
        ELEMENTARY: 'What is bokashi?',
        MIDDLE_SCHOOL: 'What can bokashi take that worm bins cannot?',
        HIGH_SCHOOL: 'What carbon-to-nitrogen ratio is ideal for composting?',
        UNDERGRADUATE: 'Why doesn\'t vermicomposting reliably kill pathogens?',
        GRADUATE: 'What is digestate?',
        PHD: 'What concern has prompted stricter compost feedstock controls?',
      },
      options: {
        ELEMENTARY: ['A kind of worm', 'Pickling food scraps in a sealed bucket', 'A garden tool', 'A type of flower'],
        MIDDLE_SCHOOL: ['Only paper', 'Meat and dairy', 'Only leaves', 'Plastic bags'],
        HIGH_SCHOOL: ['About 1 to 1', 'About 25 to 30 to 1', 'About 100 to 1', 'About 5 to 1'],
        UNDERGRADUATE: ['Worms eat pathogens', 'It stays below thermophilic temperatures', 'It is too hot', 'It uses chemicals'],
        GRADUATE: ['Compost from leaves only', 'Material left after anaerobic digestion', 'A type of collection bin', 'A landfill liner'],
        PHD: ['Too little colour', 'Microplastics and PFAS', 'Too much moisture', 'Lack of worms'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Bokashi pickles food scraps in a sealed bucket with helpful microbes.',
        MIDDLE_SCHOOL: 'Bokashi can handle meat and dairy because it ferments them.',
        HIGH_SCHOOL: 'A C:N ratio around 25 to 30 to 1 works best.',
        UNDERGRADUATE: 'Worms die above about 35 °C, so piles never reach pathogen-killing heat.',
        GRADUATE: 'Digestate is what remains after anaerobic digestion.',
        PHD: 'Microplastics and PFAS in compost have led to tighter feedstock rules.',
      },
    },
    {
      id: 'zw-comp2-q3',
      question: {
        ELEMENTARY: 'Where do cities take food scraps from green bins?',
        MIDDLE_SCHOOL: 'What is hot composting?',
        HIGH_SCHOOL: 'What is the biggest challenge for municipal composting systems?',
        UNDERGRADUATE: 'What is an aerated static pile?',
        GRADUATE: 'Which households tend to have lower participation and higher contamination?',
        PHD: 'What does high-throughput sequencing reveal about composting?',
      },
      options: {
        ELEMENTARY: ['To the moon', 'To the zoo', 'To the ocean', 'To big compost sites'],
        MIDDLE_SCHOOL: ['Cooking food scraps', 'Burning leaves', 'Composting in summer only', 'A managed pile that heats up enough to kill weed seeds and germs'],
        HIGH_SCHOOL: ['Too much compost', 'Too many worms', 'Lack of leaves', 'Contamination, especially plastic'],
        UNDERGRADUATE: ['A pile turned daily', 'A worm bin', 'A frozen pile', 'A method forcing air through an unturned pile'],
        GRADUATE: ['Rural farms', 'Restaurants', 'Single-family homes with gardens', 'Multi-family buildings'],
        PHD: ['Compost colour', 'Pile height', 'Weather patterns', 'Microbial succession across composting phases'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Trucks take scraps to big compost sites where giant piles turn them into soil.',
        MIDDLE_SCHOOL: 'Hot composting balances materials so the pile heats up and works fast.',
        HIGH_SCHOOL: 'Plastic and other contaminants are the biggest problem for large facilities.',
        UNDERGRADUATE: 'Aerated static piles push air through instead of turning.',
        GRADUATE: 'Apartments and other multi-family buildings need targeted strategies.',
        PHD: 'Sequencing shows how microbial communities change through the phases.',
      },
    },
    {
      id: 'zw-comp2-q4',
      question: {
        ELEMENTARY: 'What is compost?',
        MIDDLE_SCHOOL: 'What are "greens" in a compost pile?',
        HIGH_SCHOOL: 'How wet should a hot compost pile be?',
        UNDERGRADUATE: 'What does compost maturity describe?',
        GRADUATE: 'Which policy prohibits organic waste from going to landfill?',
        PHD: 'Why is accounting for compost\'s soil carbon effects uncertain?',
      },
      options: {
        ELEMENTARY: ['Rich soil made from rotted food scraps and leaves', 'A kind of candy', 'A plastic toy', 'A type of rock'],
        MIDDLE_SCHOOL: ['Food scraps and grass clippings', 'Dry leaves', 'Rocks', 'Plastic bottles'],
        HIGH_SCHOOL: ['Like a wrung-out sponge', 'Completely dry', 'Flooded with water', 'Frozen solid'],
        UNDERGRADUATE: ['How stable compost is and whether it will harm plants', 'Its colour', 'Its price', 'Its age in days only'],
        GRADUATE: ['An organics disposal ban', 'A recycling rebate', 'A plastic tax', 'A fuel subsidy'],
        PHD: ['Priming and long-term stabilisation are hard to quantify', 'Compost contains no carbon', 'Soil never changes', 'Carbon is easy to see'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Compost is rich soil made from rotted scraps and leaves.',
        MIDDLE_SCHOOL: 'Greens are nitrogen-rich, like food scraps and grass.',
        HIGH_SCHOOL: 'Moisture like a wrung-out sponge keeps microbes working.',
        UNDERGRADUATE: 'Mature compost is stable and safe for plants.',
        GRADUATE: 'Organics disposal bans keep food and yard waste out of landfills.',
        PHD: 'Effects like priming and long-term stabilisation make carbon accounting uncertain.',
      },
    },
    {
      id: 'zw-comp2-q5',
      question: {
        ELEMENTARY: 'Where can a worm bin live?',
        MIDDLE_SCHOOL: 'What is curbside collection?',
        HIGH_SCHOOL: 'What does anaerobic digestion produce?',
        UNDERGRADUATE: 'What is a feedstock?',
        GRADUATE: 'Why does developing end markets matter for organics facilities?',
        PHD: 'Why do some "compostable" plastics raise concern?',
      },
      options: {
        ELEMENTARY: ['On the moon', 'Under a kitchen sink or in a classroom', 'In a freezer', 'In a fish tank'],
        MIDDLE_SCHOOL: ['Recycling cans only', 'Picking up food scraps from homes', 'Collecting rainwater', 'Picking up mail'],
        HIGH_SCHOOL: ['Plastic', 'Biogas and digestate', 'Clean water only', 'Metal'],
        UNDERGRADUATE: ['A garden tool', 'The raw organic materials fed into a system', 'Finished compost', 'A type of worm'],
        GRADUATE: ['They are not important', 'They stabilise revenues by providing buyers for compost', 'They ban compost', 'They raise contamination'],
        PHD: ['They are too strong', 'They may not fully degrade under real conditions', 'They are edible', 'They always degrade instantly'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Worm bins are small enough for a kitchen or classroom.',
        MIDDLE_SCHOOL: 'Curbside collection picks up food scraps like trash pickup.',
        HIGH_SCHOOL: 'Digestion makes biogas for energy and leftover digestate.',
        UNDERGRADUATE: 'Feedstock is the raw organic material going in.',
        GRADUATE: 'Buyers for compost keep facilities financially stable.',
        PHD: 'Some compostable plastics do not break down fully in real facilities.',
      },
    },
  ],
}

export default expansion
