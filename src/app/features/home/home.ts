import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { TechStackBanner } from '@app/shared/tech-stack-banner/tech-stack-banner';
import { ProjectSection } from './components/project-section/project-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TechStackBanner, ProjectSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
