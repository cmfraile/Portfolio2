import { Injectable } from '@angular/core';
import { UUID } from 'uuid-generator-ts';
import { trabajo } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  data:{about:string,datosinteres:string[],trabajos:trabajo[]} = {
    about:'Lorem ipsum tralali, tralala.',
    datosinteres:['Dato de prueba','Otro dato de prueba','El tercer dato de prueba'],
    trabajos:[
      {
        ID:UUID.createUUID(),
        foto:'https://picsum.photos/200',
        nombre:'Prueba1',
        descripcion:'Info de relleno',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
    ]
  }

  constructor() { }

}


