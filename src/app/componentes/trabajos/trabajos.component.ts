import { Component, OnInit } from '@angular/core';
import { trabajo } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit{

  curroinfo!:trabajo[];
  
  constructor( private _td:TraerdataService ){
    this._td.trabajosGET.subscribe(resp => this.curroinfo = resp);
  }
  
  ngOnInit(): void {}

}
