import { RouterTestingModule } from '@angular/router/testing';
import { HeroMockComponent } from './../hero-mock/hero-mock.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHallMockComponent } from './heroes-hall-mock.component';

describe('HeroesHallMockComponent', () => {
  let component: HeroesHallMockComponent;
  let fixture: ComponentFixture<HeroesHallMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeroesHallMockComponent,
        HeroMockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesHallMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
