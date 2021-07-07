import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FondoService } from 'src/app/servicios/fondo.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.sass']
})
export class NavegacionComponent implements OnInit{

  constructor(private _r:Router , private _fs:FondoService){}

  ngOnInit(): void {
    //this._fs.sub$.next(this._fs.desbarra(this._r.url));
  }

  rutasubject(){
    setTimeout(() => {
      this._fs.sub$.next(this._fs.desbarra(this._r.url));
    },10);
  }

}
