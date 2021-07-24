import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.services';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  login!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email : ['',[Validators.required, Validators.email,this.loginService.emailMatch('admin@gmail.com')]],
      password : ['',[Validators.required,this.loginService.passwordMatch('admin')]],
      check : ['']
    })
  }

  submit() {
    this.router.navigate(['/purchase/single-purchase/create'])
  }

}
