import React, { useState } from 'react';
import { Button } from '../ui';

interface TermsProps {
  onAccept: () => void;
}

export const Terms: React.FC<TermsProps> = ({ onAccept }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      onAccept();
    }
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-[#2D3648] mb-6">Terms and Conditions</h2>
        
        <div className="bg-[#F8FAFC] border border-gray-200 p-8 rounded-2xl space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-[#2D3648]">1. Disclaimer</h3>
            <p className="text-gray-600 text-lg">This tax planning tool is for informational purposes only. No professional advice is implied or given.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#2D3648]">2. No Liability</h3>
            <p className="text-gray-600 text-lg">We are not liable for any financial decisions or consequences resulting from the use of this tool.</p>
          </section>

          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
            <p className="text-yellow-800 text-lg">
              ⚠️ The advanced tax planning strategies presented after acceptance may involve regulatory grey areas.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="form-checkbox h-6 w-6 text-blue-600 rounded-lg border-gray-300"
            />
            <span className="text-lg text-[#2D3648]">
              I have read and understand these terms and conditions
            </span>
          </label>

          <Button
            onClick={handleAccept}
            disabled={!accepted}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-6 rounded-2xl disabled:opacity-50 transition-all"
          >
            Accept & Continue to Advanced Strategies
          </Button>
        </div>
      </div>
    </div>
  );
}; 