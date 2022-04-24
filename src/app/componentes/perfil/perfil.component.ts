import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { dinteres, experiencia, formacion } from 'src/app/interfaces/todainterfaz';
import { FondoService } from 'src/app/servicios/fondo.service';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit{

  experiencia!:experiencia[]|undefined;
  formacion!:formacion[]|undefined;
  dinteres!:dinteres[]|undefined;
  
  constructor(private _td:TraerdataService , public _f:FondoService){
    this._td.perfilGET.experiencia$.pipe(
      map<experiencia[],experiencia[]>( (resp) => {
        resp.sort( (a,b) => {
          const reobj = { a:(a.descripcion.split('')[0] == "_") ? true : false , b:(b.descripcion.split('')[0] == "_") ? true : false };
          if(reobj.a && !reobj.b){return 1} ; if(!reobj.a && reobj.b){return -1} ; return 0 ;
        });
        resp.map((x) => {if(x.descripcion.substring(0,1) == "_"){x.descripcion = x.descripcion.substring(1)}})
        return resp
      })
    ).subscribe(resp => this.experiencia = resp);
    this._td.perfilGET.formacion$.subscribe(resp => this.formacion = resp);
    this._td.perfilGET.dinteres$.subscribe(resp => this.dinteres = resp);
  }

  ngOnInit(): void {}

}
