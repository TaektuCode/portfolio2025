import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
})
export class Button {
  variant = input<'primary' | 'secondary'>('primary');
  href = input<string>();

  text = input<string>('');
}
