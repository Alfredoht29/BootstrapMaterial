import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NongenComponent } from '../nongen/nongen.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-secondtable',
  templateUrl: './secondtable.component.html',
  styleUrls: ['./secondtable.component.css']
})
export class SecondtableComponent implements OnInit {
  tabledet:any;
  title:string|undefined
  queryinfop:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params:Params)=>{
      this.tabledet=params;
      this.title=params['name']
    })
    this.queryinfop = this.tabledet
  }

}
