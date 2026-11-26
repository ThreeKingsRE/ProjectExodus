import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 's-m1-l1',
  title: 'Scaling Exodology',
  duration: '25 min',
  type: 'instruction',
  content: {
    introduction: `Individual and community exits operate differently than regional or national transitions. As scale increases, new dynamics emerge: coordination challenges, political resistance, infrastructure dependencies, and equity concerns all intensify. This lesson examines how Exodology principles transform as we move from personal to civilizational scale.

In Foundations and much of the Applied path, most examples involved a household or a small group. The Strategic path asks a harder question: what happens when the same ideas are applied to a city's water supply, a national energy system or the world economy? The short answer is that some things carry over and some do not. The skill this lesson builds is knowing which is which.

Scale is not just size. A larger system has more actors with different interests, more interlocking infrastructure, longer lead times and more people who could be harmed by a mistake. Some properties appear only at scale. A single household storing a few weeks of food is prudent; when many households try to do it at the same moment, as in the panic buying of early 2020, shelves empty and supply chains strain. What makes sense for one actor can produce a different result when everyone does it. Economists call the error of assuming otherwise the **fallacy of composition**.

Several real research traditions study these questions directly. Transition studies, associated in particular with Frank Geels's multi-level perspective, examines how whole sociotechnical systems such as energy, transport or sanitation change over decades. Elinor Ostrom's work on polycentric governance examines how decisions can be made at several nested levels at once. Work on collective action, beginning with Mancur Olson, explains why large groups find it harder to act together than small ones. Exodology is a young discipline and does not yet have a theory of scale of its own; this lesson borrows from all three.`,

    sections: [
      {
        title: 'The Scale Spectrum',
        content: `Exodology operates across multiple scales:

**Individual Scale**
One person or household reducing dependence on a system. Relatively simple but limited impact.

**Community Scale**
A neighborhood, village, or organization transitioning together. Enables shared infrastructure but requires coordination.

**Regional Scale**
A city, county, or bioregion pursuing exit. Involves governance, public infrastructure, and diverse stakeholders.

**National Scale**
An entire country transitioning away from systems. Requires policy, massive coordination, and international considerations.

**Civilizational Scale**
Humanity transitioning from global systems (e.g., fossil fuels). Requires international cooperation and generational timelines.

Each scale requires different tools, timelines, and trade-offs.

It helps to describe each scale by three features: who decides, what infrastructure is involved, and how long change usually takes.

- **Individual and household**: one or a few people decide; infrastructure is mostly owned or rented equipment; change can happen in weeks or months.
- **Community**: decisions need agreement among members, often through an association, cooperative or congregation; shared infrastructure such as a tool library, a community garden or a small microgrid becomes possible; change takes months to a few years.
- **Regional**: elected governments, utilities and agencies are involved; infrastructure includes water systems, transit and grids; change usually takes years and must survive election cycles.
- **National**: legislatures, courts and national agencies; infrastructure includes transmission networks, ports and manufacturing; change takes decades.
- **Civilizational**: no single decision-maker exists, so coordination relies on treaties, markets, shared standards and norms.

The civilizational scale is not imaginary. The Montreal Protocol, agreed in 1987, organized a worldwide phase-out of the chlorofluorocarbons and related chemicals that were damaging the ozone layer, and in 2009 it became the first treaty in United Nations history to be ratified by every member state. It shows that a global exit from a harmful technology is possible. It also shows the conditions that helped: substitutes were available, a relatively small number of firms made the chemicals, and the treaty included financial support for developing countries. An exit from fossil fuels is far harder because energy touches almost every activity.

**Worked example.** Consider car dependence. At individual scale, exit might mean a bicycle and a new routine. At community scale, a car-share scheme or a walking-school-bus group. At regional scale, transit investment and land use rules that allow homes near shops and jobs. At national scale, funding formulas, vehicle standards and rail investment. The goal is the same at every level; the tools, the actors and the time horizon are completely different.`
      },
      {
        title: 'What Changes at Scale',
        content: `As scale increases, several dynamics change:

**Coordination Costs Rise**
Individual exit requires no coordination. National exit requires aligning millions of actors. The coordination burden grows exponentially.

**Political Resistance Intensifies**
Individual exiters are ignored. Regional exits threaten industries. National exits threaten entire economic sectors and provoke organized resistance.

**Infrastructure Matters More**
An individual can use portable solar panels. A region needs grid infrastructure. A nation needs energy policy, manufacturing capacity, and workforce training.

**Timelines Extend**
Individual exit might take months. National transition takes decades. Civilizational transition takes generations.

**Equity Stakes Rise**
Individual exit affects one household. National exit affects millions, including vulnerable populations who may lack exit capability.

Each of these claims is broadly right, but two need refining.

**How fast coordination costs rise.** Saying the burden grows exponentially is a figure of speech rather than a measured law. One simple way to see the growth: the number of possible pairs of people who might need to talk to each other is n times (n minus one), divided by two. Ten people form 45 pairs; a hundred form 4,950. That is rapid growth, though strictly it is quadratic rather than exponential, and real societies tame it with representatives, rules, prices and standards. Mancur Olson's The Logic of Collective Action added a sharper point: in a large group, each member's contribution makes little visible difference, so individuals are tempted to let others carry the cost. This **free-rider problem** is one reason large-scale exits usually need rules or institutions, not voluntary effort alone.

**Whether small exits are ignored.** Individual exits are usually tolerated because they pose no threat, but they are not always ignored. When many individuals make the same choice, incumbents notice. As rooftop solar grew, utilities in several US states pressed regulators to change the terms on which solar owners were paid for power they exported. Resistance tends to grow with the perceived threat, not with the size of any one actor.

Two further changes belong on the list. **Feedback slows down**: at large scale, the results of a decision can take years to appear, which makes learning and correction hard. **Errors are harder to reverse**: a household can undo a poor choice next season, while a national infrastructure program locks in choices for decades. This is why large-scale strategy relies on pilots, staged rollouts and built-in review points.

Timelines deserve a closer look. The energy scientist Vaclav Smil has shown that past energy transitions, such as from wood to coal or from coal to oil, took many decades to unfold at national and global scale. Some analysts argue that today's transition can move faster because solar panels, batteries and wind turbines are modular and their costs have fallen quickly; this is an active debate. For a sense of the gap, the Intergovernmental Panel on Climate Change's 2018 special report on global warming of 1.5°C found that holding warming to that level, with no or limited overshoot, would require global net carbon dioxide emissions to fall by about 45 percent from 2010 levels by 2030 and to reach net zero around 2050, which is far faster than historical energy transitions.`
      },
      {
        title: 'The Fractal Principle',
        content: `Despite these differences, Exodology principles apply fractally—they work at every scale, with appropriate adaptation:

**Dependency Mapping** works for households and for nations, though national maps are vastly more complex.

**Exit Friction** exists at every scale, from individual habit to institutional lock-in.

**Parallel Systems** can be built by individuals (home gardens) or nations (renewable energy infrastructure).

**Ethical Responsibility** applies whether exiting a company or a civilization.

The strategic exodologist understands how to apply principles across scales and recognizes when scale-specific considerations require different approaches.

The fractal principle is useful, but strategists must respect its limit: **principles transfer across scales; specific solutions often do not.** Mapping, friction analysis and parallel systems are ways of thinking that work everywhere. A particular solution that works well for a household may fail, or cause harm, if it is simply enlarged.

The political scientist James C. Scott's Seeing Like a State documents what happens when large authorities impose simplified, standardized schemes while ignoring local knowledge. His cases include Soviet collectivization of agriculture and compulsory villagization in Tanzania in the 1970s. Plans that looked rational from the capital failed on the ground because they overrode the practical, local knowledge Scott calls metis. A large-scale exit designed entirely from the top can repeat this error even with good intentions.

Elinor Ostrom supplies the constructive side. Her research on long-lived arrangements for managing shared resources such as irrigation systems, fisheries and forests found that the successful ones often had **nested enterprises**: rules made and enforced at small scale, embedded in larger levels that handle what small units cannot. She described systems with many overlapping centers of decision-making as **polycentric**. For Exodology this suggests a scaling rule of thumb: keep decisions as local as they can be, and move them up only for problems that genuinely cross boundaries, such as a shared river, an airshed or a power grid.

**Apply it.** Pick one parallel system you know, such as a community garden, a tool library or a credit union. List three things that would stay the same if it were copied in a hundred places, and three things that would have to change if it were instead grown into one large organization. The difference between **replication** (many small copies) and **enlargement** (one big version) is one of the most important strategic choices in this path.`
      },
      {
        title: 'Multi-Scale Strategy',
        content: `Effective strategic Exodology often works across multiple scales simultaneously:

**Bottom-Up**: Individual and community exits create models that larger scales can adopt. The first solar homes enabled the solar industry.

**Top-Down**: Policy changes can enable individual and community exits. Feed-in tariffs made home solar economically viable.

**Middle-Out**: Regional transitions can spread horizontally to other regions while influencing both individuals and nations.

A comprehensive exit strategy considers how actions at one scale affect possibilities at other scales.

The solar examples above compress a longer story, and the details are instructive. The first practical markets for solar cells were not homes but satellites, beginning with Vanguard 1 in 1958, followed by remote off-grid uses such as navigation buoys and telecommunications sites. Early adopter households mattered, but large-scale manufacturing grew mainly once policy created reliable demand. Germany's Renewable Energy Sources Act of 2000 guaranteed fixed payments for renewable power fed into the grid; the economist and parliamentarian Hermann Scheer was one of its leading champions. Later, very large-scale manufacturing, especially in China, drove panel prices down sharply. Feed-in tariffs did make home solar economically viable in Germany and elsewhere, but their costs were spread across electricity bills, which raised real questions about who paid and who benefited. Bottom-up and top-down worked together, and neither tells the whole story alone.

Geels's multi-level perspective offers a vocabulary for this interplay. **Niches** are protected spaces where new practices develop: early adopters, pilot projects, community initiatives. The **regime** is the established mix of technologies, rules, businesses and habits. The **landscape** is the wider context of economic trends, cultural shifts and shocks. Transitions tend to happen when niche innovations have matured and landscape pressure opens cracks in the regime. In these terms, bottom-up work builds niches, top-down policy changes the regime's rules, and middle-out spread links niches together until they are hard to ignore.

Middle-out examples include the Transition Towns movement, which grew from a 2006 initiative in Totnes, England, and spread to communities in many countries, and the way policies such as renewable energy targets have spread from one US state to others. Ideas often move sideways between peers faster than they move up or down a hierarchy.

**Reform is part of the strategy.** At large scale, exit and reform blur together. A national energy transition is less a matter of people leaving a system than of a system being changed from within by policy, investment and new entrants. The strategic question is rarely exit or reform; it is which mix, at which scale, in what order.

**Try it.** Take one exit goal and draw a small grid with three rows (bottom-up, top-down, middle-out) and two columns (already happening, missing). The empty cells usually show where your effort is most needed.`
      }
    ],

    keyTakeaways: [
      'Exodology operates across individual, community, regional, national, and civilizational scales',
      'Coordination, resistance, infrastructure, timelines, and equity all change with scale',
      'Core principles apply fractally but require scale-appropriate adaptation',
      'Effective strategy often works across multiple scales simultaneously',
      'Principles transfer across scales, but specific solutions often do not; replication and enlargement are different choices',
      'Large-scale exits are rarely pure exits: they combine niche-building, policy change and reform of the existing regime'
    ],

    references: [
      {
        author: 'Geels, Frank W.',
        title: 'Technological Transitions and System Innovations: A Co-evolutionary and Socio-technical Analysis',
        year: 2005,
        publisher: 'Edward Elgar',
        relevance: 'Develops the multi-level perspective on how niches, regimes and landscape pressures interact in sociotechnical transitions.',
        url: 'https://openlibrary.org/works/OL9793139W'
      },
      {
        author: 'Olson, Mancur',
        title: 'The Logic of Collective Action: Public Goods and the Theory of Groups',
        year: 1965,
        publisher: 'Harvard University Press',
        relevance: 'Explains why large groups find collective action harder than small ones, a core reason coordination becomes difficult at scale.',
        url: 'https://openlibrary.org/works/OL108561W'
      },
      {
        author: 'Ostrom, Elinor',
        title: 'Understanding Institutional Diversity',
        year: 2005,
        publisher: 'Princeton University Press',
        relevance: 'Sets out how rules work at nested levels and why polycentric arrangements can govern shared resources across scales.',
        url: 'https://openlibrary.org/works/OL3956154W'
      },
      {
        author: 'Scott, James C.',
        title: 'Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed',
        year: 1998,
        publisher: 'Yale University Press',
        relevance: 'Documents how large-scale schemes that ignore local knowledge fail, a warning for exits designed from the top.',
        url: 'https://openlibrary.org/works/OL26241985W'
      },
      {
        author: 'Smil, Vaclav',
        title: 'Energy Transitions: History, Requirements, Prospects',
        year: 2010,
        publisher: 'Praeger',
        relevance: 'Surveys the history of energy transitions and why they have typically taken decades at national and global scale.',
        url: 'https://openlibrary.org/works/OL15692535W'
      }
    ]
  },
  learningObjectives: [
    'Identify scale-specific considerations in Exodology',
    'Analyze how dynamics change from individual to civilizational scale',
    'Apply the fractal principle to multi-scale strategy',
    'Develop strategies that work across scales',
    'Distinguish replicating an alternative from enlarging it, and explain the risks of each'
  ],
  keyTerms: [
    { term: 'Multi-Level Perspective', definition: 'A framework from transition studies that explains large system change as interaction between niches, the established regime and the wider landscape.' },
    { term: 'Polycentric Governance', definition: 'An arrangement with many overlapping centers of decision-making at different scales, rather than a single central authority.' },
    { term: 'Free-Rider Problem', definition: 'The tendency, strongest in large groups, for individuals to benefit from a shared effort without contributing to it.' },
    { term: 'Fallacy of Composition', definition: 'The mistaken assumption that what is true or sensible for one part of a system will hold when every part does the same thing.' }
  ]
}

export default lesson
