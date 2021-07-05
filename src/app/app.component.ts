import { Component , ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FondoeventoService } from './servicios/fondoevento.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'portfolio2';
  
  @ViewChild('mipadre',{ static : false }) mipadrelet !: ElementRef;

  mapwp(resp:[number,string]){
    let caso:string = "'url(../assets/img/fotos/";
    if(resp[0] >= 5){
      switch(resp[1]){
        case "/" : caso += this._fe.imgurl.about.pic ; break ;
        case "/perfil" : caso += this._fe.imgurl.perfil.pic ; break ;
        case "/trabajos" : caso += this._fe.imgurl.trabajos.pic ; break ;
        case "/rrss" : caso += this._fe.imgurl.rrss.pic ; break ;
      }
    } else {
      switch(resp[1]){
        case "/" : caso += this._fe.imgurl.about.subpic ; break ;
        case "/perfil" : caso += this._fe.imgurl.perfil.subpic ; break ;
        case "/trabajos" : caso += this._fe.imgurl.trabajos.subpic ; break ;
        case "/rrss" : caso += this._fe.imgurl.rrss.subpic ; break ;
      }
    }
    caso += ".jpg)';";
    return caso
  }

  constructor( private _fe:FondoeventoService , private _r2:Renderer2){
    this._fe.superobs$.pipe(
      map(resp => this.mapwp(resp)),
    ).subscribe(resp => {
      this._r2.setStyle(this.mipadrelet.nativeElement,"background-image",resp);
    });
  }

  /*
  constructor( private _fe:FondoeventoService , private _r:Renderer2){
    this._fe.superobs$.pipe(
      map(resp => this.mapwp(resp)),
    ).subscribe();
  }
  */

}
