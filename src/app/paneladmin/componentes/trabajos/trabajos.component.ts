import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { trabajo } from '../../interfaces';
import { TraerdataService } from '../../servicios/traerdata.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajos:trabajo[] = this._td.data.trabajos;
  
  constructor( private _td:TraerdataService , private _fb:FormBuilder ){
    this.forma = this._fb.group({
      foto:'',nombre:'',descripcion:'',anio:'',autor:'',ead:''
    })
  }

  ngOnInit(): void {
  }

}
