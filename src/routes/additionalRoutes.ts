import { TaxUpdates } from '../components/TaxUpdates';
import { PrivacyPolicy } from '../components/legal/PrivacyPolicy';
import { TermsOfService } from '../components/legal/TermsOfService';
import { TaxCalendar } from '../components/TaxCalendar';
import { CommunitySupport } from '../components/CommunitySupport';

export const additionalRoutes = [
  { path: '/tax-updates', element: TaxUpdates },
  { path: '/privacy', element: PrivacyPolicy },
  { path: '/terms', element: TermsOfService },
  { path: '/tax-calendar', element: TaxCalendar },
  { path: '/community', element: CommunitySupport }
]; 