import { HeroModel } from './../../models/heroModel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/heroservice/hero.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit, OnDestroy {
  hero: HeroModel;
  myHeroes: HeroModel[];
  timer: any;

  constructor(private router: Router, private srv: HeroService) {
    this.myHeroes = [];
  }

  ngOnInit() {
    this.addHero();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  addHero() {
    this.srv.getHeroes().subscribe((res) => this.myHeroes = res);
    this.timer = setInterval(() => {
      this.srv.getHeroes().subscribe((res) => this.myHeroes = res);
    }, 3600000);
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, { id: id }], { queryParams: { name: name } });
  }
}
