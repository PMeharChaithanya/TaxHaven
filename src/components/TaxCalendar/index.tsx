import React from 'react';
import { TaxPlanningCalendar } from '../shared/TaxPlanningCalendar';

export const TaxCalendar: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Tax Calendar
        </span>
      </h1>
      <TaxPlanningCalendar />
    </div>
  );
}; 