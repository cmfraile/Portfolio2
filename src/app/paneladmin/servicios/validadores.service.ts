import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor(){}

  validaprueba():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null => {
      return null
    }
  }

}
