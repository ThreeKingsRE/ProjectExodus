import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m8-n3',
  title: 'Implementation Planning',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `By this point in a community engagement, the community has assessed its dependencies and assets, brought its stakeholders into the process, worked through organizing, cooperative and commons structures, built a transition team and prepared for conflict. It may have agreed, in broad terms, what it wants to exit from and what it wants to build. The next challenge is turning that agreement into action that actually happens, in the right order, with someone responsible for each part.

Implementation is where many sound plans fail. The transition path design lesson introduced the essential tools: mapping the gap, sequencing, resource staging and fallback points. At community scale those tools must be carried out by many people, often volunteers, across institutions that do not answer to the project, over a period of years. Responsibilities blur, early energy fades, and decisions taken in a meeting are never acted on.

This lesson shows how to turn a community exit plan into phased, accountable action: dividing the work into phases with clear conditions for moving on, assigning responsibility and decision rights, resourcing the work realistically, building in monitoring and adaptation, and making sure the sequence of implementation protects those most dependent on the current system and those who will stay.`,

    sections: [
      {
        title: 'Why Implementation Fails',
        content: `In their classic study of a federal economic development program in Oakland, California, Jeffrey Pressman and Aaron Wildavsky showed how a program with broad support, committed funding and good intentions could still achieve far less than planned. One of their central observations was that implementation depends on a long chain of separate agreements and decisions. Each approval, permit or sign-off is a point where things can be delayed or stopped, and even when each one is likely to go well, the chance that all of them go well, on time, is much lower.

Community exits face the same arithmetic. A community solar project may need agreement from a landowner, a planning authority, a grid operator, a lender, an installer and the members of a new cooperative. A food hub may need a building lease, health permits, growers, buyers and volunteers.

Other common causes of failure include:

- **Diffuse responsibility**: everyone agreed, so no one acted.
- **Plans that assume ideal conditions**: no allowance for delay, turnover or bad weather.
- **Overcommitment**: trying to build every parallel system at once.
- **Loss of local knowledge**: James C. Scott's study of large state planning schemes documents how plans that override practical local knowledge often fail, a caution that applies equally to well-meaning community plans drafted by outside advisers.

The response is not a longer plan but a better-structured one: fewer dependencies at each stage, clear ownership and a built-in way to learn and adjust.`
      },
      {
        title: 'Phasing with Clear Conditions',
        content: `Divide the transition into phases, each of which ends in a **stable intermediate state**: a position the community could hold for some time if progress stalled. This applies the fallback principle from transition path design: never burn bridges before alternatives are proven.

A typical community exit might move through:

1. **Preparation**: forming the working group, agreeing governance, securing initial resources and permissions.
2. **Pilot**: launching a minimum viable system, such as a buying club, a small shared solar array or a tool library, that functions at small scale while the existing system remains fully available.
3. **Expansion**: growing membership and capacity once the pilot has shown it works, with the existing system still available as a backup.
4. **Consolidation**: shifting a larger share of the community's needs to the alternative, formalizing governance and reducing reliance on the old system where it is safe to do so.

For each phase, write down in advance the conditions for moving to the next one. Project managers sometimes call these "stage gates"; the idea is simply to decide beforehand what must be true before committing more. For example: "We will expand the buying club into a cooperative store when we have at least a set number of paying members for six consecutive months and a volunteer coordinator in place."

Clear conditions reflect the commitment curve: early stages are easy to reverse, later stages are not. They also apply the Principle of Precaution, which asks practitioners to prefer reversible steps when outcomes are uncertain and to build in monitoring before irreversible ones.`
      },
      {
        title: 'Assigning Responsibility and Decision Rights',
        content: `An accountable plan answers, for every significant task: **who will do it, by when, with what resources, and who decides if it changes?**

Useful practices include:

**Named owners.** Every task and every phase condition has one named person or working group responsible for it. Shared responsibility for a task often means no responsibility.

**Clear decision rights.** Agree which decisions belong to the whole membership, which to an elected board or steering group and which to the people doing the work. This continues the earlier lesson's distinction between decisions the community should make and those a working group can make with community input. Cooperative principles of democratic member control, and Ostrom's principle that those affected by rules should be able to take part in changing them, both apply.

**Visible commitments.** A simple, shared action list, reviewed at every meeting, makes commitments visible. Record what was agreed, who agreed to do it and the date.

**Accountability to the community.** The working group reports regularly to the wider community: what has been done, what has slipped and why, and what decisions are coming. The Charter's commitment to transparency and the ethical obligation of accountability apply to community leaders as well as to outside advisers.

**Succession.** Volunteers move away, burn out or change jobs. For each critical role, identify a second person who knows the work. This is the redundancy principle from building resilience, applied to people.

As an adviser, avoid becoming the owner of core tasks. If the plan depends on you, it has created a new dependency rather than building exit capability.`
      },
      {
        title: 'Resourcing the Work Realistically',
        content: `Resource staging, introduced in transition path design, asks when each resource will be needed. At community scale, three kinds of resource deserve particular care.

**Money.** Distinguish start-up costs, running costs and the cost of a transition period during which the community may pay for both old and new systems. Avoid depending on a single grant or a single lender; a funding gap at the wrong moment can stall a phase midway, which is often worse than not starting. Community share offers, member contributions, credit unions, local government programs and charitable funders each have different strings attached; record them.

**People and time.** Most community exits rely heavily on volunteers. Estimate hours honestly, plan for turnover and watch for burnout, which the lessons on transition teams and conflict identify as a recurring risk. Consider which roles need paid staff as the project grows.

**Skills.** Compare the skills the plan requires with the skills identified in the asset map. Where there are gaps, decide whether to train community members, recruit, share with a neighboring project or buy in expertise for a limited period while someone local learns.

Finally, check the plan's total demand against the community's realistic capacity. It is better to complete one phase of one parallel system well than to start three and finish none. A modest success builds the trust and skills that make the next phase possible.`
      },
      {
        title: 'Monitoring, Learning and Adapting',
        content: `No implementation plan survives contact with reality unchanged. The core principle of **adaptive management** asks practitioners to learn while doing, and the Principle of Systemic Responsibility asks them to monitor outcomes and adjust as effects become visible.

Build learning into the plan from the start:

- **A small set of indicators** for each phase, covering progress toward autonomy, participation and fairness, as discussed in the lessons on tracking progress over time.
- **Regular review points**, for example monthly for the working group and every few months for the wider community, where the plan is compared with what is actually happening.
- **Agreed responses to warning signs**: what will the group do if membership falls, costs rise or a key partner withdraws? Deciding this in advance makes it easier to pause or change course without a crisis.
- **A record of decisions and reasons**, which feeds directly into the documentation and sharing practices of this module.

Donella Meadows emphasized that delays in feedback are a major source of poor decisions in systems: by the time the effects of an action are visible, people have often already overcorrected or given up. Community exits are full of such delays. A new cooperative may take years to become financially stable. Reviewing against realistic expectations, rather than against early hopes, helps a community avoid abandoning a sound plan too soon or persisting with a failing one too long.`
      },
      {
        title: 'Sequencing for Justice and Those Who Stay',
        content: `The order in which a plan is implemented decides who carries the burden of the transition. The Principle of Distributive Justice asks who gains and who loses; implementation planning is where that question becomes concrete.

Watch for these patterns:

**The early-adopter trap.** The first households to join a parallel system are often those with the most time, money and confidence. If their departure reduces the revenue or political attention the existing system receives, those left on it may see services decline. This is the lifeboat problem at community scale.

**Stranded costs.** When enough users leave a shared system, such as a utility or a local store, its fixed costs fall on fewer people. Plan for this before it happens, for example by phasing the shift, negotiating with the institution concerned or creating on-ramps so that remaining households can join the alternative on fair terms.

**Workers in the old system.** If the transition reduces jobs, include retraining, priority hiring in the new system or other support in the plan, in keeping with the commitment to a just transition.

Practical safeguards include equity checkpoints in each phase's conditions ("expansion proceeds only if participation by lower-income households has reached an agreed level"), reserved places or reduced fees for those with least exit capability, and continued advocacy for those who remain on the existing system. Residual duty is not something to consider after an exit; it should be written into the plan itself.`
      }
    ],

    keyTakeaways: [
      'Implementation fails through long chains of approvals, diffuse responsibility, overcommitment and plans that override local knowledge',
      'Phase the work so each phase ends in a stable intermediate state, with conditions for moving on agreed in advance',
      'Give every task a named owner, agree decision rights and report regularly to the wider community',
      'Resource money, people and skills realistically, and complete one phase well before starting another',
      'Sequence implementation so that burdens do not fall on those with least exit capability or those who stay'
    ],

    references: [
      {
        author: 'Pressman, Jeffrey L. & Wildavsky, Aaron',
        title: 'Implementation: How Great Expectations in Washington Are Dashed in Oakland',
        year: 1973,
        publisher: 'University of California Press',
        relevance: 'A founding study of policy implementation showing how long chains of decisions and approvals undermine well-supported programs.',
        url: 'https://openlibrary.org/works/OL5600899W'
      },
      {
        author: 'Scott, James C.',
        title: 'Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed',
        year: 1998,
        publisher: 'Yale University Press',
        relevance: 'Documents how plans that ignore practical local knowledge fail, a caution for advisers drafting community implementation plans.',
        url: 'https://openlibrary.org/works/OL26241985W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains feedback loops and delays, which shape how communities should monitor and adapt implementation over time.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain common reasons why community exit plans fail during implementation',
    'Design implementation phases that each end in a stable intermediate state with conditions for progression',
    'Assign task ownership, decision rights and reporting arrangements for a community transition',
    'Develop a realistic resourcing plan covering money, volunteer time and skills',
    'Evaluate an implementation sequence for its effects on those with least exit capability and those who stay'
  ],
  keyTerms: [
    { term: 'Implementation Plan', definition: 'A phased, resourced account of who will do what, by when, to carry out an agreed transition.' },
    { term: 'Stable Intermediate State', definition: 'A point in a transition that can be held for some time if progress stalls; a fallback point.' },
    { term: 'Phase Conditions', definition: 'Criteria agreed in advance that must be met before a transition moves to its next, less reversible phase (called "stage gates" in project management).' },
    { term: 'Decision Rights', definition: 'An agreed allocation of which decisions belong to the whole community, an elected group or the people doing the work.' },
    { term: 'Stranded Costs', definition: 'Fixed costs of a shared system that fall on fewer users as others leave it.' }
  ]
}

export default lesson
