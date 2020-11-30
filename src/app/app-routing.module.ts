import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  { 
    path: '',
    loadChildren : () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
  preloadingStrategy: PreloadAllModules 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
