import React, { useState } from 'react';
import { StepIndicator } from '../ui/StepIndicator';

export const BusinessCalculator: React.FC = () => {
  const [step] = useState(1);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Business Tax Calculator</h1>
      <StepIndicator currentStep={step} totalSteps={3} steps={[]} />
      
      {/* Step content will go here */}
    </div>
  );
}; 