import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.sass']
})
export class RrssComponent implements OnInit , AfterViewInit {
  
  constructor( private _fe:FondoeventoService , private _cdr:ChangeDetectorRef ){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }

  ngAfterViewInit(){
    this._cdr.detectChanges();
  }

}
