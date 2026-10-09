import { Routes } from '@angular/router';
import { isConnectedGuard } from '@core/guard/is-connected.guard';
export const routes: Routes = [
    {
        path: 'gestion-rv',
        canActivate: [isConnectedGuard],
        loadChildren: () =>
          import('@features/private/private.routes')
          .then(c => c.privateRoutes)
    },
    {
        path: 'public',
        loadChildren: () =>
          import('@features/public/public.routes')
          .then(c => c.publicRoutes)
    },
    {
      path: '',
      redirectTo: '/public',
      pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/public'
    }
];
