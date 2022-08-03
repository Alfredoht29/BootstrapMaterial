import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledComponent } from './cancelled/cancelled.component';
import { DetailsComponent } from './details/details.component';
import { PendingComponent } from './pending/pending.component';
import { PrecanceledComponent } from './precanceled/precanceled.component';
import { SecondtableComponent } from './secondtable/secondtable.component';
import { TablemComponent } from './tablem/tablem.component';

const routes: Routes = [{path:'tablem',component:TablemComponent},
{path:'',redirectTo:'tablem',pathMatch:'full'},
{path:'tablem/:id',component:SecondtableComponent},
{path:'details',component:DetailsComponent},
{path:'cancelled',component:CancelledComponent},
{path:'pending',component:PendingComponent},
{path:'precanceled',component:PrecanceledComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
