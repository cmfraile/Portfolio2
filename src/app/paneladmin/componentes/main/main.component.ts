import { Component, OnInit } from '@angular/core';
import { MenucambioService } from '../../servicios/menucambio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  desplieguemenu!:string;
  
  constructor( private _mc:MenucambioService ){
    this._mc.menuadmin$.subscribe(resp => this.desplieguemenu = resp);
  }

  ngOnInit(): void {
  }

}