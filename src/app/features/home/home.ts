import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { TechStackBanner } from '@app/shared/tech-stack-banner/tech-stack-banner';
import { ProjectSection } from './components/project-section/project-section';
import { AboutMeSection } from './components/about-me-section/about-me-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TechStackBanner, ProjectSection, AboutMeSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
