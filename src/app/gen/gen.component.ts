import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent implements OnInit {
  @Input() queryinfo: any;
  realquery:any;
  constructor() { }

  ngOnInit(): void {
    this.realquery=JSON.parse(JSON.stringify(this.queryinfo));
    this.realquery["status"]="generado";
    console.log(this.realquery)
  }

}
