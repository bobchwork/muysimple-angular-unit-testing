import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { MuySimpleHomeComponent } from './muy-simple-home/muy-simple-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MuySimpleHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
