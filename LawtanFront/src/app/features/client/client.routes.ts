import { Routes } from '@angular/router';

import { ClientComponent } from '@layouts/client/client.component';

export const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/client/accueil/accueil.component').then(
            (module) => module.AccueilComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
