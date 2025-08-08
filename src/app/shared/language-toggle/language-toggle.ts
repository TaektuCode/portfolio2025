import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [NgClass],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.css',
})
export class LanguageToggle {
  public translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
    console.log('Language changed !');
  }
}
