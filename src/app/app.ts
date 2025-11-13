import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Protfolio_2025');

  private themeService = inject(ThemeService);

  private translateService = inject(TranslateService);

  constructor() {
    this.initTranslations();
  }

  private initTranslations(): void {
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/de|en/) ? browserLang : 'de');
  }
}
