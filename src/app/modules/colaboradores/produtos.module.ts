import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColaboradoresRoutingModule } from './colaboradores.routing';
import { ColaboradoresPage } from './pages/produto.page';

@NgModule({
  declarations: [ColaboradoresPage],
  imports: [CommonModule, ColaboradoresRoutingModule],
  providers: [],
})
export class ColaboradoresModule {}
