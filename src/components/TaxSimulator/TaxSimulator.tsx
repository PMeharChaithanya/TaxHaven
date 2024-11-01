import React, { useState } from 'react';
import { InvestmentCard } from './InvestmentCard';
import { SavingsChart } from './SavingsChart';
import { RecommendationPanel } from './RecommendationPanel';

interface Investment {
  type: string;
  amount: number | '';
  maxLimit: number;
  section: string;
  description: string;
  category: 'investment' | 'deduction' | 'exemption';
}

export const TaxSimulator: React.FC = () => {
  const [income, setIncome] = useState<number | ''>('');
  const [regime, setRegime] = useState<'old' | 'new'>('old');
  const [investments, setInvestments] = useState<Investment[]>([
    {
      type: 'PPF',
      amount: '',
      maxLimit: 150000,
      section: '80C',
      description: 'Public Provident Fund',
      category: 'investment'
    },
    {
      type: 'ELSS',
      amount: '',
      maxLimit: 150000,
      section: '80C',
      description: 'Equity Linked Savings Scheme',
      category: 'investment'
    },
    {
      type: 'NPS',
      amount: '',
      maxLimit: 50000,
      section: '80CCD(1B)',
      description: 'Additional NPS Contribution',
      category: 'investment'
    },
    {
      type: 'Health Insurance',
      amount: '',
      maxLimit: 25000,
      section: '80D',
      description: 'Health Insurance Premium',
      category: 'deduction'
    },
    {
      type: 'Home Loan Interest',
      amount: '',
      maxLimit: 200000,
      section: '24(b)',
      description: 'Interest paid on Home Loan',
      category: 'deduction'
    },
    {
      type: 'HRA',
      amount: '',
      maxLimit: 0,
      section: '10(13A)',
      description: 'House Rent Allowance',
      category: 'exemption'
    }
  ]);

  const calculateTax = (taxableIncome: number, taxRegime: 'old' | 'new'): number => {
    if (taxRegime === 'new') {
      // New Tax Regime Slabs 2024-25
      if (taxableIncome <= 300000) return 0;
      if (taxableIncome <= 600000) return (taxableIncome - 300000) * 0.05;
      if (taxableIncome <= 900000) return 15000 + (taxableIncome - 600000) * 0.10;
      if (taxableIncome <= 1200000) return 45000 + (taxableIncome - 900000) * 0.15;
      if (taxableIncome <= 1500000) return 90000 + (taxableIncome - 1200000) * 0.20;
      return 150000 + (taxableIncome - 1500000) * 0.30;
    } else {
      // Old Tax Regime Slabs 2024-25
      if (taxableIncome <= 250000) return 0;
      if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
      if (taxableIncome <= 1000000) return 12500 + (taxableIncome - 500000) * 0.20;
      return 112500 + (taxableIncome - 1000000) * 0.30;
    }
  };

  const calculateTaxableIncome = () => {
    let totalDeductions = 0;
    let section80CLimit = 150000;

    investments.forEach(inv => {
      if (regime === 'old') {
        if (inv.section === '80C' && totalDeductions < section80CLimit) {
          totalDeductions += Math.min(inv.amount, section80CLimit - totalDeductions);
        } else if (inv.section !== '80C') {
          totalDeductions += Math.min(inv.amount, inv.maxLimit);
        }
      }
    });

    return Math.max(0, income - (regime === 'old' ? totalDeductions : 50000));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                onChange={(e) => setIncome(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your annual income"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Investment Details</h2>
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
    </div>
  );
}; 