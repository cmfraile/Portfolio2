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
    console.log("item guardado")
  }

  formclean(){
    this.forma.reset();
    this.trabajoseleccionado = undefined;
  }

  formerase(){
    console.log("funarse ITEM")
  }
  
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let {ID,...curro} = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }

  ngOnInit(): void {
  }

}
