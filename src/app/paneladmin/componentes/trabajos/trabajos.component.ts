import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { trabajo } from '../../interfaces';
import { ValidadoresService } from '../../servicios/validadores.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajoseleccionado!:trabajo|undefined;
  
  constructor( private _fb:FormBuilder , private _v:ValidadoresService ){
    this.forma = this._fb.group({
      foto:[File,[_v.validaprueba,Validators.required]],
      nombre:['',[Validators.minLength(5),Validators.required]],
      descripcion:['',[Validators.minLength(5),Validators.required]],
      anio:[Number,[Validators.min(2000),Validators.required]],
      autor:['',[Validators.minLength(5),Validators.required]],
      eap:['',[Validators.minLength(5),Validators.required]]
    })
  }

  fotoput(input:HTMLInputElement){
    if(input.files == null){return};
    this.forma.controls.foto.setValue(input.files[0]);
  }

  formsave(){
    console.log(this.forma.errors);
  };

  formclean(){
    this.forma.reset();
    this.trabajoseleccionado = undefined;
  }

  formerase(){
    console.log("funarse ITEM")
  }
  
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let curro = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }

  ngOnInit(): void {}

}

/*
export declare interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
*/


