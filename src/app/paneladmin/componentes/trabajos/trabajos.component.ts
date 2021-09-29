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
    
    if(this.trabajoseleccionado == undefined){
      const entrada:trabajo = {ID:UUID.createUUID(),...this.forma.value} ; entrada.foto = 'https://picsum.photos/200';
      const {ID,foto,eap,...valores1} = entrada; let valores:any = valores1;
      let caso:boolean = false;
      for(let valor in valores){if(valores[valor] == ''){caso = true}};
      if(caso !== false){return};
      this.trabajos.push(entrada);
      this.trabajoseleccionado = entrada;
    } else {
      let indice = this.trabajos.indexOf(this.trabajoseleccionado);
      let { ID,foto,...cambios1 } = this.trabajoseleccionado; let cambios:any = cambios1;
      let caso:boolean = false;
      for(let valor in cambios){if(cambios[valor] == ''){caso = true}};
      if(caso !== false){return};
      const guardar = {ID,foto,...cambios};
      this.trabajos.splice(indice,1);
      this.trabajos.push(guardar);
      this.trabajoseleccionado = guardar;
    }

    this.trabajoseleccionado = undefined;
    this.forma.reset();

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
    this.trabajoseleccionado = undefined;
  }
  
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let {ID,...curro} = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }

  ngOnInit(): void {
  }

}
