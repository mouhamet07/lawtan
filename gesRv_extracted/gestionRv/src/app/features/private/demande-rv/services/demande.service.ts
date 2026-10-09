import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { MOCK_DEMANDES } from '@mock';
import { DemandeFiltre, DemandeListeReponse, DemandeInterface, DemandeModelRequest } from '@features/private/models/demandes.model';
import { environment } from '@environments/environment.development';
import { DemandeInterfaceService } from '@features/private/index';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService implements DemandeInterfaceService{
  private readonly apiUrl = environment.demandesUrl;
  constructor(private http: HttpClient) {}
  getDemandes(filtre: DemandeFiltre): Observable<DemandeListeReponse> {
    let params = new HttpParams()
      .set('_page', (filtre.page || 1).toString())
      .set('_limit', (filtre.size || environment.limit || 5).toString());
    if(filtre.statut){
      params = params.set('statut', filtre.statut);
    }
    if(filtre.specialite){
      params = params.set('specialite', filtre.specialite);
    }
    return this.http.get<DemandeInterface[]>(this.apiUrl, {params, observe: 'response'})
      .pipe(
        delay(1500),
        map( resp=>{
          const totalItems = Number(resp.headers.get('X-Total-Count') || resp.body?.length || 0);
          const size = Number(params.get('_limit'));
          const totalPages = Math.ceil(totalItems/size);
          const pages = Array.from({length: totalPages}, (_, i) => i+1);
          return {
            data: resp.body || [],
            totalPages,
            currentPage: Number(params.get('_page')),
            totalItems,
            pages,
            size
          } as DemandeListeReponse;
        })
      );
  }
  createDemande(demandeData: DemandeModelRequest): Observable<DemandeInterface> {
    const newDemande:  Omit<DemandeInterface, 'id'> = {
      ...demandeData,
      statut: 'En Attente'
    };
    return this.http.post<DemandeInterface>(this.apiUrl, newDemande);
  }
}
