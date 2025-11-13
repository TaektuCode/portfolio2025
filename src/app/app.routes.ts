import { Routes } from '@angular/router';
import { Home } from './features/home/home';

import { PrivacyPolicy } from './features/legal/privacy-policy/privacy-policy';
import { LegalNotice } from './features/legal/legal-notice/legal-notice';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  { path: 'datenschutz', component: PrivacyPolicy },
  { path: 'impressum', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'legal-notice', component: LegalNotice },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
