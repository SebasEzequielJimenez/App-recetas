import { Routes } from '@angular/router';
import
export const routes: Routes = [
{
  path: 'admin',
  canActivate: [adminGuard], // si usas guard de administrador
  loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent)
}
];
