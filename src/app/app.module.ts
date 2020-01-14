import { AuthinterceptorService } from './services/authinterceptor/authinterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

import { ApiService } from './services/api/api.service';
import { HeroService } from './services/heroservice/hero.service';


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
    CreateHeroComponent
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
    {provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
