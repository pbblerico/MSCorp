import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {WelcomePageComponent} from "../welcome-page/welcome-page.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email:  new FormControl(null, [Validators.required]),
      password:  new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if(this.loginForm.valid) {
      let email = this.loginForm.value.email;
      let password =this.loginForm.value.password;

      this.service.login(email, password).subscribe((result) => {
        if(result != null) {
          this.router.navigate(['/main'])
        }

      });
    }
    else {
      alert("Fill all fields")
    }


  }
}

