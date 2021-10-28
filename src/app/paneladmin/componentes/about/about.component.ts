import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  
  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService ){
    this.forma = this._fb.group({
      //Deben de igualarse a lo del servicio:
      areatexto:['',[Validators.required,Validators.minLength(10)]],
      nombre:['',[Validators.required,Validators.minLength(5)]],
      ocupacion:['',[Validators.required,Validators.minLength(5)]]
    });
    this._td.ntairGET.subscribe(resp => {
      const { nombre , titulo , presentacion } = resp;
      this.forma.controls.areatexto.setValue(presentacion);
      this.forma.controls.nombre.setValue(nombre);
      this.forma.controls.ocupacion.setValue(titulo);
    });
    console.log(this.forma);
  }

  guardar(){
    this._td.ntairPOST({
      nombre : this.forma.value.nombre,
      titulo : this.forma.value.ocupacion,
      presentacion : this.forma.value.areatexto
    }).subscribe(console.log);
  }

  borrar(){
    this.forma.reset();
  }

  ngOnInit(): void {}

}
