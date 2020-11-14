import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthModule,
    LayoutModule,

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
