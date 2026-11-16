import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m9-n2',
  title: 'Reflection: Your Applied Practice',
  duration: '15 min',
  type: 'reflection',
  content: {
    introduction: `The Applied path set out to move you from understanding exit to designing it. You have mapped dependencies, designed parallel systems, planned transitions, organized with others, worked through the economics and skills of exit, prepared for conflict, advised a community and drafted and reviewed a full exit plan.

This reflection asks you to take stock honestly: what you can now design, where your practice is still thin, and where you will actually put these tools to work. The Charter names self-reflection as an accountability mechanism and asks practitioners to work within the bounds of their competence. There are no right answers here, but vague answers will not help you. Be specific about systems, people, places and timelines wherever you can.`,
    prompts: [
      {
        question: 'What can you now design that you could not design when you began the Applied path?',
        guidance: 'Name concrete capabilities rather than topics. For example: "I can trace my household\'s energy dependency to its critical nodes and design a minimum viable alternative," or "I can run a collective dependency mapping workshop." Then name one tool you understand in principle but have not yet used in practice. The gap between the two lists is where your next learning lies.'
      },
      {
        question: 'Looking back at your capstone plan and the peer feedback on it, where is your practice strongest and where is it weakest?',
        guidance: 'Consider the whole Applied toolkit: dependency mapping, alternative system design, transition planning, community organizing, economic transition, skill development, conflict resolution and documentation. Which parts of your plan did your reviewer find convincing, and which did they question? Is your weak area a matter of knowledge, skill, confidence or circumstance? Each calls for a different response.'
      },
      {
        question: 'Where, specifically, will you practice what you have learned in the next six to twelve months?',
        guidance: 'Choose one real setting: your household, a workplace, a cooperative, a neighborhood group, a congregation or another community you belong to. Describe the system you will work on, where it sits on the response spectrum and the first small, reversible step you will take. Remember the lesson on minimum viable systems: start with the smallest thing that actually functions, learn and expand.'
      },
      {
        question: 'What are the limits of your competence and your position, and who will you work with to go beyond them?',
        guidance: 'The Principle of Professional Competence asks practitioners to undertake only work for which they are adequately qualified and to seek collaboration beyond it. Which tasks in your chosen setting are beyond you at present, whether technical, legal, financial or relational? Consider also your positionality: how do your own resources, identity and relationships shape what you can see and whom you can reach? Name the people or groups whose skills and perspectives you will need.'
      },
      {
        question: 'How will your practice honor your responsibilities to those who stay?',
        guidance: 'Think about the people in your chosen setting who will not or cannot take part in the alternative you are building. How could your exit affect them, for better or worse? What could you offer: shared knowledge, on-ramps, advocacy, continued participation in the existing system? Apply the tests for harmful exit to your own plans as honestly as you applied them to your peer\'s.'
      },
      {
        question: 'As you approach the end of the Applied path, which role in Exodology calls to you next?',
        guidance: 'The Applied path equips you to build alternatives; the Strategic path addresses guiding others and shaping larger transitions, including policy, equity at scale and stability during mass exits. Some practitioners deepen their applied work for years before moving on; others are drawn early to strategic roles. Consider what you would need, in experience, community and support, to take the next step well, and when you expect to take it.'
      }
    ],
    closingNote: 'You now hold the tools of Applied Exodology. They become a practice only through use: small, careful exits attempted with others, documented honestly and shared so that others can follow. Return to these answers after your first real project and notice what has changed. Whether you continue to the Strategic path now or later, the measure of your practice is not how far you have exited but whether you have left well and widened the way for others.'
  },
  learningObjectives: [
    'Identify the specific exit design capabilities gained through the Applied path',
    'Evaluate personal strengths and weaknesses across the Applied toolkit using evidence from the capstone and peer review',
    'Select a concrete setting and first reversible step for applying Applied Exodology',
    'Recognize the limits of personal competence and positionality and identify collaborators',
    'Plan how personal practice will meet residual duty to those who stay'
  ],
  keyTerms: [
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed.' },
    { term: 'Minimum Viable System', definition: 'The smallest alternative system that actually functions, used to start small, learn and expand.' },
    { term: 'Residual Duty', definition: 'Ongoing obligations to those who remain in systems we have left.' },
    { term: 'Professional Competence', definition: 'The ethical principle that Exodologists practice within the bounds of their expertise, seek collaboration beyond it and commit to ongoing learning.' }
  ]
}

export default lesson
