import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-reuse-recycling',
  lessons: [
    {
      id: 'ws-reuse-1',
      title: 'Using Water Again',
      content: {
        ELEMENTARY: `
<h2>Water Can Be Used Again!</h2>
<p>Did you know the water on Earth is very, very old? The same water has been going around and around for millions of years. Rain falls, rivers flow, and the sun lifts water back into the clouds. People can copy nature and use water more than once too. This is called water reuse, or water recycling.</p>

<h3>Where Does Used Water Go?</h3>
<p>When you flush the toilet, wash your hands or take a bath, the water goes down the drain. It travels through pipes under the street to a big cleaning place. There, machines and tiny helpful living things called microbes clean the water. Then the clean water can go back to a river, or it can be used again.</p>
<ul>
<li><strong>Drain:</strong> the hole in a sink or tub where used water goes away</li>
<li><strong>Wastewater:</strong> water that has already been used in homes, schools and shops</li>
<li><strong>Microbes:</strong> tiny living things, too small to see, that help eat up the dirt in water</li>
</ul>

<h3>What Can Recycled Water Do?</h3>
<p>Cleaned water can water parks and football fields. It can help farmers grow food. Factories can use it to cool their machines. In some places, it is cleaned so well that it can even become drinking water again. Pipes that carry recycled water for watering plants are often painted purple, so people know it is different.</p>
<ul>
<li><strong>Recycled water:</strong> used water that has been cleaned so it can do a new job</li>
<li><strong>Purple pipe:</strong> a special pipe color that tells people the water inside is recycled</li>
</ul>

<h3>Reuse at Home</h3>
<p>You can be a water recycler too! Here are some ideas to try with a grown-up:</p>
<ol>
<li>Pour leftover drinking water from your bottle onto a plant instead of down the sink.</li>
<li>Catch the cold water that runs while the shower warms up in a bucket, then use it to water the garden.</li>
<li>Use the water from rinsing fruit and vegetables to water flowers.</li>
<li>Never pour paint, oil or medicine down the drain, because they make water harder to clean.</li>
</ol>

<h3>Think About It</h3>
<p>Every drop you see today might once have been in a dinosaur's footprint puddle! Water is too precious to use only once. When we clean it and use it again, we leave more water in rivers for fish, birds and everyone else.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Turning Wastewater Into a Resource</h2>
<p>For a long time, people treated used water as something to get rid of. Today, many cities see it differently. Wastewater is a reliable supply that is produced every single day, even during a drought. With the right treatment, it can be cleaned and used again. This is called water reuse or water recycling.</p>

<h3>How Wastewater Is Cleaned</h3>
<p>A wastewater treatment plant cleans water in stages. Each stage removes different things:</p>
<ol>
<li><strong>Preliminary treatment:</strong> screens catch rags, sticks and plastic, and grit settles out.</li>
<li><strong>Primary treatment:</strong> water sits in big tanks so heavier solids sink and grease floats.</li>
<li><strong>Secondary treatment:</strong> microbes eat dissolved food waste and other organic matter.</li>
<li><strong>Tertiary treatment:</strong> extra filtering and disinfection make the water clean enough for reuse.</li>
<li><strong>Advanced treatment:</strong> very fine membranes and strong ultraviolet light can make water pure enough to drink.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Water reuse:</strong> using treated wastewater for a new, helpful purpose</li>
<li><strong>Effluent:</strong> the treated water that flows out of a wastewater treatment plant</li>
<li><strong>Disinfection:</strong> killing or inactivating germs, often with chlorine or ultraviolet light</li>
<li><strong>Non-potable:</strong> water that is safe for some jobs, like watering, but not for drinking</li>
<li><strong>Potable:</strong> water that is safe enough for people to drink</li>
<li><strong>Greywater:</strong> lightly used water from sinks, showers and washing machines, but not toilets</li>
</ul>

<h3>Matching the Water to the Job</h3>
<p>Not every job needs drinking-quality water. Engineers try to match how clean the water is to what it will be used for. This saves energy and money.</p>
<table>
<thead><tr><th>Use</th><th>How clean the water must be</th></tr></thead>
<tbody>
<tr><td>Watering golf courses and parks</td><td>Treated and disinfected</td></tr>
<tr><td>Cooling towers in factories and power plants</td><td>Treated, with some minerals removed</td></tr>
<tr><td>Flushing toilets in big buildings</td><td>Treated and disinfected</td></tr>
<tr><td>Refilling underground aquifers</td><td>Highly treated</td></tr>
<tr><td>Drinking water</td><td>Advanced treatment with several safety steps</td></tr>
</tbody>
</table>

<h3>Why Some People Worry</h3>
<p>Some people feel uneasy about drinking water that was once in a toilet. Scientists call this the "yuck factor." But all water on Earth has been recycled by nature many times. Modern advanced treatment can make recycled water as clean as, or cleaner than, many natural sources. Clear information, open tours of treatment plants and careful testing help communities build trust.</p>

<h3>Why It Matters</h3>
<p>Reusing water means less water must be taken from rivers and underground. It also keeps treated wastewater from adding nutrients to lakes and bays. In dry regions, reuse is becoming an important part of a water supply that does not depend on rain.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Recycling: Applications and Treatment Requirements</h2>
<p>Water reuse means deliberately treating wastewater so it can serve a new purpose. It is sometimes described as "drought-proof" water, because cities keep producing wastewater even when rainfall fails. However, reuse is only safe when treatment matches the intended use and when several layers of protection are in place. This lesson looks at the types of reuse, the treatment needed for each and the trade-offs involved.</p>

<h3>Types of Reuse</h3>
<ul>
<li><strong>Non-potable reuse:</strong> using recycled water for irrigation, industry, toilet flushing or cooling, delivered in separate pipes</li>
<li><strong>Indirect potable reuse:</strong> putting highly treated water into a natural buffer such as an aquifer or reservoir before it is withdrawn and treated again for drinking</li>
<li><strong>Direct potable reuse:</strong> sending advanced-treated water straight into a drinking water system without an environmental buffer</li>
<li><strong>De facto reuse:</strong> unplanned reuse that happens when a town downstream draws water from a river that contains another town's treated wastewater</li>
<li><strong>Greywater reuse:</strong> collecting water from showers and laundry to use on site, usually for irrigation or toilets</li>
</ul>
<p>De facto reuse is surprisingly common. Many river cities already drink water that contains some treated wastewater from upstream communities, which is one reason planned reuse with strict standards can actually be safer.</p>

<h3>The Advanced Treatment Train</h3>
<p>For potable reuse, a common sequence after conventional wastewater treatment is:</p>
<ol>
<li><strong>Microfiltration or ultrafiltration:</strong> membranes with tiny pores remove particles, bacteria and most protozoa.</li>
<li><strong>Reverse osmosis:</strong> high pressure forces water through a dense membrane that blocks salts, many chemicals and viruses.</li>
<li><strong>Advanced oxidation:</strong> ultraviolet light combined with an oxidant such as hydrogen peroxide breaks down remaining trace chemicals.</li>
<li><strong>Stabilization:</strong> minerals are added back so the very pure water does not corrode pipes.</li>
</ol>

<h3>Comparing Reuse Options</h3>
<table>
<thead><tr><th>Option</th><th>Treatment level</th><th>Main advantage</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Landscape irrigation</td><td>Tertiary plus disinfection</td><td>Simple and affordable</td><td>Needs a separate pipe network; demand drops in winter</td></tr>
<tr><td>Industrial cooling</td><td>Tertiary, sometimes softening</td><td>Large, steady demand near plants</td><td>Scaling and corrosion control</td></tr>
<tr><td>Indirect potable reuse</td><td>Advanced treatment</td><td>Natural buffer adds time and dilution</td><td>Requires a suitable aquifer or reservoir</td></tr>
<tr><td>Direct potable reuse</td><td>Advanced treatment with extra monitoring</td><td>Uses existing drinking water pipes</td><td>Public acceptance and very strict reliability</td></tr>
</tbody>
</table>

<h3>Trade-offs</h3>
<p>Advanced treatment, especially reverse osmosis, uses a good deal of energy, although usually less than desalinating seawater. Reverse osmosis also produces a concentrate stream that must be disposed of carefully, which is hard for inland cities. Reuse can reduce flows returned to rivers, which may harm downstream users or ecosystems that depend on that water. Planners must weigh these effects against the benefits of a local, reliable supply.</p>

<h3>Real-World Applications</h3>
<p>Recycled water irrigates farms in arid regions, cools power plants, supplies factories that need large volumes, and in several dry regions around the world it is purified to drinking standards. Space stations recycle almost all their water, showing how far the technology can go when every drop counts.</p>
`,
        UNDERGRADUATE: `
<h2>Potable Reuse: Treatment, Regulation and Public Acceptance</h2>
<p>Potable reuse turns municipal wastewater into a drinking water source. It sits at the intersection of engineering, public health regulation and social psychology. A technically sound project can still fail if the public does not trust it, and a popular project can fail if reliability cannot be demonstrated. This lesson analyzes the main reuse pathways, the multiple-barrier principle, how regulators set treatment targets and what research shows about acceptance.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Multiple barrier approach:</strong> using several independent treatment and monitoring steps so the failure of one does not compromise public health</li>
<li><strong>Log removal value:</strong> a measure of pathogen reduction where each log represents a tenfold decrease in concentration</li>
<li><strong>Environmental buffer:</strong> an aquifer, reservoir or river that provides retention time, dilution and some natural treatment before withdrawal</li>
<li><strong>Critical control point:</strong> a treatment step where monitoring can confirm, in near real time, that a barrier is working</li>
<li><strong>Surrogate parameter:</strong> an easily measured indicator, such as conductivity or total organic carbon, used to infer membrane or process performance</li>
<li><strong>Fit-for-purpose treatment:</strong> designing treatment to the quality needed for a specific end use rather than one standard for all</li>
</ul>

<h3>Indirect Versus Direct Potable Reuse</h3>
<p>Indirect potable reuse relies partly on an environmental buffer. Water may be injected into an aquifer or spread in basins so it percolates through soil, or it may be added to a surface reservoir. The buffer provides time to detect and respond to a treatment failure and dilutes any residual contaminants. Direct potable reuse removes that buffer, so it must replace the buffer's functions with engineered storage, stricter online monitoring and greater treatment redundancy. As a result, direct schemes usually carry more stringent log removal targets and more intensive monitoring requirements.</p>

<h3>Setting Treatment Targets</h3>
<p>Regulators commonly set pathogen targets for three groups: viruses, protozoa such as Giardia and Cryptosporidium, and bacteria. Each treatment step is given credit for a certain number of logs of removal, based on validation testing and ongoing monitoring. The total credited removal must exceed the target with a safety margin. Chemical safety is managed through drinking water standards plus monitoring for indicator compounds that reveal whether trace organics are passing through.</p>
<table>
<thead><tr><th>Treatment step</th><th>Main targets</th><th>How performance is verified</th></tr></thead>
<tbody>
<tr><td>Secondary biological treatment</td><td>Organic matter, nutrients, some pathogens</td><td>Biochemical oxygen demand, ammonia, turbidity</td></tr>
<tr><td>Membrane filtration</td><td>Protozoa, bacteria, particles</td><td>Pressure decay tests, turbidity</td></tr>
<tr><td>Reverse osmosis</td><td>Salts, many organics, viruses</td><td>Conductivity and total organic carbon removal</td></tr>
<tr><td>UV advanced oxidation</td><td>Trace organics, pathogens</td><td>UV dose, indicator compound removal</td></tr>
<tr><td>Environmental buffer</td><td>Time, dilution, natural attenuation</td><td>Tracer studies, travel time estimates</td></tr>
</tbody>
</table>

<h3>Public Acceptance</h3>
<p>Studies of reuse projects show that acceptance depends less on technical detail than on trust in the institutions running the system, the perceived need for new water, and how the project is described. Terms such as "toilet to tap" have hurt projects, while early engagement, transparent data, demonstration facilities where visitors can taste the product, and framing around water purification have helped. Acceptance is generally higher for uses with less personal contact, such as irrigation, than for drinking.</p>

<h3>Quantitative Reasoning</h3>
<p>Consider why multiple barriers matter. If one barrier removes ninety-nine percent of viruses, that is two logs. Stacking three independent barriers, each achieving several logs, can give total removal in the range of many logs, so even a partial failure of one barrier leaves a large margin. The key word is independent: barriers that fail for the same reason, such as a power outage, do not add as much protection as their logs suggest.</p>

<h3>Applied Checklist for Evaluating a Reuse Proposal</h3>
<ol>
<li>Identify the end use and the quality it truly requires.</li>
<li>List each barrier, its credited removal and how it is monitored.</li>
<li>Check for common-mode failures that could disable several barriers at once.</li>
<li>Plan concentrate and residuals management, especially for inland sites.</li>
<li>Assess downstream effects of reduced river discharge.</li>
<li>Design a public engagement process that starts before major decisions.</li>
</ol>
`,
        GRADUATE: `
<h2>Advanced Treatment, One Water Planning and Reuse Economics</h2>
<p>At the planning scale, water reuse is not just a treatment technology but a strategic choice about how a region manages all of its water. The "one water" approach treats drinking water, wastewater, stormwater and recycled water as parts of one resource rather than as separate businesses. This lesson examines how reuse fits into integrated planning, how its costs compare with alternatives, how projects are financed and governed, and who gains or loses.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>One water:</strong> an integrated planning approach that manages drinking water, wastewater, stormwater and recycled water as a single connected resource</li>
<li><strong>Levelized cost of water:</strong> the lifetime cost of a supply option divided by the total water it delivers, allowing options to be compared on one basis</li>
<li><strong>Supply reliability value:</strong> the economic value of a source that remains available during drought, beyond its average yield</li>
<li><strong>Avoided cost:</strong> the expense a utility no longer incurs, such as new imports or nutrient discharge upgrades, because of a reuse project</li>
<li><strong>Centralized versus decentralized reuse:</strong> the choice between large regional plants and smaller building or district systems close to demand</li>
<li><strong>Concentrate management:</strong> the handling and disposal of the salty reject stream produced by reverse osmosis</li>
</ul>

<h3>Reuse Within a One Water Portfolio</h3>
<p>One water planning asks which combination of conservation, stormwater capture, groundwater management, imports, desalination and reuse meets demand at least cost and risk. Reuse often performs well because its source is local and steady. Yet it interacts with other parts of the portfolio: aggressive indoor conservation reduces wastewater flows and can concentrate salts, which affects reuse treatment; upstream reuse reduces river flows that downstream users rely on. Integrated models are needed to see these interactions.</p>

<h3>Comparing Supply Options</h3>
<table>
<thead><tr><th>Option</th><th>Relative cost</th><th>Drought reliability</th><th>Key planning issue</th></tr></thead>
<tbody>
<tr><td>Conservation and efficiency</td><td>Usually lowest</td><td>Reduces demand rather than adding supply</td><td>Demand hardening limits future savings</td></tr>
<tr><td>Non-potable reuse</td><td>Low to moderate, driven by pipe networks</td><td>High</td><td>Separate distribution and seasonal demand</td></tr>
<tr><td>Potable reuse</td><td>Moderate to high</td><td>High</td><td>Energy, concentrate and public acceptance</td></tr>
<tr><td>Seawater desalination</td><td>Typically highest</td><td>Very high</td><td>Energy, marine impacts and coastal siting</td></tr>
<tr><td>Imported water</td><td>Varies widely</td><td>Often vulnerable to regional drought</td><td>Dependence on other basins and agreements</td></tr>
</tbody>
</table>
<p>A common finding is that potable reuse can be cheaper than non-potable reuse at scale, because it uses existing drinking water pipes rather than building a new purple pipe network. That makes the choice between them partly an infrastructure question rather than just a treatment one.</p>

<h3>Economics and Finance</h3>
<p>Reuse projects are capital-intensive and long-lived. Utilities typically fund them through rates, bonds, connection charges and sometimes grants. Valuation should include avoided costs, such as reduced nutrient discharge upgrades or deferred imports, and the insurance value of drought-resilient supply, which simple cost-per-unit comparisons miss. Pricing recycled water below its cost to encourage uptake can create cross-subsidies that need to be justified transparently.</p>

<h3>Governance and Institutional Barriers</h3>
<ul>
<li>Wastewater and drinking water are often run by different agencies, which must agree on quality, responsibility and revenue.</li>
<li>Water rights rules may limit who owns treated effluent and whether it can be reused instead of returned to a river.</li>
<li>Regulatory frameworks for direct potable reuse are still developing in many places.</li>
<li>Operator training and certification must keep pace with more complex treatment.</li>
</ul>

<h3>Equity Considerations</h3>
<p>Reuse costs reach customers through bills, so affordability programs matter. Benefits such as drought reliability are shared widely, while impacts such as reduced river flows, concentrate discharge or facility siting may fall on particular communities. Engagement should include downstream users and communities near plants, not only the general public.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define portfolio objectives: cost, reliability, environmental flows, energy and equity.</li>
<li>Compare options on levelized cost plus reliability and avoided-cost values.</li>
<li>Model interactions with conservation, stormwater and downstream users.</li>
<li>Map institutional responsibilities and legal ownership of effluent.</li>
<li>Plan governance, monitoring and public communication for the life of the project.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Emerging Contaminants, Risk and Fit-for-Purpose Reuse</h2>
<p>Water reuse research has moved from proving that advanced treatment works to asking harder questions. Which contaminants matter, at what concentrations and in what mixtures? How should risk be quantified when data are sparse? How can treatment be tailored to each end use without over-engineering? This lesson surveys methods and debates in contaminants of emerging concern, quantitative risk assessment, monitoring and system design.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Contaminants of emerging concern:</strong> chemicals and microbes not routinely regulated, such as pharmaceuticals, personal care products and persistent industrial compounds</li>
<li><strong>Quantitative microbial risk assessment:</strong> a modeling framework that combines pathogen concentrations, treatment performance, exposure and dose-response to estimate infection risk</li>
<li><strong>Bioanalytical tools:</strong> cell-based assays that measure biological effects of whole mixtures, such as estrogenic or genotoxic activity</li>
<li><strong>Non-target analysis:</strong> high-resolution mass spectrometry approaches that screen for unknown compounds rather than a predefined list</li>
<li><strong>Transformation products:</strong> new compounds formed when parent chemicals are partly degraded by treatment or in the environment</li>
<li><strong>Antimicrobial resistance:</strong> the spread of resistant bacteria and resistance genes, for which wastewater is a recognized pathway</li>
</ul>

<h3>Contaminants of Emerging Concern</h3>
<p>Wastewater carries thousands of chemicals at low concentrations. Targeted analysis can measure only a small subset, which raises the problem of the unknown remainder. Research approaches include selecting indicator compounds that represent classes of behavior, using bioassays to capture mixture effects, and applying non-target screening to discover unexpected compounds. Persistent and mobile substances, including many per- and polyfluoroalkyl substances, are a particular concern because they resist oxidation and biological treatment and can pass through some barriers. Reverse osmosis removes many of them, but this moves the problem into the concentrate.</p>

<h3>Risk Assessment Methods</h3>
<p>Quantitative microbial risk assessment typically uses Monte Carlo simulation to propagate variability in raw pathogen loads, treatment performance and exposure. A central research theme is the representation of short-duration failures: average performance may be excellent, but brief off-spec events can dominate annual risk. Chemical risk assessment faces different challenges, including low-dose mixture effects and the lack of toxicity data for many compounds. Approaches such as thresholds of toxicological concern provide screening values when compound-specific data are absent, though their applicability is debated.</p>

<h3>Fit-for-Purpose Design</h3>
<p>Fit-for-purpose treatment aims to deliver only the quality each use requires, saving energy and cost. Research explores alternatives to full reverse osmosis for potable reuse, such as ozone combined with biologically active filtration and granular activated carbon, which avoid concentrate but may leave more dissolved salts and some persistent compounds. Decentralized building-scale systems raise questions about monitoring, operation and responsibility at small scales.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Is reverse osmosis necessary for potable reuse?</td><td>It provides a strong barrier but creates concentrate and energy burdens; carbon-based trains avoid these with different residual risks</td></tr>
<tr><td>How safe is safe enough?</td><td>Reference risk levels for infection are policy choices and differ between jurisdictions</td></tr>
<tr><td>How to regulate unknown chemicals</td><td>Compound-by-compound limits cannot keep pace with the number of chemicals in use</td></tr>
<tr><td>Role of the environmental buffer</td><td>Its protective value is hard to quantify, which complicates comparisons with direct reuse</td></tr>
<tr><td>Agricultural reuse and soil</td><td>Long-term accumulation of salts, metals and trace organics in soils and crops remains uncertain</td></tr>
</tbody>
</table>

<h3>Monitoring and Sensing</h3>
<p>Because laboratory pathogen assays take too long for process control, reuse relies on surrogates and online sensors. Research seeks surrogates that correlate robustly with pathogen and trace organic removal, and sensors that can detect membrane integrity breaches at higher resolution. Data-driven fault detection and digital twins of treatment trains are emerging, but validation for regulatory credit remains a barrier.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Linking bioassay responses to human health outcomes so mixture effects can inform standards.</li>
<li>Treatment and destruction options for persistent compounds in reverse osmosis concentrate.</li>
<li>Risk models that represent short failures, operator response and correlated barrier failures.</li>
<li>Understanding the role of reuse in the spread of antimicrobial resistance genes.</li>
<li>Life-cycle comparisons of reuse trains that include energy, residuals and chemical use.</li>
<li>Social science on trust, governance and how acceptance changes after projects operate.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wreuseq1',
      question: {
        ELEMENTARY: 'Can we use water more than once?',
        MIDDLE_SCHOOL: 'What can recycled water be used for?',
        HIGH_SCHOOL: 'What is indirect potable reuse?',
        UNDERGRADUATE: 'What is the multiple barrier approach?',
        GRADUATE: 'What does "one water" planning mean?',
        PHD: 'What are contaminants of emerging concern?',
      },
      options: {
        ELEMENTARY: ['Yes, after it is cleaned', 'No, never', 'Only on Sundays', 'No, water disappears after we use it'],
        MIDDLE_SCHOOL: ['Watering parks, cooling factories and even drinking after advanced treatment', 'Nothing at all', 'Only filling swimming pools', 'Only feeding fish'],
        HIGH_SCHOOL: ['Putting highly treated water into an aquifer or reservoir before it is withdrawn and treated again for drinking', 'Drinking wastewater with no treatment', 'Pouring treated water into the ocean', 'Using recycled water only on golf courses'],
        UNDERGRADUATE: ['Several independent treatment and monitoring steps so one failure does not compromise safety', 'A single very strong filter', 'Building walls around treatment plants', 'Testing water once a year'],
        GRADUATE: ['Managing drinking water, wastewater, stormwater and recycled water as one connected resource', 'Using only one source of fresh water', 'Selling water in one-liter bottles', 'Letting one agency set all water prices nationally'],
        PHD: ['Chemicals and microbes not routinely regulated, such as pharmaceuticals and persistent industrial compounds', 'Customer experience centers at utilities', 'Clean energy credits for treatment plants', 'Carbon emission controls on pumps'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Yes! Used water can be cleaned and used again, just like nature has done for millions of years.',
        MIDDLE_SCHOOL: 'Recycled water can irrigate parks, cool factories and, with advanced treatment, become drinking water.',
        HIGH_SCHOOL: 'Indirect potable reuse uses a natural buffer, such as an aquifer, before drinking water treatment.',
        UNDERGRADUATE: 'Independent barriers mean that if one step fails, the others still protect public health.',
        GRADUATE: 'One water planning treats all water streams as parts of a single resource to manage together.',
        PHD: 'These are compounds and organisms outside routine regulation whose risks are still being studied.',
      },
    },
    {
      id: 'wreuseq2',
      question: {
        ELEMENTARY: 'What color are many pipes that carry recycled water for plants?',
        MIDDLE_SCHOOL: 'What is greywater?',
        HIGH_SCHOOL: 'What does reverse osmosis do in an advanced treatment train?',
        UNDERGRADUATE: 'What does one log of pathogen removal mean?',
        GRADUATE: 'Why can potable reuse sometimes cost less than non-potable reuse at scale?',
        PHD: 'What is quantitative microbial risk assessment?',
      },
      options: {
        ELEMENTARY: ['Pink', 'Purple', 'Gold', 'Black and white stripes'],
        MIDDLE_SCHOOL: ['Water from toilets only', 'Lightly used water from sinks, showers and washing machines', 'Rainwater from clouds', 'Seawater'],
        HIGH_SCHOOL: ['Adds salt to the water', 'Forces water through a dense membrane that blocks salts, many chemicals and viruses', 'Heats water to boiling', 'Adds color to the water'],
        UNDERGRADUATE: ['A complete removal of all pathogens', 'A tenfold decrease in pathogen concentration', 'One pathogen removed per liter', 'A doubling of pathogen concentration'],
        GRADUATE: ['It needs no treatment', 'It uses existing drinking water pipes instead of a new separate network', 'It is always subsidized by the national government', 'It never uses energy'],
        PHD: ['A survey of customer opinions', 'A model combining pathogen levels, treatment performance, exposure and dose-response to estimate infection risk', 'A method for counting fish', 'A financial audit of utilities'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Purple pipes tell people that the water inside is recycled and meant for jobs like watering plants.',
        MIDDLE_SCHOOL: 'Greywater comes from sinks, showers and laundry, not toilets, and can be reused for things like watering.',
        HIGH_SCHOOL: 'Reverse osmosis uses pressure to push water through a membrane that holds back salts and many contaminants.',
        UNDERGRADUATE: 'Each log is a factor of ten, so two logs is a hundredfold reduction.',
        GRADUATE: 'Building a separate purple pipe network is expensive, while potable reuse can use the pipes already in place.',
        PHD: 'It propagates variability in sources, treatment and exposure, often with Monte Carlo methods, to estimate risk.',
      },
    },
    {
      id: 'wreuseq3',
      question: {
        ELEMENTARY: 'Which of these should never go down the drain?',
        MIDDLE_SCHOOL: 'What happens in secondary treatment?',
        HIGH_SCHOOL: 'What is de facto reuse?',
        UNDERGRADUATE: 'Why does direct potable reuse usually need stricter requirements than indirect potable reuse?',
        GRADUATE: 'What is an avoided cost in reuse economics?',
        PHD: 'Why are persistent and mobile substances such as many PFAS a challenge for reuse?',
      },
      options: {
        ELEMENTARY: ['Clean rinse water', 'Bath water', 'Paint, oil and medicine', 'Water from washing hands'],
        MIDDLE_SCHOOL: ['Water is frozen', 'Rags and sticks are removed with screens', 'Microbes eat dissolved food waste and other organic matter', 'Salt is added to the water'],
        HIGH_SCHOOL: ['Reuse that is forbidden by law', 'Reuse only in space stations', 'Unplanned reuse when a downstream town draws water containing upstream treated wastewater', 'Reuse of bottled water'],
        UNDERGRADUATE: ['It uses lower quality pipes', 'It has more customers', 'It lacks an environmental buffer, so engineered storage, monitoring and redundancy must replace it', 'It is always cheaper'],
        GRADUATE: ['A cost that customers refuse to pay', 'The price of recycled water', 'An expense the utility no longer incurs, such as new imports, because of the project', 'A cost that cannot be measured'],
        PHD: ['They are easy to oxidize', 'They only exist in seawater', 'They resist biological and oxidative treatment, and reverse osmosis moves them into the concentrate', 'They evaporate during treatment'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Paint, oil and medicine make water much harder to clean, so they should be taken to special collection places.',
        MIDDLE_SCHOOL: 'In secondary treatment, microbes break down the organic matter dissolved in the water.',
        HIGH_SCHOOL: 'Many river cities already use water that includes treated wastewater from upstream towns.',
        UNDERGRADUATE: 'Without the time and dilution of a buffer, direct schemes need more treatment redundancy and monitoring.',
        GRADUATE: 'Avoided costs, like deferred imports or discharge upgrades, are real benefits that simple unit-cost comparisons miss.',
        PHD: 'These compounds pass through many processes, and membranes concentrate them into the reject stream.',
      },
    },
    {
      id: 'wreuseq4',
      question: {
        ELEMENTARY: 'What tiny living things help clean used water?',
        MIDDLE_SCHOOL: 'What does "potable" mean?',
        HIGH_SCHOOL: 'What is a challenge of reverse osmosis for inland cities?',
        UNDERGRADUATE: 'What is a surrogate parameter in reuse monitoring?',
        GRADUATE: 'What legal issue can limit reuse projects?',
        PHD: 'What do bioanalytical tools measure in reuse research?',
      },
      options: {
        ELEMENTARY: ['Ants', 'Fish', 'Birds', 'Microbes'],
        MIDDLE_SCHOOL: ['Water used only for factories', 'Water that is frozen', 'Water that smells nice', 'Water that is safe to drink'],
        HIGH_SCHOOL: ['It makes water too cold', 'It needs seawater to work', 'It cannot remove any salts', 'Disposing of the salty concentrate stream'],
        UNDERGRADUATE: ['A replacement pipe', 'A backup power supply', 'A type of membrane', 'An easily measured indicator, such as conductivity, used to infer treatment performance'],
        GRADUATE: ['Pipes must be purple by law everywhere', 'Recycled water can never be sold', 'Utilities cannot hire operators', 'Water rights rules about who owns treated effluent and whether it must return to a river'],
        PHD: ['The cost of treatment chemicals', 'The color of recycled water', 'Only the salt content of water', 'Biological effects of whole chemical mixtures, such as estrogenic activity'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Microbes are tiny living things that eat the dirt in water at treatment plants.',
        MIDDLE_SCHOOL: 'Potable water is safe enough for people to drink.',
        HIGH_SCHOOL: 'Coastal plants can discharge concentrate to the sea, but inland cities have far fewer options.',
        UNDERGRADUATE: 'Surrogates like conductivity or total organic carbon can be measured quickly to confirm barriers are working.',
        GRADUATE: 'Ownership of effluent and obligations to downstream users can restrict whether it can be reused.',
        PHD: 'Bioassays capture combined effects of mixtures that compound-by-compound analysis would miss.',
      },
    },
    {
      id: 'wreuseq5',
      question: {
        ELEMENTARY: 'What can you do with leftover water from your water bottle?',
        MIDDLE_SCHOOL: 'Why is reuse helpful during a drought?',
        HIGH_SCHOOL: 'Which step breaks down remaining trace chemicals using UV light and an oxidant?',
        UNDERGRADUATE: 'According to research, what most affects public acceptance of potable reuse?',
        GRADUATE: 'How can aggressive indoor conservation affect reuse?',
        PHD: 'What is a key reason short treatment failures matter in reuse risk models?',
      },
      options: {
        ELEMENTARY: ['Pour it on a plant', 'Throw the bottle in a river', 'Leave it in the sun forever', 'Pour it on the floor'],
        MIDDLE_SCHOOL: ['Wastewater is still produced every day even when it does not rain', 'It makes it rain more', 'It stops people from using water', 'It freezes rivers'],
        HIGH_SCHOOL: ['Advanced oxidation', 'Screening', 'Primary settling', 'Stabilization'],
        UNDERGRADUATE: ['Trust in institutions, perceived need and how the project is described', 'The color of the treatment building', 'The number of pumps used', 'Only the price of water'],
        GRADUATE: ['It lowers wastewater flows and can concentrate salts, affecting reuse treatment', 'It has no connection to reuse', 'It always doubles reuse supply', 'It removes the need for treatment'],
        PHD: ['Brief off-spec events can dominate annual risk even when average performance is excellent', 'Short failures never affect risk', 'Models only use average values', 'Failures always last for years'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Giving leftover water to a plant is an easy way to use water twice!',
        MIDDLE_SCHOOL: 'Cities keep making wastewater during dry times, so recycled water is a steady supply.',
        HIGH_SCHOOL: 'Advanced oxidation combines UV light with an oxidant like hydrogen peroxide to destroy trace chemicals.',
        UNDERGRADUATE: 'Acceptance depends mostly on trust, need and framing, more than on technical details.',
        GRADUATE: 'Less wastewater with more concentrated salts changes the volume and treatment needs of reuse.',
        PHD: 'Risk is driven by the tails, so brief failures must be represented explicitly in models.',
      },
    },
  ],
}

export default expansion
