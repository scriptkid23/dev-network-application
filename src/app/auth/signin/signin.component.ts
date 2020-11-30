import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 

  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }
  signInForm = this.fb.group({
    email:['',Validators.email],
    password:['',Validators.minLength(6)],
  })
 
 onSubmitSignIn(): void {

  const credentials = this.signInForm.value;
  this.userService.signin(credentials)
  .subscribe(
    
    data => {
      if(data){
        this.router.navigate([''])
      }
    },
    error => console.log(error)
  );
 }  

}
