import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'green-building-certifications',
  lessons: [
    {
      id: 'gb-cert-1',
      title: 'Green Awards for Buildings',
      content: {
        ELEMENTARY: `
<h2>Gold Stars for Green Buildings</h2>
<p>Have you ever earned a sticker or a badge for doing something well? Buildings can earn badges too! When a building is designed to save energy, save water and keep people healthy, experts can check it and give it a special award called a <em>certification</em>.</p>

<h3>How Does a Building Earn a Badge?</h3>
<p>A building team follows a list of green ideas, a bit like a checklist for a school project. Every good idea earns points. Using less water earns points. Letting in lots of sunlight earns points. Having bike racks so people can ride instead of drive earns points too. The more points, the higher the award.</p>
<ul>
<li><strong>Certification:</strong> an official badge that shows a building passed a green test</li>
<li><strong>Points:</strong> little rewards a building earns for each green idea it uses</li>
<li><strong>Checklist:</strong> a list of things to do so nothing important gets forgotten</li>
<li><strong>Inspector:</strong> an expert who checks that the building really did what it promised</li>
<li><strong>Rating system:</strong> a set of rules that explains how buildings earn points and badges</li>
</ul>

<h3>Medals Like the Olympics</h3>
<p>One famous rating system is called LEED. It gives out awards a little like medals: Certified, Silver, Gold and Platinum. Platinum is the very top! Other countries have their own systems with their own names, but they all want the same thing: healthier, greener buildings.</p>

<h3>What Do Inspectors Look For?</h3>
<ol>
<li>Does the building use less energy for lights, heating and cooling?</li>
<li>Does it save water with special taps and toilets?</li>
<li>Is the air inside fresh and healthy to breathe?</li>
<li>Were the building materials chosen carefully?</li>
<li>Is it easy to walk, bike or take the bus there?</li>
</ol>

<h3>Look Around!</h3>
<p>Next time you visit a library, museum or office, look near the entrance. Sometimes there is a plaque that shows the building's green award. You can also make your own checklist for your classroom: are lights off when not needed? Is there a recycling bin? Give your room a green star!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Buildings Earn Green Certifications</h2>
<p>Anyone can say a building is green, but how do we know for sure? Green building certifications answer that question. They are rating systems created by expert organizations that set clear rules, award points for sustainable features, and use independent reviewers to check the work. A certified building has proven its green claims to someone outside the project.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Rating system:</strong> a structured set of rules for scoring how sustainable a building is</li>
<li><strong>LEED:</strong> Leadership in Energy and Environmental Design, a widely used green building rating system</li>
<li><strong>BREEAM:</strong> a green building assessment method that started in the United Kingdom</li>
<li><strong>Prerequisite:</strong> a required step every building must complete before earning any points</li>
<li><strong>Credit:</strong> an optional green strategy that earns points toward certification</li>
<li><strong>Third-party review:</strong> checking done by an independent organization, not the building owner</li>
</ul>

<h3>The Scoring Idea</h3>
<p>Most rating systems divide sustainability into categories. A building must meet every prerequisite, then it chooses which credits to pursue. Points from all credits are added up, and the total decides the level of certification.</p>
<table>
<thead><tr><th>Category</th><th>Example of a credit</th></tr></thead>
<tbody>
<tr><td>Energy</td><td>Efficient heating, cooling and lighting, or solar panels</td></tr>
<tr><td>Water</td><td>Low-flow fixtures and plants that need little watering</td></tr>
<tr><td>Materials</td><td>Recycled content or locally sourced products</td></tr>
<tr><td>Indoor environment</td><td>Fresh air, daylight and low-emitting paints</td></tr>
<tr><td>Location and transport</td><td>Near public transit, with bike storage</td></tr>
</tbody>
</table>

<h3>Different Systems Around the World</h3>
<p>LEED is used in many countries. BREEAM is common in the United Kingdom and Europe. Other places have their own systems, such as Green Star in Australia. Some certifications focus on one goal: Passive House focuses on very low heating and cooling needs, and WELL focuses on human health.</p>

<h3>Why Certify?</h3>
<p>Certification gives owners a clear target, helps teams work together and lets tenants and buyers compare buildings. It can also make a building more attractive to people who want healthy, efficient spaces. The main downside is that certification takes time, paperwork and fees.</p>
`,
        HIGH_SCHOOL: `
<h2>LEED, BREEAM and Other Rating Systems</h2>
<p>Green building rating systems turn the broad idea of sustainability into specific, measurable requirements. They emerged in the 1990s as voluntary tools and have since shaped design practice, real estate markets and even government policy. Understanding how they work, and where they fall short, helps you judge what a green label really means.</p>

<h3>How Rating Systems Work</h3>
<p>Most systems share a common structure: mandatory prerequisites, optional credits grouped into categories, a point total and certification levels. Project teams submit documentation, such as energy models, product data and commissioning reports, which reviewers check before awarding the rating.</p>
<ul>
<li><strong>Prerequisite:</strong> a mandatory requirement that every certified project must meet</li>
<li><strong>Credit:</strong> an optional strategy that earns points within a rating category</li>
<li><strong>Energy modeling:</strong> computer simulation used to predict a building's energy use during design</li>
<li><strong>Commissioning:</strong> a quality process that checks building systems are installed and working as designed</li>
<li><strong>Design-phase rating:</strong> a certification based on plans and predictions rather than measured operation</li>
<li><strong>Operational rating:</strong> a certification based on measured performance of an occupied building</li>
</ul>

<h3>Comparing Major Systems</h3>
<table>
<thead><tr><th>System</th><th>Origin</th><th>Focus</th><th>Rating levels</th></tr></thead>
<tbody>
<tr><td>LEED</td><td>United States</td><td>Broad sustainability</td><td>Certified, Silver, Gold, Platinum</td></tr>
<tr><td>BREEAM</td><td>United Kingdom</td><td>Broad sustainability</td><td>Pass, Good, Very Good, Excellent, Outstanding</td></tr>
<tr><td>Passive House</td><td>Germany</td><td>Very low heating and cooling demand</td><td>Meets the standard or not</td></tr>
<tr><td>WELL</td><td>United States</td><td>Occupant health and wellbeing</td><td>Tiered levels</td></tr>
<tr><td>ENERGY STAR for buildings</td><td>United States</td><td>Measured energy performance</td><td>Score compared with similar buildings</td></tr>
</tbody>
</table>

<h3>Strengths</h3>
<ul>
<li>Shared language and targets for owners, designers and builders.</li>
<li>Third-party verification reduces exaggerated green claims.</li>
<li>Market recognition helps buyers and tenants compare buildings.</li>
<li>Rating systems are updated over time, raising the bar for the industry.</li>
</ul>

<h3>Criticisms and Trade-offs</h3>
<p>Critics point out that some points can be earned with relatively cheap or easy credits, sometimes called point chasing. A design-phase rating predicts performance but does not guarantee it; a building may use more energy than modeled if it is operated poorly. Certification costs and paperwork can be a burden for small projects. In response, newer versions put more weight on energy and carbon and add operational ratings based on real data.</p>

<h3>Real-World Use</h3>
<p>Many governments require their own new buildings to reach a certain rating, and some cities offer faster permits or density bonuses for certified projects. Corporate tenants often seek certified offices to meet sustainability goals.</p>
`,
        UNDERGRADUATE: `
<h2>Certification Requirements, Costs and Market Impacts</h2>
<p>Green building certifications function as both technical standards and market signals. For a project team, they are a framework of requirements and documentation; for the market, they are a label that conveys information about quality that is otherwise hard to observe. Analyzing certification means looking at what credits demand, what certification costs and how labels affect value and behavior.</p>

<h3>Anatomy of a Rating System</h3>
<p>Broad rating systems weight categories differently, and those weights express value judgments. A system that awards many points for energy and carbon pushes teams toward deep efficiency; one that spreads points widely allows certification with weaker energy performance. Reviewing the weighting is the first step in comparing systems.</p>
<ul>
<li><strong>Credit weighting:</strong> the number of points assigned to each strategy, reflecting the priorities of the rating system</li>
<li><strong>Information asymmetry:</strong> a situation where sellers know more about a product's quality than buyers do</li>
<li><strong>Market signal:</strong> a visible label or price that communicates information to buyers and investors</li>
<li><strong>Soft costs:</strong> expenses for consultants, documentation, modeling and fees rather than physical construction</li>
<li><strong>Green premium:</strong> higher rent, sale price or occupancy associated with certified buildings</li>
<li><strong>Recertification:</strong> repeating an assessment after some years to show continued performance</li>
</ul>

<h3>Costs of Certification</h3>
<table>
<thead><tr><th>Cost type</th><th>Examples</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Registration and review fees</td><td>Charges paid to the certifying body</td><td>Scale with project size</td></tr>
<tr><td>Consulting and documentation</td><td>Sustainability consultants, energy models</td><td>Often the largest soft cost</td></tr>
<tr><td>Commissioning</td><td>Independent testing of systems</td><td>Usually pays back through fewer problems</td></tr>
<tr><td>Hard cost premium</td><td>Better equipment or materials</td><td>Small when goals are set early, larger when added late</td></tr>
</tbody>
</table>
<p>A common finding in practice is that the cost premium for green design is modest when targets are set at the start of design and grows when green features are bolted on late.</p>

<h3>What Drives Demand</h3>
<ol>
<li>Tenant preferences, especially among large corporate occupiers with sustainability goals.</li>
<li>Public policy, including government building mandates and local incentives.</li>
<li>Investor and lender requirements linked to environmental, social and governance criteria.</li>
<li>Operating cost savings and perceived lower risk of obsolescence.</li>
</ol>

<h3>Market Impacts</h3>
<p>Hedonic pricing studies, which separate the effect of certification from location, age and size, have frequently found rental and sale premiums for certified commercial buildings, though estimates vary by market and method. Interpreting these results requires care: buildings that seek certification may also be better managed, which can inflate apparent effects.</p>

<h3>A Method for Comparing Systems</h3>
<ol>
<li>List the project's priorities, such as carbon, health or water.</li>
<li>Compare how heavily each system weights those priorities.</li>
<li>Check whether certification requires measured performance or only design predictions.</li>
<li>Estimate soft and hard costs, and recognition in the target market.</li>
</ol>
`,
        GRADUATE: `
<h2>Certification Effectiveness, Policy Integration and Market Transformation</h2>
<p>Voluntary rating systems were designed to transform markets by rewarding leaders and pulling industry practice upward. Decades later, the questions are whether they deliver real environmental outcomes, how they interact with codes and public policy, and whether their model of voluntary, design-based labeling suits a period demanding rapid, measurable decarbonization.</p>

<h3>The Market Transformation Logic</h3>
<p>The theory holds that voluntary labels let leading firms differentiate, which builds supply chains and skills, which lowers costs, which allows codes to adopt practices that were once premium. Many strategies once found only in certified buildings, such as commissioning or low-emitting materials, now appear in codes in some places.</p>
<ul>
<li><strong>Market transformation:</strong> lasting change in market practices so that efficient options become the norm</li>
<li><strong>Reach code:</strong> an optional, more stringent code that local governments can adopt above the base code</li>
<li><strong>Performance gap:</strong> the difference between predicted energy use at design and measured use in operation</li>
<li><strong>Greenwashing:</strong> misleading claims that make a product or building seem more sustainable than it is</li>
<li><strong>Disclosure policy:</strong> a rule requiring building owners to report energy use or ratings publicly</li>
<li><strong>Additionality:</strong> whether an outcome occurred because of an intervention rather than happening anyway</li>
</ul>

<h3>Evaluating Effectiveness</h3>
<p>Studies comparing certified buildings with uncertified peers have produced mixed results. On average, certified buildings often use somewhat less energy, but variation is large and some certified buildings perform worse than comparable conventional buildings. This led rating bodies to strengthen energy prerequisites, require metering and data sharing, and develop operational and performance-based pathways.</p>

<h3>Policy Integration</h3>
<table>
<thead><tr><th>Policy use</th><th>Example approach</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>Public procurement</td><td>Requiring government buildings to reach a rating level</td><td>Strong signal, but needs verification of operation</td></tr>
<tr><td>Incentives</td><td>Expedited permits, density bonuses, tax relief</td><td>Risk of rewarding projects that would certify anyway</td></tr>
<tr><td>Code alignment</td><td>Using rating credits as templates for codes</td><td>Codes need enforceable, simple requirements</td></tr>
<tr><td>Disclosure</td><td>Publishing ratings or energy scores</td><td>Measured scores capture operation better than design labels</td></tr>
</tbody>
</table>
<p>Embedding a private standard in law raises governance questions: who controls updates, how public input occurs and whether fees create barriers.</p>

<h3>Equity and Access</h3>
<p>Certification is concentrated in high-value commercial and institutional buildings in large cities. Affordable housing projects may struggle with soft costs, although some funders require or reward certification. Health-focused ratings raise the question of whether wellbeing benefits flow mainly to premium office tenants rather than to residents of lower-quality housing.</p>

<h3>Institutional Barriers</h3>
<ul>
<li>Design-based ratings do not follow buildings into operation unless recertification is required.</li>
<li>Proliferation of labels creates confusion and may dilute meaning.</li>
<li>Split responsibilities between designers, contractors and operators weaken accountability.</li>
</ul>

<h3>An Evaluation Framework</h3>
<p>To judge a certification program, examine its outcome metrics, whether it requires measured data, its verification rigor, its additionality and its distributional reach across building types and communities.</p>
`,
        PHD: `
<h2>Research on Certification Outcomes and Next-Generation Frameworks</h2>
<p>Certification schemes are now an object of empirical and theoretical research. Scholars ask whether certified buildings perform better, why outcomes vary, how labels affect asset prices and behavior, and what a next generation of frameworks grounded in measured carbon and health outcomes should look like. This lesson surveys methods, debates and open directions.</p>

<h3>Methodological Challenges</h3>
<p>Estimating the causal effect of certification is difficult because certification is not randomly assigned. Owners who pursue it may differ in management quality, tenant mix or capital access. Researchers use matching, hedonic regression with rich controls, fixed effects, and natural experiments created by policy changes to address selection.</p>
<ul>
<li><strong>Selection effect:</strong> bias arising because buildings that seek certification differ systematically from those that do not</li>
<li><strong>Propensity score matching:</strong> pairing certified and uncertified buildings with similar predicted likelihood of certification</li>
<li><strong>Hedonic regression:</strong> a statistical method that estimates how individual attributes contribute to price</li>
<li><strong>Signaling theory:</strong> the idea that labels communicate hidden quality and may be valued apart from actual performance</li>
<li><strong>Whole-life carbon:</strong> emissions over a building's full life, including materials, construction, operation and end of life</li>
<li><strong>Outcome-based certification:</strong> a framework that awards ratings based on measured results rather than design features</li>
</ul>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Do certified buildings save energy?</td><td>Results depend on comparison groups, metrics such as site or source energy, and normalization</td></tr>
<tr><td>What explains price premiums?</td><td>Premiums may reflect lower costs, signaling, prestige or unobserved quality</td></tr>
<tr><td>Are points comparable across categories?</td><td>Weighting combines incommensurable impacts using expert judgment</td></tr>
<tr><td>Do labels drive innovation or conformity?</td><td>Checklists can spread good practice but also encourage minimum compliance</td></tr>
</tbody>
</table>

<h3>Comparing Systems Rigorously</h3>
<p>Cross-system comparison studies map credits onto common impact categories and test how the same building would score under different schemes. Such work reveals that systems weight energy, materials and health quite differently, and that a high rating in one system does not guarantee a high rating in another. Life cycle assessment offers a more consistent basis but requires data and methodological choices, such as system boundaries and biogenic carbon treatment, that are themselves debated.</p>

<h3>Next-Generation Frameworks</h3>
<p>Emerging directions include continuous rating based on streamed meter data, whole-life carbon targets, alignment with science-based decarbonization trajectories for building types, and integration with financial disclosure. These approaches shift emphasis from what was designed to what is delivered, but they raise questions about data quality, privacy, comparability across climates and how to treat occupant behavior.</p>

<h3>Behavioral and Institutional Research</h3>
<p>Research also examines how certification changes professional practice, procurement and team coordination. Qualitative studies suggest certification can structure collaboration and early goal-setting, while critics argue documentation burdens can crowd out design thinking. Institutional theory frames rating systems as private governance that gains authority through adoption by governments and investors.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal studies linking certification to measured energy, carbon and health outcomes over many years.</li>
<li>Causal designs that separate signaling value from performance value in asset prices.</li>
<li>Harmonized whole-life carbon methods that can underpin comparable ratings.</li>
<li>Evaluation of continuous, data-driven ratings and their effects on operators.</li>
<li>Research on how certification can reach housing and smaller buildings equitably.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbcertq1',
      question: {
        ELEMENTARY: "What can a green building earn?",
        MIDDLE_SCHOOL: "What is LEED?",
        HIGH_SCHOOL: "What are the LEED certification levels?",
        UNDERGRADUATE: "Which factors drive demand for green certification?",
        GRADUATE: "What do studies comparing certified and uncertified buildings generally find about energy use?",
        PHD: "Why is estimating the causal effect of certification difficult?",
      },
      options: {
        ELEMENTARY: ["A special badge showing it is green", "A bag of gold coins", "A new coat of paint", "Nothing at all"],
        MIDDLE_SCHOOL: ["A widely used green building rating system", "A type of plant", "A building material", "An architect"],
        HIGH_SCHOOL: ["Certified, Silver, Gold, Platinum", "A, B, C, D", "First, Second, Third", "Good, Better, Best"],
        UNDERGRADUATE: ["Tenant preferences, public policy and investor requirements", "There is no demand at all", "Only the color of the building", "Only the number of floors"],
        GRADUATE: ["Somewhat lower use on average, with large variation and some underperformers", "Every certified building uses no energy", "Certified buildings always use more energy", "No studies have ever compared them"],
        PHD: ["Certification is not randomly assigned, so selection effects can bias results", "Certified buildings cannot be measured", "There are no uncertified buildings", "Energy meters do not exist in certified buildings"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Green buildings can earn certifications, which are like badges showing they help the environment.",
        MIDDLE_SCHOOL: "LEED stands for Leadership in Energy and Environmental Design and is a widely used rating system.",
        HIGH_SCHOOL: "LEED awards four levels based on points earned: Certified, Silver, Gold and Platinum.",
        UNDERGRADUATE: "Tenants, policies such as government mandates, and investor criteria all push owners to certify.",
        GRADUATE: "Certified buildings often perform somewhat better on average, but results vary widely and some perform worse.",
        PHD: "Owners who certify may differ in management and resources, so simple comparisons confuse selection with effect.",
      },
    },
    {
      id: 'gbcertq2',
      question: {
        ELEMENTARY: "Who checks that a building really earned its green award?",
        MIDDLE_SCHOOL: "What is a prerequisite in a rating system?",
        HIGH_SCHOOL: "What is the difference between a design-phase rating and an operational rating?",
        UNDERGRADUATE: "Why does credit weighting matter when comparing rating systems?",
        GRADUATE: "What is a reach code?",
        PHD: "What is outcome-based certification?",
      },
      options: {
        ELEMENTARY: ["The building's pet cat", "Nobody checks", "An inspector who is an expert", "The mail carrier"],
        MIDDLE_SCHOOL: ["An optional bonus point", "The final award level", "A required step every building must complete", "A type of window"],
        HIGH_SCHOOL: ["They are exactly the same thing", "Design ratings are only for houses", "Design ratings use predictions while operational ratings use measured performance", "Operational ratings only look at paint colors"],
        UNDERGRADUATE: ["Weighting sets how many points each strategy earns, revealing system priorities", "Weighting measures how heavy the building is", "Weighting only affects fees", "Weighting is the same in every system"],
        GRADUATE: ["A code that lowers efficiency standards", "A rule about tall reaching cranes", "An optional, stricter code local governments can adopt above the base code", "A federal ban on certification"],
        PHD: ["Certification based only on the architect's reputation", "Certification awarded for listing design features", "Certification based on measured results rather than design features", "Certification given to every new building automatically"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "An inspector checks the building so everyone can trust that it really is green.",
        MIDDLE_SCHOOL: "Prerequisites are must-do steps; a building cannot be certified without meeting all of them.",
        HIGH_SCHOOL: "Design ratings rely on plans and models, while operational ratings use real measured data.",
        UNDERGRADUATE: "How points are assigned shows what a system values, such as energy, health or materials.",
        GRADUATE: "Reach codes let local governments adopt stricter requirements than the base code.",
        PHD: "Outcome-based frameworks reward what a building actually delivers, such as measured energy or carbon.",
      },
    },
    {
      id: 'gbcertq3',
      question: {
        ELEMENTARY: "What is the very top award in the LEED system?",
        MIDDLE_SCHOOL: "Which certification focuses mainly on human health?",
        HIGH_SCHOOL: "Which rating system focuses on very low heating and cooling demand?",
        UNDERGRADUATE: "When is the cost premium for green design usually smallest?",
        GRADUATE: "What does the performance gap describe?",
        PHD: "What does signaling theory suggest about green labels?",
      },
      options: {
        ELEMENTARY: ["Bronze", "Platinum", "Paper", "Plastic"],
        MIDDLE_SCHOOL: ["Green Star", "WELL", "BREEAM", "LEED Platinum"],
        HIGH_SCHOOL: ["ENERGY STAR", "Passive House", "BREEAM Outstanding", "WELL"],
        UNDERGRADUATE: ["When green features are added after construction", "When targets are set at the start of design", "When no energy model is used", "When the building is demolished"],
        GRADUATE: ["The space between two buildings", "The difference between predicted and measured energy use", "The time between design and construction", "The gap in a window frame"],
        PHD: ["Labels can communicate hidden quality and may be valued apart from actual performance", "Labels have no effect on any decision", "Labels only signal the building height", "Labels always guarantee measured savings"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Platinum is the highest LEED level, above Gold, Silver and Certified.",
        MIDDLE_SCHOOL: "WELL is a rating system focused on occupant health and wellbeing.",
        HIGH_SCHOOL: "Passive House sets strict limits on heating and cooling demand through a very efficient envelope.",
        UNDERGRADUATE: "Setting goals early lets teams integrate green features cheaply instead of bolting them on later.",
        GRADUATE: "The performance gap is when a building uses more (or less) energy in operation than predicted at design.",
        PHD: "Signaling theory says a label conveys information about quality, so it can carry value beyond measured performance.",
      },
    },
    {
      id: 'gbcertq4',
      question: {
        ELEMENTARY: "Which of these could earn a building green points?",
        MIDDLE_SCHOOL: "What is a credit in a rating system?",
        HIGH_SCHOOL: "What is point chasing?",
        UNDERGRADUATE: "What problem do green labels help solve in real estate markets?",
        GRADUATE: "What is a risk when cities give incentives for certified buildings?",
        PHD: "What does whole-life carbon include?",
      },
      options: {
        ELEMENTARY: ["Leaving taps running all day", "Painting every window black", "Keeping all lights on at night", "Bike racks so people can ride instead of drive"],
        MIDDLE_SCHOOL: ["A loan from the bank", "A required step for all buildings", "A type of energy meter", "An optional green strategy that earns points"],
        HIGH_SCHOOL: ["Buying extra building materials", "Measuring building height", "Running a race around the building", "Earning easy or cheap points without much real benefit"],
        UNDERGRADUATE: ["Too many windows", "Too few architects", "High interest rates", "Information asymmetry about hidden building quality"],
        GRADUATE: ["Buildings becoming too efficient", "Too many inspectors", "Codes becoming simpler", "Rewarding projects that would have certified anyway"],
        PHD: ["Only electricity used for lighting", "Only emissions during the first year", "Only the carbon in furniture", "Emissions from materials, construction, operation and end of life"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Bike racks help people travel without cars, which earns points in many rating systems.",
        MIDDLE_SCHOOL: "Credits are optional strategies teams choose to earn points toward a certification level.",
        HIGH_SCHOOL: "Point chasing means collecting easy points that add little real environmental benefit.",
        UNDERGRADUATE: "Buyers cannot easily see a building's efficiency, so labels communicate that hidden quality.",
        GRADUATE: "If projects would have certified without incentives, the incentive adds cost without adding outcomes.",
        PHD: "Whole-life carbon covers the full life of a building, not just its operating energy.",
      },
    },
    {
      id: 'gbcertq5',
      question: {
        ELEMENTARY: "What is a rating system?",
        MIDDLE_SCHOOL: "Where did BREEAM start?",
        HIGH_SCHOOL: "What does commissioning check?",
        UNDERGRADUATE: "What is a hedonic pricing study used for in certification research?",
        GRADUATE: "Why is a design-based label a weak tool for long-term performance?",
        PHD: "What is a key challenge for continuous, data-driven ratings?",
      },
      options: {
        ELEMENTARY: ["A set of rules explaining how buildings earn points and badges", "A machine that makes buildings taller", "A kind of roof tile", "A list of building owners"],
        MIDDLE_SCHOOL: ["The United Kingdom", "Brazil", "Antarctica", "The Moon"],
        HIGH_SCHOOL: ["That building systems are installed and working as designed", "That the paint matches the logo", "That the building has a name", "That the parking lot is large enough"],
        UNDERGRADUATE: ["Separating the effect of certification on price from location, age and size", "Measuring the weight of building materials", "Counting the number of tenants", "Designing the heating system"],
        GRADUATE: ["It does not follow the building into operation unless recertification is required", "It is too expensive for any building", "It measures operation too closely", "It is always required by federal law"],
        PHD: ["Data quality, privacy and comparability across climates", "There is no data to collect", "Meters cannot be installed in buildings", "Continuous ratings never change"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "A rating system is the rulebook that says how a building earns points and which badge it gets.",
        MIDDLE_SCHOOL: "BREEAM began in the United Kingdom and is widely used across Europe.",
        HIGH_SCHOOL: "Commissioning tests that systems like heating and ventilation are installed and operating as intended.",
        UNDERGRADUATE: "Hedonic studies control for other attributes to estimate how much certification itself affects price.",
        GRADUATE: "A design label reflects plans, so without recertification it says little about how the building runs years later.",
        PHD: "Continuous ratings depend on reliable, comparable data and must address privacy and climate differences.",
      },
    },
  ],
}

export default expansion
