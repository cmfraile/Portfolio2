import { Component, OnInit } from '@angular/core';
import { dinteres, experiencia, formacion } from 'src/app/interfaces/todainterfaz';
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
  
  constructor(private _td:TraerdataService){}

  ngOnInit(): void {}

}
