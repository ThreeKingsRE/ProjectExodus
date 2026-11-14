// Module assessments for Exodology paths, keyed by module id (e.g. "f-m3").
// Same simple format as moduleAssessments in data/exodology-curriculum.ts;
// lib/exodology/assessments.ts converts both for the assessment page.
// Questions are written strictly from each module's own lesson text.

export interface SimpleAssessment {
  moduleId: string
  title: string
  description: string
  passingScore?: number
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export const additionalAssessments: Record<string, SimpleAssessment> = {
  "a-m1": {
    "moduleId": "a-m1",
    "title": "Module 1 Knowledge Check",
    "description": "Test your understanding of dependency mapping, critical nodes, exit friction, leverage points and dependency classification.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What makes a dependency map different from an organizational chart or process flow?",
        "options": [
          "It focuses on who holds authority within a system",
          "It focuses specifically on what would need to be replaced or provided independently for exit to succeed",
          "It focuses on the order in which tasks are completed",
          "It focuses on reducing a system's operating costs"
        ],
        "correctAnswer": 1,
        "explanation": "Unlike organizational charts or process flows, dependency maps focus specifically on what would need to be replaced or provided independently for exit to succeed."
      },
      {
        "question": "When identifying the core function of a system, which description best follows the mapping guidance?",
        "options": [
          "Food",
          "Groceries from the store",
          "Daily calories, protein, and micronutrients",
          "Anything the household eats"
        ],
        "correctAnswer": 2,
        "explanation": "Step 1 asks you to be specific: \"food\" is too broad, while \"daily calories, protein, and micronutrients\" is more useful."
      },
      {
        "question": "Which of the following is NOT one of the conditions that marks a point as a critical node?",
        "options": [
          "No alternative path exists",
          "Failure affects multiple downstream functions",
          "Recovery time is long relative to need",
          "The dependency is expensive to maintain"
        ],
        "correctAnswer": 3,
        "explanation": "A critical node is any point where no alternative path exists, failure affects multiple downstream functions, or recovery time is long relative to need. Cost alone is not one of the criteria."
      },
      {
        "question": "A map that ends at \"grocery store\" illustrates which common mapping mistake?",
        "options": [
          "Stopping too early",
          "Ignoring soft dependencies",
          "Assuming stability",
          "Mapping alone"
        ],
        "correctAnswer": 0,
        "explanation": "Stopping too early means you have not traced far enough; you still need to ask where the grocery store gets its food."
      },
      {
        "question": "What is an exit leverage point?",
        "options": [
          "The single most expensive dependency in a household",
          "A point where failure would cascade through the whole system",
          "A dependency that can be addressed to significantly increase exit capability, often reducing multiple dependencies at once",
          "The final layer of a map where fundamental inputs like sunlight and water appear"
        ],
        "correctAnswer": 2,
        "explanation": "Leverage points are places where one intervention could address multiple vulnerabilities, such as solar panels addressing several energy dependencies at once."
      },
      {
        "question": "In the dependency classification exercise, how should Critical / Low Friction dependencies be treated?",
        "options": [
          "Deferred until resources allow",
          "Prioritized, because they are urgent and addressable",
          "Ignored, because they are easy wins with little value",
          "Addressed last, after the most difficult dependencies"
        ],
        "correctAnswer": 1,
        "explanation": "Critical / Low Friction dependencies are urgent and addressable, so they should be prioritized; Non-Critical / High Friction ones can be deferred until resources allow."
      }
    ]
  },
  "a-m2": {
    "moduleId": "a-m2",
    "title": "Module 2 Knowledge Check",
    "description": "Test your understanding of designing parallel systems and building food, energy, and water alternatives.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What are parallel systems in Exodology?",
        "options": [
          "Systems that replace existing ones in a single sudden switch",
          "Systems built alongside existing ones that meet real needs now and can eventually replace them",
          "Backup copies of existing systems kept in storage",
          "Systems that compete with existing ones to make them collapse faster"
        ],
        "correctAnswer": 1,
        "explanation": "Parallel systems operate now, meeting real needs, while the old system continues, which allows gradual transition rather than sudden rupture."
      },
      {
        "question": "According to the design principles, why is community-owned solar interesting?",
        "options": [
          "Because solar is the newest technology available",
          "Because it is the most optimized form of energy production",
          "Because it provides energy without fossil fuels",
          "Because it looks different from conventional infrastructure"
        ],
        "correctAnswer": 2,
        "explanation": "Design starts with function, not form: community-owned solar is interesting not because it is solar but because it provides energy without fossil fuels."
      },
      {
        "question": "Which of these is given as an example of a minimum viable food system?",
        "options": [
          "A CSA with 10 members",
          "A regional food hub serving thousands of households",
          "A fully self-sufficient farm",
          "A detailed plan for a future food cooperative"
        ],
        "correctAnswer": 0,
        "explanation": "Like minimum viable products, you start with the smallest system that actually functions; a CSA with 10 members is a minimum viable food system."
      },
      {
        "question": "Seed libraries, seed exchanges, and mentorship programs belong to which category of food system alternatives?",
        "options": [
          "Distribution alternatives",
          "Preservation and processing",
          "Production alternatives",
          "Seed and knowledge systems"
        ],
        "correctAnswer": 3,
        "explanation": "Seed and knowledge systems, including seed libraries and farming mentorship, preserve the foundational resources of food sovereignty."
      },
      {
        "question": "What does the energy lesson identify as often more cost-effective than adding generation?",
        "options": [
          "Building larger battery banks",
          "Demand reduction through efficiency, passive design, and behavior change",
          "Going completely off-grid",
          "Switching from solar to biomass"
        ],
        "correctAnswer": 1,
        "explanation": "The cheapest watt is the one you don't use; demand reduction is often more cost-effective than generation."
      },
      {
        "question": "Which statement about energy storage matches the lesson?",
        "options": [
          "Storage is rarely a concern once generation is installed",
          "Batteries are best for long-duration storage",
          "Storage is often more challenging than generation and is often the limiting factor",
          "Pumped hydro is suited to individual households"
        ],
        "correctAnswer": 2,
        "explanation": "Batteries serve short-term storage, while thermal mass, ice, and hydrogen cover longer durations and pumped hydro suits community scale; storage is often more challenging than generation."
      },
      {
        "question": "Why does the water lesson recommend multi-barrier treatment approaches?",
        "options": [
          "They provide redundancy, with treatment matched to contamination risks",
          "They eliminate the need for any water source alternatives",
          "They are always the cheapest option",
          "They remove the need to assess contamination risks"
        ],
        "correctAnswer": 0,
        "explanation": "Multi-barrier approaches provide redundancy, and treatment should be matched to contamination risks."
      },
      {
        "question": "Which statement about water source alternatives is consistent with the lesson?",
        "options": [
          "Wells work anywhere regardless of groundwater",
          "Springs are the most universally applicable source",
          "Community scale increases per-household cost",
          "Rainwater is universally applicable but volume-limited"
        ],
        "correctAnswer": 3,
        "explanation": "Rainwater is universally applicable but volume-limited; wells require groundwater and springs need specific geography. Community scale reduces per-household cost."
      }
    ]
  },
  "a-m3": {
    "moduleId": "a-m3",
    "title": "Module 3 Knowledge Check",
    "description": "Test your understanding of transition path design, transition risk, transition teams, and timeline development.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What does mapping the gap involve in transition path design?",
        "options": [
          "Listing only the financial cost of the desired state",
          "Comparing current state to desired state across resources, skills, infrastructure, and relationships",
          "Identifying which existing systems will collapse first",
          "Choosing a single technology to replace the current system"
        ],
        "correctAnswer": 1,
        "explanation": "Mapping the gap means comparing current state to desired state and identifying the resources, skills, infrastructure, and relationships needed."
      },
      {
        "question": "What is the purpose of fallback points in a transition path?",
        "options": [
          "To speed up the transition by skipping intermediate stages",
          "To guarantee that every step is completed on schedule",
          "To provide stable intermediate states and off-ramps where you can pause if the transition stalls",
          "To mark the moment when you leave the old system for good"
        ],
        "correctAnswer": 2,
        "explanation": "Fallback points are stable intermediate states and off-ramps; never burn bridges before alternatives are proven."
      },
      {
        "question": "How should transition risks be prioritized according to the lesson?",
        "options": [
          "By detection time alone",
          "By how recently the risk was identified",
          "By which team member raised the risk",
          "By expected impact, calculated as probability times impact"
        ],
        "correctAnswer": 3,
        "explanation": "For each risk you assess probability, impact, and detection time, then prioritize by expected impact (probability x impact)."
      },
      {
        "question": "\"Will the window stay open?\" describes which type of transition risk?",
        "options": [
          "Timing risk",
          "Technical risk",
          "Financial risk",
          "Social risk"
        ],
        "correctAnswer": 0,
        "explanation": "Technical risk asks whether the alternative will work, financial whether you can afford it, social whether relationships will survive, and timing whether the window will stay open."
      },
      {
        "question": "What does the commitment curve describe?",
        "options": [
          "Teams become more committed the longer they work together",
          "Risk changes as commitment deepens: early stages are easy to reverse, later stages are difficult to reverse",
          "Commitment should be maximized at the start to reduce risk",
          "Financial commitments always decrease over the course of a transition"
        ],
        "correctAnswer": 1,
        "explanation": "Early stages are low commitment and easy to reverse; later stages are high commitment and difficult to reverse, so risk is managed differently at each stage."
      },
      {
        "question": "Which approach to team formation does the lesson recommend?",
        "options": [
          "Recruit as many people as possible before the first project",
          "Ask new members for large commitments to test their dedication",
          "Wait until a crisis to see who is reliable",
          "Start with trusted relationships and vet through small commitments before large ones"
        ],
        "correctAnswer": 3,
        "explanation": "Teams start with trusted relationships, expand through shared work, and vet through small commitments before large ones, building trust before crisis."
      },
      {
        "question": "Why does the lesson say to build networks, not just teams?",
        "options": [
          "Teams connected to other teams multiply capacity and share learning",
          "Networks remove the need for clear decision-making processes",
          "Individual teams always fail without outside leadership",
          "Networks allow teams to skip conflict resolution"
        ],
        "correctAnswer": 0,
        "explanation": "Teams connected to other teams multiply capacity, so the lesson recommends building networks and sharing learning across groups."
      },
      {
        "question": "In transition timeline development, what does identifying the critical path tell you?",
        "options": [
          "Which milestone is the most expensive",
          "Which team member is most important",
          "Which sequence of milestones determines the minimum timeline",
          "Which fallback to use if a delay occurs"
        ],
        "correctAnswer": 2,
        "explanation": "The critical path is the sequence that determines the minimum timeline; buffers and fallbacks are then added where you are vulnerable to delays."
      }
    ]
  },
  "a-m4": {
    "moduleId": "a-m4",
    "title": "Module 4 Knowledge Check",
    "description": "Test your understanding of organizing for collective exit, cooperative structures, and commons governance.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which reason for collective exit is given in the lesson?",
        "options": [
          "Collective exit removes the need for individual skills",
          "Shared infrastructure reduces per-person costs and collective action changes systems individuals can't",
          "Collective exit is always faster than individual exit",
          "Collective exit avoids the need for any legal structures"
        ],
        "correctAnswer": 1,
        "explanation": "Shared infrastructure reduces per-person costs, collective action changes systems individuals can't, and many exits only make sense at community scale."
      },
      {
        "question": "Which organizing principle does the lesson state?",
        "options": [
          "Lead with ideology to attract committed members",
          "Ask for commitment first, then build relationships",
          "Start with shared concerns and move at the speed of trust",
          "Power comes from ideas rather than relationships"
        ],
        "correctAnswer": 2,
        "explanation": "Organizing starts with shared concerns, not ideology, builds relationships before asking for commitment, and moves at the speed of trust."
      },
      {
        "question": "What is the sequence of graduated engagement described in the lesson?",
        "options": [
          "Attend, participate, contribute, lead",
          "Lead, contribute, participate, attend",
          "Contribute, attend, lead, participate",
          "Participate, lead, attend, contribute"
        ],
        "correctAnswer": 0,
        "explanation": "Graduated engagement moves from attend to participate to contribute to lead, without asking for large commitments before small ones."
      },
      {
        "question": "In a worker cooperative, who are the members?",
        "options": [
          "The customers",
          "The residents",
          "The producers",
          "The employees"
        ],
        "correctAnswer": 3,
        "explanation": "Consumer co-op members are customers, worker co-op members are employees, producer co-op members are producers, and housing co-op members are residents."
      },
      {
        "question": "Which of the following is NOT listed as a cooperative principle?",
        "options": [
          "Voluntary membership",
          "Democratic control",
          "Maximizing returns to outside investors",
          "Concern for community"
        ],
        "correctAnswer": 2,
        "explanation": "Cooperative principles include voluntary membership, democratic control, member economic participation, autonomy, education, cooperation among cooperatives, and concern for community."
      },
      {
        "question": "How does the lesson describe commons?",
        "options": [
          "Unregulated resources that anyone can use freely",
          "Resources managed collectively by user communities, with rules made by the users",
          "Resources owned and managed by the state",
          "Private resources rented to communities"
        ],
        "correctAnswer": 1,
        "explanation": "Commons are resources managed collectively by user communities. They are not unregulated; they have rules, but the rules are made by users."
      },
      {
        "question": "Which of these is one of Ostrom's 8 principles for successful commons?",
        "options": [
          "Centralized ownership",
          "Unlimited access",
          "Market pricing",
          "Graduated sanctions"
        ],
        "correctAnswer": 3,
        "explanation": "Ostrom's principles are defined boundaries, fit between rules and conditions, collective choice, monitoring, graduated sanctions, conflict resolution, recognition by external authorities, and nested enterprises."
      },
      {
        "question": "In the food co-op scenario, why is starting a buying club with 5-10 committed people the recommended first step?",
        "options": [
          "It applies graduated engagement and builds proof of concept before expansion",
          "It avoids the need for any governance structure later",
          "It allows founders to decide the structure themselves",
          "It secures funding before any organizing"
        ],
        "correctAnswer": 0,
        "explanation": "Starting a buying club applies graduated engagement and builds proof of concept, whereas a public meeting is too early and a business plan first may produce plans nobody owns."
      }
    ]
  },
  "a-m5": {
    "moduleId": "a-m5",
    "title": "Module 5 Knowledge Check",
    "description": "Test your understanding of personal economic transition, alternative economies, and financial planning for exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which strategy does the lesson identify for reducing exit costs?",
        "options": [
          "Taking on debt to buy equipment quickly",
          "Raising fixed costs to secure stable services",
          "Debt reduction and lowering fixed costs",
          "Concentrating income in a single reliable source"
        ],
        "correctAnswer": 2,
        "explanation": "Debt reduction expands exit options and lower fixed costs reduce income requirements; transferable skills and relationship capital also help."
      },
      {
        "question": "How does the lesson recommend approaching income during transition?",
        "options": [
          "Diversify income, earning some from exited systems and some from alternative systems, and gradually shift the balance",
          "Stop all income from existing systems immediately",
          "Rely only on income from alternative systems from day one",
          "Keep all income in existing systems until the transition is complete"
        ],
        "correctAnswer": 0,
        "explanation": "Multiple income streams reduce dependence on any single source, with some income from exited systems and some from alternatives, gradually shifting the balance."
      },
      {
        "question": "According to expense restructuring, which expense opposes exit?",
        "options": [
          "Tools",
          "Skill development",
          "Equipment for self-provisioning",
          "Debt service"
        ],
        "correctAnswer": 3,
        "explanation": "Expenses like tools and skills support exit, while debt service and high fixed costs oppose it; the goal is to restructure toward exit-supporting expenses."
      },
      {
        "question": "What does the solidarity economy prioritize?",
        "options": [
          "Profit over community",
          "People and planet over profit",
          "Individual savings over mutual aid",
          "Global trade over local exchange"
        ],
        "correctAnswer": 1,
        "explanation": "The solidarity economy prioritizes people and planet over profit and includes cooperatives, community land trusts, local currencies, time banks, and mutual aid."
      },
      {
        "question": "Which description matches the gift economy as presented in the lesson?",
        "options": [
          "Exchanging labor hours directly through a ledger",
          "Creating credit within a community through a trading system",
          "Giving without expectation of direct return, building relationships at neighborhood scale",
          "Producing collectively and sharing freely through open source"
        ],
        "correctAnswer": 2,
        "explanation": "The gift economy is giving without expectation of direct return; it builds relationships and works at neighborhood scale, facilitated by platforms like Buy Nothing groups."
      },
      {
        "question": "In the financial planning exercise, what is the purpose of designing an income bridge?",
        "options": [
          "To plan how income will flow during the transition and from which systems",
          "To eliminate the need for financial reserves",
          "To calculate the total value of current assets",
          "To decide which debts to take on"
        ],
        "correctAnswer": 0,
        "explanation": "The income bridge step asks how income will flow during transition and from which systems, alongside planning transition capital and milestones."
      }
    ]
  },
  "a-m6": {
    "moduleId": "a-m6",
    "title": "Module 6 Knowledge Check",
    "description": "Test your understanding of skill categories, skill assessment, skill development, and community skill networks for exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Why does the lesson describe skills as the ultimate portable asset?",
        "options": [
          "They can be sold for cash at any time",
          "Building them reduces dependence and creates value in alternative systems",
          "They never need to be updated",
          "They replace the need for community"
        ],
        "correctAnswer": 1,
        "explanation": "Skills are the ultimate portable asset because building them reduces dependence and creates value in alternative systems."
      },
      {
        "question": "Repair and preservation fall into which skill category?",
        "options": [
          "Production skills",
          "Social skills",
          "Maintenance skills",
          "Systems skills"
        ],
        "correctAnswer": 2,
        "explanation": "The categories are production (growing, making, building), maintenance (repair, preservation), social (organizing, teaching, mediating), and systems (design, planning, troubleshooting)."
      },
      {
        "question": "Organizing, teaching, and mediating are examples of which skill category?",
        "options": [
          "Social skills",
          "Production skills",
          "Maintenance skills",
          "Systems skills"
        ],
        "correctAnswer": 0,
        "explanation": "Social skills include organizing, teaching, and mediating."
      },
      {
        "question": "In skill assessment, how should learning priorities be set after gap analysis?",
        "options": [
          "By whichever skill is easiest to learn first",
          "By personal interest alone",
          "By whatever skills neighbors already have",
          "By criticality and difficulty"
        ],
        "correctAnswer": 3,
        "explanation": "Skill assessment compares the skills you have to those exit requires, then prioritizes by criticality and difficulty."
      },
      {
        "question": "What does the lesson say about learning pathways?",
        "options": [
          "Formal training is the only reliable pathway",
          "Self-teaching should be avoided",
          "Different skills require different approaches, such as formal training, apprenticeship, self-teaching, or learning-by-doing",
          "All skills should be learned through apprenticeship"
        ],
        "correctAnswer": 2,
        "explanation": "Learning pathways include formal training, apprenticeship, self-teaching, and learning-by-doing, and different skills require different approaches."
      },
      {
        "question": "What is the core idea behind community skill networks?",
        "options": [
          "Each person should master every skill exit requires",
          "No one needs all skills; communities share skills and develop complementary ones",
          "Skills should be kept private to preserve their value",
          "Only experts should teach within a community"
        ],
        "correctAnswer": 1,
        "explanation": "No one needs all skills; community skill networks share skills, develop complementary ones, and encourage people to teach what they know."
      }
    ]
  },
  "a-m7": {
    "moduleId": "a-m7",
    "title": "Module 7 Knowledge Check",
    "description": "Test your understanding of conflict sources, conflict resolution, community resilience, and external challenges in exit communities.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What is the lesson's stance on conflict in exit communities?",
        "options": [
          "Conflict is a sign the community has failed",
          "Conflict should be avoided at all costs",
          "Conflict is normal; unaddressed conflict is dangerous",
          "Conflict only comes from outside pressures"
        ],
        "correctAnswer": 2,
        "explanation": "Conflict is normal; unaddressed conflict is dangerous, so it should be addressed proactively."
      },
      {
        "question": "Which of the following is listed as a source of conflict?",
        "options": [
          "Resource allocation",
          "Excess redundancy",
          "Too many celebrations",
          "Shared documentation"
        ],
        "correctAnswer": 0,
        "explanation": "Sources of conflict include resource allocation, decision-making processes, values differences, personality clashes, burnout and stress, and external pressures."
      },
      {
        "question": "How should a conflict resolution method be chosen?",
        "options": [
          "Always use mediation regardless of the situation",
          "Match the method to the conflict type and severity",
          "Use restorative circles only for external conflicts",
          "Let the most senior member decide"
        ],
        "correctAnswer": 1,
        "explanation": "Methods include direct communication, mediation, group processes, and restorative circles, matched to conflict type and severity."
      },
      {
        "question": "Which practice does the lesson list for building resilience?",
        "options": [
          "Concentrating key skills in one trusted person",
          "Spending down reserves to grow faster",
          "Avoiding rituals to keep focus on work",
          "Redundancy in skills and relationships"
        ],
        "correctAnswer": 3,
        "explanation": "Resilience is built through redundancy in skills and relationships, reserves of resources, wellbeing practices, and rituals and celebrations that build bonds."
      },
      {
        "question": "What role do rituals and celebrations play according to the lesson?",
        "options": [
          "They distract from practical work",
          "They are a source of conflict to be minimized",
          "They build bonds and contribute to resilience",
          "They replace the need for conflict resolution"
        ],
        "correctAnswer": 2,
        "explanation": "Rituals and celebrations that build bonds are listed among the ways to build community resilience."
      },
      {
        "question": "Which of these is identified as an external challenge?",
        "options": [
          "Personality clashes",
          "Values differences",
          "Burnout within the group",
          "Resistance from exited systems"
        ],
        "correctAnswer": 3,
        "explanation": "External challenges include resistance from exited systems, skepticism from outsiders, resource constraints, and setbacks; communities should prepare emotionally and practically."
      }
    ]
  },
  "a-m8": {
    "moduleId": "a-m8",
    "title": "Module 8 Knowledge Check",
    "description": "Test your understanding of why, what, and how to document and share Exodology knowledge.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which reason for documenting is given in the lesson?",
        "options": [
          "To keep knowledge private within one group",
          "To enable others to replicate your work",
          "To replace the need for teaching",
          "To prove that no mistakes were made"
        ],
        "correctAnswer": 1,
        "explanation": "Documentation captures lessons, enables others to replicate, builds collective knowledge, maintains institutional memory, and creates teaching resources."
      },
      {
        "question": "What should documentation include according to the lesson?",
        "options": [
          "Only the successes, so others are encouraged",
          "Only final designs without context",
          "What worked, what didn't, and why, along with the context that shaped decisions",
          "Only cost figures"
        ],
        "correctAnswer": 2,
        "explanation": "You should document what worked, what didn't, and why, plus designs, processes, costs, mistakes, and the context that shaped decisions."
      },
      {
        "question": "How should a documentation method be chosen?",
        "options": [
          "Match the method to the audience and content",
          "Always use video because it is most engaging",
          "Always use written guides because they are most permanent",
          "Use whatever method takes the least time"
        ],
        "correctAnswer": 0,
        "explanation": "Methods include written guides, video, case studies, and templates and tools, matched to audience and content."
      },
      {
        "question": "Why does the lesson say to include mistakes in documentation?",
        "options": [
          "Mistakes are the only useful part of documentation",
          "Including them fulfills legal requirements",
          "Mistakes should be hidden to protect reputations",
          "Lessons learned and mistakes made help others learn from your experience"
        ],
        "correctAnswer": 3,
        "explanation": "Documentation enables others to learn from your experience, which includes lessons learned and mistakes made, not just successes."
      },
      {
        "question": "What timing does the lesson recommend for sharing?",
        "options": [
          "Share only after the project is fully complete",
          "Share early and often",
          "Share once per year",
          "Share only when asked"
        ],
        "correctAnswer": 1,
        "explanation": "The lesson advises sharing through exit movement networks, bioregional hubs, online commons, and peer learning communities, and to share early and often."
      },
      {
        "question": "Which of these is listed as a sharing network?",
        "options": [
          "Private company archives",
          "Personal notebooks kept at home",
          "Bioregional hubs",
          "Closed investor briefings"
        ],
        "correctAnswer": 2,
        "explanation": "Sharing networks include exit movement networks, bioregional hubs, online commons, and peer learning communities."
      }
    ]
  },
  "a-m9": {
    "moduleId": "a-m9",
    "title": "Module 9 Knowledge Check",
    "description": "Test your understanding of how the Applied Exodology toolkit integrates into a sequenced exit plan.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What does the lesson say about the tools in the Applied toolkit?",
        "options": [
          "They should be used separately, one at a time",
          "Only dependency mapping is essential",
          "They work together as an integrated practice",
          "They replace the need for community"
        ],
        "correctAnswer": 2,
        "explanation": "The Applied toolkit, from dependency mapping through documentation, works together as an integrated practice."
      },
      {
        "question": "Which sequence matches the lesson's guidance for sequencing your exit?",
        "options": [
          "Map dependencies, design alternatives, plan transition, build teams, execute, document, share",
          "Build teams, execute, map dependencies, share, document",
          "Design alternatives, execute, map dependencies, plan transition",
          "Execute, document, share, then map dependencies"
        ],
        "correctAnswer": 0,
        "explanation": "The sequence runs map dependencies, design alternatives, plan transition, build teams, execute, document, share, iterating and adapting to context."
      },
      {
        "question": "Which of the following is listed as a common pitfall?",
        "options": [
          "Iterating on your plan",
          "Adapting to your context",
          "Documenting your learning",
          "Isolation without community"
        ],
        "correctAnswer": 3,
        "explanation": "Common pitfalls are moving too fast without foundation, moving too slow and missing windows, isolation without community, action without reflection, and reflection without action."
      },
      {
        "question": "Which pair of pitfalls relates to pace?",
        "options": [
          "Action without reflection and reflection without action",
          "Moving too fast without foundation and moving too slow and missing windows",
          "Isolation without community and action without reflection",
          "Documenting too much and sharing too little"
        ],
        "correctAnswer": 1,
        "explanation": "The pace-related pitfalls are moving too fast without foundation and moving too slow and missing windows."
      },
      {
        "question": "According to the synthesis lesson, what does Strategic Exodology address?",
        "options": [
          "Mapping household dependencies",
          "Building a first parallel food system",
          "Guiding others and shaping larger transitions",
          "Personal financial planning"
        ],
        "correctAnswer": 2,
        "explanation": "Strategic Exodology addresses guiding others and shaping larger transitions, for those who would guide others."
      },
      {
        "question": "In the capstone exit plan, which dependency should the parallel system be designed for?",
        "options": [
          "The least important dependency, to practice safely",
          "Any dependency chosen at random",
          "The dependency with the most expensive alternative",
          "Your most critical/addressable dependency"
        ],
        "correctAnswer": 3,
        "explanation": "The capstone asks you to design a parallel system for your most critical/addressable dependency after mapping your top 3 system dependencies."
      }
    ]
  },
  "f-m2": {
    "moduleId": "f-m2",
    "title": "Module 2 Knowledge Check",
    "description": "Test your understanding of the response spectrum from optimization through reform and exit to collapse, the limits of reform, and why managed exit is preferable to collapse.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which ordering correctly places the four responses on the spectrum from least to most disruptive?",
        "options": [
          "Reform, optimization, collapse, exit",
          "Optimization, reform, exit, collapse",
          "Optimization, exit, reform, collapse",
          "Exit, reform, optimization, collapse"
        ],
        "correctAnswer": 1,
        "explanation": "The response spectrum runs from optimization (least disruptive) through reform and exit to collapse (most disruptive), which is unplanned and endured rather than chosen."
      },
      {
        "question": "According to the lesson's useful test, how can you tell whether a change was reform or exit?",
        "options": [
          "Ask whether the change was approved by the system's leadership",
          "Ask whether the change took more than five years to achieve",
          "Ask whether participants would be fine or in crisis if the original system disappeared tomorrow",
          "Ask whether the change reduced costs for participants"
        ],
        "correctAnswer": 2,
        "explanation": "Reform maintains dependence while exit creates alternatives. If the original system vanished and participants would be in crisis, it was reform; if they would be fine, it was exit."
      },
      {
        "question": "What does the module mean by the exit window?",
        "options": [
          "The period when exit is possible before collapse becomes inevitable",
          "The short period after collapse when people are free to rebuild",
          "The legal deadline for leaving a contract or system",
          "The phase of early success when reforms gain credibility"
        ],
        "correctAnswer": 0,
        "explanation": "The exit window is the period between reform is working and collapse is unavoidable, when exit is still possible. Exodology seeks to enable exit before collapse becomes inevitable."
      },
      {
        "question": "A corporation is legally obligated to maximize shareholder value and so cannot prioritize long-term sustainability when it conflicts with short-term profits. Which type of reform limit is this?",
        "options": [
          "Architectural limit",
          "Cultural limit",
          "Economic limit",
          "Governance limit"
        ],
        "correctAnswer": 3,
        "explanation": "Governance limits occur when decision-making structures prevent reform, as with corporations obligated to maximize shareholder value."
      },
      {
        "question": "In the reform exhaustion pattern, what characterizes the Reform Theater phase?",
        "options": [
          "Initial reforms produce visible improvements and reformers gain credibility",
          "Reforms continue to be announced but produce no meaningful change, so the appearance of progress substitutes for real progress",
          "Beneficiaries of the status quo organize lobbying and discrediting campaigns",
          "Reformers burn out, lose funding, or give up"
        ],
        "correctAnswer": 1,
        "explanation": "In Phase 4, Reform Theater, reforms are still announced but produce no meaningful change; the appearance of progress substitutes for actual progress."
      },
      {
        "question": "A community builds a microgrid while remaining connected to the main grid as backup. How does the matching game classify this?",
        "options": [
          "Optimization, because it improves efficiency within the grid",
          "Reform, because it changes the grid's rules",
          "Collapse, because it signals grid failure",
          "Partial exit, a soft exodus that creates an alternative while keeping some connection"
        ],
        "correctAnswer": 3,
        "explanation": "Building a microgrid while staying connected is classed as exit (partial): it creates alternatives while maintaining some connection, a soft exodus."
      },
      {
        "question": "Which of the following is NOT listed as a way managed exit improves on collapse?",
        "options": [
          "Exit preserves value by transferring resources, knowledge, and relationships to new systems",
          "Exit is chosen rather than endured, and agency matters for recovery",
          "Exit guarantees that the failing system will be saved",
          "Exit can maintain critical functions during transition"
        ],
        "correctAnswer": 2,
        "explanation": "The goal of Exodology is not to save failing systems but to enable dignified departure. Managed exit preserves value, reduces trauma, maintains function, enables choice, and can build better systems."
      },
      {
        "question": "In the declining manufacturing town scenario, why is planning alternative economic development while the factory still operates the recommended response?",
        "options": [
          "Because tax incentives are always illegal",
          "Because when decline is predictable, the exit window is before closure, so remaining resources should build alternatives",
          "Because waiting to see what happens is the lowest-risk option",
          "Because the factory can easily be reformed into a cooperative"
        ],
        "correctAnswer": 1,
        "explanation": "When a system's decline is predictable, the exit window is before closure, not after. Using remaining time and resources to diversify and build alternatives is more strategic than preserving a failing system or waiting and risking collapse."
      }
    ]
  },
  "f-m3": {
    "moduleId": "f-m3",
    "title": "Module 3 Knowledge Check",
    "description": "Test your understanding of the push-pull framework, the exit threshold, and the economic, social, cultural, and environmental drivers of system exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "In the push-pull framework, what is the difference between push factors and pull factors?",
        "options": [
          "Push factors are conditions in the current system that make staying difficult; pull factors are attractions of alternatives that make leaving appealing",
          "Push factors are attractions of alternatives; pull factors are problems in the current system",
          "Push factors are economic; pull factors are social",
          "Push factors affect individuals; pull factors affect whole communities"
        ],
        "correctAnswer": 0,
        "explanation": "Push factors are the away from motivations within the current system, while pull factors are the toward motivations created by attractive alternatives. Both fall into economic, environmental, social, political, and existential categories."
      },
      {
        "question": "According to the module, when does exit occur?",
        "options": [
          "When push factors alone exceed pull factors",
          "When push factors plus pull factors exceed inertia plus barriers",
          "When barriers fall to zero",
          "When people become fully aware that a system is failing"
        ],
        "correctAnswer": 1,
        "explanation": "Exit occurs when (Push Factors) + (Pull Factors) > (Inertia) + (Barriers). This explains why people stay in clearly failing systems: not because they are unaware, but because the threshold has not been crossed."
      },
      {
        "question": "What does the module say happens when exit has push but no real pull?",
        "options": [
          "It becomes the most stable form of transition",
          "It becomes reform rather than exit",
          "It becomes flight rather than transition, leading to precarity",
          "It automatically creates new alternatives"
        ],
        "correctAnswer": 2,
        "explanation": "Pure push, fleeing with nowhere to go, leads to precarity. Strong pull factors make exit destinations viable; without pull, exit becomes flight rather than transition."
      },
      {
        "question": "In the gig economy case study, what creates exit pressure?",
        "options": [
          "The flexibility and immediate income gig work offers",
          "The availability of cooperative platforms",
          "Government regulation of gig platforms",
          "The gap between promised flexibility and experienced precarity"
        ],
        "correctAnswer": 3,
        "explanation": "The reality gap between promised flexibility and experienced precarity creates exit pressure. The pattern of initial attraction, reality gap, exit pressure, and barriers recurs across economic systems."
      },
      {
        "question": "When evaluating an economic exit opportunity, what does the scalability question ask?",
        "options": [
          "Whether the alternative can grow its revenue every year",
          "Whether it can work for many people or only for a privileged few with resources to exit",
          "Whether the alternative can be exported to other countries",
          "Whether it can replace the entire global economy"
        ],
        "correctAnswer": 1,
        "explanation": "Scalability asks whether an alternative can work for many people, or only for a privileged few. It sits alongside viability, transition path, risk distribution, and sustainability in an honest assessment."
      },
      {
        "question": "What does the module say about social and cultural pull factors compared with material conditions?",
        "options": [
          "They often matter more, and people accept material sacrifice for social and cultural fulfillment",
          "They only matter once material needs are fully met",
          "They are weaker than economic pull in almost every case",
          "They are illusory and should be discounted when planning exit"
        ],
        "correctAnswer": 0,
        "explanation": "Social and cultural pull factors such as authentic belonging and shared purpose often matter more than material conditions, and people accept material sacrifice for social and cultural fulfillment."
      },
      {
        "question": "Why does the module describe environmental exit as non-negotiable and irreversible?",
        "options": [
          "Because environmental laws forbid people from returning to degraded places",
          "Because environmental problems are always solved quickly by reform",
          "Because environmental limits are physical, and degraded ecosystems may not recover on human timescales, so exit windows can close permanently",
          "Because environmental exit only affects wealthy populations"
        ],
        "correctAnswer": 2,
        "explanation": "Unlike economic or social factors, environmental limits are physical and collapse cannot be reformed away. Degraded ecosystems may not recover on human timescales, so exit windows can close permanently."
      },
      {
        "question": "In the classification exercise, how should the statement The cooperative offers profit-sharing to all workers be categorized?",
        "options": [
          "Economic Push",
          "Social Pull",
          "Social Push",
          "Economic Pull"
        ],
        "correctAnswer": 3,
        "explanation": "Profit-sharing is a financial attraction of an alternative, so it is an Economic Pull factor, matching ownership and equity as economic pull."
      }
    ]
  },
  "f-m4": {
    "moduleId": "f-m4",
    "title": "Module 4 Knowledge Check",
    "description": "Test your understanding of historical and modern exoduses, including the Great Migration, agricultural and energy transitions, and contemporary exit movements.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Why does the module treat exit, rather than reform, as the appropriate response to the Jim Crow South?",
        "options": [
          "Because the system was fundamentally sound but underperforming",
          "Because reform had never been attempted",
          "Because it was not merely a flawed system needing reform but a system designed to exploit",
          "Because northern cities offered complete freedom from discrimination"
        ],
        "correctAnswer": 2,
        "explanation": "The Jim Crow South was a comprehensive system of oppression across economic, political, social, and cultural dimensions. It was designed to exploit, so exit rather than reform was the appropriate response."
      },
      {
        "question": "Which exit pattern from the Great Migration describes early migrants establishing footholds and then helping family and community members follow?",
        "options": [
          "Chain migration",
          "Staged exit",
          "Seasonal to permanent migration",
          "Destination choice"
        ],
        "correctAnswer": 0,
        "explanation": "In chain migration, early migrants established footholds and then helped family and community members follow, with information and resources flowing through networks."
      },
      {
        "question": "On the module's timeline of historical exits, which of these events came earliest?",
        "options": [
          "The British wood-to-coal transition getting underway",
          "The Great Migration beginning",
          "The English Enclosure Movement beginning",
          "Oil beginning to displace coal in transportation"
        ],
        "correctAnswer": 2,
        "explanation": "The timeline places the English Enclosure Movement at about 1450 CE, before the wood-to-coal transition (about 1600), the Great Migration (1916), and oil displacing coal in transportation (about 1920)."
      },
      {
        "question": "How does the Enclosure Movement differ from the other agricultural transitions in the module?",
        "options": [
          "It was a gradual, emergent shift spanning millennia",
          "It was forced exit imposed through legal dispossession rather than chosen",
          "It was driven mainly by pull factors such as storable surplus",
          "It strengthened traditional commons communities"
        ],
        "correctAnswer": 1,
        "explanation": "Unlike voluntary exit, enclosure imposed system departure through legal dispossession of commons rights. The lesson is that exit can be imposed, those forced to exit often fare worse, and power determines who exits."
      },
      {
        "question": "What key lesson does the module draw from the coal-to-oil transition?",
        "options": [
          "New energy systems don't just replace old ones; they create entirely new forms of life",
          "Energy transitions are usually centrally planned and quick",
          "Old and new energy systems never overlap",
          "Energy transitions affect the economy but not daily life or geography"
        ],
        "correctAnswer": 0,
        "explanation": "Oil enabled automobiles, aviation, plastics, suburban sprawl, and oil-driven geopolitics. The key lesson is that new energy systems create entirely new forms of life rather than just replacing old ones."
      },
      {
        "question": "Which pattern across energy transitions explains why automobiles created suburbs even though no one designed them to?",
        "options": [
          "Path dependence",
          "Coexistence",
          "Political economy",
          "Emergent effects"
        ],
        "correctAnswer": 3,
        "explanation": "Emergent effects mean transitions produce outcomes no one planned. Automobiles created suburbs not by design but by emergence."
      },
      {
        "question": "What makes the current fossil-to-renewable transition especially challenging according to the module?",
        "options": [
          "Renewable costs are rising rapidly",
          "It must happen in decades rather than centuries, against incumbent resistance and infrastructure lock-in",
          "There are no push factors driving it",
          "Previous energy transitions were faster, so this one has no precedent for speed"
        ],
        "correctAnswer": 1,
        "explanation": "Each transition has been faster than the last, and the current one must be the fastest yet. Its challenges include the speed needed, incumbent resistance, infrastructure lock-in, uneven distribution of costs and benefits, and scale."
      },
      {
        "question": "Which of the following does the module list as an energy exit movement that focuses on using less energy rather than just changing sources?",
        "options": [
          "Energy descent",
          "Community solar",
          "Platform cooperativism",
          "Food sovereignty"
        ],
        "correctAnswer": 0,
        "explanation": "Energy descent is the voluntary reduction of energy use rather than just changing sources. Energy exit ranges from technical solutions to lifestyle redesign."
      }
    ]
  },
  "f-m5": {
    "moduleId": "f-m5",
    "title": "Module 5 Knowledge Check",
    "description": "Test your understanding of industrial agriculture's dependencies, food system failure modes, food sovereignty, and mapping your own food dependencies.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Why does the module say industrial agriculture depends on fossil fuels at every stage?",
        "options": [
          "Because only large farms can afford fuel",
          "Because nitrogen fertilizer comes from natural gas, pesticides are petroleum-derived, machinery burns diesel, and food travels long distances",
          "Because fossil fuels are used mainly for packaging",
          "Because seed saving requires fossil energy"
        ],
        "correctAnswer": 1,
        "explanation": "Nitrogen fertilizer is synthesized from natural gas, pesticides are petroleum-derived, machinery burns diesel, and food travels 1,500 miles on average, so when oil becomes scarce or expensive the whole system is stressed."
      },
      {
        "question": "How does the seed and genetic dependency create fragility in industrial agriculture?",
        "options": [
          "Hybrid seeds breed true, so farmers save too much seed",
          "Genetic diversity has increased so much that yields are unpredictable",
          "Farmers must buy hybrid seed annually, patents prohibit seed saving, and diversity has collapsed as varieties focus on yield over resilience",
          "Seed is controlled by thousands of small local suppliers"
        ],
        "correctAnswer": 2,
        "explanation": "Hybrid seeds do not breed true, GMO patents prohibit seed saving, genetic diversity has collapsed in favor of yield, and a handful of corporations control most commercial seed."
      },
      {
        "question": "Why does the module describe soil and water depletion as a slow-motion exit crisis?",
        "options": [
          "Because industrial agriculture is consuming the very resource base it depends on",
          "Because farmers are slowly moving to cities",
          "Because soil and water problems are easily reversed",
          "Because water use in agriculture is falling"
        ],
        "correctAnswer": 0,
        "explanation": "Aquifer depletion, soil degradation, erosion, and salinization are mining the resource base, so industrial agriculture is consuming the foundations it depends on."
      },
      {
        "question": "What does just-in-time delivery mean for food supply chain vulnerability?",
        "options": [
          "Grocery stores hold days of inventory, not weeks, so disruptions are felt quickly",
          "Stores hold weeks of reserve inventory, buffering any disruption",
          "Food travels shorter distances than before",
          "Problems in one region stay contained to that region"
        ],
        "correctAnswer": 0,
        "explanation": "Just-in-time delivery means stores hold only days of inventory. Combined with global sourcing and concentration, disruption anywhere can affect millions."
      },
      {
        "question": "Which statement about food system failure modes matches the module?",
        "options": [
          "Ecological failures are fast but superficial",
          "Supply disruptions are the most dangerous because intervention points are obvious",
          "Economic failures usually happen only after physical failures",
          "Economic failures often precede physical failures, while ecological failures are slow but more fundamental"
        ],
        "correctAnswer": 3,
        "explanation": "Economic failure modes such as price volatility and farm debt often precede physical failure, and ecological failures operate on longer timescales but are more fundamental."
      },
      {
        "question": "Why are cascade failures described as the most dangerous food system failure mode?",
        "options": [
          "Because they only affect a single farm",
          "Because intervention points are unclear",
          "Because they happen only once a century",
          "Because they are caused solely by weather"
        ],
        "correctAnswer": 1,
        "explanation": "Cascade failures across the food-energy, financial-physical, and ecological-economic nexuses and across regions are the most dangerous because intervention points are unclear."
      },
      {
        "question": "How does food sovereignty differ from food security?",
        "options": [
          "Food security includes control over land and seeds; food sovereignty is only about having enough food",
          "They are two names for the same idea",
          "Food security is about having enough food; food sovereignty is about controlling how food is produced, distributed, and consumed",
          "Food sovereignty focuses on global supply chains rather than local production"
        ],
        "correctAnswer": 2,
        "explanation": "Food sovereignty goes beyond food security, which means having enough food, to the right of peoples to define their own food systems, including control over land, water, and seeds."
      },
      {
        "question": "In the food system mapping exercise, what is the purpose of tracing food items backward and rating your food autonomy?",
        "options": [
          "To calculate the calories in your diet",
          "To identify your dependencies and what would break first, then find one realistic exit step",
          "To choose which grocery store has the lowest prices",
          "To prove that supply chains never fail"
        ],
        "correctAnswer": 1,
        "explanation": "The exercise maps your food dependencies, asks how well you could meet food needs if supply chains failed for two weeks, and ends by identifying one realistic step to increase food autonomy."
      }
    ]
  },
  "f-m6": {
    "moduleId": "f-m6",
    "title": "Module 6 Knowledge Check",
    "description": "Test your understanding of water system dependencies, the Flint, Cape Town, and Jackson failures, water commons, and household and community water alternatives.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What does the module identify as the core trade-off of centralized water infrastructure?",
        "options": [
          "It creates both efficiency and vulnerability",
          "It is cheap but always unsafe",
          "It removes all dependence on energy",
          "It eliminates the need for governance"
        ],
        "correctAnswer": 0,
        "explanation": "Centralized infrastructure creates efficiency and vulnerability, relying on limited sources, treatment with power and chemicals, aging pipes, pumps, and centralized control."
      },
      {
        "question": "What is the energy-water nexus described in the module?",
        "options": [
          "Water systems generate most of the country's electricity",
          "Pumping and treating water uses electricity, power plants need water for cooling, and climate change stresses both at once",
          "Energy and water systems are fully independent of each other",
          "Water utilities are owned by energy companies"
        ],
        "correctAnswer": 1,
        "explanation": "Pumping and treating water uses 2 to 3 percent of US electricity, power plants need water for cooling, and climate change stresses both systems simultaneously."
      },
      {
        "question": "Why does climate change threaten water systems according to the module?",
        "options": [
          "Because water systems were designed for historical precipitation that is now shifting",
          "Because aquifers recharge too quickly",
          "Because snowpack is increasing beyond storage capacity",
          "Because water treatment no longer needs chemicals"
        ],
        "correctAnswer": 0,
        "explanation": "Systems were designed for historical precipitation, but climate change is shifting patterns, snowpack is declining, and aquifers recharge slowly."
      },
      {
        "question": "In the Flint case, what combination of factors produced the water crisis?",
        "options": [
          "Multi-year drought and rising demand",
          "Flooding that disabled the treatment plant",
          "A cost-saving source switch that corroded lead pipes, combining infrastructure failure, governance failure, and environmental racism",
          "Overpumping of an aquifer requiring deeper wells"
        ],
        "correctAnswer": 2,
        "explanation": "Flint switched sources to save money, the new source corroded lead pipes, and infrastructure failure combined with governance failure and environmental racism. Residents still do not trust tap water."
      },
      {
        "question": "What does the Cape Town Day Zero case reveal about environmental justice?",
        "options": [
          "Conservation failed to reduce consumption at all",
          "Wealthy residents installed private storage while poor residents faced cutoffs",
          "All residents were affected equally",
          "The crisis was caused by a lead contamination event"
        ],
        "correctAnswer": 1,
        "explanation": "During Cape Town's drought, aggressive conservation cut consumption 50 percent, but wealthy residents installed private storage while the poor faced cutoffs, showing that environmental justice shapes who experiences water crises."
      },
      {
        "question": "What role does the module assign to climate change across the water failure case studies?",
        "options": [
          "The sole cause of every failure",
          "An irrelevant background factor",
          "A factor only in wealthy countries",
          "A threat multiplier that compounds infrastructure and governance weaknesses"
        ],
        "correctAnswer": 3,
        "explanation": "Water failures combine infrastructure, governance, and environmental factors, and climate change acts as a threat multiplier, as in Jackson where flooding compounded decades of underinvestment."
      },
      {
        "question": "How does the module define water as commons?",
        "options": [
          "Water managed collectively by communities rather than by states or markets",
          "Water sold by private utilities at market prices",
          "Water owned and managed only by national governments",
          "Water each household collects and keeps entirely for itself"
        ],
        "correctAnswer": 0,
        "explanation": "Water commons are resources managed collectively by communities rather than states or markets, with community governance, user-developed rules, need-based access, and sustainability as a core value."
      },
      {
        "question": "In the matching game, an aquifer requiring deeper and deeper wells is matched to which underlying cause?",
        "options": [
          "Infrastructure age plus governance failure",
          "Climate drought plus demand growth",
          "Infrastructure fragility plus climate events",
          "Overpumping plus slow recharge"
        ],
        "correctAnswer": 3,
        "explanation": "An aquifer requiring deeper wells reflects overpumping combined with slow recharge."
      }
    ]
  },
  "f-m7": {
    "moduleId": "f-m7",
    "title": "Module 7 Knowledge Check",
    "description": "Test your understanding of grid dependencies and vulnerabilities, energy system failure patterns, microgrids, and planning an energy exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Why does the module call the electrical grid perhaps the most critical infrastructure of modern life?",
        "options": [
          "Because it is the newest infrastructure system",
          "Because nearly everything depends on it, including water, food refrigeration, communication, transportation, healthcare, and finance",
          "Because it never fails",
          "Because it operates independently of fuel supplies"
        ],
        "correctAnswer": 1,
        "explanation": "Water systems, food refrigeration, communication, transportation, healthcare, finance, and heating and cooling all depend on the grid. Modern life is electrified life."
      },
      {
        "question": "How does a grid cascade failure unfold according to the module?",
        "options": [
          "An initial failure causes load redistribution, which causes overload and more failures, leading to blackout",
          "Each failure is isolated and cannot spread",
          "Failures always begin at the distribution level and stay there",
          "Operators shut down the grid deliberately before any failure"
        ],
        "correctAnswer": 0,
        "explanation": "An initial failure redistributes load, which overloads other parts and causes more failures, ending in blackout. Recovery is complex because black start capability is limited."
      },
      {
        "question": "The 2003 Northeast blackout began with a software bug that affected 55 million people. Which module idea does it best illustrate?",
        "options": [
          "Microgrids eliminate the need for transmission",
          "Weather is the only real grid threat",
          "Cascade dynamics mean small failures become large",
          "Distribution failures are always caused by tree contact"
        ],
        "correctAnswer": 2,
        "explanation": "The Northeast 2003 failure shows cascade dynamics: a small software bug cascaded until 55 million people were affected."
      },
      {
        "question": "Which of the following is a systemic energy failure rather than a generation, transmission, or distribution failure?",
        "options": [
          "Tree contact with local lines",
          "Line damage from weather",
          "Fuel supply disruption at a power plant",
          "Deferred maintenance caused by investment failures"
        ],
        "correctAnswer": 3,
        "explanation": "Systemic failures include market failures, regulatory failures, and investment failures where maintenance is deferred. These systemic issues enable physical failures."
      },
      {
        "question": "According to the module, why does concentration make generation failures especially dangerous?",
        "options": [
          "Concentration makes single failures catastrophic",
          "Concentration spreads risk across many small plants",
          "Concentration only affects distribution lines",
          "Concentration guarantees backup capacity"
        ],
        "correctAnswer": 0,
        "explanation": "Generation can fail from fuel supply disruption, equipment failure, weather, or demand exceeding capacity, and concentration makes single failures catastrophic."
      },
      {
        "question": "What is a microgrid as defined in the module?",
        "options": [
          "A fully off-grid system that can never connect to the main grid",
          "A local energy system that can operate independently or connected to the main grid",
          "A national transmission network",
          "A single solar panel on one house"
        ],
        "correctAnswer": 1,
        "explanation": "A microgrid is a local energy system, with generation, storage, distribution, and controls, that can operate independently or connected to the main grid, a middle path between grid dependence and off-grid living."
      },
      {
        "question": "Which of these is listed as a challenge facing microgrids?",
        "options": [
          "Inability to integrate renewables",
          "Increased transmission losses",
          "Regulatory barriers and utility resistance",
          "Lack of any resilience benefit during outages"
        ],
        "correctAnswer": 2,
        "explanation": "Microgrid challenges include high upfront costs, technical complexity, regulatory barriers, utility resistance, and intermittency management, while benefits include islanding, renewable integration, and reduced transmission losses."
      },
      {
        "question": "In the energy exit planning exercise, why do you identify critical loads before designing a hybrid system?",
        "options": [
          "To separate uses that must continue in an outage from those that are deferrable",
          "To decide which renewable resource to ban",
          "To eliminate the grid connection immediately",
          "To calculate the community's tax base"
        ],
        "correctAnswer": 0,
        "explanation": "The exercise asks which uses are critical and must continue during an outage and which are deferrable, before evaluating local resources, designing a hybrid system combining grid, local generation, and storage, and planning a transition path."
      }
    ]
  },
  "f-m8": {
    "moduleId": "f-m8",
    "title": "Module 8 Knowledge Check",
    "description": "Test your understanding of the ethics of exit, including staying versus leaving, the lifeboat problem, residual duty, harmful exit patterns, and your own exit ethics.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What is the module's position on whether staying in or leaving a system is the ethical choice?",
        "options": [
          "Staying is always more ethical because of solidarity",
          "Leaving is always more ethical because participation legitimizes harm",
          "Neither is automatically ethical; both have ethical dimensions",
          "Ethics are irrelevant to exit decisions"
        ],
        "correctAnswer": 2,
        "explanation": "There are arguments for staying, such as solidarity with those who cannot leave, and for leaving, such as not legitimizing harmful systems, but neither is automatically ethical."
      },
      {
        "question": "When is the lifeboat critique of exit movements less valid?",
        "options": [
          "When exit requires resources most people lack",
          "When exiters create replicable models and maintain solidarity",
          "When alternatives exclude the vulnerable",
          "When exiters extract value on the way out"
        ],
        "correctAnswer": 1,
        "explanation": "The lifeboat critique, that exit serves the privileged, is valid when exit requires scarce resources, extracts value, or excludes the vulnerable. It is less valid when exiters create replicable models and maintain solidarity."
      },
      {
        "question": "What is residual duty?",
        "options": [
          "Ongoing obligations to those who remain in systems we have left",
          "Debts owed to the system before you can legally leave",
          "The duty to stay until a system collapses",
          "An obligation to recruit everyone to exit"
        ],
        "correctAnswer": 0,
        "explanation": "Residual duty is the set of ongoing obligations to those who remain, such as sharing knowledge, creating on-ramps, avoiding harmful extraction, and advocacy for better conditions."
      },
      {
        "question": "Which of the following is listed as a limit of residual duty?",
        "options": [
          "You must stay until everyone can leave",
          "Those remaining by choice have the strongest claim on you",
          "Rules alone are enough, so judgment is unnecessary",
          "You cannot save everyone, and your own wellbeing has value"
        ],
        "correctAnswer": 3,
        "explanation": "Limits of residual duty include that you cannot save everyone, your own wellbeing has value, those remaining by choice bear less claim, infinite obligation is paralyzing, and judgment is required, not just rules."
      },
      {
        "question": "Brain drain and capital flight are examples of which harmful exit pattern?",
        "options": [
          "Exit as escapism",
          "Exit as abandonment",
          "Exit as extraction",
          "Exit as obligation"
        ],
        "correctAnswer": 2,
        "explanation": "Exit as extraction means taking resources, talent, or capital on the way out, as with brain drain, capital flight, and knowledge hoarding."
      },
      {
        "question": "Building an isolated utopia rather than addressing root causes is an example of which harmful exit pattern?",
        "options": [
          "Exit as escapism",
          "Exit as extraction",
          "Exit as residual duty",
          "Exit as reform"
        ],
        "correctAnswer": 0,
        "explanation": "Exit as escapism means seeking personal comfort while ignoring structural problems, building isolated utopias, or avoiding reform when reform is possible."
      },
      {
        "question": "In the skilled professional scenario, a rural doctor wants to leave and the nearest replacement is 100 miles away. Which response does the module present as balancing autonomy with residual duty?",
        "options": [
          "Leave immediately, because your life is your own",
          "Stay forever, because your community needs you",
          "Leave loudly and document problems publicly",
          "Plan a transition by training replacements, then leave"
        ],
        "correctAnswer": 3,
        "explanation": "Leaving immediately risks abandonment and staying forever is not required and may cause burnout. Planning a transition by training replacements balances autonomy with residual duty."
      },
      {
        "question": "The reflection lesson asks how you would determine whether an exit is escapism or legitimate transition. Which test from the module helps answer this?",
        "options": [
          "Is the exit motivated by avoidance rather than building?",
          "Is the destination more expensive than the origin?",
          "Will the exit be completed within a year?",
          "Has the system's leadership approved the exit?"
        ],
        "correctAnswer": 0,
        "explanation": "Tests for harmful exit include asking whether it extracts value, accelerates harm to the vulnerable, replicates exclusions, or is motivated by avoidance rather than building. Your answers to these questions begin a personal exit ethics."
      }
    ]
  },
  "f-m9": {
    "moduleId": "f-m9",
    "title": "Module 9 Knowledge Check",
    "description": "Test your understanding of the psychological, social, cultural, and economic barriers that keep people in failing systems, and how to assess your own barriers.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Someone keeps working in a failing system mainly because of the years they have already invested in it. Which cognitive bias is this?",
        "options": [
          "Normalcy bias",
          "Sunk cost fallacy",
          "Loss aversion",
          "Status quo bias"
        ],
        "correctAnswer": 1,
        "explanation": "The sunk cost fallacy is continuing because of past investment. Status quo bias, loss aversion, and normalcy bias are other cognitive biases that favor staying."
      },
      {
        "question": "Which bias is described as assuming current conditions will continue?",
        "options": [
          "Normalcy bias",
          "Sunk cost fallacy",
          "Loss aversion",
          "Learned helplessness"
        ],
        "correctAnswer": 0,
        "explanation": "Normalcy bias is the assumption that current conditions will continue, one of the cognitive biases that favor staying in current systems."
      },
      {
        "question": "Why does identity lock-in make exit psychologically difficult?",
        "options": [
          "Because exit is illegal for people with strong identities",
          "Because identity has no connection to the systems people belong to",
          "Because when identity is tied to a system, exit requires becoming someone new",
          "Because identity lock-in only affects people with debt"
        ],
        "correctAnswer": 2,
        "explanation": "When identity is tied to a system, such as I am a coal miner, exit threatens that identity and requires becoming someone new, which is psychologically challenging."
      },
      {
        "question": "What is learned helplessness in the context of exit barriers?",
        "options": [
          "A belief, created by repeated inability to affect change, that change is impossible, so people stop trying even when opportunities exist",
          "A preference for the current state over any alternative",
          "Fear of the unknown exceeding fear of known problems",
          "A lack of information about alternatives"
        ],
        "correctAnswer": 0,
        "explanation": "Repeated inability to affect change creates a belief that change is impossible, so people stop trying even when opportunities exist. Systems can create helplessness intentionally."
      },
      {
        "question": "How does information control act as a social barrier to exit?",
        "options": [
          "It makes alternatives easier to find",
          "Systems control information so exit options may be unknown, understated, or actively discredited, and this asymmetry favors staying",
          "It ensures exiters face no stigma",
          "It only affects people who have already exited"
        ],
        "correctAnswer": 1,
        "explanation": "Systems control information about alternatives, so exit options may be unknown, understated, or actively discredited. Information asymmetry favors staying."
      },
      {
        "question": "Health insurance tied to employment and pensions requiring years of service illustrate which economic lock-in mechanism?",
        "options": [
          "Credential requirements",
          "Debt and obligation",
          "Stigma",
          "Benefits tied to participation"
        ],
        "correctAnswer": 3,
        "explanation": "When health insurance, pensions, and social security depend on continued participation, benefits become chains that keep people in the system."
      },
      {
        "question": "What does the module say about many exit costs, such as penalties for early contract withdrawal?",
        "options": [
          "They are often intentionally created to make exit expensive",
          "They are always accidental side effects",
          "They only apply to social exits",
          "They disappear once a person has decided to leave"
        ],
        "correctAnswer": 0,
        "explanation": "Economic structures often create intentional exit barriers. Penalties, relocation costs, and transition periods without income mean exit is made expensive."
      },
      {
        "question": "In the barrier assessment tool, what is the final step after rating psychological, social, and economic barriers?",
        "options": [
          "Exiting the system immediately",
          "Identifying the single most significant barrier and what it would take to address it",
          "Choosing a new system to join",
          "Averaging all scores to get a pass or fail result"
        ],
        "correctAnswer": 1,
        "explanation": "After rating barriers across the three categories, the assessment asks you to identify which single barrier is most significant and what it would take to address it."
      }
    ]
  },
  "f-m10": {
    "moduleId": "f-m10",
    "title": "Module 10 Knowledge Check",
    "description": "Test your understanding of when not to exit, including premature exit, harmful exit patterns, strategic staying, and deciding between exit and stay.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of these is a sign that reform is still viable and exit may be premature?",
        "options": [
          "Structural barriers have fully calcified",
          "Leadership actively blocks all change",
          "Genuine decision-making power and resources for change are available",
          "There is no time left to implement change"
        ],
        "correctAnswer": 2,
        "explanation": "Signs reform is still viable include genuine decision-making power, resources for change, leadership open to reform, structural barriers that have not calcified, and time to implement change."
      },
      {
        "question": "What does the module mean when it says alternatives are not ready?",
        "options": [
          "The exit destination does not yet exist or function, the transition path is unclear, or resources and knowledge are insufficient",
          "The current system has improved enough to keep",
          "Other people have not yet decided to leave",
          "The alternative is more expensive than the current system"
        ],
        "correctAnswer": 0,
        "explanation": "Alternatives are not ready when the exit destination does not exist or function, the transition path is unclear, transition resources are insufficient, or knowledge gaps remain."
      },
      {
        "question": "What does the module say about timing and premature exit?",
        "options": [
          "An exit that is premature now will always be premature",
          "The same exit can be premature now but appropriate later, so patience is sometimes strategic",
          "Timing is irrelevant if the push factors are strong",
          "Exit should always happen as early as possible"
        ],
        "correctAnswer": 1,
        "explanation": "Windows open and close, so the same exit can be premature now but appropriate later. Patience is sometimes strategic."
      },
      {
        "question": "Leaving in a panic without a destination, trading known problems for unknown worse ones, is which harmful exit pattern?",
        "options": [
          "Extraction exit",
          "Escapist exit",
          "Destabilizing exit",
          "Reactive flight"
        ],
        "correctAnswer": 3,
        "explanation": "Reactive flight is exiting in panic rather than planning and leaving without a destination, which leads to worse situations."
      },
      {
        "question": "Which harmful exit pattern involves pulling out key supports without transition so the system collapses on those remaining?",
        "options": [
          "Destabilizing exit",
          "Reactive flight",
          "Escapist exit",
          "Strategic staying"
        ],
        "correctAnswer": 0,
        "explanation": "Destabilizing exit means exiting in ways that cause the system to collapse on those remaining, which harms the vulnerable."
      },
      {
        "question": "How does the module distinguish strategic staying from simply remaining in a system?",
        "options": [
          "Strategic staying means staying forever no matter what",
          "Strategic staying means staying with intention rather than inertia, setting exit conditions, building power, and creating exit options while inside",
          "Strategic staying means avoiding any contact with alternatives",
          "There is no difference between the two"
        ],
        "correctAnswer": 1,
        "explanation": "Strategic staying is staying with intention, not inertia: set conditions for exit, build power while inside, and create exit options even while staying."
      },
      {
        "question": "According to the module, why might people with exit capability choose to stay?",
        "options": [
          "To avoid the stigma of being an exiter",
          "To protect and advocate for those who cannot leave, since solidarity means sharing conditions, not just sympathy",
          "Because exit capability is lost once used",
          "Because staying is always more ethical than leaving"
        ],
        "correctAnswer": 1,
        "explanation": "Sometimes those with exit capability should stay to advocate for those without. Solidarity means sharing conditions, not just sympathy."
      },
      {
        "question": "In the reformable university scenario, why is setting a timeline to stay two more years and then reassess presented as a strong option?",
        "options": [
          "It guarantees the reforms will succeed",
          "It avoids any further involvement in campaigns",
          "It combines strategic patience with a preserved exit option, while reform still seems possible",
          "It commits you to staying at the university permanently"
        ],
        "correctAnswer": 2,
        "explanation": "Because campaigns have achieved some changes and reform seems possible, a timeline offers strategic patience while preserving the exit option, consistent with setting benchmarks and knowing when to stop."
      }
    ]
  },
  "f-m11": {
    "moduleId": "f-m11",
    "title": "Module 11 Knowledge Check",
    "description": "Test your ability to integrate the Foundations concepts, from the response spectrum and push-pull dynamics to system analysis, exit ethics, and barriers, into one coherent framework.",
    "passingScore": 70,
    "questions": [
      {
        "question": "How does the synthesis lesson summarize what Exodology studies?",
        "options": [
          "How to reform every system from within",
          "Ethical exit from failing systems",
          "How to predict the timing of collapse",
          "How to maximize economic growth sustainably"
        ],
        "correctAnswer": 1,
        "explanation": "Exodology studies ethical exit from failing systems, guided by the Trinity of Literacy, Application, and Stewardship."
      },
      {
        "question": "What are the three pillars of the Exodology Trinity?",
        "options": [
          "Reform, Exit, and Collapse",
          "Push, Pull, and Threshold",
          "Literacy, Application, and Stewardship",
          "Food, Water, and Energy"
        ],
        "correctAnswer": 2,
        "explanation": "The Exodology Trinity is Literacy, Application, and Stewardship, the three pillars that guide practice."
      },
      {
        "question": "Which formula from the Foundations path describes the exit threshold?",
        "options": [
          "Exit occurs when push + pull > inertia + barriers",
          "Exit occurs when barriers > push + pull",
          "Exit occurs when push > pull",
          "Exit occurs when inertia + pull > push + barriers"
        ],
        "correctAnswer": 0,
        "explanation": "The exit threshold is reached when push plus pull exceeds inertia plus barriers. Push factors drive people out and pull factors attract them to alternatives."
      },
      {
        "question": "What does the synthesis lesson say system analysis of food, water, and energy reveals?",
        "options": [
          "That these systems have no meaningful alternatives",
          "That these systems are fully independent of one another",
          "That failures in these systems cannot be anticipated",
          "Deep dependencies that create vulnerability, failure modes that help anticipate crises, and alternatives across these domains"
        ],
        "correctAnswer": 3,
        "explanation": "Food, water, and energy systems have deep dependencies that create vulnerability. Understanding failure modes helps anticipate crises, and alternatives exist across these domains."
      },
      {
        "question": "According to the Foundations flashcards, what distinguishes food sovereignty?",
        "options": [
          "Having enough calories available in stores",
          "Community control over food systems, not just access to food",
          "Government ownership of all farmland",
          "Exporting surplus food to other regions"
        ],
        "correctAnswer": 1,
        "explanation": "Food sovereignty is community control over food systems, not just access to food."
      },
      {
        "question": "Which flashcard definition correctly describes exit capability?",
        "options": [
          "The structural capacity to leave a system when needed",
          "Obligations to those who remain after you exit",
          "Cognitive biases and fears that prevent exit",
          "Unplanned, chaotic disintegration of a system"
        ],
        "correctAnswer": 0,
        "explanation": "Exit capability is the structural capacity to leave a system when needed. The other options define residual duty, psychological lock-in, and system collapse."
      },
      {
        "question": "In the coastal community case study, which question belongs to the step of applying ethical frameworks?",
        "options": [
          "What renewable resources are available locally?",
          "Is reform possible here?",
          "Who is most vulnerable, what residual duties exist, and what would be harmful exit?",
          "What systems does the community depend on?"
        ],
        "correctAnswer": 2,
        "explanation": "Applying ethical frameworks asks who is most vulnerable, what residual duties exist, and what would be harmful exit, after analyzing push and pull, mapping dependencies, and evaluating response options."
      },
      {
        "question": "According to the final reflection, what have you learned in Exodological Literacy, and what comes next in Applied Exodology?",
        "options": [
          "You learned to build alternatives; next you will study why systems fail",
          "You learned why systems fail, when exit is appropriate, and the ethics of departure; next you will learn to build the alternatives",
          "You learned to prevent all collapse; next you will learn reform techniques",
          "You learned the history of migration; next you will study energy markets"
        ],
        "correctAnswer": 1,
        "explanation": "Completing Exodological Literacy means understanding why systems fail, when exit is appropriate, and the ethical dimensions of departure. In Applied Exodology, you learn to build the alternatives."
      }
    ]
  },
  "s-m1": {
    "moduleId": "s-m1",
    "title": "Module 1 Knowledge Check",
    "description": "Test your understanding of how Exodology principles change and apply across individual, community, regional, national and civilizational scales.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which scale of Exodology involves governance, public infrastructure and diverse stakeholders, as with a city, county or bioregion pursuing exit?",
        "options": [
          "Community scale",
          "Regional scale",
          "Individual scale",
          "Civilizational scale"
        ],
        "correctAnswer": 1,
        "explanation": "The regional scale covers a city, county or bioregion pursuing exit, and it involves governance, public infrastructure and diverse stakeholders."
      },
      {
        "question": "According to the lesson, what happens to coordination costs as the scale of exit increases?",
        "options": [
          "They stay roughly constant because the same principles apply at every scale",
          "They fall, because larger systems already have coordination structures in place",
          "They matter only at the individual scale, where one household must organize everything",
          "They rise, growing exponentially from no coordination for individuals to aligning millions of actors nationally"
        ],
        "correctAnswer": 3,
        "explanation": "Individual exit requires no coordination, while national exit requires aligning millions of actors, so the coordination burden grows exponentially."
      },
      {
        "question": "Why do equity stakes rise as exit scales up?",
        "options": [
          "Larger exits affect millions of people, including vulnerable populations who may lack exit capability",
          "Larger exits require less public funding, so benefits shrink",
          "Individual exits harm more people than national ones",
          "Equity only becomes relevant once exits reach the civilizational scale"
        ],
        "correctAnswer": 0,
        "explanation": "Individual exit affects one household, but national exit affects millions, including vulnerable populations who may lack exit capability."
      },
      {
        "question": "What does the fractal principle state?",
        "options": [
          "Each scale requires an entirely separate set of principles",
          "Principles proven at the individual scale can be copied to nations without change",
          "Core Exodology principles work at every scale, with appropriate adaptation",
          "Only national and civilizational exits follow Exodology principles"
        ],
        "correctAnswer": 2,
        "explanation": "Exodology principles apply fractally: dependency mapping, exit friction, parallel systems and ethical responsibility work at every scale, though they require scale-appropriate adaptation."
      },
      {
        "question": "The lesson notes that feed-in tariffs made home solar economically viable. Which multi-scale approach does this illustrate?",
        "options": [
          "Top-down: policy changes enabling individual and community exits",
          "Bottom-up: individual exits creating models larger scales can adopt",
          "Middle-out: regional transitions spreading horizontally to other regions",
          "Fractal: the same tool used identically at every scale"
        ],
        "correctAnswer": 0,
        "explanation": "In the top-down approach, policy changes such as feed-in tariffs enable individual and community exits."
      },
      {
        "question": "How does political resistance change as exits grow larger?",
        "options": [
          "It weakens, because large exits carry more legitimacy",
          "It stays the same at every scale, since exit friction is constant",
          "It intensifies, from individual exiters being ignored to national exits provoking organized resistance",
          "It is strongest against individual exiters, who are easiest to target"
        ],
        "correctAnswer": 2,
        "explanation": "Individual exiters are ignored, regional exits threaten industries, and national exits threaten entire economic sectors and provoke organized resistance."
      }
    ]
  },
  "s-m2": {
    "moduleId": "s-m2",
    "title": "Module 2 Knowledge Check",
    "description": "Test your understanding of policy levers that enable or block exit and the governance models suited to transitions at different scales.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following does the lesson give as an example of an exit-blocking policy?",
        "options": [
          "Right-to-repair laws",
          "Net metering",
          "Zoning that blocks food production",
          "Cooperative formation laws"
        ],
        "correctAnswer": 2,
        "explanation": "The lesson lists utility monopolies, zoning, licensing and debt policy as exit-blocking; right-to-repair, net metering and cooperative formation laws are exit-enabling."
      },
      {
        "question": "What is meant by prefigurative policy?",
        "options": [
          "Communities creating their own policy environments, such as intentional communities with internal governance, while advocating for change",
          "Waiting until national policy changes before attempting any exit",
          "Filing regulatory complaints before a policy is enacted",
          "Drafting legislation in advance for policymakers to adopt"
        ],
        "correctAnswer": 0,
        "explanation": "Prefigurative policy means communities create their own policy environments, such as intentional communities or member-governed cooperatives, working within constraints while advocating for change."
      },
      {
        "question": "What does the principle of subsidiarity mean in multi-scale governance?",
        "options": [
          "Decide at the highest available level to ensure consistency",
          "Follow ecological boundaries when drawing jurisdictions",
          "Use consensus for every decision regardless of group size",
          "Decide at the lowest appropriate level"
        ],
        "correctAnswer": 3,
        "explanation": "Subsidiarity means deciding at the lowest appropriate level, and it guides the level of decision-making in nested governance."
      },
      {
        "question": "How does governance for transition differ from steady-state governance, according to the lesson?",
        "options": [
          "It should always rely on full consensus, however long decisions take",
          "It may need quick decisions during crisis, balancing speed and participation, often through temporary structures with sunset clauses",
          "It should replace participation with expert rule permanently",
          "It is identical to steady-state governance and needs no special design"
        ],
        "correctAnswer": 1,
        "explanation": "Transition governance requires quick decisions during crisis, a balance of speed and participation, and temporary structures with sunset clauses."
      },
      {
        "question": "In the solar access scenario, a utility blocks community solar through prohibitive fees. Which response does the lesson favor?",
        "options": [
          "File a regulatory complaint",
          "Focus on individual rooftop solar, which isn't restricted",
          "Seek a variance for your own property",
          "Build a coalition with environmental and ratepayer groups for legislation"
        ],
        "correctAnswer": 3,
        "explanation": "Coalition building creates political power for systemic change, while a regulatory complaint is slow and rooftop solar avoids the community-scale problem."
      },
      {
        "question": "In the food production scenario, zoning prohibits backyard chickens and front-yard gardens. Why is organizing neighbors to petition for a zoning amendment preferred over seeking a variance?",
        "options": [
          "A variance is illegal in most cities",
          "Collective action changes policy for everyone, while a variance only solves an individual problem",
          "Petitions are faster than any individual process",
          "Moving away is never appropriate in Exodology"
        ],
        "correctAnswer": 1,
        "explanation": "Seeking a variance solves the individual problem but does not change policy, whereas organizing neighbors for a zoning amendment changes policy for everyone."
      }
    ]
  },
  "s-m3": {
    "moduleId": "s-m3",
    "title": "Module 3 Knowledge Check",
    "description": "Test your understanding of justice frameworks for exit, including exit equity, the lifeboats problem and justice-centered exit design.",
    "passingScore": 70,
    "questions": [
      {
        "question": "According to the lesson, how does just transition relate to Exodology?",
        "options": [
          "It is an optional add-on once an exit has succeeded",
          "It applies only to national-scale exits",
          "It is a separate field that Exodology leaves to policymakers",
          "It is central to ethical practice, not an add-on"
        ],
        "correctAnswer": 3,
        "explanation": "The lesson states that just transition is not an add-on to Exodology; it is central to ethical practice."
      },
      {
        "question": "Which justice concept refers to addressing harms caused by the systems being exited, not just building alternatives?",
        "options": [
          "Procedural justice",
          "Restorative justice",
          "Exit equity",
          "Intergenerational justice"
        ],
        "correctAnswer": 1,
        "explanation": "Restorative justice means addressing harms caused by the systems being exited, not just building alternatives."
      },
      {
        "question": "What does procedural justice require in exit decisions?",
        "options": [
          "Equal access to exit opportunities regardless of income or location",
          "Ensuring transitions serve future generations",
          "Fair processes for making exit decisions, including voice for affected communities",
          "Distributing the costs of transition fairly"
        ],
        "correctAnswer": 2,
        "explanation": "Procedural justice concerns fair processes for making exit decisions, including voice for affected communities."
      },
      {
        "question": "When is the lifeboats critique of exit less valid, according to the lesson?",
        "options": [
          "When exits create models that can be scaled and replicated and maintain solidarity with those who remain",
          "When exits require resources most people don't have",
          "When exits create exclusive alternatives unavailable to most",
          "When exiters move capital out of their former communities"
        ],
        "correctAnswer": 0,
        "explanation": "The critique is less valid when exits create scalable, replicable models, include provisions for those who cannot self-exit, challenge extraction and maintain solidarity with those who remain."
      },
      {
        "question": "What is the risk of exits that ignore justice?",
        "options": [
          "They can leave the most vulnerable behind in failing systems and reproduce existing inequalities",
          "They automatically create fairer alternative systems",
          "They make exit equally available to everyone",
          "They slow down exits for those with resources"
        ],
        "correctAnswer": 0,
        "explanation": "Without attention to justice, exits can leave the vulnerable behind, extract resources, create new exclusion and reproduce existing inequalities in new contexts."
      },
      {
        "question": "Which question belongs to the Responsibility element of justice-centered exit design?",
        "options": [
          "Who can participate in this exit and what barriers exist?",
          "Who gains from the alternative system?",
          "Are affected communities making decisions?",
          "What obligations exist to those who cannot exit?"
        ],
        "correctAnswer": 3,
        "explanation": "Justice-centered design asks about access, voice, burden distribution, benefit distribution and responsibility, which concerns the obligations owed to those who cannot exit."
      }
    ]
  },
  "s-m4": {
    "moduleId": "s-m4",
    "title": "Module 4 Knowledge Check",
    "description": "Test your understanding of designing regional transitions and the dynamics of national and global transitions.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What does a regional assessment include, according to the lesson?",
        "options": [
          "Only a survey of individual household dependencies",
          "A review of international trade agreements alone",
          "Regional dependency mapping, critical infrastructure analysis, stakeholder mapping and political landscape assessment",
          "Choosing a governance model before any analysis"
        ],
        "correctAnswer": 2,
        "explanation": "Regional assessment covers dependency mapping, critical infrastructure, stakeholders and the political landscape to find a region's unique vulnerabilities and opportunities."
      },
      {
        "question": "What should a regional strategy aim to create by sequencing interventions?",
        "options": [
          "Cascade effects",
          "Immediate region-wide exit in a single step",
          "Isolation of early adopter communities from one another",
          "Dependence on national policy before acting"
        ],
        "correctAnswer": 0,
        "explanation": "Regional strategy identifies early adopters, builds demonstration projects and networks, develops scalable models and sequences interventions for cascade effects."
      },
      {
        "question": "What is the role of regional infrastructure planning in the lesson?",
        "options": [
          "Replacing all individual and community exits with a single regional system",
          "Building what individuals and communities cannot, such as regional energy, water and food networks",
          "Focusing only on communication infrastructure",
          "Leaving infrastructure to national governments"
        ],
        "correctAnswer": 1,
        "explanation": "Regional infrastructure planning builds what individuals and communities cannot, and regional infrastructure enables local exits."
      },
      {
        "question": "How does the lesson describe political strategy for regional transitions?",
        "options": [
          "Avoid local government to keep the transition independent",
          "Work only through formal channels",
          "Postpone politics until infrastructure is complete",
          "Engage local government and work both within and outside formal channels"
        ],
        "correctAnswer": 3,
        "explanation": "Political strategy involves engaging local government, building relationships with key actors, navigating opposition, creating policy frameworks and working within and outside formal channels."
      },
      {
        "question": "How does the lesson frame climate agreements in the context of global transition dynamics?",
        "options": [
          "As obstacles to local exits",
          "As exit frameworks",
          "As purely symbolic gestures",
          "As substitutes for national industrial policy"
        ],
        "correctAnswer": 1,
        "explanation": "Among global transition dynamics, the lesson lists climate agreements as exit frameworks, alongside international coordination, supply chains, technology transfer and international justice."
      },
      {
        "question": "What does multi-level alignment involve?",
        "options": [
          "Understanding how local exits contribute to national and global transition and how larger frameworks enable local exits",
          "Letting national policy determine all local action",
          "Pursuing local exits without regard to larger frameworks",
          "Concentrating action at the global level only"
        ],
        "correctAnswer": 0,
        "explanation": "Multi-level alignment means understanding how local exits contribute to national and global transition, how national and global frameworks enable local exits, and aligning action across scales."
      }
    ]
  },
  "s-m5": {
    "moduleId": "s-m5",
    "title": "Module 5 Knowledge Check",
    "description": "Test your understanding of the Exit Steward role, steward ethics, and facilitation and coaching practice.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following is one of the steward ethics described in the lesson?",
        "options": [
          "Never push exit on those not ready",
          "Encourage every client to exit as quickly as possible",
          "Share client details within the steward network by default",
          "Always provide an answer rather than referring elsewhere"
        ],
        "correctAnswer": 0,
        "explanation": "Steward ethics include never pushing exit on those not ready, respecting autonomy, maintaining confidentiality, acknowledging limits of knowledge and referring when appropriate."
      },
      {
        "question": "Why does the lesson say steward networks matter?",
        "options": [
          "Networks let stewards avoid needing personal exit experience",
          "Networks ensure all stewards give clients identical advice",
          "No steward knows everything, so networks provide mutual support, referral and collective learning",
          "Networks replace the need for facilitation skills"
        ],
        "correctAnswer": 2,
        "explanation": "No steward knows everything; networks of mutual support and referral, with collective learning and knowledge sharing, extend individual capacity."
      },
      {
        "question": "What is the central aim of exit coaching?",
        "options": [
          "Telling clients which systems they should exit",
          "Eliciting the client's own wisdom, such as helping them identify their own motivations",
          "Designing a transition plan on the client's behalf",
          "Judging whether a client's motivations are correct"
        ],
        "correctAnswer": 1,
        "explanation": "Coaching elicits client wisdom: it helps clients identify their own motivations and provides accountability without judgment, without imposing solutions."
      },
      {
        "question": "Which is listed as a common challenge stewards face?",
        "options": [
          "Clients who refuse any dependency mapping",
          "Having too many alternatives to choose from",
          "Communities that decide too quickly to need facilitation",
          "Groups stuck in analysis paralysis"
        ],
        "correctAnswer": 3,
        "explanation": "Common challenges include clients who want to be told what to do, groups stuck in analysis paralysis, derailing conflict, unrealistic expectations and burnout."
      },
      {
        "question": "A client with debt and no savings wants to quit their job and move to an ecovillage they have never visited. What is the recommended steward response?",
        "options": [
          "Support their excitement and help them plan the move",
          "Tell them it's a bad idea and they should wait",
          "Ask questions that help them examine their readiness",
          "Refer them to an ecovillage immediately"
        ],
        "correctAnswer": 2,
        "explanation": "The coaching approach helps them discover what they need; supporting the move ignores red flags, and telling them to wait imposes judgment."
      },
      {
        "question": "A community group has discussed a food co-op for two years without deciding anything. Why is presenting them a detailed plan to adopt not recommended?",
        "options": [
          "It takes over rather than facilitating and may create dependence",
          "Detailed plans are always unrealistic",
          "The group should be told to just start instead",
          "Food co-ops are outside a steward's scope"
        ],
        "correctAnswer": 0,
        "explanation": "Presenting a plan takes over rather than facilitating; helping them identify what would make them ready to decide facilitates their process while addressing the block."
      }
    ]
  },
  "s-m6": {
    "moduleId": "s-m6",
    "title": "Module 6 Knowledge Check",
    "description": "Test your understanding of designing exit education and building learning communities.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Where does learner-centered design start?",
        "options": [
          "With the full body of content to be covered",
          "With learner needs: what learners need to be able to do",
          "With the assessment format",
          "With the teacher's areas of expertise"
        ],
        "correctAnswer": 1,
        "explanation": "Learner-centered design starts with learner needs, not content, asking what learners need to be able to do and what knowledge and experiences support that."
      },
      {
        "question": "How does the lesson say Exodology is best learned?",
        "options": [
          "Primarily by memorizing frameworks before any practice",
          "Only through lectures by experienced stewards",
          "By avoiding failure until learners are fully prepared",
          "By doing, through simulations, projects, fieldwork and reflection on experience"
        ],
        "correctAnswer": 3,
        "explanation": "Exodology is learned by doing, not just studying, through simulations, projects, fieldwork, reflection on experience and learning from failure."
      },
      {
        "question": "Which sequence reflects the scaffolding principle described in the lesson?",
        "options": [
          "Strategy before foundation before application",
          "Abstract before concrete",
          "Foundation before application before strategy",
          "Complex before simple to challenge learners"
        ],
        "correctAnswer": 2,
        "explanation": "Scaffolding moves from foundation to application to strategy, simple to complex and concrete to abstract, building on what learners already know."
      },
      {
        "question": "What kind of assessment does the lesson recommend?",
        "options": [
          "Demonstrations of capability, not just knowledge tests, with feedback that guides improvement",
          "Knowledge tests only, since they are easiest to score",
          "No assessment, to keep learning self-directed",
          "A single final exam at the end of the course"
        ],
        "correctAnswer": 0,
        "explanation": "Assessment for learning uses demonstrations of capability, not just knowledge tests, and feedback that guides improvement."
      },
      {
        "question": "In a community of practice, how do newcomers learn?",
        "options": [
          "By completing all study before joining any practice",
          "Through formal lectures from a single expert",
          "By working alone until they become practitioners",
          "Through legitimate peripheral participation, learning from practitioners"
        ],
        "correctAnswer": 3,
        "explanation": "Communities of practice share domain, community and practice; through legitimate peripheral participation, newcomers learn from practitioners."
      },
      {
        "question": "What makes a learning community sustainable, according to the lesson?",
        "options": [
          "It persists beyond any individual through leadership development, documentation and reproducing itself",
          "It depends on one charismatic teacher",
          "It keeps the same members indefinitely",
          "It avoids documentation to stay flexible"
        ],
        "correctAnswer": 0,
        "explanation": "Sustainable learning communities persist beyond any individual through leadership development, documentation and knowledge management, and reproduction of the community itself."
      }
    ]
  },
  "s-m7": {
    "moduleId": "s-m7",
    "title": "Module 7 Knowledge Check",
    "description": "Test your understanding of exit as a movement and the role of narrative and framing in shaping exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which question does target analysis address in movement strategy?",
        "options": [
          "How does change happen?",
          "What actions advance the goal?",
          "How to build power over time?",
          "Who can deliver change?"
        ],
        "correctAnswer": 3,
        "explanation": "Movement strategy includes theory of change (how change happens), target analysis (who can deliver change), tactic selection and escalation."
      },
      {
        "question": "What does the lesson mean by movement ecology?",
        "options": [
          "Movements include diverse organizations, with people playing different roles such as organizers, spokespeople, researchers and supporters",
          "Movements should focus only on environmental issues",
          "A single organization should coordinate every role",
          "Everyone in a movement should play the same role"
        ],
        "correctAnswer": 0,
        "explanation": "Different people play different roles, and movement ecology includes diverse organizations; each person should find their role."
      },
      {
        "question": "How does the lesson suggest movements avoid burnout?",
        "options": [
          "Escalate tactics constantly to maintain momentum",
          "Rely on a small group of highly committed people",
          "Care for participants, celebrate victories, keep a sustainable pace and think long-term",
          "Focus only on short-term wins"
        ],
        "correctAnswer": 2,
        "explanation": "Movements burn out; sustainability requires care for participants, celebrating victories, a sustainable pace and long-term thinking."
      },
      {
        "question": "What point does the lesson make about framing effects?",
        "options": [
          "Framing matters little because actions speak for themselves",
          "The same action can be framed as abandonment or transformation, and frames shape perception and response",
          "Exit should always be framed as dropping out",
          "Frames only affect participants, not how society responds"
        ],
        "correctAnswer": 1,
        "explanation": "The same action can be framed as abandonment or transformation, as dropping out or stepping up; frames shape perception and response."
      },
      {
        "question": "How do counter-narratives challenge dominant framing of exit?",
        "options": [
          "They accept the dominant view of exit as failure",
          "They reframe exit, which dominant narratives cast as failure, as courage, responsibility and innovation",
          "They avoid stories and rely only on data",
          "They frame exit as abandonment of society"
        ],
        "correctAnswer": 1,
        "explanation": "Dominant narratives frame exit as failure; counter-narratives frame it as courage, responsibility and innovation."
      },
      {
        "question": "Which elements does story-based strategy include, according to the lesson?",
        "options": [
          "Story of past, present and future, used to persuade at any cost",
          "Characters without conflict or resolution",
          "Story of self, us and now, used strategically while maintaining authenticity",
          "A single fixed story told the same way to every audience"
        ],
        "correctAnswer": 2,
        "explanation": "Story-based strategy asks who is telling what story to whom and uses the story of self, us and now strategically while maintaining authenticity."
      }
    ]
  },
  "s-m8": {
    "moduleId": "s-m8",
    "title": "Module 8 Knowledge Check",
    "description": "Test your understanding of generational Exodology and building alternatives that remain resilient across time.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What stance does the lesson recommend for holding the urgency of climate change alongside slow cultural change?",
        "options": [
          "Tactical patience with strategic urgency",
          "Strategic patience with tactical urgency",
          "Urgency in all things, setting patience aside",
          "Patience in all things, waiting for culture to shift"
        ],
        "correctAnswer": 1,
        "explanation": "Climate change is urgent while cultural change is slow; the lesson calls for holding both without paralysis or despair through strategic patience with tactical urgency."
      },
      {
        "question": "What does the lesson say about legacy and future generations?",
        "options": [
          "We should lock in our solutions so future generations cannot undo them",
          "Future generations are not our concern",
          "Legacy means preserving current systems unchanged",
          "We should avoid binding future generations to our solutions, since legacy requires humility about future needs"
        ],
        "correctAnswer": 3,
        "explanation": "Legacy asks what we owe future generations and how to avoid binding them to our solutions; it requires humility about future needs."
      },
      {
        "question": "Which is an internal threat to the persistence of alternatives?",
        "options": [
          "Succession failures",
          "Political opposition",
          "Economic pressure",
          "Environmental change"
        ],
        "correctAnswer": 0,
        "explanation": "Internal threats include conflict, burnout and succession failures; external threats include economic pressure, political opposition and environmental change."
      },
      {
        "question": "Which principle is described as having parts that can fail without system collapse?",
        "options": [
          "Centralization",
          "Uniformity",
          "Modularity",
          "Efficiency"
        ],
        "correctAnswer": 2,
        "explanation": "Resilience principles include diversity, redundancy and modularity: multiple ways to meet each need and parts that can fail without system collapse."
      },
      {
        "question": "How do organizations maintain institutional memory, according to the lesson?",
        "options": [
          "By relying on founders to stay indefinitely",
          "By resisting all change",
          "By keeping knowledge with a few key individuals",
          "Through documentation, culture, ritual and succession planning"
        ],
        "correctAnswer": 3,
        "explanation": "Organizations remember through documentation, culture and ritual, and succession planning addresses what happens when founders leave."
      },
      {
        "question": "What does the lesson say about evolution in healthy systems?",
        "options": [
          "Healthy systems change, adapting to new conditions while balancing stability and change",
          "Healthy systems stay the same to protect what works",
          "Change is a sign that an alternative is failing",
          "Systems should change constantly with no stability"
        ],
        "correctAnswer": 0,
        "explanation": "Healthy systems change through adaptation to new conditions and a balance of stability and change, as learning organizations; evolution maintains relevance."
      }
    ]
  },
  "s-m9": {
    "moduleId": "s-m9",
    "title": "Module 9 Knowledge Check",
    "description": "Test your understanding of how Strategic Exodology concepts integrate into a coherent stewardship framework.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What is the purpose of the strategic toolkit (scaling, justice, policy, stewardship, teaching, movement building, long-term thinking)?",
        "options": [
          "To help individuals exit as quickly as possible",
          "To replace the need for community",
          "To enable systemic change",
          "To focus practitioners on a single domain"
        ],
        "correctAnswer": 2,
        "explanation": "The strategic toolkit covers scaling, justice, policy, regional and global transitions, stewardship, teaching, movement building and long-term thinking, and these tools enable systemic change."
      },
      {
        "question": "Why does the lesson describe the steward as a linchpin?",
        "options": [
          "Stewards connect scales, timescales and domains",
          "Stewards make decisions on behalf of communities",
          "Stewards specialize in one scale only",
          "Stewards replace policy and governance"
        ],
        "correctAnswer": 0,
        "explanation": "Strategic exodologists connect scales (individual to world), timescales (immediate to generational) and domains (food, energy, water, economy)."
      },
      {
        "question": "Which is an example of connecting timescales as a steward?",
        "options": [
          "Linking food systems to energy systems",
          "Linking individual exits to regional ones",
          "Linking teaching to organizing",
          "Linking immediate action to generational change"
        ],
        "correctAnswer": 3,
        "explanation": "Connecting timescales means linking the immediate to the generational; linking food and energy connects domains, and linking individual to regional connects scales."
      },
      {
        "question": "What questions does Finding Your Work ask practitioners to consider?",
        "options": [
          "Which single framework is objectively best",
          "What scale, what domain and what role are yours to serve",
          "How to complete Exodology as quickly as possible",
          "Which systems everyone should exit first"
        ],
        "correctAnswer": 1,
        "explanation": "Finding Your Work asks where you are called to serve: what scale, what domain and what role, such as facilitator, teacher, organizer or builder."
      },
      {
        "question": "How does the lesson describe the path forward in Exodology?",
        "options": [
          "As a course completed once and then set aside",
          "As an ongoing, lifelong practice with continuous learning in a community of practitioners",
          "As a solo pursuit independent of other practitioners",
          "As a fixed set of answers to memorize"
        ],
        "correctAnswer": 1,
        "explanation": "Exodology is an ongoing practice involving continuous learning and a community of practitioners; it is the work of a lifetime."
      },
      {
        "question": "Which of the following is NOT one of the roles named in Finding Your Work?",
        "options": [
          "Facilitator",
          "Teacher",
          "Regulator",
          "Organizer"
        ],
        "correctAnswer": 2,
        "explanation": "The lesson names facilitator, teacher, organizer and builder as possible roles; regulator is not among them."
      }
    ]
  },
  "s-m10": {
    "moduleId": "s-m10",
    "title": "Module 10 Knowledge Check",
    "description": "Test your understanding of the Strategic Exodology capstone project options, components, evaluation criteria and final reflection.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following is one of the capstone project options?",
        "options": [
          "A stewardship portfolio documenting your practice",
          "A research paper on the history of exit",
          "A personal budget for leaving a job",
          "A product review of sustainable goods"
        ],
        "correctAnswer": 0,
        "explanation": "Project options are a regional transition plan, a domain exit guide, a teaching curriculum design and a stewardship portfolio, chosen based on your calling."
      },
      {
        "question": "How should learners choose their capstone project?",
        "options": [
          "Based on whichever option is shortest",
          "By assignment from the instructor",
          "Always as a regional transition plan",
          "Based on their calling"
        ],
        "correctAnswer": 3,
        "explanation": "The lesson says to choose a project based on your calling."
      },
      {
        "question": "Which is NOT one of the listed capstone evaluation criteria?",
        "options": [
          "Realism of analysis",
          "Speed of completion",
          "Ethical grounding",
          "Quality of reflection"
        ],
        "correctAnswer": 1,
        "explanation": "Evaluation criteria are application of concepts, realism of analysis, creativity of approach, ethical grounding and quality of reflection."
      },
      {
        "question": "In the capstone workbook, which step asks who benefits and who bears costs, and how equity is addressed?",
        "options": [
          "Map stakeholders",
          "Plan for sustainability",
          "Assess justice implications",
          "Conduct situational analysis"
        ],
        "correctAnswer": 2,
        "explanation": "The justice implications step asks who benefits and who bears costs and how equity is addressed."
      },
      {
        "question": "In the workbook, what does the plan for sustainability step ask?",
        "options": [
          "What the theory of change is",
          "Who has power and who could ally or oppose",
          "How the project persists and what its resilience mechanisms are",
          "What the concrete steps and timeline are"
        ],
        "correctAnswer": 2,
        "explanation": "Planning for sustainability asks how the project persists and what resilience mechanisms it has; theory of change belongs to the strategic framework step."
      },
      {
        "question": "The final reflection asks about your vision for a post-exit world. What does it emphasize?",
        "options": [
          "Which systems were most harmful",
          "What we are exiting toward, not just what we are exiting from",
          "How quickly the exit can be completed",
          "How to return to the original systems if needed"
        ],
        "correctAnswer": 1,
        "explanation": "The final reflection asks what we are exiting toward, not just from, as part of envisioning a post-exit world."
      }
    ]
  }
}
