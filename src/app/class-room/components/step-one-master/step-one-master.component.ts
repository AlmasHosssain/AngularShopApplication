import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatClassPopupComponent } from './children-component/creat-class-popup/creat-class-popup.component';

@Component({
  selector: 'app-step-one-master',
  templateUrl: './step-one-master.component.html',
  styleUrls: ['./step-one-master.component.scss']
})
export class StepOneMasterComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openPopUp() {
    const dialogRef = this.dialog.open(CreatClassPopupComponent, {
      width: '500px',
      height: '435px',
      panelClass : 'dialogBoxSize'
    })
  }

}
