import { HeroModel } from './../../models/heroModel';
import { ActivityIcons } from './../../models/activity';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() hero: HeroModel;
  progressClass: string;
  icons: ActivityIcons;
  currentLabel: string;

  constructor(private router: Router) {
    this.icons = {
      train: '../../assets/activity-icons/train.png',
      scout: '../../assets/activity-icons/scout.jpg',
      rest: '../../assets/activity-icons/rest.png',
    };
  }

  ngOnInit() {
    this.progressColor();
    this.labelActivity();
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, { id: id }], { queryParams: { name: name } });
  }

  progressColor() {
    if (this.hero.healthActPercentage > 80) {
      this.progressClass = 'progress-bar bg-success';
    } else if (this.hero.healthActPercentage > 40) {
      this.progressClass = 'progress-bar bg-warning';
    } else {
      this.progressClass = 'progress-bar bg-danger';
    }
  }

  labelActivity() {
    if (this.hero._idleAction.type === 'train') {
      this.currentLabel = this.icons.train;
    } else if (this.hero._idleAction.type === 'scout') {
      this.currentLabel = this.icons.scout;
    } else {
      this.currentLabel = this.icons.rest;
    }
  }
}
