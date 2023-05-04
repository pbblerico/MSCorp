import { Component } from '@angular/core';
import { clinics } from '../clinics';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  clinics = [...clinics];
}
