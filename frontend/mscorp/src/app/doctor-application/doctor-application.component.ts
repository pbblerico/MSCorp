import { Component } from '@angular/core';
import { applications } from '../applications';

@Component({
  selector: 'app-doctor-application',
  templateUrl: './doctor-application.component.html',
  styleUrls: ['./doctor-application.component.css']
})
export class DoctorApplicationComponent {
  applications = [...applications];
}
