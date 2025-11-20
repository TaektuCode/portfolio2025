import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appVideoAutoplay]',
  standalone: true,
})
export class VideoAutoplayDirective implements OnInit, OnDestroy {
  private element = inject(ElementRef<HTMLVideoElement>);
  private observer: IntersectionObserver | undefined;

  ngOnInit(): void {
    this.element.nativeElement.muted = true;
    this.setupObserver();
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '50px 0px 50px 0px',
      threshold: 0.25,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = this.element.nativeElement;

        if (entry.isIntersecting) {
          this.playVideo(video);
        } else {
          video.pause();
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  private async playVideo(video: HTMLVideoElement) {
    try {
      if (video.readyState >= 2) {
        await video.play();
      } else {
        video.oncanplay = async () => {
          await video.play();
          video.oncanplay = null;
        };
      }
    } catch (err) {
      console.warn('Autoplay prevented:', err);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
