import React from 'react';

interface RecommendationPanelProps {
  income: number;
  investments: Array<{
    type: string;
    amount: number;
    maxLimit: number;
  }>;
  regime: 'old' | 'new';
}

export const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  income,
  investments,
  regime
}) => {
  const getRecommendations = () => {
    if (regime === 'new') {
      return [{
        title: 'New Tax Regime Notice',
        items: [
          'Most deductions are not available in the new regime',
          'Consider switching to old regime if you have significant investments',
          'Standard deduction of ₹50,000 is automatically applied'
        ]
      }];
    }

    const recommendations = [];
    const unusedLimits = investments.map(inv => ({
      type: inv.type,
      remaining: inv.maxLimit - inv.amount
    })).filter(item => item.remaining > 0);

    if (unusedLimits.length > 0) {
      recommendations.push({
        title: 'Investment Opportunities',
        items: unusedLimits.map(item => 
          `Invest ₹${item.remaining.toLocaleString()} more in ${item.type} to maximize benefits`
        )
      });
    }

    return recommendations;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <div className="space-y-6">
        {getRecommendations().map((section, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 