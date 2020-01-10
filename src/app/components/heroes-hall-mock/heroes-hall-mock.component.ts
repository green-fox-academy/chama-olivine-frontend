import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/heroModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-hall-mock',
  templateUrl: './heroes-hall-mock.component.html',
  styleUrls: ['./heroes-hall-mock.component.scss']
})
export class HeroesHallMockComponent implements OnInit {
  hero: HeroModel;
  myHeroes: HeroModel[];

  constructor(private router: Router) {
    this.myHeroes = [];
  }

  ngOnInit() {

  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, {id: id}], { queryParams: { name: name } });
  }
}
