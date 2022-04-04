import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { FondoService } from 'src/app/servicios/fondo.service';
import { map , filter } from 'rxjs/operators';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.sass']
})
export class NavegacionComponent implements OnInit{
  
  aviso = () => {
    setTimeout(() => {
      this._fs.sub$.next(this._fs.desbarra(this._r.url));
    },5)
  }
  
  constructor(private _r:Router , private _fs:FondoService){
    let cambio = false;
    fromEvent(window,'resize').pipe(
      filter((x:any) => {
        if(cambio && window.innerWidth !>= 1120){cambio = !cambio ; return x};
        if(!cambio && window.innerWidth < 1120){cambio = !cambio ; return x};
      })
    ).subscribe(() => {this.aviso()})
  }

  ngOnInit(): void {this.aviso()}
  rutasubject(){this.aviso()}

}
