import {
  Component,
  HostListener,
  signal,
  inject,
  Renderer2,
  DOCUMENT,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageToggle } from '../language-toggle/language-toggle';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { ThemeService } from '@app/core/theme.service';
import { IconMenuComponent } from '@app/icons/icon-menu/icon-menu';
import { IconCloseComponent } from '@app/icons/icon-close/icon-close';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    LanguageToggle,
    ThemeToggle,
    IconMenuComponent,
    IconCloseComponent,
  ],
  templateUrl: './header.html',
})
export class HeaderComponent {
  // --- Signals ---
  isScrolled = signal(false);
  isHeaderVisible = signal(true);
  isMobileMenuOpen = signal(false);

  // --- Injections ---
  private themeService = inject(ThemeService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  isDarkMode = this.themeService.theme;

  private lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;
    this.isScrolled.set(currentScrollY > 10);

    if (currentScrollY <= 100) {
      this.isHeaderVisible.set(true);
    } else if (currentScrollY > this.lastScrollY) {
      this.isHeaderVisible.set(false);
    } else {
      this.isHeaderVisible.set(true);
    }
    this.lastScrollY = currentScrollY;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);

    if (this.isMobileMenuOpen()) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
    }
  }

  closeMobileMenu(): void {
    if (this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
    }
  }
}
