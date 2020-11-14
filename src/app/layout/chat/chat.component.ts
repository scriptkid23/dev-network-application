import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent) scrollbar?: PerfectScrollbarComponent;

  constructor() { }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.scrollToBottom()
    
  }
  ngOnInit(): void {
  
  }
  public onScrollEvent(event: any): void {
    console.log(event);
  }
  public scrollToBottom():void{
    this.scrollbar.directiveRef.scrollToBottom()
  }
}
