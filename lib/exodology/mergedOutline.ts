/**
 * Merged outline for the Applied and Strategic Exodology paths.
 *
 * The path page's original outline and the stored lesson data were two
 * different curriculum designs filed under the same lesson ids. This spec is
 * the single source of truth for what each module teaches and in what order:
 *
 *   existing — a lesson already in data/exodology-curriculum.ts, shown under
 *              its own id and title (ids are unchanged so saved progress is kept)
 *   new      — a lesson written to fill the outline, stored in
 *              data/exodology-new-lessons (ids end in -n1, -n2, …)
 *   tool     — an interactive tool from the outline that will be built later;
 *              listed as "in development", not openable yet
 *
 * Foundations already matched its outline and is not listed here.
 */

export type MergedEntry =
  | { kind: 'existing'; id: string }
  | { kind: 'new'; id: string; title: string; type: 'instruction' | 'interactive' | 'reflection'; duration: string; description: string }
  | { kind: 'tool'; id: string; title: string; description: string }

const n = (id: string, title: string, description: string, type: 'instruction' | 'interactive' | 'reflection' = 'instruction', duration = '20 min'): MergedEntry =>
  ({ kind: 'new', id, title, type, duration, description })
const e = (id: string): MergedEntry => ({ kind: 'existing', id })
const t = (id: string, title: string, description: string): MergedEntry => ({ kind: 'tool', id, title, description })

