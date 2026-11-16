import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m4-n1',
  title: 'Risk Typology for Transitions',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Every exit carries risk. At the individual scale the risks are mostly personal: a household that leaves a job, a utility or a supply chain may face post-exit precarity for a while. At the strategic scale the picture changes. When a region phases out an industry or a country moves away from a dominant energy system, risks fall on people who never chose the transition, travel through interdependencies nobody fully mapped, and can turn a managed exit into the very collapse it was meant to prevent.

This lesson offers a working way to classify those risks. It is not a fixed Exodological model and it does not replace the risk methods of engineering, finance or public health. It is a set of distinctions that help a strategic exodologist ask the right questions before acting: what kind of risk is this, who carries it, how fast could it unfold, and can it be undone?

The lesson also insists on a point that is easy to forget: staying is risky too. A risk typology that only lists the dangers of leaving will always favor the status quo. Honest analysis compares the risks of the transition with the risks of remaining in a system that is failing.`,

    sections: [
      {
        title: 'Why Classify Transition Risk?',
        content: `Large transitions generate many worries at once: job losses, price rises, technical failures, political opposition, ecological side effects. Without some structure, planners tend to focus on the risks that are most visible or most discussed, and to neglect the ones that are quiet, slow or carried by people with little voice.

Classification helps in three ways. First, it **widens attention**, so that a team planning an energy transition asks about social and political risks as well as technical ones. Second, it **matches responses to risks**: a financial risk may be handled with reserves or insurance, while a legitimacy risk needs participation and honest communication. Third, it **makes trade-offs discussable**: once risks are named and sorted, stakeholders can argue about which ones matter most instead of talking past each other.

The Ethics Guidelines ask practitioners to identify potential unintended consequences before acting and to acknowledge the limits of prediction. A typology serves both duties. It is a prompt for systematic thinking, not a guarantee that every risk has been found.`
      },
      {
        title: 'Risks by Domain',
        content: `A first way to sort risk is by the part of the system it affects. Exodology analyses transitions as involving technological, institutional, behavioral and cultural dimensions, and risks appear in each:

1. **Technical and operational risks**: alternatives do not perform as expected, new infrastructure is late, or the old and new systems fail to work together during the changeover.
2. **Economic and financial risks**: costs overrun, assets lose value before they are paid off, prices rise for households, or financing for parallel systems dries up. Bent Flyvbjerg and colleagues documented how often large infrastructure projects exceed their budgets and timelines, a pattern worth assuming rather than hoping to avoid.
3. **Social and distributional risks**: the transition burden falls on workers, regions or groups who are least able to carry it, or exit capability is so unequal that the lifeboat problem appears.
4. **Political and legitimacy risks**: public support collapses, decisions are reversed after an election, or the process is seen as imposed rather than shared.
5. **Ecological risks**: the alternative system shifts environmental harm somewhere else or creates new harms of its own.
6. **Knowledge and capacity risks**: skills and institutional memory needed to run either system are lost too early.

Most real risks belong to more than one domain. A plant closure is at once a technical, financial, social and political event.`
      },
      {
        title: 'Risks by Who Carries Them',
        content: `The Foundations path distinguishes three parties in any exit: those who leave, those who stay, and the system itself. Sorting risks by who carries them keeps the Principle of Distributive Justice at the center of analysis.

**Risks to exiters** include post-exit precarity: the period after leaving when alternatives are immature, income is uncertain or support networks are thin. At scale, these risks fall on whole communities that have committed to parallel systems.

**Risks to those who stay** are often the largest and the least visible. As some participants leave, the remaining system may lose revenue, skills and political weight. Hirschman observed that the members most able to leave are often those most able to press for improvement, so their departure can weaken voice for everyone else. This is where residual duty becomes concrete.

**Risks to the system as a whole** arise when departures push a system past a threshold, so that it no longer functions for anyone. A managed exit becomes collapse.

**Risks to third parties and future generations** fall on people outside the system entirely: neighboring regions, ecosystems, or those who will inherit the infrastructure and debts that a transition leaves behind.

A useful discipline is to require that every listed risk names a carrier. Risks with no named carrier are usually risks someone else has quietly been assigned.`
      },
      {
        title: 'Risks by Speed, Reversibility and Coupling',
        content: `Two risks of the same size can demand very different handling depending on how they unfold.

**Speed.** Some risks build slowly, such as the gradual decline of a town after its main employer leaves. Others arrive suddenly, such as a supply failure during a changeover. Slow risks are easy to ignore until they are entrenched; fast risks leave little time to respond.

**Reversibility.** The Principle of Precaution asks practitioners to prefer reversible interventions when outcomes are uncertain. A risk that can be corrected next year is different in kind from one that destroys an ecosystem, a skilled workforce or community trust for a generation.

**Coupling and complexity.** The sociologist Charles Perrow argued that in systems that are both tightly coupled (one part quickly affects another, with little slack) and interactively complex (parts interact in unexpected ways), serious accidents should be expected rather than treated as freak events. Transitions often temporarily increase coupling, because old and new systems must be run side by side under time pressure. That is precisely when unexpected interactions are most likely.

