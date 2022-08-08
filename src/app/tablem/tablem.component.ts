import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablem',
  templateUrl: './tablem.component.html',
  styleUrls: ['./tablem.component.css']
})
export class TablemComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'detalles'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedDate: string | undefined;
  det: any[] = [];
  subscription: Subscription = new Subscription;
  dates = [{ fecha: '2071-01-12 12:09:27' },
  { fecha: '2009-06-05 17:22:18' },
  { fecha: '1937-12-09 05:26:45' },
  { fecha: '2043-01-02 01:32:03' },
  { fecha: '1958-09-18 05:31:50' }]

  tnominas = [{ tipo: "Nomina Ordinaria" }, { tipo: "Nomina Fin" }, { tipo: "Nomina PTU" }]
  nominas = [{ nom: "APOYO TRANSPORTE ASCOP" }, { nom: "APOYO TRANSPORTE FISA" }, { nom: "LISTADO QUINCENAL BECA DE PRACTICANTES" }]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  nomina: {} | undefined;

  constructor( private route: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  SearchAbstract(n: string, di: string, df: string, tn: string) {
    let resumen = [{ "nomina": n, "diai": di, "diaf": df, "tiponomina": tn }];
    console.log(resumen);
  }

  detalle(x1: Number, x2: string, x3: string, x4: string) {
    this.route.navigate(['tablem', x1], { queryParams: { no: x1, name: x2, weight: x3, symbol: x4 } })
  }
}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
