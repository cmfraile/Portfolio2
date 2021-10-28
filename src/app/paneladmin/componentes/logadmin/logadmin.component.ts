import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.sass']
})
export class LogadminComponent implements OnInit {

  forma:FormGroup;
  advertencia:boolean = false;
  
  constructor( private _fb:FormBuilder , private _td:TraerdataService ){
    this.forma = this._fb.group({
      usuario:[null,[Validators.required,Validators.minLength(5)]],
      pass:[null,[Validators.required,Validators.minLength(5)]]
    });
  }

  logincomponent(){
    const { usuario , pass } = this.forma.value;
    this._td.login(usuario,pass).subscribe((resp:any) => {
      if(!resp.admin && !resp.token){return};
      sessionStorage.setItem('token',resp.token);
      let horaexpiracion = new Date() ; horaexpiracion.setMinutes(horaexpiracion.getMinutes()+59);
      sessionStorage.setItem('expiracion',horaexpiracion.toString());
      this.advertencia = false;
      window.location.reload();
      //Al comparar fechas se considera su valor negativo o positivo desde el 1 de enero del 1970.
    },(err) => {
      this.forma.reset();
      this.advertencia = true;
    });
  }

  ngOnInit(): void {}

}
