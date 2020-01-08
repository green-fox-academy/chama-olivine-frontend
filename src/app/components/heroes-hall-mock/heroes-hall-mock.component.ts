import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-hall-mock',
  templateUrl: './heroes-hall-mock.component.html',
  styleUrls: ['./heroes-hall-mock.component.scss']
})
export class HeroesHallMockComponent implements OnInit {
  hero: Hero;
  myHeroes: Hero[];

  constructor(private router: Router) {
    this.myHeroes = [];
  }

  ngOnInit() {
    this.addHero(5);
  }

  addHero(quantity: number) {
    for (let i = 0; i <= quantity; i++) {
      this.hero = new Hero(i, `Test${i}`);
      this.myHeroes.push(this.hero);
    }
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, {id: id}], { queryParams: { name: name } });
  }
}
