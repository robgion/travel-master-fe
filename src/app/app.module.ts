import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './@template/navbar.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './features/menu/menu-module/menu.module';
import { BookingComponent } from './features/booking/booking/booking.component';
import { BookingModuleModule } from './features/booking/booking-module/booking-module.module';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    MenuModule,
    SharedModule,
    BookingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
