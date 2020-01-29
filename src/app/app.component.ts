import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const audio = new Audio();
    audio.src = './assets/foo.mp3';
    audio.load();
    audio.play();
  }
}
