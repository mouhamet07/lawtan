import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DossierMedicalInterfaceService } from '@features/private/index';
import { HttpClient } from '@angular/common/http';
import { Patient } from '@features/private/models';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService implements DossierMedicalInterfaceService{
  private readonly apiUrl = environment.dossierUrl;
  constructor(private http:HttpClient) {}
  getMedicamentsString(medicaments: { nom: string, dosage: string }[]): Observable<string> {
    if (!medicaments) return of('');
    return of(medicaments.map(m => `${m.nom} ${m.dosage}`).join(', '));
  }
  getDossier(): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl);
  }
}
