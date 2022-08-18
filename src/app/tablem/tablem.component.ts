import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tablem',
  templateUrl: './tablem.component.html',
  styleUrls: ['./tablem.component.css'],
})
export class TablemComponent implements AfterViewInit {
  displayedColumns: string[] = ['cantidad', 'estado', 'periodo', 'company', 'tipo','elemento','detalles'];
  dataSource = new MatTableDataSource<Resumen>(ELEMENT_DATA);
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
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private route: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  SearchAbstract(n: string, di: string, df: string, tn: string) {
    let resumen = [{ "nomina": n, "diai": di, "diaf": df, "tiponomina": tn }];
    console.log(resumen);
  }

  detalle(x1: Number, x2: string, x3: string, x4: string) {
    this.route.navigate([x4], { queryParams: { cantidad: x1, estado: x2, periodo: x3, company: x4 } })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}



export interface Resumen {
  cantidad:number,
  estado:string,
  periodo:string,
  company:string,
  tipo:string,
  elemento:string
}

const ELEMENT_DATA: Resumen[] = [
    {
      "cantidad": 94,
      "estado": "Generado",
      "periodo": "2019-04-20 ",
      "company": "IMAGINART",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 36,
      "estado": "Generado",
      "periodo": "2020-01-18 ",
      "company": "COMBOGEN",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 71,
      "estado": "Error",
      "periodo": "2016-03-21 ",
      "company": "STEELTAB",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina PTU"
    },
    {
      "cantidad": 27,
      "estado": "Generado",
      "periodo": "2018-08-23 ",
      "company": "ORBEAN",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 82,
      "estado": "No Generado",
      "periodo": "2016-05-13 ",
      "company": "YOGASM",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 21,
      "estado": "Error",
      "periodo": "2019-09-06 ",
      "company": "EMPIRICA",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 55,
      "estado": "Error",
      "periodo": "2017-12-11 ",
      "company": "HATOLOGY",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 89,
      "estado": "No Generado",
      "periodo": "2019-05-02 ",
      "company": "BLUEGRAIN",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 53,
      "estado": "No Generado",
      "periodo": "2018-12-14 ",
      "company": "ZILLATIDE",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina PTU"
    },
    {
      "cantidad": 81,
      "estado": "Error",
      "periodo": "2018-08-09 ",
      "company": "FUELTON",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 53,
      "estado": "Error",
      "periodo": "2022-01-28 ",
      "company": "GEEKOLOGY",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 25,
      "estado": "Error",
      "periodo": "2020-05-27 ",
      "company": "QUONK",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 93,
      "estado": "Generado",
      "periodo": "2019-02-26 ",
      "company": "ECOSYS",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 34,
      "estado": "Generado",
      "periodo": "2020-05-22 ",
      "company": "AUSTEX",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 24,
      "estado": "Error",
      "periodo": "2021-12-29 ",
      "company": "TROPOLI",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Ordinaria"
    },
    {
      "cantidad": 73,
      "estado": "No Generado",
      "periodo": "2014-02-09 ",
      "company": "ANDRYX",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 97,
      "estado": "Error",
      "periodo": "2020-04-09 ",
      "company": "DRAGBOT",
      "tipo": "Deducciones de nomina",
      "elemento": "Nomina PTU"
    },
    {
      "cantidad": 22,
      "estado": "Generado",
      "periodo": "2021-01-10 ",
      "company": "PROSURE",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 84,
      "estado": "Generado",
      "periodo": "2017-07-13 ",
      "company": "ADORNICA",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    },
    {
      "cantidad": 86,
      "estado": "Error",
      "periodo": "2020-10-15 ",
      "company": "KONGENE",
      "tipo": "Nomina Extraordinaria",
      "elemento": "Nomina Finiquitos"
    }
];
