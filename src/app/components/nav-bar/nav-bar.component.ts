import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() selectedHeroId: number;
  @Input() heroName: string;

  constructor(private router: Router) {
    this.selectedHeroId = 0;
  }

  ngOnInit() {
  }

  isSelected() {
    return !isNaN(this.selectedHeroId);
  }

  navToPage(page: string) {
    this.router.navigate([`/heroes-hall/${this.selectedHeroId}/${page}`], { queryParams: { name: this.heroName } });
  }

  logout() {
    console.log('logged off'); // mock logout service call
  }
}
