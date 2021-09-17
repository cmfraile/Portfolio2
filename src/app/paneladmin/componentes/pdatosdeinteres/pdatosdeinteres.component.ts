import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pdatosdeinteres',
  templateUrl: './pdatosdeinteres.component.html',
  styleUrls: ['./pdatosdeinteres.component.sass']
})
export class PdatosdeinteresComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({
      datointeres:''
    });
  }

  botonform(){
    console.log("boton del formulario");
  }

  ngOnInit(): void {
  }

}
