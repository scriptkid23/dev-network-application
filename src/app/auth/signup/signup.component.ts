import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
      private fb:FormBuilder,
      private userService:UserService,
      private router: Router
  
  ) { }

  ngOnInit(): void {
  }
  signUpForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.email],
    password:['',Validators.minLength(6)],
  })
  onSubmitSignUp(): void {
    const credentials = this.signUpForm.value;
  this.userService.signup(credentials)
  .subscribe(
    
    data => {
      if(data){
        this.router.navigate([''])
      }
    },
    error => console.log(error)
  );
  alert('Register Succeeded');
 }  
}
