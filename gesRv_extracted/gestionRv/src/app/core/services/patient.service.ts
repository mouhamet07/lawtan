import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PatientModelRequest, PatientModel} from '@core/models/patient.model';
import { PatientInterfaceService } from './interfaces/patient.interface.service';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements PatientInterfaceService {
  private readonly apiUrl = environment.patientUrl;
  constructor(private http: HttpClient) {}
  createPatient(patientData: PatientModelRequest): Observable<PatientModel> {
    return this.http.post<PatientModel>(this.apiUrl, patientData);
  }
}
