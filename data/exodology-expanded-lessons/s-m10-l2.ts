import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 's-m10-l2',
  title: 'Capstone Project Workbook',
  duration: '240 min',
  type: 'interactive',
  content: {
    introduction: `Complete your Strategic Exodology capstone project.

The Strategic capstone asks you to work beyond your own household: on a transition that affects a community, an organization, a sector or a region. You choose one of four project types and carry it from analysis to an implementation plan that someone else could pick up and use. The aim is the kind of work a practitioner would bring to a city council, a cooperative board, a school or a funder: clear about the situation, honest about who gains and who pays, and concrete about the first steps.

Plan on about four hours across several sittings, and expect to revise. Your answers are saved in this browser as you go, and you can download them at the end to turn into a written report, a slide deck or a teaching unit. When you finish, check your work against the rubric below the steps. If you can, ask someone affected by the transition to read your plan; their response is the most important test it will face.`,
    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Select project type',
        prompt: 'Choose: Regional transition plan, Domain exit guide, Teaching curriculum, or Stewardship portfolio',
        guidance: 'A regional transition plan covers one place and one or more systems (for example, a town moving off a single employer). A domain exit guide explains how people can leave a particular system, such as a type of debt or a food supply chain. A teaching curriculum teaches Exodology to a specific group. A stewardship portfolio documents transitions you have supported, with evidence and lessons. State the scope, the audience and what a finished product looks like.',
        tip: 'Choose a scope you can finish. A tight project done well beats a sweeping one left half-built.'
      },
      {
        instruction: 'Conduct situational analysis',
        prompt: 'What is the current state? What are dependencies, vulnerabilities, opportunities?',
        guidance: 'Describe the system as it is now, with sources. Map the main dependencies and where they are fragile. Identify openings: pressures, new technologies, policy changes or community energy that make change possible now. Separate what you know from what you assume, and say how you would check the assumptions.',
        example: 'A rural county relies on one food distributor: one warehouse, one route, prices set elsewhere. Opening: an unused school kitchen and growers already selling at a weekly market.'
      },
      {
        instruction: 'Map stakeholders',
        prompt: 'Who is affected? Who has power? Who could ally or oppose?',
        guidance: 'List the groups affected, their interests and how much influence each has. Pay special attention to people with little power who would bear costs, and to people whose cooperation is essential. Note how you would hear from each group directly rather than speaking for them.',
        tip: 'A simple grid of interest against influence helps you see who to involve early and who might block the plan.'
      },
      {
        instruction: 'Develop strategic framework',
        prompt: 'What is the theory of change? What sequence of interventions?',
        guidance: 'Write your theory of change as a chain: if we do this, then this will happen, because of this. Choose interventions at more than one scale, from a working local example to the policy or market change that would let it spread. Explain the sequence and why each step makes the next one easier.',
        example: 'Start a shared processing kitchen (local niche), show steady demand from schools (evidence), then ask the county to adjust purchasing rules (policy window).'
      },
      {
        instruction: 'Create implementation plan',
        prompt: 'What are the concrete steps? Timeline? Resources needed?',
        guidance: 'Turn the framework into steps with owners, dates and resources. Name the first three things that would happen in the first month. Include the risks most likely to delay the plan and how you would respond. Large projects tend to run over time and budget, so build in slack and test small before scaling.',
        tip: 'Plan slowly and act quickly: careful planning up front shortens the risky period of delivery.'
      },
      {
        instruction: 'Assess justice implications',
        prompt: 'Who benefits and who bears costs? How is equity addressed?',
        guidance: 'Go through the stakeholder map and ask, for each group, whether it is better or worse off during the transition and after it. Look for people who are left behind because they cannot afford to leave or to adapt. Describe the specific measures that share costs fairly and give affected people a real voice in decisions.',
        example: 'Workers at the old distributor: offer first hiring at the new kitchen and paid training during the overlap.'
      },
      {
        instruction: 'Plan for sustainability',
        prompt: 'How does this persist? What are resilience mechanisms?',
        guidance: 'Explain how the new arrangement keeps going once the initial energy fades: who owns it, how decisions get made, how it is funded, and how it adapts to shocks. Include redundancy for anything critical, and a way to review and change the rules over time.',
        tip: 'Shared, clear rules that the people involved helped write tend to last longer than rules imposed from outside.'
      },
      {
        instruction: 'Reflect on learning',
        prompt: 'What did you learn? How did this change your understanding?',
        guidance: 'Look back at your first answers. What turned out to be wrong or more complicated? Which Exodology ideas helped most, and where did they fall short? Name one thing you would do differently and one question you still want to research.'
      }
    ],
    completionRequirement: 'Complete all capstone components',
    rubric: [
      {
        criterion: 'Scope and situational analysis',
        developing: 'Scope is vague; the current situation is described from opinion without sources.',
        proficient: 'Scope and audience are clear; the analysis maps dependencies, vulnerabilities and openings with sources, and separates facts from assumptions.',
        exemplary: 'Also tests key assumptions or proposes exactly how to test them.'
      },
      {
        criterion: 'Stakeholders and voice',
        developing: 'Stakeholders are listed without interests or influence; affected people are spoken for.',
        proficient: 'Interests and influence are mapped, low-power groups are named, and the plan says how each will be heard directly.',
        exemplary: 'Includes evidence of real input from affected people and shows how it changed the plan.'
      },
      {
        criterion: 'Theory of change',
        developing: 'Lists actions without explaining how they lead to the goal.',
        proficient: 'Gives a clear if-then-because chain with interventions at more than one scale and a reasoned sequence.',
        exemplary: 'Names the conditions under which the theory would fail and how the plan would adapt.'
      },
      {
        criterion: 'Implementation',
        developing: 'Steps have no owners, dates or resources.',
        proficient: 'Steps have owners, dates and resources, with first-month actions, main risks and responses.',
        exemplary: 'Builds in small tests before scaling and realistic slack for delays and cost overruns.'
      },
      {
        criterion: 'Justice and equity',
        developing: 'Costs and benefits are not discussed, or the plan assumes everyone gains.',
        proficient: 'Shows who gains and who pays during and after the transition, and gives specific measures to share costs and include affected people.',
        exemplary: 'Addresses people who cannot leave or adapt, with measures they helped design.'
      },
      {
        criterion: 'Sustainability and reflection',
        developing: 'No plan for ownership, funding or review; reflection restates the plan.',
        proficient: 'Explains ownership, decision-making, funding and how the rules can change; reflection names what was learned and what is still open.',
        exemplary: 'Includes redundancy for critical parts and a review cycle, and the reflection critically questions Exodology ideas.'
      }
    ],
    synthesis: `You have taken a transition from analysis to a plan others can use. The strongest next step is to share it with the people it affects and with someone who has done similar work, then revise. Stewardship means staying with a transition after the plan is written: watching results, listening to the people involved and adjusting.`,
    references: [
      {
        author: 'Geels, Frank W.',
        title: 'Technological Transitions and System Innovations: A Co-evolutionary and Socio-technical Analysis',
        year: 2005,
        publisher: 'Edward Elgar',
        relevance: 'The multi-level view of transitions, from small niches to wider regimes and landscape pressures, behind planning interventions at more than one scale.',
        url: 'https://openlibrary.org/works/OL9793139W'
      },
      {
        author: 'Kingdon, John W.',
        title: 'Agendas, Alternatives, and Public Policies',
        year: 1984,
        publisher: 'Little, Brown',
        relevance: 'Explains how policy windows open when problems, solutions and politics line up, useful for timing the policy steps in a strategy.',
        url: 'https://openlibrary.org/works/OL2034197W'
      },
      {
        author: 'Bent Flyvbjerg and Dan Gardner',
        title: 'How Big Things Get Done',
        year: 2023,
        publisher: 'Currency',
        relevance: 'Evidence on why large projects run over time and budget, and the case for careful planning, small tests and building in slack.',
        url: 'https://openlibrary.org/works/OL28442176W'
      },
      {
        author: 'Iris Marion Young',
        title: 'Responsibility for Justice',
        year: 2011,
        publisher: 'Oxford University Press',
        relevance: 'A framework for structural injustice and shared responsibility, useful when assessing who bears the costs of a transition.',
        url: 'https://openlibrary.org/works/OL15987924W'
      }
    ]
  },
  learningObjectives: [
    'Analyze a community, organizational or regional system with sources, separating facts from assumptions',
    'Design a multi-scale theory of change and turn it into an implementation plan with owners, dates and resources',
    'Assess who gains and who bears the costs of a transition and design measures for fairness and voice',
    'Plan for the long-term ownership, funding and adaptation of a new arrangement'
  ],
  keyTerms: [
    { term: 'Theory of Change', definition: 'An explicit chain of reasoning showing how planned actions are expected to lead to the intended result, and why.' },
    { term: 'Stakeholder Map', definition: 'A chart of the groups affected by or able to influence a change, with their interests and relative power.' },
    { term: 'Policy Window', definition: 'A period when a problem, a workable solution and political will line up, making a policy change possible.' },
    { term: 'Structural Injustice', definition: 'Harm that results from many people following accepted rules and practices, rather than from one wrongdoer.' }
  ]
}

export default lesson
