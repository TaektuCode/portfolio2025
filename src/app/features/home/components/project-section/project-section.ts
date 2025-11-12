import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-project-section',
  imports: [TranslatePipe, ProjectCardComponent],
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {
  projects = [
    {
      titleKey: 'PROJECTSECTION.PROJECT_1.TITLE',
      descriptionKey: 'PROJECTSECTION.PROJECT_1.DESCRIPTION',
      githubUrl: 'https://github.com/dein-repo-1',
      liveUrl: 'https://deine-live-demo-1.de',
    },
    {
      titleKey: 'PROJECTSECTION.PROJECT_2.TITLE',
      descriptionKey: 'PROJECTSECTION.PROJECT_2.DESCRIPTION',
      githubUrl: 'https://github.com/dein-repo-2',
      liveUrl: 'https://deine-live-demo-2.de',
    },
  ];
}
