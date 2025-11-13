import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe, SocialLinks],
  templateUrl: './footer.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
