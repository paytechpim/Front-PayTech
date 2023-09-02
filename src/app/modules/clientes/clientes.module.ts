import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientesRoutingModule } from './clientes.routing';
import { ClientesPage } from './pages/clientes.page';

@NgModule({
  declarations: [ClientesPage],
  imports: [CommonModule, ClientesRoutingModule],
  providers: [],
})
export class ClientesModule {}
