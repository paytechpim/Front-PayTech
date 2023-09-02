import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cpf-cnpj',
  templateUrl: './cpf-cnpj.component.html',
  styleUrls: ['./cpf-cnpj.component.scss']
})
export class CpfCnpjComponent {
  @Input() control = new FormControl();

  @Input() appModel: string = "";
  @Output() appModelChange = new EventEmitter<string>();
  alterouModel(value: string){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;
  @Input() appRequired: boolean = false;
}
