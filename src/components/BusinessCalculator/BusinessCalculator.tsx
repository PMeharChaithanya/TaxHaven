import React, { useState } from 'react';
import { BusinessFormData, TaxCalculationResult } from '../../types';
import { StepIndicator } from '../ui/StepIndicator';
import { BusinessForm } from './BusinessForm';
import { DeductionsForm } from './DeductionsForm';
import { ResultsView } from '../shared/ResultsView';

const STEPS = ['Basic Info', 'Deductions', 'Results'];

export const BusinessCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessFormData>({
    businessType: '',
    financialYear: '2024-2025',
    income: 0,
    deductions: {}
  });
  const [result, setResult] = useState<TaxCalculationResult | null>(null);

  const handleNext = (data: Partial<BusinessFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const calculateTax = (data: BusinessFormData) => {
    const totalDeductions = Object.values(data.deductions).reduce((sum, val) => sum + (val || 0), 0);
    const taxableIncome = data.income - totalDeductions;
    const totalTax = taxableIncome * 0.3; // Simplified tax calculation

    setResult({
      taxableIncome,
      totalTax,
      effectiveRate: (totalTax / data.income) * 100,
      breakup: [
        { label: 'Base Tax', amount: totalTax }
      ],
      deductionBreakup: Object.entries(data.deductions).map(([key, value]) => ({
        label: key,
        amount: value || 0,
        section: 'Deductions',
        description: `Deduction for ${key}`
      }))
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Business Tax Calculator
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Calculate your business taxes accurately and find potential savings</p>
      </div>

      <div className="mb-12">
        <StepIndicator 
          currentStep={step} 
          totalSteps={STEPS.length} 
          steps={STEPS}
        />
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-10">
          {step === 1 && (
            <div className="animate-slide-in">
              <BusinessForm 
                initialData={formData} 
                onNext={handleNext} 
              />
            </div>
          )}
          
          {step === 2 && (
            <div className="animate-slide-in">
              <DeductionsForm 
                initialData={formData} 
                onNext={(data) => {
                  const updatedData = { ...formData, ...data };
                  setFormData(updatedData);
                  calculateTax(updatedData);
                  setStep(3);
                }}
                onBack={handleBack}
              />
            </div>
          )}
          
          {step === 3 && result && (
            <div className="animate-fade-in">
              <ResultsView 
                formData={formData}
                result={result}
                onBack={handleBack}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 