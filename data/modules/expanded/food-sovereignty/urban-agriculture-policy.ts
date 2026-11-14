import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'urban-agriculture-policy',
  lessons: [
    {
      id: 'fs-urban-pol-1',
      title: 'Rules for Growing in the City',
      content: {
        ELEMENTARY: `
<h2>How Cities Help People Grow Food</h2>
<p>Did you know that people grow vegetables in cities? They plant gardens in empty lots, on rooftops and even in old parking spaces. But a city has lots of people, buildings and rules. Let's learn how city leaders can make rules that help neighbors grow food together.</p>

<h3>Why Cities Need Rules</h3>
<p>Rules help people share space fairly and stay safe. A city decides where houses go, where stores go and where parks go. When a city also makes room for gardens and farms, more families can grow fresh food close to home.</p>
<ul>
<li><strong>City council:</strong> a group of people chosen by voters to make rules for their city</li>
<li><strong>Rule:</strong> an agreement about what people can and cannot do so everyone stays safe and fair</li>
<li><strong>Community garden:</strong> a garden where many neighbors share the land and grow food together</li>
<li><strong>Empty lot:</strong> a piece of land in a city with no building on it that could become a garden</li>
<li><strong>Neighbor:</strong> a person who lives near you and is part of your community</li>
</ul>

<h3>Helpful Things Cities Can Do</h3>
<ol>
<li><strong>Share land:</strong> let neighbors turn empty lots into gardens.</li>
<li><strong>Bring water:</strong> help gardens get water from a tap or rain barrel.</li>
<li><strong>Allow small animals:</strong> some cities let people keep a few chickens or bees.</li>
<li><strong>Teach gardening:</strong> offer classes so new gardeners can learn.</li>
<li><strong>Let people sell food:</strong> allow farm stands so gardeners can share their harvest.</li>
</ol>

<h3>When Rules Get in the Way</h3>
<p>Sometimes old rules were made before anyone thought about city gardens. A rule might say you cannot keep chickens, or that a lot can only be used for buildings. When that happens, neighbors can talk to their city council and ask for a change. Grown-ups and kids can both share their ideas!</p>

<h3>You Can Help</h3>
<ul>
<li>Visit a community garden and ask how it started.</li>
<li>Draw a map of a place in your neighborhood that could be a garden.</li>
<li>Write a friendly letter to a city leader about why gardens matter.</li>
</ul>
<p>When people speak up kindly and work together, cities can become greener and tastier places to live!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Rules That Help or Stop Urban Farming</h2>
<p>Urban farming means growing food or raising animals inside a city. It can happen in backyards, community gardens, school yards, rooftops and small farms on vacant land. Whether these projects can thrive often depends on local rules. Some rules make urban farming easy; others accidentally make it hard or even illegal.</p>

<h3>What Is Zoning?</h3>
<p>Cities divide land into areas called zones. Each zone has rules about how land can be used. A residential zone is mostly for homes, a commercial zone is for stores and offices, and an industrial zone is for factories. In many cities, farming was never listed as an allowed use, so a garden on a vacant lot might technically break the rules.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Zoning:</strong> rules that divide a city into areas and say what land in each area can be used for</li>
<li><strong>Permit:</strong> official permission from the city to do something, like build a greenhouse or sell food</li>
<li><strong>Vacant lot:</strong> land with no building or active use, sometimes owned by the city</li>
<li><strong>Ordinance:</strong> a law passed by a city or town government</li>
<li><strong>Land access:</strong> the ability to use a piece of land for growing, through ownership, lease or agreement</li>
<li><strong>Food policy council:</strong> a group of community members that advises governments about food issues</li>
</ul>

<h3>Rules That Help and Rules That Hurt</h3>
<table>
<thead><tr><th>Topic</th><th>Helpful rule</th><th>Barrier</th></tr></thead>
<tbody>
<tr><td>Land use</td><td>Gardens allowed in many zones</td><td>Farming not listed as an allowed use</td></tr>
<tr><td>Animals</td><td>A few hens or beehives allowed with simple guidelines</td><td>All farm animals banned</td></tr>
<tr><td>Selling food</td><td>Farm stands allowed at gardens</td><td>No sales allowed in residential areas</td></tr>
<tr><td>Structures</td><td>Simple process for sheds and hoop houses</td><td>Expensive permits for small structures</td></tr>
<tr><td>Water</td><td>Help connecting to water or collecting rain</td><td>High fees to connect a tap</td></tr>
</tbody>
</table>

<h3>Why Land Access Matters</h3>
<p>Even when rules allow farming, growers need land. Many community gardens use land on short, temporary agreements. If the owner decides to build, the garden can be lost after years of work. Some cities lease vacant public land to gardeners for longer periods, and some communities form land trusts that hold land permanently for gardens.</p>

<h3>How Rules Change</h3>
<p>Rules change when people organize. Gardeners, neighbors and students can attend public meetings, share stories and suggest new rules. Food policy councils often help by studying problems and recommending solutions to city leaders.</p>
`,
        HIGH_SCHOOL: `
<h2>Zoning, Land Access and Urban Agriculture Regulations</h2>
<p>Urban agriculture ranges from a single backyard plot to commercial farms operating on several acres of city land. As interest has grown, many cities have discovered that their codes, written for a strictly urban landscape, did not anticipate food production. This lesson explores the main regulatory areas that shape urban agriculture, the trade-offs city governments weigh, and approaches that have helped urban growers.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Zoning code:</strong> the set of local laws that defines land use districts and what activities each allows</li>
<li><strong>Permitted use:</strong> an activity allowed in a zone without special approval</li>
<li><strong>Conditional use:</strong> an activity allowed only after review and approval with specific conditions</li>
<li><strong>Land tenure:</strong> the terms under which someone holds or uses land, such as ownership, lease or license</li>
<li><strong>Community land trust:</strong> a nonprofit that holds land for long-term community benefit and removes it from the speculative market</li>
<li><strong>Nuisance complaint:</strong> a complaint that an activity, such as noise or odor, unreasonably disturbs neighbors</li>
</ul>

<h3>Main Regulatory Areas</h3>
<ol>
<li><strong>Land use and zoning:</strong> whether gardens and farms are permitted, conditional or prohibited in each district.</li>
<li><strong>Animals:</strong> limits on numbers and types of animals, setbacks from neighbors and rules about roosters or slaughter.</li>
<li><strong>Structures:</strong> permits for greenhouses, hoop houses, sheds, fences and compost bins.</li>
<li><strong>Sales:</strong> whether growers may sell on site, at markets or to restaurants, and what licenses apply.</li>
<li><strong>Water and soil:</strong> water connection costs, rainwater harvesting rules and soil testing for contaminants.</li>
<li><strong>Composting:</strong> limits on volume, materials and placement to prevent odors and pests.</li>
</ol>

<h3>Balancing Interests</h3>
<table>
<thead><tr><th>Interest</th><th>Concern</th><th>Common policy response</th></tr></thead>
<tbody>
<tr><td>Neighbors</td><td>Noise, odors, pests, traffic</td><td>Setbacks, animal limits, hours of operation</td></tr>
<tr><td>Public health</td><td>Soil contamination, food safety</td><td>Soil testing, raised beds, handling guidance</td></tr>
<tr><td>Housing and development</td><td>Competition for scarce land</td><td>Interim use agreements, designated farm zones</td></tr>
<tr><td>Growers</td><td>Insecure tenure, high costs</td><td>Long-term leases, fee waivers, land trusts</td></tr>
</tbody>
</table>

<h3>Land Access and Displacement</h3>
<p>Urban gardens often begin on vacant land in neighborhoods that have experienced disinvestment. Ironically, a successful garden can make a neighborhood more attractive to developers, raising land values and threatening both the garden and long-term residents. This is one reason community groups push for permanent protections such as land trusts or designation of gardens as parkland.</p>

<h3>Solutions Cities Use</h3>
<ul>
<li>Updating codes to name urban agriculture as a permitted use in many districts.</li>
<li>Leasing city-owned vacant land to growers with longer, renewable terms.</li>
<li>Creating simple, low-cost permit paths for small structures and sales.</li>
<li>Providing technical support for soil testing and water access.</li>
<li>Including urban agriculture in comprehensive and climate plans.</li>
</ul>
<p>Students can investigate their own city's code, often available online, and identify which rules support or limit growing food.</p>
`,
        UNDERGRADUATE: `
<h2>Urban Agriculture Policy Tools, Barriers and Best Practices</h2>
<p>Urban agriculture policy sits at the intersection of land use planning, public health, economic development and environmental management. Cities pursue it for different reasons: food access, community building, stormwater management, job training, vacant land reuse or climate goals. The tools chosen, and how they are designed, determine who can participate and what benefits result. This lesson provides an analytical overview of policy instruments, persistent barriers and practices associated with effective programs.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Policy instrument:</strong> a tool government uses to achieve goals, such as regulation, incentives, public provision or information</li>
<li><strong>Comprehensive plan:</strong> a long-range document guiding a city's land use, infrastructure and development decisions</li>
<li><strong>Interim use:</strong> a temporary use of vacant land pending future development, often granted to gardens</li>
<li><strong>Tax incentive zone:</strong> an area where landowners receive reduced property taxes for allowing agricultural use</li>
<li><strong>Brownfield:</strong> a previously developed site where contamination may complicate reuse</li>
<li><strong>Regulatory burden:</strong> the time, cost and complexity of complying with rules, which often falls hardest on small actors</li>
</ul>

<h3>A Typology of Policy Tools</h3>
<table>
<thead><tr><th>Instrument type</th><th>Examples</th><th>Main purpose</th></tr></thead>
<tbody>
<tr><td>Regulatory</td><td>Zoning amendments, animal ordinances, building code exemptions</td><td>Remove legal barriers, manage conflicts</td></tr>
<tr><td>Land-based</td><td>Leasing public land, land banks, land trusts, garden preservation</td><td>Secure access and tenure</td></tr>
<tr><td>Fiscal</td><td>Grants, tax incentives, water fee reductions</td><td>Lower costs, encourage use</td></tr>
<tr><td>Programmatic</td><td>Training, technical assistance, soil testing programs</td><td>Build capacity</td></tr>
<tr><td>Planning and coordination</td><td>Food system plans, food policy councils, interdepartmental staff</td><td>Integrate goals across agencies</td></tr>
</tbody>
</table>

<h3>Persistent Barriers</h3>
<ol>
<li><strong>Insecure tenure:</strong> short leases discourage investment in soil, infrastructure and perennial crops.</li>
<li><strong>Soil contamination:</strong> legacy pollutants such as lead require testing and remediation or raised beds.</li>
<li><strong>Water costs:</strong> connection fees and metered rates can exceed the value of the harvest.</li>
<li><strong>Economic viability:</strong> high land and labor costs make commercial urban farming difficult without diversified revenue.</li>
<li><strong>Fragmented authority:</strong> rules spread across planning, health, water and parks departments create confusion.</li>
</ol>

<h3>Thinking About Trade-offs</h3>
<p>Land in cities has many competing uses. A policy that permanently protects gardens may conflict with affordable housing goals on the same parcels. Interim use preserves flexibility for development but leaves growers vulnerable. Tax incentives for agricultural use can be captured by landowners holding land for speculation while offering little public benefit. Good analysis asks who gains, who bears costs and whether a tool matches the stated goal.</p>

<h3>Practices Associated with Effective Programs</h3>
<ul>
<li>Clear definitions distinguishing community gardens, market gardens and commercial farms, with rules scaled to each.</li>
<li>A single point of contact in city government to guide growers through permits.</li>
<li>Inventories of vacant public land suitable for agriculture, including soil and water information.</li>
<li>Meaningful participation by residents, especially in neighborhoods most affected by food insecurity.</li>
<li>Monitoring of participation and outcomes to inform later revisions.</li>
</ul>
`,
        GRADUATE: `
<h2>Comprehensive Urban Food Policy and Governance</h2>
<p>Urban agriculture policy increasingly appears within broader urban food strategies that address production, processing, distribution, access, consumption and waste. Cities historically treated food as a matter for national agriculture policy and private markets, leaving it largely outside municipal planning. The growth of urban food governance reflects a recognition that cities shape food environments through land use, procurement, public health and economic development powers. This lesson examines governance structures, policy integration and the politics of implementation.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Urban food strategy:</strong> a municipal plan setting goals and actions across the local food system</li>
<li><strong>Food policy council:</strong> a body of stakeholders that studies food system issues and advises or advocates for policy change</li>
<li><strong>Policy integration:</strong> aligning goals and instruments across sectors so they reinforce rather than undermine one another</li>
<li><strong>Multi-level governance:</strong> decision making distributed across local, regional and national authorities and non-state actors</li>
<li><strong>Policy capacity:</strong> the skills, resources and authority a government needs to design and implement policy</li>
<li><strong>Co-production:</strong> the joint delivery of public services by government and community actors</li>
</ul>

<h3>Governance Structures</h3>
<table>
<thead><tr><th>Structure</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Food policy council (independent)</td><td>Diverse voices, advocacy freedom</td><td>Limited authority and funding</td></tr>
<tr><td>Food policy council (government-embedded)</td><td>Access to decision makers, staff support</td><td>Constrained by political priorities</td></tr>
<tr><td>Dedicated food system office or staff</td><td>Accountability and continuity</td><td>Vulnerable to budget cuts</td></tr>
<tr><td>Interdepartmental working group</td><td>Coordinates planning, health, parks and water</td><td>Depends on leadership commitment</td></tr>
<tr><td>Regional collaboration</td><td>Matches the scale of foodsheds</td><td>Complex jurisdictional politics</td></tr>
</tbody>
</table>

<h3>Policy Integration</h3>
<p>Urban agriculture can serve several policy domains at once: green infrastructure for stormwater, heat mitigation, public health, workforce development and climate adaptation. Integration means writing urban agriculture into the plans of each domain and using the funding streams available to them. The risk is that urban agriculture becomes everyone's secondary priority and no one's responsibility. Explicit mandates, budget lines and shared indicators help prevent this.</p>

<h3>Politics and Equity</h3>
<p>Urban food governance is political. Land values, development pressure and competing public priorities shape what is possible. Community organizations, particularly in communities of color and low-income neighborhoods, have often led urban agriculture efforts as responses to disinvestment and food apartheid. Governance arrangements that invite participation but leave decisions elsewhere can produce consultation fatigue. Equitable governance shares decision-making power, funds community organizations for their work and addresses land security for groups that have historically been dispossessed.</p>

<h3>Implementation Challenges</h3>
<ul>
<li>Translating strategy goals into specific code changes, budgets and staff responsibilities.</li>
<li>Maintaining momentum across electoral cycles and leadership changes.</li>
<li>Balancing urban agriculture against housing, transport and economic development on scarce land.</li>
<li>Developing indicators that capture social as well as productive outcomes.</li>
</ul>

<h3>Assessment Framework</h3>
<ol>
<li>Map existing rules, agencies and programs affecting urban food production.</li>
<li>Identify goals and the populations intended to benefit.</li>
<li>Assess capacity: staff, budget, data and legal authority.</li>
<li>Evaluate participation: who sits at the table and who decides.</li>
<li>Define indicators and review cycles to adjust policy over time.</li>
</ol>
`,
        PHD: `
<h2>Researching Urban Agriculture Policy and Food Governance Innovation</h2>
<p>Research on urban agriculture policy has expanded from descriptive inventories of municipal codes to comparative analysis of governance, policy diffusion and outcomes. Scholars ask why some cities adopt comprehensive urban food policies while others do not, whether policies change practice on the ground, and how urban agriculture relates to broader dynamics of land, race, capital and urban development. This lesson surveys theoretical frameworks, methods and contested questions.</p>

<h3>Theoretical and Methodological Concepts</h3>
<ul>
<li><strong>Policy diffusion:</strong> the spread of policies across jurisdictions through learning, imitation, competition or networks</li>
<li><strong>Policy mobilities:</strong> an approach that studies how policies are transformed as they travel between places</li>
<li><strong>Green gentrification:</strong> displacement of lower-income residents following environmental amenities that raise property values</li>
<li><strong>Neoliberal urbanism:</strong> governance that shifts public responsibilities to markets, volunteers and nonprofits</li>
<li><strong>Comparative case study:</strong> a design that systematically compares a small number of cases to explain variation in outcomes</li>
<li><strong>Policy feedback:</strong> the process by which policies, once adopted, reshape the interests and capacities of political actors</li>
</ul>

<h3>Measuring Policy Effectiveness</h3>
<p>Evaluating whether policies matter is difficult. Outcomes of interest, such as the number of active growing sites, food production, participation and community well-being, are rarely tracked consistently. Code changes may legalize existing practices rather than create new ones. Researchers combine code analysis, spatial data on garden locations, surveys and interviews. Quasi-experimental approaches comparing cities before and after adoption are possible but face confounding, small samples and inconsistent data.</p>
<table>
<thead><tr><th>Research question</th><th>Method</th><th>Key limitation</th></tr></thead>
<tbody>
<tr><td>Why do cities adopt urban agriculture policy?</td><td>Event history analysis, diffusion models</td><td>Coding policy content consistently across cities</td></tr>
<tr><td>Do policies increase growing activity?</td><td>Spatial analysis, before-after comparisons</td><td>Incomplete inventories of informal gardens</td></tr>
<tr><td>Who benefits from urban agriculture policy?</td><td>Mixed methods, participatory research</td><td>Self-selection, power dynamics in research</td></tr>
<tr><td>How do policies change as they move?</td><td>Policy mobilities, ethnography</td><td>Limited generalizability</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p><strong>Radical or neoliberal?</strong> One line of scholarship sees urban agriculture as a site of resistance, self-determination and food sovereignty. Another argues it can fill gaps left by state retreat, relying on unpaid labor while leaving structural causes of food insecurity untouched. Many researchers argue it can be both, depending on who controls it and how it is governed.</p>
<p><strong>Green gentrification:</strong> Studies have examined whether gardens and urban farms contribute to rising property values and displacement. The relationship is debated, and research designs that separate cause from correlation are scarce. The question is policy-relevant because it shapes whether land protection should be paired with anti-displacement measures.</p>
<p><strong>Productivist versus multifunctional framing:</strong> Should urban agriculture be judged by food output, or by multiple functions such as education, health, social cohesion and ecology? Framing shapes which policies are adopted and how success is measured.</p>

<h3>Governance Innovation</h3>
<p>Cities experiment with participatory budgeting for food projects, transnational networks for sharing urban food policy, community land trusts and public-community partnerships for land stewardship. Research can assess whether these innovations redistribute decision-making power or merely add consultative layers. Attention to Indigenous land claims and historical dispossession is increasingly recognized as relevant to urban land governance.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized, longitudinal datasets of municipal urban agriculture policies and growing sites.</li>
<li>Causal designs examining links between urban agriculture and neighborhood change.</li>
<li>Comparative studies of food governance in cities of the Global South and North.</li>
<li>Participatory research that shares power with community growers.</li>
<li>Analysis of how urban agriculture interacts with housing, climate and land policy.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fupq1',
      question: {
        ELEMENTARY: 'How can cities help people grow food?',
        MIDDLE_SCHOOL: 'What is zoning?',
        HIGH_SCHOOL: 'What is a conditional use?',
        UNDERGRADUATE: 'Why does insecure land tenure hold back urban agriculture?',
        GRADUATE: 'What is a food policy council?',
        PHD: 'What is policy diffusion?',
      },
      options: {
        ELEMENTARY: ['By making all gardens close', 'By sharing empty land and bringing water to gardens', 'By banning seeds', 'By building parking lots everywhere'],
        MIDDLE_SCHOOL: ['A type of fertilizer', 'Rules that divide a city into areas with allowed land uses', 'A garden tool', 'A kind of crop'],
        HIGH_SCHOOL: ['An activity that is always banned', 'An activity allowed only after review and with specific conditions', 'An activity anyone may do anywhere', 'A kind of fence'],
        UNDERGRADUATE: ['Growers have too much land', 'Short leases discourage investment in soil and infrastructure', 'Tenure makes water free', 'It requires growing only flowers'],
        GRADUATE: ['A national farm subsidy', 'A body of stakeholders that studies food issues and advises on policy', 'A private grocery company', 'A cooking class'],
        PHD: ['The spread of policies across jurisdictions through learning, imitation or networks', 'The spread of pollen in cities', 'A type of soil remediation', 'A tax on food imports'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Cities can share land, help with water and make friendly rules for gardens.',
        MIDDLE_SCHOOL: 'Zoning sets which uses, like homes or stores or gardens, are allowed in each area.',
        HIGH_SCHOOL: 'Conditional uses need special approval, often with limits to protect neighbors.',
        UNDERGRADUATE: 'Growers will not invest in soil or perennials if they may lose the land soon.',
        GRADUATE: 'Food policy councils bring stakeholders together to study problems and recommend policy.',
        PHD: 'Diffusion research explains how policies spread from one city or region to another.',
      },
    },
    {
      id: 'fupq2',
      question: {
        ELEMENTARY: 'What is a community garden?',
        MIDDLE_SCHOOL: 'What is a common barrier to urban farming?',
        HIGH_SCHOOL: 'Why might a successful garden be threatened by its own success?',
        UNDERGRADUATE: 'What is a brownfield?',
        GRADUATE: 'What risk comes with integrating urban agriculture into many policy areas?',
        PHD: 'What is green gentrification?',
      },
      options: {
        ELEMENTARY: ['A garden where many neighbors share land and grow food together', 'A garden only for one person', 'A garden made of plastic plants', 'A garden on the moon'],
        MIDDLE_SCHOOL: ['Farming is not listed as an allowed use in zoning rules', 'Too many free water taps', 'Cities paying people to garden', 'Gardens that are too small'],
        HIGH_SCHOOL: ['Gardens grow too many vegetables', 'Rising land values can attract developers', 'Plants stop growing after two years', 'Neighbors always dislike gardens'],
        UNDERGRADUATE: ['A brown-colored vegetable', 'A previously developed site where contamination may complicate reuse', 'A type of compost', 'A protected forest'],
        GRADUATE: ['It becomes everyone secondary priority and no one responsibility', 'It becomes too well funded', 'It removes all community groups', 'It makes food cheaper overnight'],
        PHD: ['Displacement of lower-income residents after environmental amenities raise property values', 'Painting buildings green', 'Planting grass on rooftops', 'Expanding forests into cities'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In a community garden, neighbors share the land and the work.',
        MIDDLE_SCHOOL: 'Older zoning codes often did not list farming at all, making gardens technically unlawful.',
        HIGH_SCHOOL: 'A thriving garden can raise interest in the area, putting both garden and residents at risk.',
        UNDERGRADUATE: 'Brownfields may contain pollutants, so testing and remediation or raised beds are needed.',
        GRADUATE: 'Without clear mandates and budgets, shared goals can leave no agency accountable.',
        PHD: 'Green gentrification links new green amenities to rising prices and displacement.',
      },
    },
    {
      id: 'fupq3',
      question: {
        ELEMENTARY: 'Who makes rules for a city?',
        MIDDLE_SCHOOL: 'What is an ordinance?',
        HIGH_SCHOOL: 'What does a community land trust do?',
        UNDERGRADUATE: 'Which is an example of a fiscal policy tool for urban agriculture?',
        GRADUATE: 'What is a limitation of an independent food policy council?',
        PHD: 'What does the "neoliberal" critique of urban agriculture argue?',
      },
      options: {
        ELEMENTARY: ['The weather', 'A cartoon character', 'The city council chosen by voters', 'The tallest tree'],
        MIDDLE_SCHOOL: ['A type of garden hose', 'A recipe for soup', 'A law passed by a city or town government', 'A map of the stars'],
        HIGH_SCHOOL: ['Sells land to the highest bidder each year', 'Builds parking garages', 'Holds land for long-term community benefit outside the speculative market', 'Collects taxes for the state'],
        UNDERGRADUATE: ['An animal ordinance', 'A training workshop', 'Reduced water fees or grants', 'A food system plan'],
        GRADUATE: ['Too much legal authority', 'Too many staff', 'Limited authority and funding', 'It is not allowed to speak publicly'],
        PHD: ['Urban agriculture always ends hunger', 'Cities should ban gardens', 'It can rely on unpaid labor to fill gaps left by state retreat', 'Markets play no role in cities'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A city council is a group of people chosen by voters to make city rules.',
        MIDDLE_SCHOOL: 'An ordinance is a local law, such as one allowing backyard hens.',
        HIGH_SCHOOL: 'Land trusts keep land permanently available for community uses like gardens.',
        UNDERGRADUATE: 'Fiscal tools change costs through grants, tax incentives or fee reductions.',
        GRADUATE: 'Independent councils can advocate freely but often lack power and steady funding.',
        PHD: 'Critics argue urban agriculture can shift public responsibilities onto volunteers.',
      },
    },
    {
      id: 'fupq4',
      question: {
        ELEMENTARY: 'What can you do if a rule stops a garden?',
        MIDDLE_SCHOOL: 'Why can short land agreements be a problem for community gardens?',
        HIGH_SCHOOL: 'Which policy helps protect neighbors from problems with urban animals?',
        UNDERGRADUATE: 'How can tax incentives for agricultural use go wrong?',
        GRADUATE: 'What does co-production mean in urban food governance?',
        PHD: 'Why is it hard to show that urban agriculture policy causes more growing?',
      },
      options: {
        ELEMENTARY: ['Shout at your neighbors', 'Give up forever', 'Hide the garden', 'Kindly ask city leaders to change it'],
        MIDDLE_SCHOOL: ['They make water free', 'They force gardeners to grow flowers', 'They make gardens bigger', 'The garden can be lost if the owner decides to build'],
        HIGH_SCHOOL: ['Allowing unlimited roosters', 'Removing all permits', 'Banning compost bins only in parks', 'Setbacks and limits on animal numbers'],
        UNDERGRADUATE: ['They always cost nothing', 'They ban all gardens', 'They make soil contaminated', 'Landowners holding land for speculation can capture them with little public benefit'],
        GRADUATE: ['Two cities sharing one mayor', 'Farmers working only for private companies', 'Producing food in factories', 'Government and community actors jointly delivering services'],
        PHD: ['Policy data are too complete', 'Every city tracks gardens perfectly', 'There are too many randomized trials', 'Code changes may legalize existing activity and data on gardens are incomplete'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Speaking up kindly at meetings or in letters can help change rules.',
        MIDDLE_SCHOOL: 'Temporary agreements mean years of work can disappear if the land is sold or built on.',
        HIGH_SCHOOL: 'Setbacks and animal limits reduce noise, odors and conflicts with neighbors.',
        UNDERGRADUATE: 'Poorly designed incentives can reward owners while delivering little food or community benefit.',
        GRADUATE: 'Co-production recognizes that community groups often deliver urban food programs alongside government.',
        PHD: 'Confounding, incomplete inventories and legalization of existing practice make attribution hard.',
      },
    },
    {
      id: 'fupq5',
      question: {
        ELEMENTARY: 'What is an empty lot?',
        MIDDLE_SCHOOL: 'What is a permit?',
        HIGH_SCHOOL: 'Why should urban gardens test their soil?',
        UNDERGRADUATE: 'What practice is associated with effective urban agriculture programs?',
        GRADUATE: 'Why can consultation without shared decision making cause problems?',
        PHD: 'What is the multifunctional framing of urban agriculture?',
      },
      options: {
        ELEMENTARY: ['City land with no building that could become a garden', 'A full parking garage', 'A big shopping mall', 'A swimming pool'],
        MIDDLE_SCHOOL: ['Official permission from the city to do something', 'A kind of tomato', 'A garden glove', 'A weather report'],
        HIGH_SCHOOL: ['City soil can contain contaminants such as lead', 'Testing makes plants grow faster', 'Soil tests are required for flowers only', 'To find buried treasure'],
        UNDERGRADUATE: ['A single point of contact in city government for growers', 'Spreading rules across as many departments as possible', 'Banning all sales of produce', 'Keeping land inventories secret'],
        GRADUATE: ['It can lead to consultation fatigue when input does not change decisions', 'It always gives communities too much power', 'It makes meetings too short', 'It removes the need for planning'],
        PHD: ['Judging urban agriculture by many functions such as education, health and ecology', 'Judging it only by tons of food produced', 'Treating it as a hobby with no value', 'Measuring it only by profit'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'An empty lot is open city land that neighbors could turn into a garden.',
        MIDDLE_SCHOOL: 'Permits are official permission, for example to build a shed or sell food.',
        HIGH_SCHOOL: 'Past uses can leave pollutants in city soil, so testing protects gardeners and eaters.',
        UNDERGRADUATE: 'A single contact helps growers through permits that span several departments.',
        GRADUATE: 'People tire of giving input that is ignored; equitable governance shares real decision power.',
        PHD: 'A multifunctional view values the many benefits beyond food output.',
      },
    },
  ],
}

export default expansion
