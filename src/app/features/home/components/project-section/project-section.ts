import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-project-section',
  imports: [CommonModule, TranslatePipe, ProjectCardComponent],
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection implements OnInit {
  private http = inject(HttpClient);
  public projects$!: Observable<Project[]>;

  ngOnInit(): void {
    this.projects$ = this.http.get<Project[]>('/assets/data/projects.json');
  }
}
