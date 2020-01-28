import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../../models/heroModel';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private router: Router) { }

  getHeroes(): Observable<any> {
    const request = this.http.get<any>(`${environment.hostname}/heroes`);
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

  createNewHero(heroName: string) {
    return this.http.post(`${environment.hostname}/hero`, { name: heroName });
  }

  handleError() {
    this.router.navigate([`heroes-hall`]);
  }

  getHero(heroId): Observable<HeroModel> {
    const request = this.http.get(`${environment.hostname}/hero/${heroId}`);
    return request.pipe(map(res => {
      return new HeroModel(res);
    }),
      catchError(err => {
        return throwError(this.handleError());
      })
    );
  }

  heroAction(heroId, type): Observable<Object> {
    const request = this.http.put(`${environment.hostname}/hero/${heroId}/action/${type}`, {});
    return request.pipe(map(res => {
      return res;
    }),
      catchError(() => {
        return throwError(this.handleError());
      })
    );
  }
}
