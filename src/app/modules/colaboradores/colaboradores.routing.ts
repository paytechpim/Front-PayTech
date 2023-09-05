import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresPage } from './pages/colaboradores.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboradoresPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradoresRoutingModule {}
