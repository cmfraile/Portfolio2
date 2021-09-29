import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { trabajo } from '../../interfaces';
import { TraerdataService } from '../../servicios/traerdata.service';

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
    const oligofrenia = (curro:any):string => {
      return JSON.stringify(curro).split('').sort().join('');
    }
    if(this.trabajoseleccionado == undefined){
      this.trabajos
    };

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
    this.forma.setValue({
      nombre:`${trabajo.nombre}`,
      foto:`${trabajo.foto}`,
      descripcion:`${trabajo.descripcion}`,
      anio:`${trabajo.anio}`,
      autor:`${trabajo.autor}`,
      eap:`${trabajo.eap}`
    });
  }

  ngOnInit(): void {
  }

}
