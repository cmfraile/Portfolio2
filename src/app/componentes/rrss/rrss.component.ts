import { Component, OnInit } from '@angular/core';
import { FondoService } from 'src/app/servicios/fondo.service';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.sass']
})
export class RrssComponent implements OnInit{
  
  constructor( public _f:FondoService ){}

  ngOnInit(): void {}

}
