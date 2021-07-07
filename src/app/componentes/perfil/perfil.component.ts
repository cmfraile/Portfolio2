import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FondoService } from 'src/app/servicios/fondo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit{

  constructor(private _r:Router , private _fs:FondoService){}

  ngOnInit(): void {}

}
