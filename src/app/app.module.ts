import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BijouxModule } from './bijoux/bijoux.module';
import { AccessoiresModule } from './accessoires/accessoires.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BijouxModule,
    AccessoiresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
