import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [TranslatePipe],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {}
