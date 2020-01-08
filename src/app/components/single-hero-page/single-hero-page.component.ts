import { HeroModel } from './../../models/heroModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/heroservice/hero.service';
import { Equipment } from 'src/app/models/equipment';

@Component({
  selector: 'app-single-hero-page',
  templateUrl: './single-hero-page.component.html',
  styleUrls: ['./single-hero-page.component.scss']
})
export class SingleHeroPageComponent implements OnInit {
  selectedItem: Equipment;
  private _hero: HeroModel;
  private _id: number;
  private _equipmentId: number;

  constructor(private _getSingleHero: HeroService, private _route: ActivatedRoute) {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._getSingleHero.getHero(this._id)
      .subscribe(data => this._hero = data);
  }

  equippedItemClick(item: Equipment) {
    this.selectedItem = item;
  }

  ngOnInit() {
  }

  public get hero(): HeroModel {
    return this._hero;
  }
}
