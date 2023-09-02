import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendasPage } from './pages/vendas.page';
import { VendasRoutingModule } from './vendas.routing';

@NgModule({
  declarations: [VendasPage],
  imports: [CommonModule, VendasRoutingModule],
  providers: [],
})
export class VendasModule {}
