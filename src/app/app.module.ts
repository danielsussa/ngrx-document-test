import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {analysisReducer} from './analysis.reducer';
import { CheckBoxComponent } from './input/check-box/check-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      analysis: analysisReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
