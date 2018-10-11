import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: boolean;
  private email = '';

  constructor(private http: HttpClient) {
    this.isLogged = false;
  }

  login(user: User): Observable<any> {
    this.email = user.email;
    return this.http.post<any>('/login', user);
  }

  register(user: User): Observable<User> {
    this.email = user.email;
    return this.http.post<User>('/registration', user);
  }


  isLogin(): boolean {
    return this.isLogged;
  }


  logInUser(): void {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
    localStorage.clear();
  }

}
