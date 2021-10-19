import { Injectable } from '@angular/core';
import { datamasterinterface } from '../interfaces/todainterfaz';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  constructor(){}

  data:datamasterinterface = {
    ntair:undefined,
    experiencia:undefined,
    formacion:undefined,
    trabajos:undefined
  }

}
