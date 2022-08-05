import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HintsComponent } from './hints/hints.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';



@NgModule({
  declarations: [
    HomeComponent,
    HintsComponent,
    SeatReservationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
