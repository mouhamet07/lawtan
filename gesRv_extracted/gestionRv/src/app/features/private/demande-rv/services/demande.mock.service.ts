import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DEMANDES } from '@mock';
import { DemandeFiltre, DemandeListeReponse, DemandeInterface, DemandeModelRequest } from '@features/private/models/demandes.model';
import { environment } from '@environments/environment.development';
import { DemandeInterfaceService } from '@features/private/index';
@Injectable({
  providedIn: 'root'
})
export class DemandeMockService implements DemandeInterfaceService{
  constructor() {}
  getDemandes(filtre: DemandeFiltre): Observable<DemandeListeReponse> {
    let demandes = [...MOCK_DEMANDES];
    if (filtre.statut) {
      demandes = demandes.filter(d => d.statut === filtre.statut);
    }
    if (filtre.specialite) {
      demandes = demandes.filter(d => d.specialite === filtre.specialite);
    }
    const size = filtre.size || environment.limit || 5;
    const page = filtre.page || 1;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const demandesPage = demandes.slice(startIndex, endIndex);
    return of({
      data: demandesPage,
      totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages,
      size
    });
  }
  createDemande(demandeData: DemandeModelRequest): Observable<DemandeInterface> {
    const newDemande: DemandeInterface = {
      id: Math.floor(Math.random() * 10000) + 1,
      ...demandeData,
      statut: 'En Attente'
    };
    MOCK_DEMANDES.push(newDemande);
    return of(newDemande);
  }
}
