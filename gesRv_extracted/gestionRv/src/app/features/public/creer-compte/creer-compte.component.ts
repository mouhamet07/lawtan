import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PatientModelRequest } from '@core/models/patient.model';
import { PATIENT_SERVICE, PatientInterfaceService } from '@core/services/interfaces/patient.interface.service';

@Component({
  selector: 'app-creer-compte',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './creer-compte.component.html',
  styleUrl: './creer-compte.component.css'
})
export class CreerCompteComponent {
  patientForm: FormGroup;
  messageSucces: string = '';
  messageErreur: string = '';
  constructor(private fb: FormBuilder, @Inject(PATIENT_SERVICE) private patientService: PatientInterfaceService, private router: Router) {
    this.patientForm = this.fb.group({
      nomComplet: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^(?:77|70|71|76|78)\\d{7}$')]],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
      groupeSanguin: [''],
      allergies: [''],
      maladiesChroniques: [''],
    });
  }
  get f() {
    return this.patientForm.controls;
  }
  onSubmit(): void {
    if (this.patientForm.valid) {
      const { confirmPassword, accepteConditions, ...patientData } = this.patientForm.value;
      const finalPatientData: PatientModelRequest = patientData;
      this.patientService.createPatient(finalPatientData);
      this.messageSucces = 'Votre compte a été créé avec succès ! Vous pouvez maintenant vous connecter.';
      this.messageErreur = '';
      this.patientForm.reset();
      setTimeout(() => {
        this.router.navigate(['/public/login']);
      }, 2000);
    } else {
      this.messageErreur = 'Veuillez corriger les erreurs avant de soumettre.';
      this.patientForm.markAllAsTouched();
    }
  }
  isFieldInvalid(fieldname: string): boolean {
    const field = this.f[fieldname];
    return !!(field && field.invalid && (field.touched || field.dirty));
  }
  onReset(): void {
    this.messageSucces = '';
    this.messageErreur = '';
    this.patientForm.reset();
  }
}
