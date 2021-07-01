import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit , AfterViewInit {

  constructor( private _fe:FondoeventoService , private _cdr:ChangeDetectorRef ){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }

  ngAfterViewInit(){
    this._cdr.detectChanges();
  }

}
