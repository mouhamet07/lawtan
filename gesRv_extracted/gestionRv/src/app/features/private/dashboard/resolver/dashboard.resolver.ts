import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { DashboardInterfaceService, DASHBOARD_SERVICE } from '@features/private/index';
import { forkJoin, Observable } from 'rxjs';

export const dashboardResolver: ResolveFn<Observable<any>> = () => {
  const dashboardService = inject(DASHBOARD_SERVICE) as DashboardInterfaceService;
  return forkJoin({
    stats: dashboardService.getDashboardData(),
    rvAvenir: dashboardService.rvAvenir()
  });
};
