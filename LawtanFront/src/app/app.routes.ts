import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@features/client/client.routes').then((module) => module.clientRoutes),
  },
  { path: '**', redirectTo: '' },
];
