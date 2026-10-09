import { DashboardStats, Rv } from "@features/private/models";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface DashboardInterfaceService {
  getDashboardData(): Observable<DashboardStats>;
  rvAvenir(): Observable<Rv[]>;
}

export const DASHBOARD_SERVICE = new InjectionToken<DashboardInterfaceService>('DashboardInterfaceService');
