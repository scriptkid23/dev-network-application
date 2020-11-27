import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 

  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
   
  }
  signInForm = this.fb.group({
    email:['',Validators.email],
    password:['',Validators.minLength(6)],
  })
 
 onSubmitSignIn(): void {

  const credentials = this.signInForm.value;
  console.log(credentials)
  this.userService.signin(credentials)
  .subscribe(
    
    data => {console.log(data)},
    error => console.log(error)
  );
 }  

}
