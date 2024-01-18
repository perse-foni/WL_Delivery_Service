import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient);
  endpointUrl = 'assets/json-data/user.json';

  getUserProfile() {
    return this.http.get(this.endpointUrl).pipe(
      retry(1),
      catchError((error) =>
        throwError(() => `Oh oh.. Something went wrong ${error.status}`)
      )
    );
  }
}
