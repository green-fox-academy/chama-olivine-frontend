import { LoginResponse } from './../../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _acceptedResponses = [
    'Incorrect Username and/or Password!',
    'Please enter a Username and a Password!'
  ];

  constructor(private http: HttpClient) { }

  handleError(error) {
    if (this._acceptedResponses.indexOf(error.error.message) > -1) {
      return error.error.message;
    } else {
      return 'Unknown error, please try again later';
    }
  }

  login(username, password): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: 'response' as 'body'
    };

    const request = this.http.post(`${environment.hostname}/login`,
      {
        'username': `${username}`,
        'password': `${password}`,
      }, options);

    return request.pipe(map(res => {
      return new LoginResponse(res['body'].userId);
    }),
      catchError(err => {
        return throwError(this.handleError(err));
      })
    );
  }
}
