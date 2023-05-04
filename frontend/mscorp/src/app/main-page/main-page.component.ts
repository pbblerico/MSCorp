import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { Observable } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  authorized: boolean
  constructor(public service: AuthService){
    this.authorized = false
  }

  ngOnInit(): void {
    // alert(this.service.isLoggedIn.get)
    // this.service.isLoggedIn.subscribe((val) => {
    //   alert(val)
    //   // this.authorized = val
    // })
    // this.authorized = this.service.isLoggedIn()
    // this.authorized = this.service.isLoggedIn
    // this.authorized = service.
    // this.service.authorized().subscribe((user) => {
    //   if(user != null) {
    //     this.responseData = user;
    //     alert(this.responseData.id);
    //   }

    // });
  }
}
