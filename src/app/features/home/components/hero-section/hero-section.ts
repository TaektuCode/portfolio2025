import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '@app/shared/button/button';
import { SocialLinks } from '@app/shared/social-links/social-links';

@Component({
  selector: 'app-hero-section',
  imports: [TranslateModule, Button, SocialLinks],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  preName = 'AleH';
  lastName = 'Russotto';

  private themeService = inject(ThemeService);

  theme = this.themeService.theme;
}
