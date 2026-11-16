import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'green-building-certification',
  lessons: [
    {
      id: 'gb-cert-1',
      title: 'Earning and Proving a Green Building Award',
      content: {
        ELEMENTARY: `
<h2>How a Building Earns a Green Award</h2>
<p>Have you ever earned a sticker or a badge at school for doing a great job? Buildings can earn awards too! When people build a home, a school or an office that is kind to the planet, they can ask experts to check it. If it passes, the building gets a special green award called a certification.</p>

<h3>A Checklist for Buildings</h3>
<p>Every green award comes with a checklist. The checklist asks questions like these: Does the building save electricity? Does it save water? Is the air inside fresh and clean? Were the materials chosen carefully? Each good answer helps the building on its way to an award.</p>
<ul>
<li><strong>Certification:</strong> a special award that shows a building has passed a careful green checklist</li>
<li><strong>Checklist:</strong> a list of things to do or check, one by one, so nothing is forgotten</li>
<li><strong>Inspector:</strong> a person whose job is to look closely and make sure the rules were followed</li>
<li><strong>LEED:</strong> a well-known green building award that has levels like silver, gold and platinum</li>
<li><strong>Proof:</strong> papers, photos and measurements that show something really happened</li>
</ul>

<h3>Showing Your Work</h3>
<p>In math class, your teacher might ask you to show your work. Green buildings have to show their work too! The builders collect drawings, photos and numbers that prove they did what they promised. Then a team of experts who do not work for the builders looks at everything. That way, the award is fair.</p>

<h3>Different Awards for Different Things</h3>
<p>Some awards look at the whole building. Some look mostly at keeping people healthy. Some look mostly at keeping the building warm without wasting energy. One very hard award asks a building to make more clean energy than it uses and to collect its own water!</p>

<h3>Things You Can Do</h3>
<ol>
<li>Look for green award signs or plaques on buildings in your town.</li>
<li>Make a green checklist for your own classroom: lights off, taps off, windows open for fresh air.</li>
<li>Give your family a gold star when they remember to save energy at home.</li>
</ol>

<h3>Think About It</h3>
<p>Why do you think it is important that someone else checks the building, and not just the builders themselves? Just like a game needs a fair referee, a green award needs fair checkers!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Buildings Earn Green Certifications</h2>
<p>A green building certification is a bit like a report card for a building. It tells people how well the building was designed and built to save energy and water, use good materials and keep people healthy. The most famous system is called LEED, which stands for Leadership in Energy and Environmental Design. But it is not the only one, and each system works a little differently.</p>

<h3>How LEED Works: Points Add Up</h3>
<p>LEED uses a point system. A building earns points for green features in different categories. The more points it earns, the higher its level. Some items are required for everyone; these are called prerequisites. Others are optional credits that the design team chooses.</p>
<table>
<thead><tr><th>LEED level</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Certified</td><td>The building met all the basic requirements and earned enough points to qualify</td></tr>
<tr><td>Silver</td><td>More points, showing a stronger green effort</td></tr>
<tr><td>Gold</td><td>A high score with many green features</td></tr>
<tr><td>Platinum</td><td>The top level, earned by the greenest buildings</td></tr>
</tbody>
</table>

<h3>The Steps to Certification</h3>
<ol>
<li><strong>Register:</strong> the building team signs up and picks which system to use.</li>
<li><strong>Design:</strong> architects and engineers plan green features to earn credits.</li>
<li><strong>Document:</strong> the team collects drawings, calculations and product information.</li>
<li><strong>Review:</strong> independent reviewers check the documents carefully.</li>
<li><strong>Award:</strong> if everything checks out, the building receives its certificate.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Rating system:</strong> a set of rules and credits used to judge how green a building is</li>
<li><strong>Credit:</strong> an optional green action that earns points toward certification</li>
<li><strong>Prerequisite:</strong> a requirement that every building must meet before earning any level</li>
<li><strong>Documentation:</strong> the written proof, drawings and data that show what was done</li>
<li><strong>Third-party review:</strong> a check done by experts who are independent from the building team</li>
</ul>

<h3>Other Certifications</h3>
<p>Some systems focus on one big idea. WELL focuses on people's health, including air, water, light and comfort. Passive House focuses on a super-insulated, airtight building that needs very little heating or cooling. The Living Building Challenge is one of the toughest: a building must prove, using real measurements over a full year, that it meets very strict goals for energy and water.</p>

<h3>Why It Matters</h3>
<p>Certification helps people trust that a building really is green. It also pushes builders to learn new skills, and it gives buyers and renters a simple way to compare buildings.</p>
`,
        HIGH_SCHOOL: `
<h2>LEED, WELL, Passive House and Beyond</h2>
<p>Dozens of green building certification systems exist around the world. They share a goal of making buildings better for people and the planet, but they measure very different things. Understanding what each one rewards helps you see why a building might choose one system, or several, and what a plaque on the wall does and does not tell you.</p>

<h3>Two Basic Approaches</h3>
<p>Most systems fall into one of two families. <em>Menu-based</em> systems, like LEED and the British system BREEAM, offer a list of credits across many categories, and teams choose which to pursue. <em>Performance-target</em> systems, like Passive House, set a small number of strict limits that must all be met, with less flexibility about how.</p>
<ul>
<li><strong>Menu-based system:</strong> a rating system where teams choose from many optional credits to reach a score</li>
<li><strong>Performance target:</strong> a measurable limit, such as maximum heating demand, that a building must meet</li>
<li><strong>Airtightness:</strong> how well the building envelope stops uncontrolled air leaking in or out</li>
<li><strong>Net positive:</strong> producing more of a resource, such as energy or water, than the building uses</li>
<li><strong>Recertification:</strong> checking a building again after some years to confirm it still performs well</li>
<li><strong>Design-phase certification:</strong> an award based on plans and predictions rather than measured operation</li>
</ul>

<h3>Comparing Major Systems</h3>
<table>
<thead><tr><th>System</th><th>Main focus</th><th>How it is earned</th></tr></thead>
<tbody>
<tr><td>LEED</td><td>Broad sustainability: energy, water, site, materials, indoor quality</td><td>Points from prerequisites and optional credits; four levels</td></tr>
<tr><td>BREEAM</td><td>Broad sustainability, widely used in the UK and Europe</td><td>Weighted credits across categories, assessed by licensed assessors</td></tr>
<tr><td>WELL</td><td>Human health and wellbeing</td><td>Features plus on-site testing of air, water, light and sound</td></tr>
<tr><td>Passive House</td><td>Very low heating and cooling energy</td><td>Strict energy limits, an airtightness test and careful energy modeling</td></tr>
<tr><td>Living Building Challenge</td><td>Regenerative, net positive buildings</td><td>Requirements grouped as petals, proven by a year of real operating data</td></tr>
</tbody>
</table>

<h3>Design Versus Real Performance</h3>
<p>Many certifications are awarded at the end of construction, based on what the design is expected to achieve. But buildings sometimes use more energy than predicted, because of how people use them, how equipment is set up or how well construction was done. This is why some systems now test buildings on site, require real data, or offer separate certifications for building operations that must be renewed.</p>

<h3>Trade-offs</h3>
<ol>
<li><strong>Cost and paperwork:</strong> documentation and fees can be a burden, especially for small projects.</li>
<li><strong>Point chasing:</strong> teams may pick cheap, easy credits instead of the ones with the biggest impact.</li>
<li><strong>Flexibility:</strong> menu systems adapt to many building types, while strict targets push deeper performance.</li>
<li><strong>Local fit:</strong> a system designed for one climate or country may need adjustment elsewhere.</li>
</ol>

<h3>Real-World Applications</h3>
<p>Governments and universities often require certification for new public buildings. Companies use it to show progress on sustainability goals. Some projects combine systems, for example pursuing LEED for broad sustainability and WELL for occupant health. The best results usually come when the certification is treated as a guide for good design, not just a trophy.</p>
`,
        UNDERGRADUATE: `
<h2>Certification Requirements, Documentation and Market Effects</h2>
<p>Green building certification is a form of voluntary, standards-based governance. A private or nonprofit body writes a standard, trains professionals, and arranges for claims to be checked. The value of the resulting label depends on three things: whether the standard rewards outcomes that matter, whether verification is credible, and whether the market and policymakers actually use the label in decisions. This lesson examines each of these elements and offers a method for evaluating a certification pathway on a real project.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Third-party verification:</strong> independent review of documentation or measurements by a party with no stake in the outcome</li>
<li><strong>Energy model:</strong> a computer simulation that predicts a building's annual energy use from its design</li>
<li><strong>Baseline building:</strong> a reference design meeting minimum code, used to calculate percentage improvement</li>
<li><strong>Commissioning:</strong> a quality process that checks building systems are installed and operating as intended</li>
<li><strong>Performance gap:</strong> the difference between predicted energy or water use and what is actually measured</li>
<li><strong>Signaling:</strong> using a credible label to communicate quality that buyers cannot easily observe themselves</li>
</ul>

<h3>Anatomy of the Documentation Process</h3>
<p>Most certifications follow a similar workflow. The team registers the project, sets credit targets in an early design workshop, and assigns responsibility for each credit. Evidence typically includes drawings, specifications, product data sheets, calculations, energy model outputs, commissioning reports and photographs. Reviewers may approve credits, deny them or request clarification. Some systems split review into a design stage and a construction stage, so that design-related credits can be confirmed early.</p>

<h3>Prediction-Based Versus Measurement-Based Credits</h3>
<table>
<thead><tr><th>Evidence type</th><th>Example</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Design prediction</td><td>Modeled energy savings against a baseline</td><td>Available before occupancy, guides design</td><td>Depends on assumptions about use and operation</td></tr>
<tr><td>Prescriptive feature</td><td>Installing low-flow fixtures or bike storage</td><td>Simple to verify</td><td>Does not prove the feature delivers results</td></tr>
<tr><td>Field test</td><td>Blower-door airtightness test, indoor air sampling</td><td>Confirms built quality</td><td>Snapshot in time</td></tr>
<tr><td>Operational data</td><td>Twelve months of metered energy and water</td><td>Reflects real performance</td><td>Only available after occupancy</td></tr>
</tbody>
</table>

<h3>Quantitative Reasoning</h3>
<p>Consider a modeled building predicted to use a third less energy than its baseline. If occupants run longer hours, plug loads are higher than assumed, and controls are poorly tuned, actual use may land close to or even above the baseline. A credit structure that rewards the prediction captures intent but not outcome. Conversely, operational ratings compare measured energy use per unit floor area with similar buildings, which reflects reality but mixes design quality with occupant behavior. Many analysts therefore argue for using both: design ratings to steer decisions early and operational ratings to confirm results.</p>

<h3>Market Impacts</h3>
<p>Certification addresses an information problem. Tenants and investors find it hard to judge energy performance or indoor quality from a tour, so a credible label can reduce uncertainty. Market studies in several countries have generally associated certified commercial buildings with higher rents or occupancy, although isolating the label's effect from location, age and building quality is difficult. Certification has also created a professional workforce of accredited practitioners, which spreads knowledge beyond certified projects.</p>

<h3>Applied Method: Choosing a Certification Pathway</h3>
<ol>
<li>Define the project's priority outcomes, such as carbon, health, water or resilience.</li>
<li>Map each candidate system's mandatory requirements against those priorities.</li>
<li>Estimate documentation effort and fees, including consultants and testing.</li>
<li>Check whether local policy or funding programs recognize a particular system.</li>
<li>Prefer pathways that include field testing or operational data for key outcomes.</li>
<li>Plan for metering and recertification so performance can be tracked after handover.</li>
</ol>
`,
        GRADUATE: `
<h2>Certification Effectiveness, Policy Linkages and System Design</h2>
<p>Green building certification began as a voluntary market tool for leaders, but it now sits inside a web of public policy, finance and corporate reporting. Governments reference certifications in codes and incentives, lenders use them in green bond frameworks, and investors use them in portfolio benchmarking. This expanded role raises sharper questions: Do certifications deliver real environmental and health outcomes? Who benefits? And how should a standard be designed when public money and regulation depend on it?</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Market transformation:</strong> a lasting shift in industry practice so that better performance becomes the normal standard</li>
<li><strong>Policy referencing:</strong> when laws or programs cite a private standard as a requirement or a route to incentives</li>
<li><strong>Additionality:</strong> whether an outcome happened because of the certification rather than despite it</li>
<li><strong>Governance legitimacy:</strong> the perceived fairness of how a standard is written, revised and enforced</li>
<li><strong>Operational rating:</strong> a label based on measured performance during use, usually renewed regularly</li>
<li><strong>Standard ratcheting:</strong> tightening requirements over successive versions as practice improves</li>
</ul>

<h3>The Market Transformation Logic</h3>
<p>The theory behind leadership standards is that a voluntary label rewards the top tier of the market, builds supply chains and skills, and demonstrates feasibility. Codes then adopt practices once they are proven, and the voluntary standard ratchets upward to stay ahead. When this cycle works, certification acts as a testing ground for future regulation. When it stalls, labels can become a marketing tool that rewards modest improvements over an outdated code.</p>

<h3>Evaluating Effectiveness</h3>
<table>
<thead><tr><th>Question</th><th>Evidence needed</th><th>Common challenge</th></tr></thead>
<tbody>
<tr><td>Do certified buildings perform better?</td><td>Measured energy, water and indoor quality compared with peers</td><td>Selection bias: leaders may certify buildings that would perform well anyway</td></tr>
<tr><td>Which credits drive outcomes?</td><td>Credit-level data linked to metered results</td><td>Credit data and operational data are rarely joined</td></tr>
<tr><td>Does certification change wider practice?</td><td>Diffusion of features into non-certified projects and codes</td><td>Attribution is hard over long periods</td></tr>
<tr><td>Is it cost-effective policy?</td><td>Public cost per unit of outcome compared with alternatives</td><td>Benefits like health are difficult to value</td></tr>
</tbody>
</table>

<h3>Policy Linkages</h3>
<p>Policymakers face a design choice. Requiring a named certification is simple and leverages existing infrastructure, but it delegates public rule-making to a private body and can lock in a system's priorities. Alternatives include writing performance requirements directly into code, mandating energy benchmarking and disclosure for existing buildings, or offering incentives tied to measured outcomes rather than labels. Many jurisdictions now combine approaches: a code for minimum performance, disclosure for transparency, and voluntary certification for leadership.</p>

<h3>Equity and Access</h3>
<p>Certification costs are partly fixed, so they fall more heavily on small buildings, affordable housing developers and community organizations. Certified space tends to cluster in high-value commercial districts, which means the health and comfort benefits may bypass lower-income communities. Some programs have responded with simplified pathways, fee reductions, or credits for social equity, community engagement and fair labor practices. Whether these additions shift outcomes, or mainly add paperwork, is an open evaluation question.</p>

<h3>Institutional Barriers</h3>
<ol>
<li><strong>Split incentives:</strong> owners pay for certification while tenants capture many operational savings.</li>
<li><strong>Handover gaps:</strong> design teams leave before operation, so no one owns long-term performance.</li>
<li><strong>Data silos:</strong> certification bodies, utilities and owners hold separate pieces of evidence.</li>
<li><strong>Version lag:</strong> projects registered under older versions can be certified years later against outdated requirements.</li>
</ol>

<h3>An Evaluation Framework for Certification Systems</h3>
<ul>
<li>Outcome orientation: are the heaviest weights placed on carbon, health and resource outcomes?</li>
<li>Verification strength: are key claims tested in the field or measured in operation?</li>
<li>Durability: does the label expire or require recertification?</li>
<li>Transparency: are criteria, revisions and aggregate results publicly available?</li>
<li>Inclusiveness: can affordable and small projects participate without disproportionate cost?</li>
</ul>
`,
        PHD: `
<h2>Research on Certification Outcomes, Behavior and Future Directions</h2>
<p>As certification systems mature, research has shifted from describing them to testing whether they work and why. This literature spans building science, economics, organizational behavior and science and technology studies. Its central puzzle is the relationship between a label, which certifies a set of design and documentation practices, and outcomes, which emerge from the interaction of physical systems, operators and occupants over decades. This lesson surveys the methodological landscape, the contested findings and the open questions that define the field.</p>

<h3>Methodological Concepts</h3>
<ul>
<li><strong>Selection bias:</strong> systematic differences between buildings that choose certification and those that do not</li>
<li><strong>Counterfactual:</strong> an estimate of what would have happened to a building without certification</li>
<li><strong>Hedonic pricing:</strong> a statistical method that separates the value of individual property attributes from price data</li>
<li><strong>Rebound effect:</strong> increased use of a service after efficiency makes it cheaper, offsetting some savings</li>
<li><strong>Performance gap:</strong> the persistent difference between design-stage predictions and measured operation</li>
<li><strong>Symbolic adoption:</strong> taking up a standard mainly for reputation while changing core practice very little</li>
</ul>

<h3>Measuring Outcomes Credibly</h3>
<p>Early comparisons of certified buildings with national averages suffered from weak counterfactuals. Certified buildings tend to be newer, larger, better located and owned by sophisticated firms, all of which correlate with performance. Stronger designs use matched comparison groups, panel data that follow buildings before and after certification, or quasi-experimental settings where certification requirements change abruptly. Results across studies have been mixed: some find meaningful average energy savings for certified buildings, others find wide distributions in which many certified buildings perform no better than peers. Variation within certified buildings is often larger than the average difference between certified and non-certified groups.</p>

<h3>Explaining the Performance Gap</h3>
<table>
<thead><tr><th>Source</th><th>Mechanism</th><th>Research approach</th></tr></thead>
<tbody>
<tr><td>Modeling assumptions</td><td>Default schedules and plug loads differ from reality</td><td>Calibration studies comparing models with metered data</td></tr>
<tr><td>Construction quality</td><td>Thermal bridges, air leakage, installation errors</td><td>Field testing, thermography, forensic audits</td></tr>
<tr><td>Controls and operation</td><td>Poor setpoints, overrides, faults left unaddressed</td><td>Fault detection analysis of building automation data</td></tr>
<tr><td>Occupant behavior</td><td>Extended hours, equipment intensity, comfort preferences</td><td>Behavioral surveys, sensor studies, field experiments</td></tr>
</tbody>
</table>
<p>A key debate is whether the gap is primarily technical, and thus solvable by better modeling and commissioning, or primarily socio-technical, requiring attention to institutions, contracts and behavior.</p>

<h3>Behavioral and Organizational Dimensions</h3>
<p>Certification may change occupant expectations and behavior. Some researchers hypothesize a moral licensing effect, where occupants of a green-labeled building feel less need to conserve. Others suggest that visible green features increase engagement. Evidence is limited and context dependent. At the organizational level, institutional theory distinguishes substantive adoption, where certification reshapes procurement and operations, from symbolic adoption focused on reputation. Studies of corporate portfolios explore how certification interacts with sustainability reporting and investor pressure.</p>

<h3>Market and Economic Research</h3>
<p>Hedonic studies of commercial real estate in several markets have associated labels with rent and value premiums, but disentangling signaling value from actual performance remains difficult. A label may command a premium because it reduces information asymmetry, because it proxies for unobserved quality, or because of corporate demand for reputational assets. Research on residential labels is thinner and complicated by heterogeneous local markets.</p>

<h3>Contested Questions</h3>
<ol>
<li>Should certification weight design-stage features or measured outcomes, and how should the two be combined?</li>
<li>Do multi-attribute scores obscure trade-offs, for example rewarding many minor credits while carbon performance stays weak?</li>
<li>Is private standard-setting democratically legitimate when governments reference it in law?</li>
<li>Can whole-life carbon and health outcomes be verified with enough rigor to anchor finance and regulation?</li>
</ol>

<h3>Open Research Directions</h3>
<ul>
<li>Linking credit-level certification records with long-run metered performance at scale.</li>
<li>Continuous, data-driven certification using building automation and smart meter streams.</li>
<li>Causal estimates of health and productivity outcomes in certified versus comparable buildings.</li>
<li>Methods to certify existing buildings and retrofits, which dominate the future stock.</li>
<li>Comparative analysis of how certification systems adapt across climates, cultures and regulatory regimes.</li>
</ul>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbcertq1',
      question: {
        ELEMENTARY: "What is LEED?",
        MIDDLE_SCHOOL: "How does a building earn a LEED level?",
        HIGH_SCHOOL: "What makes the Living Building Challenge especially strict?",
        UNDERGRADUATE: "What is third-party verification?",
        GRADUATE: "What is market transformation in the context of certification?",
        PHD: "What is the performance gap?",
      },
      options: {
        ELEMENTARY: ["A green building award with levels like silver and gold", "A type of plant", "A building material", "A kind of hammer"],
        MIDDLE_SCHOOL: ["By earning points for green features", "By being picked at random", "By being the tallest building", "By paying a fee with no checks"],
        HIGH_SCHOOL: ["It requires a year of real operating data proving very strict goals", "It only checks the paint color", "It is awarded on plans alone with no checks", "It looks only at parking spaces"],
        UNDERGRADUATE: ["Independent review of claims by a party with no stake in the outcome", "The building owner approving their own claims", "No review of any kind", "A review done only by the architect"],
        GRADUATE: ["A lasting shift so better performance becomes normal practice", "A one-time sale of certified buildings", "Lowering all building standards", "Stopping new construction"],
        PHD: ["The difference between predicted and measured performance", "Perfect agreement between design and operation", "The price gap between two buildings", "A gap only found in very old buildings"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "LEED is a green building award. Buildings can earn levels like silver, gold and platinum.",
        MIDDLE_SCHOOL: "LEED buildings meet required items and earn points from credits. More points mean a higher level.",
        HIGH_SCHOOL: "The Living Building Challenge requires real measurements over a full year, not just predictions.",
        UNDERGRADUATE: "Third-party verification means independent experts check the documents or measurements.",
        GRADUATE: "Leadership labels aim to prove better practices so that codes and the wider market adopt them.",
        PHD: "The performance gap is the persistent difference between design predictions and measured operation.",
      },
    },
    {
      id: 'gbcertq2',
      question: {
        ELEMENTARY: "Why does someone else check a green building, not just the builders?",
        MIDDLE_SCHOOL: "What is a prerequisite in a rating system?",
        HIGH_SCHOOL: "What does a performance-target system like Passive House do?",
        UNDERGRADUATE: "What is a baseline building used for?",
        GRADUATE: "What is a main risk of requiring a named private certification in law?",
        PHD: "Why do simple comparisons with national averages give weak evidence?",
      },
      options: {
        ELEMENTARY: ["So the building can grow taller", "So the award is fair, like a referee in a game", "Because builders cannot read", "So the building gets painted"],
        MIDDLE_SCHOOL: ["An optional credit for extra points", "A requirement every building must meet", "The name of the top level", "A type of window"],
        HIGH_SCHOOL: ["Lets teams pick any credits they like", "Sets a few strict measurable limits that must all be met", "Ignores energy use completely", "Only checks the landscaping"],
        UNDERGRADUATE: ["Choosing paint colors", "A reference design meeting code to measure improvement against", "Setting the building height", "Measuring rainfall"],
        GRADUATE: ["It makes the law too short", "It delegates public rule-making to a private body", "It bans all green buildings", "It removes the need for any code"],
        PHD: ["National averages are always perfect", "Certified buildings differ in age, size and ownership, which also affect performance", "Certified buildings cannot be measured", "Averages include only certified buildings"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Independent checkers make the award fair, just like a referee makes a game fair.",
        MIDDLE_SCHOOL: "A prerequisite is required for every building. Credits are the optional actions that earn points.",
        HIGH_SCHOOL: "Passive House sets a small number of strict limits, such as heating demand and airtightness.",
        UNDERGRADUATE: "A baseline is a code-minimum reference design used to calculate percentage improvement.",
        GRADUATE: "Naming a private standard in law hands part of public rule-making to that private body.",
        PHD: "Certified buildings are often newer and better owned, so differences may not be caused by the label.",
      },
    },
    {
      id: 'gbcertq3',
      question: {
        ELEMENTARY: "What might a green building checklist ask about?",
        MIDDLE_SCHOOL: "What does the WELL certification focus on?",
        HIGH_SCHOOL: "What is recertification?",
        UNDERGRADUATE: "What is a weakness of design-prediction evidence?",
        GRADUATE: "What are split incentives?",
        PHD: "What does symbolic adoption mean?",
      },
      options: {
        ELEMENTARY: ["How many cartoons people watch", "The color of the front door", "Saving electricity and water and keeping air fresh", "How many cars are parked outside"],
        MIDDLE_SCHOOL: ["Fast elevators", "Tall towers", "People's health, including air, water and light", "Selling the building"],
        HIGH_SCHOOL: ["Building a second building", "Changing the building name", "Checking a building again later to confirm it still performs well", "Painting the building every year"],
        UNDERGRADUATE: ["It is always available too late", "It cannot guide design", "It depends on assumptions about use and operation", "It is measured with a meter"],
        GRADUATE: ["Two owners sharing one building", "Splitting a building into two labels", "Owners pay for improvements while tenants capture many savings", "A discount on certification fees"],
        PHD: ["Using symbols on building plans", "A fully substantive change in operations", "Adopting a standard mainly for reputation with little change in practice", "A type of energy model"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Green checklists ask about saving energy and water, clean air and careful material choices.",
        MIDDLE_SCHOOL: "WELL focuses on human health, with features and testing for air, water, light and comfort.",
        HIGH_SCHOOL: "Recertification checks the building again after some years so the label stays honest.",
        UNDERGRADUATE: "Predictions depend on assumptions about schedules, loads and controls that may not match reality.",
        GRADUATE: "When owners pay and tenants save, owners have weaker reasons to invest in performance.",
        PHD: "Symbolic adoption uses a label for reputation without reshaping core procurement or operations.",
      },
    },
    {
      id: 'gbcertq4',
      question: {
        ELEMENTARY: "What do builders collect to show their work?",
        MIDDLE_SCHOOL: "What happens during the review step?",
        HIGH_SCHOOL: "What is a criticism called point chasing?",
        UNDERGRADUATE: "Which evidence type best reflects real performance?",
        GRADUATE: "Why can certification costs be an equity issue?",
        PHD: "What is a counterfactual in certification research?",
      },
      options: {
        ELEMENTARY: ["Toys and games", "Drawings, photos and numbers", "Leaves from the garden", "Nothing at all"],
        MIDDLE_SCHOOL: ["The building is torn down", "Independent reviewers check the documents carefully", "Builders vote on their own award", "The team picks a building name"],
        HIGH_SCHOOL: ["Choosing credits with the biggest impact", "Picking cheap, easy credits instead of high-impact ones", "Measuring every room twice", "Refusing all credits"],
        UNDERGRADUATE: ["A product brochure", "Twelve months of metered energy and water", "A sketch of the lobby", "The project name"],
        GRADUATE: ["Certification is always free", "Fixed costs weigh more heavily on small and affordable projects", "Only large towers pay fees", "Costs fall only on tenants"],
        PHD: ["The final certification score", "An estimate of what would have happened without certification", "A counter in the lobby", "The cost of a certificate"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Builders collect drawings, photos and numbers as proof that they did what they promised.",
        MIDDLE_SCHOOL: "Independent reviewers check the documentation before the award is given.",
        HIGH_SCHOOL: "Point chasing means choosing easy credits rather than the ones that matter most for the planet.",
        UNDERGRADUATE: "Operational data from a year of metering shows how the building really performs.",
        GRADUATE: "Partly fixed costs are a bigger burden for small buildings and affordable housing developers.",
        PHD: "A counterfactual estimates the outcome the same building would have had without certification.",
      },
    },
    {
      id: 'gbcertq5',
      question: {
        ELEMENTARY: "What is the hardest green award asking buildings to do?",
        MIDDLE_SCHOOL: "What is the top LEED level?",
        HIGH_SCHOOL: "Why might a building use a second certification like WELL alongside LEED?",
        UNDERGRADUATE: "What is signaling in green building markets?",
        GRADUATE: "What does standard ratcheting mean?",
        PHD: "What is an open research direction for certification?",
      },
      options: {
        ELEMENTARY: ["Be painted green", "Have the most windows", "Be the oldest building", "Make more clean energy than it uses and collect its own water"],
        MIDDLE_SCHOOL: ["Certified", "Silver", "Bronze", "Platinum"],
        HIGH_SCHOOL: ["To avoid any energy savings", "Because LEED bans health features", "To make the building smaller", "To add a focus on occupant health"],
        UNDERGRADUATE: ["Sending radio signals from the roof", "Installing traffic lights", "Hiding performance data", "Using a credible label to show hidden quality to buyers"],
        GRADUATE: ["Keeping requirements the same forever", "Removing requirements over time", "Charging higher fees each year", "Tightening requirements in new versions as practice improves"],
        PHD: ["Stopping all measurement", "Ignoring existing buildings", "Removing third-party review", "Linking credit records with long-run metered performance"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "The Living Building Challenge asks buildings to make more clean energy than they use and handle their own water.",
        MIDDLE_SCHOOL: "The four LEED levels are Certified, Silver, Gold and Platinum. Platinum is the top.",
        HIGH_SCHOOL: "Many projects combine LEED for broad sustainability with WELL for occupant health.",
        UNDERGRADUATE: "A credible label signals quality, like energy performance, that buyers cannot easily see.",
        GRADUATE: "Ratcheting tightens requirements so the voluntary standard stays ahead of codes.",
        PHD: "Joining credit-level records with metered data would show which credits actually deliver results.",
      },
    },
  ],
}

export default expansion