**Known risks and deep uncertainty.** Economists since Frank Knight have distinguished risk, where probabilities can be estimated, from uncertainty, where they cannot. Nassim Nicholas Taleb popularized the term "black swan" for rare, high-impact events that are explained only in hindsight. For transitions, the practical lesson is to build buffers and options rather than relying only on forecasts.`
      },
      {
        title: 'The Risk of Staying',
        content: `The response spectrum reminds us that collapse is what happens when exit and reform fail or are blocked. A risk assessment that counts only the dangers of moving will therefore always recommend staying, even when the exit window is closing.

A balanced typology applies the same categories to the status quo. What are the technical risks of continuing to depend on aging infrastructure? The financial risks of assets that may be stranded later at greater cost? The social risks of a decline that is managed by nobody? The political risks of losing public trust because problems were denied until crisis?

Comparing the two profiles honestly often reveals that the choice is not between risk and safety but between **managed risk now and unmanaged risk later**. It also shows where risks can be shifted from the most vulnerable to those better able to carry them, which is a design choice rather than a fact of nature.

This comparison has limits. Risks of the status quo are often more familiar and therefore feel smaller, while risks of change feel larger because they are new. Practitioners should acknowledge this bias openly, in line with the Principle of Intellectual Honesty, rather than exploiting it in either direction.`
      },
      {
        title: 'Using the Typology in Practice',
        content: `A typology is only useful if it changes what people do. In practice, strategic exodologists can use it in a few simple steps:

1. **List risks broadly** with stakeholders, including those who will stay in the existing system and those with experiential knowledge of how it actually works.
2. **Sort each risk** by domain, by carrier, by speed and by reversibility. Gaps in the table, such as no ecological risks or no risks to those who stay, are signals to look harder.
3. **Compare with the risks of staying**, using the same categories.
4. **Prioritize** irreversible, fast and tightly coupled risks, and risks that fall on people with the least capacity to absorb them.
5. **Assign a response and a responsible party** for each priority risk, together with an early warning sign that would show it is materializing.
6. **Revisit regularly.** Risk profiles change as a transition moves through its phases. The next lessons on backlash and unintended consequences, and the Risk Scenario Planning tool that closes this module, build on this foundation.

Throughout, record uncertainty explicitly. Saying "we do not know how large this risk is" is more useful than a precise number that hides guesswork.`
      }
    ],

    keyTakeaways: [
      'Transition risks can be sorted by domain, by who carries them, and by speed, reversibility and coupling',
      'Every risk should have a named carrier; unassigned risks usually fall on those with the least voice',
      'Tightly coupled, irreversible and fast-moving risks deserve priority under the Principle of Precaution',
      'The risks of staying must be assessed with the same rigour as the risks of leaving',
      'A typology prompts systematic thinking but cannot guarantee that every risk has been found'
    ],

    references: [
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Explains why tightly coupled, interactively complex systems produce failures that should be expected rather than treated as anomalies.',
        url: 'https://en.wikipedia.org/wiki/Normal_Accidents'
      },
      {
        author: 'Taleb, Nassim Nicholas',
        title: 'The Black Swan: The Impact of the Highly Improbable',
        year: 2007,
        publisher: 'Random House',
        relevance: 'Examines rare, high-impact events and the limits of forecasting, relevant to deep uncertainty in transitions.',
        url: 'https://en.wikipedia.org/wiki/The_Black_Swan:_The_Impact_of_the_Highly_Improbable'
      },
      {
        author: 'Flyvbjerg, Bent; Bruzelius, Nils; Rothengatter, Werner',
        title: 'Megaprojects and Risk: An Anatomy of Ambition',
        year: 2003,
        publisher: 'Cambridge University Press',
        relevance: 'Documents systematic cost and schedule risk in large infrastructure projects, a common feature of large transitions.',
        url: 'https://openlibrary.org/works/OL21373690W'
      }
    ]
  },
  learningObjectives: [
    'Classify transition risks by domain, carrier, speed and reversibility',
    'Identify who carries each risk, including those who stay and third parties',
    'Explain why tightly coupled and irreversible risks require priority',
    'Compare the risk profile of a transition with the risk profile of the status quo',
    'Apply a structured risk listing to a proposed large-scale exit'
  ],
  keyTerms: [
    { term: 'Transition Risk', definition: 'The possibility that a transition causes harm to exiters, those who stay, the system or third parties.' },
    { term: 'Risk Carrier', definition: 'The person, group or system that would bear the harm if a given risk materialises.' },
    { term: 'Tight Coupling', definition: 'A condition, described by Charles Perrow, in which parts of a system affect each other quickly and with little slack.' },
    { term: 'Deep Uncertainty', definition: 'A situation in which the likelihood of outcomes cannot be reliably estimated, as distinct from calculable risk.' },
    { term: 'Post-Exit Precarity', definition: 'The vulnerability and instability experienced after leaving an established system.' }
  ]
}

export default lesson
