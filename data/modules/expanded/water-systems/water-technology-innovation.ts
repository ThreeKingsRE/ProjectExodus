import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-technology-innovation',
  lessons: [
    {
      id: 'ws-innov-1',
      title: 'New Ideas for Water',
      content: {
        ELEMENTARY: `
<h2>Cool Inventions for Water</h2>
<p>Hi, I am Pip the puffin, and I love inventions! People all over the world are building clever new tools to help find water, clean water and save water. Inventors start with a problem, think of an idea, build it, test it and make it better. Let's look at some of their ideas!</p>

<h3>Tools That Listen and Watch</h3>
<p>Some new tools act like tiny helpers that watch water for us. They notice things people cannot see.</p>
<ul>
<li><strong>Sensor:</strong> a small device that measures something, like how much water is flowing or how clean it is</li>
<li><strong>Smart meter:</strong> a water meter that counts the water a home uses and sends the numbers by itself</li>
<li><strong>Leak detector:</strong> a gadget that listens or feels for water escaping from a pipe</li>
<li><strong>Filter:</strong> a material with tiny holes that catches dirt and lets cleaner water pass through</li>
<li><strong>Inventor:</strong> a person who comes up with a new idea and builds it to solve a problem</li>
</ul>

<h3>Ideas From Nature</h3>
<p>Some inventors copy nature! The leaves of the lotus plant stay clean because water drops roll right off them, picking up dirt. Some desert beetles catch tiny drops of water from foggy air on their backs. Scientists study these plants and animals to design new materials that help collect or clean water.</p>

<h3>Making Water From Air</h3>
<p>Air has water in it that you cannot see. When air cools down, the water turns into drops, like the drops on a cold glass of juice. Some machines and special nets catch these drops to make water, which helps in dry places.</p>

<h3>How Inventing Works</h3>
<ol>
<li>Find a problem, like a leaky pipe at school.</li>
<li>Think of lots of ideas, even silly ones.</li>
<li>Build a simple model.</li>
<li>Test it and see what happens.</li>
<li>Fix it and try again!</li>
</ol>

<h3>You Can Be a Water Inventor</h3>
<p>You do not need a big lab to start. Try making a simple filter with a grown-up using sand, small stones and a cloth, and watch muddy water get clearer (but never drink it!). Draw a machine that could save water at home. Every great invention starts with someone asking, "How could this be better?"</p>
`,
        MIDDLE_SCHOOL: `
<h2>Smarter Water: New Technology at Work</h2>
<p>For a long time, water systems were managed with paper records, manual meter readings and people walking the pipes to look for problems. Today, new technologies are making water management <em>smarter</em>. Sensors, wireless networks and computers help utilities find leaks faster, use less energy and keep water safe. Let's see how.</p>

<h3>Smart Meters</h3>
<p>An ordinary water meter must be read by a person, often only every month or few months. A <em>smart meter</em> records water use frequently and sends the data automatically. This helps in several ways: families can see their use on a phone app, unusual patterns can reveal a leak inside a home, and utilities can bill accurately without visiting each house.</p>

<h3>Sensors in the Network</h3>
<p>Sensors can be placed in pipes, rivers and treatment plants. They measure pressure, flow, temperature and water quality signals such as cloudiness (turbidity) or chlorine levels. When a reading changes suddenly, the system can send an alert so workers respond quickly.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Smart meter:</strong> a meter that tracks water use frequently and sends the data automatically</li>
<li><strong>Sensor:</strong> a device that measures a condition such as pressure, flow or water quality</li>
<li><strong>Data:</strong> information collected as numbers or measurements that can be analyzed</li>
<li><strong>Turbidity:</strong> how cloudy water is because of tiny particles floating in it</li>
<li><strong>Prototype:</strong> an early working model built to test whether an idea works</li>
<li><strong>Innovation:</strong> a new idea, product or method that is actually put into use</li>
</ul>

<h3>Old Way Versus New Way</h3>
<table>
<thead><tr><th>Task</th><th>Old way</th><th>New technology</th></tr></thead>
<tbody>
<tr><td>Reading meters</td><td>A worker visits every home</td><td>Smart meters send readings automatically</td></tr>
<tr><td>Finding leaks</td><td>Waiting for water to appear on the street</td><td>Acoustic sensors listen for leak sounds in pipes</td></tr>
<tr><td>Checking water quality</td><td>Taking samples to a lab</td><td>Online sensors give continuous readings</td></tr>
<tr><td>Watering parks</td><td>Sprinklers on a fixed timer</td><td>Controllers that check soil moisture and weather</td></tr>
</tbody>
</table>

<h3>From Idea to Real Use</h3>
<p>An invention is not an innovation until people actually use it. Inventors build a prototype, test it, improve it and then must convince utilities, farmers or families to adopt it. Water utilities are careful because safe drinking water is so important, so new tools usually go through pilot tests before they are used widely.</p>

<h3>Technology Is Not Everything</h3>
<p>Even the smartest gadget needs people who know how to use it, money to maintain it, and trust from the community. Sometimes a simple solution, like fixing a leaky tap, does more good than a complex machine. Good innovators listen to the people who will use their tools.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Tech Innovation: Sensors, AI and Advanced Treatment</h2>
<p>Water systems face aging pipes, growing cities, droughts, new pollutants and tight budgets. A wave of innovation is changing how water is measured, managed and cleaned. This lesson looks at three areas, digital monitoring, artificial intelligence and advanced treatment, and at the trade-offs that decide whether a new technology actually improves people's lives.</p>

<h3>Smart Sensors and the Digital Network</h3>
<p>Low-cost sensors and wireless communication allow utilities to see what happens across a network in near real time, instead of relying on occasional manual checks.</p>
<ul>
<li><strong>Internet of Things:</strong> networks of connected devices that collect and share data automatically</li>
<li><strong>Acoustic leak detection:</strong> using sensors that pick up the sound of water escaping from pressurized pipes</li>
<li><strong>Non-revenue water:</strong> water that is treated and pumped but lost to leaks, theft or metering errors before billing</li>
<li><strong>Digital twin:</strong> a computer model of a real water system that is updated with live data</li>
<li><strong>Atmospheric water generation:</strong> extracting water from humid air by cooling it or using moisture-absorbing materials</li>
</ul>
<p>Many utilities lose a significant share of their treated water as non-revenue water, so finding leaks faster saves water, energy and money at once.</p>

<h3>Artificial Intelligence</h3>
<p>Machine-learning programs look for patterns in large datasets. In water systems, they can forecast demand to schedule pumping, flag sensor readings that suggest a pipe burst or contamination event, and predict which old pipes are most likely to fail so repairs are prioritized. AI is only as good as its data: missing, biased or poor-quality data can lead to wrong predictions, so human operators still need to check and interpret results.</p>

<h3>Advanced Treatment</h3>
<table>
<thead><tr><th>Technology</th><th>What it does</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Membrane filtration</td><td>Physically removes particles, microbes and, with reverse osmosis, dissolved salts</td><td>Membranes foul and need cleaning; reverse osmosis uses energy and produces concentrate</td></tr>
<tr><td>Ultraviolet disinfection</td><td>Uses UV light to inactivate microbes without adding chemicals</td><td>Needs clear water and electricity; leaves no lasting residual in pipes</td></tr>
<tr><td>Advanced oxidation</td><td>Creates highly reactive molecules that break down hard-to-remove chemicals</td><td>Higher energy and chemical costs</td></tr>
<tr><td>Atmospheric water generators</td><td>Condense water from air</td><td>Energy-intensive; work best in humid conditions</td></tr>
</tbody>
</table>
<p>Researchers are especially focused on contaminants that conventional plants were not designed for, such as certain persistent industrial chemicals and pharmaceuticals.</p>

<h3>Why Good Ideas Can Fail</h3>
<p>Water utilities are often public, risk-averse and focused on safety, with tight budgets and infrastructure designed to last decades. A new technology must prove it is reliable, affordable to run, compatible with existing systems and acceptable to regulators. Data privacy and cybersecurity are also real concerns once systems become connected.</p>

<h3>Innovation That Helps Everyone</h3>
<ol>
<li><strong>Match the context:</strong> a solar-powered treatment unit may suit a remote village better than a high-tech plant.</li>
<li><strong>Plan for maintenance:</strong> devices need spare parts, power and trained local technicians.</li>
<li><strong>Combine high and low tech:</strong> sensors work best alongside nature-based solutions and good management.</li>
<li><strong>Include users:</strong> communities, including Indigenous and rural communities, should help shape tools meant for them.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Water Technology Trends, Startups and Commercialization</h2>
<p>The water sector is often described as slow to innovate compared with energy or telecommunications. Understanding why, and how new technologies nonetheless reach the market, requires looking at technology trends alongside the economics of the customers who buy them. This lesson analyzes major trends, the startup pathway and the specific barriers to commercialization in water.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Technology readiness level:</strong> a scale describing how mature a technology is, from basic principles to proven operation in the field</li>
<li><strong>Valley of death:</strong> the funding gap between a promising prototype and the first commercial deployments</li>
<li><strong>Pilot project:</strong> a limited real-world trial used to test performance and build confidence before full adoption</li>
<li><strong>Water accelerator:</strong> a program that mentors and funds early-stage water companies and connects them to customers</li>
<li><strong>Total cost of ownership:</strong> the full lifetime cost of a technology, including purchase, energy, maintenance and replacement</li>
<li><strong>Procurement:</strong> the formal process an organization such as a public utility uses to buy goods and services</li>
</ul>

<h3>Major Technology Trends</h3>
<table>
<thead><tr><th>Trend</th><th>Examples</th><th>Value driver</th></tr></thead>
<tbody>
<tr><td>Digitalization</td><td>Smart metering, network sensors, analytics platforms, digital twins</td><td>Lower losses, better asset management, faster response</td></tr>
<tr><td>Decentralization</td><td>Building-scale reuse, point-of-use treatment, modular plants</td><td>Flexibility and service where central networks do not reach</td></tr>
<tr><td>Resource recovery</td><td>Biogas, nutrient recovery from wastewater, water reuse</td><td>Turning waste streams into revenue or offsets</td></tr>
<tr><td>Advanced separation</td><td>Improved membranes, electrochemical treatment</td><td>Treating difficult contaminants and alternative sources</td></tr>
<tr><td>Energy efficiency</td><td>Variable-speed pumps, optimized aeration</td><td>Lower operating costs and emissions</td></tr>
</tbody>
</table>

<h3>Why Water Is Hard for Startups</h3>
<p>Several structural features slow adoption. Water is typically underpriced relative to its full cost, which weakens the financial case for savings. Most customers are public or regulated utilities that are fragmented into many small units, each with its own procurement rules and limited staff to evaluate new products. Failure has public-health consequences, so utilities value proven references, yet a new technology cannot gain references without first being adopted. Infrastructure has long lifetimes, so replacement windows are infrequent. Sales cycles are therefore long, which strains startups that depend on venture funding expecting fast growth.</p>

<h3>Quantitative Reasoning in Words</h3>
<p>Consider a leak-detection service. Its value depends on the volume of water saved multiplied by the marginal cost of producing that water, plus avoided energy, damage and repair costs. In a utility with cheap, abundant water, saved volumes are worth little, so the business case rests on avoiding bursts and road damage. In a water-scarce city facing costly new supply, the same saved volume may be worth many times more. The same technology can thus be uneconomic in one place and compelling in another.</p>

<h3>Pathways to Market</h3>
<ol>
<li>Validate the technology at increasing readiness levels, from lab to pilot to full scale.</li>
<li>Find an early-adopter utility or industrial customer willing to host a pilot.</li>
<li>Use independent verification and shared testbeds to build credible performance data.</li>
<li>Consider business models such as service contracts or shared savings that reduce upfront cost for customers.</li>
<li>Partner with established engineering firms or equipment suppliers for scale and distribution.</li>
</ol>

<h3>Evaluating a Water Innovation</h3>
<ul>
<li>Does it address a problem the customer actually prioritizes?</li>
<li>What is the total cost of ownership compared with the current approach?</li>
<li>Can the customer operate and maintain it with existing skills?</li>
<li>What happens if it fails, and how is risk shared?</li>
</ul>
`,
        GRADUATE: `
<h2>Water Innovation Policy, Technology Transfer and Scaling</h2>
<p>Promising water technologies are plentiful; widespread adoption is not. The gap reflects policy design, institutional incentives and the structure of the sector more than a shortage of ideas. This lesson examines how governments and organizations encourage innovation, how research moves into practice, and the strategies that help proven technologies scale, with attention to equity across and within countries.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Technology transfer:</strong> moving knowledge and inventions from research institutions into commercial products and practical use</li>
<li><strong>Technology push:</strong> innovation policies that fund research and development to create new technologies</li>
<li><strong>Demand pull:</strong> policies such as standards, pricing or procurement that create markets for new technologies</li>
<li><strong>Innovation procurement:</strong> public purchasing designed to buy solutions to a defined problem rather than a specified product</li>
<li><strong>Regulatory sandbox:</strong> a controlled arrangement allowing new approaches to be tested under relaxed or adapted rules</li>
<li><strong>Absorptive capacity:</strong> an organization's ability to recognize, adopt and use new knowledge</li>
</ul>

<h3>Policy Levers</h3>
<table>
<thead><tr><th>Lever</th><th>Mechanism</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Research grants</td><td>Fund early-stage science and engineering</td><td>Can stall at the prototype stage without demand</td></tr>
<tr><td>Performance standards</td><td>Require outcomes such as contaminant limits or loss reduction</td><td>Strong driver, but can lock in incumbent technologies if written too prescriptively</td></tr>
<tr><td>Full-cost pricing</td><td>Makes efficiency and reuse financially attractive</td><td>Affordability concerns require targeted support for low-income users</td></tr>
<tr><td>Shared testbeds and verification</td><td>Provide independent performance data</td><td>Need sustained funding and recognition by regulators</td></tr>
<tr><td>Innovation procurement</td><td>Lets utilities buy outcomes and share risk</td><td>Requires procurement skills and legal flexibility</td></tr>
</tbody>
</table>

<h3>Technology Transfer in Practice</h3>
<p>Transfer from universities typically runs through patents, licensing, spin-out companies and collaborative research with utilities. Barriers include misaligned timelines between academic and utility priorities, ownership disputes over intellectual property, and research designed without operator input. Co-design, where utilities help frame problems from the start, improves the odds that results are usable. International transfer raises further issues: technologies designed for well-funded, centralized systems may not suit places with intermittent power, limited spare parts or informal settlements, and licensing terms can affect affordability.</p>

<h3>Scaling Strategies</h3>
<p>Scaling is not simply copying a pilot many times. It involves institutional change, workforce training, supply chains and financing. Common approaches include utility consortia that pool demand and share evaluation costs, standardized data formats that let digital tools work across systems, and output-based financing that pays for verified results. Utilities with low absorptive capacity, often small and rural systems, risk being left behind, widening service gaps unless programs target them specifically.</p>

<h3>Governance Risks of Digital Water</h3>
<p>Connected systems raise questions of cybersecurity, data ownership, vendor lock-in and privacy of household consumption data. Governance frameworks should address who owns operational data, how interoperability is ensured, and how critical systems remain safe if digital tools fail.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Is the policy mix balanced between technology push and demand pull?</li>
<li>Do regulations specify outcomes rather than particular technologies where possible?</li>
<li>Are risks of early adoption shared between vendors, utilities and public funders?</li>
<li>Do programs build capacity in small and under-resourced utilities?</li>
<li>Are equity, data governance and long-term maintenance built into scaling plans?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Emerging Technologies, Adoption Barriers and Innovation Systems</h2>
<p>Doctoral-level inquiry into water innovation spans materials science, process engineering, data science and the social science of technological change. The core research problem is twofold: developing technologies that perform better across energy, cost and contaminant removal, and understanding why the sector adopts them slowly and unevenly. This lesson surveys emerging technologies, theoretical lenses on adoption and open methodological questions.</p>

<h3>Emerging Technology Areas</h3>
<ul>
<li><strong>Bio-inspired materials:</strong> materials designed by imitating natural structures, such as water-repellent leaf surfaces or fog-collecting textures</li>
<li><strong>Sorbent-based water harvesting:</strong> extracting water from air using porous materials such as metal-organic frameworks that absorb and release moisture</li>
<li><strong>Electrochemical treatment:</strong> using electrical potential to remove ions or degrade pollutants without large chemical inputs</li>
<li><strong>Selective separation:</strong> membranes or processes engineered to remove or recover specific solutes rather than all dissolved substances</li>
<li><strong>Persistent contaminant destruction:</strong> processes aiming to break down highly stable chemicals rather than only transferring them to another waste stream</li>
<li><strong>Physics-informed machine learning:</strong> data-driven models constrained by physical laws to improve prediction where data are sparse</li>
</ul>
<p>Laboratory performance does not guarantee field success. Fouling, scaling, material stability, manufacturing cost and the fate of concentrated residuals are recurring issues when emerging technologies are tested on real water.</p>

<h3>Theoretical Lenses on Adoption</h3>
<table>
<thead><tr><th>Framework</th><th>Focus</th><th>Insight for water</th></tr></thead>
<tbody>
<tr><td>Diffusion of innovations</td><td>Attributes of innovations and adopters</td><td>Trialability and observability matter where failure is risky</td></tr>
<tr><td>Technological innovation systems</td><td>Functions such as knowledge creation, legitimacy and market formation</td><td>Identifies which system function is blocking progress</td></tr>
<tr><td>Multi-level perspective</td><td>Interaction of niches, regimes and wider landscape pressures</td><td>Centralized infrastructure regimes resist decentralized niches until pressures such as drought open windows</td></tr>
<tr><td>Path dependence and lock-in</td><td>How past investments constrain future options</td><td>Long-lived networks and standards favor incremental change</td></tr>
</tbody>
</table>

<h3>Methodological Challenges</h3>
<p>Evaluating innovations rigorously is difficult. Pilots are small, context-specific and often evaluated by their proponents, limiting generalizability. Techno-economic analysis and life-cycle assessment depend on assumptions about scale, energy mix and lifetime that can reverse conclusions. Comparing a mature incumbent with an immature alternative raises the problem of learning curves: costs may fall with deployment, but projecting how much is uncertain. Causal evaluation of digital tools is complicated by simultaneous organizational changes. Mixed methods, including case comparisons, field experiments where ethical and feasible, and longitudinal studies, are increasingly used.</p>

<h3>Contested Questions</h3>
<ol>
<li>Should innovation priority go to high-tech advances or to diffusing proven, simple technologies to unserved populations?</li>
<li>Does decentralization improve resilience and equity, or fragment responsibility and quality oversight?</li>
<li>How should the environmental burden of residuals, such as brine or contaminant concentrates, be counted in technology comparisons?</li>
<li>Does digitalization empower utilities or create new dependencies on proprietary platforms?</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Durable, scalable materials that maintain performance in complex real waters.</li>
<li>Treatment trains that destroy persistent contaminants with acceptable energy demand.</li>
<li>Standardized protocols for reporting field performance and costs to enable meta-analysis.</li>
<li>Innovation system studies comparing countries and utility structures.</li>
<li>Participatory design methods that integrate local and Indigenous knowledge with consent and shared benefit.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'winnovq1',
      question: {
        ELEMENTARY: 'What do water sensors do?',
        MIDDLE_SCHOOL: 'What is a smart meter?',
        HIGH_SCHOOL: 'What is atmospheric water generation?',
        UNDERGRADUATE: 'What is a water accelerator?',
        GRADUATE: 'What is technology transfer?',
        PHD: 'What are bio-inspired materials?',
      },
      options: {
        ELEMENTARY: ['Measure things about water, like how much is flowing or how clean it is', 'Make rain fall from the sky', 'Catch fish in rivers', 'Paint the pipes blue'],
        MIDDLE_SCHOOL: ['A meter that tracks water use frequently and sends the data automatically', 'A meter that must be read by hand once a year', 'A ruler for measuring pipes', 'A meter that measures electricity only'],
        HIGH_SCHOOL: ['Extracting water from humid air by cooling it or using absorbing materials', 'Predicting tomorrow\'s weather', 'Studying the layers of the atmosphere', 'Pumping water into clouds'],
        UNDERGRADUATE: ['A program that mentors and funds early-stage water companies', 'A pump that makes water flow faster', 'A chemical that speeds up treatment', 'A tax on water startups'],
        GRADUATE: ['Moving knowledge and inventions from research into products and practical use', 'Moving water between two river basins', 'Transferring ownership of a utility', 'Sending data between two computers'],
        PHD: ['Materials designed by imitating natural structures', 'Only materials made from living organisms', 'Materials that cannot be manufactured', 'Any material found in a laboratory'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Sensors measure water, like how much is flowing and how clean it is, so people can look after it.',
        MIDDLE_SCHOOL: 'Smart meters record use often and send the data automatically, helping spot leaks and bill accurately.',
        HIGH_SCHOOL: 'Atmospheric water generators pull water out of humid air, though they use a lot of energy.',
        UNDERGRADUATE: 'Accelerators mentor and fund early-stage companies and connect them with customers.',
        GRADUATE: 'Technology transfer moves research results into products and real-world use through licensing, spin-outs and collaboration.',
        PHD: 'Bio-inspired materials copy natural structures such as water-repellent leaves or fog-collecting surfaces.',
      },
    },
    {
      id: 'winnovq2',
      question: {
        ELEMENTARY: 'How do some desert beetles inspire inventors?',
        MIDDLE_SCHOOL: 'What is a prototype?',
        HIGH_SCHOOL: 'What is non-revenue water?',
        UNDERGRADUATE: 'What is the "valley of death" in technology development?',
        GRADUATE: 'What is a demand-pull policy?',
        PHD: 'What does the multi-level perspective suggest about decentralized water technologies?',
      },
      options: {
        ELEMENTARY: ['They dig deep wells', 'They catch tiny drops of water from foggy air', 'They drink from the ocean', 'They build dams'],
        MIDDLE_SCHOOL: ['A final product sold in shops', 'An early working model built to test an idea', 'A type of water pipe', 'A water bill'],
        HIGH_SCHOOL: ['Bottled water sold in stores', 'Treated water lost to leaks, theft or metering errors before billing', 'Rainwater that falls on parks', 'Water that is free for schools'],
        UNDERGRADUATE: ['A dry valley with no water', 'The funding gap between a prototype and first commercial deployments', 'A period when water prices fall', 'The end of a technology\'s life'],
        GRADUATE: ['Funding basic research only', 'Policies like standards, pricing or procurement that create markets for new technologies', 'Banning all new technologies', 'Lowering all water prices to zero'],
        PHD: ['Niches always replace regimes quickly', 'Centralized regimes resist decentralized niches until landscape pressures such as drought open windows', 'Technology adoption has nothing to do with institutions', 'Regimes and niches never interact'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Some desert beetles collect fog drops on their backs, and scientists copy this idea.',
        MIDDLE_SCHOOL: 'A prototype is an early model used to test and improve an idea before it is used widely.',
        HIGH_SCHOOL: 'Non-revenue water is water that was treated and pumped but lost before customers were billed.',
        UNDERGRADUATE: 'Many startups struggle to find money between a working prototype and their first real sales.',
        GRADUATE: 'Demand pull creates markets for innovation through standards, pricing and public purchasing.',
        PHD: 'Established centralized systems resist change until outside pressures create openings for niche innovations.',
      },
    },
    {
      id: 'winnovq3',
      question: {
        ELEMENTARY: 'What is the first step in inventing something?',
        MIDDLE_SCHOOL: 'How do acoustic sensors help find leaks?',
        HIGH_SCHOOL: 'What is a key limitation of artificial intelligence in water systems?',
        UNDERGRADUATE: 'What does total cost of ownership include?',
        GRADUATE: 'What is a regulatory sandbox?',
        PHD: 'What is a common problem when emerging technologies move from the lab to real water?',
      },
      options: {
        ELEMENTARY: ['Sell it in a shop', 'Give up', 'Find a problem to solve', 'Paint it a nice color'],
        MIDDLE_SCHOOL: ['They taste the water', 'They take photos of the sky', 'They listen for the sound of water escaping from pipes', 'They measure the temperature outside'],
        HIGH_SCHOOL: ['It never needs electricity', 'It always works perfectly', 'Poor or missing data can lead to wrong predictions', 'It cannot use numbers'],
        UNDERGRADUATE: ['Only the purchase price', 'Only the cost of marketing', 'Purchase, energy, maintenance and replacement over the full lifetime', 'Only the cost of shipping'],
        GRADUATE: ['A playground near a treatment plant', 'A type of sand filter', 'A controlled arrangement for testing new approaches under adapted rules', 'A permanent ban on new technology'],
        PHD: ['Materials always perform better in the field', 'Real water is always simpler than lab water', 'Fouling, scaling and material stability problems reduce performance', 'Costs always fall to zero'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Inventing starts by finding a problem, like a leaky pipe, and then thinking of ideas.',
        MIDDLE_SCHOOL: 'Water escaping from pressurized pipes makes a sound that acoustic sensors can pick up.',
        HIGH_SCHOOL: 'AI is only as good as its data, so people must still check and interpret its results.',
        UNDERGRADUATE: 'Total cost of ownership counts every cost over the technology\'s life, not just the price tag.',
        GRADUATE: 'Sandboxes let innovators test new approaches safely under adapted regulatory rules.',
        PHD: 'Real waters are complex, and fouling, scaling and degradation often reduce field performance.',
      },
    },
    {
      id: 'winnovq4',
      question: {
        ELEMENTARY: 'How can air give us water?',
        MIDDLE_SCHOOL: 'When does an invention become an innovation?',
        HIGH_SCHOOL: 'What is a digital twin?',
        UNDERGRADUATE: 'Why can the same leak-detection technology be worth more in one city than another?',
        GRADUATE: 'Why can prescriptive standards slow innovation?',
        PHD: 'Why do learning curves complicate comparing new and mature technologies?',
      },
      options: {
        ELEMENTARY: ['By blowing very hard', 'Air is made of rocks', 'Air has no water in it', 'When air cools, its hidden water turns into drops'],
        MIDDLE_SCHOOL: ['When it is drawn on paper', 'When it gets a name', 'When it is very expensive', 'When people actually start using it'],
        HIGH_SCHOOL: ['A pair of identical pumps', 'A backup water tank', 'A second water utility', 'A computer model of a real water system updated with live data'],
        UNDERGRADUATE: ['Leak detection only works in large cities', 'Water is the same price everywhere', 'Startups charge random prices', 'The value of saved water depends on the local marginal cost of supply'],
        GRADUATE: ['They are always too weak', 'They never apply to utilities', 'They make every technology illegal', 'They can lock in incumbent technologies instead of specifying outcomes'],
        PHD: ['Mature technologies always get more expensive', 'New technologies never improve', 'Costs are known exactly in advance', 'Costs of new technologies may fall with deployment, but by how much is uncertain'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Air holds invisible water that turns into drops when it cools, like on a cold glass.',
        MIDDLE_SCHOOL: 'An invention becomes an innovation once people actually put it to use.',
        HIGH_SCHOOL: 'A digital twin is a live computer model that mirrors what is happening in the real system.',
        UNDERGRADUATE: 'In a water-scarce city with costly new supply, each saved cubic meter is worth much more.',
        GRADUATE: 'Rules that name a specific technology make it hard for better alternatives to compete.',
        PHD: 'An immature option may become cheaper with experience, but projecting that decline is uncertain.',
      },
    },
    {
      id: 'winnovq5',
      question: {
        ELEMENTARY: 'What does a filter do?',
        MIDDLE_SCHOOL: 'Why do water utilities usually run pilot tests before using new tools everywhere?',
        HIGH_SCHOOL: 'What does ultraviolet disinfection do?',
        UNDERGRADUATE: 'Why are sales cycles long for water startups?',
        GRADUATE: 'Why might small and rural utilities fall behind in adopting innovations?',
        PHD: 'What does the technological innovation systems framework help identify?',
      },
      options: {
        ELEMENTARY: ['Catches dirt and lets cleaner water pass through', 'Makes water hotter', 'Turns water into juice', 'Makes water disappear'],
        MIDDLE_SCHOOL: ['Because safe drinking water is very important, so tools must be proven first', 'Because pilots are just for fun', 'Because tests make water taste better', 'Because new tools are always free'],
        HIGH_SCHOOL: ['Uses UV light to inactivate microbes without adding chemicals', 'Adds salt to the water', 'Heats water until it boils away', 'Turns water into ice'],
        UNDERGRADUATE: ['Utilities are fragmented, risk-averse and use formal procurement with long-lived assets', 'Startups refuse to sell', 'Water has no customers', 'Laws ban all purchases'],
        GRADUATE: ['They often have low absorptive capacity, with limited staff and funds to evaluate and adopt new tools', 'They have too much money', 'They do not need water services', 'They are always first to adopt'],
        PHD: ['Which system function, such as legitimacy or market formation, is blocking progress', 'The exact price of every product', 'Only the chemistry of a membrane', 'The weather in a given year'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A filter has tiny holes that trap dirt while cleaner water passes through.',
        MIDDLE_SCHOOL: 'Pilots let utilities check that a tool is reliable and safe before using it widely.',
        HIGH_SCHOOL: 'UV light damages microbes so they cannot cause infection, without adding chemicals to the water.',
        UNDERGRADUATE: 'Fragmented, cautious public customers with formal procurement and long asset lives buy slowly.',
        GRADUATE: 'Limited staff, skills and funding make it harder for small utilities to recognize and use new knowledge.',
        PHD: 'The framework examines functions like knowledge creation, legitimacy and market formation to find bottlenecks.',
      },
    },
  ],
}

export default expansion
