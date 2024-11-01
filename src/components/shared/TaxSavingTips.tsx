import React from 'react';

interface TaxSavingTipsProps {
  income: number;
  regime: 'old' | 'new';
}

export const TaxSavingTips: React.FC<TaxSavingTipsProps> = ({ income, regime }) => {
  const getTaxSavingTips = () => {
    const tips = [
      {
        title: 'Section 80C Investments',
        items: [
          'PPF - Public Provident Fund (Max ₹1.5L)',
          'ELSS Mutual Funds',
          'Life Insurance Premium',
          'NPS Tier 1 Account (Additional ₹50,000 under 80CCD)',
        ]
      },
      {
        title: 'Health Related Deductions',
        items: [
          'Medical Insurance Premium (Section 80D)',
          'Preventive Health Checkup (₹5,000)',
        ]
      },
      {
        title: 'Other Deductions',
        items: [
          'Home Loan Interest (Section 24)',
          'Education Loan Interest (Section 80E)',
          'Donations (Section 80G)',
        ]
      }
    ];
    return regime === 'old' ? tips : [];
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Tax Saving Recommendations</h3>
      {regime === 'new' ? (
        <p className="text-gray-600">Tax saving deductions are not applicable in the new tax regime.</p>
      ) : (
        <div className="space-y-4">
          {getTaxSavingTips().map((section, index) => (
            <div key={index}>
              <h4 className="font-medium text-blue-800 mb-2">{section.title}</h4>
              <ul className="list-disc list-inside space-y-1">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 