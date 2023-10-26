import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/Model/user';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private authservice: AuthService, private alertify:AlertifyService
    ,private router: Router){}

  onLogin(loginForm:NgForm)
  {
    console.log(loginForm.value)
    this.authservice.authUser(loginForm.value).subscribe(
      (response: UserForLogin) =>{
        console.log(response);
        let user=response;
        if (user) {
          localStorage.setItem('token', user.token);
          var test=localStorage.setItem('userName', user.username);
          console.log('Test User'+test)
          this.alertify.success('Login Successful');
          this.router.navigate(['/']);
      }
      }
      
    );
  }

}
