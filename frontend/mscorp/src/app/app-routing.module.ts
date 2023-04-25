import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PersonalAccountComponent} from "./personal-account/personal-account.component";

const routes: Routes = [
  {path: 'home', component: WelcomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'personal', component: PersonalAccountComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
