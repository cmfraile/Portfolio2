import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { formacion } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { HeartbeatService } from '../../servicios/heartbeat.service';
import { ValidadoresService } from '../../servicios/validadores.service';

@Component({
  selector: 'app-pformacion',
  templateUrl: './pformacion.component.html',
  styleUrls: ['./pformacion.component.sass']
})
export class PformacionComponent implements OnInit {

  forma:FormGroup;
  quejadato:boolean = false;
  formaciondata!:formacion[];
  seleccionado!:any|null;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      formacion:['',[Validators.required,Validators.minLength(5)]],
      periodoini:[Number,[Validators.required,Validators.min(2000)]],
      periodofin:[Number],
      institucion:['',[Validators.required,Validators.minLength(5)]]
    });
    this.getformacion(true);
  }

  getformacion(exito:boolean){
    if(exito){this._td.perfilGET.formacion$.subscribe(resp => this.formaciondata = resp);this.quejadato = false;};
    this.seleccionado = null ; this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }

  /*
  guardar(){
    if(this.forma.invalid){this.quejadato = true ; return};
    const { formacion , institucion , periodoini:init , periodofin:fint } = this.forma.controls;
    let periodomaster!:[number,number|null];
    if(formacion.invalid || institucion.invalid || init.invalid){this.quejadato = true;return};
    if(init.value && fint.value == null || fint.value == init.value){periodomaster = [init.value,null]};
    if(init.value < fint.value){periodomaster = [init.value,fint.value]};
    if(init.value > fint.value){init.reset();fint.reset();this.quejadato = true;return};
    const data:any = {
      materia : formacion.value,
      periodo : periodomaster,
      institucion : institucion.value
    };

    console.log(data,this.forma.controls.periodofin.valid);

    if(this.seleccionado !== null){
      const {_id:id} = this.seleccionado;
      this._td.formacionPUT(data,id).subscribe(resp => this.getformacion(true),err => this.getformacion(false));
      return;
    }
    this._td.formacionPOST(data).subscribe(resp => this.getformacion(true),err => this.getformacion(false));

  }
  */

  guardar(){
    if(this.forma.invalid){this.quejadato = true ; return};
    const { formacion , institucion , periodoini:ini , periodofin:fin } = this.forma.value;
    let periodomaster!:[number,number|null];
    if(fin == null){periodomaster == [ini,null]};
    if(typeof(fin) == 'number'){
      if(ini == fin){periodomaster == [ini,null]};
      if(ini < fin){periodomaster = [ini,fin]};
      if(ini > fin){ this.quejadato = true ; this.forma.controls.periodoini.reset() ; this.forma.controls.periodofin.reset() ; return };
    }
    const data:any = { materia:formacion,periodo:periodomaster,institucion:institucion};
    if(this.seleccionado !== null){
      const {_id:id} = this.seleccionado;
      this._td.formacionPUT(data,id).subscribe(resp => this.getformacion(true),err => this.getformacion(false));
      return;
    }else{
      this._td.formacionPOST(data).subscribe(resp => this.getformacion(true),err => this.getformacion(false));
    }

  }

  borrar(){
    if(this.seleccionado == null){this.quejadato = true ; return};
    const {_id:id , materia} = this.seleccionado;
    const alerta = confirm(`¿Desea borrar el item [${materia}]?`);
    if(!alerta){return};
    this._td.formacionDEL(id).subscribe(resp => {this.getformacion(true)},err => {this.getformacion(false)});
  }

  editar(item:formacion){
    this.seleccionado = item;
    const { formacion , periodoini:ini , periodofin:fin , institucion } = this.forma.controls;
    formacion.setValue(item.materia);ini.setValue(item.periodo[0]);fin.setValue(item.periodo[1]);institucion.setValue(item.institucion);
  }

  limpiar(){
    this.seleccionado = null ; this.quejadato = false ;
    this.forma.reset();
  }
  
  ngOnInit():void{}

}
