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
  private _selectedObstacle: Obstacle;
  private _events: string[];

  constructor(private dungeonService: DungeonService, private _route: ActivatedRoute) {
    this._heroId = Number(this._route.snapshot.paramMap.get('id'));
    this.dungeonService.getDungeon(this._heroId).subscribe(response => {
      this._dungeon = response;
    });
  }

  showSelectedItem(item) {
    this._selectedObstacle = item;
  }

  public get dungeon() {
    return this._dungeon;
  }
}
