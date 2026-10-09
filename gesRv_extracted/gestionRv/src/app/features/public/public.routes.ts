import { Routes } from '@angular/router';
import { PublicComponent } from '@features/public/public.component';

export const publicRoutes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: 'creer-compte',
                loadComponent: () =>
                  import('@features/public/creer-compte/creer-compte.component')
                  .then(c => c.CreerCompteComponent)
            },
            {
                path: 'login',
                loadComponent: () =>
                  import('@features/public/login/login.component')
                  .then(c => c.LoginComponent)
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
        ]
    }
];
