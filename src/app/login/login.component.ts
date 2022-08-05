import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User|undefined;

  constructor(private route: Router) {
    this.user={
      username:"admin",
      password:"admin",
      privileges:"admin"
    }
   }

  ngOnInit(): void {
    console.log(this.user);
    const user2=this.user
  }
  ingresar(un:string,up:string){
    if(un==this.user?.username && up==this.user?.password){
      this.route.navigate(['tablem']);
    }
    else{
      console.log("error");
      
    }
  }

}
