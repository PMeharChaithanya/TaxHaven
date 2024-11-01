import React from 'react';

interface Investment {
  type: string;
  amount: number | '';
  maxLimit: number;
  section: string;
  description: string;
}

interface InvestmentCardProps {
  investment: Investment;
  onChange: (amount: number | '') => void;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ investment, onChange }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900">{investment.type}</h3>
          <p className="text-sm text-gray-600">{investment.description}</p>
        </div>
        
        <div>
          <label className="text-sm text-gray-600">Amount (Max: ₹{investment.maxLimit.toLocaleString()})</label>
          <input
            type="number"
            value={investment.amount}
            onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
            max={investment.maxLimit}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        
        <div className="text-sm text-gray-600">
          Section: {investment.section}
        </div>
      </div>
    </div>
  );
}; 