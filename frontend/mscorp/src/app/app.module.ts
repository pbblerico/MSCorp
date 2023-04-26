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
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import {MainPageComponent} from "./main-page/main-page.component";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    LoginComponent,
    SignUpComponent,
    PersonalAccountComponent,
    UserNavbarComponent,
    MainPageComponent,
    // TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIconPacks(fas, far);
  }
}
