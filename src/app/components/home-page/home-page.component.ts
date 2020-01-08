import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedHeroId: number;
  heroName: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event) {
        if (this.route.snapshot.paramMap.get('id') != null) {
          this.selectedHeroId = Number(this.route.snapshot.paramMap.get('id'));
        }
      }
    });
    this.route.queryParams.subscribe(params => {
      this.heroName = params['name'];
    });
  }

  ngOnInit() {
  }
}
