import { Component, OnInit } from '@angular/core';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  constructor( private _fe:FondoeventoService ){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }

}
