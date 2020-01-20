import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-action',
  templateUrl: './hero-action.component.html',
  styleUrls: ['./hero-action.component.scss']
})
export class HeroActionComponent implements OnInit {
  private _events: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  public get events(): string[] {
    return this._events;
  }
}
