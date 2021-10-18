import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraerdataService } from '../../servicios/traerdata.service';

@Component({
  selector: 'app-pexperiencia',
  templateUrl: './pexperiencia.component.html',
  styleUrls: ['./pexperiencia.component.sass']
})
export class PexperienciaComponent implements OnInit {

  forma:FormGroup;
  
  constructor( public _td:TraerdataService , private _fb:FormBuilder ){
    this.forma = this._fb.group({
      puesto:'',ano:'',duracion:'',lugar:'',descripcion:''
    })
  }

  ngOnInit(): void {
  }

}
