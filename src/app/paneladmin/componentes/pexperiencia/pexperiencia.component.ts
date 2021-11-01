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
  quejadato:boolean = false;
  seleccionado!:any|null;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      puesto:['',[Validators.required,Validators.minLength(5)]],
      ano:[Number,[Validators.required,Validators.min(2000)]],
      duracion:[Number,[Validators.required,Validators.min(1)]],
      lugar:['',[Validators.required,Validators.minLength(5)]],
      descripcion:['',[Validators.required,Validators.minLength(5)]]
    });
    this.getexperiencia(true);
  }

  getexperiencia(exito:boolean){
    if(exito){this._td.experienciaGET.subscribe(resp => this.experienciadata = resp);this.quejadato = false;}
    this.seleccionado = null; this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }

  guardar(){
    if(this.forma.invalid){this.quejadato = true ; return};
    if(this.seleccionado !== null){
      const {_id:id} = this.seleccionado;
      const data:experiencia = {
        puesto : this.forma.value.puesto ,
        year : this.forma.value.ano ,
        meses : this.forma.value.duracion ,
        lugar : this.forma.value.lugar ,
        descripcion : this.forma.value.descripcion ,
      }
      this._td.experienciaPUT(id,data).subscribe(resp => {this.getexperiencia(true)},err => {this.getexperiencia(false)});
      return;
    }
    const { ano:year , duracion:meses , ...resto } = this.forma.value;
    const data:experiencia = {year,meses,...resto};
    this._td.experienciaPOST(data).subscribe(resp => {this.getexperiencia(true)},err => {this.getexperiencia(false)});
  }

  limpiar(){
    this.seleccionado = null ; this.quejadato = false ;
    this.forma.reset();
  }

  borrar(){
    if(this.seleccionado == null){this.quejadato = true ; return};
    console.log(this.seleccionado);
    const {_id:id , puesto} = this.seleccionado;
    const alerta = confirm(`¿Desea borrar el item [${puesto}]?`);
    if(!alerta){return};
    this._td.experienciaDEL(id).subscribe(resp => {this.getexperiencia(true)},err => {this.getexperiencia(false)});
  }

  editar(item:experiencia){
    this.seleccionado = item;
    const { ano:year , duracion:meses , descripcion , lugar , puesto } = this.forma.controls;
    year.setValue(item.year) ; meses.setValue(item.meses) ; descripcion.setValue(item.descripcion) ; lugar.setValue(item.lugar) ; puesto.setValue(item.puesto);
  }



  ngOnInit(): void {
  }

}
