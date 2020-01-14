import { AuthService } from './../../services/auth/auth.service';
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
  auth: AuthService;

  constructor(private router: Router, auth: AuthService) {
    this.selectedHeroId = 0;
    this.auth = auth;
  }

  ngOnInit() {
  }

  isSelected() {
    return !isNaN(this.selectedHeroId);
  }

  navToPage(page: string) {
    this.router.navigate([`/heroes-hall/${this.selectedHeroId}/${page}`, {id: this.selectedHeroId}],
    { queryParams: { name: this.heroName } });
  }
}
