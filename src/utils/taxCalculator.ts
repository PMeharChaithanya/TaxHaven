export const calculateTaxForOldRegime = (income: number, deductions: Record<string, number>) => {
  const totalDeductions = Object.values(deductions).reduce((sum, val) => sum + (val || 0), 0);
  let taxableIncome = income - totalDeductions;
  
  // Tax slabs for old regime
  let tax = 0;
  if (taxableIncome > 1500000) {
    tax += (taxableIncome - 1500000) * 0.3;
    taxableIncome = 1500000;
  }
  if (taxableIncome > 1250000) {
    tax += (taxableIncome - 1250000) * 0.25;
    taxableIncome = 1250000;
  }
  if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.20;
    taxableIncome = 1000000;
  }
  if (taxableIncome > 750000) {
    tax += (taxableIncome - 750000) * 0.15;
    taxableIncome = 750000;
  }
  if (taxableIncome > 500000) {
    tax += (taxableIncome - 500000) * 0.10;
    taxableIncome = 500000;
  }
  if (taxableIncome > 250000) {
    tax += (taxableIncome - 250000) * 0.05;
  }

  // Calculate cess
  const cess = tax * 0.04;
  
  return {
    tax,
    cess,
    totalTax: tax + cess
  };
};

export const calculateTaxForNewRegime = (income: number) => {
  let taxableIncome = income;
  let tax = 0;

  // New regime slabs (FY 2024-25)
  if (taxableIncome > 1500000) {
    tax += (taxableIncome - 1500000) * 0.30;
    taxableIncome = 1500000;
  }
  // Add other slabs...

  const cess = tax * 0.04;
  
  return {
    tax,
    cess,
    totalTax: tax + cess
  };
}; 