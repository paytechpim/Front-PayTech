import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ProdutoPage } from './pages/produto.page';
import { ProdutosRoutingModule } from './produtos.routing';
import { SharedModule } from '@app/shared';
import { ComponentsModule } from '@app/shared/components/components/components.module';

@NgModule({
  declarations: [
    ProdutoPage,
  ],
  imports: [
    ProdutosRoutingModule,
    ComponentsModule,
  ],
  providers: [],
})
export class ProdutosModule {}
