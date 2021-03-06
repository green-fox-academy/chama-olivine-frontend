import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HallComponent } from './components/hall/hall.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
        LoginPageComponent,
        NavBarComponent,
        RegisterComponent,
        HelloWorldComponent,
        NotFoundComponent,
        HomePageComponent,
        HallComponent,
        AvatarComponent,
        CreateHeroComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
