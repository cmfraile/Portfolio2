import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondoService {

  constructor(private _r:Router){}

  sub$ = new Subject<string>();

  desbarra(cadena:string){
    let caso!:string;
    if(cadena == "/"){caso = "about"} else {caso = cadena.replace(/[/]/gi,'')};
    this.degradarnext();
    return caso;
  }

  degradarcontador = 0;
  degradarnext = () => {
    this.degradarcontador = 0
    const intervalo = setInterval(() => {
      this.degradarcontador+=0.01
      if(this.degradarcontador >= 1){clearInterval(intervalo)}
    },4)
  }

}
