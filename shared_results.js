// ============================================================================
// shared_results.js
// Shared code between the quiz results page and the Saved→View page.
// Contains: policiesDB, categoriesConfig, historical figure matching,
// comparison modal, compact results image building, and theme application.
// ============================================================================

const policiesDB = {
  "AI: Minimal Regulation": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - Minimal Regulation" },
  "AI: Moneyless Automated Society": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - Moneyless Automated Society" },
  "AI: No Regulation": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - No Regulation" },
  "AI: Regulation and Oversight": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - Regulation and Oversight" },
  "AI: Regulation and Worker Programs": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - Regulation and Worker Programs" },
  "AI: Worker Programs Only": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "AI - Worker Programs Only" },
  "Abortion: Banned": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Abortion - Banned" },
  "Abortion: Extreme Cases": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Abortion - Extreme Cases" },
  "Abortion: Legal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Abortion - Legal" },
  "Abortion: Restricted": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Abortion - Restricted" },
  "Any Monogamy": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Any Monogamy" },
  "Any Polygamy": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Any Polygamy" },
  "Bicameral": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Bicameral" },
  "Central Bank: Government Controlled": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Central Bank - Government Controlled" },
  "Central Bank: Independent": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Central Bank - Independent" },
  "Central Bank: None": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Central Bank - None" },
  "Chamber 1 Represents: Aristocracy/Crown": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Aristocracy/Crown" },
  "Chamber 1 Represents: Big Businesses": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Big Businesses" },
  "Chamber 1 Represents: Citizens": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Citizens" },
  "Chamber 1 Represents: Clergy": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Clergy" },
  "Chamber 1 Represents: Communes": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Communes" },
  "Chamber 1 Represents: Corporate Groups": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Corporate Groups" },
  "Chamber 1 Represents: Federal Subunit": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Federal Subunit" },
  "Chamber 1 Represents: Important Cities": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Important Cities" },
  "Chamber 1 Represents: Labor Associations": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Labor Associations" },
  "Chamber 1 Represents: Scientists/Experts": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Scientists/Experts" },
  "Chamber 1 Represents: Small Business/Middle Class/Farmers": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 1 Represents - Small Business/Middle Class/Farmers" },
  "Chamber 2 Represents: Aristocracy/Crown": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Aristocracy/Crown" },
  "Chamber 2 Represents: Big Businesses": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Big Businesses" },
  "Chamber 2 Represents: Citizens": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Citizens" },
  "Chamber 2 Represents: Clergy": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Clergy" },
  "Chamber 2 Represents: Communes": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Communes" },
  "Chamber 2 Represents: Corporate Groups": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Corporate Groups" },
  "Chamber 2 Represents: Federal Subunit": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Federal Subunit" },
  "Chamber 2 Represents: Important Cities": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Important Cities" },
  "Chamber 2 Represents: Labor Associations": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Labor Associations" },
  "Chamber 2 Represents: Scientists/Experts": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Scientists/Experts" },
  "Chamber 2 Represents: Small Business/Middle Class/Farmers": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 2 Represents - Small Business/Middle Class/Farmers" },
  "Chamber 3 Represents: Aristocracy/Crown": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Aristocracy/Crown" },
  "Chamber 3 Represents: Big Businesses": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Big Businesses" },
  "Chamber 3 Represents: Citizens": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Citizens" },
  "Chamber 3 Represents: Clergy": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Clergy" },
  "Chamber 3 Represents: Communes": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Communes" },
  "Chamber 3 Represents: Corporate Groups": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Corporate Groups" },
  "Chamber 3 Represents: Federal Subunit": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Federal Subunit" },
  "Chamber 3 Represents: Important Cities": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Important Cities" },
  "Chamber 3 Represents: Labor Associations": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Labor Associations" },
  "Chamber 3 Represents: Scientists/Experts": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Scientists/Experts" },
  "Chamber 3 Represents: Small Business/Middle Class/Farmers": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Chamber 3 Represents - Small Business/Middle Class/Farmers" },
  "Child marriage between two minors allowed": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Child marriage between two minors allowed" },
  "Child marriage with an adult allowed": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Child marriage with an adult allowed" },
  "Citizenship: Birthright": { category: "Governance", subcategory: "Citizenship", symbol: "●", description: "Citizenship - Birthright" },
  "Citizenship: Bloodline": { category: "Governance", subcategory: "Citizenship", symbol: "●", description: "Citizenship - Bloodline" },
  "Citizenship: Long-term Residents": { category: "Governance", subcategory: "Citizenship", symbol: "●", description: "Citizenship - Long-term Residents" },
  "Co-existence of legislature and executive": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Co-existence of legislature and executive" },
  "Confederation": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Confederation" },
  "Conscription Exempt: Businessmen": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Businessmen" },
  "Conscription Exempt: Celebrities": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Celebrities" },
  "Conscription Exempt: Certain Groups": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Certain Groups" },
  "Conscription Exempt: Influential Families": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Influential Families" },
  "Conscription Exempt: LGBT": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - LGBT" },
  "Conscription Exempt: No One": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - No One" },
  "Conscription Exempt: Politicians": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Politicians" },
  "Conscription Exempt: Women": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Exempt - Women" },
  "Conscription Timing: Defense Shortages": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Timing - Defense Shortages" },
  "Conscription Timing: Emergencies": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Timing - Emergencies" },
  "Conscription Timing: Peacetime": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Timing - Peacetime" },
  "Conscription Timing: Wartime": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription Timing - Wartime" },
  "Conscription: Lottery": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription - Lottery" },
  "Conscription: None": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription - None" },
  "Conscription: Selective": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription - Selective" },
  "Conscription: Universal": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Conscription - Universal" },
  "Consensual marriage between adults": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Consensual marriage between adults" },
  "Consensual marriage between adults with limitations on divorce": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Consensual marriage between adults with limitations on divorce" },
  "Constitutional Court: Independent": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Constitutional Court - Independent" },
  "Constitutional Court: No": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Constitutional Court - No" },
  "Constitutional Court: No Constitution": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Constitutional Court - No Constitution" },
  "Constitutional Court: With Override": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Constitutional Court - With Override" },
  "Contract Enforcement: None": { category: "Economy", subcategory: "Contracts", symbol: "●", description: "Contract Enforcement - None" },
  "Contract Enforcement: Private": { category: "Economy", subcategory: "Contracts", symbol: "●", description: "Contract Enforcement - Private" },
  "Contract Enforcement: State": { category: "Economy", subcategory: "Contracts", symbol: "●", description: "Contract Enforcement - State" },
  "Cooperatives: Cultural Encouragement": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Cooperatives - Cultural Encouragement" },
  "Cooperatives: No": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Cooperatives - No" },
  "Cooperatives: Special Programs": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Cooperatives - Special Programs" },
  "Cooperatives: State Funded": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Cooperatives - State Funded" },
  "Corporation Type: Cooperative": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - Cooperative" },
  "Corporation Type: General Partnership": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - General Partnership" },
  "Corporation Type: Limited Liability": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - Limited Liability" },
  "Corporation Type: None": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - None" },
  "Corporation Type: Sole Proprietorship": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - Sole Proprietorship" },
  "Corporation Type: State Enterprises": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Corporation Type - State Enterprises" },
  "Courts: Customs": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - Customs" },
  "Courts: Justice and Precedents": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - Justice and Precedents" },
  "Courts: Legality": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - Legality" },
  "Courts: Legality and Interpretation": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - Legality and Interpretation" },
  "Courts: Legality and Justice": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - Legality and Justice" },
  "Courts: No Law Reference": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Courts - No Law Reference" },
  "Cultural Diversity: Assimilation": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Cultural Diversity - Assimilation" },
  "Cultural Diversity: Integration": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Cultural Diversity - Integration" },
  "Cultural Diversity: Separation": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Cultural Diversity - Separation" },
  "Currency Type: Commodity": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Commodity" },
  "Currency Type: Demurrage": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Demurrage" },
  "Currency Type: Energy Credit": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Energy Credit" },
  "Currency Type: Fiat": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Fiat" },
  "Currency Type: Fiat Commodity Backed": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Fiat Commodity Backed" },
  "Currency Type: Free Banking": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Free Banking" },
  "Currency Type: Labor Tokens": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Labor Tokens" },
  "Currency Type: Local Decision": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Local Decision" },
  "Currency Type: None": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - None" },
  "Currency Type: Regional Decision": { category: "Economy", subcategory: "Banking", symbol: "●", description: "Currency Type - Regional Decision" },
  "Death Penalty: No": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Death Penalty - No" },
  "Death Penalty: Yes": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Death Penalty - Yes" },
  "Devolution": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Devolution" },
  "Divorce Rights: Contract-Based": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Divorce Rights - Contract-Based" },
  "Divorce Rights: Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Divorce Rights - Equal" },
  "Divorce Rights: Favor Husband": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Divorce Rights - Favor Husband" },
  "Divorce Rights: Favor Wife": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Divorce Rights - Favor Wife" },
  "Divorce Rights: Husband Decides": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Divorce Rights - Husband Decides" },
  "Economic Intervention: Eminent Domain": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Eminent Domain" },
  "Economic Intervention: Export Taxes": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Export Taxes" },
  "Economic Intervention: Incentives": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Incentives" },
  "Economic Intervention: Minimum Wage": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Minimum Wage" },
  "Economic Intervention: Nationalization": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Nationalization" },
  "Economic Intervention: None": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - None" },
  "Economic Intervention: Price Control": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Price Control" },
  "Economic Intervention: Rationing": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Rationing" },
  "Economic Intervention: Stimulus": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Stimulus" },
  "Economic Intervention: Subsidies": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Subsidies" },
  "Economic Intervention: Tariffs": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Economic Intervention - Tariffs" },
  "Education Compulsory: No": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Compulsory - No" },
  "Education Compulsory: Yes Penalties": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Compulsory - Yes Penalties" },
  "Education End: Adulthood": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education End - Adulthood" },
  "Education End: Either": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education End - Either" },
  "Education End: Knowledge Proof": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education End - Knowledge Proof" },
  "Education Free: Higher": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Free - Higher" },
  "Education Free: None": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Free - None" },
  "Education Free: Primary": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Free - Primary" },
  "Education Free: Technical": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Free - Technical" },
  "Education Goals: Basic Knowledge": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Basic Knowledge" },
  "Education Goals: Civic Duty": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Civic Duty" },
  "Education Goals: Compliance": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Compliance" },
  "Education Goals: Critical Thinking": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Critical Thinking" },
  "Education Goals: Cultural Heritage": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Cultural Heritage" },
  "Education Goals: Holistic": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Holistic" },
  "Education Goals: Parent Decision": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Parent Decision" },
  "Education Goals: Practical Skills": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Practical Skills" },
  "Education Goals: Vocational": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - Vocational" },
  "Education Goals: World History": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Goals - World History" },
  "Education Subsidized: Higher": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Subsidized - Higher" },
  "Education Subsidized: None": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Subsidized - None" },
  "Education Subsidized: Primary": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Subsidized - Primary" },
  "Education Subsidized: Technical": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Education Subsidized - Technical" },
  "Family Power Dynamic: All Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - All Equal" },
  "Family Power Dynamic: Caretakers Over Children": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - Caretakers Over Children" },
  "Family Power Dynamic: No Parents, All Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - No Parents, All Equal" },
  "Family Power Dynamic: Parents Equal Over Children": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - Parents Equal Over Children" },
  "Family Power Dynamic: Patriarchal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - Patriarchal" },
  "Family Power Dynamic: Private Matter": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Family Power Dynamic - Private Matter" },
  "Forced Labor: Corvée/Serfs": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Corvée/Serfs" },
  "Forced Labor: Debt Compensation": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Debt Compensation" },
  "Forced Labor: National Service": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - National Service" },
  "Forced Labor: None": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - None" },
  "Forced Labor: Prison": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Prison" },
  "Forced Labor: Rehabilitation": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Rehabilitation" },
  "Forced Labor: Victim Compensation": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Victim Compensation" },
  "Forced Labor: Work Requirement": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Forced Labor - Work Requirement" },
  "Foreign Property: None": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Foreign Property - None" },
  "Foreign Property: Personal": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Foreign Property - Personal" },
  "Foreign Property: Real Estate": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Foreign Property - Real Estate" },
  "Foreign Property: Stocks and Companies": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Foreign Property - Stocks and Companies" },
  "Free federation": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Free federation" },
  "GMO Policy: Consumer Information": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO Policy - Consumer Information" },
  "GMO Policy: Ethical Guidelines": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO Policy - Ethical Guidelines" },
  "GMO Policy: Illegal Commercial": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO Policy - Illegal Commercial" },
  "GMO Policy: Illegal Private": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO Policy - Illegal Private" },
  "GMO Policy: Unethical Allowed": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO Policy - Unethical Allowed" },
  "GMO: All Acceptable": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - All Acceptable" },
  "GMO: Crops": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Crops" },
  "GMO: Cure Human Diseases": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Cure Human Diseases" },
  "GMO: Erase Animal Diseases": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Erase Animal Diseases" },
  "GMO: Farm Animals": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Farm Animals" },
  "GMO: Human Treatment": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Human Treatment" },
  "GMO: Improve Humans": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Improve Humans" },
  "GMO: Non-Domestic Animals": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Non-Domestic Animals" },
  "GMO: Non-Farm Domestic Animals": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - Non-Farm Domestic Animals" },
  "GMO: None Acceptable": { category: "Culture & Social Issues", subcategory: "Technology", symbol: "●", description: "GMO - None Acceptable" },
  "Gender schools": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Gender schools" },
  "Gendered classes": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Gendered classes" },
  "Global Cooperation: Complete": { category: "World", subcategory: "International Cooperation", symbol: "●", description: "Global Cooperation - Complete" },
  "Global Cooperation: Limited": { category: "World", subcategory: "International Cooperation", symbol: "●", description: "Global Cooperation - Limited" },
  "Global Cooperation: Minimal": { category: "World", subcategory: "International Cooperation", symbol: "●", description: "Global Cooperation - Minimal" },
  "Global Cooperation: Relevant": { category: "World", subcategory: "International Cooperation", symbol: "●", description: "Global Cooperation - Relevant" },
  "Globalisation: No, Countries Self-Sufficient": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Globalisation - No, Countries Self-Sufficient" },
  "Globalisation: No, Localised": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Globalisation - No, Localised" },
  "Globalisation: State Self-Sufficiency": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Globalisation - State Self-Sufficiency" },
  "Globalisation: Yes": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Globalisation - Yes" },
  "Globalisation: Yes with Local Diversity": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Globalisation - Yes with Local Diversity" },
  "Globalization: Continue": { category: "World", subcategory: "Economic Globalization", symbol: "●", description: "Globalization - Continue" },
  "Globalization: No, Countries Self-Sufficient": { category: "World", subcategory: "Economic Globalization", symbol: "●", description: "Globalization - No, Countries Self-Sufficient" },
  "Globalization: No, Localized": { category: "World", subcategory: "Economic Globalization", symbol: "●", description: "Globalization - No, Localized" },
  "Globalization: State Self-Sufficiency": { category: "World", subcategory: "Economic Globalization", symbol: "●", description: "Globalization - State Self-Sufficiency" },
  "Globalization: Yes with Local Diversity": { category: "World", subcategory: "Economic Globalization", symbol: "●", description: "Globalization - Yes with Local Diversity" },
  "Healthcare Funding: Free": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Funding - Free" },
  "Healthcare Funding: Private": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Funding - Private" },
  "Healthcare Funding: Public Option": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Funding - Public Option" },
  "Healthcare Funding: Subsidies": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Funding - Subsidies" },
  "Healthcare Ownership: Government": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Ownership - Government" },
  "Healthcare Ownership: Mixed": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Ownership - Mixed" },
  "Healthcare Ownership: Non-Government": { category: "Economy", subcategory: "Healthcare", symbol: "●", description: "Healthcare Ownership - Non-Government" },
  "HoG Power: Administrative Only": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Administrative Only" },
  "HoG Power: Budget Control": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Budget Control" },
  "HoG Power: Cabinet Leadership": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Cabinet Leadership" },
  "HoG Power: Dissolution": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Dissolution" },
  "HoG Power: Emergency Powers": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Emergency Powers" },
  "HoG Power: Foreign Policy": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Foreign Policy" },
  "HoG Power: Full Executive": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Full Executive" },
  "HoG Power: Legislative Initiative": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Legislative Initiative" },
  "HoG Power: Military Command": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Military Command" },
  "HoG Power: Ministerial Appointments": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Power - Ministerial Appointments" },
  "HoG Selection: Appointed by HoS": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Appointed by HoS" },
  "HoG Selection: Direct Election": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Direct Election" },
  "HoG Selection: Legislative Election": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Legislative Election" },
  "HoG Selection: Legislative Majority Leader": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Legislative Majority Leader" },
  "HoG Selection: None": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - None" },
  "HoG Selection: Party/Council Selection": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Party/Council Selection" },
  "HoG Selection: Unified with HoS": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoG Selection - Unified with HoS" },
  "HoS Power: Appoints Government": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Appoints Government" },
  "HoS Power: Ceremonial": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Ceremonial" },
  "HoS Power: Commander-in-Chief": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Commander-in-Chief" },
  "HoS Power: Dissolution": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Dissolution" },
  "HoS Power: Emergency Powers": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Emergency Powers" },
  "HoS Power: Foreign Affairs": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Foreign Affairs" },
  "HoS Power: Full Executive": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Full Executive" },
  "HoS Power: Legislative Veto": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Legislative Veto" },
  "HoS Power: None": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - None" },
  "HoS Power: Pardons": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Power - Pardons" },
  "HoS Selection: Direct Election": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Direct Election" },
  "HoS Selection: Electoral College": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Electoral College" },
  "HoS Selection: Hereditary": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Hereditary" },
  "HoS Selection: Legislative Election": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Legislative Election" },
  "HoS Selection: Military Appointment": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Military Appointment" },
  "HoS Selection: None": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - None" },
  "HoS Selection: Party/Council Selection": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Party/Council Selection" },
  "HoS Selection: Religious Appointment": { category: "Governance", subcategory: "Head of State & Head of Government", symbol: "●", description: "HoS Selection - Religious Appointment" },
  "Homosexuality: Accepted": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Homosexuality - Accepted" },
  "Homosexuality: Completely Illegal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Homosexuality - Completely Illegal" },
  "Homosexuality: Illegal but Advocacy Legal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Homosexuality - Illegal but Advocacy Legal" },
  "Homosexuality: Legal but Marginalized": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Homosexuality - Legal but Marginalized" },
  "Homosexuality: Private Legal, Public Illegal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Homosexuality - Private Legal, Public Illegal" },
  "IP Duration: Balanced": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Duration - Balanced" },
  "IP Duration: Forever": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Duration - Forever" },
  "IP Duration: Minimal": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Duration - Minimal" },
  "IP Duration: Use-Based": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Duration - Use-Based" },
  "IP Exemption: AI Generated": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - AI Generated" },
  "IP Exemption: Educational": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Educational" },
  "IP Exemption: Essential Goods": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Essential Goods" },
  "IP Exemption: Government Use": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Government Use" },
  "IP Exemption: Medical": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Medical" },
  "IP Exemption: Non-Commercial": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Non-Commercial" },
  "IP Exemption: None": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - None" },
  "IP Exemption: Personal Use": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Personal Use" },
  "IP Exemption: Traditional Knowledge": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Exemption - Traditional Knowledge" },
  "IP Type: Copyrights": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Copyrights" },
  "IP Type: Industrial Design": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Industrial Design" },
  "IP Type: None": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - None" },
  "IP Type: Patents": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Patents" },
  "IP Type: Plant Breeders": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Plant Breeders" },
  "IP Type: Trade Secrets": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Trade Secrets" },
  "IP Type: Trademarks": { category: "Economy", subcategory: "Intellectual Property", symbol: "●", description: "IP Type - Trademarks" },
  "Ignore racism as long it's not a big problem": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Ignore racism as long it's not a big problem" },
  "Immigration: Closed": { category: "World", subcategory: "Immigration", symbol: "●", description: "Immigration - Closed" },
  "Immigration: Controlled Open": { category: "World", subcategory: "Immigration", symbol: "●", description: "Immigration - Controlled Open" },
  "Immigration: Cultural Similarity": { category: "World", subcategory: "Immigration", symbol: "●", description: "Immigration - Cultural Similarity" },
  "Immigration: Open Borders": { category: "World", subcategory: "Immigration", symbol: "●", description: "Immigration - Open Borders" },
  "Immigration: Skilled Workers": { category: "World", subcategory: "Immigration", symbol: "●", description: "Immigration - Skilled Workers" },
  "Industry Ownership: Communal": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Communal" },
  "Industry Ownership: Cooperatives": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Cooperatives" },
  "Industry Ownership: Decentralized": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Decentralized" },
  "Industry Ownership: Government": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Government" },
  "Industry Ownership: Private": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Private" },
  "Industry Ownership: Private Minimal": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Private Minimal" },
  "Industry Ownership: Private Regulated": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - Private Regulated" },
  "Industry Ownership: State": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Industry Ownership - State" },
  "Inheritance: All Property": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Inheritance - All Property" },
  "Inheritance: Personal Only": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Inheritance - Personal Only" },
  "Inheritance: Personal and Small Amounts": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Inheritance - Personal and Small Amounts" },
  "Judges: Appointed": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Judges - Appointed" },
  "Judges: Elected": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Judges - Elected" },
  "Judges: None": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Judges - None" },
  "Judges: Professional": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Judges - Professional" },
  "Judges: Traditional": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Judges - Traditional" },
  "Juries: Assist Only": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Juries - Assist Only" },
  "Juries: Full Functions": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Juries - Full Functions" },
  "Juries: None": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Juries - None" },
  "Juries: Verdict Only": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Juries - Verdict Only" },
  "Jury Cases: All": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - All" },
  "Jury Cases: All Criminal": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - All Criminal" },
  "Jury Cases: Civil Only": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - Civil Only" },
  "Jury Cases: Criminal and Civil": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - Criminal and Civil" },
  "Jury Cases: Serious Criminal": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - Serious Criminal" },
  "Jury Cases: Specialized": { category: "Governance", subcategory: "Judiciary", symbol: "●", description: "Jury Cases - Specialized" },
  "Justice Purpose: Deterrence": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Deterrence" },
  "Justice Purpose: Expulsion": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Expulsion" },
  "Justice Purpose: Incapacitation": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Incapacitation" },
  "Justice Purpose: Rehabilitation": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Rehabilitation" },
  "Justice Purpose: Restoration": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Restoration" },
  "Justice Purpose: Retribution": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Justice Purpose - Retribution" },
  "Land Administration: Aristocratic": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Aristocratic" },
  "Land Administration: Commercial Companies": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Commercial Companies" },
  "Land Administration: Cooperatives": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Cooperatives" },
  "Land Administration: Family Farms": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Family Farms" },
  "Land Administration: Government Committees": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Government Committees" },
  "Land Administration: Local Councils": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Local Councils" },
  "Land Administration: Local Managers": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Local Managers" },
  "Land Administration: State Companies": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - State Companies" },
  "Land Administration: Traditional Communes": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Traditional Communes" },
  "Land Administration: Worker Cooperatives": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Administration - Worker Cooperatives" },
  "Land Labor: Community Members": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Community Members" },
  "Land Labor: Corvée": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Corvée" },
  "Land Labor: Prison/Slaves": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Prison/Slaves" },
  "Land Labor: Small-Holders": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Small-Holders" },
  "Land Labor: Tenant Farmers": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Tenant Farmers" },
  "Land Labor: Wage Laborers": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Labor - Wage Laborers" },
  "Land Ownership: Commodity": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Commodity" },
  "Land Ownership: Common Property": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Common Property" },
  "Land Ownership: Crown": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Crown" },
  "Land Ownership: Government Majority": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Government Majority" },
  "Land Ownership: Government Some": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Government Some" },
  "Land Ownership: Inheritable Only": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Inheritable Only" },
  "Land Ownership: Local Communities": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - Local Communities" },
  "Land Ownership: User Property": { category: "Economy", subcategory: "Agriculture", symbol: "●", description: "Land Ownership - User Property" },
  "Legal Equality: Equitable": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Equality - Equitable" },
  "Legal Equality: No": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Equality - No" },
  "Legal Equality: Yes": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Equality - Yes" },
  "Legal Inequality: Ability": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Ability" },
  "Legal Inequality: Aristocratic": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Aristocratic" },
  "Legal Inequality: Caste System": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Caste System" },
  "Legal Inequality: Economic/Political": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Economic/Political" },
  "Legal Inequality: Race/Ethnicity": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Race/Ethnicity" },
  "Legal Inequality: Sex/Gender": { category: "Culture & Social Issues", subcategory: "Caste and Estate System", symbol: "●", description: "Legal Inequality - Sex/Gender" },
  "Local Admin: Central Appointment": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Central Appointment" },
  "Local Admin: Fully Elected": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Fully Elected" },
  "Local Admin: Hereditary": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Hereditary" },
  "Local Admin: Mixed Elected": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Mixed Elected" },
  "Local Admin: Sortition": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Sortition" },
  "Local Admin: Subunit Appointment": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Local Admin - Subunit Appointment" },
  "Local Autonomy": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Local Autonomy" },
  "Marital Rape: Illegal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Marital Rape - Illegal" },
  "Marital Rape: Legal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Marital Rape - Legal" },
  "Media Funding: Educational/Utility": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Funding - Educational/Utility" },
  "Media Funding: No Criteria": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Funding - No Criteria" },
  "Media Funding: None": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Funding - None" },
  "Media Ownership: Non-Profit Only": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Ownership - Non-Profit Only" },
  "Media Ownership: Private Only": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Ownership - Private Only" },
  "Media Ownership: State Only": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Ownership - State Only" },
  "Media Ownership: State and Private Free": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Ownership - State and Private Free" },
  "Media Ownership: State and Private Permitted": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Media Ownership - State and Private Permitted" },
  "Military Force: Humanitarian": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Humanitarian" },
  "Military Force: Ideological": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Ideological" },
  "Military Force: Material Gain": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Material Gain" },
  "Military Force: Never": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Never" },
  "Military Force: Preemptive": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Preemptive" },
  "Military Force: Self-Defense": { category: "World", subcategory: "War Policy", symbol: "●", description: "Military Force - Self-Defense" },
  "Military: Conscripted": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Military - Conscripted" },
  "Military: Militia": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Military - Militia" },
  "Military: Private": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Military - Private" },
  "Military: Professional": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Military - Professional" },
  "Military: Soldier Caste": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Military - Soldier Caste" },
  "Minimum Wage: All Workers": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Minimum Wage - All Workers" },
  "Minimum Wage: Different by Occupation": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Minimum Wage - Different by Occupation" },
  "Minimum Wage: National Agreements": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Minimum Wage - National Agreements" },
  "Minimum Wage: None": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Minimum Wage - None" },
  "Minimum Wage: Regional Agreements": { category: "Economy", subcategory: "Regulation", symbol: "●", description: "Minimum Wage - Regional Agreements" },
  "Mix of national and federal organisation": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Mix of national and federal organisation" },
  "No child marriage": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "No child marriage" },
  "No legal marriage": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "No legal marriage" },
  "No legislature": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "No legislature" },
  "No slavery": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "No slavery" },
  "Not gendered schools": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Not gendered schools" },
  "Officers: Elected": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Officers - Elected" },
  "Officers: Loyalty": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Officers - Loyalty" },
  "Officers: Merit": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Officers - Merit" },
  "Officers: Nobility": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Officers - Nobility" },
  "Officers: Purchasable": { category: "Governance", subcategory: "Army Model", symbol: "●", description: "Officers - Purchasable" },
  "Police Duty: Body Cam": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Duty - Body Cam" },
  "Police Duty: Defend Civilians": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Duty - Defend Civilians" },
  "Police Duty: Prohibition": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Duty - Prohibition" },
  "Police Privilege: Arms": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Arms" },
  "Police Privilege: Arrest": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Arrest" },
  "Police Privilege: Confiscation": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Confiscation" },
  "Police Privilege: Entry": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Entry" },
  "Police Privilege: Immunity": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Immunity" },
  "Police Privilege: Surveillance": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Privilege - Surveillance" },
  "Police Responsibility: Civilians": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Civilians" },
  "Police Responsibility: Criminals": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Criminals" },
  "Police Responsibility: Crowd Control": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Crowd Control" },
  "Police Responsibility: Investigation": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Investigation" },
  "Police Responsibility: Private Property": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Private Property" },
  "Police Responsibility: Public Property": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police Responsibility - Public Property" },
  "Police: Local Professional": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - Local Professional" },
  "Police: Militarized National": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - Militarized National" },
  "Police: National Professional": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - National Professional" },
  "Police: None": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - None" },
  "Police: Private Companies": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - Private Companies" },
  "Police: Rotating Community": { category: "Governance", subcategory: "Policing", symbol: "●", description: "Police - Rotating Community" },
  "Power Division: Checks National": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Checks National" },
  "Power Division: Checks Subunit": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Checks Subunit" },
  "Power Division: Efficient National": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Efficient National" },
  "Power Division: Efficient Subunit": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Efficient Subunit" },
  "Power Division: Neither National": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Neither National" },
  "Power Division: Neither Subunit": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Power Division - Neither Subunit" },
  "Prisons: Dangerous Only": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Prisons - Dangerous Only" },
  "Prisons: No": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Prisons - No" },
  "Prisons: Yes": { category: "Governance", subcategory: "Justice", symbol: "●", description: "Prisons - Yes" },
  "Promoting gender roles in schools": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "Promoting gender roles in schools" },
  "Public Constitution Without State": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Public Constitution Without State" },
  "Racial segregation": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Racial segregation" },
  "Racial seperatism": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Racial seperatism" },
  "Racism should be tolerated or supported": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Racism should be tolerated or supported" },
  "Racism should not be tolerated": { category: "Culture & Social Issues", subcategory: "Ethnicities and Cultures", symbol: "●", description: "Racism should not be tolerated" },
  "Religion Power: All Subordinate to State": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Power - All Subordinate to State" },
  "Religion Power: Formal Agreement": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Power - Formal Agreement" },
  "Religion Power: No Relationship": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Power - No Relationship" },
  "Religion Power: State Controls Religion": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Power - State Controls Religion" },
  "Religion Power: State Subordinate": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Power - State Subordinate" },
  "Religion Status: Laicism": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Status - Laicism" },
  "Religion Status: No Official No Secularism": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Status - No Official No Secularism" },
  "Religion Status: Official": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Status - Official" },
  "Religion Status: Official Separation": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Status - Official Separation" },
  "Religion Status: State Atheism": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religion Status - State Atheism" },
  "Religious Freedom: No": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Freedom - No" },
  "Religious Freedom: Yes": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Freedom - Yes" },
  "Religious Tax: All Equal": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - All Equal" },
  "Religious Tax: Marginalized": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - Marginalized" },
  "Religious Tax: No Privilege": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - No Privilege" },
  "Religious Tax: No Public Funding": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - No Public Funding" },
  "Religious Tax: Official Preference": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - Official Preference" },
  "Religious Tax: Only Official": { category: "Governance", subcategory: "Church and State", symbol: "●", description: "Religious Tax - Only Official" },
  "School Gender: Case by Case": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Gender - Case by Case" },
  "School Organization: Central Control": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Organization - Central Control" },
  "School Organization: Teachers": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Organization - Teachers" },
  "School Organization: Teachers and Parents": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Organization - Teachers and Parents" },
  "School Organization: Teachers and Students Equal": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Organization - Teachers and Students Equal" },
  "School Organization: Teachers, Parents, Students": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Organization - Teachers, Parents, Students" },
  "School Ownership: Communities": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Ownership - Communities" },
  "School Ownership: Families": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Ownership - Families" },
  "School Ownership: Private": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Ownership - Private" },
  "School Ownership: State": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Ownership - State" },
  "School Segregation: Case by Case": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Segregation - Case by Case" },
  "School Segregation: No": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Segregation - No" },
  "School Segregation: Yes": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Segregation - Yes" },
  "School Standards: Local Curriculum": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Standards - Local Curriculum" },
  "School Standards: Minimum Local": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Standards - Minimum Local" },
  "School Standards: Minimum National": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Standards - Minimum National" },
  "School Standards: National Curriculum": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Standards - National Curriculum" },
  "School Standards: None": { category: "Culture & Social Issues", subcategory: "Education", symbol: "●", description: "School Standards - None" },
  "Separation of Powers: Anti-State": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Separation of Powers - Anti-State" },
  "Separation of Powers: None": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Separation of Powers - None" },
  "Separation of Powers: Partial": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Separation of Powers - Partial" },
  "Separation of Powers: Strict": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Separation of Powers - Strict" },
  "Slavery Exempt: Citizens": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery Exempt - Citizens" },
  "Slavery Exempt: None": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery Exempt - None" },
  "Slavery Exempt: Specific Groups": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery Exempt - Specific Groups" },
  "Slavery: Birth": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Birth" },
  "Slavery: Criminal Punishment": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Criminal Punishment" },
  "Slavery: Debt": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Debt" },
  "Slavery: Government Wish": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Government Wish" },
  "Slavery: Parents": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Parents" },
  "Slavery: Pre-Existing": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Pre-Existing" },
  "Slavery: Victim Claim": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Victim Claim" },
  "Slavery: Voluntary Contract": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - Voluntary Contract" },
  "Slavery: War Captives": { category: "Culture & Social Issues", subcategory: "Forced Labor", symbol: "●", description: "Slavery - War Captives" },
  "Small Business: Cultural Encouragement": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Small Business - Cultural Encouragement" },
  "Small Business: Discouraged": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Small Business - Discouraged" },
  "Small Business: Less Regulations": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Small Business - Less Regulations" },
  "Small Business: No": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Small Business - No" },
  "Small Business: Strong Support": { category: "Economy", subcategory: "Ownership", symbol: "●", description: "Small Business - Strong Support" },
  "Span: Continent": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Continent" },
  "Span: Local Community": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Local Community" },
  "Span: Medium/Large Country": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Medium/Large Country" },
  "Span: Panarchy": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Panarchy" },
  "Span: Small Country": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Small Country" },
  "Span: Town/City": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - Town/City" },
  "Span: World": { category: "Governance", subcategory: "Governance Principle", symbol: "●", description: "Span - World" },
  "Speech Restrictions: Any Disobedience": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Any Disobedience" },
  "Speech Restrictions: Blasphemy": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Blasphemy" },
  "Speech Restrictions: Contract Violation": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Contract Violation" },
  "Speech Restrictions: Disinformation": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Disinformation" },
  "Speech Restrictions: False Alarms": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - False Alarms" },
  "Speech Restrictions: Hate Speech": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Hate Speech" },
  "Speech Restrictions: None": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - None" },
  "Speech Restrictions: Opposition": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Opposition" },
  "Speech Restrictions: Slander Organizations": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Slander Organizations" },
  "Speech Restrictions: Slander Private Figures": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Slander Private Figures" },
  "Speech Restrictions: Slander Public Figures": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Slander Public Figures" },
  "Speech Restrictions: Symbol Disrespect": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Symbol Disrespect" },
  "Speech Restrictions: Violence": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Violence" },
  "Speech Restrictions: Violent Disobedience": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Speech Restrictions - Violent Disobedience" },
  "Supreme executive": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Supreme executive" },
  "Supreme legislature": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Supreme legislature" },
  "Surveillance: Extensive": { category: "Governance", subcategory: "Internal Security", symbol: "●", description: "Surveillance - Extensive" },
  "Surveillance: Minimal": { category: "Governance", subcategory: "Internal Security", symbol: "●", description: "Surveillance - Minimal" },
  "Surveillance: None": { category: "Governance", subcategory: "Internal Security", symbol: "●", description: "Surveillance - None" },
  "Surveillance: Targeted No Warrants": { category: "Governance", subcategory: "Internal Security", symbol: "●", description: "Surveillance - Targeted No Warrants" },
  "Surveillance: Targeted Warrants": { category: "Governance", subcategory: "Internal Security", symbol: "●", description: "Surveillance - Targeted Warrants" },
  "System Scale: Ethnic Group": { category: "World", subcategory: "Scale", symbol: "●", description: "System Scale - Ethnic Group" },
  "System Scale: Many Places": { category: "World", subcategory: "Scale", symbol: "●", description: "System Scale - Many Places" },
  "System Scale: My Country": { category: "World", subcategory: "Scale", symbol: "●", description: "System Scale - My Country" },
  "System Scale: Universal": { category: "World", subcategory: "Scale", symbol: "●", description: "System Scale - Universal" },
  "Taxation Type: Progressive": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation Type - Progressive" },
  "Taxation Type: Proportional": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation Type - Proportional" },
  "Taxation Type: Regressive": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation Type - Regressive" },
  "Taxation: Capital Gains": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Capital Gains" },
  "Taxation: Consumption": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Consumption" },
  "Taxation: Corporate": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Corporate" },
  "Taxation: Inheritance": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Inheritance" },
  "Taxation: Lifestyle": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Lifestyle" },
  "Taxation: Luxury": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Luxury" },
  "Taxation: None": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - None" },
  "Taxation: Poll": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Poll" },
  "Taxation: Resource Rent": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Resource Rent" },
  "Taxation: Wealth": { category: "Economy", subcategory: "Taxation", symbol: "●", description: "Taxation - Wealth" },
  "Trade Policy: Closed Economy": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Policy - Closed Economy" },
  "Trade Policy: Fair Trade": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Policy - Fair Trade" },
  "Trade Policy: Free Trade": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Policy - Free Trade" },
  "Trade Policy: Mercantilism": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Policy - Mercantilism" },
  "Trade Policy: Protectionism": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Policy - Protectionism" },
  "Trade Restrictions: Ideology": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Restrictions - Ideology" },
  "Trade Restrictions: None": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Restrictions - None" },
  "Trade Restrictions: Unethical Practices": { category: "World", subcategory: "Economic globalization", symbol: "●", description: "Trade Restrictions - Unethical Practices" },
  "Traditional Monogamy": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Traditional Monogamy" },
  "Traditional Polygyny": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Traditional Polygyny" },
  "Transparency: Balanced": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Transparency - Balanced" },
  "Transparency: Government Secrecy": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Transparency - Government Secrecy" },
  "Transparency: Opaque": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Transparency - Opaque" },
  "Transparency: Radical": { category: "Governance", subcategory: "Bureaucracy", symbol: "●", description: "Transparency - Radical" },
  "Tricameralism": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Tricameralism" },
  "Unconsensual marriage between adults allowed": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Unconsensual marriage between adults allowed" },
  "Unicameral": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Unicameral" },
  "Unions Operation: Accurate Representation": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Accurate Representation" },
  "Unions Operation: Collective Bargaining": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Collective Bargaining" },
  "Unions Operation: Government Control": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Government Control" },
  "Unions Operation: Non-Radical Only": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Non-Radical Only" },
  "Unions Operation: None": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - None" },
  "Unions Operation: Public Funding": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Public Funding" },
  "Unions Operation: Strictly Regulated": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Strictly Regulated" },
  "Unions Operation: Tripartism": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Operation - Tripartism" },
  "Unions Role: Banned": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Banned" },
  "Unions Role: Discouraged": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Discouraged" },
  "Unions Role: Optional": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Optional" },
  "Unions Role: Promoted": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Promoted" },
  "Unions Role: Unnecessary": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Unnecessary" },
  "Unions Role: Widespread": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Role - Widespread" },
  "Unions Structure: Elective": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Structure - Elective" },
  "Unions Structure: Hierarchical": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Structure - Hierarchical" },
  "Unions Structure: No Preference": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Structure - No Preference" },
  "Unions Structure: Rank-and-File": { category: "Economy", subcategory: "Workers' Rights and Associations", symbol: "●", description: "Unions Structure - Rank-and-File" },
  "Unitary State": { category: "Governance", subcategory: "Centralization", symbol: "●", description: "Unitary State" },
  "Veto Right: Citizens Referendum": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - Citizens Referendum" },
  "Veto Right: Constitutional Court": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - Constitutional Court" },
  "Veto Right: Head of State": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - Head of State" },
  "Veto Right: None": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - None" },
  "Veto Right: Regional/Local": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - Regional/Local" },
  "Veto Right: Upper Chamber": { category: "Governance", subcategory: "Executive and Legislative Structure", symbol: "●", description: "Veto Right - Upper Chamber" },
  "Vote Weight: None": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - None" },
  "Vote Weight: Older": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - Older" },
  "Vote Weight: Racial": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - Racial" },
  "Vote Weight: Sex/Gender": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - Sex/Gender" },
  "Vote Weight: Wealth": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - Wealth" },
  "Vote Weight: Younger": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote Weight - Younger" },
  "Vote: Age Requirement": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Age Requirement" },
  "Vote: Aristocratic Title": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Aristocratic Title" },
  "Vote: Birth Citizenship": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Birth Citizenship" },
  "Vote: Citizenship": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Citizenship" },
  "Vote: Land Ownership": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Land Ownership" },
  "Vote: Literacy/Civic Knowledge": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Literacy/Civic Knowledge" },
  "Vote: Male Only": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Male Only" },
  "Vote: Married": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Married" },
  "Vote: No Criminal Record": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - No Criminal Record" },
  "Vote: No Voting": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - No Voting" },
  "Vote: Not Imprisoned": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Not Imprisoned" },
  "Vote: Parenthood": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Parenthood" },
  "Vote: Party Membership": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Party Membership" },
  "Vote: Racial Requirement": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Racial Requirement" },
  "Vote: Religious Requirement": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Religious Requirement" },
  "Vote: Residency": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Residency" },
  "Vote: Stable Income": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Stable Income" },
  "Vote: State Shares": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - State Shares" },
  "Vote: Wealth Requirement": { category: "Governance", subcategory: "Distribution of Power", symbol: "●", description: "Vote - Wealth Requirement" },
  "Wavelength Regulation: Government": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Wavelength Regulation - Government" },
  "Wavelength Regulation: Homestead": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Wavelength Regulation - Homestead" },
  "Wavelength Regulation: Local": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Wavelength Regulation - Local" },
  "Wavelength Regulation: None": { category: "Culture & Social Issues", subcategory: "Media and Speech", symbol: "●", description: "Wavelength Regulation - None" },
  "Women's Right to Contract: Contract-Based": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Contract - Contract-Based" },
  "Women's Right to Contract: Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Contract - Equal" },
  "Women's Right to Contract: Government Decides": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Contract - Government Decides" },
  "Women's Right to Contract: Requires Consent": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Contract - Requires Consent" },
  "Women's Right to Contract: Unmarried Only": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Contract - Unmarried Only" },
  "Women's Right to Education: Equal but Tolerate Discrimination": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Education - Equal but Tolerate Discrimination" },
  "Women's Right to Education: Equal with Anti-Discrimination": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Education - Equal with Anti-Discrimination" },
  "Women's Right to Education: Restricted": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Education - Restricted" },
  "Women's Right to Immovable Property: Contract-Based": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Immovable Property - Contract-Based" },
  "Women's Right to Immovable Property: Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Immovable Property - Equal" },
  "Women's Right to Immovable Property: Government Decides": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Immovable Property - Government Decides" },
  "Women's Right to Immovable Property: Requires Consent": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Immovable Property - Requires Consent" },
  "Women's Right to Immovable Property: Unmarried Only": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Immovable Property - Unmarried Only" },
  "Women's Right to Inheritance: Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Inheritance - Equal" },
  "Women's Right to Inheritance: Male Relatives Over Wives": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Inheritance - Male Relatives Over Wives" },
  "Women's Right to Inheritance: Male Relatives Preferred": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Inheritance - Male Relatives Preferred" },
  "Women's Right to Inheritance: Sons Over Wives": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Inheritance - Sons Over Wives" },
  "Women's Right to Inheritance: Sons Preferred": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Inheritance - Sons Preferred" },
  "Women's Right to Movable Property: Contract-Based": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Movable Property - Contract-Based" },
  "Women's Right to Movable Property: Equal": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Movable Property - Equal" },
  "Women's Right to Movable Property: Government Decides": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Movable Property - Government Decides" },
  "Women's Right to Movable Property: Requires Consent": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Movable Property - Requires Consent" },
  "Women's Right to Movable Property: Unmarried Only": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Movable Property - Unmarried Only" },
  "Women's Right to Work: Contract-Based": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Contract-Based" },
  "Women's Right to Work: Equal but Tolerate Discrimination": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Equal but Tolerate Discrimination" },
  "Women's Right to Work: Equal with Anti-Discrimination": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Equal with Anti-Discrimination" },
  "Women's Right to Work: Government Decides": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Government Decides" },
  "Women's Right to Work: Requires Consent": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Requires Consent" },
  "Women's Right to Work: Unmarried Only": { category: "Culture & Social Issues", subcategory: "Gender equality, family & sex", symbol: "●", description: "Women's Right to Work - Unmarried Only" },
  "Workplace: Balanced": { category: "Economy", subcategory: "Workplace Hierarchy", symbol: "●", description: "Workplace - Balanced" },
  "Workplace: Employer Control": { category: "Economy", subcategory: "Workplace Hierarchy", symbol: "●", description: "Workplace - Employer Control" },
  "Workplace: Traditional Hierarchy": { category: "Economy", subcategory: "Workplace Hierarchy", symbol: "●", description: "Workplace - Traditional Hierarchy" },
  "Workplace: Worker Self-Management": { category: "Economy", subcategory: "Workplace Hierarchy", symbol: "●", description: "Workplace - Worker Self-Management" }
};

