import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Rv, RvListeReponse } from '@features/private/models/rv.model';
import { MOCK_RV, MOCK_DETAILS} from '@mock';
import { detailsRv } from '@features/private/models/details.model';
import { environment } from '@environments/environment.development';
import { RvInterfaceService } from '@features/private/index';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RvService implements RvInterfaceService{
  private readonly apiUrl = environment.rvUrl;
  private readonly detilsUrl = environment.detailsUrl;
  constructor(private http: HttpClient) {}
  getRv(): Observable<Rv[]> {
    return this.http.get<Rv[]>(this.apiUrl);
  }
  getDetailsRv(): Observable<detailsRv> {
    return this.http.get<detailsRv>(this.detilsUrl);
  }
  rvAvenir(): Observable<Rv[]> {
    return this.getRv().pipe(
      delay(1500),
      map(rv => rv.filter(rv => rv.statut === 'À venir'))
    )
  }
  rvPasse(filtre?: any): Observable<RvListeReponse> {
    const size = filtre?.size || environment.limit || 5;
    const page = filtre?.page || 1;
    return this.getRv().pipe(
      delay(1500),
      map(rvList => rvList.filter(rv => rv.statut === 'Passé')),
      map(rvPasseList => {
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;
        const totalPages = Math.ceil(rvPasseList.length / size);
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        const rvPage = rvPasseList.slice(startIndex, endIndex);
        return {
          data: rvPage,
          totalPages,
          currentPage: page,
          totalItems: rvPasseList.length,
          pages,
          size
        } as RvListeReponse;
      })
    )
  }
}
