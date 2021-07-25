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
    path: 'illustration',
    loadChildren : ()=>import('./illustration/illustration.module').then(m=>m.IllustrationModule)
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
