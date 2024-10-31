import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolidarRoutingModule } from './consolidar-routing.module';
import { CapacitacionDestinoComponent } from './capacitacion-destino/capacitacion-destino.component';


@NgModule({
  declarations: [
    CapacitacionDestinoComponent
  ],
  imports: [
    CommonModule,
    ConsolidarRoutingModule
  ]
})
export class ConsolidarModule { }
