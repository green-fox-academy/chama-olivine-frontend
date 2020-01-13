import { AvatarComponent } from './../avatar/avatar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallComponent } from './hall.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateHeroComponent } from '../create-hero/create-hero.component';

describe('HallComponent', () => {
  let component: HallComponent;
  let fixture: ComponentFixture<HallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [HallComponent, AvatarComponent, CreateHeroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
