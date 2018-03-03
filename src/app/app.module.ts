import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {analysisReducer} from './analysis.reducer';
import { CheckBoxComponent } from './input/check-box/check-box.component';
import { RadioBoxComponent } from './input/radio-box/radio-box.component';
import { FieldComponent } from './input/field.component';
import { TextComponent } from './input/text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    FieldComponent,
    TextComponent
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
