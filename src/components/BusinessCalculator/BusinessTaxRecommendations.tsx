import React from 'react';

interface BusinessTaxRecommendationsProps {
  businessType: string;
  income: number;
}

export const BusinessTaxRecommendations: React.FC<BusinessTaxRecommendationsProps> = ({ 
  businessType, 
  income 
}) => {
  const getBusinessDeductions = () => {
    const commonDeductions = [
      {
        title: 'Operating Expenses',
        items: [
          'Rent for business premises',
          'Utilities (electricity, water, internet)',
          'Office supplies and stationery',
          'Equipment maintenance and repairs',
          'Insurance premiums',
          'Professional memberships and subscriptions'
        ]
      },
      {
        title: 'Employee Related',
        items: [
          'Salary and wages',
          'Employee benefits and perks',
          'Staff welfare expenses',
          'Training and development costs',
          'Employee insurance and medical benefits'
        ]
      },
      {
        title: 'Capital Expenses',
        items: [
          'Depreciation on assets',
          'Interest on business loans',
          'Equipment and machinery purchases',
          'Renovation and improvement costs'
        ]
      },
      {
        title: 'Marketing & Professional',
        items: [
          'Advertising and marketing expenses',
          'Website development and maintenance',
          'Professional fees (legal, accounting)',
          'Commission to agents',
          'Business promotion expenses'
        ]
      },
      {
        title: 'Travel & Vehicle',
        items: [
          'Business travel expenses',
          'Vehicle maintenance and fuel',
          'Conveyance expenses',
          'Foreign travel for business purposes'
        ]
      }
    ];

    // Additional deductions based on business type
    if (businessType === 'Manufacturing') {
      commonDeductions.push({
        title: 'Manufacturing Specific',
        items: [
          'Raw material costs',
          'Factory rent and maintenance',
          'Production equipment depreciation',
          'Quality control expenses',
          'Warehouse costs'
        ]
      });
    }

    return commonDeductions;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md mt-12">
      <h3 className="text-2xl font-semibold mb-8">Tax Saving Recommendations</h3>
      <div className="space-y-8">
        {getBusinessDeductions().map((section, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-medium text-blue-800 mb-4 text-lg">{section.title}</h4>
            <ul className="list-disc list-inside space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 ml-6">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 