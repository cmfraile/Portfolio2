import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenucambioService {

  // About , PerfilFormacion, PerfilExperiencia , PerfilDatos , Trabajos
  
  constructor(){}

  menuadmin$ = new Subject<string>();


}
