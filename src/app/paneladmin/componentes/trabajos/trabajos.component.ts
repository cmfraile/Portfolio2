import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { trabajo } from '../../interfaces';
import { TraerdataService } from '../../servicios/traerdata.service';
import { UUID } from 'uuid-generator-ts';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajos:trabajo[] = this._td.data.trabajos;
  trabajoseleccionado!:trabajo|undefined;
  
  constructor( private _td:TraerdataService , private _fb:FormBuilder ){
    this.forma = this._fb.group({
      foto:'',nombre:'',descripcion:'',anio:'',autor:'',eap:''
    })
  }

  formsave(){

   const todomenoseap = (trabajo:any) => {for(let dato in trabajo){if(dato !== 'eap'){if(dato == ''){return}}};}
   const entrada:any = {ID:UUID.createUUID(),...this.forma.value};

   if(this.trabajoseleccionado == undefined){
     todomenoseap(entrada);
     let entradaya:trabajo = entrada;
     this.trabajos.push(entradaya);
   } else {
     let indice = this.trabajos.indexOf(this.trabajoseleccionado);
     todomenoseap(entrada);
     this.trabajos.splice(indice,1);
     this.trabajos.push(entrada);
   }

  }

  formclean(){
    this.forma.reset();
    this.trabajoseleccionado = undefined;
  }

  formerase(){
    if(this.trabajoseleccionado == undefined){return};
    let trabajoerase = this.trabajoseleccionado;
    let indice = this.trabajos.indexOf(trabajoerase)
    this.trabajos.splice(indice,1);
    this.forma.reset();
  }
  
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let {ID,...curro} = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }

  ngOnInit(): void {
  }

}
