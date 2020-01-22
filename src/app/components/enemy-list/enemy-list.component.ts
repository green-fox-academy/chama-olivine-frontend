import { Obstacle } from '../../models/obstacle';
import { Dungeon } from 'src/app/models/dungeons';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enemy-list',
  templateUrl: './enemy-list.component.html',
  styleUrls: ['./enemy-list.component.scss']
})
export class EnemyListComponent {
  _selectedObstacle: Obstacle;

  @Input() dungeon: Dungeon;
  @Output() _valueChange = new EventEmitter;

  selectObstacle(input) {
    if (input.name !== '?') {
      this._selectedObstacle = input;
      this._valueChange.emit(this._selectedObstacle);
    } else {
      this._selectedObstacle = null;
      this._valueChange.emit(this._selectedObstacle);
    }
  }
}
