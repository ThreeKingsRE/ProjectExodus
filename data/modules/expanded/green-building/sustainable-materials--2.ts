import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: specific low-carbon materials (timber, hempcrete,
// earth, reclaimed parts) and how builders choose them. Embodied carbon accounting
// and healthy materials have their own chapters.
const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'sustainable-materials~2',
  title: 'Low-Carbon Materials: Timber, Hempcrete and Reuse',
  description: {
    ELEMENTARY: 'Meet building materials that are kind to the planet, like wood, hemp, earth and reused bricks.',
    MIDDLE_SCHOOL: 'How wood, hempcrete, earth and reclaimed materials can build homes with less pollution.',
    HIGH_SCHOOL: 'Comparing timber, hempcrete, earth and reused materials: carbon, performance and limits.',
    UNDERGRADUATE: 'Bio-based and reclaimed materials in practice: properties, codes, sourcing and design for reuse.',
    GRADUATE: 'Scaling low-carbon materials: forest supply, carbon storage claims, codes and reuse markets.',
    PHD: 'Research on bio-based and reclaimed materials: biogenic carbon accounting, durability and system effects.',
  },
  lessons: [
    {
      id: 'gb-mat-1',
      title: 'Low-Carbon Materials: Timber, Hempcrete and Reuse',
      content: {
        ELEMENTARY: `
<h2>Building With Planet-Friendly Stuff</h2>
<p>Houses and schools can be built from many things: concrete, steel, glass, wood, straw and even mud! Some materials take a lot of energy to make and send pollution into the air. Others come from plants that grow back, or from old buildings, so they are much gentler on our planet.</p>

<h3>Wood From Trees</h3>
<p>Trees take in carbon from the air while they grow and keep it inside their wood. When we build with wood from forests that are cared for and replanted, the carbon stays locked inside the building for many years. Today, people even build tall apartment towers out of special strong wood panels!</p>

<h3>Hemp and Straw</h3>
<p>Hemp is a plant that grows very fast. Its woody stems can be mixed with lime and water to make hempcrete, a light block that keeps houses warm in winter and cool in summer. Straw bales, left over after farmers harvest wheat, can be stacked to make thick, cosy walls.</p>
<ul>
<li><strong>Material:</strong> the stuff something is made from, like wood or brick</li>
<li><strong>Timber:</strong> wood that has been cut and prepared for building</li>
<li><strong>Hempcrete:</strong> a building block made from hemp plant stems mixed with lime</li>
<li><strong>Reuse:</strong> using something again instead of throwing it away</li>
<li><strong>Carbon:</strong> a natural element that becomes a gas that warms the planet when it is in the air</li>
</ul>

<h3>Using Old Things Again</h3>
<p>When an old building is taken down, its bricks, wooden beams, doors and windows can be saved and used in a new building. This is called reuse. It saves the energy needed to make new things and keeps useful materials out of the dump. Some cities even have shops that sell old building parts!</p>

<h3>Look Around!</h3>
<p>Next time you are in a building, try to spot what it is made from. Can you see wood, brick, stone or metal? Which ones do you think came from plants?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Choosing Materials That Cut Carbon</h2>
<p>Making cement, steel and many plastics uses huge amounts of energy, much of it from fossil fuels. Cement alone produces a large share of the world's carbon dioxide emissions. Builders can lower a building's climate impact by choosing materials that need less energy to make, that store carbon, or that have already been made once before. This chapter looks at some of the most promising options.</p>

<h3>Mass Timber</h3>
<p>Mass timber is made by gluing or pinning layers of wood together into large, strong panels and beams. One common type is cross-laminated timber, where each layer runs at a right angle to the one below it. These panels can replace concrete and steel in floors, walls and even tall buildings. Because wood stores carbon absorbed by trees, a timber building can hold tonnes of carbon, as long as the forests are well managed and replanted.</p>

<h3>Hempcrete, Straw and Earth</h3>
<p>Hempcrete mixes the woody core of the hemp plant with lime. It is not strong enough to hold up a building on its own, so it fills in around a frame, but it insulates well and lets walls "breathe" moisture. Straw bale walls use a farm by-product. Rammed earth walls are made by packing damp soil into forms, creating thick walls that store heat and need very little processing.</p>
<ul>
<li><strong>Embodied carbon:</strong> the carbon released while making, moving and installing a material</li>
<li><strong>Mass timber:</strong> large, strong wood panels and beams made by joining layers of wood</li>
<li><strong>Cross-laminated timber:</strong> wood panels with layers glued at right angles for strength</li>
<li><strong>Rammed earth:</strong> walls made by packing damp soil tightly into frames</li>
<li><strong>Reclaimed material:</strong> material saved from an old building to use again</li>
<li><strong>Bio-based material:</strong> a material made from plants or other living things</li>
</ul>

<h3>Reclaimed Materials</h3>
<p>Reusing bricks, beams, steel sections, doors and flooring from old buildings avoids nearly all the carbon of making new ones. Careful "deconstruction" takes buildings apart piece by piece instead of smashing them, so parts can be sold again. New buildings can also be designed with bolts instead of glue so they are easier to take apart later.</p>

<h3>Trade-Offs</h3>
<p>No material is perfect. Wood must come from responsibly managed forests and be protected from moisture and fire. Hemp and straw need dry storage and skilled builders. Reclaimed parts must be checked for safety. Smart builders choose the right material for each job.</p>
`,
        HIGH_SCHOOL: `
<h2>Comparing Low-Carbon Materials</h2>
<p>As buildings become more energy efficient, the carbon released to make their materials makes up a growing share of their total climate impact. Concrete and steel dominate construction and are carbon-intensive to produce. Low-carbon alternatives fall into three groups: bio-based materials that store carbon, minimally processed natural materials, and reclaimed materials that avoid new production. Each has strengths, limits and appropriate uses.</p>

<h3>Mass Timber in Practice</h3>
<p>Engineered wood products such as cross-laminated timber (CLT), glued-laminated timber (glulam) and laminated veneer lumber allow wood to span long distances and carry large loads. Panels are prefabricated in factories and assembled quickly on site, cutting construction time, noise and waste. Fire safety is addressed by charring: a thick timber member forms a protective char layer that slows burning, and many building codes now allow mass timber buildings well above ten storeys with protective measures. The carbon benefit depends on sustainable forest management and what happens to the wood at end of life.</p>

<h3>Hempcrete, Straw and Earth</h3>
<p>Hempcrete is a non-load-bearing infill made of hemp hurds and a lime binder. Lime absorbs some carbon dioxide as it cures, and hemp grows quickly, so hempcrete walls can be close to carbon neutral or even store carbon. It offers good insulation, thermal mass and moisture regulation but is slow to dry. Straw bale construction uses an agricultural by-product with excellent insulation. Rammed earth and compressed earth blocks need little energy, provide thermal mass and can last centuries when protected from water, though sometimes cement is added for strength, raising their carbon footprint.</p>
<ul>
<li><strong>Glulam:</strong> beams made by gluing layers of timber together with grain running the same way</li>
<li><strong>Charring:</strong> the protective layer of charcoal that forms on burning timber and slows the fire</li>
<li><strong>Biogenic carbon:</strong> carbon absorbed from the atmosphere by plants and stored in bio-based materials</li>
<li><strong>Thermal mass:</strong> a material's ability to absorb, store and slowly release heat</li>
<li><strong>Deconstruction:</strong> taking a building apart carefully so its materials can be reused</li>
<li><strong>Prefabrication:</strong> making building parts in a factory before installing them on site</li>
</ul>

<h3>Reuse and Design for Disassembly</h3>
<p>Reusing structural steel, timber, bricks and fixtures avoids most of their embodied carbon. Barriers include the labour cost of deconstruction, testing and certifying used components, and the need for storage and marketplaces. Design for disassembly uses mechanical fasteners, standard sizes and accessible connections so future buildings can be "harvested" for parts.</p>

<h3>Choosing Wisely</h3>
<p>Material selection weighs carbon, structural needs, fire and moisture performance, local availability, cost, codes and builder skills. Combining low-carbon concrete for foundations with timber superstructures and bio-based insulation is a common strategy.</p>
`,
        UNDERGRADUATE: `
<h2>Bio-Based and Reclaimed Materials in Practice</h2>
<p>Reducing embodied carbon at scale requires shifting the material palette of construction. Bio-based materials such as engineered timber, hemp, straw, cork and wood fibre can store biogenic carbon and replace carbon-intensive products; earthen materials offer low-processing alternatives; and reclaimed components avoid new production entirely. This chapter examines their properties, regulatory context, sourcing issues and design implications.</p>

<h3>Engineered Timber Systems</h3>
<p>CLT, glulam, LVL and nail- or dowel-laminated timber enable timber structures for mid- and high-rise buildings. Structural design must address lower stiffness than steel, vibration of long-span floors, connection design, acoustic separation and moisture protection during construction. Fire performance is engineered through char rate calculations, encapsulation with gypsum and sprinklers. Building codes in many jurisdictions have expanded allowable heights for mass timber in recent years. Hybrid systems combine timber with concrete cores or steel where stiffness or long spans are needed.</p>

<h3>Bio-Based Insulation and Infill</h3>
<p>Hempcrete, straw bale, wood fibre board, cellulose and cork provide insulation with low or negative embodied carbon. Their hygroscopic properties buffer indoor humidity, but they require detailing for moisture management and, for some, fire protection. Supply chains, product certification and contractor familiarity remain limited in many markets, affecting cost and insurability.</p>
<ul>
<li><strong>Hygroscopic:</strong> able to absorb and release moisture from the air</li>
<li><strong>Encapsulation:</strong> covering timber with non-combustible material such as gypsum to delay fire involvement</li>
<li><strong>Forest certification:</strong> independent verification that wood comes from responsibly managed forests</li>
<li><strong>Design for disassembly:</strong> designing buildings so components can be removed intact and reused</li>
<li><strong>Material passport:</strong> a digital record of a building's materials to support future reuse</li>
<li><strong>Environmental product declaration:</strong> a verified report of a product's life cycle environmental impacts</li>
</ul>

<h3>Sourcing and Forests</h3>
<p>The climate benefit of timber depends on forest management. Harvesting from sustainably managed, certified forests where growth exceeds harvest supports carbon storage, while overharvesting or converting natural forests undermines it. Increased timber demand raises questions about forest carbon stocks, biodiversity and the share of harvested wood that ends up in long-lived products.</p>

<h3>Reclaimed Components</h3>
<p>Structural reuse requires assessing the condition, grade and capacity of salvaged steel or timber, often through testing and engineering judgement. Pre-demolition audits identify reusable elements; digital marketplaces and material banks connect supply and demand. Design for disassembly and material passports aim to make future reuse routine.</p>

<h3>Evaluating Options</h3>
<p>Environmental product declarations and whole-building life cycle assessment allow comparison, though treatment of biogenic carbon and end-of-life scenarios significantly affects results.</p>
`,
        GRADUATE: `
<h2>Scaling Low-Carbon Materials</h2>
<p>Low-carbon materials have moved from demonstration projects toward the mainstream, but scaling them raises system-level questions. Can forests sustainably supply a large shift to timber? How should stored biogenic carbon be credited? How can codes, insurers and supply chains adapt? And can reuse become a mainstream practice rather than a niche craft? This chapter analyses these questions for timber, other bio-based materials and reclaimed components.</p>

<h3>Forest Supply and Carbon</h3>
<p>Modelling studies suggest that a substantial increase in timber construction is possible from sustainably managed forests, but outcomes depend on harvest intensity, forest type, regrowth time and the use of residues. Increased harvests can reduce forest carbon stocks in the near term even if they produce long-lived products, creating a carbon "debt" that is repaid over decades. Protecting high-biodiversity natural forests, improving harvest efficiency and directing wood to long-lived uses are central to a credible timber strategy.</p>

<h3>Biogenic Carbon Accounting</h3>
<p>Life cycle assessment standards treat biogenic carbon in different ways: some record uptake during growth and release at end of life (a net zero over the life cycle), while others apply dynamic or time-weighted methods that credit delayed emissions. Claims that buildings are "carbon negative" because of stored carbon must be scrutinised for end-of-life assumptions, forest management and double counting with forest carbon inventories.</p>
<ul>
<li><strong>Carbon debt:</strong> the temporary increase in atmospheric carbon when harvest exceeds near-term regrowth</li>
<li><strong>Dynamic life cycle assessment:</strong> an approach that accounts for the timing of emissions and removals</li>
<li><strong>Double counting:</strong> claiming the same carbon benefit in two different inventories or projects</li>
<li><strong>Material bank:</strong> a stockpile or digital registry of reusable building components</li>
<li><strong>Performance-based code:</strong> a code that sets required outcomes rather than prescribing specific materials</li>
<li><strong>Bio-based material:</strong> a product derived from biomass such as wood, hemp or straw</li>
</ul>

<h3>Codes, Insurance and Supply Chains</h3>
<p>Prescriptive codes historically limited combustible construction, slowing adoption of timber and bio-based materials. Code changes, fire testing and performance-based approaches have expanded allowable uses. Insurers and lenders remain cautious where data on long-term performance are limited. Manufacturing capacity, regional supply chains and workforce training determine cost competitiveness.</p>

<h3>Mainstreaming Reuse</h3>
<p>Reuse faces economic barriers: deconstruction is labour intensive, salvaged components need certification, and project schedules rarely accommodate uncertain supply. Policy tools include deconstruction ordinances, pre-demolition audits, embodied carbon limits that reward reuse and standards for recertifying structural components. Digital tools such as material passports and online marketplaces reduce transaction costs.</p>

<h3>Strategic Priorities</h3>
<p>The largest gains come from combining strategies: building less new floor area through retrofit, using less material through efficient design, choosing low-carbon materials and designing for future reuse. Material substitution alone is not sufficient.</p>
`,
        PHD: `
<h2>Research on Bio-Based and Reclaimed Materials</h2>
<p>Bio-based and reclaimed materials are central to many decarbonisation pathways for the built environment, yet key scientific and methodological questions remain unresolved. Research addresses how to account for biogenic carbon and its timing, how bio-based materials perform over long service lives, how material shifts affect land and forest systems, and how reuse can be scaled and verified. This chapter outlines these research frontiers.</p>

<h3>Biogenic Carbon and Climate Metrics</h3>
<p>Debate continues over how to value temporary carbon storage in building products. Static life cycle assessment with a "-1/+1" approach treats uptake and release as cancelling, while dynamic methods use radiative forcing over a time horizon to credit delayed emissions. Results are sensitive to time horizon, rotation length, product lifetime and end-of-life fate (reuse, landfill, incineration with or without capture). Research seeks consistent methods that integrate building life cycle assessment with forest carbon modelling and national inventories.</p>

<h3>Durability and Performance</h3>
<p>Long-term performance data for hempcrete, straw, wood fibre and engineered timber under varying climates are limited. Research uses hygrothermal modelling, accelerated ageing and monitoring of real buildings to assess moisture risk, decay, fire performance and structural creep. Uncertainty about durability affects insurance, finance and whether stored carbon remains stored.</p>
<ul>
<li><strong>Radiative forcing:</strong> the change in energy balance of the climate system caused by a greenhouse gas</li>
<li><strong>Hygrothermal modelling:</strong> simulation of heat and moisture movement through building assemblies</li>
<li><strong>Creep:</strong> slow, long-term deformation of a material under sustained load</li>
<li><strong>Consequential life cycle assessment:</strong> analysis of the system-wide effects of a decision, including market responses</li>
<li><strong>Indirect land use change:</strong> land conversion elsewhere caused by increased demand for a crop or product</li>
<li><strong>Urban mining:</strong> recovering materials from existing buildings and infrastructure</li>
</ul>

<h3>System Effects and Land Use</h3>
<p>Consequential life cycle assessment and integrated models examine what happens when demand for timber or hemp grows: effects on harvest levels, forest age structure, biodiversity, agricultural land and displaced products. Indirect land use change and leakage can erode or reverse apparent benefits. Research explores scenarios in which construction demand is met from residues, plantation forests or improved harvest efficiency.</p>

<h3>Scaling and Verifying Reuse</h3>
<p>Urban mining research quantifies material stocks in existing buildings and their potential for reuse. Engineering research develops non-destructive testing and reliability methods to recertify salvaged structural elements. Studies analyse the economics of deconstruction, the role of digital twins and material passports, and the design of policies that make reuse competitive.</p>

<h3>Social and Economic Dimensions</h3>
<p>Material transitions affect rural economies, forest-dependent and Indigenous communities, construction labour and housing affordability. Research examines who benefits from new bio-based supply chains, how tenure and forest governance shape outcomes, and whether reuse markets can create local skilled jobs. Integrating these dimensions with carbon accounting is essential for credible decarbonisation strategies.</p>

<h3>Open Questions</h3>
<p>Priorities include harmonised biogenic carbon accounting, long-term durability data, integrated forest-building models and evidence on which policies successfully scale reuse.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbmat2-q1',
      question: {
        ELEMENTARY: 'How does wood help keep carbon out of the air?',
        MIDDLE_SCHOOL: 'What is cross-laminated timber?',
        HIGH_SCHOOL: 'How does a thick timber member resist fire?',
        UNDERGRADUATE: 'What does encapsulation mean for mass timber?',
        GRADUATE: 'What is a forest carbon debt?',
        PHD: 'How does a static "-1/+1" approach treat biogenic carbon?',
      },
      options: {
        ELEMENTARY: ['Wood makes carbon disappear forever', 'Trees store carbon in their wood as they grow', 'Wood blows carbon into space', 'Wood turns carbon into water'],
        MIDDLE_SCHOOL: ['A type of plastic', 'Wood panels with layers glued at right angles', 'Melted glass sheets', 'A concrete mix'],
        HIGH_SCHOOL: ['Wood cannot burn', 'A char layer forms and slows burning', 'It melts like steel', 'It is coated in oil'],
        UNDERGRADUATE: ['Painting it bright colours', 'Covering timber with non-combustible material like gypsum', 'Burying it underground', 'Soaking it in water'],
        GRADUATE: ['Money owed to a forest owner', 'A temporary rise in atmospheric carbon when harvest outpaces regrowth', 'A tax on timber', 'Carbon stored forever in soil'],
        PHD: ['It ignores uptake but counts release twice', 'Uptake and release cancel out over the life cycle', 'It credits all storage as permanent', 'It counts only transport'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Trees take in carbon and keep it in their wood.',
        MIDDLE_SCHOOL: 'CLT layers run at right angles to make strong panels.',
        HIGH_SCHOOL: 'Charring protects the inner wood and slows the fire.',
        UNDERGRADUATE: 'Encapsulation with gypsum delays fire reaching the timber.',
        GRADUATE: 'Harvest can raise atmospheric carbon until forests regrow.',
        PHD: 'Static accounting treats uptake (-1) and release (+1) as cancelling.',
      },
    },
    {
      id: 'gbmat2-q2',
      question: {
        ELEMENTARY: 'What is hempcrete made from?',
        MIDDLE_SCHOOL: 'Why can hempcrete not hold up a building on its own?',
        HIGH_SCHOOL: 'Why can hempcrete walls be close to carbon neutral?',
        UNDERGRADUATE: 'What does hygroscopic mean?',
        GRADUATE: 'Why must "carbon negative" building claims be scrutinised?',
        PHD: 'Why does uncertainty about durability matter for carbon storage?',
      },
      options: {
        ELEMENTARY: ['Melted plastic bottles', 'Sand and sugar', 'Steel and glass', 'Hemp plant stems mixed with lime'],
        MIDDLE_SCHOOL: ['It is too heavy', 'It dissolves in air', 'It is made of metal', 'It is not strong enough, so it fills around a frame'],
        HIGH_SCHOOL: ['It is made in coal plants', 'It never touches air', 'It contains no plants', 'Hemp grows fast and lime absorbs CO2 as it cures'],
        UNDERGRADUATE: ['Completely waterproof', 'Resistant to all fire', 'Magnetic', 'Able to absorb and release moisture from the air'],
        GRADUATE: ['They are always false', 'They are always accurate', 'Carbon cannot be measured', 'End-of-life fate, forest management and double counting affect them'],
        PHD: ['Durability never affects carbon', 'All materials last forever', 'Insurers ignore durability', 'Stored carbon is only stored if the material lasts'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Hempcrete mixes hemp plant stems with lime.',
        MIDDLE_SCHOOL: 'Hempcrete is infill around a structural frame.',
        HIGH_SCHOOL: 'Fast-growing hemp and curing lime both take up carbon.',
        UNDERGRADUATE: 'Hygroscopic materials buffer indoor humidity.',
        GRADUATE: 'The claim depends on assumptions about forests and end of life.',
        PHD: 'If a material decays early, its stored carbon is released.',
      },
    },
    {
      id: 'gbmat2-q3',
      question: {
        ELEMENTARY: 'What does reuse mean?',
        MIDDLE_SCHOOL: 'What is deconstruction?',
        HIGH_SCHOOL: 'How does design for disassembly help future reuse?',
        UNDERGRADUATE: 'What is a material passport?',
        GRADUATE: 'Which policy tool helps make reuse more common?',
        PHD: 'What is urban mining?',
      },
      options: {
        ELEMENTARY: ['Using something again instead of throwing it away', 'Breaking things for fun', 'Buying everything new', 'Painting things'],
        MIDDLE_SCHOOL: ['Taking a building apart carefully so parts can be reused', 'Smashing a building quickly', 'Building something new', 'Painting a building'],
        HIGH_SCHOOL: ['Bolts, standard sizes and reachable connections let parts come out intact', 'Using more glue', 'Hiding all connections', 'Using unique sizes'],
        UNDERGRADUATE: ['A digital record of a building\'s materials to support reuse', 'A travel document for builders', 'A tax form', 'A paint colour chart'],
        GRADUATE: ['Deconstruction ordinances and pre-demolition audits', 'Banning salvage', 'Raising landfill subsidies', 'Requiring all-new materials'],
        PHD: ['Recovering materials from existing buildings and infrastructure', 'Digging for coal under cities', 'Mining in city parks', 'Building mines downtown'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Reuse means using things again.',
        MIDDLE_SCHOOL: 'Deconstruction takes buildings apart piece by piece.',
        HIGH_SCHOOL: 'Mechanical fasteners and standard parts make removal easier.',
        UNDERGRADUATE: 'Material passports record what a building contains.',
        GRADUATE: 'Ordinances and audits identify and require salvage.',
        PHD: 'Urban mining treats buildings as stocks of reusable materials.',
      },
    },
    {
      id: 'gbmat2-q4',
      question: {
        ELEMENTARY: 'What are straw bales left over from?',
        MIDDLE_SCHOOL: 'How are rammed earth walls made?',
        HIGH_SCHOOL: 'What is thermal mass?',
        UNDERGRADUATE: 'Why does timber\'s climate benefit depend on forest management?',
        GRADUATE: 'Why are insurers and lenders cautious about some bio-based materials?',
        PHD: 'What does consequential life cycle assessment examine?',
      },
      options: {
        ELEMENTARY: ['Making cars', 'Building roads', 'Farmers harvesting wheat', 'Cooking dinner'],
        MIDDLE_SCHOOL: ['Pouring melted rock', 'Stacking plastic bottles', 'Packing damp soil tightly into frames', 'Gluing paper together'],
        HIGH_SCHOOL: ['How heavy a building is', 'The temperature outside', 'A material\'s ability to store and slowly release heat', 'A type of insulation foam'],
        UNDERGRADUATE: ['All forests are the same', 'Trees never regrow', 'Overharvesting or converting natural forests undermines carbon storage', 'Forest type has no effect'],
        GRADUATE: ['They are too cheap', 'They are illegal everywhere', 'Data on long-term performance are limited', 'They never need maintenance'],
        PHD: ['Only a product\'s colour', 'Only factory emissions', 'System-wide effects of a decision, including market responses', 'Only shipping costs'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Straw is left after wheat is harvested.',
        MIDDLE_SCHOOL: 'Rammed earth is damp soil packed into forms.',
        HIGH_SCHOOL: 'Thermal mass absorbs heat and releases it slowly.',
        UNDERGRADUATE: 'Only well-managed forests support timber\'s carbon benefit.',
        GRADUATE: 'Limited long-term data makes risk harder to price.',
        PHD: 'Consequential LCA traces market and land-use effects of a decision.',
      },
    },
    {
      id: 'gbmat2-q5',
      question: {
        ELEMENTARY: 'Why is using old bricks again good for the planet?',
        MIDDLE_SCHOOL: 'What must wood come from to be a good choice?',
        HIGH_SCHOOL: 'What is a common low-carbon combination?',
        UNDERGRADUATE: 'What is an environmental product declaration?',
        GRADUATE: 'Where do the largest embodied carbon gains come from?',
        PHD: 'What is indirect land use change?',
      },
      options: {
        ELEMENTARY: ['Old bricks are softer', 'It saves the energy needed to make new ones', 'New bricks are not allowed', 'Old bricks glow'],
        MIDDLE_SCHOOL: ['Any forest at all', 'Responsibly managed, replanted forests', 'Rainforests only', 'Burned forests'],
        HIGH_SCHOOL: ['All-steel frames with plastic insulation', 'Low-carbon concrete foundations with timber above and bio-based insulation', 'Only glass walls', 'Concrete everywhere'],
        UNDERGRADUATE: ['A product advertisement', 'A verified report of a product\'s life cycle impacts', 'A shipping label', 'A warranty card'],
        GRADUATE: ['Substituting materials alone', 'Combining retrofit, efficient design, low-carbon materials and reuse', 'Building more floor area', 'Ignoring end of life'],
        PHD: ['Changing a building\'s address', 'Land conversion elsewhere caused by increased demand', 'Moving soil on a site', 'Paving a parking lot'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Reuse avoids making new bricks.',
        MIDDLE_SCHOOL: 'Wood is a good choice when forests are managed and replanted.',
        HIGH_SCHOOL: 'Hybrid strategies use each material where it works best.',
        UNDERGRADUATE: 'EPDs report verified life cycle impacts.',
        GRADUATE: 'Material substitution alone is not enough; combine strategies.',
        PHD: 'Demand can push land conversion elsewhere, eroding benefits.',
      },
    },
  ],
}

export default expansion
