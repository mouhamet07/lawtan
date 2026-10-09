import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { DashboardStats, Rv } from '@features/private/models';
import { DashboardInterfaceService } from '@features/private/index';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements DashboardInterfaceService{
  private readonly apiUrl = environment.dashUrl
  constructor(private http: HttpClient) {}
  getDashboardData(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(this.apiUrl);
  }
  rvAvenir(): Observable<Rv[]> {
    return this.getDashboardData().pipe(
      delay(1500),
      map(dashboard => dashboard.rendezVous.filter(rv => rv.statut === 'À venir'))
    );
  }
}

