import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactInfoComponent } from '../../../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactInfoComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmitting = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);
  submittedData = signal<any>(null);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      organization: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{8,18}$/)]],
      email: ['', [Validators.required, Validators.email]],
      locality: ['', [Validators.required]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      termsAccepted: [true, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.submittedData.set({
        ...this.contactForm.value,
        submissionDate: new Date()
      });
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 600);
  }

  resetForm(): void {
    this.contactForm.reset({ termsAccepted: true });
    this.isSubmitted.set(false);
    this.submittedData.set(null);
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
}
