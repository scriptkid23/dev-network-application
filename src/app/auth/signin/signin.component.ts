import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  bar = 'World';
  email:string = "world";
  constructor() { }

  ngOnInit(): void {
   
  }
  setValue():void {
    console.log("Hello");
  }
  modelChangeFn(e):void{
    console.log(e)
  }

}
