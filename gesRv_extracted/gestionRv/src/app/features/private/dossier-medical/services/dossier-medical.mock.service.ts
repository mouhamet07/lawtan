import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DOSSIER } from '@mock';
import { DossierMedicalInterfaceService } from '@features/private/index';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalMockService implements DossierMedicalInterfaceService {
  constructor() {}
  getMedicamentsString(medicaments: { nom: string, dosage: string }[]): Observable<string> {
    if (!medicaments) return of('');
    return of(medicaments.map(m => `${m.nom} ${m.dosage}`).join(', '));
  }
  getDossier(): Observable<any> {
    return of(MOCK_DOSSIER);
  }
}
