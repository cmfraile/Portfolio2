import { Component, OnInit } from '@angular/core';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  constructor( private _fe:FondoeventoService ){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }

}
