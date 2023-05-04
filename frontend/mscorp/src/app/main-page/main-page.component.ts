import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  authorized = false
  constructor(public service: AuthService){

  }

  ngOnInit(): void {
    this.service.isLoggedIn
    // this.authorized = service.
    // this.service.authorized().subscribe((user) => {
    //   if(user != null) {
    //     this.responseData = user;
    //     alert(this.responseData.id);
    //   }

    // });
  }
}
