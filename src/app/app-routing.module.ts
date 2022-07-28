import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondtableComponent } from './secondtable/secondtable.component';
import { TablemComponent } from './tablem/tablem.component';

const routes: Routes = [{path:'tablem',component:TablemComponent},{path:'tablem/:id',component:SecondtableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
