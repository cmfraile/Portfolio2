import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import * as di from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  baseURL:string='http://localhost:8000/api';
  headermaster = new HttpHeaders({token:sessionStorage.getItem('token') || ""});

  ntairGET = this._hc.get<di.ntair[]>(`${this.baseURL}/ntair`).pipe(map(resp => resp[0]));
  perfilGET = {
    experiencia$ : this._hc.get<di.experiencia[]>(`${this.baseURL}/experiencia`),
    formacion$ : this._hc.get<di.formacion[]>(`${this.baseURL}/formacion`),
    dinteres$ : this._hc.get<di.dinteres[]>(`${this.baseURL}/dinteres`)
  }
  experienciaGET = this._hc.get<di.experiencia[]>(`${this.baseURL}/experiencia`);

  login(nombre:string,pass:string){
    return this._hc.post(`${this.baseURL}/admin/login`,{nombre,pass});
  }

  ntairPOST(cuerpo:di.ntair){
    return this._hc.post<di.ntair>(`${this.baseURL}/ntair`,cuerpo,{headers:this.headermaster});
  }

  //Dinteres:
  dinteresPOST(dinteres:string){
    return this._hc.post<di.dinteres>(`${this.baseURL}/dinteres`,{dato:dinteres},{headers:this.headermaster});
  }
  dinteresPUT(id:string,dato:string){
    const cuerpo = {id,dato};
    return this._hc.put<di.dinteres>(`${this.baseURL}/dinteres`,cuerpo,{headers:this.headermaster});
  }
  dinteresDEL(id:string){
    return this._hc.delete<di.dinteres>(`${this.baseURL}/dinteres`,{headers:new HttpHeaders(
      {token:sessionStorage.getItem('token') || "",id}
    )});
  }

  //experiencia:
  experienciaPOST(experiencia:di.experiencia){
    return this._hc.post<di.experiencia>(`${this.baseURL}/experiencia`,experiencia,{headers:this.headermaster});
  }
  experienciaPUT(id:string,data:di.experiencia){
    const cuerpo = {id,...data};
    console.log("PUT",cuerpo);
    return this._hc.put<di.experiencia>(`${this.baseURL}/experiencia`,cuerpo,{headers:this.headermaster});
  }
  experienciaDEL(id:string){
    return this._hc.delete<di.experiencia>(`${this.baseURL}/experiencia`,{headers:new HttpHeaders(
      {token:sessionStorage.getItem('token') || "",id}
    )});
  }
  
  constructor( private _hc:HttpClient ){}

}
