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
} from '../components';

export const routes = [
  { path: '/', element: Home },
  { path: '/business', element: BusinessCalculator },
  { path: '/salaried', element: SalariedCalculator },
  { path: '/legal-explorer', element: LegalExplorer },
  { path: '/tax-updates', element: TaxUpdates },
  { path: '/privacy', element: PrivacyPolicy },
  { path: '/terms', element: TermsOfService },
  { path: '/tax-calendar', element: TaxCalendar },
  { path: '/community', element: CommunitySupport },
  { path: '/simulator', element: TaxSimulator },
  { path: '/tax-simulator', element: TaxSimulator },
    { path: '/ai-assistant', element: AITaxAssistant }
]; 