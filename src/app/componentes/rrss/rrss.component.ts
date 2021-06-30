import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.sass']
})
export class RrssComponent implements OnInit {

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

}
