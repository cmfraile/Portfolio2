import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { HeartbeatService } from '../../servicios/heartbeat.service';

@Component({
  selector: 'app-pdatosdeinteres',
  templateUrl: './pdatosdeinteres.component.html',
  styleUrls: ['./pdatosdeinteres.component.sass']
})
export class PdatosdeinteresComponent implements OnInit {

  forma:FormGroup;
  quejadato:boolean = false;
  dinteresdata!:any[];

  seleccionado!:{dato:string,_id:string,__v:number} | null;

  constructor( private _fb:FormBuilder , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      datointeres:['',[Validators.required,Validators.minLength(5)]],
    });
    this.getdinteres(true);
  }

  /*
  getexperiencia(exito:boolean){
    if(exito){this._td.experienciaGET.subscribe(resp => this.experienciadata = resp);this.quejadato = false;}
    this.seleccionado = null; this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }
  */
 
  getdinteres(exito:boolean){
    if(exito){this._td.perfilGET.dinteres$.subscribe(resp => this.dinteresdata = resp);this.quejadato = false};
    this.seleccionado = null; this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  };

  guardar(){
    if(this.forma.invalid){this.quejadato = true ; return}

    if(this.seleccionado !== null){
      this._td.dinteresPUT(this.seleccionado._id,this.forma.value.datointeres).subscribe(resp => {this.getdinteres(true)},err => {this.getdinteres(false)});
      return;
    }

    this._td.dinteresPOST(this.forma.value.datointeres).subscribe(resp => {this.getdinteres(true)},err => {this.getdinteres(false)});

  }
  
  borrar(id:string,dato:string){
    const alerta = confirm(`Desea borrar el item : [${dato}]`);
    if(!alerta){return};
    this._td.dinteresDEL(id).subscribe(resp => {this.getdinteres(true)},err => {this.getdinteres(false)});
  }

  putdinteres(dato:{dato:string,_id:string,__v:number}){
    this.seleccionado = dato;
    this.forma.controls.datointeres.setValue(dato.dato);
  }

  ngOnInit(): void {
  }

}
