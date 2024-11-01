import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InvestmentCard } from './InvestmentCard';
import { SavingsChart } from './SavingsChart';
import { RecommendationPanel } from './RecommendationPanel';

interface Investment {
  type: string;
  amount: number;
  maxLimit: number;
  section: string;
  description: string;
}

export const TaxSimulator: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [regime, setRegime] = useState<'old' | 'new'>('old');
  const [investments, setInvestments] = useState<Investment[]>([
    {
      type: 'PPF',
      amount: 0,
      maxLimit: 150000,
      section: '80C',
      description: 'Public Provident Fund'
    },
    {
      type: 'ELSS',
      amount: 0,
      maxLimit: 150000,
      section: '80C',
      description: 'Equity Linked Savings Scheme'
    }
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Tax Simulator
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Plan and optimize your tax savings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Income Details</h2>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your annual income"
              />
              <div className="flex gap-4">
                <button
                  onClick={() => setRegime('old')}
                  className={`flex-1 py-2 rounded-lg ${
                    regime === 'old' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Old Regime
                </button>
                <button
                  onClick={() => setRegime('new')}
                  className={`flex-1 py-2 rounded-lg ${
                    regime === 'new' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  New Regime
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Investment Simulator</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investments.map((investment, index) => (
                  <InvestmentCard
                    key={investment.type}
                    investment={investment}
                    onChange={(amount) => {
                      const newInvestments = [...investments];
                      newInvestments[index].amount = amount;
                      setInvestments(newInvestments);
                    }}
                  />
                ))}
              </div>
            </div>

            <SavingsChart
              income={income}
              investments={investments}
              regime={regime}
            />
          </div>

          <div>
            <RecommendationPanel
              income={income}
              investments={investments}
              regime={regime}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 