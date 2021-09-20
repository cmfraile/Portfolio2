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
        foto:'https://i.picsum.photos/id/864/200/200.jpg?hmac=enPW23d2MpTvv2RfL7CtuO_cKSvCg4DGCYtNPc4-48M',
        nombre:'Prueba1',
        descripcion:'Info de relleno',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        foto:'https://i.picsum.photos/id/316/200/200.jpg?hmac=f0i62VkjVy8OPLP77Xf7mdZa3UBNlTOXFm9WpDMOiiA',
        nombre:'Prueba dos',
        descripcion:'Info de relleno para el segundo trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        foto:'https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ',
        nombre:'Prueba III',
        descripcion:'Descripción extraordinaria del tercer trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        foto:'https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ',
        nombre:'Prueba III',
        descripcion:'Descripción extraordinaria del tercer trabajo',
        anio:'2017-2018',
        autor:'Carlos Fraile',
        eap:'https://google.es'
      },
      {
        foto:'https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ',
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


