import { NgClass } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { ThemeService } from '@app/core/theme.service';
import { IconMoon } from '@app/icons/icon-moon/icon-moon';
import { IconSun } from '@app/icons/icon-sun/icon-sun';

@Component({
  selector: 'app-theme-toggle',
  imports: [NgClass, IconSun, IconMoon],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  private themeService = inject(ThemeService);

  isDarkMode = computed(() => this.themeService.theme() === 'dark');

  toggleTheme(): void {
    this.themeService.toggleTheme();
    console.log('Mode changed!');
  }
}
