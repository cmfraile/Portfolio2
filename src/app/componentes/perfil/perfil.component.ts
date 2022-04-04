import { Component, OnInit } from '@angular/core';
import { dinteres, experiencia, formacion } from 'src/app/interfaces/todainterfaz';
import { FondoService } from 'src/app/servicios/fondo.service';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit{

  experiencia!:experiencia[]|undefined;
  formacion!:formacion[]|undefined;
  dinteres!:dinteres[]|undefined;
  
  constructor(private _td:TraerdataService , public _f:FondoService){
    this._td.perfilGET.experiencia$.subscribe(resp => this.experiencia = resp);
    this._td.perfilGET.formacion$.subscribe(resp => this.formacion = resp);
    this._td.perfilGET.dinteres$.subscribe(resp => this.dinteres = resp);
  }

  ngOnInit(): void {}

}
