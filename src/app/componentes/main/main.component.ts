import { Component, OnInit } from '@angular/core';
import { TraerdataService } from 'src/app/servicios/traerdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit{
  
  constructor(public _td:TraerdataService){}

  ngOnInit(): void {}
}
