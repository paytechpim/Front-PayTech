import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColaboradoresRoutingModule } from './colaboradores.routing';
import { ColaboradoresPage } from './pages/colaboradores.page';
import { ComponentsModule } from '@app/shared/components/components/components.module';
import { MaterialModule } from '@app/shared/components/material.module';

@NgModule({
  declarations: [
    ColaboradoresPage
  ],
  imports: [
    ColaboradoresRoutingModule, 
    ComponentsModule,
    MaterialModule,
  ],
  providers: [],
})
export class ColaboradoresModule {}
