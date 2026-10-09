import { detailsRv, Rv, RvListeReponse } from "@features/private/models";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface RvInterfaceService{
  getRv(): Observable<Rv[]> ;
  getDetailsRv(): Observable<detailsRv>;
  rvAvenir(): Observable<Rv[]> ;
  rvPasse(filtre?: any): Observable<RvListeReponse>;
}

export const RV_SERVICE = new InjectionToken<RvInterfaceService>('RvInterfaceService');
