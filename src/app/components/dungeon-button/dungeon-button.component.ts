import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-dungeon-button',
  templateUrl: './dungeon-button.component.html',
  styleUrls: ['./dungeon-button.component.scss'],
  animations: [
    trigger('changeState', [
      state('Enter', style({
        backgroundColor: 'lightgrey'
      })),
      state('Continue', style({
        backgroundColor: 'red'
      })),
      state('CollectReward', style({
        backgroundColor: 'yellow'
      })),
      state('FinalWords', style({
        backgroundColor: 'white'
      })),
      transition('* => Enter', [
      ]),
      transition('* => Continue', [
        animate('1s')
      ]),
      transition('* => CollectReward', [
        animate('1s')
      ]),
      transition('* => FinalWords', [
        animate('1s')
      ])
    ]),
  ]
})
export class DungeonButtonComponent implements OnInit {
  @Input() currentState;
  @Input() currentAction;

  constructor() { }

  ngOnInit() {
  }

}
