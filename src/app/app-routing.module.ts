import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Help1Component } from './helper/help1/help1.component';


const routes: Routes = [
  {path:"cone",component:Comp1Component },
  {path:"ctwo", component:Comp2Component},
  {path:"cthree",component:Comp3Component},
  {
    path: 'chelper',
    loadChildren: () => import('./helper/helper.module').then(m => m.HelperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
