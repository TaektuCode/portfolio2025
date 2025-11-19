import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Button } from '@app/shared/button/button';
import { VideoAutoplayDirective } from '@app/shared/directives/video-autoplay.directive';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, TranslatePipe, Button, VideoAutoplayDirective],
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
}
