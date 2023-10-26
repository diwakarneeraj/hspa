import { Component } from '@angular/core';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedinUser?: any;

  constructor(private alertify: AlertifyService){}

  loggedin(){
    this.loggedinUser= localStorage.getItem('userName');
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success('You are successfully logged out')
  }
}
