import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/components';
import { ADMIN_ROUTE_PREFIX } from './core/@support/constants/core.const';
import { ColaboradoresPage } from './modules/colaboradores/pages/colaboradores.page';
import { ProdutoPage } from './modules/produtos/pages/produto.page';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: ADMIN_ROUTE_PREFIX,
    component: CoreComponent,
    children: [
      {
        path: 'teste',
        component: ProdutoPage,
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@dashboard').then((m) => m.DashboardModule),
      },
      {
        path: 'produtos',
        loadChildren: () => import('@produtos').then((m) => m.ProdutosModule),
      },
      {
        path: 'colaboradores',
        loadChildren: () =>
          import('@colaboradores').then((m) => m.ColaboradoresModule),
      },
      {
        path: 'clientes',
        loadChildren: () => import('@clientes').then((m) => m.ClientesModule),
      },
      {
        path: 'vendas',
        loadChildren: () => import('@vendas').then((m) => m.VendasModule),
      },
      {
        path: 'financeiro',
        loadChildren: () =>
          import('@financeiro').then((m) => m.FinanceiroModule),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@landing').then((m) => m.LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
