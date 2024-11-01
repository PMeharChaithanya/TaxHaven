import React from 'react';

interface RadioOption {
  id: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: RadioOption[];
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  error
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-2 space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.id}`}
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={onChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor={`${name}-${option.id}`} className="ml-3">
              <div className="text-sm font-medium text-gray-900">{option.label}</div>
              {option.description && (
                <div className="text-sm text-gray-500">{option.description}</div>
              )}
            </label>
          </div>
        ))}
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
}; 