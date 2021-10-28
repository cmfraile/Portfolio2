import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as di from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  baseURL:string='http://localhost:8000/api';
  aboutobj!:di.ntair;

  ntairGET = this._hc.get<di.ntair[]>(`${this.baseURL}/ntair`).pipe(map(resp => resp[0]));
  perfilGET = {
    experiencia$ : this._hc.get<di.experiencia[]>(`${this.baseURL}/experiencia`),
    formacion$ : this._hc.get<di.formacion[]>(`${this.baseURL}/formacion`),
    dinteres$ : this._hc.get<di.dinteres[]>(`${this.baseURL}/dinteres`)
  }

  login(nombre:string,pass:string){
    return this._hc.post(`${this.baseURL}/admin/login`,{nombre,pass});
  }

  ntairPOST(cuerpo:di.ntair){
    const cabesa = new HttpHeaders({token:sessionStorage.getItem('token') || ""})
    return this._hc.post<di.ntair>(`${this.baseURL}/ntair`,cuerpo,{headers:cabesa});
  }
  
  constructor( private _hc:HttpClient ){}

}
