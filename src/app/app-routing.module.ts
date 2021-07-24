import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'purchase',
    loadChildren : ()=>import('./purchase/purchase.module').then(m=>m.PurchaseModule)
  },
  {
    path : "**",
    redirectTo : '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
