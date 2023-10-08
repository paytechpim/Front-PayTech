import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/components';
import { ADMIN_ROUTE_PREFIX } from './core/@support/constants/core.const';
import { AuthGuard } from './core/authentication/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { FolhaPagamentoComponent } from './pages/folha-pagamento/folha-pagamento.component';
import { DadosEmpresaComponent } from './pages/dados-empresa/dados-empresa.component';
import { ListarColaboradoresComponent } from './pages/listar-colaboradores/listar-colaboradores.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: ADMIN_ROUTE_PREFIX,
    canActivate: [AuthGuard],
    component: CoreComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'colaboradores',
        component: ColaboradoresComponent,
      },
      {
        path: 'colaboradores/:colaborador',
        component: ColaboradoresComponent,
      },
      {
        path: 'listar-colaboradores',
        component: ListarColaboradoresComponent,
      },
      {
        path: 'folha-pagamento',
        component: FolhaPagamentoComponent,
      },
      {
        path: 'dados-empresa',
        component: DadosEmpresaComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
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
