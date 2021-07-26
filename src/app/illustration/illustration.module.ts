import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationComponent } from './illustration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { ForgetPasswordFormComponent } from './components/forget-password-form/forget-password-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { RetoreAccessCodeFormComponent } from './components/retore-access-code-form/retore-access-code-form.component';

const routes: Routes = [
  {
    path: '',
    component: IllustrationComponent ,
    children: [
      {
        path: 'sign-in',
        component : SignInComponent
      }
    ]
  }
]



@NgModule({
  declarations: [
    IllustrationComponent,
    SignInComponent,
    SignInFormComponent,
    ForgetPasswordFormComponent,
    SignUpFormComponent,
    RetoreAccessCodeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IllustrationModule { }
