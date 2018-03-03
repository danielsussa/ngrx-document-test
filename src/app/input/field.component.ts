import {Component, Input, OnInit, Output} from '@angular/core';
import {Field} from '../field.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;
  @Output() out: Field;

  constructor() { }

  ngOnInit() {
  }

  getValue(value) {
  }

}
