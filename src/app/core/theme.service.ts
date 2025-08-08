import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadTheme();

    effect(() => {
      this.updateDOM();
      this.saveTheme();
    });
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      this.theme.set(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.theme.set(prefersDark ? 'dark' : 'light');
  }

  private updateDOM(): void {
    const isDark = this.theme() === 'dark';
    this.document.documentElement.classList.toggle('dark', isDark);
  }

  private saveTheme(): void {
    localStorage.setItem('theme', this.theme());
  }

  public toggleTheme(): void {
    this.theme.update((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  }
}
