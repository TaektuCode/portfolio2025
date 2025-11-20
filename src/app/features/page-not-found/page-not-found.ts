import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-page-not-found',
  imports: [TranslatePipe, RouterLink, Button],
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.css'],
})
export class PageNotFound {}
