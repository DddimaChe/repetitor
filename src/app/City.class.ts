export class City {
  constructor(public name: string) {}
}

export interface CityResponse {
  results: City[];
}


/*
<div class="main-search">
    <span class="naiti_rep">Найти репетитора в вашем районе или городе очень просто! Выберите предмет и ваш город:</span>


    <form class="search" [formGroup]="searchRep" (ngSubmit)="onSubmit()">


     <div class="wrap-search">
        <input type="text" placeholder="Введите название предмета" >
       <select name="list1" multiple>
         <option value="1">Option</option>
       </select>
      </div>



      <div class="wrap-search">
        <input type="text" placeholder="Введите название города">
      </div>

      <div class="btn-search">
      <button type="submit" class="action" [disabled]="searchRep.invalid" >
        Подобрать репетитора
      </button>
      </div>

    </form>
    </div>
 */
