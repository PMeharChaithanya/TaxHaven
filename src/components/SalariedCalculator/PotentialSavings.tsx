import React from 'react';
import { SALARIED_LIMITS } from '../../utils/taxLimits';

interface PotentialSavingsProps {
  income: number;
  currentDeductions: Record<string, number>;
  regime: 'old' | 'new';
}

export const PotentialSavings: React.FC<PotentialSavingsProps> = ({
  income,
  currentDeductions,
  regime
}) => {
  if (regime === 'new') {
    return (
      <div className="bg-yellow-50 p-6 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-4">New Regime Notice</h3>
        <p className="text-yellow-800">
          Under the new tax regime, most deductions are not available. Consider switching to the old regime if you have significant investments or loans.
        </p>
      </div>
    );
  }

  const unusedDeductions = {
    section80C: SALARIED_LIMITS.section80C.limit - (currentDeductions.section80C || 0),
    hra: Math.min(income * 0.5, 100000) - (currentDeductions.hra || 0),
    section80D: SALARIED_LIMITS.section80D.self - (currentDeductions.healthInsurance || 0),
    nps: SALARIED_LIMITS.section80CCD.nps.additional
  };

  const potentialTaxSaving = Object.values(unusedDeductions).reduce((sum, val) => sum + val, 0) * 0.3;

  return (
    <div className="bg-green-50 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Potential Tax Savings</h3>
      
      <div className="space-y-4">
        {Object.entries(unusedDeductions).map(([key, value]) => (
          value > 0 && (
            <div key={key} className="flex justify-between items-center py-2 border-b border-green-100">
              <span className="text-green-800">Unused {key}</span>
              <span className="font-medium">₹{value.toLocaleString()}</span>
            </div>
          )
        ))}
        
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-green-800">Potential Tax Saving</span>
            <span className="font-bold text-green-800">₹{potentialTaxSaving.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 