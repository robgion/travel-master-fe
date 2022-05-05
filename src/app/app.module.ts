import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './@template/navbar.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './features/menu/component/menu/menu.component';
import { MenuModule } from './features/menu/menu-module/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
