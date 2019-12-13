import { Component, OnInit } from '@angular/core';
import { CreateHeroService } from '../../services/create-hero/create-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
  public heroNameInput: string;
  userId = 1;
  errMessage;

  constructor(private create: CreateHeroService, public router: Router) { }

  createHero() {
    if (this.heroNameInput.length <= 10 && this.heroNameInput.length >= 3) {
      this.create.createNewHero(this.heroNameInput, this.userId.toString()).subscribe(() => {
        location.reload();
      },
        (err) => {
          this.errMessage = 'Heroname already exists';
        });
    } else {
      this.errMessage = 'Heroname should be 3 to 10 characters';
    }
  }

  ngOnInit() {
  }

}
