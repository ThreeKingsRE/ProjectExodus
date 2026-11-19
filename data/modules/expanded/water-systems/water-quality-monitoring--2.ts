import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: community and citizen science testing of local
// water. Chapter 8 covers how water quality monitoring works.
const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-quality-monitoring~2',
  title: 'Community Water Science: Testing Your Local Water',
  description: {
    ELEMENTARY: 'How kids and neighbours can test streams and tap water and share what they find.',
    MIDDLE_SCHOOL: 'How community volunteers test local water, record results and help protect streams and taps.',
    HIGH_SCHOOL: 'Running a community water monitoring project: what to test, how to get reliable data and how to act on it.',
    UNDERGRADUATE: 'Citizen science for water quality: methods, quality assurance, data sharing and influence on management.',
    GRADUATE: 'Community-based water monitoring: data quality frameworks, integration with agencies and environmental justice.',
    PHD: 'Research on participatory water monitoring: data validity, low-cost sensing, knowledge co-production and power.',
  },
  lessons: [
    {
      id: 'ws-mon-1',
      title: 'Community Water Science: Testing Your Local Water',
      content: {
        ELEMENTARY: `
<h2>Be a Water Detective</h2>
<p>Is the stream behind your school healthy? Is the water from your tap clean? You do not have to be a grown-up scientist to find out. Kids, families and neighbours all over the world test their local water and share what they learn. They are called community scientists, and they help keep rivers and drinking water safe.</p>

<h3>What Water Detectives Look For</h3>
<p>Water detectives use simple test strips that change colour when dipped in water. One colour shows if the water is too sour or too soapy. Another shows if there is too much fertiliser, which can make slimy green algae grow. They also measure the water's temperature, because fish like cool water.</p>
<ul>
<li><strong>Test strip:</strong> a paper strip that changes colour to show what is in the water</li>
<li><strong>Algae:</strong> tiny green plants that can grow too much when there is lots of fertiliser</li>
<li><strong>Macroinvertebrates:</strong> small water bugs, like mayfly babies, that you can see without a microscope</li>
<li><strong>Data:</strong> facts and numbers we write down, like test results</li>
<li><strong>Sample:</strong> a little bit of water collected to test</li>
</ul>

<h3>Bugs Tell the Story</h3>
<p>Some tiny water bugs, like mayfly and stonefly babies, only live in clean water. If you scoop them up in a net, it is a good sign the stream is healthy! If you only find bugs that can handle dirty water, the stream may need help.</p>

<h3>Sharing What You Find</h3>
<p>Water detectives write down their results and share them online or with the town. If something looks wrong, grown-ups can check it and fix the problem. Your notes help protect the water for fish, birds and people.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Citizen Scientists and Local Water</h2>
<p>Government agencies cannot test every stream, lake and well all the time. That is where community volunteers come in. Thousands of groups around the world, from school clubs to neighbourhood associations, regularly sample local water and share their results. Their data can spot pollution early, show how streams change over time and push officials to act.</p>

<h3>What Volunteers Test</h3>
<p>Common tests include temperature, pH (how acidic or basic water is), dissolved oxygen (how much oxygen fish can breathe), turbidity (how cloudy water is), and nutrients like nitrate and phosphate from fertilisers and sewage. Some groups test for bacteria such as E. coli to see if water is safe for swimming. Many also count stream insects, because some only survive in clean water.</p>
<ul>
<li><strong>pH:</strong> a scale showing how acidic or basic water is, from 0 to 14</li>
<li><strong>Dissolved oxygen:</strong> oxygen mixed into water that fish and insects need to breathe</li>
<li><strong>Turbidity:</strong> how cloudy water is because of tiny floating particles</li>
<li><strong>E. coli:</strong> bacteria that signal possible contamination from human or animal waste</li>
<li><strong>Biological indicator:</strong> a living thing whose presence or absence shows how healthy water is</li>
<li><strong>Nitrate:</strong> a nutrient from fertilisers and sewage that can feed too much algae</li>
</ul>

<h3>Doing It Right</h3>
<p>To make data trustworthy, volunteers follow the same steps each time: sampling at the same spots and times, using clean bottles, checking equipment and recording everything carefully. Many programmes train volunteers and compare their results with a professional lab now and then.</p>

<h3>From Data to Action</h3>
<p>When a group finds high bacteria after storms, the town might discover a broken sewer pipe. When nitrate keeps rising, farmers and cities can work together on solutions. In some places, residents have tested their tap water and uncovered problems like lead pipes, leading to repairs that protected children's health.</p>
`,
        HIGH_SCHOOL: `
<h2>Running a Community Water Monitoring Project</h2>
<p>Water quality changes with every rainstorm, season and new development upstream. Professional monitoring networks sample only a fraction of waterways, often infrequently. Community-based monitoring, where trained volunteers collect water data, fills those gaps. Done well, it produces credible information that agencies use, and it builds local stewardship. This chapter walks through designing and running such a project.</p>

<h3>1. Ask a Clear Question</h3>
<p>Good projects start with a purpose: Is our creek safe for swimming after storms? Is road salt raising salinity? Are farm nutrients reaching the lake? The question determines what to measure, where and how often. For swimming safety, weekly E. coli samples near beaches matter; for road salt, conductivity measured in winter and spring is key.</p>
<ul>
<li><strong>Monitoring question:</strong> the specific issue a monitoring programme is designed to answer</li>
<li><strong>Conductivity:</strong> how well water conducts electricity, which rises with dissolved salts</li>
<li><strong>Quality assurance project plan:</strong> a written plan describing how data will be collected and checked for quality</li>
<li><strong>Chain of custody:</strong> a record tracking a sample from collection to lab analysis</li>
<li><strong>Baseline data:</strong> measurements that describe normal conditions before changes occur</li>
</ul>

<h3>2. Plan for Quality</h3>
<p>Data are only useful if people trust them. Many agencies accept volunteer data that follow a quality assurance project plan: standard methods, calibrated meters, duplicate samples, field blanks, training and records. For lab tests like bacteria, volunteers maintain a chain of custody so samples are handled correctly.</p>

<h3>3. Collect, Share and Interpret</h3>
<p>Volunteers sample at fixed sites on a schedule and upload results to shared databases. Over time, baseline data reveal normal patterns, so unusual readings stand out. Graphs and maps help communities see trends, such as bacteria spiking after heavy rain.</p>

<h3>4. Turn Data Into Action</h3>
<p>Results can prompt follow-up testing by agencies, repairs to sewers or septic systems, changes to road-salting practices or new riverside buffers. Community monitoring has also documented contamination in drinking water, including lead in older homes, leading to pipe replacement. The key is building relationships with agencies before problems arise, so data are welcomed rather than dismissed.</p>
`,
        UNDERGRADUATE: `
<h2>Citizen Science for Water Quality</h2>
<p>Volunteer water monitoring has a long history, from lake clarity measurements to stream bug surveys, and it has expanded with cheaper sensors, smartphone apps and open data platforms. Citizen science can extend spatial and temporal coverage, detect episodic pollution and engage communities in watershed management. Its value depends on fitness for purpose: data must meet quality standards appropriate to how they will be used. This chapter covers methods, quality assurance, data management and pathways to management influence.</p>

<h3>Methods and Parameters</h3>
<p>Volunteer programmes typically measure physical parameters (temperature, turbidity, conductivity), chemical parameters (pH, dissolved oxygen, nitrate, phosphate, chloride) and biological indicators. Macroinvertebrate indices such as EPT richness (mayflies, stoneflies and caddisflies) integrate conditions over time and are robust to sampling timing. Bacterial monitoring uses culture-based methods for E. coli or enterococci. Low-cost electronic sensors now allow continuous logging of temperature and conductivity.</p>
<ul>
<li><strong>EPT richness:</strong> the number of mayfly, stonefly and caddisfly taxa, a common indicator of stream health</li>
<li><strong>Data quality objective:</strong> a statement of the precision and accuracy required for an intended data use</li>
<li><strong>Field blank:</strong> a sample of clean water handled like real samples to detect contamination</li>
<li><strong>Tiered data use:</strong> a framework linking levels of data quality to education, screening or regulatory uses</li>
<li><strong>Open data platform:</strong> a shared online database where monitoring results are publicly available</li>
</ul>

<h3>Quality Assurance and Tiered Data Use</h3>
<p>Agencies often use tiered frameworks: lower tiers support education and awareness, middle tiers support screening and identifying problems for follow-up, and the highest tiers, with documented methods and quality control, can inform regulatory assessments. Precision is checked with duplicates, accuracy with standards and comparisons to professional labs, and contamination with field blanks.</p>

<h3>Data Management</h3>
<p>Standardised data formats, metadata on methods and location, and open platforms enable integration with agency databases. Without these, volunteer data remain in spreadsheets and have little influence. Recording site coordinates, sampling time, method and who collected each sample makes later analysis and quality review possible.</p>

<h3>Influence on Management</h3>
<p>Studies find volunteer data have contributed to impairment listings, total maximum daily load development, beach advisories and local land-use decisions, particularly where programmes partnered with agencies from the start. Barriers include agency scepticism, staff capacity to use data, and mismatches between volunteer monitoring and regulatory protocols. Formal agreements that specify data standards and intended uses help overcome these barriers.</p>
`,
        GRADUATE: `
<h2>Community-Based Water Monitoring</h2>
<p>Community-based water monitoring (CBWM) ranges from agency-led volunteer programmes to community-driven initiatives that challenge official assessments. Its growth reflects gaps in government monitoring, technological change and demands for environmental justice. For practitioners and researchers, the central questions are how to ensure data quality, how to integrate community data into decision-making, and how monitoring can shift power in water governance. This chapter addresses each.</p>

<h3>Models of Participation</h3>
<p>Participation models range from contributory (volunteers collect data for agency-designed programmes), to collaborative (communities and agencies co-design questions and methods), to co-created and community-led monitoring that addresses residents' concerns, sometimes in opposition to official narratives. The model shapes which questions are asked, whose expertise counts and how results are used.</p>
<ul>
<li><strong>Contributory model:</strong> volunteers collect data for projects designed by scientists or agencies</li>
<li><strong>Co-created monitoring:</strong> community members and scientists design and run monitoring together</li>
<li><strong>Data sovereignty:</strong> the right of communities, including Indigenous peoples, to govern data about them and their lands</li>
<li><strong>Environmental justice:</strong> fair treatment and meaningful involvement of all people in environmental decisions</li>
<li><strong>Interoperability:</strong> the ability of data systems to exchange and use each other's data</li>
</ul>

<h3>Data Quality Frameworks</h3>
<p>Data quality is not binary but fit for purpose. Quality assurance plans, standard operating procedures, training, calibration records and inter-comparison studies establish credibility. Statistical analyses comparing volunteer and professional data often show comparable accuracy for many parameters when protocols are followed, with greater variability for parameters requiring precise lab methods. Documenting uncertainty, rather than hiding it, increases trust.</p>

<h3>Integration With Agencies</h3>
<p>Integration requires interoperable data systems, agreements on how data will be used, and agency capacity to act on new information. Successful examples include state programmes that accept qualifying volunteer data for water quality assessments, and early-warning networks for harmful algal blooms combining volunteer observations with satellite and sensor data.</p>

<h3>Environmental Justice and Indigenous Data Sovereignty</h3>
<p>Communities facing contamination, such as lead in drinking water or industrial pollution, have used independent monitoring to document problems and press for remedies. Indigenous-led monitoring programmes link water quality to cultural practices and rights, and assert data sovereignty over how information about their waters is collected, stored and shared. Respecting these principles, including consent and benefit sharing, is essential for ethical partnerships.</p>

<h3>Sustaining Programmes</h3>
<p>Volunteer retention, stable funding, equipment maintenance and feedback showing how data are used are recurring challenges. Programmes that close the loop, showing volunteers how their work changed decisions, tend to last longer and recruit more widely. Partnerships with schools and universities can provide steady participants, equipment and analytical support.</p>
`,
        PHD: `
<h2>Research on Participatory Water Monitoring</h2>
<p>Participatory monitoring sits at the intersection of environmental science, data science and the politics of knowledge. As low-cost sensors and digital platforms proliferate, research questions extend beyond whether volunteers can produce accurate data to how participatory data reshape environmental governance, what new forms of uncertainty and bias they introduce, and how knowledge co-production can be made equitable. This chapter surveys those frontiers.</p>

<h3>Data Validity and Bias</h3>
<p>Validation studies compare volunteer and professional measurements, generally finding good agreement for robust parameters and protocols. Less studied are structural biases: monitoring sites cluster where volunteers live and have access, sampling times reflect volunteer availability, and programmes are more common in wealthier, often whiter, communities. These patterns can bias regional assessments and may reproduce inequities in where problems are detected. Statistical approaches including spatial weighting, occupancy models and integration with probabilistic agency surveys aim to correct for non-random sampling.</p>
<ul>
<li><strong>Sampling bias:</strong> systematic error arising when sampled sites or times do not represent the population of interest</li>
<li><strong>Low-cost sensor:</strong> an inexpensive electronic instrument for continuous measurement, often with higher uncertainty</li>
<li><strong>Knowledge co-production:</strong> collaborative generation of knowledge by scientists and non-scientists</li>
<li><strong>Epistemic justice:</strong> fairness in whose knowledge is recognised as credible and authoritative</li>
<li><strong>Sensor drift:</strong> gradual change in a sensor's readings over time that is not caused by real changes</li>
</ul>

<h3>Low-Cost Sensing and Data Infrastructure</h3>
<p>Low-cost sensors for conductivity, temperature, turbidity and even nutrients enable dense, continuous networks. Challenges include calibration, sensor drift, biofouling and data management at scale. Research develops automated quality control, machine-learning correction using co-located reference instruments, and interoperable standards. Questions remain about how to communicate uncertainty from such networks to decision-makers and the public.</p>

<h3>Knowledge Co-Production and Power</h3>
<p>Science and technology studies examine how community monitoring can contest official knowledge, as in cases of drinking water contamination where residents' data were initially dismissed. Concepts such as epistemic justice and civic science frame research on whose observations count, how credibility is negotiated and how monitoring changes relationships between communities and agencies. Indigenous-led monitoring raises questions about integrating Indigenous knowledge systems and respecting data sovereignty.</p>

<h3>Impact Evaluation</h3>
<p>Evidence on outcomes, such as policy changes, pollution reductions or improved compliance, is largely case-based. Systematic comparative studies and theory-based evaluation approaches are needed to understand the conditions under which participatory monitoring influences decisions and environmental outcomes.</p>

<h3>Future Directions</h3>
<p>Combining participatory data with remote sensing, agency monitoring and modelling in data assimilation frameworks could improve estimates of water quality across space and time. Doing so in ways that preserve community ownership and benefit sharing is both a technical and an ethical research challenge. Governance arrangements specifying who can access, interpret and publish integrated datasets will shape whether these systems empower communities or simply extract their observations.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ws-mon2-q1',
      question: {
        ELEMENTARY: 'What does a test strip do?',
        MIDDLE_SCHOOL: 'What does dissolved oxygen measure?',
        HIGH_SCHOOL: 'Why should a monitoring project start with a clear question?',
        UNDERGRADUATE: 'What does EPT richness count?',
        GRADUATE: 'What is a contributory model of participation?',
        PHD: 'Why can volunteer monitoring networks introduce sampling bias?',
      },
      options: {
        ELEMENTARY: ['Makes water taste sweet', 'Changes colour to show what is in the water', 'Cleans the water', 'Catches fish'],
        MIDDLE_SCHOOL: ['How salty the sea is', 'Oxygen in water that fish and insects need to breathe', 'How fast water flows', 'How deep the lake is'],
        HIGH_SCHOOL: ['It is the law', 'The question determines what to measure, where and how often', 'It makes the project cheaper', 'Questions are not needed'],
        UNDERGRADUATE: ['Fish species', 'The number of mayfly, stonefly and caddisfly taxa', 'Bacteria colonies', 'Algae cells'],
        GRADUATE: ['Communities lead all design', 'Volunteers collect data for projects designed by scientists or agencies', 'Agencies pay volunteers', 'No volunteers are involved'],
        PHD: ['Volunteers never make mistakes', 'Sites cluster where volunteers live and have access', 'All sites are chosen randomly', 'Sensors are perfect'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Test strips change colour to show what is in the water.',
        MIDDLE_SCHOOL: 'Dissolved oxygen is the oxygen in water that animals breathe.',
        HIGH_SCHOOL: 'The question decides which tests, sites and schedule make sense.',
        UNDERGRADUATE: 'EPT richness counts sensitive insect groups that indicate stream health.',
        GRADUATE: 'In contributory projects, volunteers gather data for others\' designs.',
        PHD: 'Volunteers sample where they can, so coverage is not random.',
      },
    },
    {
      id: 'ws-mon2-q2',
      question: {
        ELEMENTARY: 'Finding mayfly and stonefly babies in a stream is a sign that:',
        MIDDLE_SCHOOL: 'What does E. coli in water signal?',
        HIGH_SCHOOL: 'What is conductivity useful for measuring?',
        UNDERGRADUATE: 'What is a field blank used for?',
        GRADUATE: 'What is data sovereignty?',
        PHD: 'What is sensor drift?',
      },
      options: {
        ELEMENTARY: ['The stream is healthy', 'The stream is frozen', 'The stream is very dirty', 'The stream has no water'],
        MIDDLE_SCHOOL: ['Possible contamination from human or animal waste', 'Clean water', 'Lots of fish', 'Warm water'],
        HIGH_SCHOOL: ['Dissolved salts, such as from road salt', 'Water temperature only', 'The number of fish', 'Sunlight'],
        UNDERGRADUATE: ['Detecting contamination during handling', 'Measuring pH', 'Counting insects', 'Measuring depth'],
        GRADUATE: ['The right of communities to govern data about them and their lands', 'Selling data', 'Deleting all data', 'A government database'],
        PHD: ['Gradual change in readings not caused by real changes', 'Sensors floating away', 'Sensors drifting to the sea', 'Sensor batteries charging'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'These bugs only live in clean water, so finding them is a good sign.',
        MIDDLE_SCHOOL: 'E. coli indicates possible contamination from waste.',
        HIGH_SCHOOL: 'Conductivity rises with dissolved salts, making it ideal for tracking road salt.',
        UNDERGRADUATE: 'A field blank reveals contamination introduced while handling samples.',
        GRADUATE: 'Data sovereignty means communities govern data about themselves and their lands.',
        PHD: 'Drift is a slow change in readings caused by the sensor, not the water.',
      },
    },
    {
      id: 'ws-mon2-q3',
      question: {
        ELEMENTARY: 'What is a sample?',
        MIDDLE_SCHOOL: 'What is turbidity?',
        HIGH_SCHOOL: 'What is a chain of custody?',
        UNDERGRADUATE: 'In tiered data use, what can the highest tiers of volunteer data support?',
        GRADUATE: 'What makes volunteer programmes last longer?',
        PHD: 'What concept describes fairness in whose knowledge is recognised as credible?',
      },
      options: {
        ELEMENTARY: ['A song', 'A kind of fish', 'A big lake', 'A little bit of water collected to test'],
        MIDDLE_SCHOOL: ['Water temperature', 'Water depth', 'Fish speed', 'How cloudy water is'],
        HIGH_SCHOOL: ['A bicycle lock', 'A list of volunteers', 'A type of water filter', 'A record tracking a sample from collection to lab'],
        UNDERGRADUATE: ['Only fun facts', 'Nothing official', 'Social media posts', 'Regulatory assessments'],
        GRADUATE: ['Never sharing results', 'Less training', 'Changing sites every week', 'Showing volunteers how their data changed decisions'],
        PHD: ['Sampling bias', 'Data drift', 'Turbidity', 'Epistemic justice'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A sample is a little bit of water collected to test.',
        MIDDLE_SCHOOL: 'Turbidity measures how cloudy water is.',
        HIGH_SCHOOL: 'A chain of custody tracks a sample so it is handled correctly.',
        UNDERGRADUATE: 'High-tier data with documented quality control can inform regulatory assessments.',
        GRADUATE: 'Feedback showing impact keeps volunteers engaged.',
        PHD: 'Epistemic justice concerns whose knowledge is treated as credible.',
      },
    },
    {
      id: 'ws-mon2-q4',
      question: {
        ELEMENTARY: 'What should water detectives do with their results?',
        MIDDLE_SCHOOL: 'Why do programmes compare volunteer results with a professional lab?',
        HIGH_SCHOOL: 'What do baseline data help communities do?',
        UNDERGRADUATE: 'What is a data quality objective?',
        GRADUATE: 'What do comparisons of volunteer and professional data usually show?',
        PHD: 'How can participatory data be improved by data assimilation frameworks?',
      },
      options: {
        ELEMENTARY: ['Hide them', 'Throw them away', 'Write them down and share them', 'Forget them'],
        MIDDLE_SCHOOL: ['To make volunteers quit', 'To slow things down', 'To check data are trustworthy', 'To save paper'],
        HIGH_SCHOOL: ['Make water colder', 'Count volunteers', 'Spot unusual readings against normal patterns', 'Avoid all testing'],
        UNDERGRADUATE: ['A volunteer\'s favourite parameter', 'A data storage device', 'A statement of precision and accuracy needed for a data use', 'A deadline'],
        GRADUATE: ['Volunteer data are always useless', 'Volunteer data are always better', 'Comparable accuracy for many parameters when protocols are followed', 'No comparison is possible'],
        PHD: ['By deleting outliers only', 'By ignoring agency data', 'By combining it with remote sensing, agency monitoring and models', 'By stopping sampling'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Writing down and sharing results helps grown-ups check and fix problems.',
        MIDDLE_SCHOOL: 'Comparisons with a lab show whether volunteer data can be trusted.',
        HIGH_SCHOOL: 'Knowing normal conditions makes unusual readings stand out.',
        UNDERGRADUATE: 'A data quality objective states how precise and accurate data must be for a use.',
        GRADUATE: 'With good protocols, volunteer data are comparable for many parameters.',
        PHD: 'Assimilating participatory data with other sources improves estimates across space and time.',
      },
    },
    {
      id: 'ws-mon2-q5',
      question: {
        ELEMENTARY: 'Why does too much fertiliser in water cause problems?',
        MIDDLE_SCHOOL: 'What is pH?',
        HIGH_SCHOOL: 'Why should communities build relationships with agencies before problems arise?',
        UNDERGRADUATE: 'Why do standardised formats and metadata matter for volunteer data?',
        GRADUATE: 'Which approach has combined volunteer observations with satellite and sensor data?',
        PHD: 'What is the current state of evidence on outcomes of participatory monitoring?',
      },
      options: {
        ELEMENTARY: ['It makes slimy green algae grow too much', 'It turns water purple', 'It makes fish sing', 'It freezes the water'],
        MIDDLE_SCHOOL: ['A scale showing how acidic or basic water is', 'A type of fish', 'Water speed', 'A kind of algae'],
        HIGH_SCHOOL: ['So data are welcomed rather than dismissed', 'To avoid sharing data', 'Agencies require payment', 'It is not useful'],
        UNDERGRADUATE: ['They enable integration with agency databases', 'They make data secret', 'They replace sampling', 'They are only decorative'],
        GRADUATE: ['Early-warning networks for harmful algal blooms', 'Paper notebooks only', 'Ignoring satellites', 'Single annual samples'],
        PHD: ['Largely case-based, needing systematic comparative studies', 'Fully settled by large trials', 'Non-existent', 'Only about fish'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fertiliser feeds algae, which can grow too much and harm the stream.',
        MIDDLE_SCHOOL: 'pH shows how acidic or basic water is.',
        HIGH_SCHOOL: 'Existing relationships help agencies trust and act on community data.',
        UNDERGRADUATE: 'Standard formats and metadata let volunteer data join agency systems.',
        GRADUATE: 'Algal bloom early-warning networks combine volunteer, satellite and sensor data.',
        PHD: 'Evidence on outcomes is mostly case studies, so systematic research is needed.',
      },
    },
  ],
}

export default expansion
