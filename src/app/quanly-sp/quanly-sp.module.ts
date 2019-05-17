import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlySpComponent } from './quanly-sp.component';

@NgModule({
  declarations: [QuanlySpComponent],
  exports:[QuanlySpComponent],
  imports: [
    CommonModule
  ]
})
export class QuanlySpModule { }
