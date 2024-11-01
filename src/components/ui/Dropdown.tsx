import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  error,
  required
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedValue: string) => {
    onChange({ target: { name, value: selectedValue } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-[#2D3648] text-lg font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <button
        type="button"
        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl px-6 py-4 text-left focus:outline-none transition-all hover:border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className={`block truncate text-lg ${value ? 'text-[#2D3648]' : 'text-gray-500'}`}>
            {value ? options.find(opt => opt.value === value)?.label : `Select ${label}`}
          </span>
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="relative">
          <div className="absolute w-full bg-white border border-gray-200 rounded-2xl shadow-lg mt-2 z-50 overflow-hidden">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-6 py-4 hover:bg-[#F8FAFC] cursor-pointer text-lg text-[#2D3648] border-b border-gray-100 last:border-b-0"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          {/* Spacer div */}
          <div className="invisible">
            {options.map((option) => (
              <div key={option.value} className="px-6 py-4">
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}; 