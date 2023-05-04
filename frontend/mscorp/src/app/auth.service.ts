import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Clinic} from "./models/Clinic";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiURL = `http://127.0.0.1:8000`;
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private apiService: ApiService, private client: HttpClient) {
    const token = localStorage.getItem("auth_token");
    // alert(token)
    this._isLoggedIn.next(!!token)
  }

  login(email: String, pass: String) {
    return this.apiService.loginRequest(email, pass).pipe(
      tap((res) => {
        let result = JSON.parse(JSON.stringify(res))["jwt"]
        this._isLoggedIn.next(true)
        localStorage.setItem('auth_token', result)
      })
    );
  }

  getClinicsList(): Observable<Clinic[]> {
    return this.client.get<Clinic[]>(`${this.apiURL}/database/clinic/`);
  }

  logout() {
    localStorage.removeItem('auth_token')
  }



  // isLoggedIn(): Observable<boolean> {
  //   return this._isLoggedIn
  // }

}
