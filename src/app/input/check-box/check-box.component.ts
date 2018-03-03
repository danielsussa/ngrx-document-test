import { Component, OnInit } from '@angular/core';


export interface CheckBox {
  title: string;
}



@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
