import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor(){}

  validaprueba():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null => {
      if(!control.value){return {sinfoto:true}}else{return null};
    }
  }

}
