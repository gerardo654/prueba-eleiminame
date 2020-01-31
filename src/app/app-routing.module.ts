import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { OtroComponent } from './otro/otro.component';


const routes: Routes = [
  {path: 'prueba', component: PruebaComponent},
  {path: 'otro', component: OtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
