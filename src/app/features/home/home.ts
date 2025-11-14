import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { TechStackBanner } from '@app/shared/tech-stack-banner/tech-stack-banner';
import { ProjectSection } from './components/project-section/project-section';
import { AboutMeSection } from './components/about-me-section/about-me-section';
import { ContactSection } from './components/contact-section/contact-section';
import { FooterComponent } from '@app/shared/footer/footer';
import { ScrollSpyDirective } from '@app/shared/scroll-spy';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    TechStackBanner,
    ProjectSection,
    AboutMeSection,
    ContactSection,
    FooterComponent,
    ScrollSpyDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
