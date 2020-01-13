import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroComponent } from './create-hero.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HallComponent } from '../hall/hall.component';
import { AvatarComponent } from '../avatar/avatar.component';

describe('CreateHeroComponent', () => {
  let component: CreateHeroComponent;
  let fixture: ComponentFixture<CreateHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [HallComponent, AvatarComponent, CreateHeroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
