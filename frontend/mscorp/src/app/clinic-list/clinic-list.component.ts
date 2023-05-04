import {Component, OnInit} from '@angular/core';
import { clinics } from '../clinics';
import {Clinic} from "../models/Clinic";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit{
  clinics: Clinic[]=[];

  constructor(private service: AuthService) {

  }

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList() {
    this.service.getClinicsList().subscribe((res) => {
      this.clinics = res;
    });
  }
}
