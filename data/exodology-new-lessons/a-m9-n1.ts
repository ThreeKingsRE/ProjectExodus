import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m9-n1',
  title: 'Peer Review Exercise',
  duration: '25 min',
  type: 'interactive',
  content: {
    introduction: `The Charter names peer review as one of the accountability mechanisms of Exodological practice: subjecting work to scrutiny by qualified colleagues. In this exercise you will exchange the exit plan you drafted in the capstone with a peer, review theirs against the tools of the Applied path, and respond to the feedback you receive.

Good peer review is specific, evidence-based and kind without being vague. Its purpose is to find the weaknesses in a plan before reality does: an unmapped dependency, a missing fallback, a group whose burden nobody considered. Treat the plan you review with care. It may describe a real household or community, so keep its details confidential and use them only for this exercise. If you cannot find a peer, ask a trusted friend to read your plan with the step 3 questions in hand, or review your own plan after setting it aside for a day, and say which route you took.`,
    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Prepare your plan for review',
        prompt: 'Take the exit plan you developed in the capstone and add a short cover note of no more than half a page. State the system you are exiting from, where your plan sits on the response spectrum and why, and the two or three questions you most want a reviewer to answer (for example, "Is my fallback point realistic?" or "Who have I left out?"). Remove or disguise any details that would identify people who have not agreed to be named.'
      },
      {
        instruction: 'Read your peer\'s plan and summarize it',
        prompt: 'Read the plan through once without commenting. Then write a three or four sentence summary in your own words: what the plan exits from, what it builds, how it gets there and who is involved. Share the summary with the author first. If they say it misses their intent, the plan may need to be clearer, and that is useful feedback in itself.'
      },
      {
        instruction: 'Review against the Applied toolkit',
        prompt: 'Assess the plan against these questions, noting evidence from the plan for each answer. Dependencies: are the critical nodes mapped and traced, or assumed? Response: is exit justified over optimization or reform, with reform exhaustion or exit window signals named? Alternatives: is there a minimum viable system that can run in parallel before the old system is left? Transition: are steps sequenced, resources staged, risks rated and fallback points identified? People: who is on the team, how will the community be engaged, and is there a plan for conflict? Economics and skills: are transition costs, income bridges and skill gaps addressed?'
      },
      {
        instruction: 'Review the ethics of the exit',
        prompt: 'Apply the tests for harmful exit from the Foundations path. Does the plan extract value from those who remain? Could it accelerate harm to the vulnerable? Does it replicate exclusions it claims to escape? Is it motivated more by avoidance than by building? Then ask how the plan meets residual duty: what does it offer to those who will stay, and does it create on-ramps for others? Note any place where the lifeboat critique might fairly apply.'
      },
      {
        instruction: 'Write your feedback',
        prompt: 'Write feedback in three parts. Strengths: two or three things the plan does well, stated specifically. Concerns: the two or three most important weaknesses, each tied to evidence in the plan and to the concept it relates to, ranked by how much they matter. Questions: at least two open questions the author should be able to answer, including answers to the questions in their cover note. Avoid rewriting the plan for them; the decisions remain the author\'s.'
      },
      {
        instruction: 'Receive and respond to feedback on your own plan',
        prompt: 'Read the feedback on your plan without replying immediately. Then, for each concern raised, record one of three responses: accept (and say what you will change), partly accept (and say what you will change and what you will not), or decline (and give your reasons). Declining is legitimate when you have evidence the reviewer lacked; say what that evidence is. Thank your reviewer for at least one specific point.'
      },
      {
        instruction: 'Revise and record what you learned',
        prompt: 'Make the changes you accepted, and add a short revision note to your plan listing what changed and why. Then write a few sentences on what reviewing someone else\'s plan taught you about your own: which weaknesses were easier to see in another person\'s work, and which question would you now ask of every exit plan? Keep this note; it is the start of the documentation habit taught in this path.'
      }
    ],
    completionRequirement: 'Complete all seven steps: a cover note for your plan, a summary of your peer\'s plan, a review against the Applied toolkit and the ethics of exit, written feedback with strengths, concerns and questions, a recorded response to each concern raised about your plan, and a revision note with your reflections.'
  },
  learningObjectives: [
    'Summarize another practitioner\'s exit plan accurately in your own words',
    'Evaluate an exit plan against the Applied toolkit of dependency mapping, alternative design, transition planning, organizing, economics and skills',
    'Assess the ethics of a proposed exit using the tests for harmful exit and the concept of residual duty',
    'Compose specific, evidence-based feedback organized into strengths, concerns and questions',
    'Justify decisions to accept, partly accept or decline feedback and revise a plan accordingly'
  ],
  keyTerms: [
    { term: 'Peer Review', definition: 'Scrutiny of work by qualified colleagues; named in the Ethics Guidelines as an accountability mechanism of Exodological practice.' },
    { term: 'Residual Duty', definition: 'Ongoing obligations to those who remain in systems we have left.' },
    { term: 'Lifeboat Problem', definition: 'The critique that exit movements often serve the privileged, valid when exit requires resources most lack or when alternatives exclude the vulnerable.' },
    { term: 'Fallback Point', definition: 'A stable intermediate state in a transition where progress can pause if the next step stalls.' }
  ]
}

export default lesson
