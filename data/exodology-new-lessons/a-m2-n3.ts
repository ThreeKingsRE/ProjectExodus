import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m2-n3',
  title: 'Case Studies: Community Food Networks',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The earlier lessons in this module set out principles: distributed rather than centralized structure, parallel systems that operate alongside the dominant one, alternatives at every stage of the food chain, and fair distribution and access. Principles are easier to state than to sustain. This lesson turns to the documented record, examining four well-known community food networks to see how those principles have played out in practice, over decades, with real people and real constraints.

The cases are deliberately varied. Two began as grassroots partnerships between households and farmers, one was built by a city government, and one emerged under severe national crisis rather than by choice. Together they show that decentralized food capacity can be built from below, from above, or under duress, and that each route carries its own strengths, costs and blind spots.

Following the Charter's commitment to a **comparative approach** and **historical grounding**, the goal is not to find a model to copy. It is to learn what made each network viable, who it served and who it missed, and what it teaches about exiting well from dependence on centralized food systems. The descriptions are brief summaries of widely documented cases; learners who want detail should consult the references and the wider literature.`,

    sections: [
      {
        title: 'Reading a Case Study Exodologically',
        content: `The Academic Style Guide asks that case studies cover context, stakeholders, an Exodological analysis, an implementation narrative, an assessment of outcomes against several criteria, and lessons together with the limits of generalizing them. In a 20-minute lesson each case can only be sketched, but the same questions guide the reading:

1. **Where on the response spectrum does this sit?** Is it optimization, reform, a soft exit that builds a parallel system, or a response to collapse?

2. **Which dependency did it reduce, and for whom?** A network may lower dependence on one critical node, such as a supermarket chain or imported inputs, while creating new dependencies of its own.

3. **Who gained and who carried the burden?** The principle of distributive justice asks this of every case. Unpaid labor, higher prices and exclusion are common hidden costs.

4. **What sustained it over time?** Many food initiatives start well and fade. Durability reveals what actually works.

Three cautions from the Style Guide apply with particular force to food stories. Avoid **hero narratives**: founders matter, but structural conditions such as land access, public policy and household time usually matter more. Avoid **teleological framing**: none of these networks was an inevitable step toward a better system, and several have changed shape or shrunk. And watch for **survivorship bias**, a term from statistics for drawing conclusions only from cases that lasted while ignoring the many that did not. Famous cases are famous partly because they survived.`
      },
      {
        title: 'Teikei and Community Supported Agriculture: Sharing Risk Directly',
        content: `**Context.** In Japan in the late 1960s and 1970s, concern about pesticide use and food safety led groups of consumers, many of them women managing household food purchases, to form direct partnerships with farmers willing to grow without synthetic chemicals. These arrangements became known as **teikei**, often translated as "partnership" or "tie-up". The Japan Organic Agriculture Association, founded in 1971, helped articulate their ideals: mutual commitment, consumers accepting what the farm produces, and prices agreed in advance rather than set by the market.

In 1986 two farms in New England, Indian Line Farm in Massachusetts and Temple-Wilton Community Farm in New Hampshire, began similar arrangements, drawing on related ideas from European biodynamic farming. The model spread under the name **community supported agriculture (CSA)**: members buy a share of the season's harvest in advance and receive a portion each week.

**Analysis.** CSA is a clear example of a **minimum viable food system**: a farm and a few dozen households can start one. Its key design feature is **shared risk**. If the harvest is poor, members receive less, rather than the farmer absorbing the whole loss. Advance payment gives growers working capital early in the season, when they need it most, and gives members a direct, visible relationship with their food.

**Outcomes and limits.** CSA spread widely and remains a common entry point for households seeking alternatives. But the record also shows the access problems discussed in the previous lesson. Paying a full season up front, collecting at fixed times, and cooking whatever arrives all favor households with savings, flexible schedules and cooking time. Many CSAs now offer installments, sliding-scale shares and acceptance of public food benefits precisely to counter the **lifeboat problem**. Member turnover from year to year is a recurring difficulty for farms, a reminder that a commitment-based model depends on sustained participation, not just enthusiasm at the start.`
      },
      {
        title: 'The Seikatsu Club: Collective Purchasing at Scale',
        content: `**Context.** The Seikatsu Club began in Tokyo in 1965, when a group of households, organized largely by women, came together to buy milk collectively at a better price and quality than shops offered. Over the following decades it grew into a federation of consumer cooperatives with a very large membership across Japan. In 1989 it received the Right Livelihood Award, an international prize recognizing work on social and environmental problems.

**How it worked.** Two features stand out. First, members traditionally organized into **han**, small neighborhood groups of several households that placed joint orders and shared out deliveries. This kept distribution costs low and built strong local relationships. Second, rather than simply buying what was available, the cooperative worked directly with producers to develop its own goods to standards that members helped set, and favored buying a smaller range of products in larger, planned quantities so producers could rely on demand.

**Analysis.** Seikatsu shows that a decentralized network does not have to stay small. It scaled by **federating**, linking many local groups into a larger structure, rather than by concentrating control. In Exodological terms it reduced members' dependence on conventional retail while giving them a voice in production, moving from food security toward something closer to **food sovereignty**. Members also extended their participation into local politics, showing how exit from one system can strengthen voice in another.

**Tensions.** The han model relied heavily on the unpaid time of people, mostly women, who were at home during the day to receive and divide orders. As household patterns changed and more members worked outside the home, the cooperative increasingly offered individual home delivery. This illustrates a general lesson: a design that depends on an unrecognized source of labor is vulnerable when that labor is no longer available, and whoever supplies it is carrying a **transition burden** that should be made visible and shared.`
      },
      {
        title: 'Belo Horizonte: A City Treats Food Access as Public Responsibility',
        content: `**Context.** In 1993 the city government of Belo Horizonte, a large city in southeastern Brazil, created a municipal secretariat responsible for food supply and food security, framing adequate food as a right of citizenship rather than only a market outcome. The program has been widely described in the food policy literature, including by Frances Moore Lappé and Anna Lappé, who visited it for their book Hope's Edge.

**What it did.** Rather than relying on a single measure, the city combined many. Programs described in accounts of the policy include low-cost public restaurants serving subsidized meals; spaces in the city where small family farmers from the surrounding region could sell directly to residents; agreements with private vendors to sell a set range of basic foods at controlled prices in neighborhoods with poor access; purchasing for school meals; and public information on food prices.

**Analysis.** Belo Horizonte is valuable because it shows that decentralization is not only a grassroots project. A public body acted as a coordinating node in a **polycentric** system, linking small producers, private retailers, schools and residents without owning most of the food chain itself. It directly addressed the economic, physical and informational dimensions of access discussed in the previous lesson, and it supported regional producers rather than only urban consumers. The program is often cited as an influence on Brazil's later national anti-hunger policies.

**Limits.** Public programs depend on political continuity and public budgets. What one administration builds, a later one can reduce, and observers have noted that the reach of the city's programs, though significant, did not cover every household in need. For the exodologist this raises a design question with no easy answer: public involvement brings scale, fairness and resources, but it also ties the alternative to the stability of the institutions that fund it.`
      },
      {
        title: 'Cuba After 1990: Decentralization Under Crisis',
        content: `**Context.** Before 1990 Cuba depended heavily on trade with the Soviet Union and its allies for fuel, fertilizer, pesticides, animal feed and a large share of its food. When that trading system collapsed around 1989 to 1991, imports fell sharply. The years that followed, known in Cuba as the **Special Period**, brought severe food shortages and widespread weight loss among the population.

**What happened.** With imported inputs scarce, food production had to change rapidly. Urban and peri-urban agriculture expanded on a large scale, including **organopónicos**, raised beds filled with compost and soil built on vacant urban land, along with small gardens and plots. The state supported this through extension services, access to land for growers, and local supplies of seed and organic inputs, and allowed growers to sell produce directly near where it was grown. Organic and low-input methods spread partly by design and partly because there was no alternative.

**Analysis.** This case belongs at the **collapse** end of the response spectrum. Cuba did not choose to exit its dependence on imported inputs; the system it relied on disappeared. The decentralized food capacity it built is widely studied and admired, but it was built during hardship, not before it. The case therefore teaches by contrast. Had distributed capacity, seed supplies, composting knowledge and land access been developed while imports still flowed, the transition could have been a **managed exit** rather than an emergency. This is the core argument for building exit capability in advance.

**Cautions.** Accounts of the Cuban experience vary, and some have been criticized for romanticizing it. Urban agriculture made an important contribution, especially to fresh vegetables in cities, but Cuba continued to import a substantial share of its food. The case shows what decentralized production can achieve under pressure; it does not show that a country can or should become self-sufficient through it.`
      },
      {
        title: 'Lessons Across the Cases',
        content: `Comparing the cases yields several lessons, each held with the humility the Charter requires about generalizing from a few examples.

1. **Commitment structures make small systems viable.** Advance shares, joint orders and planned purchasing all turn uncertain demand into reliable demand. Small producers can survive outside centralized chains when eaters commit to them, and shared risk is fairer than leaving all of it with the grower.

2. **Scale through federation and coordination, not concentration.** Seikatsu federated local groups; Belo Horizonte coordinated many actors. Neither built a new narrow waist. This is the distributed design principle at work.

3. **Access must be designed in.** CSA's history shows how easily an alternative serves mainly those with savings and time. Belo Horizonte shows what deliberate attention to access can achieve. Without it, alternatives risk reproducing the lifeboat problem.

4. **Hidden labor is a hidden dependency.** Volunteer time, unpaid household work and member enthusiasm are real inputs. When they disappear, systems built on them falter. Name them, share them and plan for their decline.

5. **Build before you need it.** Cuba shows that distributed food capacity can be built under crisis, but at great human cost. The exit window, the period when alternatives can be built calmly, is the time to act.

6. **Context limits transfer.** Each case depended on particular conditions: Japanese neighborhood structures, Brazilian municipal politics, Cuban state institutions. Lessons travel more easily than models.

Finally, remember **residual duty**. In every case, people continued to depend on conventional food systems alongside the alternative. Good community food networks keep on-ramps open, connect to public safety nets, and avoid weakening the options their neighbors still rely on. The guided exercise that follows asks you to design your own system with these lessons in mind.`
      }
    ],

    keyTakeaways: [
      'Read food network cases with the Style Guide structure in mind, and beware hero narratives, teleological framing and survivorship bias',
      'Teikei and CSA show how advance commitment and shared risk make small producer-consumer systems viable, but also how easily they exclude households without savings or time',
      'The Seikatsu Club and Belo Horizonte show that decentralized food networks can scale through federation and public coordination without recreating a narrow waist of control',
      'Cuba after 1990 shows decentralized capacity built under collapse, underlining why exit capability should be built while the dominant system still functions',
      'Hidden labor, political continuity and local context are recurring limits that every design should make visible and plan for'
    ],

    references: [
      {
        author: 'Henderson, Elizabeth & Van En, Robyn',
        title: 'Sharing the Harvest: A Citizen\'s Guide to Community Supported Agriculture',
        year: 1999,
        publisher: 'Chelsea Green Publishing',
        relevance: 'A practitioner account of community supported agriculture by a farmer and a co-founder of one of the first US CSAs, covering its origins, design and challenges.',
        url: 'https://openlibrary.org/works/OL12294614W'
      },
      {
        author: 'Lappé, Frances Moore & Lappé, Anna',
        title: 'Hope\'s Edge: The Next Diet for a Small Planet',
        year: 2002,
        publisher: 'Jeremy P. Tarcher/Putnam',
        relevance: 'Describes community and public food initiatives around the world, including Belo Horizonte\'s municipal food security program.',
        url: 'https://openlibrary.org/works/OL1925803W'
      },
      {
        author: 'Lyson, Thomas A.',
        title: 'Civic Agriculture: Reconnecting Farm, Food, and Community',
        year: 2004,
        publisher: 'Tufts University Press',
        relevance: 'A rural sociologist\'s account of community-based food production and distribution, such as CSAs and farmers markets, as an alternative to concentrated agribusiness.',
        url: 'https://openlibrary.org/works/OL4643230W'
      }
    ]
  },
  learningObjectives: [
    'Analyze a community food network using the context, stakeholder, outcome and lessons structure of the Academic Style Guide',
    'Compare grassroots, public and crisis-driven routes to decentralized food capacity and their trade-offs',
    'Locate each case on the response spectrum, distinguishing managed exit from response to collapse',
    'Identify hidden dependencies such as unpaid labor and political continuity in food network designs',
    'Evaluate which lessons from documented cases can transfer to a new context and which cannot'
  ],
  keyTerms: [
    { term: 'Teikei', definition: 'Japanese direct partnerships between consumers and farmers, developed from the 1970s, based on mutual commitment and prices agreed in advance.' },
    { term: 'Community Supported Agriculture (CSA)', definition: 'An arrangement in which members buy a share of a farm\'s harvest in advance and share the risks and rewards of the season with the grower.' },
    { term: 'Han', definition: 'In the Seikatsu Club, a small neighborhood group of households that places joint orders and shares out deliveries.' },
    { term: 'Federation', definition: 'A structure that links many local organizations into a larger body while leaving substantial control with the local groups.' },
    { term: 'Survivorship Bias', definition: 'A term from statistics for drawing conclusions only from cases that lasted, while overlooking those that failed.' }
  ]
}

export default lesson
