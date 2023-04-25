import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit() {
    // this.ngxFavicon.setFavicon(favicon_url);
    // // OR
    // this.ngxFavicon.setFavicon(favicon_url, alt_favicon_url);
  }
  title = 'mscorp';
}
