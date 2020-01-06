import { HeroesService } from "./../../services/heroes-service/heroes.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-hall",
  templateUrl: "./hall.component.html",
  styleUrls: ["./hall.component.scss"]
})
export class HallComponent implements OnInit {
  inputId: Number = 1;

  responseList: any;

  errorMessage: String;

  constructor(private heroesSvc: HeroesService) {}

  ngOnInit() {
    this.populateHeroes(this.inputId);
  }

  populateHeroes(inputId) {
    this.heroesSvc.getHeroes(inputId).subscribe(
      response => {
        this.responseList = response;
        console.log(this.responseList);
      },
      error => {
        this.errorMessage = error;
        console.log(this.errorMessage);
      }
    );
  }
}
