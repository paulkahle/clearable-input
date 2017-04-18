import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClearableInputModule } from '../../src';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClearableInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
