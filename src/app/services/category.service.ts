import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Category } from '../models/category';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http = inject(HttpClient)
  endpointUrl = 'assets/json-data/categories.json';

  getCategory() {
    return this.http.get<Category[]>(this.endpointUrl)
    .pipe(
      retry(1),
      catchError(error => throwError(() => `Oh oh.. Something went wrong ${error.status}`))
    );
  }

}