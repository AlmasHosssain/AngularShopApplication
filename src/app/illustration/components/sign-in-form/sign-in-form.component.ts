import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordFormComponent } from './../forget-password-form/forget-password-form.component';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  
  singIn!: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.singIn = this.fb.group({
      email: [''],
      password: [''],
      remember : [false]
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ForgetPasswordFormComponent, {
      width: '500px',
      height: '550px',
      panelClass : 'dialogBoxSize'
    })
  }

}
