import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../field.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() field: Field;
  @Output() out: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  form = new FormGroup({
    valueInput: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
    this.field.value = this.form.get('valueInput').value;
    this.out.emit(this.field.value);
  }
}
