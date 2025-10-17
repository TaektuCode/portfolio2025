import { Component } from '@angular/core';
import { IconGithubComponent } from '@app/icons/icon-github/icon-github';
import { IconLinkedinComponent } from '@app/icons/icon-linkedin/icon-linkedin';

@Component({
  selector: 'app-social-links',
  imports: [IconGithubComponent, IconLinkedinComponent],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {}
