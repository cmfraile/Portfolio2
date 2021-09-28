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
  trabajoseleccionado!:trabajo;
  
  constructor( private _td:TraerdataService , private _fb:FormBuilder ){
    this.forma = this._fb.group({
      foto:'',nombre:'',descripcion:'',anio:'',autor:'',eap:''
    })
  }

  formsave(){

    const oligofrenia = (curro:any):string => {
      return JSON.stringify(curro).split('').sort().join('');
    }

    if(this.trabajoseleccionado == undefined){return};

    const {ID,...trabajo1} = this.trabajoseleccionado;
    const trabajo2:trabajo = this.forma.value;

    if(oligofrenia(trabajo1) == oligofrenia(trabajo2)){return}

    let cambio = this._td.data.trabajos[this._td.data.trabajos.indexOf(this.trabajoseleccionado)];
    console.log(cambio);
    cambio.descripcion = trabajo2.descripcion;
    console.log(cambio);

    //this._td.data.trabajos[this._td.data.trabajos.indexOf(this.trabajoseleccionado)] = trabajo2;

  }
  
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    //console.log("Seleccionado:",trabajo);
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
