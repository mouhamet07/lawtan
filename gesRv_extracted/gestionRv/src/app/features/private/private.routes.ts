import { Routes } from '@angular/router';
import { PrivateComponent } from '@features/private/private.component';
import { isConnectedGuard } from '@core/guard/is-connected.guard';
import { demandeResolver } from './demande-rv/resolver/demande.resolver';
import { dashboardResolver } from './dashboard/resolver/dashboard.resolver';

export const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        canActivate: [isConnectedGuard],
        canActivateChild: [isConnectedGuard],
        children: [
            {
              path: 'dash',
              loadComponent: () =>
                import('@features/private/dashboard/dashboard.component')
                .then(c => c.DashboardComponent),
                resolve: {
                  dashboardData: dashboardResolver
                }
            },
            {
              path: 'dossier',
              loadComponent: () =>
                import('@features/private/dossier-medical/dossier-medical.component')
                .then(c => c.DossierMedicalComponent)
            },
            {
              path: 'rv',
              loadComponent: () =>
                import('@features/private/rv/rv.component')
                .then(c => c.RvComponent)
            },
            {
              path: 'drv',
              loadComponent: () =>
                import('@features/private/demande-rv/list-demande/list-demande.component')
                .then(c => c.ListDemandeComponent),
                resolve: {
                  demandes: demandeResolver
                }
            },
            {
              path: 'form-drv',
              loadComponent: () =>
                import('@features/private/demande-rv/form-demande/form-demande.component')
                .then(c => c.FormDemandeComponent)
            },
            {
              path: 'details-rv/:id',
              loadComponent: () =>
                import('@features/private/rv/details-rv/details-rv.component')
                .then(c => c.DetailsRvComponent)
            },
            {
              path: '',
              redirectTo: 'dash',
              pathMatch: 'full'
            },
        ]
    }
];
