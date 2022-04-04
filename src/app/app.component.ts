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
      primera: true,
      antes: this.urlimgconst,
      despues: this.urlimgconst
    }
   
    this._fs.sub$.pipe(
     map((x:string) => {
       (x == 'admin') ? this.adminav = true : this.adminav = false;
       let anadir = (!this.bgobj.ancho) ? "-sujeto.jpg" : ".jpg";
       if(this.bgobj.primera){
         this.bgobj.primera = false;
         this.bgobj.antes = `${this.urlimgconst}${x}${anadir}` ;
         this.bgobj.despues = `${this.urlimgconst}${x}${anadir}` ;
        }else{
          this.bgobj.antes = this.bgobj.despues;
          this.bgobj.despues = `${this.urlimgconst}/${x}${anadir}`;
        }
      })
   ).subscribe();

   console.log(this.bgobj)

  }

  ngOnInit(){}

}
