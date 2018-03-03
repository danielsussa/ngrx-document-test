import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../field.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() field: Field;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  value: any;

  constructor() { }

  ngOnInit() {
  }

  changeFieldValue(value) {
    this.field.value = value;
    this.change.emit(this.field);
  }
}
