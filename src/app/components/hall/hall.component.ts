import { HeroeshallService } from './../../services/heroes-service/heroeshall.service';
import { HeroModel } from './../../models/heroModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  hero: HeroModel;
  myHeroes: HeroModel[];
  newList: any;
  userId: string;
  constructor(private router: Router, private srv: HeroeshallService) {
    this.myHeroes = [];
    this.userId = '1';
  }

  ngOnInit() {
    this.addHero();
  }

  addHero() {
    this.srv.getHeroes(this.userId).subscribe((res) => {
      this.myHeroes = res;
    });
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, { id: id }], { queryParams: { name: name } });
  }
}
