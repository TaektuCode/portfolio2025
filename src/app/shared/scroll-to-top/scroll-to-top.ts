// 1. ViewportScroller aus '@angular/core' ENTFERNEN
import { Component, HostListener, signal, inject } from '@angular/core';

// 2. ViewportScroller aus '@angular/common' IMPORTIEREN
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css',
})
export class ScrollToTopComponent {
  isVisible = signal(false);

  private viewportScroller = inject(ViewportScroller);

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isVisible.set(scrollPosition > 300);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
