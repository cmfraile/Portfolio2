import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export const routes : Routes = [
  { path:'',component:MainComponent }
];


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class PaneladminModule { }
