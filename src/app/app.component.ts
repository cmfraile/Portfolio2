import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FondoService } from './servicios/fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent{
  
  title = 'portfolio2';

  fondoclase:string = this._fs.desbarra(this._r.url);

  constructor(private _fs:FondoService,private _r:Router){
    this._fs.sub$.subscribe(resp => this.fondoclase = resp)
  }

}
