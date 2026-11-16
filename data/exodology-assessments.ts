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
    "description": "Test your understanding of dependency mapping, lock-in mechanisms and how to prioritize exit targets.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What distinguishes a dependency map from an organizational chart or process flow?",
        "options": [
          "It focuses specifically on what would need to be replaced or provided independently for exit to succeed",
          "It shows who reports to whom inside a system",
          "It records only the physical goods a household consumes",
          "It ranks systems by how sustainable they are"
        ],
        "correctAnswer": 0,
        "explanation": "Unlike organizational charts or process flows, dependency maps focus specifically on what would need to be replaced or provided independently for exit to succeed."
      },
      {
        "question": "Which of the following best describes a critical node on a dependency map?",
        "options": [
          "Any dependency with an exit friction score of 1",
          "A point where alternatives already exist and are cheap to build",
          "A point where no alternative path exists, failure affects multiple downstream functions, or recovery time is long relative to need",
          "The most visible or symbolic dependency in a community"
        ],
        "correctAnswer": 2,
        "explanation": "A critical node is a point where failure would cascade: no alternative path exists, failure affects multiple downstream functions, or recovery time is long relative to need."
      },
      {
        "question": "A map that ends at \"grocery store\" illustrates which common mapping mistake?",
        "options": [
          "Mapping alone",
          "Stopping too early",
          "Assuming stability",
          "Forgetting yourself"
        ],
        "correctAnswer": 1,
        "explanation": "Stopping too early means not tracing far enough upstream; the mapper still needs to ask where the grocery store gets its food."
      },
      {
        "question": "How does Exodology frame lock-in?",
        "options": [
          "As a failure of individual willpower that people can overcome by wanting to leave badly enough",
          "As proof that the dominant system serves people best",
          "As a permanent condition that cannot be weakened or redesigned",
          "As usually a structural property of a system, produced by how its parts fit together, how it has grown and who benefits from it"
        ],
        "correctAnswer": 3,
        "explanation": "Exodology rejects treating lock-in as a matter of willpower; it is usually a structural property of a system. Lock-in is neither proof that a system is good nor permanent."
      },
      {
        "question": "A dependency whose value comes mainly from other people's participation, such as a communication platform, is shaped by coordination effects. What does the lesson say this calls for?",
        "options": [
          "Leaving alone as quickly as possible",
          "Raising the exit friction score to 5 and deferring it",
          "Collective exit or keeping a bridge to the old system",
          "Paying the switching costs through a data export plan"
        ],
        "correctAnswer": 2,
        "explanation": "Dependencies whose value comes mainly from others' participation cannot be exited individually without loss; they call for collective exit or for keeping a bridge to the old system."
      },
      {
        "question": "How does the lesson distinguish designed lock-in from emergent lock-in, and what response does designed lock-in add?",
        "options": [
          "Designed lock-in is created deliberately to retain participants, and may also call for voice such as advocacy, regulation and collective bargaining",
          "Designed lock-in develops without anyone intending it, and is best addressed only by building alternatives",
          "Designed lock-in is always harmless, so it needs no response",
          "Designed lock-in comes from infrastructure, so it can only be addressed by one household at a time"
        ],
        "correctAnswer": 0,
        "explanation": "Designed lock-in is created deliberately, such as proprietary formats or punitive exit fees. While emergent lock-in is often addressed by building alternatives, designed lock-in may also call for voice."
      },
      {
        "question": "In the criticality and friction classification, how should a dependency that is critical and high friction usually be treated?",
        "options": [
          "As the first priority, because it is the most important",
          "As something to defer until resources and capacity allow",
          "As an easy win that builds momentum",
          "As the most important long-term work, with preparation begun early but rarely as the first project"
        ],
        "correctAnswer": 3,
        "explanation": "Critical and high-friction dependencies are the most important long-term work; preparation should begin early, but they are rarely the first project, since starting with the hardest problem often exhausts resources."
      },
      {
        "question": "Why do many sensible exit plans begin by adding buffers such as stored water or a second supplier to tightly coupled dependencies?",
        "options": [
          "Because buffers fully exit the dependency",
          "Because buffers buy time, turning a potential collapse into a manageable disruption, while being low friction and reversible",
          "Because buffers are a lasting substitute for building genuine alternatives",
          "Because tightly coupled systems never fail"
        ],
        "correctAnswer": 1,
        "explanation": "A buffer does not exit the dependency, but it loosens tight coupling and buys time. Buffers are usually low friction and reversible, though they are not a substitute for genuine alternatives."
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
    "description": "Test your understanding of partial exit, hybrid arrangements, dual dependency, transition paths and economic transition.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What distinguishes deliberate partial exit from drift?",
        "options": [
          "Deliberate partial exit always ends in full exit, while drift never does",
          "In deliberate partial exit the boundary between old and new systems is chosen and understood; drift is ending up between systems without a plan",
          "Drift is a moral failure, while deliberate partial exit is a planning technique",
          "Drift means keeping voice in the existing system, while deliberate partial exit means giving it up"
        ],
        "correctAnswer": 1,
        "explanation": "Deliberate partial exit means you know which functions each system carries and why. Drift is ending up between systems without a plan; it is a planning gap, not a moral failure."
      },
      {
        "question": "A household believes its grid-tied solar panels make it independent, but has no power during a grid outage. Which hybrid failure pattern does this illustrate?",
        "options": [
          "Cost stacking",
          "Complexity overload",
          "Hidden common dependencies",
          "Unclear roles"
        ],
        "correctAnswer": 2,
        "explanation": "Most standard grid-tied inverters switch off when the grid goes down, so the alternative quietly relies on the same critical node as the existing system, a hidden common dependency."
      },
      {
        "question": "According to the lesson on managing dual dependencies, what are sunset criteria?",
        "options": [
          "Conditions defined in advance that would allow reliance on the existing system for a function to be reduced or ended",
          "Dates by which the alternative system must be abandoned if it has not succeeded",
          "The point at which a household stops reviewing its transition",
          "Criteria the alternative must meet before it takes on more load"
        ],
        "correctAnswer": 0,
        "explanation": "Sunset criteria define what would allow you to reduce or end reliance on the existing system for a function, and what you would keep, such as an emergency fallback. Readiness criteria are what the alternative must demonstrate before taking more load."
      },
      {
        "question": "Which principle does Transition Path Design state about fallback points?",
        "options": [
          "Leave the existing system as soon as the alternative is started, to avoid cost stacking",
          "Fallback points are only needed once the transition is complete",
          "Avoid intermediate states because they encourage drift",
          "Never burn bridges before alternatives are proven; identify stable intermediate states where you can pause"
        ],
        "correctAnswer": 3,
        "explanation": "Fallback points are stable intermediate states and off-ramps where a stalled transition can pause, and you should never burn bridges before alternatives are proven."
      },
      {
        "question": "In Transition Timeline Development, what does identifying the critical path tell you?",
        "options": [
          "Which milestones can safely be skipped",
          "Which sequence of milestones determines the minimum timeline",
          "Which dependencies are most critical on your dependency map",
          "Which fallbacks to remove to speed up the transition"
        ],
        "correctAnswer": 1,
        "explanation": "The critical path is the sequence of milestones that determines the minimum timeline for the transition."
      },
      {
        "question": "According to Personal Economic Transition, how does income diversification support exit?",
        "options": [
          "By moving all income to alternative systems immediately",
          "By relying on a single, stable employer throughout the transition",
          "By using multiple income streams to reduce dependence on any single source, with a gradual shift of balance from exited systems to alternatives",
          "By increasing fixed costs so more income is required"
        ],
        "correctAnswer": 2,
        "explanation": "Multiple income streams reduce dependence on any single source; some income comes from exited systems during transition and some from alternatives, with the balance shifting gradually."
      },
      {
        "question": "Which description matches commons-based production in the Alternative Economies lesson?",
        "options": [
          "Giving without expectation of direct return at neighborhood scale",
          "Community currencies that keep wealth local",
          "Exchanging labor directly through time banks",
          "Producing collectively and sharing freely, as with open source, creative commons and community-owned infrastructure"
        ],
        "correctAnswer": 3,
        "explanation": "Commons-based production means producing collectively and sharing freely, with Wikipedia and Linux given as examples."
      },
      {
        "question": "In the Financial Planning for Exit exercise, what is the income bridge?",
        "options": [
          "A plan for how income will flow during transition and from which systems",
          "A loan taken out to pay for transition costs",
          "A reserve that replaces all income during the transition",
          "A milestone marking the end of the transition"
        ],
        "correctAnswer": 0,
        "explanation": "Designing the income bridge means planning how income will flow during transition and from which systems, with income from existing systems sustaining the build-out of alternatives."
      }
    ]
  },
  "a-m6": {
    "moduleId": "a-m6",
    "title": "Module 6 Knowledge Check",
    "description": "Test your understanding of how exit systems fail, how to manage transition risk, designing for resilience, re-entry planning and skills for exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "According to Common Exit System Failures, why do alternatives such as a community solar array most often fail?",
        "options": [
          "Because the underlying technology, such as solar, does not work",
          "Because alternatives are always larger and harder to manage than dominant systems",
          "For social, financial and organizational reasons, such as no one maintaining the inverter, a spent reserve fund or a key person moving away",
          "Because failure proves the exit was a mistake from the start"
        ],
        "correctAnswer": 2,
        "explanation": "The reasons alternatives fail are often not technical. A solar array rarely fails because solar does not work, but because no one was assigned to maintain it, the reserve was spent, or the person who understood it left."
      },
      {
        "question": "An alternative keeps running, but a funder's conditions have gradually changed its direction so it no longer builds exit capability. Which failure category does this belong to?",
        "options": [
          "Drift, capture and exclusion",
          "Capacity failure",
          "Scale mismatch",
          "Maintenance neglect"
        ],
        "correctAnswer": 0,
        "explanation": "Capture and co-optation, along with mission drift and exclusion, can leave an alternative running in name while the exit capability it was meant to create disappears."
      },
      {
        "question": "In Managing Transition Risk, what does the commitment curve describe?",
        "options": [
          "Risk is highest at the start of a transition and disappears once commitment deepens",
          "Early stages are low commitment with easy reversal, later stages are high commitment with difficult reversal, so risk is managed differently at each stage",
          "Commitment should be maximized early to reduce detection time",
          "The probability of each risk multiplied by its impact"
        ],
        "correctAnswer": 1,
        "explanation": "Risk changes as commitment deepens: early stages are low commitment and easy to reverse, later stages are high commitment and hard to reverse, so risk is managed differently at each stage."
      },
      {
        "question": "According to Designing for Resilience, where does redundancy pay most?",
        "options": [
          "Evenly across every function, regardless of criticality",
          "Mainly in equipment, since people are hard to duplicate",
          "Only in conveniences, since critical needs are already protected by the dominant system",
          "At the critical nodes on the dependency map, and especially in people and skills"
        ],
        "correctAnswer": 3,
        "explanation": "Redundancy pays most at critical nodes, where no alternative path exists and failure cascades. People are the most important place for redundancy, addressed through training, documentation and shared roles."
      },
      {
        "question": "What is graceful degradation, and how is it planned for an exit system?",
        "options": [
          "Continuing to provide reduced service when parts fail, planned by sorting functions into essential, important and deferrable tiers in advance",
          "Shutting the whole system down safely whenever one component fails",
          "Gradually replacing the alternative with the dominant system over time",
          "Deciding during a crisis, by whoever is present, which functions to protect"
        ],
        "correctAnswer": 0,
        "explanation": "Graceful degradation means a system keeps providing reduced service when parts fail. Functions are sorted into essential, important and deferrable tiers, and these choices are made before the crisis through a fair process."
      },
      {
        "question": "Why does the Re-entry Planning lesson argue that planning a way back strengthens rather than undermines exit?",
        "options": [
          "Because exit is an end in itself and re-entry plans prevent it from being abandoned",
          "Because returning is always better than staying in an alternative",
          "Because a planned route back keeps the exit reversible, in line with the Principle of Precaution, so a single failure will not be catastrophic",
          "Because re-entry plans remove the need for fallback points"
        ],
        "correctAnswer": 2,
        "explanation": "People who know they can return are often able to take larger, more thoughtful steps. A planned route back is what makes an exit reversible, as the Principle of Precaution asks."
      },
      {
        "question": "According to Skills for Exit, how do community skill networks help?",
        "options": [
          "They ensure each person learns every skill exit requires",
          "No one needs all skills; sharing and developing complementary skills within a community reduces individual burden",
          "They replace the need for skill gap analysis",
          "They focus only on production skills such as growing and building"
        ],
        "correctAnswer": 1,
        "explanation": "No one needs all skills. Skill sharing within communities, developing complementary skills and teaching what you know reduce the individual burden."
      },
      {
        "question": "In the Failure Scenario Analysis exercise, which set of scenarios are you asked to write?",
        "options": [
          "One best case, one worst case and one most likely scenario",
          "Three scenarios that all involve key-person dependence",
          "One technical, one financial and one timing scenario",
          "One sudden, one slow and one external failure scenario, each specific about timing, scale and conditions"
        ],
        "correctAnswer": 3,
        "explanation": "The exercise asks for one sudden scenario, one slow scenario and one external scenario, each specific about timing, scale and conditions."
      }
    ]
  },
  "a-m7": {
    "moduleId": "a-m7",
    "title": "Module 7 Knowledge Check",
    "description": "Test your understanding of autonomy metrics, resilience assessment methods and tracking progress toward exit over time.",
    "passingScore": 70,
    "questions": [
      {
        "question": "How does Exodology define autonomy in the Autonomy Metrics Framework?",
        "options": [
          "Total self-sufficiency, producing everything a household needs without outside help",
          "The degree to which a household or community can meet an essential need without being forced to remain in a particular system",
          "Isolation from all systems and from neighbors",
          "The total income a household earns outside the dominant economy"
        ],
        "correctAnswer": 1,
        "explanation": "Autonomy is not isolation or total self-sufficiency. It is the degree to which a household or community can meet an essential need without being forced to remain in a particular system, the practical expression of exit capability."
      },
      {
        "question": "Why does the lesson advise against adding all autonomy scores into a single total too early?",
        "options": [
          "Because single totals are too difficult to calculate",
          "Because totals overstate weaknesses in social systems",
          "Because the Charter forbids numerical scores",
          "Because totals hide the pattern; a high food score cannot compensate for having no safe water, so a profile across systems should be kept and the lowest score reported"
        ],
        "correctAnswer": 3,
        "explanation": "Totals hide the pattern. Keep a profile across systems first, and if you do summarize, report the lowest system score alongside any average."
      },
      {
        "question": "How does the Resilience Assessment Methods lesson distinguish resilience from autonomy?",
        "options": [
          "Autonomy is measured under ordinary conditions, while resilience asks what happens during disruption: whether a household or community can absorb, recover and adapt",
          "Resilience and autonomy are the same thing measured at different scales",
          "A highly autonomous household is always resilient",
          "Resilience means returning quickly to a single equilibrium after a small disturbance"
        ],
        "correctAnswer": 0,
        "explanation": "Autonomy is measured under ordinary conditions; resilience is the capacity to absorb disruption, recover and adapt. A household can be autonomous yet fragile, or reliant on dominant systems yet fairly resilient."
      },
      {
        "question": "In resilience assessment reporting, what does it mean to label a finding \"walked through\"?",
        "options": [
          "It has been verified in an actual outage or drill",
          "It is believed true but has not yet been examined",
          "It has been examined in a scenario exercise but not tested in practice",
          "It has been rejected after testing"
        ],
        "correctAnswer": 2,
        "explanation": "Findings are labeled tested (verified in practice), walked through (examined in a scenario exercise but not tested) or assumed (believed true but not yet examined)."
      },
      {
        "question": "Which of the following is an outcome indicator rather than an activity or capacity indicator?",
        "options": [
          "Number of workshops held",
          "Number of people who can maintain the water filter",
          "Liters of rainwater storage installed",
          "Share of food from community sources over a season"
        ],
        "correctAnswer": 3,
        "explanation": "Outcome indicators show that structural dependence has actually changed, such as the share of food from community sources. Workshops are activity indicators; skills and storage are capacity indicators."
      },
      {
        "question": "A buying club redefines \"community-sourced\" to include anything bought in bulk so its food coverage appears to rise. What does this illustrate?",
        "options": [
          "Adaptive management",
          "Goodhart's observation that when a measure becomes a target it ceases to be a good measure",
          "Non-linearity in transitions",
          "The commitment curve"
        ],
        "correctAnswer": 1,
        "explanation": "Gaming the definition is one of the distortions that occur when a measure becomes a target, as in Goodhart's observation. Pairing numbers with narrative and reviewing the indicators themselves reduce this risk."
      }
    ]
  },
  "a-m8": {
    "moduleId": "a-m8",
    "title": "Module 8 Knowledge Check",
    "description": "Test your understanding of advising community-scale exits, from community assessment and stakeholder engagement through organizing, cooperatives, commons, teams, conflict, implementation planning and documentation.",
    "passingScore": 70,
    "questions": [
      {
        "question": "When assessing a community's readiness to act, how should an adviser use the response spectrum?",
        "options": [
          "Assume exit is the goal and use the spectrum only to choose how fast to leave",
          "Skip it, since the community already asked for help with exit",
          "Ask honestly whether optimization or reform would serve better before recommending exit",
          "Apply it only after a parallel system has been built"
        ],
        "correctAnswer": 2,
        "explanation": "Not every community problem calls for exit. An adviser who assumes exit is always the answer has stopped doing assessment; if reforms are working, building a parallel system may waste scarce effort."
      },
      {
        "question": "What was Sherry Arnstein's central warning about citizen participation, as applied to community exits?",
        "options": [
          "Participation without redistribution of power can be an empty ritual that lets those in charge claim everyone was involved",
          "Participation always slows decisions and should be kept to a minimum",
          "Only elected officials should take part in decisions about exit",
          "Consultation and partnership are the same thing and can be used interchangeably"
        ],
        "correctAnswer": 0,
        "explanation": "Arnstein distinguished symbolic participation from forms that share real power. Advisers should say honestly which kind of decision each one is, because mislabelling a consultation as a partnership damages trust."
      },
      {
        "question": "Which of these is one of the organizing principles for collective exit?",
        "options": [
          "Start with ideology so that members share a clear worldview",
          "Ask for large commitments early to test who is serious",
          "Move as fast as possible before opposition forms",
          "Build relationships before asking for commitment and move at the speed of trust"
        ],
        "correctAnswer": 3,
        "explanation": "The lesson's organizing principles are to start with shared concerns rather than ideology, build relationships before asking for commitment, move at the speed of trust, and recognize that power comes from relationships, not just ideas."
      },
      {
        "question": "What defines a cooperative in the Cooperative Structures lesson?",
        "options": [
          "A business owned by outside investors that donates profits to the community",
          "An enterprise owned and governed by its members",
          "A government agency that provides services to a neighborhood",
          "An informal group that shares resources without any legal structure"
        ],
        "correctAnswer": 1,
        "explanation": "Cooperatives are enterprises owned and governed by their members, providing legal and organizational structures for collective exit. Principles such as democratic control distinguish them from other business forms."
      },
      {
        "question": "According to the Commons Governance lesson, which statement about commons is accurate?",
        "options": [
          "Commons are governed by rules, but the rules are made by their users",
          "Commons are unregulated resources open to anyone without rules",
          "Commons are resources owned and managed by the state",
          "Commons can only be natural resources such as forests and water"
        ],
        "correctAnswer": 0,
        "explanation": "Commons are resources managed collectively by user communities. They are not unregulated: they have rules, but rules made by users, and they can be natural, cultural or infrastructural."
      },
      {
        "question": "How does the Building Transition Teams lesson recommend forming a team?",
        "options": [
          "Recruit as many people as possible at once, then sort out roles later",
          "Wait until a crisis to see who proves reliable",
          "Start with trusted relationships and vet people through small commitments before large ones",
          "Select only people with the same skills and perspective to avoid disagreement"
        ],
        "correctAnswer": 2,
        "explanation": "Team formation starts with trusted relationships, expands through shared work and vets people through small commitments before large ones, building trust before crisis. Diversity of perspective improves problem-solving."
      },
      {
        "question": "What is the Conflict and Resilience lesson's view of conflict in exit communities?",
        "options": [
          "Conflict is a sign the community has failed and should disband",
          "Conflict is normal; it is unaddressed conflict that is dangerous, and resolution methods should match the conflict's type and severity",
          "Conflict should always be handled by a single method, such as a majority vote",
          "Conflict only comes from outside pressure, never from within the group"
        ],
        "correctAnswer": 1,
        "explanation": "Conflict is normal; unaddressed conflict is dangerous. Methods such as direct communication, mediation, group processes and restorative circles should be matched to the conflict type and severity."
      },
      {
        "question": "In community implementation planning, how should a transition be phased?",
        "options": [
          "Build every parallel system at once to maintain momentum",
          "Leave the existing system as soon as the pilot launches",
          "Decide phase conditions as you go, once each phase is already underway",
          "Each phase should end in a stable intermediate state, with conditions for moving on agreed in advance"
        ],
        "correctAnswer": 3,
        "explanation": "Each phase should end in a stable intermediate state the community could hold if progress stalled, and the conditions for moving to the next, less reversible phase should be written down beforehand."
      },
      {
        "question": "In the Community Food Co-op scenario, what is the best first step when several people are interested but commitments vary?",
        "options": [
          "Hold a public meeting and ask for founding member commitments",
          "Start a buying club with 5 to 10 committed people to test the concept",
          "Write a detailed business plan and seek funding",
          "Let the founders decide the structure for everyone"
        ],
        "correctAnswer": 1,
        "explanation": "A small buying club applies graduated engagement, building proof of concept before expansion. A public meeting is too early without relationships, and planning before organizing may produce plans nobody owns."
      },
      {
        "question": "According to the Documenting and Sharing lesson, what should documentation include?",
        "options": [
          "What worked, what did not and why, along with the context that shaped decisions",
          "Only successes, so that others are encouraged to follow",
          "Only final designs, leaving out costs and mistakes",
          "Only material kept private within the founding group"
        ],
        "correctAnswer": 0,
        "explanation": "Documentation should capture what worked, what did not and why, designs, processes and costs, lessons learned and mistakes made, and the context that shaped decisions, and it should be shared early and often."
      }
    ]
  },
  "a-m9": {
    "moduleId": "a-m9",
    "title": "Module 9 Knowledge Check",
    "description": "Test your understanding of Applied Exodology synthesis, the capstone exit plan, peer review of exit plans and reflection on your applied practice.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which sequence for an exit does the Applied Exodology Synthesis lesson recommend?",
        "options": [
          "Execute, then map dependencies, then document",
          "Map dependencies, design alternatives, plan transition, build teams, execute, document, share",
          "Build teams, execute, design alternatives, then map dependencies",
          "Plan transition, share, map dependencies, then design alternatives"
        ],
        "correctAnswer": 1,
        "explanation": "The lesson sequences an exit as map dependencies, design alternatives, plan transition, build teams, execute, document and share, iterating as needed and adapting to context."
      },
      {
        "question": "Which statement reflects the common pitfalls named in the synthesis lesson?",
        "options": [
          "Both moving too fast without foundation and moving too slow and missing windows are pitfalls",
          "Only moving too slowly is a pitfall; speed is always an advantage",
          "Reflection is a pitfall in itself and should be avoided in favor of action",
          "Working alone is safer than working with community"
        ],
        "correctAnswer": 0,
        "explanation": "The lesson lists moving too fast without foundation, moving too slow and missing windows, isolation without community, action without reflection, and reflection without action."
      },
      {
        "question": "In the capstone exit plan, which dependency should you design a parallel system for?",
        "options": [
          "Every dependency you have, all at once",
          "The dependency that is least important to you, as a low-risk test",
          "Whichever dependency a peer reviewer chooses",
          "Your most critical and addressable dependency"
        ],
        "correctAnswer": 3,
        "explanation": "The capstone asks you to map your top three system dependencies with full tracing, then design a parallel system for your most critical and addressable dependency."
      },
      {
        "question": "What is the purpose of good peer review of an exit plan?",
        "options": [
          "To rewrite the plan in the reviewer's preferred form",
          "To approve the plan so the author can proceed with confidence",
          "To find the weaknesses in a plan before reality does",
          "To rank plans against each other"
        ],
        "correctAnswer": 2,
        "explanation": "Good peer review is specific, evidence-based and kind without being vague; its purpose is to find weaknesses such as an unmapped dependency or missing fallback before reality does."
      },
      {
        "question": "In the peer review exercise, what does it mean if the author says your summary of their plan misses their intent?",
        "options": [
          "The plan may need to be clearer, which is useful feedback in itself",
          "The reviewer has failed and should withdraw from the exercise",
          "The author should ignore the review entirely",
          "The summary should be rewritten to match the cover note word for word"
        ],
        "correctAnswer": 0,
        "explanation": "The reviewer shares the summary with the author first; if it misses their intent, the plan may need to be clearer, and that is useful feedback in itself."
      },
      {
        "question": "When responding to a concern raised about your own plan, when is declining it legitimate?",
        "options": [
          "Whenever you disagree, without needing to explain",
          "Never; every concern from a reviewer must be accepted",
          "Only if the reviewer agrees to withdraw the concern",
          "When you have evidence the reviewer lacked, and you say what that evidence is"
        ],
        "correctAnswer": 3,
        "explanation": "For each concern you record accept, partly accept or decline. Declining is legitimate when you have evidence the reviewer lacked, and you should state that evidence."
      },
      {
        "question": "What does the Principle of Professional Competence ask of practitioners, as discussed in the reflection lesson?",
        "options": [
          "To undertake only work for which they are adequately qualified and seek collaboration beyond it",
          "To take on every task in their chosen setting to avoid relying on others",
          "To wait until they are fully expert before taking any step",
          "To leave technical, legal and financial tasks out of their plans"
        ],
        "correctAnswer": 0,
        "explanation": "The Principle of Professional Competence asks practitioners to undertake only work for which they are adequately qualified and to seek collaboration beyond it, naming the people or groups whose skills they will need."
      },
      {
        "question": "According to the reflection lesson, what is the measure of your practice?",
        "options": [
          "How far and how quickly you have exited existing systems",
          "How many tools of the Applied path you have studied",
          "Whether you have left well and widened the way for others",
          "Whether you move on to the Strategic path immediately"
        ],
        "correctAnswer": 2,
        "explanation": "The lesson closes by saying the measure of practice is not how far you have exited but whether you have left well and widened the way for others."
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
    "description": "Test your understanding of Exodology at scale, including how dynamics change across scales, regional and national transitions, and lessons from national energy transitions.",
    "passingScore": 70,
    "questions": [
      {
        "question": "What does the fractal principle say about Exodology principles?",
        "options": [
          "They work at every scale, with appropriate adaptation",
          "They apply only to individuals and households",
          "They must be replaced by entirely new principles at national scale",
          "They work identically at every scale with no adaptation needed"
        ],
        "correctAnswer": 0,
        "explanation": "Exodology principles such as dependency mapping, exit friction, parallel systems and ethical responsibility apply fractally, working at every scale with appropriate adaptation."
      },
      {
        "question": "Which example does the Scaling Exodology lesson give of a top-down multi-scale strategy?",
        "options": [
          "The first solar homes enabling the solar industry",
          "A regional transition spreading horizontally to other regions",
          "Feed-in tariffs making home solar economically viable",
          "A household using portable solar panels"
        ],
        "correctAnswer": 2,
        "explanation": "Top-down strategy means policy changes enabling individual and community exits, such as feed-in tariffs that made home solar viable. The first solar homes enabling the solar industry is a bottom-up example."
      },
      {
        "question": "How does the Designing Regional Transitions lesson describe the role of regional infrastructure?",
        "options": [
          "It should be avoided because it creates new dependencies",
          "It builds what individuals and communities cannot, enabling local exits",
          "It matters less at regional scale than at individual scale",
          "It is only relevant once national policy has changed"
        ],
        "correctAnswer": 1,
        "explanation": "Regional infrastructure planning covers energy, water, food, transportation and communication systems, building what individuals and communities cannot; regional infrastructure enables local exits."
      },
      {
        "question": "What does multi-level alignment mean in the National and Global Transitions lesson?",
        "options": [
          "Local action is irrelevant once national policy exists",
          "Global frameworks should replace all local initiatives",
          "Each scale should act independently without regard to the others",
          "Local exits contribute to national and global transition, while national and global frameworks enable local exits"
        ],
        "correctAnswer": 3,
        "explanation": "Multi-level alignment covers how local exits contribute to national and global transition and how national and global frameworks enable local exits, aligning action across scales."
      },
      {
        "question": "Why does the case study describe the UK's exit from coal mining as resembling collapse rather than managed exit?",
        "options": [
          "Because coal power stations closed with years of advance notice",
          "Because a cooperative alternative was built in mining areas first",
          "Because the old system was withdrawn far faster than any local alternative was built and residual duty was widely judged inadequate",
          "Because the closures involved fewer workers than the later coal power exit"
        ],
        "correctAnswer": 2,
        "explanation": "After the 1984 to 1985 strike, mines closed rapidly and many communities experienced long-lasting unemployment and decline; the old system was withdrawn faster than any local alternative was built."
      },
      {
        "question": "What does the pattern \"catalysts open windows, but do not do the work\" mean?",
        "options": [
          "Events like the 1973 oil crisis changed what was politically possible, but the exits still took decades of policy, investment and organizing",
          "Once a catalyst occurs, the transition completes itself within a few years",
          "Catalysts are the main cause of failed transitions",
          "Catalysts matter only for household exits, not national ones"
        ],
        "correctAnswer": 0,
        "explanation": "The 1973 oil crisis and the 2011 Fukushima accident changed what was politically possible, but the exits themselves still took decades of deliberate work."
      },
      {
        "question": "What made early Danish wind power instructive from an Exodological point of view?",
        "options": [
          "It was built and owned entirely by large utilities",
          "It replaced oil overnight after the 1973 crisis",
          "It depended on nuclear power as a backup",
          "Many turbines were owned by local cooperatives, farmers and households, giving communities a stake and building acceptance"
        ],
        "correctAnswer": 3,
        "explanation": "The ownership pattern of early Danish wind power, with many turbines owned by cooperatives, farmers and households, gave communities a direct stake in the parallel system and is credited with building local acceptance."
      },
      {
        "question": "Why does the case study warn against copying Denmark's transition as a model elsewhere?",
        "options": [
          "Because Denmark's transition failed on every criterion",
          "Because ignoring context is an error: Denmark is small, windy and close to neighbors it can trade electricity with",
          "Because national cases have nothing to teach practitioners",
          "Because Denmark relied on a single leader whose approach cannot be repeated"
        ],
        "correctAnswer": 1,
        "explanation": "Ignoring context is one of the limits of the case method: what worked in one geography, political culture and resource base may not transfer. Cases teach judgment, not templates."
      }
    ]
  },
  "s-m2": {
    "moduleId": "s-m2",
    "title": "Module 2 Knowledge Check",
    "description": "Test your understanding of policy levers, governance models, exit-compatible policy design and regulatory navigation for transition.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following is described as an exit-blocking policy?",
        "options": [
          "Net metering",
          "Right-to-repair laws",
          "Cooperative formation laws",
          "Utility monopolies"
        ],
        "correctAnswer": 3,
        "explanation": "Utility monopolies block energy alternatives, just as zoning, licensing and debt policy can block other exits. Net metering, right-to-repair and cooperative formation laws are exit-enabling."
      },
      {
        "question": "What does the principle of subsidiarity hold?",
        "options": [
          "Decisions should be made at the lowest appropriate level",
          "All decisions should be made by consensus",
          "Decisions should always follow national boundaries",
          "Transition decisions should be made by a single leader for speed"
        ],
        "correctAnswer": 0,
        "explanation": "Subsidiarity means deciding at the lowest appropriate level, and it guides nested, multi-scale governance."
      },
      {
        "question": "How does transition governance differ from steady-state governance?",
        "options": [
          "It never requires participation",
          "It must balance speed with participation and may use temporary structures with sunset clauses",
          "It should always rely on holacracy",
          "It is identical to steady-state governance"
        ],
        "correctAnswer": 1,
        "explanation": "Transition may require quick decisions during crisis, so it balances speed and participation and can use temporary structures with sunset clauses."
      },
      {
        "question": "What is exit-compatible policy?",
        "options": [
          "Policy that encourages everyone to leave existing systems",
          "Policy that removes every form of exit friction, including notice periods",
          "Policy that avoids trapping people in systems that fail them while protecting those who stay",
          "Policy that bans long-term commitments"
        ],
        "correctAnswer": 2,
        "explanation": "Exit-compatible policy is not about encouraging everyone to leave; it avoids trapping people in failing systems while protecting the people who stay. Some friction, such as notice periods, is legitimate."
      },
      {
        "question": "Why does the lesson say easy exit is not the same as fair exit?",
        "options": [
          "Because exit should always be costly",
          "Because those most able to press for improvement tend to leave first, leaving others with a worse system and less voice",
          "Because fair exit means banning large employers from leaving",
          "Because voice channels make exit unnecessary"
        ],
        "correctAnswer": 1,
        "explanation": "Following Hirschman, members with the most resources and options often leave first, so exit rights should be paired with protections such as notice, service obligations and voice channels for those who stay."
      },
      {
        "question": "In the solar access scenario, why is building a coalition for legislation the preferred response?",
        "options": [
          "It avoids any conflict with the utility",
          "It solves the problem for one household quickly",
          "It is faster than any regulatory process",
          "Coalition building creates political power for systemic change"
        ],
        "correctAnswer": 3,
        "explanation": "Building a coalition with environmental and ratepayer groups creates political power for systemic change, whereas a complaint is slow and focusing on rooftop solar avoids the community-scale problem."
      },
      {
        "question": "According to the lesson on regulatory navigation, where is the ethical line when working around a rule?",
        "options": [
          "Between using a lawful alternative and evading the rule's purpose",
          "Between small and large organizations",
          "Between local and national regulations",
          "There is no ethical line as long as the goal is worthy"
        ],
        "correctAnswer": 0,
        "explanation": "Working around rules is legitimate only when it is transparent and respects the rule's purpose without shifting costs or risks onto others; regulatory arbitrage is not acceptable even for exit movements."
      },
      {
        "question": "When compliance costs make a small alternative unviable, what does the lesson recommend?",
        "options": [
          "Cut corners quietly to stay viable",
          "Abandon the alternative entirely",
          "Treat the costs as evidence for reform rather than a reason to cut corners",
          "Use regulatory arbitrage like large incumbents do"
        ],
        "correctAnswer": 2,
        "explanation": "Rules designed for large incumbents can impose costs small alternatives cannot carry; that becomes evidence for reform, not a reason to cut corners."
      }
    ]
  },
  "s-m3": {
    "moduleId": "s-m3",
    "title": "Module 3 Knowledge Check",
    "description": "Test your understanding of justice frameworks, the distribution of transition costs, access and inclusion, and protecting vulnerable populations during exit.",
    "passingScore": 70,
    "questions": [
      {
        "question": "According to the lesson, when is the \"lifeboats\" critique of exit less valid?",
        "options": [
          "When exits require resources most people do not have",
          "When exits create models that can be scaled and replicated and include provisions for those who cannot self-exit",
          "When exits create exclusive alternatives unavailable to most",
          "When exits draw skilled people and capital away from communities"
        ],
        "correctAnswer": 1,
        "explanation": "The critique is less valid when exits create scalable, replicable models, include provisions for those who cannot self-exit, challenge extraction and maintain solidarity with those who remain."
      },
      {
        "question": "Which justice concept concerns fair processes for making exit decisions, including voice for affected communities?",
        "options": [
          "Procedural justice",
          "Restorative justice",
          "Intergenerational justice",
          "Exit equity"
        ],
        "correctAnswer": 0,
        "explanation": "Procedural justice means fair processes for making exit decisions, including voice for affected communities."
      },
      {
        "question": "Why does the lesson warn that a transition can be positive on average yet still unfair?",
        "options": [
          "Because benefits always arrive before costs",
          "Because averages are always calculated incorrectly",
          "Because costs often arrive early and are concentrated on particular groups, while benefits arrive later and are spread thinly",
          "Because only financial costs can be measured"
        ],
        "correctAnswer": 2,
        "explanation": "Costs often arrive early and visibly while benefits arrive later and spread thinly, so concentrated, immediate losses on particular groups can hide behind a positive average."
      },
      {
        "question": "How does the lesson recommend dealing with hidden and delayed legacy costs, such as pollution cleanup or unfunded pensions?",
        "options": [
          "Address them once the transition is declared a success",
          "Leave them to future governments",
          "Exclude them from plans since they cannot be measured precisely",
          "Assign responsibility at the start through bonds, funds or binding commitments"
        ],
        "correctAnswer": 3,
        "explanation": "Because slow costs appear years later, responsibility for legacy costs should be assigned at the start through bonds, funds or binding commitments rather than hoping someone will pay later."
      },
      {
        "question": "What does the capability approach imply for designing access to exit pathways?",
        "options": [
          "Offering the same support to everyone does not produce equal access",
          "Giving everyone the same subsidy guarantees equal access",
          "Resources are all that matter for exit",
          "Motivation is the main reason people fail to take up alternatives"
        ],
        "correctAnswer": 0,
        "explanation": "The capability approach focuses on what people are actually able to do and be, so two people given the same support may have very different capability to use it."
      },
      {
        "question": "What is internal exclusion, as distinguished by Iris Marion Young?",
        "options": [
          "Being kept out of a decision process altogether",
          "Being excluded from membership by a credit check",
          "Being formally included in a process while one's contributions are not taken seriously",
          "Choosing not to join an alternative system"
        ],
        "correctAnswer": 2,
        "explanation": "Internal exclusion means being formally present but having one's contributions not taken seriously; external exclusion means being kept out altogether."
      },
      {
        "question": "In a transition, which of the following is an example of a handover gap?",
        "options": [
          "A register of customers who need extra help",
          "The old system is withdrawn before its replacement works reliably for those who depend on it",
          "A pilot run in a limited area before scaling",
          "A minimum guarantee on heating in winter"
        ],
        "correctAnswer": 1,
        "explanation": "A handover gap is a period in which the old system has been withdrawn before its replacement works reliably for those who depend on it."
      },
      {
        "question": "Which practice reflects protection without paternalism?",
        "options": [
          "Categorizing people as vulnerable without their knowledge",
          "Keeping people in a failing system to keep them safe",
          "Making decisions for vulnerable groups to save them effort",
          "Including vulnerable groups in governance and keeping the door to exit open"
        ],
        "correctAnswer": 3,
        "explanation": "Protection should respect agency: ask rather than assume, let people define their own needs, include vulnerable groups in governance, and avoid safeguards that become a new form of lock-in."
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
    "description": "Test your understanding of institutional lock-in, exit-enabling governance, transition-ready organizations, and designing exit education and learning communities.",
    "passingScore": 70,
    "questions": [
      {
        "question": "According to the lesson, how does institutional lock-in usually come about?",
        "options": [
          "Through a single bad decision by incumbents",
          "Through the deliberate plotting of a few powerful actors",
          "It accumulates through path dependence, as each reasonable step makes alternatives more expensive",
          "Through members' strong preference to stay"
        ],
        "correctAnswer": 2,
        "explanation": "Lock-in is rarely the product of a single bad decision; it accumulates as each reasonable step makes the next alternative more expensive, which is why analysis should avoid villain narratives."
      },
      {
        "question": "Using Hirschman's exit and voice lens, what can high exit friction do to an institution?",
        "options": [
          "Guarantee that voice is always heard",
          "Weaken accountability, because the institution has little to lose by ignoring complaints",
          "Drain the institution of its most capable members",
          "Remove any risk of crisis or collapse"
        ],
        "correctAnswer": 1,
        "explanation": "When members cannot leave, the institution has little to lose by ignoring complaints, and dissatisfaction can be pushed underground until it surfaces as crisis."
      },
      {
        "question": "How do exit and voice relate in exit-compatible governance?",
        "options": [
          "They work best together: credible exit makes leaders take voice seriously, and effective voice gives members reason to stay",
          "Voice should replace exit wherever possible",
          "Exit should be made effortless so voice becomes unnecessary",
          "They are unrelated and should be designed separately"
        ],
        "correctAnswer": 0,
        "explanation": "Exit and voice are complements: a credible exit option makes leaders take voice seriously, and effective voice gives members a reason to stay and repair rather than leave."
      },
      {
        "question": "Why do polycentric and nested governance structures matter for Exodology?",
        "options": [
          "They concentrate power at a single point for faster decisions",
          "They prevent any unit from ever leaving the federation",
          "They remove the need for shared rules",
          "They allow partial exit, so a local unit can change course without the whole system breaking apart"
        ],
        "correctAnswer": 3,
        "explanation": "Polycentric and nested structures have many centers with real authority linked by shared rules, allowing partial exit at the local level without the whole system breaking apart."
      },
      {
        "question": "According to the lesson on transition-ready organizations, why do well-managed organizations often fail to change course?",
        "options": [
          "Their leaders are always short-sighted",
          "Good management of the current regime builds internal lock-in and makes small new approaches look unattractive",
          "They lack any assets or skills",
          "They change course too often"
        ],
        "correctAnswer": 1,
        "explanation": "Drawing on Christensen, well-managed firms often fail because they do what good management recommends, building assets, skills and revenue around the current regime and undervaluing new approaches."
      },
      {
        "question": "What role do protected internal niches play in a transition-ready organization?",
        "options": [
          "They let alternatives be tested before competing on established terms, building parallel systems before the exit window opens",
          "They should be protected permanently regardless of results",
          "They replace the existing business immediately",
          "They are used to hide failing operations from members"
        ],
        "correctAnswer": 0,
        "explanation": "Internal niches are protected spaces where new approaches can be tested, building parallel systems so an alternative already exists when the exit window opens, with clear learning goals and decision points."
      },
      {
        "question": "Which principle reflects the lesson on designing exit education?",
        "options": [
          "Start with content and cover as much as possible",
          "Teach strategy before foundations",
          "Assess learners only through knowledge tests",
          "Start with learner needs and scaffold from simple to complex"
        ],
        "correctAnswer": 3,
        "explanation": "Exit education should start with what learners need to be able to do, emphasize experiential learning, scaffold from foundation to strategy, and assess capability, not just knowledge."
      },
      {
        "question": "In building learning communities, what shift in the teacher's role does the lesson describe?",
        "options": [
          "From facilitator to sole expert",
          "From guiding to directing every step",
          "From teacher as expert to teacher as facilitator who creates conditions for learning",
          "From group learning to individual instruction only"
        ],
        "correctAnswer": 2,
        "explanation": "The lesson describes shifting from teacher as expert to teacher as facilitator: creating conditions for learning, guiding rather than directing, and trusting the learning process."
      }
    ]
  },
  "s-m7": {
    "moduleId": "s-m7",
    "title": "Module 7 Knowledge Check",
    "description": "Test your understanding of exit stewardship, facilitation and coaching, generational thinking, resilience across time, long-term evaluation and adaptive management.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following is part of steward ethics?",
        "options": [
          "Encourage everyone to exit as soon as possible",
          "Never push exit on those not ready and respect autonomy in decisions",
          "Share clients' situations openly to build networks",
          "Avoid referring clients elsewhere to maintain trust"
        ],
        "correctAnswer": 1,
        "explanation": "Steward ethics require never pushing exit on those not ready, respecting autonomy, maintaining confidentiality, acknowledging the limits of one's knowledge and referring when appropriate."
      },
      {
        "question": "A client with debt and no savings wants to quit their job and move to an ecovillage immediately. What is the coaching response modeled in the stewardship scenarios?",
        "options": [
          "Ask questions that help them examine their readiness",
          "Support their excitement and help them plan the move",
          "Tell them it is a bad idea and they should wait",
          "Present a detailed plan for them to adopt"
        ],
        "correctAnswer": 0,
        "explanation": "The coaching approach asks questions that help the client discover what they need; supporting the move ignores red flags, and telling them to wait imposes judgment rather than facilitating reflection."
      },
      {
        "question": "How does generational Exodology approach legacy?",
        "options": [
          "By locking in today's solutions so future generations cannot undo them",
          "By focusing only on what can be achieved within one lifetime",
          "With humility about future needs, avoiding binding future generations to our solutions",
          "By prioritizing urgency over any long-term patience"
        ],
        "correctAnswer": 2,
        "explanation": "Legacy requires humility about future needs; we ask what we owe future generations and how to avoid binding them to our solutions, while balancing strategic patience with tactical urgency."
      },
      {
        "question": "Which resilience principles does the Resilience Across Time lesson name?",
        "options": [
          "Centralization, uniformity and scale",
          "Speed, growth and efficiency",
          "Secrecy, control and permanence",
          "Diversity, redundancy and modularity"
        ],
        "correctAnswer": 3,
        "explanation": "Resilience comes from diversity, redundancy and modularity: multiple ways to meet each need and parts that can fail without system collapse."
      },
      {
        "question": "Why can short-term measures mislead judgments about whether an exit succeeded?",
        "options": [
          "Early success can hide fragility and early difficulty can hide success",
          "Short-term measures always overstate costs",
          "Baselines never change over time",
          "Costs always appear immediately"
        ],
        "correctAnswer": 0,
        "explanation": "An alternative thriving early has shown it can start, not that it can last, while the transition burden is often heaviest at the start; baselines also drift and some costs arrive late."
      },
      {
        "question": "How does exit coaching help clients, according to the Facilitation and Coaching lesson?",
        "options": [
          "By telling clients which exit to choose",
          "By eliciting the client's own wisdom: helping them identify their motivations, explore options and plan, with accountability without judgment",
          "By completing the client's dependency map for them",
          "By pushing clients past analysis toward an immediate decision"
        ],
        "correctAnswer": 1,
        "explanation": "Stewards use coaching to help others navigate exit without imposing solutions: helping clients identify their own motivations, facilitating dependency mapping and providing accountability without judgment."
      },
      {
        "question": "What distinguishes double-loop learning from single-loop learning?",
        "options": [
          "It adjusts actions to reach a goal more efficiently",
          "It repeats the same review cycle twice",
          "It questions the goals and assumptions behind actions, not only the actions themselves",
          "It relies only on quantitative monitoring data"
        ],
        "correctAnswer": 2,
        "explanation": "Single-loop learning adjusts actions to reach a goal; double-loop learning questions the goals and assumptions themselves, linking adaptation back to the response spectrum."
      },
      {
        "question": "Which is described as a misuse or limit of adaptive management?",
        "options": [
          "Stating assumptions explicitly before acting",
          "Agreeing decision points in advance",
          "Sequencing reversible steps before harder-to-reverse commitments",
          "Using \"we will adapt as we go\" to avoid committing to clear goals, protections or timelines"
        ],
        "correctAnswer": 3,
        "explanation": "Adaptive management can become an excuse for vagueness; used properly it requires more explicit commitments, such as stated assumptions, defined monitoring and agreed decision points."
      }
    ]
  },
  "s-m8": {
    "moduleId": "s-m8",
    "title": "Module 8 Knowledge Check",
    "description": "Test your understanding of integrating the strategic frameworks, movement dynamics, narrative and framing, and applying them together to a complex case.",
    "passingScore": 70,
    "questions": [
      {
        "question": "In the integration lesson, what is \"framework hopping\"?",
        "options": [
          "Applying every framework in a fixed order without looping back",
          "Switching to an easier analytical lens to avoid a difficult question raised by another",
          "Treating the frameworks as boxes to tick in a plan that connects nothing",
          "Combining two frameworks into a new model of transition"
        ],
        "correctAnswer": 1,
        "explanation": "Framework hopping is switching to an easier lens to avoid a hard question, for example redescribing a justice problem as a communication problem or a governance failure as a technical one."
      },
      {
        "question": "According to the working order of questions, which question should an integrated analysis begin with?",
        "options": [
          "Who will guide the transition, and how will it last?",
          "How will people come to understand and join it?",
          "What rules enable or block it?",
          "Should we leave, and from what?"
        ],
        "correctAnswer": 3,
        "explanation": "The sequence begins with diagnosis: should we leave, and from what, using dependency mapping, the response spectrum, the signals and analysis of regime, niches, landscape and lock-in."
      },
      {
        "question": "Why does the lesson say justice and stability reinforce each other?",
        "options": [
          "Transitions that leave many people worse off tend to provoke backlash, which threatens stability",
          "Stable systems automatically distribute transition burdens fairly",
          "Justice analysis can be skipped once stability has been secured",
          "Fast transitions are always both the most just and the most stable"
        ],
        "correctAnswer": 0,
        "explanation": "Transitions that leave many worse off provoke backlash that threatens stability, so attending to transition burden is both right and protective of the transition itself."
      },
      {
        "question": "The tension the lesson calls \"exit versus voice\" refers to what problem?",
        "options": [
          "Narratives that overpromise recruit people quickly but then lose their trust",
          "Larger-scale strategies risk imposing uniform solutions on different places",
          "Building alternatives outside a system can weaken pressure for reform inside it",
          "People need predictable commitments while adaptive management needs freedom to change course"
        ],
        "correctAnswer": 2,
        "explanation": "Building alternatives outside a system can weaken pressure for reform inside it, so strategic plans often need both parallel systems for those who leave and continued advocacy for those who stay."
      },
      {
        "question": "Which of the following is listed under movement strategy in the lesson on exit as movement?",
        "options": [
          "Theory of change, target analysis, tactic selection and escalation",
          "Organizers, spokespeople, researchers and supporters",
          "Caring for participants, celebrating victories and keeping a sustainable pace",
          "Shared identity, networks, cultural production and movement infrastructure"
        ],
        "correctAnswer": 0,
        "explanation": "Movement strategy asks how change happens (theory of change), who can deliver it (target analysis), what actions advance the goal (tactic selection) and how to build power over time (escalation)."
      },
      {
        "question": "How do counter-narratives, as described in the narrative and framing lesson, respond to dominant narratives about exit?",
        "options": [
          "They accept that exit is failure but argue it is sometimes necessary",
          "They avoid framing altogether and present only data",
          "They frame exit as dropping out in order to attract dissenters",
          "They frame exit as courage, responsibility and innovation rather than failure"
        ],
        "correctAnswer": 3,
        "explanation": "Dominant narratives frame exit as failure; counter-narratives reframe it as courage, responsibility and innovation, after identifying the dominant frames and constructing alternatives."
      },
      {
        "question": "In the Lowmarsh Valley Integration Challenge, which groups does the case single out for particular attention when applying the justice questions?",
        "options": [
          "Larger farms, the private operator and the processing plant's owners",
          "The regional council members who want to renegotiate the concession",
          "Smaller farms, seasonal workers, the fishing community and households near the salty coastal wells",
          "Residents who have already formed the informal water-sharing group"
        ],
        "correctAnswer": 2,
        "explanation": "The challenge asks students to consider in particular smaller farms, seasonal workers, the fishing community and households near the salty coastal wells, and to center the analysis on those with the least exit capability."
      },
      {
        "question": "What does the Integration Challenge require the final step to include?",
        "options": [
          "A single correct answer agreed with the regional council",
          "At least two tensions between frameworks and how the plan resolves or manages them",
          "A decision to exit the groundwater system immediately",
          "A list of every framework mentioned without cross-references"
        ],
        "correctAnswer": 1,
        "explanation": "The final step must name at least two tensions between frameworks, explain how the plan handles each and who is prioritized in unavoidable trade-offs; there is no single correct answer."
      }
    ]
  },
  "s-m9": {
    "moduleId": "s-m9",
    "title": "Module 9 Knowledge Check",
    "description": "Test your understanding of strategic synthesis and capstone preparation: choosing a focus, researching context, scoping the plan and developing the proposal.",
    "passingScore": 70,
    "questions": [
      {
        "question": "In the Strategic Exodology Synthesis lesson, what three kinds of connection does the steward make as \"linchpin\"?",
        "options": [
          "Between allies, opponents and neutral parties",
          "Between scales, timescales and domains",
          "Between optimization, reform and exit",
          "Between policy, technology and markets"
        ],
        "correctAnswer": 1,
        "explanation": "Strategic exodologists connect scales (individual to world), timescales (immediate to generational) and domains (food, energy, water, economy)."
      },
      {
        "question": "Why does the capstone focus lesson warn against choosing a system because you already know you want to leave it?",
        "options": [
          "It invites teleological framing by assuming the transition has an inevitable endpoint",
          "It makes the system too small to involve governance and policy",
          "It turns the capstone into a hero narrative about one leader",
          "It means no comparable cases can be found"
        ],
        "correctAnswer": 0,
        "explanation": "Choosing the conclusion first invites teleological framing; the whole response spectrum should stay open so the question of when to leave is real."
      },
      {
        "question": "Which scale does the lesson describe as the most common capstone choice, large enough to involve public infrastructure and policy yet small enough to map dependencies with some precision?",
        "options": [
          "Community scale",
          "National scale",
          "Civilizational scale",
          "Regional scale"
        ],
        "correctAnswer": 3,
        "explanation": "Regional scale (a city, county or bioregion) is the most common choice because it involves public infrastructure and policy while still allowing fairly precise dependency mapping."
      },
      {
        "question": "According to the research lesson, what is \"triangulation\"?",
        "options": [
          "Mapping stakeholders by dependence, interests and power",
          "Comparing three similar transitions from other countries",
          "Checking an important claim against more than one independent kind of source",
          "Choosing the source that best supports your recommendation when sources disagree"
        ],
        "correctAnswer": 2,
        "explanation": "Triangulation means checking an important claim against more than one kind of source; when sources disagree, the disagreement should be recorded rather than quietly resolved."
      },
      {
        "question": "Which question does the research lesson describe as especially important because it is often the strongest indicator of reform exhaustion?",
        "options": [
          "What has already been tried?",
          "Which technology will free the region?",
          "Who is the visionary leader behind the system?",
          "How quickly can exit be completed?"
        ],
        "correctAnswer": 0,
        "explanation": "Evidence of repeated reform efforts, and why they succeeded or failed, is often the strongest indicator of whether reform exhaustion has set in."
      },
      {
        "question": "Why does the scoping lesson call scope an ethical decision?",
        "options": [
          "Because scope statements must be approved by an ethics board",
          "Because boundaries determine whose dependence and transition burden the plan counts and who falls outside it",
          "Because a narrow scope always produces a more just plan",
          "Because the planning fallacy only affects ethical judgments"
        ],
        "correctAnswer": 1,
        "explanation": "Analysts choose boundaries, and each choice brings some people and effects into view and pushes others out, such as overlooking those owed residual duty or exporting burdens elsewhere."
      },
      {
        "question": "Which assumptions does the scoping lesson say deserve special attention and may justify preferring reversible steps?",
        "options": [
          "High confidence and low impact",
          "High confidence and high impact",
          "Low confidence and low impact",
          "Low confidence and high impact"
        ],
        "correctAnswer": 3,
        "explanation": "Assumptions with low confidence and high impact belong in the risk analysis and may justify reversible steps, as the principle of precaution recommends."
      },
      {
        "question": "In the proposal exercise, which working title does the lesson recommend over \"Exiting the regional water utility\"?",
        "options": [
          "\"Why the regional water utility must be abandoned\"",
          "\"A cooperative future for the river valley\"",
          "\"Water supply dependence in a river valley region\"",
          "\"How one leader can free the valley from its utility\""
        ],
        "correctAnswer": 2,
        "explanation": "The working title should describe the system rather than announce a conclusion, so the focus statement frames an open transition question."
      }
    ]
  },
  "s-m10": {
    "moduleId": "s-m10",
    "title": "Module 10 Knowledge Check",
    "description": "Test your understanding of the Strategic capstone project, its components and criteria, final presentation preparation and reflection on your Exodology path.",
    "passingScore": 70,
    "questions": [
      {
        "question": "Which of the following is one of the capstone project options listed in the overview?",
        "options": [
          "A personal household exit plan",
          "A stewardship portfolio documenting your practice",
          "A single-technology adoption proposal",
          "A literature review of all transition research"
        ],
        "correctAnswer": 1,
        "explanation": "The project options are a regional transition plan, an exit guide for a specific domain, a teaching curriculum design and a stewardship portfolio, chosen according to your calling."
      },
      {
        "question": "Which set correctly lists the capstone evaluation criteria?",
        "options": [
          "Application of concepts, realism of analysis, creativity of approach, ethical grounding and quality of reflection",
          "Length, number of sources, visual design and presentation speed",
          "Speed of exit, cost savings, number of participants and media coverage",
          "Executive summary, diagnosis, strategy and limits"
        ],
        "correctAnswer": 0,
        "explanation": "The capstone is evaluated on application of concepts, realism of analysis, creativity of approach, ethical grounding and quality of reflection."
      },
      {
        "question": "In the capstone workbook, which questions belong to the step \"Assess justice implications\"?",
        "options": [
          "What is the theory of change? What sequence of interventions?",
          "How does this persist? What are resilience mechanisms?",
          "Who is affected? Who has power? Who could ally or oppose?",
          "Who benefits and who bears costs? How is equity addressed?"
        ],
        "correctAnswer": 3,
        "explanation": "Assessing justice implications asks who benefits and who bears costs, and how equity is addressed."
      },
      {
        "question": "What are the three jobs of the final presentation?",
        "options": [
          "Persuasion, recruitment and fundraising",
          "Integration, accountability and communication",
          "Diagnosis, strategy and evaluation",
          "Summary, critique and reflection"
        ],
        "correctAnswer": 1,
        "explanation": "The presentation shows the plan is a coherent whole (integration), opens the work to scrutiny (accountability) and makes it usable by people not involved in writing it (communication)."
      },
      {
        "question": "When presenting to different audiences, what does the lesson require?",
        "options": [
          "Each audience should receive only the parts of the plan that favor it",
          "A single identical version must be used for every audience",
          "Different versions are acceptable, but every version must tell the same truth",
          "Community members should receive a simplified version without trade-offs"
        ],
        "correctAnswer": 2,
        "explanation": "You may need different versions for peers, community members and policymakers, but every version must tell the same truth."
      },
      {
        "question": "Which practice does the lesson recommend for presenting uncertain estimates of cost or timing honestly?",
        "options": [
          "Show a range and explain what drives it",
          "Give a single precise figure to build confidence",
          "Leave uncertain estimates out of the presentation",
          "Truncate chart axes so changes are easier to see"
        ],
        "correctAnswer": 0,
        "explanation": "Honest presentation shows ranges rather than false precision and explains what drives the uncertainty; truncated axes are among the ways visuals mislead."
      },
      {
        "question": "What does the lesson mean by avoiding \"deficit framing\" when representing affected people?",
        "options": [
          "Not mentioning the costs a plan imposes on a community",
          "Not reporting any community views without written consent",
          "Not describing a community's dependence on the existing system",
          "Not describing a community only by what it lacks, overlooking its knowledge, capacities and agency"
        ],
        "correctAnswer": 3,
        "explanation": "Communities should be described by their dependence and constraints but also by their knowledge, capacities and existing alternatives; people with little exit capability are not without agency."
      },
      {
        "question": "The final reflection asks \"What is your vision for a post-exit world?\" What emphasis does the lesson attach to this question?",
        "options": [
          "What we are exiting toward, not just from",
          "Which systems should be allowed to collapse",
          "How quickly every system can be left",
          "Which individual will lead the post-exit world"
        ],
        "correctAnswer": 0,
        "explanation": "The reflection asks what we are exiting toward, not just from, as part of envisioning a post-exit world."
      }
    ]
  }
}
