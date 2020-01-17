import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonActionsService {

  constructor(private http: HttpClient) { }

  public attack(heroId: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('heroId', JSON.stringify(heroId));
    const options = {
      headers
    };
    const request = this.http.put(`${environment.hostname}/fight`, {} , options);
    return request;
  }

  public collectRewards(heroId: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('heroId', JSON.stringify(heroId));
    const options = {
      headers
    };
    const request = this.http.put(`${environment.hostname}/collect`, {} , options);
    return request;
  }

  public finalWords(heroId: number, finalWords: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('heroId', JSON.stringify(heroId));
    const options = {
      headers
    };
    return this.http.put(`${environment.hostname}/finalWords`, {words: finalWords}, options);
  }
}
