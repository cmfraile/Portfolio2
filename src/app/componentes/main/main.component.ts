import { Component, OnInit } from '@angular/core';
import { FondoService } from 'src/app/servicios/fondo.service';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit{
  
  nombre!:string;
  titulo!:string;
  presentacion!:string;
  test!:number;
  
  constructor(private _td:TraerdataService , public _f:FondoService){
    this._td.ntairGET.subscribe(resp => {
      this.nombre = resp.nombre;
      this.titulo = resp.titulo;
      this.presentacion = resp.presentacion;
    });
    this._f.degradarnext();
  }

  ngOnInit(): void {}

}
