import { Dungeon } from '../../models/dungeons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  constructor(private http: HttpClient) { }

  getDungeon(heroId) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    headers = headers.append('heroid', heroId);
    const options = {
      headers: headers,
      observe: 'response' as 'body'
    };

    const request = this.http.get(`${environment.hostname}/dungeon/`, options);
    return request.pipe(map(res => {
      return new Dungeon(res['body']);
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
