import React from 'react';
import { motion } from 'framer-motion';

interface ScenarioCardProps {
  scenario: any; // Use your TaxScenario type
  isActive: boolean;
  onClick: () => void;
  onUpdate: (scenario: any) => void;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  isActive,
  onClick,
  onUpdate
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-xl cursor-pointer transition-all ${
        isActive 
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-white border border-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="space-y-4">
        <input
          type="text"
          value={scenario.name}
          onChange={(e) => onUpdate({ ...scenario, name: e.target.value })}
          className="font-semibold text-lg bg-transparent border-none focus:outline-none"
        />
        
        <div className="space-y-2">
          {Object.entries(scenario.deductions).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-gray-600">{key}:</span>
              <input
                type="number"
                value={value}
                onChange={(e) => onUpdate({
                  ...scenario,
                  deductions: {
                    ...scenario.deductions,
                    [key]: parseFloat(e.target.value) || 0
                  }
                })}
                className="w-24 text-right border rounded-lg px-2 py-1"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 