import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators'
import * as di from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  baseURL:string='http://localhost:8000/api';
  
  ntairGET = this._hc.get<di.ntair[]>(`${this.baseURL}/ntair`).pipe(map(resp => resp[0]));
  perfilGET = {
    experiencia$ : this._hc.get<di.experiencia[]>(`${this.baseURL}/experiencia`),
    formacion$ : this._hc.get<di.formacion[]>(`${this.baseURL}/formacion`),
    dinteres$ : this._hc.get<di.dinteres[]>(`${this.baseURL}/dinteres`)
  }
  
  constructor( private _hc:HttpClient ){}

}
