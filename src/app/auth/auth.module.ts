import { ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
// import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    // SharedModule,
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [
    NoAuthGuard
  ]
  
})
export class AuthModule {}
