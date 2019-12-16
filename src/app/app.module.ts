import { SingleHeroPageComponent } from './components/single-hero-page/single-hero-page.component';
import { HeroService } from './services/single-page/hero-Service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroesHallMockComponent } from './components/heroes-hall-mock/heroes-hall-mock.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InventoryMockComponent } from './components/inventory-mock/inventory-mock.component';
import { DungeonMockComponent } from './components/dungeon-mock/dungeon-mock.component';

import { ApiService } from './services/api/api.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NotFoundComponent,
    LoginPageComponent,
    NavBarComponent,
    HeroesHallMockComponent,
    HomePageComponent,
    InventoryMockComponent,
    DungeonMockComponent,
    RegisterComponent,
    routingComponents,
    SingleHeroPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    HeroService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
