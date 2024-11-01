import React, { useState } from 'react';
import { SalariedFormData, TaxCalculationResult } from '../../types';
import { StepIndicator } from '../ui/StepIndicator';
import { SalariedForm } from './SalariedForm';
import { DeductionsForm } from './DeductionsForm';
import { ResultsView } from '../shared/ResultsView';

const STEPS = ['Basic Info', 'Deductions', 'Results'];

export const SalariedCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SalariedFormData>({
    income: 0,
    financialYear: '2024-2025',
    regime: 'new',
    deductions: {}
  });
  const [result, setResult] = useState<TaxCalculationResult | null>(null);

  const handleNext = (data: Partial<SalariedFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const calculateTax = (data: SalariedFormData) => {
    const deductionBreakup: DeductionBreakup[] = [];
    
    // Track each deduction
    Object.entries(data.deductions).forEach(([key, amount]) => {
      if (amount) {
        switch(key) {
          case 'section80C':
            deductionBreakup.push({
              section: '80C',
              amount,
              description: 'PPF, ELSS, Insurance, etc.'
            });
            break;
          case 'hra':
            deductionBreakup.push({
              section: 'HRA',
              amount,
              description: 'House Rent Allowance'
            });
            break;
          case 'lta':
            deductionBreakup.push({
              section: 'LTA',
              amount,
              description: 'Leave Travel Allowance'
            });
            break;
          // Add other deductions similarly
        }
      }
    });

    const totalDeductions = deductionBreakup.reduce((sum, item) => sum + item.amount, 0);
    const taxableIncome = data.income - totalDeductions;
    const taxRate = data.regime === 'new' ? 0.25 : 0.30;
    const totalTax = taxableIncome * taxRate;

    setResult({
      taxableIncome,
      totalTax,
      effectiveRate: (totalTax / data.income) * 100,
      breakup: [{ label: 'Base Tax', amount: totalTax }],
      deductionBreakup
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Salaried Tax Calculator
          </span>
        </h1>
        <p className="text-gray-600 text-lg">Calculate your salary taxes accurately and find potential savings</p>
      </div>

      <div className="mb-8">
        <StepIndicator 
          currentStep={step} 
          totalSteps={STEPS.length} 
          steps={STEPS}
        />
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300">
        <div className="p-8">
          {step === 1 && (
            <div className="animate-slide-in">
              <SalariedForm 
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