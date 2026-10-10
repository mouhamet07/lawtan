import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: '',
    loadChildren: () =>
      import('@features/client/client.routes').then((module) => module.clientRoutes),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
