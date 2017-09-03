import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdRadioModule, MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MdButtonModule, MdCheckboxModule, MdIconModule, MdRadioModule, MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