const categoriesConfig = {
  "Governance": { cssClass: "results-cat-governance" },
  "Economy": { cssClass: "results-cat-economy" },
  "World": { cssClass: "results-cat-world" },
  "Culture & Social Issues": { cssClass: "results-cat-culture" }
};

// =================== SHARED HELPER FUNCTIONS ===================

// Get disabled questions based on current answers
function getDisabledQuestionsShared(answers, questionsList) {
  const disabled = new Set();
  questionsList.forEach(q => {
    if (q.type === 'intro') return;
    if (q.disablesQuestions) {
      const dq = q.disablesQuestions;
      const triggerAnswers = dq.subId ? (answers[dq.subId] || []) : (answers[q.id] || []);
      let triggered = false;
      if (dq.optionIndex !== undefined) {
        const triggerSub = dq.subId ? q.questions.find(s => s.subId === dq.subId) : null;
        const triggerOpt = triggerSub ? triggerSub.options[dq.optionIndex] : q.options[dq.optionIndex];
        if (triggerOpt && triggerOpt.policies.every(p => triggerAnswers.includes(p))) triggered = true;
      }
      if (dq.optionIndices) {
        dq.optionIndices.forEach(idx => {
          const triggerSub = dq.subId ? q.questions.find(s => s.subId === dq.subId) : null;
          const triggerOpt = triggerSub ? triggerSub.options[idx] : q.options[idx];
          if (triggerOpt && triggerOpt.policies.every(p => triggerAnswers.includes(p))) triggered = true;
        });
      }
      if (triggered) dq.targets.forEach(t => disabled.add(t));
    }
    if (q.type === 'double' && q.disablesOtherParts) {
      const dp = q.disablesOtherParts;
      const triggeringAnswers = answers[dp.subId] || [];
      const triggeringSub = q.questions.find(s => s.subId === dp.subId);
      if (triggeringSub) {
        let isTriggered = false;
        if (dp.optionIndex !== undefined) {
          const triggerPolicies = triggeringSub.options[dp.optionIndex].policies;
          if (triggerPolicies.every(p => triggeringAnswers.includes(p))) isTriggered = true;
        }
        if (dp.optionIndices) {
          dp.optionIndices.forEach(idx => {
            const triggerPolicies = triggeringSub.options[idx].policies;
            if (triggerPolicies.every(p => triggeringAnswers.includes(p))) isTriggered = true;
          });
        }
        if (isTriggered) dp.targets.forEach(t => disabled.add(t));
      }
    }
    if (q.type === 'double' && q.conditionalDisable) {
      const cd = q.conditionalDisable;
      if (Array.isArray(cd)) {
        cd.forEach(condition => {
          const conditionAnswers = answers[condition.subId] || [];
          const conditionSub = q.questions.find(s => s.subId === condition.subId);
          if (conditionSub) {
            const triggerPolicies = conditionSub.options[condition.optionIndex].policies;
            if (triggerPolicies.every(p => conditionAnswers.includes(p))) {
              if (condition.targets) condition.targets.forEach(t => disabled.add(t));
            }
          }
        });
      } else if (cd.conditions) {
        let allMet = true;
        cd.conditions.forEach(condition => {
          const conditionAnswers = answers[condition.subId] || [];
          const conditionSub = q.questions.find(s => s.subId === condition.subId);
          if (conditionSub) {
            const triggerPolicies = conditionSub.options[condition.optionIndex].policies;
            if (!triggerPolicies.every(p => conditionAnswers.includes(p))) allMet = false;
          } else { allMet = false; }
        });
        if (allMet) cd.targets.forEach(t => disabled.add(t));
      }
    }
  });
  return disabled;
}

