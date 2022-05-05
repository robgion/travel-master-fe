import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './@template/navbar.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonSelectorComponent } from './shared/components/common-selector/common-selector.component';
import { SharedModule } from './shared/shared.module';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
