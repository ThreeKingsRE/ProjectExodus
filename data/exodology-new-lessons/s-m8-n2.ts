import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m8-n2',
  title: 'Integration Challenge',
  duration: '30 min',
  type: 'interactive',
  content: {
    introduction: `This challenge asks you to apply every strategic framework to one complex case and bring them together into a single, coherent judgment. The case is **hypothetical**: it is a composite built from patterns common in documented transitions, and it does not describe any real place, company or community.

**The case: the Lowmarsh Valley.** The valley contains three small towns and surrounding farmland. For forty years, almost all of its water, for households and for irrigation, has come from a groundwater system run by a single private operator under a long-term concession granted by the national government. Most of the water goes to irrigate one export crop, which supplies a large processing plant that is the valley's biggest employer. Groundwater levels have fallen steadily, and wells near the coast have begun to turn salty. The operator has twice promised investment to stabilize the system and twice delivered less than promised. Water prices are rising.

The people affected differ sharply. Larger farms have the capital to drill deeper or install efficient irrigation. Smaller farms and the many seasonal workers who live in the valley for part of the year have few options. A long-established fishing community at the river mouth depends on freshwater flows that have already declined. Some residents have begun collecting rainwater and a few households have formed an informal water-sharing group. The regional council is divided: some members want to renegotiate with the operator, others want a public or cooperative alternative, and others fear that any disruption will drive the processing plant away.

Work through the steps below in order, writing your answers as you go. Each step draws on a different part of the Strategic path, and later steps should refer back to earlier answers. There is no single correct answer. What matters is that your analysis is coherent, honest about uncertainty and centered on those with the least exit capability.`,

    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Diagnose the system and place it on the response spectrum',
        prompt: 'Map the valley\'s structural dependence on the groundwater system: who depends on it, for what, and how heavily. Identify the regime, any niches (such as the rainwater collectors and the water-sharing group) and the landscape pressures. What forms of lock-in hold the current arrangement in place? Then read the signals: are there signs of reform exhaustion, an open exit window or collapse warning? Conclude by stating whether you judge the situation to call for optimization, reform, exit, or a hybrid of reform and parallel systems, and why. State how confident you are.'
      },
      {
        instruction: 'Analyze scale',
        prompt: 'Name the primary scale of the transition (household, community, regional, national) and the adjacent scales it will affect. Which parts of the problem can be addressed at community scale, which require regional action, and which depend on national policy, such as the terms of the concession? Decide whether a bottom-up, top-down or middle-out approach, or a combination, best fits this case, and explain how action at one scale would open or close options at another.'
      },
      {
        instruction: 'Apply the justice questions',
        prompt: 'Work through access, voice, burden distribution, benefit distribution and responsibility. Who has the most and least exit capability in the valley? Consider in particular smaller farms, seasonal workers, the fishing community and households near the salty coastal wells. Who would carry the transition burden under the option you identified in Step 1? Would your approach build lifeboats for the better-resourced, or ladders for everyone? Name at least two specific measures that would make the transition fairer, and say who should decide whether they are adequate.'
      },
      {
        instruction: 'Identify the policy and governance path',
        prompt: 'List the policies and rules that enable or block change, including the concession, water allocation rules and any constraints on cooperative or public ownership. For each important blocking rule, decide whether to work within it, around it or toward changing it, and justify the choice. Then propose a governance arrangement for the transition itself: who sits at the table, how decisions are made, how subsidiarity is applied, and how the arrangement keeps future exit possible rather than creating a new lock-in.'
      },
      {
        instruction: 'Plan for risk, stability and continuity',
        prompt: 'Identify the most serious risks your plan creates or faces: interruption of household water, economic shock if the processing plant leaves, backlash from those who feel the change is imposed, and harms nobody intended, such as pressure on neighboring water sources. For each, describe how you would keep essential services running and limit harm. Where would you prefer reversible steps because the outcome is uncertain? What would you treat as a collapse warning that should change your plan?'
      },
      {
        instruction: 'Design stewardship, adaptive management and long-term evaluation',
        prompt: 'Decide who will guide the transition over the next ten to twenty years and how stewardship will survive changes in leadership. State two or three explicit assumptions your plan depends on and how you will monitor them. Set out decision points at which the plan will be reviewed, including at least one double-loop question that challenges the plan\'s own goals. Then describe how success will be judged at different horizons (viability, durability and across a generation), and how results will be reported separately for the groups identified in Step 3.'
      },
      {
        instruction: 'Frame the transition and integrate your analysis',
        prompt: 'Write a short, honest account of the transition that the people of the valley could recognize: what is changing, why, what it will cost, and who it is for. Then step back and integrate. Identify the two most important tensions between your earlier answers, for example speed versus participation, or the needs of the processing plant versus the fishing community. Explain how your plan handles each tension, who is prioritized when a trade-off is unavoidable and why, and what residual duty is owed to anyone who remains tied to the old system. Finish with one paragraph summarizing your overall recommendation.'
      }
    ],
    completionRequirement: 'Complete all seven steps with written answers, making sure the final step names at least two tensions between frameworks and explains how your plan resolves or manages them.'
  },
  learningObjectives: [
    'Apply diagnostic, scale, justice, policy, risk, stewardship and narrative frameworks to a single complex case',
    'Construct a recommendation on the response spectrum that is consistent across all frameworks',
    'Identify tensions between frameworks and justify how a plan resolves or manages them',
    'Design long-term stewardship, adaptive decision points and evaluation suited to a generational transition',
    'Evaluate the distribution of transition burdens and residual duties among groups with unequal exit capability'
  ],
  keyTerms: [
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed without catastrophic loss.' },
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Transition Burden', definition: 'The costs, difficulties and risks borne by those undergoing system transition.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' }
  ]
}

export default lesson