// Match user policies against historical figures
function matchHistoricalFigures(userPolicies) {
  if (typeof historicalFigures === 'undefined' || historicalFigures.length === 0) return [];
  const matches = [];
  historicalFigures.forEach(figure => {
    let agreements = 0, disagreements = 0, totalCompared = 0;
    const keyAgreements = [], keyDisagreements = [];
    Object.entries(figure.policies).forEach(([policy, figureValue]) => {
      if (figureValue === null) return;
      const userHasPolicy = userPolicies.has(policy);
      if (figureValue === false && !userHasPolicy) return; // Both oppose — skip
      totalCompared++;
      if (figureValue === true && userHasPolicy) {
        agreements++;
        if (keyAgreements.length < 5) keyAgreements.push(policy);
      } else {
        disagreements++;
        if (keyDisagreements.length < 5 && figureValue === true) keyDisagreements.push(policy);
      }
    });
    const similarity = totalCompared > 0 ? (agreements / totalCompared) * 100 : 0;
    if (similarity > 0) {
      matches.push({ figure, similarity, agreements, disagreements, totalCompared, keyAgreements, keyDisagreements });
    }
  });
  matches.sort((a, b) => b.similarity - a.similarity);
  return matches;
}

// Get figure count from settings
function getFigureCount(matches) {
  const settings = JSON.parse(localStorage.getItem('politicalSpectrumSettings') || '{}');
  let figureCount = settings.historicalFigureCount || 5;
  if (figureCount === 'all') { figureCount = matches.length; }
  else { figureCount = Math.min(parseInt(figureCount), matches.length); }
  return figureCount;
}

