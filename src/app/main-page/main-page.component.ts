import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {CityResponse} from '../City.class';
import {debounceTime, switchMap} from 'rxjs/operators';
import {SearchService} from '../services/search.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  private filteredCities = [];

  private cities = [];

  searchRep = new FormGroup({
    nameSubject: new FormControl(''),
    nameCity: new FormControl('')
  });
  peremennay = true;

  constructor(private searchService: SearchService) { }

  ngOnInit() {



  }



  onSubmit() {


  }

  /*loadCities() {
    this.searchService.getCities()
      .subscribe(res => {
        this.cities = res['data'];
        this.filteredCities = this.cities.slice();
        this.filteredCities.splice(10);
      });
  }
  */

  filterCities(data) {
    const temp = this.cities.slice();
    const newArr = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]['DescriptionRu'].toLowerCase().startsWith(data.toLowerCase())) {
        newArr.push(temp[i]);
      }

      if (newArr.length === 10) {
        break;
      }
    }

    this.filteredCities = newArr;
  }


  /*
  loadCities() {
    this.searchService.metodZapolnen()
      .subscribe(data => this.cities.push(data.toString()));
  }

  filterCity() {
    this.filteredCities = this.searchRep.get('cityInput').valueChanges
      .pipe(
        debounceTime(200),
        switchMap(value => this.searchService.search({city: value}))
      );
  }
*/
}
