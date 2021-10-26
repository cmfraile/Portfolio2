import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pdatosdeinteres',
  templateUrl: './pdatosdeinteres.component.html',
  styleUrls: ['./pdatosdeinteres.component.sass']
})
export class PdatosdeinteresComponent implements OnInit {

  forma:FormGroup;
  quejadato:boolean = false
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({
      datointeres:''
    });
  }

  borrar(dato:string){
    const confirmar = confirm(`Desea borrar el item: ${dato}`);
    if(confirmar){ console.log("ITEM BORRADO") }else{return};
  }

  ngOnInit(): void {
  }

}
