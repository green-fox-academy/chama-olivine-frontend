import { HeroService } from '../../services/single-page/hero-Service';
import { HeroModel } from './../../models/heroModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-hero-page',
  templateUrl: './single-hero-page.component.html',
  styleUrls: ['./single-hero-page.component.scss']
})
export class SingleHeroPageComponent implements OnInit {
  private _hero: HeroModel;
  private _id: number;

  constructor(private _getSingleHero: HeroService, private _route: ActivatedRoute ) {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._getSingleHero.getHero(this._id)
      .subscribe(data => this._hero = data);
  }

  ngOnInit() {
  }

  public get hero(): HeroModel {
    return this._hero;
  }
}
