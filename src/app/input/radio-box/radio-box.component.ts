import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../field.interface';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

export interface RadioBox {
  title: string;
}

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css']
})
export class RadioBoxComponent implements OnInit {

  @Input() field: Field;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  form: FormGroup


  ngOnInit() {

    const stuff: { [key: string]: AbstractControl; } = {};
    stuff[this.field.key] = new FormControl('')

    this.form = new FormGroup(stuff);
  }

  onSubmit() {
    this.field.value = this.form.get(this.field.key).value;
    this.change.emit(this.field);
  }

}
