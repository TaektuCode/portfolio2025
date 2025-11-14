import {
  Directive,
  ElementRef,
  Input,
  inject,
  AfterViewInit,
} from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true,
})
export class ScrollSpyDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);
  private location = inject(Location);

  // Hier empfängt die Direktive den ID-Namen (z.B. 'projects' oder 'about')
  @Input('appScrollSpy') fragmentId: string = '';

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observeElement();
  }

  private observeElement() {
    const options = {
      root: null, // Beobachtet den Viewport
      rootMargin: '-50% 0px -50% 0px', // Löst aus, wenn das Element die 50%-Marke (die Mitte) passiert
      threshold: 0, // Sobald 1 Pixel sichtbar ist
    };

    this.observer = new IntersectionObserver(([entry]) => {
      // Wenn das Element in der Mitte des Bildschirms ist...
      if (entry.isIntersecting) {
        // ...aktualisiere die URL lautlos.
        this.location.replaceState(`/#${this.fragmentId}`);
      }
    }, options);

    // Starte die Beobachtung
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Stoppe die Beobachtung, wenn die Komponente zerstört wird
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
    }
  }
}
