import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m3-l1',
  title: 'Push and Pull Factors',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Understanding why people leave systems requires analyzing both the forces that push them out and the attractions that pull them toward alternatives. This dual-force model—borrowed from migration studies but adapted for Exodology—provides a framework for predicting, planning, and supporting system exits.

The idea has a real history in migration studies. In the 1880s the geographer Ernst Georg Ravenstein proposed a set of "laws of migration" based on British census data. In 1966 the demographer Everett S. Lee published "A Theory of Migration" in the journal Demography, which is the work most often credited with the push-pull model. Lee sorted the forces behind any move into four groups: **factors associated with the area of origin**, **factors associated with the area of destination**, **intervening obstacles** that lie between the two (distance, cost, laws, lack of information), and **personal factors** that make the same conditions feel different to different people. He also pointed out that people usually know their place of origin far better than their destination, so decisions about a destination always involve some guesswork.

Exodology borrows this structure and applies it to systems rather than places. A person might leave a job, an industry, a religious community, a city, a utility grid or a food system. The same questions apply: what is pushing them away, what is drawing them toward something else, what stands in between, and how does their own situation shape the decision?

This lesson builds the framework step by step. You will see how push and pull combine, how they fall into categories, why people often stay in systems that are clearly failing, and how practitioners can use the model without treating it as a precise formula. Keep in mind throughout that exit is only one possible response. Sometimes the better answer is to stay and press for change, and a good push-pull analysis should make that option visible too.`,

    sections: [
      {
        title: 'The Push-Pull Framework',
        content: `Every exit decision involves two sets of forces:

**Push Factors**: Conditions within the current system that make staying difficult, painful, or impossible. These are the "away from" motivations.

**Pull Factors**: Attractions of alternatives that make leaving appealing. These are the "toward" motivations.

Most exits involve both. Pure push (fleeing with nowhere to go) leads to precarity. Pure pull (leaving a functional system for something better) is rare. Understanding the mix of push and pull helps predict exit patterns and design better alternatives.

**A historical example.** Between roughly the First World War and 1970, around six million Black Americans left the rural South for cities in the North and West, a movement now called the Great Migration and told in detail in Isabel Wilkerson's The Warmth of Other Suns. The push factors included Jim Crow segregation laws, racial terror including lynching, and sharecropping arrangements that kept many families in debt. The pull factors included industrial jobs in cities such as Chicago, Detroit and New York, especially when wartime labor shortages opened factory work, along with letters from relatives who had already moved and Black newspapers that described life up North. Neither force alone explains the movement. Push had existed for decades; it was the arrival of real pull, and of networks that made the trip feel possible, that turned private misery into mass movement.

**Push and pull are perceptions, not just conditions.** Lee stressed that what matters is how a person sees the conditions at origin and destination. Two people in the same workplace can experience the same management change as a crisis or as a minor annoyance. This is why surveys of "why people leave" often show a wide spread of reasons for what looks, from outside, like a single event.

