import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactInfoComponent } from '../../../shared/components/contact-info/contact-info.component';

export type DevisNature = 'prestation' | 'laitier';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactInfoComponent
  ],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {
  devisCategory = signal<DevisNature>('prestation');
  isSubmitting = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);
  submittedData = signal<any>(null);

  devisForm: FormGroup;

  servicesAgricoles = [
    { id: 'labour', label: 'Labour mécanisé', unit: 'Hectare' },
    { id: 'offsettage', label: 'Offsettage / Pulvérisation', unit: 'Hectare' },
    { id: 'biyonnage', label: 'Biyonnage', unit: 'Hectare' },
    { id: 'moissonnage', label: 'Moissonnage-battage du riz', unit: 'Hectare / Heure' },
    { id: 'pressage', label: 'Pressage de balles de paille', unit: 'Balle / Hectare' }
  ];

  produitsLaitiers = [
    { id: 'lait-frais', label: 'Lait frais pasteurisé (Bouteilles 1L, 2L, Vrac)' },
    { id: 'lait-caille', label: 'Lait caillé traditionnel LAWTAN (Pots et seaux)' },
    { id: 'partenariat-distributeur', label: 'Distribution & Approvisionnement CHR (Hôtels/Restaurants)' },
    { id: 'projets-futurs', label: 'Futurs produits (Yaourts artisanaux & Fromages)' }
  ];

  constructor(private fb: FormBuilder) {
    this.devisForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      organization: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{8,18}$/)]],
      email: ['', [Validators.required, Validators.email]],
      locality: ['', [Validators.required]],

      agriculturalService: ['labour'],
      workVolume: ['', [Validators.min(1)]],
      volumeUnit: ['hectare'],
      desiredDate: [''],

      
      dairyProduct: ['lait-frais'],
      estimatedQuantity: [''],
      deliveryFrequency: ['ponctuel'],


      message: ['', [Validators.required, Validators.minLength(10)]],
      termsAccepted: [true, [Validators.requiredTrue]]
    });
  }

  setCategory(cat: DevisNature): void {
    this.devisCategory.set(cat);
  }

  onSubmit(): void {
    if (this.devisForm.invalid) {
      this.devisForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.submittedData.set({
        category: this.devisCategory(),
        ...this.devisForm.value,
        submissionDate: new Date()
      });
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 600);
  }

  resetForm(): void {
    this.devisForm.reset({
      agriculturalService: 'labour',
      volumeUnit: 'hectare',
      dairyProduct: 'lait-frais',
      deliveryFrequency: 'ponctuel',
      termsAccepted: true
    });
    this.isSubmitted.set(false);
    this.submittedData.set(null);
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.devisForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
}
