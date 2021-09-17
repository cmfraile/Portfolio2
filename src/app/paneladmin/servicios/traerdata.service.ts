import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  data:any = {
    about:'Lorem ipsum tralali, tralala.',
    datosinteres:['Dato de prueba','Otro dato de prueba','El tercer dato de prueba']
  }
  
  constructor() { }

}
