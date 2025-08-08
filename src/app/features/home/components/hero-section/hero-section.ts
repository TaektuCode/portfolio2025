import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/theme.service';
import { ThemeToggle } from '@app/shared/theme-toggle/theme-toggle';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [ThemeToggle, TranslateModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  private themeService = inject(ThemeService);

  theme = this.themeService.theme;
}
