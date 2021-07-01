import { Component, OnInit } from '@angular/core';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  
  caso:number = 0;
  
  constructor( private _fe:FondoeventoService ){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }
  
}
