import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Help1Component } from './help1/help1.component';
import { Help2Component } from './help2/help2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Help1Component, Help2Component],
  imports: [
    CommonModule, RouterModule.forChild([
      {path:"chone", component:Help1Component},
      {path:"chtwo", component:Help2Component},
    ])
  ]
})
export class HelperModule { }
