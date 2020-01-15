import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InventoryMockComponent } from './components/inventory-mock/inventory-mock.component';
import { DungeonMockComponent } from './components/dungeon-mock/dungeon-mock.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HallComponent } from './components/hall/hall.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { SingleHeroPageComponent } from './components/single-hero-page/single-hero-page.component';
import { EnemyDetailComponent } from './components/enemy-detail/enemy-detail.component';

import { ApiService } from './services/api/api.service';
import { HeroeshallService } from './services/heroes-service/heroeshall.service';
import { HeroService } from './services/single-page/hero-Service';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NotFoundComponent,
    LoginPageComponent,
    NavBarComponent,
    HomePageComponent,
    InventoryMockComponent,
    DungeonMockComponent,
    RegisterComponent,
    SingleHeroPageComponent,
    AvatarComponent,
    HallComponent,
    CreateHeroComponent,
    EnemyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    HeroService,
    HeroeshallService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
