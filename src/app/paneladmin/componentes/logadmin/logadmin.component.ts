import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.sass']
})
export class LogadminComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService ){
    this.forma = this._fb.group({
      usuario:'',pass:''
    });
  }

  async logincomponent(){
    const { usuario , pass } = this.forma.value;
    this._td.login(usuario,pass).subscribe( (resp:any) => {
      if(!resp.admin && !resp.token){return};
      
    });
  }

  ngOnInit(): void {}

}
