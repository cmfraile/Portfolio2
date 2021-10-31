import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { experiencia } from 'src/app/interfaces/todainterfaz';
import { HeartbeatService } from '../../servicios/heartbeat.service';

@Component({
  selector: 'app-pexperiencia',
  templateUrl: './pexperiencia.component.html',
  styleUrls: ['./pexperiencia.component.sass']
})
export class PexperienciaComponent implements OnInit {

  forma:FormGroup;
  experienciadata!:experiencia[]|undefined;
  seleccionado!:any[]|null;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      puesto:['',[Validators.required,Validators.minLength(5)]],
      ano:[Number,[Validators.required,Validators.min(2000)]],
      duracion:[Number,[Validators.required,Validators.min(1)]],
      lugar:['',[Validators.required,Validators.minLength(5)]],
      descripcion:['',[Validators.required,Validators.minLength(5)]]
    });
    this.getexperiencia();
  }

  getexperiencia(){
    this._td.experienciaGET.subscribe(resp => this.experienciadata = resp);
    this.seleccionado = null;
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }

  guardar(){
    const data:experiencia
  }



  ngOnInit(): void {
  }

}
