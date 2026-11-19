import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: carrying biophilic design through a real project,
// from site and brief to post-occupancy evaluation. The first biophilic chapter
// covers principles, patterns and health benefits.
const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'biophilic-design~2',
  title: 'Designing Biophilic Spaces: Projects and Evidence',
  description: {
    ELEMENTARY: 'Plan a nature-filled classroom, and see how real schools, hospitals and offices bring nature inside.',
    MIDDLE_SCHOOL: 'Step by step through designing a biophilic space, with real examples and how we know it works.',
    HIGH_SCHOOL: 'Taking biophilic design from idea to building: site, brief, design choices, upkeep and measuring results.',
    UNDERGRADUATE: 'Applying biophilic design on projects: integration with building systems, costs, maintenance and evaluation.',
    GRADUATE: 'Delivering biophilic projects: briefs, specifications, post-occupancy evaluation and judging the evidence.',
    PHD: 'Evaluating biophilic interventions in the field: study design, measurement, confounding and scaling evidence.',
  },
  lessons: [
    {
      id: 'gb-bio-1',
      title: 'Designing Biophilic Spaces: Projects and Evidence',
      content: {
        ELEMENTARY: `
<h2>Let's Design a Nature Classroom!</h2>
<p>People feel calmer, happier and more focused when they are near nature. Designers can use this idea to make buildings that feel a bit like being outdoors. Let's imagine we are designing a brand-new classroom that brings nature inside. What would you add?</p>

<h3>Step 1: Look Outside</h3>
<p>Good designers start by looking at the place. Where does the sun shine in the morning? Is there a tree, a hill or a pond nearby? Big windows that face a tree or garden let everyone see nature while they learn.</p>

<h3>Step 2: Bring Nature In</h3>
<p>Next we add living things and natural materials. We could have plants on shelves, a living wall covered in green leaves, a small fish tank, and wooden tables. We could let lots of daylight in and add a reading nook that feels like a cosy cave.</p>
<ul>
<li><strong>Designer:</strong> a person who plans how a space will look and work</li>
<li><strong>Daylight:</strong> natural light from the sun coming into a building</li>
<li><strong>Living wall:</strong> a wall covered with growing plants</li>
<li><strong>Natural material:</strong> something from nature, like wood, stone or wool</li>
<li><strong>Nook:</strong> a small, cosy space to sit in</li>
</ul>

<h3>Step 3: Take Care of It</h3>
<p>Plants need water and light, and fish need feeding. A good design includes a plan for who will take care of everything. Maybe each class can have plant helpers!</p>

<h3>Real Places</h3>
<p>Some hospitals have gardens where patients can sit, and some offices have trees growing inside. Some schools have outdoor classrooms. Scientists have found that people in these places often feel less stressed. Ask your teacher if your class can add a plant or two!</p>
`,
        MIDDLE_SCHOOL: `
<h2>From Idea to Biophilic Building</h2>
<p>Biophilic design means designing buildings that connect people with nature. Knowing the ideas is one thing; making them real in a building is another. Designers must think about the site, the people who will use the space, the budget and who will care for plants and features over time. Then they need to check whether the design actually helped. This chapter walks through that process.</p>

<h3>Start With the Site and the People</h3>
<p>Designers study the site: where sunlight comes from, which views are worth framing, where wind and water move, and what plants and animals live there. They also talk to the people who will use the building. A hospital patient, an office worker and a student each need different things. These conversations become the design brief.</p>

<h3>Choose the Right Features</h3>
<p>Next, designers pick features that fit. Views to nature and daylight help almost everywhere. Indoor plants, living walls, water features, natural materials like wood and stone, patterns inspired by nature, and spaces offering both open views and cosy shelter can all be included. Courtyards and rooftop gardens let people step outside.</p>
<ul>
<li><strong>Biophilic design:</strong> designing buildings that connect people with nature</li>
<li><strong>Design brief:</strong> a document describing what a building needs to do and for whom</li>
<li><strong>Courtyard:</strong> an open outdoor space surrounded by a building</li>
<li><strong>Prospect and refuge:</strong> having a wide view while feeling safe and sheltered</li>
<li><strong>Maintenance plan:</strong> a schedule for caring for plants and features</li>
<li><strong>Survey:</strong> a set of questions asked to learn what people think</li>
</ul>

<h3>Plan for Upkeep</h3>
<p>Living walls and indoor plants need watering, light and care. Without a maintenance plan, plants die and the space looks worse than before. Many projects hire specialists or choose hardy plants.</p>

<h3>Did It Work?</h3>
<p>After people move in, designers can use surveys to ask how people feel, and measure things like daylight, temperature and how often spaces are used. Studies of hospitals, schools and offices have found benefits such as less stress, better mood and faster recovery, although results vary from project to project.</p>
`,
        HIGH_SCHOOL: `
<h2>Delivering Biophilic Design on Real Projects</h2>
<p>Biophilic design aims to strengthen people's connection with nature through buildings. Frameworks describe patterns such as visual connection with nature, presence of water, dynamic light, natural materials, and spatial qualities like prospect and refuge. But real projects face budgets, codes, climate and maintenance constraints. This chapter follows biophilic design through a project and asks how we judge whether it worked.</p>

<h3>Site Analysis and Briefing</h3>
<p>Projects begin by mapping the site's natural assets: views, sun paths, prevailing winds, existing trees, water and habitat. Engagement with future occupants identifies needs, such as restorative spaces for stressed healthcare staff or quiet focus areas for students. The brief sets biophilic goals alongside energy, accessibility and cost targets.</p>

<h3>Integration With Building Performance</h3>
<p>Biophilic features work best when they also serve other goals. Daylighting reduces lighting energy if glare and overheating are controlled. Operable windows provide fresh air and a sense of connection with outdoor conditions. Green roofs reduce stormwater and heat. Natural materials can improve acoustics. Poorly integrated features, such as large glass walls facing west, may cause overheating and glare that undermine comfort.</p>
<ul>
<li><strong>Design pattern:</strong> a recurring, proven way of solving a design problem</li>
<li><strong>Sun path:</strong> the track the sun follows across the sky through the day and year</li>
<li><strong>Glare:</strong> uncomfortable brightness that makes it hard to see</li>
<li><strong>Restorative environment:</strong> a setting that helps people recover from stress and mental fatigue</li>
<li><strong>Post-occupancy evaluation:</strong> assessing how a building performs once people use it</li>
<li><strong>Operable window:</strong> a window occupants can open and close</li>
</ul>

<h3>Examples</h3>
<p>Hospitals have added healing gardens and patient room views; offices have used indoor trees, atriums and terraces; schools have created outdoor classrooms and daylit learning spaces. Housing projects increasingly provide balconies, shared gardens and nature-facing windows.</p>

<h3>Measuring Results</h3>
<p>Post-occupancy evaluation combines occupant surveys, environmental measurements and, sometimes, health or performance data. Evidence from multiple studies links nature views and indoor plants with lower stress and improved wellbeing, though effects vary by setting and many studies are small. Good evaluations compare results with similar spaces or with conditions before the change.</p>
`,
        UNDERGRADUATE: `
<h2>Applying Biophilic Design on Projects</h2>
<p>Biophilic design has moved from theory into building standards, certification systems and client briefs. Applying it effectively requires integrating nature-based features with structural, mechanical and architectural systems; managing costs and maintenance; and evaluating outcomes. This chapter examines the practical delivery of biophilic design across building types.</p>

<h3>From Patterns to Specifications</h3>
<p>Pattern frameworks offer a vocabulary, but projects need specific, measurable targets: the percentage of workstations with views to nature within a set distance, daylight autonomy thresholds, minimum areas of planting, and access to outdoor space within a set walk. Wellness certification systems and some green building rating systems include such criteria, giving teams concrete benchmarks.</p>

<h3>Systems Integration</h3>
<p>Living walls need irrigation, drainage, lighting and structural support; they affect humidity and must be coordinated with mechanical systems. Water features require filtration and treatment to prevent Legionella. Daylighting must be balanced with glare control, thermal comfort and energy performance using simulation tools. Timber and other natural materials interact with fire, acoustic and moisture requirements.</p>
<ul>
<li><strong>Daylight autonomy:</strong> the share of occupied hours a space receives enough daylight without electric light</li>
<li><strong>Wellness certification:</strong> a rating system focused on occupant health and wellbeing</li>
<li><strong>Life cycle cost:</strong> total cost of a feature over its life, including installation, operation and maintenance</li>
<li><strong>Occupant survey:</strong> a structured questionnaire about comfort, satisfaction and wellbeing</li>
<li><strong>Baseline:</strong> conditions measured before a change, used for comparison</li>
<li><strong>Restorative environment:</strong> a setting that supports recovery from stress and fatigue</li>
</ul>

<h3>Cost and Maintenance</h3>
<p>Some biophilic strategies, such as orienting windows toward views and using daylight, add little cost if planned early. Others, such as large living walls, have significant capital and ongoing costs. Life cycle cost analysis weighs these against potential benefits in productivity, absenteeism, patient outcomes or property value, though such benefits are uncertain and hard to attribute.</p>

<h3>Building-Type Applications</h3>
<p>Healthcare projects emphasise views, gardens and daylight for patient recovery and staff wellbeing. Workplaces focus on views, plants, varied spaces and outdoor access. Schools combine daylight, outdoor learning and natural materials. Housing emphasises balconies, gardens and green streetscapes.</p>

<h3>Evaluation</h3>
<p>Post-occupancy evaluation should establish baselines, use validated survey instruments, measure environmental conditions and, where possible, compare with control spaces. Publishing results, including failures, builds the evidence base and helps future teams avoid repeating costly mistakes.</p>
`,
        GRADUATE: `
<h2>Delivering and Evaluating Biophilic Projects</h2>
<p>Biophilic design is now marketed widely, with claims of improved productivity, health and property value. Professionals delivering biophilic projects need to translate concepts into enforceable briefs and specifications, coordinate across disciplines, and critically evaluate the evidence used to justify investment. This chapter addresses project delivery and the interpretation of evidence.</p>

<h3>Briefing and Specification</h3>
<p>Effective briefs define outcomes, such as stress reduction, patient experience or retention, and translate them into design requirements and performance metrics. Specifications should cover plant selection for indoor light levels, irrigation and drainage, growing media, maintenance responsibilities, water treatment, daylight and view metrics, and material sourcing. Assigning ownership for maintenance in operational contracts prevents decline after handover.</p>

<h3>Interdisciplinary Coordination</h3>
<p>Biophilic features cut across architecture, landscape, structural, mechanical and facilities management. Early integration avoids conflicts, such as living walls without irrigation access, or glazing that conflicts with energy targets. Building information modelling and simulation support coordination of daylight, thermal and view analysis.</p>
<ul>
<li><strong>Performance metric:</strong> a measurable indicator used to verify a design outcome</li>
<li><strong>Confounding:</strong> when an outside factor distorts the apparent effect of an intervention</li>
<li><strong>Effect size:</strong> a measure of how large an intervention's effect is</li>
<li><strong>Publication bias:</strong> the tendency for positive results to be published more than null results</li>
<li><strong>Controlled study:</strong> a study comparing an intervention group with a similar group without it</li>
<li><strong>Handover:</strong> the transfer of a completed building from the project team to its operators</li>
</ul>

<h3>Interpreting the Evidence</h3>
<p>The evidence base includes laboratory studies of stress recovery, observational studies in hospitals and offices, and a smaller number of controlled field interventions. Laboratory studies show physiological stress reduction with nature exposure, but effect sizes in real buildings are often smaller and context dependent. Many workplace productivity claims rely on surveys, small samples or industry reports without controls. Confounding is common: biophilic buildings are often newer, better lit and better ventilated overall. Publication bias may inflate apparent benefits.</p>

<h3>Building the Business Case Responsibly</h3>
<p>Business cases should use conservative estimates, cite peer-reviewed evidence, acknowledge uncertainty and plan for evaluation. Combining biophilic goals with other benefits, such as energy savings from daylighting or stormwater management from green roofs, strengthens the case without overstating wellbeing gains.</p>

<h3>Climate and Context</h3>
<p>Biophilic strategies must respond to climate and culture. In hot climates, shaded courtyards, vegetation for evaporative cooling and filtered light may be more appropriate than large glazed views; in cold climates, sheltered sunny spaces and winter gardens extend contact with nature. Plant species should suit local light and humidity, and native species can support urban biodiversity on roofs and terraces.</p>

<h3>Evaluation Practice</h3>
<p>Robust post-occupancy evaluation uses baseline measurement, validated instruments, comparison groups and follow-up over time. Sharing results across projects accelerates learning and improves the evidence base.</p>
`,
        PHD: `
<h2>Evaluating Biophilic Interventions in the Field</h2>
<p>Laboratory and short-term exposure studies have established that contact with nature can reduce physiological stress and improve mood and attention. Translating these findings into robust evidence for building-scale biophilic interventions is methodologically difficult. Research challenges include study design in real buildings, measurement of exposure and outcomes, confounding, heterogeneity across populations, and synthesising evidence for policy. This chapter examines these challenges.</p>

<h3>Study Design in Real Buildings</h3>
<p>Randomised controlled trials are rarely feasible for whole buildings, so researchers use quasi-experimental designs: before-after studies with control sites, stepped-wedge designs where features are introduced in phases, natural experiments created by relocations, and within-building comparisons of rooms with different views. Each design has strengths and threats to validity, such as novelty effects, seasonal changes and selection of occupants.</p>

<h3>Measuring Exposure and Outcomes</h3>
<p>Defining "dose" is a key challenge: view content, view size, time spent, plant density and attention all vary. Researchers use view quality metrics, wearable sensors, eye tracking and ecological momentary assessment to measure exposure. Outcomes include cortisol, heart rate variability, cognitive tests, self-reported wellbeing, sick leave and clinical outcomes, each with different sensitivity and burden.</p>
<ul>
<li><strong>Quasi-experimental design:</strong> a study comparing groups without random assignment</li>
<li><strong>Stepped-wedge design:</strong> a design where an intervention is rolled out to groups in sequence</li>
<li><strong>Ecological momentary assessment:</strong> repeated real-time sampling of experiences in daily life</li>
<li><strong>Heart rate variability:</strong> variation in time between heartbeats, a marker of stress regulation</li>
<li><strong>Heterogeneity:</strong> variation in effects across studies, populations or settings</li>
<li><strong>Novelty effect:</strong> a temporary change caused by something being new rather than by its lasting qualities</li>
</ul>

<h3>Confounding and Mechanisms</h3>
<p>Biophilic features often coincide with better daylight, ventilation, acoustics and newer buildings, making it hard to isolate effects. Research seeks to separate mechanisms such as stress reduction, attention restoration, thermal and visual comfort, and social interaction, using factorial designs and mediation analysis.</p>

<h3>Heterogeneity and Equity</h3>
<p>Responses vary with culture, age, health status and prior nature experience. Access to biophilic environments is unequal, with lower-income communities and workers often having less access to green views and outdoor space. Research on equity examines distribution of benefits and how design can reduce rather than widen disparities.</p>

<h3>Evidence Synthesis</h3>
<p>Systematic reviews and meta-analyses are complicated by diverse interventions, outcomes and study quality. Developing standard exposure metrics, outcome sets and reporting guidelines would make synthesis more reliable and inform building standards.</p>

<h3>From Research to Standards</h3>
<p>Wellness certifications and building codes increasingly reference biophilic criteria, often ahead of the evidence. Research examines how standards translate findings into requirements, whether certified buildings deliver measured benefits, and how to update criteria as evidence accumulates. Partnerships between researchers, designers and building owners can embed evaluation into projects from the start, turning ordinary buildings into sources of data.</p>

<h3>Open Questions</h3>
<p>Key questions include dose-response relationships, long-term effects beyond novelty, cost-effectiveness compared to other interventions, and how to design for diverse populations and climates.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbbio2-q1',
      question: {
        ELEMENTARY: 'What do good designers do first?',
        MIDDLE_SCHOOL: 'What is a design brief?',
        HIGH_SCHOOL: 'What does site analysis for biophilic design map?',
        UNDERGRADUATE: 'What turns pattern frameworks into usable project targets?',
        GRADUATE: 'What should an effective biophilic brief define?',
        PHD: 'Why are randomised controlled trials rarely feasible for biophilic buildings?',
      },
      options: {
        ELEMENTARY: ['Paint the walls', 'Buy furniture', 'Look at the place, like the sun and trees nearby', 'Close all windows'],
        MIDDLE_SCHOOL: ['A short holiday', 'A type of window', 'A document describing what a building needs and for whom', 'A building permit fee'],
        HIGH_SCHOOL: ['Only parking spaces', 'Only furniture', 'Views, sun paths, winds, trees, water and habitat', 'Only the paint colours'],
        UNDERGRADUATE: ['Vague goals only', 'Picking plants at random', 'Specific, measurable criteria like view percentages and daylight autonomy', 'Removing all windows'],
        GRADUATE: ['Only the colour scheme', 'Only the opening date', 'Outcomes translated into design requirements and metrics', 'Only the logo'],
        PHD: ['Nature has no effect', 'They are too cheap', 'Whole buildings are hard to randomly assign', 'Buildings have no occupants'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Designers start by studying the site.',
        MIDDLE_SCHOOL: 'The brief says what the building must do and for whom.',
        HIGH_SCHOOL: 'Site analysis maps natural assets to use in the design.',
        UNDERGRADUATE: 'Measurable targets make patterns actionable.',
        GRADUATE: 'Briefs connect outcomes to requirements and metrics.',
        PHD: 'Random assignment of whole buildings is rarely possible.',
      },
    },
    {
      id: 'gbbio2-q2',
      question: {
        ELEMENTARY: 'What is a living wall?',
        MIDDLE_SCHOOL: 'What is prospect and refuge?',
        HIGH_SCHOOL: 'What can poorly integrated glass walls cause?',
        UNDERGRADUATE: 'What risk must water features be treated for?',
        GRADUATE: 'Why do early interdisciplinary reviews matter?',
        PHD: 'What is a stepped-wedge design?',
      },
      options: {
        ELEMENTARY: ['A wall that walks', 'A wall made of ice', 'A painted wall', 'A wall covered with growing plants'],
        MIDDLE_SCHOOL: ['A type of garden tool', 'A building permit', 'A water pump', 'A wide view while feeling safe and sheltered'],
        HIGH_SCHOOL: ['Too little light', 'Lower energy use', 'Better acoustics', 'Overheating and glare'],
        UNDERGRADUATE: ['Rust on paint', 'Too many fish', 'Sunburn', 'Legionella'],
        GRADUATE: ['They add conflicts', 'They are only for marketing', 'They remove maintenance', 'They avoid conflicts like living walls without irrigation access'],
        PHD: ['A staircase design', 'A ramp for wheelchairs', 'A shape of window', 'An intervention rolled out to groups in sequence'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A living wall is covered in growing plants.',
        MIDDLE_SCHOOL: 'Prospect is the view; refuge is the shelter.',
        HIGH_SCHOOL: 'Unshaded glass can overheat spaces and cause glare.',
        UNDERGRADUATE: 'Water features need treatment to prevent Legionella.',
        GRADUATE: 'Early coordination prevents costly clashes.',
        PHD: 'Stepped-wedge designs phase in an intervention across groups.',
      },
    },
    {
      id: 'gbbio2-q3',
      question: {
        ELEMENTARY: 'What does a nature design need so plants stay healthy?',
        MIDDLE_SCHOOL: 'What happens without a maintenance plan?',
        HIGH_SCHOOL: 'What is post-occupancy evaluation?',
        UNDERGRADUATE: 'Which biophilic strategies add little cost if planned early?',
        GRADUATE: 'Why does confounding affect biophilic evidence?',
        PHD: 'What is a novelty effect?',
      },
      options: {
        ELEMENTARY: ['More paint', 'A plan for who will water and care for them', 'Louder music', 'Fewer windows'],
        MIDDLE_SCHOOL: ['Plants grow forever', 'Plants die and the space can look worse than before', 'Nothing changes', 'The building gets bigger'],
        HIGH_SCHOOL: ['Inspecting before construction', 'Assessing how a building performs once people use it', 'Choosing a building name', 'Paying the builders'],
        UNDERGRADUATE: ['Large living walls', 'Orienting windows toward views and using daylight', 'Indoor waterfalls', 'Imported rare trees'],
        GRADUATE: ['Nature always has no effect', 'Biophilic buildings are often newer, better lit and ventilated', 'Surveys are perfect', 'All buildings are identical'],
        PHD: ['A brand-new building code', 'A temporary change caused by something being new', 'A type of plant', 'A lasting benefit'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Someone must care for the plants.',
        MIDDLE_SCHOOL: 'Without care, features decline.',
        HIGH_SCHOOL: 'POE checks how buildings work in use.',
        UNDERGRADUATE: 'Orientation and daylight are low-cost if planned early.',
        GRADUATE: 'Other improvements can explain apparent biophilic effects.',
        PHD: 'Novelty can create short-lived effects that fade.',
      },
    },
    {
      id: 'gbbio2-q4',
      question: {
        ELEMENTARY: 'Where might hospitals add nature?',
        MIDDLE_SCHOOL: 'How can designers check if a biophilic design worked?',
        HIGH_SCHOOL: 'How can good evaluations compare results?',
        UNDERGRADUATE: 'What is daylight autonomy?',
        GRADUATE: 'What is publication bias?',
        PHD: 'What is ecological momentary assessment?',
      },
      options: {
        ELEMENTARY: ['Gardens where patients can sit', 'Inside the X-ray machine', 'In the parking lot paint', 'Nowhere at all'],
        MIDDLE_SCHOOL: ['Surveys and measurements after people move in', 'Guessing', 'Asking only the builder', 'Counting the bricks'],
        HIGH_SCHOOL: ['With similar spaces or conditions before the change', 'With nothing at all', 'With a different country\'s weather', 'With a movie'],
        UNDERGRADUATE: ['Share of occupied hours with enough daylight without electric light', 'Hours of darkness', 'Lamp brightness', 'Time of sunset'],
        GRADUATE: ['Positive results are published more than null results', 'Books costing too much', 'Only printing in colour', 'Ignoring positive results'],
        PHD: ['Repeated real-time sampling of experiences in daily life', 'Measuring soil chemistry', 'A one-time survey', 'Counting animals in a forest'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Hospital gardens help patients relax.',
        MIDDLE_SCHOOL: 'Surveys and measurements show what changed.',
        HIGH_SCHOOL: 'Comparisons show whether the change made a difference.',
        UNDERGRADUATE: 'Daylight autonomy measures daylight sufficiency over time.',
        GRADUATE: 'Publication bias can inflate apparent benefits.',
        PHD: 'EMA samples experiences repeatedly in real time.',
      },
    },
    {
      id: 'gbbio2-q5',
      question: {
        ELEMENTARY: 'How do people often feel in places with nature?',
        MIDDLE_SCHOOL: 'What benefits have studies found in biophilic buildings?',
        HIGH_SCHOOL: 'Why are biophilic features best integrated with other goals?',
        UNDERGRADUATE: 'What does life cycle cost include?',
        GRADUATE: 'How should a responsible business case be built?',
        PHD: 'What would make evidence synthesis more reliable?',
      },
      options: {
        ELEMENTARY: ['More angry', 'Very sleepy forever', 'Less stressed and happier', 'Hungrier'],
        MIDDLE_SCHOOL: ['Higher electricity bills only', 'More noise', 'Less stress, better mood and faster recovery', 'Worse sleep'],
        HIGH_SCHOOL: ['Other goals do not matter', 'Integration always costs more', 'Features like daylight can also save energy and support comfort', 'It makes design slower'],
        UNDERGRADUATE: ['Only the purchase price', 'Only shipping', 'Installation, operation and maintenance over the feature\'s life', 'Only design fees'],
        GRADUATE: ['The largest claims available', 'Ignoring uncertainty', 'Conservative estimates, peer-reviewed evidence and planned evaluation', 'Industry adverts only'],
        PHD: ['Fewer studies', 'Hiding study quality', 'Standard exposure metrics, outcome sets and reporting guidelines', 'Using only laboratory data'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Nature tends to help people feel calm and happy.',
        MIDDLE_SCHOOL: 'Studies link nature with lower stress and better mood.',
        HIGH_SCHOOL: 'Integrated features deliver multiple benefits.',
        UNDERGRADUATE: 'Life cycle cost covers the whole life of a feature.',
        GRADUATE: 'Honest business cases acknowledge uncertainty.',
        PHD: 'Standardisation lets studies be compared and combined.',
      },
    },
  ],
}

export default expansion
