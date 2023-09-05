import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColaboradoresRoutingModule } from './colaboradores.routing';
import { ColaboradoresPage } from './pages/colaboradores.page';
import { ComponentsModule } from '@app/shared/components/components/components.module';

@NgModule({
  declarations: [
    ColaboradoresPage
  ],
  imports: [
    ColaboradoresRoutingModule, 
    ComponentsModule,
  ],
  providers: [],
})
export class ColaboradoresModule {}
