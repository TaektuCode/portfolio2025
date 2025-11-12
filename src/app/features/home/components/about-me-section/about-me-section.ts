import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [TranslatePipe],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.css',
})
export class AboutMeSection {}
