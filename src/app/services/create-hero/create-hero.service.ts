import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateHeroService {

  constructor(private http: HttpClient) { }

  createNewHero(heroName: string, userId) {
    const headers = new HttpHeaders({
      userid: userId,
    });
    const options = {
      headers: headers,
    };

    return this.http.post(`${environment.hostname}/hero`, { name: heroName }, options);
  }
}
