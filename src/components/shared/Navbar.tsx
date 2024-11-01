import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-blue-600">
             Tax Haven
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/business"
              className={`nav-link ${location.pathname === '/business' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Business
            </Link>
            <Link 
              to="/salaried"
              className={`nav-link ${location.pathname === '/salaried' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Salaried
            </Link>
            <Link 
              to="/legal-explorer"
              className={`nav-link ${location.pathname === '/legal-explorer' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Legal Explorer
            </Link>
            <Link 
              to="/simulator"
              className={`nav-link ${location.pathname === '/simulator' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Simulator
            </Link>
            <Link 
              to="/ai-assistant"
              className={`nav-link ${location.pathname === '/ai-assistant' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              AI Assistant
            </Link>
            <Link 
              to="/tax-updates"
              className={`nav-link ${location.pathname === '/tax-updates' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Updates
            </Link>
            <Link 
              to="/community"
              className={`nav-link ${location.pathname === '/community' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 