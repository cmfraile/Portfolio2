import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { trabajo } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { HeartbeatService } from '../../servicios/heartbeat.service';
import { ValidadoresService } from '../../servicios/validadores.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  //SE VIENE CARPINTERIA

  forma:FormGroup;
  trabajoseleccionado:trabajo|null = null;
  trabajosdata!:trabajo[];
  quejadato:boolean = false;

  fichero:File|undefined;
  
  constructor( private _fb:FormBuilder , private _v:ValidadoresService , private _td:TraerdataService , private _hb:HeartbeatService ){
    this.forma = this._fb.group({
      foto:[null,[Validators.required,_v.validaprueba()]],
      nombre:[null,[Validators.minLength(5),Validators.required]],
      descripcion:[null,[Validators.minLength(5),Validators.required]],
      estado:[null,[Validators.min(2000),Validators.required]],
      autor:[null,[Validators.minLength(5),Validators.required]],
      eap:[""],
      eaptxt:[""]
    });
    this.getrabajo(true);
  }

  getrabajo(exito:boolean){
    if(exito){this._td.trabajosGET.subscribe(resp => this.trabajosdata = resp);this.quejadato = false};
    this.trabajoseleccionado = null;this.fichero = undefined;this.forma.reset();
    if(!this._hb.latido()){sessionStorage.clear();window.location.reload()};
  }

  fotoput(input:HTMLInputElement){
    if(input.files == null){return};
    this.fichero = input.files[0];
  }

  editartrabajo(item:any){
    this.trabajoseleccionado = item;
    for(let x in this.forma.controls){this.forma.controls[x].setValue(item[x])};
  }

  formsave(){
    if(this.trabajoseleccionado !== null){
      const { _id:id } = this.trabajoseleccionado;
      const valores = this.forma.value;
      let data:any = {
        nombre : valores.nombre,
        proyecto : valores.nombre,
        descripcion : valores.descripcion,
        estado : valores.estado,
        autor : valores.autor,
        enlace : valores.eap || "",
        enlacetxt : valores.eaptxt || ""
      };
      if(this.fichero !== undefined){data.foto = this.fichero};
      let formulario = new FormData();
      formulario.append('id',id);
      for(let x in data){formulario.append(`${x}`,data[x])};
      this._td.trabajosPUT(formulario).subscribe(resp => {this.getrabajo(true)},err => {this.getrabajo(false)});
    } else {
      if(this.fichero){this.forma.controls.foto.setValue(this.fichero)}; 
      if(this.forma.invalid){console.log('formulario invalido') ; return };
      const { foto , nombre , descripcion , estado , autor , eap , eaptxt } = this.forma.value;
      const consulta:any = { foto,estado,descripcion,autor,
      proyecto:nombre,
      enlace:eap , enlacetxt:eaptxt };
      let formulario = new FormData();
      for(let x in consulta){formulario.append(`${x}`,consulta[x])};
      this._td.trabajosPOST(formulario).subscribe(resp => {this.getrabajo(true)},err => {this.getrabajo(false)});
    }
  }

  formclean(){ this.trabajoseleccionado = null ; this.quejadato = false ; this.fichero = undefined ; this.forma.reset(); };

  formerase(){
    if(this.trabajoseleccionado == null){this.quejadato = true ; return};
    const {_id:id, proyecto} = this.trabajoseleccionado;
    const alerta = confirm(`¿Desea borrar el item [${proyecto}]?`);
    if(!alerta){return};
    this._td.trabajosDEL(id).subscribe(resp => {this.getrabajo(true)},err => (this.getrabajo(false)));
  }

  ngOnInit(): void {}

}


