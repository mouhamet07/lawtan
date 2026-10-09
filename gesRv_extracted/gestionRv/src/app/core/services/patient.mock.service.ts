import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientModelRequest } from '@core/models/patient.model';
import { MOCK_PATIENTS } from '@mock';
import { PatientInterfaceService } from './interfaces/patient.interface.service';

@Injectable({
  providedIn: 'root'
})
export class PatientMockService implements PatientInterfaceService{

  constructor() {}

  createPatient(patientData: PatientModelRequest): Observable<any> {
    const newPatient = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...patientData
    };
    MOCK_PATIENTS.push(newPatient);
    return of(newPatient);
  }
}
