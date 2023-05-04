import { Component } from '@angular/core';
import { clinics } from '../clinics';
@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent {
  clinics = [...clinics];
}
