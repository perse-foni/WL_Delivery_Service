import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Store } from '../components/interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  http = inject(HttpClient)
  endpointUrl ="assets/json-data/stores.json";
  
  getStore() {
    return this.http.get<Store[]>(this.endpointUrl)
    .pipe(
      retry(1),
      catchError(error => throwError(() => `Oh oh.. Something went wrong ${error.status}`))
    );
  }
}