import { Obstacle } from './../../models/obstacle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enemy-detail',
  templateUrl: './enemy-detail.component.html',
  styleUrls: ['./enemy-detail.component.scss']
})
export class EnemyDetailComponent implements OnInit {
  @Input() obstacle: Obstacle;

  constructor() { }

  ngOnInit() {
  }

}
