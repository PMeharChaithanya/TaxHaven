import React from 'react';
import { calculateTaxForOldRegime, calculateTaxForNewRegime } from '../../utils/taxCalculator';

interface RegimeComparisonProps {
  income: number;
  deductions: Record<string, number>;
}

export const RegimeComparison: React.FC<RegimeComparisonProps> = ({ income, deductions }) => {
  const oldRegimeTax = calculateTaxForOldRegime(income, deductions);
  const newRegimeTax = calculateTaxForNewRegime(income);

  const betterRegime = oldRegimeTax.totalTax < newRegimeTax.totalTax ? 'old' : 'new';
  const savings = Math.abs(oldRegimeTax.totalTax - newRegimeTax.totalTax);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Tax Regime Comparison</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="font-medium">Old Regime</h4>
          <p className="text-2xl font-bold">₹{oldRegimeTax.totalTax.toLocaleString()}</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">New Regime</h4>
          <p className="text-2xl font-bold">₹{newRegimeTax.totalTax.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <p className="text-green-800">
          The {betterRegime} regime is better for you by ₹{savings.toLocaleString()}
        </p>
      </div>
    </div>
  );
}; 