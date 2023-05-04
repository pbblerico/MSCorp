import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  regForm: FormGroup;

  constructor(private service: ApiService, private router: Router) {
    this.regForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      email:  new FormControl(null, [Validators.required]),
      address:  new FormControl(null, [Validators.required]),
      password1:  new FormControl(null, [Validators.required]),
      password2:  new FormControl(null, [Validators.required]),
    });
  }

  createAccount() {
    let pass1 = this.regForm.value.password1;
    let pass2 = this.regForm.value.password2;
    if(this.regForm.get('email')?.invalid) {
      alert("Wrong email format")
    }
    else if(this.regForm.invalid) {
      alert("fill all fields")
    }

    else if(pass1 === pass2) {
      let firstName = this.regForm.value.firstName;
      let lastName = this.regForm.value.lastName;
      let dateOfBirth = this.regForm.value.dateOfBirth;
      let gender = this.regForm.value.gender;
      let phoneNumber = this.regForm.value.phoneNumber;
      let email = this.regForm.value.email;
      let address =this.regForm.value.address;

      this.service.createUser(firstName, lastName, email, pass1, "2000-12-12", phoneNumber, address, gender).subscribe((result) => {
        this.router.navigate(['/login'])
      },
        (err) => {
        let error_message = JSON.parse(JSON.stringify(err))["error"];
        alert("error " + Object.keys(error_message)[0] + ": " + error_message[Object.keys(error_message)[0]]);
        return;
      }
      );
    }
    else {
      alert("wrong password");
    }
  }
}
