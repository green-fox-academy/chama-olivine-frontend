import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroesHallMockComponent } from './components/heroes-hall-mock/heroes-hall-mock.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InventoryMockComponent } from './components/inventory-mock/inventory-mock.component';
import { DungeonMockComponent } from './components/dungeon-mock/dungeon-mock.component';
import { HeroMockComponent } from './components/hero-mock/hero-mock.component';

import { ApiService } from './services/api/api.service';
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
    HeroMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
