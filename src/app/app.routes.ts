import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nuevo-post',
    loadComponent: () => import('./Pages/nuevo-post/nuevo-post.page').then( m => m.NuevoPostPage)
  },
];
