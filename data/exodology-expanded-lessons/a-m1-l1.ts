import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m1-l1',
  title: 'Dependency Mapping Fundamentals',
  duration: '25 min',
  type: 'instruction',
  content: {
    introduction: `Before you can exit a system, you must understand how you depend on it. Dependency mapping is the foundational skill of Applied Exodology—the ability to visualize, analyze, and prioritize the connections that bind you to systems. This lesson teaches the core methodology.

This lesson opens the Applied path, so it assumes you already know the basic vocabulary from Foundations: structural dependence, exit friction, and the difference between a full exit and a partial or soft one. What changes here is the level of rigor. In Foundations you learned to notice dependencies; in Applied work you learn to record them systematically, compare them, and use the result to decide where to spend scarce time, money and attention.

A good dependency map is a decision tool, not a picture for its own sake. The test of a map is whether it changes what you do next. Throughout the lesson we will build one worked example, a household's winter heating, so you can see each step applied to a real chain of dependencies. The same method scales to a cooperative, a neighborhood or a town, and later lessons in this path apply it to energy, water, food and finance.

Dependency mapping borrows from several established fields. Systems thinking supplies the ideas of feedback, buffers and leverage points. Reliability engineering and risk analysis supply the idea of the single point of failure. Research on accidents and disasters shows how failures cascade through tightly linked systems. Community development practice adds asset mapping, which records the capacities a community already has. None of these fields uses the word Exodology, but each gives you tools worth borrowing.`,

    sections: [
      {
        title: 'What Is Dependency Mapping?',
        content: `A dependency map is a visual representation of how a system relies on external inputs, services, and resources. For exit planning, it reveals:

**What you need**: The actual goods and services the system provides
**Where they come from**: The supply chains and sources that deliver them
**What would break**: The vulnerabilities if any link fails
**Where to intervene**: The leverage points where alternatives could be built

Unlike organizational charts or process flows, dependency maps focus specifically on what would need to be replaced or provided independently for exit to succeed.

**A worked example: winter heat.** Take a household in a cold-climate town that heats with a natural gas furnace. The core function is keeping the home at a safe temperature through the winter. A first pass might list one dependency, the gas company. A proper map finds more:

- **Gas supply.** The local utility's distribution pipes, regional transmission pipelines, processing plants and wells.
- **Electricity.** Most modern forced-air gas furnaces need electricity for the igniter, the controls and the blower fan. In a power cut the furnace usually stops even though gas is still available. This is exactly the kind of hidden dependency that mapping is designed to surface.
- **Money.** Monthly bills depend on income, which depends on a job, a pension or benefits.
- **Maintenance.** A technician, replacement parts, and the knowledge to recognize a fault before it becomes a breakdown.
- **The building itself.** Insulation and air sealing decide how quickly the house loses heat when the system fails, and so how long the household has before the situation becomes dangerous.

The last item shows why a dependency map differs from a process diagram. A process diagram of heating would show gas going in and heat coming out. A dependency map asks a different question: what has to keep working for this need to be met, and how long can you manage if it stops? That second half, the time you have before a failure becomes a crisis, is often the most useful thing a map records.`
      },
      {
        title: 'The Mapping Process',
        content: `Follow these steps to create a dependency map:

**Step 1: Identify the Core Function**
What does this system provide that you need? Be specific. "Food" is too broad; "daily calories, protein, and micronutrients" is more useful.

**Step 2: Trace Upstream**
For each core function, trace backward: Where does it come from? What enables that source? Keep going until you reach resources you control or fundamental inputs (sunlight, water, labor).

**Step 3: Mark Critical Nodes**
Identify points where failure would cascade. A "critical node" is any point where:
- No alternative path exists
- Failure affects multiple downstream functions
- Recovery time is long relative to need

**Step 4: Assess Exit Friction**
For each dependency, estimate how difficult it would be to replace or provide independently. Consider cost, knowledge, time, and social factors.

**Step 5: Identify Leverage Points**
Find places where intervention could reduce multiple dependencies simultaneously, or where alternatives already exist.

Applied to the heating example, the five steps look like this:

1. **Core function**: keep indoor temperature above a safe minimum. Be specific about who lives there, because the safe minimum for infants, older adults and people with some health conditions is higher than for healthy adults.
2. **Trace upstream**: gas and electricity both trace back to regional networks the household does not control. Electricity may itself depend on gas-fired power plants, so the two chains are not independent.
3. **Critical nodes**: electricity stands out. It feeds the furnace, but also the refrigerator, phone charging, and possibly a well pump. One outage hits several functions at once, which meets two of the three tests for a critical node.
4. **Exit friction**: replacing the furnace with a heat pump is costly and still depends on electricity; a wood stove needs a safe chimney, a fuel supply, storage space and skill; better insulation is cheaper for the benefit it gives and works whatever the heat source.
5. **Leverage points**: insulation and air sealing reduce dependence on every heat source at once, which is exactly what this step looks for. A battery or small generator sized to run the furnace's blower and controls is another candidate, because it addresses the electricity node directly.

The link between gas and electricity in step 2 is not hypothetical. During the February 2021 winter storm in Texas, frozen equipment cut natural gas production while power plants also failed, and power cuts in turn affected parts of the gas supply system. Failures in each system worsened the other, and millions of people lost power, many for days. A map that drew gas and electricity as two separate lines would have missed the most important feature of that situation.

**Recording the map.** You do not need special software; a large sheet of paper or a shared spreadsheet works. For each dependency, record the function it serves, its source, any alternatives, what happens and how quickly if it fails, an exit friction rating (for example low, medium or high for each of cost, knowledge, time and social factors), and the date you checked. The date matters, because maps go out of date.`
      },
      {
        title: 'Reading a Dependency Map',
        content: `A completed dependency map reveals several key insights:

**Depth of Dependence**
How many layers separate you from fundamental resources? More layers = more vulnerability.

**Breadth of Dependence**
How many different systems do you depend on? More breadth = more potential failure points, but also more resilience if any single system fails.

**Concentration Risk**
Do multiple functions depend on a single source? Concentration creates critical nodes.

**Exit Readiness**
Which dependencies have existing alternatives? Which would require building new capacity?

**Priority Sequence**
Which dependencies should be addressed first based on criticality and feasibility?

Two of these readings need care, because a quick reading can point the wrong way.

**Depth is not automatically bad.** More layers between you and fundamental resources usually mean more places for something to go wrong and less visibility into what is happening. But a layer can also hold a buffer, such as a warehouse, a reservoir, a fuel tank or a savings account, that absorbs shocks. When you read depth, ask of each layer whether it adds fragility or adds a buffer.

**Breadth only helps when it includes redundancy.** The statement above, that more breadth brings more failure points but also more resilience, is true only in a specific sense. Depending on many systems for many different functions simply adds exposure. Resilience comes from having more than one independent source for the same function, so that one can stand in for another. Engineers call this redundancy. Two grocery stores supplied by the same distribution center are less redundant than they look.

This is where concentration risk shows itself. In March 2021 the container ship Ever Given blocked the Suez Canal for about six days and held up a large volume of world trade, because so many routes passed through one channel. After the 2011 earthquake and tsunami in Japan, damage to a single semiconductor plant disrupted car production in several countries. Both were nodes that looked like ordinary links until they failed.

The sociologist Charles Perrow described systems as **tightly coupled** when a failure in one part moves quickly to others with little slack to stop it. When you read your map, look for places where there is no buffer and no time between one link and the next. Those are where cascades start.

**Apply it.** Take your heating map, or any map you have begun, and mark each dependency with two letters: C if it passes the critical-node tests from the previous section, and R if a real, working alternative already exists. Dependencies marked C but not R are your first priorities.`
      },
      {
        title: 'Common Mapping Mistakes',
        content: `Avoid these common errors:

**Stopping too early**: If your map ends at "grocery store," you haven't traced far enough. Where does the grocery store get food?

**Ignoring soft dependencies**: Don't just map physical goods. Map knowledge, social connections, and institutional relationships too.

**Assuming stability**: Today's map shows current dependencies. Systems change. Rerun periodically.

**Mapping alone**: Your dependencies interlock with your community's. Map collectively when possible.

**Forgetting yourself**: Your skills, health, and relationships are part of the map. What do you depend on to maintain them?

A few further mistakes are common among people who have already done some mapping.

**Confusing leverage with control.** Donella Meadows, whose writing on leverage points is among the best known in systems thinking, observed that the places people usually push, such as adjusting numbers and quantities, are often the weakest, while changes to information flows, rules and goals can matter far more. Her ranking concerns whole systems, while this lesson uses leverage point more narrowly, to mean a place where one action reduces several dependencies. Both senses share a lesson: look for the change that alters the structure, not just the amount.

**Mapping only needs.** The community developers John Kretzmann and John McKnight argued that communities described only by their needs and deficits come to see themselves that way, and they proposed mapping assets instead: the skills, associations, institutions and physical resources already present. Pair every dependency map with an asset map. Learning that three neighbors can repair small engines, or that a nearby hall has a kitchen and a generator, changes your exit friction estimates.

**Assuming exit is always the answer.** Mapping often shows that the best move is not to leave a system but to make your reliance on it less brittle by adding a buffer, a backup or a relationship. Reform of the main system, such as pressing a utility to harden its network or a council to fund weatherization, can lower risk for everyone at once. Amory and Hunter Lovins made a version of this argument about national energy systems: resilience can be designed in. A good map helps you see when voice and reform are a better use of effort than exit.

**Try it.** Choose one core function in your own life or organization. Spend twenty minutes tracing it upstream at least four layers, mark the critical nodes, rate exit friction, and name one leverage point. Then show the map to one other person who shares the dependency and ask what you missed. You will almost always learn something.`
      }
    ],

    keyTakeaways: [
      'Dependency maps visualize how systems connect to needs you must meet',
      'The mapping process traces from core functions back to fundamental inputs',
      'Critical nodes and leverage points reveal where to focus exit efforts',
      'Maps should be comprehensive, updated, and ideally developed collectively',
      'Hidden dependencies, such as a gas furnace that needs electricity to run, are what mapping is designed to surface',
      'Resilience comes from redundancy for the same function, not from depending on many different systems',
      'Pair dependency maps with asset maps, and consider buffers and reform as well as exit'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Introduces stocks, feedback, buffers and leverage points, the systems ideas that underpin reading a dependency map.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Explains how tight coupling and complex interactions let small failures cascade, which is what critical-node analysis tries to anticipate.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Lovins, Amory B.; Lovins, L. Hunter',
        title: 'Brittle Power: Energy Strategy for National Security',
        year: 1982,
        publisher: 'Brick House Publishing',
        relevance: 'Analyzes the vulnerabilities of centralized energy systems and argues for designing resilience in, a large-scale version of dependency mapping.',
        url: 'https://openlibrary.org/works/OL5898356W'
      },
      {
        author: 'Kretzmann, John P. & McKnight, John L.',
        title: 'Building Communities from the Inside Out: A Path Toward Finding and Mobilizing a Community\'s Assets',
        year: 1993,
        publisher: 'ACTA Publications',
        relevance: 'Sets out asset-based community mapping, the counterpart to dependency mapping that records capacities a community already has.',
        url: 'https://openlibrary.org/works/OL11978971W'
      }
    ]
  },
  learningObjectives: [
    'Create comprehensive dependency maps',
    'Identify critical nodes and single points of failure',
    'Analyze dependency chains and cascading risks',
    'Find leverage points for building alternatives',
    'Distinguish redundancy from mere breadth of dependence'
  ],
  keyTerms: [
    { term: 'Dependency Map', definition: 'A visual representation of how a system relies on external inputs, services, and resources.' },
    { term: 'Critical Node', definition: 'A point in a dependency chain whose failure would cause system breakdown.' },
    { term: 'Exit Leverage Point', definition: 'A dependency that can be addressed to increase exit capability significantly.' },
    { term: 'Exit Friction', definition: 'The resistance, costs, and barriers that make replacing a dependency difficult.' },
    { term: 'Single Point of Failure', definition: 'A component or source with no backup, whose failure alone stops the function it supports.' },
    { term: 'Redundancy', definition: 'Having more than one independent source or path for the same function, so one can stand in if another fails.' },
    { term: 'Tight Coupling', definition: 'A condition in which a failure in one part of a system spreads quickly to other parts because there is little slack, buffer or time between them.' },
    { term: 'Asset Map', definition: 'A record of the skills, relationships, institutions and physical resources a person or community already has, used alongside a dependency map.' }
  ]
}

export default lesson
