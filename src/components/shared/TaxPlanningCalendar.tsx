import React from 'react';

interface TaxDeadline {
  date: string;
  title: string;
  description: string;
  category: 'payment' | 'filing' | 'investment';
}

export const TaxPlanningCalendar: React.FC = () => {
  const deadlines: TaxDeadline[] = [
    {
      date: 'March 31, 2025',
      title: 'Last date for tax-saving investments',
      description: 'Deadline for all Section 80C investments for FY 2024-25',
      category: 'investment'
    },
    {
      date: 'July 31, 2025',
      title: 'ITR Filing - No audit cases',
      description: 'Last date for filing Income Tax Return for non-audit cases',
      category: 'filing'
    },
    {
      date: 'September 30, 2025',
      title: 'ITR Filing - Audit cases',
      description: 'Last date for filing Income Tax Return for audit cases',
      category: 'filing'
    },
    {
      date: 'June 15, 2024',
      title: 'Advance Tax - First Installment',
      description: '15% of total advance tax due',
      category: 'payment'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">Tax Planning Calendar</h3>
      <div className="space-y-4">
        {deadlines.map((deadline, index) => (
          <div key={index} className={`p-4 rounded-lg border-l-4 
            ${deadline.category === 'payment' ? 'border-red-500 bg-red-50' : 
              deadline.category === 'filing' ? 'border-blue-500 bg-blue-50' : 
              'border-green-500 bg-green-50'}`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{deadline.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{deadline.description}</p>
              </div>
              <span className="text-sm font-medium text-gray-500">{deadline.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 