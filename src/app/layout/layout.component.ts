import { Component, OnInit,ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {WebSocketService} from '../core'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  messages: string[] = [];
  destroyed$ = new Subject();
  constructor(
    private webSocketService:WebSocketService
  ) { }

  ngOnInit(): void {
    console.log("hello")
    let chatSub$ = this.webSocketService.connect();



  }
  

}
