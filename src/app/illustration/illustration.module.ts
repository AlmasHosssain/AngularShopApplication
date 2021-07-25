import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationComponent } from './illustration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

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
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IllustrationModule { }
