import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { History } from '../models/history';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  http = inject(HttpClient);
  endpointUrl = '/assets/json-data/history-order.json';

  getHistoryOrder() {  
    return this.http.get<History[]>(this.endpointUrl).pipe(
      retry(1),
      catchError((error) =>
        throwError(() => `Oh oh.. Something went wrong ${error.status}`)
      )
    );
  }
}
