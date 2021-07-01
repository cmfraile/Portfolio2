import { ChangeDetectorRef, Component } from '@angular/core';
import { FondoeventoService } from './servicios/fondoevento.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'portfolio2';
  wallpapa!:string;
  
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

  constructor( private _fe:FondoeventoService){
    this._fe.superobs$.pipe(
      tap(resp => {
        this.wallpapa = this.mapwp(resp);
        console.log(this.mapwp(resp));
      })
    ).subscribe();
  }
}

/*
export class AppComponent {
  title = 'portfolio2';
  wallpapa!:string;
  constructor( private _fe:FondoeventoService ){
    const restest = (resp:[number,string]) => {
      let caso!:string;
      if(resp[0] >= 5){
        caso = "url(../assets/img/fototest.jpg)"
      } else {
        caso = "url(../assets/img/fototestsujeto.jpg)"
      }
      return caso;
    }
    this._fe.superobs$.pipe(
      tap(resp => this.wallpapa = restest(resp))
    ).subscribe()
  }
}
*/
