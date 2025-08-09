import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/theme.service';
import { ThemeToggle } from '@app/shared/theme-toggle/theme-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggle } from '@app/shared/language-toggle/language-toggle';

@Component({
  selector: 'app-hero-section',
  imports: [ThemeToggle, TranslateModule, LanguageToggle],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  preName = 'AleH';
  lastName = 'Russotto';

  private themeService = inject(ThemeService);

  theme = this.themeService.theme;
}
