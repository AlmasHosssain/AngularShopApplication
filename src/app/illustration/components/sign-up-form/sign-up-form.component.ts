import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RetoreAccessCodeFormComponent } from './../retore-access-code-form/retore-access-code-form.component';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  
  signUp! : FormGroup
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.signUp = this.fb.group({
      email: [''],
      accessCode: [''],
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(RetoreAccessCodeFormComponent, {
      width: '500px',
      height: '470px',
      panelClass : 'dialogBoxSize'
    })
  }

}
