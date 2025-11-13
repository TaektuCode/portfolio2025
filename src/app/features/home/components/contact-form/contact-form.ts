import { Component, OnInit, signal, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

import { environment } from '@env/environment';
import { Button } from '@app/shared/button/button';

@Component({
  selector: 'app-contact-form',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    TranslatePipe,
    Button,
  ],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  // Status-Variablen als Signals
  isSubmitting = signal(false);
  submissionStatus = signal<'success' | 'error' | null>(null);

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
    });
  }

  // --- Getters für Formular-Controls ---
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get privacy() {
    return this.contactForm.get('privacy');
  }

  // --- Getters für Fehler-Zustände ---
  public get showNameRequiredError(): boolean {
    return !!(
      this.name?.invalid &&
      (this.name?.dirty || this.name?.touched) &&
      this.name.errors?.['required']
    );
  }
  public get showEmailRequiredError(): boolean {
    return !!(
      this.email?.invalid &&
      (this.email?.dirty || this.email?.touched) &&
      this.email.errors?.['required']
    );
  }
  public get showEmailInvalidError(): boolean {
    return !!(
      this.email?.invalid &&
      (this.email?.dirty || this.email?.touched) &&
      this.email.errors?.['email']
    );
  }
  public get showMessageRequiredError(): boolean {
    return !!(
      this.message?.invalid &&
      (this.message?.dirty || this.message?.touched) &&
      this.message.errors?.['required']
    );
  }
  public get showMessageMinLengthError(): boolean {
    return !!(
      this.message?.invalid &&
      (this.message?.dirty || this.message?.touched) &&
      this.message.errors?.['minlength']
    );
  }
  public get showPrivacyError(): boolean {
    return !!(this.privacy?.invalid && this.privacy?.touched);
  }
  public get messageRequiredLength(): number {
    return this.message?.errors?.['minlength']?.requiredLength || 0;
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      this.submissionStatus.set(null);

      emailjs
        .send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          this.contactForm.value,
          { publicKey: environment.emailjs.publicKey }
        )
        .then(
          (response) => {
            this.submissionStatus.set('success');
            this.contactForm.reset();
            this.isSubmitting.set(false);
            setTimeout(() => this.submissionStatus.set(null), 3000);
          },
          (error) => {
            this.submissionStatus.set('error');
            this.isSubmitting.set(false);
            setTimeout(() => this.submissionStatus.set(null), 3000);
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
