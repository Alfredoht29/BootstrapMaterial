import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledComponent } from './cancelled/cancelled.component';
import { DetailsComponent } from './details/details.component';
import { PendingComponent } from './pending/pending.component';
import { SustitutionComponent } from './sustitution/sustitution.component';
import { SecondtableComponent } from './secondtable/secondtable.component';
import { TablemComponent } from './tablem/tablem.component';

const routes: Routes = [{ path: 'tablem', component: TablemComponent },
{ path: '', redirectTo: 'tablem', pathMatch: 'full' },
{ path: 'cancelled', component: CancelledComponent },
{ path: ':empresa', component: SecondtableComponent },
{ path: ':empresa/details', component: DetailsComponent },
{ path: 'pending', component: PendingComponent },
{ path: 'sustitution', component: SustitutionComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
