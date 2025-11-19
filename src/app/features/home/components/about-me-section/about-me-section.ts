import { Component, signal } from '@angular/core';
import { TypewriterDirective } from '@app/shared/directives/typewriter.directive';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [TranslatePipe, TypewriterDirective],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.css',
})
export class AboutMeSection {
  p1Finished = signal(false);
  p2Finished = signal(false);

  onP1Complete() {
    this.p1Finished.set(true);

    setTimeout(() => {
      this.p2Finished.set(true);
    }, 800);
  }
}
