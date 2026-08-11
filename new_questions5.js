const questions = [
  { id: 0, category: "", subcategory: "", type: "intro", text: "Before you begin", body: "If you follow communism, anarchism, or another philosophy advocating very radical change, please answer consistently. If one of your answers reflects a post-revolutionary ideal (e.g., no money or property), then all your answers should — don't jump between answering according to the ideal and then answering what's the best pragmatic choice in the modern day. Otherwise the results may not make sense." },
  // GOVERNANCE - Governance Principle
  { id: 1, category: "Governance", subcategory: "Governance Principle", text: "An independent administration/polity/constitution should span:", type: "single", questionTooltip: "Select the size of your preferred administration, polity or constitution, the details and policies of which you will describe in the following questions.", options: [
    { text: "A local community", policies: ["Span: Local Community"] },
    { text: "A town/city", policies: ["Span: Town/City"] },
    { text: "A very small to small country", policies: ["Span: Small Country"] },
    { text: "A medium to large country", policies: ["Span: Medium/Large Country"] },
    { text: "Whole continent", policies: ["Span: Continent"] },
    { text: "Whole world", policies: ["Span: World"], tooltip: "Do not choose this if you want your type of polity/constitution to be adopted universally — only choose this if you want a world confederation/federation/government to exist." },
    { text: "Administration should be privatized and a matter of production and consumption on the free market, and I don't want to focus on any specific size of such organisation, as it's choice of owners and 'consumers' to decide where and how to live", policies: ["Span: Privatized"], tooltip: "Do not choose this if you want it to exist in a context of established written law." }
  ] },
  // GOVERNANCE - Centralization
  { id: 19, category: "Governance", subcategory: "Centralization", text: "How should political power be geographically distributed?", type: "single", options: [
    { text: "Unitary — all power flows from the central government", policies: ["Unitary State"] },
    { text: "Devolution — central government delegates powers to regional bodies", policies: ["Devolution"] },
    { text: "A mix of federal and national systems with shared powers", policies: ["Federalism"] },
    { text: "A confederation — regions are nearly sovereign and delegate limited powers upward", policies: ["Confederation"] },
    { text: "A free federation – regions are nearly sovereign and delegate limited powers upward and each territory has a right to secede at any time", policies: ["Free Federation"] },
    { text: "Fully autonomous local communities with no higher delegation", policies: ["Local Autonomy"] }
  ] },
  { id: 82, category: "Governance", subcategory: "Centralization", text: "Choose which you agree with on national level:", type: "single", options: [
    { text: "Each subset of the government's authoritative powers should be divided across different leaders such that they check each other's powers to reduce unilateral action (example: leader with military control separate from leader setting military budget)", policies: ["Power Division: Checks National"] }, { text: "Different subsets of the government's authoritative powers should be divided among different leaders such that each is able to act unilaterally and efficiently within the subset of their own responsibilities (example: military leader separate from legislative leader)", policies: ["Power Division: Efficient National"] }, { text: "Neither", policies: ["Power Division: Neither National"] }
  ] },
  { id: 85, category: "Governance", subcategory: "Centralization", text: "Choose which you agree with on federal subunit level:", type: "single", options: [
    { text: "Each subset of the government's authoritative powers should be divided across different leaders such that they check each other's powers to reduce unilateral action (example: leader with military control separate from leader setting military budget)", policies: ["Power Division: Checks Subunit"] }, { text: "Different subsets of the government's authoritative powers should be divided among different leaders such that each is able to act unilaterally and efficiently within the subset of their own responsibilities (example: military leader separate from legislative leader)", policies: ["Power Division: Efficient Subunit"] }, { text: "Neither", policies: ["Power Division: Neither Subunit"] }
  ] },
  // GOVERNANCE - Distribution of Power
  { id: 3, category: "Governance", subcategory: "Distribution of Power", type: "double", questions: [
    { subId: "3a", text: "What should be the conditions to have a right to vote?", type: "multi", mutualExclusion: [[1, 2]], options: [
      { text: "Be above a specific age", policies: ["Vote: Age Requirement"] }, { text: "Be a citizen", policies: ["Vote: Citizenship"] }, { text: "Be a citizen since birth", policies: ["Vote: Birth Citizenship"] }, { text: "Be literate, know the official language and have basic civic knowledge", policies: ["Vote: Literacy/Civic Knowledge"] }, { text: "Not be in prison at the moment", policies: ["Vote: Not Imprisoned"] }, { text: "Have no serious criminal charges", policies: ["Vote: No Criminal Record"] }, { text: "Be a member of one of the officially recognized parties", policies: ["Vote: Party Membership"] }, { text: "Own land", policies: ["Vote: Land Ownership"] }, { text: "Have capital or enough wealth", policies: ["Vote: Wealth Requirement"] }, { text: "Be male", policies: ["Vote: Male Only"] }, { text: "Be of a specific race", policies: ["Vote: Racial Requirement"] }, { text: "Have children", policies: ["Vote: Parenthood"] }, { text: "Be a follower of a specific (ir)religion", policies: ["Vote: Religious Requirement"] }, { text: "Have an aristocratic title", policies: ["Vote: Aristocratic Title"] }, { text: "Be married", policies: ["Vote: Married"] }, { text: "Have enough stable taxable income", policies: ["Vote: Stable Income"] }, { text: "Reside in the territory of the state", policies: ["Vote: Residency"] }, { text: "Own shares in the state", policies: ["Vote: State Shares"] }
    ] },
    { subId: "3b", text: "Should votes be weighted?", type: "multi", options: [
      { text: "Wealth weighting", policies: ["Vote Weight: Wealth"] }, { text: "Racial weighting", policies: ["Vote Weight: Racial"] }, { text: "Sex/gender weighting", policies: ["Vote Weight: Sex/Gender"] }, { text: "Age weighting (greater weighting of younger voters)", policies: ["Vote Weight: Younger"] }, { text: "Age weighting (greater weighting of older voters)", policies: ["Vote Weight: Older"] }
    ] }
  ] },
  // GOVERNANCE - Executive and Legislative Structure
  { id: 9, category: "Governance", subcategory: "Executive and Legislative Structure", text: "Should citizens have a right to nullify legislation?", type: "multi", options: [
    { text: "Yes, by a referendum", policies: ["Nullify: Referendum"] }, { text: "In most cases no", policies: ["Nullify: Generally No"] }, { text: "There should be no legislation", policies: ["No Legislation"] }
  ] },
  { id: 11, category: "Governance", subcategory: "Executive and Legislative Structure", text: "Should there be a formal separation of powers (executive, legislative, judicial)?", type: "multi", options: [
    { text: "Yes — strict separation with strong checks and balances", policies: ["Separation of Powers"] }, { text: "Yes — but with some overlap for efficiency", policies: ["Partial Separation"] }, { text: "No — unified government power is more effective", policies: ["Unified Power"] }, { text: "Irrelevant — power structures should be dismantled entirely", policies: ["Anti-State"] }
  ] },
  // GOVERNANCE - Church and State (TRIPLE)
  { id: 12, category: "Governance", subcategory: "Church and State", type: "double",
    disablesOtherParts: { subId: "12a", optionIndices: [2, 3, 4], targets: ["12c"], message: "Separation, laicism, or state atheism selected — power relationship question is not applicable." },
    questions: [
    { subId: "12a", text: "What is the formal status of religion in the state?", type: "single", options: [
      { text: "Official religion", policies: ["Religion Status: Official"] }, { text: "No official religion, no secularism mandate", policies: ["Religion Status: No Official No Secularism"] }, { text: "Official separation of church and state", policies: ["Religion Status: Official Separation"] }, { text: "Laicism — Ban on religious influence in public administration", policies: ["Religion Status: Laicism"] }, { text: "State atheism", policies: ["Religion Status: State Atheism"] }
    ] },
    { subId: "12b", text: "Should people have a right to religious freedom and to not be discriminated based on religious beliefs by the state?", type: "single", options: [
      { text: "Yes", policies: ["Religious Freedom: Yes"] }, { text: "No", policies: ["Religious Freedom: No"] }
    ] },
    { subId: "12c", text: "What is the power relationship between state and religious institutions?", type: "single", options: [
      { text: "Official state religion subordinate to the state or one of officials in the government", policies: ["Religion Power: State Controls Religion"] }, { text: "All religious institutions subordinate to state", policies: ["Religion Power: All Subordinate to State"] }, { text: "State subordinate to religious authority", policies: ["Religion Power: State Subordinate"] }, { text: "Formal agreement(s), no active control", policies: ["Religion Power: Formal Agreement"] }, { text: "No formal power relationship", policies: ["Religion Power: No Relationship"] }
    ] }
  ] },
  { id: 13, category: "Governance", subcategory: "Church and State", text: "Should religious institutions be subject to tax exemptions or special legal or economic treatment?", type: "single", options: [
    { text: "No, they should be treated like all other organisations", policies: ["Religious Equal Treatment"] }, { text: "No, and they shouldn't be funded from public wealth even for charitable or public projects", policies: ["No Religious Public Funding"] }, { text: "Yes, but all religions should be treated equally", policies: ["Religious Tax: All Equal"] }, { text: "Yes, but the official religion should have a preference", policies: ["Religious Tax: Official Preference"] }, { text: "Yes, but only the official religion", policies: ["Religious Tax: Only Official"] }, { text: "No, and organised religions should be marginalized or dismantled", policies: ["Marginalize Religion"] }
  ] },
  // GOVERNANCE - Bureaucracy
  { id: 15, category: "Governance", subcategory: "Bureaucracy", text: "How transparent should state operations be?", type: "single", options: [
    { text: "Full transparency by default — all state activity is public record", policies: ["Radical Transparency"] }, { text: "Most things public, but legitimate security exceptions exist", policies: ["Balanced Transparency"] }, { text: "Significant secrecy is necessary for effective governance", policies: ["Government Secrecy"] }, { text: "States should operate without public scrutiny when needed", policies: ["Opaque Governance"] }
  ] },
  // GOVERNANCE - Army Model
  { id: 16, category: "Governance", subcategory: "Army Model", text: "What kind of military structure is most desirable?", type: "single", options: [
    { text: "Professional army", policies: ["Professional Army"] }, { text: "Citizen militias", policies: ["Citizen Militia"] }, { text: "Army made out of forcefully conscripted civilians in time of need (excluding officers)", policies: ["Conscripted Army"] }, { text: "Army made out of members of a specific soldier caste", policies: ["Soldier Caste Army"] }, { text: "Private armies", policies: ["Private Armies"] }
  ] },
  { id: 70, category: "Governance", subcategory: "Army Model", type: "double",
    disablesOtherParts: { subId: "70a", optionIndex: 3, targets: ["70b", "70c"], message: "No conscription selected — conscription timing and exemption questions are not applicable." },
    questions: [
    { subId: "70a", text: "Should there be conscription?", type: "single", options: [
      { text: "Yes, selective compulsory service", policies: ["Conscription: Selective"] }, { text: "Yes, lottery draft", policies: ["Conscription: Lottery"] }, { text: "Yes, universal compulsory service", policies: ["Conscription: Universal"] }, { text: "No conscription", policies: ["No Conscription"] }
    ] },
    { subId: "70b", text: "At what time should conscription be used?", type: "multi", options: [
      { text: "Wartime", policies: ["Conscription Timing: Wartime"] }, { text: "National emergencies", policies: ["Conscription Timing: Emergencies"] }, { text: "Defense shortages", policies: ["Conscription Timing: Defense Shortages"] }, { text: "Peacetime", policies: ["Conscription Timing: Peacetime"] }
    ] },
    { subId: "70c", text: "Who should be exempt from conscription? (not counting people with certain disabilities)", type: "multi", options: [
      { text: "Women", policies: ["Conscription Exempt: Women"] }, { text: "Influential businessmen", policies: ["Conscription Exempt: Businessmen"] }, { text: "Influential politicians", policies: ["Conscription Exempt: Politicians"] }, { text: "Celebrities", policies: ["Conscription Exempt: Celebrities"] }, { text: "LGBT people", policies: ["Conscription Exempt: LGBT"] }, { text: "Families of influential people", policies: ["Conscription Exempt: Influential Families"] }, { text: "People from certain cultures, races or ethnic groups", policies: ["Conscription Exempt: Certain Groups"] }, { text: "No one, there should be equality on this matter", policies: ["Conscription Exempt: No One"] }
    ] }
  ] },
  { id: 71, category: "Governance", subcategory: "Army Model", text: "How should officers be determined?", type: "single", options: [
    { text: "Based on their merit", policies: ["Officers: Merit"] }, { text: "Based on their loyalty to the government", policies: ["Officers: Loyalty"] }, { text: "They should be elected by the soldiers they command", policies: ["Officers: Elected"] }, { text: "Based on merit, but higher ranks and promotions should be available for purchase", policies: ["Officers: Purchasable"] }, { text: "They should come from nobility", policies: ["Officers: Nobility"] }
  ] },
  // GOVERNANCE - Policing (TRIPLE)
  { id: 17, category: "Governance", subcategory: "Policing", type: "double", disablesOtherParts: { subId: "17a", optionIndex: 5, targets: ["17b", "17c"], message: "No organised policing force selected — responsibilities and privileges are not applicable." }, questions: [
    { subId: "17a", text: "What should be the main form of policing?", type: "multi", maxSelect: 2, exclusiveIndex: 5, mutualExclusion: [[0, 2]], options: [
      { text: "Professional dedicated national force with standardized training", policies: ["Police: National Professional"] }, { text: "Local professional force", policies: ["Police: Local Professional"] }, { text: "Professional dedicated national force with military equipment and training", policies: ["Police: Militarized National"] }, { text: "Private law enforcement companies", policies: ["Police: Private Companies"] }, { text: "A force made up of actively rotating community members", policies: ["Police: Rotating Community"] }, { text: "There should be no organised policing force", policies: ["Police: None"] }
    ] },
    { subId: "17b", text: "What should be the responsibilities of the organisation?", type: "multi", options: [
      { text: "Guarding and protecting public/communal property", policies: ["Police Duty: Public Property"] }, { text: "Protecting civilians", policies: ["Police Duty: Protect Civilians"] }, { text: "Crowd control", policies: ["Police Duty: Crowd Control"] }, { text: "Protecting private and/or personal property", policies: ["Police Duty: Private Property"] }, { text: "Dealing with criminals and making arrests", policies: ["Police Duty: Arrests"] }, { text: "Investigating crimes", policies: ["Police Duty: Investigations"] }
    ] },
    { subId: "17c", text: "What privileges and responsibilities on duty should they have?", type: "multi", exclusiveIndex: 9, options: [
      { text: "Some form of immunity", policies: ["Police Privilege: Immunity"] }, { text: "Right to bear and use arms in public normal civilians don't have", policies: ["Police Privilege: Arms"] }, { text: "Right to use of public surveillance cameras and technology normal civilians don't have", policies: ["Police Privilege: Surveillance"] }, { text: "Right to arrest suspects", policies: ["Police Privilege: Arrest"] }, { text: "Duty to defend civilians", policies: ["Police Duty: Defend Civilians"] }, { text: "Duty to wear body cam during duty", policies: ["Police Duty: Body Cam"] }, { text: "Prohibition from policing in the event of a gross violation or repeated violation", policies: ["Police Privilege: Prohibition on Violation"] }, { text: "Enter a private/personal property without a permit", policies: ["Police Privilege: Enter Property"] }, { text: "Confiscate personal property without a permit", policies: ["Police Privilege: Confiscate Property"] }, { text: "None of the responsibilities or privileges mentioned", policies: ["Police Privilege: None"] }
    ] }
  ] },
  // GOVERNANCE - Internal Security
  { id: 18, category: "Governance", subcategory: "Internal Security", text: "How much surveillance should the state conduct on its own population?", type: "single", options: [
    { text: "Extensive surveillance — any civilian could be potentially a criminal, that's why almost everyone should be surveilled", policies: ["Mass Surveillance"] }, { text: "Targeted surveillance without judicial warrants for specific suspects", policies: ["Targeted Surveillance No Warrant"] }, { text: "Targeted surveillance with judicial warrants for specific suspects", policies: ["Warranted Surveillance"] }, { text: "Minimal surveillance with strict legal oversight and transparency", policies: ["Minimal Surveillance"] }, { text: "No state surveillance whatsoever — privacy is absolute", policies: ["No Surveillance"] }
  ] },
  // GOVERNANCE - Judiciary
  { id: 20, category: "Governance", subcategory: "Judiciary", text: "How should judges be selected?", type: "single",
    disablesQuestions: { optionIndex: 5, targets: [86], message: "No courts selected — role of judges question is not applicable." },
    options: [
    { text: "Elected directly by the people", policies: ["Elected Judges"] }, { text: "Appointed by the executive or legislature", policies: ["Appointed Judges"] }, { text: "Selected through a merit-based professional process", policies: ["Merit Judiciary"] }, { text: "Random citizen juries should decide all cases", policies: ["Citizen Juries"] }, { text: "Religious or traditional authorities should adjudicate", policies: ["Religious Judiciary"] }, { text: "There should be no courts", policies: ["No Courts"] }
  ] },
  { id: 86, category: "Governance", subcategory: "Judiciary", text: "What should be the role of judges or juries?", type: "single", options: [
    { text: "To judge the legality of actions", policies: ["Judges Role: Legality"] }, { text: "To judge the legality of actions and interpret the law, helping establish precedent based on existing law", policies: ["Judges Role: Legality and Precedent"] }, { text: "To judge the legality of actions and create precedents based on whether an action is just", policies: ["Judges Role: Justice-Based Precedent"] }, { text: "To judge actions based on customs", policies: ["Judges Role: Customs"] }, { text: "To resolve conflicts based on justice and precedents, and judge the precedents", policies: ["Judges Role: Justice and Review"] }, { text: "To resolve conflicts without reference to law", policies: ["Judges Role: No Law Reference"] }
  ] },
  { id: 21, category: "Governance", subcategory: "Judiciary", text: "Should a constitutional court be able to strike down legislation?", type: "single", options: [
    { text: "Yes — an independent court must guard the constitution", policies: ["Judicial Review"] }, { text: "Yes — but with legislative override by supermajority", policies: ["Limited Judicial Review"] }, { text: "No — elected representatives should have the final say", policies: ["Legislative Supremacy"] }, { text: "There should be no constitution to enforce", policies: ["No Constitution"] }
  ] },
  // GOVERNANCE - Justice
  { id: 22, category: "Governance", subcategory: "Justice", text: "What should be the primary purpose of the criminal justice system?", type: "multi", maxSelect: 4, options: [
    { text: "Rehabilitation — help offenders become productive members of society", policies: ["Rehabilitative Justice"] }, { text: "Restoration — repair the harm done to victims and communities", policies: ["Restorative Justice"] }, { text: "Deterrence — harsh penalties prevent future crime", policies: ["Deterrence Justice"] }, { text: "Retribution — criminals deserve proportional punishment", policies: ["Retributive Justice"] }, { text: "Incapacitation — remove dangerous people from society permanently", policies: ["Incapacitation"] }, { text: "Expulsion (exclude violators from the governed territory for a period of time: banishment, loss of citizenship, etc.)", policies: ["Expulsion Justice"] }
  ] },
  { id: 23, category: "Governance", subcategory: "Justice", text: "Should the death penalty exist?", type: "single", options: [
    { text: "Yes", policies: ["Death Penalty: Yes"] }, { text: "Yes, but only for exceptional crimes like mass murder", policies: ["Death Penalty: Exceptional Only"] }, { text: "No", policies: ["Death Penalty: No"] }
  ] },
  { id: 87, category: "Governance", subcategory: "Justice", text: "Should prisons exist?", type: "single", options: [
    { text: "Yes", policies: ["Prisons: Yes"] }, { text: "Yes, but only for dangerous crimes like murder", policies: ["Prisons: Dangerous Only"] }, { text: "No", policies: ["Prisons: No"] }
  ] },
  // GOVERNANCE - Citizenship
  { id: 24, category: "Governance", subcategory: "Citizenship", text: "Who should be granted citizenship?", type: "single", options: [
    { text: "Anyone born within the territory (birthright citizenship)", policies: ["Jus Soli"] }, { text: "Only children of existing citizens (bloodline citizenship)", policies: ["Jus Sanguinis"] }, { text: "Anyone who meets clear requirements and demonstrates commitment", policies: ["Merit-Based Citizenship"] }, { text: "All long-term residents should automatically become citizens", policies: ["Residency Citizenship"] }, { text: "Citizenship should be extremely restricted to preserve the nation", policies: ["Restricted Citizenship"] }
  ] },
  // ECONOMY - Ownership
  { id: 25, category: "Economy", subcategory: "Ownership", text: "Who should own the major industries (energy, transport, banking)?", type: "single", options: [
    { text: "The state — nationalized for the public good", policies: ["State Ownership"] }, { text: "Communal or worker owned — through cooperatives and collective ownership", policies: ["Worker Ownership"] }, { text: "Private owners, but with significant government regulation", policies: ["Regulated Private Ownership"] }, { text: "Private owners with minimal government interference", policies: ["Free Market Ownership"] }, { text: "No large industries — decentralized small-scale production", policies: ["Decentralized Production"] }
  ] },
  // ECONOMY - Regulation
  { id: 69, category: "Economy", subcategory: "Regulation", text: "Economic interventions by the government in the non-public sector should include:", type: "multi", exclusiveIndex: 10, questionTooltip: "These interventions apply to the non-public (private) sector of the economy.", options: [
    { text: "Stimulus (reduces costs throughout the economy)", policies: ["Intervention: Stimulus"] }, { text: "Subsidies (reduces costs to producers)", policies: ["Intervention: Subsidies"] }, { text: "Incentives for environmentally sustainable practices", policies: ["Intervention: Green Incentives"] }, { text: "Tariffs and import sanctions (increases costs for importers / limits importing)", policies: ["Intervention: Tariffs/Import Sanctions"] }, { text: "Export taxes and export sanctions (increases costs for exporters / limits exporting)", policies: ["Intervention: Export Taxes/Sanctions"] }, { text: "Nationalization, break up or transfer of ownership of companies", policies: ["Intervention: Nationalization/Breakup"] }, { text: "Eminent domain of land", policies: ["Intervention: Eminent Domain"] }, { text: "Price control", policies: ["Intervention: Price Control"], tooltip: "Do not choose if you don't want private stores to exist." }, { text: "Government rationing in private stores", policies: ["Intervention: Rationing"], tooltip: "Do not choose if you don't want private stores to exist." }, { text: "Minimum wage", policies: ["Intervention: Minimum Wage"] }, { text: "There should be no government interventions in the non-government owned sector, or there should be no non-government owned sector", policies: ["Intervention: None"] }
  ] },
  // ECONOMY - Workplace Hierarchy
  { id: 29, category: "Economy", subcategory: "Workplace Hierarchy", text: "How should workplaces be managed and organized?", type: "single", options: [
    { text: "Traditional hierarchy following the contract and regulations", policies: ["Traditional Hierarchy"] }, { text: "Balance between traditional hierarchy and worker representation", policies: ["Balanced Hierarchy"] }, { text: "Employers should have total control over their workers during work time", policies: ["Employer Total Control"] }, { text: "Full worker self-management — cooperatives where workers are owners", policies: ["Worker Cooperatives"] }
  ] },
  // ECONOMY - Workers' Rights (TRIPLE)
  { id: 30, category: "Economy", subcategory: "Workers' Rights and Associations", type: "double",
    disablesOtherParts: { subId: "30a", optionIndices: [4, 5], targets: ["30b", "30c"], message: "Unions banned or unnecessary — union structure and operation questions are not applicable." },
    questions: [
    { subId: "30a", text: "What role should labor unions play in the economy?", type: "single", options: [
      { text: "Unions should be very widespread", policies: ["Unions: Widespread"] }, { text: "Unions should be promoted and encouraged", policies: ["Unions: Promoted"] }, { text: "Unions should be an option, but it should be left to the workers", policies: ["Unions: Optional"] }, { text: "Unions should be discouraged and reduced", policies: ["Unions: Discouraged"] }, { text: "Unions should be banned", policies: ["Unions: Banned"] }, { text: "Unions shouldn't be necessary, because there should be no distinction between the laborers and those who control means of production", policies: ["Unions: Unnecessary"] }
    ] },
    { subId: "30b", text: "How should unions be structured?", type: "multi", maxSelect: 2, exclusiveIndex: 0, options: [
      { text: "I have no preference / It's not a decision for me to make", policies: ["Union Structure: No Preference"] }, { text: "With elective leadership and some worker participation", policies: ["Union Structure: Elective"] }, { text: "Rank-and-file", policies: ["Union Structure: Rank-and-File"] }, { text: "Hierarchical", policies: ["Union Structure: Hierarchical"] }
    ] },
    { subId: "30c", text: "How should unions be allowed to operate?", type: "multi", exclusiveIndex: 6, mutualExclusion: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4]], options: [
      { text: "Unions should be strictly regulated on matters of their tactics, strikes and such", policies: ["Union Operation: Strictly Regulated"] }, { text: "Only non-radical unions should be allowed", policies: ["Union Operation: Non-Radical Only"], tooltip: "Anarchist, communist or revolutionary syndicalist unions should not be allowed." }, { text: "Unions should get public funding", policies: ["Union Operation: Public Funding"] }, { text: "Unions should be required to accurately represent interest of their workers", policies: ["Union Operation: Accurate Representation"], tooltip: "No incompetent or yellow union leadership allowed. You don't need to choose this if you only believe workers should be able to sue a union for not following their constitution/bylaws." }, { text: "Unions should have a legal right to collective bargaining", policies: ["Union Operation: Collective Bargaining"] }, { text: "Unions should legally engage, consult, negotiate, and compromise with business interest groups and the government to establish standards and policies, that are within labor law", policies: ["Union Operation: Tripartism"], tooltip: "In Tripartism, the government has a large role in the economy and engages in negotiations between labor unions and business interest groups to establish economic policy." }, { text: "The government should control all unions", policies: ["Union Operation: Government Control"] }
    ] }
  ] },
  // ECONOMY - Agriculture (TRIPLE)
  { id: 34, category: "Economy", subcategory: "Agriculture", type: "double", questions: [
    { subId: "34a", text: "Who should own the land?", type: "multi", mutualExclusion: [[0, 1]], questionTooltip: "In case the operators of the land are different from the owners, the owners lease. Choose all the different kinds of ownership which you want to be in your society.", options: [
      { text: "The government should own at least majority of agricultural land", policies: ["Land: Gov Majority"] }, { text: "The government should own some agricultural land", policies: ["Land: Gov Some"] }, { text: "Majority of agricultural land should be 'held of the Crown'/belong to the monarch", policies: ["Land: Crown/Monarch"] }, { text: "Agricultural land should be a commodity", policies: ["Land: Commodity"] }, { text: "Agricultural land should be not commercially transferable, only inheritable", policies: ["Land: Inheritable Only"] }, { text: "Agricultural land should belong to local communities", policies: ["Land: Local Communities"] }, { text: "Agricultural land should be property of its users, not landlords or governments", policies: ["Land: Users Property"] }, { text: "Agricultural land should be common property", policies: ["Land: Common Property"] }
    ] },
    { subId: "34b", text: "Who should administer the land and manage laborers?", type: "multi", options: [
      { text: "Small family farms and independent farmers", policies: ["Land Admin: Family Farms"] }, { text: "Commercial companies owning the farms", policies: ["Land Admin: Commercial Companies"] }, { text: "State owned companies", policies: ["Land Admin: State Companies"] }, { text: "Agricultural cooperatives", policies: ["Land Admin: Cooperatives"] }, { text: "Government-backed executive committees", policies: ["Land Admin: Gov Committees"], tooltip: "Such as War agricultural executive committees in UK, which were tasked with increasing agricultural production in each county, during both the First and Second World Wars." }, { text: "Cooperative associations of users/workers", policies: ["Land Admin: Worker Cooperatives"] }, { text: "Elected local councils with community participation", policies: ["Land Admin: Local Councils"] }, { text: "Aristocratic lords", policies: ["Land Admin: Aristocratic Lords"] }, { text: "Local administration and managers", policies: ["Land Admin: Local Managers"] }, { text: "Traditional communes", policies: ["Land Admin: Traditional Communes"], tooltip: "For example Obshchina in Russia or calpulli in the Aztec society." }
    ] },
    { subId: "34c", text: "Who should work on the land?", type: "multi", options: [
      { text: "Laborers working for wages", policies: ["Land Labor: Wage Laborers"] }, { text: "Tenant farmers or sharecroppers", policies: ["Land Labor: Tenant Farmers"] }, { text: "Independent small-holder farmers", policies: ["Land Labor: Small-holders"] }, { text: "Community members", policies: ["Land Labor: Community Members"] }, { text: "Corv\u00e9e laborers", policies: ["Land Labor: Corv\u00e9e"], tooltip: "Corv\u00e9e is a form of unpaid forced labour that is intermittent in nature, lasting for limited periods of time, typically only a certain number of days' work each year." }, { text: "Prison laborers or slaves", policies: ["Land Labor: Prison/Slaves"] }
    ] }
  ] },
  // ECONOMY - Healthcare (DOUBLE)
  { id: 35, category: "Economy", subcategory: "Healthcare", type: "double", questions: [
    { subId: "35a", text: "Who should own and provide healthcare facilities?", type: "single", options: [
      { text: "Government-owned and operated hospitals and clinics", policies: ["Healthcare: Government-Owned"] }, { text: "Mixed public and non-government ownership", policies: ["Healthcare: Mixed Ownership"] }, { text: "Non-government ownership", policies: ["Healthcare: Non-Government"] }
    ] },
    { subId: "35b", text: "How should healthcare be funded/paid for?", type: "single", options: [
      { text: "Free healthcare", policies: ["Healthcare Funding: Free"] }, { text: "Public insurance option competing with private insurance", policies: ["Healthcare Funding: Public Option"] }, { text: "Systemic subsidies for those who can't afford private insurance", policies: ["Healthcare Funding: Subsidies"] }, { text: "Fully private funding", policies: ["Healthcare Funding: Fully Private"] }
    ] }
  ] },
  // ECONOMY - Taxation
  { id: 72, category: "Economy", subcategory: "Taxation", text: "The forms of involuntary taxation used by the government should be:", type: "multi", exclusiveIndex: 9, options: [
    { text: "A consumption tax (tax on the value of an exchange of goods or services)", policies: ["Tax: Consumption"] }, { text: "A luxury tax (tax on the value of an exchange of luxury or non-essential goods or services)", policies: ["Tax: Luxury"] }, { text: "A capital gains tax (tax on the increased value of an investment between when it was purchased and sold)", policies: ["Tax: Capital Gains"] }, { text: "An inheritance tax (tax on the inheritance gained from a bequeathor when they die)", policies: ["Tax: Inheritance"] }, { text: "A wealth tax (tax on the value of one's net worth)", policies: ["Tax: Wealth"] }, { text: "Taxes to encourage more useful or healthy lifestyle", policies: ["Tax: Lifestyle Incentives"], tooltip: "This includes taxes on alcohol, sugar, tobacco, 'sin taxes', ecological taxes, taxes on weight, taxes on childlessness and more." }, { text: "Corporate tax", policies: ["Tax: Corporate"] }, { text: "Resource rent tax", policies: ["Tax: Resource Rent"], tooltip: "A resource rent tax is a tax on the rents gained on the exploitation of a resource." }, { text: "A poll tax", policies: ["Tax: Poll Tax"] }, { text: "They shouldn't be necessary", policies: ["Tax: None Necessary"] }
  ] },
  { id: 73, category: "Economy", subcategory: "Taxation", text: "If there is taxation, it should be:", type: "single", options: [
    { text: "Proportional (proportion taxed is independent of the value of the asset being taxed)", policies: ["Tax: Proportional"] }, { text: "Progressive (proportion taxed increases as value of asset being taxed increases)", policies: ["Tax: Progressive"] }, { text: "Regressive (proportion taxed decreases as value of asset being taxed increases)", policies: ["Tax: Regressive"] }
  ] },
  // WORLD - Immigration
  { id: 43, category: "World", subcategory: "Immigration", text: "What immigration policy is most desirable?", type: "single", options: [
    { text: "Open borders — free movement of all people", policies: ["Open Borders"] }, { text: "Immigration shouldn't be limited to culture or education, but there should be checks and border control", policies: ["Immigration: Checks and Control"] }, { text: "Immigration should be allowed for workers with education and expertise", policies: ["Immigration: Skilled Workers"] }, { text: "Immigration should be allowed for people of cultures similar to the national culture", policies: ["Immigration: Similar Cultures"] }, { text: "Closed borders, government should control both immigration and emigration, and both should be minimal", policies: ["Closed Borders Controlled"] }
  ] },
  // WORLD - War Policy
  { id: 45, category: "World", subcategory: "War Policy", text: "When is the use of military force justified?", type: "multi", exclusiveIndex: 4, options: [
    { text: "Direct self-defense against an armed attack", policies: ["Self-Defense War"] }, { text: "Humanitarian intervention to stop genocide or mass atrocities", policies: ["Humanitarian Intervention"] }, { text: "Preemptive strikes against imminent threats", policies: ["Preemptive War"] }, { text: "To spread civilization, democracy, or ideology", policies: ["Ideological War"] }, { text: "War is never justified under any circumstances", policies: ["Pacifism"] }
  ] },
  // CULTURE - Education
  { id: 47, category: "Culture & Social Issues", subcategory: "Education", type: "double", questions: [
    { subId: "47a", text: "Who should own schools?", type: "multi", options: [
      { text: "The state", policies: ["Schools: State-Owned"] }, { text: "Private companies", policies: ["Schools: Private Companies"] }, { text: "Communities", policies: ["Schools: Communities"] }, { text: "Families (homeschooling)", policies: ["Schools: Families"] }
    ] },
    { subId: "47b", text: "Should there be official standards?", type: "single", options: [
      { text: "A single national curriculum set by the government", policies: ["Education: National Curriculum"] }, { text: "Government-set minimum standards with school autonomy on specifics", policies: ["Education: Minimum Standards"] }, { text: "Regional or local authorities set their own curricula", policies: ["Education: Local Curricula"] }, { text: "No formal standards — each school or family can self-regulate", policies: ["Education: No Standards"] }
    ] }
  ] },
  // CULTURE - Family & Sex
  { id: 49, category: "Culture & Social Issues", subcategory: "Family & Sex", text: "Should abortion be legal?", type: "single", options: [
    { text: "Completely legal", policies: ["Abortion on Demand"] }, { text: "Legal with some restrictions (gestational limits, etc.)", policies: ["Regulated Abortion"] }, { text: "Legal only in extreme cases (rape, health risk, fetal abnormality)", policies: ["Restricted Abortion"] }, { text: "Banned entirely — life begins at conception", policies: ["Abortion Ban"] }
  ] },
  { id: 56, category: "Culture & Social Issues", subcategory: "Family & Sex", type: "double",
    disablesOtherParts: { subId: "56a", optionIndex: 4, targets: ["56b", "56c"], message: "Marriage shouldn't be legally binding — consent and child marriage questions are not applicable." },
    questions: [
    { subId: "56a", text: "What kind of marriage should be legal?", type: "single", options: [
      { text: "Traditional monogamy", policies: ["Marriage: Traditional Monogamy"] }, { text: "Monogamy between couples of any sex or orientation", policies: ["Marriage: Any Monogamy"] }, { text: "'Traditional' polygamy (Polygyny) and traditional monogamy", policies: ["Marriage: Polygyny and Monogamy"] }, { text: "Polygamy and monogamy between adults of any sex or orientation", policies: ["Marriage: Full Polygamy"] }, { text: "Marriage shouldn't be legally binding", policies: ["Marriage: Not Legally Binding"] }
    ] },
    { subId: "56b", text: "Should all adult participants be fully consenting?", type: "single", options: [
      { text: "Yes", policies: ["Marriage Consent: Full Consent"] }, { text: "When entering marriage they should be fully consenting, but after that in at least some cases they shouldn't be able to divorce without approval of authorities or their partner", policies: ["Marriage Consent: Entry Only"] }, { text: "Not necessarily", policies: ["Marriage Consent: Not Necessary"] }
    ] },
    { subId: "56c", text: "Should child marriage be legal?", type: "single", options: [
      { text: "No", policies: ["Child Marriage: No"] }, { text: "Yes, but only if both sides are underage", policies: ["Child Marriage: Both Underage"] }, { text: "Yes", policies: ["Child Marriage: Yes"] }
    ] }
  ] },
  // CULTURE - Ethnicities and Cultures
  { id: 53, category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", text: "How should society handle cultural diversity?", type: "single", options: [
    { text: "Integration — shared civic values with freedom to maintain cultural identity", policies: ["Integration"] }, { text: "Assimilation — immigrants and minorities should adopt the dominant culture", policies: ["Assimilation"] }, { text: "Separation — distinct communities living apart is natural and acceptable", policies: ["Cultural Separation"] }
  ] },
  { id: 54, category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", text: "What should be done with racism?", type: "single", options: [
    { text: "Racism should be looked upon and not tolerated", policies: ["Racism: Not Tolerated"] }, { text: "As long as it's not a big problem it should be mostly ignored", policies: ["Racism: Ignored"] }, { text: "It should be tolerated or even supported by the government", policies: ["Racism: Supported"] }, { text: "Segregation should be implemented", policies: ["Racism: Segregation"] }, { text: "Different races shouldn't live in same polities", policies: ["Racism: Separate Polities"] }
  ] },
  // CULTURE - Caste and Estate System (DOUBLE)
  { id: 60, category: "Culture & Social Issues", subcategory: "Caste and Estate System", type: "double",
    disablesOtherParts: { subId: "60a", optionIndices: [0, 1], targets: ["60b"], message: "Equality before the law selected — legal inequality basis question is not applicable." },
    questions: [
    { subId: "60a", text: "Should there be equality before the law?", type: "single", options: [
      { text: "Yes, with equitable/proportional application of laws (e.g., fines proportional to wealth instead of fixed amounts)", policies: ["Equality: Equitable Application"] }, { text: "Yes", policies: ["Equality: Yes"] }, { text: "No", policies: ["Equality: No"] }
    ] },
    { subId: "60b", text: "If there is legal inequality, what should be its basis?", type: "multi", options: [
      { text: "Based on economic and/or political position (e.g., different laws for ultra-rich vs. middle class)", policies: ["Inequality Basis: Economic/Political"] }, { text: "There should be a hereditary aristocratic class", policies: ["Inequality Basis: Hereditary Aristocracy"] }, { text: "There should be a full hereditary caste system", policies: ["Inequality Basis: Hereditary Caste"] }, { text: "Based on sex/gender", policies: ["Inequality Basis: Sex/Gender"] }, { text: "Based on race/ethnicity/nationality", policies: ["Inequality Basis: Race/Ethnicity"] }, { text: "Based on your bodily and/or mental ability", policies: ["Inequality Basis: Ability"] }
    ] }
  ] },
  // CULTURE - Media and Speech
  { id: 61, category: "Culture & Social Issues", subcategory: "Media and Speech", text: "What kind of speech should be unlawful?", type: "multi", exclusiveIndex: 0, options: [
    { text: "None — no speech should be unlawful", policies: ["Absolute Free Speech"] }, { text: "Lying about crimes and disasters happening (e.g. screaming \"there is a bomb\")", policies: ["Ban: False Alarms"] }, { text: "Encouraging violent disobedience against the government", policies: ["Ban: Violent Anti-Government"] }, { text: "Opposing the government and its actions", policies: ["Ban: Political Opposition"] }, { text: "Encouraging any disobedience against the government or established political institutions", policies: ["Ban: Any Disobedience"] }, { text: "Showing disrespect to national symbols like the flag", policies: ["Ban: Disrespect National Symbols"] }, { text: "Encouraging violence", policies: ["Ban: Incitement to Violence"] }, { text: "Blasphemous speech", policies: ["Ban: Blasphemy"] }, { text: "Hate speech", policies: ["Ban: Hate Speech"] }, { text: "Disinformation", policies: ["Ban: Disinformation"] }, { text: "Slander and libel against organizations", policies: ["Ban: Slander Organisations"] }, { text: "Slander and libel against public figures", policies: ["Ban: Slander Public Figures"] }, { text: "Slander and libel against private figures", policies: ["Ban: Slander Private Figures"] }, { text: "Speech that goes against contracts such as non-disclosure agreements", policies: ["Ban: Contract Violation Speech"] }
  ] },
  { id: 62, category: "Culture & Social Issues", subcategory: "Media and Speech", type: "double", questions: [
    { subId: "62a", text: "Who should own (traditional) media (television, newspapers, radio)?", type: "single", options: [
      { text: "Only state media", policies: ["Media Ownership: State Only"] }, { text: "State and private media (private media needs state permission to operate)", policies: ["Media Ownership: State and Private Permitted"] }, { text: "State and private media (no permission needed)", policies: ["Media Ownership: State and Private Free"] }, { text: "Only private media", policies: ["Media Ownership: Private Only"] }, { text: "Only independent non-profit media", policies: ["Media Ownership: Non-Profit Only"] }
    ] },
    { subId: "62b", text: "What should be the criteria for public media funding?", type: "single", options: [
      { text: "Based on educational value or public utility", policies: ["Media Funding: Educational/Public Utility"] }, { text: "Government may fund media but no specific criteria required", policies: ["Media Funding: No Criteria"] }, { text: "No government funding for media", policies: ["Media Funding: None"] }
    ] }
  ] },
  { id: 63, category: "Culture & Social Issues", subcategory: "Media and Speech", text: "Who should regulate radio wavelengths?", type: "single", options: [
    { text: "Government agency/ies", policies: ["Radio: Government Agency"] }, { text: "Local governments", policies: ["Radio: Local Governments"] }, { text: "Individuals and/or firms should be able to 'homestead', and own and regulate the specific wavelengths on a specific territory", policies: ["Radio: Homestead"] }, { text: "No one officially, different associations should negotiate between each other without private ownership of wavelengths or government intervention", policies: ["Radio: Voluntary Negotiation"] }
  ] },
  // CULTURE - Forced Labor
  { id: 68, category: "Culture & Social Issues", subcategory: "Forced Labor", type: "double", questions: [
    { subId: "68a", text: "Is there any situation in which a human can be a property (slave) of another human, organisation or government?", type: "multi", exclusiveIndex: 0, options: [
      { text: "None \u2014 slavery is an evil that needs to be purged", policies: ["Abolish All Slavery"] }, { text: "Every human should be a property of their parents, before becoming adults", policies: ["Slavery: Parental Property"] }, { text: "After it's very unlikely for them to pay off their debt", policies: ["Slavery: Debt"] }, { text: "After they wrong someone the victim may claim them as property", policies: ["Slavery: Victim Claim"] }, { text: "As punishment for criminal conviction", policies: ["Slavery: Penal"] }, { text: "After being captured in a war", policies: ["Slavery: War Captive"] }, { text: "After they sell their body in a contract", policies: ["Slavery: Voluntary Contract"] }, { text: "Being born from a slave", policies: ["Slavery: Born from Slave"] }, { text: "They can be a slave in the country if they were already a slave before", policies: ["Slavery: Pre-existing"] }, { text: "If it's the wish of the government", policies: ["Slavery: Government Will"] }
    ] },
    { subId: "68b", text: "What kinds of people should never be slaves?", type: "multi", options: [
      { text: "Citizens of my state", policies: ["Slavery Exempt: Citizens"] }, { text: "People of specific races, ethnic groups, or nationalities", policies: ["Slavery Exempt: Specific Groups"] }, { text: "There should be no exception", policies: ["Slavery Exempt: No Exception"] }
    ] }
  ] },
  { id: 64, category: "Culture & Social Issues", subcategory: "Forced Labor", text: "Should any other form of forced labor be permitted?", type: "multi", exclusiveIndex: 0, options: [
    { text: "None", policies: ["Abolish All Forced Labor"] }, { text: "As punishment for criminal conviction (prison labor)", policies: ["Penal Labor"] }, { text: "For national emergencies, military service, or civic duty", policies: ["Civic Labor Duty"] }, { text: "For social order and rehabilitation when managed by the state", policies: ["State Forced Labor"] }, { text: "As a compensation to the lender when the borrower can't repay the debt", policies: ["Forced Labor: Debt Compensation"] }, { text: "As a compensation to a victim of property damage or medical operations needed to recover from damage caused by the attacker", policies: ["Forced Labor: Victim Compensation"] }, { text: "It should be a crime to not work", policies: ["Forced Labor: Crime Not to Work"], tooltip: "Example: USSR, where officially skipping work was a severe crime, and so was living a 'parasitic lifestyle' \u2014 every able-bodied adult had to have a job or study." }, { text: "People with authority over corv\u00e9e laborers and serfs should be able to force them to work", policies: ["Forced Labor: Corv\u00e9e Authority"] }
  ] },
  // CULTURE - Technology
  { id: 65, category: "Culture & Social Issues", subcategory: "Technology", text: "What is the answer to the question of artificial intelligence?", type: "single", options: [
    { text: "Heavy government regulation and mandatory oversight of all AI development", policies: ["Heavy AI Regulation"] }, { text: "Moderate regulation with industry self-governance standards", policies: ["Moderate AI Regulation"] }, { text: "Light regulation \u2014 let innovation flourish with minimal interference", policies: ["Light AI Regulation"] }, { text: "No regulation \u2014 market competition and open source will self-correct", policies: ["No AI Regulation"] }, { text: "AI should be a servant of the public, not private industry, and be used to bring a moneyless automated society", policies: ["AI: Public Servant"] }
  ] }
];
