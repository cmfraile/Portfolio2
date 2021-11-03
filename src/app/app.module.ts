import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { RrssComponent } from './componentes/rrss/rrss.component';
import { PaneladminModule, routes as rutaspaneladmin } from './paneladmin/paneladmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { PeriodopipePipe } from './componentes/perfil/periodopipe.pipe';
import { MesespipePipe } from './src/app/componentes/perfil/mesespipe.pipe';
import { MesespiePipe } from './mesespie.pipe';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'trabajos',component:TrabajosComponent},
  {path:'rrss',component:RrssComponent},
  {path:'admin',children:rutaspaneladmin},
  {path:'**',redirectTo:'',pathMatch:'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavegacionComponent,
    PerfilComponent,
    TrabajosComponent,
    RrssComponent,
    PeriodopipePipe,
    MesespipePipe,
    MesespiePipe
  ],
  imports: [
    BrowserModule,
    PaneladminModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration:'top',
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
