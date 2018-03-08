import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../field.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;
  @Output() out: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getValue(value) {
    this.out.emit(value);
  }

}
