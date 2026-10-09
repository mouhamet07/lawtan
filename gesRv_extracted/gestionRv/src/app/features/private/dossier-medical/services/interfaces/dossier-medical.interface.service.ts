import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface DossierMedicalInterfaceService {
  getDossier(): Observable<any> ;
  getMedicamentsString(medicaments: { nom: string, dosage: string }[]): Observable<string>;
}

export const DOSSIER_MEDICAL_SERVICE = new InjectionToken<DossierMedicalInterfaceService>('DossierMedicalInterfaceService');
