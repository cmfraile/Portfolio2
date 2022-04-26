import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FondoService } from './servicios/fondo.service';
import { TraerdataService } from './servicios/traerdata.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit{
  
  title = 'portfolio2';
  adminav:boolean = false;
  urlimgconst = '../assets/img/fotos/' ; public bgobj:any;

  constructor(
    private _fs:FondoService,
    private _r:Router,
    public _td:TraerdataService
  ){

    this.bgobj = {
      ancho: (window.innerWidth >= 1120) ? true : false,
      foto: ''
    }

    this._fs.sub$.pipe(
     map((x:string) => {
       this.bgobj.ancho = (window.innerWidth >= 1120) ? true : false;
       (x == 'admin') ? this.adminav = true : this.adminav = false;
       let anadir = (!this.bgobj.ancho) ? "-sujeto.jpg" : ".jpg";

       //Aqui añadimos la carpinteria que hace el fondo estático:
       //x = "about"

       this.bgobj.foto = `${this.urlimgconst}${x}${anadir}`;
      })
   ).subscribe();

  }

  ngOnInit(){}

}
