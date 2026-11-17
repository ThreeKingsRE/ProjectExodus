import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m4-l3',
  title: 'Commons Governance',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Commons—shared resources governed by communities—offer alternatives to both market and state. Understanding commons governance enables collective exit.

For much of the twentieth century, a common assumption held that shared resources were doomed to overuse. In an influential 1968 essay, the ecologist Garrett Hardin described a "tragedy of the commons" in which each herder adds animals to a shared pasture until it is ruined, and concluded that only private property or government control could prevent this. The political scientist Elinor Ostrom spent decades studying real communities that had managed shared forests, fisheries, pastures and irrigation systems sustainably, some for centuries. Her work showed that the tragedy is not inevitable: it describes open access without rules, not a commons governed by its users. In 2009 she became the first woman to receive the Nobel Memorial Prize in Economic Sciences.

This lesson follows the previous one on cooperatives. Where a cooperative is an enterprise owned by its members, a commons is a resource governed by its users, and many collective exits need one, the other or both. The lesson explains what commons are, the principles Ostrom identified, examples of modern commons and how to design commons governance for a community exit.`,

    sections: [
      {
        title: 'What Are Commons?',
        content: `Resources managed collectively by user communities. Can be natural (water, forests), cultural (knowledge, creative works), or infrastructural (shared tools, spaces). Not unregulated—they have rules, but rules made by users.

A commons has three elements: a **resource**, a **community** of users, and the **rules** that community makes and enforces for using it. Remove any of the three and the commons disappears.

The three categories in the original list differ in an important way:

- **Natural commons**, such as water and forests, can be depleted. One person's use reduces what is left for others, so rules usually limit how much each user may take and when.
- **Cultural commons**, such as knowledge and creative works, are not used up by use. Sharing a recipe or a piece of software leaves the original intact. The governance challenge is instead keeping the resource open, maintained and protected from enclosure by someone who claims it as private property.
- **Infrastructural commons**, such as shared tools and spaces, sit in between. They wear out, need maintenance and can be congested, so rules cover access, care and repair.

The final sentence of the original section is the most important: commons are **not unregulated**. This distinguishes a commons from open access, where anyone can take anything, which is the situation Hardin actually described. It also distinguishes commons from markets, where rules are set by prices and contracts, and from state provision, where rules are set by public authorities. In a commons, the people who use the resource make the rules, which is why commons can be a route to exit from both.

