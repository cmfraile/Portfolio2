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
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService ){
    this.forma = this._fb.group({
      areatexto:this._td.data.about
    })
  }

  botonform(){
    console.log("botón del formulario");
  }

  ngOnInit(): void {
  }

}
