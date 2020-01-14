import { AuthguardService } from './services/authguard/authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DungeonMockComponent } from './components/dungeon-mock/dungeon-mock.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleHeroPageComponent } from './components/single-hero-page/single-hero-page.component';
import { HallComponent } from './components/hall/hall.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'login', component: LoginPageComponent},
  {
    path: 'heroes-hall', component: HomePageComponent,
    canActivate: [AuthguardService],
    children: [{
      path: '', component: HallComponent,
    }]
  }, {
    path: 'heroes-hall/:id', component: HomePageComponent,
    canActivate: [AuthguardService],
    children: [{
      path: 'character', component: SingleHeroPageComponent,
    }, {
      path: 'inventory-page', component: InventoryPageComponent,
    }, {
      path: 'dungeon', component: DungeonMockComponent,
    }]
  },
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false // set true for debugging
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
