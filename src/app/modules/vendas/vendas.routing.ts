import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasPage } from './pages/vendas.page';

const routes: Routes = [
  {
    path: '',
    component: VendasPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
