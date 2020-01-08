import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMockComponent } from './hero-mock.component';

describe('HeroMockComponent', () => {
  let component: HeroMockComponent;
  let fixture: ComponentFixture<HeroMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
