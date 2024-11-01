export interface ContractTemplate {
  questions: string[];
  template: (answers: Record<string, string>) => string;
}

export const CONTRACT_TEMPLATES: Record<string, ContractTemplate> = {
  'rental': {
    questions: [
      "What is the tenant's name?",
      "What is the landlord's name?",
      "What is the property address?",
      "What is the monthly rent amount?",
      "What is the lease duration in months?",
      "What is the security deposit amount?"
    ],
    template: (answers) => `RENTAL AGREEMENT
      
This agreement is made between ${answers[0]} (Tenant) and ${answers[1]} (Landlord)...`
  },
  'employment': {
    questions: [
      "What is the employee's name?",
      "What is the company name?",
      "What is the job title?",
      "What is the annual salary?",
      "What is the start date?",
      "How many days of paid leave per year?"
    ],
    template: (answers) => `EMPLOYMENT CONTRACT...`
  }
  // Add more contract templates as needed
}; 