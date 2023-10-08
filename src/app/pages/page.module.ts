import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { DadosEmpresaComponent } from './dados-empresa/dados-empresa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FolhaPagamentoComponent } from './folha-pagamento/folha-pagamento.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MaterialModule } from '@app/shared/material.module';
import { ListarColaboradoresComponent } from './listar-colaboradores/listar-colaboradores.component';
import { CpfPipe } from '@app/shared/pipe/cpf.pipe';
import { PipeModule } from '@app/shared/pipe/pipe.module';

@NgModule({
  declarations: [
    ColaboradoresComponent,
    DadosEmpresaComponent,
    DashboardComponent,
    FolhaPagamentoComponent,
    ListarColaboradoresComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    PipeModule,
  ],
  exports: [
    ColaboradoresComponent,
    DadosEmpresaComponent,
    DashboardComponent,
    FolhaPagamentoComponent,
    ListarColaboradoresComponent,
  ],
})
export class PageModule { }
