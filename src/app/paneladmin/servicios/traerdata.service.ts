import { Injectable } from '@angular/core';
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
        ID:0,
        foto:'https://picsum.photos/200',
        nombre:'Prueba1',
        descripcion:'Info de relleno',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        ID:1,
        foto:'https://picsum.photos/200',
        nombre:'Prueba dos',
        descripcion:'Info de relleno para el segundo trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        ID:2,
        foto:'https://picsum.photos/200',
        nombre:'Prueba III',
        descripcion:'Descripción extraordinaria del tercer trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        ID:3,
        foto:'https://picsum.photos/200',
        nombre:'Prueba III',
        descripcion:'Descripción extraordinaria del tercer trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        ID:4,
        foto:'https://picsum.photos/200',
        nombre:'Prueba III',
        descripcion:'Descripción extraordinaria del tercer trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
    ]
  }

  constructor() { }

}


