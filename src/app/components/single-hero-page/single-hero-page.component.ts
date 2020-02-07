import { HeroModel } from './../../models/heroModel';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/heroservice/hero.service';
import { Equipment } from 'src/app/models/equipment';

@Component({
  selector: 'app-single-hero-page',
  templateUrl: './single-hero-page.component.html',
  styleUrls: ['./single-hero-page.component.scss']
})

export class SingleHeroPageComponent implements OnDestroy {
  selectedItem: Equipment;
  private _hero: HeroModel;
  private _id: number;
  private _equipmentId: number;
  options: Object[] = [
    { type: 'rest', description: '+HP' },
    // { type: 'train', description: '-HP, +Attack' },
    { type: 'scout', description: '-HP, scouts next enemy' },
  ];
  percent: number;
  timer: any;

  constructor(private heroService: HeroService, private _route: ActivatedRoute) {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this.heroService.getHero(this._id)
      .subscribe(data => {
        this._hero = data;
        this.calculateElapsedTime(this._hero._idleAction.timestamp);
        this.timer = setInterval(() => {
          this.calculateElapsedTime(this._hero._idleAction.timestamp);
        }, 1000);
      });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  equippedItemClick(item: Equipment) {
    this.selectedItem = item;
  }

  chooseActivity(): void {
    document.getElementsByName('options').forEach(e => {
      if (e['checked'] === true) {
        this.heroService.heroAction(this._hero.id, e['value']).subscribe(() => {
          this.heroService.getHero(this._id).subscribe(data => this._hero = data);
        });
      }
    });
  }

  calculateElapsedTime(timestamp): void {
    const activityPercent = Number(((Date.now() / 1000 - timestamp) / 60 * 100).toFixed(0));
    activityPercent > 100 ? this.percent = 100 : this.percent = activityPercent;
    this.heroService.getHero(this._id).subscribe(data => this._hero = data);
  }

  public get hero(): HeroModel {
    return this._hero;
  }
}
