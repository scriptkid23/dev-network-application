import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  email:string = "";
  password:string = "";

  constructor() { }

  ngOnInit(): void {
   
  }
 
  handleSignIn():void{
    console.log(this.email,this.password);
  }

}
