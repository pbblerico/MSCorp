import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LoginComponent} from "./login/login.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SignUpComponent} from "./sign-up/sign-up.component";
// import {TestComponent} from "./test/test.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    LoginComponent,
    SignUpComponent,
    // TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
