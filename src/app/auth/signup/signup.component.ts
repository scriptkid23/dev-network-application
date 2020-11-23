import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string = "";
  email:string = "";
  password:string = "";

  constructor() { }

  ngOnInit(): void {
  }
  setValue(value):void {

  }
  signup(): void {

  }

}
