import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { trabajo } from 'src/app/interfaces/todainterfaz';
import { TraerdataService } from 'src/app/servicios/traerdata.service';
import { ValidadoresService } from '../../servicios/validadores.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.sass']
})
export class TrabajosComponent implements OnInit {

  forma:FormGroup;
  trabajoseleccionado!:trabajo|undefined;
  quejadato:boolean = false;
  
  constructor( private _fb:FormBuilder , private _v:ValidadoresService , private _td:TraerdataService ){
    this.forma = this._fb.group({
      foto:[File,[Validators.required,_v.validaprueba()]],
      nombre:[null,[Validators.minLength(5),Validators.required]],
      descripcion:[null,[Validators.minLength(5),Validators.required]],
      estado:[null,[Validators.min(2000),Validators.required]],
      autor:[null,[Validators.minLength(5),Validators.required]],
      eap:[null,[Validators.minLength(5),Validators.required]]
    })
  }

  fotoput(input:HTMLInputElement){
    if(input.files == null){return};
    const fichero = input.files[0];
    this.forma.patchValue({foto:fichero});
  }

  formsave(){
    const { foto , nombre , descripcion , estado , autor , eap } = this.forma.value;
    const consulta:any = { foto,estado,descripcion,autor,
    proyecto:nombre,
    enlace:eap };
    let formulario = new FormData();
    for(let x in consulta){formulario.append(`${x}`,consulta[x])};
    this._td.trabajosPOST(formulario).subscribe(console.log);
  };

  formclean(){}

  formerase(){}
  
  /*
  formularioback(trabajo:trabajo){
    this.trabajoseleccionado = trabajo;
    let curro = this.trabajoseleccionado;
    this.forma.setValue(curro);
  }
  */

  ngOnInit(): void {}

}

/*
export declare interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
*/


