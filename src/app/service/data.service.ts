import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)
  url = 'https://reqres.in/api/users';

  getData() {
    return this.http.get(this.url);
  }
}


