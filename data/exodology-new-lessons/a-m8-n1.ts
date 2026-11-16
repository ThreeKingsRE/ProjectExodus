import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m8-n1',
  title: 'Community Assessment',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `So far the Applied path has mostly asked you to analyse your own dependencies and design your own exit. This module turns to a different role: advising a real community project. A neighbourhood worried about rising energy costs, a rural town whose main employer is closing, a group of tenants considering a housing cooperative: each may ask for help thinking through whether and how to reduce its dependence on a system that no longer serves it.

The first task in any such engagement is assessment. Before anyone designs a parallel system or organises a campaign, the community and its advisers need a shared, honest picture of three things: what the community depends on, what it already has, and how ready it is to act. Skipping this step is one of the most common reasons community projects fail. Plans built on assumptions about a community, rather than knowledge from it, tend to solve the wrong problem or to be owned by nobody.

This lesson shows how to carry out a community assessment as an Exodologist: defining the community, scaling dependency mapping from households to a place, mapping assets as well as needs, judging readiness against the response spectrum, and doing all of this in a way that honours the Charter's commitments to participation and justice.`,

    sections: [
      {
        title: 'Defining the Community and Your Role',
        content: `"Community" can mean a street, a town, a congregation, a workforce or a group of tenants. Begin by agreeing, with the people who invited you, where the boundary lies. Ostrom's work on commons, covered in Commons Governance, shows why clear boundaries matter: people need to know who is included in decisions and who shares in their costs and benefits.

Ask early:

- **Who asked for this assessment, and why?** A request from a local council, a cooperative board and a group of residents may lead in different directions.
- **Who is affected but not yet involved?** Renters, young people, older residents, workers who commute in, and groups who are often excluded from local decision-making.
- **What is your role?** An adviser helps a community understand its situation and options. You are not the decision-maker, and the Charter's principle of reflexivity asks you to be clear about your own position, interests and assumptions.

Be explicit about scope and limits from the start. The Principle of Informed Engagement asks practitioners to communicate goals, methods and uncertainties. A short written agreement on purpose, timeline, who will see the findings and who owns the information collected protects both the community and you.`
      },
      {
        title: 'Collective Dependency Mapping',
        content: `The dependency mapping method from the start of the Applied path scales from households to communities, but the questions change at a larger scale.

**Core functions become shared.** Instead of "how does my household get water?", ask "how does this town get water, and who maintains it?" Many dependencies are held in common: a single water treatment plant, one grocery store, a bus route, a clinic, a dominant employer.

**Critical nodes become visible.** At community scale, critical nodes are often institutions or single facilities. A town where most jobs, local tax revenue and even the sports club depend on one plant has a concentration risk that no individual household can address alone.

**Dependencies interlock.** A plant closure affects income, which affects local shops, which affects food access, which affects health. Trace these chains explicitly; they are where a disruption becomes a cascade.

**Distribution matters.** Some households depend on a system far more than others. A community-wide map should show who would be hit first and hardest if a critical node failed.

Map collectively. Workshops where residents trace their own connections to shared systems produce better maps than desk research, because residents know about informal arrangements, workarounds and vulnerabilities that do not appear in official data. They also begin building the shared understanding a collective exit will need.`
      },
      {
        title: 'Mapping Assets, Not Only Needs',
        content: `An assessment that lists only problems can leave a community feeling helpless and invite outsiders to treat it as a set of deficits. Community development practitioners John Kretzmann and John McKnight argued for **asset-based community development**: starting from what a community already has rather than only from what it lacks.

For exit work, assets are the raw material of parallel systems. Look for:

- **Skills**: growers, builders, electricians, bookkeepers, nurses, people experienced in organising or mediating
- **Associations**: congregations, clubs, unions, mutual aid groups, existing cooperatives, informal networks
- **Institutions**: schools, libraries, clinics, local businesses and public bodies that might host or support alternatives
- **Physical assets**: vacant land, unused buildings, roofs suitable for solar, water sources, shared kitchens
- **Existing alternatives**: a farmers market, a community garden, a credit union, a tool library already operating

Existing alternatives deserve special attention. The response spectrum lesson named "viable alternatives exist or are emerging" as an exit window signal. A community that already runs a small buying club or a community garden has a minimum viable system on which a larger transition can build.

Asset mapping also reveals relationships. Who trusts whom? Which associations bring different groups together? These relationships will shape the next lesson's work on stakeholder engagement.`
      },
      {
        title: 'Assessing Readiness',
        content: `With dependencies and assets mapped, the assessment turns to readiness: is this community in a position to act, and what kind of action fits?

Start with the **response spectrum**. Not every community problem calls for exit. Ask honestly whether optimisation or reform would serve better. If the local utility is responsive and reforms are working, building a parallel energy system may waste scarce effort. Exodology provides tools for distinguishing systems worth saving from systems worth leaving; an adviser who assumes exit is always the answer has stopped doing assessment.

Where exit or a soft exodus does look appropriate, examine the signals introduced in the Foundations path:

- **Reform exhaustion**: have repeated reforms failed, or been undermined?
- **Exit window**: do viable alternatives exist, can resources be redirected, is a group of potential exiters forming, does the cost of staying begin to exceed the cost of leaving?
- **Collapse warnings**: are there signs that the window is closing, such as cascading failures or rapidly falling trust?

Then assess **organisational capacity**: Is there a group with the time, trust and skills to lead? Are there resources for a transition period? Has the community worked together successfully before?

Summarise readiness plainly, for example: "strong concern and assets, limited organising capacity, window open for perhaps two to three years". Avoid false precision; this is a judgement informed by evidence, and it should be presented as one.`
      },
      {
        title: 'Ethics of Assessment',
        content: `Assessment can itself cause harm. Communities, particularly those that have been studied repeatedly without benefit, may experience assessment as extraction: outsiders collect information, publish reports and leave. The Charter's commitment to justice and its ethical obligations apply from the first conversation.

Several practices help:

**Return findings first to the community.** Present results to the people who provided them before anyone else sees them, in accessible language, and invite correction. Findings that residents do not recognise are probably wrong.

**Protect sensitive information.** Dependency and resilience data can reveal who is poor, ill, isolated or undocumented. Collect only what is needed, aggregate where possible and agree in advance who may see what.

**Respect diverse knowledge.** The Principle of Procedural Justice asks practitioners to respect experiential and indigenous knowledge. A long-time resident's account of how the town coped with a past flood is evidence, not anecdote.

**Name uncertainty.** Distinguish what was observed, what was reported and what is inferred, in line with the Principle of Intellectual Honesty.

**Leave capacity behind.** A good assessment builds the community's own ability to map, measure and reassess, so that it does not depend on you. An adviser who creates a new dependency has not helped a community exit anything.`
      }
    ],

    keyTakeaways: [
      'Begin by agreeing the community boundary, who is affected, and the adviser\'s limited role',
      'Collective dependency mapping reveals shared critical nodes, interlocking dependencies and unequal exposure',
      'Asset mapping identifies the skills, associations, places and existing alternatives on which parallel systems can be built',
      'Readiness assessment uses the response spectrum honestly; exit is not always the right answer',
      'Assessment must return findings to the community, protect sensitive data and leave capacity behind'
    ],

    references: [
      {
        author: 'Kretzmann, John P. & McKnight, John L.',
        title: 'Building Communities from the Inside Out: A Path Toward Finding and Mobilizing a Community\'s Assets',
        year: 1993,
        publisher: 'ACTA Publications',
        relevance: 'The founding text of asset-based community development, which informs the asset-mapping approach in this lesson.',
        url: 'https://openlibrary.org/works/OL11978971W'
      },
      {
        author: 'Putnam, Robert D.',
        title: 'Bowling Alone: The Collapse and Revival of American Community',
        year: 2000,
        publisher: 'Simon & Schuster',
        relevance: 'Explains social capital and associational life, which are central assets in any community assessment.',
        url: 'https://openlibrary.org/works/OL4291077W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Offers a classic analysis of when people use exit or voice, helping advisers judge whether reform or exit fits a community.',
        url: 'https://openlibrary.org/works/OL2745855W'
      }
    ]
  },
  learningObjectives: [
    'Define the boundary, stakeholders and adviser role for a community assessment',
    'Apply dependency mapping at community scale to identify shared critical nodes and cascades',
    'Conduct an asset map covering skills, associations, institutions, places and existing alternatives',
    'Evaluate community readiness using the response spectrum and exit window signals',
    'Apply ethical safeguards to the collection, use and return of assessment findings'
  ],
  keyTerms: [
    { term: 'Community Assessment', definition: 'A participatory analysis of a community\'s dependencies, assets and readiness, carried out before designing an exit or transition.' },
    { term: 'Collective Dependency Map', definition: 'A dependency map showing how a community as a whole relies on shared systems, including who is most exposed.' },
    { term: 'Asset Mapping', definition: 'Identifying the skills, associations, institutions, physical resources and existing alternatives a community already has; drawn from asset-based community development.' },
    { term: 'Readiness', definition: 'A judgement of whether a community is positioned to act, combining exit window signals with organisational capacity.' },
    { term: 'Concentration Risk', definition: 'Vulnerability that arises when many functions depend on a single source, facility or institution.' }
  ]
}

export default lesson
