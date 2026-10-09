import { PatientModel, PatientModelRequest } from "@core/models/patient.model";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface PatientInterfaceService {
  createPatient(patientData: PatientModelRequest): Observable<PatientModel>
}

export const PATIENT_SERVICE = new InjectionToken<PatientInterfaceService>('PatientInterfaceService');
