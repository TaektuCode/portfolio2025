import {
  Directive,
  ElementRef,
  Input,
  inject,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appScrollSpy]',
})
export class ScrollSpyDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private location = inject(Location);

  @Input('appScrollSpy') fragmentId: string = '';

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observeElement();
  }

  private observeElement() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (this.fragmentId) {
          this.location.replaceState(`/#${this.fragmentId}`);
        } else {
          this.location.replaceState('/');
        }
      }
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
      this.observer.disconnect();
    }
  }
}
