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
  errMessage: string;
  smallImgInput: any;
  bigImgInput: any;
  smallImgInd = 'X';
  bigImgInd = 'X';

  constructor(private create: HeroService, public router: Router) { }

  createHero() {
    if (this.heroNameInput.length <= 10 && this.heroNameInput.length >= 3) {
      this.create.createNewHero(this.heroNameInput, this.smallImgInput, this.bigImgInput).subscribe(() => {
        location.reload();
      },
        (err) => {
          this.errMessage = 'Heroname already exists';
        });
    } else {
      this.errMessage = 'Heroname should be 3 to 10 characters';
    }
  }

  getSmallImg(event) {
    if (event.target.files[0].size < 100000) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.smallImgInput = reader.result;
        this.errMessage = '';
        this.smallImgInd = '✔';
      };
    } else {
      this.errMessage = 'Max image size is 100kb';
    }
  }

  getBigImg(event) {
    if (event.target.files[0].size < 100000) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.bigImgInput = reader.result;
        this.errMessage = '';
        this.bigImgInd = '✔';
      };
    } else {
      this.errMessage = 'Max image size is 100kb';
    }
  }

  ngOnInit() {
  }

}
