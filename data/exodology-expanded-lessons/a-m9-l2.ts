import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m9-l2',
  title: 'Capstone: Your Exit Plan',
  duration: '180 min',
  type: 'interactive',
  content: {
    introduction: `Develop a comprehensive exit plan integrating all Applied Exodology tools.

This capstone is where the Applied path comes together. You will choose one real system you depend on, such as how you get food, energy, income, housing or care, and write a plan for reducing that dependence in a way that is safe, fair to the people around you, and realistic for your situation. A good plan is not a manifesto. It is specific enough that someone else could read it and understand what you will do first, what you need, what could go wrong and how you will know it is working.

Plan on about three hours, spread over two or three sittings. Your answers are saved in this browser as you go, and you can download them at the end. Before you start, gather what you made earlier in the path: your dependency map, any alternative designs, and notes from the transition and financial planning exercises. When you finish, use the rubric below the steps to check your work, and share it with a peer or mentor if you can. Feedback from someone who knows your context is the fastest way to find the gaps you cannot see yourself.`,
    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Complete dependency map',
        prompt: 'Map your top 3 system dependencies with full tracing',
        guidance: 'For each dependency, trace it at least three links upstream: what you rely on, what that relies on, and what that in turn relies on. Mark each link as critical (you cannot function without it for a week) or important, and note how exposed it is to price shocks, outages or policy changes.',
        example: 'Home heating: natural gas furnace, which relies on the regional gas utility, which relies on interstate pipelines and wholesale gas prices. Critical in winter; exposed to price spikes.',
        tip: 'Pick dependencies you can actually influence in the next year. A perfect map of a system you cannot touch is less useful than a good map of one you can.'
      },
      {
        instruction: 'Design priority alternative',
        prompt: 'Design a parallel system for your most critical/addressable dependency',
        guidance: 'Choose the dependency where criticality and your ability to act overlap most. Describe the alternative you would build alongside the existing system, so you can switch gradually rather than all at once. Say what it costs, what skills it needs, and what it does not cover.',
        example: 'Partial food exit: a shared plot with two neighbors plus a community supported agriculture share, covering most summer vegetables while the grocery store covers the rest.',
        tip: 'Parallel means both systems run at once for a while. Plan the overlap period explicitly.'
      },
      {
        instruction: 'Develop transition plan',
        prompt: 'Sequence steps, stage resources, identify risks and fallbacks',
        guidance: 'Break the transition into phases with a clear first step you could take this month. For each phase, list the resources it needs, the main risk, and the fallback if that risk happens. Decide in advance what result would tell you to slow down, change course or stop.',
        example: 'Phase 1 (month 1 to 3): test the shared plot with three crops. Risk: poor yield. Fallback: keep full grocery budget; adjust crop choice next season.',
        tip: 'Small tests first. A cheap failure early is worth more than an expensive one late.'
      },
      {
        instruction: 'Identify team and community',
        prompt: 'Who will transition with you? What organizing is needed?',
        guidance: 'List the people and groups whose help you need and the people your exit affects, including anyone who depends on you. Note what each needs from the plan and what you will ask of them. Start from what your community already has, its skills, spaces and relationships, before listing what it lacks.',
        example: 'Neighbors with garden space; a local tool library; a relative who relies on me for rides, who must not lose that support during the change.',
        tip: 'Ask before you assume. A short conversation now prevents resentment later.'
      },
      {
        instruction: 'Create financial plan',
        prompt: 'How will you fund transition? What economic restructuring is needed?',
        guidance: 'Estimate the up-front cost, the ongoing cost and any savings, with a realistic timeline for each. Keep an emergency buffer and do not plan an exit you cannot afford to reverse. Note any shared funding, such as pooled purchases, grants or cooperative ownership, and what it commits you to.',
        example: 'Up-front: seeds, soil and tools, shared three ways. Ongoing: water and the CSA share. Expected saving: a modest cut in summer grocery spending after the first season.',
        tip: 'Use ranges, not single numbers, and write down where each estimate came from.'
      },
      {
        instruction: 'List skill development needs',
        prompt: 'What skills must you develop? How and when?',
        guidance: 'Name each skill the plan needs, how you will learn it (a course, a mentor, practice), and by when. Mark which skills someone on your team already has, so you can learn from them rather than starting alone.',
        example: 'Soil preparation and succession planting: learn from a neighbor this spring; one local workshop before planting.',
        tip: 'Pair each new skill with a low-stakes chance to practice it.'
      },
      {
        instruction: 'Plan documentation',
        prompt: 'How will you capture and share your learning?',
        guidance: 'Decide what you will record (costs, yields, time spent, problems), how often, and who you will share it with. Good records let you judge honestly whether the plan works, and they help the next person who tries something similar.',
        example: 'A simple monthly log of hours, costs and harvest, shared with the plot partners and posted to a community group at the end of the season.',
        tip: 'Record what went wrong as carefully as what went right.'
      }
    ],
    completionRequirement: 'Complete comprehensive exit plan',
    rubric: [
      {
        criterion: 'Dependency analysis',
        developing: 'Lists dependencies but does not trace them upstream or rate how critical they are.',
        proficient: 'Traces three dependencies at least three links upstream and rates criticality and exposure for each.',
        exemplary: 'Also shows how the dependencies interact and which single failure would hurt most.'
      },
      {
        criterion: 'Alternative design',
        developing: 'Names an alternative without saying how it would work alongside the current system.',
        proficient: 'Describes a parallel alternative with its costs, skills, limits and an overlap period.',
        exemplary: 'Compares at least two alternatives and explains the choice with evidence.'
      },
      {
        criterion: 'Transition sequence and risk',
        developing: 'Gives a goal but no phases, risks or fallbacks.',
        proficient: 'Sets phases with a first step this month, a main risk and a fallback for each, and a signal to stop or change course.',
        exemplary: 'Builds in small tests and says in advance how results will change the plan.'
      },
      {
        criterion: 'People and fairness',
        developing: 'Treats the exit as individual and does not mention who else is affected.',
        proficient: 'Names who helps, who is affected and what each needs, including anyone who depends on you.',
        exemplary: 'Shows how the plan leaves others no worse off and builds on existing community assets.'
      },
      {
        criterion: 'Money and skills',
        developing: 'Gives no costs or a single unsupported number; skills are not listed.',
        proficient: 'Gives cost ranges with sources, keeps an emergency buffer, and lists skills with how and when to learn them.',
        exemplary: 'Includes a reversal plan that is affordable and shares costs or skills across the team.'
      },
      {
        criterion: 'Learning and documentation',
        developing: 'No plan for recording results.',
        proficient: 'Says what will be recorded, how often and with whom it will be shared.',
        exemplary: 'Defines how the records will decide whether to continue, adjust or stop.'
      }
    ],
    synthesis: `You now have a plan you can act on this month. Revisit it after your first phase: compare what happened with what you expected, update the rubric scores honestly, and change the plan where the evidence says so. A plan that changes in response to evidence is working as intended.`,
    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'A plain introduction to stocks, flows and feedback, useful for tracing dependencies and spotting where a small change has a large effect.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Kretzmann, John P. & McKnight, John L.',
        title: "Building Communities from the Inside Out: A Path Toward Finding and Mobilizing a Community's Assets",
        year: 1993,
        publisher: 'ACTA Publications',
        relevance: 'The asset-based approach behind the team and community step: start from the skills, spaces and relationships a community already has.',
        url: 'https://openlibrary.org/works/OL11978971W'
      },
      {
        author: 'Ries, Eric',
        title: 'The Lean Startup',
        year: 2011,
        publisher: 'Crown Business',
        relevance: 'Explains testing ideas with small, cheap experiments and changing course based on results, the logic behind phased transition plans.',
        url: 'https://openlibrary.org/works/OL16086010W'
      }
    ]
  },
  learningObjectives: [
    'Integrate dependency mapping, alternative design, transition planning and financial planning into one exit plan for a real system',
    'Sequence a transition into phases with risks, fallbacks and signals to stop or change course',
    'Account for the people an exit affects and build on existing community assets',
    'Judge the quality of an exit plan against a clear rubric'
  ],
  keyTerms: [
    { term: 'Parallel System', definition: 'An alternative built and run alongside the existing system so that dependence can be reduced gradually rather than all at once.' },
    { term: 'Fallback', definition: 'A planned response if a phase of the transition fails, so that a setback does not become a crisis.' },
    { term: 'Reversibility', definition: 'The ability to return to the earlier arrangement at an acceptable cost if the exit does not work.' },
    { term: 'Asset-Based Planning', definition: 'Planning that starts from the skills, spaces and relationships a person or community already has, rather than from what it lacks.' }
  ]
}

export default lesson
