import { Obstacle } from './../../models/obstacle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon-mock',
  templateUrl: './dungeon-mock.component.html',
  styleUrls: ['./dungeon-mock.component.scss']
})
export class DungeonMockComponent implements OnInit {
  private _obstacle: Obstacle = {
    name: 'Drow female',
    healthmax: 22,
    attackmin: 6,
    attackmax: 12,
    defense: 8,
    experience: 10,
  };

  constructor() {
  }

  ngOnInit() {
  }

  public get obstacle(): Obstacle {
    return this._obstacle;
  }

}
