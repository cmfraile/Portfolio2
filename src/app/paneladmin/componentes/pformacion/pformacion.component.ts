import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators , ValidatorFn, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { experiencia, formacion } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { HeartbeatService } from '../../servicios/heartbeat.service';

@Component({
  selector: 'app-pformacion',
  templateUrl: './pformacion.component.html',
  styleUrls: ['./pformacion.component.sass']
})
export class PformacionComponent implements OnInit {

  forma:FormGroup;
  quejadato:boolean = false;
  formaciondata!:formacion[];
  seleccionado!:formacion|null;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      formacion:['',[Validators.required,Validators.minLength(5)]],
      periodoini:[Number,[Validators.required,Validators.min(2000)]],
      periodofin:[Number],
      institucion:['',[Validators.required,Validators.minLength(5)]],
    });
  }

  getformacion(exito:boolean){
    if(exito){this._td.perfilGET.formacion$.subscribe(resp => this.formaciondata = resp);this.quejadato = false;};
    this.seleccionado = null ; this.forma.reset();
    if(this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }
  
  guardar(){
    const { formacion , periodoini:ini , periodofin:fin , institucion } = this.forma.value;
    if(ini > fin){this.forma.controls.periodoini.reset();this.forma.controls.periodofin.reset();this.quejadato = true};
    if(ini <= fin){
      if(ini == fin){this.forma.controls.periodofin.reset()};
      const data:formacion = {materia:formacion,periodo:[ini,fin],institucion};
      this._td.formacionPOST(data).subscribe(resp => {this.getformacion(true)},err => {this.getformacion(false)});
    }
    
  }
  
  ngOnInit():void{}

}
