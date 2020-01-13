import { AvatarComponent } from './../avatar/avatar.component';
import { HallComponent } from './../hall/hall.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { HeroesHallMockComponent } from '../heroes-hall-mock/heroes-hall-mock.component';
import { DungeonMockComponent } from '../dungeon-mock/dungeon-mock.component';
import { InventoryMockComponent } from '../inventory-mock/inventory-mock.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SingleHeroPageComponent } from './../single-hero-page/single-hero-page.component';
import { CreateHeroComponent } from '../create-hero/create-hero.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent,
        HelloWorldComponent,
        NotFoundComponent,
        LoginPageComponent,
        HomePageComponent,
        HeroesHallMockComponent,
        DungeonMockComponent,
        InventoryMockComponent,
        NavBarComponent,
        SingleHeroPageComponent,
        HallComponent,
        AvatarComponent,
        CreateHeroComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
