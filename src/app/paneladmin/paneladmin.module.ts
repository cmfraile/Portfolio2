import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { NavadminComponent } from './componentes/navadmin/navadmin.component';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './componentes/about/about.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { PexperienciaComponent } from './componentes/pexperiencia/pexperiencia.component';
import { PformacionComponent } from './componentes/pformacion/pformacion.component';
import { PdatosdeinteresComponent } from './componentes/pdatosdeinteres/pdatosdeinteres.component';

export const routes : Routes = [
  { path:'',component:MainComponent }
];


@NgModule({
  declarations: [
    MainComponent,
    NavadminComponent,
    AboutComponent,
    TrabajosComponent,
    PexperienciaComponent,
    PformacionComponent,
    PdatosdeinteresComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class PaneladminModule { }
