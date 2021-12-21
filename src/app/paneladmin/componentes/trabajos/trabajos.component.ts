import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { trabajo } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { HeartbeatService } from '../../servicios/heartbeat.service';
import { ValidadoresService } from '../../servicios/validadores.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajoseleccionado:trabajo|null = null;
  trabajosdata!:trabajo[];
  quejadato:boolean = false;
  
  constructor( private _fb:FormBuilder , private _v:ValidadoresService , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      foto:[null,[Validators.required,_v.validaprueba()]],
      nombre:[null,[Validators.minLength(5),Validators.required]],
      descripcion:[null,[Validators.minLength(5),Validators.required]],
      estado:[null,[Validators.min(2000),Validators.required]],
      autor:[null,[Validators.minLength(5),Validators.required]],
      eap:[null,[Validators.minLength(5),Validators.required]]
    });
    this.getrabajo(true);
  }

  fotoput(input:HTMLInputElement){
    if(input.files == null){return};
    const fichero = input.files[0];
    this.forma.patchValue({foto:fichero});
  }

  getrabajo(exito:boolean){
    if(exito){this._td.trabajosGET.pipe(tap(console.log)).subscribe(resp => this.trabajosdata = resp);this.quejadato = false};
    this.trabajoseleccionado = null ; this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }

  editartrabajo(item:trabajo){
    this.trabajoseleccionado = item;
    const { foto , nombre , descripcion , estado , autor , eap } = this.forma.controls;
    nombre.setValue(item.proyecto);descripcion.setValue(item.descripcion);estado.setValue(item.estado);autor.setValue(item.autor);eap.setValue(item.enlace);foto.setValue(item.foto);
  }

  formsave(){
    if(this.trabajoseleccionado !== null){
      const { _id:id } = this.trabajoseleccionado;
      const valores = this.forma.value
      const data:any = {
        foto : valores.foto,
        proyecto : valores.nombre,
        descripcion : valores.descripcion,
        estado : valores.estado,
        autor : valores.autor,
        enlace : valores.eap
      };
      console.log("ida",data);
      let formulario = new FormData();
      formulario.append('id',id);
      for(let x in data){formulario.append(`${x}`,data[x])};
      this._td.trabajosPUT(formulario).subscribe(resp => console.log("vuelta",resp));
    } else {
      if(this.forma.invalid){console.log('formulario invalido') ; return };
      const { foto , nombre , descripcion , estado , autor , eap } = this.forma.value;
      const consulta:any = { foto,estado,descripcion,autor,
      proyecto:nombre,
      enlace:eap };
      let formulario = new FormData();
      for(let x in consulta){formulario.append(`${x}`,consulta[x])};
      this._td.trabajosPOST(formulario).subscribe(resp => {this.getrabajo(true)},err => {this.getrabajo(false)});
    }
  }

  formclean(){ this.trabajoseleccionado = null ; this.quejadato = false ; this.forma.reset(); };

  formerase(){
    if(this.trabajoseleccionado == null){this.quejadato = true ; return};
    const {_id:id, proyecto} = this.trabajoseleccionado;
    const alerta = confirm(`¿Desea borrar el item [${proyecto}]?`);
    if(!alerta){return};
    this._td.trabajosDEL(id).subscribe(resp => {this.getrabajo(true)},err => (this.getrabajo(false)));
  }

  /*
  borrar(){
    if(this.seleccionado == null){this.quejadato = true ; return};
    const {_id:id , materia} = this.seleccionado;
    const alerta = confirm(`¿Desea borrar el item [${materia}]?`);
    if(!alerta){return};
    this._td.formacionDEL(id).subscribe(resp => {this.getformacion(true)},err => {this.getformacion(false)});
  }
  */
  
  /*
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let curro = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }
  */

  ngOnInit(): void {}

}

/*
export declare interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
*/