// Build category-level breakdown HTML for a figure
function buildCategoryBreakdownHTML(figure, userPolicies) {
  const categoryStats = {};
  ['Governance', 'Economy', 'World', 'Culture & Social Issues'].forEach(cat => {
    categoryStats[cat] = { agreements: 0, total: 0 };
  });
  Object.entries(figure.policies).forEach(([policy, figureValue]) => {
    if (figureValue === null) return;
    const policyData = policiesDB[policy];
    if (!policyData) return;
    const cat = policyData.category;
    if (!categoryStats[cat]) return;
    const userHasPolicy = userPolicies.has(policy);
    if (figureValue === false && !userHasPolicy) return;
    categoryStats[cat].total++;
    if (figureValue === true && userHasPolicy) categoryStats[cat].agreements++;
  });
  const catDisplayNames = { 'Governance': 'Governance', 'Economy': 'Economy', 'World': 'Foreign', 'Culture & Social Issues': 'Social' };
  const catColors = { 'Governance': 'var(--cat-governance)', 'Economy': 'var(--cat-economy)', 'World': 'var(--cat-world)', 'Culture & Social Issues': 'var(--cat-culture)' };
  let html = '<div style="margin: 15px 0;"><div style="margin-top: 10px; font-size: 0.9em;">';
  ['Governance', 'Economy', 'World', 'Culture & Social Issues'].forEach(cat => {
    const stats = categoryStats[cat];
    const percentage = stats.total > 0 ? (stats.agreements / stats.total * 100).toFixed(0) : 0;
    const color = catColors[cat];
    html += '<div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center; padding: 6px 10px; background: var(--card-bg); border-left: 3px solid ' + color + ';">';
    html += '<span style="font-weight: 600; color: ' + color + ';">' + catDisplayNames[cat] + '</span>';
    html += '<span style="font-weight: 700; font-size: 1.1em; color: ' + (percentage >= 70 ? 'var(--cat-economy)' : percentage >= 50 ? 'var(--text)' : 'var(--accent)') + ';">' + percentage + '%</span>';
    html += '</div>';
  });
  html += '</div></div>';
  return html;
}

