import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'acoustic-design',
  lessons: [
    {
      id: 'gb-ac-1',
      title: 'Sound in Buildings',
      content: {
        ELEMENTARY: `
<h2>Shh! How Buildings Handle Sound</h2>
<p>Have you ever been in a lunchroom so loud you could not hear your friend? Or in a library so calm you could hear a page turn? Buildings can be noisy or quiet depending on how they are built. People who plan how sound moves in buildings are doing <em>acoustic design</em>.</p>

<h3>Sound Is a Wiggle in the Air</h3>
<p>When you clap, you make the air wiggle. That wiggle travels to your ears, and you hear it. Sound can bounce off hard things like a ball bounces off a wall. It can also soak into soft things like water soaks into a sponge.</p>
<ul>
<li><strong>Sound:</strong> a wiggle, or vibration, that travels through air and reaches our ears</li>
<li><strong>Echo:</strong> a sound that bounces off a wall and comes back so you hear it again</li>
<li><strong>Noise:</strong> sound that is unwanted, too loud or makes it hard to listen and think</li>
<li><strong>Absorb:</strong> to soak up sound so it does not bounce around the room</li>
<li><strong>Quiet zone:</strong> a calm place in a building where people can rest, read or focus</li>
</ul>

<h3>Hard and Soft Things</h3>
<p>Hard, smooth things like tile floors, glass and bare walls make sound bounce. Soft, fuzzy things like rugs, curtains, cushions and special ceiling panels soak sound up. A room with only hard surfaces can feel loud and echoey. Adding soft things makes it calmer.</p>

<h3>Why Quiet Matters</h3>
<p>In a classroom, every student needs to hear the teacher clearly. Too much noise makes it hard to learn and can make people tired or grumpy. At night, quiet bedrooms help us sleep well. Good sound in buildings helps people feel healthy and happy.</p>

<h3>Try It Yourself</h3>
<ol>
<li>Clap in a bathroom, then clap in a bedroom with a rug. Which sounds more echoey?</li>
<li>Find the softest and the hardest surfaces in your classroom.</li>
<li>Use an inside voice so everyone can hear each other.</li>
<li>Put felt pads on chair legs so they do not scrape loudly.</li>
</ol>
<p>Next time you walk into a room, listen closely. You are already becoming a sound detective!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Architects Control Sound</h2>
<p>Architects think about light, heat and air, but they also think about sound. A concert hall should make music sound rich. A classroom should make speech clear. An apartment should keep the neighbors' music from leaking through the walls. Controlling sound in buildings is called <em>acoustic design</em>, and it uses a few big ideas.</p>

<h3>Two Different Jobs</h3>
<p>Acoustic designers solve two different problems. The first is making sound good <em>inside</em> a room, which means controlling echoes. The second is stopping sound from traveling <em>between</em> rooms or from outside, which means blocking it. These jobs need different materials.</p>
<table>
<thead><tr><th>Job</th><th>What helps</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Reduce echoes in a room</td><td>Soft, porous materials that absorb sound</td><td>Acoustic ceiling tiles, carpet, fabric panels</td></tr>
<tr><td>Block sound between rooms</td><td>Heavy, airtight walls and floors</td><td>Thick concrete, double layers of drywall</td></tr>
<tr><td>Stop footstep noise</td><td>Cushioned layers that break vibrations</td><td>Rubber underlay beneath floors</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Absorption:</strong> when a material soaks up sound energy instead of reflecting it back into the room</li>
<li><strong>Reflection:</strong> when sound bounces off a hard surface and travels back into the space</li>
<li><strong>Reverberation:</strong> the lingering sound in a room after the source stops, caused by many reflections</li>
<li><strong>Decibel:</strong> the unit used to measure how loud a sound is</li>
<li><strong>Sound insulation:</strong> building parts that block sound from passing from one space to another</li>
</ul>

<h3>Measuring Loudness</h3>
<p>Loudness is measured in decibels. A whisper is quiet, normal talking is in the middle, and a lawn mower or busy street is loud. The decibel scale is unusual: each step of ten decibels sounds roughly twice as loud to our ears. Being around very loud noise for a long time can damage hearing.</p>

<h3>Sound and Green Buildings</h3>
<p>Some green design ideas can make buildings louder. Open windows bring fresh air but also traffic noise. Bare concrete helps store heat but bounces sound. Big open rooms let daylight in but let noise spread. Good designers find ways to keep the green benefits while keeping noise under control, like adding absorbing panels or quiet vents.</p>

<h3>What You Can Do</h3>
<p>Notice which rooms at school feel loud. Rugs, bookshelves and fabric can make a space calmer. Keeping voices low in shared spaces is a simple way to be a good sound neighbor.</p>
`,
        HIGH_SCHOOL: `
<h2>Acoustic Design: Principles, Materials and Noise Control</h2>
<p>Acoustic comfort is a core part of indoor environmental quality, alongside air, light and temperature. Poor acoustics make speech hard to understand, raise stress and reduce concentration, while good acoustics support learning, privacy and rest. Acoustic design applies physics to control how sound is generated, transmitted and perceived inside buildings.</p>

<h3>How Sound Behaves</h3>
<p>Sound is a pressure wave. When it hits a surface, part of its energy is reflected, part is absorbed and part is transmitted through the material. Designers manage each of these paths.</p>
<ul>
<li><strong>Reverberation time:</strong> how long it takes sound to fade after the source stops, which depends on room volume and absorption</li>
<li><strong>Airborne sound:</strong> sound such as voices or music that travels through air and then through walls</li>
<li><strong>Impact sound:</strong> sound created when something strikes a structure, such as footsteps on a floor above</li>
<li><strong>Flanking path:</strong> an indirect route that lets sound bypass a wall, such as through ducts, gaps or connected floors</li>
<li><strong>Background noise:</strong> steady sound from equipment, ventilation or traffic that masks or competes with speech</li>
</ul>

<h3>The ABC Approach</h3>
<p>Many designers summarize noise control as Absorb, Block and Cover. <strong>Absorb</strong> reduces reflections inside a room with porous materials. <strong>Block</strong> stops sound passing between spaces with mass, airtightness and separated layers. <strong>Cover</strong> uses gentle background sound, sometimes called sound masking, to make distant conversations less intelligible in open offices.</p>

<h3>Comparing Materials</h3>
<table>
<thead><tr><th>Material or assembly</th><th>Good at</th><th>Not good at</th></tr></thead>
<tbody>
<tr><td>Mineral wool or fiberglass panels</td><td>Absorbing mid and high frequencies</td><td>Blocking sound on their own</td></tr>
<tr><td>Concrete or masonry wall</td><td>Blocking airborne sound with mass</td><td>Absorbing, so rooms can echo</td></tr>
<tr><td>Double stud wall with insulation</td><td>Blocking sound with separated layers</td><td>Uses more floor space</td></tr>
<tr><td>Resilient floor underlay</td><td>Reducing impact sound</td><td>Low-frequency thumps from heavy footfalls</td></tr>
<tr><td>Recycled cotton or wood-fiber panels</td><td>Absorption with lower embodied impacts</td><td>Moisture-prone locations without treatment</td></tr>
</tbody>
</table>

<h3>Trade-Offs with Sustainable Design</h3>
<p>Green buildings sometimes create acoustic problems. Exposed concrete ceilings store heat for passive cooling but are hard and reflective. Natural ventilation openings let outdoor noise in. Open-plan layouts spread daylight but also spread conversation. Solutions include hanging absorbing baffles that leave most of the concrete exposed, acoustically lined ventilation openings and zoning quiet work away from busy areas. Choosing absorbers made from recycled or bio-based materials also aligns acoustics with low-carbon goals.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Classrooms need short reverberation times and low background noise so every student can hear clearly.</li>
<li>Hospitals need privacy for patient conversations and quiet for healing and sleep.</li>
<li>Apartments need strong separation between units to prevent neighbor disputes.</li>
<li>Concert halls deliberately use longer reverberation to make music feel full.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Acoustic Metrics, Prediction Methods and Design Strategies</h2>
<p>Acoustic design becomes rigorous when performance is expressed in metrics that can be predicted during design and measured after construction. This lesson introduces the main single-number ratings, the basic physics behind prediction, and a structured approach to designing for speech, privacy and quiet.</p>

<h3>Core Metrics</h3>
<ul>
<li><strong>Sound Transmission Class:</strong> a single-number rating of how well a wall or floor assembly blocks airborne sound in laboratory tests</li>
<li><strong>Impact Insulation Class:</strong> a single-number rating of how well a floor-ceiling assembly resists transmission of impact sound</li>
<li><strong>Noise Reduction Coefficient:</strong> an average of a material's sound absorption across speech frequencies, from zero to about one</li>
<li><strong>Reverberation time:</strong> the time for sound to decay by sixty decibels after the source stops, often written as RT60</li>
<li><strong>Speech intelligibility:</strong> how accurately listeners can understand speech, affected by reverberation and signal-to-noise ratio</li>
<li><strong>Noise criteria curves:</strong> rating curves used to set acceptable background noise from building services in different room types</li>
</ul>

<h3>Prediction Basics</h3>
<p>Reverberation time can be estimated with the Sabine relationship, which states that reverberation time is proportional to room volume divided by the total absorption in the room. Total absorption is the sum of each surface area multiplied by its absorption coefficient. The practical consequence is simple: a larger room needs more absorption to achieve the same reverberation time, and adding absorption shortens it. Sabine's approach works best in rooms with fairly evenly spread absorption; in rooms with very uneven absorption, alternative formulas or computer models are more reliable.</p>
<p>For sound insulation, the mass law states that a single solid layer blocks more sound as its mass per area increases, roughly gaining a fixed amount of insulation each time mass doubles. Because doubling mass repeatedly is heavy and costly, designers instead use separated layers with cavity insulation and resilient connections, which can outperform a single heavy wall. Real performance is often limited by weak points: a small gap, an electrical box or a shared duct can drastically reduce a wall's effective rating.</p>

<h3>Decibel Reasoning</h3>
<p>Decibels are logarithmic. Two equal sources together are about three decibels louder than one, not twice the number. A ten-decibel increase is perceived as roughly twice as loud. This explains why removing one dominant noise source often matters more than treating several minor ones.</p>

<h3>Design Targets by Space</h3>
<table>
<thead><tr><th>Space</th><th>Priority</th><th>Typical strategy</th></tr></thead>
<tbody>
<tr><td>Classroom</td><td>Speech clarity</td><td>Short reverberation, quiet HVAC, absorptive ceiling</td></tr>
<tr><td>Open office</td><td>Speech privacy and focus</td><td>Absorptive ceiling, screens, sound masking, quiet rooms</td></tr>
<tr><td>Apartment</td><td>Separation between units</td><td>High-rated party walls and floors, sealed penetrations</td></tr>
<tr><td>Hospital ward</td><td>Rest and confidentiality</td><td>Absorptive finishes that can be cleaned, low equipment noise</td></tr>
<tr><td>Music room</td><td>Balanced sound and isolation</td><td>Mix of absorption and diffusion, isolated construction</td></tr>
</tbody>
</table>

<h3>Applied Design Method</h3>
<ol>
<li>Identify noise sources, both outside (traffic, aircraft) and inside (equipment, people).</li>
<li>Set targets for background noise, reverberation and separation for each room type.</li>
<li>Arrange plans so noisy and quiet spaces are buffered by storage or corridors.</li>
<li>Select assemblies and finishes, then predict performance with calculations or software.</li>
<li>Detail joints, penetrations and ducts to eliminate flanking paths.</li>
<li>Verify with field measurements after construction and fix shortfalls.</li>
</ol>
`,
        GRADUATE: `
<h2>Soundscape Design, Noise Regulation and Sustainable Acoustics</h2>
<p>Traditional acoustic practice treats sound as a problem to reduce. Graduate-level thinking broadens the frame. The soundscape approach asks how people perceive the whole acoustic environment in context, while noise policy shapes what is built where. At the same time, decarbonization goals reshape buildings in ways that interact with acoustics. This lesson connects design, policy and sustainability.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Soundscape:</strong> the acoustic environment as perceived, experienced and understood by people in a particular context</li>
<li><strong>Noise mapping:</strong> modeling and displaying noise levels across a city to inform planning and identify exposed populations</li>
<li><strong>Acoustic zoning:</strong> land-use and building layout decisions that separate noise-sensitive uses from loud sources</li>
<li><strong>Quiet side:</strong> a facade of a dwelling shielded from major noise, allowing bedrooms and openable windows there</li>
<li><strong>Sound masking:</strong> adding a controlled, unobtrusive background sound to reduce the distraction of intelligible speech</li>
<li><strong>Environmental justice:</strong> the fair distribution of environmental burdens, including noise, across communities</li>
</ul>

<h3>From Noise Control to Soundscape</h3>
<p>Two places with the same measured decibel level can feel very different. Moving water, birdsong and distant voices are often experienced as pleasant, while mechanical hums and traffic are not. Soundscape practice, now described in international standards, uses surveys and perceptual attributes alongside measurements. Designers may introduce wanted sounds, such as water features in a courtyard, as well as reduce unwanted ones. Participation matters: local residents understand which sounds carry cultural meaning or signal a sense of place.</p>

<h3>Regulation and Planning</h3>
<p>Noise policy operates at several scales. Building codes in many countries set minimum airborne and impact separation between dwellings. Planning systems may restrict housing near airports, highways and industry, or require upgraded windows and ventilation. Health-based guidelines inform limits for environmental noise. A recurring tension is that stringent separation requirements can push housing away from transit corridors, conflicting with compact, low-carbon urban form.</p>

<h3>Sustainability Interactions</h3>
<table>
<thead><tr><th>Sustainable strategy</th><th>Acoustic risk</th><th>Mitigation</th></tr></thead>
<tbody>
<tr><td>Natural ventilation</td><td>Outdoor noise enters through openings</td><td>Attenuated vents, quiet-side openings, mixed-mode systems</td></tr>
<tr><td>Exposed thermal mass</td><td>Long reverberation from hard ceilings</td><td>Hanging baffles, wall absorbers, partial coverage</td></tr>
<tr><td>Lightweight mass timber floors</td><td>Weaker low-frequency impact isolation</td><td>Floating floors, toppings, resilient layers</td></tr>
<tr><td>Heat pumps and outdoor units</td><td>New sources of tonal noise in neighborhoods</td><td>Placement, enclosures, low-noise equipment selection</td></tr>
<tr><td>Dense infill near transit</td><td>Higher traffic noise exposure</td><td>Facade design, layout with a quiet side</td></tr>
</tbody>
</table>

<h3>Economics and Equity</h3>
<p>Acoustic upgrades are cheaper when designed in than when retrofitted. Yet value engineering often removes them because benefits such as sleep quality and productivity are not priced. Noise exposure frequently falls hardest on lower-income households living near major roads and industry, who may also have less ability to retrofit windows. Equitable policy considers subsidized upgrades, enforcement in rental housing and community input on new infrastructure.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map exposure and identify sensitive users and uses.</li>
<li>Combine measured levels with perceptual surveys of the soundscape.</li>
<li>Assess acoustic side effects of every sustainability strategy early.</li>
<li>Price health and productivity benefits alongside construction cost.</li>
<li>Check who bears noise burdens and who benefits from mitigation.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Acoustic Performance, Wellbeing and Environmental Noise</h2>
<p>Acoustics research spans physics, engineering, psychology and public health. Key questions include how accurately we can predict acoustic performance of new low-carbon constructions, how sound affects health and cognition, and how to move from exposure limits to positive soundscape outcomes. This lesson surveys methods, contested issues and open research directions.</p>

<h3>Methodological Vocabulary</h3>
<ul>
<li><strong>Geometrical acoustics:</strong> modeling methods such as ray tracing and image sources that treat sound as rays, suitable at higher frequencies</li>
<li><strong>Wave-based modeling:</strong> numerical methods such as finite element or finite difference approaches that solve the wave equation directly</li>
<li><strong>Auralization:</strong> creating audible simulations of a space so listeners can judge acoustic designs before they are built</li>
<li><strong>Exposure-response function:</strong> a relationship linking noise exposure levels to the probability of an outcome such as high annoyance</li>
<li><strong>Psychoacoustics:</strong> the study of how humans perceive sound attributes such as loudness, sharpness and roughness</li>
<li><strong>Confounding:</strong> distortion of an estimated effect by a third variable linked to both exposure and outcome</li>
</ul>

<h3>Prediction Challenges</h3>
<p>Geometrical acoustics underperforms at low frequencies and in small rooms where wave effects dominate, while wave-based methods are computationally demanding. Hybrid methods combine them across frequency bands. For sound insulation, lightweight constructions such as timber and cross-laminated timber behave differently from heavy masonry: low-frequency impact noise and flanking through connections are hard to predict, and laboratory ratings may not reflect field performance. Research on junction modeling, statistical energy analysis and in-situ measurement is therefore closely tied to the growth of low-carbon timber buildings.</p>

<h3>Health and Wellbeing Evidence</h3>
<p>Epidemiological research links long-term environmental noise exposure, especially from road, rail and aircraft traffic, with annoyance, sleep disturbance and increased cardiovascular risk, and studies of children have associated aircraft noise with poorer reading and memory. Proposed mechanisms include stress responses and fragmented sleep. Methodological difficulties include exposure misclassification, since outdoor facade levels may not represent indoor exposure, and confounding by air pollution, which shares traffic sources. Indoor acoustics research on offices and classrooms connects reverberation and irrelevant speech to cognitive performance, but effect sizes vary with task and population.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Are energy-based levels adequate indicators?</td><td>Intermittency, tonality and low frequency affect responses beyond average levels</td></tr>
<tr><td>How to separate noise and air pollution effects</td><td>Shared sources produce correlated exposures</td></tr>
<tr><td>Can soundscape quality be standardized?</td><td>Perception depends on culture, context and expectation</td></tr>
<tr><td>Open-plan offices and wellbeing</td><td>Benefits for interaction trade against distraction and loss of privacy</td></tr>
</tbody>
</table>

<h3>Emerging Methods</h3>
<p>Low-cost sensor networks and smartphone measurements generate dense urban noise data but raise calibration and privacy questions. Machine learning classifies sound sources and predicts perceptual ratings. Virtual reality with auralization supports participatory design experiments. Physiological measures, including heart rate variability, complement surveys but require careful interpretation.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Reliable prediction of low-frequency impact and flanking transmission in mass timber and hybrid structures.</li>
<li>Indicators that capture intermittency, tonality and positive sounds, not only average energy.</li>
<li>Study designs that disentangle noise from co-occurring urban exposures.</li>
<li>Acoustic consequences of mass electrification, including heat pump noise in dense neighborhoods.</li>
<li>Inclusive research on neurodivergent and hearing-impaired occupants, whose acoustic needs are often overlooked.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbacq1',
      question: {
        ELEMENTARY: 'What makes a room too noisy and echoey?',
        MIDDLE_SCHOOL: 'What does sound absorption do?',
        HIGH_SCHOOL: 'What is reverberation time?',
        UNDERGRADUATE: 'What does Sound Transmission Class (STC) rate?',
        GRADUATE: 'What is a soundscape?',
        PHD: 'Which health effects are linked to long-term environmental noise exposure?',
      },
      options: {
        ELEMENTARY: ['Sound bouncing off lots of hard surfaces', 'Soft rugs and curtains', 'A quiet voice', 'Fuzzy cushions'],
        MIDDLE_SCHOOL: ['It soaks up sound so less bounces back into the room', 'It makes sounds louder', 'It creates more echoes', 'It blocks light'],
        HIGH_SCHOOL: ['How long sound takes to fade after the source stops', 'How fast sound travels through steel', 'The time a building takes to build', 'How loud the first sound is'],
        UNDERGRADUATE: ['How well a wall or floor blocks airborne sound', 'How much sound a material absorbs', 'How loud an air conditioner is', 'How long a room echoes'],
        GRADUATE: ['The acoustic environment as perceived and experienced by people in context', 'A map of only the loudest noises', 'A visual landscape painting', 'A legal noise limit'],
        PHD: ['Annoyance, sleep disturbance and increased cardiovascular risk', 'No measurable effects at all', 'Only temporary hearing loss', 'Only improved concentration'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Hard, smooth surfaces bounce sound around, making a room loud and echoey.',
        MIDDLE_SCHOOL: 'Absorbing materials soak up sound energy, reducing echoes and noise.',
        HIGH_SCHOOL: 'Reverberation time measures how long sound lingers, which depends on room volume and absorption.',
        UNDERGRADUATE: 'STC is a single-number rating of an assembly blocking airborne sound in laboratory tests.',
        GRADUATE: 'A soundscape focuses on how people perceive the whole acoustic environment, not just decibel levels.',
        PHD: 'Epidemiological studies link chronic traffic noise to annoyance, poor sleep and cardiovascular risk.',
      },
    },
    {
      id: 'gbacq2',
      question: {
        ELEMENTARY: 'Which of these soaks up sound?',
        MIDDLE_SCHOOL: 'What kind of wall is best at blocking sound between rooms?',
        HIGH_SCHOOL: 'What is a flanking path?',
        UNDERGRADUATE: 'According to the Sabine relationship, how does adding absorption affect reverberation time?',
        GRADUATE: 'What is a quiet side in housing design?',
        PHD: 'Why does geometrical acoustics struggle in small rooms at low frequencies?',
      },
      options: {
        ELEMENTARY: ['A glass window', 'A tile floor', 'A soft rug', 'A metal door'],
        MIDDLE_SCHOOL: ['A thin curtain', 'An open doorway', 'A heavy, airtight wall', 'A wall full of gaps'],
        HIGH_SCHOOL: ['A walking path around a building', 'A hallway for fire exits', 'An indirect route that lets sound bypass a wall', 'A type of acoustic panel'],
        UNDERGRADUATE: ['It lengthens reverberation time', 'It has no effect', 'It shortens reverberation time', 'It only changes loudness outdoors'],
        GRADUATE: ['A side of the building with no windows at all', 'A room where talking is banned', 'A facade shielded from major noise where bedrooms can be placed', 'A side painted in calm colors'],
        PHD: ['Because it is too slow at high frequencies', 'Because it ignores room geometry', 'Because wave effects dominate where rays are a poor approximation', 'Because it only models outdoor sound'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Soft, fuzzy things like rugs soak up sound so the room is calmer.',
        MIDDLE_SCHOOL: 'Heavy, airtight walls block sound from traveling between spaces.',
        HIGH_SCHOOL: 'Flanking paths such as ducts, gaps or connected floors carry sound around a wall.',
        UNDERGRADUATE: 'Reverberation time is proportional to volume divided by total absorption, so more absorption shortens it.',
        GRADUATE: 'Placing bedrooms and openable windows on a shielded facade gives residents relief from noise.',
        PHD: 'Ray methods assume short wavelengths; in small rooms at low frequencies, modal wave behavior dominates.',
      },
    },
    {
      id: 'gbacq3',
      question: {
        ELEMENTARY: 'Why do classrooms need good sound?',
        MIDDLE_SCHOOL: 'How does a sound ten decibels louder seem to our ears?',
        HIGH_SCHOOL: 'In the ABC approach, what does Cover mean?',
        UNDERGRADUATE: 'Why do two equal noise sources together add only about three decibels?',
        GRADUATE: 'What acoustic risk comes with natural ventilation?',
        PHD: 'What makes it hard to separate the health effects of noise from air pollution?',
      },
      options: {
        ELEMENTARY: ['So the walls look nicer', 'So everyone can hear the teacher clearly', 'So the room is colder', 'So the lights are brighter'],
        MIDDLE_SCHOOL: ['Exactly the same', 'Roughly twice as loud', 'Ten times quieter', 'Silent'],
        HIGH_SCHOOL: ['Covering windows with paint', 'Using gentle background sound to mask distant speech', 'Covering the floor with tiles', 'Covering ears with hands'],
        UNDERGRADUATE: ['Because decibels are logarithmic', 'Because sound cancels out completely', 'Because meters cannot measure two sources', 'Because decibels are linear'],
        GRADUATE: ['Outdoor noise enters through the openings', 'The building becomes too quiet', 'Walls become heavier', 'Echoes disappear completely'],
        PHD: ['Noise is impossible to measure', 'Shared traffic sources produce correlated exposures', 'Air pollution has no health effects', 'Studies never include traffic'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'When a classroom is calm, every student can hear and learn better.',
        MIDDLE_SCHOOL: 'Each step of ten decibels sounds roughly twice as loud to human ears.',
        HIGH_SCHOOL: 'Cover means sound masking, which makes far-off conversations less distracting.',
        UNDERGRADUATE: 'On a logarithmic scale, doubling sound energy adds about three decibels.',
        GRADUATE: 'Openings that let air in also let traffic and city noise in, so they need attenuation.',
        PHD: 'Because traffic produces both noise and air pollution, their effects are confounded.',
      },
    },
    {
      id: 'gbacq4',
      question: {
        ELEMENTARY: 'What is an easy way to make a room calmer?',
        MIDDLE_SCHOOL: 'Which green design idea can make rooms more echoey?',
        HIGH_SCHOOL: 'How can a building keep exposed concrete for cooling but still control echoes?',
        UNDERGRADUATE: 'Why can a small gap greatly reduce a wall sound insulation?',
        GRADUATE: 'What acoustic challenge do lightweight mass timber floors face?',
        PHD: 'Why might energy-averaged noise levels be inadequate indicators?',
      },
      options: {
        ELEMENTARY: ['Take out all the rugs', 'Shout louder', 'Bang on the desks', 'Add soft things like rugs and curtains'],
        MIDDLE_SCHOOL: ['Adding thick carpet', 'Hanging fabric panels', 'Adding soft cushions', 'Leaving concrete bare to store heat'],
        HIGH_SCHOOL: ['Paint the concrete bright colors', 'Remove all furniture', 'Add more glass', 'Hang absorbing baffles while leaving most concrete exposed'],
        UNDERGRADUATE: ['Gaps make walls heavier', 'Gaps absorb all sound', 'Gaps only matter for heat', 'Sound passes easily through weak points, limiting overall performance'],
        GRADUATE: ['They are too heavy for buildings', 'They absorb too much sound', 'They block too much daylight', 'Weaker isolation of low-frequency impact noise'],
        PHD: ['They are always too high', 'They are illegal to report', 'They measure only light', 'Intermittency, tonality and low frequency affect responses beyond average levels'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Soft things soak up sound, so the room feels calmer.',
        MIDDLE_SCHOOL: 'Bare concrete stores heat but its hard surface makes sound bounce.',
        HIGH_SCHOOL: 'Partial coverage with baffles adds absorption while most of the thermal mass still works.',
        UNDERGRADUATE: 'Sound takes the easiest route, so gaps and penetrations can dominate transmission.',
        GRADUATE: 'Lightweight floors need floating layers or toppings to control low-frequency footfall noise.',
        PHD: 'People respond to features such as tonal hums and intermittent events that average levels can hide.',
      },
    },
    {
      id: 'gbacq5',
      question: {
        ELEMENTARY: 'What is noise?',
        MIDDLE_SCHOOL: 'What unit measures how loud a sound is?',
        HIGH_SCHOOL: 'What is impact sound?',
        UNDERGRADUATE: 'What is a good first step in the applied acoustic design method?',
        GRADUATE: 'Why are acoustic upgrades often cut during value engineering?',
        PHD: 'What is auralization?',
      },
      options: {
        ELEMENTARY: ['A kind of light', 'Sound that is unwanted or too loud', 'A type of paint', 'A soft blanket'],
        MIDDLE_SCHOOL: ['Meter', 'Degree', 'Decibel', 'Liter'],
        HIGH_SCHOOL: ['Sound from radios only', 'Sound from struck structures, like footsteps on a floor above', 'Sound that is absorbed', 'Silence after a storm'],
        UNDERGRADUATE: ['Choose paint colors', 'Install sound masking everywhere', 'Identify outside and inside noise sources', 'Measure after construction only'],
        GRADUATE: ['Because they are illegal', 'Because benefits like sleep and productivity are not priced', 'Because they always add carbon', 'Because nobody hears sound indoors'],
        PHD: ['Turning sound into light', 'Creating audible simulations of a space before it is built', 'Measuring air pollution', 'Removing all sound from a room'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Noise is sound that is unwanted, too loud or makes it hard to listen and think.',
        MIDDLE_SCHOOL: 'Loudness is measured in decibels.',
        HIGH_SCHOOL: 'Impact sound is created when something strikes a structure, such as footsteps.',
        UNDERGRADUATE: 'Knowing the noise sources first lets designers set targets and plan layouts.',
        GRADUATE: 'Unpriced benefits make acoustic measures easy targets when budgets are cut.',
        PHD: 'Auralization lets people hear a simulated design and judge it before construction.',
      },
    },
  ],
}

export default expansion
