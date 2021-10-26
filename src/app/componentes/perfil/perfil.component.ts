import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dinteres, experiencia, formacion } from 'src/app/interfaces/todainterfaz';
import { FondoService } from 'src/app/servicios/fondo.service';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit{

  experiencia!:experiencia[];
  formacion!:formacion[];
  dinteres!:dinteres[];
  
  constructor(private _td:TraerdataService){
    this._td.submaster.experiencia$.subscribe(resp => this.experiencia = resp);
    this._td.submaster.formacion$.subscribe(resp => this.formacion = resp);
    this._td.submaster.dinteres$.subscribe(resp => this.dinteres = resp);
  }

  periodopipe(dato:any):string{
    if(dato.length == 1){return `${dato[0]}aaa`}else{return `${dato[0]} - ${dato[1]}aaa`};
  }

  ngOnInit(): void {}

}
