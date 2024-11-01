import React, { useState } from 'react';

interface DocumentGroup {
  title: string;
  documents: string[];
}

export const TaxDocumentChecklist: React.FC<{ type: 'business' | 'salaried' }> = ({ type }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const documentGroups: DocumentGroup[] = type === 'salaried' ? [
    {
      title: 'Income Documents',
      documents: [
        'Form 16 from employer',
        'Form 16A for TDS deductions',
        'Salary slips',
        'Bank statements'
      ]
    },
    {
      title: 'Investment Proofs',
      documents: [
        'PPF statement',
        'Insurance premium receipts',
        'Mutual fund statements',
        'Fixed deposit certificates'
      ]
    }
  ] : [
    {
      title: 'Business Documents',
      documents: [
        'Balance Sheet',
        'Profit & Loss Statement',
        'GST returns',
        'Bank statements'
      ]
    },
    {
      title: 'Expense Proofs',
      documents: [
        'Rent receipts',
        'Utility bills',
        'Asset purchase invoices',
        'Employee salary records'
      ]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">Document Checklist</h3>
      <div className="space-y-6">
        {documentGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="font-medium text-gray-900 mb-3">{group.title}</h4>
            <div className="space-y-2">
              {group.documents.map((doc, docIndex) => (
                <label key={docIndex} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={checkedItems[`${groupIndex}-${docIndex}`] || false}
                    onChange={(e) => setCheckedItems(prev => ({
                      ...prev,
                      [`${groupIndex}-${docIndex}`]: e.target.checked
                    }))}
                  />
                  <span className="text-gray-700">{doc}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 