import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    DniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
