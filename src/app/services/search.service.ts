
import {HttpClient} from '@angular/common/http';
import {filter, tap} from 'rxjs/operators';
import {City, CityResponse} from '../City.class';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


export interface City {
  city: string;
}

@Injectable({
  providedIn: 'root'
})


export class SearchService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}


    searchTeacher() {
      return this.http.get('/')
        .pipe(

        )
    }



}
