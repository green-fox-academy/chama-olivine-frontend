import { HeroModel } from './../../models/heroModel';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() hero: HeroModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateHero(id: number, name: string) {
    this.router.navigate([`heroes-hall/${id}/character`, {id: id}], { queryParams: { name: name } });
  }
}
