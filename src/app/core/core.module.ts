import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { BookingService } from './services/booking.service';
import { MezzoService } from './services/mezzo.service';
import { ViaggiService } from './services/viaggi.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    BookingService,
    MezzoService,
    ViaggiService
  ]
})
export class CoreModule { }
