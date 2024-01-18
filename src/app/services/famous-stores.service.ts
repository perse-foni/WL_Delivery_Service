import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { MostFamous } from '../models/most-famous';

@Injectable({
  providedIn: 'root'
})
export class FamousStoresService {

  http = inject(HttpClient)
  endpointUrl = 'assets/json-data/most_famous_stores_in_general.json';

  constructor() { }

  getMostFamous(){
    return this.http.get<MostFamous[]>(this.endpointUrl)
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Oh oh.. Something went wrong ${error.status}`))
      );
  }


}

