import { ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';


// import { SharedModule } from '../shared';


@NgModule({
  imports: [
    // SharedModule,
    LayoutRoutingModule,
    CommonModule,
    PerfectScrollbarModule
  ],
  declarations: [
    LayoutComponent,
    NavigationComponent,
    ChatComponent,
    SidebarComponent,
    
 ],
 
})
export class LayoutModule {}
