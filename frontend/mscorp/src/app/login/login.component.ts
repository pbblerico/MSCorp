import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {WelcomePageComponent} from "../welcome-page/welcome-page.component";
import {NavbarComponent} from "../navbar/navbar.component";
// import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  //
  // constructor(private service: ApiService) {
  // }
  // login() {
  //   this.service.login("an", "an").subscribe((user) => {
  //     alert(user);
  //   })
  // }
}

// @NgModule({
//   declarations: [
//     WelcomePageComponent,
//     NavbarComponent
//   ]
// })
