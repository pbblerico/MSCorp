import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiURL = `http://127.0.0.1:8000`;
  constructor(private http: HttpClient) { }

  createUser(firstName: string, lastName: string, mail: string, pass: string, dateOfBirth: string, phone: string, userAddress: string, gend: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/api/register`, {
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
}
