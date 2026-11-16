import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'daylighting-design',
  lessons: [
    {
      id: 'gb-day-1',
      title: 'Light from the Sky',
      content: {
        ELEMENTARY: `
<h2>Sunshine Inside: Lighting Rooms With the Sky</h2>
<p>Look around your classroom. Is the light coming from lamps on the ceiling, or from the windows? The sky is the biggest, brightest lamp in the world, and it is free! When buildings are planned to use light from the sky, we call it <em>daylighting</em>.</p>

<h3>Why Daylight Is Great</h3>
<p>Daylight helps in lots of ways. When the sun lights a room, the electric lights can stay off, which saves electricity. Many people also feel happier and more awake in rooms with daylight and a view outside. Seeing the sky helps our bodies know when it is daytime.</p>
<ul>
<li><strong>Daylight:</strong> natural light that comes from the sun and the sky during the day</li>
<li><strong>Window:</strong> an opening with glass that lets light and views into a building</li>
<li><strong>Skylight:</strong> a window in the roof that lets light pour down from above</li>
</ul>

<h3>Too Much of a Good Thing</h3>
<p>Have you ever squinted because the sun was shining right in your eyes? That uncomfortable brightness is called <em>glare</em>. Too much direct sun can also make a room too hot. So builders use clever helpers to keep daylight gentle.</p>
<ul>
<li><strong>Glare:</strong> light so bright that it hurts your eyes or makes it hard to see</li>
<li><strong>Blind:</strong> slats or a shade you can move to block or soften sunlight</li>
<li><strong>Overhang:</strong> a little roof that sticks out above a window to shade it from the high summer sun</li>
</ul>

<h3>Bouncing Light Around</h3>
<p>Light bounces off light-colored surfaces, a bit like a ball bouncing off a wall. White ceilings and pale walls help spread daylight further into a room. Dark walls soak light up, so the room feels darker.</p>

<h3>Be a Daylight Detective</h3>
<ol>
<li>On a sunny day, see if your room is bright enough with the lights off.</li>
<li>Open the blinds in the morning so daylight can come in.</li>
<li>Close blinds a little if the sun is in someone's eyes.</li>
<li>Notice which rooms feel brightest and why.</li>
</ol>
<p>Using sunshine indoors is a simple way to help the planet and feel good too!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Architects Bring Daylight Deep Into Buildings</h2>
<p>Daylighting means designing a building so that natural light does much of the work of electric lighting. It sounds simple: just add windows. But getting daylight to reach the middle of a big building, without glare or overheating, takes careful design. Architects use the shape of the building, the position of windows and some clever devices to do it.</p>

<h3>The Depth Problem</h3>
<p>Daylight from an ordinary window fades quickly as you move away from it. Near the window a room may be very bright, while a few meters back it feels dim. A common rule of thumb is that useful daylight from side windows reaches only a limited distance into a room, related to how high the top of the window is. That is why tall windows and narrow buildings tend to be easier to daylight.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Daylighting:</strong> designing buildings to use natural light in place of electric lighting</li>
<li><strong>Light shelf:</strong> a horizontal surface near the top of a window that bounces daylight onto the ceiling and deeper into the room</li>
<li><strong>Clerestory window:</strong> a high window placed above eye level, often near the roof line</li>
<li><strong>Light well:</strong> a shaft or open space inside a building that carries daylight down to lower floors</li>
<li><strong>Glare:</strong> uncomfortable brightness caused by too much light or strong contrast</li>
<li><strong>Daylight sensor:</strong> a device that dims electric lights when there is enough daylight</li>
</ul>

<h3>Tools for Bringing Light In</h3>
<table>
<thead><tr><th>Strategy</th><th>How it works</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Tall side windows</td><td>Light enters high and reaches further</td><td>Classrooms and offices</td></tr>
<tr><td>Light shelves</td><td>Bounce light onto the ceiling</td><td>Rooms facing the sun</td></tr>
<tr><td>Skylights</td><td>Bring light from the roof</td><td>Top floors and single-story buildings</td></tr>
<tr><td>Clerestories</td><td>High windows add light without glare at eye level</td><td>Halls, gyms, large rooms</td></tr>
<tr><td>Atriums and light wells</td><td>Open spaces carry light into the center</td><td>Deep, multi-story buildings</td></tr>
</tbody>
</table>

<h3>Controlling the Sun</h3>
<p>The sun moves across the sky during the day and sits higher in summer than in winter. Architects use this. An overhang above a window facing the midday sun can block high summer sun but let lower winter sun in. Blinds, louvers and special glass help control glare and heat.</p>

<h3>Why It Matters</h3>
<p>Lighting uses a noticeable share of electricity in schools and offices. When daylight sensors dim the lights, that energy is saved. Daylight and views outside are also linked with comfort and wellbeing. Good daylighting is a win for people and for the planet.</p>
`,
        HIGH_SCHOOL: `
<h2>Daylighting Strategies, Glare Control and Wellbeing</h2>
<p>Daylighting is the deliberate use of natural light to illuminate building interiors. Done well, it cuts electricity for lighting, can reduce cooling loads from electric lights, and creates spaces that people enjoy. Done poorly, it causes glare, overheating and occupants who close the blinds and switch the lights back on. The goal is not maximum light but the right light in the right place at the right time.</p>

<h3>Sun Versus Sky</h3>
<p>Two kinds of daylight reach a building. <em>Direct sunlight</em> is intense, moves throughout the day and carries a lot of heat. <em>Diffuse skylight</em> is light scattered by the atmosphere and clouds; it is softer and more even. Good daylighting usually welcomes diffuse light and carefully manages direct sun.</p>
<ul>
<li><strong>Direct sunlight:</strong> the beam of light coming straight from the sun, bright and full of heat</li>
<li><strong>Diffuse light:</strong> light scattered by the sky and clouds that arrives evenly from many directions</li>
<li><strong>Illuminance:</strong> the amount of light falling on a surface, measured in lux</li>
<li><strong>Visible transmittance:</strong> the fraction of visible light that passes through a window's glass</li>
<li><strong>Solar heat gain coefficient:</strong> the fraction of the sun's heat that passes through a window</li>
<li><strong>Contrast:</strong> the difference in brightness between areas in view, a main cause of glare</li>
</ul>

<h3>Orientation Matters</h3>
<table>
<thead><tr><th>Window facing</th><th>Light character</th><th>Typical design response</th></tr></thead>
<tbody>
<tr><td>Toward the equator</td><td>Strong sun, high in summer and low in winter</td><td>Horizontal overhangs and light shelves</td></tr>
<tr><td>Away from the equator</td><td>Steady, diffuse light with little direct sun</td><td>Larger glazing, little shading needed</td></tr>
<tr><td>East</td><td>Low morning sun, bright and glary</td><td>Vertical fins or adjustable blinds</td></tr>
<tr><td>West</td><td>Low afternoon sun, glare and heat at the hottest time</td><td>Limit glazing, use exterior shading</td></tr>
</tbody>
</table>

<h3>Glare and How to Control It</h3>
<p>Glare happens when part of the field of view is much brighter than the eye is adapted to, such as a sunny window behind a computer screen. Solutions include exterior shading, which stops sun before it enters, interior blinds that people can adjust, diffusing glass, and placing desks so people look across windows rather than directly into them.</p>

<h3>Daylighting and Energy</h3>
<p>Daylight only saves energy if electric lights actually dim or switch off. Photosensors and dimmable LED fixtures do this automatically. But windows also let heat in and out, so designers must balance daylight against heating and cooling. Glass with high visible transmittance but lower solar heat gain helps in warm climates.</p>

<h3>Daylight and Wellbeing</h3>
<p>Many studies associate daylight and outdoor views with occupant satisfaction and comfort. Daylight's natural daily changes also help regulate the body's internal clock. These benefits are part of why daylight access is rewarded in green building rating systems.</p>
`,
        UNDERGRADUATE: `
<h2>Daylighting Metrics, Simulation and Design Integration</h2>
<p>Daylighting design has moved from rules of thumb to quantitative, simulation-based practice. Designers now ask how much of a space receives adequate daylight over the whole year, how often it gets too much direct sun, and how daylight interacts with energy use. This lesson introduces the main metrics, the simulation workflow and how daylighting is integrated with other design decisions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Daylight factor:</strong> the ratio of indoor to outdoor illuminance under an overcast sky, expressed as a percentage</li>
<li><strong>Climate-based daylight modeling:</strong> simulation that uses hourly weather data for a real location to predict daylight across a year</li>
<li><strong>Daylight autonomy:</strong> the share of occupied hours when a point receives at least a target illuminance from daylight alone</li>
<li><strong>Spatial daylight autonomy:</strong> the percentage of floor area that meets a daylight illuminance target for at least a set share of occupied hours</li>
<li><strong>Annual sunlight exposure:</strong> the percentage of floor area that receives too much direct sunlight for a significant number of hours per year</li>
<li><strong>Useful daylight illuminance:</strong> a metric that bins hours into too little, useful and excessive daylight levels</li>
</ul>

<h3>Static Versus Dynamic Metrics</h3>
<table>
<thead><tr><th>Metric</th><th>Type</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Daylight factor</td><td>Static</td><td>Simple, independent of orientation and climate</td><td>Ignores sun, location and time</td></tr>
<tr><td>Spatial daylight autonomy</td><td>Dynamic</td><td>Reflects real climate across the year</td><td>Does not penalize excess light</td></tr>
<tr><td>Annual sunlight exposure</td><td>Dynamic</td><td>Flags likely glare and overheating zones</td><td>Uses a simplified proxy for discomfort</td></tr>
<tr><td>Useful daylight illuminance</td><td>Dynamic</td><td>Captures both too little and too much</td><td>Thresholds are debated</td></tr>
</tbody>
</table>
<p>Because spatial daylight autonomy rewards more light while annual sunlight exposure penalizes too much direct sun, the two are usually reported together. A design that maximizes one at the expense of the other is not a good daylighting design.</p>

<h3>The Simulation Workflow</h3>
<p>Most daylight simulation uses backward ray tracing, following light paths from sensor points back to sources. Tools based on established ray-tracing engines model glass, surface reflectance and shading devices. Results depend heavily on inputs: surface reflectances, glazing properties, furniture and blind operation. Reasonable assumptions about how occupants use blinds strongly affect predicted savings.</p>

<h3>Quantitative Reasoning in Words</h3>
<p>Lighting savings depend on the fraction of occupied hours when daylight meets the target and on how well controls respond. A perimeter zone with high daylight autonomy and continuous dimming can save a large share of its lighting energy, while a deep interior zone saves little. Doubling window area does not double savings; benefits flatten as the zone near the window is already saturated, while heat gains and losses keep rising.</p>

<h3>Design Integration Checklist</h3>
<ol>
<li>Set floor-plate depth and ceiling height early, since they limit daylight more than any device.</li>
<li>Orient and size glazing by facade, with shading designed for each orientation.</li>
<li>Choose glass balancing visible transmittance and solar heat gain for the climate.</li>
<li>Use light-colored interior surfaces to distribute light.</li>
<li>Run climate-based simulations for both daylight sufficiency and sun exposure.</li>
<li>Zone and commission daylight-responsive controls so savings are realized.</li>
</ol>
`,
        GRADUATE: `
<h2>Advanced Daylighting Systems, Controls and Circadian Lighting</h2>
<p>Advanced daylighting brings together dynamic facades, integrated lighting controls and growing attention to the non-visual effects of light on human health. The questions at this level concern how to specify and operate systems so that predicted performance is achieved, how to account for circadian outcomes alongside energy, and how to navigate standards, procurement and occupant acceptance.</p>

<h3>Advanced Systems</h3>
<ul>
<li><strong>Dynamic glazing:</strong> glass whose tint can change, electronically or in response to light or heat, to control glare and solar gain</li>
<li><strong>Automated shading:</strong> motorized blinds or louvers controlled by sensors, schedules or sun-position algorithms</li>
<li><strong>Tubular daylighting device:</strong> a reflective tube that channels daylight from a roof collector into a room below</li>
<li><strong>Prismatic or redirecting glazing:</strong> glass or films that bend incoming light upward toward the ceiling</li>
<li><strong>Circadian lighting:</strong> lighting designed to support the body's daily biological rhythms by varying intensity and spectrum over the day</li>
<li><strong>Melanopic light:</strong> light weighted by the sensitivity of the eye's non-visual photoreceptors that influence the body clock</li>
</ul>

<h3>Controls and the Occupant Override Problem</h3>
<p>Daylight-linked lighting controls and automated shading promise large savings, but field evaluations often find lower performance than predicted. Causes include poor sensor placement, miscalibration and occupants overriding systems they find annoying, for example shades that move too often. Successful projects give occupants meaningful but bounded control, tune control logic after occupancy, and commission sensors carefully.</p>

<h3>Circadian Lighting</h3>
<p>Beyond vision, light reaching specialized cells in the eye influences alertness and the timing of the body clock. Bright light rich in short wavelengths during the day, and dimmer, warmer light in the evening, is broadly associated with healthier rhythms. Daylight naturally provides high daytime melanopic stimulus, which is one argument for prioritizing daylight access. Electric circadian systems attempt to replicate this in deep spaces, but recommended targets and their health impact are still being refined.</p>

<h3>Comparing System Choices</h3>
<table>
<thead><tr><th>System</th><th>Primary benefit</th><th>Key challenge</th></tr></thead>
<tbody>
<tr><td>Fixed exterior shading</td><td>Reliable solar control, low maintenance</td><td>Cannot adapt to changing sky conditions</td></tr>
<tr><td>Automated blinds</td><td>Responds to sun and glare in real time</td><td>Occupant acceptance and maintenance</td></tr>
<tr><td>Dynamic glazing</td><td>Glare and heat control without blocking views</td><td>Higher cost, color shift and transition time</td></tr>
<tr><td>Tunable electric lighting</td><td>Circadian support in deep spaces</td><td>Uncertain targets and added complexity</td></tr>
</tbody>
</table>

<h3>Policy, Standards and Equity</h3>
<p>Green building rating systems and some building codes now include daylight and view requirements, and some jurisdictions set minimum daylight provisions for housing and schools. Equity concerns arise because dense, low-cost housing, basement units and windowless work environments often have the poorest daylight access. Planning rules on building height and spacing shape daylight available to neighbors, making daylight partly a shared urban resource.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define goals for visual comfort, energy, views and circadian stimulus.</li>
<li>Evaluate daylight sufficiency, sun exposure and glare with annual simulation.</li>
<li>Specify controls with commissioning and post-occupancy tuning plans.</li>
<li>Assess occupant control, acceptance and maintenance burden.</li>
<li>Measure performance after occupancy and compare with predictions.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Daylighting Performance and Visual Comfort</h2>
<p>Daylighting research sits at the intersection of building physics, vision science, chronobiology and behavior. Simulation can now predict illuminance across a year with reasonable fidelity, but predicting human response remains difficult: whether occupants experience glare, how they use shades, what views they value and how light affects health. This lesson surveys models, contested questions and methodological debates.</p>

<h3>Modeling Visual Comfort</h3>
<ul>
<li><strong>Daylight glare probability:</strong> a glare index derived from luminance images that estimates the share of people likely to be disturbed</li>
<li><strong>High dynamic range imaging:</strong> capturing a scene at multiple exposures to measure the full range of luminances in view</li>
<li><strong>Adaptation state:</strong> the eye's current sensitivity, which shapes whether a bright source is perceived as glare</li>
<li><strong>View quality:</strong> the value of what is seen through a window, considering content, access and clarity</li>
<li><strong>Matrix-based simulation:</strong> methods that separate sky, facade and room light transport so many sky conditions and shading states can be computed efficiently</li>
<li><strong>Non-visual dose:</strong> the cumulative light exposure relevant to circadian effects, integrating intensity, spectrum, timing and duration</li>
</ul>
<p>Most glare indices were developed from limited laboratory studies with small participant groups, often under specific conditions. Their transferability to diverse populations, tasks and climates is an active question, as is the threshold between "noticeable" and "disturbing" glare.</p>

<h3>Human Factors and Behavior</h3>
<p>Occupant behavior dominates real daylighting outcomes. Shade use tends to be sticky: once lowered for glare, blinds often stay down long after the sun has moved. Stochastic models of shade and lighting use attempt to capture this, but they are calibrated on limited datasets. Individual differences in light sensitivity, age-related changes in vision and cultural preferences for brightness further complicate prediction.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Which glare metric best predicts discomfort</td><td>Different indices disagree across sources and contexts</td></tr>
<tr><td>Appropriate thresholds for daylight sufficiency</td><td>Targets reflect conventions more than clear human response data</td></tr>
<tr><td>Health effects of daytime light exposure in buildings</td><td>Field evidence is limited and confounded by many factors</td></tr>
<tr><td>How to value variability in daylight</td><td>Dynamic light may be stimulating or distracting depending on task</td></tr>
<tr><td>Trade-off between views and glare control</td><td>Shading that controls glare often blocks the view people value</td></tr>
</tbody>
</table>

<h3>Methodological Debates</h3>
<p>Laboratory studies offer control but limited realism; field studies offer realism but weak control over sky conditions and confounders. Virtual reality and calibrated luminance displays are being explored as intermediate settings, though their fidelity for glare perception is debated. Another debate concerns whether point-in-time annual metrics can capture experience, or whether time-series and spatially resolved, view-based metrics are needed.</p>

<h3>Integration With Energy and Health</h3>
<p>Researchers increasingly co-optimize daylight, glare, views, thermal comfort and energy. Multi-objective optimization reveals trade-offs, but results depend on how human outcomes are quantified. Integrating circadian dose into design requires spectral simulation, which raises computational cost and requires assumptions about occupant position and gaze.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Large, diverse field datasets linking measured luminance with reported comfort.</li>
<li>Glare and view models validated across age, culture and task.</li>
<li>Spectral daylight simulation that supports circadian design at reasonable cost.</li>
<li>Occupant-centered control strategies that preserve views while managing glare.</li>
<li>Longitudinal studies of daylight exposure and health outcomes in real buildings.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbdayq1',
      question: {
        ELEMENTARY: 'Why use sunlight in buildings?',
        MIDDLE_SCHOOL: 'What is a light shelf?',
        HIGH_SCHOOL: 'What is glare?',
        UNDERGRADUATE: 'What is spatial daylight autonomy?',
        GRADUATE: 'What is circadian lighting?',
        PHD: 'Why is the transferability of glare indices questioned?',
      },
      options: {
        ELEMENTARY: ['It saves electricity and helps people feel good', 'It wastes energy', 'It makes buildings dark', 'It makes rooms noisy'],
        MIDDLE_SCHOOL: ['A horizontal surface that bounces daylight deeper into a room', 'A shelf for books near the window', 'A holder for light bulbs', 'A tool for cleaning windows'],
        HIGH_SCHOOL: ['Uncomfortable brightness from too much light or strong contrast', 'Even, comfortable lighting', 'Complete darkness', 'Light reflected off a dark wall'],
        UNDERGRADUATE: ['The percentage of floor area meeting a daylight target for a set share of occupied hours', 'The space reserved for light fixtures', 'Lights that switch on automatically at night', 'The number of daytime hours in a year'],
        GRADUATE: ['Lighting designed to support the body’s daily biological rhythms', 'Lights arranged in a circle', 'Round light fixtures', 'Lighting with no timing controls'],
        PHD: ['They were developed from limited laboratory studies under specific conditions', 'They have been validated for every population', 'They ignore luminance entirely', 'They are only used for electric lighting'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Sunlight means electric lights can stay off, and daylight helps people feel happy and awake.',
        MIDDLE_SCHOOL: 'Light shelves reflect daylight onto the ceiling, which spreads it further into the room.',
        HIGH_SCHOOL: 'Glare happens when part of the view is much brighter than the eye is adapted to.',
        UNDERGRADUATE: 'sDA reports how much floor area gets enough daylight for most of the occupied year.',
        GRADUATE: 'Circadian lighting varies intensity and spectrum to support healthy body-clock timing.',
        PHD: 'Small, specific participant groups limit how well indices apply to other people, tasks and climates.',
      },
    },
    {
      id: 'gbdayq2',
      question: {
        ELEMENTARY: 'What is a skylight?',
        MIDDLE_SCHOOL: 'What does a daylight sensor do?',
        HIGH_SCHOOL: 'What is diffuse light?',
        UNDERGRADUATE: 'Why are spatial daylight autonomy and annual sunlight exposure usually reported together?',
        GRADUATE: 'Why do daylight-linked controls often underperform in the field?',
        PHD: 'What is high dynamic range imaging used for in daylighting research?',
      },
      options: {
        ELEMENTARY: ['A lamp shaped like a cloud', 'A kite flown on sunny days', 'A window in the roof that lets light in from above', 'A light that only works at night'],
        MIDDLE_SCHOOL: ['Opens the windows automatically', 'Measures the temperature outside', 'Dims electric lights when there is enough daylight', 'Turns on all lights at sunrise'],
        HIGH_SCHOOL: ['A narrow beam straight from the sun', 'Light from a desk lamp', 'Light scattered by the sky and clouds arriving from many directions', 'Light that has been fully blocked'],
        UNDERGRADUATE: ['They measure the same thing', 'Neither one uses weather data', 'One rewards enough daylight while the other flags too much direct sun', 'They are required only for houses'],
        GRADUATE: ['Sensors never need calibration', 'Daylight never reaches the sensors', 'Poor sensor placement, miscalibration and occupant overrides', 'Controls only work at night'],
        PHD: ['Printing posters of buildings', 'Measuring indoor air temperature', 'Measuring the full range of luminances in a scene for glare analysis', 'Recording sound levels near windows'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A skylight is a roof window that brings daylight down into a room.',
        MIDDLE_SCHOOL: 'Daylight sensors make sure electric lights dim so daylight actually saves energy.',
        HIGH_SCHOOL: 'Diffuse light is soft and even, which makes it ideal for lighting rooms without glare.',
        UNDERGRADUATE: 'A good design gets enough daylight without excessive direct sun, so both metrics matter.',
        GRADUATE: 'Commissioning, careful placement and occupant-friendly logic help close the gap.',
        PHD: 'HDR images capture luminance across the view, which glare indices such as DGP need.',
      },
    },
    {
      id: 'gbdayq3',
      question: {
        ELEMENTARY: 'Which color walls help spread daylight around a room?',
        MIDDLE_SCHOOL: 'Why do architects use tall windows for daylighting?',
        HIGH_SCHOOL: 'Which window orientation typically brings glare and heat at the hottest time of day?',
        UNDERGRADUATE: 'What is climate-based daylight modeling?',
        GRADUATE: 'What does dynamic glazing do?',
        PHD: 'What is a known pattern in how occupants use shades?',
      },
      options: {
        ELEMENTARY: ['Black walls', 'White and pale walls', 'Dark brown walls', 'Walls with no paint'],
        MIDDLE_SCHOOL: ['They are cheaper than short windows', 'Light entering high reaches further into the room', 'They keep all light out', 'They are easier to clean'],
        HIGH_SCHOOL: ['East', 'West', 'Away from the equator', 'Toward the equator in winter only'],
        UNDERGRADUATE: ['Modeling only under a single overcast sky', 'Simulation using hourly weather data for a real location across a year', 'Measuring light with a handheld meter once', 'Estimating light from building cost'],
        GRADUATE: ['Changes its tint to control glare and solar gain', 'Makes windows bigger at night', 'Turns glass into solar panels', 'Removes the need for any lighting'],
        PHD: ['Shades are adjusted every few minutes', 'Shades are never lowered', 'Once lowered for glare, blinds often stay down long after', 'Shade use is identical for all people'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Light bounces off light colors, so pale walls spread daylight further.',
        MIDDLE_SCHOOL: 'Useful daylight from side windows reaches further when the window head is higher.',
        HIGH_SCHOOL: 'West windows get low afternoon sun when temperatures are highest, so glazing is limited and shaded.',
        UNDERGRADUATE: 'Climate-based modeling accounts for real sun and sky conditions over the year.',
        GRADUATE: 'Dynamic glazing controls glare and heat while keeping views, though it costs more.',
        PHD: 'Sticky shade behavior means real daylight use is often lower than simulations assume.',
      },
    },
    {
      id: 'gbdayq4',
      question: {
        ELEMENTARY: 'What is an overhang above a window for?',
        MIDDLE_SCHOOL: 'What is a light well?',
        HIGH_SCHOOL: 'Why does daylight only save energy with the right controls?',
        UNDERGRADUATE: 'Why does doubling window area not double lighting savings?',
        GRADUATE: 'Why is daylight access an equity issue?',
        PHD: 'What is a matrix-based simulation method?',
      },
      options: {
        ELEMENTARY: ['To hold flower pots', 'To keep birds away', 'To make the window bigger', 'To shade the window from the high summer sun'],
        MIDDLE_SCHOOL: ['A water well with a lamp', 'A bright light bulb', 'A deep window ledge', 'A shaft or open space that carries daylight down to lower floors'],
        HIGH_SCHOOL: ['Because daylight only works at night', 'Because windows block all heat', 'Because LED lights cannot be dimmed', 'Because savings only happen if electric lights actually dim or switch off'],
        UNDERGRADUATE: ['Because larger windows block light', 'Because windows always face north', 'Because simulation cannot model large windows', 'Because the zone near the window becomes saturated while heat gains and losses keep rising'],
        GRADUATE: ['Everyone has equal daylight', 'Daylight cannot be affected by planning', 'Only offices need daylight', 'Low-cost and basement housing often has the poorest daylight access'],
        PHD: ['Computing light with spreadsheets only', 'A method for counting windows', 'A way to measure glare in person', 'Separating sky, facade and room light transport to compute many conditions efficiently'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Overhangs block the high summer sun but let in the lower winter sun.',
        MIDDLE_SCHOOL: 'Light wells and atriums bring daylight into the center of deep buildings.',
        HIGH_SCHOOL: 'Photosensors and dimmable LEDs make sure lights respond when daylight is available.',
        UNDERGRADUATE: 'Benefits flatten once perimeter zones are bright enough, while energy penalties continue.',
        GRADUATE: 'Dense, low-cost and windowless spaces leave some people with much less daylight.',
        PHD: 'Matrix methods let researchers simulate many sky and shading states without rerunning full ray tracing.',
      },
    },
    {
      id: 'gbdayq5',
      question: {
        ELEMENTARY: 'What can you do on a sunny morning to use daylight?',
        MIDDLE_SCHOOL: 'What is a clerestory window?',
        HIGH_SCHOOL: 'What does visible transmittance describe?',
        UNDERGRADUATE: 'What is a weakness of the daylight factor?',
        GRADUATE: 'What is melanopic light?',
        PHD: 'Why is the trade-off between views and glare control contested?',
      },
      options: {
        ELEMENTARY: ['Open the blinds and turn off lights you do not need', 'Close every curtain', 'Turn on every lamp', 'Paint the windows'],
        MIDDLE_SCHOOL: ['A high window placed above eye level', 'A window in the floor', 'A round window in a door', 'A window covered with paper'],
        HIGH_SCHOOL: ['The fraction of visible light that passes through glass', 'The color of the window frame', 'How heavy the glass is', 'The number of windows on a wall'],
        UNDERGRADUATE: ['It ignores sun position, location and time', 'It requires hourly weather files', 'It always predicts glare', 'It only works for skylights'],
        GRADUATE: ['Light weighted by the sensitivity of the eye’s non-visual photoreceptors', 'Light from melon-shaped fixtures', 'Light used only in greenhouses', 'Light that cannot be seen at all'],
        PHD: ['Shading that controls glare often blocks the view people value', 'Views and glare are unrelated', 'Glare control always improves views', 'Researchers agree views have no value'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Opening blinds lets sunshine in, so some lights can stay off.',
        MIDDLE_SCHOOL: 'Clerestories bring light high into a room without glare at eye level.',
        HIGH_SCHOOL: 'Glass with high visible transmittance lets in plenty of daylight.',
        UNDERGRADUATE: 'The daylight factor uses an overcast sky only, so it misses direct sun and climate.',
        GRADUATE: 'Melanopic light describes the part of light most relevant to effects on the body clock.',
        PHD: 'Many glare solutions reduce view access, so researchers debate how to balance them.',
      },
    },
  ],
}

export default expansion
