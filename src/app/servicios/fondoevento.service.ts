import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged , tap , map, combineAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FondoeventoService {

  //Observable de responsividad:
  subres$ = new BehaviorSubject<number>(document.documentElement.clientWidth);
  obsres$ = this.subres$.pipe(
    map(resp => this.resnumero(resp)),
    distinctUntilChanged()
  );
  //Observable de fondo:
  subwall$ = new BehaviorSubject<string>(window.location.pathname);

  //Conjunto:
  superobs$ = combineLatest([this.obsres$,this.subwall$]);

  resnumero(arg:number){
    let x:number = arg; let caso!:number;
    switch(true){
      case x >= 1120 : caso = 5 ; break ;
      case x <= 1120 && x >= 801 : caso = 4 ; break ;
      case x <= 800 && x >= 661 : caso = 3 ; break ;
      case x <= 660 && x >= 451 : caso = 2 ; break ;
      case x <= 450 : caso = 1 ; break ;
    }
    return caso;
  }
  
  constructor(){
    const prueba = () => {this.subres$.next(document.documentElement.clientWidth);}
    window.addEventListener("resize",prueba);
    this.superobs$.subscribe(console.log);
  }

  /*
  test$ = new Subject<number>();
  valor:number = 15;
  
  constructor(){
    this.test$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

  testeando(){
    console.log("Entra en la funcion")
    this.test$.next(20);
  }
  */

}
