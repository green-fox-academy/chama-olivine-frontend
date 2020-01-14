import { HeroModel } from './../../models/heroModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/heroservice/hero.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  hero: HeroModel;
  myHeroes: HeroModel[];

  constructor(private router: Router, private srv: HeroService) {
    this.myHeroes = [];
  }

  ngOnInit() {
    this.addHero();
  }

  addHero() {
    this.srv.getHeroes().subscribe((res) => {
      this.myHeroes = res;
    });
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, { id: id }], { queryParams: { name: name } });
  }
}
