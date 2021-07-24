import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewPurchaseComponent } from './components/add-new-purchase/add-new-purchase.component';
import { AllPurchasesComponent } from './components/all-purchases/all-purchases.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: 'single-purchase/:action',
        component : AddNewPurchaseComponent
      },
      {
        path: 'single-purchase/:action/:id',
        component : AddNewPurchaseComponent
      },
      {
        path: 'all-purchase',
        component : AllPurchasesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AddNewPurchaseComponent,
    AllPurchasesComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PurchaseModule { }