export const MERGED_MODULE_LESSONS: Record<string, MergedEntry[]> = {
  // ---------------- APPLIED ----------------
  'a-m1': [
    e('a-m1-l1'),
    n('a-m1-n1', 'Identifying Lock-in Mechanisms', 'Recognize structural features that create dependency lock-in.'),
    e('a-m1-l3'),
    n('a-m1-n2', 'Prioritizing Exit Targets', 'Decide which dependencies to address first, and why.'),
    e('a-m1-l5'),
  ],
  'a-m2': [
    n('a-m2-n1', 'Principles of Food System Decentralization', 'Why and how food systems can be distributed rather than centralized.'),
    e('a-m2-l1'),
    e('a-m2-l2'),
    n('a-m2-n2', 'Distribution and Access Design', 'Getting food from local producers to every household fairly.'),
    n('a-m2-n3', 'Case Studies: Community Food Networks', 'Well-documented examples of decentralized food networks and what they teach.'),
    e('a-m2-l5'),
  ],
  'a-m3': [
    n('a-m3-n1', 'Water Autonomy Principles', 'What water autonomy means and how to approach it ethically.'),
    e('a-m2-l4'),
    n('a-m3-n2', 'Rainwater Harvesting Systems', 'Designing catchment, storage and treatment for household and community water.'),
    n('a-m3-n3', 'Greywater and Blackwater Management', 'Safe reuse of household wastewater and nutrient recovery.'),
    n('a-m3-n4', 'Commons-Based Water Governance', 'Shared rules for managing water as a community resource.'),
    t('a-m3-l5', 'Water System Calculator', 'Size a water autonomy system for your household or community.'),
  ],
  'a-m4': [
    n('a-m4-n1', 'Microgrid Fundamentals', 'How microgrids work and why they enable energy exit.'),
    e('a-m2-l3'),
    n('a-m4-n2', 'Renewable Generation Options', 'Comparing solar, wind, micro-hydro and other local generation.'),
    n('a-m4-n3', 'Storage and Distribution', 'Batteries, load management and local distribution design.'),
    n('a-m4-n4', 'Microgrid Economics and Governance', 'Financing, ownership models and decision-making for shared energy.'),
    t('a-m4-l5', 'Microgrid Design Tool', 'Design and size a community microgrid.'),
  ],
  'a-m5': [
    n('a-m5-n1', 'The Reality of Partial Exit', 'Why most exits are partial, and how to make partial exit deliberate.'),
    n('a-m5-n2', 'Designing Hybrid Arrangements', 'Combining existing and alternative systems without fragility.'),
    n('a-m5-n3', 'Managing Dual Dependencies', 'Living with two systems at once while transitioning between them.'),
    e('a-m3-l1'),
    e('a-m3-l4'),
    e('a-m5-l1'),
    e('a-m5-l2'),
    e('a-m5-l3'),
    t('a-m5-l5', 'Hybrid System Simulator', 'Model a staged, partial exit and test its resilience.'),
  ],
  'a-m6': [
    n('a-m6-n1', 'Common Exit System Failures', 'How alternative systems fail, and the warning signs.'),
    e('a-m3-l2'),
    n('a-m6-n2', 'Designing for Resilience', 'Redundancy, diversity and graceful degradation in exit systems.'),
    n('a-m6-n3', 'Re-entry Planning', 'Planning an ethical, dignified path back when exit does not work.'),
    e('a-m6-l1'),
    n('a-m6-n4', 'Failure Scenario Analysis', 'Work through failure scenarios and design responses.', 'interactive', '25 min'),
  ],
  'a-m7': [
    n('a-m7-n1', 'Autonomy Metrics Framework', 'Defining and measuring autonomy across essential systems.'),
    n('a-m7-n2', 'Resilience Assessment Methods', 'Assessing how well a household or community withstands disruption.'),
    n('a-m7-n3', 'Tracking Progress Over Time', 'Building simple, honest measures of progress toward autonomy.'),
    t('a-m7-l4', 'Autonomy Calculator', 'Score and track autonomy across food, water, energy and more.'),
  ],
  'a-m8': [
    n('a-m8-n1', 'Community Assessment', 'Assessing a community\'s dependencies, assets and readiness.'),
    n('a-m8-n2', 'Stakeholder Engagement', 'Bringing residents, institutions and skeptics into the process.'),
    e('a-m4-l1'),
    e('a-m4-l2'),
    e('a-m4-l3'),
    e('a-m3-l3'),
    e('a-m7-l1'),
    n('a-m8-n3', 'Implementation Planning', 'Turning a community exit plan into phased, accountable action.'),
    e('a-m4-l4'),
    e('a-m8-l1'),
    t('a-m8-l4', 'Advisory Role Play', 'Practice advising a community through an exit decision.'),
  ],
  'a-m9': [
    e('a-m9-l1'),
    e('a-m9-l2'),
    n('a-m9-n1', 'Peer Review Exercise', 'Give and receive structured feedback on exit plans.', 'interactive', '25 min'),
    n('a-m9-n2', 'Reflection: Your Applied Practice', 'Reflect on what you can now design and where you will practice it.', 'reflection', '15 min'),
  ],

  // ---------------- STRATEGIC ----------------
  's-m1': [
    e('s-m1-l1'),
    e('s-m4-l1'),
    e('s-m4-l2'),
    n('s-m1-n1', 'Case Study: National Energy Transitions', 'What well-documented national energy transitions teach about exit at scale.', 'instruction', '25 min'),
    t('s-m1-l5', 'Scale Assessment Tool', 'Assess the scale and scope of a proposed transition.'),
  ],
  's-m2': [
    e('s-m2-l1'),
    e('s-m2-l2'),
    n('s-m2-n1', 'Exit-Compatible Policy Design', 'Designing policy that keeps exit possible and fair.'),
    e('s-m2-l3'),
    n('s-m2-n2', 'Regulatory Navigation', 'Working within, around and toward changing regulations ethically.'),
    t('s-m2-l5', 'Policy Analysis Simulation', 'Test how policy options shape exit capability.'),
  ],
  's-m3': [
    e('s-m3-l1'),
    n('s-m3-n1', 'Who Bears Transition Costs?', 'Mapping how the costs and benefits of transitions are distributed.'),
    n('s-m3-n2', 'Access and Inclusion', 'Making exit pathways available to people with the fewest options.'),
    n('s-m3-n3', 'Protecting Vulnerable Populations', 'Safeguards for those most exposed when systems change.'),
    t('s-m3-l5', 'Equity Assessment Tool', 'Assess the equity of a proposed transition.'),
  ],
  's-m4': [
    n('s-m4-n1', 'Risk Typology for Transitions', 'Classifying the risks that large transitions create.'),
    n('s-m4-n2', 'Sources of Backlash', 'Why transitions provoke resistance, and how to read it.'),
    n('s-m4-n3', 'Mitigating Unintended Consequences', 'Anticipating and limiting harms nobody intended.'),
    n('s-m4-n4', 'Communication and Stakeholder Management', 'Honest, consistent communication through contested change.'),
    t('s-m4-l5', 'Risk Scenario Planning', 'Plan responses to transition risk scenarios.'),
  ],
  's-m5': [
    n('s-m5-n1', 'Mass Transition Dynamics', 'How transitions unfold when many people move at once.'),
    n('s-m5-n2', 'Maintaining Stability During Transition', 'Keeping essential services running while systems change.'),
    n('s-m5-n3', 'Coordination at Scale', 'Coordinating many actors without central control.'),
    n('s-m5-n4', 'Infrastructure Continuity', 'Protecting critical infrastructure through a transition.'),
    t('s-m5-l5', 'Mass Transition Simulation', 'Simulate a large-scale transition and its bottlenecks.'),
  ],
  's-m6': [
    n('s-m6-n1', 'Institutional Lock-in Analysis', 'How institutions entrench dependency, and how to analyze it.'),
    n('s-m6-n2', 'Exit-Enabling Governance', 'Governance designs that keep exit options open.'),
    n('s-m6-n3', 'Transition-Ready Organizations', 'Building organizations that can change course without collapse.'),
    e('s-m6-l1'),
    e('s-m6-l2'),
    t('s-m6-l4', 'Institutional Design Workshop', 'Design an exit-compatible institution.'),
  ],
  's-m7': [
    e('s-m5-l1'),
    e('s-m5-l2'),
    e('s-m5-l3'),
    e('s-m8-l1'),
    e('s-m8-l2'),
    n('s-m7-n1', 'Measuring Long-term Success', 'Judging whether a transition worked, years and generations later.'),
    n('s-m7-n2', 'Adaptive Management', 'Learning and adjusting continuously during long transitions.'),
    t('s-m7-l5', 'Stewardship Planning', 'Build a long-term stewardship plan.'),
  ],
  's-m8': [
    n('s-m8-n1', 'Strategic Framework Integration', 'Bringing the strategic frameworks together into one approach.'),
    e('s-m7-l1'),
    e('s-m7-l2'),
    n('s-m8-n2', 'Integration Challenge', 'Apply every strategic framework to one complex case.', 'interactive', '30 min'),
  ],
  's-m9': [
    e('s-m9-l1'),
    n('s-m9-n1', 'Selecting Your Capstone Focus', 'Choosing a system and scale for your strategic capstone.'),
    n('s-m9-n2', 'Research and Context Development', 'Building the evidence base and context for your plan.'),
    n('s-m9-n3', 'Scoping Your Plan', 'Setting boundaries, assumptions and success criteria.'),
    n('s-m9-n4', 'Capstone Proposal Development', 'Writing a clear, reviewable capstone proposal.', 'interactive', '30 min'),
  ],
  's-m10': [
    e('s-m10-l1'),
    e('s-m10-l2'),
    n('s-m10-n1', 'Final Presentation Preparation', 'Presenting your strategic exit plan clearly and honestly.'),
    e('s-m10-l3'),
  ],
}

export const TOOL_TODO = Object.values(MERGED_MODULE_LESSONS).flat().filter((x) => x.kind === 'tool')
export const NEW_LESSON_SPECS = Object.entries(MERGED_MODULE_LESSONS).flatMap(([moduleId, list]) =>
  list.filter((x): x is Extract<MergedEntry, { kind: 'new' }> => x.kind === 'new').map((x) => ({ moduleId, ...x }))
)
