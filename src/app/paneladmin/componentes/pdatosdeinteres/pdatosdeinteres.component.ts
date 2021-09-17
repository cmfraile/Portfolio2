import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraerdataService } from '../../servicios/traerdata.service';

@Component({
  selector: 'app-pdatosdeinteres',
  templateUrl: './pdatosdeinteres.component.html',
  styleUrls: ['./pdatosdeinteres.component.sass']
})
export class PdatosdeinteresComponent implements OnInit {

  forma:FormGroup;
  quejadato:boolean = false
  
  constructor( private _fb:FormBuilder , public _td:TraerdataService ){
    this.forma = this._fb.group({
      datointeres:''
    });
  }

  guardar(){
    let input = this.forma.value.datointeres;
    let flag:boolean = false;
    if(input == ''){this.quejadato = true ; return};
    this._td.data.datosinteres.forEach( (dato:string) => {if(dato == input){ flag = true ; this.quejadato = true }});
    if(flag){return}else{this._td.data.datosinteres.push(input) ; this.quejadato = false};
  }

  ngOnInit(): void {
  }

}
