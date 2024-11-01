import React, { useState } from 'react';
import { Terms } from './Terms';
import { GreyAreas } from './GreyAreas';

export const LegalExplorer: React.FC = () => {
  const [showGreyAreas, setShowGreyAreas] = useState(false);

  const handleAcceptTerms = () => {
    setShowGreyAreas(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Legal Tax Explorer</h1>
      {!showGreyAreas ? (
        <Terms onAccept={handleAcceptTerms} />
      ) : (
        <GreyAreas />
      )}
    </div>
  );
}; 