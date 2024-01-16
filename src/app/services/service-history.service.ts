import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  http = inject(HttpClient);
  url = 'https://reqres.in/api/users';

  getData() {
    return this.http.get(this.url)
    .pipe(
      retry(1),
      catchError(error => throwError(() => `Oh oh.. Something went wrong ${error.status}`))
    );
  }
}