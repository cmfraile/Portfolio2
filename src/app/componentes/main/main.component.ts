import { Component, OnInit } from '@angular/core';
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
  
  constructor(private _td:TraerdataService){
    this._td.ntairGET.subscribe(resp => {
      this.nombre = resp.nombre;
      this.titulo = resp.titulo;
      this.presentacion = resp.presentacion;
    });
  }

  ngOnInit(): void {}
}
