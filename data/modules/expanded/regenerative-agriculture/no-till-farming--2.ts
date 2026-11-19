import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: the practical transition to no-till on a real
// farm. Chapter 3 covers what no-till is and why it helps soil.
const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'no-till-farming~2',
  title: 'Making the Switch to No-Till: Equipment, Weeds and Yields',
  description: {
    ELEMENTARY: 'How farmers change the way they plant so they never have to dig up their fields again.',
    MIDDLE_SCHOOL: 'The tools, weed tricks and patience farmers need when they switch to no-till farming.',
    HIGH_SCHOOL: 'A practical guide to converting a farm to no-till: planters, residue, weeds and the yield dip.',
    UNDERGRADUATE: 'No-till transition management: equipment, residue, weed and pest control, fertility and economics.',
    GRADUATE: 'Managing the no-till transition: agronomic trade-offs, herbicide dependence, risk and farm economics.',
    PHD: 'Research on no-till adoption and performance: yield meta-analyses, soil carbon debates and herbicide resistance.',
  },
  lessons: [
    {
      id: 'ra-nt-1',
      title: 'Making the Switch to No-Till: Equipment, Weeds and Yields',
      content: {
        ELEMENTARY: `
<h2>Planting Without Digging</h2>
<p>For a very long time, farmers used big ploughs to turn over the soil before planting. Some farmers now plant without ploughing at all. This is called no-till farming. It keeps the soil covered and full of life. But switching is a big change, like learning to ride a bike a whole new way. Farmers need new tools, new tricks for weeds and some patience.</p>

<h3>A Special Planter</h3>
<p>Without ploughing, the ground is covered with old stalks and leaves from last year. A no-till planter has sharp round blades that slice a thin slot through all that cover. It drops a seed in the slot and closes it up. The rest of the soil stays snug under its blanket of plant leftovers.</p>
<ul>
<li><strong>Plough:</strong> a tool that turns over and loosens soil</li>
<li><strong>No-till:</strong> planting crops without ploughing the soil</li>
<li><strong>Planter:</strong> a machine that puts seeds into the ground</li>
<li><strong>Crop leftovers:</strong> old stalks and leaves left on the field after harvest</li>
<li><strong>Weed:</strong> a plant growing where farmers do not want it</li>
</ul>

<h3>Tricky Weeds</h3>
<p>Ploughing used to bury weeds. Without it, farmers find other ways. They plant cover crops that crowd weeds out, like a busy playground with no space left. They also roll down cover crops into a thick mat that keeps weed seeds in the dark.</p>

<h3>Being Patient</h3>
<p>The first few years can be bumpy, and crops may grow a little less. But as worms and tiny soil helpers move back in, the soil gets spongier and healthier, and many farms grow just as much as before.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Switching a Farm to No-Till</h2>
<p>No-till farming leaves crop residue on the surface and plants seeds directly into it, without ploughing. It protects soil from erosion, saves fuel and helps build soil life. But converting a farm is a process, not a single decision. Farmers must change their equipment, manage weeds and pests differently and expect a learning period. This chapter looks at what that switch involves.</p>

<h3>New Equipment</h3>
<p>The biggest change is the planter. A no-till planter or drill uses heavy coulters and disc openers to cut through residue and place seed at the right depth. Row cleaners push residue aside right over the row so the soil warms up. Farmers can often sell their ploughs and some tillage tools, which saves money and fuel.</p>
<ul>
<li><strong>Residue:</strong> crop stalks, leaves and roots left on the field after harvest</li>
<li><strong>Coulter:</strong> a sharp, round blade that slices through residue ahead of the seed</li>
<li><strong>Row cleaner:</strong> a planter attachment that moves residue away from the seed row</li>
<li><strong>Cover crop:</strong> a crop grown mainly to protect and feed the soil, not to sell</li>
<li><strong>Roller-crimper:</strong> a tool that flattens and crimps cover crops into a weed-blocking mat</li>
</ul>

<h3>Managing Weeds</h3>
<p>Without ploughing, weeds are not buried. Many no-till farmers use herbicides, but more are adding cover crops, crop rotations and roller-crimpers to reduce chemical use. A thick cover crop mat can block sunlight from weed seeds. Rotating different crops also keeps any one weed from taking over.</p>

<h3>The Transition Years</h3>
<p>Cold, wet soils under residue can slow spring planting, and nitrogen can be tied up as residue breaks down, so yields sometimes dip for the first few years. Farmers adjust by adding a little nitrogen near the seed, choosing well-drained fields first and being patient. Over time, many see better soil structure, more water soaking in and lower costs.</p>
`,
        HIGH_SCHOOL: `
<h2>A Practical Guide to Going No-Till</h2>
<p>The benefits of no-till, including less erosion, more water infiltration, lower fuel use and healthier soil biology, are well documented. Less often discussed is how farmers actually make the switch. Converting a farm involves new equipment, different ways of handling residue, weeds and pests, and a transition period that can test a farm's finances. This chapter focuses on the practical side.</p>

<h3>Equipment and Planting</h3>
<p>Successful no-till starts at the planter. Key adjustments include sharp coulters to cut residue, enough down-pressure for consistent seeding depth in firmer soil, closing wheels that seal the seed slot, and row cleaners that clear a strip of residue so soil warms and dries faster. Many farmers start by converting their existing planter with aftermarket parts rather than buying new equipment. Spreading residue evenly at harvest, with a good combine chopper and spreader, prevents thick piles that cause uneven emergence.</p>
<ul>
<li><strong>Down-pressure:</strong> force applied to planter row units to keep seed depth consistent</li>
<li><strong>Seed slot:</strong> the narrow furrow opened by a planter for placing seed</li>
<li><strong>Nitrogen immobilisation:</strong> soil microbes temporarily tying up nitrogen while breaking down residue</li>
<li><strong>Herbicide resistance:</strong> when weeds evolve the ability to survive a herbicide</li>
<li><strong>Strip-till:</strong> tilling only narrow strips where crops are planted, leaving the rest undisturbed</li>
</ul>

<h3>Weeds, Pests and Fertility</h3>
<p>Without tillage, weed control relies on herbicides, cover crops, rotation and timely planting. Overreliance on a single herbicide has led to resistant weeds, so integrated weed management combining several tactics is essential. Residue can harbour slugs and some diseases, while also supporting beneficial predators. Nitrogen immobilisation during residue breakdown may require placing some nitrogen near the seed in early years.</p>

<h3>The Yield Question</h3>
<p>Large studies show no-till yields average slightly lower than ploughed yields at first, with the gap shrinking over time and often disappearing in dry climates, where retained moisture is a major advantage. Yields suffer most in cold, wet, poorly drained soils. Strip-till is a compromise for those conditions.</p>

<h3>Economics</h3>
<p>No-till saves fuel, labour and machinery costs, which often offsets any small yield dip. Pairing no-till with cover crops and rotation builds the biggest long-term gains, though it adds management complexity.</p>
`,
        UNDERGRADUATE: `
<h2>Managing the Transition to No-Till</h2>
<p>No-till and other conservation tillage systems now cover a substantial share of cropland worldwide, notably in the Americas and Australia. Adoption depends less on proven soil benefits than on whether farmers can manage the agronomic and economic transition. This chapter examines equipment, residue management, weed and pest control, fertility and the economics of conversion.</p>

<h3>Equipment and Residue Management</h3>
<p>No-till planters and drills require adequate weight and down-pressure, residue-cutting coulters, appropriately set disc openers and effective closing systems to achieve uniform emergence in untilled, residue-covered soil. Residue management begins at harvest with uniform chopping and spreading. High-residue systems (for example, corn following corn) are most challenging, which is one reason no-till works best within diverse rotations.</p>
<ul>
<li><strong>Residue management:</strong> handling crop residue from harvest to planting to ensure good seeding and soil cover</li>
<li><strong>Integrated weed management:</strong> combining cultural, mechanical, biological and chemical tactics against weeds</li>
<li><strong>Soil structure:</strong> the arrangement of soil particles and pores that affects water, air and root movement</li>
<li><strong>Stratification:</strong> the concentration of nutrients and organic matter near the soil surface under no-till</li>
<li><strong>Partial budget:</strong> an economic analysis comparing only the costs and returns that change with a decision</li>
</ul>

<h3>Weed and Pest Dynamics</h3>
<p>Weed communities shift under no-till toward small-seeded annuals and perennials that were once controlled by tillage. Herbicide dependence increases, and repeated use of glyphosate has selected for resistant populations. Integrated weed management uses diverse rotations, cover crops, competitive crop stands, narrow rows and rotation of herbicide modes of action. Residue can increase slug and some disease pressure but supports carabid beetles and other predators.</p>

<h3>Fertility and Soil Changes</h3>
<p>No-till causes stratification of phosphorus, potassium and organic carbon near the surface. Early years may see nitrogen immobilisation, addressed by starter fertiliser. Over time, improved aggregation, macropore continuity and earthworm activity enhance infiltration and reduce runoff.</p>

<h3>Yield and Economics</h3>
<p>Meta-analyses report average no-till yields slightly below conventional tillage, with smaller or no penalties in dry climates and when combined with residue retention and rotation, and larger penalties in humid, cool regions. Partial budgets typically show savings in fuel, labour and machinery that offset modest yield losses, though transition-year risks and herbicide costs matter.</p>

<h3>Learning From Other Farmers</h3>
<p>Studies of adoption consistently find that seeing no-till succeed on a neighbour's farm, joining farmer networks and getting hands-on advice shape decisions more than published research alone. Field days, on-farm trials and mentoring help farmers adapt general principles to their own soils and equipment.</p>
`,
        GRADUATE: `
<h2>The No-Till Transition: Agronomic Trade-offs and Farm Economics</h2>
<p>No-till is often promoted as a cornerstone of conservation and regenerative agriculture, yet its performance is context-dependent and its transition can impose costs and risks on farmers. Understanding where and how no-till succeeds, and what trade-offs accompany it, is essential for advisers, researchers and policymakers. This chapter analyses agronomic trade-offs, herbicide dependence, risk and the economics of adoption.</p>

<h3>Context-Dependent Agronomic Performance</h3>
<p>Global meta-analyses find that no-till alone reduces yields on average, but that combining it with residue retention and crop rotation, the three principles of conservation agriculture, narrows the gap substantially. Yield responses are positive in rainfed, water-limited environments and negative in humid, cool or poorly drained soils. Soil texture, drainage and climate thus determine where no-till is agronomically favourable and where strip-till or reduced tillage may be better.</p>
<ul>
<li><strong>Conservation agriculture:</strong> a system combining minimal soil disturbance, permanent soil cover and crop diversification</li>
<li><strong>Mode of action:</strong> the biochemical mechanism by which a herbicide kills a plant</li>
<li><strong>Transition cost:</strong> temporary losses or expenses incurred while switching practices</li>
<li><strong>Cost-share programme:</strong> a public programme that pays part of the cost of adopting conservation practices</li>
<li><strong>Risk aversion:</strong> a preference for more certain outcomes, even at lower expected returns</li>
</ul>

<h3>Herbicide Dependence and Resistance</h3>
<p>No-till expanded alongside glyphosate-tolerant crops, increasing reliance on few herbicide modes of action. Resistant weeds now affect large areas, leading some farmers to return to tillage. Sustainable no-till therefore depends on integrated weed management, including diverse rotations, cover crops, harvest weed seed control and herbicide mixtures with multiple effective modes of action. Roller-crimped cover crops in organic no-till offer herbicide-free options but require precise timing and high biomass.</p>

<h3>Risk and the Transition Period</h3>
<p>Transition costs include equipment modification, learning, possible yield dips and changes in nitrogen management. Risk-averse farmers may delay adoption even when long-run returns are favourable. Cost-share programmes, technical assistance, peer learning networks and crop insurance rules that do not penalise conservation practices reduce barriers.</p>

<h3>Economics and Policy</h3>
<p>Farm-level analyses often show no-till profitable through reduced fuel, labour and machinery costs. Policy debates centre on whether payments should support adoption, which may be privately profitable, or continued practice, given evidence that some farmers periodically till no-till fields, undermining soil carbon gains.</p>

<h3>Advisory Practice</h3>
<p>Effective advisers help farmers sequence the transition: starting on suitable fields, upgrading the planter, planning residue management at harvest, adding cover crops gradually and setting up simple on-farm comparisons to track results. Matching advice to local soils and weather, and sharing data from farmer networks, reduces the trial-and-error costs that make early years risky. Monitoring infiltration, earthworms and aggregate stability gives farmers early evidence of soil improvement before yield gains appear.</p>
`,
        PHD: `
<h2>Research Frontiers in No-Till Adoption and Performance</h2>
<p>No-till has been studied for decades, yet major debates remain about its yield effects, its contribution to soil carbon sequestration, and the sustainability of herbicide-reliant systems. Adoption patterns also raise questions about permanence, policy design and the measurement of practice change. This chapter surveys these research frontiers.</p>

<h3>Yield Meta-Analyses and Heterogeneity</h3>
<p>Large meta-analyses compiling thousands of paired observations show average no-till yield penalties that vary by crop, climate, aridity and management. Methodological questions include publication bias, heterogeneity across experiments and the representativeness of research stations. Machine-learning analyses of meta-analytic data aim to predict where no-till is likely to succeed, while on-farm experiments using precision agriculture data offer larger, more representative samples.</p>
<ul>
<li><strong>Meta-analysis:</strong> a statistical synthesis of results from many independent studies</li>
<li><strong>Soil organic carbon redistribution:</strong> movement of carbon within the soil profile rather than net gain</li>
<li><strong>Equivalent soil mass:</strong> a method comparing carbon stocks on the same mass of soil to avoid bulk density bias</li>
<li><strong>Permanence:</strong> how long a climate benefit such as stored carbon lasts before it may be reversed</li>
<li><strong>Remote sensing of tillage:</strong> using satellite data to detect tillage practices and residue cover</li>
</ul>

<h3>The Soil Carbon Debate</h3>
<p>Early studies suggested no-till sequesters substantial carbon, but many sampled only shallow depths. Deeper sampling shows that no-till often redistributes carbon toward the surface rather than increasing total stocks, with gains in topsoil partially offset by losses deeper down. Comparisons on an equivalent soil mass basis and full-profile sampling have revised estimates downward. Nitrous oxide emissions may increase in some no-till systems, further complicating climate accounting. These findings bear on carbon market protocols that credit tillage changes.</p>

<h3>Herbicide Resistance and System Sustainability</h3>
<p>Herbicide-resistant weeds threaten the viability of chemically managed no-till. Research on integrated weed management, harvest weed seed control, cover-crop-based systems and robotic weed control explores pathways to reduce chemical dependence. Evolutionary models of resistance inform herbicide stewardship strategies.</p>

<h3>Adoption, Permanence and Measurement</h3>
<p>Studies using remote sensing reveal that many fields alternate between no-till and tillage, challenging assumptions of permanence in policy and carbon accounting. Behavioural research examines how risk, information, social networks and policy incentives drive adoption and continuation. Remote sensing of tillage and residue provides scalable monitoring but requires validation against field observations.</p>

<h3>Integrated Assessment</h3>
<p>Evaluating no-till's overall contribution requires integrating yield, soil carbon, nitrous oxide, erosion, water quality, herbicide use and farm economics. Multi-objective analyses suggest that no-till delivers clearer benefits for erosion and water conservation than for climate mitigation, underscoring the importance of clear goals in policy design.</p>

<h3>Methodological Directions</h3>
<p>Long-term experiments with full-profile soil sampling, paired with farm-scale data from yield monitors and satellites, could reconcile station results with real-world outcomes. Coordinated networks using shared protocols would make comparisons across climates more robust and reduce the publication bias that affects current syntheses.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ra-nt2-q1',
      question: {
        ELEMENTARY: 'What is no-till farming?',
        MIDDLE_SCHOOL: 'What is the biggest equipment change when switching to no-till?',
        HIGH_SCHOOL: 'What do row cleaners on a planter do?',
        UNDERGRADUATE: 'Why do high-residue systems like corn following corn make no-till harder?',
        GRADUATE: 'What are the three principles of conservation agriculture?',
        PHD: 'What did deeper soil sampling reveal about no-till and soil carbon?',
      },
      options: {
        ELEMENTARY: ['Planting only in winter', 'Ploughing twice a year', 'Growing plants in water', 'Planting crops without ploughing the soil'],
        MIDDLE_SCHOOL: ['A bigger barn', 'A new tractor colour', 'A heavier plough', 'The planter'],
        HIGH_SCHOOL: ['Wash the seeds', 'Plant extra rows', 'Spray herbicide', 'Clear residue from the row so soil warms and dries faster'],
        UNDERGRADUATE: ['Corn makes no residue', 'Residue is too thin', 'Corn cannot be planted twice', 'Heavy residue makes seeding and emergence difficult'],
        GRADUATE: ['Ploughing, spraying and irrigation', 'Monoculture, tillage and fallow', 'Fertiliser, pesticide and seed', 'Minimal disturbance, permanent cover and crop diversification'],
        PHD: ['No-till always doubles carbon', 'Carbon disappears completely', 'Depth does not matter', 'No-till often redistributes carbon toward the surface rather than increasing total stocks'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'No-till means planting without ploughing the soil.',
        MIDDLE_SCHOOL: 'A no-till planter must cut through residue and place seed correctly.',
        HIGH_SCHOOL: 'Row cleaners move residue off the row so soil warms and dries.',
        UNDERGRADUATE: 'Thick residue interferes with planting and seedling emergence.',
        GRADUATE: 'Conservation agriculture combines minimal disturbance, soil cover and rotation.',
        PHD: 'Deeper sampling shows carbon is often moved toward the surface, not added overall.',
      },
    },
    {
      id: 'ra-nt2-q2',
      question: {
        ELEMENTARY: 'How do cover crops help with weeds?',
        MIDDLE_SCHOOL: 'What does a roller-crimper do?',
        HIGH_SCHOOL: 'Why is integrated weed management essential in no-till?',
        UNDERGRADUATE: 'How do weed communities tend to shift under no-till?',
        GRADUATE: 'Why have some farmers returned to tillage?',
        PHD: 'Which method avoids bulk density bias when comparing soil carbon stocks?',
      },
      options: {
        ELEMENTARY: ['They feed the weeds', 'They make weeds taller', 'They crowd weeds out', 'They paint the weeds'],
        MIDDLE_SCHOOL: ['Rolls hay bales', 'Waters the crops', 'Flattens cover crops into a weed-blocking mat', 'Plants seeds deeper'],
        HIGH_SCHOOL: ['Weeds disappear with no-till', 'Herbicides are banned', 'Overreliance on one herbicide has led to resistant weeds', 'Weeds help crops'],
        UNDERGRADUATE: ['Toward large-seeded annuals only', 'No change at all', 'Toward small-seeded annuals and perennials', 'Weeds disappear entirely'],
        GRADUATE: ['Tillage is cheaper', 'Ploughs became fashionable', 'Herbicide-resistant weeds became hard to control', 'Soil carbon became too high'],
        PHD: ['Shallow sampling only', 'Volume-based sampling', 'Equivalent soil mass', 'Visual estimation'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Cover crops fill the space so weeds have no room.',
        MIDDLE_SCHOOL: 'A roller-crimper flattens cover crops into a mat that blocks weed light.',
        HIGH_SCHOOL: 'Relying on one herbicide caused resistance, so several tactics are needed.',
        UNDERGRADUATE: 'Without tillage, small-seeded annuals and perennials become more common.',
        GRADUATE: 'Resistant weeds pushed some farmers back to tillage.',
        PHD: 'Equivalent soil mass compares the same mass of soil, avoiding bulk density errors.',
      },
    },
    {
      id: 'ra-nt2-q3',
      question: {
        ELEMENTARY: 'Why might crops grow a little less in the first few years of no-till?',
        MIDDLE_SCHOOL: 'Why can nitrogen be tied up in early no-till years?',
        HIGH_SCHOOL: 'Where do no-till yields tend to suffer most?',
        UNDERGRADUATE: 'What is nutrient stratification under no-till?',
        GRADUATE: 'Why do risk-averse farmers sometimes delay no-till adoption?',
        PHD: 'What do remote sensing studies reveal about no-till permanence?',
      },
      options: {
        ELEMENTARY: ['The soil is still changing and the helpers are moving back in', 'Farmers forget to plant', 'The sun stops shining', 'Weeds grow faster than ever'],
        MIDDLE_SCHOOL: ['Microbes use it while breaking down residue', 'It washes into the sky', 'Plants refuse it', 'It turns into salt'],
        HIGH_SCHOOL: ['Cold, wet, poorly drained soils', 'Dry climates', 'Sandy deserts only', 'Every field equally'],
        UNDERGRADUATE: ['Concentration of nutrients and organic matter near the surface', 'Nutrients mixing evenly', 'Nutrients leaving the field', 'A type of fertiliser'],
        GRADUATE: ['Transition costs and uncertain outcomes, even with good long-run returns', 'No-till is illegal', 'Planters are unavailable', 'Yields always double'],
        PHD: ['Many fields alternate between no-till and tillage', 'All fields stay no-till forever', 'Satellites cannot see fields', 'Tillage has disappeared'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'It takes time for worms and soil helpers to build up again.',
        MIDDLE_SCHOOL: 'Microbes break down residue and temporarily use nitrogen.',
        HIGH_SCHOOL: 'Cold, wet soils under residue slow planting and growth.',
        UNDERGRADUATE: 'Without mixing, nutrients and carbon build up near the surface.',
        GRADUATE: 'Uncertain transition costs deter farmers who prefer certainty.',
        PHD: 'Satellite data show many fields switch back and forth, challenging permanence.',
      },
    },
    {
      id: 'ra-nt2-q4',
      question: {
        ELEMENTARY: 'What does a no-till planter do?',
        MIDDLE_SCHOOL: 'What is a coulter?',
        HIGH_SCHOOL: 'What is strip-till?',
        UNDERGRADUATE: 'What is a partial budget?',
        GRADUATE: 'What makes organic no-till with roller-crimped cover crops challenging?',
        PHD: 'Why might nitrous oxide complicate no-till climate accounting?',
      },
      options: {
        ELEMENTARY: ['Digs deep holes everywhere', 'Slices a thin slot and drops in a seed', 'Waters the field', 'Picks the crops'],
        MIDDLE_SCHOOL: ['A type of seed', 'A sharp round blade that slices through residue', 'A weed', 'A tractor tyre'],
        HIGH_SCHOOL: ['Tilling the whole field twice', 'Tilling only narrow strips where crops are planted', 'Removing all residue', 'Burning the field'],
        UNDERGRADUATE: ['A complete farm accounting statement', 'A comparison of only the costs and returns that change with a decision', 'A seed budget', 'A weather forecast'],
        GRADUATE: ['It needs no planning', 'It requires precise timing and high cover crop biomass', 'Cover crops are illegal', 'It always fails'],
        PHD: ['No-till removes all nitrous oxide', 'Emissions may increase in some no-till systems', 'Nitrous oxide is not a greenhouse gas', 'It only affects water'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'It cuts a thin slot through the cover and places a seed.',
        MIDDLE_SCHOOL: 'A coulter is a sharp disc that cuts residue ahead of the seed.',
        HIGH_SCHOOL: 'Strip-till only tills narrow strips for planting.',
        UNDERGRADUATE: 'A partial budget includes only costs and returns that change.',
        GRADUATE: 'Rolling must happen at the right growth stage with enough biomass to suppress weeds.',
        PHD: 'Higher nitrous oxide in some systems can offset carbon gains.',
      },
    },
    {
      id: 'ra-nt2-q5',
      question: {
        ELEMENTARY: 'What helps the soil get spongier over time with no-till?',
        MIDDLE_SCHOOL: 'Which fields should farmers try no-till on first?',
        HIGH_SCHOOL: 'Why is no-till often profitable even with a small yield dip?',
        UNDERGRADUATE: 'Where are no-till yield penalties smallest?',
        GRADUATE: 'What policy debate concerns payments for no-till?',
        PHD: 'Which benefits does multi-objective analysis find no-till delivers most clearly?',
      },
      options: {
        ELEMENTARY: ['More ploughing', 'Rocks', 'Worms and tiny soil helpers', 'Plastic sheets'],
        MIDDLE_SCHOOL: ['The wettest fields', 'Fields under water', 'Well-drained fields', 'Fields with no soil'],
        HIGH_SCHOOL: ['Prices for no-till crops are higher', 'It needs no seed', 'Fuel, labour and machinery savings offset it', 'Governments buy all the crops'],
        UNDERGRADUATE: ['In cold, wet soils', 'In flooded fields', 'In dry climates with residue retention and rotation', 'Everywhere equally'],
        GRADUATE: ['Whether to ban tillage', 'Whether to tax seeds', 'Whether to pay for adoption or for continued practice', 'Whether to stop farming'],
        PHD: ['Climate mitigation only', 'Herbicide reduction', 'Erosion and water conservation', 'Higher yields everywhere'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Worms and soil helpers make tunnels that make soil spongy.',
        MIDDLE_SCHOOL: 'Well-drained fields warm and dry faster, so no-till works best there first.',
        HIGH_SCHOOL: 'Saving fuel, labour and machinery costs often makes up for slightly lower yields.',
        UNDERGRADUATE: 'Dry climates with residue and rotation show the smallest penalties.',
        GRADUATE: 'Policymakers debate paying for adoption versus paying for continued practice.',
        PHD: 'No-till clearly reduces erosion and conserves water; climate benefits are less certain.',
      },
    },
  ],
}

export default expansion
