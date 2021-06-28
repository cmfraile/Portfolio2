import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'trabajos',component:TrabajosComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavegacionComponent,
    PerfilComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
