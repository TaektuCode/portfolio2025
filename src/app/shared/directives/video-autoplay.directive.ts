import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appVideoAutoplay]',
})
export class VideoAutoplayDirective implements OnInit, OnDestroy {
  private element = inject(ElementRef<HTMLVideoElement>);
  private observer: IntersectionObserver | undefined;

  ngOnInit(): void {
    this.setupObserver();
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = this.element.nativeElement;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
