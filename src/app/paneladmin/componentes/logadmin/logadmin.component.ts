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

  logincomponent(){
    const { usuario , pass } = this.forma.value;
    this._td.login(usuario,pass).subscribe((resp:any) => {
      if(!resp.admin && !resp.token){return};
      sessionStorage.setItem('token',resp.token);
      let horaexpiracion = new Date() ; horaexpiracion.setMinutes(horaexpiracion.getMinutes()+59);
      sessionStorage.setItem('expiracion',horaexpiracion.toString());
      window.location.reload();
      //Al comparar fechas se considera su valor negativo o positivo desde el 1 de enero del 1970.
    });
  }

  ngOnInit(): void {}

}
