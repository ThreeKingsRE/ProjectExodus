import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m3-n1',
  title: 'Water Autonomy Principles',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Water is the dependency people notice last and miss first. Most households in industrialised settings have never traced where their tap water comes from, what treats it, what powers the pumps, or where their wastewater goes. Yet a few days without safe water is a crisis, and a few weeks is a catastrophe. In the language of Applied Exodology, mains water is a textbook case of **structural dependence**: survival requires continued participation, and for most people no alternative path exists.

This module applies the tools you have already learned (dependency mapping, critical nodes, exit friction, parallel systems and the minimum viable system) to water. It begins with principles rather than hardware. Before deciding whether to collect rain, reuse greywater or form a water cooperative, you need a clear idea of what water autonomy means, what it does not mean, and what ethical obligations come with it.

The central claim of this lesson is that water autonomy is a matter of **exit capability**, not of disconnection. The aim is the structural capacity to meet essential water needs if the existing system fails or becomes unjust, while recognising that water is shared, that it flows from and to other people, and that public water systems are among the great public health achievements of the modern era.`,

    sections: [
      {
        title: 'What Water Autonomy Means',
        content: `**Water autonomy** is the capacity of a household or community to secure enough safe water for its essential needs, and to dispose of its wastewater safely, without total reliance on a single external system. It is a degree, not a state. A household that stores two weeks of drinking water has more water autonomy than one that stores none, even though both still use the mains every day.

It helps to separate water needs into tiers, because each tier has a different risk profile and a different exit friction:

1. **Drinking and cooking water**: small in volume (a few litres per person per day) but with the highest quality requirement. Contamination here causes illness quickly.
2. **Hygiene water**: handwashing, bathing and cleaning. Larger volumes, high public health importance, somewhat lower quality requirements.
3. **Sanitation**: managing human waste safely. Often overlooked in autonomy planning, yet failure spreads disease to everyone nearby.
4. **Productive water**: gardens, livestock, small enterprises. Large volumes, lower quality requirements, often the easiest place to begin.

A useful autonomy plan states, for each tier, how much water is needed, where it would come from if the mains failed, how long that source would last, and how its safety would be checked.`
      },
      {
        title: 'Mapping the Water Dependency Chain',
        content: `Apply the dependency mapping method from Module 1 to water and the chain is usually longer than expected. A typical urban tap depends on a catchment or aquifer, abstraction rights, a treatment works, chemical supplies for treatment, electricity for pumping, a distribution network, and the institutions that finance, staff and regulate all of these. Wastewater has a parallel chain running the other way: sewers, pumping stations, treatment plants and discharge permits.

Several features of this chain matter for exit planning:

**Hidden energy dependence**: Pumping and treatment depend on electricity. A grid outage can become a water outage, which is why the water and energy modules sit side by side.

**Concentration risk**: A whole city may rely on one treatment works or one reservoir. That is a critical node in the strict sense: no alternative path, many downstream functions, long recovery time.

**Soft dependencies**: Water quality testing, operator expertise and public trust are part of the system. Communities that lose trained operators can lose safe water even when the pipes are intact.

When you map your own water system, mark where it touches the energy system, where single points of failure sit, and which links you could realistically replace or back up.`
      },
      {
        title: 'Why Water Exit Is Different',
        content: `Water differs from food and energy in ways that change how exit should be approached.

**Quality failures are invisible and fast.** Spoiled food usually looks or smells wrong. Contaminated water often does not. Pathogens and some chemical contaminants cannot be detected without testing, and the consequences can be serious within hours or days. This makes water an area where the **Principle of Precaution** carries particular weight: prefer proven, multi-barrier designs, and treat untested water as unsafe for drinking.

**Water is physically shared.** Rain that you capture would otherwise run off into streams or recharge groundwater that others use. A well you drill draws from an aquifer your neighbours share. Wastewater you release flows to someone downstream. Water autonomy is therefore never purely private; it always has effects on other users.

**Public water is a genuine achievement.** Centralised water treatment and sewerage dramatically reduced waterborne disease in the cities that adopted them. Exodology does not treat these systems as failures by default. The response spectrum applies: many water problems call for optimisation or reform, and exit is appropriate only for specific functions or under specific conditions.`
      },
      {
        title: 'When Exit From Water Systems Is Warranted',
        content: `Using the response spectrum, water exit, full or partial, becomes a reasonable consideration in situations such as:

- **Unreliable supply**: intermittent service, frequent outages, or droughts that bring repeated restrictions.
- **Absent supply**: rural or informal settlements that were never connected, where building community systems is not exit so much as the creation of first-time capacity.
- **Unsafe supply**: documented contamination that the responsible institutions are not addressing. Reform and voice should be pursued in parallel, because exit by those who can afford filters or tanks can weaken pressure to fix the system for everyone else.
- **Unaffordable or unjust supply**: pricing or governance changes that exclude people from a basic need.

