import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType: string = '';

  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
    
  }
  @ViewChild(SigninComponent)
  private SigninComponentInstance: SigninComponent;

  ngOnInit(): void {
   
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    })
  }
  onChildButtonClick(value:any):void {
    alert("Event catch from child" + value + this.SigninComponentInstance.email );
   
  }
  signin():void{
    //TODO:
  }
  signup():void{
  //  TODO:
  }

}
