import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeartbeatService } from '../../servicios/heartbeat.service';
import { MenucambioService } from '../../servicios/menucambio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  desplieguemenu!:string;
  flagacceso!:boolean;
  anchomovil:boolean = (window.innerWidth <= 1000) ? false : true;
  
  constructor( private _mc:MenucambioService , private _hb:HeartbeatService ){
    this._mc.menuadmin$.subscribe(resp => this.desplieguemenu = resp);
    this.flagacceso = this._hb.latido();
    fromEvent(window,'resize').pipe(
      tap(resp => {
        let ancho:number = window.innerWidth;
        if(ancho <= 1000){this.anchomovil = false}else{this.anchomovil = true};
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

}