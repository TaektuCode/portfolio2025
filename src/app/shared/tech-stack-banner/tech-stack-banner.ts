import { Component } from '@angular/core';
import { IconAngular } from '@app/icons/icon-angular/icon-angular';
import { IconCss3 } from '@app/icons/icon-css3/icon-css3';
import { IconFirebase } from '@app/icons/icon-firebase/icon-firebase';
import { IconGit } from '@app/icons/icon-git/icon-git';
import { IconHtml5Component } from '@app/icons/icon-html5/icon-html5';
import { IconJavascript } from '@app/icons/icon-javascript/icon-javascript';
import { IconMaterialDesign } from '@app/icons/icon-material-design/icon-material-design';
import { IconSass } from '@app/icons/icon-sass/icon-sass';
import { IconTailwind } from '@app/icons/icon-tailwind/icon-tailwind';
import { IconTypescript } from '@app/icons/icon-typescript/icon-typescript';
import { IconFigma } from '@app/icons/icon-figma/icon-figma';
import { IconPython } from '@app/icons/icon-python/icon-python';
import { IconMysql } from '@app/icons/icon-mysql/icon-mysql';

@Component({
  selector: 'app-tech-stack-banner',
  imports: [
    IconAngular,
    IconHtml5Component,
    IconCss3,
    IconFirebase,
    IconSass,
    IconJavascript,
    IconTypescript,
    IconTailwind,
    IconMaterialDesign,
    IconGit,
    IconFigma,
    IconPython,
    IconMysql,
  ],
  templateUrl: './tech-stack-banner.html',
  styleUrl: './tech-stack-banner.css',
})
export class TechStackBanner {}
