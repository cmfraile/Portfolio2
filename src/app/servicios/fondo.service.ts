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
    return caso;
  }
  
}
