import React from 'react';

interface SalariedTaxRecommendationsProps {
  regime: 'old' | 'new';
  income: number;
}

export const SalariedTaxRecommendations: React.FC<SalariedTaxRecommendationsProps> = ({ 
  regime}) => {
  const getSalariedDeductions = () => {
    if (regime === 'new') {
      return [{
        title: 'New Tax Regime Notice',
        items: [
          'Under the new tax regime, most deductions are not available',
          'Standard deduction of ₹50,000 is automatically applied',
          'Consider switching to old regime if you have significant investments or loans'
        ]
      }];
    }

    return [
      {
        title: 'Section 80C Investments (Max ₹1.5L)',
        items: [
          'PPF (Public Provident Fund)',
          'ELSS Mutual Funds',
          'Life Insurance Premium',
          '5-year Tax Saving FD',
          'NSC (National Savings Certificate)',
          'Sukanya Samriddhi Account',
          'Employee PF contribution',
          'Principal repayment of home loan',
          'Tuition fees for children'
        ]
      },
      {
        title: 'Section 80D Health Benefits',
        items: [
          'Medical Insurance Premium (Self & Family) - Up to ₹25,000',
          'Parents Medical Insurance - Additional ₹25,000',
          'Senior Citizen Parents - Up to ₹50,000',
          'Preventive Health Checkup - ₹5,000 within limit'
        ]
      },
      {
        title: 'House Property Benefits',
        items: [
          'HRA Exemption if living in rented house',
          'Home Loan Interest - Up to ₹2L (Section 24)',
          'Additional ₹1.5L for first-time buyers (Section 80EE)',
          'Property Tax deduction'
        ]
      },
      {
        title: 'Additional Deductions',
        items: [
          'NPS Contribution - Additional ₹50,000 (Sec 80CCD)',
          'Education Loan Interest (Section 80E) - No limit',
          'Savings Account Interest - Up to ₹10,000 (Sec 80TTA)',
          'Donations to Approved Funds (Section 80G)',
          'Interest on Electric Vehicle Loan (Sec 80EEB) - Up to ₹1.5L'
        ]
      },
      {
        title: 'Special Allowances & Exemptions',
        items: [
          'Leave Travel Allowance (LTA)',
          'Children Education Allowance - ₹100/child/month',
          'Hostel Allowance - ₹100/month',
          'Interest on Home Loan (Section 80EE) - Up to ₹2L',
          'Interest on Electric Vehicle Loan (Sec 80EEB) - Up to ₹1.5L'
        ]
      }
    ];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">Tax Saving Recommendations</h3>
      <div className="space-y-6">
        {getSalariedDeductions().map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-3">{section.title}</h4>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 ml-4">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 