// Build historical figures section HTML
function buildHistoricalFiguresHTML(matches, userPolicies, onchangeFunc) {
  if (matches.length === 0) return '';
  const figureCount = getFigureCount(matches);
  const topMatches = matches.slice(0, figureCount);
  if (topMatches.length === 0) return '';

  let html = '<div class="results-category" style="margin-bottom: 35px; border: 1px solid var(--border-light); background: var(--card-bg);">';
  html += '<div class="results-category-header" style="background: var(--text); color: var(--bg);">Historical Figure Matches</div>';
  html += '<div class="results-category-body" style="padding: 20px;">';

  html += '<div style="margin-bottom: 20px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 3px;">';
  html += '<p style="margin: 0; font-size: 0.9em; line-height: 1.5; color: #856404;">';
  html += '<strong>⚠️ Note:</strong> This feature is still in progress and should not be taken too seriously. The historical figure profiles likely contain many errors and oversimplisations — mapping complex thinkers onto 621 fixed policy options inevitably distorts their views. The matching algorithm is experimental and results are indicative at best.';
  html += '</p></div>';

  // Figure count selector
  html += '<div style="margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">';
  html += '<label style="font-size: 0.9em; color: var(--text-light); font-weight: 600;">Show:</label>';
  html += '<select id="historical-figure-count" onchange="' + onchangeFunc + '" style="font-family: \'Source Serif 4\', Georgia, serif; font-size: 0.9em; padding: 6px 12px; border: 2px solid var(--border-light); background: var(--card-bg); color: var(--text); cursor: pointer; border-radius: 3px;">';
  html += '<option value="1"' + (figureCount === 1 ? ' selected' : '') + '>1 figure</option>';
  html += '<option value="3"' + (figureCount === 3 ? ' selected' : '') + '>3 figures</option>';
  html += '<option value="5"' + (figureCount === 5 ? ' selected' : '') + '>5 figures</option>';
  html += '<option value="10"' + (figureCount === 10 ? ' selected' : '') + '>10 figures</option>';
  html += '<option value="20"' + (figureCount === 20 ? ' selected' : '') + '>20 figures</option>';
  html += '<option value="all"' + (figureCount === matches.length ? ' selected' : '') + '>All (' + matches.length + ')</option>';
  html += '</select></div>';

  topMatches.forEach(match => {
    const f = match.figure;
    const isControversial = f.id.includes('hitler') || f.id.includes('stalin');
    html += '<div style="margin-bottom: 25px; padding: 15px; border: 2px solid var(--border-light); background: var(--bg);">';
    html += '<div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">';
    html += '<div>';
    html += '<h3 style="font-family: \'Playfair Display\', Georgia, serif; font-size: 1.3em; font-weight: 700; margin: 0;">' + f.name + '</h3>';
    html += '<p style="font-size: 0.9em; color: var(--text-light); margin: 5px 0 0 0;">' + f.era + ' · ' + f.nationality + '</p>';
    html += '</div>';
    html += '<div style="text-align: right;">';
    html += '<div style="font-size: 1.8em; font-weight: 700; color: var(--accent); font-family: \'Playfair Display\', Georgia, serif;">' + match.similarity.toFixed(1) + '%</div>';
    html += '<div style="font-size: 0.75em; color: var(--text-light);">similarity</div>';
    html += '</div></div>';
    html += '<p style="margin: 10px 0; line-height: 1.6;">' + f.description + '</p>';
    html += '<p style="margin: 10px 0; font-size: 0.9em; color: var(--text-light);"><strong>Ideology:</strong> ' + f.ideology + '</p>';

    if (isControversial) {
      html += '<div style="margin: 15px 0; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 3px;">';
      html += '<p style="margin: 0; font-size: 0.9em; line-height: 1.5; color: #856404;">';
      html += '<strong>⚠️ Important:</strong> This match is based purely on policy positions and does not reflect endorsement of this figure\'s actions, including atrocities, human rights violations, or harmful ideologies. Historical context matters.';
      html += '</p></div>';
    }

    html += buildCategoryBreakdownHTML(f, userPolicies);

    html += '<div style="margin-top: 15px; text-align: center;">';
    html += '<button onclick="showComparisonModal(\'' + f.id + '\')" style="padding: 8px 20px; background: var(--accent); color: white; border: none; border-radius: 4px; cursor: pointer; font-family: \'Source Serif 4\', Georgia, serif; font-size: 0.9em; font-weight: 600;">Compare Details</button>';
    html += '</div>';
    html += '<div style="margin-top: 10px; font-size: 0.85em; color: var(--text-light);">';
    html += 'Compared ' + match.totalCompared + ' policies · ' + match.agreements + ' agreements · ' + match.disagreements + ' disagreements';
    html += '</div></div>';
  });

  html += '</div></div>';
  return html;
}

