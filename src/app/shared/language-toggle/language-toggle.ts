import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IconFlagGermanyComponent } from '@app/icons/icon-flag-germany/icon-flag-germany';
import { IconFlagUsaComponent } from '@app/icons/icon-flag-usa/icon-flag-usa';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [NgClass, IconFlagGermanyComponent, IconFlagUsaComponent],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.css',
})
export class LanguageToggle {
  public translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
