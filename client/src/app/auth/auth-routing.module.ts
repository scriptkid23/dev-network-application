import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: 'auth/signin',
    component: AuthComponent,

  },
  {
    path: 'auth/signup',
    component: AuthComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
