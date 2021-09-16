import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { NavadminComponent } from './componentes/navadmin/navadmin.component';
import {MatButtonModule} from '@angular/material/button';

export const routes : Routes = [
  { path:'',component:MainComponent }
];


@NgModule({
  declarations: [
    MainComponent,
    NavadminComponent
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
