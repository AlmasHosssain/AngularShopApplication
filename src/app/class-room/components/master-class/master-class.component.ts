import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MasterClassComponent implements OnInit {
  
  firstBox: boolean = true
  secondBox: boolean = false
  thirdBox: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  
  first() {
    this.firstBox = true;
    this.secondBox = this.thirdBox = false;
  }

  second() {
    this.secondBox = true;
    this.firstBox = this.thirdBox = false;
  }

  third() {
    this.thirdBox = true
    this.firstBox = this.secondBox = false;
  }
}
