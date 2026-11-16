import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m9-n4',
  title: 'Capstone Proposal Development',
  duration: '30 min',
  type: 'interactive',
  content: {
    introduction: `In this exercise you will draft your capstone proposal: a short document, usually two to three pages, that sets out what your transition plan will address and how you will develop it. A good proposal can be read and reviewed by a peer, an instructor or a member of the affected community in under fifteen minutes, and it gives them enough to tell you where your plan is weak before you invest weeks in it.

Each step below produces one section of the proposal. Draw on the previous lessons in this module: your choice of focus, the evidence base you are building and your scope statement. Write in plain language, be explicit about uncertainty, and remember that the proposal is a starting point to be tested, not a promise of conclusions.`,
    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Write your focus statement and working title',
        prompt: 'In two or three sentences, name the system, the place and your primary scale, and state the transition question your plan will address. Add a working title that describes the system rather than announcing a conclusion (for example, "Water supply dependence in a river valley region" rather than "Exiting the regional water utility").'
      },
      {
        instruction: 'Explain why this system, and why now',
        prompt: 'Describe the structural dependence you have observed and the signals that make the question of exit worth asking. Which reform exhaustion, exit window or collapse warning signals are present, and which are absent? Say where you expect the plan to sit on the response spectrum, and what evidence could change that expectation.'
      },
      {
        instruction: 'State your positionality and engagement approach',
        prompt: 'Describe your relationship to the system: insider, outsider or somewhere between. Explain how you will involve or hear from affected people, how you will obtain informed engagement, and how you will protect confidentiality. If you are using a hypothetical or composite case, say so clearly and name the documented patterns it draws on.'
      },
      {
        instruction: 'Summarize your evidence base and research plan',
        prompt: 'List the main sources you have already gathered and those you still need, across documentary, quantitative, stakeholder and observational evidence. Name one or two comparable cases you will study and what each might teach you. Identify the biggest gap in your current knowledge and how you will address it.'
      },
      {
        instruction: 'Set out your scope, assumptions and success criteria',
        prompt: 'Summarize your boundaries (system, geography, population, functions, time horizon) and what is out of scope. List your five most important assumptions with a confidence and impact rating for each. State at least one success criterion with an observable indicator for each of effectiveness, equity, durability and process.'
      },
      {
        instruction: 'Outline your justice commitments',
        prompt: 'Identify who depends most on the system, who has the least exit capability, and who is likely to bear the largest transition burden. Describe how your plan will address access, voice, burden distribution, benefit distribution and responsibilities to those who stay. Name one way your plan could become a lifeboat for the few rather than a ladder for many, and how you will guard against it.'
      },
      {
        instruction: 'Draft a work plan and request review',
        prompt: 'Lay out a timeline across the five capstone phases (system diagnosis, exit strategy design, risk and equity analysis, governance and stewardship, integration and presentation). Then write three specific questions you want a reviewer to answer about your proposal, such as which assumption seems weakest or who appears to be missing, and name who you will ask.'
      }
    ],
    completionRequirement: 'Complete all seven steps to produce a full capstone proposal draft, including a focus statement, rationale, positionality statement, research plan, scope summary, justice commitments and a work plan with review questions.'
  },
  learningObjectives: [
    'Compose a focus statement that frames an open transition question without presuming its answer',
    'Justify the choice of system using observable signals from the response spectrum',
    'Organize evidence, scope, assumptions and success criteria into a reviewable proposal',
    'Specify concrete justice commitments, including responsibilities to those who stay',
    'Plan the capstone across its five phases and formulate questions for peer review'
  ],
  keyTerms: [
    { term: 'Capstone Proposal', definition: 'A short, reviewable document setting out the focus, rationale, research plan, scope, justice commitments and work plan for a Strategic capstone.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' },
    { term: 'Transition Burden', definition: 'The costs, difficulties and risks borne by those undergoing system transition.' },
    { term: 'Exit Equity', definition: 'Equal access to exit opportunities across different groups.' }
  ]
}

export default lesson
