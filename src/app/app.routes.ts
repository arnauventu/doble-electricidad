import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'invoices', pathMatch: 'full' },
      {
        path: 'invoices',
        loadComponent: () =>
          import('./pages/invoices/invoices.component').then(
            (m) => m.InvoicesPage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (m) => m.ProfilePage
          ),
      },
    ],
  },
];
