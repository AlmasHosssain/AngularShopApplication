import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterClassComponent } from './components/master-class/master-class.component';
import { Routes, RouterModule } from '@angular/router';
import { ClassRoomComponent } from './class-room.component';
import { SharedModule } from '../shared/shared.module';
import { StepOneMasterComponent } from './components/step-one-master/step-one-master.component';
import { StepTwoMasterComponent } from './components/step-two-master/step-two-master.component';
import { StepThreeMasterComponent } from './components/step-three-master/step-three-master.component';
import { CreatClassPopupComponent } from './components/step-one-master/children-component/creat-class-popup/creat-class-popup.component';

const routes: Routes = [
  {
    path: '',
    component: ClassRoomComponent ,
    children: [
      {
        path: 'create-class',
        component : MasterClassComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MasterClassComponent,
    ClassRoomComponent,
    StepOneMasterComponent,
    StepTwoMasterComponent,
    StepThreeMasterComponent,
    CreatClassPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ClassRoomModule { }
