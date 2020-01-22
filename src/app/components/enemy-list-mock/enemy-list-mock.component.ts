import { Dungeon } from 'src/app/models/dungeons';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Obstacle } from 'src/app/models/obstacle';

@Component({
  selector: 'app-enemy-list-mock',
  templateUrl: './enemy-list-mock.component.html',
  styleUrls: ['./enemy-list-mock.component.scss']
})
export class EnemyListMockComponent {
  _selectedObstacle: Obstacle;

  @Input() dungeon: Dungeon;
  @Output() _valueChange = new EventEmitter;

  selectObstacle(input) {
      this._selectedObstacle = input;
      this._valueChange.emit(this._selectedObstacle);
  }
}
