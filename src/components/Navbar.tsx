import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Tax Haven
          </Link>
          <div className="flex space-x-6">
            <Link to="/business" className="text-gray-600 hover:text-blue-600">
              Business
            </Link>
            <Link to="/salaried" className="text-gray-600 hover:text-blue-600">
              Salaried
            </Link>
            <Link to="/legal-explorer" className="text-gray-600 hover:text-blue-600">
              Legal Explorer
            </Link>
            <Link to="/simulator" className="text-gray-600 hover:text-blue-600">
              Simulator
            </Link>
            <Link to="/ai-assistant" className="text-gray-600 hover:text-blue-600">
              AI Assistant
            </Link>
            <Link to="/tax-updates" className="text-gray-600 hover:text-blue-600">
              Updates
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-blue-600">
              Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
