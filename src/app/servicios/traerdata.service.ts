import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as di from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  baseURL:string='http://localhost:8000/api';

  submaster = {
    ntair$ : new Subject<di.ntair[]>(),
    experiencia$ : new Subject<di.experiencia[]>(),
    formacion$ : new Subject<di.formacion[]>(),
    dinteres$ : new Subject<di.dinteres[]>(),
    trabajo$ : new Subject<di.trabajo[]>()
  }
  
  constructor( private _hc:HttpClient ){
    console.log("Se inicia el constructor del servicio");
    this._hc.get<di.datamasterinterface>(`${this.baseURL}/master`).subscribe(resp => {
      this.submaster.ntair$.next(resp.ntair);
      this.submaster.experiencia$.next(resp.experiencia);
      this.submaster.formacion$.next(resp.formacion);
      this.submaster.dinteres$.next(resp.dinteres);
      this.submaster.trabajo$.next(resp.trabajo);
    },error => {console.log(error)});
  }

}
