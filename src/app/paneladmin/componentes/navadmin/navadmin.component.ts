import { Component, OnInit } from '@angular/core';
import { MenucambioService } from '../../servicios/menucambio.service';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.sass']
})
export class NavadminComponent implements OnInit {

  opcion(op:string){
    switch(op){
      case 'About': this._mc.menuadmin$.next('About') ;break;
      case 'PerfilFormacion': this._mc.menuadmin$.next('PerfilFormacion') ;break;
      case 'PerfilExperiencia': this._mc.menuadmin$.next('PerfilExperiencia') ;break;
      case 'PerfilDatos': this._mc.menuadmin$.next('PerfilDatos') ;break;
      case 'Trabajos': this._mc.menuadmin$.next('Trabajos') ;break;
    }
  }

  logout(){
    console.log("Esto es el logout");
  }
  
  constructor( private _mc:MenucambioService ) { }

  ngOnInit(): void {
  }

}
