import {Component, OnInit} from '@angular/core';
import {Analysis} from './analysis.interface';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as AnalysisActions from './analysis.actions';
import {Field} from './field.interface';
import {AppState} from './state';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  analysis$: Observable<Analysis>;

  ngOnInit() {
    this.store.dispatch(new AnalysisActions.GetAnalysis());
  }


  constructor(private store: Store<AppState>) {
    this.analysis$ = this.store.select('analysis');
  }
}
