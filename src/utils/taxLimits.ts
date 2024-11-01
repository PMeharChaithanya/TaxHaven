export const SALARIED_LIMITS = {
  section80C: {
    limit: 150000,
    items: [
      { name: 'PPF', limit: 150000 },
      { name: 'ELSS', limit: 150000 },
      { name: 'Life Insurance Premium', limit: 150000 },
      { name: 'EPF Contribution', limit: 150000 },
      { name: 'NSC', limit: 150000 },
      { name: 'Tax Saving FD (5 years)', limit: 150000 },
      { name: 'Children Tuition Fees', limit: 150000 }
    ]
  },
  section80D: {
    self: 25000,
    parents: {
      below60: 25000,
      above60: 50000
    },
    preventiveHealth: 5000
  },
  section80CCD: {
    nps: {
      basic: 150000, // Part of 80C
      additional: 50000 // Extra under 80CCD(1B)
    }
  },
  hra: {
    metro: {
      percentage: 50, // 50% of basic for metro cities
      nonMetro: 40 // 40% for non-metro cities
    }
  },
  lta: {
    frequency: '2 journeys in 4 years',
    mode: 'Economy airfare or first-class rail fare'
  },
  section24: {
    homeLoanInterest: 200000
  },
  section80EE: {
    firstTimeHomeLoan: 150000
  },
  section80G: {
    limit: '100% or 50% depending on donation type'
  }
};

export const BUSINESS_LIMITS = {
  depreciation: {
    computers: 40,
    furniture: 10,
    buildings: 10,
    plant: 15,
    vehicles: 15
  },
  section44AD: {
    turnover: 20000000,
    presumptiveTaxRate: {
      digital: 6,
      cash: 8
    }
  },
  section44ADA: {
    professionals: {
      turnover: 5000000,
      presumptiveTaxRate: 50
    }
  },
  gst: {
    registration: 2000000
  }
}; 