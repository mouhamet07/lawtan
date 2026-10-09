import { DemandeFiltre, DemandeInterface, DemandeListeReponse, DemandeModelRequest } from "@features/private/models";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface DemandeInterfaceService {
  createDemande(demandeData: DemandeModelRequest): Observable<DemandeInterface>;
  getDemandes(filtre: DemandeFiltre): Observable<DemandeListeReponse> ;
}

export const DEMANDE_SERVICE = new InjectionToken<DemandeInterfaceService>('DemandeInterfaceService');
