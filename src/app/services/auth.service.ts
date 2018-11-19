import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: boolean;
  private email = '';
  private url = 'http://localhost:8080';

  constructor(
    private http: HttpClient) {
    this.isLogged = false;
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/teacher/login/`, user)
      .pipe(
        tap(
          response => console.log(response)
        )
      );
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(`${this.url}/teacher/registration/`, user)
      .pipe(
        tap(
          response => console.log(response)
        )
      );

  }


  isLogin(): boolean {
    return this.isLogged;
  }


  logInUser(): void {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
    localStorage.clear();
  }





}
