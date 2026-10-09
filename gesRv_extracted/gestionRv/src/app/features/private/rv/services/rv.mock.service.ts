import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rv, RvListeReponse } from '@features/private/models/rv.model';
import { MOCK_RV, MOCK_DETAILS} from '@mock';
import { detailsRv } from '@features/private/models/details.model';
import { environment } from '@environments/environment.development';
import { RvInterfaceService } from '@features/private/index';

@Injectable({
  providedIn: 'root'
})
export class RvMockService implements RvInterfaceService {
  constructor() {}
  getRv(): Observable<Rv[]> {
    return of([...MOCK_RV]);
  }
  getDetailsRv(): Observable<detailsRv> {
    return of(MOCK_DETAILS);
  }
  rvAvenir(): Observable<Rv[]> {
    const data = MOCK_RV.filter(rv => rv.statut === 'À venir');
    return of(data);
  }
  rvPasse(filtre?: any): Observable<RvListeReponse> {
    let rv = MOCK_RV.filter(rv => rv.statut === 'Passé');
    const size = filtre?.size || environment.limit || 5;
    const page = filtre?.page || 1;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(rv.length / size);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const rvPage = rv.slice(startIndex, endIndex);
    return of({
      data: rvPage,
      totalPages,
      currentPage: page,
      totalItems: rv.length,
      pages,
      size
    });
  }
}
