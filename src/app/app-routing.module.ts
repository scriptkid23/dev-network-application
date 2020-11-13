import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren : () => import('./layout/layout.module').then(m => m.LayoutModule),
    
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
