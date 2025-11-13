import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactFormComponent } from '../contact-form/contact-form';

@Component({
  selector: 'app-contact-section',
  imports: [TranslatePipe, ContactFormComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {}
