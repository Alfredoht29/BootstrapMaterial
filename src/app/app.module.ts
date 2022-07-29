import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablemComponent } from './tablem/tablem.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule, _MatTableDataSource} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { SecondtableComponent } from './secondtable/secondtable.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NongenComponent } from './nongen/nongen.component';
import { GenComponent } from './gen/gen.component';
import { SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetailsComponent } from './details/details.component';
import { PendingComponent } from './pending/pending.component';
import { PrecanceledComponent } from './precanceled/precanceled.component';
import { CancelledComponent } from './cancelled/cancelled.component';

@NgModule({
  declarations: [
    AppComponent,
    TablemComponent,
    SecondtableComponent,
    NongenComponent,
    GenComponent,
    DetailsComponent,
    PendingComponent,
    PrecanceledComponent,
    CancelledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
