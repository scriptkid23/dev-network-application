import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  email:string = "";
  password:string = "";

  @Output() parentHandleSignIn =  new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
   
  }
  
  signin():void {

  }
  handleSignin():void {
  
    // console.log(this.email);
    // console.log(this.password);
    // this.parentHandleSignIn.emit("Funtion SignIn from child");
  }
  

}
