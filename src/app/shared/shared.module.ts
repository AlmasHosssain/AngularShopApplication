import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialComponentModule } from './material-componet.module';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialComponentModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
  ],
  exports : [
    HeaderComponent,
    MaterialComponentModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
