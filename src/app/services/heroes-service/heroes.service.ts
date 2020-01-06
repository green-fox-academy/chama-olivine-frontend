import { HeroListResponse } from "src/app/models/heroListResponse";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(userID): Observable<HeroListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        userId: `${userID}`
      })
    };

    return this.http.get(`http://localhost:3000/heroes/`, httpOptions);
  }
}
