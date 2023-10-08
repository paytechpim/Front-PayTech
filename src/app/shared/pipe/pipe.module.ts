import { NgModule } from '@angular/core';
import { CpfPipe } from './cpf.pipe';
import { SqldataPipe } from './sqldata.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    SqldataPipe,
    ],
  imports: [
    ],
  exports: [
    CpfPipe,
    SqldataPipe,
    ],
})
export class PipeModule { }