The history covered earlier in this curriculum, in which enclosure removed peasants' customary rights to common land, shows the other side: commons can be lost, and their loss can create new dependence.`
      },
      {
        title: 'Ostrom\'s Principles',
        content: `Elinor Ostrom identified 8 principles for successful commons: defined boundaries, fit between rules and conditions, collective choice, monitoring, graduated sanctions, conflict resolution, recognition by external authorities, nested enterprises.

Ostrom set out these design principles in her 1990 book Governing the Commons, after comparing long-lasting commons with ones that failed. In plain terms:

1. **Defined boundaries**: it is clear who may use the resource and what the resource is.
2. **Fit between rules and conditions**: rules for using and maintaining the resource suit local conditions, and benefits are roughly proportional to contributions.
3. **Collective choice**: most people affected by the rules can take part in changing them.
4. **Monitoring**: those who check use of the resource and the behavior of users are accountable to the users, or are users themselves.
5. **Graduated sanctions**: people who break the rules face penalties that start small and increase with repeated or serious violations.
6. **Conflict resolution**: users have quick, low-cost ways to settle disputes.
7. **Recognition by external authorities**: governments and other outside bodies at least do not challenge the users' right to make their own rules.
8. **Nested enterprises**: for larger systems, governance is organized in layers, with local units nested inside larger ones.

Ostrom drew on cases such as the communal alpine meadows of Törbel in Switzerland and the centuries-old irrigation institutions of Valencia in Spain. She presented the principles as patterns found in durable commons, not as a guarantee of success, and later research has broadly supported them while noting that context still matters. That caution fits the Principle of Intellectual Honesty: the principles are a strong guide, not a formula.`
      },
      {
        title: 'Modern Commons',
        content: `Open source software, Wikipedia, community land trusts, tool libraries, makerspaces. New commons emerge when communities claim collective governance.

Each example shows the three elements of a commons in a different setting:

- **Open source software**: the resource is code; the community is its contributors and users; the rules include licenses that keep the code open and project norms for reviewing changes. Projects such as the Linux kernel show that a cultural commons can support systems used around the world.
- **Wikipedia**: a shared encyclopedia written and governed by volunteer editors, with detailed community-made policies on content and conduct and processes for monitoring and resolving disputes, several of which echo Ostrom's principles.
- **Community land trusts**: nonprofit organizations that hold land on behalf of a community and lease it for homes or other uses, usually with resale limits that keep housing affordable over time. Their boards often include residents, neighbors and public representatives.
- **Tool libraries**: lending collections of tools, an infrastructural commons that reduces the need for each household to buy equipment it rarely uses.
- **Makerspaces**: shared workshops where members use equipment and learn skills together, under rules for safety, training and care.

The closing sentence, "New commons emerge when communities claim collective governance," points to how commons begin. A resource becomes a commons not because of what it is, but because a community takes responsibility for governing it. A neglected lot, a local dataset or a community energy system can each become a commons through organizing.`
      },
      {
        title: 'Designing for Commons',
        content: `Clear boundaries for who is included. Rules that match local conditions. Member participation in rule-making. Monitoring and enforcement by community. Conflict resolution mechanisms.

These five design elements apply Ostrom's principles to building a new commons as part of a community exit. Useful questions for each:

- **Clear boundaries for who is included.** Who counts as a member, and how does someone join? Boundaries are necessary, but they also exclude. Under the Principle of Distributive Justice, ask who might be left out and whether membership can be kept open and affordable.
- **Rules that match local conditions.** What does the resource need to stay healthy, and what can members realistically contribute? Rules copied from another commons may not fit.
- **Member participation in rule-making.** How are rules made and changed, and can people with less time or confidence take part? The participation methods in the stakeholder engagement lesson apply here.
- **Monitoring and enforcement by community.** Who checks that rules are followed, and what happens when they are not? Graduated sanctions, starting with a friendly reminder, keep enforcement proportionate and preserve relationships.
- **Conflict resolution mechanisms.** Where do disputes go? A simple, agreed process set up before conflicts arise is far easier to use than one invented during a crisis. The later lesson on conflict and resilience develops this further.

Start small and adapt. Following the core principle of adaptive management, a young commons should expect to revise its rules as it learns, and should make revision easy.`
      },
      {
        title: 'Implications for Exit',
        content: `Commons governance shapes every stage of a collective exit.

**When to build a commons.** A commons fits when a resource is shared by a defined group that can make and enforce its own rules. If the group cannot yet do that, organizing must come first.

**How to leave well.** Exiting into a commons means accepting new rules and obligations. Be honest with members about the work involved, under the Principle of Informed Engagement.

**Leaving the commons.** Rules should say what happens when a member leaves: what they owe, what they keep and how their place is filled. This protects the resource and those who remain.

**Duties to those who stay.** Recognition by external authorities depends on good relations with the wider community. Keeping boundaries fair and sharing knowledge freely are forms of residual duty to people outside the commons.`
      }
    ],

    keyTakeaways: [
      'Commons are shared resources with community governance',
      'Ostrom\'s principles guide sustainable commons',
      'Modern commons include digital and physical resources',
      'Design requires attention to boundaries, rules, and enforcement',
      'A commons is not open access: the tragedy of the commons describes resources without rules, not resources governed by their users'
    ],

    references: [
      {
        author: 'Ostrom, Elinor, Gardner, Roy & Walker, James',
        title: 'Rules, Games, and Common-Pool Resources',
        year: 1994,
        publisher: 'University of Michigan Press',
        relevance: 'Combines field studies and experiments to show how communities devise and enforce rules for shared resources, extending the design principles discussed in this lesson.',
        url: 'https://openlibrary.org/works/OL3956151W'
      },
      {
        author: 'Hess, Charlotte & Ostrom, Elinor (eds.)',
        title: 'Understanding Knowledge as a Commons: From Theory to Practice',
        year: 2007,
        publisher: 'MIT Press',
        relevance: 'Applies commons analysis to knowledge and digital resources, relevant to open source software, Wikipedia and other cultural commons.',
        url: 'https://openlibrary.org/works/OL16287117W'
      },
      {
        author: 'Benkler, Yochai',
        title: 'The Wealth of Networks: How Social Production Transforms Markets and Freedom',
        year: 2006,
        publisher: 'Yale University Press',
        relevance: 'Analyzes commons-based peer production, the model behind open source software and Wikipedia.',
        url: 'https://openlibrary.org/works/OL5836132W'
      }
    ]
  },
  learningObjectives: [
    'Understand commons as governance model',
    'Apply Ostrom\'s principles',
    'Identify modern commons examples',
    'Design commons governance',
    'Distinguish a governed commons from open access'
  ],
  keyTerms: [
    { term: 'Commons', definition: 'A shared resource managed collectively by a community of users under rules the users make and enforce.' },
    { term: 'Open Access', definition: 'A situation in which anyone can use a resource without rules or limits; unlike a commons, it is prone to overuse.' },
    { term: 'Tragedy of the Commons', definition: 'Garrett Hardin\'s 1968 argument that shared resources are inevitably overused; Ostrom showed it applies to open access rather than governed commons.' },
    { term: 'Graduated Sanctions', definition: 'Penalties for breaking a commons\' rules that start small and increase with repeated or serious violations.' },
    { term: 'Enclosure', definition: 'The conversion of a commons into private or exclusive property, removing the community\'s rights of use.' }
  ]
}

export default lesson
