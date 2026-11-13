import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'biophilic-design',
  lessons: [
    {
      id: 'gb-bio-1',
      title: 'Nature in Buildings',
      content: {
        ELEMENTARY: `
<h2>Bringing Nature Indoors</h2>
<p>Have you ever felt calm sitting under a tree, or happy watching fish swim in a tank? That good feeling has a name. People love being near nature, and builders can design rooms that bring a little bit of nature inside. This is called <em>biophilic design</em>. It is a long word, but it simply means "designing with a love of nature."</p>

<h3>Why Nature Makes Us Feel Good</h3>
<p>For a very long time, people lived outside, close to trees, rivers and sky. Our bodies and brains still feel at home around green plants, sunlight and moving water. When we see these things, many of us breathe slower, feel less worried and can think more clearly.</p>
<ul>
<li><strong>Nature:</strong> all the living and wild things around us, like plants, animals, water and sky</li>
<li><strong>Sunlight:</strong> the bright, warm light from the Sun that helps plants grow and helps us wake up</li>
<li><strong>Calm:</strong> a quiet, peaceful feeling when your body and mind feel relaxed</li>
</ul>

<h3>Ways Buildings Can Bring Nature In</h3>
<p>Builders have lots of clever ideas for adding nature to schools, homes and hospitals:</p>
<ul>
<li><strong>Big windows:</strong> openings that let in daylight and let us see trees and clouds outside</li>
<li><strong>Indoor plants:</strong> green plants in pots that make a room look alive and fresh</li>
<li><strong>Living wall:</strong> a wall covered with growing plants, like a garden standing up</li>
<li><strong>Wood and stone:</strong> natural materials that feel nice to touch and look like the outdoors</li>
</ul>
<p>Some buildings even have small fountains, fish tanks, or courtyards with trees right in the middle!</p>

<h3>Things You Can Do</h3>
<ol>
<li>Grow a plant on your windowsill and give it water each week.</li>
<li>Open the curtains in the morning to let sunlight in.</li>
<li>Draw a picture of your dream classroom with nature inside.</li>
<li>Take a short break to look out of a window at the sky or trees.</li>
</ol>

<h3>Think About It</h3>
<p>Look around the room you are in right now. Can you spot anything from nature? A plant, a wooden table, a window with a view? If not, what one thing could you add to make the room feel more like the outdoors?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Biophilic Design: Connecting Buildings to Nature</h2>
<p>Most people today spend the majority of their time indoors, in classrooms, homes, offices and cars. Yet our species grew up outdoors. The idea of <em>biophilia</em>, which means "love of life" or "love of living things," suggests that humans have a natural tendency to seek connections with nature. Biophilic design uses that idea to make buildings that help people feel better, learn better and stay healthier.</p>

<h3>How Nature Affects Our Bodies</h3>
<p>When we feel stressed, our bodies release stress hormones, our heart beats faster and our muscles tense up. Researchers have found that views of greenery, natural light and natural sounds often help people relax and recover from stress more quickly. Looking at nature can also give our attention a rest. Concentrating on homework for a long time tires out the brain, and gentle natural scenes let it recharge.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Biophilia:</strong> the idea that people have a natural love of and need for living things</li>
<li><strong>Biophilic design:</strong> designing buildings and spaces so people can connect with nature</li>
<li><strong>Daylight:</strong> natural light from the sky that enters a building through windows and skylights</li>
<li><strong>Living wall:</strong> a vertical surface covered in growing plants, inside or outside a building</li>
<li><strong>Natural materials:</strong> materials such as wood, stone, cork and wool that come from nature</li>
<li><strong>Stress recovery:</strong> the process of the body calming down after feeling worried or pressured</li>
</ul>

<h3>Three Ways to Connect With Nature</h3>
<table>
<thead><tr><th>Type of connection</th><th>What it means</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Nature in the space</td><td>Real living things inside the building</td><td>Potted plants, aquariums, indoor gardens, water features</td></tr>
<tr><td>Natural analogues</td><td>Things that remind us of nature</td><td>Wood floors, leaf patterns on fabric, curved shapes like shells</td></tr>
<tr><td>Nature of the space</td><td>Room layouts that feel like natural places</td><td>A cozy reading nook, a high balcony with a view, open areas with light</td></tr>
</tbody>
</table>

<h3>Biophilic Design in Real Places</h3>
<p>Hospitals add gardens and windows facing trees so patients feel calmer. Schools use daylight and plants to create pleasant classrooms. Offices add living walls, wooden furniture and quiet corners. Even a city apartment can include balcony plants and furniture arranged to face a window.</p>

<h3>Why It Matters for Sustainability</h3>
<p>Biophilic design often works hand in hand with green building. Daylight reduces the need for electric lights. Plants on roofs and walls can help cool buildings and manage rainwater. And when people love a building, they tend to look after it and keep using it for many years, which avoids waste.</p>
`,
        HIGH_SCHOOL: `
<h2>Biophilic Design Principles and Health Benefits</h2>
<p>Biophilic design is an approach to architecture and interior design that intentionally connects people with nature. The term builds on the biophilia hypothesis, popularized by the biologist E. O. Wilson, which proposes that humans have an inborn affinity for life and lifelike processes. Designers translate this idea into specific features, often called patterns, that can be applied to almost any building type.</p>

<h3>Why Our Brains Respond to Nature</h3>
<p>Two well-known psychological theories help explain why nature can feel restorative:</p>
<ul>
<li><strong>Attention Restoration Theory:</strong> the idea that natural scenes gently hold our attention, letting the effortful focus used for work and study recover</li>
<li><strong>Stress Reduction Theory:</strong> the idea that nature triggers quick, positive emotional responses that lower physical signs of stress</li>
<li><strong>Prospect and refuge:</strong> a preference for places where we can see far out while feeling protected from behind</li>
<li><strong>Fractal pattern:</strong> a pattern that repeats at different scales, like branches on a tree or ferns, which people often find pleasant</li>
<li><strong>Circadian rhythm:</strong> the roughly 24-hour body clock that is set largely by exposure to daylight</li>
</ul>

<h3>Common Biophilic Patterns</h3>
<table>
<thead><tr><th>Pattern group</th><th>Design examples</th><th>Possible benefits</th></tr></thead>
<tbody>
<tr><td>Visual connection with nature</td><td>Windows facing trees, courtyards, indoor planting</td><td>Lower stress, better mood</td></tr>
<tr><td>Non-visual connection</td><td>Sound of water, scent of plants, textured wood</td><td>Relaxation, richer sensory experience</td></tr>
<tr><td>Dynamic and diffuse light</td><td>Skylights, light that changes through the day</td><td>Supports body clock and alertness</td></tr>
<tr><td>Thermal and airflow variability</td><td>Operable windows, shaded and sunny zones</td><td>Comfort and a sense of control</td></tr>
<tr><td>Material connection</td><td>Exposed timber, stone, natural fibers</td><td>Warmth, familiarity</td></tr>
<tr><td>Spatial qualities</td><td>Views across space, sheltered nooks, a bit of mystery</td><td>Feeling of safety and curiosity</td></tr>
</tbody>
</table>

<h3>Trade-Offs and Challenges</h3>
<p>Biophilic features are not free. Living walls need irrigation, lighting and maintenance; when neglected they can die or develop moisture problems. Large windows bring in light and views but can cause glare and unwanted heat gain unless shading and good glazing are used. Indoor water features must be kept clean. Good designers weigh these factors and choose features that the building owner can actually maintain.</p>

<h3>Real-World Applications</h3>
<ol>
<li><strong>Healthcare:</strong> healing gardens and nature views can make patient rooms less stressful for patients, families and staff.</li>
<li><strong>Schools:</strong> daylit classrooms with views and natural materials create pleasant learning environments.</li>
<li><strong>Workplaces:</strong> plants, daylight and break spaces with views can improve comfort and satisfaction.</li>
<li><strong>Housing:</strong> balconies, shared gardens and window placement give residents daily contact with nature.</li>
</ol>

<h3>Designing for Everyone</h3>
<p>Access to nature is not shared equally. Dense neighborhoods with few parks and buildings with small or no windows often house people with lower incomes. Biophilic design can be part of making healthy spaces available to all, not only luxury buildings. Simple, low-cost measures such as good window placement and shared planted spaces can go a long way.</p>
`,
        UNDERGRADUATE: `
<h2>Biophilic Design Patterns, Implementation and Evidence</h2>
<p>Biophilic design has moved from a philosophical idea to a structured design practice with named patterns, guidance documents and an expanding research base. For students of architecture, engineering and environmental health, the key skills are understanding the pattern vocabulary, judging the strength of evidence behind claimed benefits, and integrating biophilic strategies with energy, water and maintenance goals rather than treating them as decoration.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Biophilia hypothesis:</strong> the proposal that humans have an evolved tendency to affiliate with living systems and natural processes</li>
<li><strong>Restorative environment:</strong> a setting that helps people recover depleted attention, mood or physiological balance</li>
<li><strong>Direct experience of nature:</strong> contact with real living elements such as plants, water, animals, weather and daylight</li>
<li><strong>Indirect experience of nature:</strong> representations or echoes of nature such as natural materials, images, colors and organic forms</li>
<li><strong>Experience of space and place:</strong> spatial qualities such as prospect, refuge, mystery and transitional spaces that echo natural settings</li>
<li><strong>Living wall:</strong> a vertical planted system with integrated growing media and irrigation, either modular or hydroponic</li>
</ul>

<h3>Pattern Frameworks</h3>
<p>Several frameworks organize biophilic features. A widely used one groups patterns into three categories: nature in the space, natural analogues and nature of the space. Another distinguishes direct experience, indirect experience and experience of space and place. These frameworks overlap heavily; their main value is as a checklist that encourages designers to address multiple senses and spatial qualities rather than simply adding plants.</p>

<h3>Evaluating the Evidence</h3>
<table>
<thead><tr><th>Type of study</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Laboratory experiments with images or virtual reality</td><td>Good control of variables, can measure physiology</td><td>Short exposures, artificial settings</td></tr>
<tr><td>Hospital and school field studies</td><td>Real people in real buildings</td><td>Hard to isolate one feature from many others</td></tr>
<tr><td>Workplace surveys</td><td>Large samples, captures satisfaction</td><td>Self-report bias, correlation rather than causation</td></tr>
<tr><td>Before-and-after case studies</td><td>Practical, close to design decisions</td><td>Often no control group, possible novelty effects</td></tr>
</tbody>
</table>
<p>The overall pattern of evidence suggests that contact with nature is associated with lower stress, better mood and improved recovery of attention. Effect sizes vary widely across studies, and claims of large productivity or financial gains from single interventions should be treated with caution unless they come from well-controlled research.</p>

<h3>Integrating With Building Performance</h3>
<p>Biophilic strategies interact with other performance goals. Daylighting can reduce lighting energy but must be balanced against solar heat gain and glare. Indoor plants contribute to perceived air freshness, but their measurable effect on indoor air pollutants is generally small compared with mechanical ventilation. Exposed timber supports material connection and may store biogenic carbon, but it raises acoustic and fire design questions. Green roofs and walls can moderate surface temperatures and slow stormwater runoff while also offering views.</p>

<h3>Applied Method: A Biophilic Design Review</h3>
<ol>
<li>Map where occupants spend most time and what they can see, hear and touch from there.</li>
<li>Check access to daylight and views for each regularly occupied space.</li>
<li>Select a mix of patterns covering direct, indirect and spatial experiences.</li>
<li>Estimate maintenance needs, water use and lifecycle cost for living elements.</li>
<li>Coordinate with energy, acoustic and fire engineers before finalizing features.</li>
<li>Plan a post-occupancy survey to learn how occupants actually experience the space.</li>
</ol>
`,
        GRADUATE: `
<h2>Biophilic Design: Productivity, Health and Economics</h2>
<p>For building owners, employers and public agencies, the central question about biophilic design is not whether people like nature but whether investments in biophilic features produce measurable returns in health, performance and asset value. This lesson examines how those outcomes are measured, how business cases are constructed, and the institutional factors that determine whether biophilic design is adopted and maintained.</p>

<h3>Outcome Domains</h3>
<ul>
<li><strong>Occupant wellbeing:</strong> self-reported mood, satisfaction and perceived stress among people who use a building</li>
<li><strong>Cognitive performance:</strong> measured abilities such as attention, working memory and task accuracy</li>
<li><strong>Health outcomes:</strong> clinical indicators such as recovery time, pain medication use or sick leave</li>
<li><strong>Absenteeism and presenteeism:</strong> days missed from work and reduced effectiveness while present at work</li>
<li><strong>Asset value:</strong> the market value, rent levels and tenant demand associated with a property</li>
<li><strong>Total cost of ownership:</strong> the full cost of a feature over its life, including installation, maintenance and replacement</li>
</ul>

<h3>Constructing a Business Case</h3>
<p>In most organizations, staff salaries and benefits far exceed energy and maintenance costs over a building's life. This is why advocates argue that even small improvements in wellbeing or performance can outweigh the cost of biophilic features. The logic is sound, but the inputs are uncertain. A careful business case should state assumptions explicitly, use ranges rather than single figures, and test how results change if benefits turn out smaller than hoped.</p>
<table>
<thead><tr><th>Cost or benefit</th><th>Typical measurement approach</th><th>Key uncertainty</th></tr></thead>
<tbody>
<tr><td>Installation of living walls and planting</td><td>Contractor quotes</td><td>Design complexity, irrigation and lighting needs</td></tr>
<tr><td>Ongoing maintenance</td><td>Service contracts, staff time</td><td>Plant replacement rates, water and energy use</td></tr>
<tr><td>Wellbeing and satisfaction</td><td>Validated surveys before and after</td><td>Novelty effects, response bias</td></tr>
<tr><td>Absenteeism and retention</td><td>Human resources records</td><td>Many other drivers such as management and pay</td></tr>
<tr><td>Rental premium or tenant demand</td><td>Market comparisons</td><td>Confounding with location and building quality</td></tr>
</tbody>
</table>

<h3>Health Care and Education Settings</h3>
<p>Some of the earliest and most cited evidence for nature's benefits comes from hospitals, where views of nature and access to gardens have been linked with improved patient experience and recovery measures. In schools, daylight and views are associated with more positive learning environments. In both sectors, public procurement rules, tight capital budgets and separate maintenance budgets can work against features that cost more upfront but deliver benefits that accrue to other departments.</p>

<h3>Institutional Barriers</h3>
<ol>
<li><strong>Split incentives:</strong> developers pay the capital cost, while tenants and employers receive many of the benefits.</li>
<li><strong>Maintenance gaps:</strong> living features are designed without funded maintenance plans and decline after handover.</li>
<li><strong>Value engineering:</strong> biophilic elements are often the first items cut when budgets tighten.</li>
<li><strong>Measurement gaps:</strong> few organizations track occupant outcomes, so benefits remain invisible.</li>
</ol>

<h3>Equity and Access</h3>
<p>Biophilic design is frequently marketed through premium offices and luxury housing, yet the groups most exposed to stressful, low-quality environments are often in affordable housing, older schools, prisons and low-wage workplaces. Policy levers such as minimum daylight and view standards, public green space requirements and health-focused building standards can spread benefits more widely. Meaningful engagement with occupants, including Indigenous communities with long-standing relationships to local landscapes, can shape designs that reflect local ecology and culture rather than generic imagery.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define target outcomes and the populations who should benefit.</li>
<li>Establish baseline measures before intervention where possible.</li>
<li>Use comparison groups or staggered rollouts to separate effects from other changes.</li>
<li>Budget lifecycle maintenance alongside capital costs.</li>
<li>Report results transparently, including null or negative findings.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Biophilia and Biophilic Design</h2>
<p>Biophilic design rests on a mix of evolutionary theory, environmental psychology and building science. Its popularity has grown faster than its evidence base, which leaves rich territory for research on mechanisms, measurement and optimal application. This lesson surveys the theoretical foundations, methods and open debates that a doctoral researcher would need to engage with.</p>

<h3>Theoretical Mechanisms</h3>
<ul>
<li><strong>Attention Restoration Theory:</strong> proposes that natural settings engage involuntary, effortless attention, allowing directed attention capacity to recover</li>
<li><strong>Stress Reduction Theory:</strong> proposes rapid affective responses to natural scenes that reduce physiological arousal and support recovery from stress</li>
<li><strong>Perceptual fluency:</strong> the idea that natural scenes, including fractal patterns, are easier for the visual system to process and therefore feel pleasant</li>
<li><strong>Autonomic balance:</strong> the shift between sympathetic arousal and parasympathetic recovery, often indexed through heart rate variability</li>
<li><strong>Circadian entrainment:</strong> alignment of the body clock with daylight cycles, influenced by light intensity, spectrum and timing</li>
<li><strong>Dose-response relationship:</strong> how the size of an effect changes with the amount, duration or quality of nature exposure</li>
</ul>
<p>These mechanisms are not mutually exclusive. A daylit room with plants and views may act through attention, affect and circadian pathways simultaneously, which complicates attempts to attribute outcomes to specific features.</p>

<h3>Measurement Methods</h3>
<table>
<thead><tr><th>Method</th><th>What it captures</th><th>Methodological concerns</th></tr></thead>
<tbody>
<tr><td>Salivary cortisol and other biomarkers</td><td>Stress physiology</td><td>Strong daily cycles, sampling timing, individual variation</td></tr>
<tr><td>Heart rate variability and skin conductance</td><td>Autonomic arousal</td><td>Sensitive to movement, posture and caffeine</td></tr>
<tr><td>Cognitive test batteries</td><td>Attention and memory</td><td>Practice effects, ecological validity</td></tr>
<tr><td>Electroencephalography and eye tracking</td><td>Neural and visual responses</td><td>Laboratory constraints, interpretation of signals</td></tr>
<tr><td>Virtual and immersive environments</td><td>Controlled exposure to design variants</td><td>Uncertain transfer to real buildings over long periods</td></tr>
<tr><td>Experience sampling with wearable sensors</td><td>Real-time responses in daily life</td><td>Missing data, privacy, confounding</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ol>
<li><strong>Evolutionary versus learned preferences:</strong> how much of the response to nature is innate, and how much is shaped by culture, childhood experience and familiarity?</li>
<li><strong>Real versus simulated nature:</strong> do images, screens and artificial plants deliver comparable benefits to living systems, and under what conditions?</li>
<li><strong>Publication bias:</strong> are positive findings overrepresented, inflating apparent effect sizes in reviews?</li>
<li><strong>Novelty and expectation effects:</strong> do benefits persist once occupants become accustomed to a feature, and are some effects driven by expectations?</li>
<li><strong>Generalizability:</strong> much research involves young adults in a limited set of countries; whether results hold across ages, cultures and climates is uncertain.</li>
</ol>

<h3>Optimal Application</h3>
<p>A central applied problem is optimization under constraints. Designers must choose among features with different costs, maintenance demands and plausible effect pathways. Research that estimates dose-response curves, for example how view content, window size and viewing distance relate to outcomes, could support evidence-based guidance rather than checklists. Coupling biophilic variables with daylight, thermal and acoustic simulation would allow integrated optimization, but requires validated outcome models that do not yet exist for most features.</p>

<h3>Interdisciplinary and Ethical Dimensions</h3>
<p>Biophilic research draws on psychology, neuroscience, epidemiology, ecology and design. Ecological questions, such as whether planted buildings support urban biodiversity or merely aesthetic greenery, remain underexplored. Ethical issues include the use of nature imagery to make poor environments appear acceptable, and wellness monitoring that may intrude on worker privacy. Research partnerships with communities, including Indigenous knowledge holders, can broaden understanding of human relationships with place beyond a narrowly universal model.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal field studies with control groups that track outcomes over years rather than weeks.</li>
<li>Dose-response modeling for daylight, views and planting density.</li>
<li>Pre-registered trials and meta-analyses that test for publication bias.</li>
<li>Cross-cultural studies of nature preference and restoration.</li>
<li>Integrated metrics linking biophilic features with biodiversity and energy performance.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: "gbbioq1",
      question: {
        ELEMENTARY: "What makes us feel good inside buildings?",
        MIDDLE_SCHOOL: "What does biophilia mean?",
        HIGH_SCHOOL: "What is a biophilic design pattern?",
        UNDERGRADUATE: "What is a living wall?",
        GRADUATE: "Why do advocates argue small wellbeing gains can justify biophilic features?",
        PHD: "What does Attention Restoration Theory propose?",
      },
      options: {
        ELEMENTARY: ["Plants, sunlight and nature", "Concrete walls with no windows", "Loud machines", "Dark, empty rooms"],
        MIDDLE_SCHOOL: ["A natural love of and need for living things", "A fear of plants", "A building safety rule", "A type of houseplant"],
        HIGH_SCHOOL: ["A named design feature that connects people with nature", "A blueprint drawing", "A construction schedule", "A plant species"],
        UNDERGRADUATE: ["A vertical planted system with growing media and irrigation", "A wall that moves on wheels", "A plain concrete wall", "A wall covered in screens"],
        GRADUATE: ["Staff costs usually far exceed energy and maintenance costs over a building's life", "Plants are always free to maintain", "Energy is the largest cost in every organization", "Biophilic features never need budgets"],
        PHD: ["Natural settings engage effortless attention so directed attention can recover", "Nature has only visual effects", "No mechanism has been proposed", "Benefits come only from cleaner air"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Plants, sunlight, water sounds and natural materials help many people feel calm and happy.",
        MIDDLE_SCHOOL: "Biophilia means love of living things; people tend to feel good around nature.",
        HIGH_SCHOOL: "Patterns are named features, like views to nature or natural materials, that designers can apply.",
        UNDERGRADUATE: "Living walls are vertical planted systems that need growing media, irrigation and maintenance.",
        GRADUATE: "Because people costs dominate, small improvements could matter, though the inputs are uncertain.",
        PHD: "Attention Restoration Theory says natural scenes let effortful, directed attention rest and recover.",
      },
    },
    {
      id: "gbbioq2",
      question: {
        ELEMENTARY: "What is a living wall?",
        MIDDLE_SCHOOL: "Which of these is an example of a natural analogue?",
        HIGH_SCHOOL: "What does the idea of prospect and refuge describe?",
        UNDERGRADUATE: "How large is the effect of indoor plants on indoor air pollutants, compared with ventilation?",
        GRADUATE: "What is a split incentive in biophilic design?",
        PHD: "Why is heart rate variability used in biophilia research?",
      },
      options: {
        ELEMENTARY: ["A wall that can walk", "A wall covered with growing plants", "A wall made of ice", "A wall painted green"],
        MIDDLE_SCHOOL: ["A real fish tank", "A wood floor or leaf pattern that reminds us of nature", "An open window", "A courtyard tree"],
        HIGH_SCHOOL: ["Liking places with a wide view while feeling protected", "Building only underground", "Avoiding all windows", "Living far from other people"],
        UNDERGRADUATE: ["Generally small", "Always larger than any fan", "Exactly equal", "Plants remove all pollution instantly"],
        GRADUATE: ["Owners and occupants split the plants", "Developers pay costs while tenants and employers get many benefits", "Two designers share one fee", "Costs are split evenly by law"],
        PHD: ["It measures plant growth", "It indexes autonomic balance between arousal and recovery", "It measures daylight levels", "It tracks building energy use"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "A living wall is like a garden standing up, covered in real plants.",
        MIDDLE_SCHOOL: "Natural analogues are things that remind us of nature, like wood, leaf patterns or shell-like curves.",
        HIGH_SCHOOL: "Prospect and refuge describes a preference for seeing far out while feeling sheltered.",
        UNDERGRADUATE: "Plants improve how fresh a space feels, but ventilation usually does far more for measurable air quality.",
        GRADUATE: "When the payer and the beneficiary differ, worthwhile features may not get funded.",
        PHD: "Heart rate variability reflects the balance between sympathetic arousal and parasympathetic recovery.",
      },
    },
    {
      id: "gbbioq3",
      question: {
        ELEMENTARY: "Which is an easy way to bring nature into your room?",
        MIDDLE_SCHOOL: "How can daylight help a building be greener?",
        HIGH_SCHOOL: "What is a challenge of large windows?",
        UNDERGRADUATE: "Why should claims of big productivity gains be treated with caution?",
        GRADUATE: "What is value engineering's usual effect on biophilic features?",
        PHD: "What is a concern about novelty effects?",
      },
      options: {
        ELEMENTARY: ["Close all the curtains", "Turn on a loud fan", "Grow a plant on the windowsill", "Cover the window with paper"],
        MIDDLE_SCHOOL: ["It makes walls thicker", "It uses more electricity", "It reduces the need for electric lights", "It stops plants from growing"],
        HIGH_SCHOOL: ["They are always too dark", "They cannot be opened", "They can cause glare and unwanted heat without shading", "They make plants die"],
        UNDERGRADUATE: ["All studies are fake", "Plants never help anyone", "Effect sizes vary widely and many studies are not well controlled", "Productivity cannot be measured at all"],
        GRADUATE: ["It always adds more plants", "It doubles maintenance budgets", "Biophilic elements are often among the first items cut", "It has no effect"],
        PHD: ["Benefits may fade as occupants get used to a feature", "New plants grow faster", "Novelty always makes effects larger forever", "Novelty only affects animals"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "A plant on the windowsill brings a living piece of nature indoors.",
        MIDDLE_SCHOOL: "Natural daylight means fewer electric lights are needed during the day.",
        HIGH_SCHOOL: "Big windows need good glazing and shading to control glare and solar heat gain.",
        UNDERGRADUATE: "Evidence suggests real benefits, but sizes vary and strong financial claims need well-controlled research.",
        GRADUATE: "When budgets tighten, biophilic features are often seen as extras and removed.",
        PHD: "Short studies may capture excitement about something new rather than lasting effects.",
      },
    },
    {
      id: "gbbioq4",
      question: {
        ELEMENTARY: "Why do people feel at home near nature?",
        MIDDLE_SCHOOL: "Where might a hospital use biophilic design?",
        HIGH_SCHOOL: "What is the circadian rhythm?",
        UNDERGRADUATE: "What does a post-occupancy survey help designers learn?",
        GRADUATE: "Which practice helps separate the effects of a biophilic change from other changes?",
        PHD: "What is a dose-response relationship?",
      },
      options: {
        ELEMENTARY: ["Because nature is always noisy", "Because plants are made of plastic", "Because buildings are scary", "Because people lived close to nature for a very long time"],
        MIDDLE_SCHOOL: ["In the parking machine", "Only on the roof tiles", "Inside the electrical wires", "Gardens and windows facing trees for patients"],
        HIGH_SCHOOL: ["A pattern on wallpaper", "A type of window frame", "The way water flows in fountains", "The roughly 24-hour body clock set mainly by daylight"],
        UNDERGRADUATE: ["The cost of steel", "The wind speed outside", "The building's tax rate", "How occupants actually experience the space"],
        GRADUATE: ["Skipping baseline measures", "Reporting only positive results", "Removing all surveys", "Using comparison groups or staggered rollouts"],
        PHD: ["A rule for watering plants", "A building code requirement", "A type of medicine", "How effect size changes with the amount or quality of exposure"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "For a very long time people lived outdoors, so our bodies still feel at home around nature.",
        MIDDLE_SCHOOL: "Hospitals add gardens and nature views to help patients feel calmer.",
        HIGH_SCHOOL: "The circadian rhythm is our body clock, and daylight helps keep it on time.",
        UNDERGRADUATE: "Post-occupancy surveys show whether the design works for the people who use it.",
        GRADUATE: "Comparison groups help show whether changes in outcomes come from the design or something else.",
        PHD: "Dose-response describes how outcomes change with more, longer or better nature exposure.",
      },
    },
    {
      id: "gbbioq5",
      question: {
        ELEMENTARY: "Which material comes from nature?",
        MIDDLE_SCHOOL: "Why can people who love a building help sustainability?",
        HIGH_SCHOOL: "Why do living walls need careful planning?",
        UNDERGRADUATE: "Which pair lists two biophilic pattern categories in one common framework?",
        GRADUATE: "Who is often most exposed to low-quality, stressful buildings?",
        PHD: "Why is generalizability a concern in biophilia research?",
      },
      options: {
        ELEMENTARY: ["Wood", "Plastic toys", "Shiny metal foil", "Bubble wrap"],
        MIDDLE_SCHOOL: ["They look after it and keep using it longer", "They knock it down sooner", "They use more lights", "They paint it more often"],
        HIGH_SCHOOL: ["They need irrigation, lighting and maintenance", "They never need water", "They grow without any care", "They are made of plastic"],
        UNDERGRADUATE: ["Nature in the space and natural analogues", "Steel frames and concrete slabs", "Heating and cooling loads", "Doors and corridors"],
        GRADUATE: ["People in affordable housing, older schools and low-wage workplaces", "Only luxury office tenants", "Nobody at all", "Only architects"],
        PHD: ["Many studies involve limited age groups and countries", "Every study uses all cultures equally", "Results never vary", "It only matters for plants"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Wood comes from trees, so it is a natural material.",
        MIDDLE_SCHOOL: "Loved buildings are cared for and used for many years, which avoids waste.",
        HIGH_SCHOOL: "Without irrigation, light and upkeep, living walls can die or cause moisture problems.",
        UNDERGRADUATE: "One common framework uses nature in the space, natural analogues and nature of the space.",
        GRADUATE: "Biophilic benefits are often marketed to premium buildings, while others need them most.",
        PHD: "Results from narrow samples may not hold across ages, cultures and climates.",
      },
    },
  ],
}

export default expansion
