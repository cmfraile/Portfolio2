import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.sass']
})
export class LogadminComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({
      usuario:'',pass:''
    });
  }

  ngOnInit(): void {}

  loginada(){
    const {usuario,pass} = this.forma.value;
    if(usuario == "usuario" && pass == "usuario"){
      console.log("LOGIN correcto")
    } else {
      this.forma.reset();
    }
  }

}
