import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { DadosEmpresaComponent } from './dados-empresa/dados-empresa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FolhaPagamentoComponent } from './folha-pagamento/folha-pagamento.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MaterialModule } from '@app/shared/material.module';



@NgModule({
  declarations: [
    ColaboradoresComponent,
    DadosEmpresaComponent,
    DashboardComponent,
    FolhaPagamentoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
  ],
  exports: [
    ColaboradoresComponent,
    DadosEmpresaComponent,
    DashboardComponent,
    FolhaPagamentoComponent,
  ],
})
export class PageModule { }
