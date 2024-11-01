import React from 'react';
import { Bar } from 'react-chartjs-2';

interface SimulatorChartProps {
  data: {
    oldRegime: number;
    newRegime: number;
  };
}

export const SimulatorChart: React.FC<SimulatorChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Old Regime', 'New Regime'],
    datasets: [
      {
        label: 'Tax Amount (₹)',
        data: [data.oldRegime, data.newRegime],
        backgroundColor: ['rgba(59, 130, 246, 0.5)', 'rgba(6, 182, 212, 0.5)'],
        borderColor: ['rgb(59, 130, 246)', 'rgb(6, 182, 212)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-semibold mb-4">Tax Comparison</h3>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}; 