Two widely documented cases show different sides of this. In Cochabamba, Bolivia, a 2000 water privatisation contract and the resulting price rises provoked mass protests, and the contract was cancelled; the episode is often cited in debates about who should control water. In Cape Town, South Africa, a severe drought led authorities to warn in 2018 of a possible "Day Zero" when municipal taps would be shut off; intensive demand reduction helped avoid it. Neither case is a simple story of exit, but both show how quickly a taken-for-granted dependency can become a live question.`
      },
      {
        title: 'Ethical Principles for Water Autonomy',
        content: `The founding ethics guidelines translate into concrete commitments when the resource is water.

**Do no harm downstream.** Before capturing, abstracting or discharging water, ask who else depends on it. In some regions water rights are legally allocated and capturing water can affect others' entitlements. Respect both the law and the underlying fairness concern.

**Precaution with health.** Do not supply drinking water to others, or reuse wastewater near people, without treatment and testing appropriate to the risk. A community water project that makes people ill destroys trust in alternatives for years.

**Distributive justice.** Tanks, filters and wells cost money. If only wealthier households gain water autonomy, the **lifeboat problem** appears in its sharpest form. In 2010 the United Nations General Assembly recognised access to safe drinking water and sanitation as a human right; whatever one's view of rights language, the point for practitioners is that water autonomy projects should widen access, not narrow it.

**Residual duty.** Those who reduce their reliance on public water still have obligations to those who remain fully dependent: sharing knowledge, supporting public investment, and not using their own security as a reason to stop caring about the shared system.`
      },
      {
        title: 'A Staged Approach to Water Autonomy',
        content: `Because water is a high-stakes dependency, a soft exodus is almost always more appropriate than a hard one. A practical sequence:

1. **Reduce demand first.** Efficient fixtures and fixing leaks cut the volume any alternative must supply, just as demand reduction is the cheapest step in energy.
2. **Build emergency storage.** A modest store of drinking water, rotated regularly, is the minimum viable water system and gives real exit capability for short disruptions.
3. **Shift productive uses.** Use harvested rainwater or greywater for gardens and toilets, the lowest-risk tiers, before attempting potable supply.
4. **Add treated potable backup.** Only with a multi-barrier treatment design and a testing routine.
5. **Scale to community systems where they make sense.** Shared storage, treatment and governance often provide better safety and lower cost per household than many individual systems.

At each stage, record the boundary between what the alternative carries and what the mains still carries. The next lessons go deeper into rainwater harvesting, wastewater reuse and the governance of shared water.`
      }
    ],

    keyTakeaways: [
      'Water autonomy is exit capability for water: the capacity to meet essential needs if the existing system fails, not disconnection for its own sake',
      'Separating drinking, hygiene, sanitation and productive water clarifies risk, exit friction and priorities',
      'Water quality failures are invisible and fast, so precaution and multi-barrier treatment are central',
      'Water is physically shared: capture, abstraction and discharge always affect other users',
      'A staged, partial approach that widens access and honours residual duty is usually the ethical path'
    ],

    references: [
      {
        author: 'Reisner, Marc',
        title: 'Cadillac Desert: The American West and Its Disappearing Water',
        year: 1986,
        publisher: 'Viking',
        relevance: 'A widely read history of large-scale water development in the western United States, showing how deep and politically entangled centralised water dependence can become.',
        url: 'https://en.wikipedia.org/wiki/Cadillac_Desert'
      },
      {
        author: 'Shiva, Vandana',
        title: 'Water Wars: Privatization, Pollution, and Profit',
        year: 2002,
        publisher: 'South End Press',
        relevance: 'Argues that water should be governed as a commons rather than a commodity, a perspective relevant to the justice questions raised by water autonomy.',
        url: 'https://openlibrary.org/works/OL1054925W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Introduces stocks, flows and feedback, the basic concepts needed to reason about water storage, supply and demand as a system.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Define water autonomy as a form of exit capability and distinguish it from disconnection',
    'Classify household water needs into drinking, hygiene, sanitation and productive tiers',
    'Map a water dependency chain and identify its critical nodes, including energy dependence',
    'Evaluate when water exit is warranted using the response spectrum',
    'Apply precaution, distributive justice and residual duty to a water autonomy plan'
  ],
  keyTerms: [
    { term: 'Water Autonomy', definition: 'The capacity of a household or community to secure enough safe water for essential needs, and to manage wastewater safely, without total reliance on a single external system.' },
    { term: 'Water Need Tiers', definition: 'A way of separating drinking, hygiene, sanitation and productive water so that each can be planned according to its volume and quality requirements.' },
    { term: 'Multi-Barrier Approach', definition: 'A water safety practice, from public health engineering, of using several independent treatment and protection steps so that one failure does not make water unsafe.' },
    { term: 'Structural Dependence', definition: 'A condition where survival requires continued participation in a specific system.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' }
  ]
}

export default lesson
