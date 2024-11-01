import React, { useState } from 'react';
import { GreyAreas } from './GreyAreas';
import { Terms } from './Terms';

export const LegalExplorer: React.FC = () => {
  const [showGreyAreas, setShowGreyAreas] = useState(false);

  const handleAcceptTerms = () => {
    setShowGreyAreas(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Legal Tax Explorer</h1>
      
      {!showGreyAreas ? (
        <Terms onAccept={handleAcceptTerms} />
      ) : (
        <div className="border-t pt-8">
          <GreyAreas />
        </div>
      )}
    </div>
  );
}; 