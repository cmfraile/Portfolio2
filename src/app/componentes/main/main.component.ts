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
    this._td.submaster.ntair$.subscribe(resp => {
      this.nombre = resp[0].nombre;
      this.titulo = resp[0].titulo;
      this.presentacion = resp[0].presentacion;
    });
  }

  ngOnInit(): void {}
}
