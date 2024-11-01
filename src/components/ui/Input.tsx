import React from 'react';

interface InputProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
  prefix?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  error,
  required,
  prefix
}) => {
  return (
    <div className="w-full">
      <label className="block text-[#2D3648] text-lg font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-6 flex items-center text-lg text-[#2D3648]">
            {prefix}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`
            w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl 
            px-6 py-4 text-lg text-[#2D3648] 
            focus:outline-none transition-all hover:border-gray-300
            ${prefix ? 'pl-10' : 'pl-6'}
          `}
          placeholder={prefix ? "0" : `Enter ${label}`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}; 