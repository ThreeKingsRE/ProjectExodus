import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: how households and communities pay for clean
// energy. Chapter 19 covers clean energy finance at project and market scale.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'clean-energy-finance~2',
  title: 'Paying for Clean Energy: Households and Communities',
  description: {
    ELEMENTARY: 'How families and towns save up, share and borrow money to get solar panels and other clean energy.',
    MIDDLE_SCHOOL: 'The ways households and communities pay for clean energy: savings, loans, leases and sharing.',
    HIGH_SCHOOL: 'Comparing ways to pay for home and community clean energy, from loans and leases to community solar and co-ops.',
    UNDERGRADUATE: 'Household and community clean energy finance: payback, loans, leases, on-bill finance and community ownership.',
    GRADUATE: 'Financing distributed clean energy: consumer finance instruments, community ownership models and equity.',
    PHD: 'Research on household and community energy finance: credit access, behavioural barriers and distributional outcomes.',
  },
  lessons: [
    {
      id: 're-fin-1',
      title: 'Paying for Clean Energy: Households and Communities',
      content: {
        ELEMENTARY: `
<h2>Saving Up for Sunshine</h2>
<p>Solar panels, heat pumps and electric cars help the planet, but they cost a lot of money at the start. The good news is that once you have them, they help you save money every month on electricity or fuel. So families and towns have found clever ways to pay for them.</p>

<h3>Ways to Pay</h3>
<p>Some families save up and buy solar panels all at once, like saving allowance for a bike. Other families borrow money from a bank and pay it back a little each month. Because the panels lower the electricity bill, the savings help pay back the loan.</p>
<ul>
<li><strong>Cost:</strong> how much money something takes to buy</li>
<li><strong>Savings:</strong> money you keep because you spend less</li>
<li><strong>Loan:</strong> money you borrow and pay back over time</li>
<li><strong>Community solar:</strong> one big group of solar panels that many families share</li>
<li><strong>Co-op:</strong> a group of people who own something together and share it</li>
</ul>

<h3>Sharing Makes It Easier</h3>
<p>Not everyone has a sunny roof. Some families live in apartments. With community solar, many families share one big set of panels in a field or on a big building. Each family pays a small amount and gets a little off their bill. Some towns start a co-op, where neighbours own the panels together and share the savings.</p>

<h3>Helping Everyone Join</h3>
<p>Governments sometimes give money back, called a rebate, to help families afford clean energy. Making sure every family, not just some, can join in helps the whole town breathe cleaner air and saves families money for years.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Families and Towns Pay for Clean Energy</h2>
<p>Clean energy technology has a funny money pattern: it costs a lot up front but very little to run. A solar system or heat pump might cost as much as a used car, but then it cuts energy bills for 20 years or more. The challenge is paying that up-front cost. Households and communities have several options, each with pros and cons.</p>

<h3>Buying, Borrowing and Leasing</h3>
<p>Paying in cash gives the biggest savings over time but requires lots of money at once. A loan spreads the cost out; if monthly loan payments are smaller than the monthly energy savings, the family comes out ahead from day one. A lease or power purchase agreement lets a company own the panels on your roof; you pay a monthly fee or a price per unit of electricity, usually lower than the utility's price, but you keep less of the savings.</p>
<ul>
<li><strong>Up-front cost:</strong> the money needed to buy and install equipment at the start</li>
<li><strong>Payback period:</strong> how many years it takes for savings to equal the cost</li>
<li><strong>Lease:</strong> renting equipment instead of owning it</li>
<li><strong>Rebate:</strong> money given back by a government or utility after a purchase</li>
<li><strong>Subscription:</strong> paying regularly for a share of something, such as community solar</li>
</ul>

<h3>Community Options</h3>
<p>Community solar lets renters and people with shady roofs subscribe to a share of a larger solar farm and get credits on their bills. Energy cooperatives let members own projects together and share profits. Some towns run "solarize" campaigns, where neighbours sign up together to get a group discount.</p>

<h3>Making It Fair</h3>
<p>Families with less money often pay a bigger share of their income on energy, so clean energy savings matter most to them. But they may not have savings or good credit. Programmes like rebates, low-interest loans and community solar spaces reserved for low-income households help close that gap.</p>
`,
        HIGH_SCHOOL: `
<h2>Paying for the Energy Transition at Home</h2>
<p>Big power plants are financed by banks and investors, but much of the clean energy transition happens at household and community scale: rooftop solar, heat pumps, insulation, batteries and electric vehicles. These technologies share a financial profile of high up-front costs and low operating costs. How households and communities pay for them shapes who benefits from clean energy and how fast it spreads.</p>

<h3>Comparing Household Options</h3>
<p>The simplest way to judge an investment is the payback period: cost divided by annual savings. A $15,000 solar system saving $1,500 a year pays back in ten years. Lifetime savings are a better measure, since panels last 25 years or more. Cash purchases maximise lifetime savings; loans add interest but can be "cash-flow positive" if payments are below savings; leases and power purchase agreements require no money down but give most of the long-term value to the owner company. Incentives such as tax credits and rebates shorten payback.</p>
<ul>
<li><strong>Cash-flow positive:</strong> when monthly savings are larger than monthly payments</li>
<li><strong>Power purchase agreement (PPA):</strong> a deal to buy electricity from panels a company owns on your roof</li>
<li><strong>Tax credit:</strong> a reduction in taxes owed for making a qualifying purchase</li>
<li><strong>On-bill financing:</strong> repaying a loan for energy upgrades through your utility bill</li>
<li><strong>Energy burden:</strong> the share of household income spent on energy</li>
</ul>

<h3>Financing Built Into the Bill or the Home</h3>
<p>On-bill financing lets customers repay upgrades through their utility bill, sometimes tied to the meter so the next occupant keeps paying if the owner moves. Property-assessed clean energy (PACE) programmes attach repayment to property taxes. These tools help people who would struggle to get conventional loans, though they need consumer protections.</p>

<h3>Community Finance</h3>
<p>Community solar subscriptions, energy cooperatives, municipal bonds and crowdfunding let groups pool money. Cooperatives in Europe and elsewhere have financed wind and solar projects owned by thousands of local members, keeping profits in the community. Reserving shares for low-income households and guaranteeing bill savings can help address energy burden, which is highest for families with the least money. Comparing several quotes and reading contract terms carefully protects households from unfair deals.</p>
`,
        UNDERGRADUATE: `
<h2>Household and Community Clean Energy Finance</h2>
<p>Distributed clean energy technologies, including rooftop photovoltaics, heat pumps, building retrofits, batteries and electric vehicles, have high capital intensity and low operating costs. Their adoption therefore depends heavily on financing terms. Unlike utility-scale projects with professional investors, households face credit constraints, high discount rates and information barriers, while communities face transaction costs and governance challenges. This chapter analyses the financial instruments and ownership models used at these scales.</p>

<h3>Evaluating Household Investments</h3>
<p>Simple payback ignores the time value of money and system lifetime. Net present value (NPV) and internal rate of return (IRR) account for both: NPV discounts future savings at a chosen rate, while IRR is the discount rate at which NPV is zero. Results depend on assumptions about electricity price escalation, degradation, incentives and the discount rate, which for households is often far higher than market interest rates, reflecting liquidity constraints and uncertainty.</p>
<ul>
<li><strong>Net present value (NPV):</strong> the value today of future cash flows minus the investment cost</li>
<li><strong>Internal rate of return (IRR):</strong> the discount rate that makes an investment's NPV equal zero</li>
<li><strong>Third-party ownership:</strong> a model where a company owns equipment on a customer's property and sells them its output or use</li>
<li><strong>Property-assessed clean energy (PACE):</strong> financing repaid through a property tax assessment</li>
<li><strong>Credit enhancement:</strong> a public guarantee or reserve that lowers risk for lenders, enabling better loan terms</li>
</ul>

<h3>Instruments</h3>
<p>Consumer loans (secured or unsecured), third-party ownership (leases and PPAs), on-bill financing and repayment, and PACE each allocate risk differently. Third-party ownership grew rapidly by capturing tax benefits and removing up-front cost, but raised concerns about contract terms and home resale. Green banks and public credit enhancement programmes use limited public capital to leverage private lending, reducing interest rates and expanding access to borrowers with lower credit scores.</p>

<h3>Community Ownership Models</h3>
<p>Community solar (shared subscriptions with virtual net metering), energy cooperatives, municipal ownership and community benefit agreements represent increasing degrees of local control. Cooperatives aggregate member capital and often access concessional finance; community solar requires enabling legislation for bill crediting. Low-income carve-outs, guaranteed savings and anchor subscribers such as public buildings reduce risk for projects serving lower-income households.</p>

<h3>Equity Dimensions</h3>
<p>Adoption of distributed clean energy has skewed toward higher-income homeowners. Because energy burden is highest for low-income and renter households, financing design determines whether clean energy narrows or widens inequality. Policy tools include targeted rebates, inclusive financing that accepts alternative credit data and renter-accessible models.</p>
`,
        GRADUATE: `
<h2>Financing Distributed Clean Energy</h2>
<p>Reaching decarbonisation targets requires trillions of dollars of investment in buildings, transport and distributed generation, much of it decided by households, small businesses and communities rather than utilities. These actors face higher capital costs, credit constraints and transaction costs than large investors. This chapter analyses consumer finance instruments, community ownership models and the public finance tools that shape access and equity.</p>

<h3>Consumer Finance and the Cost of Capital</h3>
<p>Because distributed technologies are capital-intensive, their levelised costs are highly sensitive to the cost of capital. Households facing double-digit interest rates may find investments uneconomic that are clearly beneficial at public borrowing costs. Instruments differ in who bears risk: unsecured loans place credit risk on lenders and charge accordingly; PACE secures repayment against property but has raised consumer protection concerns; tariffed on-bill programmes tie repayment to the meter, enabling renters and those with poor credit to participate where regulators permit.</p>
<ul>
<li><strong>Cost of capital:</strong> the return required by lenders and investors, which strongly affects the cost of capital-intensive technologies</li>
<li><strong>Tariffed on-bill programme:</strong> utility investment in customer upgrades recovered through a tariff tied to the meter, not the person</li>
<li><strong>Green bank:</strong> a public or non-profit lender that uses public capital to mobilise private clean energy investment</li>
<li><strong>Securitisation:</strong> pooling loans or contracts into tradable securities to attract institutional capital</li>
<li><strong>Split incentive:</strong> when the party who pays for an upgrade is not the party who benefits, as with landlords and tenants</li>
</ul>

<h3>Scaling Through Public Finance</h3>
<p>Green banks deploy loan loss reserves, co-investment and credit enhancement to crowd in private lending. Standardised contracts and performance data enable securitisation, lowering capital costs as portfolios mature. Public procurement and anchor tenancy de-risk community projects.</p>

<h3>Community Ownership</h3>
<p>Community energy models range from subscription-based community solar to cooperative and municipal ownership. Evidence from Europe indicates that local ownership can increase acceptance of renewable projects and retain economic value locally, though cooperatives face difficulties raising large amounts of capital and handling project risk. Policy supports include feed-in tariffs or community auctions, shared ownership requirements and technical assistance.</p>

<h3>Equity and Split Incentives</h3>
<p>Renters face split incentives: landlords pay for upgrades while tenants receive bill savings. Solutions include green leases, landlord incentives tied to tenant protections, and community models that bypass property ownership. Designing finance so that benefits reach energy-burdened households, without exposing them to unaffordable debt, is a central policy challenge.</p>

<h3>Consumer Protection</h3>
<p>Rapid growth in residential solar sales has been accompanied by complaints about aggressive marketing, misleading savings claims and loan terms that hide dealer fees in higher prices. Regulators and programme designers respond with standard disclosure forms, cooling-off periods, licensing of installers and lenders, and independent quality assurance. Well-protected markets build trust, which in turn lowers customer acquisition costs and supports long-term adoption.</p>
`,
        PHD: `
<h2>Research on Household and Community Energy Finance</h2>
<p>Finance is increasingly recognised as a binding constraint on the distributed energy transition. Research spans household finance and credit access, behavioural economics of energy investment, the institutional economics of community energy, and the distributional consequences of financing policy. This chapter surveys open questions in each area.</p>

<h3>Credit Access and Cost of Capital</h3>
<p>Empirical work documents large differences in borrowing costs across households and links credit scores and income to clean energy adoption. Research questions include how alternative underwriting (using utility payment history, for example) affects default rates and access, whether tariffed on-bill models perform as well as conventional lending, and how securitisation and green bank interventions change capital costs at scale. Causal identification is challenging, motivating natural experiments from programme rollouts and regression-discontinuity designs around eligibility thresholds.</p>
<ul>
<li><strong>Energy efficiency gap:</strong> the observed shortfall between cost-effective energy investments and those actually made</li>
<li><strong>Implicit discount rate:</strong> the discount rate inferred from consumers' investment choices, often far above market rates</li>
<li><strong>Regression discontinuity:</strong> a quasi-experimental method comparing units just above and below an eligibility threshold</li>
<li><strong>Distributional analysis:</strong> assessing how costs and benefits of a policy are shared across income or other groups</li>
<li><strong>Social licence:</strong> ongoing acceptance of a project or industry by local communities</li>
</ul>

<h3>Behavioural Barriers and the Efficiency Gap</h3>
<p>The energy efficiency gap has been attributed to market failures (split incentives, information asymmetries, credit constraints) and behavioural factors (present bias, inattention, loss aversion), as well as to engineering estimates that overstate savings. Field experiments test interventions such as default financing offers, simplified payback information and social comparisons. Estimating implicit discount rates and distinguishing true preferences from frictions remain contested.</p>

<h3>Community Energy Institutions</h3>
<p>Research on community energy examines how ownership structures affect project outcomes, local economic benefits and social licence. Comparative studies across countries show that policy regimes, such as feed-in tariffs versus competitive auctions, strongly influence the viability of community models, with auctions tending to favour large commercial developers. Open questions include how community projects can manage risk and access capital under market-based support schemes.</p>

<h3>Distributional Outcomes</h3>
<p>Incentives for distributed technologies have historically flowed disproportionately to high-income households, while costs such as net-metering cross-subsidies and grid charges may fall on non-adopters. Distributional analysis of programme design, including income-targeted incentives, tariffed on-bill finance and community ownership carve-outs, is needed to guide policies that accelerate adoption while reducing energy burden.</p>

<h3>Data and Methods</h3>
<p>Progress depends on linking loan performance, utility billing, adoption and household characteristics while protecting privacy. Partnerships between researchers, green banks and utilities, and pre-registered evaluations of new programmes, can build the evidence base for finance policy. Longer follow-up periods are needed to observe defaults, home sales and system performance over the decades these investments last, and across different housing and income groups.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-fin2-q1',
      question: {
        ELEMENTARY: 'Why are solar panels worth buying even though they cost a lot?',
        MIDDLE_SCHOOL: 'What is the "money pattern" of clean energy technology?',
        HIGH_SCHOOL: 'How is a simple payback period calculated?',
        UNDERGRADUATE: 'Why are net present value and IRR better than simple payback?',
        GRADUATE: 'Why are distributed technologies especially sensitive to the cost of capital?',
        PHD: 'What is the energy efficiency gap?',
      },
      options: {
        ELEMENTARY: ['They break quickly', 'They are shiny', 'They make it rain', 'They save money every month'],
        MIDDLE_SCHOOL: ['Cheap to buy, expensive to run', 'Free forever', 'Expensive to buy and to run', 'Costly up front but very cheap to run'],
        HIGH_SCHOOL: ['Savings times cost', 'Cost plus savings', 'Savings minus interest', 'Cost divided by annual savings'],
        UNDERGRADUATE: ['They ignore lifetime', 'They are easier to calculate', 'They use only one year', 'They account for the time value of money and system lifetime'],
        GRADUATE: ['They have high operating costs', 'They never need loans', 'They are always paid in cash', 'They are capital-intensive with low operating costs'],
        PHD: ['The space between panels', 'The difference between two tariffs', 'A gap in power lines', 'The shortfall between cost-effective energy investments and those actually made'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Once installed, solar panels lower the electricity bill every month.',
        MIDDLE_SCHOOL: 'Clean energy costs a lot at the start but very little to run.',
        HIGH_SCHOOL: 'Payback is the cost divided by the yearly savings.',
        UNDERGRADUATE: 'NPV and IRR discount future savings and include the whole system life.',
        GRADUATE: 'Because most of the cost is up front, interest rates strongly affect total cost.',
        PHD: 'The gap is between investments that would pay off and those people actually make.',
      },
    },
    {
      id: 're-fin2-q2',
      question: {
        ELEMENTARY: 'What is a loan?',
        MIDDLE_SCHOOL: 'When does a loan for solar panels leave a family better off from day one?',
        HIGH_SCHOOL: 'What is a power purchase agreement (PPA) for rooftop solar?',
        UNDERGRADUATE: 'What is a concern raised about third-party ownership?',
        GRADUATE: 'What is a tariffed on-bill programme tied to?',
        PHD: 'What is an implicit discount rate?',
      },
      options: {
        ELEMENTARY: ['A free gift', 'Money you borrow and pay back over time', 'A kind of panel', 'A tax'],
        MIDDLE_SCHOOL: ['When payments are bigger than savings', 'When monthly loan payments are smaller than monthly savings', 'Never', 'Only if they move house'],
        HIGH_SCHOOL: ['A loan from a bank', 'A deal to buy electricity from panels a company owns on your roof', 'A tax credit', 'A rebate cheque'],
        UNDERGRADUATE: ['They always raise home value', 'Contract terms and home resale complications', 'They need no contracts', 'They are illegal everywhere'],
        GRADUATE: ['The homeowner\'s credit score', 'The meter, not the person', 'The landlord\'s bank', 'A city bond'],
        PHD: ['The central bank rate', 'The discount rate inferred from consumers\' investment choices', 'A shop discount', 'A utility\'s profit rate'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A loan is money you borrow and pay back little by little.',
        MIDDLE_SCHOOL: 'If savings exceed payments, the family is ahead right away.',
        HIGH_SCHOOL: 'With a PPA, a company owns the panels and sells you their electricity.',
        UNDERGRADUATE: 'Leases and PPAs raised concerns about terms and selling homes with contracts attached.',
        GRADUATE: 'Repayment is tied to the meter, so the next occupant keeps paying and benefiting.',
        PHD: 'It is the rate implied by people\'s choices, usually far above market rates.',
      },
    },
    {
      id: 're-fin2-q3',
      question: {
        ELEMENTARY: 'How does community solar help families in apartments?',
        MIDDLE_SCHOOL: 'What is a "solarize" campaign?',
        HIGH_SCHOOL: 'What is on-bill financing?',
        UNDERGRADUATE: 'What do green banks and credit enhancement programmes do?',
        GRADUATE: 'What is a split incentive?',
        PHD: 'Which method compares units just above and below an eligibility threshold?',
      },
      options: {
        ELEMENTARY: ['It moves their apartment', 'It paints their walls', 'They share one big set of panels and save on bills', 'It gives them a car'],
        MIDDLE_SCHOOL: ['A sunburn warning', 'A way to clean panels', 'Neighbours signing up together for a group discount', 'A campaign to ban solar'],
        HIGH_SCHOOL: ['Paying bills with cash only', 'Turning off power to save money', 'Repaying upgrade loans through your utility bill', 'Getting paid to use power'],
        UNDERGRADUATE: ['Ban private lending', 'Raise interest rates', 'Use public capital to leverage private lending and improve terms', 'Build power plants only'],
        GRADUATE: ['Dividing a loan in half', 'Sharing a panel between two homes', 'When the one paying for an upgrade is not the one who benefits', 'A discount on two purchases'],
        PHD: ['Random guessing', 'Survey averages', 'Regression discontinuity', 'Simple payback'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Families share one big set of panels and get money off their bills.',
        MIDDLE_SCHOOL: 'Solarize campaigns bundle neighbours to get group discounts.',
        HIGH_SCHOOL: 'On-bill financing lets customers repay through their utility bill.',
        UNDERGRADUATE: 'They use limited public money to unlock more private lending on better terms.',
        GRADUATE: 'Landlords pay for upgrades but tenants get the savings, so upgrades are skipped.',
        PHD: 'Regression discontinuity compares those just above and below a threshold.',
      },
    },
    {
      id: 're-fin2-q4',
      question: {
        ELEMENTARY: 'What is a co-op?',
        MIDDLE_SCHOOL: 'What is a payback period?',
        HIGH_SCHOOL: 'What is energy burden?',
        UNDERGRADUATE: 'Why are household discount rates often far higher than market interest rates?',
        GRADUATE: 'What does evidence from Europe suggest about local ownership of renewable projects?',
        PHD: 'How do competitive auctions tend to affect community energy projects?',
      },
      options: {
        ELEMENTARY: ['A group of people who own something together and share it', 'A chicken house', 'A kind of bus', 'A store that sells toys'],
        MIDDLE_SCHOOL: ['How many years it takes for savings to equal the cost', 'The price of electricity', 'A type of loan', 'How long panels last'],
        HIGH_SCHOOL: ['The share of household income spent on energy', 'How heavy a battery is', 'The weight of solar panels', 'A type of tax'],
        UNDERGRADUATE: ['Liquidity constraints and uncertainty', 'Households are richer than banks', 'Banks never lend', 'Discount rates are set by law'],
        GRADUATE: ['It can increase acceptance and keep economic value local', 'It always fails', 'It raises opposition', 'It has no local effects'],
        PHD: ['They tend to favour large commercial developers', 'They always favour cooperatives', 'They ban community projects', 'They have no effect'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In a co-op, people own something together and share it.',
        MIDDLE_SCHOOL: 'Payback is the time until savings add up to the cost.',
        HIGH_SCHOOL: 'Energy burden is the share of income spent on energy, highest for low-income households.',
        UNDERGRADUATE: 'Households lack spare cash and face uncertainty, so they value future savings less.',
        GRADUATE: 'Local ownership tends to raise acceptance and keep benefits in the community.',
        PHD: 'Auctions reward scale and low bids, which large developers can offer more easily.',
      },
    },
    {
      id: 're-fin2-q5',
      question: {
        ELEMENTARY: 'What is a rebate?',
        MIDDLE_SCHOOL: 'What is a lease?',
        HIGH_SCHOOL: 'What is PACE financing repaid through?',
        UNDERGRADUATE: 'Which community model requires enabling legislation for bill crediting?',
        GRADUATE: 'What does securitisation do for clean energy loans?',
        PHD: 'Who has historically received most incentives for distributed technologies?',
      },
      options: {
        ELEMENTARY: ['A broken battery', 'A tax you pay', 'Money given back to help pay for something', 'A type of solar panel'],
        MIDDLE_SCHOOL: ['Selling your house', 'A free gift', 'Renting equipment instead of owning it', 'A bank account'],
        HIGH_SCHOOL: ['Grocery receipts', 'Phone bills', 'Property taxes', 'Bus fares'],
        UNDERGRADUATE: ['Rooftop solar on your own home', 'Cash purchases', 'Community solar with virtual net metering', 'Diesel generators'],
        GRADUATE: ['Bans lending', 'Raises capital costs', 'Pools loans into securities to attract institutional capital', 'Cancels contracts'],
        PHD: ['Low-income renters', 'Utilities only', 'High-income households', 'Nobody'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A rebate is money given back to help pay for something.',
        MIDDLE_SCHOOL: 'A lease means renting equipment instead of buying it.',
        HIGH_SCHOOL: 'PACE loans are repaid through property tax assessments.',
        UNDERGRADUATE: 'Community solar needs laws that let subscribers get credits on their bills.',
        GRADUATE: 'Securitisation bundles loans so big investors can buy them, lowering capital costs.',
        PHD: 'Incentives have flowed disproportionately to high-income households.',
      },
    },
  ],
}

export default expansion
