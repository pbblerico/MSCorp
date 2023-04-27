import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PersonalAccountComponent} from "./personal-account/personal-account.component";
import {ProfileComponent} from "./profile/profile.component";
import {SecurityComponent} from "./security/security.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {HealthComponent} from "./health/health.component";
import {EventsComponent} from "./events/events.component";
import {HistoryComponent} from "./history/history.component";
import {ActionsComponent} from "./actions/actions.component";
import {CreateAccountComponent} from "./create-account/create-account.component";

const routes: Routes = [
  {path: 'home', component: WelcomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'personal', component: PersonalAccountComponent},
  {path: 'main', component: MainPageComponent, children: [
      {path: 'health', component: HealthComponent},
      {path: 'events', component: EventsComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'actions', component: ActionsComponent},
      {path: 'add-event', component: CreateAccountComponent}
    ]},
  {path: 'personal', component: PersonalAccountComponent, children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'security', component: SecurityComponent}
    ]},

  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
