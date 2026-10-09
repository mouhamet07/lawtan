import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DASH } from '@mock';
import { DashboardStats, Rv } from '@features/private/models';
import { DashboardInterfaceService } from '@features/private/index';

@Injectable({
  providedIn: 'root'
})
export class DashboardMockService implements DashboardInterfaceService {
  constructor() {}
  getDashboardData(): Observable<DashboardStats> {
    return of(MOCK_DASH);
  }
  rvAvenir(): Observable<Rv[]> {
    const data = MOCK_DASH.rendezVous.filter(rv => rv.statut === 'À venir');
    return of(data);
  }
}

