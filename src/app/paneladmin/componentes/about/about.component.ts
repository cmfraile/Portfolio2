import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraerdataService } from '../../servicios/traerdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  
  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , public _td:TraerdataService ){
    this.forma = this._fb.group({
      areatexto:this._td.data.about
    })
  }

  guardar(){
    console.log("Valor a guardar en base de datos",this.forma.value.areatexto);
  }

  borrar(){
    this.forma.reset();
  }

  ngOnInit(): void {}

}
