import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageToggle } from '../language-toggle/language-toggle';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { ThemeService } from '@app/core/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    LanguageToggle,
    ThemeToggle,
  ],
  templateUrl: './header.html',
})
export class HeaderComponent {
  // Dieses Signal steuert den Hintergrund (transparent vs. solide)
  isScrolled = signal(false);

  // NEU: Dieses Signal steuert die Sichtbarkeit (rein/raus sliden)
  isHeaderVisible = signal(true);

  // Speichert die letzte Scroll-Position, um die Richtung zu erkennen
  private lastScrollY = 0;

  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.theme;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    // 1. Logik für den Hintergrund (bleibt gleich)
    this.isScrolled.set(currentScrollY > 10);

    // 2. NEUE Logik für die Sichtbarkeit
    // Immer sichtbar, wenn man ganz oben ist
    if (currentScrollY <= 100) {
      this.isHeaderVisible.set(true);
    }
    // Verstecken, wenn man nach unten scrollt
    else if (currentScrollY > this.lastScrollY) {
      this.isHeaderVisible.set(false);
    }
    // Anzeigen, wenn man nach oben scrollt
    else {
      this.isHeaderVisible.set(true);
    }

    // 3. Die letzte Position für den nächsten Vergleich speichern
    this.lastScrollY = currentScrollY;
  }
}
