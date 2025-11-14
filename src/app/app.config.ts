import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {
  provideTranslateService,
  provideTranslateLoader,
} from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'de',
      lang: 'en',
    }),

    importProvidersFrom(
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
  ],
};
