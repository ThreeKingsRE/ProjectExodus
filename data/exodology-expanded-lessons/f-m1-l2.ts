import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m1-l2',
  title: 'The Exodology Trinity',
  duration: '15 min',
  type: 'instruction',
  content: {
    introduction: `The Exodology Trinity represents the three interconnected competencies required for complete Exodology practice. Like a three-legged stool, removing any one leg causes the whole to fail. Understanding this structure helps learners see how the three learning paths connect and why all three are necessary for certification.

A **competency** here means a combination of knowledge, practical skill and judgment that shows up in what a person can actually do, not just in what they can recite. The three competencies of the Trinity are **Literacy**, **Application** and **Stewardship**, and on Projxodus each one has its own learning path: Foundations, Applied and Strategic.

A note on what "certification" means on this platform. Projxodus courses are free and non-credit. Completing a path (every lesson in it, plus a passed assessment for each module) earns a Projxodus certificate for that pillar: Exodological Literacy, Exodological Application or Exodological Stewardship. Holding all three earns the Master Exodologist recognition. These certificates record your learning on Projxodus. They are not academic credit, an accredited qualification or a professional licence. Exodology is a new discipline being established now, so treat a certificate as evidence of study, not as a credential that employers or institutions will necessarily recognize.

The three-part structure is not unusual. Many fields distinguish between understanding a problem, being able to act on it, and being able to lead others through it. Medicine, for instance, separates scientific knowledge, clinical skill and the professional judgment needed to run a service. What this lesson offers is a way to see how the three fit together in the specific work of designing exits.`,

    sections: [
      {
        title: 'Pillar One: Literacy',
        content: `**Exodological Literacy** is the foundational competency—the ability to understand, analyze, and evaluate systems through an exit lens.

A literate exodologist can:
- Recognize when systems are failing their stated purposes
- Distinguish between reformable and unreformable systems
- Understand the ethics of departure
- Identify psychological and cultural barriers to exit
- Apply historical patterns to contemporary situations

Without literacy, exit becomes reactive rather than strategic. People flee collapsing systems rather than transitioning deliberately. Literacy transforms exit from panic to planning.

Literacy draws mainly on **systems thinking**: seeing a system as a set of parts, connections and purposes, and noticing how feedback loops produce its behavior over time. Donella Meadows's Thinking in Systems (2008) is a good beginner's introduction. One of Meadows's points is especially useful: a system's actual purpose is shown by what it does, which may differ from what it says it does.

That point leads to a practical test for the first item in the list. To judge whether a system is **failing its stated purpose**, compare three things: what it claims to do, what it actually delivers, and for whom. A public bus network may claim to connect a city, deliver good service downtown, and leave outer neighborhoods with one bus an hour. It is not failing everyone; it is failing some people, which changes what kind of response makes sense.

The second item, telling reformable from unreformable systems, is harder than it sounds and should be approached with humility. Systems that look stuck sometimes change quickly when conditions shift, and systems that look healthy can be closer to a threshold than anyone realizes. A literate exodologist treats "unreformable" as a conclusion that needs evidence, such as repeated failed reform efforts, or incentives that reward the current failure, rather than as a starting assumption.

**Worked example.** A tenant association is unhappy with a large landlord. Literacy questions: Has the association used voice (complaints, negotiation, local housing law)? What does the landlord actually gain from the current state of repairs? Are tenants staying because they want to, or because there is nowhere affordable to go? The answers decide whether the next step is organizing for reform, exploring a tenant-owned alternative, or both.`
      },
      {
        title: 'Pillar Two: Application',
        content: `**Exodological Application** is the practical competency—the ability to design, build, and support exit-capable systems.

An applied exodologist can:
- Map dependencies and identify exit friction points
- Design decentralized alternatives (food, water, energy)
- Create hybrid systems that enable gradual transition
- Measure autonomy and resilience
- Advise communities on practical exit strategies

Without application, literacy remains theoretical. Understanding why exit is needed means nothing if no viable alternatives exist. Application transforms understanding into infrastructure.

Two items in this list deserve plain explanations.

A **dependency map** is a list, or a simple diagram, of what a household or community needs (water, food, heat, income, communication), where each comes from, and what each source in turn depends on. **Exit friction** is whatever makes leaving a particular dependency hard: cost, lack of skills, contracts, regulation, or the absence of any alternative nearby. Mapping both shows where effort is most worthwhile.

A **hybrid system** keeps the existing arrangement running while a new one grows alongside it. A household might keep its grid connection while adding rooftop solar and a battery; a town might keep its supermarket while a food co-op builds up its membership. Hybrids are usually the realistic path, because few people can safely drop an essential service overnight. Rob Hopkins's The Transition Handbook (2008) describes community projects built in this gradual, parallel way.

"Decentralized" deserves a caution too. Smaller and more local is not automatically better. Local systems can be less efficient, harder to maintain, or less fair than well-run large ones, and some services, such as hospitals and high-voltage grids, gain a great deal from scale. Good applied work compares options honestly instead of assuming the local option wins.

**Try it.** Choose one daily need, for example heating your home. Write down where it comes from, what that source depends on, and one realistic step that would reduce your dependence without leaving you worse off if the step fails. That is a miniature version of the applied work in this path.`
      },
      {
        title: 'Pillar Three: Stewardship',
        content: `**Exodological Stewardship** is the leadership competency—the ability to guide large-scale transitions ethically and effectively.

A stewarding exodologist can:
- Navigate policy and governance considerations
- Address equity, justice, and access in transitions
- Manage risk, backlash, and unintended consequences
- Design exit-compatible institutions
- Maintain stability during mass transitions

Without stewardship, individual exits remain isolated successes. Stewardship transforms personal transitions into systemic change.

Stewardship is where exit meets the people who are not leaving. Every exit affects those who stay, and at scale those effects become a public matter. If many households leave a public water system, for example, the fixed costs of maintaining pipes are spread over fewer customers, and bills can rise for those who remain, who are often the households least able to leave. A steward plans for this in advance, for instance by supporting the public system while alternatives grow, or by designing alternatives that are open to everyone.

Stewardship also means working with existing institutions rather than assuming they are obstacles. Transition research, such as Frank Geels's work on socio-technical transitions, shows that new practices usually begin in small protected spaces, or niches, and spread only when they connect with changes in the wider regime of rules, markets and infrastructure. Policy, regulation and public investment are often what turn a promising pilot into a widely available option. In that sense, reform and exit frequently work together: reform can make room for alternatives, and working alternatives can strengthen the case for reform.

**Exit-compatible institutions** are institutions designed so that people can leave them without catastrophic loss, and so that the institution can adapt when they do. Portable pensions, the ability to switch utility providers while keeping service, and cooperative bylaws that set out how members can withdraw their share are all ordinary examples.

**Worked example.** A region plans to close a coal-fired power plant. A stewardship approach asks: What happens to the workers and the local tax base? Who pays for cleanup? How will reliable electricity be maintained during the changeover? Who has a seat at the table? Getting the energy technology right is only part of the job.`
      },
      {
        title: 'How the Pillars Connect',
        content: `The Trinity is not linear but cyclical. Each pillar informs and strengthens the others:

**Literacy → Application**: Understanding why systems fail shapes what alternatives we build.

**Application → Stewardship**: Building working alternatives provides models for scaling.

**Stewardship → Literacy**: Guiding large transitions reveals new patterns that deepen understanding.

A truly competent exodologist moves fluidly between all three modes of practice.

This cycle resembles models of learning that are well established in adult education. David Kolb's Experiential Learning (1984) describes learning as a cycle of concrete experience, reflection, forming general ideas, and testing them in practice. Donald Schön's The Reflective Practitioner (1983) argues that skilled professionals keep learning by reflecting on what happens while they act. The Trinity applies the same idea: you understand a system (Literacy), act on it (Application), see what happens at a larger scale (Stewardship), and return with a better understanding.

Seeing the cycle also explains why no single pillar is enough. Here is what each looks like when it stands alone:

- **Literacy alone**: an accurate critique with no working alternative. People may agree that a system is failing and still have nowhere to go.
- **Application alone**: a clever project that serves its builders but cannot be copied, funded or opened to others.
- **Stewardship alone**: plans and policies with no tested practice underneath them, which tend to fail when they meet real conditions.

In practice, most people are stronger in one pillar than the others, and that is fine. A community project often works best as a team where different members bring different strengths. The certificate structure on Projxodus reflects the ideal of one person understanding all three, but real exits are almost always collective.

**Apply it.** Rate yourself from 1 to 5 on each pillar. Then pick the lowest score and write one thing you could do in the next month to strengthen it, such as reading a systems thinking primer, mapping one of your own dependencies, or attending a local planning meeting.`
      }
    ],

    keyTakeaways: [
      'The Trinity comprises Literacy, Application, and Stewardship',
      'Each pillar is necessary but insufficient alone',
      'The pillars are cyclical, not linear',
      'Certification requires demonstrated competence in all three',
      'Projxodus certificates are free, non-credit recognitions of completed learning paths, not accredited qualifications or licences',
      'Reform and exit often work together: policy can open room for alternatives, and working alternatives can strengthen the case for reform',
      'Real exits are usually collective, so a team can combine strengths across the three pillars'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'An accessible introduction to the systems thinking that underpins Exodological Literacy.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Hopkins, Rob',
        title: 'The Transition Handbook: From Oil Dependency to Local Resilience',
        year: 2008,
        publisher: 'Green Books (UK); Chelsea Green Publishing (US)',
        relevance: 'Describes community projects that build local alternatives alongside existing systems, illustrating applied, gradual transition.',
        url: 'https://openlibrary.org/works/OL12011785W'
      },
      {
        author: 'Geels, Frank W.',
        title: 'Technological Transitions and System Innovations: A Co-evolutionary and Socio-technical Analysis',
        year: 2005,
        publisher: 'Edward Elgar',
        relevance: 'Explains how new practices grow from niches into wider system change, a core idea for Stewardship.',
        url: 'https://openlibrary.org/works/OL9793139W'
      },
      {
        author: 'Kolb, David A.',
        title: 'Experiential Learning: Experience as the Source of Learning and Development',
        year: 1984,
        publisher: 'Prentice-Hall',
        relevance: 'Sets out the learning cycle of experience, reflection, generalization and testing that mirrors the cyclical Trinity.',
        url: 'https://openlibrary.org/works/OL3519097W'
      },
      {
        author: 'Schön, Donald A.',
        title: 'The Reflective Practitioner: How Professionals Think in Action',
        year: 1983,
        publisher: 'Basic Books',
        relevance: 'Shows how practitioners build competence by reflecting on action, the habit the Trinity asks exodologists to develop.',
        url: 'https://openlibrary.org/works/OL3466056W'
      }
    ]
  },
  learningObjectives: [
    'Describe the three pillars of Exodology',
    'Explain how the pillars build upon each other',
    'Recognize the certification pathway',
    'Understand why all three pillars are necessary',
    'Explain what a Projxodus certificate does and does not represent'
  ],
  keyTerms: [
    {
      term: 'Exodology Trinity',
      definition: 'The three interconnected competencies of Exodology practice: Literacy, Application and Stewardship.'
    },
    {
      term: 'Competency',
      definition: 'A combination of knowledge, practical skill and judgment that shows in what a person can actually do.'
    },
    {
      term: 'Dependency Map',
      definition: 'A list or diagram of what a household or community needs, where each need is met from, and what those sources depend on.'
    },
    {
      term: 'Hybrid System',
      definition: 'An arrangement that keeps an existing system running while a new alternative grows alongside it, allowing gradual transition.'
    },
    {
      term: 'Exit-Compatible Institution',
      definition: 'An institution designed so that people can leave it without catastrophic loss and so that it can adapt when they do.'
    }
  ]
}

export default lesson
