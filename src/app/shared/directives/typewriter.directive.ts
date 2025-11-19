import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypewriterDirective implements OnInit, OnDestroy, OnChanges {
  private el = inject(ElementRef);

  @Input({ required: true, alias: 'appTypewriter' }) textToType = '';
  @Input() typingSpeed = 30;
  @Input() startCondition = true;

  @Output() typingComplete = new EventEmitter<void>();

  private observer!: IntersectionObserver;
  private hasStarted = false;
  private isFinished = false;
  private currentText = '';
  private currentIndex = 0;
  private timeoutId: any;
  private checkInterval: any;

  ngOnInit() {
    this.el.nativeElement.textContent = '';
    this.el.nativeElement.style.visibility = 'hidden';
    this.setupObserver();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textToType'] && !changes['textToType'].firstChange) {
      if (this.isFinished) {
        this.el.nativeElement.textContent = this.textToType;
      } else if (this.hasStarted) {
        this.restartTyping();
      }
    }
  }

  private setupObserver() {
    const options = { root: null, threshold: 0.1 };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasStarted) {
          this.waitForStartCondition();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private waitForStartCondition() {
    this.checkInterval = setInterval(() => {
      if (this.startCondition) {
        clearInterval(this.checkInterval);
        this.startTyping();
      }
    }, 100);
  }

  private startTyping() {
    this.hasStarted = true;
    this.el.nativeElement.style.visibility = 'visible';
    this.el.nativeElement.classList.add('typewriter-cursor');
    this.type();
  }

  private restartTyping() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.currentIndex = 0;
    this.currentText = '';
    this.isFinished = false;
    this.el.nativeElement.textContent = '';
    this.el.nativeElement.classList.add('typewriter-cursor');
    this.type();
  }

  private type() {
    if (this.currentIndex < this.textToType.length) {
      this.currentText += this.textToType.charAt(this.currentIndex);
      this.el.nativeElement.textContent = this.currentText;
      this.currentIndex++;
      this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
    } else {
      this.isFinished = true;
      this.el.nativeElement.classList.remove('typewriter-cursor');
      this.typingComplete.emit();
    }
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.checkInterval) clearInterval(this.checkInterval);
  }
}
