import { Component } from '@angular/core';
import { FondoeventoService } from './servicios/fondoevento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent{
  
  title = 'portfolio2';

  constructor( private _fe:FondoeventoService){
    //this._fe.superobs$.subscribe(resp => this.test = this.mapwp(resp))
  }

  /*
  mapwp(resp:[number,string]){
    let caso:string = "url(../assets/img/fotos/";
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
    caso += ".jpg);";
    return caso;
    }
    */

    test(){
      return "url(../assets/img/fotos/dragon.jpg)"
    }

  }
