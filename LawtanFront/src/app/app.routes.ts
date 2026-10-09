import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/client/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: 'devis',
    loadComponent: () =>
      import('./features/client/devis/devis.component').then((m) => m.DevisComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  }
];
