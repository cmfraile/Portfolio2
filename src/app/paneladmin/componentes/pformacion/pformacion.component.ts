import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { TraerdataService } from '../../servicios/traerdata.service';

@Component({
  selector: 'app-pformacion',
  templateUrl: './pformacion.component.html',
  styleUrls: ['./pformacion.component.sass']
})
export class PformacionComponent implements OnInit {

  forma:FormGroup;
  
  constructor( public _td:TraerdataService , private _fb:FormBuilder ){
    this.forma = this._fb.group({
      formación:'',periodo:'',institucion:''
    })
  }

  ngOnInit(): void {
  }

}
