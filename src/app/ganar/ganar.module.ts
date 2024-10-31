import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanarRoutingModule } from './ganar-routing.module';
import { UVidaComponent } from './u-vida/u-vida.component';
import { NotasComponent } from './notas/notas.component';


@NgModule({
  declarations: [
    UVidaComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    GanarRoutingModule
  ]
})
export class GanarModule { }
