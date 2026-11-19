import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: heating and cooling buildings with the ground's
// steady temperature. Chapter 4 covers geothermal power from deep heat.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'geothermal-energy~2',
  title: 'Geothermal Heat Pumps for Homes and Districts',
  description: {
    ELEMENTARY: 'How the steady warmth under our feet can heat homes in winter and cool them in summer.',
    MIDDLE_SCHOOL: 'How ground-source heat pumps use the ground\'s steady temperature to heat and cool buildings.',
    HIGH_SCHOOL: 'How ground-source heat pumps and district geothermal networks heat and cool buildings with little energy.',
    UNDERGRADUATE: 'Ground-source heat pump design: loops, coefficient of performance, sizing and district networks.',
    GRADUATE: 'Shallow geothermal systems at building and district scale: design, performance, economics and policy.',
    PHD: 'Research frontiers in shallow geothermal and thermal networks: ground modelling, seasonal balance and decarbonisation pathways.',
  },
  lessons: [
    {
      id: 're-geo-1',
      title: 'Geothermal Heat Pumps for Homes and Districts',
      content: {
        ELEMENTARY: `
<h2>The Ground Stays Just Right</h2>
<p>On a freezing winter day the air is icy, and on a hot summer day the air is baking. But a few steps under the ground, the dirt stays about the same temperature all year long. It is cooler than summer air and warmer than winter air. People have found a clever way to use that steady ground to make homes comfortable.</p>

<h3>A Pipe Loop Under the Yard</h3>
<p>Workers bury long loops of pipe under a yard or a playground. Water flows through the pipes. In winter, the water picks up warmth from the ground and carries it into the house. A machine called a heat pump makes that warmth stronger and sends it into the rooms. In summer, it works the other way: the heat pump takes heat out of the house and puts it back into the cool ground.</p>
<ul>
<li><strong>Heat pump:</strong> a machine that moves heat from one place to another</li>
<li><strong>Pipe loop:</strong> long pipes buried in the ground that carry water</li>
<li><strong>Ground temperature:</strong> how warm the dirt is a few steps underground</li>
<li><strong>Heating:</strong> making a place warmer</li>
<li><strong>Cooling:</strong> making a place cooler</li>
</ul>

<h3>Sharing Ground Warmth</h3>
<p>Some towns connect many houses, schools and shops to one big shared loop. Everyone takes warmth from the ground and puts it back, like a team passing a ball around.</p>

<h3>Why It Is Good for the Planet</h3>
<p>Heat pumps use a little electricity to move a lot of heat. That means less burning of gas or oil, cleaner air and lower bills for families. Once the pipes are buried, they can keep working quietly for fifty years or more.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Borrowing Heat From the Earth</h2>
<p>Dig about two metres down almost anywhere and the soil sits at a steady temperature, often around 10 to 15 °C, whatever the season. Above ground, winter air might be −10 °C and summer air 35 °C. A ground-source heat pump, sometimes called a geothermal heat pump, takes advantage of that difference to heat and cool buildings using much less energy than a furnace or an ordinary air conditioner.</p>

<h3>How It Works</h3>
<p>A ground loop of plastic pipe is buried in trenches or drilled into deep vertical holes. A water-based fluid circulates through it. In winter the fluid absorbs heat from the ground; the heat pump, which works like a refrigerator running in reverse, concentrates that heat and delivers warm air or warm water to the building. In summer, the heat pump moves heat out of the building and dumps it into the cooler ground.</p>
<ul>
<li><strong>Ground-source heat pump:</strong> a heat pump that exchanges heat with the ground instead of the outside air</li>
<li><strong>Ground loop:</strong> buried pipes that carry fluid to collect or release heat</li>
<li><strong>Borehole:</strong> a narrow, deep hole drilled to hold a vertical ground loop</li>
<li><strong>Efficiency:</strong> how much useful heating or cooling you get for the energy you put in</li>
<li><strong>District network:</strong> a shared system of pipes that serves many buildings</li>
</ul>

<h3>Why It Saves Energy</h3>
<p>Moving heat takes far less energy than making it by burning fuel. A good ground-source heat pump can deliver three to five units of heat for every unit of electricity it uses. If that electricity comes from solar or wind, the home's heating can be almost carbon-free.</p>

<h3>Whole Neighbourhoods</h3>
<p>Drilling boreholes is expensive for one house, so some towns build district geothermal networks. Many buildings share the boreholes and pipes, which spreads the cost and lets buildings that need cooling share heat with buildings that need warming.</p>
`,
        HIGH_SCHOOL: `
<h2>Heating and Cooling With Shallow Geothermal Energy</h2>
<p>"Geothermal" often brings to mind steam erupting from volcanic regions and turning turbines. That is deep geothermal power. This chapter is about shallow geothermal energy: using the ground just below our feet, which stays at a steady temperature year-round, as a source of heat in winter and a sink for heat in summer. It works almost anywhere, not just near volcanoes, and it is one of the most efficient ways to keep buildings comfortable.</p>

<h3>The Heat Pump Cycle</h3>
<p>A heat pump uses a refrigerant that boils at a low temperature. In heating mode, the refrigerant absorbs heat from the ground loop and evaporates. A compressor squeezes the vapour, raising its temperature, and the hot refrigerant releases heat into the building as it condenses. An expansion valve then drops its pressure and the cycle repeats. Reversing the flow turns the system into an air conditioner that rejects heat into the ground.</p>
<ul>
<li><strong>Refrigerant:</strong> a fluid that absorbs and releases heat as it changes between liquid and gas</li>
<li><strong>Compressor:</strong> the part that raises the pressure and temperature of the refrigerant vapour</li>
<li><strong>Coefficient of performance (COP):</strong> units of heat delivered per unit of electricity used</li>
<li><strong>Closed loop:</strong> a sealed pipe circuit that recirculates the same fluid through the ground</li>
<li><strong>Fifth-generation district network:</strong> a low-temperature shared loop where each building has its own heat pump</li>
</ul>

<h3>Loops, Sizing and Cost</h3>
<p>Horizontal loops are laid in trenches one to two metres deep and need lots of land; vertical loops use boreholes 50 to 150 metres deep and fit on small lots. Installers size the loop from the building's heating and cooling loads and the soil's thermal properties. Because the ground is milder than winter air, ground-source systems often reach a COP of 3.5 to 5, beating air-source heat pumps on the coldest days. Their drawback is up-front cost, mainly drilling, which is why incentives and shared networks matter.</p>

<h3>District Networks</h3>
<p>In a modern district system, a shared loop of pipes runs at near-ground temperature. Each building has its own heat pump. A supermarket that must cool its fridges dumps heat into the loop, and nearby homes draw that heat back out. Shared boreholes cut costs per building, and utilities in several countries now plan these networks as a gas replacement for whole neighbourhoods.</p>
`,
        UNDERGRADUATE: `
<h2>Ground-Source Heat Pumps: Principles and Practice</h2>
<p>Shallow geothermal systems exploit the thermal inertia of the subsurface. Below roughly 10 metres, ground temperature approaches the local mean annual air temperature and varies little through the year. Ground-source heat pumps (GSHPs) couple a vapour-compression heat pump to this stable reservoir, achieving higher and steadier efficiencies than air-source units, especially in cold climates. They are a cornerstone of building decarbonisation strategies that replace fossil boilers with electrified heat.</p>

<h3>Thermodynamics and Performance</h3>
<p>The ideal Carnot COP for heating is T_hot / (T_hot − T_cold), using absolute temperatures. Raising the source temperature or lowering the delivery temperature narrows the lift and improves performance, which is why GSHPs pair best with low-temperature distribution such as underfloor heating. Real systems reach 45 to 60 percent of the Carnot limit. Seasonal performance factors (SPF), which include pumps and auxiliary loads over a year, are the more honest metric; well-designed systems achieve SPFs of 3.5 to 4.5.</p>
<ul>
<li><strong>Seasonal performance factor (SPF):</strong> total heat delivered over a year divided by total electricity used, including auxiliaries</li>
<li><strong>Temperature lift:</strong> the difference between the source temperature and the delivery temperature a heat pump must overcome</li>
<li><strong>Borehole heat exchanger:</strong> a vertical U-tube or coaxial pipe grouted into a borehole to exchange heat with the ground</li>
<li><strong>Thermal conductivity:</strong> how readily the ground conducts heat, which sets how much loop length is needed</li>
<li><strong>Thermal response test:</strong> a field test that measures the ground's effective conductivity and borehole resistance</li>
</ul>

<h3>Design and Sizing</h3>
<p>Loop design starts from the building's peak and annual loads. Software applying line-source or g-function models predicts fluid temperatures over 20 to 50 years; undersized fields drift colder each winter as heat extraction outpaces natural recovery. A thermal response test on a pilot borehole refines conductivity estimates, often reducing total drilling. Open-loop systems that draw groundwater directly can be cheaper where aquifers allow, but need permits and careful reinjection.</p>

<h3>From Buildings to Districts</h3>
<p>Fifth-generation district heating and cooling networks circulate water at 10 to 25 °C through a shared ambient loop. Each building's heat pump lifts or rejects heat as needed, so simultaneous heating and cooling loads cancel, and shared borefields can be sized for the net load. Such networks avoid the heat losses of high-temperature district heating and can integrate waste heat from data centres or sewers.</p>

<h3>Ground-Source Versus Air-Source</h3>
<p>Air-source heat pumps are cheaper to install because they need no drilling, and modern cold-climate models work well down to around −20 °C. Ground-source systems cost more up front but deliver higher seasonal efficiency, lower peak electricity demand and longer equipment life, since the loop lasts decades. The right choice depends on climate, lot size, drilling costs and whether a shared network is available.</p>
`,
        GRADUATE: `
<h2>Shallow Geothermal Systems at Building and District Scale</h2>
<p>Electrifying space heating is among the hardest parts of decarbonisation because heat demand is large, seasonal and peaky. Shallow geothermal systems address all three: they deliver high seasonal efficiency, use the ground as interseasonal storage and reduce the winter peak that air-source heat pumps impose on electricity networks. This chapter treats ground-source heat pumps and ambient-temperature thermal networks as integrated building and infrastructure systems.</p>

<h3>System Performance and Grid Interaction</h3>
<p>Because ground temperatures are stable, GSHP coefficient of performance stays high during cold snaps, when air-source units degrade and resort to resistance backup. At scale this matters for distribution networks: modelling studies of high heat-pump adoption show that ground-source systems can substantially lower coincident winter peak demand compared with an all-air-source scenario, deferring network reinforcement. Pairing GSHPs with thermal storage in the building fabric or buffer tanks adds load-shifting capability that can respond to time-varying tariffs.</p>
<ul>
<li><strong>Coincident peak demand:</strong> the highest simultaneous demand across many customers, which sets network capacity needs</li>
<li><strong>Ambient loop:</strong> a district pipe network operating near ground temperature, with heat pumps in each building</li>
<li><strong>Borefield:</strong> an array of borehole heat exchangers serving one building or a network</li>
<li><strong>Seasonal thermal balance:</strong> how closely annual heat extraction and injection match, which governs long-term ground temperature</li>
<li><strong>Levelised cost of heat:</strong> the lifetime cost of a heating system divided by the heat it delivers</li>
</ul>

<h3>Design Under Uncertainty</h3>
<p>Borefield design hinges on long-term thermal balance. Heating-dominated buildings progressively cool the ground unless heat is recharged, for example by summer cooling loads, solar thermal input or waste heat. Design tools based on g-functions and simulation of hourly loads over decades quantify this drift; sensitivity to conductivity, borehole spacing and load assumptions is significant, so thermal response tests and conservative margins are standard. Groundwater flow can enhance performance but complicates modelling.</p>

<h3>Economics, Business Models and Policy</h3>
<p>High capital costs, dominated by drilling, are the main barrier. Levelised-cost comparisons favour GSHPs over long horizons, but households discount future savings heavily. Utility-owned shared borefields, analogous to gas mains, spread costs over many decades and many customers; several utilities are piloting "networked geothermal" as a pathway to retire gas distribution. Policy levers include treating borefields as regulated infrastructure, offering low-interest finance, streamlining drilling permits and setting building codes that favour low-temperature distribution.</p>

<h3>Lessons From Early Networks</h3>
<p>Early ambient-loop districts in Europe and pilot networked-geothermal projects in North America show that technical performance is usually good, while the hard parts are organisational: securing rights to drill under streets and parks, coordinating connection timelines with building owners, and setting tariffs that are fair to early and late joiners. Projects that start with an anchor load, such as a hospital, campus or supermarket with large cooling needs, tend to reach a viable heat balance and customer base faster.</p>
`,
        PHD: `
<h2>Research Frontiers in Shallow Geothermal and Thermal Networks</h2>
<p>Shallow geothermal energy is technologically mature at the scale of a single building, yet its role in decarbonising heat at urban scale remains under-researched. Key open questions concern the long-term behaviour of densely exploited subsurfaces, the optimal design and control of ambient thermal networks, and the institutional models that could finance shared ground infrastructure. This chapter surveys those frontiers.</p>

<h3>Subsurface Modelling at Urban Scale</h3>
<p>As borefields multiply in cities, thermal interference between neighbouring systems and cumulative cooling of the subsurface become real concerns. Analytical g-function methods assume isolated fields in homogeneous ground; urban reality includes heterogeneous geology, groundwater advection and the "subsurface urban heat island" created by buildings and infrastructure, which can raise ground temperatures by several degrees. Coupled thermo-hydraulic models at district or city scale, calibrated with distributed temperature sensing, are being developed to support spatial planning and fair allocation of subsurface thermal capacity.</p>
<ul>
<li><strong>Thermal interference:</strong> the effect one borefield's heat extraction or injection has on neighbouring fields</li>
<li><strong>Subsurface urban heat island:</strong> elevated ground temperatures beneath cities caused by buildings, basements and infrastructure</li>
<li><strong>Groundwater advection:</strong> heat transport by moving groundwater, which alters borefield performance</li>
<li><strong>Distributed temperature sensing:</strong> fibre-optic measurement of temperature along the full depth of a borehole</li>
<li><strong>Sector coupling:</strong> integrating heat, electricity and other energy systems so that flexibility in one supports another</li>
</ul>

<h3>Design and Control of Ambient Networks</h3>
<p>Fifth-generation networks raise optimisation problems: sizing shared borefields for the net load of diverse buildings, choosing network temperature setpoints that trade pumping energy against heat pump efficiency, and coordinating hundreds of heat pumps as flexible loads for the electricity grid. Research applies mixed-integer and model-predictive control methods, and investigates how waste heat from data centres, sewers and industry can be integrated without creating dependency on a single source.</p>

<h3>Decarbonisation Pathways and Institutions</h3>
<p>Energy-system models increasingly include shallow geothermal explicitly, but they often represent it with fixed costs and efficiencies, missing spatial constraints and network effects. Open questions include how shared ground-loop infrastructure should be regulated and priced, whether utilities can repurpose gas distribution business models toward thermal networks, and how to protect low-income households during the transition away from gas. Interdisciplinary work combining geoscience, building physics, operations research and energy policy is needed to answer them.</p>

<h3>Evidence Needs</h3>
<p>Long-term monitoring data from operating districts remain scarce, and most published performance figures come from design-stage simulations rather than measured operation. Systematic field monitoring, open datasets and comparisons between predicted and observed ground temperatures would sharpen design methods and build investor confidence. Standardised reporting of seasonal performance, including auxiliary energy, would also make results comparable across climates and system types. Life-cycle assessments that account for drilling, refrigerant leakage and grid carbon intensity over the system's lifetime are a further gap, since they determine the true climate benefit of shallow geothermal compared with other low-carbon heat options.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-geo2-q1',
      question: {
        ELEMENTARY: 'What is special about the ground a few steps under our feet?',
        MIDDLE_SCHOOL: 'Why can a ground-source heat pump work well in both winter and summer?',
        HIGH_SCHOOL: 'How does shallow geothermal energy differ from deep geothermal power?',
        UNDERGRADUATE: 'Below about 10 metres, ground temperature approaches which value?',
        GRADUATE: 'Why do ground-source heat pumps help distribution networks during cold snaps?',
        PHD: 'What urban phenomenon can raise subsurface temperatures and affect borefield modelling?',
      },
      options: {
        ELEMENTARY: ['It is always on fire', 'It changes colour', 'It stays about the same temperature all year', 'It is always frozen'],
        MIDDLE_SCHOOL: ['The ground is always hotter than the air', 'Pipes never need electricity', 'The ground stays at a steady temperature all year', 'It only works near volcanoes'],
        HIGH_SCHOOL: ['Shallow geothermal only works in volcanoes', 'Shallow geothermal uses no electricity', 'Shallow geothermal uses the steady temperature just below the surface for heating and cooling', 'They are exactly the same'],
        UNDERGRADUATE: ['The local maximum summer air temperature', 'The boiling point of water', 'The local mean annual air temperature', 'Zero degrees Celsius'],
        GRADUATE: ['They stop running in winter', 'They use gas backup', 'Their COP stays high when air-source units degrade', 'They store electricity'],
        PHD: ['Polar vortices', 'Ocean upwelling', 'The subsurface urban heat island', 'Permafrost thaw'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Just under the ground, the dirt stays about the same temperature in summer and winter.',
        MIDDLE_SCHOOL: 'The ground is warmer than winter air and cooler than summer air, so it works as a heat source and a heat sink.',
        HIGH_SCHOOL: 'Deep geothermal uses volcanic heat to make electricity; shallow geothermal uses near-surface ground for heating and cooling almost anywhere.',
        UNDERGRADUATE: 'At depth the seasonal swing fades and the temperature settles near the mean annual air temperature.',
        GRADUATE: 'Stable ground temperatures keep efficiency high on the coldest days, lowering coincident winter peaks.',
        PHD: 'Buildings and infrastructure warm the ground beneath cities, which must be included in urban-scale models.',
      },
    },
    {
      id: 're-geo2-q2',
      question: {
        ELEMENTARY: 'What carries warmth from the ground into the house?',
        MIDDLE_SCHOOL: 'What is a borehole in a geothermal system?',
        HIGH_SCHOOL: 'Which part of a heat pump raises the refrigerant\'s pressure and temperature?',
        UNDERGRADUATE: 'Why is a thermal response test carried out before designing a borefield?',
        GRADUATE: 'What does seasonal thermal balance describe?',
        PHD: 'Which measurement technique records temperature along the full depth of a borehole?',
      },
      options: {
        ELEMENTARY: ['Water flowing in buried pipes', 'A garden hose on the roof', 'A fan in the yard', 'Snow'],
        MIDDLE_SCHOOL: ['A narrow, deep hole drilled to hold a vertical ground loop', 'A hole for planting trees', 'A tunnel for cars', 'A well for drinking water only'],
        HIGH_SCHOOL: ['The compressor', 'The expansion valve', 'The ground loop', 'The thermostat'],
        UNDERGRADUATE: ['To measure the ground\'s effective thermal conductivity', 'To find oil', 'To test the building\'s windows', 'To check the electricity tariff'],
        GRADUATE: ['How closely annual heat extraction and injection match', 'The colour of the borefield', 'Daily electricity prices', 'Wind speed at the site'],
        PHD: ['Distributed temperature sensing', 'Satellite infrared imaging', 'Smart meter readings', 'Weather balloons'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Water in buried pipes picks up the ground\'s warmth and carries it to the heat pump.',
        MIDDLE_SCHOOL: 'Vertical loops sit in boreholes 50 to 150 metres deep, which fit on small lots.',
        HIGH_SCHOOL: 'The compressor squeezes the vapour, raising its temperature so it can release heat indoors.',
        UNDERGRADUATE: 'A thermal response test measures conductivity, which sets how much loop length is needed.',
        GRADUATE: 'If extraction and injection are unbalanced, the ground drifts colder or warmer over the years.',
        PHD: 'Fibre-optic distributed temperature sensing records temperature along the whole borehole.',
      },
    },
    {
      id: 're-geo2-q3',
      question: {
        ELEMENTARY: 'Why are heat pumps good for the planet?',
        MIDDLE_SCHOOL: 'How much heat can a good ground-source heat pump deliver for each unit of electricity?',
        HIGH_SCHOOL: 'What does COP stand for in heat pumps?',
        UNDERGRADUATE: 'Why do ground-source heat pumps pair best with underfloor heating?',
        GRADUATE: 'What is the main barrier to ground-source heat pump adoption?',
        PHD: 'Why is thermal interference a growing concern in cities?',
      },
      options: {
        ELEMENTARY: ['They make the ground hot', 'They are very loud', 'They need lots of oil', 'They use a little electricity to move lots of heat'],
        MIDDLE_SCHOOL: ['None', 'Half a unit', 'Exactly one unit', 'Three to five units'],
        HIGH_SCHOOL: ['Cost of piping', 'Cold outdoor pressure', 'Carbon output percentage', 'Coefficient of performance'],
        UNDERGRADUATE: ['Underfloor heating needs no pipes', 'It uses gas', 'It is cheaper to drill', 'Low delivery temperatures reduce the temperature lift and raise efficiency'],
        GRADUATE: ['Lack of electricity', 'They cannot cool', 'Noise', 'High up-front capital cost, mainly drilling'],
        PHD: ['Borefields are always far apart', 'Heat pumps interfere with radio', 'Groundwater never moves', 'Dense borefields affect each other\'s ground temperatures'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Moving heat takes much less energy than burning fuel, so there is less pollution.',
        MIDDLE_SCHOOL: 'A good system delivers three to five units of heat per unit of electricity.',
        HIGH_SCHOOL: 'COP, the coefficient of performance, is heat delivered divided by electricity used.',
        UNDERGRADUATE: 'Lower delivery temperatures narrow the lift, which raises the COP.',
        GRADUATE: 'Drilling dominates the high capital cost, which is why shared borefields and finance matter.',
        PHD: 'When many borefields are close together, one field\'s heat use changes the ground for its neighbours.',
      },
    },
    {
      id: 're-geo2-q4',
      question: {
        ELEMENTARY: 'What happens in summer with a geothermal heat pump?',
        MIDDLE_SCHOOL: 'Why do some towns build shared district geothermal networks?',
        HIGH_SCHOOL: 'In a fifth-generation district network, where are the heat pumps?',
        UNDERGRADUATE: 'What temperature range do fifth-generation ambient networks typically run at?',
        GRADUATE: 'Which business model spreads the cost of shared borefields like a gas main?',
        PHD: 'Which research problem arises in choosing setpoints for ambient networks?',
      },
      options: {
        ELEMENTARY: ['It makes snow', 'It takes heat out of the house and puts it in the cool ground', 'It turns off forever', 'It heats the house more'],
        MIDDLE_SCHOOL: ['To make drilling more expensive', 'To share the cost of boreholes and swap heat between buildings', 'Because single houses cannot have heating', 'To stop using electricity'],
        HIGH_SCHOOL: ['In one central power plant', 'In each building on the shared loop', 'Under the ocean', 'There are no heat pumps'],
        UNDERGRADUATE: ['80 to 120 °C', 'About 10 to 25 °C', 'Below −20 °C', 'Over 200 °C'],
        GRADUATE: ['Individual homeowner loans only', 'Utility-owned shared borefields recovered over decades', 'Crowdfunding single boreholes', 'Paying in cash up front'],
        PHD: ['Choosing pipe colours', 'Trading pumping energy against heat pump efficiency', 'Picking refrigerant brands', 'Setting electricity meter clocks'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'In summer the heat pump moves heat from the house into the cool ground.',
        MIDDLE_SCHOOL: 'Sharing boreholes spreads the cost, and buildings can pass heat to one another.',
        HIGH_SCHOOL: 'Each building has its own heat pump connected to a shared low-temperature loop.',
        UNDERGRADUATE: 'Ambient networks run near ground temperature, about 10 to 25 °C, avoiding heat losses.',
        GRADUATE: 'Utilities can own shared borefields and recover costs over decades, like gas networks.',
        PHD: 'Network temperature affects both pumping energy and heat pump COP, so setpoints are an optimisation problem.',
      },
    },
    {
      id: 're-geo2-q5',
      question: {
        ELEMENTARY: 'What is a heat pump?',
        MIDDLE_SCHOOL: 'What kind of electricity makes a ground-source heat pump almost carbon-free?',
        HIGH_SCHOOL: 'Why do vertical ground loops suit small lots better than horizontal loops?',
        UNDERGRADUATE: 'What happens to an undersized borefield over many winters?',
        GRADUATE: 'How can heating-dominated borefields be recharged?',
        PHD: 'Why are measured performance data especially valuable for shallow geothermal research?',
      },
      options: {
        ELEMENTARY: ['A machine that moves heat from one place to another', 'A pump for bicycle tyres', 'A kind of oven', 'A garden sprinkler'],
        MIDDLE_SCHOOL: ['Solar or wind electricity', 'Electricity from burning coal', 'Electricity from diesel generators', 'Electricity from gas plants'],
        HIGH_SCHOOL: ['They go deep instead of spreading wide', 'They are made of metal', 'They need no drilling', 'They work only in summer'],
        UNDERGRADUATE: ['Fluid temperatures drift colder as extraction outpaces recovery', 'The ground gets hotter', 'Nothing changes', 'It produces electricity'],
        GRADUATE: ['With summer cooling loads, solar thermal or waste heat', 'By adding more antifreeze only', 'By turning off the heat pump in winter', 'It cannot be recharged'],
        PHD: ['Most published figures come from simulations rather than operation', 'Measurements are cheaper than models', 'Simulations are illegal', 'Data are never needed'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A heat pump moves heat: into the house in winter and out of it in summer.',
        MIDDLE_SCHOOL: 'If the heat pump runs on clean solar or wind electricity, heating is almost carbon-free.',
        HIGH_SCHOOL: 'Vertical loops go 50 to 150 metres down, so they need little land.',
        UNDERGRADUATE: 'When extraction outpaces natural recovery, the ground and fluid get colder each year.',
        GRADUATE: 'Injecting heat in summer from cooling, solar thermal or waste heat keeps the ground balanced.',
        PHD: 'Long-term measured data are scarce, so field monitoring would sharpen design methods.',
      },
    },
  ],
}

export default expansion
