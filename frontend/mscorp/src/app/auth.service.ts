import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private apiService: ApiService) {
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

  logout() {
    localStorage.removeItem('auth_token')
  }



  // isLoggedIn(): Observable<boolean> {
  //   return this._isLoggedIn
  // }

}
