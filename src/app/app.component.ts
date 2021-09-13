import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FondoService } from './servicios/fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  
  title = 'portfolio2';

  fondoclase:string = "";
  adminav:boolean = false;

  constructor(private _fs:FondoService,private _r:Router){
    //this._fs.sub$.subscribe(resp => this.fondoclase = resp);
    this._fs.sub$.subscribe(resp =>{
      this.fondoclase = resp;
      (resp == 'admin') ? this.adminav = true : this.adminav = false ;
    });
  }

  ngOnInit(){}

}
