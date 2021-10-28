import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ntair } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  
  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService ){
    let inicio:ntair = {nombre:'potasio',titulo:'potasio',presentacion:'potasio'}
    const demora = await this._td.obsenespera(this._td.ntairGET);
    this.forma = this._fb.group({
      areatexto:[inicio.presentacion,[Validators.required,Validators.minLength(10)]],
      nombre:[inicio.nombre,[Validators.required,Validators.minLength(5)]],
      ocupacion:[inicio.titulo,[Validators.required,Validators.minLength(5)]]
    });
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
