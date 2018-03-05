import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {analysisReducer} from './analysis.reducer';
import { CheckBoxComponent } from './input/check-box/check-box.component';
import { RadioBoxComponent } from './input/radio-box/radio-box.component';
import { FieldComponent } from './input/field.component';
import { TextComponent } from './input/text/text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    FieldComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    StoreModule.forRoot({
      analysis: analysisReducer
    }),
    StoreDevtoolsModule.instrument({})
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