**Push and pull are not the only responses.** Albert O. Hirschman's Exit, Voice, and Loyalty (1970) offers a useful companion lens. When an organization declines, members can leave (exit) or speak up and try to fix it (voice), and loyalty tends to delay exit and encourage voice. A push factor, in other words, is not automatically a reason to leave. It may instead be a reason to organize for change from within.`
      },
      {
        title: 'Categories of Push Factors',
        content: `Push factors fall into several categories:

**Economic Push**: Declining wages, job loss, unaffordable costs, debt traps, lack of economic opportunity.

**Environmental Push**: Pollution, resource depletion, climate impacts, health hazards, ecosystem collapse.

**Social Push**: Discrimination, exclusion, violence, breakdown of community, loss of social support.

**Political Push**: Repression, corruption, lack of representation, unjust laws, institutional failure.

**Existential Push**: Loss of meaning, values conflict, identity suppression, spiritual emptiness.

The strength of push factors determines urgency. Weak push creates discomfort; strong push creates desperation.

**Categories overlap.** Real push factors rarely arrive in one category. A factory closure is economic, but it also breaks up a community (social), may leave behind contaminated land (environmental), and can damage people's sense of identity and purpose (existential). Sorting push factors into categories is useful for analysis, but expect most real cases to touch several categories at once.

**Speed matters as well as strength.** A sudden push, such as a flood, an eviction notice or a layoff, gives little time to plan. A slow push, such as rising rents or a gradual decline in working conditions, allows planning but is easy to ignore until it becomes severe. The lessons later in this module return to this distinction, because slow push often closes the window for a calm, planned exit without anyone noticing.

**Worked example.** Consider a hospital nurse thinking about leaving. Economic push: wages that have not kept up with local rent. Social push: a team that has lost its experienced members. Political push: no meaningful say in staffing decisions. Existential push: a sense of being unable to give patients proper care, which conflicts with the reason they entered nursing. Listing these separately helps clarify which pushes could be addressed by reform (staffing ratios, a union, a new manager) and which might only be resolved by leaving.`
      },
      {
        title: 'Categories of Pull Factors',
        content: `Pull factors also fall into categories:

**Economic Pull**: Better opportunities, fair compensation, ownership possibilities, sustainable livelihoods.

**Environmental Pull**: Clean air and water, healthy ecosystems, sustainable practices, connection to nature.

**Social Pull**: Community belonging, mutual support, shared values, cultural expression.

**Political Pull**: Voice in decisions, just governance, rights protection, meaningful participation.

**Existential Pull**: Purpose, meaning, alignment with values, spiritual fulfillment.

Strong pull factors make exit destinations viable. Without pull, exit becomes flight rather than transition.

**Pull must be real, not just attractive.** Lee's point about uneven knowledge matters most here. People tend to see their current system in full detail, flaws included, while they see an alternative mostly through its best features: a recruitment brochure, a friend's highlights, an idealized picture of rural life. This means pull factors are often overestimated. A good analysis checks pull against evidence: talking to people who already live in the alternative, visiting, trying it on a small scale first.

**Networks are a powerful form of pull.** Migration researchers have long observed that people tend to move where others they know have already gone, a pattern often called chain migration. The economist Paul Collier, in Exodus (2013), discusses how an established diaspora lowers the cost and risk of migrating for those who follow. The same applies to system exit: the first members of a new cooperative, community or profession make it far easier for the next ones by offering information, housing, introductions and reassurance.

**Worked example, continued.** For the nurse, possible pulls include a nearby clinic with better staffing (economic and existential), a nurse-run cooperative home care agency (economic and political), or a move to a lower-cost town where a friend already works (social). Each pull is worth testing: what is the clinic's actual turnover? Is the cooperative financially stable? What is the friend's honest account?`
      },
      {
        title: 'The Exit Threshold',
        content: `The exit threshold is the point where push and pull factors together overcome inertia and barriers:

**Inertia**: The tendency to stay with the familiar, even when it's not optimal. Includes habit, comfort with known difficulties, and fear of unknown challenges.

**Barriers**: Structural obstacles to exit—financial costs, legal restrictions, social ties, lack of alternatives, knowledge gaps.

**Threshold Calculation**: Exit occurs when:
(Push Factors) + (Pull Factors) > (Inertia) + (Barriers)

This explains why people stay in clearly failing systems—not because they're unaware, but because the threshold hasn't been crossed.

**Read the formula as a picture, not a calculation.** No one can put exact numbers on fear, belonging or meaning, and the forces are not truly separate quantities that add up. The expression is a thinking aid: it reminds you to look at four things at once instead of one. It also matches Lee's structure closely. Push and pull correspond to Lee's origin and destination factors; barriers correspond to his intervening obstacles; and inertia is one of the personal factors that make some people stay where others would go.

**Why inertia is strong.** Behavioral research summarized in Daniel Kahneman's Thinking, Fast and Slow helps explain inertia. People tend to weigh possible losses more heavily than equivalent gains (loss aversion) and to favor the current state of affairs when choices are uncertain (status quo bias). Leaving means giving up something certain for something uncertain, so the threshold sits higher than a simple tally of pros and cons would suggest.

**The threshold can move from either side.** Increasing pull (building a better alternative) and lowering barriers (savings, information, legal rights, childcare) can both bring people to exit sooner. So can a change that raises push. Reform works in the opposite direction: improving conditions inside the system lowers push and can make staying the better choice.

**Apply it.** Pick a system you have thought about leaving, such as a job, a city, a platform or an organization. On one page, list your push factors, your pull factors, your sources of inertia and the barriers you face. Mark which items you know from direct experience and which are guesses. The guesses are where to start your research.`
      },
      {
        title: 'Implications for Exodology Practice',
        content: `Understanding push-pull dynamics informs practice:

**For those experiencing push**: Recognize that discomfort is valid data. Begin exploring alternatives before desperation forces hasty exits.

**For those building alternatives**: Create genuine pull—not just escape hatches but destinations worth reaching.

**For advisors and stewards**: Assess both forces. Help people exit before push becomes overwhelming, and ensure pull factors are real, not illusory.

**For policy**: Reduce artificial barriers that trap people in failing systems. Enable exit before collapse forces it.

Three cautions keep this framework honest:

1. **Exit is not always the answer.** Hirschman showed that when the most capable and well-resourced members leave first, the people who remain can lose their strongest voices for reform. A push-pull analysis should always ask whether voice could work, and what leaving would mean for those who stay.
2. **Not everyone can respond to the same forces.** Lee's personal factors include resources, health, family responsibilities and stage of life. The same push that leads one household to move may trap another that cannot afford to leave. Practitioners should watch for people whose push is strong but whose barriers are higher still.
3. **Avoid manufacturing push.** Deliberately making a system worse so that people will leave it is manipulation, not stewardship. The ethical role of an Exodology practitioner is to help people see their situation clearly and to build real alternatives, not to engineer desperation.

With these cautions in place, the push-pull framework becomes a practical tool for asking good questions. The next three lessons look more closely at economic, social and cultural, and environmental drivers in turn.`
      }
    ],

    keyTakeaways: [
      'Exit decisions involve push factors (away from) and pull factors (toward)',
      'Both forces fall into economic, environmental, social, political, and existential categories',
      'Exit occurs when push plus pull exceeds inertia plus barriers',
      'Effective Exodology addresses both forces strategically',
      'The push-pull idea comes from migration studies, where Everett S. Lee distinguished origin factors, destination factors, intervening obstacles and personal factors',
      'Pull factors are often overestimated because people know their current system better than its alternatives',
      'The threshold formula is a thinking aid, not a calculation, and voice or reform may be better than exit'
    ],

    references: [
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Sets out exit and voice as the two main responses to decline and shows how loyalty delays exit, a companion lens to push-pull analysis.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Wilkerson, Isabel',
        title: "The Warmth of Other Suns: The Epic Story of America's Great Migration",
        year: 2010,
        publisher: 'Random House',
        relevance: 'Traces the push of the Jim Crow South and the pull of northern and western cities through the lives of individual migrants.',
        url: 'https://openlibrary.org/works/OL15380640W'
      },
      {
        author: 'Paul Collier',
        title: 'Exodus: How Migration Is Changing Our World',
        year: 2013,
        publisher: 'Oxford University Press',
        relevance: 'Discusses how income gaps and established diasporas shape migration decisions, and the effects of leaving on those who stay behind.',
        url: 'https://en.wikipedia.org/wiki/Exodus:_How_Migration_Is_Changing_Our_World'
      },
      {
        author: 'Kahneman, Daniel',
        title: 'Thinking, Fast and Slow',
        year: 2011,
        publisher: 'Farrar, Straus and Giroux',
        relevance: 'Summarizes research on loss aversion and status quo bias that helps explain why inertia keeps people in failing systems.',
        url: 'https://openlibrary.org/works/OL15992072W'
      }
    ]
  },
  learningObjectives: [
    'Apply the push-pull framework to exit analysis',
    'Categorize exit motivations by type',
    'Calculate exit threshold factors',
    'Use push-pull analysis in practice',
    'Describe the four groups of factors in Everett S. Lee\'s theory of migration and how they map onto system exit',
    'Explain why the threshold formula is a heuristic and when voice may be preferable to exit'
  ],
  keyTerms: [
    { term: 'Push Factors', definition: 'Conditions within a system that drive people to seek exit.' },
    { term: 'Pull Factors', definition: 'Attractions of alternatives that draw people away from current systems.' },
    { term: 'Exit Threshold', definition: 'The point at which push and pull factors together overcome inertia and barriers to exit.' },
    { term: 'Intervening Obstacles', definition: 'In Everett S. Lee\'s migration theory, the barriers between origin and destination, such as distance, cost, laws and lack of information.' },
    { term: 'Chain Migration', definition: 'The pattern in which people move to places where relatives, friends or members of their community have already settled, lowering the cost and risk of the move.' },
    { term: 'Status Quo Bias', definition: 'The tendency to prefer the current state of affairs over change, even when change might be better.' }
  ]
}

export default lesson
