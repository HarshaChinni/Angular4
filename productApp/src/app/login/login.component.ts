import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private user: UserService) {

  }

  loginFn(ev) {
    ev.preventDefault();
    var userName = ev.target.username.value;
    var inputPassword = ev.target.password.value;
    // console.log("Username is " + userName);
    // console.log("Password is " + inputPassword);
    if (userName == 'admin' && inputPassword == 'admin') {
      this.user.setUserLoggedin();
      this.router.navigate(['dashboard']);
    }

  }



}