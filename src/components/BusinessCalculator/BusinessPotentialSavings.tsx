import React from 'react';
import { BUSINESS_LIMITS } from '../../utils/taxLimits';

interface BusinessPotentialSavingsProps {
  businessType: string;
  turnover: number;
  currentDeductions: Record<string, number>;
}

export const BusinessPotentialSavings: React.FC<BusinessPotentialSavingsProps> = ({
  businessType,
  turnover,
  currentDeductions
}) => {
  const getPotentialDeductions = () => {
    const deductions = [
      {
        category: 'Depreciation Benefits',
        items: [
          {
            name: 'Computers & Software',
            rate: BUSINESS_LIMITS.depreciation.computers,
            potential: Math.min(turnover * 0.1, 500000)
          },
          {
            name: 'Plant & Machinery',
            rate: BUSINESS_LIMITS.depreciation.plant,
            potential: Math.min(turnover * 0.2, 1000000)
          }
        ]
      },
      {
        category: 'Business Development',
        items: [
          {
            name: 'Marketing & Advertising',
            potential: Math.min(turnover * 0.05, 200000)
          },
          {
            name: 'Professional Training',
            potential: Math.min(turnover * 0.02, 100000)
          }
        ]
      }
    ];

    if (businessType === 'Manufacturing') {
      deductions.push({
        category: 'Manufacturing Specific',
        items: [
          {
            name: 'R&D Expenses',
            potential: Math.min(turnover * 0.1, 1000000)
          }
        ]
      });
    }

    return deductions;
  };

  const totalPotential = getPotentialDeductions()
    .flatMap(cat => cat.items)
    .reduce((sum, item) => sum + item.potential, 0);

  const potentialTaxSaving = totalPotential * 0.3; // Assuming 30% tax rate

  return (
    <div className="bg-blue-50 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Potential Business Savings</h3>
      
      <div className="space-y-6">
        {getPotentialDeductions().map((category, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-3">{category.category}</h4>
            {category.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">{item.name}</span>
                <span className="font-medium">₹{item.potential.toLocaleString()}</span>
              </div>
            ))}
          </div>
        ))}
        
        <div className="mt-4 p-4 bg-blue-100 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-blue-800">Potential Tax Saving</span>
            <span className="font-bold text-blue-800">₹{potentialTaxSaving.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 