import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
