import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiURL = `http://127.0.0.1:8000`;
  
  constructor(private http: HttpClient) { }

  createUser(firstName: string, lastName: string, mail: string, pass: string, dateOfBirth: string, phone: string, userAddress: string, gend: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/api/register/`, {
        first_name: firstName,
        last_name: lastName,
        email: mail,
        password: pass,
        birthDate: dateOfBirth,
        phoneNumber: phone,
        address: userAddress,
        gender: gend
    })
  }

  loginRequest(mail: String, pass: String) {
    return this.http.post(`${this.apiURL}/api/login/`, {
      email: mail,
      password: pass
    });
  }

  authorized(): Observable<any> {
    return this.http.get(`${this.apiURL}/api/user/`, {withCredentials: true});
  }

}
