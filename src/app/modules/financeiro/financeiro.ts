import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FinanceiroRoutingModule } from './financeiro.routing';
import { FinanceiroPage } from './pages/financeiro.page';

@NgModule({
  declarations: [FinanceiroPage],
  imports: [CommonModule, FinanceiroRoutingModule],
  providers: [],
})
export class FinanceiroModule {}
