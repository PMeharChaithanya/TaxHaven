import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { 
  Home,
  BusinessCalculator,
  SalariedCalculator,
  LegalExplorer,
  TaxUpdates,
  PrivacyPolicy,
  TermsOfService,
  TaxCalendar,
  CommunitySupport,
  AITaxAssistant,
  TaxSimulator
} from './components';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div className="min-h-screen bg-gray-50">
          <main className="py-12 px-4 sm:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/business" element={<BusinessCalculator />} />
              <Route path="/salaried" element={<SalariedCalculator />} />
              <Route path="/legal-explorer" element={<LegalExplorer />} />
              <Route path="/tax-updates" element={<TaxUpdates />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/tax-calendar" element={<TaxCalendar />} />
              <Route path="/community" element={<CommunitySupport />} />
              <Route path="/ai-assistant" element={<AITaxAssistant />} />
              <Route path="/simulator" element={<TaxSimulator />} />
              <Route path="/tax-simulator" element={<TaxSimulator />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </BrowserRouter>
  );
};
