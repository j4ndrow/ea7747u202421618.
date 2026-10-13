import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', loadComponent: () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound) },
];
