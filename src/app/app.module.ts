import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './shared/components/components.module';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FolhaPagamentoComponent } from './pages/folha-pagamento/folha-pagamento.component';
import { DadosEmpresaComponent } from './pages/dados-empresa/dados-empresa.component';
import { PageModule } from './pages/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbModule,
    PageModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
