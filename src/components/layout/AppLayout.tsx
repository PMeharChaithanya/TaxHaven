import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </Link>
  );
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                 Tax Haven
              </Link>
              <div className="hidden md:flex space-x-4">
                <NavLink to="/business">Business</NavLink>
                <NavLink to="/salaried">Salaried</NavLink>
                <NavLink to="/legal-explorer">Legal</NavLink>
                <NavLink to="/simulator">Simulator</NavLink>
                <NavLink to="/ai-assistant">AI Assistant</NavLink>
                <NavLink to="/tax-updates">Updates</NavLink>
                <NavLink to="/community">Community</NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={() => {
                  console.log('Theme toggle clicked');
                }}
              >
                🌙
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="opacity-0 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}; 