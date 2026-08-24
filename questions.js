const questions = [
  { id: 0, category: "", subcategory: "", type: "intro", text: "Before you begin", body: "If you follow communism, anarchism, or other philosophy or movement that is about very radical change, please answer consistently. If one of your answers is consistent with the post-revolutionary society (let's say you chose there should be no money or property), then all should be. Don't jump from answering according to the ideal, to then answer what's the best pragmatic choice in the present day. Otherwise the results may not make sense." },
  { id: -1, category: "", subcategory: "", type: "intro", text: "Important Notice", body: "This test is still in active development and may change at any time. Questions may be added, removed, or modified. Your saved results may not be compatible with future versions. We recommend retaking the test periodically to get the most accurate and up-to-date assessment.\n\n**Planned features:** Showing ideologically close historical figures and states based on your results." },
  
  // I. GOVERNANCE - Governance Principle
  { id: 1, category: "Governance", subcategory: "Governance Principle", text: "An independent administration/polity/constitution should span:", type: "single", questionTooltip: "Select the size of your preferred administration, polity or constitution, the details and policies of which you will describe in the following questions.", options: [
    { text: "A local community", policies: ["Span: Local Community"] },
    { text: "A town/city", policies: ["Span: Town/City"] },
    { text: "A very small to small country", policies: ["Span: Small Country"] },
    { text: "A medium to large country", policies: ["Span: Medium/Large Country"] },
    { text: "A (whole) continent", policies: ["Span: Continent"] },
    { text: "Whole world", policies: ["Span: World"], tooltip: "Do not choose this if you want your type of polity/constitution to be adopted universally, only choose this if you want a world confederation/federation/government to exist" },
    { text: "Administration and legal system should be fully privatized and a matter of production and consumption on the free market, and I don't want to focus on any specific size of such organisation, as it's choice of owners and 'consumers' to decide where and how to live", policies: ["Span: Panarchy"], tooltip: "Do not choose this if you want it to exist in a context of established written law" }
  ], disablesQuestions: { optionIndex: 6, targets: [19, 82, 85], message: "Panarchy selected — centralization questions are not applicable." } },
  
  // GOVERNANCE - Centralization
  { id: 19, category: "Governance", subcategory: "Centralization", text: "How should political power be geographically distributed?", type: "single", options: [
    { text: "Unitary — all power is in the central government", policies: ["Unitary State"] },
    { text: "Devolution — central government delegates powers to regional bodies", policies: ["Devolution"] },
    { text: "A mix of federal and national systems with shared powers", policies: ["Mix of national and federal organisation"] },
    { text: "A confederation — regions are nearly sovereign and delegate limited powers upward", policies: ["Confederation"] },
    { text: "A free federation – regions delegate limited powers upward and each territory has a right to secede at any time", policies: ["Free federation"] },
    { text: "Fully autonomous local communities with no higher delegation", policies: ["Local Autonomy"] },
    { text: "There should be an established public constitution, without public state", policies: ["Public Constitution Without State"], tooltip: "The constitution should be enforced by non-public providers without state monopoly" }
  ] },
  { id: 82, category: "Governance", subcategory: "Centralization", text: "Choose which you agree with on national level:", type: "single", options: [
    { text: "Each subset of the government's authoritative powers should be divided across different leaders such that they check each other's powers to reduce unilateral action (example: leader with military control separate from leader setting military budget)", policies: ["Power Division: Checks National"] },
    { text: "Different subsets of the government's authoritative powers should be divided among different leaders such that each is able to act unilaterally and efficiently within the subset of their own responsibilities (example: military leader separate from legislative leader)", policies: ["Power Division: Efficient National"] },
    { text: "Neither", policies: ["Power Division: Neither National"] }
  ] },
  { id: 85, category: "Governance", subcategory: "Centralization", text: "Choose which you agree with on federal subunit level:", type: "single", options: [
    { text: "Each subset of the government's authoritative powers should be divided across different leaders such that they check each other's powers to reduce unilateral action (example: leader with military control separate from leader setting military budget)", policies: ["Power Division: Checks Subunit"] },
    { text: "Different subsets of the government's authoritative powers should be divided among different leaders such that each is able to act unilaterally and efficiently within the subset of their own responsibilities (example: military leader separate from legislative leader)", policies: ["Power Division: Efficient Subunit"] },
    { text: "Neither", policies: ["Power Division: Neither Subunit"] }
  ] },
  
  // GOVERNANCE - Distribution of Power
  { id: 3, category: "Governance", subcategory: "Distribution of Power", type: "double", 
    disablesOtherParts: { subId: "3a", optionIndex: 0, targets: ["3b"], message: "No voting selected — vote weighting is not applicable." },
    questions: [
    { subId: "3a", text: "What should be the conditions to have a right to vote?", type: "multi", exclusiveIndex: 0, mutualExclusion: [[2, 3]], options: [
      { text: "There should be no voting", policies: ["Vote: No Voting"] },
      { text: "Be above a specific age", policies: ["Vote: Age Requirement"] },
      { text: "Be a citizen", policies: ["Vote: Citizenship"] },
      { text: "Be a citizen since birth", policies: ["Vote: Birth Citizenship"] },
      { text: "Be literate", policies: ["Vote: Literacy/Civic Knowledge"] },
      { text: "Not be in prison", policies: ["Vote: Not Imprisoned"] },
      { text: "Have no serious criminal charges", policies: ["Vote: No Criminal Record"] },
      { text: "Be a member of recognized parties", policies: ["Vote: Party Membership"] },
      { text: "Own land", policies: ["Vote: Land Ownership"] },
      { text: "Have capital or wealth", policies: ["Vote: Wealth Requirement"] },
      { text: "Be male", policies: ["Vote: Male Only"] },
      { text: "Be of a specific race", policies: ["Vote: Racial Requirement"] },
      { text: "Have children", policies: ["Vote: Parenthood"] },
      { text: "Be a follower of specific religion", policies: ["Vote: Religious Requirement"] },
      { text: "Have an aristocratic title", policies: ["Vote: Aristocratic Title"] },
      { text: "Be married", policies: ["Vote: Married"] },
      { text: "Have stable taxable income", policies: ["Vote: Stable Income"] },
      { text: "Reside in the territory", policies: ["Vote: Residency"] },
      { text: "Own shares in the state", policies: ["Vote: State Shares"] }
    ] },
    { subId: "3b", text: "How should votes be weighted?", type: "multi", options: [
      { text: "They shouldn't be weighted", policies: ["Vote Weight: None"] },
      { text: "Wealth weighting", policies: ["Vote Weight: Wealth"] },
      { text: "Racial weighting", policies: ["Vote Weight: Racial"] },
      { text: "Sex/gender weighting", policies: ["Vote Weight: Sex/Gender"] },
      { text: "Age weighting (greater weighting of younger voters)", policies: ["Vote Weight: Younger"] },
      { text: "Age weighting (greater weighting of older voters)", policies: ["Vote Weight: Older"] }
    ] }
  ] },
  
  // GOVERNANCE - Head of State & Head of Government
  { id: 1000, category: "Governance", subcategory: "Head of State & Head of Government", type: "double",
    disablesOtherParts: { subId: "1000a", optionIndex: 7, targets: ["1000b"], message: "No formal head of state selected — role question is not applicable." },
    questions: [
    { subId: "1000a", text: "How should the head of state be selected?", type: "single", options: [
      { text: "Directly elected by the people", policies: ["HoS Selection: Direct Election"] },
      { text: "Elected by the legislature", policies: ["HoS Selection: Legislative Election"] },
      { text: "Elected by an electoral college or special assembly", policies: ["HoS Selection: Electoral College"] },
      { text: "Hereditary succession", policies: ["HoS Selection: Hereditary"] },
      { text: "Appointed by a religious authority", policies: ["HoS Selection: Religious Appointment"] },
      { text: "Appointed by military leadership", policies: ["HoS Selection: Military Appointment"] },
      { text: "Selected by a ruling party or council", policies: ["HoS Selection: Party/Council Selection"] },
      { text: "No formal head of state", policies: ["HoS Selection: None"] }
    ] },
    { subId: "1000b", text: "What should be the head of state's role?", type: "multi", options: [
      { text: "Ceremonial duties — represents the state at official functions", policies: ["HoS Power: Ceremonial"] },
      { text: "Appoints the head of government and ministers", policies: ["HoS Power: Appoints Government"] },
      { text: "Dissolves the legislature and calls elections", policies: ["HoS Power: Dissolution"] },
      { text: "Signs or vetoes legislation", policies: ["HoS Power: Legislative Veto"] },
      { text: "Commander-in-chief of the armed forces", policies: ["HoS Power: Commander-in-Chief"] },
      { text: "Conducts foreign policy and ratifies treaties", policies: ["HoS Power: Foreign Affairs"] },
      { text: "Grants pardons and clemency", policies: ["HoS Power: Pardons"] },
      { text: "Declares states of emergency", policies: ["HoS Power: Emergency Powers"] },
      { text: "Full executive authority — governs directly", policies: ["HoS Power: Full Executive"] },
      { text: "No formal powers", policies: ["HoS Power: None"] }
    ] }
  ] },
  { id: 1001, category: "Governance", subcategory: "Head of State & Head of Government", type: "double",
    disablesOtherParts: { subId: "1001a", optionIndex: 6, targets: ["1001b"], message: "No formal head of government selected — powers question is not applicable." },
    questions: [
    { subId: "1001a", text: "How should the head of government be selected?", type: "single", options: [
      { text: "The leader of the majority party or coalition in the legislature", policies: ["HoG Selection: Legislative Majority Leader"] },
      { text: "Appointed by the head of state", policies: ["HoG Selection: Appointed by HoS"] },
      { text: "Directly elected by the people", policies: ["HoG Selection: Direct Election"] },
      { text: "Elected by the legislature", policies: ["HoG Selection: Legislative Election"] },
      { text: "Selected by a ruling party or council", policies: ["HoG Selection: Party/Council Selection"] },
      { text: "The same person as the head of state", policies: ["HoG Selection: Unified with HoS"] },
      { text: "No formal head of government", policies: ["HoG Selection: None"] }
    ] },
    { subId: "1001b", text: "What should be the head of government's powers?", type: "multi", options: [
      { text: "Leads the cabinet and sets government policy", policies: ["HoG Power: Cabinet Leadership"] },
      { text: "Proposes legislation to the legislature", policies: ["HoG Power: Legislative Initiative"] },
      { text: "Controls the government budget and spending", policies: ["HoG Power: Budget Control"] },
      { text: "Appoints and dismisses ministers", policies: ["HoG Power: Ministerial Appointments"] },
      { text: "Commands the armed forces", policies: ["HoG Power: Military Command"] },
      { text: "Conducts day-to-day foreign policy", policies: ["HoG Power: Foreign Policy"] },
      { text: "Declares states of emergency", policies: ["HoG Power: Emergency Powers"] },
      { text: "Can dissolve the legislature", policies: ["HoG Power: Dissolution"] },
      { text: "Full executive authority — governs directly", policies: ["HoG Power: Full Executive"] },
      { text: "Limited administrative role — implements legislative decisions", policies: ["HoG Power: Administrative Only"] }
    ] }
  ] },
  
  // GOVERNANCE - Executive and Legislative Structure (NEW Q7)
  { id: 100, category: "Governance", subcategory: "Executive and Legislative Structure", text: "What should be the main role of the legislature in government?", type: "single", options: [
    { text: "It should perform both legislative and executive functions, without an separate executive", policies: ["Supreme legislature"] },
    { text: "The legislature should be separate from the executive (though not necessarily equal to)", policies: ["Co-existence of legislature and executive"] },
    { text: "The executive should perform both legislative and executive functions", policies: ["Supreme executive"] },
    { text: "There should be no formal legislature and executive shouldn't replace its functions", policies: ["No legislature"], tooltip: "No person, group or institution should have law-making power" }
  ], disablesQuestions: { optionIndices: [2, 3], targets: [101, 152, 11], message: "Executive performs legislative functions or no legislature selected — subsequent questions are not applicable." } },
  
  { id: 101, category: "Governance", subcategory: "Executive and Legislative Structure", type: "double",
    conditionalDisable: [
      { subId: "101a", optionIndex: 0, targets: ["101c", "101d"], message: "One chamber selected — additional chamber questions are not applicable." },
      { subId: "101a", optionIndex: 1, targets: ["101d"], message: "Two chambers selected — third chamber question is not applicable." }
    ],
    questions: [
    { subId: "101a", text: "How many legislative chambers should there be?", type: "single", options: [
      { text: "One", policies: ["Unicameral"] },
      { text: "Two", policies: ["Bicameral"] },
      { text: "Three", policies: ["Tricameralism"] }
    ] },
    { subId: "101b", text: "Who should the first chamber represent?", type: "single", options: [
      { text: "Citizens", policies: ["Chamber 1 Represents: Citizens"] },
      { text: "Federal subunit (e.g., counties, provinces, states, cantons, territories, etc)", policies: ["Chamber 1 Represents: Federal Subunit"] },
      { text: "Communes", policies: ["Chamber 1 Represents: Communes"] },
      { text: "Aristocracy/Crown", policies: ["Chamber 1 Represents: Aristocracy/Crown"] },
      { text: "Scientists and technical experts", policies: ["Chamber 1 Represents: Scientists/Experts"] },
      { text: "Big businesses", policies: ["Chamber 1 Represents: Big Businesses"] },
      { text: "Labor associations", policies: ["Chamber 1 Represents: Labor Associations"] },
      { text: "Small businesses, middle class associations and farmers", policies: ["Chamber 1 Represents: Small Business/Middle Class/Farmers"] },
      { text: "Clergy", policies: ["Chamber 1 Represents: Clergy"] },
      { text: "Important cities", policies: ["Chamber 1 Represents: Important Cities"] },
      { text: "Multiple corporate groups (e.g. employers, employees, liberal professions, public bodies)", policies: ["Chamber 1 Represents: Corporate Groups"] }
    ] },
    { subId: "101c", text: "Who should the second chamber represent?", type: "single", options: [
      { text: "Citizens", policies: ["Chamber 2 Represents: Citizens"] },
      { text: "Federal subunit (e.g., counties, provinces, states, cantons, territories, etc)", policies: ["Chamber 2 Represents: Federal Subunit"] },
      { text: "Communes", policies: ["Chamber 2 Represents: Communes"] },
      { text: "Aristocracy/Crown", policies: ["Chamber 2 Represents: Aristocracy/Crown"] },
      { text: "Scientists and technical experts", policies: ["Chamber 2 Represents: Scientists/Experts"] },
      { text: "Big businesses", policies: ["Chamber 2 Represents: Big Businesses"] },
      { text: "Labor associations", policies: ["Chamber 2 Represents: Labor Associations"] },
      { text: "Small businesses, middle class associations and farmers", policies: ["Chamber 2 Represents: Small Business/Middle Class/Farmers"] },
      { text: "Clergy", policies: ["Chamber 2 Represents: Clergy"] },
      { text: "Important cities", policies: ["Chamber 2 Represents: Important Cities"] },
      { text: "Multiple corporate groups (e.g. employers, employees, liberal professions, public bodies)", policies: ["Chamber 2 Represents: Corporate Groups"] }
    ] },
    { subId: "101d", text: "Who should the third chamber represent?", type: "single", options: [
      { text: "Citizens", policies: ["Chamber 3 Represents: Citizens"] },
      { text: "Federal subunit (e.g., counties, provinces, states, cantons, territories, etc)", policies: ["Chamber 3 Represents: Federal Subunit"] },
      { text: "Communes", policies: ["Chamber 3 Represents: Communes"] },
      { text: "Aristocracy/Crown", policies: ["Chamber 3 Represents: Aristocracy/Crown"] },
      { text: "Scientists and technical experts", policies: ["Chamber 3 Represents: Scientists/Experts"] },
      { text: "Big businesses", policies: ["Chamber 3 Represents: Big Businesses"] },
      { text: "Labor associations", policies: ["Chamber 3 Represents: Labor Associations"] },
      { text: "Small businesses, middle class associations and farmers", policies: ["Chamber 3 Represents: Small Business/Middle Class/Farmers"] },
      { text: "Clergy", policies: ["Chamber 3 Represents: Clergy"] },
      { text: "Important cities", policies: ["Chamber 3 Represents: Important Cities"] },
      { text: "Multiple corporate groups (e.g. employers, employees, liberal professions, public bodies)", policies: ["Chamber 3 Represents: Corporate Groups"] }
    ] }
  ] },
  { id: 152, category: "Governance", subcategory: "Executive and Legislative Structure", text: "Who should have a right to veto legislation?", type: "multi", exclusiveIndex: 5, options: [
    { text: "The head of state", policies: ["Veto Right: Head of State"] },
    { text: "An upper legislative chamber", policies: ["Veto Right: Upper Chamber"] },
    { text: "A constitutional court", policies: ["Veto Right: Constitutional Court"] },
    { text: "Regional or local governments", policies: ["Veto Right: Regional/Local"] },
    { text: "Citizens through a referendum", policies: ["Veto Right: Citizens Referendum"] },
    { text: "No one should have a veto right", policies: ["Veto Right: None"] }
  ] },
  { id: 11, category: "Governance", subcategory: "Executive and Legislative Structure", text: "Should there be a formal separation of powers (executive, legislative, judicial)?", type: "multi", options: [
    { text: "Yes — strict separation with strong checks and balances", policies: ["Separation of Powers: Strict"] },
    { text: "Yes — but with some overlap for efficiency", policies: ["Separation of Powers: Partial"] },
    { text: "No — unified government power is more effective", policies: ["Separation of Powers: None"] },
    { text: "Irrelevant — power structures should be dismantled entirely", policies: ["Separation of Powers: Anti-State"] }
  ] },
  
  // GOVERNANCE - Church and State (TRIPLE)
  { id: 12, category: "Governance", subcategory: "Church and State", type: "double",
    disablesOtherParts: { subId: "12a", optionIndices: [2, 3, 4], targets: ["12c"], message: "Separation, laicism, or state atheism selected — power relationship question is not applicable." },
    questions: [
    { subId: "12a", text: "What is the formal status of religion in the state?", type: "single", options: [
      { text: "Official religion", policies: ["Religion Status: Official"] },
      { text: "No official religion, no secularism mandate", policies: ["Religion Status: No Official No Secularism"] },
      { text: "Official separation of church and state", policies: ["Religion Status: Official Separation"] },
      { text: "Laicism – Ban on religious influence in public administration", policies: ["Religion Status: Laicism"] },
      { text: "State atheism", policies: ["Religion Status: State Atheism"] }
    ] },
    { subId: "12b", text: "Should people have a right to religious freedom?", type: "single", options: [
      { text: "Yes", policies: ["Religious Freedom: Yes"] },
      { text: "No", policies: ["Religious Freedom: No"] }
    ] },
    { subId: "12c", text: "What is the power relationship between state and religious institutions?", type: "single", options: [
      { text: "Official state religion subordinate to the state or one of officials in the government", policies: ["Religion Power: State Controls Religion"] },
      { text: "All religious institutions subordinate to state", policies: ["Religion Power: All Subordinate to State"] },
      { text: "State subordinate to religious authority", policies: ["Religion Power: State Subordinate"] },
      { text: "Formal agreement(s), no active control", policies: ["Religion Power: Formal Agreement"] },
      { text: "No formal power relationship", policies: ["Religion Power: No Relationship"] }
    ] }
  ] },
  { id: 13, category: "Governance", subcategory: "Church and State", text: "Should religious institutions or personas be subject to tax exemptions or special legal or economic treatment?", type: "single", options: [
    { text: "No, treated like all other organisations", policies: ["Religious Tax: No Privilege"] },
    { text: "No, and shouldn't be funded from public wealth", policies: ["Religious Tax: No Public Funding"] },
    { text: "Yes, but all religions treated equally", policies: ["Religious Tax: All Equal"] },
    { text: "Yes, but official religion has preference", policies: ["Religious Tax: Official Preference"] },
    { text: "Yes, but only the official religion", policies: ["Religious Tax: Only Official"] },
    { text: "No, and organised religions should be marginalized", policies: ["Religious Tax: Marginalized"] }
  ] },
  
  // GOVERNANCE - Bureaucracy
  { id: 15, category: "Governance", subcategory: "Bureaucracy", text: "How transparent should state operations be?", type: "single", options: [
    { text: "Full transparency by default", policies: ["Transparency: Radical"] },
    { text: "Most things public, but security exceptions", policies: ["Transparency: Balanced"] },
    { text: "Significant secrecy", policies: ["Transparency: Government Secrecy"] },
    { text: "Operate without public scrutiny", policies: ["Transparency: Opaque"] }
  ] },
  { id: 102, category: "Governance", subcategory: "Bureaucracy", text: "How should local administrative positions be filled?", type: "single", options: [
    { text: "Appointed by the central government", policies: ["Local Admin: Central Appointment"] },
    { text: "Appointed by the regional or local state government", policies: ["Local Admin: Subunit Appointment"] },
    { text: "Mostly hereditary", policies: ["Local Admin: Hereditary"] },
    { text: "The more important positions elected, with majority of bureaucracy done by unelected professional", policies: ["Local Admin: Mixed Elected"] },
    { text: "All administrative positions, even small bureaucrats should be elected positions", policies: ["Local Admin: Fully Elected"] },
    { text: "They should be filled by citizens chosen by a lottery or rotation system", policies: ["Local Admin: Sortition"] }
  ] },
  
  // GOVERNANCE - Army Model
  { id: 16, category: "Governance", subcategory: "Army Model", text: "What kind of military structure is most desirable?", type: "single", options: [
    { text: "Professional army", policies: ["Military: Professional"] },
    { text: "Citizen militias", policies: ["Military: Militia"] },
    { text: "Army made out of forcefully conscripted civilians in time of need (excluding officers)", policies: ["Military: Conscripted"] },
    { text: "Army made out of members of a specific soldier caste", policies: ["Military: Soldier Caste"] },
    { text: "Private armies", policies: ["Military: Private"] }
  ], disablesQuestions: { optionIndex: 4, targets: [71], message: "Private armies selected — officer determination is not applicable." } },
  { id: 70, category: "Governance", subcategory: "Army Model", type: "double",
    disablesOtherParts: { subId: "70a", optionIndex: 3, targets: ["70b", "70c"], message: "No conscription selected — conscription timing and exemption questions are not applicable." },
    questions: [
    { subId: "70a", text: "Should there be conscription?", type: "single", options: [
      { text: "Yes, selective compulsory service", policies: ["Conscription: Selective"] },
      { text: "Yes, lottery draft", policies: ["Conscription: Lottery"] },
      { text: "Yes, universal compulsory service", policies: ["Conscription: Universal"] },
      { text: "No conscription", policies: ["Conscription: None"] }
    ] },
    { subId: "70b", text: "At what time should conscription be used?", type: "multi", options: [
      { text: "Wartime", policies: ["Conscription Timing: Wartime"] },
      { text: "National emergencies", policies: ["Conscription Timing: Emergencies"] },
      { text: "Defense shortages", policies: ["Conscription Timing: Defense Shortages"] },
      { text: "Peacetime", policies: ["Conscription Timing: Peacetime"] }
    ] },
    { subId: "70c", text: "Who should be exempt from conscription? (not counting people with certain disabilities)", type: "multi", options: [
      { text: "Women", policies: ["Conscription Exempt: Women"] },
      { text: "Influential businessmen", policies: ["Conscription Exempt: Businessmen"] },
      { text: "Influential politicians", policies: ["Conscription Exempt: Politicians"] },
      { text: "Celebrities", policies: ["Conscription Exempt: Celebrities"] },
      { text: "LGBT people", policies: ["Conscription Exempt: LGBT"] },
      { text: "Families of influential people", policies: ["Conscription Exempt: Influential Families"] },
      { text: "People from certain cultures, races or ethnic groups", policies: ["Conscription Exempt: Certain Groups"] },
      { text: "No one, there should be equality on this matter", policies: ["Conscription Exempt: No One"] }
    ] }
  ] },
  { id: 71, category: "Governance", subcategory: "Army Model", text: "How should officers be determined?", type: "single", options: [
    { text: "Based on their merit", policies: ["Officers: Merit"] },
    { text: "Based on their loyalty to the government", policies: ["Officers: Loyalty"] },
    { text: "They should be elected by the soldiers they command", policies: ["Officers: Elected"] },
    { text: "Based on merit, but higher ranks and promotions should also be available for purchase", policies: ["Officers: Purchasable"] },
    { text: "They should come from nobility", policies: ["Officers: Nobility"] }
  ] },
  
  // GOVERNANCE - Policing (TRIPLE)
  { id: 17, category: "Governance", subcategory: "Policing", type: "double", disablesOtherParts: { subId: "17a", optionIndex: 5, targets: ["17b", "17c"], message: "No organised policing force selected — responsibilities and privileges are not applicable." }, questions: [
    { subId: "17a", text: "What should be the main form of policing?", type: "multi", maxSelect: 2, exclusiveIndex: 5, mutualExclusion: [[0, 2]], options: [
      { text: "Professional dedicated national force with standardized training", policies: ["Police: National Professional"] },
      { text: "Local professional force", policies: ["Police: Local Professional"] },
      { text: "Professional dedicated national force with military equipment and training", policies: ["Police: Militarized National"] },
      { text: "Private law enforcement companies", policies: ["Police: Private Companies"] },
      { text: "A force made up of actively rotating community members", policies: ["Police: Rotating Community"] },
      { text: "There should be no organised policing force", policies: ["Police: None"] }
    ] },
    { subId: "17b", text: "What should be the responsibilities of the organisation?", type: "multi", options: [
      { text: "Guarding and protecting public/communal property", policies: ["Police Responsibility: Public Property"] },
      { text: "Protecting civilians", policies: ["Police Responsibility: Civilians"] },
      { text: "Crowd control", policies: ["Police Responsibility: Crowd Control"] },
      { text: "Protecting private and/or personal property", policies: ["Police Responsibility: Private Property"] },
      { text: "Dealing with criminals and making arrests", policies: ["Police Responsibility: Criminals"] },
      { text: "Investigating crimes", policies: ["Police Responsibility: Investigation"] }
    ] },
    { subId: "17c", text: "What privileges and responsibilities on duty should they have?", type: "multi", options: [
      { text: "Some form of immunity", policies: ["Police Privilege: Immunity"] },
      { text: "Right to bear and use arms in public normal civilians don't have", policies: ["Police Privilege: Arms"] },
      { text: "Right to use of public surveillance cameras and technology normal civilians don't have", policies: ["Police Privilege: Surveillance"] },
      { text: "Right to arrest suspects", policies: ["Police Privilege: Arrest"] },
      { text: "Duty to defend civilians", policies: ["Police Duty: Defend Civilians"] },
      { text: "Duty to wear body cam during duty", policies: ["Police Duty: Body Cam"] },
      { text: "Prohibition from policing in the event of a gross violation or repeated violation", policies: ["Police Duty: Prohibition"] },
      { text: "Enter a private/personal property without a permit", policies: ["Police Privilege: Entry"] },
      { text: "Confiscate personal property without a permit", policies: ["Police Privilege: Confiscation"] }
    ] }
  ] },
  
  // GOVERNANCE - Internal Security
  { id: 18, category: "Governance", subcategory: "Internal Security", text: "How much surveillance should the state conduct on its own population?", type: "single", options: [
    { text: "Extensive surveillance — any civilian could be potentially a criminal, that's why almost everyone should be surveilled", policies: ["Surveillance: Extensive"] },
    { text: "Targeted surveillance with judicial warrants for specific suspects", policies: ["Surveillance: Targeted Warrants"] },
    { text: "Targeted surveillance without judicial warrants for specific suspects", policies: ["Surveillance: Targeted No Warrants"] },
    { text: "Minimal surveillance with strict legal oversight and transparency", policies: ["Surveillance: Minimal"] },
    { text: "No state surveillance whatsoever — privacy is absolute", policies: ["Surveillance: None"] }
  ] },
  
  // GOVERNANCE - Judiciary (TRIPLE)
  { id: 20, category: "Governance", subcategory: "Judiciary", type: "double",
    disablesOtherParts: { subId: "20a", optionIndex: 4, targets: ["20b", "20c"], message: "No courts selected — jury questions are not applicable." },
    conditionalDisable: {
      conditions: [
        { subId: "20b", optionIndex: 3 },
        { subId: "20c", optionIndex: 5 }
      ],
      targets: ["20a"],
      message: "Juries fulfill all judge functions in all cases — judge selection is not applicable."
    },
    questions: [
    { subId: "20a", text: "How should judges be selected?", type: "single", options: [
      { text: "Elected directly by the people", policies: ["Judges: Elected"] },
      { text: "Appointed by the executive or legislature", policies: ["Judges: Appointed"] },
      { text: "Selected through a merit-based professional process", policies: ["Judges: Professional"] },
      { text: "Religious or traditional authorities should adjudicate", policies: ["Judges: Traditional"] },
      { text: "There should be no courts", policies: ["Judges: None"] }
    ] },
    { subId: "20b", text: "What should be the role of juries?", type: "single", options: [
      { text: "There should be no juries", policies: ["Juries: None"] },
      { text: "Juries should only assist judges, not decide the verdict", policies: ["Juries: Assist Only"] },
      { text: "Juries should reach a verdict, while a judge should decide the sentence and make sure the procedure is followed", policies: ["Juries: Verdict Only"] },
      { text: "Juries should fulfill all the functions of a judge", policies: ["Juries: Full Functions"] }
    ] },
    { subId: "20c", text: "In what cases should juries be involved?", type: "single", options: [
      { text: "Serious Criminal Cases Only", policies: ["Jury Cases: Serious Criminal"] },
      { text: "All Criminal Cases", policies: ["Jury Cases: All Criminal"] },
      { text: "Criminal + Civil Cases", policies: ["Jury Cases: Criminal and Civil"] },
      { text: "Civil Cases Only", policies: ["Jury Cases: Civil Only"] },
      { text: "Specialized/Limited Cases", policies: ["Jury Cases: Specialized"] },
      { text: "All cases", policies: ["Jury Cases: All"] }
    ] }
  ] },
  { id: 103, category: "Governance", subcategory: "Judiciary", text: "What should be the role of courts?", type: "single", options: [
    { text: "To judge the legality of actions", policies: ["Courts: Legality"] },
    { text: "To judge the legality of actions and interpret the law, helping establish precedent based on existing law", policies: ["Courts: Legality and Interpretation"] },
    { text: "To judge the legality of actions and create precedents based on whether an action is just", policies: ["Courts: Legality and Justice"] },
    { text: "To judge actions based on local customs", policies: ["Courts: Customs"] },
    { text: "To resolve conflicts based on justice and precedents, and judge the precedents", policies: ["Courts: Justice and Precedents"] },
    { text: "To resolve conflicts without reference to law", policies: ["Courts: No Law Reference"] }
  ] },
  { id: 104, category: "Governance", subcategory: "Judiciary", text: "Should a constitutional court be able to strike down legislation?", type: "single", options: [
    { text: "Yes — an independent court must guard the constitution", policies: ["Constitutional Court: Independent"] },
    { text: "Yes — but with legislative override by supermajority", policies: ["Constitutional Court: With Override"] },
    { text: "No — elected representatives should have the final say", policies: ["Constitutional Court: No"] },
    { text: "There should be no constitution to enforce", policies: ["Constitutional Court: No Constitution"] }
  ] },
  
  // GOVERNANCE - Justice
  { id: 105, category: "Governance", subcategory: "Justice", text: "What should be the primary purpose of the criminal justice system?", type: "multi", maxSelect: 4, options: [
    { text: "Rehabilitation — help offenders become productive members of society", policies: ["Justice Purpose: Rehabilitation"] },
    { text: "Restoration — repair the harm done to victims and communities", policies: ["Justice Purpose: Restoration"] },
    { text: "Deterrence — harsh penalties prevent future crime", policies: ["Justice Purpose: Deterrence"] },
    { text: "Retribution — criminals deserve proportional punishment", policies: ["Justice Purpose: Retribution"] },
    { text: "Incapacitation — remove dangerous people from society permanently", policies: ["Justice Purpose: Incapacitation"] },
    { text: "Expulsion (exclude violators from the governed territory for a period of time: banishment, loss of citizenship, etc.)", policies: ["Justice Purpose: Expulsion"] }
  ] },
  { id: 106, category: "Governance", subcategory: "Justice", text: "Should the death penalty exist?", type: "single", options: [
    { text: "Yes", policies: ["Death Penalty: Yes"] },
    { text: "No", policies: ["Death Penalty: No"] }
  ] },
  { id: 107, category: "Governance", subcategory: "Justice", text: "Should prisons exist?", type: "single", options: [
    { text: "Yes", policies: ["Prisons: Yes"] },
    { text: "Yes, but only for dangerous crimes like murder", policies: ["Prisons: Dangerous Only"] },
    { text: "No", policies: ["Prisons: No"] }
  ] },
  
  // GOVERNANCE - Citizenship
  { id: 108, category: "Governance", subcategory: "Citizenship", text: "Who should be granted citizenship?", type: "single", options: [
    { text: "Anyone born within the territory (birthright citizenship)", policies: ["Citizenship: Birthright"] },
    { text: "Only children of existing citizens (bloodline citizenship)", policies: ["Citizenship: Bloodline"] },
    { text: "All long-term residents should automatically become citizens", policies: ["Citizenship: Long-term Residents"] }
  ] },
  
  // II. ECONOMY - Ownership
  { id: 1002, category: "Economy", subcategory: "Ownership", text: "Who should own the major industries?", type: "single", options: [
    { text: "Mostly the government", policies: ["Industry Ownership: Government"] },
    { text: "Mostly private owners", policies: ["Industry Ownership: Private"] },
    { text: "Mostly cooperatives", policies: ["Industry Ownership: Cooperatives"] },
    { text: "Society as a whole with direct communal control", policies: ["Industry Ownership: Communal"] },
    { text: "There should be no large industries — decentralized small-scale production", policies: ["Industry Ownership: Decentralized"] }
  ] },
  { id: 1003, category: "Economy", subcategory: "Ownership", text: "Should small businesses be encouraged?", type: "single", options: [
    { text: "Yes, they should get special programs and protections/less regulations", policies: ["Small Business: Strong Support"] },
    { text: "Yes, they should get less regulations", policies: ["Small Business: Less Regulations"] },
    { text: "They should be encouraged by culture, without special legal treatment", policies: ["Small Business: Cultural Encouragement"] },
    { text: "No", policies: ["Small Business: No"] },
    { text: "No, they should be discouraged/minimized", policies: ["Small Business: Discouraged"] }
  ] },
  { id: 1004, category: "Economy", subcategory: "Ownership", text: "Should cooperatives be encouraged?", type: "single", options: [
    { text: "Yes, state should fund and help plan their creation", policies: ["Cooperatives: State Funded"] },
    { text: "Yes, they should get special programs and initiative", policies: ["Cooperatives: Special Programs"] },
    { text: "They should be encouraged by culture, without special legal treatment", policies: ["Cooperatives: Cultural Encouragement"] },
    { text: "No", policies: ["Cooperatives: No"] }
  ] },
  { id: 1005, category: "Economy", subcategory: "Ownership", text: "Which kind of corporations should exist?", type: "multi", exclusiveIndex: 5, options: [
    { text: "Sole proprietorship", policies: ["Corporation Type: Sole Proprietorship"] },
    { text: "Limited liability", policies: ["Corporation Type: Limited Liability"] },
    { text: "General partnership", policies: ["Corporation Type: General Partnership"] },
    { text: "Cooperative", policies: ["Corporation Type: Cooperative"] },
    { text: "State enterprises", policies: ["Corporation Type: State Enterprises"] },
    { text: "There should be no companies in the modern capitalist sense", policies: ["Corporation Type: None"] }
  ] },
  { id: 1006, category: "Economy", subcategory: "Ownership", text: "What should be inheritable?", type: "single", options: [
    { text: "Only personal belongings", policies: ["Inheritance: Personal Only"] },
    { text: "Personal belongings and small amounts of land/wealth", policies: ["Inheritance: Personal and Small Amounts"] },
    { text: "Every kind of property", policies: ["Inheritance: All Property"] }
  ] },
  
  { id: 109, category: "Economy", subcategory: "Ownership", text: "Who should own the major industries (energy, transport, banking)?", type: "single", options: [
    { text: "The state — nationalized for the public good", policies: ["Industry Ownership: State"] },
    { text: "Communal or worker owned — through cooperatives and collective ownership", policies: ["Industry Ownership: Communal"] },
    { text: "Private owners, but with significant government regulation", policies: ["Industry Ownership: Private Regulated"] },
    { text: "Private owners with minimal government interference", policies: ["Industry Ownership: Private Minimal"] },
    { text: "No large industries — decentralized small-scale production", policies: ["Industry Ownership: Decentralized"] }
  ] },
  
  // ECONOMY - Contracts
  { id: 1007, category: "Economy", subcategory: "Contracts", text: "Should contracts be enforceable with force or coercion?", type: "single", options: [
    { text: "Yes, by the state", policies: ["Contract Enforcement: State"] },
    { text: "Yes, but by the private sector", policies: ["Contract Enforcement: Private"] },
    { text: "No", policies: ["Contract Enforcement: None"] }
  ] },
  
  // ECONOMY - Regulation
  { id: 110, category: "Economy", subcategory: "Regulation", text: "Economic interventions by the government in the non-public sector should include:", type: "multi", exclusiveIndex: 10, options: [
    { text: "Stimulus (reduces costs throughout the economy)", policies: ["Economic Intervention: Stimulus"] },
    { text: "Subsidies (reduces costs to producers)", policies: ["Economic Intervention: Subsidies"] },
    { text: "Incentives", policies: ["Economic Intervention: Incentives"] },
    { text: "Tariffs and import sanctions (increases costs for importers / limits importing)", policies: ["Economic Intervention: Tariffs"] },
    { text: "Export taxes and export sanctions (increases costs for exporters / limits exporting)", policies: ["Economic Intervention: Export Taxes"] },
    { text: "Nationalization, break up or transfer of ownership of companies", policies: ["Economic Intervention: Nationalization"] },
    { text: "Eminent domain of land", policies: ["Economic Intervention: Eminent Domain"] },
    { text: "Price control", policies: ["Economic Intervention: Price Control"], tooltip: "Do not choose if you don't want private stores to exist" },
    { text: "Government rationing in private stores", policies: ["Economic Intervention: Rationing"], tooltip: "Do not choose if you don't want private stores to exist" },
    { text: "Minimum wage", policies: ["Economic Intervention: Minimum Wage"] },
    { text: "There should be no government interventions in the non-government owned sector, or there should be no non-government owned sector", policies: ["Economic Intervention: None"] }
  ] },
  
  { id: 1008, category: "Economy", subcategory: "Regulation", text: "Should there be a minimum wage?", type: "single", options: [
    { text: "Yes, for all workers", policies: ["Minimum Wage: All Workers"] },
    { text: "Different for different occupations", policies: ["Minimum Wage: Different by Occupation"] },
    { text: "For different occupations decided by national agreements of unions and employers", policies: ["Minimum Wage: National Agreements"] },
    { text: "For different occupations decided by regional agreements of unions and employers", policies: ["Minimum Wage: Regional Agreements"] },
    { text: "No", policies: ["Minimum Wage: None"] }
  ] },
  
  // ECONOMY - Workplace Hierarchy
  { id: 111, category: "Economy", subcategory: "Workplace Hierarchy", text: "How should workplaces be managed and organized?", type: "single", options: [
    { text: "Traditional hierarchy following the contract and regulations", policies: ["Workplace: Traditional Hierarchy"] },
    { text: "Balance between traditional hierarchy and worker representation", policies: ["Workplace: Balanced"] },
    { text: "Employers should have total control over their workers during work time", policies: ["Workplace: Employer Control"] },
    { text: "Full worker self-management", policies: ["Workplace: Worker Self-Management"] }
  ] },
  
  // ECONOMY - Workers' Rights and Associations (TRIPLE)
  { id: 112, category: "Economy", subcategory: "Workers' Rights and Associations", type: "double",
    disablesOtherParts: { subId: "112a", optionIndices: [4, 5], targets: ["112b", "112c"], message: "Unions banned or unnecessary — structure and operation questions are not applicable." },
    questions: [
    { subId: "112a", text: "What role should labor unions play in the economy?", type: "single", options: [
      { text: "Unions should be very widespread", policies: ["Unions Role: Widespread"] },
      { text: "Unions should be promoted and encouraged", policies: ["Unions Role: Promoted"] },
      { text: "Unions should be an option, but it should be left to the workers", policies: ["Unions Role: Optional"] },
      { text: "Unions should be discouraged and reduced", policies: ["Unions Role: Discouraged"] },
      { text: "Unions should be banned", policies: ["Unions Role: Banned"] },
      { text: "Unions shouldn't be necessary, because there should be no distinction between the laborers and those who control means of production", policies: ["Unions Role: Unnecessary"] }
    ] },
    { subId: "112b", text: "How unions should be structured?", type: "multi", maxSelect: 2, exclusiveIndex: 0, options: [
      { text: "I have no preference / It's not a decision for me to make", policies: ["Unions Structure: No Preference"] },
      { text: "With elective leadership and some worker participation", policies: ["Unions Structure: Elective"] },
      { text: "Rank-and-file", policies: ["Unions Structure: Rank-and-File"] },
      { text: "Hierarchical", policies: ["Unions Structure: Hierarchical"] }
    ] },
    { subId: "112c", text: "How should they be allowed to operate?", type: "multi", exclusiveIndex: 7, options: [
      { text: "Unions should be strictly regulated on matters of their tactics, strikes and such", policies: ["Unions Operation: Strictly Regulated"] },
      { text: "Only non-radical unions should be allowed", policies: ["Unions Operation: Non-Radical Only"], tooltip: "Anarchist, communist or revolutionary syndicalist unions should not be allowed" },
      { text: "Unions should get public funding", policies: ["Unions Operation: Public Funding"] },
      { text: "Unions should be required to accurately represent interest of their workers", policies: ["Unions Operation: Accurate Representation"], tooltip: "No incompetent or yellow union leadership allowed, you don't need to choose this if you only believe workers should be able to sue an union for not following their constitution/bylaws" },
      { text: "Unions should have a legal right to collective bargaining", policies: ["Unions Operation: Collective Bargaining"] },
      { text: "Unions should legally engage, consult, negotiate, and compromise with business interest groups and the government to establish standards and policies, that are with labor law", policies: ["Unions Operation: Tripartism"], tooltip: "In Tripartism, the government has a large role in the economy and engages in negotiations between labor unions and business interest groups to establish economic policy" },
      { text: "The government should control all unions", policies: ["Unions Operation: Government Control"] },
      { text: "None of the above", policies: ["Unions Operation: None"] }
    ] }
  ] },
  
  // ECONOMY - Banking
  { id: 1009, category: "Economy", subcategory: "Banking", type: "double",
    disablesOtherParts: { subId: "1009a", optionIndices: [3, 5, 7, 8, 9], targets: ["1009b"], message: "Selected currency type makes central bank question not applicable." },
    questions: [
    { subId: "1009a", text: "What kind of currency should be the standard?", type: "single", options: [
      { text: "Fiat without need for commodity backing", policies: ["Currency Type: Fiat"] },
      { text: "Fiat backed by a commodity", policies: ["Currency Type: Fiat Commodity Backed"] },
      { text: "Non-fiat commodity money", policies: ["Currency Type: Commodity"] },
      { text: "Free banking – Everyone should be allowed to make their own currency without restrictions", policies: ["Currency Type: Free Banking"] },
      { text: "Labor tokens", policies: ["Currency Type: Labor Tokens"] },
      { text: "Energy credit", policies: ["Currency Type: Energy Credit"], questionTooltip: "Energy certificates based on the Technocracy movement's energy distribution system" },
      { text: "Demurrage money", policies: ["Currency Type: Demurrage"], questionTooltip: "Currency that gradually depreciates in value at a flat constant rate" },
      { text: "There should be no currency or tokens", policies: ["Currency Type: None"] },
      { text: "It should be decided on regional/state level", policies: ["Currency Type: Regional Decision"] },
      { text: "It should be decided on local/communal level", policies: ["Currency Type: Local Decision"] }
    ] },
    { subId: "1009b", text: "Should there be an official central bank?", type: "single", options: [
      { text: "Yes, and it should be independent from the government", policies: ["Central Bank: Independent"] },
      { text: "Yes, and it should be under control of the government", policies: ["Central Bank: Government Controlled"] },
      { text: "No", policies: ["Central Bank: None"] }
    ] }
  ] },
  
  // ECONOMY - Agriculture (TRIPLE)
  { id: 113, category: "Economy", subcategory: "Agriculture", type: "double", questions: [
    { subId: "113a", text: "Who should own the land?", type: "multi", mutualExclusion: [[0, 1]], questionTooltip: "In case of the operators of the land are different from the owners, the owners lease. Choose all the different kinds of ownership which you want to be in your society.", options: [
      { text: "The government should own at least majority of agricultural land", policies: ["Land Ownership: Government Majority"] },
      { text: "The government should own some agricultural land", policies: ["Land Ownership: Government Some"] },
      { text: "Majority of agricultural land should be 'held of the Crown'/belong to the monarch", policies: ["Land Ownership: Crown"] },
      { text: "Agricultural land should be a commodity", policies: ["Land Ownership: Commodity"] },
      { text: "Agricultural land should be not commercially transferable, only inheritable", policies: ["Land Ownership: Inheritable Only"] },
      { text: "Agricultural land should belong to local communities", policies: ["Land Ownership: Local Communities"] },
      { text: "Agricultural land should be property of its users, not landlords or governments", policies: ["Land Ownership: User Property"] },
      { text: "Agricultural land should be common property", policies: ["Land Ownership: Common Property"] }
    ] },
    { subId: "113b", text: "Who should administer the land and manage laborers?", type: "multi", options: [
      { text: "Small family farms and independent farmers", policies: ["Land Administration: Family Farms"] },
      { text: "Commercial companies owning the farms", policies: ["Land Administration: Commercial Companies"] },
      { text: "State owned companies", policies: ["Land Administration: State Companies"] },
      { text: "Agricultural cooperatives", policies: ["Land Administration: Cooperatives"] },
      { text: "Government-backed executive committees", policies: ["Land Administration: Government Committees"], tooltip: "Such as War agricultural executive committees in UK, which were tasked with increasing agricultural production in each county, during both the First and Second World Wars" },
      { text: "Cooperative associations of users/workers", policies: ["Land Administration: Worker Cooperatives"] },
      { text: "Elected local councils with community participation", policies: ["Land Administration: Local Councils"] },
      { text: "Aristocratic lords", policies: ["Land Administration: Aristocratic"] },
      { text: "Local administration and managers", policies: ["Land Administration: Local Managers"] },
      { text: "Traditional communes", policies: ["Land Administration: Traditional Communes"], tooltip: "For example Obshchina in Russia or Obshchina in the Aztec society" }
    ] },
    { subId: "113c", text: "Who should work on the land?", type: "multi", options: [
      { text: "Laborers working for wages", policies: ["Land Labor: Wage Laborers"] },
      { text: "Tenant farmers or sharecroppers", policies: ["Land Labor: Tenant Farmers"] },
      { text: "Independent small-holder farmers", policies: ["Land Labor: Small-Holders"] },
      { text: "Community members", policies: ["Land Labor: Community Members"] },
      { text: "Corvée laborers", policies: ["Land Labor: Corvée"], tooltip: "Corvée is a form of unpaid forced labour that is intermittent in nature, lasting for limited periods of time, typically only a certain number of days' work each year. The obligation for tenant farmers to perform corvée work for landlords on private landed estates was widespread throughout history before the Industrial Revolution. In medieval and early modern Europe work was often expected by a feudal landowner of their vassals." },
      { text: "Prison laborers or slaves", policies: ["Land Labor: Prison/Slaves"] }
    ] }
  ] },
  
  // ECONOMY - Intellectual Property
  { id: 1010, category: "Economy", subcategory: "Intellectual Property", type: "double", questions: [
    { subId: "1010a", text: "What types of intellectual property should exist?", type: "multi", exclusiveIndex: 6, options: [
      { text: "Patents — protect inventions and processes", policies: ["IP Type: Patents"] },
      { text: "Copyrights — protect creative works (books, music, art, software)", policies: ["IP Type: Copyrights"] },
      { text: "Trademarks — protect brands, logos, and business names", policies: ["IP Type: Trademarks"] },
      { text: "Trade secrets — protect confidential business information", policies: ["IP Type: Trade Secrets"] },
      { text: "Industrial design rights — protect visual designs and aesthetics", policies: ["IP Type: Industrial Design"] },
      { text: "Plant breeders' rights", policies: ["IP Type: Plant Breeders"] },
      { text: "No intellectual property should exist — all ideas should be in the public domain", policies: ["IP Type: None"] }
    ] },
    { subId: "1010b", text: "On what principle should we judge how long intellectual property should last?", type: "multi", options: [
      { text: "As long as it's used it's valid", policies: ["IP Duration: Use-Based"] },
      { text: "Balance of claims of owners and society", policies: ["IP Duration: Balanced"] },
      { text: "Minimal time just to motivate innovation", policies: ["IP Duration: Minimal"] },
      { text: "It should last forever", policies: ["IP Duration: Forever"] }
    ] },
    { subId: "1010c", text: "What should be exempt from intellectual property protections?", type: "multi", exclusiveIndex: 8, options: [
      { text: "Non-commercial use (personal, non-profit)", policies: ["IP Exemption: Non-Commercial"] },
      { text: "Personal use (private copying, sharing with friends)", policies: ["IP Exemption: Personal Use"] },
      { text: "Government use (government can use any IP for public purposes)", policies: ["IP Exemption: Government Use"] },
      { text: "Educational use (schools, universities, research)", policies: ["IP Exemption: Educational"] },
      { text: "Medical and pharmaceutical use (life-saving drugs, medical procedures)", policies: ["IP Exemption: Medical"] },
      { text: "Essential goods and services (food, medicine, utilities)", policies: ["IP Exemption: Essential Goods"] },
      { text: "Traditional knowledge and indigenous cultural expressions", policies: ["IP Exemption: Traditional Knowledge"] },
      { text: "AI generated content", policies: ["IP Exemption: AI Generated"] },
      { text: "Nothing should be exempt from IP protections", policies: ["IP Exemption: None"] }
    ] }
  ] },
  
  // ECONOMY - Healthcare (DOUBLE)
  { id: 114, category: "Economy", subcategory: "Healthcare", type: "double", questions: [
    { subId: "114a", text: "Who should own and provide healthcare facilities?", type: "single", options: [
      { text: "Government-owned and operated hospitals and clinics", policies: ["Healthcare Ownership: Government"] },
      { text: "Mixed public and non-government ownership", policies: ["Healthcare Ownership: Mixed"] },
      { text: "Non-government ownership", policies: ["Healthcare Ownership: Non-Government"] }
    ] },
    { subId: "114b", text: "How should healthcare be funded/paid for?", type: "single", options: [
      { text: "Free healthcare", policies: ["Healthcare Funding: Free"] },
      { text: "Public insurance option competing with private insurance", policies: ["Healthcare Funding: Public Option"] },
      { text: "Systemic subsidies for those who can't afford private insurance", policies: ["Healthcare Funding: Subsidies"] },
      { text: "Fully private funding", policies: ["Healthcare Funding: Private"] }
    ] }
  ] },
  
  // ECONOMY - Taxation
  { id: 115, category: "Economy", subcategory: "Taxation", text: "The forms of involuntary taxation used by the government should be:", type: "multi", options: [
    { text: "A consumption tax (tax on the value of an exchange of goods or services)", policies: ["Taxation: Consumption"] },
    { text: "A luxury tax (tax on the value of an exchange of luxury or non-essential goods or services)", policies: ["Taxation: Luxury"] },
    { text: "A capital gains tax (tax on the increased value of an investment between when it was purchased and sold)", policies: ["Taxation: Capital Gains"] },
    { text: "An inheritance tax (tax on the inheritance gained from a bequeathor when they die)", policies: ["Taxation: Inheritance"] },
    { text: "A wealth tax (tax on the value of one's net worth)", policies: ["Taxation: Wealth"] },
    { text: "Taxes to encourage more useful or healthy lifestyle", policies: ["Taxation: Lifestyle"], tooltip: "This includes taxes on alcohol, sugar, tobacco, 'sin taxes', ecological taxes, taxes on weight, taxes on childlessness and more" },
    { text: "Corporate tax", policies: ["Taxation: Corporate"] },
    { text: "Resource rent tax", policies: ["Taxation: Resource Rent"], tooltip: "A resource rent tax is a tax on the rents gained on the exploitation of a resource" },
    { text: "A poll tax", policies: ["Taxation: Poll"] },
    { text: "They shouldn't be necessary", policies: ["Taxation: None"] }
  ] },
  { id: 116, category: "Economy", subcategory: "Taxation", text: "If there is taxation, it should be:", type: "single", options: [
    { text: "Proportional (proportion taxed is independent of the value of the asset being taxed)", policies: ["Taxation Type: Proportional"] },
    { text: "Progressive (proportion taxed increases as value of asset being taxed increases)", policies: ["Taxation Type: Progressive"] },
    { text: "Regressive (proportion taxed decreases as value of asset being taxed increases)", policies: ["Taxation Type: Regressive"] }
  ] },
  
  // III. WORLD - Scale
  { id: 117, category: "World", subcategory: "Scale", text: "How widespread you hope your system to be?", type: "single", questionTooltip: "The system can have slight difference in application in different places, but principles should stay mostly the same.", options: [
    { text: "I just care about seeing it implemented in my country", policies: ["System Scale: My Country"] },
    { text: "I would want it to be adopted by my ethnic group", policies: ["System Scale: Ethnic Group"] },
    { text: "I would want it to be adopted by many places, but I understand it's not compatible with all cultures, and they can have different systems", policies: ["System Scale: Many Places"] },
    { text: "It should be implemented universally or almost universally", policies: ["System Scale: Universal"] }
  ] },
  
  // WORLD - International Cooperation
  { id: 118, category: "World", subcategory: "International Cooperation", text: "Should the world cooperate on global issues (climate change, pandemics, etc.)?", type: "single", options: [
    { text: "Completely, global issues need global cooperation", policies: ["Global Cooperation: Complete"] },
    { text: "Depending on how relevant they are to their countries/communities", policies: ["Global Cooperation: Relevant"], tooltip: "Example: A country helping in making a cure for the disease that is widespread on the same continent and could spread to the country" },
    { text: "In a very limited manner, mostly with their allies", policies: ["Global Cooperation: Limited"] },
    { text: "The state should focus on its own issues, cooperating only with close allies", policies: ["Global Cooperation: Minimal"] }
  ] },
  
  // WORLD - Immigration
  { id: 119, category: "World", subcategory: "Immigration", text: "What immigration policy is most desirable?", type: "single", options: [
    { text: "Open borders — free movement of all people", policies: ["Immigration: Open Borders"] },
    { text: "Immigration shouldn't be limited to culture or education, but there should be checks and border control", policies: ["Immigration: Controlled Open"] },
    { text: "Immigration should be allowed for workers with education and expertise", policies: ["Immigration: Skilled Workers"] },
    { text: "Immigration should be allowed for people of cultures similar to the national culture", policies: ["Immigration: Cultural Similarity"] },
    { text: "Closed borders, government should control both immigration and emigration, and both should be minimal", policies: ["Immigration: Closed"] }
  ] },
  
  // WORLD - Economic globalization
  { id: 121, category: "World", subcategory: "Economic globalization", type: "double",
    disablesOtherParts: { subId: "121a", optionIndex: 4, targets: ["121b"], message: "Completely closed economy selected — restrictions to specific countries are not applicable." },
    questions: [
    { subId: "121a", text: "What foreign trade policy is most desirable?", type: "single", questionTooltip: "If you believe in united world government or post-trade economy, choose the option your transitionary regime should follow.", options: [
      { text: "Free trade", policies: ["Trade Policy: Free Trade"] },
      { text: "Protectionism", policies: ["Trade Policy: Protectionism"] },
      { text: "Mercantilism", policies: ["Trade Policy: Mercantilism"] },
      { text: "Fair trade", policies: ["Trade Policy: Fair Trade"] },
      { text: "Completely closed economy", policies: ["Trade Policy: Closed Economy"] }
    ] },
    { subId: "121b", text: "Should there be restrictions to specific countries?", type: "single", options: [
      { text: "Yes, based on their ideology", policies: ["Trade Restrictions: Ideology"] },
      { text: "Yes, based on their unethical practices and policies", policies: ["Trade Restrictions: Unethical Practices"] },
      { text: "No", policies: ["Trade Restrictions: None"] }
    ] }
  ] },
  { id: 122, category: "World", subcategory: "Economic globalization", text: "Should economic globalisation continue?", type: "single", options: [
    { text: "Yes", policies: ["Globalisation: Yes"] },
    { text: "Generally yes, but state/s should try to have some diverse local industry just in case", policies: ["Globalisation: Yes with Local Diversity"] },
    { text: "My state should strive towards being more self-sufficient", policies: ["Globalisation: State Self-Sufficiency"] },
    { text: "No, countries should strive towards self-sufficiency", policies: ["Globalisation: No, Countries Self-Sufficient"] },
    { text: "No, economies should become more localised", policies: ["Globalisation: No, Localised"] }
  ] },
  { id: 123, category: "World", subcategory: "Economic globalization", text: "What kind of property it should be illegal for foreigners to own in your country without a special permit?", type: "multi", options: [
    { text: "Personal property", policies: ["Foreign Property: Personal"] },
    { text: "Real estate", policies: ["Foreign Property: Real Estate"] },
    { text: "Stocks and companies", policies: ["Foreign Property: Stocks and Companies"] },
    { text: "None of the above", policies: ["Foreign Property: None"] }
  ] },
  
  // WORLD - Economic Globalization
  { id: 1011, category: "World", subcategory: "Economic Globalization", type: "double",
    disablesOtherParts: { subId: "1011a", optionIndex: 4, targets: ["1011b"], message: "Completely closed economy selected — restrictions question is not applicable." },
    questions: [
    { subId: "1011a", text: "What foreign trade policy is most desirable?", type: "single", questionTooltip: "If you believe in united world government or post-trade economy, choose the option your transitionary regime should follow.", options: [
      { text: "Free trade", policies: ["Trade Policy: Free Trade"] },
      { text: "Protectionism", policies: ["Trade Policy: Protectionism"] },
      { text: "Mercantilism", policies: ["Trade Policy: Mercantilism"] },
      { text: "Fair trade", policies: ["Trade Policy: Fair Trade"] },
      { text: "Completely closed economy", policies: ["Trade Policy: Closed Economy"] }
    ] },
    { subId: "1011b", text: "Should there be restrictions to specific countries?", type: "single", options: [
      { text: "Yes, based on their ideology", policies: ["Trade Restrictions: Ideology"] },
      { text: "Yes, based on their unethical practices and policies", policies: ["Trade Restrictions: Unethical Practices"] },
      { text: "No", policies: ["Trade Restrictions: None"] }
    ] }
  ] },
  { id: 1012, category: "World", subcategory: "Economic Globalization", text: "Should economic globalisation continue?", type: "single", options: [
    { text: "Yes", policies: ["Globalization: Continue"] },
    { text: "Generally yes, but state/s should try to have some diverse local industry just in case", policies: ["Globalization: Yes with Local Diversity"] },
    { text: "My state should strive towards being more self-sufficient", policies: ["Globalization: State Self-Sufficiency"] },
    { text: "No, countries should strive towards self-sufficiency", policies: ["Globalization: No, Countries Self-Sufficient"] },
    { text: "No, economies should become more localised", policies: ["Globalization: No, Localized"] }
  ] },
  { id: 1013, category: "World", subcategory: "Economic Globalization", text: "What kind of property should it be illegal for foreigners to own in your country without a special permit?", type: "multi", options: [
    { text: "Personal property", policies: ["Foreign Property: Personal"] },
    { text: "Real estate", policies: ["Foreign Property: Real Estate"] },
    { text: "Stocks and companies", policies: ["Foreign Property: Stocks and Companies"] },
    { text: "None of the above", policies: ["Foreign Property: None"] }
  ] },
  
  // WORLD - War Policy
  { id: 120, category: "World", subcategory: "War Policy", text: "When is the use of military force justified?", type: "multi", exclusiveIndex: 5, options: [
    { text: "Direct self-defense against an armed attack", policies: ["Military Force: Self-Defense"] },
    { text: "Humanitarian intervention to stop genocide or mass atrocities", policies: ["Military Force: Humanitarian"] },
    { text: "Preemptive strikes against imminent threats", policies: ["Military Force: Preemptive"] },
    { text: "To spread civilization, democracy, or ideology", policies: ["Military Force: Ideological"] },
    { text: "For material gain", policies: ["Military Force: Material Gain"] },
    { text: "War is never justified under any circumstances", policies: ["Military Force: Never"] }
  ] }
  ,
  
  // IV. CULTURE & SOCIAL ISSUES - Education
  { id: 139, category: "Culture & Social Issues", subcategory: "Education", type: "double",
    disablesOtherParts: { subId: "139a", optionIndex: 1, targets: ["139b"], message: "Education not compulsory — end of compulsory education is not applicable." },
    questions: [
    { subId: "139a", text: "Should education be compulsory?", type: "single", options: [
      { text: "Yes, with legal penalties in forms of fines or worse", policies: ["Education Compulsory: Yes Penalties"] },
      { text: "No", policies: ["Education Compulsory: No"] }
    ] },
    { subId: "139b", text: "At what point should a person not be required to study?", type: "single", options: [
      { text: "After they become an adult", policies: ["Education End: Adulthood"] },
      { text: "After they prove to possess a certain amount of knowledge", policies: ["Education End: Knowledge Proof"] },
      { text: "Either of them", policies: ["Education End: Either"] }
    ] }
  ] },
  { id: 140, category: "Culture & Social Issues", subcategory: "Education", type: "double", questions: [
    { subId: "140a", text: "Who should own the schools?", type: "multi", options: [
      { text: "The state", policies: ["School Ownership: State"] },
      { text: "Private companies", policies: ["School Ownership: Private"] },
      { text: "Communities", policies: ["School Ownership: Communities"] },
      { text: "Families (homeschooling)", policies: ["School Ownership: Families"] }
    ] },
    { subId: "140b", text: "Should there be official standards?", type: "single", options: [
      { text: "A single national curriculum set by the government", policies: ["School Standards: National Curriculum"] },
      { text: "Government-set minimum standards with school autonomy on specifics", policies: ["School Standards: Minimum National"] },
      { text: "Regional or local authorities set their own curricula", policies: ["School Standards: Local Curriculum"] },
      { text: "Regional or local authorities set minimum standards with school autonomy on specifics", policies: ["School Standards: Minimum Local"] },
      { text: "No formal standards — each school or family can self-regulate", policies: ["School Standards: None"] }
    ] },
    { subId: "140c", text: "How should schools be organized?", type: "single", options: [
      { text: "They should be centrally controlled by state/company that owns them", policies: ["School Organization: Central Control"] },
      { text: "They should be administered by the teachers", policies: ["School Organization: Teachers"] },
      { text: "They should be administered by the teachers with parent involvement", policies: ["School Organization: Teachers and Parents"] },
      { text: "They should be administered by the teachers with involvement of parents and student representatives", policies: ["School Organization: Teachers, Parents, Students"] },
      { text: "They should be administered by the teachers and students as equals or near equals", policies: ["School Organization: Teachers and Students Equal"] }
    ] }
  ] },
  { id: 141, category: "Culture & Social Issues", subcategory: "Education", text: "What should be the main goals of primary education?", type: "multi", options: [
    { text: "Basic scientific knowledge and literacy", policies: ["Education Goals: Basic Knowledge"] },
    { text: "Practical life skills", policies: ["Education Goals: Practical Skills"] },
    { text: "Holistic development", policies: ["Education Goals: Holistic"] },
    { text: "Vocational/Skills-Oriented", policies: ["Education Goals: Vocational"] },
    { text: "Preserve cultural heritage", policies: ["Education Goals: Cultural Heritage"] },
    { text: "Educate on duties and rights, promote support for established institutions and foster social cohesion", policies: ["Education Goals: Civic Duty"] },
    { text: "Primary education should be purely a matter decided by parents and children, not society or state", policies: ["Education Goals: Parent Decision"] },
    { text: "Teach critical skills and scientific methods", policies: ["Education Goals: Critical Thinking"] },
    { text: "Teach whole view of world history based on scientific facts, without focus of national history", policies: ["Education Goals: World History"] },
    { text: "Conditioning of law-abiding citizens and compliant workers", policies: ["Education Goals: Compliance"] }
  ] },
  { id: 142, category: "Culture & Social Issues", subcategory: "Education", type: "double", questions: [
    { subId: "142a", text: "What kind of education should be covered fully for all students?", type: "multi", exclusiveIndex: 3, options: [
      { text: "Primary", policies: ["Education Free: Primary"] },
      { text: "Technical", policies: ["Education Free: Technical"] },
      { text: "Higher", policies: ["Education Free: Higher"] },
      { text: "None", policies: ["Education Free: None"] }
    ] },
    { subId: "142b", text: "What professional education should be partly paid by the state for the students?", type: "multi", exclusiveIndex: 3, options: [
      { text: "Primary", policies: ["Education Subsidized: Primary"] },
      { text: "Technical", policies: ["Education Subsidized: Technical"] },
      { text: "Higher", policies: ["Education Subsidized: Higher"] },
      { text: "None", policies: ["Education Subsidized: None"] }
    ] }
  ] },
  { id: 143, category: "Culture & Social Issues", subcategory: "Education", text: "Should schools be gendered?", type: "single", options: [
    { text: "No", policies: ["Not gendered schools"] },
    { text: "Mostly no, but some subjects/lessons should be different based on gender to promote traditional gender roles", policies: ["Promoting gender roles in schools"] },
    { text: "Boys and girls / men and women should study in separate classes", policies: ["Gendered classes"] },
    { text: "Yes, boys and girls / men and women should study in separate buildings", policies: ["Gender schools"] },
    { text: "It should be decided by the school owners case by case", policies: ["School Gender: Case by Case"] }
  ] },
  { id: 144, category: "Culture & Social Issues", subcategory: "Education", text: "Should schools be racially or ethnically segregated?", type: "single", options: [
    { text: "No", policies: ["School Segregation: No"] },
    { text: "Yes", policies: ["School Segregation: Yes"] },
    { text: "It should be decided by the school owners case by case", policies: ["School Segregation: Case by Case"] }
  ] },
  
  // CULTURE - Family & Sex
  { id: 127, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should abortion be legal?", type: "single", options: [
    { text: "Completely legal", policies: ["Abortion: Legal"] },
    { text: "Legal with some restrictions (gestational limits, etc.)", policies: ["Abortion: Restricted"] },
    { text: "Legal only in extreme cases (rape, health risk, fetal abnormality)", policies: ["Abortion: Extreme Cases"] },
    { text: "Banned entirely — life begins at conception", policies: ["Abortion: Banned"] }
  ] },
  { id: 128, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", type: "double",
    disablesOtherParts: { subId: "128a", optionIndex: 4, targets: ["128b", "128c"], message: "Marriage not legally binding — consent and child marriage questions are not applicable." },
    questions: [
    { subId: "128a", text: "What kind marriage should be legal?", type: "single", options: [
      { text: "Traditional monogamy", policies: ["Traditional Monogamy"] },
      { text: "Monogamy between couple of any sex or orientation", policies: ["Any Monogamy"] },
      { text: "'Traditional' polygamy (Polygyny) and traditional monogamy", policies: ["Traditional Polygyny"] },
      { text: "Polygamy and monogamy between adults of any sex or orientation", policies: ["Any Polygamy"] },
      { text: "Marriage shouldn't be legally binding", policies: ["No legal marriage"] }
    ] },
    { subId: "128b", text: "Should all adult participants be fully consenting?", type: "single", options: [
      { text: "Yes", policies: ["Consensual marriage between adults"] },
      { text: "When entering marriage they should be fully consenting, but after that in at least some cases they shouldn't be able to divorce without approval of authorities or their partner", policies: ["Consensual marriage between adults with limitations on divorce"] },
      { text: "Not necessarily", policies: ["Unconsensual marriage between adults allowed"] }
    ] },
    { subId: "128c", text: "Should child marriage be legal?", type: "single", options: [
      { text: "No", policies: ["No child marriage"] },
      { text: "Yes, but only if both sides are underage", policies: ["Child marriage between two minors allowed"] },
      { text: "Yes", policies: ["Child marriage with an adult allowed"] }
    ] }
  ] },
  { id: 1014, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", type: "double", questions: [
    { subId: "1014a", text: "Should women have the same right to work as men?", type: "single", options: [
      { text: "Yes, and discrimination based on gender in the job market and workplaces should be discouraged or illegal", policies: ["Women's Right to Work: Equal with Anti-Discrimination"] },
      { text: "Yes, but discrimination should be ignored or tolerated", policies: ["Women's Right to Work: Equal but Tolerate Discrimination"] },
      { text: "Yes for unmarried women, married women should need consent of their husband", policies: ["Women's Right to Work: Unmarried Only"] },
      { text: "Yes for unmarried women, for married women it should depend on their voluntary marriage contract", policies: ["Women's Right to Work: Contract-Based"] },
      { text: "No, women should need consent of their husbands, or when unmarried, male legal guardian, to seek a job", policies: ["Women's Right to Work: Requires Consent"] },
      { text: "No, government should decide what jobs should be allowed or banned for women", policies: ["Women's Right to Work: Government Decides"] }
    ] },
    { subId: "1014b", text: "Which side should have more rights in a divorce?", type: "single", options: [
      { text: "They should have same divorce rights and shouldn't be judged by their genders during a divorce", policies: ["Divorce Rights: Equal"] },
      { text: "Both should have the same right to divorce, but the wife should generally have bigger chance for better settlements", policies: ["Divorce Rights: Favor Wife"] },
      { text: "Both should have the same right to divorce, but the husband should generally have bigger chance for better settlements", policies: ["Divorce Rights: Favor Husband"] },
      { text: "The husband should have the final say on the divorce", policies: ["Divorce Rights: Husband Decides"] },
      { text: "Equal by default, but may change based on the voluntary marriage contract", policies: ["Divorce Rights: Contract-Based"] }
    ] }
  ] },
  { id: 1015, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should women have the same right to contract as men?", type: "single", options: [
    { text: "Yes", policies: ["Women's Right to Contract: Equal"] },
    { text: "Yes for unmarried women, married women should need consent of their husband", policies: ["Women's Right to Contract: Unmarried Only"] },
    { text: "Yes for unmarried women, for married women it should depend on their voluntary marriage contract", policies: ["Women's Right to Contract: Contract-Based"] },
    { text: "No, women should need consent of their husbands, or when unmarried, male legal guardian, to contract", policies: ["Women's Right to Contract: Requires Consent"] },
    { text: "No, government should decide what contracts that men can make, women can't", policies: ["Women's Right to Contract: Government Decides"] }
  ] },
  { id: 1016, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should women have the same right to movable property as men?", type: "single", options: [
    { text: "Yes", policies: ["Women's Right to Movable Property: Equal"] },
    { text: "Yes for unmarried women, for married women it should depend on their voluntary marriage contract", policies: ["Women's Right to Movable Property: Contract-Based"] },
    { text: "Yes for unmarried women, married women should need consent of their husband", policies: ["Women's Right to Movable Property: Unmarried Only"] },
    { text: "No, women should need consent of their husbands, or when unmarried, male legal guardian", policies: ["Women's Right to Movable Property: Requires Consent"] },
    { text: "No, government should decide what property that men can own, women can't", policies: ["Women's Right to Movable Property: Government Decides"] }
  ] },
  { id: 1017, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should women have the same right to unmovable property or stocks as men?", type: "single", options: [
    { text: "Yes", policies: ["Women's Right to Immovable Property: Equal"] },
    { text: "Yes for unmarried women, for married women it should depend on their voluntary marriage contract", policies: ["Women's Right to Immovable Property: Contract-Based"] },
    { text: "Yes for unmarried women, married women should need consent of their husband", policies: ["Women's Right to Immovable Property: Unmarried Only"] },
    { text: "No, women should need consent of their husbands, or when unmarried, male legal guardian", policies: ["Women's Right to Immovable Property: Requires Consent"] },
    { text: "No, government should decide what property that men can own, women can't", policies: ["Women's Right to Immovable Property: Government Decides"] }
  ] },
  { id: 1018, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should women have the same right to inheritance as men?", type: "multi", exclusiveIndex: 0, options: [
    { text: "Yes", policies: ["Women's Right to Inheritance: Equal"] },
    { text: "Sons should have a preference over daughters, and male relatives a preference over just as close female relatives", policies: ["Women's Right to Inheritance: Sons Preferred"] },
    { text: "Male relatives should have a preference over daughters/closer female relatives", policies: ["Women's Right to Inheritance: Male Relatives Preferred"] },
    { text: "Sons should have a preference over wives", policies: ["Women's Right to Inheritance: Sons Over Wives"] },
    { text: "Male relatives should have a preference over wives", policies: ["Women's Right to Inheritance: Male Relatives Over Wives"] }
  ] },
  { id: 1019, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should women have the same right to education as men?", type: "single", options: [
    { text: "Yes, and discrimination based on gender in the non-public schools should be discouraged or illegal", policies: ["Women's Right to Education: Equal with Anti-Discrimination"] },
    { text: "Yes, but private discrimination should be ignored or tolerated", policies: ["Women's Right to Education: Equal but Tolerate Discrimination"] },
    { text: "No, female higher education should not be accepted by society", policies: ["Women's Right to Education: Restricted"] }
  ] },
  { id: 1020, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Should homosexuality be accepted?", type: "single", options: [
    { text: "Yes", policies: ["Homosexuality: Accepted"] },
    { text: "It should be legal, but marginalized out of public eyes", policies: ["Homosexuality: Legal but Marginalized"] },
    { text: "No, homosexual sex should be illegal, but it shouldn't be illegal to express or advocate its acceptance", policies: ["Homosexuality: Illegal but Advocacy Legal"] },
    { text: "No, its expression and advocacy should be illegal, but homosexual sex in private should be legal", policies: ["Homosexuality: Private Legal, Public Illegal"] },
    { text: "No, it should be completely illegal to express or act on it, both in private and public", policies: ["Homosexuality: Completely Illegal"] }
  ] },
  { id: 1021, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "Can a husband rape his wife?", type: "single", options: [
    { text: "Even in marriage all sex should be clearly consensual", policies: ["Marital Rape: Illegal"] },
    { text: "The wife should be at the demands of the husband", policies: ["Marital Rape: Legal"] }
  ] },
  { id: 1022, category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", text: "What should be the standard power dynamic of the parent-children family unit?", type: "single", options: [
    { text: "Father as the head of family, over the wife(s) and children", policies: ["Family Power Dynamic: Patriarchal"] },
    { text: "Father and mother as equals with power over their children", policies: ["Family Power Dynamic: Parents Equal Over Children"] },
    { text: "Father and mother are caretakers of their co-equal children", policies: ["Family Power Dynamic: All Equal"] },
    { text: "There wouldn't be mothers and fathers in the current sense, and children would be co-equal to adults", policies: ["Family Power Dynamic: No Parents, All Equal"] },
    { text: "There wouldn't be mothers and fathers in the current sense, but caretakers would have power over the children", policies: ["Family Power Dynamic: Caretakers Over Children"] },
    { text: "It should be a private matter between parents, different models should co-exist without intolerance or legal or societal preference", policies: ["Family Power Dynamic: Private Matter"] }
  ] },
  
  
  // CULTURE - Ethnicities and Cultures
  { id: 129, category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", text: "How should society handle cultural diversity?", type: "single", options: [
    { text: "Integration — shared civic values with freedom to maintain cultural identity", policies: ["Cultural Diversity: Integration"] },
    { text: "Assimilation — immigrants and minorities should adopt the dominant culture", policies: ["Cultural Diversity: Assimilation"] },
    { text: "Separation — distinct communities living apart is natural and acceptable", policies: ["Cultural Diversity: Separation"] }
  ] },
  { id: 130, category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", text: "What should be done with racism?", type: "single", options: [
    { text: "Racism should be looked down upon and not tolerated", policies: ["Racism should not be tolerated"] },
    { text: "As long as it's not a big problem it should be mostly ignored", policies: ["Ignore racism as long it's not a big problem"] },
    { text: "It should be tolerated or even supported by the government", policies: ["Racism should be tolerated or supported"] },
    { text: "Segregation should be implemented", policies: ["Racial segregation"] },
    { text: "Different races shouldn't live in same polities", policies: ["Racial seperatism"] }
  ] },
  
  // CULTURE - Caste and Estate System
  { id: 131, category: "Culture & Social Issues", subcategory: "Caste and Estate System", type: "double",
    disablesOtherParts: { subId: "131a", optionIndices: [0, 1], targets: ["131b"], message: "Legal equality selected — legal inequality basis is not applicable." },
    questions: [
    { subId: "131a", text: "Should there be equality before the law?", type: "single", options: [
      { text: "Yes, with equitable/proportional application of laws (e.g., fines proportional to wealth instead of fixed amounts)", policies: ["Legal Equality: Equitable"] },
      { text: "Yes", policies: ["Legal Equality: Yes"] },
      { text: "No", policies: ["Legal Equality: No"] }
    ] },
    { subId: "131b", text: "If there is legal inequality, what should be its basis?", type: "multi", options: [
      { text: "Based on economic and/or political position (e.g., different laws for ultra-rich vs. middle class)", policies: ["Legal Inequality: Economic/Political"] },
      { text: "There should be a hereditary aristocratic class", policies: ["Legal Inequality: Aristocratic"] },
      { text: "There should be a full hereditary caste system", policies: ["Legal Inequality: Caste System"] },
      { text: "Based on sex/gender", policies: ["Legal Inequality: Sex/Gender"] },
      { text: "Based on race/ethnicity/nationality", policies: ["Legal Inequality: Race/Ethnicity"] },
      { text: "Based on your bodily and/or mental ability", policies: ["Legal Inequality: Ability"] }
    ] }
  ] },
  
  // CULTURE - Media and Speech
  { id: 132, category: "Culture & Social Issues", subcategory: "Media and Speech", text: "What kind of speech should be unlawful?", type: "multi", exclusiveIndex: 0, options: [
    { text: "None — no speech should be unlawful", policies: ["Speech Restrictions: None"] },
    { text: "Lying about crimes and disasters happening (e.g. screaming 'there is a bomb')", policies: ["Speech Restrictions: False Alarms"] },
    { text: "Encouraging violent disobedience against the government", policies: ["Speech Restrictions: Violent Disobedience"] },
    { text: "Opposing the government and its actions", policies: ["Speech Restrictions: Opposition"] },
    { text: "Encouraging any disobedience against the government or established political institutions", policies: ["Speech Restrictions: Any Disobedience"] },
    { text: "Showing disrespect to national symbols like the flag", policies: ["Speech Restrictions: Symbol Disrespect"] },
    { text: "Encouraging violence", policies: ["Speech Restrictions: Violence"] },
    { text: "Blasphemous speech", policies: ["Speech Restrictions: Blasphemy"] },
    { text: "Hate speech", policies: ["Speech Restrictions: Hate Speech"] },
    { text: "Disinformation", policies: ["Speech Restrictions: Disinformation"] },
    { text: "Slander and libel against organizations", policies: ["Speech Restrictions: Slander Organizations"] },
    { text: "Slander and libel against public figures", policies: ["Speech Restrictions: Slander Public Figures"] },
    { text: "Slander and libel against private figures", policies: ["Speech Restrictions: Slander Private Figures"] },
    { text: "Speech that goes against contracts such as non-disclosure agreements", policies: ["Speech Restrictions: Contract Violation"] }
  ] },
  { id: 133, category: "Culture & Social Issues", subcategory: "Media and Speech", type: "double", questions: [
    { subId: "133a", text: "Who should own (traditional) media (television, newspapers, radio)?", type: "single", options: [
      { text: "Only state media", policies: ["Media Ownership: State Only"] },
      { text: "State and private media (private media needs state permission to operate)", policies: ["Media Ownership: State and Private Permitted"] },
      { text: "State and private media (no permission needed)", policies: ["Media Ownership: State and Private Free"] },
      { text: "Only private media", policies: ["Media Ownership: Private Only"] },
      { text: "Only independent non-profit media", policies: ["Media Ownership: Non-Profit Only"] }
    ] },
    { subId: "133b", text: "What should be the criteria for public media funding?", type: "single", options: [
      { text: "Based on educational value or public utility", policies: ["Media Funding: Educational/Utility"] },
      { text: "State may fund media but no specific criteria required", policies: ["Media Funding: No Criteria"] },
      { text: "No state funding for media", policies: ["Media Funding: None"] }
    ] }
  ] },
  { id: 134, category: "Culture & Social Issues", subcategory: "Media and Speech", text: "Who should regulate radio wavelengths?", type: "single", options: [
    { text: "Government agency/ies", policies: ["Wavelength Regulation: Government"] },
    { text: "Local governments", policies: ["Wavelength Regulation: Local"] },
    { text: "Individuals and/or firms should be able to 'homestead', and own and regulate the specific wavelengths on a specific territory", policies: ["Wavelength Regulation: Homestead"] },
    { text: "No one officially, different associations should negotiate between each other without private ownership of wavelengths or government intervention", policies: ["Wavelength Regulation: None"] }
  ] },
  
  // CULTURE - Forced Labor
  { id: 135, category: "Culture & Social Issues", subcategory: "Forced Labor", type: "double",
    disablesOtherParts: { subId: "135a", optionIndex: 0, targets: ["135b"], message: "No slavery selected — exemption question is not applicable." },
    questions: [
    { subId: "135a", text: "Is there any situation in which a human can be a property (slave) of another human, organisation or government?", type: "multi", exclusiveIndex: 0, options: [
      { text: "None – slavery is an evil that needs to be purged", policies: ["No slavery"] },
      { text: "Every human should be a property of their parents, before becoming a free adult", policies: ["Slavery: Parents"] },
      { text: "After it's very unlikely for them to pay off their debt", policies: ["Slavery: Debt"] },
      { text: "After they wrong someone the victim may claim them as property", policies: ["Slavery: Victim Claim"] },
      { text: "As punishment for criminal conviction", policies: ["Slavery: Criminal Punishment"] },
      { text: "After being captured in a war", policies: ["Slavery: War Captives"] },
      { text: "After they sell their body in a contract", policies: ["Slavery: Voluntary Contract"] },
      { text: "Being born from a slave", policies: ["Slavery: Birth"] },
      { text: "They can be a slave in the country if they were already a slave before", policies: ["Slavery: Pre-Existing"] },
      { text: "If it's the wish of the government", policies: ["Slavery: Government Wish"] }
    ] },
    { subId: "135b", text: "Slavery of what people should not be allowed?", type: "multi", exclusiveIndex: 2, options: [
      { text: "Citizens of my state", policies: ["Slavery Exempt: Citizens"], tooltip: "Including citizens who are of ethnic groups that you believe can be enslaved" },
      { text: "People of specific races, ethnic groups, or nationalities", policies: ["Slavery Exempt: Specific Groups"], tooltip: "Choose if you believe only some ethnic groups can be or should be enslaved" },
      { text: "Both of the above shouldn't make a person exempt from slavery", policies: ["Slavery Exempt: None"], tooltip: "Under conditions described in the earlier question" }
    ] }
  ] },
  { id: 136, category: "Culture & Social Issues", subcategory: "Forced Labor", text: "Should any other form of forced labor be permitted?", type: "multi", exclusiveIndex: 0, options: [
    { text: "None", policies: ["Forced Labor: None"] },
    { text: "As punishment for criminal conviction (prison labor)", policies: ["Forced Labor: Prison"] },
    { text: "For national emergencies, military service, or civic duty", policies: ["Forced Labor: National Service"] },
    { text: "For social order and rehabilitation when managed by the state", policies: ["Forced Labor: Rehabilitation"] },
    { text: "As a compensation to the lender when the borrower can't repay the debt", policies: ["Forced Labor: Debt Compensation"] },
    { text: "As a compensation to a victim of property damage or medical operations needed to recover from damage caused by the attacker", policies: ["Forced Labor: Victim Compensation"] },
    { text: "It should be a crime to not work", policies: ["Forced Labor: Work Requirement"], tooltip: "Example of a country with such policy is USSR, where officially skipping work was a severe crime, and so was living a 'parasitic lifestyle', every not retirement able bodied adult had to have a job or study" },
    { text: "People with authority over corvée laborers and serfs should be allowed to force them to work", policies: ["Forced Labor: Corvée/Serfs"] }
  ] },
  
  // CULTURE - Technology
  { id: 137, category: "Culture & Social Issues", subcategory: "Technology", text: "What is the answer to the question of artificial intelligence?", type: "single", options: [
    { text: "AI should be a servant of the public, not private industry, and be used to bring a moneyless automated society", policies: ["AI: Moneyless Automated Society"] },
    { text: "Government regulation and public oversight of AI development and programs to help workers get necessary skills for future of their jobs, or help them transition to jobs that will be less impacted by ai, or will be created by it", policies: ["AI: Regulation and Worker Programs"] },
    { text: "Public programs to help workers get necessary skills for future of their jobs, or help them transition to jobs that will be less impacted by ai, or will be created by it", policies: ["AI: Worker Programs Only"] },
    { text: "Government regulation and public oversight of AI development", policies: ["AI: Regulation and Oversight"] },
    { text: "Let innovation flourish with minimal regulation", policies: ["AI: Minimal Regulation"] },
    { text: "No regulation", policies: ["AI: No Regulation"] }
  ] },
  { id: 138, category: "Culture & Social Issues", subcategory: "Technology", type: "double", questions: [
    { subId: "138a", text: "What uses of genetic engineering should be acceptable?", type: "multi", questionTooltip: "Not including selective breeding of animals.", options: [
      { text: "To improve crops", policies: ["GMO: Crops"] },
      { text: "To modify farm animals", policies: ["GMO: Farm Animals"], tooltip: "For example to make them make more produce, meat, grow faster, be able to live longer, etc." },
      { text: "To erase diseases from animals", policies: ["GMO: Erase Animal Diseases"], tooltip: "E.g. making mosquitoes not carry malaria" },
      { text: "To modify non-farm domestic animals for different purposes", policies: ["GMO: Non-Farm Domestic Animals"] },
      { text: "To modify non-domestic animals for different purposes", policies: ["GMO: Non-Domestic Animals"] },
      { text: "To help in human treatment, but without modifying humans", policies: ["GMO: Human Treatment"] },
      { text: "To cure genetic diseases from humans", policies: ["GMO: Cure Human Diseases"] },
      { text: "To improve performance of able-bodied humans", policies: ["GMO: Improve Humans"] },
      { text: "All of them above", policies: ["GMO: All Acceptable"] },
      { text: "It shouldn't exist", policies: ["GMO: None Acceptable"] }
    ] },
    { subId: "138b", text: "Select which you agree with:", type: "multi", options: [
      { text: "The not-acceptable forms of GMO should be illegal for commercial use and mass production", policies: ["GMO Policy: Illegal Commercial"] },
      { text: "The not-acceptable forms of GMO should be illegal for private use", policies: ["GMO Policy: Illegal Private"] },
      { text: "Consumers should be informed of the use of genetic engineering to create or research the product", policies: ["GMO Policy: Consumer Information"] },
      { text: "All genetic engineering should follow ethical guidelines to make sure it creates the least amount of suffering, human and non-human", policies: ["GMO Policy: Ethical Guidelines"] },
      { text: "Individuals and groups should be able to do genetic engineering unethically, as long as they follow the law", policies: ["GMO Policy: Unethical Allowed"] }
    ] }
  ] }
];
