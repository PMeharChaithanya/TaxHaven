import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/business', label: 'Business' },
    { to: '/salaried', label: 'Salaried' },
    { to: '/legal-explorer', label: 'Legal Explorer' },
    { to: '/simulator', label: 'Simulator' },
    { to: '/ai-assistant', label: 'AI Assistant' },
    { to: '/tax-updates', label: 'Updates' },
    { to: '/community', label: 'Community' }
  ];

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white/95 backdrop-blur-md shadow-sm'}
    `}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="font-bold text-2xl md:text-3xl text-blue-600 tracking-tight hover:text-blue-700 transition-colors flex items-center"
          >
            Tax Haven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link transition-colors text-base font-medium flex items-center ${
                  location.pathname === link.to 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`
                block w-full h-0.5 bg-gray-700 transition-transform duration-300
                ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
              `} />
              <span className={`
                block w-full h-0.5 bg-gray-700 transition-opacity duration-300
                ${isMenuOpen ? 'opacity-0' : ''}
              `} />
              <span className={`
                block w-full h-0.5 bg-gray-700 transition-transform duration-300
                ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              `} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-6 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`
                      block py-2 px-3 rounded-lg transition-colors text-base font-medium
                      ${location.pathname === link.to 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}; 