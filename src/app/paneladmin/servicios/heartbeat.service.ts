import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatService {

  constructor(){}

  latido(){
    let caso = false
    const token:any = sessionStorage.getItem('token');
    const expstring:any = sessionStorage.getItem('expiracion');
    if(token == null || expstring == null){caso = false};
    const expiracion = new Date(expstring);const presente = new Date();
    if(presente>expiracion){caso = false}else{caso = true};
    if(caso = false){sessionStorage.clear();window.location.reload();return caso}else{return caso};
  }

}
