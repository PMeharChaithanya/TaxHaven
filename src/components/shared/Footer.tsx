import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Tax Haven</h3>
            <p className="text-gray-600">Making tax planning accessible for everyone</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Calculators</h4>
            <div className="space-y-2">
              <Link to="/business" className="block text-gray-600 hover:text-blue-600">Business Tax</Link>
              <Link to="/salaried" className="block text-gray-600 hover:text-blue-600">Salaried Tax</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <Link to="/legal-explorer" className="block text-gray-600 hover:text-blue-600">Legal Explorer</Link>
              <Link to="/tax-updates" className="block text-gray-600 hover:text-blue-600">Tax Updates</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-600 hover:text-blue-600">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-600 hover:text-blue-600">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tax Haven. Made by P Mehar Chaithanya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 