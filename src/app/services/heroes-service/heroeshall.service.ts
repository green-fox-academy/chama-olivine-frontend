import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroModel } from '../../models/heroModel';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroeshallService {
  constructor(private http: HttpClient) { }

  getHeroes(userId): Observable<any> {
    const headers = new HttpHeaders({
      userid: userId,
    });
    const options = {
      headers: headers,
    };

    const request = this.http.get<any>(`${environment.hostname}/heroes`, options);

    return request.pipe(map(res => {
      const list: HeroModel[] = [];
      res.forEach(e => list.push(new HeroModel(e)));
      return list;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
