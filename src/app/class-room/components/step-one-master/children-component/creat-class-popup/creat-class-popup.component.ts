import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-creat-class-popup',
  templateUrl: './creat-class-popup.component.html',
  styleUrls: ['./creat-class-popup.component.scss']
})
export class CreatClassPopupComponent implements OnInit {
  
  classNameForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<CreatClassPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      model : any
    }
  ) { }

  ngOnInit(): void {
    this.classNameForm = this.fb.group({
      class : ['']
    })
  }
  
  close() {
    this.dialogRef.close()
  }
}
