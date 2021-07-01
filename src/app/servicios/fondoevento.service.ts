import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged , tap , map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FondoeventoService {

  sub$ = new BehaviorSubject<number>(document.documentElement.clientWidth);
  todo$ = this.sub$.pipe(
    map(resp => this.numerotest(resp)),
    distinctUntilChanged()
  );

  numerotest(arg:number){
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
    const prueba = () => {
      this.sub$.next(document.documentElement.clientWidth);
    }
    window.addEventListener("resize",prueba);
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
