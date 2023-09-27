import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-procura-funcionario',
  templateUrl: './procura-funcionario.component.html',
  styleUrls: ['./procura-funcionario.component.scss']
})
export class ProcuraFuncionarioComponent {
  @Input() appModel: number;
  @Output() appModelChange = new EventEmitter<number>();
  alterouModel(value: number){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;
}
