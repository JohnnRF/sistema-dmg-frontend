import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UVidaComponent } from './u-vida/u-vida.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  {
    path: 'u-vida',
    component: UVidaComponent 
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: '**', redirectTo: '/notfound'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanarRoutingModule { }
