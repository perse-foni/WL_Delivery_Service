import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  http = inject(HttpClient);
  endpointUrl = 'assets/json-data/stores.json';

  getStores() {
    
    return this.http.get<Store[]>(this.endpointUrl).pipe(
      retry(1),
      catchError((error) =>
        throwError(() => `Oh oh.. Something went wrong ${error.status}`)
      )
    );
  }
}
