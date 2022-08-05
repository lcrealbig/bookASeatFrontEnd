import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HintsComponent } from './home/hints/hints.component';
import { HomeComponent } from './home/home/home.component';
import { SeatReservationComponent } from './home/seat-reservation/seat-reservation.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hints', component: HintsComponent },
  { path: 'seat-reservation', component: SeatReservationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
