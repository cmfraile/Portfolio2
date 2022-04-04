import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { FondoService } from 'src/app/servicios/fondo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.sass']
})
export class NavegacionComponent implements OnInit{
  
  cambio = false
  
  constructor(private _r:Router , private _fs:FondoService){
    fromEvent(window,'resize').pipe(
      map((x:any) => {
        if(!this.cambio){this.cambio = true ; return x}
      })
    ).subscribe(() => {console.log("WHACK")})
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._fs.sub$.next(this._fs.desbarra(this._r.url));
    },5)
  }

  rutasubject(){
    setTimeout(() => {
      this._fs.sub$.next(this._fs.desbarra(this._r.url));
    },5);
  }

}
