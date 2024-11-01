import React from 'react';
import { TaxCalculationResult, BusinessFormData, SalariedFormData } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import { BusinessTaxRecommendations } from '../BusinessCalculator/BusinessTaxRecommendations';
import { BusinessPotentialSavings } from '../BusinessCalculator/BusinessPotentialSavings';

interface ResultsViewProps {
  formData: BusinessFormData | SalariedFormData;
  result: TaxCalculationResult;
  onBack: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ formData, result, onBack }) => {
  const isBusinessCalculator = 'businessType' in formData;

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50">
            <p className="text-sm text-gray-600 mb-1">Total Income</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(formData.income)}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50">
            <p className="text-sm text-gray-600 mb-1">Taxable Income</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(result.taxableIncome)}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50">
            <p className="text-sm text-gray-600 mb-1">Total Tax</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.totalTax)}</p>
          </div>
        </div>
      </div>

      {/* Deductions Breakdown */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Deductions Breakdown</h3>
        <div className="space-y-4">
          {result.deductionBreakup.map((deduction, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div>
                <p className="font-medium text-gray-900">{deduction.section}</p>
                <p className="text-sm text-gray-600">{deduction.description}</p>
              </div>
              <p className="font-semibold text-green-600">{formatCurrency(deduction.amount)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tax Breakup */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Calculation Breakdown</h3>
        <div className="space-y-4">
          {result.breakup.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-medium text-gray-900">{item.label}</p>
              <p className="font-semibold text-blue-600">{formatCurrency(item.amount)}</p>
            </div>
          ))}
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <p className="font-medium text-gray-900">Effective Tax Rate</p>
            <p className="font-semibold text-blue-600">{result.effectiveRate.toFixed(2)}%</p>
          </div>
        </div>
      </div>

      {/* Business-specific components */}
      {isBusinessCalculator && (
        <>
          <BusinessTaxRecommendations
            businessType={(formData as BusinessFormData).businessType}
            income={formData.income}
          />
          <BusinessPotentialSavings
            businessType={(formData as BusinessFormData).businessType}
            turnover={formData.income}
            currentDeductions={formData.deductions}
          />
        </>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 pt-6">
        <button
          onClick={onBack}
          className="group relative px-8 py-3 overflow-hidden rounded-xl bg-gray-100 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back
          </span>
        </button>
        <button
          onClick={() => window.print()}
          className="group relative px-8 py-3 overflow-hidden rounded-xl bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Download Report
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}; 