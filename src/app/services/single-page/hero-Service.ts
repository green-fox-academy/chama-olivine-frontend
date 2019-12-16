import { Router } from '@angular/router';
import { HeroModel } from '../../models/heroModel';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private router: Router) { }

  handleError(err) {
    this.router.navigate([`heroes-hall`]);
  }

  getHero(heroId): Observable<HeroModel> {
    const request = this.http.get(`${environment.hostname}/hero/${heroId}`);
    return request.pipe(map(res => {
      return new HeroModel(res);
    }),
      catchError(err => {
        return throwError(this.handleError(err));
      })
    );
  }
}
