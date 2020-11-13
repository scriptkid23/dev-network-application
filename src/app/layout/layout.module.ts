import { ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutRoutingModule } from './layout-routing.module';


// import { SharedModule } from '../shared';


@NgModule({
  imports: [
    // SharedModule,
    LayoutRoutingModule,
    CommonModule 
  ],
  declarations: [
   
  NavigationComponent],
 
})
export class LayoutModule {}
