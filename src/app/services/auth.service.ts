import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: boolean;

  constructor(private http: HttpClient) {

  }

  login(user: User): Observable<any> {
    return this.http.post<any>('/login', user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/registration', user);
  }


  isLogin(): boolean {
    return this.isLogged;
  }

  logout() {
    this.isLogged = false;
    localStorage.clear();
  }

}
