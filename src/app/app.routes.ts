import { Routes } from '@angular/router';
import { Home } from './features/home/home';

import { PrivacyPolicy } from './features/legal/privacy-policy/privacy-policy';
import { LegalNotice } from './features/legal/legal-notice/legal-notice';
import { PageNotFound } from './features/page-not-found/page-not-found';

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
    component: PageNotFound,
    title: '404 - Page Not Found',
  },
];
