import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  
  singIn!: FormGroup;
  hide = true;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.singIn = this.fb.group({
      email: [''],
      password: [''],
      remember : [false]
    })
  }

}
