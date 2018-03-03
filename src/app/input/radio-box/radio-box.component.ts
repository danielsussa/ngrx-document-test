import {Component, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../field.interface';

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
  @Output() out: Field;

  constructor() { }

  ngOnInit() {
    console.log(this.field);
  }

}
