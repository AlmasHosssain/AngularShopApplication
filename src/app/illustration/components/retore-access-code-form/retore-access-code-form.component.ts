import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-retore-access-code-form',
  templateUrl: './retore-access-code-form.component.html',
  styleUrls: ['./retore-access-code-form.component.scss']
})
export class RetoreAccessCodeFormComponent implements OnInit {
  
  restoreAccessCode!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<RetoreAccessCodeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      model : any
    }
  ) { }

  ngOnInit(): void {
    this.restoreAccessCode = this.fb.group({
      email : ['']
    })
  }
  
  close() {
    this.dialogRef.close()
  }
}
