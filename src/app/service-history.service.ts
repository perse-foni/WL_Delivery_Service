import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);

  getData() {
    return this.http.get('https://reqres.in/api/users');
  }
}
