import { Router } from '@angular/router';
import { HeroModel } from './../../models/heroModel';
import { Dungeon } from 'src/app/models/dungeons';
import { DungeonActionsService } from './../../services/dungeon-actions/dungeon-actions.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-action',
  templateUrl: './hero-action.component.html',
  styleUrls: ['./hero-action.component.scss']
})
export class HeroActionComponent implements OnInit {
  @Input() hero: HeroModel;
  @Input() dungeon: Dungeon;
  @Output() _data: EventEmitter<any> = new EventEmitter;
  private _action: string;
  private _events: string[] = [];
  private _toState: string;
  private _decider = false;
  public finalWordsInput = '';

  constructor(private dungeonActions: DungeonActionsService, private router: Router) {
  }

  ngOnInit() {
    this._toState = this.stateChecker();
  }

  public attack() {
    if (this._toState !== 'FinalWords') {
      this._toState = 'Continue';
      this._action = 'continue';
      this.dungeonActions.attack(this.dungeon.heroId)
        .subscribe((res) => {
          if (res[1].healthact === 0) {
            this._toState = 'FinalWords';
            this._action = 'Final words';
          }
          if (res[2].removedObstacles === res[2].obstacles.length) {
            this._toState = 'CollectReward';
            this._action = 'collect reward';
          }
          this._data.emit(res);
        },
          (err) => {
            console.log(err);
          });
    }
  }

  public collectReward() {
    return this.dungeonActions.collectRewards(this.dungeon.heroId);
  }

  public stateChecker() {
    this.dungeon.classifyObstacles();
    if (this.dungeon.removedObstacles === 0 && this.hero.healthact !== 0) {
      this._action = 'Enter';
      return 'Enter';
    } else if (this.hero.healthact === 0) {
      this._action = 'Final words';
      return 'FinalWords';
    } else if (this.dungeon.removedObstacles < this.dungeon.obstacles.length) {
      this._action = 'continue';
      return 'Continue';
    } else if (this.dungeon.removedObstacles === this.dungeon.obstacles.length) {
      this._action = 'collect reward';
      return 'CollectReward';
    }
  }

  public changeState() {
    if (this._toState === 'FinalWords' && !this._decider) {
      this._decider = true;
      this._action = 'Send final words';
    } else if (this._toState === 'FinalWords' && this._decider === true) {
      const abs = this.dungeonActions.finalWords(this.dungeon.heroId, this.finalWordsInput);
      abs.subscribe();
      this.router.navigate([`heroes-hall`]);
    }
    if (this.dungeon.removedObstacles < this.dungeon.obstacles.length) {
      this.attack();
    }
    if (this.dungeon.removedObstacles === this.dungeon.obstacles.length) {
      const obs = this.collectReward();
      obs.subscribe();
      this.navToPage(`character`);
    }
  }

  navToPage(page: string) {
    this.router.navigate([`/heroes-hall/${this.hero.id}/${page}`, {id: this.hero.id}],
    { queryParams: { name: this.hero.name } });
  }

  public get toState(): string {
    return this._toState;
  }

  public get action(): string {
    return this._action;
  }

  public get events(): string[] {
    return this._events;
  }

  public get decider(): boolean {
    return this._decider;
  }
}
