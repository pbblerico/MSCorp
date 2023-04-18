import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  regForm: FormGroup;

  constructor(private service: ApiService) {
    this.regForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl(null),
      phoneNumber: new FormControl(null),
      email:  new FormControl(null),
      address:  new FormControl(null),
      password1:  new FormControl(null),
      password2:  new FormControl(null),
    });
  }

  createAccount() {
    // alert(this.regForm.get("password1")?.value);
    let firstName = this.regForm.value.firstName;
    let lastName = this.regForm.value.lastName;
    let dateOfBirth = this.regForm.value.dateOfBirth;
    let gender = this.regForm.value.gender;
    let phoneNumber = this.regForm.value.phoneNumber;
    let email = this.regForm.value.email;
    let address =this.regForm.value.address;
    let pass1 = this.regForm.value.password1;
    let pass2 = this.regForm.value.password2;
    // alert(pass1);
    // if(pass1 === null || pass2 === null) {
    //   alert("confirm the password");
    // }
    // alert(gender);
    if(pass1 === pass2) {
      this.service.createUser(firstName, lastName, email, pass1, dateOfBirth, phoneNumber, address).subscribe((user) => {
        alert("user created");
      });
    }
    // else {
    //   alert("wrong password");
    // }
  }
}
