import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamasterinterface } from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  baseURL:string='http://localhost:8000/api/'
  apitest:string='https://reqres.in/api/users?page=2'
  
  constructor( private _hc:HttpClient ){
    this._hc.get(this.baseURL).subscribe(console.log);
  }

  data:datamasterinterface = {
    ntair:undefined,
    experiencia:undefined,
    formacion:undefined,
    dinteres:undefined,
    trabajo:undefined
  }

}
