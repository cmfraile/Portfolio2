import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pexperiencia',
  templateUrl: './pexperiencia.component.html',
  styleUrls: ['./pexperiencia.component.sass']
})
export class PexperienciaComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({
      puesto:'',ano:'',duracion:'',lugar:'',descripcion:''
    })
  }

  ngOnInit(): void {
  }

}
