import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-form-demande',
  imports: [ ReactiveFormsModule],
  templateUrl: './form-demande.component.html',
  styleUrl: './form-demande.component.css'
})
export class FormDemandeComponent {

  demandeForm!: FormGroup;
  messageSucces: string = '';

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeService
  ) {
    this.demandeForm = this.fb.group({
      type: ['CONSULTATION', Validators.required],
      specialite: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      motif: ['', Validators.required],
    });
  }
  get f() {
    return this.demandeForm.controls;
  }
  onSubmitDemande(): void {
    if (this.demandeForm.invalid) return;
    const demandeData = {
      type: this.demandeForm.value.type,
      specialite: this.demandeForm.value.specialite,
      date: this.demandeForm.value.date,
      heure: this.demandeForm.value.heure,
      motif: this.demandeForm.value.motif,
    };
    this.demandeService.createDemande(demandeData);
    this.messageSucces = 'Demande de rendez-vous envoyée avec succès !';
    this.demandeForm.reset({
      type: 'CONSULTATION'
    });
  }
  onReset(): void {
    this.messageSucces = '';
    this.demandeForm.reset({
      type: 'CONSULTATION'
    });
  }
  isFieldInvalid(fieldname: string): boolean {
    const field = this.f[fieldname];
    return !!(field && field.invalid && (field.touched || field.dirty));
  }
}