// Show comparison modal (shared between quiz and editor)
function showComparisonModal(figureId) {
  const figure = historicalFigures.find(f => f.id === figureId);
  if (!figure) { alert('Historical figure not found'); return; }

  // Get user policies from the active context
  let userPolicies;
  if (typeof lastUserPolicies !== 'undefined' && lastUserPolicies.size > 0) {
    userPolicies = lastUserPolicies;
  } else if (typeof lastEditorProfile !== 'undefined' && lastEditorProfile) {
    let arr = [];
    Object.values(lastEditorProfile.answers).forEach(p => { if (Array.isArray(p)) arr.push(...p); });
    userPolicies = new Set([...new Set(arr)]);
  } else {
    alert('No user policies available'); return;
  }

  const profileLabel = (typeof lastEditorProfile !== 'undefined' && lastEditorProfile) ? lastEditorProfile.label : 'Your Positions';

  const modal = document.createElement('div');
  modal.id = 'comparison-modal';
  modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10000; overflow-y: auto; padding: 20px;';

  const modalContent = document.createElement('div');
  modalContent.style.cssText = 'max-width: 900px; margin: 20px auto; background: var(--bg); border: 2px solid var(--border); border-radius: 8px; padding: 30px; position: relative;';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = 'position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 2em; cursor: pointer; color: var(--text); font-weight: bold; line-height: 1;';
  closeBtn.onclick = () => document.body.removeChild(modal);
  modalContent.appendChild(closeBtn);

  const header = document.createElement('div');
  header.style.cssText = 'margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid var(--border-light);';
  header.innerHTML = '<h2 style="font-family: \'Playfair Display\', Georgia, serif; font-size: 1.8em; margin: 0 0 10px 0;">Policy Comparison</h2>' +
    '<p style="font-size: 1.1em; color: var(--text-light); margin: 0;"><strong>' + figure.name + '</strong> (' + figure.era + ') vs. ' + profileLabel + '</p>';
  modalContent.appendChild(header);

  const categories = ['Governance', 'Economy', 'World', 'Culture & Social Issues'];
  const catColors = { 'Governance': 'var(--cat-governance)', 'Economy': 'var(--cat-economy)', 'World': 'var(--cat-world)', 'Culture & Social Issues': 'var(--cat-culture)' };

  categories.forEach(category => {
    const catDiv = document.createElement('div');
    catDiv.style.cssText = 'margin-bottom: 25px;';
    const catHeader = document.createElement('h3');
    catHeader.style.cssText = 'font-family: \'Playfair Display\', Georgia, serif; font-size: 1.3em; color: ' + catColors[category] + '; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid var(--border-light);';
    catHeader.textContent = category;
    catDiv.appendChild(catHeader);

    const subcategories = {};
    Object.entries(figure.policies).forEach(([policy, figureValue]) => {
      if (figureValue === null) return;
      const policyData = policiesDB[policy];
      if (!policyData || policyData.category !== category) return;
      if (figureValue === false && !userPolicies.has(policy)) return; // Both oppose — skip
      const subcat = policyData.subcategory;
      if (!subcategories[subcat]) subcategories[subcat] = [];
      subcategories[subcat].push({ policy, figureValue });
    });

    const subcatOrder = ["Governance Principle","Centralization","Distribution of Power","Head of State & Head of Government","Executive and Legislative Structure","Church and State","Bureaucracy","Army Model","Policing","Internal Security","Judiciary","Justice","Citizenship","Ownership","Contracts","Regulation","Workplace Hierarchy","Workers' Rights and Associations","Banking","Agriculture","Intellectual Property","Healthcare","Taxation","Scale","International Cooperation","Immigration","Economic globalization","War Policy","Education","Gender equality, family & sex","Ethnicities and Cultures","Caste and Estate System","Media and Speech","Forced Labor","Technology"];
    Object.keys(subcategories).sort((a, b) => {
      const ai = subcatOrder.indexOf(a);
      const bi = subcatOrder.indexOf(b);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    }).forEach(subcat => {
      const subcatDiv = document.createElement('div');
      subcatDiv.style.cssText = 'margin-bottom: 20px; margin-left: 15px;';
      const subcatHeader = document.createElement('h4');
      subcatHeader.style.cssText = 'font-size: 1.05em; font-weight: 600; margin: 0 0 10px 0;';
      subcatHeader.textContent = subcat;
      subcatDiv.appendChild(subcatHeader);
      const policyList = document.createElement('div');
      policyList.style.cssText = 'margin-left: 15px;';

      subcategories[subcat].forEach(({ policy, figureValue }) => {
        const userHasPolicy = userPolicies.has(policy);
        let agreement = false;
        if (figureValue === true && userHasPolicy) agreement = true;
        const policyDiv = document.createElement('div');
        policyDiv.style.cssText = 'margin-bottom: 8px; padding: 8px; background: var(--card-bg); border-left: 3px solid ' + (agreement ? 'var(--cat-economy)' : 'var(--accent)') + ';';
        const policyName = document.createElement('div');
        policyName.style.cssText = 'font-weight: 600; font-size: 0.95em; margin-bottom: 4px;';
        policyName.textContent = policy;
        policyDiv.appendChild(policyName);
        const comparison = document.createElement('div');
        comparison.style.cssText = 'font-size: 0.85em; color: var(--text-light);';
        const figurePosition = figureValue ? 'Supported' : 'Opposed';
        const userPosition = userHasPolicy ? 'Supported' : 'Opposed';
        const agreementText = agreement ? '✓ Agreement' : '✗ Disagreement';
        const agreementColor = agreement ? 'var(--cat-economy)' : 'var(--accent)';
        comparison.innerHTML = '<span style="color: ' + agreementColor + '; font-weight: 600;">' + agreementText + '</span> · ' + figure.name + ': ' + figurePosition + ' · You: ' + userPosition;
        policyDiv.appendChild(comparison);
        policyList.appendChild(policyDiv);
      });

      subcatDiv.appendChild(policyList);
      catDiv.appendChild(subcatDiv);
    });
    modalContent.appendChild(catDiv);
  });

  const footer = document.createElement('div');
  footer.style.cssText = 'margin-top: 20px; padding-top: 15px; border-top: 2px solid var(--border-light); text-align: center;';
  footer.innerHTML = '<p style="font-size: 0.85em; color: var(--text-light); font-style: italic;">This comparison shows policy positions, not moral character or historical context.</p>' +
    '<button onclick="document.body.removeChild(document.getElementById(\'comparison-modal\'))" style="margin-top: 10px; padding: 10px 30px; background: var(--border); color: var(--bg); border: none; border-radius: 4px; cursor: pointer; font-family: \'Playfair Display\', Georgia, serif; font-size: 1em; font-weight: 600;">Close</button>';
  modalContent.appendChild(footer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.onclick = (e) => { if (e.target === modal) document.body.removeChild(modal); };
  const escHandler = (e) => { if (e.key === 'Escape' && document.body.contains(modal)) { document.body.removeChild(modal); document.removeEventListener('keydown', escHandler); } };
  document.addEventListener('keydown', escHandler);
}

// Build compact results HTML for image rendering
function buildCompactResultsHTML(grouped, profileLabel) {
  const catOrder = ["Governance", "Economy", "World", "Culture & Social Issues"];
  const catCss = { "Governance": "cr-cat-gov", "Economy": "cr-cat-eco", "World": "cr-cat-wor", "Culture & Social Issues": "cr-cat-cul" };
  let html = '<div class="cr-header"><h1>What You Stand For</h1><p>' + (profileLabel || 'Your Ideological Profile') + '</p></div><div class="cr-columns">';
  catOrder.forEach(cat => {
    const data = grouped[cat] || {};
    const subs = Object.keys(data);
    html += '<div class="cr-category ' + catCss[cat] + '"><div class="cr-category-header">' + cat + '</div><div class="cr-category-body">';
    if (subs.length === 0) { html += '<div class="cr-empty">No policies selected</div>'; }
    else { subs.forEach(sub => {
      html += '<div class="cr-sub"><div class="cr-sub-title">' + sub + '</div>';
      const prefixGrouped = {};
      const noPrefix = [];
      data[sub].forEach(p => {
        const colonIndex = p.key.indexOf(':');
        if (colonIndex > 0) {
          const prefix = p.key.substring(0, colonIndex);
          const value = p.key.substring(colonIndex + 1).trim();
          if (!prefixGrouped[prefix]) prefixGrouped[prefix] = [];
          prefixGrouped[prefix].push(value);
        } else { noPrefix.push(p.key); }
      });
      Object.keys(prefixGrouped).forEach(prefix => {
        html += '<div class="cr-policy">' + prefix + ': ' + prefixGrouped[prefix].join(', ') + '</div>';
      });
      noPrefix.forEach(key => { html += '<div class="cr-policy">' + key + '</div>'; });
      html += '</div>';
    }); }
    html += '</div></div>';
  });
  html += '</div><div class="cr-footer">What You Stand For — A Detailed Policy Assessment</div>';
  return html;
}

// Apply theme to compact results element
function applyThemeToCompact(el, themeName) {
  if (!el) return;
  if (themeName === 'current') {
    const cs = getComputedStyle(document.documentElement);
    el.style.background = cs.getPropertyValue('--bg').trim();
    el.style.color = cs.getPropertyValue('--text').trim();
    el.querySelectorAll('.cr-category-header').forEach(h => h.style.background = '');
    el.querySelectorAll('.cr-category').forEach(c => {
      if (c.classList.contains('cr-cat-gov')) c.querySelector('.cr-category-header').style.background = cs.getPropertyValue('--cat-governance').trim();
      if (c.classList.contains('cr-cat-eco')) c.querySelector('.cr-category-header').style.background = cs.getPropertyValue('--cat-economy').trim();
      if (c.classList.contains('cr-cat-wor')) c.querySelector('.cr-category-header').style.background = cs.getPropertyValue('--cat-world').trim();
      if (c.classList.contains('cr-cat-cul')) c.querySelector('.cr-category-header').style.background = cs.getPropertyValue('--cat-culture').trim();
    });
    el.querySelector('.cr-header').style.borderTopColor = cs.getPropertyValue('--border').trim();
    el.querySelector('.cr-header').style.borderBottomColor = cs.getPropertyValue('--border').trim();
    el.querySelectorAll('.cr-category-body').forEach(b => { b.style.background = cs.getPropertyValue('--card-bg').trim(); b.style.borderColor = cs.getPropertyValue('--border-light').trim(); });
    el.querySelectorAll('.cr-sub-title').forEach(t => { t.style.color = cs.getPropertyValue('--text').trim(); t.style.borderBottomColor = cs.getPropertyValue('--border-light').trim(); });
    el.querySelectorAll('.cr-policy').forEach(p => p.style.color = cs.getPropertyValue('--text-light').trim());
    el.querySelectorAll('.cr-empty').forEach(p => p.style.color = cs.getPropertyValue('--text-light').trim());
    el.querySelector('.cr-footer').style.borderTopColor = cs.getPropertyValue('--border').trim();
    el.querySelector('.cr-footer').style.color = cs.getPropertyValue('--text-light').trim();
    if (el.querySelector('.cr-header p')) el.querySelector('.cr-header p').style.color = cs.getPropertyValue('--text-light').trim();
    return;
  }
  const themes = {
    sepia: { bg:'#f5f0e8', text:'#1a1a1a', textLight:'#4a4a4a', accent:'#8b0000', border:'#2a2a2a', borderLight:'#c0b8a8', cardBg:'#faf8f4', gov:'#1a3a5c', eco:'#2d5016', wor:'#5c3a1a', cul:'#4a1a5c' },
    dark: { bg:'#1a1215', text:'#e8e0d8', textLight:'#a09890', accent:'#c0392b', border:'#4a2a30', borderLight:'#4a3a3e', cardBg:'#2a1e22', gov:'#4a7ab0', eco:'#5a9a3a', wor:'#b07a3a', cul:'#9a5ab0' },
    cold: { bg:'#e8ecf0', text:'#1a2030', textLight:'#4a5568', accent:'#2c5282', border:'#2d3748', borderLight:'#a0aec0', cardBg:'#f0f4f8', gov:'#2c5282', eco:'#2a6b3a', wor:'#7a5a2a', cul:'#5a3a7a' },
    ink: { bg:'#fafaf5', text:'#111111', textLight:'#555555', accent:'#000000', border:'#111111', borderLight:'#cccccc', cardBg:'#ffffff', gov:'#003366', eco:'#006633', wor:'#663300', cul:'#660033' },
    rosewood: { bg:'#f5ebe0', text:'#2a1a1e', textLight:'#6b4a52', accent:'#6b3a4a', border:'#3a2228', borderLight:'#c8a8b0', cardBg:'#faf2ee', gov:'#3a4a6b', eco:'#3a6b3a', wor:'#6b4a2a', cul:'#6b2a5a' },
    lavender: { bg:'#f0eaf5', text:'#2a2535', textLight:'#5a5068', accent:'#8e7aa0', border:'#2a2535', borderLight:'#b8a8c8', cardBg:'#f8f4fa', gov:'#3a5a8c', eco:'#3a6a2a', wor:'#7a4a1a', cul:'#6a3a8c' },
    telegraph: { bg:'#d9cdb4', text:'#2a2e24', textLight:'#5c6b4f', accent:'#5c6b4f', border:'#2a2e24', borderLight:'#a89e88', cardBg:'#e4dac4', gov:'#3a5a3a', eco:'#4a6a2a', wor:'#6a5a2a', cul:'#5a3a5a' },
    forest: { bg:'#f0ead6', text:'#1a2e24', textLight:'#4a6a5a', accent:'#2d4a3e', border:'#1a2e24', borderLight:'#b0c4a8', cardBg:'#f5f0e0', gov:'#1a4a5c', eco:'#2d6b16', wor:'#5c4a1a', cul:'#4a1a4a' },
    sandstone: { bg:'#d4c5a9', text:'#2e1f0f', textLight:'#6a5a3a', accent:'#8b4513', border:'#2e1f0f', borderLight:'#b0a080', cardBg:'#e0d4b8', gov:'#4a3a6b', eco:'#4a6b2a', wor:'#8b4513', cul:'#6b2a4a' }
  };
  const t = themes[themeName];
  if (!t) return;
  el.style.background = t.bg;
  el.style.color = t.text;
  el.querySelector('.cr-header').style.borderTopColor = t.border;
  el.querySelector('.cr-header').style.borderBottomColor = t.border;
  if (el.querySelector('.cr-header p')) el.querySelector('.cr-header p').style.color = t.textLight;
  el.querySelectorAll('.cr-category-body').forEach(b => { b.style.background = t.cardBg; b.style.borderColor = t.borderLight; });
  el.querySelectorAll('.cr-sub-title').forEach(st => { st.style.color = t.text; st.style.borderBottomColor = t.borderLight; });
  el.querySelectorAll('.cr-policy').forEach(p => p.style.color = t.textLight);
  el.querySelectorAll('.cr-empty').forEach(p => p.style.color = t.textLight);
  el.querySelector('.cr-footer').style.borderTopColor = t.border;
  el.querySelector('.cr-footer').style.color = t.textLight;
  el.querySelectorAll('.cr-category').forEach(c => {
    const h = c.querySelector('.cr-category-header');
    if (c.classList.contains('cr-cat-gov')) h.style.background = t.gov;
    if (c.classList.contains('cr-cat-eco')) h.style.background = t.eco;
    if (c.classList.contains('cr-cat-wor')) h.style.background = t.wor;
    if (c.classList.contains('cr-cat-cul')) h.style.background = t.cul;
  });
}

// Render compact results image using html2canvas
function renderCompactImage(el, scale, downloadName) {
  return new Promise((resolve, reject) => {
    if (typeof html2canvas === 'undefined') { reject('html2canvas not loaded'); return; }
    html2canvas(el, { scale: scale || 2, backgroundColor: el.style.background || '#f5f0e8', useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      resolve({ imgData, downloadName: downloadName || 'political-spectrum-results.png' });
    }).catch(reject);
  });
}
