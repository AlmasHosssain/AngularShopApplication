import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {
  
  resetByEmail!: FormGroup;
  resetByAccessCode !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<ForgetPasswordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      model : any
    }
  ) { }

  ngOnInit(): void {
    this.resetByEmail = this.fb.group({
      email : ['']
    })
    this.resetByAccessCode = this.fb.group({
      accessCode : ['']
    })
  }
  
  close() {
    this.dialogRef.close()
  }
}
