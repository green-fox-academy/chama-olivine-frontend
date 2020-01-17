import { HeroModel } from './../../models/heroModel';
import { HeroService } from 'src/app/services/heroservice/hero.service';
import { DungeonService } from '../../services/dungeon-service/dungeon.service';
import { Component } from '@angular/core';
import { Dungeon } from 'src/app/models/dungeons';
import { ActivatedRoute } from '@angular/router';
import { Obstacle } from 'src/app/models/obstacle';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent {

  private _dungeon: Dungeon;
  private _heroId: number;
  private _hero: HeroModel;
  private _selectedObstacle: Obstacle;
  private _events: any;

  constructor(private dungeonService: DungeonService, private _route: ActivatedRoute, private _getSingleHero: HeroService) {
    this._heroId = Number(this._route.snapshot.paramMap.get('id'));
    this.dungeonService.getDungeon(this._heroId).subscribe(response => {
      this._dungeon = response;
      this._dungeon.classifyObstacles();
    });
    this._getSingleHero.getHero(this._heroId)
    .subscribe(data => this._hero = data);
  }

  public showSelectedItem(item) {
    this._selectedObstacle = item;
  }

  public onProgress(event) {
    this._events = event [0];
    this._hero = event [1];
    const newDungeon = new Dungeon(event[2]);
    this._dungeon = newDungeon;
    this.dungeon.classifyObstacles();
  }

  public get dungeon() {
    return this._dungeon;
  }

  public get hero() {
    return this._hero;
  }
}
