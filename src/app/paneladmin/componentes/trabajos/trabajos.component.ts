import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { trabajo } from '../../interfaces';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajoseleccionado!:trabajo|undefined;
  
  constructor( private _fb:FormBuilder ){
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
    let curro = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }

  ngOnInit(): void {
  }

}
