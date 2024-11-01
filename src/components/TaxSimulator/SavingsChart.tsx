import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SavingsChartProps {
  income: number | '';
  investments: Array<{
    type: string;
    amount: number | '';
    maxLimit: number;
    section: string;
  }>;
  regime: 'old' | 'new';
}

const calculateTaxableIncome = (income: number | '', investments: SavingsChartProps['investments'], regime: 'old' | 'new'): number => {
  if (income === '') return 0;
  let totalDeductions = 0;
  let section80CLimit = 150000;

  if (regime === 'old') {
    investments.forEach(inv => {
      const amount = inv.amount === '' ? 0 : inv.amount;
      if (inv.section === '80C' && totalDeductions < section80CLimit) {
        totalDeductions += Math.min(amount, section80CLimit - totalDeductions);
      } else if (inv.section !== '80C') {
        totalDeductions += Math.min(amount, inv.maxLimit);
      }
    });
  }

  return Math.max(0, Number(income) - (regime === 'old' ? totalDeductions : 50000));
};

const calculateTax = (taxableIncome: number, regime: 'old' | 'new'): number => {
  if (regime === 'new') {
    if (taxableIncome <= 300000) return 0;
    if (taxableIncome <= 600000) return (taxableIncome - 300000) * 0.05;
    if (taxableIncome <= 900000) return 15000 + (taxableIncome - 600000) * 0.10;
    if (taxableIncome <= 1200000) return 45000 + (taxableIncome - 900000) * 0.15;
    if (taxableIncome <= 1500000) return 90000 + (taxableIncome - 1200000) * 0.20;
    return 150000 + (taxableIncome - 1500000) * 0.30;
  } else {
    if (taxableIncome <= 250000) return 0;
    if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    if (taxableIncome <= 1000000) return 12500 + (taxableIncome - 500000) * 0.20;
    return 112500 + (taxableIncome - 1000000) * 0.30;
  }
};

export const SavingsChart: React.FC<SavingsChartProps> = ({
  income,
  investments,
  regime
}) => {
  const taxableIncome = calculateTaxableIncome(income, investments, regime);
  const taxAmount = calculateTax(taxableIncome, regime);
  const taxSavings = calculateTax(Number(income), regime) - taxAmount;

  const data = {
    labels: ['Gross Income', 'Taxable Income', 'Tax Amount', 'Tax Savings'],
    datasets: [{
      label: 'Amount (₹)',
      data: [Number(income), taxableIncome, taxAmount, taxSavings],
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(239, 68, 68, 0.5)',
        'rgba(245, 158, 11, 0.5)',
        'rgba(16, 185, 129, 0.5)'
      ]
    }]
  };
  
  return <Bar data={data} />;
}; 