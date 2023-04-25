import { Component, OnInit } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ngxFavicon: AngularFaviconService) {}

  ngOnInit() {
    // this.ngxFavicon.setFavicon(favicon_url);
    // // OR
    // this.ngxFavicon.setFavicon(favicon_url, alt_favicon_url);
  }
  title = 'mscorp';
}
