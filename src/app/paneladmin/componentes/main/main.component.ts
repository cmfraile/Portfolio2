import { Component, OnInit } from '@angular/core';
import { HeartbeatService } from '../../servicios/heartbeat.service';
import { MenucambioService } from '../../servicios/menucambio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  desplieguemenu!:string;
  flagacceso:boolean = false;
  
  constructor( private _mc:MenucambioService , private _hb:HeartbeatService ){
    this._mc.menuadmin$.subscribe(resp => this.desplieguemenu = resp);
    this.flagacceso = this._hb.latido();
  }

  ngOnInit(): void {
  }

}