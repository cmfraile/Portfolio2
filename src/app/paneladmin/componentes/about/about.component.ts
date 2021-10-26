import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  
  forma:FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({
      areatexto:'',
      nombre:'',
      ocupacion:''
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
