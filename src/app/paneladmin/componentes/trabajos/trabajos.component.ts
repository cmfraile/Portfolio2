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
    item.fotoedit = false;
    this.trabajoseleccionado = item;
    const { nombre , descripcion , estado , autor , eap } = this.forma.controls;
    nombre.setValue(item.proyecto);descripcion.setValue(item.descripcion);estado.setValue(item.estado);autor.setValue(item.autor);eap.setValue(item.enlace);
  }

  formsave(){
    if(this.forma.invalid){console.log('formulario invalido') ; return };
    const { foto , nombre , descripcion , estado , autor , eap } = this.forma.value;
    const consulta:any = { foto,estado,descripcion,autor,
    proyecto:nombre,
    enlace:eap };
    let formulario = new FormData();
    for(let x in consulta){formulario.append(`${x}`,consulta[x])};
    console.log(consulta);
    //this._td.trabajosPOST(formulario).subscribe(() => {this.getrabajo(true)},() => {});
  };

  formclean(){ this.trabajoseleccionado = null ; this.quejadato = false ; this.forma.reset(); };

  formerase(){}
  
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


