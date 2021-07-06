import { Component, OnInit, Renderer2} from '@angular/core';
import { FondoeventoService } from 'src/app/servicios/fondoevento.service';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.sass']
})
export class RrssComponent implements OnInit{
  
  constructor( private _fe:FondoeventoService , private _r2:Renderer2){}

  ngOnInit(): void {
    this._fe.subwall$.next(window.location.pathname);
  }

}
