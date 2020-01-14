import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/heroservice/hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
  public heroNameInput = '';
  errMessage;

  constructor(private create: HeroService, public router: Router) { }

  createHero() {
    if (this.heroNameInput.length <= 10 && this.heroNameInput.length >= 3) {
      this.create.createNewHero(this.heroNameInput).subscribe(() => {
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
