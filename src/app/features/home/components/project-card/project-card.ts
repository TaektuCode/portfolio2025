import { Component, input } from '@angular/core';
import { IconGithubComponent } from '@app/icons/icon-github/icon-github';
import { Button } from '@app/shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe, IconGithubComponent, Button],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCardComponent {
  titleKey = input.required<string>();
  descriptionKey = input.required<string>();
  liveUrl = input<string>();
  githubUrl = input<string>();
}
