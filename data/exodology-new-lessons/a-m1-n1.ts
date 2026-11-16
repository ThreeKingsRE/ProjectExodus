import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m1-n1',
  title: 'Identifying Lock-in Mechanisms',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `A dependency map shows what you rely on. It does not, by itself, show why some of those dependencies are so hard to leave. Two dependencies can look identical on the map, yet one can be replaced in a weekend and the other holds for decades. The difference usually lies in **lock-in**: the condition, defined in the Exodology style guide, where systems resist change because of accumulated advantages and interdependencies.

Foundations examined lock-in from the inside of the person who is stuck: psychological lock-in (status quo bias, identity), social and cultural barriers, and economic lock-in mechanisms such as debt and benefits tied to participation. This lesson looks at lock-in from the outside, as a property of the system's structure. The aim is practical: when you look at a node on your dependency map, you should be able to name the structural features holding it in place.

The lesson builds on the principle of **path dependence** (history matters) and on research from economics and transition studies. Recognizing these mechanisms is the step between mapping dependencies and deciding which ones to tackle first, which is the subject of the next lesson.`,

    sections: [
      {
        title: 'Lock-in as a Structural Property',
        content: `It is tempting to treat lock-in as a matter of willpower: people would leave if they wanted to badly enough. Exodology rejects this framing. Lock-in is usually a structural property of a system, produced by how its parts fit together, how it has grown over time, and who benefits from it staying as it is.

Economist **W. Brian Arthur** showed how positive feedback can produce lock-in: once a technology or arrangement gets ahead, its advantages grow simply because it is ahead, and an alternative that might have been better can be shut out. **Gregory Unruh** later described **carbon lock-in** as a techno-institutional complex in which energy technologies, infrastructure, firms, regulations and habits reinforce one another. Both ideas appear in the Exodology timeline as intellectual foundations of the discipline.

Two consequences follow for practice:

1. **Lock-in is not proof that a system is good.** A system can dominate because it got there first, not because it serves people best.

2. **Lock-in is not permanent.** Structural features can be weakened, worked around or redesigned, but only if they are first identified precisely. Vague talk of "the system" does not help anyone plan an exit.`
      },
      {
        title: 'Increasing Returns and Network Effects',
        content: `The first family of mechanisms makes a system more attractive the larger it becomes. Arthur identified several sources of increasing returns that recur across technologies and institutions:

**Large set-up or fixed costs**: Once roads, pipelines, power stations or software platforms are built, using them costs relatively little, while any alternative must pay its own set-up costs from scratch. The incumbent competes with sunk investment; the alternative competes with new money.

**Learning effects**: The more a system is used, the better people become at using, maintaining and improving it. Alternatives start with thin experience, so they look less reliable even when their potential is greater.

**Coordination effects**: A system is more useful when others use it too. Payment methods, communication platforms, standards and languages all gain value from the number of participants. Leaving alone often means losing the ability to interact with everyone who stays.

**Adaptive expectations**: When people expect a system to dominate, they invest in it, which helps it dominate. Expectations become self-fulfilling.

On a dependency map, these mechanisms tend to show up as dependencies that are cheap to keep but expensive to leave, and as dependencies whose value comes mainly from other people's participation. The second type cannot be exited individually without loss; it calls for collective exit or for keeping a bridge to the old system.`
      },
      {
        title: 'Switching Costs and Asset Specificity',
        content: `The second family of mechanisms raises the cost of moving from one provider or arrangement to another. In their analysis of information markets, **Carl Shapiro and Hal Varian** catalogued types of switching cost that apply well beyond technology:

- **Contractual commitments**: penalties for early exit, minimum terms, bundled agreements
- **Durable purchases**: equipment that only works with one system, such as appliances designed for one fuel or machinery tied to one supplier's parts
- **System-specific training**: skills that are valuable only inside the current arrangement
- **Information and data**: records, histories and files stored in formats the alternative cannot read
- **Specialized suppliers**: inputs available from only one source
- **Search costs**: the time and effort needed simply to find and evaluate alternatives
- **Loyalty arrangements**: rewards that are forfeited on leaving

A related idea from organizational economics is **asset specificity**: an investment whose value depends on a particular relationship loses much of its worth if that relationship ends. A farmer who has invested in equipment configured for one buyer's contract, or a town whose workforce is trained for one employer, holds highly specific assets.

Switching costs connect directly to the **exit friction** score you assign in dependency mapping. Naming the specific type of switching cost makes the score explainable, and it points to remedies: a data cost calls for an export plan, a training cost for skill-building, a durable-purchase cost for timing the exit with the equipment's replacement cycle.`
      },
      {
        title: 'Infrastructure, Institutional and Knowledge Lock-in',
        content: `Some lock-in sits beyond any single relationship, in the wider arrangements a system depends on.

**Infrastructure lock-in**: Physical systems built for one way of doing things make other ways difficult. Settlement patterns designed around private cars make car-free living hard regardless of individual preference. Infrastructure lasts for decades, so this form of lock-in is slow to loosen.

**Institutional lock-in**: Rules, standards, regulations, zoning, licensing and financing practices are often written around the incumbent system. Applied and Strategic lessons note how utility monopolies can block energy alternatives and zoning can block food production. Here the barrier is not cost but permission.

**Complementarity**: Systems interlock. The food system depends on the energy system, which depends on the financial system. A dependency can be locked in not because of anything about itself, but because it is wired into other systems that are themselves locked in.

**Knowledge lock-in and deskilling**: When a system has carried a function for long enough, the skills needed to do it any other way fade from a community. Seed saving, food preservation and household repair are examples. Lost knowledge is a quiet but serious lock-in, because an alternative cannot be built by people who no longer know how.

These forms usually cannot be addressed by one household. They are why the **fractal principle** matters: the same dependency may require individual, community and policy action at once.`
      },
      {
        title: 'Designed Versus Emergent Lock-in',
        content: `Lock-in can arise in two ways, and the difference matters ethically and strategically.

**Emergent lock-in** develops without anyone intending it. Early choices, network effects and accumulated infrastructure simply make the incumbent hard to leave. No one designed suburban car dependence as a trap; it emerged from many decisions over time.

**Designed lock-in** is created deliberately to retain participants: proprietary formats, punitive exit fees, exclusive contracts, or terms that make leaving expensive. Foundations noted that exit costs are often intentionally created.

Most real cases are mixed. An emergent dependency can be reinforced by actors who benefit from it, which is the core concern of the principle of **political embeddedness**: transitions are contested, and some actors will work to keep exit difficult.

For the practitioner, the distinction guides response. Emergent lock-in is often best addressed by building alternatives and coordination, so that the new system can gain its own increasing returns. Designed lock-in may also call for voice: advocacy, regulation, and collective bargaining to remove barriers that exist only to prevent departure.

Intellectual honesty requires one more point. Not every lock-in is harmful. Standards, shared infrastructure and stable institutions also provide reliability, and some stability is what lets people plan their lives. The question is not whether lock-in exists, but whether it prevents people from leaving a system that has failed them.`
      },
      {
        title: 'Diagnosing Lock-in on Your Dependency Map',
        content: `To bring these ideas into practice, return to the critical nodes and high-friction dependencies on your map and ask a set of diagnostic questions for each:

1. **Does it get more valuable as more people use it?** If so, coordination effects are present, and exit may need to be collective.

2. **What have I, or we, already invested that only works with this system?** Equipment, training, data and specific assets indicate switching costs.

3. **What infrastructure or rules is it embedded in?** If leaving requires permission, or requires infrastructure that does not exist, the lock-in is institutional or infrastructural.

4. **Which other systems is it wired into?** Complementarity means exiting this dependency may disturb others.

5. **Do we still have the knowledge to do this another way?** Deskilling may be the real barrier.

6. **Who benefits from this staying locked in, and are they actively maintaining it?** This separates emergent from designed lock-in.

Record the mechanism next to each dependency, not just the friction score. Over time this produces a plain description of what is holding each dependency in place. It is the bridge between mapping and prioritization: a dependency held by a single, addressable switching cost is a very different target from one held by infrastructure and law.`
      }
    ],

    keyTakeaways: [
      'Lock-in is usually a structural property of systems, not a failure of individual will',
      'Increasing returns, network effects and switching costs make incumbents cheap to stay in and expensive to leave',
      'Infrastructure, institutions, complementary systems and lost knowledge create lock-in beyond any single relationship',
      'Distinguishing emergent from designed lock-in guides whether to build alternatives, use voice, or both',
      'Recording the specific lock-in mechanism for each dependency turns a friction score into an actionable diagnosis'
    ],

    references: [
      {
        author: 'Arthur, W. Brian',
        title: 'Increasing Returns and Path Dependence in the Economy',
        year: 1994,
        publisher: 'University of Michigan Press',
        relevance: 'Explains how positive feedback and increasing returns produce path dependence and lock-in of technologies and institutions.',
        url: 'https://openlibrary.org/works/OL3466925W'
      },
      {
        author: 'Shapiro, Carl & Varian, Hal R.',
        title: 'Information Rules: A Strategic Guide to the Network Economy',
        year: 1998,
        publisher: 'Harvard Business School Press',
        relevance: 'Offers a widely used classification of switching costs and lock-in, applicable to analysing exit friction in many systems.',
        url: 'https://openlibrary.org/works/OL1906587W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Introduces reinforcing feedback loops and system structure, the underlying dynamics behind many lock-in mechanisms.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain why lock-in is a structural property of systems rather than a matter of individual will',
    'Identify increasing returns, network effects and switching costs in a given dependency',
    'Classify infrastructure, institutional, complementarity and knowledge lock-in',
    'Distinguish emergent from designed lock-in and relate each to an appropriate response',
    'Apply diagnostic questions to record the lock-in mechanisms holding each critical node on a dependency map'
  ],
  keyTerms: [
    { term: 'Lock-in', definition: 'Condition where systems resist change due to accumulated advantages and interdependencies.' },
    { term: 'Increasing Returns', definition: 'A dynamic, described by economist W. Brian Arthur, in which a system becomes more attractive the more widely it is adopted, reinforcing its dominance.' },
    { term: 'Switching Costs', definition: 'The costs of moving from one system or provider to another, such as contract penalties, specific equipment, retraining and data migration.' },
    { term: 'Asset Specificity', definition: 'A concept from organizational economics: an investment whose value depends on a particular relationship and is largely lost if that relationship ends.' },
    { term: 'Path Dependence', definition: 'The principle that past decisions constrain future possibilities through lock-in, infrastructure and institutional memory.' },
    { term: 'Exit Friction', definition: 'The resistance, costs, and barriers that make leaving a system difficult or costly.' }
  ]
}

export default lesson
