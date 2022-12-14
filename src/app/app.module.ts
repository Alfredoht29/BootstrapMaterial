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
import { SustitutionComponent } from './sustitution/sustitution.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ErrorComponent } from './error/error.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatDialog, MatDialogModule}from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TablemComponent,
    SecondtableComponent,
    NongenComponent,
    GenComponent,
    DetailsComponent,
    PendingComponent,
    SustitutionComponent,
    CancelledComponent,
    ErrorComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSortModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
