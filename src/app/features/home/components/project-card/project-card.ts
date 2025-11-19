import { Component, input, ViewChild, ElementRef } from '@angular/core';
import { Button } from '@app/shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe, Button],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCardComponent {
  titleKey = input.required<string>();
  descriptionKey = input.required<string>();
  liveUrl = input<string>();
  githubUrl = input<string>();
  imageUrl = input<string>();
  technologies = input<string[]>([]);

  @ViewChild('videoPlayer') videoPlayer?: ElementRef<HTMLVideoElement>;

  startVideo() {
    const video = this.videoPlayer?.nativeElement;
    if (video) {
      video.play().catch((err) => {
        // Fehler abfangen, falls das Video noch nicht geladen ist
        console.warn('Video play failed', err);
      });
    }
  }

  stopVideo() {
    const video = this.videoPlayer?.nativeElement;
    if (video) {
      video.pause();
      video.currentTime = 0; // Setzt das Video auf den Anfang zurück (Optional)
    }
  }
}
