import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map , tap } from 'rxjs/operators'
import * as di from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  constructor( private _hc:HttpClient ){
    this.ntairGET.subscribe({next:() => {},error:() => {this.fallospiner = true;}});
  }

  fallospiner = false;
  baseURL:string = "https://cmfg.dev/api"
  
  headermaster = new HttpHeaders({token:sessionStorage.getItem('token') || ""});
  ntairGET = this._hc.get<di.ntair[]>(`${this.baseURL}/ntair`).pipe(map(resp => resp[0]));
  trabajosGET = this._hc.get<di.trabajo[]>(`${this.baseURL}/trabajo`).pipe(
    map(x => {
      //Fecha vs no fecha
      x = x.sort((a,b) => {
        const regex = new RegExp('[0-9][0-9] - [0-9][0-9][0-9][0-9]');
        const aregex = (regex.test(a.estado)) ? 1 : 0 ; const bregex = (regex.test(b.estado)) ? 1 : 0 ;
        return bregex - aregex ;
      });
      x = x.sort((a,b) => {
        const ayear = parseInt(a.estado.substring(a.estado.length - 4,a.estado.length)) ; const byear = parseInt(a.estado.substring(a.estado.length - 4,a.estado.length));
        if(ayear == byear){return 0} ; if(!ayear){return 1} ; if(!byear){return -1} ;
        if(ayear > byear){return 1} ; if(byear < ayear){return -1} ; return 0;
      });
      return x;
    }),
    tap(console.log)
  );
  perfilGET = {
    experiencia$ : this._hc.get<di.experiencia[]>(`${this.baseURL}/experiencia`),
    formacion$ : this._hc.get<di.formacion[]>(`${this.baseURL}/formacion`),
    dinteres$ : this._hc.get<di.dinteres[]>(`${this.baseURL}/dinteres`)
  }

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

  //formacion
  formacionPOST(formacion:di.formacion){
    return this._hc.post<di.formacion>(`${this.baseURL}/formacion`,formacion,{headers:this.headermaster});
  }
  formacionPUT(formacion:di.formacion,id:string){
    const cuerpo = {id,...formacion};
    return this._hc.put<di.formacion>(`${this.baseURL}/formacion`,cuerpo,{headers:this.headermaster});
  }
  formacionDEL(id:string){
    return this._hc.delete<di.formacion>(`${this.baseURL}/formacion`,{headers:new HttpHeaders(
      {token:sessionStorage.getItem('token') || "",id}
    )});
  }

  //trabajos
  trabajosPOST(data:FormData){
    return this._hc.post<di.trabajo>(`${this.baseURL}/trabajo`,data,{headers:this.headermaster});
  }
  trabajosPUT(data:FormData){
    return this._hc.put<di.trabajo>(`${this.baseURL}/trabajo`,data,{headers:this.headermaster});
  }
  trabajosDEL(id:string){
    return this._hc.delete<di.trabajo>(`${this.baseURL}/trabajo`,{headers:new HttpHeaders(
      {token:sessionStorage.getItem('token') || "",id}
    )});
  }

}
